module.exports = function createAuctionSettledEmbed(eventInput) {
  return {
    color: 0xae1917,
    title: `Pirate ${eventInput.returnValues.tokenId}`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'Auction is settled!',
      icon_url: 'https://auction.damnedpiratessociety.io/images/dps-logo.png',
    },
    description: `# Amount **${eventInput.returnValues.amount / (10**18)} Doubloons**\n` +
                 `Bought by: ${eventInput.returnValues.winner.substring(0, 4)}...${eventInput.returnValues.winner.substring(38)}`,
    thumbnail: {
      url: `https://dps-gen1-meta.s3.amazonaws.com/${eventInput.returnValues.tokenId}.png`,
    }
  };
}

