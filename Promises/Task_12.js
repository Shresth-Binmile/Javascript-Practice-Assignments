async function fetchApiData(url) {
    // let data = axios.get(url)      {...fetching data from api}
    let data = ''
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(data)
            resolve(data)
        }, 2000)
    })
}

function getDelay(num, start){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const duration = Date.now() - start;
            resolve(`Waited for ${duration}ms before trying again...`)
        }, 1000*num)
    })
}

async function fetchWithExponentialBackoff(url, maxRetries) {
    console.log(`fetching data from the URL: ${url}`)
    let i = 1, data;
    while (i <= maxRetries) {
        console.log(`fetching data for the ${i} time`);
        const waitTime = await getDelay(i, Date.now())
        console.log(waitTime)
        data = await fetchApiData(url)
        // console.log(data)
        if (data) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Success Fetching Data!')
                }, 3000)
            })
        }
        i++;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data Fetching Failed!')
        }, 5000)
    })
}

console.log(
    fetchWithExponentialBackoff('www.rapidapi.com/movies', 5)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
)