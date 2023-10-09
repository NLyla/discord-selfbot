let baseUrl = "https://discord.com/users/"

module.exports = {
  name: "owner",
  aliases: [],
  desc: "owner of the bot",
  usage: "{prefix}{cmds} <args1> [args2]",
  args: {
    list: "list",
    add: "add <userID>",
    remove: "remove <userID>"
  },
  run: async (client, message, args) => {

    let sub = args[0].toLowerCase()
    if (!sub) return client.sendTyping("type help owner", 1, message.author)

    if (sub === "list") {

      let db = client.db.get("enable_user")
      let user = ""
      
      for (let i = 0; i < db.length; i++) {
        let uu = client.users.cache.find((u) => u.id === db[i])
        user += `\n> **[${i + 1}]** [${uu.username}](${baseUrl}${uu.id})`
      }
      
      return client.sendTyping(user, 5, message.author)
    } else if(sub === "add") {
      let db = client.db.get("enable_user")
      if(!args[1]) return client.sendTyping("type help owner", 1, message.author)
      
      let user = client.users.cache.find((c) => c.id === args[1])
      if(!user) return client.sendTyping("i can't find that user", 1, message.author)
      
      if(db.includes(user.id)) return client.sendTyping("he is already the owner!", 1, message.author)
      
      client.db.push("enable_user", args[1])
      let msg = `>>> [${user.username}](${baseUrl}${user.id}) has been add to the owner list.`
      client.sendTyping(msg, 3, message.author)
      
    } else if(sub === "remove") {
      let db = client.db.get("enable_user")
      if(!args[1]) return client.sendTyping("type help owner", 1, message.author)
      
      let user = client.users.cache.find((c) => c.id === args[1])
      if(!user) return client.sendTyping("i can't find that user", 1, message.author)
      
      if(!db.includes(user.id)) return client.sendTyping("he is not the owner", 1, message.author)
      
      client.db.pullAll("enable_user", args[1])
      let msg = `>>> [${user.username}](${baseUrl}${user.id}) has been removed from the list.`
      client.sendTyping(msg, 3, message.author)
    } else {
      return client.sendTyping("type help owner for further information", 1, message.author)
    }
  }
}
