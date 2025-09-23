import { Parser } from './parser.js'

/**
 * Class representing different rules for dice rolling.
 */
export class Rules {
  parser = new Parser()

  /**
   * Rolls dice with an advantage (e.g., 2d20 and keep the highest).
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d20").
   * @param {number} roll - The initial roll value.
   * @returns {number} - The highest roll when rolling with advantage.
   */
  rollWithAdvantage(diceNotation, roll) {
    const rolls = []

    const parsedDice = this.parser.parseDice(diceNotation)

    for (let i = 0; i < parsedDice.numberOfDice; i++) {
      const singleRoll = Math.floor(Math.random() * parsedDice.sides) + 1
      rolls.push(singleRoll)
    }

    const highestRoll = Math.max(...rolls)
    console.log('Rolls with advantage:', rolls)
    console.log('Highest roll with advantage:', highestRoll)

    roll = highestRoll

    return highestRoll
  }

  /**
   * Rolls dice with a disadvantage (e.g., 2d20 and keep the lowest).
   *
   * @param {string} diceNotation - The dice notation string (e.g., "2d20").
   * @param {number} roll - The initial roll value.
   * @returns {number} - The lowest roll when rolling with disadvantage.
   */
  rollWithDisadvantage(diceNotation, roll) {
    const rolls = []

    const parsedDice = this.parser.parseDice(diceNotation)

    for (let i = 0; i < parsedDice.numberOfDice; i++) {
      const singleRoll = Math.floor(Math.random() * parsedDice.sides) + 1
      rolls.push(singleRoll)
    }

    const lowestRoll = Math.min(...rolls)
    console.log('Rolls with disadvantage:', rolls)
    console.log('Lowest roll with disadvantage:', lowestRoll)

    roll = lowestRoll
    return lowestRoll
  }

  /**
   * Handles the case of rolling a natural twenty.
   *
   * @returns {string} - Message indicating a natural 20 was rolled.
   */
  naturalTwenty() {
    const natTwentyMessage = 'You rolled a natural 20! Critical success!'
    return natTwentyMessage
  }

  /**
   * Handles the case of rolling a natural one.
   *
   * @returns {string} - Message indicating a natural 1 was rolled.
   */
  naturalOne() {
    const natOneMessage = 'You rolled a natural 1! Critical failure!'
    return natOneMessage
  }
}
