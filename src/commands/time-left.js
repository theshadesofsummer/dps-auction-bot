const {SlashCommandBuilder} = require("discord.js");
const {getCurrentAuctionInformation} = require("../abi-interaction");


module.exports = {
  data: new SlashCommandBuilder()
    .setName('time-left')
    .setDescription('How much time is left on the current auction?'),

  async execute(interaction) {
    await interaction.deferReply()

    const auctionInformation = await getCurrentAuctionInformation();

    await interaction.editReply({
      content: `The current auction will end on <t:${auctionInformation.endTime}:f> (<t:${auctionInformation.endTime}:R>)`
    })
  },
};
