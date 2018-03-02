const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
]; // Býr til constant array með nöfnum á götum

function buildGraph(edges) {  // Fall sem heitir buildGraph með parameterinn edges
  let graph = Object.create(null); // Býr til nýtt object að gerðinni null
  function addEdge(from, to) { // Fall sem heitir addEdge með parameterana from og to
    if (graph[from] == null) { // Ef array in í graph er ekki til með nafninu á götuni sem hægt er að fara á
      graph[from] = [to]; // Býr til nýtt array fyrir það og bætir hefur nafnið á fyrstu götunni sem hægt er að fara á inn í
    } else { // Annars
      graph[from].push(to); // Er nafni götunnar bætt við inn í arrayið.
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) { // Loopar í gegnum tvö element í einu úr array þar sem er búið að skipta arrayinu yfir allar leiðinnar á - til þess að fyrra elementið verði staðurinn sem farið er frá og seinna staðurinn sem hægt er að fara til
    addEdge(from, to); // Kallar á addEdge þannig að leiðinni verði bætt í graph
    addEdge(to, from); // Kallar aftur á addEdge nema fyrir öfuga leið
  }
  return graph; // Skilar graph objectinu sem búið er að búa til
}

const roadGraph = buildGraph(roads); // Býr til constant object með objectinu sem buildEdge skilar (graph)

class VillageState { // Nýr klasi sem geymir staðsetningu robotsins, staðsetningar sem hann á að fara á og method sem lætur hann fara á næsta stað
  constructor(place, parcels) { // Constructorinn í VillageState
    this.place = place; // Nýtt property af VillageState sem inniheldur streng með núverandi staðsetningu robotsins
    this.parcels = parcels; // Nýtt property af VillageState sem inniheldur streng með leiðum sem hann á að fara á
  }

  move(destination) { // Fall til þess að færa robotinn á næsta stað
    if (!roadGraph[this.place].includes(destination)) { // Ef hægt er að fara beint á staðinn
      return this; // Skilar þessu objecti
    } else { // Annars
      let parcels = this.parcels.map(p => { // Kallar á map á array yfir staði sem hann á að fara á
        if (p.place != this.place) return p; // Ef staðurinn sem hann á að fara á er ekki sami og sá sem hann er hinn er skilað sama elementi og var verið að fara yfir (elementið helst eins).
        return {place: destination, address: p.address}; // Annars er skilað objecti með staðnum sem hann á að fara á (er parameter í fallinu) og staðnum sem hann er á.
      }).filter(p => p.place != p.address); // Tekur í burtu öll element þar sem staðsetningin er sú sama á staðurinn sem hann á að fara á
      return new VillageState(destination, parcels); // Skilar nýju instance af VillageState þar sem það er búið að uppfæra staðsetningu og staði sem á að fara á
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
); // Býr til nýtt instance af VillageState þar sem staðsetning robotsins er "Post office" og Leiðin sem hann á að fara er frá "Post office" til "Alice's House"
let next = first.move("Alice's House"); // Færir hann til "Alice's House" og setur instanceið að VillageState sem það skilar í 'next'

console.log(next.place); // Skrifar út staðsetninguna eftir að búið er að kalla á move()
// → Alice's House
console.log(next.parcels); // Skrifar út staðina sem á eftir að fara á
// → []
console.log(first.place); // Skrifar út staðsetninguna áður en kallað var á move()
// → Post Office

let object = Object.freeze({value: 5}); // Býr til object sem er með value sem 5 og er frosið (þannig að það er ekki hægt að breyta því)
object.value = 10; // Reynir að breyta value í 10
console.log(object.value); // Prentar út value sem er ennþá 5 af því að það er ekki hægt að breyta því
// → 5

function runRobot(state, robot, memory) { // Fall til þess að keyra robotinn
  for (let turn = 0;; turn++) { // For loopa þar sem turn hækkar 'turn' endalaus þar til break er notað
    if (state.parcels.length == 0) { // Ef robotinn er kominn á afangastað (engin staður inn í 'pacels')
      console.log(`Done in ${turn} turns`); // Prentar á milli hversu margra staða hann þurfti að fara til að komast þangað
      break; // Fer út úr for loopunni
    }
    let action = robot(state, memory); // Keryir fallið sem var sett fyrir robot í paramaterunum (t.d. randomRobot) 
    state = state.move(action.direction); // Keyrir move í state sem er instance af StateVillage og setur state sem instanc af village sem move() skilar
    memory = action.memory; // Breytir memory í það sem það var í robotinum (action)
    console.log(`Moved to ${action.direction}`); // Prentar út hvaða stað hann er búinn að fara á
  }
}

function randomPick(array) { // Fall sem skilar random element úr array
  let choice = Math.floor(Math.random() * array.length);  // Býr til variable 'choice' á milli 0 og lengd á array
  return array[choice]; // Skilar elementi úr arrayinu eftir random tölunni
}

function randomRobot(state) { // Skilar random robot (sem er bara object með random stað sem hann á að fara á)
  return {direction: randomPick(roadGraph[state.place])}; // Skilar objectinu
}


VillageState.random = function(parcelCount = 5) { // Bætir við fallinu random í VillageState
  let parcels = []; // Býr til nýtt array 'parcels'
  for (let i = 0; i < parcelCount; i++) { // Loopar í gegnum allar tölur frá 0 til 5
    let address = randomPick(Object.keys(roadGraph)); // Velur random nafn á stað (keys í roadGrap)
    let place; // Býr til nýtt variable 'place'
    do {
      place = randomPick(Object.keys(roadGraph)); // Setur 'place' í random stað (úr roadGraph)
    } while (place == address); // Á meðan 'place' og 'address' eru það sama (til þess að það verði ekki það sama)
    parcels.push({place, address}); // Bætir við objecti með 'place' og 'address' inn í 'parcels' arrayið
  }
  return new VillageState("Post Office", parcels); // Skilar nýju instance af VillageState með núverandi staðsetningu sem "Post Office" og staðsetningar sem hann á að fara á sem 'parcels' arrayið.
};


runRobot(VillageState.random(), randomRobot); // Kallar á runRobot með á random staðsetningu með random robot
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns


const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]; // Býr til constant array fyrir lið til þess að robotinn fara í gegnum allan bæinn


function routeRobot(state, memory) { // Fall sem skilar robot sem fer í gegnum allan bæinn
  if (memory.length == 0) { // Ef memory er tómt
    memory = mailRoute; // Er memory sett í mailRoute (leiðinn í gegnum bæinn)
  }
  return {direction: memory[0], memory: memory.slice(1)}; // Skilar leiðinni í sama formi og hinn hluti forritsins notar hana
}

runRobot(VillageState.random(), routeRobot, []); // Kallar á runRobot með nýja robotinum sem fer í gegnum allan bæinn

function findRoute(graph, from, to) { // Finnur leið frá 'from' til 'to'
  let work = [{at: from, route: []}]; // Býr til nýtt object till þess að geyma leiðirnar í
  for (let i = 0; i < work.length; i++) { // Loopar í gegnum work' (leiðirnar)
    let {at, route} = work[i]; // Býr til 'at' og 'route' variable eftir 'at' og 'route' í 'work' objectinu
    for (let place of graph[at]) { // Loopar í gegnum 'graph' arrayið til
      if (place == to) return route.concat(place); // Ef staðsetningin sem er verið að reyna að finna leiðina til er sú sama og 'place' í graph er skilað 'route' arrayinu með öllum elementum úr 'place' bætt við
      if (!work.some(w => w.at == place)) { // Checkar hvort 'at' í arrayinu ('work') sé einhverstaðar það sama og 'place' sem er fengið úr graph
        work.push({at: place, route: route.concat(place)}); // Bætir við nýrri leið í 'work'
      }
    }
  }
}


function goalOrientedRobot({place, parcels}, route) { // Fall fyrir klárari robot sem finnur leið í gegnum allan bæinn
  if (route.length == 0) { // Checkar hvort route sé ekki örugglega tómt
    let parcel = parcels[0]; // Býr til nýtt variable út frá fyrsta elementinu í 'parcels' paramternum
    if (parcel.place != place) { // Ef staðsetning sem var sett sem parameter er ekki sú sama og er í 'parcel' objectinu (fyrsta elementi í 'parcels')
      route = findRoute(roadGraph, place, parcel.place); // Finnur leiðina frá 'place' til 'place' í 'parcel' og setur hana í route variableið
    } else { // Annars
      route = findRoute(roadGraph, place, parcel.address); // Finnur leiðina frá 'place' til 'address' í 'parcel' í staðinn
    }
  }
  return {direction: route[0], memory: route.slice(1)}; // Skilar objecti með leiðinni sem fyrsta elementinu úr 'route' og 'memoryð sem öllu í route nema fyrsta elementinu
}

runRobot(VillageState.random(), goalOrientedRobot, []); // Prófar að keyra robot með nýja hlutanum þar sem hann finnur leiðina sjálfur