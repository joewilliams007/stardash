//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Menu
case 'menu':
case 'help':
case 'premium':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑀𝑒𝑛𝑢 🌫️
» ${pushname}
» ${id}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .myfeed
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} .star
${design} .games
${design} .tools
${design} .edit
${design} .settings
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
${design} .admin
${design} .owner
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
break

case 'star':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑆𝑡𝑎𝑟𝑃𝑖𝑐𝑡𝑢𝑟𝑒 ✨
» ${pushname}
» ${id}
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

    reply(`𝐺𝑎𝑚𝑒𝑠 🃏
» ${pushname}
» ${id}
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
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break


case 'tools':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝑇𝑜𝑜𝑙𝑠 ⚓
» ${pushname}
» ${id}
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
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break  
     
case 'edit':
    if (!isVerify) return reply(userB(prefix))

    reply(`𝐸𝑑𝑖𝑡 📼
» ${pushname}
» ${id}
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
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break  
     
case 'settings':
case 'setting':
    if (!isVerify) return reply(userB(prefix))

reply(`𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠 ⚙️
» ${pushname}
» ${id}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-    
${design} 🏷️ .name 
✅ ${username}
ℹ️ For Account.
${design} 📃 .age
✅ ${age}
ℹ️ For Account.
${design} 📆 .birthdate 
✅ ${birthdate}
ℹ️ For presents.
${design} 🪐 .mood 
✅ ${mood}
ℹ️ For Account.
${design} 🗝️ .password 
✅ ${password}
ℹ️ Security. 
${design} 📧 .email 
✅ ${email}
ℹ️ Notifications.
${design} 📌 .location 
✅ ${location}
ℹ️ For Weather feed.
${design} 🔥 .design 
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
${design} .delete
${design} .listonline
${design} .listadmin
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- 
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break      
case 'owner':
     if (!isVerify) return reply(userB(prefix))
     if (!isOwner) return reply(ownerB())

reply(`𝑂𝑤𝑛𝑒𝑟 🛠️
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
_𝑌𝑜𝑢𝑟 𝑀𝑜𝑛𝑒𝑦 » ${money}$_
`)
	 break      

//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
