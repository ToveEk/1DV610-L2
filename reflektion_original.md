## Reflektion kring kapitel 2 i Clean Code

Min uppfattning är att mycket av det som står i kapitel 2 är sådant vi fått lära oss redan under årskurs ett. Namnen på variabler, klasser, metoder osv, ska ha en mening. De ska säga någonting om vad de representerar eller gör. Redan under första terminen fick vi lära oss att inte döpa variabler till x eller y, så jag upplever att meningsfull namngivning redan sitter i ryggraden.

Att läsa kapitel 2 var dock fortfarande givande, då Martin förklarade på ett bra sätt med tydliga exempel. Han klargjorde hur viktigt meningsfull namngivning verkligen är för att man ska förstå sig på kod. 

Något jag upplever att jag kan ha gjort mig skyldig till i så väl tidigare projekt som detta, är det Martin beskriver som vilseledande namn (disinformation). Alltså exempelvis namn som är väldigt lika varandra. Ett exempel från detta projekt är variabeln "roll" och variablen "rolls", vilket kan skapa förvirring och vilseledning.

Att namn på klasser bör vara substantiv och namn på metoder bör vara verb var något Martin tog upp som fastnade hos mig. Jag insåg att det är något jag gjort vid namngivning av klasser och verb utan att tänka på det. Att få ord på vad man redan gör per automatik var intressant. Detta kan kopplas till "reglerna" **Class Names** och **Method Names**.

När jag namngav variabler, metoder och klasser försökte jag medvetet följa flera av de regler som Martin nämner. Jag tänkte på att, så gott jag kan, namnge på ett meningsfullt sätt som avslöjar syftet med exempelvis en metod. Jag tänkte på att inte använda förkortningar och att inte "skämta till det" vid namngivning. På så vis hade jag "reglerna" **Use Pronounceable Names**, **Don't Be Cute** och **Don't Pun** i åtanke under utvecklingen av denna modul.

## Reflektion kring min namngivning

| Namn | Förklaring | Regler och Reflektion |
| ---- | ---------- | --------------------- |
| startRolling | Detta är metoden i dice som startar hela tärningsrullningen. Tanken med denna metod var att den ska anropa de andra mindre metoderna. | **Use intention-revealing names**: Jag är inte helt nöjd med namnet. Det kanske är tydligt med att visa "här startar rullning av tärningar", men det avslöjar inte exakt vad metoden gör. Vilket kanske säger något om metoden och dess uppbyggnad. |
| roll | Namnet på variabeln som håller reda på värdet av den aktuella rullningen. | **Avoid disinformation**: Förvirrade mig själv med namngivningen av denna till slut. Lite för oklar, hade varit bättre med rollValue kanske. Eller om man ska vara övertydlig med långa variabelnamn (vilket Martin inte verkar ha något emot): valueOfCurrentRoll. |
| rolls | Namnet på arrayen som håller reda på rullningar för att urskilja högsta eller lägsta rullningen. | **Make meaningful distinctions**: Även här skapas förvirring, särskilt ihop med den tidigare variabeln. Det hade varit bra om jag hade namngivit de båda på ett sätt som förklarade och urskiljde dem mer. |
| parseDice | Namnet på metoden som tolkar tärningsnotationer | **Use Problem Domain Names**: Namnet på metoden är nära kopplat till det verkliga scenariot eftersom just tärningstolkning inte är något specifikt inom programmering. Det förklarar funktionaliteten i metoden, men hade kunnat specificerats ännu mer, t.ex parseDiceNotation. |
| applyRules | Namnet på metoden som applicerar regler på ett kast | **Use intention-revealing names**: Namnet på metoden antyder att den applicerar regler på ett tärningskast, vilket till viss del är sant. Men den gör flera saker så egentligen hade den kunnat brytas upp i två eller fler metoder. Namnet skulle då justeras till något annat. |

## Reflektion kring kapitel 3 i Clean Code

Jag tänkte på att bryta ner metoderna så att de blev så små som möjligt. Nästan så pass att jag själv tyckte att det blev lite väl överdrivet, men det var ändå en utmaning för uppgiften att tänka på det sättet. Det fick mig att reflektera extra mycket över att varje metod endast hade en uppgift, eller endast skulle göra en sak. Nu blev det ändå så att vissa metoder gör fler än en sak, men jag är medveten om att det är så och att jag hade kunnat bryta ner dem ytterligare (t.ex applyRules). Något jag också reflekterade över var storleken på mina if-else-satser. När jag upptäckte att en if-else-sats blev för stor såg jag det som ett varningstecken och började fundera över hur jag kunde lösa det. Det resulterade oftast i att jag bröt upp det till ännu en metod. 

Något som Martin skriver om som jag var lite mer skeptisk till var antalet argument som han menar är rimligt att ha. Att noll argument är bäst och ju fler man har desto sämre är det. På ett sätt förstår jag att det blir krångligare kod att läsa om man har fler än tre argument. Men han menar också att två argument ska användas sparsamt, men utifrån det jag är van vid att skriva känns två argument som vanligt förekommande. Oavsett vad jag tycker och tänker kring det så var det ändå något jag reflekterade över när jag skrev modulen. Vid ett tillfälle hade jag tre argument till en metod och började då fundera över om det verkligen var nödvändigt, vilket det visade sig inte vara och koden blev då lite mer lättläst.

