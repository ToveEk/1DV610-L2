| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| startRolling()       | Genom att importera klassen till testApp.js och sedan anropa metoden med olika typer av nummer som representerar antalet sidor på en tärning. Detta för att se att slumpningen fungerar. | ✅ |
| removeDNotation() | Anropas i parseDice(). Console loggar antalet sidor på tärningen (aka siffran efter "d"). | ✅ |
| checkNumberOfDice() | Anropas i parseDice(). Console loggar antalet tärningar som rullas (aka siffran innan "d"). | ✅ |
| parseModifier() | Anropas i parseDice(). Console loggar modifiern (aka siffran efter + eller -). | ✅ |
| rollWithAdvantage() | Samma.      | ✅ |
| rollWithDisadvantage() | Samma.   | ✅ |
| checkIfAdvantage() | Sker under parsing. | ✅ Fungerar, dock inte optimalt att använda includes('advantage') |
| checkIfDisadvantage() | Samma. | ✅ Fungerar, dock inte optimalt att använda includes('disadvantage') |
|                 |                 |              |
|                 |                 |              |