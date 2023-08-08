const createAuctionBidEmbed = require('./embeds/auction-bid-embed')
const createAuctionSettledEmbed = require('./embeds/auction-settled-embed')
const createAuctionCreatedEmbed = require('./embeds/auction-created-embed')
const {getCurrentAuctionInformation} = require("./abi-interaction");
const {postEmbed} = require("./discord-bot");

module.exports = {
  handleBid,
  handleAuctionSettling,
  handleAuctionCreated
}

async function handleBid(eventInput) {
  const auctionInformation = await getCurrentAuctionInformation()

  await postEmbed(createAuctionBidEmbed(eventInput, auctionInformation));
}

async function handleAuctionSettling(eventInput) {
  await postEmbed(createAuctionSettledEmbed(eventInput));
}

async function handleAuctionCreated(eventInput) {
  await postEmbed(createAuctionCreatedEmbed(eventInput));
}