const web3 = require("./web3");

module.exports = {
  setupAuctionListener,
  getCurrentAuctionInformation
}

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const {handleBid, handleAuctionSettling, handleAuctionCreated} = require("./auction-interaction");
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

function setupAuctionListener() {
  DPS_AUCTION.events.AuctionCreated(({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction settling!');
    })
    .on('data', function(event){
      handleAuctionCreated(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })
  );

  DPS_AUCTION.events.AuctionBid(({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction bids!');
    })
    .on('data', function(event){
      handleBid(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })
  );

  DPS_AUCTION.events.AuctionSettled(({fromBlock: 'latest'})
    .on("connected", function(_subscriptionId){
      console.log('connected to auction settling!');
    })
    .on('data', function(event){
      handleAuctionSettling(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    })
  );
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}
