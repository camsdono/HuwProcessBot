exports.run = async (client, message, args) => {
    message.channel.send(`Pong! \`${client.ws.ping}ms\``);
}

module.exports = {
    name: "ping",
    description: "Tests Bots Speed",
}