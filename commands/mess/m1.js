module.exports = {
    name: "m1",
    aliases: ["mess1"],
    description: "Crea mess",
    run: async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("non hai permesso per fare questa azione!")

        message.channel.send(`<@${everyone}>\nutilizza questo link per invitare i tuoi amici:\nhttps://discord.gg/PY4GamMDCJ`)
   
}
};     
