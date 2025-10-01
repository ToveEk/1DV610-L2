# Testrapport

## Summering

Modulen har testats manuellt via testApp.js. Metoden startRolling() har använts med olika typer av indata för att verifiera att tärningskast fungerar korrekt. Följande har testats:
- Olika tärningar (d4, d6, d8, d10, d12, d20, d100)
- Modifierare (+/-)
- Advantage och disadvantage
- Ogiltiga notationer och felstavningar
- Specialfall som natural 1 och natural 20

Vid varje test har resultatet observerats i konsolen och jämförts med förväntat utdata. Eventuella fel eller begränsningar har dokumenterats.

## Testtabell

| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| startRolling('2d6+1') | Rulla två sexsidiga tärningar med +1 modifierare | ✅ - Returnerade en giltig summa |
| startRolling('d4+5') | Rulla en fyrsidig tärning med +5 modifierare | ✅ - Returnerade en giltig summa |
| startRolling('3d8-2') | Rulla tre åttasidiga tärningar med -2 modifierare | ✅ - Returnerade en giltig summa |
| startRolling('d10') | Rulla en tiosidig tärning | ✅ - Returnerade en giltig summa |
| startRolling('d12') | Rulla en tolvsidig tärning | ✅ - Returnerade en giltig summa |
| startRolling('d100') | Rulla en hundrasidig tärning | ✅ - Returnerade en giltig summa |
| startRolling('2d20 with advantage') | Rulla två tjugosidiga tärningar med advantage | ✅ - Returnerade det korrekta högsta värdet |
| startRolling('3d20 with disadvantage') | Rulla tre tjugosidiga tärningar med disadvantage | ✅ - Returnerade det korrekta lägsta värdet |
| startRolling('d5') | Ogiltig tärningstyp | ✅ - Felmeddelande "Invalid die type" gavs |
| startRolling('6') | Ogiltig notation | ✅ - Felmeddelande "An error occurred while rolling the dice" gavs. (Kan vara tydligare med specifikt vad som gått fel) |
| startRolling() | Ingen indata | ✅ - Felmeddelande "An error occurred while rolling the dice" gavs. (Kan vara tydligare med specifikt vad som gått fel) |
| startRolling('2d20 with advntage') | Felstavat "advantage" | ⚠️ - Hanteras inte. Kördes som ett vanligt tärningskast |
| startRolling('2d4 with advantage') | Försökte använda advantage på d4 | ⚠️ - Felaktigt tillåtet, advantage borde inte vara giltigt för d4 |
| startRolling('d20') och slog en natural 20 | Testade om rätt specialmeddelande returneras | ⚠️ - Visade standardresultatet, inget specialmeddelande |
| startRolling('d20') och slog en natural 1 | Testade om rätt specialmeddelande returneras | ⚠️ - Visade standardresultatet, inget specialmeddelande |
| showHistory(100) | Testade vad som händer om man anger för stort nummer | ✅ - Rätt felmeddelande visades och alla tidigare tärningskast visas istället |
| showHistory(3) | Visa de 3 senaste tärningskasten | ✅ - De tre senaste kasten visades |
| showHistory() | Ingen indata | ✅ - Felmeddelande "Invalid input. Number of rolls must be a positive number." |
| showHistory(-2) | Ogiltig indata | ✅ - Felmeddelande "Invalid input. Number of rolls must be a positive number." |
| showHistory('two') | Ogiltig indata | ✅ - Felmeddelande "Invalid input. Number of rolls must be a positive number." |
| showHistory(3) | Testade utan att ha gjort några tärningskast | ⚠️ - Gav inte förväntat felmeddelande |