require("dotenv").config();

const {
  Client,
  Intents,
  Manager,
  Command,
  CommandHandler,
} = require("discord-trolling");
const { MyCatLikesFirebaseServer } = require("my-cat-likes-firebase");

global.firestore = new MyCatLikesFirebaseServer({
  firebaseCredentialsPath: "./",
  loggingEnabled: true,
}).initialize();

let bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commandHandler = new CommandHandler({
  path: __dirname + "/commands",
  client: bot,
});

commandHandler.startHandling();

//login (trollface)
bot.troll(process.env.TOKEN);
