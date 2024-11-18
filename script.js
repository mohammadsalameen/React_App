//Task 2
function calculateSumAndAverage(numbers) {
    if (numbers.length === 0) {
      return { sum: 0, average: 0 }; // Handle empty array []
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
  
    return { sum, average };
  }
  
  // Array of numbers 
  const numbers = [10, 20, 30, 40];
  const { sum, average } = calculateSumAndAverage(numbers);
  console.log("Task 2 :");
  console.log(numbers);

  console.log(`Sum = ${sum}`);       
  console.log(`Average = ${average}`); 
  
// Task 3
function removeDuplicates(strings) {
    return [...new Set(strings)];
  }
  
  //Array
  const strings = ["apple", "banana", "apple", "orange", "banana"];
  const uniqueStrings = removeDuplicates(strings);
  console.log("Task 3 :");
  console.log(`Array before remove duplicate :`);
  console.log(strings);
  console.log(`Array After remove duplicate :`)
  console.log(uniqueStrings);
  