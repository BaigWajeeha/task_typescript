import inquirer from 'inquirer';

// Example usage
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'color',
      message: 'What is your favorite color?',
      choices: ['Red', 'Green', 'Blue','Purple'],
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.name}! Your favorite color is ${answers.color}.`);
  });
