


function printNumber(num, callback) {
    console.log('first this', num)
    callback(num)
    return
}

function secondFn(num) {
    setTimeout(() => {
        console.log('then this', num*2)
    }, 2000)
}

printNumber(5, secondFn)