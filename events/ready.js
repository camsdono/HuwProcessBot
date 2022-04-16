module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setStatus('available')
        client.user.setPresence({
            game: {
                name: 'The Server',
                type: "WATCHING"
            }
        });
    }
};

exports.help = {
    name: "ready",
}