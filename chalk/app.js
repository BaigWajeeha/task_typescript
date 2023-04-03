"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const name = 'Sindre';
const user = 'other';
console.log(chalk_1.default.magenta.underline('Hello %s'), name);
console.log(user);
//=> 'Hello Sindre'npx tsc && node app
