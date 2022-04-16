const { MessageEmbed, CommandInteraction, Client, Discord } = require('discord.js');

exports.run = async (client, message, args) => {
    const FAQ = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("FAQ:")
        .setDescription("Here are all of the Frequently Asked Questions!. Read this before asking a question as the answer might be here:")

        .addFields(
            { name: "Can you download JARVIS?", value: "You can not Download Jarvis becuase of the copywrite that is on Jarvis and the fact that it is not open source."},
            { name: "How can you make JARVIS?", value: "You can build your own version of JARVIS through Python. There is is a Repo on Huws Github that you can clone and build your own version of JARVIS from that repo."},
            { name: "How is Huws JARVIS built?", value: "JARVIS is built with Python as backend (the AI part) and React.js with Node.js as frontend (the UI part)."},
            { name: "What is the way to built an AI?", value: "The best way to build an AI is with Python. You can find a guide on how to build an AI on Huws Github."},
            { name: "How to start Programming?", value: "Look up FreeCodeCamp and learn programing through there tutorials."},
        )
        
        .addFields(
            { name: "Links", value: "Some links that might be of use:"},
            { name: "Repo:", value: "https://github.com/huwissp/pytorch-chatbot"},
            { name: "NeuralNine youtube video:", value: "https://www.youtube.com/watch?v=1lwddP0KUEg"},
        )

        .setTimestamp()
    
    message.channel.send({ embeds: [FAQ] });
}

exports.help = {
    name: "faq",
    description: "Shows the FAQ of the server.",
}


module.exports = {
    name: "faq",
    description: "Shows the FAQ of the server.",
    permission: "",
    
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */

     execute(message, args, client) {
        const embed = new MessageEmbed;
        
        embed.setTitle("FAQ");
        embed.setColor("#0099ff");
        embed.setDescription("Here are all of the Frequently Asked Questions!. Read this before asking a question as the answer might be here:");
        embed.addFields(
            { name: "Can you download JARVIS?", value: "You can not Download Jarvis becuase of the copywrite that is on Jarvis and the fact that it is not open source."},
            { name: "How can you make JARVIS?", value: "You can build your own version of JARVIS through Python. There is is a Repo on Huws Github that you can clone and build your own version of JARVIS from that repo."},
            { name: "How is Huws JARVIS built?", value: "JARVIS is built with Python as backend (the AI part) and React.js with Node.js as frontend (the UI part)."},
            { name: "What is the way to built an AI?", value: "The best way to build an AI is with Python. You can find a guide on how to build an AI on Huws Github."},
            { name: "How to start Programming?", value: "Look up FreeCodeCamp and learn programing through there tutorials."},
        );

        embed.addFields(
            { name: "Links", value: "Some links that might be of use:"},
            { name: "Repo:", value: "https://github.com/huwissp/pytorch-chatbot"},
            { name: "NeuralNine youtube video:", value: "https://www.youtube.com/watch?v=1lwddP0KUEg"},
        );

        embed.setTimestamp();

        message.reply({ embeds: [embed] });
    }
}
