const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "on",
    aliases: ["mess2"],
    category: "mess",
    description: "Crea mess",
    run: async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("non hai permesso per fare questa azione!")

    message.channel.send(
        new MessageEmbed()
        .setTitle("ꜱᴀᴠᴀɢᴇ ʀᴏʟᴇᴘʟᴀʏ")
        .setDescription("*SERVER ONLINE!*")
        .setImage("https://cdn.discordapp.com/attachments/784856267926929408/796017082231291934/2a00e286a98f247a2e6a792f24dfc899.png")
        .setColor("6a0fff")
        .setThumbnail("https://cdn.discordapp.com/attachments/804680164227022848/812610567847149568/Composizione-1234.gif")
        .setFooter("🚀 | SAVAGE")
        .setTimestamp()   

    );

}}
  