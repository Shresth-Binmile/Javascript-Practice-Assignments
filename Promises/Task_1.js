console.log('Program Started');

function CallingPromise(){
    return new Promise((resolve, reject)=>{
        console.log('Program in progress');
        setTimeout(()=>{
            resolve('Program Complete')
        }, 3000)
        setTimeout(()=>{
            reject('Program failure')
        }, 2000)
    })
}

console.log(
    CallingPromise()
        .then((data)=>console.log(data))
        .catch((data)=>console.log(data))
)