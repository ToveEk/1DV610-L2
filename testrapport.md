| Vad som testats | Hur det testats | Testresultat |
| --------------- | --------------- | ------------ |
| startRolling('2d6+1') | Rulla två sexsidiga tärningar med +1 modifierare | ✅ - Returnerade en giltig summa, logg korrekt. |
| startRolling('d4+5') | Rulla en fyrsidig tärning med +5 modifierare | ✅ - Returnerade en giltig summa, logg korrekt. |
| startRolling('3d8-2') | Rulla tre åttasidiga tärningar med -2 modifierare | ✅ - Returnerade en giltig summa, logg korrekt |
| startRolling('d10) | Rulla en tiosidig tärning | ✅ |
| startRolling('d12') | Rulla en tolvsidig tärning | ✅ |
| startRolling('d100') | Rulla en hundrasidig tärning | ✅ |
| startRolling('2d20 with advantage') | Rulla två tjugosidiga tärningar med advantage | ✅ - Returnerade det korrekta högsta värdet |
| startRolling('3d20 with disadvantage') | Rulla tre tjugosidiga tärningar med disadvantage | ✅ - Returnerade det korrekta lägsta värdet |
| startRolling('d5') | Ogiltig tärningstyp | ✅ - Felmeddelande "Invalid die type" gavs |
| startRolling('6') | Ogiltig notation | ✅ - Felmeddelande "An error occured while rolling the dice" gavs. (Kan vara tydligare med specifikt vad som gått fel) |
| startRolling() | Ingen indata | ✅ - Felmeddelande "An error occured while rolling the dice" gavs. (Kan vara tydligare med specifikt vad som gått fel) |
| startRolling('2d20 with advntage') | Felstavat "advantage" | ⚠️ - Hanteras inte. Kördes som ett vanligt tärningskast |
| startRolling('2d4 with advantage') | Försökte använda advantage på d4 | ⚠️ - Felaktigt tillåtet, advantage borde inte vara giltigt för d4 |
| startRolling('d20') och slog en natural 20 | Testade om rätt specialmeddelande returneras | ⚠️ - Visade standardresultatet, inget specialmeddelande |
| startRolling('d20') och slog en natural 1 | Testade om rätt specialmeddelande returneras | ⚠️ - Visade standardresultatet, inget specialmeddelande |