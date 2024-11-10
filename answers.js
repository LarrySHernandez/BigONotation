// Simplify the following big O expressions as much as possible:

// 1. O(n + 10) A) O(1)
// 2. O(100 * n) A) O(1)
// 3. O(25) A) O(1)
// 4. O(n^2 + n^3) A) O(n^2)
// 5. O(n + n + n + n) A) O(n^2)
// 6. O(1000 * log(n) + n) A) O(log(n))
// 7. O(1000 * n * log(n) + n) A) O(log(n))
// 8. O(2^n + n^2) A) O(log(n^2))
// 9. O(5 + 3 + 1) A) O(1)
// 10. O(n + n^(1/2) + n^2 + n * log(n)^10) A) O(n^2 + log(n))




// ## **Step Two: Calculating Time Complexity**

// Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

// ```jsx
// function logUpTo(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// ```

// Time Complexity: O(n)

// ```jsx
// function logAtLeast10(n) {
//   for (let i = 1; i <= Math.max(n, 10); i++) {
//     console.log(i);
//   }
// }
// ```

// Time Complexity: O(n)

// ```jsx
// function logAtMost10(n) {
//   for (let i = 1; i <= Math.min(n, 10); i++) {
//     console.log(i);
//   }
// }
// ```

// Time Complexity: O(1)

// ```jsx
// function onlyElementsAtEvenIndex(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
// ```

// Time Complexity: O(n)

// ```jsx
// function subtotals(array) {
//   let subtotalArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let subtotal = 0;
//     for (let j = 0; j <= i; j++) {
//       subtotal += array[j];
//     }
//     subtotalArray.push(subtotal);
//   }
//   return subtotalArray;
// }
// ```

// Time Complexity: O(n^2)

// ```jsx
// function vowelCount(str) {
//   let vowelCount = {};
//   const vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if(vowels.includes(char)) {
//       if(char in vowelCount) {
//         vowelCount[char] += 1;
//       } else {
//         vowelCount[char] = 1;
//       }
//     }
//   }

//   return vowelCount;
// }
// ```

// Time Complexity: O(n)



// ## **Part 3 - short answer**

// Answer the following questions

// 1. True or false: n^2 + n is O(n^2). A) True
// 2. True or false: n^2 * n is O(n^3). A) False
// 3. True or false: n^2 + n is O(n).   A) False
// 4. What’s the time complexity of the .indexOf array method? A) O(1)
// 5. What’s the time complexity of the .includes array method? A) O(1)
// 6. What’s the time complexity of the .forEach array method? A) O(n)
// 7. What’s the time complexity of the .sort array method? A) O(n)
// 8. What’s the time complexity of the .unshift array method? A) O(1)
// 9. What’s the time complexity of the .push array method? A) O(1)
// 10. What’s the time complexity of the .splice array method? A) O(n)
// 11. What’s the time complexity of the .pop array method? A) O(1)
// 12. What’s the time complexity of the Object.keys() function? A) O(1)

// ### **BONUS**

// 1. What’s the space complexity of the Object.keys() function? A) O(1) space





