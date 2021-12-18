const { Troll } = require("discord-trolling");

/**
 * Your command
 */
class ping extends Troll {
  constructor(interaction, client) {
    super(interaction, client);

    this.run = () => {
      interaction.reply("pong");
    };
  }
}

module.exports = {
  ping,
};
