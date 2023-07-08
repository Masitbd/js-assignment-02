let sum = 0
const sumNumbers =([...args])=>{
    args.map((arg)=>{
        sum = sum + arg
    })
    return sum
}


const result = sumNumbers([1,2,3,6])
console.log(result);