# discord-selfbot
discord selfbot and commands handler
---------
on this occasion, I am sharing a repository about selfbot discord,
It's very easy to use,
first you need to set `.env`
with an example like the one below
```
token=
owner=
prefix=
mainguild=
```
`owner` is the owner of the bot itself, meaning it's you, your ID;
then `mainguild` is your main server to setup these [two commands](./commands/settings) before you can say "done" from this repository
for `prefix` is the bot keyword so that the bot can run
then finally, for `token`, you can get it from your console, with an example like the one below!

## Get Token ? 
  
 <strong>Run code (Discord Console - [Ctrl + Shift + I])</strong> 
  
 ```js 
 window.webpackChunkdiscord_app.push([ 
   [Math.random()], 
   {}, 
   req => { 
     for (const m of Object.keys(req.c) 
       .map(x => req.c[x].exports) 
       .filter(x => x)) { 
       if (m.default && m.default.getToken !== undefined) { 
         return copy(m.default.getToken()); 
       } 
       if (m.getToken !== undefined) { 
         return copy(m.getToken()); 
       } 
     } 
   }, 
 ]); 
 console.log('%cWorked!', 'font-size: 50px'); 
 console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px'); 
 ```
Credit: <img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="20" height="20"/> [<strong>hxr404</strong>](https://github.com/hxr404/Discord-Console-hacks)

## Notes
