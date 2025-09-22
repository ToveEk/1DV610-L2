import { Parser } from './parser.js'

/**
 * Class representing different rules for dice rolling.
 */
export class Rules {
  parser = new Parser()

  /**
   * Rolls dice with an advantage.
   */
  rollWithAdvantage () {
    // användaren rullar flera dice t.ex 4d20 och behåller den högsta
  }

  /**
   * Rolls dice with a disadvantage.
   */
  rollWithDisadvantage () {
    // användaren rullar flera dice t.ex 4d20 och behåller den lägsta
  }

  /**
   * Handles the case of rolling a natural twenty.
   */
  naturalTwenty () {
    // om användaren rullar en natural twenty blir resultatet alltid 20 (automatiskt lyckat)
  }

  /**
   * Handles the case of rolling a natural one.
   */
  naturalOne () {
    // om användaren rullar en natural one blir resultatet alltid 1 (automatiskt misslyckat)
  }
}
