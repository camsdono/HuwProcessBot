const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        const { user, guild } = member;

        member.roles.add("963534786775887902");
        
        const leavers = new WebhookClient({
            id: "963539509952262164",
            token: "LjMFUG3hpi_99piFgzt0XkV2pRoPmLoSwZSLU8w4X7mDeDThb8rZw_s4s60_WnqwSd4I"
        });

        const leaver = new MessageEmbed()
        .setColor("RED")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`${member} Is a noob for leaving\nLatested Member Count: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        leavers.send({embeds: [leaver]})

    }
}