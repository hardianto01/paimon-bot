const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/fuuselena/whatsapp-bot2
- Primary sc: https://github.com/arugaz/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
❉──────────────────❉
           💓 *SASA BOT* 💓
❉──────────────────❉

╭─────「 *INFO* 」──── 
│++ _*SASA V5.0*_ 
│+ OWNER : _*ZFA*_ 
│+ wa.me/6281310253704 
╰───────────────────  

Hi, ${pushname}! 
Make doang sapskrep channel bot kaga 😒 https://youtube.com/zidanfadilaharsazfaa

Ini fitur sasa!✨
╭──「 *SASA BOT* 」──    
│+ *${prefix}stc*
│+ *${prefix}ttp*
│+ *${prefix}sgif*
│+ *${prefix}stickergiphy*
│+ *${prefix}stmg*
│+ *${prefix}meme*
│+ *${prefix}nulis*
│+ *${prefix}quotemaker*
│+ *${prefix}rate*
│+ *${prefix}kapan*
│+ *${prefix}apakah*
│+ *${prefix}bisakah*
│+ *${prefix}infosurah*
│+ *${prefix}surah*
│+ *${prefix}tafsir*
│+ *${prefix}ALaudio*
│+ *${prefix}jsolat*
│+ *${prefix}nekopoi*
│+ *${prefix}katakasar*
│+ *${prefix}klasmen*
│+ *${prefix}instagram*
│+ *${prefix}ytmp3*
│+ *${prefix}ig*
│+ *${prefix}ytmp4*
│+ *${prefix}facebook*
│+ *${prefix}artinama*
│+ *${prefix}cekjodoh*
│+ *${prefix}zodiak*
│+ *${prefix}motivasi*
│+ *${prefix}urgay*
│+ *${prefix}images*
│+ *${prefix}sreddit*
│+ *${prefix}resep*
│+ *${prefix}stalkig*
│+ *${prefix}wiki*
│+ *${prefix}cuaca*
│+ *${prefix}chord*
│+ *${prefix}lirik*
│+ *${prefix}play*
│+ *${prefix}movie*
│+ *${prefix}whatanime*
│+ *${prefix}aiquote*
│+ *${prefix}doggo*
│+ *${prefix}fakta*
│+ *${prefix}fakboy*
│+ *${prefix}katabijak*
│+ *${prefix}quote*
│+ *${prefix}brainly*
│+ *${prefix}cerpen*
│+ *${prefix}cersex*
│+ *${prefix}puisi*
│+ *${prefix}anime*
│+ *${prefix}kpop*
│+ *${prefix}memes*
│+ *${prefix}tts*
│+ *${prefix}translate*
│+ *${prefix}resi*
│+ *${prefix}covidindo*
│+ *${prefix}ceklokasi*
│+ *${prefix}shortlink*
│+ *${prefix}bapakfont*
│+ *${prefix}linkgc*
│+ *${prefix}adminList*
│+ *${prefix}ownergc*
│+ *${prefix}me*
│+ *${prefix}listban*
│+ *${prefix}listblock*
│+ *${prefix}gcinfo*
│+ *${prefix}dewabatch*
│+ *${prefix}howmuch*
│+ *${prefix}mtk*
│+ *${prefix}google*
│+ *${prefix}ptl*
│+ *${prefix}grupbot*
│+ *${prefix}read*
│+ *${prefix}getpic @tagmember*
│+ *${prefix}santet*
│+ *${prefix}nyenye*
│+ *${prefix}saylist*
│+ *${prefix}addsay*
│+ *${prefix}say*
│+ *${prefix}delsay*
│+ *${prefix}listbacot*
│+ *${prefix}addbacot*
│+ *${prefix}bacot*
│+ *${prefix}delbacot*
│+ *${prefix}jadian*
│+ *${prefix}mystat*
│+ *${prefix}infogempa*
│+ *${prefix}tod*
│+ *${prefix}kbbi*
│+ *${prefix}pornhub*
│+ *${prefix}maps*
│+ *${prefix}infobmkg*
│+ *${prefix}bucin*
│+ *${prefix}stalkig2*
╰───────────────────

╭──「 *ANIME* 」──
│+ *${prefix}rhug*
│+ *${prefix}slap*
│+ *${prefix}waifu*
│+ *${prefix}nsfwgif*
│+ *${prefix}bjgif*
│+ *${prefix}cumgif*
│+ *${prefix}kissgif*
│+ *${prefix}rhentai*
│+ *${prefix}pussy*
│+ *${prefix}bjanime*
│+ *${prefix}gifhentai*
│+ *${prefix}boobs*
│+ *${prefix}randomhentai*
│+ *${prefix}randomhug*
│+ *${prefix}baka*
│+ *${prefix}animeavatar*
│+ *${prefix}neko*
│+ *${prefix}loli*
│+ *${prefix}wallpaper*
│+ *${prefix}wallpaper2*
│+ *${prefix}wpanime*
│+ *${prefix}nekonsfw*
╰───────────────────

╭──「 *IMAGES* 」── 
│+ *${prefix}ameliandani*
│+ *${prefix}pictcogan*
│+ *${prefix}pictcecan*
│+ *${prefix}aesthetic*
╰───────────────────

╭──「 *TENTANG BOT* 」── 
│+ *${prefix}tnc*
│+ *${prefix}donasi*
│+ *${prefix}botstat*
│+ *${prefix}ownerbot*
│+ *${prefix}join*
╰───────────────────

╭──「 *OWNER BOT* 」── 
│+ *${prefix}ban* - banned
│+ *${prefix}bc* - siaran
│+ *${prefix}leaveall* - keluar semua grup
│+ *${prefix}clearall* - hapus semua chat
│+ *${prefix}setstatus*
│+ *${prefix}setpic*
│+ *${prefix}screen*
╰───────────────────

*Author    : Aruga Z*
*Owner BOT : Zfa*
    
https://github.com/fuuselena/whatsapp-bot2
    
Terimakasih telah menggunakan sasa bot.💓`
}
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!
│+ *${prefix}add*
│+ *${prefix}kick* @tag
│+ *${prefix}promote* @tag
│+ *${prefix}demote* @tag
│+ *${prefix}infoall*
│+ *${prefix}del*
│+ *${prefix}mutegrup on/off*
│+ *${prefix}seticon*
│+ *${prefix}revoke link gc*
│+ *${prefix}resend*
│+ *${prefix}setgroupname*
│+ *${prefix}bokep*
│+ *${prefix}antilink on/off*
│+ *${prefix}edotensei*
╰───────────────────

_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara berdonasi:
Dana: 081310253704
Pulsa: 081310253704

Sapskrep Channel Owner: https://youtube.com/zidanfadilaharsazfaa

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -ArugaZ`
}
