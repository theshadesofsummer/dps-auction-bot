const {findAttribute} = require("../helper/find-attribute");
module.exports = function createAuctionCreatedEmbed(eventInput, crocMetadata) {
  return {
    color: 0xae1917,
    title: `Pirate ${crocMetadata.name} (${eventInput.returnValues.tokenId})`,
    url: 'https://auction.damnedpiratessociety.io/',
    author: {
      name: 'Auction has started!',
      icon_url: 'https://auction.damnedpiratessociety.io/images/dps-logo.png',
    },
    description: `Ending: <t:${eventInput.returnValues.endTime}:f> (<t:${eventInput.returnValues.endTime}:R>)\n`,
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
      url: `https://dps-gen1-meta.s3.amazonaws.com/${eventInput.returnValues.tokenId}.png`,
    }
  };
}

