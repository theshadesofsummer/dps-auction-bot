module.exports = function createAuctionCreatedEmbed(eventInput) {
  return {
    color: 0xae1917,
    title: `Pirate ${eventInput.returnValues.tokenId}`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'Auction has started!',
      icon_url: 'https://auction.damnedpiratessociety.io/images/dps-logo.png',
    },
    description: `Ending: <t:${eventInput.returnValues.endTime}:f> (<t:${eventInput.returnValues.endTime}:R>)\n`,
    thumbnail: {
      url: `https://dps-gen1-meta.s3.amazonaws.com/${eventInput.returnValues.tokenId}.png`,
    }
  };
}

