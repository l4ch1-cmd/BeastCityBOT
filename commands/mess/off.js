const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "off",
    aliases: ["offline"],
    category: "mess",
    description: "Crea mess",
    run: async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("non hai permesso per fare questa azione!")

    message.channel.send(
        new MessageEmbed()
        .setTitle("ꜱᴀᴠᴀɢᴇ ʀᴏʟᴇᴘʟᴀʏ")
        .setDescription("*SERVER OFFLINE! SI PREGA DI NON ENTRARE FINO AL PROSSIMO AVVISO DELLO STAFF!*")
        .setColor("6a0fff")
        .setImage("https://cdn.discordapp.com/attachments/805483372356173864/817729141675655168/standard.gif")
        .setThumbnail("https://cdn.discordapp.com/attachments/804680164227022848/812610567847149568/Composizione-1234.gif")
        .setFooter("🚀 | SAVAGE")
        .setTimestamp()   

    );

}}
  