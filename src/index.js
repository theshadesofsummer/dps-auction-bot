require('dotenv').config();
const { setupDiscordBot } = require("./discord-bot.js");
const {setupAuctionListener} = require("./abi-interaction");

setupDiscordBot().then(
  () => setupAuctionListener()
);
