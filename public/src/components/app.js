

Vue.component('app',{
  
  // storing data from db
  data: function() {
    

    return {
      postData: [],
      dig: 'hello',
      showForm: {
        status: false,
      }
    };

  },

  // using the getPosts function in main.js
  created: function(){
    postData = this.postData;
    getPosts((dbResult)=>{
      dbResult.forEach(function(doc) {
        postData.push(doc.data());
      });
    });
  },

  

  template:`
  <div>
    <bar :showForm='showForm'></bar>
    <br>
    <submission v-show='showForm.status'></submission>
      <posts v-bind:post-data='postData' v-show='!showForm.status'></posts>
  </div>`
  
// for submission, turn the posts v-show to false
  
});

var vueApp = new Vue({
  el: '#app',
  data: {
    posts: [],
    test: 'something'
  }

});






