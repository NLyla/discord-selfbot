const { readdconst { readdirSync } = require("fs")

module.exports = (client) => {

  // LOAD COMMANDS | commands/info/help.js
  readdirSync("./commands").forEach((dir) => {
    const commands = readdirSync(`./commands/${dir}`)

    for (let cmd of commands) {
      let file = require(`../commands/${dir}/${cmd}`)
      if (!file) return;
      client.commands.set(file.name, file)
    }
  })

  // LOAD EVENTS | events/guild/messageCreate.js
  readdirSync("./events").forEach((dir) => {
    const events = readdirSync(`./events/${dir}`)

    for (let file of events) {
      let event = require(`../events/${dir}/${file}`)
      if (!event.name) return;
      client.on(event.name, (...args) => event.execute(...args, client))
    }
  })

  // ERROR HANDLER :)
  process.on("unhandledRejection", (e) => {
    console.log("[1] [ Error Handler ]\n" + e);
  });
  process.on("uncaughtException", (e) => {
    console.log("[2] [ Error Handler ]\n" + e);
  });
  process.on("uncaughtExceptionMonitor", (e) => {
    console.log("[3] [ Error Handler ]\n" + e);
  });

}
