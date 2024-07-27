

function printNumber(num){
    console.log(num)
}

function secondFn(callback){
    const num = 5
    callback(num)
}

secondFn(printNumber)