const person = {
  name: "Joe",
  age: 27,
  location: {
    city: "Ho Chi Minh",
    temp: 88
  }
};
const { name = "Anonymous", age } = person;
// console.log(`${name} is ${age}`);

const book = {
  title: "De men phieu luu ky",
  author: "To Huu",
  publiser: {
    // name: "NXB tre"
  }
};

const { name: publisherName = "Self-Published" } = book.publiser;
// console.log(publisherName);
