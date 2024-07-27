function fetchApi1(url){
    let data1 = url
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const i = Math.floor(Math.random()*2) + 1;
            data1 = `Resolve_${i}`
            resolve(data1)
            // reject('Rejected')
        }, 1000)
    })
}
function fetchApi2(url){
    let data2 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data2 = url
            resolve(`Secondary Url Resolved: ${url}`)
            // reject('Rejected')
        }, 2000)
    })
}
function fetchApi3(url){
    let data3 = ''
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            data3 = url
            resolve(`Secondary Url Resolved: ${url}`)
            // reject('Rejected')
        }, 2000)
    })
}

function conditionalChaining(arr){
    console.log(`fetching initial url: ${arr[0]}...`)
    fetchApi1(arr[0])
        .then((data)=>{
            if(data == 'Resolve_2'){
                return fetchApi2(arr[1])
            }
            else{
                return fetchApi3(arr[2])
            }
        })
        .then((data)=>console.log(data))
        .catch((err)=>console.log('Error: ', err))
}

conditionalChaining(['api.com/api1', 'api.com/api2', 'api.com/api3'])