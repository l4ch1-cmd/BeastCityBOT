const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'at',
    category: "info",
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle('🎫TICKET🎫')
            .setDescription('➟ 𝘌𝘭𝘭𝘦 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺\nReagisci al messaggio\nper aprire un ticket!')
            .setColor('red')
    
        let myGuild = client.guilds.cache.get('801790338733047828');
        let SendChannel = myGuild.channels.cache.get('835827199226544129')
        SendChannel.send(embed)
        .then(msg => msg.react('🎫'))
    }

}
