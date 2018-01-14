// Load up the library
const Discord = require("discord.js");

/////////////////////////////////////////////////////////////////////////////
//                                Client                                   //
/////////////////////////////////////////////////////////////////////////////

const client = new Discord.Client();
const config = require("./config.json");
const prefix = '|'

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`IMP spawned.`); 
  client.user.setGame(`mocking around`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // Ignore messages sent by bots
  if(message.author.bot) return;
  
  // Ignore any message that does not start with our prefix
  if(message.content.indexOf(prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  /////////////////////////////////////////////////////////////////////////////
  //                               Commands                                  //
  /////////////////////////////////////////////////////////////////////////////
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    var sayMessage = "(づ ◕‿◕ )づ ";
    var str = args.join(" ");
    sayMessage = sayMessage.concat(str)
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
});

client.login(config.token);