const numsArray = [2, 4, 6, 3, 35, 8, 14, 24, 16, 4];

// Brute force- Time complexity: O(n^2)
// function findDuplicate(nums) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(findDuplicate(numsArray));

// Optimized solution- Time Complexity: O(nlog(n))

// function findDuplication2(nums) {
//   const sortedNums = nums.toSorted((a, b) => a - b);
//   for (i = 0; i < sortedNums.length; i++) {
//     if (sortedNums[i] === sortedNums[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDuplication2(numsArray));

// More Optimized solution- Time complexity- o(n) Space complexity- o(n)

function findDuplication3(nums) {
  const map = {};

  for (let num of nums) {
    if (map[num] !== undefined) {
      return true;
    }
    map[num] = num;
  }
  return false;
}

console.log(findDuplication3(numsArray));
