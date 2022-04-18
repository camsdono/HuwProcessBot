const { CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "truth",
    description: "Fun Game Of Truth Or Dare / Truth Mode",
    permission: "",
    options: [
        {
            name: "mode",
            description: "The Game Mode you will play",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Marvel Edition",
                    value: "marvelEdition"
                },
                {
                    name: "16+",
                    value: "16"
                },
                {
                    name: "Normal",
                    value: "normal"
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
        const choices = interaction.options.getString("mode");

        switch(choices) {
            case "marvelEdition" : {
                interaction.reply({content: "Marvel Edition Selected", ephemeral: true})
            }
            break;
            case "16" : {
                interaction.reply({content: "16+ edition selected", ephemeral: true})
            }
            break;
            case "normal" : {
                interaction.reply({content: "Normal edition selected", ephemeral: true})
            }
            break;
        }
    }
} 