function fetchApi(url){
    let data1 = ''
    const random = Math.floor(Math.random()*2) + 1
    // console.log(random)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data1 = url
            if(random == 2) resolve('Resolved_1')
            else reject('Rejected_1')
        }, 1000)
    })
}

function convertToBatch(urls, batchSize){
    let i = 0;
    const result = []
    while(i <= urls.length){
        const tarr = []
        let j = 1
        while(j <= batchSize){
            if(urls[i]) tarr.push(urls[i])
            i++
            j++
        }
        result.push(tarr)
    }
    return result
}

function getApiCall(ba){
    const res = []
    for(let i = 0; i < ba.length; i++){
        res.push(fetchApi(ba[i]))
    }
    return res
}

async function batchFetch(urls, batchSize){
    const batchArray = convertToBatch(urls, batchSize)
    const result = []
    const p = new Promise(async(resolve, reject) => {
        for(let i = 0; i < batchArray.length; i++){
            // console.log(getApiCall(batchArray[i]))
            const p1 = await Promise.allSettled(getApiCall(batchArray[i]))
            result.push(p1)
        }
        resolve(result)
    })
    
    return p.then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log('Error: ', err))
}

const arr = ['api.com/api1', 'api.com/api2', 'api.com/api3']
console.log(batchFetch(arr, 2))