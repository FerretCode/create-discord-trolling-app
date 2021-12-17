//parse dotenv content
require("dotenv").config();

//import components from the library
const { Client, Intents, Manager, Command } = require("discord-trolling");

//recommended format for creating command structures
let command = () => {
  //create command
  let ping = new Command();

  ping.setName("ping");
  ping.setDescription("ping");

  let option = ping.createOption();

  option.setName("ping");
  option.setRequired(true);
  option.setType(option.types.STRING);
  option.setDescription("ping");
  option.setValue("ping");

  ping.finalizeOption(option);

  //finalize command structure
  return ping.troll();
};

//register command
//you can omit guildId if isGuildCommand is set to false
Manager.registerCommands([command()], {
  token: process.env.TOKEN,
  clientId: process.env.APPLICATION_ID,
  guildId: process.env.GUILD_ID,
  isGuildCommand: true,
}).catch((err) => console.error(err));

//create client
let bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

//listen for a command
bot.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "pong") interaction.reply("pong");
});

//login (trollface)
bot.troll(process.env.TOKEN);
