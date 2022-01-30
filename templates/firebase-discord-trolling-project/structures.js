require("dotenv").config();

const { Manager, OptionTypes, Command } = require("discord-trolling");

let command = () => {
  //create command
  let command = new Command();

  command.setName("command").setDescription("command");

  let option = command
    .createOption()
    .setName("option")
    .setRequired(true)
    .setType(OptionTypes.STRING)
    .setDescription("option")
    .setValue("option");

  command.finalizeOption(option);

  //finalize command structure
  return command.troll();
};

let commands = [command()];

module.exports.register = () => {
  Manager.registerCommands(commands, {
    token: process.env.TOKEN,
    clientId: process.env.APPLICATION_ID,
    guildId: process.env.GUILD_ID,
    isGuildCommand: true,
  }).catch((err) => console.error(err));
};
