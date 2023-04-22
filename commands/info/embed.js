const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'rdm',
    category: "info",
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle('➟ 𝘌𝘭𝘭𝘦 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺')
            .setDescription('**Usa la reazione sottostante per verificarti. Buona permanenza!**')
            .setColor('RED')
        
        const msg = await message.channel.send(embed)
        await msg.react('✅')
    }

}