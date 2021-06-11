const Aoijs = require("aoi.js");
var fs = require('fs');
const bot = new Aoijs.Bot({
  token: process.env.TOKEN,
  prefix: "!"
});
bot.onMessage();
bot.loadCommands(`./komutlar/`);
