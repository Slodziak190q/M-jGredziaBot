const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login("Twój Token");

bot.on('ready', (ready) => {
    console.log("Bocik działa!")
    bot.user.setActivity("Nigas efi yoo")
});

bot.on('message', (message) => {
    if(message.content === '!ping') {
        message.channel.send("Pong (uczegredzie)")
    }
});