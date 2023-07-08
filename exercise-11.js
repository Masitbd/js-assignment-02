function sortNumbers(numbers) {
    const length = numbers.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
           const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }
  
    return numbers
  }
  
 const resullt = sortNumbers([1, 2, 4, 5, 8])
  console.log(resullt)
  