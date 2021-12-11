// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}


//---
const bgithub = (prefix, tanggal, jam) => {
  return `⌯   ﹝𝙷𝚎𝚛𝚎 𝚒𝚜 𝚝𝚑𝚎 𝚐𝚒𝚝𝚑𝚞𝚋 𝚕𝚒𝚗𝚔.﹞
⑅  https://github.com/joewilliams007/StarDash
⑅  𝙷𝚘𝚠 𝚝𝚘 𝚒𝚗𝚜𝚝𝚊𝚕𝚕
⑅  https://youtu.be/CxMrqZJxyt4`

}


//---
const bnews = (prefix, tanggal, jam) => {
  return `⌯   ﹝𝚃𝚑𝚎 𝚗𝚎𝚠𝚜.﹞
⑅  𝚃𝚑𝚎𝚛𝚎 𝚛𝚎𝚌𝚎𝚗𝚝𝚕𝚢 𝚠𝚊𝚜 𝚊 𝚑𝚞𝚐𝚎 𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝚌𝚛𝚊𝚜𝚑
    𝚂𝚘𝚖𝚎 𝚙𝚎𝚘𝚙𝚕𝚎 𝚝𝚑𝚒𝚗𝚔 𝚒𝚝 𝚠𝚊𝚜 𝚘𝚗 𝚙𝚞𝚛𝚙𝚘𝚜𝚎
⑅  𝙰𝚗𝚐𝚎𝚔𝚊 𝙼𝚎𝚛𝚔𝚎𝚕 𝚠𝚘𝚗𝚝 𝚋𝚎 𝚐𝚎𝚛𝚖𝚊𝚗𝚢 𝚗𝚎𝚠 𝚕𝚎𝚊𝚍𝚎𝚛
⑅  𝚃𝚑𝚎 𝚠𝚒𝚗𝚝𝚎𝚛 𝚒𝚜 𝚌𝚘𝚖𝚖𝚒𝚗𝚐. 𝙸 𝚑𝚘𝚙𝚎 𝚢𝚘𝚞 𝚊𝚛𝚎 𝚠𝚊𝚛𝚖!`
}

//---
const showapk = (prefix, tanggal, jam) => {
  return `https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
  `
}


module.exports = { bgithub, bnews, showapk}