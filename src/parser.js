// Parses dice notation strings
// Example: "3d6+2" = 3 dice with 6 sides, plus 2

/**
 * Class representing a dice parser.
 */
export class Parser {
  /**
   * Parses a dice notation string (e.g., "3d6+2") and extracts its components.
   *
   * @param {string} diceNotation - The dice notation string to parse.
   * @returns {number} - The number of sides on the die.
   */
  parseDice (diceNotation) {
    if (diceNotation.includes('d')) {
      const sides = parseInt(diceNotation.replace('d', ''))
      return sides
    } else {
      throw new Error('Invalid dice notation')
    }
  }
}
