const { Client, Collection, REST } = require('discord.js');
const {Routes} = require('discord-api-types/v9');
const timeLeftCommand = require("./commands/time-left");
const auctionInformationCommand = require("./commands/auction-information");

module.exports = {
  setupDiscordBot,
  postEmbed,
};

const client = new Client({intents: 0});
const commands = [
  timeLeftCommand,
  auctionInformationCommand
]

async function setupDiscordBot() {
  require('dotenv').config({path: '../.env'})

  await deployCommandsToServer();
  client.commands = getCollectionForCommands();

  client.once('ready', () => {
    console.log('Ready!');
  });

  client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return;

      try {
        await command.execute(interaction);
      }
      catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  });

  await client.login(process.env.DPS_AUCTON_BOT_TOKEN);
}

async function deployCommandsToServer() {
  const commandData = []
  for (const command of commands) {
    commandData.push(command.data.toJSON());
  }

  const rest = new REST({ version: '10' }).setToken(process.env.DPS_AUCTON_BOT_TOKEN);

  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(process.env.DPS_AUCTON_BOT_CLIENT_ID),
      { body: commandData },
    );

    console.log('Successfully reloaded application (/) commands.');
  }
  catch (error) {
    console.error(error);
  }
}

function getCollectionForCommands() {
  const collection = new Collection();

  for (const command of commands) {
    collection.set(command.data.name, command);
  }

  return collection;
}

async function postEmbed(embed) {
  await client.guilds.fetch();
  const guild = client.guilds.cache.get(process.env.DPS_GUILD_ID);

  await guild.channels.fetch();
  const channel = guild.channels.cache.get(process.env.TAVERN_CHANNEL_ID);

  await channel.send({embeds: [embed]});
}
