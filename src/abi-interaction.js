const web3 = require("./web3");

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

module.exports = {
  DPS_AUCTION,
  getCurrentAuctionInformation
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}
