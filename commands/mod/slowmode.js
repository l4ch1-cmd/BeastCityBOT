const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'sm',
    category: "mod",
    run: async (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('`non hai il permesso adatto per compiere questa azione!`').then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send('`non hai specificato il tempo!`').then(m => m.delete({ timeout: 5000}));

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'nessuna ragione';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return message.channel.send('la slowmode è stata disabilitata').then(m => m.delete({ timeout: 5000 }));

            embed.setTitle('Slowmode disabilitata')
                .setColor('#00ff46')
            return message.channel.setRateLimitPerUser(0, reason)

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send('`il tempo inserito non è valido, riprova!`').then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send('`stai cercando di impostare un tempo superiore alle 6 ore, questa azione non è possibile.`').then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return message.channel.send(` lo Slowmode è stato impostato su ${args[0]}`);

        embed.setTitle('Slowmode abilitato')
            .addField('Slowmode: ', args[0])
            .addField('ragione: ', reason)
            .setColor('00ff46');

        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}
