function fetchApi1(url){
    let data1 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data1 = url
            // resolve('Resolved_1')
            reject('Rejected_1')
        }, 10000)
    })
}
function fetchApi2(url){
    let data2 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data2 = url
            // resolve('Resolved_2')
            reject('Rejected_2')
        }, 5000)
    })
}
function fetchApi3(url){
    let data3 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data3 = url
            // resolve('Resolved_3')
            reject('Rejected_3')
        }, 1000)
    })
}

function fetchWithFallback(arr){
    const p = Promise.allSettled([
        fetchApi1(arr[0]),
        fetchApi2(arr[1]),
        fetchApi3(arr[2])
    ])
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log('Error: ', err)
    })

    return p;
}

console.log(fetchWithFallback(['api.com/api1', 'api.com/api2', 'api.com/api3']))