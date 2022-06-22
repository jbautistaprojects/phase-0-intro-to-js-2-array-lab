const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return(cats);
}
destructivelyAppendCat("Judy");

function destructivelyPrependCat(name){
    cats.unshift(name);
    return(cats);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(){
      cats.pop();
      return(cats);
  }
  destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
    return(cats);
}
destructivelyRemoveFirstCat();

function appendCat(name){
    const copyOfCats = [...cats, name];
    return(copyOfCats);
}
appendCat("Broom");

function prependCat(name){
    const copyOfCats = [name, ...cats];
    return(copyOfCats);
}
prependCat("Broom");

function removeLastCat(){
    const copyOfCats = cats.slice(0,cats.length-1);
    return(copyOfCats);
}
removeLastCat();

function removeFirstCat(){
    const copyOfCats = cats.slice(1);
    return(copyOfCats);
}
removeFirstCat();