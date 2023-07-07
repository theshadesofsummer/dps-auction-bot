module.exports = function createAuctionBidEmbed(eventInput, auctionInformation) {
  return {
    color: 0xae1917,
    title: `Pirate ${auctionInformation.tokenId}`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'New Bid in the Auction!',
      icon_url: 'https://auction.damnedpiratessociety.io/images/dps-logo.png',
    },
    description: `Amount **${auctionInformation.amount / (10**18)} Doubloons**\n` +
                 `Ending: <t:${auctionInformation.endTime}:f> (<t:${auctionInformation.endTime}:R>)\n` +
                 `Bid by: ${eventInput.returnValues.sender.substring(0, 4)}...${eventInput.returnValues.sender.substring(38)}`,
    thumbnail: {
      url: `https://dps-gen1-meta.s3.amazonaws.com/${auctionInformation.tokenId}.png`,
    }
  };
}

