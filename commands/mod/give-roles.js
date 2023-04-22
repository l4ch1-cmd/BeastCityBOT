const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dr',
    category: "mod",
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`non hai i permessi per farlo`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("stai eseguento male il comando, scrivi `<username || user id> <nome ruolo|| id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('questo membro ha già questo ruolo!').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`ruolo: ${roleName.name}`)
                 .setDescription(`${message.author} hai aggunto il ruolo ${roleName} per ${member.user}`)
                 .setColor('00ff46')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('Prova a dare un ruolo che esiste la prossima volta...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}
