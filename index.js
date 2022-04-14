function sayHello() {
  return "Hello";
}
function receivesAFunction(callback) {
  callback(sayHello);
}

function returnsANamedFunction() {
  return sayHello;
}

function returnsAnAnonymousFunction() {
  return function () {
    return "Hello";
  };
}
