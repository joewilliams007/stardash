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
https://github.com/joewilliams007/stardash
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
				let money1 = Number(money);
				let cost = Number(10);
				let newmoney = money1 - cost; 

				fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					var newValue = data.replace(`${money1}`, newmoney);
					fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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
						reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎 𝑝𝑖𝑐𝑡𝑢𝑟𝑒.`)
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

			let money1 = Number(money);
			let cost = Number(10);
			let newmoney = money1 - cost; 

			fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				var newValue = data.replace(`${money1}`, newmoney);
				fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

			let money1 = Number(money);
			let cost = Number(10);
			let newmoney = money1 - cost; 

			fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				var newValue = data.replace(`${money1}`, newmoney);
				fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

	let money1 = Number(money);
	let cost = Number(10);
	let newmoney = money1 - cost; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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
						if (err) return reply('𝐸𝑟𝑟𝑜𝑟.)
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

	let money1 = Number(money);
	let cost = Number(10);
	let newmoney = money1 - cost; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

	let money1 = Number(money);
	let cost = Number(10);
	let newmoney = money1 - cost; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

		let money1 = Number(money);
		let cost = Number(10);
		let newmoney = money1 - cost; 
	
		fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

		 let money1 = Number(money);
		 let cost = Number(10);
		 let newmoney = money1 - cost; 
	 
		 fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			 if (err) throw err;
			 var newValue = data.replace(`${money1}`, newmoney);
			 fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

		let money1 = Number(money);
		let cost = Number(10);
		let newmoney = money1 - cost; 
	
		fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

let money1 = Number(money);
let cost = Number(5);
let newmoney = money1 - cost; 

fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

let money1 = Number(money);
let cost = Number(10);
let newmoney = money1 - cost; 

fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

let money1 = Number(money);
let cost = Number(10);
let newmoney = money1 - cost; 

fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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
						
//-- watermark 
case 'watermarkimage':
if (!isVerify) return reply(UserB())
if (!isQuotedImage) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑡𝑎𝑔 𝑎𝑛 𝑖𝑚𝑎𝑔𝑒`)
if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝐸𝑓𝑓𝑒𝑐𝑡𝑠`) 

let money1 = Number(money);
let cost = Number(10);
let newmoney = money1 - cost; 

fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

let x = Number(args[0]);
let y = Number(args[2]);

	if (args[1] === '+' ) {
		let z = x + y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`); 
  } else if (args[1] === '*' ) {
		let z = x * y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`);  
  } else if (args[1] === 'x' ) {
		let z = x * y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`); 
  } else if (args[1] === '/' ) {
		let z = x / y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`); 	
  } else if (args[1] === ':' ) {
		let z = x / y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`); 	
  } 
  else if (args[1] === '-' ) {
		let z = x - y;
		reply(`${design} 𝑇ℎ𝑒 𝑟𝑒𝑠𝑢𝑙𝑡 𝑜𝑓` + x + args[1] + y + `𝑖𝑠` + z + `.`); 
  } 
break 
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------//
//-- Send
case 'imagedownload':
case 'send':
	if (!isVerify) return reply(UserB())
	if (args.length < 1) return reply(`${design} 𝑊ℎ𝑎𝑡 𝑖𝑠 𝑡ℎ𝑒 𝑝𝑖𝑐𝑡𝑢𝑟𝑒 𝑡𝑖𝑡𝑙𝑒?`)
    if (money < 10) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 10$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑃𝑖𝑐𝑡𝑢𝑟𝑒𝑠`) 

    let money1 = Number(money);
    let cost = Number(10);
    let newmoney = money1 - cost; 

    fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${money1}`, newmoney);
        fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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

       let money1 = Number(money);
       let cost = Number(5);
       let newmoney = money1 - cost; 
   
       fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
           if (err) throw err;
           var newValue = data.replace(`${money1}`, newmoney);
           fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
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
        let xp1 = Number(xp);
        let gain = Number(5);
        let newxp = xp + gain; 

        fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${xp}`, newxp);
            fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
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

    let money1 = Number(money);
    let cost = Number(10);
    let newmoney = money1 - cost; 

    fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${money1}`, newmoney);
        fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
            if (err) throw err;
        })
    })
    await delay(1000) /// waiting 1 second.							
	var weather = require('weather-js');
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

	if (Number(temperature) < Number(10)) {
	var tempSymbol = "❄️"
	}
	else if (Number(temperature) < Number(20)) {
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
		exec(`webpmux -set exif ${addMetadata(`X623`, "Weather")} ${ran} -o ${ran}`, async (error) => {
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
let claimnow = `${tanggal()}`;
fs.readFile(`./data/user/${sender.split("@")[0]}/claim.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${claim}`, claimnow);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/claim.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.	
let money1 = Number(money);
let cost = Number(25);
let newmoney = money1 + cost; 

fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${money1}`, newmoney);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.

let tickets1 = Number(tickets)
let plus = Number(10);
let newtickets = tickets1 + plus; 

fs.readFile(`./data/user/${sender.split("@")[0]}/tickets.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${tickets1}`, newtickets);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/tickets.json`, newValue, 'utf-8', function(err, data) {
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

  let money1 = Number(money);
  let cost = Number(22);
  let newmoney = money1 - cost; 

  fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${money1}`, newmoney);
	  fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		  if (err) throw err;
	  })
  })
  await delay(1000) /// waiting 1 second.

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
			
				exec(`rm -rf ./data/user/${sender.split("@")[0]}/sticker.webp`)
				exec(`ffmpeg -i ${media} ./data/user/${sender.split("@")[0]}/sticker.webp`, (err) => {
							
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

  let money1 = Number(money);
  let cost = Number(22);
  let newmoney = money1 - cost; 

  fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${money1}`, newmoney);
	  fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
		  if (err) throw err;
	  })
  })
  await delay(1000) /// waiting 1 second.
													
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Lxa.downloadAndSaveMediaMessage(encmedia)
							
				exec(`rm -rf ./data/user/${sender.split("@")[0]}/song.opus`)
				exec(`rm -rf ./data/user/${sender.split("@")[0]}/song.mp3`)
				exec(`rm -rf ./data/user/${sender.split("@")[0]}/song.wav`)
	
				exec(`mv ${media} ./data/user/${sender.split("@")[0]}/song.opus`)
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
    if (tickets < 1) return reply(`${slotdesign} 𝑁𝑜𝑡 𝑒𝑛𝑜𝑢𝑔ℎ 𝑇𝑖𝑐𝑘𝑒𝑡𝑠. » .ticketshop`)
    const slot1 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot2 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot3 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot4 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot5 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot6 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot7 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot8 = _slot[Math.floor(Math.random() * _slot.length)]
    const slot9 = _slot[Math.floor(Math.random() * _slot.length)]
    let tickets1 = Number(tickets)
    let plus = Number(1);
    let newtickets = tickets1 - plus; 

    fs.readFile(`./data/user/${sender.split("@")[0]}/tickets.json`, 'utf-8', function(err, data) {
        if (err) throw err;
        var newValue = data.replace(`${tickets1}`, newtickets);
        fs.writeFile(`./data/user/${sender.split("@")[0]}/tickets.json`, newValue, 'utf-8', function(err, data) {
            if (err) throw err;
        })
    })
    await delay(1000) /// waiting 1 second.

    let cash = Number(money);

if ((slot1 == slot2) && slot2 == slot3) {	
        let price = Number(250);
        let newcash = price + cash; 
        fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${money}`, newcash);
            fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Done!');
            })
        })
                await delay(3000) /// waiting 1 second.

        let addxp = Number(50);
        let newxp = oldxp + addxp; 

        fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            var newValue = data.replace(`${xp}`, newxp); 
            fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
            })
        })

reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newcash}$ \n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot1 == slot2) {	

	let price = Number(15);
	let newcash = price + cash; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	let addxp = Number(10);
	let newxp = oldxp + addxp; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${slotme8}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot2 == slot3) {	

	let price = Number(15);
	let newcash = price + cash; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	let addxp = Number(10);
	let newxp = oldxp + addxp; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${slotme8}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

else if (slot1 == slot3) {	

	let price = Number(15);
	let newcash = price + cash; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money}`, newcash);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
			console.log('Done!');
		})
	})
			await delay(3000) /// waiting 1 second.

	let addxp = Number(10);
	let newxp = oldxp + addxp; 

	fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})

	reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${slotme8}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newspam}`)  
}
else {	
	let addxp = Number(2);
	let newxp = oldxp + addxp; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${xp}`, newxp); 
		fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})	 
reply(`${design} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${slotme8}$\n𝑇𝑖𝑐𝑘𝑒𝑡𝑠 𝑙𝑒𝑓𝑡 ${newtickets}`)  
}

//---- Set winner

if (((Number(xp) >= Number(winner1)) && (Number(xp) > Number(winner2)) && (Number(xp) > Number(winner3))))  {						
    exec(`rm -rf ./session/winner1.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner1.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (((Number(xp) >= Number(winner2)) && (Number(xp) > Number(winner3)))  {						
    exec(`rm -rf ./session/winner2.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if ((Number(xp) >= Number(winner3))  {						
    exec(`rm -rf ./session/winner2.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

 else {} 

}

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
					for (let admin of groupAdmins) {
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
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(Lxa.chats.get(ido).presences), Lxa.user.jid]
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
  _request.push(yoi)
  fs.writeFileSync('./help/wishes.json', JSON.stringify(_request))
  reply(`${design} 𝐴𝑑𝑑𝑒𝑑 𝑡𝑜 𝑤𝑖𝑠ℎ𝑒𝑠. 𝑉𝑖𝑒𝑤 𝑣𝑖𝑎 .𝑤𝑖𝑠ℎ𝑒𝑠`)
	break
//--- Note
case 'note':
case 'type':
  if (!isVerify) return reply(userB())
  yoi = value
  if (args.length < 1) return reply(`${design} 𝐸𝑛𝑡𝑒𝑟 𝑛𝑜𝑡𝑒. 𝐸𝑥𝑎𝑚𝑙𝑝𝑒 .𝑛𝑜𝑡𝑒 𝑡𝑜𝑑𝑎𝑦 𝑖𝑠 𝑎 𝑔𝑜𝑜𝑑 𝑑𝑎𝑦`)
  if (yoi.length > 100) return reply(`${design} 𝑇𝑒𝑥𝑡 𝑖𝑠 𝑡𝑜𝑜 𝑙𝑜𝑛𝑔.`)
  _lapor.push(yoi)
  fs.writeFileSync('./help/notes.json', JSON.stringify(_lapor))
  reply(`${design} 𝐴𝑑𝑑𝑒𝑑 𝑡𝑜 𝑛𝑜𝑡𝑒𝑠. 𝑉𝑖𝑒𝑤 𝑣𝑖𝑎 .𝑛𝑜𝑡𝑒𝑠`)
	break
//-- list Notes
case 'notes':
case 'list note':
			if (!isVerify) return reply(userB())
				teks = `${design} 𝑁𝑜𝑡𝑒𝑠\n⌬  𝑇𝑜𝑡𝑎𝑙: ${_lapor.length}\n\n⌯ \n`
				for (let lap of _lapor) {
					teks += `⑅ ${lap}\n`
				}
				reply(teks.trim())
				break
//-- list wish
case 'wishes':
case 'listwish':
			if (!isVerify) return reply(userB())
				teks = `${design} 𝑊𝑖𝑠ℎ𝑒𝑠\n⌬  𝑇𝑜𝑡𝑎𝑙: ${_request.length}\n\n⌯\n`
				for (let req of _request) {
					teks += `⑅ ${req}\n`
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
						for (let _ of mentioned) {
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
						for (let _ of mentioned) {
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
						for (let _ of mentioned) {
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
						for (let _ of anu)
							sendMess(_.jid, value)
						reply(`${design} 𝑇ℎ𝑎𝑡𝑠 𝑎𝑙𝑙?`)
					break
//-- Delet message
case 'delete':
case 'del':
case 'burn':
					if (!isGroup)return reply(group())
					if (!isGroupAdmins) return reply(admin())
					try {
					Lxa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					} catch (e) {
					  reply(`${design} 𝐼 𝑐𝑎𝑛 𝑜𝑛𝑙𝑦 𝑑𝑒𝑙𝑒𝑡𝑒 𝑚𝑦 𝑜𝑤𝑛 𝑚𝑒𝑠𝑠𝑎𝑔𝑒.`)
					}
					break
//-- hide message
case 'hide':

					if (!isGroup)return reply(group())
					try {
					Lxa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
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
	
		let _hismoney = JSON.parse(fs.readFileSync(`./data/user/${args[1].replace('@','./')}/money.json`));	
		let hismoney = _hismoney[0]	//--- money his
		let _hisname = JSON.parse(fs.readFileSync(`./data/user/${args[1].replace('@','./')}/name.json`));	
		let hisname = _hisname[0]	//--- name
				let mymon = Number(money);
				let myam = Number(args[0]);
				let taxes = Number(5);
				let transferamount = mymon - myam - taxes; 

				fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${mytransfermoney}`, transferamount);
					
					fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.	
				let hismon = Number(hismoney);
				let hisam = Number(args[0]);
				let histransferamount = hismon + hisam; 
				fs.readFile(`./data/user/${args[1].replace('@','./')}/money.json`, 'utf-8', function(err, data) {
					if (err) throw err;	
					var newValue = data.replace(`${hismoney}`, histransferamount);
					fs.writeFile(`./data/user/${args[1].replace('@','./')}/money.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})
				await delay(1000) /// waiting 1 second.					
  reply(`${design} 𝑇𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑟𝑒𝑑 *${args[0]}$* 𝑡𝑜 *${hisname}* \n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝐵𝑜𝑡 𝑠𝑡𝑜𝑙𝑒 5$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡: ${transferamount}$\n𝐻𝑖𝑠/ℎ𝑒𝑟 𝑚𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡: ${histransferamount}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅  𝑋623 𝑇𝑟𝑎𝑛𝑠𝑓𝑒𝑟𝑠`)
  let xp1 = Number(xp);
  let gain = Number(5);
  let newxp = xp + gain; 

  fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	  if (err) throw err;
	  var newValue = data.replace(`${xp}`, newxp);
	  fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
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
    for (let chat of list_chat) {
    Lxa.modifyChat(chat.jid, "delete")
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
			for (let mem of groupMembers) {
						teks += `☆ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
			teks += `★☆☆☆☆☆☆☆☆☆☆☆☆☆☆★`
			mentions(teks, members_id, true)
			break				
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//--- Feed
case 'feed':
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

	if (!isVerify) return reply(userB())
	if 	(claim === `${tanggal()}`) { let isclaim = `𝐶𝑙𝑎𝑖𝑚 𝑑𝑎𝑖𝑙𝑦 𝑐𝑎𝑠ℎ 🎁 \n» .𝑐𝑙𝑎𝑖𝑚 «` }

    nomor = '4917626388837@s.whatsapp.net'
    owner = await fs.readFileSync('./images/menu.jpg').toString('base64')
    capt = `${design} 𝑁𝑒𝑤𝑠 𝑓𝑒𝑒𝑑`
    const been = {
    text: `» ${pushname}

» ${status}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
${design} 𝑁𝑎𝑚𝑒 » ${name}
${design} 𝐴𝑔𝑒 » ${age}
${design} 𝐸𝑚𝑜𝑗𝑖𝑒 » ${emojie}
${design} 𝑀𝑜𝑜𝑑 » ${mood}
${design} 𝑀𝑜𝑛𝑒𝑦 » ${money}$
${design} 𝑇𝑖𝑐𝑘𝑒𝑡𝑠 » ${tickets}
${design} 𝑋𝑝 » ${xp}
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
» 𝑠𝑜𝑜𝑛 «
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
» .𝑤𝑖𝑛𝑛𝑒𝑟 «
» .ℎ𝑖𝑑𝑒 «
» .𝑑𝑒𝑙𝑒𝑡𝑒𝑎𝑐𝑐𝑜𝑢𝑛𝑡«
-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
𝑠𝑖𝑛𝑐𝑒 ${accdate}

${isclaim}`,
  contextInfo: {
mentionedJid: [nomor]
  }
}
replyimg(been, text, capt)

let xpn = Number(xp);
let upxp = Number(1);
let newxp = upxp + xpn; 

fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;	
	var newValue = data.replace(`${xp}`, newxp);	
	fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
		console.log('Gained xp!');
	})
})

if ((xp > 100) && xp < 500) {
        let newstatus = "Knight"; 

        fs.readFile(`./data/xp/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/xp/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}
	else if ((xp > 500) && xp < 1000) {
		let newstatus = "King"; 
        fs.readFile(`./data/xp/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/xp/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}

	else if ((xp > 1000) && xp < 10000) {
		let newstatus = "Legend"; 
        fs.readFile(`./data/xp/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/xp/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}

	else if ((xp > 10000) && xp < 11000) {
		let newstatus = "God"; 
        fs.readFile(`./data/xp/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
            if (err) throw err;
            
            var newValue = data.replace(`${status}`, newstatus);
            
            fs.writeFile(`./data/xp/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
                if (err) throw err;
                console.log('Gained xp!');
            })
        })

	}
	else {}
}
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
//-- Stickerpack
case 'setstickerpack': 
case 'stickername': 
case 'stickerpack': 
case 'setstickerpack': 
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑃𝑎𝑐𝑘 𝑛𝑎𝑚𝑒.`)

let stickernow = args[0];
fs.readFile(`./data/xp/${sender.split("@")[0]}/stickerpack.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${stickerpack}`, stickernow);
	
    fs.writeFile(`./data/xp/${sender.split("@")[0]}/stickerpack.json`, newValue, 'utf-8', function(err, data) {
        if (err) throw err;
    })
})
  reply(`${design} 𝐶ℎ𝑎𝑛𝑐𝑒𝑑 𝑆𝑡𝑖𝑐𝑘𝑒𝑟𝑃𝑎𝑐𝑘 𝑛𝑎𝑚𝑒 𝑓𝑟𝑜𝑚 *${setpack}* 𝑡𝑜 *${value}*`)
	break
//-- Mood
case 'mood': 
case 'setmood': 
	if (!isVerify) return reply(userB())
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑚𝑜𝑜𝑑.`)	
let moodnow = args[0];
fs.readFile(`./data/xp/${sender.split("@")[0]}/mood.json`, 'utf-8', function(err, data) {
    if (err) throw err;
	
    var newValue = data.replace(`${mood}`, moodnow);
	
    fs.writeFile(`./data/xp/${sender.split("@")[0]}/mood.json`, newValue, 'utf-8', function(err, data) {
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

		let money1 = Number(money);
		let cost = Number(30);
		let newmoney = money1 - cost; 
	
		fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
			
					let newname = args[0];

					fs.readFile(`./data/user/${sender.split("@")[0]}/name.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${name}`, newname);
						
						fs.writeFile(`./data/user/${sender.split("@")[0]}/name.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
						})
					})
								reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑢𝑠𝑒𝑟𝑛𝑎𝑚𝑒 𝑓𝑟𝑜𝑚 *${name}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)      
		break
//-- changeage - Setage
case 'changeage': 
case 'setage': 
case 'age':  
		if (!isVerify) return reply(userB())	
		if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑎𝑔𝑒.`)
		if (money < 30) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 30$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 

		let money1 = Number(money);
		let cost = Number(5);
		let newmoney = money1 - cost; 
	
		fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			var newValue = data.replace(`${money1}`, newmoney);
			fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
			})
		})
		await delay(1000) /// waiting 1 second.
										
					let newage = args[0];

					fs.readFile(`./data/user/${sender.split("@")[0]}/age.json`, 'utf-8', function(err, data) {
						if (err) throw err;	
						var newValue = data.replace(`${age}`, newage);	
					fs.writeFile(`./data/user/${sender.split("@")[0]}/age.json`, newValue, 'utf-8', function(err, data) {
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
					let newemail = args[0];
					fs.readFile(`./data/user/${sender.split("@")[0]}/email.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${oldemail}`, newemail);
						
						fs.writeFile(`./data/user/${sender.split("@")[0]}/email.json`, newValue, 'utf-8', function(err, data) {
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
	let money1 = Number(money);
	let cost = Number(25);
	let newmoney = money1 - cost; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
					let newdesign = args[0];
				fs.readFile(`./data/user/${sender.split("@")[0]}/design.json`, 'utf-8', function(err, data) {
					if (err) throw err;					
					var newValue = data.replace(`${design}`, newdesign);					
					fs.writeFile(`./data/user/${sender.split("@")[0]}/design.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.
 
					reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑑𝑒𝑠𝑖𝑔𝑛 𝑓𝑟𝑜𝑚  *${changedesign}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)					
		break
//-- changeemojie
case 'changeemojie': 
case 'changemojie': 
case 'setemojie':  
	if (!isVerify) return reply(userB())	
	if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑒𝑛𝑡𝑒𝑟 𝑛𝑒𝑤 𝑒𝑚𝑜𝑗𝑖𝑒.`)
	if (money < 20) return reply(`${design} 𝑌𝑜𝑢 𝑑𝑜𝑛𝑡 ℎ𝑎𝑣𝑒 𝑒𝑛𝑜𝑢𝑔ℎ 𝑚𝑜𝑛𝑒𝑦.\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑛𝑒𝑒𝑑𝑒𝑑 25$ 𝑌𝑜𝑢𝑟 𝑚𝑜𝑛𝑒𝑦 ${money}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n❎ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`) 
	let money1 = Number(money);
	let cost = Number(25);
	let newmoney = money1 - cost; 
	fs.readFile(`./data/user/${sender.split("@")[0]}/money.json`, 'utf-8', function(err, data) {
		if (err) throw err;
		var newValue = data.replace(`${money1}`, newmoney);
		fs.writeFile(`./data/user/${sender.split("@")[0]}/money.json`, newValue, 'utf-8', function(err, data) {
			if (err) throw err;
		})
	})
	await delay(1000) /// waiting 1 second.
				let newemojie = args[0];
				fs.readFile(`./data/user/${sender.split("@")[0]}/emojie.json`, 'utf-8', function(err, data) {
					if (err) throw err;					
					var newValue = data.replace(`${emojie}`, newemojie);					
					fs.writeFile(`./data/user/${sender.split("@")[0]}/emojie.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
					})
				})
				await delay(1000) /// waiting 1 second.
				reply(`${design} 𝐶ℎ𝑎𝑛𝑔𝑒𝑑 𝑒𝑚𝑜𝑗𝑖𝑒 𝑓𝑟𝑜𝑚 *${changeemojie}* 𝑡𝑜 *${value}*\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n𝑀𝑜𝑛𝑒𝑦 𝑙𝑒𝑓𝑡 ${newmoney}$\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n✅ 𝑋623 𝑆𝑒𝑡𝑡𝑖𝑛𝑔𝑠`)  
	break
//---X623-Whatsapp-Bot------------------------------------------------------------------------------------------------------------------------// 
// -- Leaderboard
case 'winner':
case 'leader':
case 'leaderboard':
if (!isVerify) return reply(userB())
let xp1 = Number(xp);
let gain = Number(5);
let newxp = xp + gain; 

fs.readFile(`./data/user/${sender.split("@")[0]}/xp.json`, 'utf-8', function(err, data) {
	if (err) throw err;
	var newValue = data.replace(`${xp}`, newxp);
	fs.writeFile(`./data/user/${sender.split("@")[0]}/xp.json`, newValue, 'utf-8', function(err, data) {
		if (err) throw err;
	})
})
await delay(1000) /// waiting 1 second.		
if (((Number(xp) >= Number(winner1)) && (Number(xp) > Number(winner2)) && (Number(xp) > Number(winner3))))  {						
    exec(`rm -rf ./session/winner1.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner1.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if (((Number(xp) >= Number(winner2)) && (Number(xp) > Number(winner3)))  {						
    exec(`rm -rf ./session/winner2.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
    if (err) throw err;
  });
}

else if ((Number(xp) >= Number(winner3))  {						
    exec(`rm -rf ./session/winner2.json`)
    await delay(3000) /// waiting 1 second.
fs.appendFile(`./session/winner2.json`, `["${xp}", "${pushname}", "${status}"]`, function (err) {				
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

const _winner22 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
const winner22 = _winner22[0]	//--- xp 
const winner22name = _winner22[1]	//--- name
const winner22status = _winner22[2]	//--- status

const _winner33 = JSON.parse(fs.readFileSync(`./session/winner1.json`));	
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

//----------------------------------------------------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------------------------------------------------
//---
case 'return':
  if (!isOwner) return reply(ownerB())
			return Lxa.sendMessage(from, JSON.stringify(eval(args.join(' ')), null, '\n'), text, { quoted: mek })
		break

//---- view web
	case 'view':
  case 'fetch':
  case 'result':
  if (!isOwner) return reply(ownerB())
teks = args.join(` `)
let res = await fetchText(teks)
reply(res)
break
				default:
}
	})
}
starts()

//-- More ? Füge dich hinzu