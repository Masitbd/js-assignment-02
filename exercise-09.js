const filterEvenNumbers = (numbers)=>{
 const evenNumber = numbers.filter(number =>number % 2 == 0)
 return evenNumber
}


const resullt =  filterEvenNumbers([1, 2, 3, 4, 5])
console.log(resullt)

