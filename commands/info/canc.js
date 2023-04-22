module.exports = {
    name: "c",
    aliases: ["clear"],
    category: "info",
    description: "Cancella i messaggi",
    run: async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("non hai permesso per fare questa azione!")
    if(!args[0]) return message.reply("inserisci un numero da eliminare dopo il comando!")
    if(parseInt(args[0]) > 99) return message.reply("non puoi eliminare più di 99 messaggi alla volta!")

    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        message.channel.send(`Messaggi eliminati **con successo**`).then(msg => msg.delete({timeout: 1000}));
    }).catch((err) => {
        return message.reply("errore!");
    })    
}
};     
