const { Client, Collection } = require('discord.js');
const Discord = require('discord.js')
const { Token } = require('./config.json');

const client = new Discord.Client({
    intents: [
        131071
    ]
})

client.commands = new Collection();
client.cooldowns = new Collection();

['EventHandler', 'CommandHandler'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});

['Events', 'Commands'].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});


client.login(Token);