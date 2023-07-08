

const destructureExample =(obj, arr)=>{
   const {name, age} = obj
   const [val1, ,val2] = arr

  return {name, age, val1, val2}
    
}


const result = destructureExample( { name: 'John', age: 30, city: 'New York' },  [10, 20, 30, 40])
console.log(result)
