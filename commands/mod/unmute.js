module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '💫 | Lvl 1');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> è stato smutato`);
        } else{
            message.channel.send('non trovo questo membro!');
        }
    }
}