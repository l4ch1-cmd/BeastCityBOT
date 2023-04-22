
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'r',
    description: 'riprendi round.',
    run: async (client, message, args) => {
        const role = message.guild.roles.cache.find((r) => r.name === '🚀 | AMONG US HEAD')
        //--------------------------------------------------------------------------------------------------------
        if (!role) return message.channel.send(`nada.`)
        if (!message.member.roles.cache.has(role.id)) return message.channel.send(new MessageEmbed()
            .setDescription(`questo comando possono eseguirlo solo chi ha il ruolo 🚀 | AMONG US HEAD.\n Per richiedere questo ruolo aprire un ticket!`).setColor('RANDOM')
        )
        let channel = message.member.voice.channel;
        for (let member of channel.members.filter((member) => !member.user.bot)) {
            await member[1].voice.setDeaf(true);
        }
        message.channel.send(
            new MessageEmbed()
            .setTitle("E' ricominciata la **partita**!")
            .setDescription(
                "tutti i partecipanti della stanza sono stati mutati!."
            )
            .setColor("RANDOM")
            .setThumbnail("https://i.imgur.com/9qJ9j19.png")
            .setFooter("🚀 | AMONG US")
            .setTimestamp()

        );
    }
}


