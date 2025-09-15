/**
 * Entry point for the Dice module
 * @file index.js
 * @description Main entry point for the Dice module.
 * @author Tove Ek
 * @version 1.0.0
 */

import { Dice } from "./dice.js"

// Example usage

const diceRoller = new Dice()

console.log(diceRoller.rollDie(20)) // Roll a single twenty-sided die

