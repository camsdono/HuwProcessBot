const { Perms } = require("../Validation/Permissions");
const { Client }  = require("discord.js");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
const { readdirSync } = require('fs');
/**
 * @param {Client} client
 */

module.exports = async (client, Discord) => {
    const eventFolders = readdirSync('./Events');
    for(const folder of eventFolders) {
        const eventFiles = readdirSync(`./Events/${folder}`).filter(files => files.endsWith('.js'));
        for (const file of eventFiles) {
            const event = require(`../Events/${folder}/${file}`);
            if(event.once) {
                client.once(event.name, (...args) => event.execute(...args, client, Discord));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client, Discord));
            }
        }
    }
}

