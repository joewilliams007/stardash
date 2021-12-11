//--- Pet	

case 'buypet':
		

const _yourcashpetshop = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const yourcashpetshop = _yourcashpetshop[7]	//--- money	
const petshopdesign = _yourcashpetshop[11]	//--- account design

if (args[0] == 'elf') return reply ("Please use capital E, .buypet Elf")
	
		if (yourcashpetshop < 100) return reply(`﹝You have not enough money to buy a pet. 𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 100$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${yourcashpetshop}$﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`) 
		if (args.length < 1) return reply(`${petshopdesign}﹝𝙴𝚗𝚝𝚎𝚛 the Pet. You can choose between Umbreon, Dragon and Elf!﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample: .buypet Elf\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)
		if (args.length > 1) return reply(`${petshopdesign}﹝𝙴𝚗𝚝𝚎𝚛 valid Pet. You can choose between Umbreon, Dragon and Elf!﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample: .buypet Elf\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)
			
let petshoplivemoney = Number(yourcashpetshop);
let petshoppetcost = Number(100);
let newpetshop = petshoplivemoney - petshoppetcost;  

fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
			if (err) throw err;
				
			var newValue = data.replace(`${yourcashpetshop}`, newpetshop);
			
			fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
				console.log('Done!');
			})
		})
													
							const delaypetshop = ms => new Promise(resolve => setTimeout(resolve, ms))
							await delaypetshop(1000) /// waiting 1 second.					
																			
				const _changedesignmoneypetshop = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const changedesignmoneypetshop = _changedesignmoneypetshop[7]	//--- money	

				  if (!isVerify) return reply(userB())
				  const tipppetshop = _tipps[Math.floor(Math.random() * _tipps.length)]
			  
			reply(`${petshopdesign}﹝Finding a pet for you 1/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${changedesignmoneypetshop}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)


exec (`rm -rf data/pets/${sender.split("@")[0]}`)

exec (`mkdir data/pets/${sender.split("@")[0]}`)

								const petbuydelay = ms => new Promise(resolve => setTimeout(resolve, ms))
								await petbuydelay(1000) /// waiting 1 second.

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
myMonths = ["January","February","März","April","May","June","Juliy","August","September","October","November","December"];
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

			const shiny = _shiny[Math.floor(Math.random() * _shiny.length)]
			
				//-- Every type starts with this
				let hunger = Number(10);
				let health = Number(100);
				let power = Number(1);
				let level = Number(1);
				let stage = Number(1);
				let xp = Number(0);
				let changepet = 'no';
				let friends = '';
				let name = 'Wild';
				let petmood = ':)';
				let status = 'alive';	
				let fight = 'off';
				
				let previousowner = `${sender.split("@")[0]}`
				let birthday = tanggal();
				let isshiny = shiny;
     			let cloth1 = 'None';
				let cloth2 = 'None';
				let cloth3 = 'None';
				let cloth4 = 'None';
				
				let cooldown = Number(1);
				let energy = Number(10);		
				
				let weapon = 'None';
	
				
				let emptytype1 = Number(0);
				let emptytype2 = Number(0);
				let emptytype3 = Number(0);
				let emptytype4 = Number(0);
				let emptytype5 = Number(0);
				let emptytype6 = Number(0);	

				let powertype1 = 'sleep';
				let powertype2 = 'explore';				
			


if (args[0] == 'elf') {	

				//-- Different with any pet type

				let pettype = 'Elf';	
				let evolution1 = 'ElfEgg';	
				let evolution2 = 'ElfKid';
				let evolution3 = 'Elf';
				let evolution4 = 'UltraElf';
				
				let powertype3 = 'heal';
				let powertype4 = 'ultraheal';				
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Elf which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Elf is a very powerfull being. It can use magic dust which heals herself or a pet from a friend! This capibility can be used by the skill .heal';	
				let powertypeinfo4 = 'The Ultra Elf has the skill .megaheal , which lets her steal a huge amount of health from others and gains it for herself. She can also heal other pets with the skill .heal';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Elf which is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'Flying through the woods, bringing light, where darkness lies and keeping good relations with others makes the Elf a special creature that should be taken off very good.';	
				let abouttypeinfo4 = 'The Ultra Elf. The Queen of StarDashia!';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
					
}  

if (args[0] == 'Elf') {	

				//-- Different with any pet type

				let pettype = 'Elf';	
				let evolution1 = 'ElfEgg';	
				let evolution2 = 'ElfKid';
				let evolution3 = 'Elf';
				let evolution4 = 'UltraElf';
				
				let powertype3 = 'heal';
				let powertype4 = 'ultraheal';				
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Elf which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Elf is a very powerfull being. It can use magic dust which heals herself or a pet from a friend! This capibility can be used by the skill .heal';	
				let powertypeinfo4 = 'The Ultra Elf has the skill .megaheal , which lets her steal a huge amount of health from others and gains it for herself. She can also heal other pets with the skill .heal';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Elf which is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'Flying through the woods, bringing light, where darkness lies and keeping good relations with others makes the Elf a special creature that should be taken off very good.';	
				let abouttypeinfo4 = 'The Ultra Elf. The Queen of StarDashia!';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
				
}  
  
else if (args[0] == 'dragon') {	

				//-- Different with any pet type

				let pettype = 'Dragon';					
				let evolution1 = 'DragonEgg';	
				let evolution2 = 'DragonKid';
				let evolution3 = 'Dragon';
				let evolution4 = 'UltraDragon';		
				
				let powertype3 = 'burn';
				let powertype4 = 'laserburn';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small baby dragon which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Dragon can damage other Pets with its fire by burning them with the skill .burn , it can damage other even when they have Fight turned off!';					
				let powertypeinfo4 = 'The ultra Dragon is very powerfull and he will not fear in using his ultraattack, .laserburn he can use it against others, even if their fight is off! It also reduces their money';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Dragon kid is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Dragon. Feared to death.';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'Dragon') {	

				//-- Different with any pet type

				let pettype = 'Dragon';					
				let evolution1 = 'DragonEgg';	
				let evolution2 = 'DragonKid';
				let evolution3 = 'Dragon';
				let evolution4 = 'UltraDragon';		
				
				let powertype3 = 'burn';
				let powertype4 = 'laserburn';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make it sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small baby dragon which is always finding out new features. It can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Dragon can damage other Pets with its fire by burning them with the skill .burn , it can damage other even when they have Fight turned off!';					
				let powertypeinfo4 = 'The ultra Dragon is very powerfull and he will not fear in using his ultraattack, .laserburn he can use it against others, even if their fight is off! It also reduces their money';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep him warm and feed it milk!';
				let abouttypeinfo2 = 'The Dragon kid is always looking arround, exploring new things and is always happy to go out and see the world.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Dragon. Feared to death.';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'umbreon') {	

				//-- Different with any pet type

				let pettype = 'Umbreon';					
				let evolution1 = 'EveeEgg';	
				let evolution2 = 'Evee';
				let evolution3 = 'Leafeon';
				let evolution4 = 'Umbreon';	
								
				let powertype3 = 'leaf';
				let powertype4 = 'bite';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make him sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Evee which is always finding out new features. He can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Leafeon can spread his leafs with the skill .leaf , it can change the design of other users menu!';					
				let powertypeinfo4 = 'The ultra Nachteon is very shy and only comes out at nighttime, but that doesnt mean he isnt very powerfull. his ultraattack can Bite other pets and make them loose Xp!';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep it warm and feed it milk!';
				let abouttypeinfo2 = 'The cute and perfect Evee. It is amazingly cute and you can die from cuteness by it.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Umbreon. Feared to death.';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
				
  if (err) throw err;
  
			})

  console.log('Pet Account Opend.');
	
				
}

else if (args[0] == 'Umbreon') {	

				//-- Different with any pet type

				let pettype = 'Umbreon';					
				let evolution1 = 'EveeEgg';	
				let evolution2 = 'Evee';
				let evolution3 = 'Leafeon';
				let evolution4 = 'Umbreon';	
								
				let powertype3 = 'leaf';
				let powertype4 = 'bite';	
				
				let powertypeinfo1 = 'Just an egg sleeping. Make him sleep harder with its skill .sleep';
				let powertypeinfo2 = 'A small Evee which is always finding out new features. He can gain Xp by the skill .explore , Dont let him annoy you though!';					
				let powertypeinfo3 = 'The Leafeon can spread his leafs with the skill .leaf , it can change the design of other users menu!';					
				let powertypeinfo4 = 'The ultra Nachteon is very shy and only comes out at nighttime, but that doesnt mean he isnt very powerfull. his ultraattack can Bite other pets and make them loose Xp!';	
				
				let abouttypeinfo1 = 'Just a cute egg. Keep it warm and feed it milk!';
				let abouttypeinfo2 = 'The cute and perfect Evee. It is amazingly cute and you can die from cuteness by it.';
				let abouttypeinfo3 = 'One of the strongest pets out there! Burning and destroying others, everyone fears the Dragon.';
				let abouttypeinfo4 = 'The Ultra Umbreon. Feared to death.';
				
							fs.appendFile(`./data/pets/${sender.split("@")[0]}/pet.json`, `["${pettype}", "${stage}", "${hunger}", "${level}", "${xp}", "${changepet}", 
"${friends}", "${name}", "${petmood}", "${status}", "${previousowner}", "${birthday}", "${isshiny}", 
"${cloth1}", "${cloth2}", "${cloth3}", "${cloth4}",
"${cooldown}", "${energy}", "${weapon}", 
"${powertype1}", "${powertype2}", "${powertype3}", "${powertype4}", 
"${powertypeinfo1}", "${powertypeinfo2}", "${powertypeinfo3}", "${powertypeinfo4}", 
"${abouttypeinfo1}", "${abouttypeinfo2}", "${abouttypeinfo3}", "${abouttypeinfo4}",
"${emptytype1}", "${emptytype2}", "${emptytype3}", "${emptytype4}", "${emptytype5}", "${emptytype6}", "${health}", "${power}", "${evolution1}", "${evolution2}", "${evolution3}", "${evolution4}", "${fight}"]`, function (err) {
	if (err) throw err;
  
})

console.log('Pet Account Opend.');
				
}

 else {
	
			reply (`⚠️ This pet doesnt exist. Please choose one from the .petshop\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n*YOU CANT GET YOUR MONEY BACK!!* , because i am too lazy to code this. Please type like the example: .buypet dragon\nIGNORE THE NEXT MESSAGE YOU  DIDNT GET AN EGG\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n💟 StarDash Pets`)		
}

					const delaymakepet = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delaymakepet(5000) /// waiting 5 second

			reply(`${petshopdesign}﹝Found a ${args[0]} Egg! 2/2﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_For now he is still an Egg, but i guess you cant wait until it hatches!_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_Tipp: Please take good care of your new pet. You can view his profile by the command *.mypet* . If you dont take good care of him, he will die._\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)

						
								
							
					_Haspet.push(sender)
			fs.writeFileSync('./data/haspet.json', JSON.stringify(_Haspet))

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/stage.json`, `["${stage}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, `["${hunger}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/level.json`, `["${level}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/xp.json`, `["${xp}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/cooldown.json`, `["${cooldown}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/energy.json`, `["${energy}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/health.json`, `["${health}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/power.json`, `["${power}"]`, function (err) {
				
				if (err) throw err;
		  
			})

			fs.appendFile(`./data/pets/${sender.split("@")[0]}/fight.json`, `["${fight}"]`, function (err) {
				
				if (err) throw err;
		  
			})
		
break

//--- Your Pet		
			
case 'mypet':
case 'pet':
case 'elf':
case 'dragon':
case 'umbreon':
		
		if (!isVerify) return reply(userB())
		if (!isHaspet) return reply(userP())
			
// -- Pet 
	const _myaccountpet = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	const mypetdesign = _myaccountpet[11];			//--- account design
	
	
const _pet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/pet.json`));

const mypettype = _pet[0]; 				//--- type

const _stagemypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/stage.json`));
const mypetstage = _stagemypet[0];	

const _hungermypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/hunger.json`));	
const mypethunger = _hungermypet[0];

const _levelmypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/level.json`));	
const mypetlevel = _levelmypet[0];

const _xpmypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/xp.json`));	
const mypetxp = _xpmypet[0];

const mypetchangepet = _pet[5];			//--- changepet

const mypetfriends = _pet[6];			//--- friends
const mypetname = _pet[7];				//--- name
const mypetmood = _pet[8];				//--- mood
const mypetstatus = _pet[9];			//--- status
const mypetowners = _pet[10];			//--- owners
const mypetbirthday = _pet[11];			//--- birthday
const mypetshiny = _pet[12];			//--- shiny

const mypetcloth1 = _pet[13];    		//--- cloth 1-4
const mypetcloth2 = _pet[14];
const mypetcloth3 = _pet[15];
const mypetcloth4 = _pet[16];

const _cooldownmypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/cooldown.json`));	
const mypetcooldown = _cooldownmypet[0];

const _energymypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/energy.json`));	
const mypetenergy = _energymypet[0];

const mypetweapon = _pet[19];			//--- weapon

const mypetpowertype1 = _pet[20];				//--- powertype 1-4
const mypetpowertype2 = _pet[21];
const mypetpowertype3 = _pet[22];
const mypetpowertype4 = _pet[23];

const mypetpowertypeinfo1 = _pet[24];		//--- powertypeinfo 1-4
const mypetpowertypeinfo2 = _pet[25];
const mypetpowertypeinfo3 = _pet[26];
const mypetpowertypeinfo4 = _pet[27];

const mypetabouttypeinfo1 = _pet[28];		//--- abouttypeinfo 1-4
const mypetabouttypeinfo2 = _pet[29];
const mypetabouttypeinfo3 = _pet[30];
const mypetabouttypeinfo4 = _pet[31];

const mypetempty1 = _pet[32];				//--- empty 1-4
const mypetempty2 = _pet[33];
const mypetempty3 = _pet[34];
const mypetempty4 = _pet[35];
const mypetempty5 = _pet[36];
const mypetempty6 = _pet[37];

const _healthmypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/health.json`));	
const mypethealth = _healthmypet[0];

const _powermypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/power.json`));
const mypetpowermypet = _powermypet[0];	

const mypetevolution1 = _pet[40];			//--- Evolution 1
const mypetevolution2 = _pet[41];			//--- Evolution 2
const mypetevolution3 = _pet[42];			//--- Evolution 3
const mypetevolution4 = _pet[43];			//--- Evolution 4

const _fightmypet = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/fight.json`));	
const mypetfight = _fightmypet[0];


//-- Pet is stage 1		
if (mypetstage< 2) {

if 	(mypetname === `Wild`) {
		
reply(`𝑃𝑒𝑡𝑠
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
${mypetdesign} 𝑁𝑎𝑚𝑒 » ${mypetname}
${mypetdesign} 𝐸𝑣𝑜𝑙𝑢𝑡𝑖𝑜𝑛 » ${mypetshiny}${mypetevolution1}
${mypetdesign} 𝑀𝑜𝑜𝑑 » ${mypetmood}
${mypetdesign} 𝐻𝑢𝑛𝑔𝑒𝑟 » ${mypethunger}
${mypetdesign} 𝐻𝑒𝑎𝑙𝑡ℎ » ${mypethealth} 𝐿𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝑋𝑝 » ${mypetxp}
𝐿𝑣𝑙 » ${mypetstage}
𝑆𝑡𝑎𝑡𝑢𝑠 » ${mypetstatus}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
» .𝑖𝑛𝑓𝑜𝑝𝑒𝑡 «
» .𝑓𝑟𝑖𝑑𝑔𝑒 «
» .𝑠𝑜𝑐𝑖𝑎𝑙 «
» .𝑝𝑒𝑡𝑠ℎ𝑜𝑝 «
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃

𝑃𝑙𝑒𝑎𝑠𝑒 𝑛𝑎𝑚𝑒 𝑦𝑜𝑢𝑟 𝑝𝑒𝑡 𝑤𝑖𝑡ℎ 𝑡ℎ𝑒 𝑐𝑜𝑚𝑚𝑎𝑛𝑑 
» .petname Star`)
 
}
 
else {
	
reply(`𝑃𝑒𝑡𝑠
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
${mypetdesign} 𝑁𝑎𝑚𝑒 » ${mypetname}
${mypetdesign} 𝐸𝑣𝑜𝑙𝑢𝑡𝑖𝑜𝑛 » ${mypetshiny}${mypetevolution1}
${mypetdesign} 𝑀𝑜𝑜𝑑 » ${mypetmood}
${mypetdesign} 𝐻𝑢𝑛𝑔𝑒𝑟 » ${mypethunger}
${mypetdesign} 𝐻𝑒𝑎𝑙𝑡ℎ » ${mypethealth} 𝐿𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝑋𝑝 » ${mypetxp}
𝐿𝑣𝑙 » ${mypetstage}
𝑆𝑡𝑎𝑡𝑢𝑠 » ${mypetstatus}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
» .𝑖𝑛𝑓𝑜𝑝𝑒𝑡 «
» .𝑎𝑟𝑚𝑜𝑟 «
» .𝑓𝑟𝑖𝑑𝑔𝑒 «
» .𝑠𝑜𝑐𝑖𝑎𝑙 «
» .𝑝𝑒𝑡𝑠ℎ𝑜𝑝 «`)
	
} 

}

//-- Pet is stage 2		
else {

	
reply(`𝑃𝑒𝑡𝑠
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
${mypetdesign} 𝑁𝑎𝑚𝑒 » ${mypetname}
${mypetdesign} 𝐸𝑣𝑜𝑙𝑢𝑡𝑖𝑜𝑛 » ${mypetshiny}${mypetevolution1}
${mypetdesign} 𝑀𝑜𝑜𝑑 » ${mypetmood}
${mypetdesign} 𝐻𝑢𝑛𝑔𝑒𝑟 » ${mypethunger}
${mypetdesign} 𝐻𝑒𝑎𝑙𝑡ℎ » ${mypethealth} 𝐿𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝑋𝑝 » ${mypetxp}
𝐿𝑣𝑙 » ${mypetstage}
𝑆𝑡𝑎𝑡𝑢𝑠 » ${mypetstatus}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
» .𝑖𝑛𝑓𝑜𝑝𝑒𝑡 «
» .𝑎𝑟𝑚𝑜𝑟 «
» .𝑓𝑟𝑖𝑑𝑔𝑒 «
» .𝑠𝑜𝑐𝑖𝑎𝑙 «
» .𝑝𝑒𝑡𝑠ℎ𝑜𝑝 «`)
	


}





 
break 
 
//--- Your Pet INFOPET	
			
case 'infopet':
		
		if (!isVerify) return reply(userB())
			
// -- Pet 
	const _myaccountpet2 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	const mypet2design = _myaccountpet2[11];			//--- account design
	
	
const _pet2 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	

const mypet2type = _pet2[0]; 				//--- type
const mypet2stage = _pet2[1];				//--- stage
const mypet2hunger = _pet2[2];			//--- hunger
const mypet2level = _pet2[3];				//--- level
const mypet2xp = _pet2[4];				//--- xp
const mypet2changepet = _pet2[5];			//--- changepet

const mypet2friends = _pet2[6];			//--- friends
const mypet2name = _pet2[7];				//--- name
const mypet2mood = _pet2[8];				//--- mood
const mypet2status = _pet2[9];			//--- status
const mypet2owners = _pet2[10];			//--- owners
const mypet2birthday = _pet2[11];			//--- birthday
const mypet2shiny = _pet2[12];			//--- shiny

const mypet2cloth1 = _pet2[13];    		//--- cloth 1-4
const mypet2cloth2 = _pet2[14];
const mypet2cloth3 = _pet2[15];
const mypet2cloth4 = _pet2[16];

const mypet2cooldown = _pet2[17];			//--- cooldown
const mypet2energy = _pet2[18];			//--- energy
const mypet2weapon = _pet2[19];			//--- weapon

const mypet2powertype1 = _pet2[20];				//--- powertype 1-4
const mypet2powertype2 = _pet2[21];
const mypet2powertype3 = _pet2[22];
const mypet2powertype4 = _pet2[23];

const mypet2powertypeinfo1 = _pet2[24];		//--- powertypeinfo 1-4
const mypet2powertypeinfo2 = _pet2[25];
const mypet2powertypeinfo3 = _pet2[26];
const mypet2powertypeinfo4 = _pet2[27];

const mypet2abouttypeinfo1 = _pet2[28];		//--- abouttypeinfo 1-4
const mypet2abouttypeinfo2 = _pet2[29];
const mypet2abouttypeinfo3 = _pet2[30];
const mypet2abouttypeinfo4 = _pet2[31];

const mypet2empty1 = _pet2[32];				//--- empty 1-4
const mypet2empty2 = _pet2[33];
const mypet2empty3 = _pet2[34];
const mypet2empty4 = _pet2[35];
const mypet2empty5 = _pet2[36];
const mypet2empty6 = _pet2[37];

const mypet2health = _pet2[38]; 	    	//--- Health
const mypet2power = _pet2[39];    			//--- Power
const mypet2evolution1 = _pet2[40];			//--- Evolution 1
const mypet2evolution2 = _pet2[41];			//--- Evolution 2
const mypet2evolution3 = _pet2[42];			//--- Evolution 3
const mypet2evolution4 = _pet2[43];			//--- Evolution 4
const mypet2fight = _pet2[44];		     	//--- fight

		
reply(`${mypet2name}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
${mypet2design} 𝑈𝑙𝑡𝑟𝑎 𝑆𝑘𝑖𝑙𝑙 » ${mypet2powertype1} 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑆𝑘𝑖𝑙𝑙 𝑖𝑛𝑓𝑜 »

${mypet2powertypeinfo1}

-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐴𝑏𝑜𝑢𝑡 𝑝𝑒𝑡 »

${mypet2abouttypeinfo1}

-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝑠𝑖𝑛𝑐𝑒 » ${mypet2birthday}`)

break

//--- Your Pet		
			
case 'armor':

		
		if (!isVerify) return reply(userB())
			
// -- Pet 
	const _myaccountpet3 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	const mypet3design = _myaccountpet3[11];			//--- account design
	
	
const _pet3 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	

const mypet3type = _pet3[0]; 				//--- type
const mypet3stage = _pet3[1];				//--- stage
const mypet3hunger = _pet3[2];			//--- hunger
const mypet3level = _pet3[3];				//--- level
const mypet3xp = _pet3[4];				//--- xp
const mypet3changepet = _pet3[5];			//--- changepet

const mypet3friends = _pet3[6];			//--- friends
const mypet3name = _pet3[7];				//--- name
const mypet3mood = _pet3[8];				//--- mood
const mypet3status = _pet3[9];			//--- status
const mypet3owners = _pet3[10];			//--- owners
const mypet3birthday = _pet3[11];			//--- birthday
const mypet3shiny = _pet3[12];			//--- shiny

const mypet3cloth1 = _pet3[13];    		//--- cloth 1-4
const mypet3cloth2 = _pet3[14];
const mypet3cloth3 = _pet3[15];
const mypet3cloth4 = _pet3[16];

const mypet3cooldown = _pet3[17];			//--- cooldown
const mypet3energy = _pet3[18];			//--- energy
const mypet3weapon = _pet3[19];			//--- weapon

const mypet3powertype1 = _pet3[20];				//--- powertype 1-4
const mypet3powertype2 = _pet3[21];
const mypet3powertype3 = _pet3[22];
const mypet3powertype4 = _pet3[23];

const mypet3powertypeinfo1 = _pet3[24];		//--- powertypeinfo 1-4
const mypet3powertypeinfo2 = _pet3[25];
const mypet3powertypeinfo3 = _pet3[26];
const mypet3powertypeinfo4 = _pet3[27];

const mypet3abouttypeinfo1 = _pet3[28];		//--- abouttypeinfo 1-4
const mypet3abouttypeinfo2 = _pet3[29];
const mypet3abouttypeinfo3 = _pet3[30];
const mypet3abouttypeinfo4 = _pet3[31];

const mypet3empty1 = _pet3[32];				//--- empty 1-4
const mypet3empty2 = _pet3[33];
const mypet3empty3 = _pet3[34];
const mypet3empty4 = _pet3[35];
const mypet3empty5 = _pet3[36];
const mypet3empty6 = _pet3[37];

const mypet3health = _pet3[38]; 	    	//--- Health
const mypet3power = _pet3[39];    			//--- Power
const mypet3evolution1 = _pet3[40];			//--- Evolution 1
const mypet3evolution2 = _pet3[41];			//--- Evolution 2
const mypet3evolution3 = _pet3[42];			//--- Evolution 3
const mypet3evolution4 = _pet3[43];			//--- Evolution 4
const mypet3fight = _pet3[44];		     	//--- fight

		
reply(`${mypet3name}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝑊𝑒𝑎𝑝𝑜𝑛
» ${mypet3weapon}
𝐶𝑜𝑜𝑙𝑑𝑜𝑤𝑛
» ${mypet3cooldown}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐻𝑎𝑡
» ${mypet3cloth1}
𝑇𝑜𝑝
» ${mypet3cloth2}
𝐵𝑜𝑑𝑦
» ${mypet3cloth3} 
𝑆ℎ𝑜𝑒𝑠
» ${mypet3cloth4}`) 

break


//--- Your Pet ARMOR		
			
case 'social':

		
	if (!isVerify) return reply(userB())
			
// -- Pet 
		const _myaccountpet4 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const mypet4design = _myaccountpet4[11];			//--- account design
		
	
		const _pet4 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	

		const mypet4type = _pet4[0]; 				//--- type
		const mypet4stage = _pet4[1];				//--- stage
		const mypet4hunger = _pet4[2];			//--- hunger
		const mypet4level = _pet4[3];				//--- level
		const mypet4xp = _pet4[4];				//--- xp
		const mypet4changepet = _pet4[5];			//--- changepet

		const mypet4friends = _pet4[6];			//--- friends
		const mypet4name = _pet4[7];				//--- name
		const mypet4mood = _pet4[8];				//--- mood
		const mypet4status = _pet4[9];			//--- status
		const mypet4owners = _pet4[10];			//--- owners
		const mypet4birthday = _pet4[11];			//--- birthday
		const mypet4shiny = _pet4[12];			//--- shiny

		const mypet4cloth1 = _pet4[13];    		//--- cloth 1-4
		const mypet4cloth2 = _pet4[14];
		const mypet4cloth3 = _pet4[15];
		const mypet4cloth4 = _pet4[16];

		const mypet4cooldown = _pet4[17];			//--- cooldown
		const mypet4energy = _pet4[18];			//--- energy
		const mypet4weapon = _pet4[19];			//--- weapon

		const mypet4powertype1 = _pet4[20];				//--- powertype 1-4
		const mypet4powertype2 = _pet4[21];
		const mypet4powertype3 = _pet4[22];
		const mypet4powertype4 = _pet4[23];

		const mypet4powertypeinfo1 = _pet4[24];		//--- powertypeinfo 1-4
		const mypet4powertypeinfo2 = _pet4[25];
		const mypet4powertypeinfo3 = _pet4[26];
		const mypet4powertypeinfo4 = _pet4[27];

		const mypet4abouttypeinfo1 = _pet4[28];		//--- abouttypeinfo 1-4
		const mypet4abouttypeinfo2 = _pet4[29];
		const mypet4abouttypeinfo3 = _pet4[30];
		const mypet4abouttypeinfo4 = _pet4[31];

		const mypet4empty1 = _pet4[32];				//--- empty 1-4
		const mypet4empty2 = _pet4[33];
		const mypet4empty3 = _pet4[34];
		const mypet4empty4 = _pet4[35];
		const mypet4empty5 = _pet4[36];
		const mypet4empty6 = _pet4[37];

		const mypet4health = _pet4[38]; 	    	//--- Health
		const mypet4power = _pet4[39];    			//--- Power
		const mypet4evolution1 = _pet4[40];			//--- Evolution 1
		const mypet4evolution2 = _pet4[41];			//--- Evolution 2
		const mypet4evolution3 = _pet4[42];			//--- Evolution 3
		const mypet4evolution4 = _pet4[43];			//--- Evolution 4
		const mypet4fight = _pet4[44];		     	//--- fight

		
			reply(`» ${mypet4name}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐹𝑟𝑖𝑒𝑛𝑑𝑠
» ${mypet4friends}
𝑂𝑤𝑛𝑒𝑟𝑠 
» ${mypet4owners}
𝑇𝑟𝑎𝑑𝑒
» ${mypet4changepet} 
𝐹𝑖𝑔ℎ𝑡
» ${mypet4fight}`)
 
break

//--- your PetShop

case 'petshop':	
case 'pet shop':	

if (!isVerify) return reply(userB())
	
const _petshopmoney = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const petshopmoney = _petshopmoney[7]	//--- money
const petshopdesign2 = _petshopmoney[11]	//--- account design

if (isHaspet) {
		
		const _myaccountpet4shop = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	
		const mypet4stageshop = _myaccountpet4shop[1];
		
if (mypet4stageshop < 2) {		

reply (`𝑃𝑒𝑡𝑠ℎ𝑜𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐵𝑢𝑦 𝑦𝑜𝑢𝑟 𝑜𝑤𝑛 𝑝𝑒𝑡
${petshopdesign2} .petstore
𝐹𝑜𝑜𝑑
${petshopdesign2} .foodstore
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoney}$`)

}

else if (mypet4stageshop === 2) {		

reply (`𝑃𝑒𝑡𝑠ℎ𝑜𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐵𝑢𝑦 𝑦𝑜𝑢𝑟 𝑜𝑤𝑛 𝑝𝑒𝑡
${petshopdesign2} .petstore
𝐹𝑜𝑜𝑑
${petshopdesign2} .foodstore
𝐶𝑙𝑜𝑡ℎ𝑠
${petshopdesign2} .clothstore -soon
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoney}$`)

}

else {		

reply (`𝑃𝑒𝑡𝑠ℎ𝑜𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐵𝑢𝑦 𝑦𝑜𝑢𝑟 𝑜𝑤𝑛 𝑝𝑒𝑡
${petshopdesign2} .petstore
𝐹𝑜𝑜𝑑
${petshopdesign2} .foodstore 
𝐶𝑙𝑜𝑡ℎ𝑠
${petshopdesign2} .clothstore -soon
𝑊𝑒𝑎𝑝𝑜𝑛𝑠
${petshopdesign2} .weaponstore -soon
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoney}$`)

}
}

else {

reply (`𝑃𝑒𝑡𝑠ℎ𝑜𝑝
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐵𝑢𝑦 𝑦𝑜𝑢𝑟 𝑜𝑤𝑛 𝑝𝑒𝑡
${petshopdesign2} .petstore
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoney}$`)	
	
}
	
break



//--- your foodshop

case 'foodstore':	
case 'foodshop':	

if (!isVerify) return reply(userB())
if (!isHaspet) return reply(userP())
	
const _petshopmoneyfood = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const petshopmoneyfood = _petshopmoneyfood[7]	//--- money
const petshopdesign2food = _petshopmoneyfood[11]	//--- account design



if (!isFridge) {
	
reply (`-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
Please buy a fridge fist. 
>> .buyfridge
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃`)
	
}

else {		


reply (`𝐹𝑜𝑜𝑑𝑆𝑡𝑜𝑟𝑒
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
${petshopdesign2food} 𝐵𝑢𝑦𝑓𝑜𝑜𝑑
🫐 .buyfood berries
2$
🥛 .buyfood milk
1$
🍖 .buyfood beef
8$
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoneyfood}$`)


}

break
//--- your petstore

case 'petstore':		

if (!isVerify) return reply(userB())
	
const _petshopmoneyfood2 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const petshopmoneyfood2 = _petshopmoneyfood2[7]	//--- money
const petshopdesign2food2 = _petshopmoneyfood2[11]	//--- account design
	
if (isHaspet)  {	

		const _myaccountpet4shopfood2 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}.pet.json`));	
		const mypet4stageshopfood2 = _myaccountpet4shopfood2[1];	

reply (`⚠️
𝙱𝚄𝚈𝙸𝙽𝙶 𝙰 𝙽𝙴𝚆 𝙿𝙴𝚃 𝙺𝙸𝙻𝙻𝚂 𝚈𝙾𝚄𝚁 𝙾𝙻𝙳 𝙿𝙴𝚃

𝑃𝑒𝑡𝑆𝑡𝑜𝑟𝑒
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐸𝑙𝑓
${petshopdesign2food2} .buypet Elf
𝑈𝑚𝑏𝑟𝑒𝑜𝑛
${petshopdesign2food2} .buypet Umbreon
𝐷𝑟𝑎𝑔𝑜𝑛
${petshopdesign2food2} .buypet Dragon
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoneyfood2}$`)

}

else {
	
reply (`𝑃𝑒𝑡𝑆𝑡𝑜𝑟𝑒
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐸𝑙𝑓
${petshopdesign2food2} .buypet Elf
𝑈𝑚𝑏𝑟𝑒𝑜𝑛
${petshopdesign2food2} .buypet Umbreon
𝐷𝑟𝑎𝑔𝑜𝑛
${petshopdesign2food2} .buypet Dragon
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
𝐶𝑎𝑠ℎ » ${petshopmoneyfood2}$`)
	
}

break
//-- PETS Fight

case 'fight': 
case 'attack': 
  
	if (!isVerify) return reply(userB())
    if (!isHaspet) return reply(userP())		
	if (args.length < 1) return reply('﹝Tag the pet whom you want to fight.﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample:\n.fight @stardash')
	if (args.length > 1) return reply('⌯   ﹝leave no space.  NOT  . fight @star but  .fight @Star﹞')

const _petfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/pet.json`));	

const petfightname = _petfight[7];				//--- name
const petfightstatus = _petfight[9];			//--- status


const _stagepetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/stage.json`));
const petfightstage = _stagepetfight[0];	
const _hungerpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/hunger.json`));	
const petfighthunger = _hungerpetfight[0];
const _levelpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/level.json`));	
const petfightlevel = _levelpetfight[0];
const _xppetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/xp.json`));	
const petfightxp = _xppetfight[0];
const _cooldownpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/cooldown.json`));	
const petfightcooldown = _cooldownpetfight[0];
const _energypetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/energy.json`));	
const petfightenergy = _energypetfight[0];
const _healthpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/health.json`));	
const petfighthealth = _healthpetfight[0];
const _powerpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/power.json`));
const petfightpower = _powerpetfight[0];	
const _fightpetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/fight.json`));	
const petfightfight = _fightpetfight[0];

	if (petfightstatus === "dead") return reply(`Your pet is dead... Truly sorry :( \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nIt will be remembered\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`) 

	if (petfighthunger < 2) return reply(`Your pet has no Energy... It doesnt want to fight until you feed it. \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nHis hunger: ${petfighthunger} Hungerpoints\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`) 


const _hispetfight = JSON.parse(fs.readFileSync(`./data/pets/${value.replace('@','./')}/pet.json`));	
const hispetfightname = _hispetfight[7];				//--- name
const hispetfightstatus = _hispetfight[9];			//--- status


const _stagehispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/stage.json`));
const hispetfightstage = _stagehispetfight[0];	
const _hungerhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/hunger.json`));	
const hispetfighthunger = _hungerhispetfight[0];
const _levelhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/level.json`));	
const hispetfightlevel = _levelhispetfight[0];
const _xphispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/xp.json`));	
const hispetfightxp = _xphispetfight[0];
const _cooldownhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/cooldown.json`));	
const hispetfightcooldown = _cooldownhispetfight[0];
const _energyhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/energy.json`));	
const hispetfightenergy = _energyhispetfight[0];
const _healthhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/health.json`));	
const hispetfighthealth = _healthhispetfight[0];
const _powerhispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/power.json`));
const hispetfightpowerhispetfight = _powerhispetfight[0];	
const _fighthispetfight = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/fight.json`));	
const hispetfightfight = _fighthispetfight[0];

	if (hispetfightstatus === "dead") return reply(`His pet is dead... Truly sorry for him :( \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nIt will be remembered\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`) 


let mypetdata = Number(petfightstage)
let hispetdata = Number(hispetfightstage)
if (mypetdata < hispetdata) {

	let hisattack = Number(hisfightpower);
				let myhealth = Number(mypetfighthealth);
						
				let myoutcomehealth = myhealth - hisattack; 

				fs.readFile(`./data/pets/${sender.split("@")[0]}/health.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${petfighthealth}`, myoutcomehealth);
					
					fs.writeFile(`./data/pets/${sender.split("@")[0]}/health.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})

						const attackdely5 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely5(1000) /// waiting 1 second.
				
				let mynewhunger = mypetfighthunger - Number(1); 

				fs.readFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${petfighthunger}`, mynewhunger);
					
					fs.writeFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})


				let hisnewhunger = hispetfighthunger - Number(1); 

				fs.readFile(`./data/pets/${value.replace('@','./')}/hunger.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${hispetfighthunger}`, hisnewhunger);
					
					fs.writeFile(`./data/pets/${value.replace('@','./')}/hunger.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})
				
				
						const attackdely6 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely6(1000) /// waiting 1 second.
				

				let hisnewxp = Number(hispetfightxp) + Number(hispetfightstage); 

				fs.readFile(`./data/pets/${value.replace('@','./')}/xp.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${hispetfightxp}`, hisnewxp);
					
					fs.writeFile(`./data/pets/${value.replace('@','./')}/xp.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})				

						const attackdely7 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely7(1000) /// waiting 1 second.

reply(`🩸﹝${petfightname} attacked ${hispetfightname}﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_${petfightname} lost ${hisattack} Lp_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_${hispetfightname} won and gained ${hispetfightstage} Xp_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)


}

else {	
				let myattack = Number(petfightpower);
				let hishealth = Number(hispetfighthealth);
						
				let hisoutcomehealth = hishealth - myattack; 

				fs.readFile(`./data/pets/${value.replace('@','./')}/health.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${hispetfighthealth}`, hisoutcomehealth);
					
					fs.writeFile(`./data/pets/${value.replace('@','./')}/health.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})

						const attackdely = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely(1000) /// waiting 1 second.
				

				let mynewhunger = petfighthunger - Number(2); 

				fs.readFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${petfighthunger}`, mynewhunger);
					
					fs.writeFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})
				
				
						const attackdely2 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely2(1000) /// waiting 1 second.
				

				let mynewxp = Number(petfightxp) + Number(10); 

				fs.readFile(`./data/pets/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${petfightxp}`, mynewxp);
					
					fs.writeFile(`./data/pets/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})				

						const attackdely3 = ms => new Promise(resolve => setTimeout(resolve, ms))
						await attackdely3(1000) /// waiting 1 second.

reply(`⚔️﹝${petfightname} attacked ${hispetfightname}﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_${hispetfightname} lost ${myattack} Lp_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_${petfightname} won and gained ${petfightstage} Xp_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)

}
	break

//--- PETS feed
case 'eat':
case 'drink':
case 'feed':

	if (!isHaspet) return reply(userP())
	if (!isFridge) return reply("Please buy a fridge first. Open .foodstore")

	if (args.length > 1) return reply("Please open fridge to see how to feed. .fridge")
	if (args.length < 1) return reply("Please open fridge to see how to feed. .fridge")

	const _eatberries = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/berries.json`));
	const eatberries = _eatberries[0];	

	const _eatbeef = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/beef.json`));
	const eatbeef = _eatbeef[0];

	const _eatmilk = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/milk.json`));
	const eatmilk = _eatmilk[0];

const _eatdesign = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const eatdesign = _eatdesign[11]	//--- account design

const _hungermypeteat = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/hunger.json`));	
const mypethungereat = _hungermypeteat[0];

const _xpmypeteat = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/xp.json`));	
const mypetxpeat = _xpmypeteat[0];
const _healthmypeteat = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/health.json`));	
const mypethealtheat = _healthmypeteat[0];
const _energymypeteat = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/energy.json`));	
const mypetenergyeat = _energymypeteat[0];

const _peteat = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/pet.json`));
const mypetnameeat = _peteat[7];				//--- name	

if (args[0] === 'berries' ) {

	if (mypethungereat > 9.5) return reply(`${eatdesign} Your pet is already full!`) 
	if (eatberries < 1) return reply(`${eatdesign} Your dont have any berries. Buy the in the .foodstore!`) 

	let eatmynewberries = Number(eatberries) - Number(1); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/berries.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${eatberries}`, eatmynewberries);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/berries.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})		
const delayfoood6 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood6(1000) /// waiting 1 second.	

let mypetnewhunger = Number(mypethungereat) + Number(0.5); 

fs.readFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${mypethungereat}`, mypetnewhunger);
	
	fs.writeFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

const delayfoood7 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood7(1000) /// waiting 1 second.	

let mypetnewxp = Number(mypetxpeat) + Number(1); 

fs.readFile(`./data/pets/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${mypetxpeat}`, mypetnewxp);
	
	fs.writeFile(`./data/pets/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

const delayfoood8 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood8(1000) /// waiting 1 second.	

let mypetnewhealth = Number(mypethealtheat) + Number(1); 

fs.readFile(`./data/pets/${sender.split("@")[0]}/health.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${mypethealtheat}`, mypetnewhealth);
	
	fs.writeFile(`./data/pets/${sender.split("@")[0]}/health.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

const delayfoood9 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood9(1000) /// waiting 1 second.	

let mypetnewenergy = Number(mypetenergyeat) - Number(1); 

fs.readFile(`./data/pets/${sender.split("@")[0]}/energy.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${mypetenergyeat}`, mypetnewenergy);
	
	fs.writeFile(`./data/pets/${sender.split("@")[0]}/energy.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})


												
}

else if (args[0] === 'beef' ) {

	if (mypethungereat > 5) return reply(`${eatdesign} Your pet is already full! Maybe feed it sth smaller then beef.`) 
	if (eatbeef < 1) return reply(`${eatdesign} Your dont have any Beef. Buy the in the .foodstore!`) 

	let mynewbeef = Number(eatbeef) - Number(1); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/beef.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${eatbeef}`, mynewbeef);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/beef.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})	
	
	const delay8987foood6 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987foood6(1000) /// waiting 1 second.	
	
	let mypetnewhunger = Number(mypethungereat) + Number(5); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypethungereat}`, mypetnewhunger);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987foood7 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987foood7(1000) /// waiting 1 second.	
	
	let mypetnewxp = Number(mypetxpeat) + Number(3); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypetxpeat}`, mypetnewxp);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987foood8 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987foood8(1000) /// waiting 1 second.	
	
	let mypetnewhealth = Number(mypethealtheat) + Number(5); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/health.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypethealtheat}`, mypetnewhealth);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/health.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987foood9 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987foood9(1000) /// waiting 1 second.	
	
	let mypetnewenergy = Number(mypetenergyeat) - Number(2); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/energy.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypetenergyeat}`, mypetnewenergy);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/energy.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	//----------------------------------

}

else if (args[0] === 'milk' ) {

	if (mypethungereat > 9.5) return reply(`${eatdesign} Your pet is already full!`) 
	if (eatmilk < 1) return reply(`${eatdesign} Your dont have any beef. Buy the in the .foodstore!`) 

	let mynewmilk = Number(eatmilk) - Number(1); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/milk.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${eatmilk}`, mynewmilk);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/milk.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})	
	
	let foodcost = Number(1);

	const delay8987328987foood6 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987328987foood6(1000) /// waiting 1 second.	
	
	let mypetnewhunger = Number(mypethungereat) + Number(1); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypethungereat}`, mypetnewhunger);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/hunger.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987328987foood7 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987328987foood7(1000) /// waiting 1 second.	
	
	let mypetnewxp = Number(mypetxpeat) + Number(2); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypetxpeat}`, mypetnewxp);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987328987foood8 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987328987foood8(1000) /// waiting 1 second.	
	
	let mypetnewhealth = Number(mypethealtheat) + Number(2); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/health.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypethealtheat}`, mypetnewhealth);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/health.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	const delay8987328987foood9 = ms => new Promise(resolve => setTimeout(resolve, ms))
	await delay8987328987foood9(1000) /// waiting 1 second.	
	
	let mypetnewenergy = Number(mypetenergyeat) - Number(1); 
	
	fs.readFile(`./data/pets/${sender.split("@")[0]}/energy.json`, 'utf-8', function(err, data) {
		if (err) throw err;
			
		var newValue = data.replace(`${mypetenergyeat}`, mypetnewenergy);
		
		fs.writeFile(`./data/pets/${sender.split("@")[0]}/energy.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
	
	//----------------------------------

}

else { 
	reply(`${eatdesign} Error 505
	-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	does not exist.
	-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	✅ StarDash Food`)

}


reply(`${eatdesign} ${mypetnameeat} ate ${value}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
Its enjoying it! It feels much better now.
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Food`)

break



break

//--- PETS food
case 'buyfood':


	if (!isHaspet) return reply(userP())
	if (!isFridge) return reply("Please buy a fridge first. Open .foodstore")

	if (args.length > 1) return reply("Please choose something from the .foodstore")
	if (args.length < 1) return reply("Please choose something from the .foodstore")


const _yourcashbuyfood = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const buyfoodmoney = _yourcashbuyfood[7]	//--- money	
const buyfooddesign = _yourcashbuyfood[11]	//--- account design

let oldfoodmoney = Number(buyfoodmoney);


	const _buyberries = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/berries.json`));
	const buyberries = _buyberries[0];	

	const _buybeef = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/beef.json`));
	const buybeef = _buybeef[0];

	const _buymilk = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/milk.json`));
	const buymilk = _buymilk[0];

if (args[0] === 'berries' ) {

	if (buyfoodmoney < 2) return reply(`﹝You have not enough money to buy berries. 𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 2$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${buyfoodmoney}$﹞`) 

	let mynewberries = Number(buyberries) + Number(4); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/berries.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${buyberries}`, mynewberries);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/berries.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})		


let foodcost = Number(2);

const delayfoood6 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood6(1000) /// waiting 1 second.	

let newfoodmoney = oldfoodmoney - foodcost; 

fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${buyfoodmoney}`, newfoodmoney);
	
	fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

												
}

else if (args[0] === 'beef' ) {

	let mynewbeef = Number(buybeef) + Number(1); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/beef.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${buybeef}`, mynewbeef);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/beef.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})	
	
	let foodcost = Number(8);

const delayfoood5 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood5(1000) /// waiting 1 second.	

let newfoodmoney = oldfoodmoney - foodcost; 

fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${buyfoodmoney}`, newfoodmoney);
	
	fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

}

else if (args[0] === 'milk' ) {

	let mynewmilk = Number(buymilk) + Number(1); 

	fs.readFile(`./data/fridge/${sender.split("@")[0]}/milk.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		
		var newValue = data.replace(`${buymilk}`, mynewmilk);
		
		fs.writeFile(`./data/fridge/${sender.split("@")[0]}/milk.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})	
	
	let foodcost = Number(1);

const delayfoood2 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood2(1000) /// waiting 1 second.	

let newfoodmoney = oldfoodmoney - foodcost; 

fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
	if (err) throw err;
		
	var newValue = data.replace(`${buyfoodmoney}`, newfoodmoney);
	
	fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Done!');
	})
})

}

else { let foodcost = Number(0);

	reply(`${buyfooddesign} Error 505
	-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	does not exist.
	-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
	✅ StarDash Food`)

}


const delayfoood23555 = ms => new Promise(resolve => setTimeout(resolve, ms))
await delayfoood23555(1000) /// waiting 1 second.	

const _yourcashbuyfood11 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
const buyfoodmoney11 = _yourcashbuyfood11[7]	//--- money	


reply(`${buyfooddesign} Bought ${value}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${buyfoodmoney11}$
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
✅ StarDash Food`)

break

//--- PETS fridge
case 'fridge':


	if (!isHaspet) return reply(userP())
	if (!isFridge) return reply("Please buy a fridge first. Open .foodstore")

	const _mynewfridgess = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
	const mynewfridgedesignss = _mynewfridgess[11]	//--- account design	

	const _fridgeberries = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/berries.json`));
	const fridgeberries = _fridgeberries[0];	

	const _fridgebeef = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/beef.json`));
	const fridgebeef = _fridgebeef[0];

	const _fridgemilk = JSON.parse(fs.readFileSync(`./data/fridge/${sender.split("@")[0]}/milk.json`));
	const fridgemilk = _fridgemilk[0];

	reply(`${mynewfridgedesignss} 𝐹𝑟𝑖𝑑𝑔𝑒
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
🫐 ${fridgeberries}
.eat berries
🍖 ${fridgebeef}
.eat beef
🥛 ${fridgemilk}	
.drink milk
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
.foodstore
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃
✳️ StarDash Fridge`)


break

//--- PETS buyfridge
case 'buyfridge':
case 'getfridge':
						
						if (!isVerify) return reply(userB())
						//--	if (isFridge) return reply("You already have a fridge")
							    if (!isHaspet) return reply("You need a pet first. Visit the .petshop")

exec (`rm -rf data/fridge/${sender.split("@")[0]}`)

exec (`mkdir data/fridge/${sender.split("@")[0]}`)

const petbuydelaysddsds = ms => new Promise(resolve => setTimeout(resolve, ms))
await petbuydelaysddsds(1000) /// waiting 1 second.
									
							const _mynewfridge = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
							const mynewfridgedesign = _mynewfridge[11]	//--- account design	
							
					_fridge.push(sender)
			fs.writeFileSync('./data/fridge.json', JSON.stringify(_fridge))
			
capt = `${mynewfridgedesign}﹝Got Fridge!﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_StarDash gave it to you as a gift for your pet!_\nYou can open it with _*.fridge*_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`
			Lxa.sendMessage(from, capt, text, {quoted: mek})
			
			
fs.appendFile(`./data/fridge/${sender.split("@")[0]}/berries.json`, `["0"]`, function (err) {				
  if (err) throw err;
  console.log('Fridge Opend.');
});

fs.appendFile(`./data/fridge/${sender.split("@")[0]}/beef.json`, `["0"]`, function (err) {				
	if (err) throw err;
	console.log('Fridge Opend.');
  });

  fs.appendFile(`./data/fridge/${sender.split("@")[0]}/milk.json`, `["0"]`, function (err) {				
	if (err) throw err;
	console.log('Fridge Opend.');
  });
											
			break
//-- PETS change name

case 'petname': 
 

		if (!isVerify) return reply(userB())
		if (args.length < 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 its name﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample .petname Hasy\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets')
        if (args.length > 1) return reply('⌯   ﹝𝙴𝚗𝚝𝚎𝚛 only one name﹞\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\nExample .petname Hasy\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets')
			
const _petfightchangename = JSON.parse(fs.readFileSync(`./data/pets/${sender.split("@")[0]}/pet.json`));	
const petfightchangename = _petfightchangename[7];				//--- name
			
					let newnamepet = args[0];

					fs.readFile(`./data/pets/${sender.split("@")[0]}/pet.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${petfightchangename}`, newnamepet);
						
						fs.writeFile(`./data/pets/${sender.split("@")[0]}/pet.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})


								const newnamemoneydelaypet = ms => new Promise(resolve => setTimeout(resolve, ms))
								await newnamemoneydelaypet(1000) /// waiting 1 second.

 
								reply(`💌 Changed pet name from *${petfightchangename}* to *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n_It sure likes its new name :)_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-🍃\n💟 StarDash Pets`)
      
		break

case 'watchdog':
	if (args.length < 1){ 
		reply(`
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
What should the watchdog do?
he knows theese commands:

.watchdog
		hello
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)
	}
	else{
		switch (args[0]){
			case "hello":
				var http = require('http');
				http.get("192.168.2.114:5000", function(res) {
					reply(res.message);
				}).on('error', function(e) {
					console.log("Got error: " + e.message);
				});
		}
	}
	
