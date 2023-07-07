const web3 = require("./web3");

module.exports = {
  setupAuctionListener,
  getCurrentAuctionInformation
}

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const {handleBid} = require("./auction-interaction");
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

function setupAuctionListener() {
  DPS_AUCTION.events.AuctionBid(() => {
  }).on("connected", function(_subscriptionId){
    console.log('connected to auction bids!');
  })
    .on('data', function(event){
      handleBid(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    });

  DPS_AUCTION.events.AuctionSettled(() => {
  }).on("connected", function(_subscriptionId){
    console.log('connected to contract!');
  })
    .on('data', function(event){
      console.log('Event:', event);
      console.log('Owner Wallet Address: ',event.returnValues.owner);

      handleBid(event)
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    });
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}
