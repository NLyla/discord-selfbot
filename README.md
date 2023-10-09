# discord-selfbot
discord selfbot and commands handler
---------
on this occasion, I am sharing a repository about selfbot discord,
It's very easy to use,
first you need to set [`.env`](./.env.example)
with an example like the one below
```
token=
owner=
prefix=
mainguild=
```
`owner` is the owner of the bot itself, meaning it's you, your ID;<br>
then `mainguild` is your main server to setup these [two commands](./commands/settings) before you can say "done" from this repository<br>
for `prefix` is the bot keyword so that the bot can run<br>
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
## Finish
Finally, we have reached the end of the repository,<br>
Next, you can set it yourself & create your own commands for your selfbot in the [commands](./commands) section

## Notes
#### <strong>Using this on a user account is prohibited by the [Discord TOS](https://discord.com/terms) and can lead to the account block.</strong>
Please note, this action may have fatal consequences for your Selfbot account.<br>
use it appropriately or use it with specific interests, don't use the selfbot for crime,<br>
then I am not responsible if anything happens to your selfbot account, so use it as wisely as possible 
