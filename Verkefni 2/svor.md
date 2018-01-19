# Verkefni 2 svor

1. ECMAScript er staðal specification fyrir scripting forritunarmál.  Þekktasta notkun hanns er JavaScript

2. Það þýðir að þú þarft ekki að skilgreina hvaða tegund af breytu þú ætlar að nota heldur notarðu bara var/let/const

3. Nei, ekki annar en sá að þú getur haft tvöfaldar gæsalappir inn í strengnum ef þú notar einfaldar og öfugt

4. Tegundir af breytu sem eiga að þýða hún sé ekki neitt

5. === er strangara en == þar sem breyturnar þurfa líka að vera að sömu tegund t.d. væri ("1" == 1) true en ("1" === 1) væri false

6. var breytur geta verið notaðar allstaðar í fallinu en það er bara hægt að nota let frá block, statement eða expression sem það var búið til í

```javascript
/* let */

if (true)
{
    let a = 1;
}
console.log(a); // prentar undefined

/* var */

if (true)
{
    var a = 1;
}

console.log(a); // prentar 1
```

7. 
```javascript
// declaration
function sum(a, b)
{
    return a + b;
}

// expression
var sum = function (a, b) {
    retunr a + b;
}

// arrow
var sum = (a, b) => a + b;

```

8. 'use strict' hveikir á strict mode þar sem það eru strangari reglur um hvernig kóðinn á að vera.  Í strict mode koma oftar villur og warning fyrir hluti sem eru talnir hættulegir

9. Af því að föll eru alltaf færð eins langt upp og þau komast í kóðanum

10. Neðra fallið bar er fært upp svo að það yfirskrifar hitt sem þýðir að bæði bar() og foo() skila 8 og þar afleiðandi er kallað á alert() með 8

11. Þýðandinn bætir sjálfkrafa við var fyir framan

12. Kóðinn keyrir fallið sem skrifar "Hello world". Svigarnir eru leið til þess að segja þýðandanum að þú ætlir að nota það sem er inn í því (það sem það skilar) sem fall

13. Variable scope er svæðið sem það er hægt að nota breytuna í

14. Call stack er gagnagrunnur sem geimir beinana á öllu sem á að keyra.
