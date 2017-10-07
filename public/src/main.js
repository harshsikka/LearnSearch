// this file will be used for database processing, querying, and any other required methods

// need to get all posts
var getPosts = function(cb) {
  db.collection("Posts").get().then(function(querySnapshot) {
    cb(querySnapshot)
  });
}
// using the callback below with getPosts allows for us to log each individual document's data



// need to upvote a post



// need to get add a post with obj paramater like below
// {
//   title: "How To Fix NPM Permissions!",
//   upvotes: 4,
//   url: 'https://docs.npmjs.com/getting-started/fixing-npm-permissions',
//   user: 'harshsikka'
// }
var addPost = function(obj) {
  db.collection("Posts").add(obj).then(function(docRef) {
    console.log("Data succesfully sent", docRef);
    console.log("Document written with ID: ", docRef.id);
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
};



// objectives for 10/5/2017

// - include auth ui 
// - start passing down data between components
// - include sign up form popup
// - figure out how to upvote
