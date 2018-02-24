# Verkefni 7 sv�r

1. Callback er k��i sem er � einhverju formi sett sem parameter � fall til �ess a� �a� ver�i s��an kalla� � hann aftur.  T.d �egar �� ert a� senda http request � server getur �� sett fall sem parameter sem er s��an kalla� � �egar �a� b�i�.

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

2. Event loop er loopa sem checkar hvort eitthva� hafi gerst og kallar � event eftir �v�.

3. 

```javascript
function checkUsername(e) {
var target = e.target;
}
var el = document.getElementById('username');
el.addEventListener('blur', checkUsername, false);
```

4. �a� ���ir a� useCapture er false �annig a� �a� � bubbling phase � sta�in fyrir capture phase sem l�tur �a� event vera kalla� � � undan.

5. 
    stopPropagation kemur � veg fyrir a� �a� ver�i kalla� � event handlerana sem koma � eftir.
    preventDefault kemur � veg fyrir a� �a� ver�i kalla� � default event handlerinn.
    