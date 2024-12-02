//
//project_name : XPLOADER 
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram  : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : heyit-tylor
// @tiktok :hey.its_tylor
// @whatsapp : +254796180105
//*
//*
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })
//=================================================//

global.SESSION_ID = process.env.SESSION_ID || ''
//XPLOADER~6uRnna6L#IjOfgEvvxjHzsY3QgNOmCZTJ1Dmj9LDna5EH0EoH-rI; must start with XPLOADER~

//=================================================//

global.botname = process.env.BOT_NAME || '𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭' 
//Your desured bot name

//=================================================//

global.ownernumber = process.env.OWNER_NUMBER || '254796180105'
//22998068954

//=================================================//


global.ownername = process.env.OWNER_NAME || 'Tylor' 
//Sakura

//=================================================//

global.wagc = process.env.GL_PUSH || "https://whatsapp.com/channel/0029VamSWUx77qVNJDy1Jf11"

//=================================================//

global.themeemoji = process.env.GL_EMOJI || '□'

//=================================================//

global.wm = process.env.GL_WM || "©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭"

//=================================================//

global.packname = process.env.STICKER_PACK_NAME || "Xploader"
//SAKURA 

//=================================================//

global.author = process.env.STICKER_AUTHOR_NAME || "Bot"
//SAKURA

//=================================================//

global.creator = process.env.GL_DEVS || "254754783972@s.whatsapp.net"

//=================================================//

global.xprefix = process.env.PREFIX || '.'
//,

//=================================================//

global.premium = process.env.PREMIUM_VIP || ["254796180105"] 
//22953114683

//=================================================//

global.hituet = 0

//=================================================//

global.autoswview = process.env.AUTO_STATUS_SEEN || false
//true

//=================================================//

global.autoreact = process.env.AUTO_STATUS_REACT || false
//true
//true

//=================================================//

global.statusemoji = process.env.STATUS_EMOJI || '🧡'
//❤️

//=================================================//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" //Don't edit this if you don't know!

//=================================================//
//=================================================//

global.autoblocknumber = process.env.AUTO_BAN || '' 
//92;91;94;221;52

//=================================================//

global.antiforeignnumber = process.env.AUTO_BLOCK || '' 
//set anti foreign number country code

//=================================================//

global.anticall = process.env.ANTI_CALL || false 
//Set true to enable and false to disable bot blocking user's who call you

//=================================================//

global.adminevent = process.env.ANNOUNCE_MSG  || false 
//show promote/demote messages

//=================================================//

global.groupevent = process.env.GROUP_ANNOUNCE_MSG || false 
//show group changes message in group chat

//=================================================//

//=================================================//

//Replies
global.mess = {
	limit: '*Your limit is used up!*',
	nsfw: '*Tell the admin to enable NSFW first!*',
    done: '*Done*',
    error: '*Sorry, I cannot perform that action!*',
    success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*',
    premium: '*Only premium users can use this command!*',
    owner: '*Apologies, only my owner can use this command!*',
    group: '*This feature becomes available when you use it in a group!*',
    admin: '*You’ll unlock this feature with me as an admin!*',
    notadmin: '*This feature will work once you become an admin. A way of ensuring order!*'
}

//=================================================//

//thumbnail
global.thumb = fs.readFileSync('./XploaderMedia/theme/Xploader.jpg')

//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Updated'${__filename}'`, 'red'))
    delete require.cache[file]
    require(file)
})
//=================================================//
