const web3 = require("./web3");

const ABI_DPS_AUCTION = require('./abi/ABI_DPS_AUCTION.json');
const CONTRACT_ADDRESS_DPS_AUCTION = '0xc9B1eF7FF1BFBAF35f68C8650045F350e1CEee65';
const DPS_AUCTION = new web3.eth.Contract(ABI_DPS_AUCTION, CONTRACT_ADDRESS_DPS_AUCTION);

module.exports = {
  DPS_AUCTION,
  getCurrentAuctionInformation,
  getCrocInformation
}

async function getCurrentAuctionInformation() {
  return await DPS_AUCTION.methods.auction().call();
}

async function getCrocInformation(tokenId) {
  return fetch(`https://dps-gen1-meta.s3.amazonaws.com/${tokenId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request on s3 bucket failed with status ${response.status}`)
      }
      return response.json()
    }).then(json => json)
    .catch(error => console.log(error))
}
