// Promise Q&A

// 暖身題

// Promise
//   .reject('test')
//   .then(() => console.log(1))
//   .then(() => console.log(2), () => console.log(3))
//   .then(() => console.log(4), () => console.log(5))
//   .catch(() => console.log(6))

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

// 3.

// const p = Promise.resolve();
// p.then( function(){
//   p.then( function(){
//     console.log( "C" );
//   } );
//   console.log( "A" );
// } );
//
// p.then( function(){
//   console.log( "B" );
// });