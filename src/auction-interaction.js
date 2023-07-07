const { postEmbed } = require('./discord-bot.js')
const createAuctionBidEmbed = require('./embeds/auction-bid-embed')
const createAuctionSettledEmbed = require('./embeds/auction-settled-embed')
const {getCurrentAuctionInformation} = require("./abi-interaction");

module.exports = {
  handleBid,
  handleAuctionSettling
}

async function handleBid(eventInput) {
  console.log('handleBid > eventInput > returnValues', eventInput.returnValues)
  const auctionInformation = await getCurrentAuctionInformation()
  console.log('handleBid > auctionInformation', auctionInformation)

  await postEmbed(createAuctionBidEmbed(eventInput, auctionInformation));
}

async function handleAuctionSettling(eventInput) {
  console.log('handleAuctionSettling > eventInput', eventInput)

  await postEmbed(createAuctionSettledEmbed(eventInput));
}