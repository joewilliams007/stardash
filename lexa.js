// This is the main file. Correct mistakes if needed!

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Whatsapp Connecting
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    ReconnectMode,
    AcceptInvite,
    ProxyAgent,
    WAMetric, 
    WAFlag, 
    WANode,
    WAGroupCreateResponse,
    waChatKey,
    mentionedJid,
    WAGroupModification,
    processTime,
    ChatModification,
    WAInitResponse,
    whatsappID,
    WAConnectionTest,
  } = require('@adiwajshing/baileys');
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Functions
const {color, bgcolor} = require('./fs/color');
const {fetchJson, fetchText} = require('./fs/fetcher');
const {recognize} = require('./fs/ocr');
const {_wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, success, close } = require('./fs/functions');


//-- Modules
const fs = require('fs');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const imgbb = require('imgbb-uploader');
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
const path = require('path');
const {removeBackgroundFromImageFile} = require('remove.bg');
var nodemailer = require('nodemailer');
var weather = require('weather-js');

//-- Data
const up = JSON.parse(fs.readFileSync('./data/bot/setting.json'));
const _welcom = JSON.parse(fs.readFileSync('./data/bot/welcom.json'));
const _user = JSON.parse(fs.readFileSync('./data/bot/user.json'));
const _Haspet = JSON.parse(fs.readFileSync('./data/bot/haspet.json'));
const _antilink = JSON.parse(fs.readFileSync('./data/bot/antilink.json'));
const hit = JSON.parse(fs.readFileSync('./data/bot/totalhit.json'))
const _isUpdate = JSON.parse(fs.readFileSync('./data/bot/isUpdate.json'));




//-- Media
const _stik = JSON.parse(fs.readFileSync('./media/stik.json'))
const _vid = JSON.parse(fs.readFileSync('./media/vid.json'))
const _vn = JSON.parse(fs.readFileSync('./media/vn.json'))
const _img = JSON.parse(fs.readFileSync('./media/image.json'))
const _gif = JSON.parse(fs.readFileSync('./media/gif.json'))

//-- Results
const _truth = JSON.parse(fs.readFileSync('./result/ranswer/truth.json'));
const _dare = JSON.parse(fs.readFileSync('./result/ranswer/dare.json'));
const _slot = JSON.parse(fs.readFileSync('./result/games/slot.json'));
const _euf = JSON.parse(fs.readFileSync('./result/ranswer/euflags.json'));
const _wf = JSON.parse(fs.readFileSync('./result/ranswer/worldflag.json'));
const _song = JSON.parse(fs.readFileSync('./result/ranswer/song.json'));
const _emoji = JSON.parse(fs.readFileSync('./result/ranswer/emoji.json'));
const _tipps = JSON.parse(fs.readFileSync('./result/help/tipps.json'));
const tipp = _tipps[Math.floor(Math.random() * _tipps.length)]
const _gay = JSON.parse(fs.readFileSync('./result/ranswer/gaymeter.json'));
const _love = JSON.parse(fs.readFileSync('./result/ranswer/lovemeter.json'));
const _pokemon = JSON.parse(fs.readFileSync('./result/ranswer/pokemon.json'));
const _animal = JSON.parse(fs.readFileSync('./result/ranswer/animal.json'));
const _facts = JSON.parse(fs.readFileSync('./result/ranswer/facts.json'));
const _nsfw = JSON.parse(fs.readFileSync('./result/ranswer/nsfw.json'));
const _roll = JSON.parse(fs.readFileSync('./result/games/dice.json'));
const _meme = JSON.parse(fs.readFileSync('./result/ranswer/meme.json'));
const _dog = JSON.parse(fs.readFileSync('./result/ranswer/dog.json'));
const _dashtype = JSON.parse(fs.readFileSync('./result/games/dashtype.json'));
const _shiny = JSON.parse(fs.readFileSync('./result/games/shiny.json'));
const _wishes = JSON.parse(fs.readFileSync('./help/wishes.json'));
const _notes = JSON.parse(fs.readFileSync('./help/notes.json'));

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Help
const { updates, updatesold} = require('./help/updates');
const { wait, stick, err, group, ban, ownerB, userP, premi, userB, admin, Badmin } = require('./help/respon');
//-- Settings > Add your unmber here to get owner and premium
const prefix = up.prefix
const memberlimit = up.memberlimit;
const banned = [
  ];
const premium = [
"494917626388837@s.whatsapp.net", "4917626388837@s.whatsapp.net", "4949017626388837@s.whatsapp.net","4915231886122@s.whatsapp.net","49491728568032@s.whatsapp.net","27609580734@s.whatsapp.net","4949017637630668@s.whatsapp.net",  
  ];
const ownerNumber = [
  "4917626388837@s.whatsapp.net",
  ];

//-- Delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Apikey
const Vkey = 'apivinz'
const Xinz = 'XinzBot'
const Pkode = 'pais'
//-- Zeit und Datum
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
myMonths = ["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Octob","Nov","Dec"];
			myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//--Whatsapp start connect
async function starts() {
	const Lxa = new WAConnection()
	Lxa.logger.level = 'warn'
	Lxa.version = [2, 2140, 6];
	Lxa.on('qr', () => {
		console.log(color('[DOGGO]','aqua'), color("Scan QR code to connect...", "yellow"))
	})
	fs.existsSync('./session/Lexa.json') && Lxa.loadAuthInfo('./session/Lexa.json')
Lxa.on('connecting', () => {
		exec(`play start.mp3`)
        const time_connecting = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[DOGGO]','aqua'), color("Connecting bro...", "yellow"))
		
    })
Lxa.on('open', () => {
        const time_connect = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        console.log(color('[DOGGO]','aqua'), color(`Done Connecting`, "aqua"))
        start('')
    })
	await Lxa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session/Lexa.json', JSON.stringify(Lxa.base64EncodedAuthInfo(), null, '\t'))

Lxa.on('group-participants-update', async (anu) => {
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Lxa.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				num = anu.participants[0]
				hai = `Hallo @${num.split('@')[0]}
Welcome in *${mdata.subject}*
Please introduce yourself :)`
				Lxa.sendMessage(mdata.id, hai, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				bye = `@${num.split('@')[0]} Goodbye :)`
				Lxa.sendMessage(mdata.id, bye, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

const blocked = []
Lxa.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
	    for (var i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

Lxa.on('chat-update', async (mek) => {
  if (!mek.hasNewMessage) return
  mek = mek.messages.all()[0]
  if (!mek.message) return
  if (mek.key && mek.key.remoteJid == 'status@broadcast') return
  if (mek.key.fromMe) return
  global.prefix
  global.blocked
  const content = JSON.stringify(mek.message)
  const from = mek.key.remoteJid
  const type = Object.keys(mek.message)[0]
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const jam = moment.tz('Asia/Jakarta').format('HH:mm')
//--
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const value = args.join(' ')
const isCmd = body.startsWith(prefix)
const totalchat = await Lxa.chats.all()
const botNumber = Lxa.user.jid			
//-- Group Metadata
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? mek.participant : mek.key.remoteJid
  const groupMetadata = isGroup ? await Lxa.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
  const isOwner = ownerNumber.includes(sender)
  const isVerify = _user.includes(sender)
  const isPrem = premium.includes(sender) || isOwner
  const isBan = blocked.includes(sender)
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isWelcom = isGroup ? _welcom.includes(from) : false
  const isAnti = isGroup ? _antilink.includes(from) : false
  const pushname = Lxa.contacts[sender] != undefined ? Lxa.contacts[sender].vname || Lxa.contacts[sender].notify: undefined 
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Get all user data

		let money;
		try{
			let _money = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/money.json`));
			money = _money[0]	//--- money	
		}catch (err){
			
		}
		let xp;
		try{ 
		let _xp = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/xp.json`));
		xp = Number(_xp[0])	//--- xp
	}catch (err){
		
	}
		let status;
		try{	
		let _status = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/status.json`));
		status = _status[0]	//--- status	
	}catch (err){
		
	}
		let stickerpack;
		try{			
		let _stickerpack = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/stickerpack.json`));
		stickerpack = _stickerpack[0]	//--- stickerpack
	}catch (err){
		
	}
		let pushnames;
		try{	
		let _pushnames = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/pushname.json`));
		pushnames = _pushnames[0]	//--- pushname
	}catch (err){
		
	}
		let username;
		try{			
		let _username = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/username.json`));
		username = _username[0]	//--- usersname	
	}catch (err){
		
	}
		let age;
		try{	
		let _age = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/age.json`));
		age = _age[0]	//--- age	
	}catch (err){
		
	}
		let emojie;
		try{	
		let _emojie = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/emojie.json`));
		emojie = _emojie[0]	//--- emojie
	}catch (err){
		
	}
		let id;
		try{	
		let _id = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/id.json`));
		id = _id[0]	//--- id
	}catch (err){
		
	}
		let design;
		try{			
		let _design = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/design.json`));
		design = _design[0]	//--- design
	}catch (err){
		
	}
		let email;
		try{		
		let _email = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/email.json`));
		email = _email[0]	//--- email
	}catch (err){
		
	}
		let version;
		try{	
		let _version = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/version.json`));
		version = _version[0]	//--- version
	}catch (err){
		
	}
		let password;
		try{			
		let _password = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/password.json`));
		password = _password[0]	//--- password	
	}catch (err){
		
	}
		let songs;
		try{		
		let _songs = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/songs.json`));
		songs = _songs[0]	//--- songs	
	}catch (err){
		
	}
		let pictures;
		try{	
		let _pictures = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/pictures.json`));
		pictures = _pictures[0]	//--- pictures
	}catch (err){
		
	}
		let userhit;
		try{	
		let _usershit = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/usershit.json`));
		usershit = _usershit[0]	//--- usershit
	}catch (err){
		
	}
		let messages;
		try{	
		let _messages = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/messages.json`));
		messages = _messages[0]	//--- messages
	}catch (err){
		
	}
		let messagesnumber;
		try{	
		let _messagesnumber = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/messagesnumber.json`));
		messagesnumber = _messagesnumber[0]	//--- messagesnumber
	}catch (err){
		
	}
		let userlocation;
		try{	
		let _userlocation = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/location.json`));
		userlocation = _userlocation[0]	//--- location
	}catch (err){
		
	}
		let accdate;
		try{	
		let _accdate = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/accdate.json`));
		accdate = _accdate[0]	//--- accdate
	}catch (err){
		
	}
		let claim;
		try{	
		let _claim = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/claim.json`));
		claim = _claim[0]	//--- claim
	}catch (err){
		
	}
		let bday;
		try{	
		let _bday = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/bday.json`));
		bday = _bday[0]	//--- birth date
	}catch (err){
		
	}
	
		let tickets;
		try{	
		let _tickets = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/tickets.json`));
		tickets = _tickets[0]	//--- tickets
	}catch (err){
		
	}
		let mood;
		try{	
		let _mood = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/mood.json`));
		mood = _mood[0]	//--- mood
	}catch (err){
		
	}

    if (isCmd) Lxa.chatRead(from)  
//-- other
  const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
  const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Lxa.user.phone
//-- function reply
			const reply = (teks) => {
				Lxa.sendMessage(from, teks, text, {quoted:mek })
			}
			
			const sendMess = (hehe, teks) => {
				Lxa.sendMessage(hehe, teks, text)
			}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Lxa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Lxa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
      const replyimg = (pesan, tipe, rep1, rep2) => {
        Lxa.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": `${rep1}`,
"fileLength": "201809",
"jpegThumbnail": `${rep2}` } } }})
      }			

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//

//REMINDER PLUGIN LADEN.......s
// var reminder = require("./_tools/reminder")
//Beim Laden des Reminder-plugins wird mitgegeben, was an den Erinnerungsterminen gemacht werden soll:
// console.log( reminder.load(function (event) {reply(`@${event.usernum}, i shall remind you of something! ${event.message}`)}));

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//

//--MessageType
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
//-- watermark stiker
function addMetadata(packname, author) {	
    if (!packname) packname = '𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑'; if (!author) author = pushname ;	
    author = author.replace(/[^a-zA-Z0-9]/g, '');	
    var name = `${author}_${packname}`
    if (fs.existsSync(`./exif/${name}.exif`)) return `./exif/${name}.exif`
    const json = {	
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }
    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

    var len = JSON.stringify(json).length	
    var last	

    if (len > 256) {	
        len = len - 256	
        bytes.unshift(0x01)	
    } else {	
        bytes.unshift(0x00)	
    }	
    if (len < 16) {	
        last = len.toString(16)	
        last = "0" + len	
    } else {	
        last = len.toString(16)	
    }	
    const buf2 = Buffer.from(last, "hex")	
    const buf3 = Buffer.from(bytes)	
    const buf4 = Buffer.from(JSON.stringify(json))	
    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
    fs.writeFile(`./exif/${name}.exif`, buffer, (err) => {	
        return `./exif/${name}.exif`	
    })	
}
//--Colors
colors = ['red','white','black','blue','yellow','green']
//--Console log grup
if (!isGroup && isCmd) console.log(color('[𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 ♕︎]','aqua'), "CP", color(command, "green"), "from", (sender.split('@')[0]),  args.length)			
//--Private Chat-Log-Konsole
if (isGroup && isCmd) console.log(color('[𝚂𝚝𝚊𝚛𝙳𝚊𝚜𝚑 ♕︎]','aqua'), "GC", color(command, "green"), "from", (sender.split('@')[0]), "in", (groupName), args.length)
//-- Status
var prem_ = '𝚞𝚜𝚎𝚛'
			if (isPrem) {
			prem_ = '𝑃𝑟𝑜'
			} 
			if (isOwner) {
			prem_ = '𝙾𝚠𝚗𝚎𝚛'
			}
var Welcome_ = 'Off'
			if (isWelcom) {
			Welcome_ = 'On'
			}
var AntiLink_ = 'Off'
			if (isAnti) {
			AntiLink_ 
			}
//--- Total command user
//const usercmd = () => {
//	userhit[0].totalcmd += 1
//	fs.writeFileSync(`./data/users/${sender.split("@")[0]}/userhit.json`, JSON.stringify(userhit))
//}
// if (isCmd) usercmd()
// const sreqcmd = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/userhit.json`))[0].totalcmd
//--- Total command
//const cmdadd = () => {
//	hit[0].totalcmd += 1
//	fs.writeFileSync('./data/totalhit.json', JSON.stringify(hit))
//}
//  if (isCmd) cmdadd()
//  const reqcmd = JSON.parse(fs.readFileSync('./data/totalhit.json'))[0].totalcmd
//--Member limit
if (isGroup) {
  try {
    const getmemex = groupMembers.length
    if (getmemex <= memberlimit) {
  Lxa.sendMessage(from, `⌯   ﹝𝙶𝚛𝚘𝚞𝚙 𝚒𝚜 𝚝𝚘𝚘 𝚜𝚖𝚊𝚕𝚕.﹞`, text)

    setTimeout(() => {
    Lxa.groupLeave(from) // ur cods
  }, 5000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}
// ---- Antilink 
const linkwa = 'http'
		if (budy.includes(`${linkwa}`) || budy.length > 100){
		if (!isGroup) return
		if (!isAnti) return
    if (!isBotGroupAdmins) return reply('☑️ 𝑖 𝑛𝑒𝑒𝑑 𝑎𝑑𝑚𝑖𝑛 𝑓𝑜𝑟 𝑡ℎ𝑖𝑠 𝑡𝑜 𝑤𝑜𝑟𝑘.')
    linkgc = await Lxa.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgc}`)) return reply('☑️ 𝑖 𝑛𝑒𝑒𝑑 𝑎𝑑𝑚𝑖𝑛 𝑓𝑜𝑟 𝑡ℎ𝑖𝑠 𝑡𝑜 𝑤𝑜𝑟𝑘.')
		if (isGroupAdmins || isVerify) return reply(`☑️ 𝐴𝑑𝑚𝑖𝑛 𝑜𝑟 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑒𝑑. 𝑌𝑜𝑢 𝑤𝑜𝑛𝑡 𝑏𝑒 𝑘𝑖𝑐𝑘𝑒𝑑 𝑓𝑜𝑟 𝑠𝑒𝑛𝑑𝑖𝑛𝑔 𝑙𝑜𝑛𝑔 𝑚𝑒𝑠𝑠𝑎𝑔𝑒𝑠 𝑜𝑟 𝑙𝑖𝑛𝑘𝑠.`)
		Lxa.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		}, 1100)
		setTimeout( () => {
		Lxa.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		
		}, 0)
	}
  

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
switch(is) { case '/menu': reply('☑️ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑢𝑠𝑒 .𝑚𝑒𝑛𝑢')}
switch(is) { case '#menu': reply('☑️ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑢𝑠𝑒 .𝑚𝑒𝑛𝑢')}
switch(is) { case '*menu': reply('☑️ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑢𝑠𝑒 .𝑚𝑒𝑛𝑢')}

switch(is) { case '.symbol': reply(`✅ 𝑌𝑜𝑢 𝑐𝑎𝑛 𝑐ℎ𝑜𝑜𝑠𝑒.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n.𝑠𝑡𝑎𝑟𝑠\n.𝑤𝑖𝑙𝑑\n.𝑡𝑒𝑥𝑚𝑜𝑗𝑖𝑒\n.𝑔𝑒𝑛𝑑𝑒𝑟𝑠\n.𝑜𝑡ℎ𝑒𝑟𝑠`)}
switch(is) { case '.mimi': reply('I wana live in Korea😭💜') 
reply('Taes wifey💜💍✨😫') 
reply('🤕💜')}

switch(is) {
case '.tos':
reply(`☑️ 𝑇𝑒𝑟𝑚𝑠 𝑜𝑓 𝑆𝑒𝑟𝑣𝑖𝑐𝑒\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n» What is X623?\n
X623 is a Bot which has many types of usefull commands and fun games. It is coded by the developer joewilliams007 whom you can find on Github
\n» What happens when i register?\n\nWhen you register to our Bot, an Account file is created. At the start it includes:\n
• Phone Number
• Pushname
• Account creation date
• Registration name
\nInformation you can give when using the Bot:
\n• X623 Money
• X623 Tickets
• X623 XP
• X623 Claim status
• age
• country 
• language
• email
• friends
• mood
• AboutMe
• Birthday
• image send command list
• song download list
• Wikipedia search list
\nNote: You can always devare your account after registering ( via command .devaremyaccount ) and everything will get devared.`)}
    
switch(is) {case '.nata':reply('Legi ❤️🦔🐺')
reply('I love Redbull 💙😼')
reply('🍉🍉🍉')}
switch(is) {case 'ily':reply('ily2')}	
switch(is) {case '.stars':case '.sterne':reply('★✰✯☆✩✵✫𖣔۞⍟✪')}	
switch(is) {case '.textmojie':case '.textemojie':reply('ʕ•ᴥ•ʔ ฅ^•ﻌ•^ฅ ʕ •́؈•̀ ₎ ༼ つ ◕◡◕ ༽つ  ♡´･ᴗ･`♡')}	
switch(is) {case '.others':case '.other':reply('☽︎☾︎♡︎♫︎𓂸𓂺シ︎㋛︎ت︎༒︎☏︎𓂀☻︎❦︎ꨄ︎ఌ︎❥︎᯾𖣘Ꙭ𖦹߷༄༆𖧷᪥☼︎␈♕︎♔︎𖠌♲︎︎︎')}			
switch(is) {case '.gender':case '.genders':reply('⚣︎⚢︎⚣︎⚥︎⚤︎')}			
switch(is) {case '.wild':reply('𓅓𓆙𓅷𓆏𓃰𓄁𓀐𓀿𓃠𓅿𓃟𓆈𓀬𓃗𓃱𓀡𓅰𓆉︎𓁹')}			  
switch(is) { case '.🇦🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Afghanistan') }  switch(is) { case '.🇦🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Åland Islands') }  switch(is) { case '.🇦🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Albania') }  switch(is) { case '.🇩🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Algeria') }  switch(is) { case '.🇦🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ American Samoa') }  switch(is) { case '.🇦🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Andorra') }  switch(is) { case '.🇦🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Angola') }  switch(is) { case '.🇦🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Anguilla') }  switch(is) { case '.🇦🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antarctica') }  switch(is) { case '.🇦🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Antigua and Barbuda') } switch(is) { case '.🇦🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Argentina') } switch(is) { case '.🇦🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Armenia') } switch(is) { case '.🇦🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Aruba') } switch(is) { case '.🇦🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Australia') } switch(is) { case '.🇦🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Austria') } switch(is) { case '.🇦🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Azerbaijan') } switch(is) { case '.🇧🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bahamas') } switch(is) { case '.🇧🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ 🇧🇭') } switch(is) { case '.🇧🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bangladesh') } switch(is) { case '.🇧🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Barbados') } switch(is) { case '.🇧🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belarus') } switch(is) { case '.🇧🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belgium') } switch(is) { case '.🇧🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Belize') } switch(is) { case '.🇧🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Benin') } switch(is) { case '.🇧🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bermuda') } switch(is) { case '.🇧🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bhutan') } switch(is) { case '.🇧🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bolivia') } switch(is) { case '.🇧🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bosnia and Herzegovina') } switch(is) { case '.🇧🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Botswana') } switch(is) { case '.🇧🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bouvet Island') } switch(is) { case '.🇧🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brazil') } switch(is) { case '.🇮🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Indian Ocean Territory') } switch(is) { case '.🇧🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Brunei') } switch(is) { case '.🇧🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Bulgaria') } switch(is) { case '.🇧🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burkina Faso') } switch(is) { case '.🇧🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Burundi') } switch(is) { case '.🇰🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cambodia') } switch(is) { case '.🇨🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cameroon') } switch(is) { case '.🇨🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Canada') } switch(is) { case '.🇨🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cape Verde') } switch(is) { case '.🇧🇶 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Caribbean Netherlands') } switch(is) { case '.🇰🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cayman Islands') }switch(is) { case '.🇨🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Central African Republic') } switch(is) { case '.🇹🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chad') } switch(is) { case '.🇨🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Chile') } switch(is) { case '.🇨🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ China') } switch(is) { case '.🇨🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Christmas Island') } switch(is) { case '.🇨🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cocos (Keeling) Islands') } switch(is) { case '.🇨🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Colombia') } switch(is) { case '.🇰🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Comoros') } switch(is) { case '.🇨🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Republic of the Congo') } switch(is) { case '.🇨🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ DR Congo') } switch(is) { case '.🇨🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cook Islands') } switch(is) { case '.🇨🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Costa Rica') } switch(is) { case '.🇨🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Côte dIvoire Ivory Coast') } switch(is) { case '.🇭🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Croatia') } switch(is) { case '.🇨🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cuba') } switch(is) { case '.🇨🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Curaçao') } switch(is) { case '.🇨🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Cyprus') } switch(is) { case '.🇨🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Czechia') } switch(is) { case '.🇩🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Denmark') } switch(is) { case '.🇩🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Djibouti') } switch(is) { case '.🇩🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominica') } switch(is) { case '.🇩🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Dominican Republic') } switch(is) { case '.🇪🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ecuador') } switch(is) { case '.🇪🇬 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Egypt') } switch(is) { case '.🏴󠁧󠁢󠁥󠁮󠁧󠁿 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ England') } switch(is) { case '.🇬🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Equatorial Guinea') } switch(is) { case '.🇪🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eritrea') } switch(is) { case '.🇪🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Estonia') } switch(is) { case '.🇸🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Eswatini Swaziland') } switch(is) { case '.🇪🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ethiopia') } switch(is) { case '.🇫🇰 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Falkland Islands') } switch(is) { case '.🇫🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Faroe Islands') } switch(is) { case '.🇫🇯 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Fiji') } switch(is) { case '.🇫🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Finland') } switch(is) { case '.🇫🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ France') } switch(is) { case '.🇬🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Guiana') } switch(is) { case '.🇵🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Polynesia') } switch(is) { case '.🇹🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ French Southern and Antarctic Lands') } switch(is) { case '.🇬🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gabon') } switch(is) { case '.🇬🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gambia') } switch(is) { case '.🇬🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Georgia') } switch(is) { case '.🇩🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Germany') } switch(is) { case '.🇬🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ghana') } switch(is) { case '.🇬🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Gibraltar') } switch(is) { case '.🇬🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greece') } switch(is) { case '.🇬🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Greenland') } switch(is) { case '.🇬🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Grenada') } switch(is) { case '.🇬🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guadeloupe') } switch(is) { case '.🇬🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guam') } switch(is) { case '.🇬🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guatemala') } switch(is) { case '.🇬🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guernsey') } switch(is) { case '.🇬🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea') } switch(is) { case '.🇬🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guinea-Bissau') } switch(is) { case '.🇬🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Guyana') } switch(is) { case '.🇭🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Haiti') } switch(is) { case '.🇭🇲 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Heard Island and McDonald Islands') } switch(is) { case '.🇭🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Honduras') } switch(is) { case '.🇭🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hong Kong') } switch(is) { case '.🇭🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Hungary') } switch(is) { case '.🇮🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iceland') } switch(is) { case '.🇮🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ India') } switch(is) { case '.🇮🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Indonesia') } switch(is) { case '.🇮🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iran') }switch(is) { case '.🇮🇶': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Iraq') }switch(is) { case '.🇮🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ireland') }switch(is) { case '.🇮🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Isle of Man') }switch(is) { case '.🇮🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Israel') }switch(is) { case '.🇮🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Italy') }switch(is) { case '.🇯🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jamaica') }switch(is) { case '.🇯🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Japan') }switch(is) { case '.🇯🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jersey') }switch(is) { case '.🇯🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Jordan') }switch(is) { case '.🇰🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kazakhstan') }switch(is) { case '.🇰🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kenya') }switch(is) { case '.🇰🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kiribati') }switch(is) { case '.🇰🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Korea') }switch(is) { case '.🇰🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Korea') }switch(is) { case '.🇽🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kosovo') }switch(is) { case '.🇰🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kuwait') }switch(is) { case '.🇰🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Kyrgyzstan') }switch(is) { case '.🇱🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Laos') }switch(is) { case '.🇱🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Latvia') }switch(is) { case '.🇱🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lebanon') }switch(is) { case '.🇱🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lesotho') }switch(is) { case '.🇱🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liberia') }switch(is) { case '.🇱🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Libya') }switch(is) { case '.🇱🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Liechtenstein') }switch(is) { case '.🇱🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Lithuania') }switch(is) { case '.🇱🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Luxembourg') } switch(is) { case '.🇲🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Macau') } switch(is) { case '.🇲🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Madagascar') }switch(is) { case '.🇲🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malawi') }switch(is) { case '.🇲🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malaysia') }switch(is) { case '.🇲🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Maldives') }switch(is) { case '.🇲🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mali') }switch(is) { case '.🇲🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Malta') }switch(is) { case '.🇲🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Marshall Islands') }switch(is) { case '.🇲🇶 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Martinique') }switch(is) { case '.🇲🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritania') }switch(is) { case '.🇲🇺 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mauritius') }switch(is) { case '.🇾🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mayotte') }switch(is) { case '.🇲🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mexico') }switch(is) { case '.🇫🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Micronesia') }switch(is) { case '.🇲🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Moldova') }switch(is) { case '.🇲🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Monaco') } switch(is) { case '.🇲🇳 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mongolia') }switch(is) { case '.🇲🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montenegro') }switch(is) { case '.🇲🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Montserrat') }switch(is) { case '.🇲🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Morocco') }switch(is) { case '.🇲🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Mozambique') }switch(is) { case '.🇲🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Myanmar') }switch(is) { case '.🇳🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Namibia') }switch(is) { case '.🇳🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nauru') }switch(is) { case '.🇳🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nepal') }switch(is) { case '.🇳🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Netherlands') }switch(is) { case '.🇳🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Caledonia') }switch(is) { case '.🇳🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ New Zealand') }switch(is) { case '.🇳🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nicaragua') }switch(is) { case '.🇳🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niger') }switch(is) { case '.🇳🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Nigeria') }switch(is) { case '.🇳🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Niue') }switch(is) { case '.🇳🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norfolk Island') }switch(is) { case '.🇲🇰 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ North Macedonia') }switch(is) { case '.🇲🇵': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Northern Mariana Islands') }switch(is) { case '.🇳🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Norway') }switch(is) { case '.🇴🇲 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Oman') }switch(is) { case '.🇵🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pakistan') }switch(is) { case '.🇵🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palau') }switch(is) { case '.🇵🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Palestine') }switch(is) { case '.🇵🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Panama') }switch(is) { case '.🇵🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Papua New Guinea') }switch(is) { case '.🇵🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Paraguay') }switch(is) { case '.🇵🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Peru') }switch(is) { case '.🇵🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Philippines') }switch(is) { case '.🇵🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Pitcairn Islands') }switch(is) { case '.🇵🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Poland') }switch(is) { case '.🇵🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Portugal') }switch(is) { case '.🇵🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Puerto Rico') }switch(is) { case '.🇶🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Qatar') }switch(is) { case '.🇷🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Réunion') }switch(is) { case '.🇷🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Romania') }switch(is) { case '.🇷🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Russia') }switch(is) { case '.🇷🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Rwanda') }switch(is) { case '.🇧🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Barthélemy') }switch(is) { case '.🇸🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Helena, Ascension and Tristan da Cunha') }switch(is) { case '.🇰🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Kitts and Nevis') }switch(is) { case '.🇱🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Lucia') }switch(is) { case '.🇲🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Martin') }switch(is) { case '.🇵🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Pierre and Miquelon') }switch(is) { case '.🇻🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saint Vincent and the Grenadines') }switch(is) { case '.🇼🇸 ': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Samoa') }switch(is) { case '.🇸🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ San Marino') }switch(is) { case '.🇸🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ São Tomé and Príncipe') }switch(is) { case '.🇸🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Saudi Arabia') }switch(is) { case '.🏴󠁧󠁢󠁳󠁣󠁴󠁿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Scotland') } switch(is) { case '.🇸🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Senegal') }switch(is) { case '.🇷🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Serbia') }switch(is) { case '.🇸🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Seychelles') }switch(is) { case '.🇸🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sierra Leone') }switch(is) { case '.🇸🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Singapore') }switch(is) { case '.🇸🇽': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sint Maarten') }switch(is) { case '.🇸🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovakia') }switch(is) { case '.🇸🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Slovenia') }switch(is) { case '.🇸🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Solomon Islands') }switch(is) { case '.🇸🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Somalia') }switch(is) { case '.🇿🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Africa') }switch(is) { case '.🇬🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Georgia') }switch(is) { case '.🇸🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ South Sudan') }switch(is) { case '.🇪🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Spain') }switch(is) { case '.🇱🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sri Lanka') }switch(is) { case '.🇸🇩': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sudan') }switch(is) { case '.🇸🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Suriname') }switch(is) { case '.🇸🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Svalbard and Jan Mayen') }switch(is) { case '.🇸🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Sweden') }switch(is) { case '.🇨🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Switzerland') }switch(is) { case '.🇸🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Syria') }switch(is) { case '.🇹🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Taiwan') }switch(is) { case '.🇹🇯': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tajikistan') }switch(is) { case '.🇹🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tanzania') }switch(is) { case '.🇹🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Thailand') }switch(is) { case '.🇹🇱': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Timor-Leste') }switch(is) { case '.🇹🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Togo') }switch(is) { case '.🇹🇰': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tokelau') }switch(is) { case '.🇹🇴': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tonga') } switch(is) { case '.🇹🇹': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Trinidad and Tobago ') } switch(is) { case '.🇹🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tunisia') } switch(is) { case '.🇹🇷': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkey') } switch(is) { case '.🇹🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turkmenistan') } switch(is) { case '.🇹🇨': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Turks and Caicos Islands') } switch(is) { case '.🇹🇻': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Tuvalu') } switch(is) { case '.🇺🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uganda') } switch(is) { case '.🇺🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Ukraine') } switch(is) { case '.🇦🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Arab Emirates') } switch(is) { case '.🇬🇧': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United Kingdom') } switch(is) { case '.🇺🇸': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States') } switch(is) { case '.🇺🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Minor Outlying Islands') } switch(is) { case '.🇺🇾': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uruguay') } switch(is) { case '.🇺🇿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Uzbekistan') } switch(is) { case '.🇻🇺': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vanuatu') } switch(is) { case '.🇻🇦': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vatican City (Holy See)') } switch(is) { case '.🇻🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Venezuela') } switch(is) { case '.🇻🇳': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Vietnam') } switch(is) { case '.🇻🇬': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ British Virgin Islands') } switch(is) { case '.🇻🇮': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ United States Virgin Islands') } switch(is) { case '.🏴󠁧󠁢󠁷󠁬󠁳󠁿': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wales') } switch(is) { case '.🇼🇫': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Wallis and Futuna') } switch(is) { case '.🇪🇭': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Western Sahara') } switch(is) { case '.🇾🇪': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Yemen') } switch(is) { case '.🇿🇲': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zambia') } switch(is) { case '.🇿🇼': reply('⌯ ﹝𝚝𝚑𝚒𝚜 𝚏𝚕𝚊𝚐 𝚋𝚎𝚕𝚘𝚗𝚐𝚜 𝚝𝚘﹞ Zimbabwe') }
 
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
const newLocal = 'upslot';
//-- Command
switch(command) {	//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Menu
case 'menu':
case 'help':
case 'premium':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑀𝑒𝑛𝑢 ☁️
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .feed
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-  
${design} .star  
${design} .games
${design} .tools
${design} .edit
${design} .settings
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .admin
${design} .owners
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
break
case 'star':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑆𝑡𝑎𝑟𝑃𝑖𝑐𝑡𝑢𝑟𝑒 ✨
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .starpicture
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .sp
${design} .mysp
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break
case 'games':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝐺𝑎𝑚𝑒𝑠 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .slot
${design} .truth
${design} .dare
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .fact
${design} .dice
${design} .meme
${design} .emojie
${design} .pokemon
${design} .animal
${design} .gay
${design} .love
${design} .say
${design} .flag
${design} .euflag
${design} .dog
${design} .nsfw
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
	 break

case 'tools':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑇𝑜𝑜𝑙𝑠 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .song
${design} .send
${design} .weather
${design} .translate
${design} .calc
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .note
${design} .wame
${design} .wish
${design} .rsong
${design} .symbol
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
	 break  
     
case 'edit':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝐸𝑑𝑖𝑡 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .sticker
${design} .image
${design} .rmbg
${design} .rmbgs
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .blur
${design} .saturation
${design} .brightness
${design} .filter
${design} .flip
${design} .bw
${design} .cover
${design} .cool
${design} .watermarkimage
${design} .watermarkvideo
${design} .mp3
${design} .audiolevel
${design} .speed
${design} .crush
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
	 break  
     
case 'settings':
case 'setting':
    if (!isVerify) return reply(userB(prefix))

reply(`𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠 ⚙️
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
» ${id}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
🏷️ .name 
✅ ${username}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
📃 .age
✅ ${age}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
🪐 .mood 
✅ ${mood}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
🗝️ .password 
✅ ${password}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
📧 .email 
✅ ${email}
ℹ️ Notifications.
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
📌 .location 
✅ ${userlocation}
ℹ️ For Weather feed.
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .design 
✅ ${design}
ℹ️ For Account Design.
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break  
case 'admin':
     if (!isVerify) return reply(userB(prefix))
     if (!isBotGroupAdmins) return reply(`${design} 𝑂𝑛𝑙𝑦𝐹𝑜𝑟𝐴𝑑𝑚𝑖𝑛𝑠`)

reply(`𝐴𝑑𝑚𝑖𝑛 📡
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
» ${id}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .kick
${design} .promote 
${design} .demote
${design} .tagall
${design} .add
${design} .link
${design} .leave 
${design} .antilink
${design} .devare
${design} .listonline
${design} .listadmin
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
	 break      
case 'owners':
     if (!isVerify) return reply(userB(prefix))
     if (!isOwner) return reply(ownerB())

reply(`𝑂𝑤𝑛𝑒𝑟 🛠️
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
» ${pushname}
» ${id}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .pika
${design} .ping
${design} .wame
${design} .clearchat
${design} .bc
${design} .updatebot
${design} .updates
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » _${money}$_
`)
	 break      

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//--- verify and register
case 'verify':
case 'daftar':
case 'registrieren':
case 'register':

				if (isVerify) return reply('✅ 𝑌𝑜𝑢 𝑎𝑟𝑒 𝑎𝑙𝑟𝑒𝑎𝑑𝑦 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑒𝑑.') 
				if (args.length < 1) return reply(`☑️  𝑅𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑡𝑖𝑜𝑛\n𝐵𝑦 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟𝑖𝑛𝑔 𝑦𝑜𝑢 𝑎𝑔𝑟𝑒𝑒 𝑡𝑜 𝑡ℎ𝑒 𝑏𝑜𝑡𝑠 𝑇𝑜𝑆. 𝑉𝑖𝑒𝑤 𝑡ℎ𝑒𝑚 𝑏𝑦 𝑠𝑒𝑛𝑑𝑖𝑛𝑔 » .tos «\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nℹ️ 𝐻𝑜𝑤 𝑡𝑜 𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟\n.𝑟𝑒𝑔𝑖𝑠𝑡𝑒𝑟 𝑆𝑡𝑎𝑟`)
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

			exec(`mkdir ./data/users/${sender.split("@")[0]}`)
			await delay(1000) /// waiting 1 second.
									
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
                fs.appendFile(`./data/users/${sender.split("@")[0]}/age.json`, `[".setage"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/emojie.json`, `[".setemojie"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/id.json`, `["${userid}"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/design.json`, `["⌥"]`, function (err) {				
                if (err) throw err;
                });	
                fs.appendFile(`./data/users/${sender.split("@")[0]}/email.json`, `[".setemail"]`, function (err) {				
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
                fs.appendFile(`./data/users/${sender.split("@")[0]}/mood.json`, `["Happy"]`, function (err) {				
                if (err) throw err;
                });	
				console.log('finished'); 					
			    break

//--- Devare account message
case 'devaremyaccount':
case 'devareaccount':

    if (!isVerify) return reply(userB())
        
    reply('❌ 𝑃𝑙𝑒𝑎𝑠𝑒 𝑟𝑒𝑎𝑑.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐵𝑦 𝑑𝑒𝑙𝑒𝑡𝑖𝑛𝑔 𝑦𝑜𝑢𝑟 𝑎𝑐𝑐𝑜𝑢𝑛𝑡 - 𝑎𝑙𝑙 𝑦𝑜𝑢𝑟 𝑑𝑎𝑡𝑎 𝑤𝑖𝑙𝑙 𝑏𝑒 𝑑𝑒𝑙𝑒𝑡𝑒𝑑 𝑓𝑜𝑟𝑒𝑣𝑒𝑟. 𝑀𝑜𝑛𝑒𝑦, 𝑋𝑝, 𝑁𝑎𝑚𝑒 𝑒𝑡𝑐 𝑎𝑙𝑙 𝑔𝑜𝑛𝑒. 𝐼𝑓 𝑦𝑜𝑢 𝑎𝑟𝑒 𝑠𝑢𝑟𝑒 𝑎𝑏𝑜𝑢𝑡 𝑦𝑜𝑢𝑟 𝑑𝑒𝑐𝑖𝑠𝑠𝑖𝑜𝑛, 𝑝𝑙𝑒𝑎𝑠𝑒 𝑡𝑦𝑝𝑒 .𝑖𝑎𝑚𝑠𝑢𝑟𝑒')

break            

//--- Devare account
case 'iamsure':

	if (!isVerify) return reply(userB())
				
            //-- Devare from registered file

			fs.readFile(`./data/bot/user.json`, 'utf-8', function(err, data) {
				if (err) throw err;				
				var newValue = data.replace(`${sender}`, `DevaredAccount`);				
				fs.writeFile(`./data/bot/user.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Account Devared!');
				})
			})	

            //-- Devare all Files of user
            exec (`rm -rf data/users/${sender.split("@")[0]}`)
            reply('☑️ 𝑌𝑜𝑢𝑟 𝑎𝑐𝑐𝑜𝑢𝑛𝑡 𝑤𝑎𝑠 𝑑𝑒𝑙𝑒𝑡𝑒𝑑.')			
			await delay(2000) /// waiting 1 second.
			process.exit(1);
	break

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- flag eu
case 'euflag':
case 'europa':
case 'flagge':
  if (!isVerify) return reply(userB())
  const euf = _euf[Math.floor(Math.random() * _euf.length)]
  reply(`${design} 𝐺𝑢𝑒𝑠𝑠 𝑡ℎ𝑒 𝑓𝑙𝑎𝑔 𝑎𝑛𝑑 𝑠𝑒𝑛𝑑 𝑖𝑡 𝑙𝑖𝑘𝑒 𝑠ℎ𝑜𝑤𝑛: .🇬🇧\n𝑌𝑜𝑢𝑟 𝑓𝑙𝑎𝑔 𝑖𝑠: ${euf}`)
break
//-- worldflags
case 'flag':
case 'flags':
  if (!isVerify) return reply(userB())
  const wf = _wf[Math.floor(Math.random() * _wf.length)]
  reply(`${design} 𝐺𝑢𝑒𝑠𝑠 𝑡ℎ𝑒 𝑓𝑙𝑎𝑔 𝑎𝑛𝑑 𝑠𝑒𝑛𝑑 𝑖𝑡 𝑙𝑖𝑘𝑒 𝑠ℎ𝑜𝑤𝑛: .🇬🇧\n𝑌𝑜𝑢𝑟 𝑓𝑙𝑎𝑔 𝑖𝑠: ${wf}`)
break
//-- randomsong
case 'rsong':
case 'randomsong':
  if (!isVerify) return reply(userB())
  const song = _song[Math.floor(Math.random() * _song.length)]
  reply(`${design} 𝑅𝑎𝑛𝑑𝑜𝑚 𝑠𝑜𝑛𝑔\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${song}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Download with .song_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ StarDash Song`)
break
//-- truth
case 'truth':				
  if (!isVerify) return reply(userB())
  const truth = _truth[Math.floor(Math.random() * _truth.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑡𝑟𝑢𝑡ℎ\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${truth}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐺𝑎𝑚𝑒𝑠`)
break
//-- Tod dare
case 'dare':
  if (!isVerify) return reply(userB())
  const dare = _dare[Math.floor(Math.random() * _dare.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑑𝑎𝑟𝑒\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${dare}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐺𝑎𝑚𝑒𝑠`)
break
//-- Facts
case 'fact':
  if (!isVerify) return reply(userB())
  const fact = _facts[Math.floor(Math.random() * _facts.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑓𝑎𝑐𝑡\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${fact}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐹𝑎𝑐𝑡𝑠`)
break
//-- pokemon
case 'pokemon':
  if (!isVerify) return reply(userB())
  const pokemon = _pokemon[Math.floor(Math.random() * _pokemon.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑃𝑜𝑘𝑒𝑚𝑜𝑛\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${pokemon}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐺𝑎𝑚𝑒𝑠`)
break
//-- animal
case 'animal':
  if (!isVerify) return reply(userB())
  const animal = _animal[Math.floor(Math.random() * _animal.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑎𝑛𝑖𝑚𝑎𝑙\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${animal}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐺𝑎𝑚𝑒𝑠`)
break
case 'gay':
case 'gaymeter':
  if (!isVerify) return reply(userB())
  if (args.length > 1) {
  const gay = _gay[Math.floor(Math.random() * _gay.length)]
  reply(`𓂸 𝑇ℎ𝑖𝑠 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠 ${gay}% 𝑔𝑎𝑦.`)
  }
  else { 
	  reply(`𓂸 𝑌𝑜𝑢𝑟 𝑎𝑟𝑒 ${gay}% 𝑔𝑎𝑦.`)
  }
break
//-- love
case 'love':

  if (!isVerify) return reply(userB())
	  if (args.length < 2) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑎𝑑𝑑 𝑡𝑤𝑜 𝑛𝑎𝑚𝑒 𝑡𝑜 𝑓𝑖𝑛𝑑 𝑜𝑢𝑡 𝑡ℎ𝑒𝑖𝑟 𝑙𝑜𝑣𝑒.`)		  
  const love = _love[Math.floor(Math.random() * _love.length)]
  reply(`${love}`)
break
case 'nsfw':
  if (!isVerify) return reply(userB())
  const nsfw = _nsfw[Math.floor(Math.random() * _nsfw.length)]
  reply(`${design} 𝐻𝑒ℎ𝑒 😏\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n${nsfw}`)
break
//-- Dice
case 'roll':
case 'dice':
  if (!isVerify) return reply(userB())
  const roll = _roll[Math.floor(Math.random() * _roll.length)]
buffer = fs.readFileSync(`./media/dice/${roll}.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
break
//-- MEME
case 'meme':
case 'memes':
case 'joke':
  if (!isVerify) return reply(userB())
const meme = _meme[Math.floor(Math.random() * _meme.length)]
buffer = fs.readFileSync(`./media/meme/${meme}.webp`)
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
break
//-- emoji 
case 'emoji':
case 'e':
case 'emojie':
case 'smiley':
  if (!isVerify) return reply(userB())
  const emoji = _emoji[Math.floor(Math.random() * _emoji.length)]
  reply(`${design} 𝑌𝑜𝑢𝑟 𝑒𝑚𝑜𝑗𝑖𝑒\n${emoji}`)
break
//-- link whatsapp
case 'wame':
case 'mylink':
  if (!isVerify) return reply(userB())
reply(`${design} wa.me/${sender.split('@')[0]}`)
			break				
//-- Aussprache wiederholen
case 'say':
case 'sag':
  if (!isVerify) return reply(userB())
sendMess(from, value)
break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- List Updates
case 'updates':
case 'update':
  if (!isVerify) return reply(userB(prefix))

  capt = `Welcome to Update Center\nYour Version is:\n2.0`
  thum = await fs.readFileSync('./images/menu.jpg').toString('base64')
  
  if (args.length < 1) 
	return replyimg(updates(isGroup), text, capt, thum)
  if (args[0] === 'old' ) {
    return reply(updatesold(prefix, tanggal, jam))
  } 	  
          break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//


//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Dog
case 'dog':
  if (!isVerify) return reply(userB(prefix))	  
  const dog = _dog[Math.floor(Math.random() * _dog.length)]
	buffer = fs.readFileSync(`${dog}`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: 'Wuff ✯'})
break

//-- ping
case 'ping':
 if (!isPrem) return reply(premi())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`✅ 𝑃𝑜𝑛𝑔. 𝑆𝑝𝑒𝑒𝑑: ${latensi.toFixed(4)} 𝑠𝑒𝑐𝑜𝑛𝑑𝑠`)
break

//-- Simsimi
case 'bot':
case 'simi':
if (!isVerify) return reply(userB())
		if (args.length < 1) return reply(`Hai ${pushname}`)
		else {

const alexa = require("alexa-bot-api-v4");
const ai = new alexa();

// [] represents context, since it's an array
ai.getReply(`${value}`, [], "english", "O_o").then((replys) => {
 
  console.log(replys);
  //Do your stuffs with the reply
  reply(`${replys}`)
});
	
	
}
break
  
//-- information
case 'info':
	 
reply(`  ≡ 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛
 
┌───⊷ 𝐵𝑜𝑡 ⊶
├╼ 𝑁𝑎𝑚𝑒 : *${Lxa.user.name}*
├╼ 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : 0.3.7
├╼ 𝑊𝐴𝐶𝑜𝑛𝑛𝑒𝑐𝑡𝑖𝑜𝑛 : *${Lxa.browserDescription[0]}*
├╼ 𝐵𝑟𝑜𝑤𝑠𝑒𝑟 : *${Lxa.browserDescription[1]}*
├╼ 𝐵𝑟𝑜𝑤𝑠𝑒𝑟𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : *${Lxa.browserDescription[2]}*
├╼ 𝑆𝑝𝑒𝑒𝑑 : ${process.uptime()}
└─────────────
┌───⊷ 𝐷𝑒𝑣𝑖𝑐𝑒 ⊶
├╼ 𝐷𝑒𝑣𝑖𝑐𝑒 : ${device_manufacturer}
├╼ 𝑂𝑆 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : ${os_version}
├╼ 𝑀𝑜𝑑𝑒𝑙 : ${device_model}
├╼ 𝑅𝐴𝑀 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├╼ 𝑀𝐶𝐶 : ${mcc}
├╼ 𝑀𝑁𝐶 : ${mnc}
├╼ 𝑊𝑎 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : ${Lxa.user.phone.wa_version}
└──────────────
𝑅𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑟𝑦

𝐺𝑖𝑡ℎ𝑢𝑏 
https://github.com/joewilliams007/x623
𝐷𝑒𝑣
https://github.com/joewilliams007

𝐵𝑎𝑠𝑒 𝑡𝑤𝑜
https://github.com/mrfzvx12/lexav3
𝐵𝑎𝑠𝑒 𝑜𝑛𝑒
https://github.com/MhankBarBar/termux-wabot
`)

break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- pict to sticker
case 'stiker': case 's': case 'stikergif':
case 'sticker': case 'stickergif': case 'sgif':
  if (!isVerify) return reply(userB())
	if (money < 3) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 3$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠`) 
				var money1 = Number(money);
				var cost = Number(10);
				var newmoney = money1 - cost; 

				fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					var newValue = data.replace(`${money1}`, newmoney);
					fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.
 
				reply(`${design} 𝐶𝑟𝑒𝑎𝑡𝑖𝑛𝑔 𝑆𝑡𝑖𝑐𝑘𝑒𝑟 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠`)

				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
						.input(media)
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							reply(stick)
						})
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ${addMetadata('StarDash', stickerpack)} ${ran} -o ${ran}`, async (error) => {
								if (error) return reply(stick())
								Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)	
								fs.unlinkSync(ran)	
							})
						})
						.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					const media = await Lxa.downloadAndSaveMediaMessage(encmedia)
					const tippsticker = _tipps[Math.floor(Math.random() * _tipps.length)]
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
						.inputFormat(media.split('.')[1])
						.on('start', function (cmd) {
							console.log(`Started : ${cmd}`)
						})
						.on('error', function (err) {
							console.log(`Error : ${err}`)
							fs.unlinkSync(media)
							tipe = media.endsWith('.mp4') ? 'video' : 'gif'
							reply(`falsch`)
					  })
						.on('end', function () {
							console.log('Finish')
							exec(`webpmux -set exif ${addMetadata('StarDash', stickerpack)} ${ran} -o ${ran}`, async (error) => {
								if (error) return reply(stick())
								Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})			
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						})
						.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(ran)
				} else {
					reply(`⌯   ﹝𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚊𝚐 𝚊 𝚙𝚒𝚌𝚝𝚞𝚛𝚎.﹞`)
				}
				break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- stiker to image
case 'toimg':
case 'imagesticker':
case 'image':
  if (!isVerify) return reply(UserB())
  if (!isQuotedSticker) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎 𝑠𝑡𝑖𝑐𝑘𝑒𝑟.`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐷𝑜𝑒𝑠 𝑛𝑜𝑡 𝑤𝑜𝑟𝑘 𝑤𝑖𝑡ℎ 𝑎𝑛𝑖𝑚𝑎𝑡𝑒𝑑 𝑠𝑡𝑖𝑐𝑘𝑒𝑟𝑠.`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break						
//-- audio volume
case 'audiolevel':
case 'level':
case 'loud':
case 'volume':
			if (!isQuotedAudio) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑎𝑢𝑑𝑖𝑜`)
			if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑢𝑚𝑏𝑒𝑟 ℎ𝑜𝑤 𝑙𝑜𝑢𝑑.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑎𝑢𝑑𝑖𝑜𝑙𝑒𝑣𝑒𝑙 10`)
	  	reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑖𝑛𝑔 𝑣𝑜𝑙𝑢𝑚𝑒 1/1`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media} -af  'volume=${value}'  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek})
						fs.unlinkSync(ran)
					})
					break	
//-- brightness
case 'brightness':
			if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
			if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑢𝑚𝑏𝑒𝑟 ℎ𝑜𝑤 𝑏𝑟𝑖𝑔ℎ𝑡.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑏𝑟𝑖𝑔ℎ𝑡𝑛𝑒𝑠𝑠 2`)
			if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

			var money1 = Number(money);
			var cost = Number(10);
			var newmoney = money1 - cost; 

			fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				var newValue = data.replace(`${money1}`, newmoney);
				fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
				})
			})
			await delay(1000) /// waiting 1 second.
 
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf eq=brightness=${value} -c:a copy  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐸𝑛𝑡𝑒𝑟 𝑏𝑟𝑖𝑔ℎ𝑡𝑛𝑒𝑠𝑠. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑏𝑟𝑖𝑔ℎ𝑡𝑛𝑒𝑠𝑠 0.5')	
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break
//-- saturation
case 'saturation':
			if (!isVerify) return reply(userB())
			if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
			if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑢𝑚𝑏𝑒𝑟 ℎ𝑜𝑤 𝑠𝑎𝑡𝑢𝑟𝑎𝑡𝑒𝑑.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑠𝑎𝑡𝑢𝑟𝑎𝑡𝑖𝑜𝑛 0.5`)		  
			if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

			var money1 = Number(money);
			var cost = Number(10);
			var newmoney = money1 - cost; 

			fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				var newValue = data.replace(`${money1}`, newmoney);
				fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
				})
			})
			await delay(1000) /// waiting 1 second.
 
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf eq=saturation=${value} -c:a copy  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑢𝑚𝑏𝑒𝑟 ℎ𝑜𝑤 𝑠𝑎𝑡𝑢𝑟𝑎𝑡𝑒𝑑.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑠𝑎𝑡𝑢𝑟𝑎𝑡𝑖𝑜𝑛 0.5`)	
							
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break					

//-- Mirror
case 'mirror':
case 'miror':
case 'flip':
	if (!isVerify) return reply(userB())
    if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)					  
	if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

	var money1 = Number(money);
	var cost = Number(10);
	var newmoney = money1 - cost; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
	reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`gm convert -flop ${media} ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break	

//-- blackwhite
case 'bw':
case 'blackwhite':
  
	if (!isVerify) return reply(userB())
	if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
	if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

	var money1 = Number(money);
	var cost = Number(10);
	var newmoney = money1 - cost; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
	reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
	
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`gm convert -modulate 100,0 ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break	
					
//-- filter
case 'filter':
	if (!isVerify) return reply(userB())
	if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
	if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝐹𝑖𝑙𝑡𝑒𝑟. .filter - vintage, strong_contrast, lighter, darker`)
	if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

	var money1 = Number(money);
	var cost = Number(10);
	var newmoney = money1 - cost; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
	reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf curves=${value}   ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break							
//-- video to mp3
case 'mp3':
case 'sound':
		if (!isVerify) return reply(UserB())
		if (!isQuotedVideo) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑣𝑖𝑑𝑒𝑜`)
		if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

		var money1 = Number(money);
		var cost = Number(10);
		var newmoney = money1 - cost; 
	
		fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
		reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
			
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media}  -vn  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break
//-- crusher
case 'crush':
if (!isVerify) return reply(UserB())
if (!isQuotedAudio)  return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑎𝑢𝑑𝑖𝑜`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg  -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"  ${ran} `, (err) => {
			fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek, caption: `⚡`})
						fs.unlinkSync(ran)
					})				
			break					
//-- cover song
case 'cover':
         if (!isVerify) return reply(UserB())
         if (!isQuotedAudio) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑎𝑢𝑑𝑖𝑜`)
		 if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

		 var money1 = Number(money);
		 var cost = Number(10);
		 var newmoney = money1 - cost; 
	 
		 fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			 if (err) throw err;
			 var newValue = data.replace(`${money1}`, newmoney);
			 fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				 if (err) throw err;
			 })
		 })
		 await delay(1000) /// waiting 1 second.
		 reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
			
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg -loop 1 -i ./images/menu.jpg -i ${media}  -c:v libx264 -c:a aac -strict experimental -b:a 192k -shortest  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
				
					break 
//-- intro		
case 'cool':
case 'intro':
case 'stardash':
		if (!isVerify) return reply(UserB())
		if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
		if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

		var money1 = Number(money);
		var cost = Number(10);
		var newmoney = money1 - cost; 
	
		fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
		reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg -loop 1 -i ${media} -i intro.mp3 -c:v libx264 -tune stillimage -c:a aac -shortest ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					break
//-- Speed
case 'speed':
case 'fast':
if (!isVerify) return reply(UserB())
if (args.length < 1) return  reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎 𝑣𝑖𝑑𝑒𝑜 𝑎𝑛𝑑 𝑒𝑛𝑡𝑒𝑟 ℎ𝑜𝑤 𝑓𝑎𝑠𝑡. 𝐹𝑟𝑜𝑚 0.5 - 2. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑠𝑝𝑒𝑒𝑑 0.5`)

if (money < 5) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 5$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

var money1 = Number(money);
var cost = Number(5);
var newmoney = money1 - cost; 

fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.opus')
				exec(`ffmpeg -i ${media}  -filter:a "atempo=${value}" -vn  ${ran} `, (err) => {
					
						fs.unlinkSync(media)
						if (err) return reply('Speed must be from 0.5 to 4')
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek})
						fs.unlinkSync(ran)
					})
					break	
//-- watermark 
case 'watermarkvideo':
if (!isVerify) return reply(UserB())
if (!isQuotedVideo)  return  reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎 𝑣𝑖𝑑𝑒𝑜.`)
if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

var money1 = Number(money);
var cost = Number(10);
var newmoney = money1 - cost; 

fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.mp4')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})
					
					break	
//-- blur
case 'blur':
if (!isVerify) return reply(UserB())
if (!isQuotedImage)  return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)								
if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

var money1 = Number(money);
var cost = Number(10);
var newmoney = money1 - cost; 

fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
		
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg  -i ${media} -filter_complex "[0:v]boxblur=luma_radius=10:chroma_radius=10:luma_power=2[blurred]" -map "[blurred]"   ${ran} `, (err) => {					
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})	
			break
//-- starpicture
case 'starpicture':
if (!isVerify) return reply(UserB())
if (!isQuotedImage)  return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒.`)	
if (args.length < 2) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑎𝑑𝑑 𝑠𝑜𝑚𝑒 𝑡𝑒𝑥𝑡. 𝑇ℎ𝑖𝑠 𝑤𝑖𝑙𝑙 𝑏𝑒 𝑙𝑖𝑘𝑒 𝑎 𝑏𝑖𝑜 𝑤𝑖𝑡ℎ 𝑎 𝑠ℎ𝑜𝑟𝑡 𝑑𝑒𝑠𝑐𝑟𝑖𝑝𝑡𝑖𝑜𝑛 𝑜𝑓 𝑦𝑜𝑢.`)	
if (args[0] === 'starpicture' ) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑑𝑜𝑛𝑡 𝑙𝑒𝑎𝑣𝑒 𝑠𝑝𝑎𝑐𝑒.\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒 𝑑𝑜: \n.𝑠𝑡𝑎𝑟𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝐻𝑖 𝑡ℎ𝑖𝑠 𝑖𝑠 𝑚𝑒\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐷𝑜𝑛𝑡 𝑑𝑜:\n. 𝑠𝑡𝑎𝑟𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝐻𝑖 𝑡ℎ𝑖𝑠 𝑖𝑠 𝑚𝑒`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)

					reply(`${design} 𝐷𝑒𝑙𝑒𝑡𝑖𝑛𝑔 𝑜𝑙𝑑 𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑖𝑓 𝑎𝑣𝑎𝑖𝑏𝑙𝑒..`)
				
					exec(`rm -rf ./data/users/${sender.split("@")[0]}/starpicture.jpg`)
					exec(`rm -rf ./data/users/${sender.split("@")[0]}/starpicture.json`)

					await delay(3000) /// waiting 1 second.

					reply(`${design} 𝑈𝑝𝑙𝑜𝑎𝑑𝑖𝑛𝑔...`)

					exec(`ffmpeg -i ${media} -preset ultrafast starpicture.jpg`)

					await delay(3000) /// waiting 1 second.

					exec(`mv starpicture.jpg ./data/users/${sender.split("@")[0]}`) 

					await delay(1000) /// waiting 1 second.

					fs.appendFile(`./data/users/${sender.split("@")[0]}/starpicture.json`, `["${value}"]`, function (err) {				
						if (err) throw err;
						console.log('Starpicture Opend.'); 
						});	

						reply(`✅ 𝑆𝑢𝑐𝑐𝑒𝑠𝑠.\n𝑂𝑡ℎ𝑒𝑟𝑠 𝑐𝑎𝑛 𝑣𝑖𝑒𝑤 𝑦𝑜𝑢𝑟 𝑠𝑡𝑎𝑟𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑣𝑖𝑎\n.𝑠𝑝 @𝑢𝑟𝑛𝑢𝑚𝑏𝑒𝑟\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑌𝑜𝑢 𝑐𝑎𝑛 𝑣𝑖𝑒𝑤 𝑦𝑜𝑢𝑟 𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑣𝑖𝑎\n.𝑚𝑦𝑠𝑝`)

			  break
//-- mypicture
case 'mypicture':
case 'mysp':

  if (!isVerify) return reply(userB(prefix))	

  let mybio;
  try{	
  let _mybio = JSON.parse(fs.readFileSync(`./data/users/${sender.split("@")[0]}/starpicture.json`));
  mybio = _mybio[0]	//--- bio
}catch (err){
	reply(`${design} 𝑇ℎ𝑒𝑟𝑒 𝑤𝑎𝑠 𝑎𝑛 𝐸𝑟𝑟𝑜𝑟 𝑟𝑒𝑎𝑑𝑖𝑛𝑔 𝑦𝑜𝑢𝑟 𝑝𝑖𝑐𝑡𝑢𝑟𝑒. 𝐴𝑟𝑒 𝑦𝑜𝑢 𝑠𝑢𝑟𝑒 𝑦𝑜𝑢 ℎ𝑎𝑣𝑒 𝑢𝑝𝑙𝑜𝑎𝑑𝑒𝑑 𝑜𝑛𝑒 𝑣𝑖𝑎 .𝑠𝑡𝑎𝑟𝑝𝑖𝑐𝑡𝑢𝑟𝑒`)
}

buffer = fs.readFileSync(`./data/users/${sender.split("@")[0]}/starpicture.jpg`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} ${username} ${age} 𝑦𝑜\n${design} ${money}$ ${xp} 𝑥𝑝\n\n${mybio}`})
break

//-- sp
case 'sp':
  if (!isVerify) return reply(userB(prefix))
  if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑡ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛.`)

  let spmoney;
  try{
	  let _spmoney = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/money.json`));
	  spmoney = _spmoney[0]	//--- money	
  }catch (err){
	  
  }
  let spxp;
  try{ 
  let _spxp = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/xp.json`));
  spxp = Number(_spxp[0])	//--- xp
}catch (err){
  
}
let spusername;
try{			
let _spusername = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/username.json`));
spusername = _spusername[0]	//--- usersname	
}catch (err){

}
let spage;
try{	
let _spage = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/age.json`));
spage = _spage[0]	//--- age	
}catch (err){

}
  let spbio;
  try{	
  let _spbio = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/starpicture.json`));
  spbio = _spbio[0]	//--- bio
}catch (err){
	reply(`${design} 𝑆𝑜𝑟𝑟𝑦. 𝑇ℎ𝑖𝑠 𝑢𝑠𝑒𝑟 ℎ𝑎𝑠 𝑛𝑜𝑡 𝑢𝑝𝑙𝑜𝑎𝑑𝑒𝑑 𝑎 𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑦𝑒𝑡.`)
}
let hisdesign;
try{	
let _hisdesign = JSON.parse(fs.readFileSync(`./data/users${args[0].replace('@','/')}/design.json`));
hisdesign = _hisdesign[0]	//--- bio
}catch (err){

}

buffer = fs.readFileSync(`./data/users${args[0].replace('@','/')}/starpicture.jpg`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${hisdesign} ${spusername} ${spage} 𝑦𝑜\n${hisdesign} ${spmoney}$ ${spxp} 𝑥𝑝\n\n${spbio}`})
break

//-- watermark 
case 'watermarkimage':
if (!isVerify) return reply(UserB())
if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

var money1 = Number(money);
var cost = Number(10);
var newmoney = money1 - cost; 

fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.
reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
	
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg  -i ${media} -i watermark.png -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[0][logo]overlay=(W-w)/2:(H-h)/2:format=auto,format=yuv420p" -c:a copy  ${ran} `, (err) => {										
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})								
			break
//-- remove background and make sticker
case 'nobgsticker':
case 'nobgs':
case 'rmbgs':

  				if (!isVerify) return reply(UserB())
				if (args.length < 1) return reply(`${design} 𝑇𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒 𝑜𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑎𝑛𝑑 𝑐ℎ𝑜𝑜𝑠𝑒 𝑐𝑜𝑙𝑜𝑟. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑛𝑜𝑏𝑔𝑠 𝑏𝑙𝑎𝑐𝑘`)
				reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.webp')
				exec(`ffmpeg -i ${media} -vf colorkey=${value}:0.1 ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐶ℎ𝑜𝑜𝑠𝑒 𝑎 𝑟𝑒𝑎𝑙 𝑐𝑜𝑙𝑜𝑟 𝑜𝑟 𝐻𝐸𝑋 𝐶𝑜𝑑𝑒`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
						fs.unlinkSync(ran)
					})					
			break	

//-- remove background
case 'rmbg':
case 'nobg':
  if (!isVerify) return reply(UserB())  
  if (!isQuotedImage)  return reply(`${design} 𝑇𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒 𝑜𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑎𝑛𝑑 𝑐ℎ𝑜𝑜𝑠𝑒 𝑐𝑜𝑙𝑜𝑟. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑛𝑜𝑏𝑔 𝑏𝑙𝑎𝑐𝑘`)  
  if (args.length < 1) return reply(`${design} 𝑇𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒 𝑜𝑟 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑎𝑛𝑑 𝑐ℎ𝑜𝑜𝑠𝑒 𝑐𝑜𝑙𝑜𝑟. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑛𝑜𝑏𝑔𝑠 𝑏𝑙𝑎𝑐𝑘`)
  reply(`${design} 𝐸𝑑𝑖𝑡𝑖𝑛𝑔 . . . 1/1\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} -vf colorkey=${value}:0.1 ${ran} `, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐶ℎ𝑜𝑜𝑠𝑒 𝑎 𝑟𝑒𝑎𝑙 𝑐𝑜𝑙𝑜𝑟 𝑜𝑟 𝐻𝐸𝑋 𝐶𝑜𝑑𝑒`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑀𝑎𝑑𝑒 𝑓𝑜𝑟 ${pushname}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`})
						fs.unlinkSync(ran)
					})				
			break            
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Calculator
case 'calc':
	if (!isVerify) return reply(UserB())
	if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝐶𝑎𝑙𝑐𝑢𝑙𝑎𝑡𝑖𝑜𝑛. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒𝑠:\n.calc 5 + 9\n.calc 6 / 2\n.calc 5 * 5\n.calc   10 - 5﹞`)

var x = Number(args[0]);
var y = Number(args[2]);

	if (args[1] === '+' ) {
		var z = x + y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`); 
  } else if (args[1] === '*' ) {
		var z = x * y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`);  
  } else if (args[1] === 'x' ) {
		var z = x * y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`); 
  } else if (args[1] === '/' ) {
		var z = x / y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`); 	
  } else if (args[1] === ':' ) {
		var z = x / y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`); 	
  } 
  else if (args[1] === '-' ) {
		var z = x - y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓 ` + x + ` ${args[1]} ` + y + ` 𝑖𝑠 ` + z + `.`); 
  } 
break 
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Send
case 'imagedownload':
case 'send':
	if (!isVerify) return reply(UserB())
	if (args.length < 1) return reply(`${design} 𝑊ℎ𝑎𝑡 𝑖𝑠 𝑡ℎ𝑒 𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑡𝑖𝑡𝑙𝑒?`)
    if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑃𝑖𝑐𝑡𝑢𝑟𝑒𝑠`) 

    var money1 = Number(money);
    var cost = Number(10);
    var newmoney = money1 - cost; 

    fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${money1}`, newmoney);
        fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
            if (err) throw err;
        })
    })
    await delay(1000) /// waiting 1 second.	
  
    reply(`${design} 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔...\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`)
exec(`ddg-download "${value} jpg" -l 1`, (err) => {
if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
buffer = fs.readFileSync(`${value} jpg_0.jpg`)
Lxa.sendMessage(from, buffer, image, {quoted:mek, caption: `${design} 𝑆𝑒𝑛𝑑𝑖𝑛𝑔 𝑓𝑜𝑟 ${pushname}...\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑃𝑖𝑐𝑡𝑢𝑟𝑒𝑠`})
exec(`rm -rf ${value} jpg_0.jpg`)
})
	break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//	
//-- youtube song opus
case 'song':
case 'youtubesong':
case 'ytbsong':
	   if (!isVerify) return reply(UserB())
       if (args.length < 1) return reply(`${design} 𝑊ℎ𝑎𝑡 𝑖𝑠 𝑡ℎ𝑒 𝑠𝑜𝑛𝑔 𝑛𝑎𝑚𝑒?`)			
       if (money < 5) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 5$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑜𝑛𝑔𝑠`) 

       var money1 = Number(money);
       var cost = Number(5);
       var newmoney = money1 - cost; 
   
       fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
           if (err) throw err;
           var newValue = data.replace(`${money1}`, newmoney);
           fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
               if (err) throw err;
           })
       })
       await delay(1000) /// waiting 1 second.					
       reply(`${design} 𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔...\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝑆𝑜𝑛𝑔𝑠`)
																
				ran= getRandom('.opus')
				exec(`yt-dlp -x --audio-format opus -o, --output ${ran} "ytsearch:${value}"`, (err) => {
													
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
                        reply(`${design} 𝑆𝑒𝑛𝑑𝑖𝑛𝑔...\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n_Tipp: ${tipp}_\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❇️ 𝑋623 𝑆𝑜𝑛𝑔𝑠`)
						buffer = fs.readFileSync(ran)
						Lxa.sendMessage(from, buffer, audio, {quoted:mek})
						fs.unlinkSync(ran)
					})
        var xp1 = Number(xp);
        var gain = Number(5);
        var newxp = xp + gain; 

        fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${xp}`, newxp);
            fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
            })
        })			 
break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- update bot
case 'updatebot':
if (!isVerify) return reply(UserB())		
       reply('✅ 𝐵𝑢𝑡 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 𝑢𝑝𝑑𝑎𝑡𝑒𝑑. 𝐼𝑡 𝑟𝑒𝑠𝑡𝑎𝑟𝑡𝑠 𝑖𝑛 𝑠𝑜𝑚𝑒 𝑠𝑒𝑐𝑜𝑛𝑑𝑠. 𝑃𝑙𝑒𝑎𝑠𝑒 𝑚𝑎𝑘𝑒 𝑠𝑢𝑟𝑒 𝑡𝑜 𝑡𝑦𝑝𝑒 .𝑢𝑝𝑑𝑎𝑡𝑒𝑏𝑜𝑡 𝑜𝑟 𝑜𝑝𝑒𝑛 𝑇𝑒𝑟𝑚𝑢𝑥 𝑎𝑛𝑑 𝑟𝑒𝑠𝑡𝑎𝑟𝑡 𝑡ℎ𝑒 𝑏𝑜𝑡.')

	   await delay(2000) /// waiting 2 second.
	   await	exec(`git pull`, (err) => {
																			
	if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
													 				
    })		
await delay(6000) /// waiting 2 second		
	process.exit(1);
	break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//    
//-- Translator
case 'translate':
case 'tl':		
		if (!isVerify) return reply(userB())
		const translate = require('translate-google')

			translate(`${value.slice(3)}`, {to: `${args[0]}`}).then(res => {
				console.log(res)
				reply(`${design} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-		
${res}`)
			}).catch(err => {
				
				translate(`${value}`, {to: `en`}).then(res => {
					console.log(res)
reply(`${design} 𝑇𝑟𝑎𝑛𝑠𝑙𝑎𝑡𝑖𝑜𝑛
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-		
${res}`)
				
			})
		})
break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Weather
case 'weather':
	if (!isVerify) return reply(userB())
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑎𝑑𝑑 𝑎 𝑐𝑖𝑡𝑦 𝑎𝑛𝑑 𝑐𝑜𝑢𝑛𝑡𝑟𝑦𝑛𝑎𝑚𝑒`)
    if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑃𝑖𝑐𝑡𝑢𝑟𝑒𝑠`) 

    var money1 = Number(money);
    var cost = Number(10);
    var newmoney = money1 - cost; 

    fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${money1}`, newmoney);
        fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
            if (err) throw err;
        })
    })
    await delay(1000) /// waiting 1 second.							

// Options:
// search:     location name or zipcode
// degreeType: F or C
weather.find({search: `${value}`, degreeType: 'c'}, function(err, result) {
  if(err) console.log(err);
  var cityName = result[0].location.name
  var temperature = result[0].current.temperature
  var skytext = result[0].current.skytext
  var winddisplay = result[0].current.winddisplay
  var imageurl = result[0].current.imageUrl

		var request = require('request');

		var download = function(uri, filename, callback){
		request.head(uri, function(err, res, body){
			console.log('content-type:', res.headers['content-type']);
			console.log('content-length:', res.headers['content-length']);

			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
		};

		download(imageurl, 'weather.gif', function(){
		console.log('done')
		});
	//	buffer = fs.readFileSync(`weather.gif`)
	//	Lxa.sendMessage(from, buffer, video, {quoted:mek, caption: `hi`})
    // console.log(JSON.stringify(result, null, 2)); 

	if (Number(temperature) < Number(6)) {
		var tempSymbol = "❄️"
	}
		else if (Number(temperature) < Number(10)) {
		  var tempSymbol = "☁️"
		}
		else if (Number(temperature) < Number(15)) {
		  var tempSymbol = "🌤️"
		  }
		else if (Number(temperature) < Number(25)) {
			var tempSymbol = "☀️"
			}
		else  {
			var tempSymbol = "🔥"
			}
reply(`${design} 𝑊𝑒𝑎𝑡ℎ𝑒𝑟
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
📍 𝐿𝑜𝑐𝑎𝑡𝑖𝑜𝑛 » ${cityName} 
${tempSymbol} 𝑇𝑒𝑚𝑝𝑒𝑟𝑎𝑡𝑢𝑟𝑒 » ${temperature}°C
🔮 𝑆𝑘𝑦 » ${skytext}
🧭 𝑊𝑖𝑛𝑑 » ${winddisplay}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡: ${newmoney}$`);
});

await delay(3000) /// waiting 3 second. until gif downloaded
ran = getRandom('.webp')
await ffmpeg(`./weather.gif`)
	.inputFormat("weather.gif".split('.')[1])
	.on('start', function (cmd) {
		console.log(`Started : ${cmd}`)
	})
	.on('error', function (err) {
		console.log(`Error : ${err}`)
		tipe = 'gif'
		reply(`falsch`)
  })
	.on('end', function () {
		console.log('Finish')
		exec(`webpmux -set exif ${addMetadata('Your', "Weather")} ${ran} -o ${ran}`, async (error) => {
			if (error) return reply(stick())
			Lxa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})			
			fs.unlinkSync(ran)
		})
	})
	.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
	.toFormat('webp')
	.save(ran)

break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- claim money
case 'claim': 
if (!isVerify) return reply(userB())
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
if 	(claim === `${tanggal()}`) {	
   reply(`${design} 𝐴𝑙𝑟𝑒𝑎𝑑𝑦 𝑐𝑙𝑎𝑖𝑚𝑒𝑑 𝑡𝑜𝑑𝑎𝑦.`)
}
else {
var claimnow = `${tanggal()}`;
fs.readFile(`./data/users/${sender.split("@")[0]}/claim.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${claim}`, claimnow);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/claim.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.	
var money1 = Number(money);
var cost = Number(25);
var newmoney = money1 + cost; 

fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.

var tickets1 = Number(tickets)
var plus = Number(10);
var newtickets = tickets1 + plus; 

fs.readFile(`./data/users/${sender.split("@")[0]}/tickets.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${tickets1}`, newtickets);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/tickets.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.
  reply(`${design} ✨ 𝐶𝑙𝑎𝑖𝑚𝑒𝑑 25$\n✨ 𝐶𝑙𝑎𝑖𝑚𝑒𝑑 10 𝑡𝑖𝑐𝑘𝑒𝑡𝑠\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n🎁 StarDash Rewards`)
 
}
break	
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- save picture as sticker
case 'addsticker':
case 'savesticker':
case 'saveimage':

  if (!isVerify) return reply(UserB())	  
  if (!isQuotedImage)  return  reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
	   
  if (money < 22) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 22$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠`) 

  var money1 = Number(money);
  var cost = Number(22);
  var newmoney = money1 - cost; 

  fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${money1}`, newmoney);
	  fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		  if (err) throw err;
	  })
  })
  await delay(1000) /// waiting 1 second.

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
			
				exec(`rm -rf ./data/users/${sender.split("@")[0]}/sticker.webp`)
				exec(`ffmpeg -i ${media} ./data/users/${sender.split("@")[0]}/sticker.webp`, (err) => {
							
				fs.unlinkSync(media)
						if (err) return reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
	
					})
					await delay(1000) /// waiting 1 second.

		 
		  reply(`${design} 𝑆𝑎𝑣𝑒𝑑 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦.\n𝐺𝑒𝑡 𝑢𝑟 𝑠𝑎𝑣𝑒𝑑 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑤𝑖𝑡ℎ .𝑚𝑦𝑠𝑡𝑖𝑐𝑘𝑒𝑟\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑠`)
  
	break
//-- save audio
case 'addaudio':
case 'saveaudio':
case 'savesong':
case 'addsong':
  if (!isVerify) return reply(UserB())	  
  if (!isQuotedAudio)  return  reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑎𝑢𝑑𝑖𝑜`)
  if (money < 22) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 22$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑜𝑛𝑔𝑠`) 

  var money1 = Number(money);
  var cost = Number(22);
  var newmoney = money1 - cost; 

  fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${money1}`, newmoney);
	  fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		  if (err) throw err;
	  })
  })
  await delay(1000) /// waiting 1 second.
													
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
							
				exec(`rm -rf ./data/users/${sender.split("@")[0]}/song.opus`)
				exec(`rm -rf ./data/users/${sender.split("@")[0]}/song.mp3`)
				exec(`rm -rf ./data/users/${sender.split("@")[0]}/song.wav`)
	
				exec(`mv ${media} ./data/users/${sender.split("@")[0]}/song.opus`)
				await delay(1000) /// waiting 1 second.					

  reply(`${design} 𝑆𝑎𝑣𝑒𝑑 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦.\n𝐺𝑒𝑡 𝑢𝑟 𝑠𝑎𝑣𝑒𝑑 𝑠𝑜𝑛𝑔 𝑤𝑖𝑡ℎ .𝑚𝑦𝑠𝑜𝑛𝑔\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑜𝑛𝑔𝑠`) 
  
break	
//-- mysticker
case 'mysticker':
case 'mys':
  if (!isVerify) return reply(UserB())
					buffer = fs.readFileSync(`${sender.split("@")[0]}.webp`)
					Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
											
			break			
//-- myaudio
case 'myaudio':
case 'audio':
case 'mysong':
  if (!isVerify) return reply(UserB())
					buffer = fs.readFileSync(`${sender.split("@")[0]}.opus`)
					Lxa.sendMessage(from, buffer, audio, {quoted:mek})											
			break	
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Slot
case 'sloter':
case 'slots':
case 'slot':
	if (!isVerify) return reply(userB())
	if (!isGroup) return reply(group())
    if (tickets < 1) return reply(`${design} 𝑁𝑜𝑡 𝑒𝑛𝑜𝑢𝑔ℎ 𝑇𝑖𝑐𝑘𝑒𝑡𝑠. » .claim`)
    const slot1 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot2 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot3 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot4 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot5 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot6 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot7 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot8 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot9 = _slot[Math.floor(Math.random() * _slot.length)]
    var tickets1 = Number(tickets)
    var plus = Number(1);
    var newtickets = tickets1 - plus; 

    fs.readFile(`./data/users/${sender.split("@")[0]}/tickets.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${tickets1}`, newtickets);
        fs.writeFile(`./data/users/${sender.split("@")[0]}/tickets.json`, newValue, 'utf-8', function(err, data) {
            if (err) throw err;
        })
    })
    await delay(1000) /// waiting 1 second.

    var cash = Number(money);

if ((slot1 == slot2) && slot2 == slot3) {	
        var price = Number(250);
        var newcash = price + cash; 
        fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${money}`, newcash);
            fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Done!');
            })
        })
    
                await delay(3000) /// waiting 1 second.

        var addxp = Number(50);
        var newxp = xp + addxp; 

        fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${xp}`, newxp); 
            fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
            })
        })

reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newcash}$ \n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot1 == slot2) {	

	var price = Number(15);
	var newcash = price + cash; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	var addxp = Number(10);
	var newxp = xp + addxp; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newcash}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot2 == slot3) {	

	var price = Number(15);
	var newcash = price + cash; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	var addxp = Number(10);
	var newxp = xp + addxp; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newcash}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot1 == slot3) {	

	var price = Number(15);
	var newcash = price + cash; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	var addxp = Number(10);
	var newxp = xp + addxp; 

	fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newcash}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}
else {	
	var addxp = Number(2);
	var newxp = xp + addxp; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})	 
reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${money}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

//---- Set winner

//-- Winner
//-- Winner
var winner1;
try{
	var _winner1 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
	winner1 = _winner1[0]	//--- xp 
}catch (err){
	
}
var winner2;
try{
	var _winner2 = JSON.parse(fs.readFileSync(`./session/winner2.json`));	
	winner2 = _winner2[0]	//--- xp 
}catch (err){
	
}
var winner3;
try{
	var _winner3 = JSON.parse(fs.readFileSync(`./session/winner3.json`));	
	winner3 = _winner3[0]	//--- xp 
}catch (err){
	
}

var xp1 = Number(xp);
var gain = Number(1);
var newxp = xp + gain; 

fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${xp}`, newxp);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.		
if (Number(xp) > Number(winner1)) {						
    exec(`rm -rf ./session/winner1.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner1.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (Number(xp) > Number(winner2)) {  
    exec(`rm -rf ./session/winner2.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (Number(xp) > Number(winner3))  {						
    exec(`rm -rf ./session/winner3.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner3.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

 else {} 

break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- List admin gruppe
case 'adminlist':
case 'listadmin':
case 'admin':
  if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins) return reply(admin())
				
					teks = `${design} 𝐿𝑖𝑠𝑡 𝑜𝑓 𝑎𝑑𝑚𝑖𝑛𝑠 ${groupMetadata.subject}\n𝑡𝑜𝑡𝑎𝑙 : ${groupAdmins.length}\n\n`
					for (var admin of groupAdmins) {
						teks += `- @${admin.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
//--- List admin gruppe
case 'listonline':
case 'online':
  if (!isVerify) return reply(userB())
  if (!isGroup) return reply(group())
  if (!isGroupAdmins) return reply(admin())
        		var ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    var online = [...Object.keys(Lxa.chats.get(ido).presences), Lxa.user.jid]
			    Lxa.sendMessage(from, '𝐿𝑖𝑠𝑡 𝑜𝑓 𝑜𝑛𝑙𝑖𝑛𝑒 :\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- wish
case 'wish':
case 'command':
case 'wunsch':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑤𝑖𝑠ℎ. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒 .𝑤𝑖𝑠ℎ 𝑡𝑜 𝑏𝑒 ℎ𝑎𝑝𝑝𝑦`)
  if (yoi.length > 200 ) return reply(`${design} 𝑇𝑒𝑥𝑡 𝑖𝑠 𝑡𝑜𝑜 𝑙𝑜𝑛𝑔.`)
  _wishes.push(yoi)
  fs.writeFileSync('./help/wishes.json', JSON.stringify(_wishes))
  reply(`${design} 𝐴𝑑𝑑𝑒𝑑 𝑡𝑜 𝑤𝑖𝑠ℎ𝑒𝑠. 𝑉𝑖𝑒𝑤 𝑣𝑖𝑎 .𝑤𝑖𝑠ℎ𝑒𝑠`)
	break
//--- Note
case 'note':
case 'type':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑜𝑡𝑒. 𝐸𝑥𝑎𝑚𝑙𝑝𝑒 .𝑛𝑜𝑡𝑒 𝑡𝑜𝑑𝑎𝑦 𝑖𝑠 𝑎 𝑔𝑜𝑜𝑑 𝑑𝑎𝑦`)
  if (yoi.length > 100) return reply(`${design} 𝑇𝑒𝑥𝑡 𝑖𝑠 𝑡𝑜𝑜 𝑙𝑜𝑛𝑔.`)
  _notes.push(yoi)
  fs.writeFileSync('./help/notes.json', JSON.stringify(_notes))
  reply(`${design} 𝐴𝑑𝑑𝑒𝑑 𝑡𝑜 𝑛𝑜𝑡𝑒𝑠. 𝑉𝑖𝑒𝑤 𝑣𝑖𝑎 .𝑛𝑜𝑡𝑒𝑠`)
	break
//-- list Notes
case 'notes':
case 'list note':
			if (!isVerify) return reply(userB())
				teks = `${design} 𝑁𝑜𝑡𝑒𝑠\n⌬  𝑇𝑜𝑡𝑎𝑙: ${_notes.length}\n\n⌯ \n`
				for (var note of _notes) {
					teks += `⑅ ${note}\n`
				}
				reply(teks.trim())
				break
//-- list wish
case 'wishes':
case 'listwish':
			if (!isVerify) return reply(userB())
				teks = `${design} 𝑊𝑖𝑠ℎ𝑒𝑠\n⌬  𝑇𝑜𝑡𝑎𝑙: ${_wishes.length}\n\n⌯\n`
				for (var wish of _wishes) {
					teks += `⑅ ${wish}\n`
				}
				reply(teks.trim())
				break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- Add member
case 'add':
				    if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
			
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`${design} 𝐴𝑑𝑑 𝑛𝑢𝑚𝑏𝑒𝑟. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑎𝑑𝑑 4917626388837`)
					if (args[0].startsWith('0')) return reply(`${design} 𝑈𝑠𝑒 𝑐𝑜𝑢𝑛𝑡𝑟𝑦 𝑐𝑜𝑑𝑒. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑎𝑑𝑑 4917626388837`)
					if (args[0].startsWith('+')) return reply(`${design} 𝐷𝑜𝑛𝑡 𝑢𝑠𝑒 + 𝑜𝑛𝑙𝑦 𝑢𝑠𝑒 𝑛𝑢𝑚𝑏𝑒𝑟𝑠. 𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑎𝑑𝑑 4917626388837`)
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Lxa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply(`${design} 𝐸𝑟𝑟𝑜𝑟`)
					}
					break
//--- Kick member
case 'kick':
			        if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bestellung erhalten, ausgestellt :\n'
						for (var _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupRemove(from, mentioned)
					} else {
									
buffer = fs.readFileSync('./images/flash.webp')
Lxa.sendMessage(from, buffer, sticker, {quoted:mek})
					
				 Lxa.groupRemove(from, mentioned)
					}
					break
//-- Bewerben Sie die Abteilung
case 'promote':
				  if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `${design} 𝑅𝑒𝑞𝑢𝑒𝑠𝑡 𝑎𝑐𝑐𝑒𝑝𝑡𝑒𝑑. 𝑇ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠 𝑛𝑜𝑤 𝑎𝑛 𝑎𝑑𝑚𝑖𝑛. :\n`
						for (var _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`${design} 𝑅𝑒𝑞𝑢𝑒𝑠𝑡 𝑎𝑐𝑐𝑒𝑝𝑡𝑒𝑑. 𝑇ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠 𝑛𝑜𝑤 𝑎𝑛 𝑎𝑑𝑚𝑖𝑛. @${mentioned[0].split('@')[0]} `, mentioned, true)
						Lxa.groupMakeAdmin(from, mentioned)
					}
					break
//-- Herabgestuft
case 'demote':
			    if (!isVerify) return reply(userB())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
			
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('⌯   ﹝𝚃𝚊𝚐 𝚝𝚊𝚛𝚐𝚎𝚝.﹞')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `${design} 𝑅𝑒𝑞𝑢𝑒𝑠𝑡 𝑎𝑐𝑐𝑒𝑝𝑡𝑒𝑑. 𝑇ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠𝑛𝑡 𝑎𝑛 𝑎𝑑𝑚𝑖𝑛 𝑎𝑛𝑦𝑚𝑜𝑟𝑒. :\n`
						for (var _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`${design} 𝑅𝑒𝑞𝑢𝑒𝑠𝑡 𝑎𝑐𝑐𝑒𝑝𝑡𝑒𝑑. 𝑇ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠𝑛𝑡 𝑎𝑛 𝑎𝑑𝑚𝑖𝑛 𝑎𝑛𝑦𝑚𝑜𝑟𝑒. @${mentioned[0].split('@')[0]}`, mentioned, true)
						Lxa.groupDemoteAdmin(from, mentioned)
					}
		break			
//-- Gruppenlink
case 'linkgrup':
case 'linkgc':
case 'gruppenlink':
case 'link':
  if (!isVerify) return reply(userB())
			 if (!isGroupAdmins) return reply(admin())
				if (!isGroup) return reply(group())
				if (!isBotGroupAdmins) return reply(Badmin())
				linkgc = await Lxa.groupInviteCode (from)
				yeh = `${design} https://chat.whatsapp.com/${linkgc}\n\n𝐺𝑟𝑜𝑢𝑝 𝐿𝑖𝑛𝑘 ${groupName}`
				Lxa.sendMessage(from, yeh, text, {quoted: mek})
				break						
//-- Gruppenbenachrichtigungen
case 'notif':
case 'nachrichten':
case 'nachichten':
case 'nachricht':
case 'pika':
				if (!isVerify) return reply(userB())
				if (!isGroup) return reply(group())
				if (!isPrem) return reply(premi())
				if (args.length < 1) return reply(`${design} 𝑊ℎ𝑎𝑡 𝑖𝑠 𝑡ℎ𝑒 𝑚𝑒𝑠𝑠𝑎𝑔𝑒?`)
				teks = `${value}`
			try { 
			gc = await Lxa.groupMetadata(from)
				member = gc['participants']
				jids = [];
				member.map(async adm => {
				jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			options = {
			text: teks,
			contextInfo: {
			mentionedJid: jids
			},
			quoted: mek
			}
			await Lxa.sendMessage(from, options, text)
				} catch (e) {
									console.log('Error :', e)
									reply('Fehler.. eine Nummer hat komische zeichen')

					}
break					
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Bot gruppe verlassen
case 'leave': 
case 'verlass':
				if (!isGroup) return reply(group())
				if (!isGroupAdmins) return reply(ownerB())
				anu = await Lxa.groupLeave(from, `${design} 𝐵𝑌𝐸 𝐵𝑌𝐸 𝐵𝑂𝐼𝑆 ${groupMetadata.subject}`, groupId)
				break
//-- broadcast
case 'bc':
					if (!isOwner) return reply(ownerB())
					if (args.length < 1) return reply(`${design} 𝐵𝑟𝑜𝑎𝑑𝑐𝑎𝑠𝑡 𝑠𝑢𝑐𝑐𝑒𝑠𝑠.`)
					anu = await Lxa.chats.all()
						for (var _ of anu)
							sendMess(_.jid, value)
						reply(`${design} 𝑇ℎ𝑎𝑡𝑠 𝑎𝑙𝑙?`)
					break
//-- Devar message
case 'devare':
case 'del':
case 'burn':
					if (!isGroup)return reply(group())
					if (!isGroupAdmins) return reply(admin())
					try {
					Lxa.devareMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					  reply(`${design} 𝐼 𝑐𝑎𝑛 𝑜𝑛𝑙𝑦 𝑑𝑒𝑙𝑒𝑡𝑒 𝑚𝑦 𝑜𝑤𝑛 𝑚𝑒𝑠𝑠𝑎𝑔𝑒.`)
					}
					break
//-- hide message
case 'hide':

					if (!isGroup)return reply(group())
					try {
					Lxa.devareMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
						reply(`${design} 𝐼 𝑐𝑎𝑛 𝑜𝑛𝑙𝑦 𝑑𝑒𝑙𝑒𝑡𝑒 𝑚𝑦 𝑜𝑤𝑛 𝑚𝑒𝑠𝑠𝑎𝑔𝑒.`)
					}
					break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- transfer
case 'transfer': 
case 'donate': 
	if (!isVerify) return reply(userB())	
	if (args.length < 2) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑐𝑎𝑠ℎ 𝑎𝑚𝑜𝑢𝑛𝑡 𝑎𝑛𝑑 𝑡𝑎𝑔 𝑝𝑒𝑟𝑠𝑜𝑛.\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟 15 @𝑠𝑡𝑎𝑟`)
	if (args.length > 2) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑐𝑎𝑠ℎ 𝑎𝑚𝑜𝑢𝑛𝑡 𝑎𝑛𝑑 𝑡𝑎𝑔 𝑝𝑒𝑟𝑠𝑜𝑛.\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟 15 @𝑠𝑡𝑎𝑟`)
	if (args[0] > 101) return reply(`${design} 𝑀𝑎𝑥 𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟 𝑖𝑠 100$`)
	if (args[0] < 1) return reply(`${design} 𝑀𝑖𝑛 𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟 𝑖𝑠 1$`)
	if (isNaN(args[0])) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑐𝑎𝑠ℎ 𝑎𝑚𝑜𝑢𝑛𝑡 𝑎𝑛𝑑 𝑡𝑎𝑔 𝑝𝑒𝑟𝑠𝑜𝑛.\n𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟 15 @𝑠𝑡𝑎𝑟`)
	if (money < 20) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦 𝑡𝑜 𝑠𝑡𝑎𝑟𝑡 𝑎 𝑡𝑟𝑎𝑛𝑠𝑓𝑒𝑟. 𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 𝑖𝑠 𝑎𝑡𝑙𝑒𝑎𝑠𝑡 20$. 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 𝑖𝑠 ${money}$`) 


		var _hismoney = JSON.parse(fs.readFileSync(`./data/users${args[1].replace('@','/')}/money.json`));	
		var hismoney = _hismoney[0]	//--- money his
		var _hisname = JSON.parse(fs.readFileSync(`./data/users${args[1].replace('@','/')}/username.json`));	
		var hisname = _hisname[0]	//--- name
				var mymon = Number(money);
				var myam = Number(args[0]);
				var taxes = Number(5);
				var mynewmon = mymon - myam - taxes; 

				fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${money}`, mynewmon);
					
					fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.	
				var hismon = Number(hismoney);
				var hisam = Number(args[0]);
				var hisnewmon = hismon + hisam; 
				fs.readFile(`./data/users${args[1].replace('@','/')}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;	
					var newValue = data.replace(`${hismoney}`, hisnewmon);
					fs.writeFile(`./data/users${args[1].replace('@','/')}/money.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})
				await delay(1000) /// waiting 1 second.					
  reply(`${design} 𝑇𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑟𝑒𝑑 *${args[0]}$* 𝑡𝑜 *${hisname}* \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐵𝑜𝑡 𝑠𝑡𝑜𝑙𝑒 5$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡: ${mynewmon}$\n𝐻𝑖𝑠/ℎ𝑒𝑟 𝑚𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡: ${hisnewmon}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅  𝑋623 𝑇𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑠`)
  var xp1 = Number(xp);
  var gain = Number(5);
  var newxp = xp + gain; 

  fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${xp}`, newxp);
	  fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		  if (err) throw err;
	  })
  })	
	break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- Welcome on/off
case 'welcome':
case 'wellcome':
case 'willkommen':
        if (!isVerify) return reply(userB())
		if (!isGroup) return reply(group())
		if (!isPrem) return reply(premi())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`${design} .𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑜𝑛 .𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑜𝑓𝑓`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply(`${design} 𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑`)
						_welcom.push(from)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`${design} 𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑 *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply(`${design} 𝑑𝑒𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑`)
						_welcom.splice(from, 1)
						fs.writeFileSync('./data/welcom.json', JSON.stringify(_welcom))
						reply(`⌯   ﹝𝚍𝚎-𝚊𝚌𝚝𝚒𝚟𝚊𝚝𝚎𝚍.﹞ *${groupMetadata.subject}*`)
					} else {
						reply(`${design} .𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑜𝑛 .𝑤𝑒𝑙𝑐𝑜𝑚𝑒 𝑜𝑓𝑓`)
					}
		break			
//--- on/off antilink
				case 'antilink':
				if (!isGroupAdmins) return reply(admin())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`${design} .𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 𝑜𝑛 .𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 𝑜𝑓𝑓`)
					if ((args[0]) === 'on') {
						if (isAnti) return reply(`${design} 𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑`)
						_antilink.push(from)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`${design} 𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑 *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnti) return reply(`${design} 𝑑𝑒𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑`)
						_antilink.splice(from, 1)
						fs.writeFileSync('./data/antilink.json', JSON.stringify(_antilink))
						reply(`${design} 𝑑𝑒𝑎𝑐𝑡𝑖𝑣𝑎𝑡𝑒𝑑 *${groupMetadata.subject}*`)
					} else {
						reply(`${design} .𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 𝑜𝑛 .𝑎𝑛𝑡𝑖𝑙𝑖𝑛𝑘 𝑜𝑓𝑓`)
					}
					break

//-- owner bot
case 'owner':
case 'besitzer':
    nomor = '4917626388837@s.whatsapp.net'
    owner = await fs.readFileSync('./images/menu.jpg').toString('base64')
    capt = "𝙲𝚑𝚒𝚕𝚕𝚘𝚌𝚝𝚒 ✯"
    const been = {
    text: `@${nomor.split("@")[0]} 𝑇ℎ𝑖𝑠 𝑖𝑠 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟. 𝐶ℎ𝑎𝑡 𝑤𝑖𝑡ℎ ℎ𝑖𝑚 𝑖𝑓 𝑦𝑜𝑢 𝑤𝑎𝑛𝑡.`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
replyimg(been, text, capt, owner)
break	
//--clear all messages
case 'clearchat':
case 'clear':
		if (!isOwner) return reply(ownerB())
		anu = await Lxa.chats.all()
		list_chat = await Lxa.chats.all()
    for (var chat of list_chat) {
    Lxa.modifyChat(chat.jid, "devare")
    }
    reply(`${design} 𝑆𝑢𝑐𝑐𝑒𝑠𝑠. 𝐴𝑙𝑙 𝑚𝑒𝑠𝑠𝑎𝑔𝑒𝑠 𝑐𝑙𝑒𝑎𝑟𝑒𝑑. 𝐼 𝑤𝑖𝑙𝑙 𝑛𝑜𝑤 𝑟𝑒𝑠𝑡𝑎𝑟𝑡.`)
   break
//-- mentions all members
case 'mentionall': 
case 'tagall':
case 'makier':
      if (!isVerify) return reply(userB())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins) return reply(admin())
					members_id = []
			teks = `\n★ 𝚐𝚛𝚘𝚞𝚙 : *${groupName}*\n★ 𝚞𝚜𝚎𝚛𝚜 : *${groupMetadata.participants.length}*\n${value}\n★☆☆☆★· 𝚖𝚎𝚗𝚝𝚒𝚘𝚗𝚜 \n`
			for (var mem of groupMembers) {
						teks += `☆ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `★☆☆☆☆☆☆☆☆☆☆☆☆☆☆★`
			mentions(teks, members_id, true)
			break				
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- Feed
case 'feed':
	case 'myfeed':
	case 'myaccount':
	case 'me':
		if (!isVerify) return reply(userB())
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

					let isclaim;
					try{	
						if (claim === `${tanggal()}`) { 
							isclaim = `𝐴𝑙𝑟𝑒𝑎𝑑𝑦 𝑐𝑙𝑎𝑖𝑚𝑒𝑑 𝑡𝑜𝑑𝑎𝑦.`
						} 
						else { 
							
							isclaim = `𝐶𝑙𝑎𝑖𝑚 𝑑𝑎𝑖𝑙𝑦 𝑐𝑎𝑠ℎ. 🎁 \n» .𝑐𝑙𝑎𝑖𝑚 «`
							} 
						}catch (err){
						
						}
						owner = await fs.readFileSync('./images/menu.jpg').toString('base64')

	weather.find({search: `${userlocation}`, degreeType: 'c'}, function(err, result) {
		if(err) console.log(err);
		var cityName = result[0].location.name
		var temperature = result[0].current.temperature
		var skytext = result[0].current.skytext
		var winddisplay = result[0].current.winddisplay
		var imageurl = result[0].current.imageUrl
	  
			  var request = require('request');
	  
			  var download = function(uri, filename, callback){
			  request.head(uri, function(err, res, body){
				  console.log('content-type:', res.headers['content-type']);
				  console.log('content-length:', res.headers['content-length']);
	  
				  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
			  });
			  };
	  
		  if (Number(temperature) < Number(6)) {
		  var tempSymbol = "❄️"
		  }
		  else if (Number(temperature) < Number(10)) {
			var tempSymbol = "☁️"
		  }
		  else if (Number(temperature) < Number(15)) {
			var tempSymbol = "🌤️"
			}
		  else if (Number(temperature) < Number(25)) {
			  var tempSymbol = "☀️"
			  }
		  else  {
			  var tempSymbol = "🔥"
			  }
	
nomor = '4917626388837@s.whatsapp.net'

capt = `${design} 𝑁𝑒𝑤𝑠 𝑓𝑒𝑒𝑑`
const been1 = {

    text: `» ${pushname}
» ${status}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
${design} 𝑁𝑎𝑚𝑒 » ${username}
${design} 𝐴𝑔𝑒 » ${age}
${design} 𝐸𝑚𝑜𝑗𝑖𝑒 » ${emojie}
${design} 𝑀𝑜𝑜𝑑 » ${mood}
${design} 𝑀𝑜𝑛𝑒𝑦 » ${money}$
${design} 𝑇𝑖𝑐𝑘𝑒𝑡𝑠 » ${tickets}
${design} 𝑋𝑝 » ${xp}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
📌 ${cityName}
${tempSymbol} ${skytext} ${temperature}°C 
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
» .𝑠𝑒𝑡𝑡𝑖𝑛𝑔𝑠
» .𝑤𝑖𝑛𝑛𝑒𝑟 
» .ℎ𝑖𝑑𝑒 
» .𝑑𝑒𝑙𝑒𝑡𝑒𝑎𝑐𝑐𝑜𝑢𝑛𝑡
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑠𝑖𝑛𝑐𝑒 ${accdate}

${isclaim}`,

contextInfo: {
mentionedJid: [nomor]
}
}
replyimg(been1, text, capt, owner)

});

var xpn = Number(xp);
var upxp = Number(1);
var newxp = upxp + xpn; 

fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;	
	var newValue = data.replace(`${xp}`, newxp);	
	fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Gained xp!');
	})
})

if ((xp > 100) && xp < 500) {
        var newstatus = "Knight"; 

        fs.readFile(`./data/users/${sender.split("@")[0]}/status.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/users/${sender.split("@")[0]}/status.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}
	else if ((xp > 500) && xp < 1000) {
		var newstatus = "King"; 
        fs.readFile(`./data/users/${sender.split("@")[0]}/status.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/users/${sender.split("@")[0]}/status.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}


	else if ((xp > 1000) && xp < 11000) {
		var newstatus = "Legend"; 
        fs.readFile(`./data/users/${sender.split("@")[0]}/status.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/users/${sender.split("@")[0]}/status.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}
	else {}
	break 
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Stickerpack
case 'setstickerpack': 
case 'stickername': 
case 'stickerpack': 
case 'setstickerpack': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑃𝑎𝑐𝑘 𝑛𝑎𝑚𝑒.`)

var stickernow = args[0];
fs.readFile(`./data/users/${sender.split("@")[0]}/stickerpack.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${stickerpack}`, stickernow);
	
    fs.writeFile(`./data/users/${sender.split("@")[0]}/stickerpack.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑐𝑒𝑑 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑃𝑎𝑐𝑘 𝑛𝑎𝑚𝑒 𝑓𝑟𝑜𝑚 *${stickerpack}* 𝑡𝑜 *${value}*`)
	break
//-- location
case 'location': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑙𝑜𝑐𝑎𝑡𝑖𝑜𝑛.`)
var now = args[0];
fs.readFile(`./data/users/${sender.split("@")[0]}/location.json`, 'utf-8', function(err, data) {
    if (err) throw err;
    var newValue = data.replace(`${userlocation}`, now);
    fs.writeFile(`./data/users/${sender.split("@")[0]}/location.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑐𝑒𝑑 𝑙𝑜𝑐𝑎𝑡𝑖𝑜𝑛 𝑓𝑟𝑜𝑚 *${userlocation}* 𝑡𝑜 *${value}*`)
	break	
//-- email
case 'email': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝐸𝑚𝑎𝑖𝑙.`)
var now = args[0];
fs.readFile(`./data/users/${sender.split("@")[0]}/email.json`, 'utf-8', function(err, data) {
    if (err) throw err;
    var newValue = data.replace(`${email}`, now);
    fs.writeFile(`./data/users/${sender.split("@")[0]}/email.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑐𝑒𝑑 𝐸𝑚𝑎𝑖𝑙 𝑓𝑟𝑜𝑚 *${email}* 𝑡𝑜 *${value}*`)
	break	
//-- password
case 'password': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑.`)
var now = args[0];
fs.readFile(`./data/users/${sender.split("@")[0]}/password.json`, 'utf-8', function(err, data) {
    if (err) throw err;
    var newValue = data.replace(`${email}`, now);
    fs.writeFile(`./data/users/${sender.split("@")[0]}/password.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑐𝑒𝑑 𝑃𝑎𝑠𝑠𝑤𝑜𝑟𝑑 𝑡𝑜 *${value}*`)
	break			
//-- Mood
case 'mood': 
case 'setmood': 
	if (!isVerify) return reply(userB())
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑚𝑜𝑜𝑑.`)	
var moodnow = args[0];
fs.readFile(`./data/users/${sender.split("@")[0]}/mood.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${mood}`, moodnow);
	
    fs.writeFile(`./data/users/${sender.split("@")[0]}/mood.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑚𝑜𝑜𝑑 𝑓𝑟𝑜𝑚 ${mood} 𝑡𝑜 ${moodnow}`)
	break
//-- changename - setnamemoney setname setnamedelay
case 'changename': 
case 'setname': 
case 'name':
		if (!isVerify) return reply(userB())
		if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒.`)
		if (money < 30) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 30$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 

		var money1 = Number(money);
		var cost = Number(30);
		var newmoney = money1 - cost; 
	
		fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
			
					var newname = args[0];

					fs.readFile(`./data/users/${sender.split("@")[0]}/username.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${name}`, newname);
						
						fs.writeFile(`./data/users/${sender.split("@")[0]}/username.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})
								reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒 𝑓𝑟𝑜𝑚 *${username}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)      
		break
//-- changeage - Setage
case 'changeage': 
case 'setage': 
case 'age':  
		if (!isVerify) return reply(userB())	
		if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑎𝑔𝑒.`)
		if (money < 30) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 30$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 

		var money1 = Number(money);
		var cost = Number(5);
		var newmoney = money1 - cost; 
	
		fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
										
					var newage = args[0];

					fs.readFile(`./data/users/${sender.split("@")[0]}/age.json`, 'utf-8', function(err, data) {
						if (err) throw err;	
						var newValue = data.replace(`${age}`, newage);	
					fs.writeFile(`./data/users/${sender.split("@")[0]}/age.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})
					await delay(1000) /// waiting 1 second.
		reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑎𝑔𝑒 𝑓𝑟𝑜𝑚  *${age}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)
			  
	break
//-- change email
case 'changeemail': 
case 'setemail':   
case 'email':  
	if (!isVerify) return reply(userB())		
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑒𝑚𝑎𝑖𝑙 𝑎𝑑𝑟𝑒𝑠𝑠𝑒. \𝑛𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑒𝑚𝑎𝑖𝑙 𝑥𝑎𝑐𝑐𝑜𝑢𝑛𝑡@𝑔𝑚𝑎𝑖𝑙.𝑐𝑜𝑚`)
	if (args.length > 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑒𝑚𝑎𝑖𝑙 𝑎𝑑𝑟𝑒𝑠𝑠𝑒. \𝑛𝐸𝑥𝑎𝑚𝑝𝑙𝑒: .𝑒𝑚𝑎𝑖𝑙 𝑥𝑎𝑐𝑐𝑜𝑢𝑛𝑡@𝑔𝑚𝑎𝑖𝑙.𝑐𝑜𝑚`)
					var newemail = args[0];
					fs.readFile(`./data/users/${sender.split("@")[0]}/email.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${email}`, newemail);
						
						fs.writeFile(`./data/users/${sender.split("@")[0]}/email.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})
					await delay(1000) /// waiting 1 second.

			reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝐸𝑚𝑎𝑖𝑙 𝑡𝑜 ${args[0]}\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑀𝑎𝑖𝑙 `)
		
						var nodemailer = require('nodemailer');
						var transporter = nodemailer.createTransport({
						  host: 'smtp.gmail.com',
						  port: 587,
						  auth: {
							user: 'stardashnotification@gmail.com',
							pass: 'stardash20%'
						  },
						});
						transporter.verify().then(console.log).catch(console.error);
						var mailOptions = {
						  from: 'stardashnotification@gmail.com',
						  to: `${args[0]}`,
						  subject: `StarDash Email set! ${name}`,
						  text: `Dear User ${name},
						  
						Your Email was sucessfuly changed to: ${args[0]}. 

						To view your details send message    .me
												
						StarDash Team`
						};
						transporter.sendMail(mailOptions, function(error, info){
						  if (error) {
							console.log(error);
						  } else {
							console.log('Email sent: ' + info.response);
						  }
						});
break
//-- changedesign
case 'design': 
case 'setdesign': 
case 'changedesign': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝐷𝑒𝑠𝑖𝑔𝑛 𝑜𝑟 𝑆𝑦𝑚𝑏𝑜𝑙.`)
	if (args.length > 1) return reply(`${design} 𝐷𝑜 𝑎𝑠 𝑒𝑥𝑎𝑚𝑝𝑙𝑒: .𝑑𝑒𝑠𝑖𝑔𝑛 ✨`)
	if (money < 20) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 25$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 
	var money1 = Number(money);
	var cost = Number(25);
	var newmoney = money1 - cost; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
					var newdesign = args[0];
				fs.readFile(`./data/users/${sender.split("@")[0]}/design.json`, 'utf-8', function(err, data) {
					if (err) throw err;					
					var newValue = data.replace(`${design}`, newdesign);					
					fs.writeFile(`./data/users/${sender.split("@")[0]}/design.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.
 
					reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑑𝑒𝑠𝑖𝑔𝑛 𝑓𝑟𝑜𝑚  *${design}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)					
		break
//-- changeemojie
case 'changeemojie': 
case 'changemojie': 
case 'setemojie':  
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑒𝑚𝑜𝑗𝑖𝑒.`)
	if (money < 20) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 25$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 
	var money1 = Number(money);
	var cost = Number(25);
	var newmoney = money1 - cost; 
	fs.readFile(`./data/users/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/users/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
				var newemojie = args[0];
				fs.readFile(`./data/users/${sender.split("@")[0]}/emojie.json`, 'utf-8', function(err, data) {
					if (err) throw err;					
					var newValue = data.replace(`${emojie}`, newemojie);					
					fs.writeFile(`./data/users/${sender.split("@")[0]}/emojie.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.
				reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑒𝑚𝑜𝑗𝑖𝑒 𝑓𝑟𝑜𝑚 *${emojie}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)  
	break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
// -- Leaderboard
case 'winner':
case 'leader':
case 'leaderboard':
if (!isVerify) return reply(userB())

//-- Winner
var winner1;
try{
	var _winner1 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
	winner1 = _winner1[0]	//--- xp 
}catch (err){
	
}
var winner2;
try{
	var _winner2 = JSON.parse(fs.readFileSync(`./session/winner2.json`));	
	winner2 = _winner2[0]	//--- xp 
}catch (err){
	
}
var winner3;
try{
	var _winner3 = JSON.parse(fs.readFileSync(`./session/winner3.json`));	
	winner3 = _winner3[0]	//--- xp 
}catch (err){
	
}

var xp1 = Number(xp);
var gain = Number(1);
var newxp = xp + gain; 

fs.readFile(`./data/users/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${xp}`, newxp);
	fs.writeFile(`./data/users/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.		
if (Number(xp) > Number(winner1)) {						
    exec(`rm -rf ./session/winner1.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner1.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (Number(xp) > Number(winner2)) {  
    exec(`rm -rf ./session/winner2.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (Number(xp) > Number(winner3))  {						
    exec(`rm -rf ./session/winner3.json`)
    await delay(2000) /// waiting 1 second.
fs.appendFile(`./session/winner3.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

 else {} 
 await delay(1000) /// waiting 1 second.
//-- Winner
const _winner11 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
const winner11 = _winner11[0]	//--- xp 
const winner11name = _winner11[1]	//--- name
const winner11status = _winner11[2]	//--- status

const _winner22 = JSON.parse(fs.readFileSync(`./session/winner2.json`));	
const winner22 = _winner22[0]	//--- xp 
const winner22name = _winner22[1]	//--- name
const winner22status = _winner22[2]	//--- status

const _winner33 = JSON.parse(fs.readFileSync(`./session/winner3.json`));	
const winner33 = _winner33[0]	//--- xp 
const winner33name = _winner33[1]	//--- name
const winner33status = _winner33[2]	//--- status

	reply(`𝐿𝑒𝑎𝑑𝑒𝑟𝑏𝑜𝑎𝑟𝑑
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

🥇 𝐿𝑒𝑎𝑑𝑒𝑟 » ${winner11name}
${design} 𝑥𝑝 » ${winner11}
${design} 𝑆𝑡𝑎𝑡𝑢𝑠 » ${winner11status}

🥈 𝑆𝑒𝑐𝑜𝑛𝑑 » ${winner22name}
${design} 𝑥𝑝 » ${winner22}
${design} 𝑆𝑡𝑎𝑡𝑢𝑠 » ${winner22status}

🥉 𝑇ℎ𝑖𝑟𝑑 » ${winner33name}
${design} 𝑥𝑝 » ${winner33}
${design} 𝑆𝑡𝑎𝑡𝑢𝑠 » ${winner33status}


𝑌𝑜𝑢𝑟𝑋𝑝 » ${xp}
𝑌𝑜𝑢𝑟𝑆𝑡𝑎𝑡𝑢𝑠 » ${status}`)

break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 


//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
case 'asklorie':
case 'wiki':
case 'whatis':
	if (args.length < 1){ 
		reply(`
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
use 
.askLorie <topic>
or
.whatis <topic>
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`)
	}
	else{

		wiki = require ('./_tools/wikiped');
		wiki.getWikipedia(value, sender, (wikilink)=>
		{
			reply(wikilink)
		})
	}
break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 

case "remindme":
case "reminder":
	reply(reminder.set(sender.split('@')[0],args,value));
	break

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 

case 'return':
  if (!isOwner) return reply(ownerB())
			return Lxa.sendMessage(from, JSON.stringify(eval(args.join(' ')), null, '\n'), text, { quoted: mek })
		break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 

//---- view web
	case 'view':
  case 'fetch':
  case 'result':
  if (!isOwner) return reply(ownerB())
teks = args.join(` `)
var res = await fetchText(teks)
reply(res)
break
				default:
}
	})
}
starts()

//-- More ? Füge dich hinzu
