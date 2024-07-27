console.log('Program Started');

function CallingPromise(){
    return new Promise((resolve, reject)=>{
        console.log('Program in progress');
        setTimeout(()=>{
            resolve({data: "Hello, friend!", error: null})
        }, 5000)
    })
}

console.log(
    CallingPromise()
        .then((data)=>{
            console.log(data)
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve('First promise chain complete!')
                }, 2000)
            })
        })
        .then((data)=>{
            console.log(data)
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    resolve('Second promise chain complete!')
                }, 10000)
            })
        })
        .then((data)=>console.log(data))
        .catch((data)=>console.log(data))
)

// 6  &  7 step are same...