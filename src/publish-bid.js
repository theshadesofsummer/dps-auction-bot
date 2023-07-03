const { postBid } = require('./discord-bot.js')
const createAuctionEmbed = require('./embeds/auction-embed')
const {getCurrentAuctionInformation} = require("./abi-interaction");


const RMRK_CONTRACT_ADDRESS = 'ecf2adaff1de8a512f6e8bfe67a2c836edb25da3'
const WGLMR_CONTRACT_ADDRESS = 'acc15dc74880c9944775448304b263d191c6077f'

const FISH_COLLECTION = '95492edcc1d373e236e368973285ad47d56d07b6'
const SOUL_COLLECTION = '9d1454e198f4b601bfc0069003045b0cbc0e6749'
const ITEM_COLLECTION = '29b58a7fceecf0c84e62301e5b933416a1db0599'

module.exports = {
  handleBid
}

async function handleBid(eventInput) {
  console.log('eventInput', eventInput)
  const auctionInformation = await getCurrentAuctionInformation()
  console.log('auctionInformation', auctionInformation)

  await postBid(createAuctionEmbed({}, auctionInformation));
}