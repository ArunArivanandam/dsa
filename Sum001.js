// Brute force- Time Complexity: O(n^2)

// function findTargetWithNestedLoop(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const diffNumber = target - nums[i];

//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i && nums[j] === diffNumber) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(findTargetWithNestedLoop([12, 4, 7, 2, 9, 3], 10));

// Optimized- Time Complexity: O(n); Space Complexity: O(n)

function findTarget(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
}

console.log(findTarget([12, 4, 7, 2, 9, 3], 10));
