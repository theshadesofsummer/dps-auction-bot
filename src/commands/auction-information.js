const {SlashCommandBuilder}  = require("discord.js");
const {getCurrentAuctionInformation} = require("../abi-interaction");
const createAuctionInfoEmbed = require("../embeds/auction-info-embed");


module.exports = {
  data: new SlashCommandBuilder()
    .setName('auction-info')
    .setDescription('What is the current auction?'),

  async execute(interaction) {
    await interaction.deferReply({ephemeral: true})

    const auctionInformation = await getCurrentAuctionInformation();

    await interaction.editReply({
      ephemeral: true,
      embeds: [createAuctionInfoEmbed(auctionInformation)]
    })
  },
};
