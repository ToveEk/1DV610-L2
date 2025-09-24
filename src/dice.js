/**
 * Class representing a dice roller.
 *
 * @file dice.js
 * @description Simulates rolling various types of dice.
 * @author Tove Ek
 * @version 1.0.0
 */

import { Parser } from './parser.js'
import { Rules } from './rules.js'

/**
 *
 */
export class Dice {
  diceArray = [4, 6, 8, 10, 12, 20, 100]
  roll = 0
  parser = new Parser()

  /**
   * Rolls dice based on the provided dice notation string and returns the result message.
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d6").
   * @returns {string} - The result message or error message.
   */
  startRolling (diceNotation) {
    try {
      const parsedDice = this.parser.parseDice(diceNotation)

      console.log('The parsed dice in startRolling:', parsedDice)

      if (this.diceArray.includes(parsedDice.sides) && parsedDice.advantage === false && parsedDice.disadvantage === false) {
        this.singleOrMultiple(parsedDice)
      } else if (this.diceArray.includes(parsedDice.sides) && (parsedDice.advantage === true || parsedDice.disadvantage === true)) {
        const resultOfRollingWithRules = this.applyRules(this.roll, parsedDice)
        return resultOfRollingWithRules
      }

      if (diceNotation.includes('+') || diceNotation.includes('-')) {
        console.log('Roll before modifier: ', this.roll)
        this.addModifier(this.roll, parsedDice)
      }

      const result = this.showResult(this.roll, parsedDice)
      return result
    } catch (error) {
      console.error(error)
      return 'An error occurred while rolling the dice.'
    }
  }

  /**
   * Parses the dice notation string into its components.
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d6+1").
   * @returns {object} - The parsed dice information.
   */
  parseDice (diceNotation) {
    const parsedDice = this.parser.parseDice(diceNotation)
    console.log('The parsed dice:', parsedDice)
    return parsedDice
  }

  /**
   * Determines whether to roll a single die or multiple dice based on the number of dice.
   *
   * @param {object} parsedDice - The parsed dice information.
   */
  singleOrMultiple (parsedDice) {
    if (parsedDice.numberOfDice > 1) {
      this.rollMultipleDice(parsedDice)
    } else {
      this.rollSingleDie(parsedDice)
    }
  }

  /**
   * Rolls a single die.
   *
   * @param {object} parsedDice - The parsed dice information.
   */
  rollSingleDie (parsedDice) {
    this.roll = Math.floor(Math.random() * parsedDice.sides) + 1

    console.log('Single die roll:', this.roll)
  }

  /**
   * Rolls multiple dice and sums their results.
   *
   * @param {object} parsedDice - The parsed dice information.
   */
  rollMultipleDice (parsedDice) {
    for (let i = 0; i < parsedDice.numberOfDice; i++) {
      this.roll += Math.floor(Math.random() * parsedDice.sides) + 1
    }

    console.log('Multiple dice roll total:', this.roll)
  }

  /**
   * Adds a modifier to the roll if applicable.
   *
   * @param {number} roll - The current roll value.
   * @param {object} parsedDice - The parsed dice information.
   * @returns {number} - The roll value after adding the modifier.
   */
  addModifier (roll, parsedDice) {
    roll += parsedDice.modifier

    console.log('Roll after modifier:', roll)
    return roll
  }

  /**
   * Applies game rules to the dice roll.
   *
   * @param {number} roll - The result of the dice roll.
   * @param {object} parsedDice - The parsed dice information.
   * @returns {string} - The result message after applying rules.
   */
  applyRules (roll, parsedDice) {
    const rules = new Rules()

    console.log('The dice object in applyRules:', parsedDice)

    if (parsedDice.sides === 20 && roll === 20) {
      rules.naturalTwenty()
    } else if (parsedDice.sides === 20 && roll === 1) {
      rules.naturalOne()
    }

    if (parsedDice.disadvantage === true) {
      const resultMessage = rules.rollWithDisadvantage(parsedDice)
      return resultMessage
    } else if (parsedDice.advantage === true) {
      const resultMessage = rules.rollWithAdvantage(parsedDice)
      return resultMessage
    } else {
      return this.showResult(roll, parsedDice)
    }
  }

  /**
   * Displays the result of the dice roll.
   *
   * @param {number} roll - The result of the dice roll.
   * @param {object} parsedDice - The parsed dice information.
   * @returns {string} - The result message.
   */
  showResult (roll, parsedDice) {
    const result = `You rolled a ${roll} with ${parsedDice.numberOfDice} d${parsedDice.sides}`
    return result
  }
}
