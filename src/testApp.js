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

// console.log(diceRoller.rollDie('d4')) // Roll a single four-sided die

console.log(diceRoller.rollDie('2d6')) // Roll two six-sided dice
console.log(diceRoller.rollDie('3d8')) // Roll three eight-sided dice

// console.log(diceRoller.rollDie('d10')) // Roll a single ten-sided die
// console.log(diceRoller.rollDie('d12')) // Roll a single twelve-sided die
// console.log(diceRoller.rollDie('d20')) // Roll a single twenty-sided die
// console.log(diceRoller.rollDie('d100')) // Roll a single one-hundred-sided die

// console.log(diceRoller.rollDie('d5')) // Invalid die type
// console.log(diceRoller.rollDie('6')) // Invalid notation
// console.log(diceRoller.rollDie()) // Invalid notation
