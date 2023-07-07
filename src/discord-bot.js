const { Client } = require('discord.js');

module.exports = {
  setupDiscordBot,
  postEmbed,
};

const client = new Client({intents: 0});

async function setupDiscordBot() {
  require('dotenv').config({path: '../.env'})

  client.once('ready', () => {
    console.log('Ready!');
  });

  await client.login(process.env.DPS_AUCTON_BOT_TOKEN);
}

async function postEmbed(embed) {
  await client.guilds.fetch();
  const guild = client.guilds.cache.get(process.env.DPS_GUILD_ID);

  await guild.channels.fetch();
  const channel = guild.channels.cache.get(process.env.TAVERN_CHANNEL_ID);

  await channel.send({embeds: [embed]});
}
