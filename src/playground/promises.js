// Promise resolve some data
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "joe",
      age: 22
    });
    // reject("Something went wrong");
  }, 5000);
});

console.log("before");

promise
  .then(data => {
    console.log("1", data);
    return "new string";
  })
  .then(str => {
    console.log("adsf: ", str);
  })
  .catch(error => {
    console.log("error: ", error);
  });

console.log("after");
