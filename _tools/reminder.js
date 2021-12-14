//--
const up = JSON.parse(fs.readFileSync('./data/bot/setting.json'));
const prefix = up.prefix
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)

const fs = require('fs');
const { success } = require('../fs/functions');
const filePath = '../data/reminder/reminder_events.json';

//hours to add to London timezone (Berlin = 1)
const timezone = 1

var callback;

var events;

//this should be called at the startup of node.js program
function load(callbackFunc){

    callback = callbackFunc;

    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        //console.log(data);
        events = JSON.parse(data)

        var date = new Date();
        date.addHours(timezone);
        var missedEvents = "Missed reminder events: \n"

        for (event in events){
            if (event.date > date){
                setTimeout(remind, event.date - date)
            }
            else{
                missedEvents += `-> missed at ${event.date.toString()}: ${event.message}\n`
            }
            return missedEvents;
        }
      });
}

function event(usernum, date, message){
    this.usernum = usernum
    this.date = date
    this.message = message
}

//function to set a new timer
function set(usernum, args, value){

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
            setTime(Number(args[1].split(':')[0] ), Number(args[1].split(':')[1]))
            events.push(new event(usernum, date, value.substr(args[0].length) + args[1].length + 2))
            break
        case 'tm':
        case 'tomorrow':
            date.addDays(1);
            setTime(Number(args[1].split(':')[0]) , Number(args[1].split(':')[1]))
            events.push(new event(usernum, date, value.substr(args[0].length + args[1].length + 2)))
            break
        case 'later':
            //reminder will be set to two hours later
            date.addHours(2);
            events.push(new event(usernum, date, value.substr(args[0].length + 1)))
            break
        case 'in':
            // <hours>:<minutes>
            date.addHours(Number(args[1].split(':')[0]));
            date.addMinutes(Number(args[1].split(':')[1]));
            events.push(new event(usernum, date, value.substr(args[0].length + args[1].length + 2)))
            break
        case 'next':
            break
    }

    //save changes to file
    fs.writeFile(filePath, JSON.stringify(events), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The new event was saved to file!");
    });

    //set timer for next event
    setTimeout(remind, date - new Date());

    return `Event sucessfully set! You will be reminded at ${date.toString()}`
}

function remind(event){
    callback(event)
    events.splice(events.indexOf(event),1);
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


/** 
date.prototype.addDays = function (date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
date.prototype.addMonths = function (date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}
date.prototype.addHours = function (date, hours) {
    var result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
}
date.prototype.addMinutes = function (date, minutes) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
}*/
