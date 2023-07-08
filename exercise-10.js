const sumArray = (numbers) =>{
    let sum = 0

    numbers.forEach(number => {
        sum = sum + number
    })
    return sum
}


const getSum = sumArray([1, 2, 3, 4, 5])
console.log(getSum)