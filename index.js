const { prefix, token } = require('./config.json');

const {Client, Intents, Collection } = require('discord.js');
const { MessageEmbed } = require('discord.js'); 
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

const fs = require("fs");

client.commands = new Collection();

require("./Handlers/Events")(client)
require("./Handlers/Commands")(client)

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const props = require(`./commands/${file}`);
    console.log(`Loaded | ${file}`);
    client.commands.set(props.help.name, props);
}

const commandSubFolders = fs.readdirSync('./commands').filter(f => !f.endsWith('.js'));
commandSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'));
    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`);
        console.log(`Loaded |  ${file} - From: %{folder}`);
        client.commands.set(props.help.name, props);
    }
});

// Load Event files from events folder
const eventFiles = fs.readdirSync('./events').filter(f => f.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
};

// Command Manager
client.on("messageCreate", async message => {
    // Check if auther is a bot or the messages was sent in DM's and return)
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    // Get the prefix from the config.json file and prepare message so it can be read as a command
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    // Check for prefix 
    if(!cmd.startsWith(prefix)) return;

    // Get the command from the command collections and then if it exists execute it
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args);
});

// Login to Discord
client.login(token);