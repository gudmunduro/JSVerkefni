
1. Template literals eru strengur sem geta haft expression inn í sér og geta verið margar línur.

```javascript

// Með venjulegum streng

let str1 = "b"
let str2 = "a" + b + "c"

let multiline = "a \n" + 
"b"


// Með template literals

let str1 = "b"
let str2 = `a${str1}c`

let multiline = `a \n 
b`

// Það er líka hægt að gera fleira eins og

function a(str)
{
    console.log('a'+str);
}

a`b`

```

2. For lykkjan er bara eins og hefðbundin c for lykkja þar sem þú gerir (býrð til variable; kóði sem skilar true þegar for lykkjan á að stoppa; kóði sem keyrir í hvert sinn til þess að breyta tölunni).  For in er til þess að fara í gegnum lyklanna á objecti.  ForEach er method í array til þess að fara í gegnum það og keyra fall fyrir hvert og eitt.  For of er ný for lykkja sem kemur í staðin fyrir For in og ForEach og getur farið i gegnum flestar gerðir af gagnasöfnum eins og array, string, typedarray og map.

3. 

⋅⋅1. Use the MDN Documentation to determine which of these methods would be best for reversing elements in this array:
    reverse()

⋅⋅2. What would be the best array method to sort the elements in this array:
    sort()

⋅⋅3. Let's say that you want to modify (i.e., mutate) removeFirstElement by removing the first element within it. Which method(s) could you use?
    slice()

⋅⋅4. What method would be best for changing this array into a string?
    join()

4. 

```javascript
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

test.forEach(function (element) {
    if (element % 3 === 0)
    {
        test[test.indexOf(element)] += 100
    }
})
```

5. Map býr til nýtt array með því að kalla á fall fyrir hvert element í array

```javascript

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(i => Number((i * 1.15).toFixed(2)))

console.log(totals)

```

6. 

```javascript
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here

for (var i = 0; i < numbers.length; i++)
{
    for (var i2 = 0; i2 < numbers[i].length; i2++)
    {
        if (numbers[i][i2] % 2 === 0)
        {
            numbers[i][i2] = "even";
        }
        else
        {
            numbers[i][i2] = "odd";
        }
    }
}
```

7. 

```javascript

var breakfast = {name: "The Lumberjack", price: "$9.95", 
    ingredients: [
        "eggs",
        "sausage",
        "toast",
        "hashbrowns",
        "pancakes"
    ]}

```

8. 

```javascript

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function () {
        return "Welcome! \n" +
        "Your balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());

```

9. 

```javascript

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function (donut) {
    console.log(donut.type + " donuts cost $" + donut.cost + " each");
})

```


10. 

```javascript

function Pizza(price, size, topping)
{
    return {price: price, size: size, topping: topping};
}

let pizza1 = new Pizza("1000kr", 16, "pepperoni");
let pizza2 = new Pizza("1100kr", 12, "ananas");

```
