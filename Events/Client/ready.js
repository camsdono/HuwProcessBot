const { Client } = require("discord.js")


module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        console.log("The bot is online...")
        client.user.setActivity("Huw Prosser", {
            type: "WATCHING",
        });
    }
}