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

//-- Data
const up = JSON.parse(fs.readFileSync('./data/bot/setting.json'));
const _welcom = JSON.parse(fs.readFileSync('./data/bot/welcom.json'));
const _user = JSON.parse(fs.readFileSync('./data/bot/user.json'));
const _Haspet = JSON.parse(fs.readFileSync('./data/bot/haspet.json'));
const _antilink = JSON.parse(fs.readFileSync('./data/bot/antilink.json'));
const hit = JSON.parse(fs.readFileSync('./data/bot/totalhit.json'))
const _isUpdate = JSON.parse(fs.readFileSync('./data/bot/isUpdate.json'));


//-- Winner
const _winner1 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
const winner1 = _winner1[0]	//--- xp 
const winner1name = _winner1[1]	//--- name
const winner1status = _winner1[2]	//--- status

const _winner2 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
const winner2 = _winner2[0]	//--- xp 
const winner2name = _winner2[1]	//--- name
const winner2status = _winner2[2]	//--- status

const _winner3 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
const winner3 = _winner3[0]	//--- xp 
const winner3name = _winner3[1]	//--- name
const winner3status = _winner3[2]	//--- status

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
const _gay = JSON.parse(fs.readFileSync('./result/gaymeter.json'));
const _love = JSON.parse(fs.readFileSync('./result/lovemeter.json'));
const _pokemon = JSON.parse(fs.readFileSync('./result/pokemon.json'));
const _animal = JSON.parse(fs.readFileSync('./result/animal.json'));
const _facts = JSON.parse(fs.readFileSync('./result/ranswer/facts.json'));
const _nsfw = JSON.parse(fs.readFileSync('./result/ranswer/nsfw.json'));
const _roll = JSON.parse(fs.readFileSync('./result/games/dice.json'));
const _meme = JSON.parse(fs.readFileSync('./result/ranswer/meme.json'));
const _dog = JSON.parse(fs.readFileSync('./result/ranswer/dog.json'));
const _dashtype = JSON.parse(fs.readFileSync('./result/games/dashtype.json'));
const _shiny = JSON.parse(fs.readFileSync('./result/games/shiny.json'));
const _wishes = JSON.parse(fs.readFileSync('./help/wishes.json'));
const _notes = JSON.parse(fs.readFileSync('./help/games/notes.json'));
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Get all user data

if (isVerify && isCmd) {
    try {
    var _money = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/money.json`));
    var money = _money[0]	//--- money	
    var _xp = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/xp.json`));
    var xp = _xp[0]	//--- xp	
    var _status = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/status.json`));
    var status = _status[0]	//--- status	
    var _stickerpack = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/stickerpack.json`));
    var stickerpack = _stickerpack[0]	//--- stickerpack
    var _pushname = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/pushname.json`));
    var pushname = _pushname[0]	//--- pushname		
    var _username = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/username.json`));
    var username = _username[0]	//--- username	
    var _age = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/age.json`));
    var age = _age[0]	//--- age	
    var _emojie = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/emojie.json`));
    var emojie = _emojie[0]	//--- emojie
    var _id = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/id.json`));
    var id = _id[0]	//--- id		
    var _design = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/design.json`));
    var design = _design[0]	//--- design	
    var _email = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/email.json`));
    var email = _email[0]	//--- email
    var _version = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/version.json`));
    var version = _version[0]	//--- version		
    var _password = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/password.json`));
    var password = _password[0]	//--- password		
    var _songs = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/songs.json`));
    var songs = _songs[0]	//--- songs	
    var _pictures = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/pictures.json`));
    var pictures = _pictures[0]	//--- pictures
    var _userhit = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/userhit.json`));
    var userhit = _userhit[0]	//--- userhit
    var _messages = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/messages.json`));
    var messages = _messages[0]	//--- messages
    var _messagesnumber = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/messagesnumber.json`));
    var messagesnumber = _messagesnumber[0]	//--- messagesnumber
    var _location = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/location.json`));
    var location = _location[0]	//--- location
    var _accdate = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/accdate.json`));
    var accdate = _accdate[0]	//--- accdate
    var _claim = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/claim.json`));
    var claim = _claim[0]	//--- claim
    var _bday = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/bday.json`));
    var bday = _bday[0]	//--- birth date
    var _tickets = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/tickets.json`));
    var tickets = _tickets[0]	//--- tickets
    var _mood = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/mood.json`));
    var mood = _mood[0]	//--- mood
      } catch {
console.log(color(`Not registered.`,`aqua`))
      }
    }

    if (isCmd) Lxa.chatRead(from)
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
//--- Total command user
const usercmd = () => {
	userhit[0].totalcmd += 1
	fs.writeFileSync(`./data/user/${sender.split("@")[0]}/userhit.json`, JSON.stringify(userhit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync(`./data/user/${sender.split("@")[0]}/userhit.json`))[0].totalcmd
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
	    for (let i of json[1].blocklist) {
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
  const isFridge = _fridge.includes(sender)  
  const isHaspet = _Haspet.includes(sender)    
  const isUpdate = _isUpdate.includes(sender)   
  const isPrem = premium.includes(sender) || isOwner
  const isBan = blocked.includes(sender)
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
  const isGroupAdmins = groupAdmins.includes(sender) || false
  const isWelcom = isGroup ? _welcom.includes(from) : false
  const isAnti = isGroup ? _antilink.includes(from) : false
  const pushname = Lxa.contacts[sender] != undefined ? Lxa.contacts[sender].vname || Lxa.contacts[sender].notify: undefined 
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
    let name = `${author}_${packname}`
    if (fs.existsSync(`./exif/${name}.exif`)) return `./exif/${name}.exif`
    const json = {	
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }
    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

    let len = JSON.stringify(json).length	
    let last	

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
let prem_ = '𝚞𝚜𝚎𝚛'
			if (isPrem) {
			prem_ = '𝑃𝑟𝑜'
			} 
			if (isOwner) {
			prem_ = '𝙾𝚠𝚗𝚎𝚛'
			}
let Welcome_ = 'Off'
			if (isWelcom) {
			Welcome_ = 'On'
			}
let AntiLink_ = 'Off'
			if (isAnti) {
			AntiLink_ 
			}

//--- Total command
const cmdadd = () => {
	hit[0].totalcmd += 1
	fs.writeFileSync('./data/totalhit.json', JSON.stringify(hit))
}
  if (isCmd) cmdadd()
  const reqcmd = JSON.parse(fs.readFileSync('./data/totalhit.json'))[0].totalcmd
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
		if (budy.includes(`${linkwa}`)){
		if (!isGroup) return
		if (!isAnti) return
    if (!isBotGroupAdmins) return reply('⌯   ﹝𝙸 𝚗𝚎𝚎𝚍 𝚊𝚍𝚖𝚒𝚗 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚝𝚘 𝚠𝚘𝚛𝚔.﹞')
    linkgc = await Lxa.groupInviteCode (from)
    if (budy.includes(`${linkwa}${linkgc}`)) return reply('⌯   ﹝𝙸 𝚗𝚎𝚎𝚍 𝚊𝚍𝚖𝚒𝚗 𝚏𝚘𝚛 𝚝𝚑𝚒𝚜 𝚝𝚘 𝚠𝚘𝚛𝚔.﹞')
		if (isGroupAdmins) return reply(`⌯   ﹝𝙰𝚍𝚖𝚒𝚗.﹞`)
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
const newLocal = 'upslot';
//-- Command
switch(command) {	