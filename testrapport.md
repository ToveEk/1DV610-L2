| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| rollDie()       | Genom att importera klassen till testApp.js och sedan anropa metoden med olika typer av nummer som representerar antalet sidor på en tärning. Detta för att se att slumpningen fungerar. | ✅ |
| rollDie() - med string notation | Som ovan. | ✅ För rätt typ av notation och invalid dice type. ❌ Ger inte felmeddelandet som jag tänkt när användaren anger en integer istället för en string. |
| parseDice()     | Genom att importera Parser-klassen till dice.js och anropa parseDice() i rollDie(). Också genom att ange en string istället för integer i testApp.js. | ✅ |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |
|                 |                 |              |