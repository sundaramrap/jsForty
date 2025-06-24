const library = {
  inventory: {
    "The Client": {
      availability: false,
      rating: 3.5,
      stock: 0,
    },

    "The Firm": {
      availability: true,
      rating: 4.2,
      stock: 3,
    },

    "The Nutcracker and Mouseking": {
      availability: true,
      rating: 4.2,
      stock: 10,
    },
  },
};

//object.keys()
//** The object.keys will return the key values of the object , if we apply object.key() in the above inventory we will get  */

console.log(Object.keys(library.inventory));
//(3) ['The Client', 'The Firm', 'The Nutcracker and Mouseking']

//object.enteries ==> returns pair of [key,value],

console.log(Object.entries(library));

///task8.
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

/// newPerson --->copies all the name and intitally the adress of reffrence remains same. so when name is changed for newobj the old place name is also manupulated.
// to avoid this we should use shallow copy.

const person1 = { name: "John" };
const newPerson1 = { ...person1 };
newPerson1.name = "Doe";
console.log(person1.name);
console.log(newPerson1.name);
