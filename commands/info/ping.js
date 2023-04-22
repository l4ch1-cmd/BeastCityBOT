const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("calcolando...");
      const Embed = new MessageEmbed()
        .setTitle("⚒ilTuttoFare🛠!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `⌛ Latenza di: ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ API Ping  ${Math.round(client.ws.ping)}`
        )
        .setColor('00ff46');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};