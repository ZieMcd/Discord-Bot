'use strict';

const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

var line = 0;

client.once('ready',() => {
    console.log('Ready!')
})

client.on('message', message => {
    //console.log(message.content);

    //==================Message replies=======================
    if (message.content.includes("hey jeff"))
    {
        message.channel.send("wud up");
        //test();
    }

    if(message.content.includes(`ziegay`))
    {
        message.channel.send("No u");
    }

    if(message.content.includes(`epic games`))
    {
        message.channel.send("E-pig games is gay");
    }

    //RooiRonin
    if(message.content.includes(`RooiRonin`) && line === 0)
    {
        message.channel.send("I see you're talking about RooiRonin, just want to let you know that he is very bad at apex legends");
        line++;
    }
    else if(line==1 && message.content.indexOf('RooiRonin') === -1)
    {
        line = line -1;
    }

    if (message.author.discriminator == 1933)
    {
        message.channel.send("Shut up Tim");
    }

    if (message.author.discriminator == 4876)
    {
        message.channel.send("MEE6 my mortal enemy ");
    }

    
    //console.log(message.author);
    message.author.discriminator = 0;
    //===========================================================



    //=====================show avatar==========================
    if (message.content === 'jeff what is my avatar') 
    {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }

    //==========================================================
})


client.login(token);