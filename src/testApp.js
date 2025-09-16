/**
 * Entry point for the Dice module
 *
 * @file index.js
 * @description Main entry point for the Dice module.
 * @author Tove Ek
 * @version 1.0.0
 */

import { Dice } from './dice.js'

// Example usage

const diceRoller = new Dice()

console.log(diceRoller.rollDie(4)) // Roll a single four-sided die
console.log(diceRoller.rollDie(6)) // Roll a single six-sided die
console.log(diceRoller.rollDie(8)) // Roll a single eight-sided die
console.log(diceRoller.rollDie(10)) // Roll a single ten-sided die
console.log(diceRoller.rollDie(12)) // Roll a single twelve-sided die
console.log(diceRoller.rollDie(20)) // Roll a single twenty-sided die
console.log(diceRoller.rollDie(100)) // Roll a single one-hundred-sided die

console.log(diceRoller.rollDie(5)) // Invalid die type
