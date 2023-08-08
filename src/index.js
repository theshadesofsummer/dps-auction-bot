require('dotenv').config();
const { setupDiscordBot } = require("./discord-bot.js");
const {handleAuctionCreated, handleBid, handleAuctionSettling} = require("./auction-interaction");
const {DPS_AUCTION} = require("./abi-interaction");

setupDiscordBot().then(
  () => setupAuctionListener()
);

function setupAuctionListener() {
  DPS_AUCTION.events.AuctionCreated({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction creation!');
    })
    .on('data', function(event){
      handleAuctionCreated(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })

  DPS_AUCTION.events.AuctionBid({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction bid!');
    })
    .on('data', function(event){
      handleBid(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })


  DPS_AUCTION.events.AuctionSettled({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction settling!');
    })
    .on('data', function(event){
      handleAuctionSettling(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })
}