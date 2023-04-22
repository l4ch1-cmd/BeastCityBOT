
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'v',
    description: 'primo round voto',
    run: async (client, message, args) => {
        const role = message.guild.roles.cache.find((r) => r.name === '🚀 | AMONG US HEAD')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`nada.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`questo comando possono eseguirlo solo chi ha il ruolo 🚀 | AMONG US HEAD.\n Per richiedere questo ruolo aprire un ticket!`).setColor('RANDOM')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
            await member[1].voice.setDeaf(false);
        }
        message.channel.send(
            new MessageEmbed()
            .setTitle("E' ora di votare!")
            .setDescription(
                "tutti i partecipanti della stanza sono stati smutati."
            )
            .setColor("RANDOM")
            .setThumbnail("https://i.imgur.com/ZG7ksZy.png")
            .setFooter("🚀 | AMONG US")
            .setTimestamp()
        
        );

    }
}
