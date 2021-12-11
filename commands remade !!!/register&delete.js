//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//--- verify and register
case 'verify':
case 'daftar':
case 'registrieren':
case 'register':

				if (isVerify) return reply('✅ 𝑌𝑜𝑢 𝑎𝑟𝑒 𝑎𝑙𝑟𝑒𝑎𝑑𝑦 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑒𝑑.') 
				if (args.length < 1) return reply(`☑️  𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛\n𝐵𝑦 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑖𝑛𝑔 𝑦𝑜𝑢 𝑎𝑔𝑟𝑒𝑒 𝑡𝑜 𝑡ℎ𝑒 𝑏𝑜𝑡𝑠 𝑇𝑜𝑆. 𝑉𝑖𝑒𝑤 𝑡ℎ𝑒𝑚 𝑏𝑦 𝑠𝑒𝑛𝑑𝑖𝑛𝑔 𝑡ℎ𝑒 𝑒𝑚𝑜𝑗𝑖𝑒 » ✉️ «\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nℹ️ 𝐻𝑜𝑤 𝑡𝑜 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟\n.𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟 𝑆𝑡𝑎𝑟`)
			    if (args.length > 1) return reply(`☑️  𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nℹ️ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑜𝑛𝑙𝑦 𝑢𝑠𝑒 𝑜𝑛𝑒 𝑛𝑎𝑚𝑒. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒 𝑔𝑖𝑣𝑒𝑛: .𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟 𝑆𝑡𝑎𝑟`) 
			
                        function kyun(seconds){
                        function pad(s){
                            return (s < 10 ? '0' : '') + s;
                        }
                        var hours = Math.floor(seconds / (60*60));
                        var minutes = Math.floor(seconds % (60*60) / 60);
                        var seconds = Math.floor(seconds % 60);

                        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
                        }
                        function tanggal(){
                        myMonths = ["Jan","Feb","March","April","May","June","July","August","Sept","Octob","Nov","Dec"];
                                    myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                                    var tgl = new Date();
                                    var day = tgl.getDate()
                                    bulan = tgl.getMonth()
                                    var thisDay = tgl.getDay(),
                                    thisDay = myDays[thisDay];
                                    var yy = tgl.getYear()
                                    var year = (yy < 1000) ? yy + 1900 : yy;
                                    return `${day}. ${myMonths[bulan]} ${year}`
                        }	
            //-- Save that person registered          		
            _user.push(sender)
			fs.writeFileSync('./data/bot/user.json', JSON.stringify(_user))

			//-- Registered message
			capt = `𝑆𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑒𝑑 ✅\n*${pushname}* 𝑐ℎ𝑒𝑐𝑘 𝑦𝑜𝑢𝑟 𝑎𝑐𝑐𝑜𝑢𝑛𝑡 𝑤𝑖𝑡ℎ » .𝑚𝑒`
			Lxa.sendMessage(from, capt, text, {quoted: mek})

            //-- Create Files for user with random id
            const userid = Math.floor(Math.random() * 10000000)
									
                fs.appendFile(`./data/users/${sender.split("@")[0]}/money.json`, `["100"]`, function (err) {				
                if (err) throw err;
                console.log('Money Opend.'); 
                });		
                fs.appendFile(`./data/users/${sender.split("@")[0]}/xp.json`, `["0"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/status.json`, `["farmer"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/stickerpack.json`, `["${pushname}"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/pushname.json`, `["${pushname}"]`, function (err) {				
                if (err) throw err;
                });		
                fs.appendFile(`./data/users/${sender.split("@")[0]}/username.json`, `["${args[0]}"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/age.json`, `[".myage"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/emojie.json`, `[".myemojie"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/id.json`, `["${userid}"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/design.json`, `["⌥"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/email.json`, `[".myemail"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/version.json`, `["1.0"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/password.json`, `[]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/songs.json`, `["Downloaded songs:"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/pictures.json`, `["Downloaded pictures:"]`, function (err) {				
                if (err) throw err;
                });	    
                fs.appendFile(`./data/users/${sender.split("@")[0]}/userhit.json`, `[{"totalcmd":0}]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/messages.json`, `[]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/messagesnumber.json`, `["0"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/userhit.json`, `[{"totalcmd":0}]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/location.json`, `["North pole"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/accdate.json`, `["${tanggal()}"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/claim.json`, `["notset"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/bday.json`, `["notset"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/tickets.json`, `["10"]`, function (err) {				
                if (err) throw err;
                });						
			    break
                fs.appendFile(`./data/users/${sender.split("@")[0]}/mood.json`, `["Happy"]`, function (err) {				
                if (err) throw err;
                });						
			    break
//--- Delete account message
case 'deletemyaccount':
case 'deleteaccount':

    if (!isVerify) return reply(userB())
        
    reply('❌ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑎𝑑.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐵𝑦 𝑑𝑒𝑙𝑒𝑡𝑖𝑛𝑔 𝑦𝑜𝑢𝑟 𝑎𝑐𝑐𝑜𝑢𝑛𝑡 - 𝑎𝑙𝑙 𝑦𝑜𝑢𝑟 𝑑𝑎𝑡𝑎 𝑤𝑖𝑙𝑙 𝑏𝑒 𝑑𝑒𝑙𝑒𝑡𝑒𝑑 𝑓𝑜𝑟𝑒𝑣𝑒𝑟. 𝑀𝑜𝑛𝑒𝑦, 𝑋𝑝, 𝑁𝑎𝑚𝑒 𝑒𝑡𝑐 𝑎𝑙𝑙 𝑔𝑜𝑛𝑒. 𝐼𝑓 𝑦𝑜𝑢 𝑎𝑟𝑒 𝑠𝑢𝑟𝑒 𝑎𝑏𝑜𝑢𝑡 𝑦𝑜𝑢𝑟 𝑑𝑒𝑐𝑖𝑠𝑠𝑖𝑜𝑛, 𝑝𝑙𝑒𝑎𝑠𝑒 𝑡𝑦𝑝𝑒 .𝑖𝑎𝑚𝑠𝑢𝑟𝑒')

break            

//--- Delete account
case 'iamsure':

	if (!isVerify) return reply(userB())
				
            //-- Delete from registered file

			fs.readFile(`./data/bot/user.json`, 'utf-8', function(err, data) {
				if (err) throw err;				
				var newValue = data.replace(`${sender}`, `DeletedAccount`);				
				fs.writeFile(`./data/bot/user.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Account Deleted!');
				})
			})	

            //-- Delete all Files of user
            exec (`rm -rf data/users/${sender.split("@")[0]}`)
            reply('☑️ 𝑌𝑜𝑢𝑟 𝑎𝑐𝑐𝑜𝑢𝑛𝑡 𝑤𝑎𝑠 𝑑𝑒𝑙𝑒𝑡𝑒𝑑.')			
	break   
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//    