const cats=["Milo", "Otis", "Garfield"];

beforeEach (function(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
})

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Ralph){
    cats.pop(Ralph)
}

function destructivelyRemoveFirstCat(Bob){
    cats.shift(Bob);
}

function appendCat(Broom){
    return[...cats, Broom];
}

function prependCat(Arnold){
    return[Arnold, ...cats]
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}