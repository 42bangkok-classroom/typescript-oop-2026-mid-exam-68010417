interface Person {
  firstName?: string;
  lastName?: string;
  age: number;
}
const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

function sortPersons(persons: Person[]): Person[] {
  return sortedPersons.sort((a, b) => {

    if (a.age !== b.age) {
        return a.age - b.age;
    }
    return a.age - b.age;
}
)}
const sortedPersons = sortPersons(persons);

const displayResult = sortedPersons.map(s => ({
    firstName: s.firstName,lastName: s.lastName,age: s.age
}));



