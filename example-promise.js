// function getTempCallback (location, callback){
//   callback(undefined, 24);
//   callback('City not found');
// }
//
// getTempCallback('Iasi,RO', function(err, temp){
//   if( err ){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise( location ){
//   return new Promise( function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City nowhere');
//     }, 2000);
//   });
// }
//
// getTempPromise('Iasi,RO').then( function(temp){
//   console.log("Promise success", temp);
// }, function(err){
//   console.log("Promise error", err);
// });


// Challenge area
function addPromise(a, b){
  return new Promise( function(resolve, reject){
    if( typeof a !== 'number' || typeof b !== 'number'){
      reject("One or both params are not numbers");
    } else {
      resolve((a+b));
    }
  });
}

addPromise(7, 9).then( function(sum){
  console.log("The sum is ", sum);
}, function(err){
  console.log("Error found:", err);
});


addPromise(7, 'a').then( function(sum){
  console.log("The sum is ", sum);
}, function(err){
  console.log("Error found:", err);
});


addPromise('xx', 9).then( function(sum){
  console.log("The sum is ", sum);
}, function(err){
  console.log("Error found:", err);
});


addPromise(7).then( function(sum){
  console.log("The sum is ", sum);
}, function(err){
  console.log("Error found:", err);
});
