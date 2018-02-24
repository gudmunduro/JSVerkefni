# Verkefni 7 svör

1. Callback er kóði sem er í einhverju formi sett sem parameter í fall til þess að það verði síðan kallað á hann aftur.  T.d þegar þú ert að senda http request á server getur þú sett fall sem parameter sem er síðan kallað á þegar það búið.

```javascript

function jsonRq(url, callback)
{
    var rq = new XMLHttpRequest();
    rq.open("POST", url, true);
    rq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    rq.onload = function () {
        let data = JSON.parse(rq.responseText);
        callback(data);
    }
    rq.send();
}

jsonRq("/api/user/info", function (user) {
    console.log(user.name);
});


```

2. Event loop er loopa sem checkar hvort eitthvað hafi gerst og kallar á event eftir því.

3. 

```javascript
function checkUsername(e) {
var target = e.target;
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
```

4. Það þýðir að useCapture er false þannig að það í bubbling phase í staðin fyrir capture phase sem lætur það event vera kallað á á undan.

5. 
    stopPropagation kemur í veg fyrir að það verði kallað á event handlerana sem koma á eftir.
    preventDefault kemur í veg fyrir að það verði kallað á default event handlerinn.
    
6. https://files.gudmunduro.com/JSVerk/7/