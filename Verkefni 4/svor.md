1.
```javascript

function Spaceship()
{
    this.name = "SpaceRacer";
    this.life = 10;
    this.showName = function () {
        console.log(this.name);
    };
}

let spaceship1 = new Spaceship();
let spaceship2 = new Spaceship();
let spaceship3 = new Spaceship();

spaceship1.name = "PersonalSpaceship";
spaceship1.showName();

Spaceship.prototype.fly = function () {
    this.speed++;
};
Spaceship.prototype.speed = 5;

let spaceship4 = new Spaceship();
spaceship4.damage = function () {
    this.life--;
};

```

2. Þú kallar á smiðinn.call() á objectinu sem þú ætlar að erfa sem keyrir kóðann í smiðinum á því eins og ef hann væri í þessu falli með því að breyta hvað this bendir á og þá býr það til öll property í objectinu sem þú kallar í það frá.

3. Class í javascript er í raun bara annað syntax fyrir prototype sem var gert til þess að vera líkara öðrum forritunarmálum.  Það er skilgreint með class hugtakinu.

```javascript

class Spaceship {

    constructor()
    {
        this.name = "SpaceRacer";
        this.life = 10;
        this.speed = 5;
    }

    fly()
    {
        this.speed++;
    }

    showName()
    {
        console.log(this.name);
    }

}

class PersonalSpaceship extends Spaceship {

    constructor(owner)
    {
        super();
        this.owner = owner;
    }
}

let spaceship1 = new Spaceship();
let spaceship2 = new PersonalSpaceship("Guðmundur");

spaceship1.showName();

spaceship2.showName();
console.log(spaceship2.owner);

````
