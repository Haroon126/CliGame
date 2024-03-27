import inquirer from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 5 + 1);

let userGuess = await inquirer.prompt([
  {
    message: "What is your Name",
    name: "UserName",
    type: "input",
  },
  {
    message: "Do You want to play game?",
    name: "input",
    type: "list",
    choices: ["Yes", "No"],
  },
]);

if (userGuess.input === "Yes") {
  console.log("Yes! Please Go A Head");
  inquirer
    .prompt([
      {
        message: "Plese enter a number between 1 to 5",
        name: "userEnterFirstTime",
        type: "number",
      },
    ])
    .then((userGuess) => {
      if (userGuess.userEnterFirstTime === randomNumber) {
        console.log(
          chalk.bold.bgCyan("congratulations! You Guess the Correct Number")
        );
      } else if (userGuess.userEnterFirstTime !== randomNumber) {
        console.log(
          chalk.underline.bold.bgGreen(
            "You choose wrong number ! You have last chance"
          )
        );
        inquirer
          .prompt([
            {
              message: "Please enter number again",
              type: "number",
              name: "UserEnterSecondTime",
            },
          ])
          .then((userGuess) => {
            if (userGuess.UserEnterSecondTime === randomNumber) {
              console.log(
                chalk.bold.bgCyan(
                  "congratulations! You Guess the Correct Number"
                )
              );
            } else if (userGuess.UserEnterSecondTime !== randomNumber) {
              console.log(chalk.italic.bgRed("You Loose the Game!"));
            }
          });
      }
    });
} else if (userGuess.input === "No") {
  console.log(chalk.italic.bold.bgGreen("No problem you can play later"));
}
