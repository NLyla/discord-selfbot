module.exports = (client) => {
  // create a function here
  // ....... 
  // example: 
  client.sendTyping = (msg, time, channel) => {
    if(typeof time !== "number") time = 5000
    
    channel.sendTyping()
    return setTimeout(() => {
      channel.send(msg)
    }, time * 1000)
  }

}