const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        member.roles.add("963534786775887902"); // Auto Role on user join
        
        const Welcomer = new WebhookClient({
            id: "963535319255351417",
            token: "rlZPfRq6YH8Z3h6ZfyeyYTvzezQrr-BMuvkmq1hWXypdv1YFQtE6bLE4dGHmwbYXmWBC"
        });

        const Welcome = new MessageEmbed()
        .setColor("BLUE")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatested Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})

    }
}