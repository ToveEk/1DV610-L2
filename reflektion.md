# Reflektioner

## Reflektion kring kapitel 2 i Clean Code

Min uppfattning är att mycket av innehållet i kapitel 2 är sådant vi fått lära oss redan under årskurs ett. Variabler, klasser och metoder bör ha meningsfulla namn som tydligt beskriver deras syfte. Redan under första terminen fick vi lära oss att undvika generiska namn som x eller y. Jag upplever därför att meningsfull namngivning redan sitter i ryggraden.

Trots detta var kapitlet fortfarande givande att läsa, eftersom Martin förklarar på ett bra sätt med tydliga exempel. Han klargjorde hur viktigt meningsfull namngivning verkligen är för kodens läsbarhet och förståelse. 

Något jag upplever att jag kan ha gjort mig skyldig till i så väl tidigare projekt som detta, är det Martin beskriver som vilseledande namn. Ett exempel från detta projekt är variablerna "roll" och "rolls", där likheten mellan dem kan leda till förvirring och missförstånd.

Att namn på klasser bör vara substantiv och namn på metoder bör vara verb var något Martin tog upp som fastnade hos mig. Jag insåg att det är något jag gjort vid namngivning av klasser och metoder utan att tänka på det. Att han sätter ord på något jag redan gör per automatik var intressant. Detta kan kopplas till "reglerna" **Class Names** och **Method Names**.

När jag namngav variabler, metoder och klasser försökte jag medvetet följa flera av de regler som Martin nämner. Jag tänkte på att, så gott jag kan, namnge på ett meningsfullt sätt som avslöjar syftet med exempelvis en metod. Jag tänkte på att inte använda förkortningar och att inte "skämta till det" vid namngivning. På så vis hade jag "reglerna" **Use Pronounceable Names**, **Don't Be Cute** och **Don't Pun** i åtanke under utvecklingen av denna modul.

## Reflektion kring min namngivning

| Namn | Förklaring | Regler och Reflektion |
| ---- | ---------- | --------------------- |
| startRolling | Metod som startar hela tärningsrullningen. | **Use intention-revealing names**: Namnet indikerar att det är här rullningen startar. Men det beskriver inte de specifika steg som sker i metoden, såsom parsing, modifiering, specialregler och resultatvisning. |
| roll | Variabel som håller reda på värdet av den aktuella rullningen. | **Avoid disinformation**: Namnet är för generellt och riskerar att skapa förvirring, särskilt i kombination med rolls. Ett tydligare namn hade kunnat vara currentRollValue. |
| rolls | Array som lagrar enskilda tärningskast. | **Make meaningful distinctions**: Namnet skiljer sig väldigt lite från roll, vilket kan vara missledande. Ett tydligare namn hade kunnat vara individualRolls, vilket hade urskiljt variablerna mer. |
| parseDice | Metod som tolkar tärningsnotationer. | **Use Problem Domain Names**: Namnet på metoden är nära kopplat till det verkliga scenariot eftersom just tärningstolkning inte är något specifikt inom programmering. Det förklarar funktionaliteten i metoden, men hade kunnat specificerats ännu mer, t.ex parseDiceNotation. |
| applyRules | Metod som applicerar spelregler på ett kast. | **Use intention-revealing names**: Namnet på metoden antyder att den applicerar regler på ett tärningskast, vilket till viss del är sant. Men den gör flera saker så egentligen hade den kunnat brytas upp i två eller fler metoder. Namnet skulle då justeras till något annat. |

## Reflektion kring kapitel 3 i Clean Code



## Reflektion kring mina metoder

| Metodnamn | Länk | Antal rader | Reflektion |
| --------- | ---- | ----------- | ---------- |
| startRolling | [dice.js](/src/dice.js) | 23 |            |
| applyRules | [dice.js](/src/dice.js) | 19 |            |
| parseDice | [parser.js](/src/parser.js) | 19 |            |
| rollWithAdvantage | [rules.js](/src/rules.js) | 14 |            |
| rollWithDisadvantage | [rules.js](/src/rules.js) | 14 |            |

## Reflektion kring min egen kodkvalité