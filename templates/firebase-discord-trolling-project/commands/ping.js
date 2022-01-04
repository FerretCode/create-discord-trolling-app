const { Troll } = require("discord-trolling");

/**
 * Your command
 */
module.exports.ping = class extends Troll {
  constructor(interaction, client) {
    super(interaction, client);

    this.run = () => {
      interaction.reply("pong");
    };
  }
};
