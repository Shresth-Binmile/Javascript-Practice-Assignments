async function fetchApiData(url, timer) {
    // let data = axios.get(url)      {...fetching data from api}
    let data = ''
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(data)
            data = 'movies';
            resolve(data)
        }, 2000)
        setTimeout(()=>{
            reject(data)
        }, timer)
    })
}

async function fetchWithTimeout(url, timer){
    console.log(`fetching data from url: ${url}`)
    const data = await fetchApiData(url, timer)
    if(data){
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
    return new Promise((resolve, reject) => {
        reject('Timeout Error!')
    })
}

console.log(
    fetchWithTimeout('www.rapidApi.com/movies', 2000)
        .then((data)=>console.log('Request resolved!', data))
        .catch((err)=>console.log('Request rejected!', err))
)