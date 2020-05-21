'use strict';

const  { getResponses }  = require("./message-response");

const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

var line = 0;

client.once('ready',() => {
    console.log('Ready!')
})

client.on('message', message => {

    //==================Message replies=======================
    getResponses(message.content).forEach(msg => {
            sendResponse(msg);
        });

    if(msgContent.includes(`RooiRonin`) && line === 0)
    {
        line++;
    }
    else if(line==1 && message.content.indexOf('RooiRonin') === -1)
    {
        line = line -1;
    }


    if (message.author.discriminator == 1933)
    {
        sendResponse("Shut up Tim");
    }

    if (message.author.discriminator == 4876)
    {
        sendResponse("MEE6 my mortal enemy ");
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

const sendResponse = (msg) => {
    message.channel.send(msg);
}

/* REMOVE ME
    // Test the message-response.js module:
    console.log(getResponses("hey jeff")[0]);
*/


client.login(token);

