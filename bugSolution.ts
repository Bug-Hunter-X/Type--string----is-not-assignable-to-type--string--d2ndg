function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];
//Solution 1: Iterate through the array
for (const name of user) {
  console.log(greeter(name));
}

//Solution 2: Modify the function to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));

//Solution 3: Use the first element of the array
console.log(greeter(user[0]));