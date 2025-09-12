// Dice rolling simulation

/**
 * Class representing a dice roller.
 *
 * @file dice.js
 * @description
 * @author Tove Ek
 * @version 1.0.0
 */
export class Dice {
  diceArray = [4, 6, 8, 10, 12, 20, 100]

  // bryter mot dry, fixa jämförelse med diceArray istället

  /**
   * Rolls a single die with the specified number of sides and returns the result.
   *
   * @param {number} sides - The number of sides on the die.
   * @returns {number} The result of the die roll.
   */
  rollDie (sides) {
    if (sides < 4) {
      return Math.floor(Math.random() * 4)
    } else if (sides < 6) {
      return Math.floor(Math.random() * 6)
    } else if (sides < 8) {
      return Math.floor(Math.random() * 8)
    } else if (sides < 10) {
      return Math.floor(Math.random() * 10)
    } else if (sides < 12) {
      return Math.floor(Math.random() * 12)
    } else if (sides < 20) {
      return Math.floor(Math.random() * 20)
    } else {
      return Math.floor(Math.random() * 100)
    }
  }

  // Handles rolling multiple dice
  /**
   * Rolls multiple dice with the specified number of sides.
   *
   * @param {number} numDice - Number of dice to roll.
   * @param {number} sides - Number of sides on each die.
   */
  rollDice (numDice, sides) {

  }
}
