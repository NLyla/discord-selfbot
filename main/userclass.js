const { Client, Collection } = require("discord.js-selfbot-v13")
const Database = require("my-json-database")

class bot extends Client {
  constructor() {
    super ({
      checkUpdate: false
    })
    
    this.commands = new Collection()
    this.token = process.env.token
    this.owner = process.env.owner
    this.prefix = process.env.prefix
    this.mainGuild = process.env.mainguild
    this.db = new Database()
    
    let handler = ["index", "function"]
    handler.forEach((file) => {
      require(`../handler/${file}`)(this)
    })
    
  }
  
  login() {
    return super.login(this.token)
  }
}

module.exports = bot
