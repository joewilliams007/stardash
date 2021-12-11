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




const menusdess = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
${shopdmen}   .𝚜𝚝𝚒𝚌𝚔𝚎𝚛 » 3$
${shopdmen}   .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`

}

const menusdes = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
${shopdmen}   .𝚜𝚝𝚒𝚌𝚔𝚎𝚛 » 3$
${shopdmen}   .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`

}

const menu = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return `
............................
⇝  ${pushname}
⇝   ${prem_}
............................
⌥   .𝚖𝚎𝚗𝚞 𝚘𝚗𝚎
⌥   .𝚖𝚎𝚗𝚞 𝚝𝚠𝚘
⌥   .𝚖𝚎𝚗𝚞 𝚝𝚑𝚛𝚎𝚎
............................
⌥   .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
⌥   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`


else if (!isGroup) return`............................
⇝  ${pushname}
⇝   ${prem_}
............................
⌥   .𝚖𝚎𝚗𝚞 𝚘𝚗𝚎
⌥   .𝚖𝚎𝚗𝚞 𝚝𝚠𝚘
⌥   .𝚖𝚎𝚗𝚞 𝚝𝚑𝚛𝚎𝚎
............................
⌥   .𝚖𝚎𝚗𝚞 𝚊𝚍𝚖𝚒𝚗
⌥   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
⍗  .𝚞𝚙𝚍𝚊𝚝𝚎𝚜
`

}

//---
const menus = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
${shopdmen}   .𝚜𝚕𝚘𝚝  // 4$   
${shopdmen}   .𝚍𝚒𝚌𝚎
${shopdmen}   .𝚏𝚕𝚊𝚐
${shopdmen}   .𝚎𝚞𝚏𝚕𝚊𝚐
............................
${shopdmen}   .𝚝𝚛𝚞𝚝𝚑
${shopdmen}   .𝚍𝚊𝚛𝚎
............................
${shopdmen}   .𝚗𝚜𝚏𝚠𝚎𝚗
${shopdmen}   .𝚖𝚎𝚖𝚎
............................
${shopdmen}   .𝚜𝚊𝚢
${shopdmen}   .𝚐𝚊𝚢
${shopdmen}   .𝚕𝚘𝚟𝚎
............................
${shopdmen}   .𝚏𝚊𝚌𝚝
${shopdmen}   .𝚊𝚗𝚒𝚖𝚊𝚕
${shopdmen}   .𝚙𝚘𝚔𝚎𝚖𝚘𝚗
${shopdmen}   .𝚎𝚖𝚘𝚓𝚒𝚎
............................
${shopdmen}   .𝚜𝚢𝚖𝚋𝚘𝚕
`
}

const menusticker = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
${shopdmen}   .𝚜𝚝𝚒𝚌𝚔𝚎𝚛 » 3$ 
${shopdmen}   .𝚒𝚖𝚊𝚐𝚎𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`

}

const menu3 = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
............................
${shopdmen}   .𝚋𝚕𝚞𝚛
${shopdmen}   .𝚜𝚊𝚝𝚞𝚛𝚊𝚝𝚒𝚘𝚗 » 10$
${shopdmen}   .brightness » 10$
${shopdmen}   .𝚏𝚒𝚕𝚝𝚎𝚛
${shopdmen}   .𝚏𝚕𝚒𝚙 » 10$
${shopdmen}   .𝚋𝚠 » 10$
............................
${shopdmen}   .𝚊𝚞𝚍𝚒𝚘𝚕𝚎𝚟𝚎𝚕
${shopdmen}   .𝚖𝚙3
${shopdmen}   .𝚜𝚙𝚎𝚎𝚍
${shopdmen}   .𝚌𝚛𝚞𝚜𝚑
............................
${shopdmen}   .𝚌𝚘𝚟𝚎𝚛
${shopdmen}   .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚟𝚒𝚍𝚎𝚘
${shopdmen}   .𝚠𝚊𝚝𝚎𝚛𝚖𝚊𝚛𝚔𝚒𝚖𝚊𝚐𝚎
............................
${shopdmen}   .𝚗𝚘𝚝𝚎
${shopdmen}   .𝚠𝚒𝚜𝚑
............................
${shopdmen}   .𝚋 𝚗𝚎𝚠𝚜
${shopdmen}   .𝚋 𝚜𝚞𝚙𝚙𝚘𝚛𝚝
............................
${shopdmen}   .𝚖𝚎𝚗𝚞 𝚊𝚐𝚋
${shopdmen}   .𝚖𝚎𝚗𝚞 𝚜𝚝𝚒𝚌𝚔𝚎𝚛
`
}

const menux = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
${shopdmen}   .𝚔𝚒𝚌𝚔
${shopdmen}   .𝚙𝚛𝚘𝚖𝚘𝚝𝚎
${shopdmen}   .𝚍𝚎𝚖𝚘𝚝𝚎
${shopdmen}   .𝚊𝚍𝚍
${shopdmen}   .𝚝𝚊𝚐𝚊𝚕𝚕
............................
${shopdmen}   .𝚊𝚗𝚝𝚒𝚕𝚒𝚗𝚔 𝚘𝚗
${shopdmen}   .𝚕𝚒𝚗𝚔
${shopdmen}   .𝚕𝚎𝚊𝚟𝚎
............................
${shopdmen}   .𝚍𝚎𝚕𝚎𝚝𝚎
`
}
const menuy = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
⇝    𝚟𝚒𝚙
............................
${shopdmen}   .𝚝𝚊𝚐𝚊𝚕𝚕
${shopdmen}   .𝚙𝚒𝚔𝚊 𝚝𝚎𝚡𝚝
${shopdmen}   .𝚙𝚒𝚗𝚐
${shopdmen}   .userdata
............................
${shopdmen}   .𝚞𝚕𝚝𝚒𝚖𝚊𝚝𝚎𝚛𝚘𝚕𝚕
${shopdmen}   .𝚕𝚎𝚐𝚎𝚗𝚍𝚊𝚛𝚢𝚛𝚘𝚕𝚕
............................
${shopdmen}   .𝚠𝚊𝚖𝚎
............................
${shopdmen}   .𝚖𝚎𝚗𝚞 𝚘𝚠𝚗𝚎𝚛
............................
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}


const menuowner = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝   ${prem_}
${shopdmen}   𝚘𝚠𝚗𝚎𝚛
............................
${shopdmen}   .𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
${shopdmen}   .𝚋𝚌
${shopdmen}   .𝚖𝚎𝚗𝚞 𝚟𝚒𝚙
............................
${shopdmen}   .𝚞𝚙𝚍𝚊𝚝𝚎𝚋𝚘𝚝
............................
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}

const menuagb = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
${shopdmen}   𝙰𝚐𝚋
⑅   𝚈𝚘𝚞𝚛 𝚗𝚞𝚖𝚋𝚎𝚛, 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜, 𝚗𝚘𝚝𝚎𝚜 𝚊𝚗𝚍 𝚠𝚒𝚜𝚑𝚎𝚜
⑅   𝚖𝚒𝚐𝚑𝚝 𝚋𝚎 𝚜𝚝𝚘𝚛𝚎𝚍 𝚒𝚏 𝚛𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍
⑅   𝚒𝚏 𝚢𝚘𝚞 𝚠𝚒𝚜𝚑 𝚝𝚘 𝚑𝚊𝚟𝚎 𝚝𝚑𝚎𝚖 𝚍𝚎𝚕𝚎𝚝𝚎𝚍 
⑅   𝚌𝚑𝚊𝚝 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚘𝚠𝚗𝚎𝚛.
⑅   𝙿𝚕𝚎𝚊𝚜𝚎 𝚍𝚘𝚗𝚝 𝚊𝚋𝚞𝚜𝚎 𝚋𝚘𝚝 𝚠𝚒𝚝𝚑 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚌𝚘𝚗𝚝𝚎𝚗𝚝.
⑅   𝙹𝚘𝚒𝚗 𝚘𝚞𝚛 𝚜𝚞𝚙𝚙𝚘𝚛𝚝 𝚐𝚛𝚘𝚞𝚙 𝚏𝚘𝚛 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗𝚜.
............................
⑅   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
............................
⑅   𝚈𝚘𝚞 𝚌𝚊𝚗 𝚊𝚕𝚜𝚘 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎. 
⑅   wa.me/4917626388837
${shopdmen}   𝚋𝚊𝚜𝚎𝚍 𝚒𝚗 𝚐𝚎𝚛𝚖𝚊𝚗𝚢`
}

const menuthree = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⇝  ${prem_}
............................
${shopdmen}   .𝚛𝚖𝚋𝚐
${shopdmen}   .𝚛𝚖𝚋𝚐𝚜
............................
${shopdmen}   .𝚌𝚊𝚕𝚌
............................
${shopdmen}   .𝚜𝚘𝚗𝚐  // 5$
${shopdmen}   .𝚠𝚎𝚊𝚝𝚑𝚎𝚛  // 4$
${shopdmen}   .𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎
............................
${shopdmen}   .𝚖𝚙3𝚜𝚘𝚗𝚐
${shopdmen}   .𝚌𝚘𝚘𝚕
${shopdmen}   .𝚛𝚊𝚗𝚍𝚘𝚖𝚜𝚘𝚗𝚐
`
}



const menusecret = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `⇝  ${pushname}
⌬  ${prem_}
............................
`
}


module.exports = { menusdess, menusdes, menu, menus, menusticker, menux, menuowner, menuy, menuagb, menuthree, menu3, menusecret}
