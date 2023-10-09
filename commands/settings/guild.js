let baseUrl = "https://discord.com/users/"

module.exports = {
  name: "guild",
  aliases: [],
  desc: "bot response to a particular server",
  usage: "{prefix}{cmds} <args1> [args2]",
  args: {
    list: "list",
    add: "add <guildID>",
    remove: "remove <guildID>"
  },
  run: async (client, message, args) => {

    let sub = args[0].toLowerCase()
    if (!sub) return client.sendTyping("type help guild", 1, message.author)

    if (sub === "list") {

      let db = client.db.get("enable_guild")
      let user = ""
      
      for (let i = 0; i < db.length; i++) {
        user += `\n> **[${i + 1}]** ${db[i]} `
      }
      
      return client.sendTyping(user, 5, message.author)
    } else if(sub === "add") {
      let db = client.db.get("enable_guild")
      if(!args[1]) return client.sendTyping("type help guild", 1, message.author)
      
      if(db.includes(args[1])) return client.sendTyping("he is already the guild!", 1, message.author)
      
      client.db.push("enable_guild", args[1])
      let msg = `>>> ${args[1]} has been add to the guild list.`
      client.sendTyping(msg, 3, message.author)
      
    } else if(sub === "remove") {
      let db = client.db.get("enable_guild")
      if(!args[1]) return client.sendTyping("type help guild", 1, message.author)
      
      if(!db.includes(args[1])) return client.sendTyping("The ID is not in the list", 1, message.author)
      
      client.db.pullAll("enable_guild", args[1])
      let msg = `>>> ${args[1]} has been removed from the list.`
      client.sendTyping(msg, 3, message.author)
    } else {
      return client.sendTyping("type help guild for further information", 1, message.author)
    }
  }
}