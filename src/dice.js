/**
 * Class representing a dice roller.
 *
 * @file dice.js
 * @description Simulates rolling various types of dice.
 * @author Tove Ek
 * @version 1.0.0
 */
export class Dice {
  diceArray = [4, 6, 8, 10, 12, 20, 100]

  /**
   * Rolls a single die with the specified number of sides and returns the result message.
   *
   * @param {number} sides - The number of sides on the die.
   * @returns {string} - The result message or error message.
   */
  rollDie (sides) {
    try {
      if (this.diceArray.includes(sides)) {
        const roll = Math.floor(Math.random() * sides) + 1
        const result = `You rolled a ${roll} with a d${sides}`
        return result
      } else {
        const errorMessage = 'Type of dice not valid. Please choose one of the following:\nd4, d6, d8, d10, d12, d20 or d100'
        return errorMessage
      }
    } catch (error) {
      return 'An error occurred while rolling the die.'
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
    // TODO: call rollDie in a loop the amount of numDice times
    // example: rollDice(3, 6) -> rolls 3 six-sided dice
  }

  // TODO: add method for applying modifiers
}
