const newarray = {};
for (const element of bus) 
{
  newarray[element] = true;
}
const uniqueArray = Object.keys(newarray);
console.log(uniqueArray); // Output: ["apple", "banana", "orange"]
