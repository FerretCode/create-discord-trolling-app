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
    token: "your token",
    clientId: "your client id",
    guildId: "guild id",
    isGuildCommand: true,
  }).catch((err) => console.error(err));
};
