const Discord = require("discord.js");

var bot = new Discoror.Client(); 

bot.on("ready",function(){
    bot.user.setGame("joue a dire bonjour");
    console.log("le bot a bien été connecte");
});

bot.login("NDcwMTczOTI3Nzg0NzEwMTYx.DjSdXg.JHALPaPfW8uEEmHs51i9QeAyI9Y");
