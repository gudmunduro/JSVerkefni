# Verkefni 5

1. Af því að það getur bara verið eitt id þannig að það þarf bara að leita þangað til það finnur það í staðinn fyrir að fara í gegnum allt.

2. Skilar lista af elementum eftir selector svipað og þú gerir í css
```javascript

for (var title of document.querySelectorAll("h1.title"))
{
    title.style.color = "red";
}

```

3. Nodelist er listi af nodes sem er í raun bara object fyrir html element.  Í kóðanum byrjar það á því að fá öll node sem eru með tagið li.  Síðan skoðar það hvort það sé meira en 0 node í listanum.  Ef það er meira en 0 býr það til variable sem vísar á annað nodeið í listanum.  Eftir það setur það klasann a því elementi í 'cool'.

4. getElementByTagName skilar öllum elementum eftir taginu á þeim.  T.d. skilar 'document.getElementByTagName('h1')' öllum h1 elementum.
```javascript

let headers = document.getElementByTagName('h1');

for (var header in headers)
{
    header.innerHTML = "-- " + header.innerHTML + " --";
}


```

5.  Þegar þú gerir venjulega línu í html eins og svona:

```html
<div>
<button></button>
</div>


```

kemur alltaf whitespace á stöðunum sem þú gerir nýja lína sem getur gert það erfitt að vinna með.  Önnur lausnin við því er að búa til functions í javascript sem checka hvort það sé whitespace eða ekki.  Hin er að gera htmlið svona:

```html

<div
><button></button
></div>

```

og þá kemur ekkert whitespace á milli lina.

6. [Quiz (virkar bara í blink og webkit browserum)](https://vsh.gudmunduro.com/JSVerk5/)
