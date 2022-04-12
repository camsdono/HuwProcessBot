const Discord = require('discord.js')
const { Client } = require('discord.js')
const { Token } = require('./config.json');

const client = new Discord.Client({
    intents: [
        131071
    ]
})




// For error handling, makes it so your bot doesnt crash when you get an error with a command (not needed)
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
	
	
});

require("./Handlers/Events")(client)

client.login(Token)