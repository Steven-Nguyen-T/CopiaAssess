/*
For this question we want you to synchronize two lists. Each list contains only integers. The goal of the 
problem is to return the list of integers which are not contained in both lists.

>> sync([1, 2, 3], [1, 3, 4])
>> [2, 4]
>> sync([1, 9], [1])
>> [9]
>> sync([1, 2, 3], [1, 2, 3])
>> []
*/

const sync = (arr1, arr2) => {
  // create memo for caching
  const memo = {};
  // create results arr to store values
  const result = [];
  // add each key into the memo with a value of 1
  for (let el of arr1) memo[el] = 1;
  // if the key already exists then incremnt the value, else leave it at 1
  for (let el of arr2) {
    memo[el] ? memo[el]++ : memo[el] = 1;
  }

  // iterate through memo and if the value for the key is equal to 1 then we will push that key onto our results arr
  for (let key in memo) {
    if (memo[key] === 1) result.push(Number(key));
  }

  // return result array
  return result;
}

const arr1 = [1, 2, 3]
const arr2 = [1, 3, 4]
console.log(sync(arr1, arr2))

module.exports = {sync}