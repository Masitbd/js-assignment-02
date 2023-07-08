const getAddressCity = (obj)=>{
return obj?.city || 'Unknown'
}


const findCity = getAddressCity({ street: '123 Main St', country: 'USA' })
console.log(findCity)