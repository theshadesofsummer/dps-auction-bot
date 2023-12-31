const {SlashCommandBuilder}  = require("discord.js");
const {getCurrentAuctionInformation, getCrocInformation} = require("../abi-interaction");
const createAuctionInfoEmbed = require("../embeds/auction-info-embed");


module.exports = {
  data: new SlashCommandBuilder()
    .setName('auction-info')
    .setDescription('What is the current auction?'),

  async execute(interaction) {
    await interaction.deferReply({ephemeral: false})

    const auctionInformation = await getCurrentAuctionInformation();
    const crocMetadata = await getCrocInformation(auctionInformation.tokenId)

    await interaction.editReply({
      ephemeral: false,
      embeds: [createAuctionInfoEmbed(auctionInformation, crocMetadata)]
    })
  },
};
