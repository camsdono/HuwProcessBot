exports.run = async (client, message, args) => {
    message.channel.send(`Pong! \`${client.ws.ping}ms\``);
}

exports.help = {
    name:"ping"
}