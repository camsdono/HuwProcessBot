const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Ping",
    permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        interaction.reply({content: `PONG \`${client.ws.ping}ms\``})
    }
} 