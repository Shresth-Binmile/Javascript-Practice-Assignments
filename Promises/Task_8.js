function fetchApi1(url){
    let data1 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data1 = url
            // resolve('Resolved')
            reject('Rejected')
        }, 1000)
    })
}
function fetchApi2(url){
    let data2 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data2 = url
            // resolve('Resolved')
            reject('Rejected')
        }, 1000)
    })
}
function fetchApi3(url){
    let data3 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data3 = url
            // resolve('Resolved')
            reject('Rejected')
        }, 1000)
    })
}

function fetchAnyWithErrors(arr){
    const p = Promise.any([
        fetchApi1(arr[0]),
        fetchApi2(arr[1]),
        fetchApi3(arr[2])
    ])
    .then((data)=>console.log(data))
    .catch((err)=>console.log('Error: ', err))

    return p;
}

console.log(fetchAnyWithErrors(['api.com/api1', 'api.com/api2', 'api.com/api3']))