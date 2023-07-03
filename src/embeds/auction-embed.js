module.exports = function createAuctionEmbed(eventInput, auctionInformation) {
  return {
    color: 0x5cc5db,
    title: `*Pirate ${auctionInformation.tokenId}*`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'New Fish Listed!',
      icon_url: 'https://game.evrloot.com/assets/icons/moonbeamIcon.png',
    },
    description: `New Bid for ${auctionInformation.amount / (10**18)} Doubloons`,
    thumbnail: {
      url: `https://dps-gen1-meta.s3.amazonaws.com/${auctionInformation.tokenId}.png`,
    }
  };
}

