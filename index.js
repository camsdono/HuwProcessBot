const { Client, Collection } = require('discord.js');
const Discord = require('discord.js')
const { Token } = require('./config.json');

const client = new Discord.Client({
    intents: [
        131071
    ]
})

client.commands = new Collection()

require("./Handlers/Events")(client)
require("./Handlers/Commands")(client)

client.login(Token);