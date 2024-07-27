function fetchApi1(url, timer){
    let data1 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data1 = url
            resolve('Resolved')
            // reject('Rejected')
        }, timer+1)
        setTimeout(()=>{
            reject('Rejected')
        }, timer)
    })
}
function fetchApi2(url, timer){
    let data2 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data2 = url
            resolve('Resolved')
            // reject('Rejected')
        }, timer)
        setTimeout(()=>{
            reject('Rejected')
        }, timer)
    })
}
function fetchApi3(url, timer){
    let data3 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data3 = url
            resolve('Resolved')
            // reject('Rejected')
        }, timer)
        setTimeout(()=>{
            reject('Rejected')
        }, timer)
    })
}

function fetchWithRace(arr, timer){
    const p = Promise.race([
        fetchApi1(arr[0], timer),
        fetchApi2(arr[1], timer),
        fetchApi3(arr[2], timer)
    ])
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log('Error: ', err)
    })
    return p;
}

console.log(fetchWithRace(['api.com/api1', 'api.com/api2', 'api.com/api3'], 2000))