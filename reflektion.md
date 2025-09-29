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

Under arbetet med modulen försökte jag medvetet bryta ner metoderna så mycket som möjligt, så att varje metod skulle ha ett tydligt och avgränsat ansvar. I vissa fall kändes det nästan överdrivet, men det blev en värdefull övning i att tänka på ett nytt sätt. Det fick mig att verkligen reflektera över principen att en metod endast ska göra en sak. Dock märkte jag att vissa av mina metoder fortfarande gör flera saker (t.ex. applyRules), men jag är medveten om det och ser hur de eventuellt hade kunnat brytas ner ytterligare.

Jag reflekterade också mycket över storleken på mina if-else-satser. När en sats började bli för omfattande såg jag det som en varningssignal. Det blev ett sätt att identifiera när det var dags att skapa en ny metod istället för att lägga till fler villkor. Den tankegången hjälpte mig att hålla koden mer strukturerad och lättare att följa.

En del i kapitlet som väckte mer eftertanke var Martins resonemang om antalet argument i metoder. Han menar att det bästa är om en metod inte har några argument alls, och att fler än två bör användas sparsamt. Jag förstår tanken att många argument kan göra metoden svårare att läsa och förstå, men samtidigt upplever jag att två argument ofta känns naturligt i praktiken. Även om jag inte är helt säker på om jag håller med Martin, fick han mig att börja tänka mer kritiskt kring mina egna metoder. Vid ett tillfälle hade jag tre argument, vilket fick mig att stanna upp för att fundera över om alla verkligen behövdes. Det visade sig att jag faktiskt bara behövde ett, och när jag tog bort två av dem märkte jag direkt att koden både blev enklare och mer lättläst.

## Reflektion kring mina metoder

| Metodnamn | Länk | Antal rader | Reflektion |
| --------- | ---- | ----------- | ---------- |
| startRolling | [dice.js](/src/dice.js) | 23 | Min längsta metod. Den ansvarar för att starta tärningsrullningen och anropar metoderna som står för parsing, modifiering, specialregler och visning av resultat. Metoden gör därmed flera saker och skulle kunna brytas ner till flera mindre metoder, men jag är inte helt säker på hur det skulle göras bäst |
| applyRules | [dice.js](/src/dice.js) | 19 | Denna metod gör fler än en sak. Den applicerar regler för advantage och disadvantage. Den hanterar också fall som natural 20 och natural 1. Metoden hade behövt delas upp i mindre metoder utifrån dess olika ansvarsområden |
| parseDice | [parser.js](/src/parser.js) | 19 | Denna metod anropar resterande metoder i parser-klassen, sparar resultaten i variabler och skapar ett tärningsobjekt utifrån dem. Den hade eventuellt kunnat brytas upp för att även skapa en createDiceObject-metod |
| rollWithAdvantage | [rules.js](/src/rules.js) | 14 | Denna metod rullar tärningar, sparar varje enskilt kast i en array och tar fram högsta värdet. Den gör det den ska, men logiken är mycket lik den i rollWithDisadvantage |
| rollWithDisadvantage | [rules.js](/src/rules.js) | 14 | Denna metod fungerar på samma sätt som rollWithAdvantage. Det som skiljer dem åt är att denna tar fram det lägsta värdet. Detta leder till upprepning och koden bryter därmed mot DRY. En bättre lösning hade kunnat vara att ha en gemensam metod för själva tärningsrullningen och sedan en separat metod för att avgöra om högsta eller lägsta värdet ska användas beroende på vilken regel som valts |

## Reflektion kring min egen kodkvalité

Jag upplever att Clean Code verkligen har fått mig att reflektera över min egen kodkvalité, men också kurskamraters kod och variabelnamn i den parallella kursen. För mig finns det absolut förbättringspotential i flera områden, särskilt när det gäller Single Responsibility-principen och att varje metod verkligen bara gör en sak.

Tidigare har jag mest tänkt på att en examinator ska läsa min kod, men denna uppgift har fått mig att börja tänka på att andra utvecklare ska läsa min kod. Det får mig att reflektera mer över bland annat readability och meaningful names. Under uppgiftens gång har jag funderat över hur jag bäst kan namnge metoder och variabler för att spegla vad de faktiskt gör, samt undvikit förkortningar och otydliga begrepp.

Under arbetet med modulen har jag också reflekterat mycket över principen Don't Repeat Yourself (DRY). Det är en princip vi lärt oss redan under första kursen på utbildningen, men som ändå är något jag fortfarande aktivt behöver tänka på när jag skriver kod. Under arbetet märkte jag att jag skrev liknande kod i flera metoder, till exempel i hanteringen av tärningsrullningar (rollWithAdvantage och rollWithDisadvantage). Denna princip får mig att fundera över hur jag kan skriva mer återanvändbar kod och den gör mig mer medveten kring hur jag strukturerar min kod.

Jag har även märkt att jag lätt fastnar i att vilja förbättra koden ytterligare, eftersom jag ständigt upptäcker nya saker som hade kunnat bli bättre. Det kan göra att jag har svårt att känna mig helt nöjd. Jag försöker dock se det som något positivt eftersom det visar att jag börjat tänka mer kritiskt och reflekterande kring hur jag skriver kod. Utmaningen för mig framöver blir att hitta en så ren kod som möjligt, samtidigt som jag håller mig inom rimliga tidsramar.