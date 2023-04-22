const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "ga",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "mod",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`non hai specificato bene il tempo, riprova con: d se vuoi intendere giorni, h se vuoi intendere ore, m se vuoi intendere minuti (es: !ga 1h )!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `non stai usando i giusti comandi per intendere il tempo!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`non è un numero, riprova!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `non hai indicato un canale dove creare il giveaway!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Nessun premio specificato!`);
    message.channel.send(`*nuovo giveaway creato in: ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Nuovo giveaway!`)
      .setDescription(
        `quesot utente ${message.author} ha creato un giveaway con in palio: **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`00ff46`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reazione: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `nessuno ha partecipato quindi non esiste un vincitore!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Il vincitore del giveaway con in palio **${prize}** è... ${winner}`
      );
    }, ms(args[0]));
  },
};
