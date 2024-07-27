console.log('Program Started');

function CallingPromise(){
    return new Promise((resolve, reject)=>{
        console.log('Program in progress');
        setTimeout(()=>{
            resolve('Step1 Complete')
        }, 3000)
    })
}

console.log(
    CallingPromise()
        .then((data)=>{
            console.log(data)
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve('Step2 Complete')
                }, 3000)
            })
        })
        .then((data)=>console.log(data))
        .catch((data)=>console.log(data))
)