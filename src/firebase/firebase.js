import * as firebase from "firebase";
import * as expensesActions from "../actions/expenses";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Gum",
//   note: "",
//   amount: 109500,
//   createdAt: 97234242341
// });

// database.ref("expenses").push({
//   description: "Phone Bill",
//   note: "",
//   amount: 5900,
//   createdAt: 97234242341
// });

// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 1200,
//   createdAt: 97234242341
// });

// database.ref("notes/-L4oTyhVXWLapiQ9fxkU").remove();

// database.ref("notes").push({
//   title: "This is first title",
//   body: "This is first body"
// });

// const notes = [
//   {
//     id: 1,
//     title: "This is first title",
//     body: "This is first body"
//   },
//   {
//     id: 2,
//     title: "This is second title",
//     body: "This is second body"
//   }
// ];
// database.ref("notes").set(notes);

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching!");
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(11);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 4500);

// setTimeout(() => {
//   database.ref("age").set(66);
// }, 6500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Trung DT",
//     age: 31,
//     stressLevel: 6,
//     isSingle: true,
//     job: {
//       title: "Software developer",
//       country: "United States"
//     },
//     location: {
//       city: "Ho chi Minh",
//       country: "Viet Name"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seatle"
// });

// database.ref("isSingle").remove();

// database.ref().set("This is my data");

// database.ref("age").set(32);
// database.ref("location/city").set("Long An");
// database.ref("attributes").set({
//   height: 173,
//   weight: 60
// });

// console.log("I made a request to change data.");
