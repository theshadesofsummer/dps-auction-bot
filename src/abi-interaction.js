const web3 = require("./web3");
const CROC_METADATA = require('./temp_croc_metadata')

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

const ABI_DPS_CROCS = require('./abi/ABI_DPS_CROCS.json');
const CONTRACT_ADDRESS_DPS_CROCS = '0x6f81e9d51bf482ec3f3724b28eefe9f9fbe4fe04';
const DPS_CROCS = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

module.exports = {
  DPS_AUCTION,
  getCurrentAuctionInformation,
  getCrocInformation
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}

async function getCrocInformation(tokenId) {
  // console.log(CROC_METADATA);
  return CROC_METADATA;
  // return await DPS_AUCTION.methods.auction().call();
}

