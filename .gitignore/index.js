const Discord = require('discord.js');
const bot = new Discord.Client()

var prefix = ("t!");

bot.on('ready', () => {
    console.log("Bot prêt !");
})

bot.login('NDM2OTM2Mzk3Nzc4MTkwMzY3.DcJJKg.XSJXWupexO9q31n5PYHCPP_sojk')

bot.on("guildMemberAdd", member => {
member.guild.channels.find("name", "accueil-messages").send('Bienvenue sur le serveur Road Rage France Communauté !')
console.log("join")
})

bot.on('message', message => {

if (message.content.startsWith( prefix + "help")) {
    message.channel.send("__**Voici les commandes disponibles**__ :\n\n __**Légende**__ :\n\n ✅ : __Commande Disponible__\n ❌ : __Commande temporairement désactivée__\n 🚧 : __Commande en cours de développement__\n\n __t!help__ Pour la liste des commandes ✅\n __t!chaine__ pour avoir le lien de ma chaîne YouTube ✅");
    console.log("help");
}

if (message.content.startsWith(prefix + "chaine")) {
    message.channel.send("Ma chaîne YouTube ! https://www.youtube.com/c/RoadRageFrance13");
    console.log("chaine")
}

});
