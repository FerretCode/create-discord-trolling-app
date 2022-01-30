require("dotenv").config();

const {
  Client,
  Intents,
  Manager,
  Command,
  CommandHandler,
} = require("discord-trolling");

let bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commandHandler = new CommandHandler({
  path: __dirname + "/commands",
  client: bot,
});

commandHandler.startHandling();

//login (trollface)
bot.troll(process.env.TOKEN);
