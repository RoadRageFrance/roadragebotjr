const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
})

bot.login('NDM2OTM2Mzk3Nzc4MTkwMzY3.DbuwRA.8ZnR9OULusJEKEKRyDUpTu7POfg')

bot.on('message', message => {
if (message.content === "t!ping"){
    message.reply("pong");
    console.log('ping ping');
}
});
