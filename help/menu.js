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
  return `โ  ${pushname}
โ   ${prem_}
............................
${shopdmen}   .๐๐๐๐๐๐๐ ยป 3$
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐๐๐
`

}

const menusdes = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
............................
${shopdmen}   .๐๐๐๐๐๐๐ ยป 3$
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐๐๐
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
โ  ${pushname}
โ   ${prem_}
............................
โฅ   .๐๐๐๐ ๐๐๐
โฅ   .๐๐๐๐ ๐๐ ๐
โฅ   .๐๐๐๐ ๐๐๐๐๐
............................
โฅ   .๐๐๐๐ ๐๐๐๐๐
โฅ   .๐๐๐๐ ๐๐ ๐๐๐
............................
โ  .๐๐๐๐๐๐๐
`


else if (!isGroup) return`............................
โ  ${pushname}
โ   ${prem_}
............................
โฅ   .๐๐๐๐ ๐๐๐
โฅ   .๐๐๐๐ ๐๐ ๐
โฅ   .๐๐๐๐ ๐๐๐๐๐
............................
โฅ   .๐๐๐๐ ๐๐๐๐๐
โฅ   .๐๐๐๐ ๐๐ ๐๐๐
............................
โ  .๐๐๐๐๐๐๐
`

}

//---
const menus = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
............................
${shopdmen}   .๐๐๐๐  // 4$   
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐๐
${shopdmen}   .๐๐๐๐
............................
${shopdmen}   .๐๐๐๐ ๐๐
${shopdmen}   .๐๐๐๐
............................
${shopdmen}   .๐๐๐ข
${shopdmen}   .๐๐๐ข
${shopdmen}   .๐๐๐๐
............................
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐
............................
${shopdmen}   .๐๐ข๐๐๐๐
`
}

const menusticker = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
............................
${shopdmen}   .๐๐๐๐๐๐๐ ยป 3$ 
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐๐๐
`

}

const menu3 = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
............................
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐ ยป 10$
${shopdmen}   .brightness ยป 10$
${shopdmen}   .๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐ ยป 10$
${shopdmen}   .๐๐  ยป 10$
............................
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐
${shopdmen}   .๐๐3
${shopdmen}   .๐๐๐๐๐
${shopdmen}   .๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐๐
${shopdmen}   .๐ ๐๐๐๐๐๐๐๐๐๐๐๐๐
${shopdmen}   .๐ ๐๐๐๐๐๐๐๐๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐ ๐๐๐
............................
${shopdmen}   .๐ ๐๐๐ ๐
${shopdmen}   .๐ ๐๐๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐ ๐๐๐
${shopdmen}   .๐๐๐๐ ๐๐๐๐๐๐๐
`
}

const menux = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ  ${prem_}
............................
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐
${shopdmen}   .๐๐๐
${shopdmen}   .๐๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐๐๐๐๐ ๐๐
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐๐๐
`
}
const menuy = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
โ    ๐๐๐
............................
${shopdmen}   .๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐ ๐๐๐ก๐
${shopdmen}   .๐๐๐๐
${shopdmen}   .userdata
............................
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐๐๐๐ข๐๐๐๐
............................
${shopdmen}   .๐ ๐๐๐
............................
${shopdmen}   .๐๐๐๐ ๐๐ ๐๐๐
............................
โ   ๐น๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐.
โ   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}


const menuowner = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ   ${prem_}
${shopdmen}   ๐๐ ๐๐๐
............................
${shopdmen}   .๐๐๐๐๐๐๐๐๐
${shopdmen}   .๐๐
${shopdmen}   .๐๐๐๐ ๐๐๐
............................
${shopdmen}   .๐๐๐๐๐๐๐๐๐
............................
โ   ๐น๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐.
โ   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
`
}

const menuagb = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ  ${prem_}
............................
${shopdmen}   ๐ฐ๐๐
โ   ๐๐๐๐ ๐๐๐๐๐๐, ๐๐๐๐๐๐๐๐, ๐๐๐๐๐ ๐๐๐ ๐ ๐๐๐๐๐
โ   ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐
โ   ๐๐ ๐ข๐๐ ๐ ๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ 
โ   ๐๐๐๐ ๐ ๐๐๐ ๐๐๐ ๐๐๐ ๐๐ ๐๐๐.
โ   ๐ฟ๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐ ๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐.
โ   ๐น๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐.
............................
โ   https://chat.whatsapp.com/BBAwr3RY6O77DOhJ8fuBnn
............................
โ   ๐๐๐ ๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐. 
โ   wa.me/4917626388837
${shopdmen}   ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ข`
}

const menuthree = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โ  ${prem_}
............................
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐
............................
${shopdmen}   .๐๐๐๐
............................
${shopdmen}   .๐๐๐๐  // 5$
${shopdmen}   .๐ ๐๐๐๐๐๐  // 4$
${shopdmen}   .๐๐๐๐๐๐๐๐๐
............................
${shopdmen}   .๐๐3๐๐๐๐
${shopdmen}   .๐๐๐๐
${shopdmen}   .๐๐๐๐๐๐๐๐๐๐
`
}



const menusecret = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process, shopdmen) => { 
  return `โ  ${pushname}
โฌ  ${prem_}
............................
`
}


module.exports = { menusdess, menusdes, menu, menus, menusticker, menux, menuowner, menuy, menuagb, menuthree, menu3, menusecret}
