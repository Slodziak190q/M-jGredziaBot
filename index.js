const Discord = require('discord.js');

const bot = new Discord.Client();

bot.login("Twój Token");

bot.on('ready', (ready) => {
    console.log("Bocik działa!")
    bot.user.setActivity("Loading...")
});
// Tutaj zacznij
bot.on('ready', async () => {
    const arrayStatus = [
        `Made by Ench__`,
        `Cos tutaj wstaw 1`,
        `Cos tutaj wstaw 2`,
        `Cos tutaj wstaw 3`,
        `Cos tutaj wstaw 4`,
        `Cos tutaj wstaw 5`,
        `Cos tutaj wstaw 6`,
        `Cos tutaj wstaw 7`,
        `Cos tutaj wstaw 8`,
        `Cos tutaj wstaw 9`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayStatus.length) index=0;
        const status = arrayStatus[index];
        bot.user.setActivity(status);
        index++;
    }, 4000);
})
// tutaj skoncz
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
            }
            )
            .setFooter("Zrobione Przez ench__")
            .setImage("https://cdn.discordapp.com/attachments/911753077852356622/912066436569108500/Zrzut_ekranu_2021-10-04_183107.png")
            
      message.channel.send(pomoc)  
    } 
})


// Jebać cię Greda. Tutaj masz !zarcik
client.on('message',  async () => {
    if (message.content == '!zarcik') {

        /* zartów możesz dodawać ile chcesz
        wystraczy skopiować 'Zart 1', i w ''
        wpisać co się chce */

        const zart = [
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',
            'Zart 1',


        ];

        const response = zart[Math.floor(Math.random() * zart.length)];

        message.reply(response)

    }
});