require('dotenv').config();
const { setupDiscordBot } = require("./discord-bot.js");
const {setupAuctionListener, getCurrentAuctionInformation} = require("./abi-interaction");

setupDiscordBot();

setTimeout(() => {
  setupAuctionListener()
}, 5000)

