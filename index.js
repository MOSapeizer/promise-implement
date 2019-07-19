// try catch 的流程
// 所有的 reject 都會進到第一個 catch, 然後繼續執行後面的 then

// Promise
//   .reject('test')
//   .then(() => console.log(1))
//   .then(() => console.log(2), () => console.log(3))
//   .then(() => console.log(4), () => console.log(5))
//   .catch(() => console.log(6))

const p = Promise.resolve()

class Pm {

  STATE = {
    ERROR: -1,
    PENDING: 0,
    FINISH: 1,
  };

  constructor (fn) {
    this.state = this.STATE['PENDING'];
    this.value = undefined;
    this.todos = []
    fn(value => this.resolve(value), error => this.reject(value))
  }

  resolve(result) {
    if(this.state !== this.STATE['PENDING']) return;
    this.state = this.STATE['FINISH']
    this.value = result
    this.todos.forEach(todo => todo.resolve(this.value))
  }

  reject(reason) {
    if(this.state !== this.STATE['PENDING']) return;
    this.state = this.STATE['ERROR']
    this.value = reason
    this.todos.forEach(todo => todo.reject(this.value))
  }

  then() {}
}

new Pm().then(function(value) {
  return new Promise(resolve => {
    resolve(value + 1)
  })
})



p.then( function(){
  p.then( function(){
    console.log( "C" );
  } );
  console.log( "A" );
} );

p.then( function(){
  console.log( "B" );
} );


// Promise 副作用

// 1.
// firstStep()
//   .then( secondStep )
//   .then( function(){
//     console.log( "two" );
//   } );
//
// firstStep()
//   .then( function(){
//     console.log( "one" );
//   } );

// 2.
// setTimeout( function(){
//   console.log( "three" );
// }, 0 );
//
// Promise.resolve().then( function(){
//   console.log( "two" );
// } );
//
// console.log( "one" );