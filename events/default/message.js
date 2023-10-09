module.exports = {
  name: "messageCreate",
  execute: async (message, client) => {
    const { author, guild } = message
    // Here, security is really needed, so I set it up accordingly
    // You can delete this if it makes you burdened
    const enableGuild = client.db.get("enable_guild") || [client.mainGuild]
    const enableUser = client.db.get("enable_user") || [client.owner]
    
    // You can only run bots in certain guilds, according to the ID in the database 
    if(!enableGuild.includes(guild.id) && guild.id !== client.mainGuild) return
    // The bot will not run unless commanded by you and your teammates
    if(!enableUser.includes(author.id) && author.id !== client.owner) return 
    if(author.bot) return
    
    // create a custom prefix with the database you have
    // example const all = [">", "!"]
    let allprefix = [client.prefix, "!"],
    prefix
    
    allprefix.forEach((is) => {
      if(message.content.toLowerCase().startsWith(is)) {
        prefix = is
      }
    })
    if(!prefix) return 
    
    // global settings like discord.js v14
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    
    let command = client.commands.get(cmd.toLowerCase()) || client.commands.find((c) => c.aliases && c.aliases.includes(cmd))
    if (!command) return
    
    try {
      
      command.run(client, message, args)
      
    } catch (err) {
      console.log(err)
      // create logs
      client.db.set("ERROR_"+randomString(15), err.message +"\n"+ new Date())
      return;
    }
  }
}

function randomString (length) {
  let string = "abcdefghijklmnopqrstuvwxyz.0123456789"
  let result = ""
  
  for(let i = 0; i < length; i++) {
    result += string.charAt(Math.floor(Math.random() * length))
  }
  return result
}