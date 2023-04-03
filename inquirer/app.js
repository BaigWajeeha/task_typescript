"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// Example usage
inquirer_1.default
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
        choices: ['Red', 'Green', 'Blue', 'Purple'],
    },
])
    .then((answers) => {
    console.log(`Hello, ${answers.name}! Your favorite color is ${answers.color}.`);
});
