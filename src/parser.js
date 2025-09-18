/**
 * Class representing a dice parser.
 */
export class Parser {
  /**
   * Parses a dice notation string and returns the number of sides.
   *
   * @param {string} diceNotation - The dice notation string to parse.
   * @returns {number} - The number of sides on the die.
   */
  parseDice (diceNotation) {
    if (diceNotation.includes('d')) {
      const sides = parseInt(diceNotation.replace('d', ''))
      console.log('Number of sides:', sides)
      return sides
    } else {
      throw new Error('Invalid dice notation')
    }
  }

  // Om det står en siffra innan d också, t.ex. 2d6, hur ska det hanteras?
  // Hur ska siffran efter + eller - hanteras?
}
