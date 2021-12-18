const { Troll } = require("discord-trolling");

/**
 * Your command
 */
class CommandName extends Troll {
  constructor(interaction, client) {
    super(interaction, client);

    this.run = () => {
      //TODO: implement command
    };
  }
}

module.exports = {
  CommandName,
};
