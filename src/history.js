/**
 * Class representing the history of previous rolls.
 */
export class History {
  previousRolls = []

  /**
   * Adds a roll to the history.
   *
   * @param {number} roll - The roll value to add.
   */
  addRollToHistory (roll) {
    this.previousRolls.push(roll)
    console.log(`Added roll ${roll} to history.`)
  }

  /**
   * Retrieves the previous rolls up to the specified number.
   *
   * @param {number} numberOfRolls - The number of previous rolls to retrieve.
   * @returns {string} - A string listing the previous rolls.
   */
  getPreviousRolls (numberOfRolls) {
    this.previousRolls = this.previousRolls.slice(-numberOfRolls)

    const previousRolls = `The last ${numberOfRolls} rolls were: ${this.previousRolls.join(', ')}`

    console.log(previousRolls)
    return previousRolls
  }
}
