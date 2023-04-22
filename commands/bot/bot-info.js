const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('statistiche ⚒ilTuttoFare🛠')
            .setColor('00ff46')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `è utilizzato su: ${client.guilds.cache.size} server.`,
                    inline: true
                },
                {
                    name: '📺 Canali',
                    value: `gestisce: ${client.channels.cache.size} canali.`,
                    inline: true
                },
                {
                    name: '👥 Server Users',
                    value: `gestisce ${client.users.cache.size} utenti`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Data di creazione',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Core: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Creato da: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}