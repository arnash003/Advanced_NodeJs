var delay = (seconds) => new Promise((resolve, reject)=> {
        throw new Error('argh');
        setTimeout(resolve('the long delay has ended'), seconds*1000);
 });

delay(1).then(console.log)
        .then(()=> 42)
        .then((number)=> console.log(`hello world - ${number}`))
        .catch((error)=>console.log(`Error: ${error.message}`))

console.log('end first tick');