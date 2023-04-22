const { Client, Collection, DiscordAPIError, GuildMember } = require('discord.js');
const { config } = require("dotenv");
const fs = require("fs");


const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});

const { MessageEmbed } = require('discord.js')
 
client.commands = new Collection();
client.aliases = new Collection();

client.once("ready", () => {
    console.log("il bot è pronto!");
  });

client.categories = fs.readdirSync("./commands/");
 
config({
    path: __dirname + "/.env"
});
 
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
 
client.on("ready", () => {
    console.log(`me sono appena connesso o fra: ${client.user.username}!`);
    client.user.setActivity('Elle Community...🌗 discord bot by Elle', {
      type: 'WATCHING'
    });
});


client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
 
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
 
   if(!command.startsWith('!')) return;
 
});
 
client.on("message", async message => {
    const prefix = "!";
 
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
 
    if (cmd.length === 0) return;
 
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
 
    if (command)
        command.run(client, message, args);
});

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '835818333588815892'){
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('835805557486125076')
        }
    }
})
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '835818333588815892'){
        if(reaction.emoji.name === '✅') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('835805557486125076')
        }
    }
})

client.on('messageReactionAdd', async(reaction, user) => {
    const message = reaction.message;
    const member = message.guild.members.cache.get(user.id);

    if(user.bot) return;

    if(
        ["🎫", "🔒"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {

            case "🎫":
            
            if(reaction.message.channel.id !== "835827199226544129") return console.log('ciao')

            //reaction.user.remove(user);

            let username = user.username;
            let categoryID = "835829418739499049";
            let channel = await message.guild.channels.create(`ticket-${username}`, {type: 'text', parent: message.guild.channels.cache.get(categoryID)})
            .catch(err => {
                message.channel.send('non so che scrivere [MessageReactionAdd]')
            });

            channel.updateOverwrite(message.guild.roles.everyone, {'VIEW_CHANNEL': false});
            channel.updateOverwrite(member, {
                'VIEW_CHANNEL': true,
                'SEND_MESSAGES': true,
                'ADD_REACTIONS': true
            });
            channel.updateOverwrite(message.guild.roles.cache.find(role => role.name == '𝙎𝙩𝙖𝙛𝙛𝙚𝙧'), {'VIEW_CHANNEL': true});

            var embed1 = new MessageEmbed()
            .setTitle('➟ 𝘌𝘭𝘭𝘦 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺')
            .setDescription('**Questo è il tuo ticket personale, potrai messaggiare con lo staff per qualsiasi tipo di problema!🌗**')
            .setColor('red')

            channel.send(`${member}`)
            channel.send(embed1).then(async msg => msg.react('🔒'))
            let logchannel = message.guild.channels.cache.find(c => c.name == '『🤖』ʟᴏɢꜱ-ꜱᴇʀᴠᴇʀ')
            if(!logchannel) return;
            logchannel.send(`un membro ha aperto un ticket nel canale ${channel}`)
            break;

            case "🔒":
            
            if(!message.channel.name.startsWith('ticket')) return;
            if(!member.hasPermission('ADMINISTRATOR')) return;

            let logchannel2 = message.guild.channels.cache.find(c => c.name == '『🤖』ʟᴏɢꜱ-ꜱᴇʀᴠᴇʀ')
            if(!logchannel2) return;
            await logchannel2.send(`un membro a chiuso un ticket nel canale ${message.channel.name}`)

            message.channel.delete()
            break;

        }   
    }
})

//antilink
function is_url(str) {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(regexp.test(str)) {
      return true;
    } else {
      return false;
    }
    
  }
//finish

//stop
client.on("message", async message =>{
    if (message.author.bot) return;
    //START
    if(!message.member.hasPermission("ADMINISTRATOR")) {

        if(is_url(message.content) === true) {
            message.delete()
            return message.reply("non puoi mandare link in questo server:)!").then(msg => msg.delete({timeout: 15000}));
          }
    }
})  

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '𝙉𝙊𝙉 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙏𝙊');

    guildMember.roles.add(welcomeRole);
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '➖➖➖➖𝙂𝙧𝙖𝙙𝙤➖➖➖➖');

    guildMember.roles.add(welcomeRole);
})

client.login(process.env.TOKEN)