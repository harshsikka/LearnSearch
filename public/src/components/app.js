

Vue.component('app',{
  
  // storing data from db
  data: function() {
    

    return {
      postData: [],
      showForm: {
        status: false,
      },
      userState: firebase.auth().currentUser,
      logIn: {
        status: false,
      }
    };

  },

  methods: {
    refreshData: function(){
      //wipe current data
      this.postData = [];
      postData = this.postData;
      getPosts((dbResult)=>{
        dbResult.forEach(function(doc) {
          postData.push(doc.data());
        });
        // sort the feeds by maximum upvotes
        postData.sort(function(a, b){return b.upvotes - a.upvotes})
        this.showForm.status = !this.showForm.status;
      });
    }
  },


  // using the getPosts function in main.js
  created: function(){
    postData = this.postData;
    getPosts((dbResult)=>{
      dbResult.forEach(function(doc) {
        postData.push(doc.data());
      });
      // sort the feeds by maximum upvotes
      postData.sort(function(a, b){return b.upvotes - a.upvotes})
    });
  },

  

  template:`
  <div>
    <bar :show-form='showForm' :user-state='userState' :log-in='logIn'></bar>
    
    <br>
   <!-- <div id="firebaseui-auth-container" v-show='!userState'></div> -->
    <submission v-show='showForm.status' v-bind:post-data='postData' v-bind:refresh-data='refreshData.bind(this)'></submission>
      <posts v-bind:post-data='postData' v-show='!showForm.status'></posts>
  </div>`
  
// for submission, turn the posts v-show to false
  
});

var vueApp = new Vue({
  el: '#app'
});






