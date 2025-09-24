| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| rollDie()       | Genom att importera klassen till testApp.js och sedan anropa metoden med olika typer av nummer som representerar antalet sidor på en tärning. Detta för att se att slumpningen fungerar. | ✅ |
| rollDie() - med string notation | Som ovan. | ✅ För rätt typ av notation, fel typ av notation och invalid dice type. |
| parseDice()     | Genom att importera Parser-klassen till dice.js och anropa parseDice() i rollDie(). Också genom att ange en string istället för integer i testApp.js. | ✅ |
| roll()          | Tog bort rollDie() och rollDice() och slog ihop till en metod för att inte bryta mot DRY. Testas på samma sätt som rollDie() gjorde. | ✅ |
| removeDNotation() | Anropas i parseDice(). Console loggar antalet sidor på tärningen (aka siffran efter "d"). | ✅ |
| checkNumberOfDice() | Anropas i parseDice(). Console loggar antalet tärningar som rullas (aka siffran innan "d"). | ✅ |
| parseModifier() | Anropas i parseDice(). Console loggar modifiern (aka siffran efter + eller -). | ⚠️ + fungerar men inte - |
| rollWithAdvantage() | Samma.      | ✅ |
| rollWithDisadvantage() | Samma.   | ✅ |
| checkIfAdvantage() | Sker under parsing. | ✅ Fungerar, dock inte optimalt att använda includes('advantage') |
| checkIfDisadvantage() | Samma. | ✅ Fungerar, dock inte optimalt att använda includes('disadvantage') |
|                 |                 |              |
|                 |                 |              |