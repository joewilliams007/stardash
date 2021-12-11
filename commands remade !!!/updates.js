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