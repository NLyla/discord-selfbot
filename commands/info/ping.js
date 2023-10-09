module.exports = {
  name: "ping",
  aliases: [],
  desc: "ping bot",
  usage: "{prefix}{cmds}",
  run: async (client, message, args) => {
    let ping = Math.round(client.ws.ping)
    
    client.sendTyping(`>>> **bot latency is**: \`${ping}ms\``, 3, message.channel)
  }
}
