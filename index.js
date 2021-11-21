const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login("Twój Token");

bot.on('ready', (ready) => {
    console.log("Bocik działa!")
    bot.user.setActivity("Made by ench__")
});

bot.on('message', (message) => {
    if(message.content === '!ping') {
        message.channel.send("Pong (uczegredzie)")
    }
});
// Lekcja embed
bot.on('message', message => {
    if(message.content === '!embed') {
        const pomoc = new Discord.MessageEmbed()
            .setColor("#a8a432")
            .setTitle("Pomoc drogowa")
            .setDescription("Opis opis")
            .addFields(
            {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            },
            {
                name: 'jakas komenda',
                value: 'COS TAM',
                inline: true
            },
            {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            },
            {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            },
            {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            },    {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            },
            {
                name: 'Jakas komenda',
                value: 'COS ONA ROBI',
                inline: true
            }
            )
            .setFooter("Zrobione Przez ench__")
            .setImage("https://cdn.discordapp.com/attachments/911753077852356622/912066436569108500/Zrzut_ekranu_2021-10-04_183107.png")
            
      message.channel.send(pomoc)  
    } 
})