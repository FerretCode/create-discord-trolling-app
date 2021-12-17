#! /usr/bin/env node
const figlet = require("figlet");
const inquirer = require("inquirer");
const fs = require("fs-extra");
const multispinner = require("multispinner");

figlet("discord-trolling", (_, data) => {
  console.log(data);

  inquirer
    .prompt([
      {
        type: "list",
        name: "template-type",
        message: "What type of template do you want?",
        default: "empty-discord-trolling-project",
        choices: [
          "empty-discord-trolling-project",
          "dotenv-discord-trolling-project",
        ],
      },
      {
        type: "input",
        name: "name",
        message: "What should the project be called?",
        default: "discord-trolling-app",
      },
      {
        type: "input",
        name: "path",
        message: "What path do you want the template to be cloned in?",
        default: ".",
      },
    ])
    .then((answers) => {
      let spinner = new multispinner([`${answers["template-type"]}...`], {
        preText: "Copying template",
      });

      fs.copySync(
        `./templates/${answers["template-type"]}`,
        `${answers.path}/${answers.name}`
      );

      spinner.success(`${answers["template-type"]}...`);
      console.log("Files copied!");
    })
    .catch((err) => console.error(err));
});
