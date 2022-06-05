function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = false;
      if (error == true) {
        console.log("promise has been resolved!");
        resolve();
      } else {
        console.log("the promise has been rejected!");
        reject("sorry not resolved");
      }
    }, 3000);
  });
}

func1().then(function() {
    console.log('thanks for resolving -then-');
}).catch(function (error) {
    console.log('rejected  '+ error)
})