// class MyPromise {
//
// }

const MyPromise = Promise

module.exports = MyPromise

module.exports.deferred = MyPromise.defer = function() {
  var dfd = {}
  dfd.promise = new MyPromise(function(resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}