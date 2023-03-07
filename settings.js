
const fs = require('fs')
const chalk = require('chalk')
global.footer = 'Deff x Mahiro'//ganti
global.pulsa = "62838251444098"//ganti
global.gopay = "6283825144098"//ganti
global.dana = "6283825144098"//ganti
global.paypal = "---" 
global.shopay = "---" 
global.saweria = "---" 
global.sociabus = "---" 
global.bni = "---" 
global.bri = "---" 
global.bankjatim = "---" 
global.jago = "---" 
global.neobank = "---" 
global.packname = 'Neko Botz'//ganti
global.footer = '©Deff x Mahiro'//ganti
global.ovo = "6283825144098"//ganti
global.ownerlen = "Deff x Mahiro"
global.owner = ['6283825144098'] //ubh nomor owner hp
global.ownername = "Deff " 
global.ytname = "TT: HifumiChan"
global.socialm = "IG: Deff x Hifumi"
global.location = "Indonesia, JawaBarat, Bekasi"
global.ownernomer = "62895331469673" 
global.premium = ['62895331469673'] 
global.nomorcs = '623825144098'
global.botname = 'Neko MD' 
global.linkz = "Link Gc"
global.websitex = "yt mu"
global.botscript = '-'
global.themeemoji = "😿"
global.packname = "Sticker By"
global.author = "Neko Botz"
global.wm = "Neko Botz"
global.sessionName = 'session'
global.prefa = global.prefa = ['!']
global.sp = '!'

global.mess = {
success: 'Sucses....',
admin: 'Mohon Maaf Feature hanya Khusus admin',
botAdmin: 'Bot Harus Menjadi Admin Group Terlebih dahulu',
premime: 'Maaf Kamu tidak Bisa menggunakan Feature Premium',
owner: 'Maaf Kamu Tidak Bisa menggunakan Feature Owner', 
group: 'Feature Hanya Bisa Di gunakan Di dalam Group',
private: 'Feature Hanya Bisa di gunakan di dalam Private Chat!',
bot: 'Feature Hanya Bisa di gunakan oleh bot',
wait: 'Permintaan Anda sedang kami proses....',
linkm: 'Mana Link Nya?',
}
global.thum = fs.readFileSync("./image/image.jpg")
global.log0 = fs.readFileSync("./image/image.jpg")
global.err4r = fs.readFileSync("./image/image.jpg")
global.thumb = fs.readFileSync("./image/image.jpg")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
