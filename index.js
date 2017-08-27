const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.append(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.prepend(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.unshift();
  return kittens;
}

function appendKitten(name){
  var cats = [...kittens, name];
  return cats;
}

function prependKitten(name){
  var cats = [name, ...kittens];
  return cats;
}

function removeLastKitten(){
  return cats.slice(0,cats.length-1);
}

function removeFirstKitten(){
  return cats.slice(1);
}
