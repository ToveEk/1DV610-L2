/**
 * Class representing a dice roller.
 *
 * @file dice.js
 * @description Simulates rolling various types of dice.
 * @author Tove Ek
 * @version 1.0.0
 */

import { Parser } from './parser.js'

/**
 *
 */
export class Dice {
  diceArray = [4, 6, 8, 10, 12, 20, 100]
  parser = new Parser()

  /**
   * Rolls a single die with the specified number of sides and returns the result message.
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d6").
   * @returns {string} - The result message or error message.
   */
  rollDie (diceNotation) {
    try {
      const parsedDice = this.parser.parseDice(diceNotation)

      console.log('The parsed dice:', parsedDice)

      if (parsedDice.numberOfDice > 1) {
        return this.rollDice(diceNotation)
      }

      if (this.diceArray.includes(parsedDice.sides)) {
        const roll = Math.floor(Math.random() * parsedDice) + 1
        const result = `You rolled a ${roll} with a d${parsedDice}`
        return result
      } else {
        const errorMessage = 'Type of dice not valid. Please choose one of the following:\nd4, d6, d8, d10, d12, d20 or d100'
        return errorMessage
      }
    } catch (error) {
      return 'An error occurred while rolling the die.'
    }
  }

  /**
   * Rolls multiple dice with the specified number of sides.
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d6").
   * @returns {string} - The result message or error message.
   */
  rollDice (diceNotation) {
    try {
      const parsedDice = this.parser.parseDice(diceNotation)

      let roll = 0

      if (this.diceArray.includes(parsedDice.sides)) {
        for (let i = 0; i < parsedDice.numberOfDice; i++) {
          roll += Math.floor(Math.random() * parsedDice.sides) + 1
        }
        const result = `You rolled a ${roll} with ${parsedDice.numberOfDice} d${parsedDice.sides}`
        return result
      } else {
        const errorMessage = 'Type of dice not valid. Please choose one of the following:\nd4, d6, d8, d10, d12, d20 or d100'
        return errorMessage
      }
    } catch (error) {
      return 'An error occurred while rolling the dice.'
    }
  }

  // TODO: add method for applying modifiers

  // En metod för att enbart anropa parseDice?

  // En metod för att avgöra om en eller flera tärningar ska rullas? Därefter anropa lämplig metod?

  // En metod för att avgöra om regler ska tillämpas?

  // En metod för att avgöra om modifieringar ska tillämpas?

  // Dice rolls behöver lagras någonstans... hm
}
