const Discord = require("discord.js");
var Promise = require('bluebird');
var bunyan = require('bunyan');
var express = require('express');
var _ = require('lodash');
var fs = require('fs');

var app = express();
module.exports = app.listen(8080, function() {
  /*const client = new Discord.Client({
  });
  client.on("ready", () => {
     console.log('ready');
  });
  //Bots token: EFIm1xTTkRp313PBo585dR-x54KO4kt9
  //Apps clientid: 686950452650049539
  //https://discordapp.com/oauth2/authorize?&client_id=686950452650049539&scope=bot&permissions=8
  
  //ExaBushes
  client.login(process.argv[2]);
  var config = {
      prefix: "do"
  };
  
  client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(message.content.indexOf(config.prefix) !== 0) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Let's go with a few common example commands! Feel free to delete or change those.
    
    if(command === "ping") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send("Ping?");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } else if(command === "prog") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send("Progress report?");
      m.edit('no porgs recorded');
    } else if(command === "blowjob") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send(".");
      m.edit('Jonas blows');
    } else if(command === "gretchen") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send(".");
      m.edit('You drink some of the sweet wine from the big bottle.');
    } else if(command === "nlx") {
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send(".");
      let str = 'You are physically feeling very well and mentally in full vigour.\n' + 
  'You feel extremely secure and somewhat weary.\n' + 
  'You can barely eat more and drink a lot more.\n' + 
  'You are sober.\n' + 
  ' Not drunk\n' + 
  'You are malevolent.\n' + 
  'You are burdened.\n' + 
  'You are moving at a normal pace.\n' + 
  'You are 32 days 11 hours 14 minutes 48 seconds of age.\n';
  m.edit(str);
    } else if (command == 'aulist') {
      //await message.channel.send("81256  A long coral necklace                   -           20 (150)    2 d 23 h\n"+
  //"81255  A pure snow-white sword                 -           20 (-)      2 d 23 h");
    } else if (command == 'herbs') {
      
      await message.channel.send(herbs.substring(0, 2000));
    } else if (command == 'who') {
  let str = "There are 47 players in the game, of which 4 fit your selection.\n" +
  "-wizards-  Cotillion  Varian  Ardent     Gorboth   "
      await message.channel.send(str);
    } else {
      const m = await message.channel.send("Shut up and do it yourself!");
    }
  });*/
});


let herbs = "Full: http://23.236.55.114:8080/herbs\nUpdated.: " + (new Date()).toISOString() + "\n" + fs.readFileSync('./herbs').toString();
app.post('/herbs', express.json(), function (request, response) {
  herbs = request.body;
});

app.get('/herbs', function (request, response) {
  console.log('get herbs')
  response.text(herbs);
});

