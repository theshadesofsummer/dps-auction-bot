const {findAttribute} = require("../helper/find-attribute");
module.exports = function createAuctionBidEmbed(eventInput, auctionInformation, crocMetadata) {
  return {
    color: 0xae1917,
    title: `Pirate ${crocMetadata.name} (${auctionInformation.tokenId})`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'New Bid in the Auction!',
      icon_url: 'https://auction.damnedpiratessociety.io/images/dps-logo.png',
    },
    description: `Amount **${auctionInformation.amount / (10**18)} Doubloons**\n` +
                 `Ending: <t:${auctionInformation.endTime}:f> (<t:${auctionInformation.endTime}:R>)\n` +
                 `Bid by: ${eventInput.returnValues.sender.substring(0, 4)}...${eventInput.returnValues.sender.substring(38)}`,
    fields: [
      {
        name: '<:8967pepepirate:910174933840171078> Strength',
        value: findAttribute(crocMetadata.attributes, "Strength"),
        inline: true
      },
      {
        name: '<a:tmap:1039760152041107496> Navigation',
        value: findAttribute(crocMetadata.attributes, "Navigation"),
        inline: true
      },
      {
        name: '<a:chest:1039710796613169172> Luck',
        value: findAttribute(crocMetadata.attributes, "Luck"),
        inline: true
      }
    ],
    thumbnail: {
      url: `https://dps-gen1-meta.s3.amazonaws.com/${auctionInformation.tokenId}.png`,
    }
  };
}

