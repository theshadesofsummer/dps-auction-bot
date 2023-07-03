const web3 = require("./web3");

module.exports = {
  setupAuctionListener,
  getCurrentAuctionInformation
}

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const {handleBid} = require("./publish-bid");
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

function setupAuctionListener() {
  DPS_AUCTION.events.AuctionBid(() => {
  }).on("connected", function(subscriptionId){
    console.log('SubID: ',subscriptionId);
  })
    .on('data', function(event){
      console.log('Event:', event);
      console.log('Owner Wallet Address: ',event.returnValues.owner);
      //Write send email process here!

      handleBid(event)
    })
    .on('changed', function(event){
      //Do something when it is removed from the database.
    })
    .on('error', function(error, receipt) {
      console.log('Error:', error, receipt);
    });
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}
