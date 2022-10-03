var delay = (seconds) => new Promise((resolve, reject)=> {
    setTimeout(resolve('the long delay has ended'), seconds*1000);
 });

delay(1).then(console.log)
        .then(()=> 42)
        .then((number)=> `hello world - ${number}`)
        .then(console.log)

console.log('end first tick');