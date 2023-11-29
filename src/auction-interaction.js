const createAuctionBidEmbed = require('./embeds/auction-bid-embed')
const createAuctionSettledEmbed = require('./embeds/auction-settled-embed')
const createAuctionCreatedEmbed = require('./embeds/auction-created-embed')
const {getCurrentAuctionInformation, getCrocInformation} = require("./abi-interaction");
const {postEmbed} = require("./discord-bot");

module.exports = {
  handleBid,
  handleAuctionSettling,
  handleAuctionCreated
}

async function handleBid(eventInput) {
  const auctionInformation = await getCurrentAuctionInformation()

  const crocMetadata = await getCrocInformation(auctionInformation.tokenId)

  await postEmbed(createAuctionBidEmbed(eventInput, auctionInformation, crocMetadata));
}

async function handleAuctionSettling(eventInput) {
  const crocMetadata = await getCrocInformation(eventInput.returnValues.tokenId)

  await postEmbed(createAuctionSettledEmbed(eventInput, crocMetadata));
}

async function handleAuctionCreated(eventInput) {
  const crocMetadata = await getCrocInformation(eventInput.returnValues.tokenId)

  await postEmbed(createAuctionCreatedEmbed(eventInput, crocMetadata));
}