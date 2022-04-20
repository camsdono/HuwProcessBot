const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    aliases: ['latency', 'lag'],
    permissions: "",
    description: "CHECK BOTS LATENCY",
    cooldown: 5,
    execute(message,args,commandName, client, Discord) {
        const response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`Pong! The bots latency is:  ${client.ws.ping}ms`);
        message.reply({embeds: [response], ephemeral: true})
    }
} 