const { Client, Message, MessageEmbed, Collection } = require('discord.js');
const { Prefix } = require('../../config.json');

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(message, client, Discord) {
        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(/ + /);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;

        if(command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if(!authorPerms || !authorPerms.has(command.permissions)) {
                const NoPerms = new MessageEmbed()
                .setColor('RED')
                .setDescription(`You do not have the permssions to run this command`);
                message.reply({embeds: [NoPerms], ephemeral: true})
                
            }
        }

        const { cooldowns } = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if(timestamps.has(message.author.id)) {
            const expireTime = timestamps.get(message.author.id) + cooldownAmount;
            if(now < expireTime) {
                const timeLeft = (expireTime - now) / 1000;
                const timeLeftEmbed = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Please wait another ${timeLeft.toFixed(1)} more seconds to run this command again!`)

                return message.reply({embeds: [timeLeft], ephemeral: true})
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            command.execute(message, args, commandName, client, Discord);
        } catch(error) {
            console.log(error);
            const ErrorEmbed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`An error has occured while trying to run this conmmand`)
            return message.reply({embeds: [ErrorEmbed], ephemeral: true})
        }
    }
}