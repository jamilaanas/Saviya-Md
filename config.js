const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("15093042370")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:425aa3ee42A-22FEBG56F4GE6efGEAh-@roundhouse.proxy.rlwy.net:20833"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/saviya55/Saviya-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '15093042370,15093042370'
global.devs = '15093042370';
global.website = 'https://github.com/saviya55/Saviya-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/49ceffdee14dac505f424.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'SAVIYA-MD-BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUkvaEZkRTBOQ3dmTk80dkJOMU9DTEthVDhvNTRTNTh1TStYOUlNUVgzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTBaTUpwbmRXek5LclpsWG9sVmhsalNuMEkzL2hmeTBKRUJtQXhMa21Ebz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQW54bDc3aFdFL1pxbG9GU2RiTDlCbTNjQlpKNVNEUlpxM3A3clhBTGxjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeS9hamE3MW5wODBkZTRTTjcrOUpvQkUwaE1MdGl5OWtTQitlc25VdkhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CYjUrNUk2WU9QY3VhOWNINDVtMTdHV1ZpVmF6YlY1eXBGcm5mM3JSMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklnbkxJVmlUTHFRQSt3ZU53SExzc2Y3cUlpTEVSYnNqM095VTlRdnE1UmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUU0MnpyemRRWlpQT3E0WXQwWDdwREZHc1FqQUVDQWcvRUI5dXVENWdHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVvRXlWL0dJdnJUaFV2ZTJxOWhVSG0vYklDaDhSakM4K3lCZFdNcXJYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkU3blE5S25rc2h3c0RjYmVTN2hxVGlvYmN6Qis4MFQrSjh1Y2xPbWZHdWtSYkJsUkVRZTJtNFZSZ1hMT3VXd1h0Y0tIeUNUSmtyOG5ZSnc0SE54N0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiIxRkVPRVRsWThjT0hTdldHQkxqeFdjcVRSeWZYVjdsSHFua1UvZnQzRXE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE1MDkzMDQyMzcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYwODk2NzhGMkFFOTU0OTVGRENCMEQxQ0MwOTdGREQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1OTg2Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1MDkzMDQyMzcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5Mjc0Njc1Q0EyNjEyNDNDQkQ5MUFGM0Q5RDlDRkMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1OTg2Njh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1MDkzMDQyMzcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY3RDAyNjM2MkNCMkM3MjUxOTI4M0JDQTU5REY1NTJFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1OTg2NzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFNXzl2NWVOUUlXZ3pVVm8tY1hOYlEiLCJwaG9uZUlkIjoiMjE0NTFmYTUtNGMwNS00MjZmLWJjY2UtZTk2ZTg5YWNhOTIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhFZGRZcDBRQUhNZThsM2hiSGlMT20rdUlyRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbnRyS3JzbGUzTDAyczhDbUtxMXN0NittcGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUxOR0FES1IiLCJtZSI6eyJpZCI6IjE1MDkzMDQyMzcwOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyODA2Mzc5NzgxOTQwNjQ6MUBsaWQiLCJuYW1lIjoiQEFuYXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvbXVWUVEvWW16dFFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1leDNjdTl2LzVGWEJYcTFqcHFkRkhBNW1GaDNnN1l2OEIzd1hNTG5RRzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZEU0FIYitjUGI3U2Vxd25KSlV1dVJ4dWc2YmJpbHo2MmxEZ3Rqay85UEg3MWF1ZnBQSFVKeGJGaURxZGN4OHpzL3pUbjFrWUpiYmIrWnU2TjB4UER3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJleEExUXBzcEhxcVhNeDlEM0tHbjhILzNnNi8zTzYvS0FXUjgyVXRFc3NTME11NzhTTW85QTM5ZXJjelZza0s5Rm5sNkxyaC9mVGpCelZJZkN3VHVDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1MDkzMDQyMzcwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVEhzZDNMdmIvK1JWd1Y2dFk2YW5SUndPWmhZZDRPMkwvQWQ4RnpDNTBCdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUNRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTk4NjY2LCJsYXN0UHJvcEhhc2giOiIxN05VWEoiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxwTiJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Saviya-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SAVIYA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
