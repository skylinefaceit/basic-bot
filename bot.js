/*
  This is the main JS file for the bot. Where all the events are captured
  and the instantiation of the Discord Client Class takes place.
*/

// The various imports for the bot
const Discord = require('discord.js');
const config = require('./config.json');
const util = require('./util');

// Create a new instance of the Discord Client Class.
const bot = new Discord.Client();

// Ready is emitted whenver the bot is up and running successfully.
bot.on('ready', () => {
  // Log to the console that the bot has created and connected correctly.
	console.log(`Bot is up and running, with ${ util.discord.getOnlineUsers(bot.users) } online users, in ${ bot.channels.size } channels.`);
});





var request = require('request');

var playerName = "robi62"; // player in game name

var options = {
  method: "GET",
  url: `https://fortnite.y3n.co/v2/player/${playerName}`,
  headers: {
    'User-Agent': 'nodejs request',
    'X-Key': "DB4NTNjRcl256enxhwlM"
  }
}

request(options, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var stats = JSON.parse(body);
    console.log(`robi62 k/d: ${stats.br.stats.pc.all.kpd}`);
  }
})
    








// This logs the bot into the server itself.
bot.login(process.env.logintoken);
