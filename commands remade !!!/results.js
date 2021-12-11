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
//-- gay
case 'gay':
case 'gaymeter':
  if (!isVerify) return reply(userB())
  if (args.length > 1) {
  const gay = _gay[Math.floor(Math.random() * _gay.length)]
  reply(`𓂸 𝑇ℎ𝑖𝑠 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑠 ${gay}% 𝑔𝑎𝑦.`)
  }
  else { reply(`𓂸 𝑌𝑜𝑢𝑟 𝑎𝑟𝑒 ${gay}% 𝑔𝑎𝑦.`)}
}
break
//-- love
case 'love':

  if (!isVerify) return reply(userB())
	  if (args.length < 1) return reply(`${design} 𝑃𝑙𝑒𝑎𝑠𝑒 𝑎𝑑𝑑 𝑡𝑤𝑜 𝑛𝑎𝑚𝑒 𝑡𝑜 𝑓𝑖𝑛𝑑 𝑜𝑢𝑡 𝑡ℎ𝑒𝑖𝑟 𝑙𝑜𝑣𝑒.`)		  
  const love = _love[Math.floor(Math.random() * _love.length)]
  reply(`${love}`)
break
//-- nsfw 
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
