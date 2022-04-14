const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "moderation",
    description: "Moderation Actions",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "permenant",
            description: "Permenant Action Agaisnt user",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "kickGuildMember",
                    value: "kickGuildMember"
                },
                {
                    name: "banGuildMember",
                    value: "banGuildMember"
                }
            ]
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        const choices = interaction.options.getString("member");

        switch(choices) {
            case "kickGuildMember" : {
                interaction.reply({content: "Kick Command Has Been Used...", ephemeral: true})
            }
            break;
            case "banGuildMember" : {
                interaction.reply({content: "Ban Command Has Been Used...", ephemeral: true})
            }
            break;
        }
    }
}