
const fs = require('fs');
const filePath = './data/reminder/reminder_events.json';

//hours to add to London timezone (Berlin = 1)
const timezone = 0

var callback;

var events = [];

//this should be called at the startup of node.js program
//it returns a string with info about the missed events
function load(){
    
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        //console.log(data);
        events = JSON.parse(data)

        var date = new Date();
        date.addHours(timezone);
        var missedEvents = "Missed reminder events: \n"

        for (e in events){
            if (new Date(events[e].date) > date){
                setTimeout(remind, new Date(events[e].date) - date, events[e])
            }
            else{
                missedEvents += `-> missed at ${events[e].date}: ${events[e].message}\n`
                events.splice(e,1);
                fs.writeFile(filePath, JSON.stringify(events), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                });
                e -= 1;
            }
        }

        //console.log(set("12345", ["tm", "12:00"], "tm 12:00 Mal gucken obs klappt!", function(eve){console.log(eve)}))
        console.log(missedEvents);
      });
}

function event(usernum, date, message){
    this.usernum = usernum
    this.date = date
    this.message = message
}

//function to set a new timer
function set(usernum, args, value, callbackFunc){

    callback = callbackFunc

    //variable will have current date stored when initialized
    var date = new Date();
    date.addHours(timezone);

    let setTime = (hours, minutes) => {
        date.setHours(hours);
        date.setMinutes(minutes);
    }

    switch(args[0]){
        case 'today':
        case 'td':
            try{
                setTime(Number(args[1].split(':')[0] ), Number(args[1].split(':')[1]))
                eve = new event(usernum, date, value.substr(args[0].length) + args[1].length + 2)
                events.push(eve)
            }
            catch (e){
                throw("Invalid Syntax");
            }
            break
        case 'tm':
        case 'tomorrow':
            try{
                date.addDays(1);
                setTime(Number(args[1].split(':')[0]) , Number(args[1].split(':')[1]))
                eve = new event(usernum, date, value.substr(args[0].length + args[1].length + 2))
                events.push(eve)
            }
            catch (e){
                throw("Invalid Syntax");
            }
            break
        case 'later':
            try{
                //reminder will be set to two hours later
                date.addHours(2);
                eve = new event(usernum, date, value.substr(args[0].length + 1))
                events.push(eve)
            }
            catch (e){
                throw("Invalid Syntax");
            }
            break
        case 'in':
            try{
                // <hours>:<minutes>
                date.addHours(Number(args[1].split(':')[0]));
                date.addMinutes(Number(args[1].split(':')[1]));
                eve = new event(usernum, date, value.substr(args[0].length + args[1].length + 2))
                events.push(eve)
            }
            catch (e){
                throw("Invalid Syntax");
            }
            break
        case 'next':
            break
        case '*':
            throw ("Invalid Syntax")
    }

    //save new event to file
    fs.writeFile(filePath, JSON.stringify(events), function (err) {
        if (err) {
            return console.log(err);
        }
    });
    
    //set the timer for the new event
    setTimeout(remind, date - new Date(), eve);
    
    return `Event sucessfully set! You will be reminded at ${date.toString()}`
}

function remind(e){
    callback(e)
    events.splice(events.indexOf(e),1);
    fs.writeFile(filePath, JSON.stringify(events), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}


//Add functionality to javascripts 'Date' class
Date.prototype.addDays = function (units) {
    this.setDate(this.getDate() + units);
    return this;
}
Date.prototype.addMonths = function (units) {
    this.setMonth(this.getMonth() + units);
    return this;
}
Date.prototype.addHours = function (units) {
    this.setHours(this.getHours() + units);
    return this;
}
Date.prototype.addMinutes = function (units) {
    this.setMinutes(this.getMinutes() + units);
    return this;
}

module.exports = {set, load}

