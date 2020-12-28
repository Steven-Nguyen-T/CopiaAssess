/*
For this question we want to show the deep equality of two hashmaps. To simpify the problem, you can assume that each hash map always uses a string as a key and a map, 
number, or string as a value. For the purpose of this problem, you can assume that any equals operator for two hash maps is not enabled.

>> equals({"key1" : "value", 
           "key2" : {"key3": 1}},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
>> true
>> equals({"key1" : "value1", 
           "key2" : {"key3": 1},
           "key4" : "value2"},
          {"key1" : "value", 
           "key2" : {"key3": 1}})
>> false

>> equals({"key1" : "value", 
           "key2" : [1, 2, 3]},
          {"key1" : "value", 
           "key2" : [1, 2, 3]})
>> true
>> equals({"key1" : "value1", 
           "key2" : [{"key3": 1}]},
          {"key1" : "value", 
           "key2" : [{"key3": 1}]})
>> true
>> equals({"key1" : "value1", 
           "key2" : [{"key3": 1}]},
          {"key1" : "value", 
           "key2" : [{"key3": 1}, 2]})
>> false
>> equals({"key1" : "value1", 
           "key2" : [{"key3": [1, 2]}]},
          {"key1" : "value", 
           "key2" : [{"key3": [1, 2]}]})
>> true
*/

const hash = (a, b) => {
  // checks if theyre equal, if they are then return true
  if (a === b) return true;

  // checks if either of them arent objects or just one of them is null then return false
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
 
  // declares keys of objects as arrays
  let keysA = Object.keys(a) 
  let keysB = Object.keys(b);
 
  // checks for equal length
  if (keysA.length !== keysB.length) return false;
 
  // iterates through keysA arr
  for (let key of keysA) {
    // if keyA elemnet isnt in keyB then return false
    if (!keysB.includes(key)) return false;
    // if rerunning the function on the key values are not equal then return flase
    if (!hash(a[key], b[key])) return false;
  }
 
  return true;
 }

const obj1 = {"key1": "value", "key2": {"key3": 1}}
const obj2 = {"key1": "value", "key2": {"key3": 1}}
const obj3 = {"key1": "value", "key2": {"key3": 123421}}
const obj4 = {"key1": "value", "key2": [{"key3": 123421}]}
const obj5 = {"key1": "value", "key2": [{"key3": 123421}]}
const obj6 = {"key1": "value", "key2": [{"key3": 123421}, 1]}
const obj7 = {"key1" : "value", "key2" : [{"key3": [1, 2]}]}
const obj8 = {"key1" : "value", "key2" : [{"key3": [1, 2]}]}

console.log(hash(obj1, obj2))
console.log(hash(obj1, obj3))
console.log(hash(obj5, obj4))
console.log(hash(obj6, obj4))
console.log(hash(obj7, obj8))

module.exports = {hash}