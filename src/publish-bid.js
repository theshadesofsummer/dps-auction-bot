const { postBid } = require('./discord-bot.js')
const createAuctionEmbed = require('./embeds/auction-embed')
const {getCurrentAuctionInformation} = require("./abi-interaction");

module.exports = {
  handleBid
}

async function handleBid(eventInput) {
  console.log('eventInput', eventInput)

  const auctionInformation = await getCurrentAuctionInformation()
  console.log('auctionInformation', auctionInformation)

  await postBid(createAuctionEmbed({}, auctionInformation));
}