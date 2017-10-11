Vue.component('intro',{

  data: function() {
   return {
     postData:[],
     showSignUp: false
   }
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
        
      });
    },

    renderTopicFeed: function(topic){
      // this.postData = [];
      // postData = this.postData;
      // dbRef = db.collection("Posts").where("topic", "==", topic).get().then(function(querySnapshot) {
      //   querySnapshot.forEach(function(doc) {
      //     postData.push(doc.data());
      //   })
      // });

      console.log(this.postData);
      this.postData = [];
      postData = this.postData;
      getPosts((dbResult)=>{
        dbResult.forEach(function(doc) {
          postData.push(doc.data());
        });
        // sort the feeds by maximum upvotes
        postData.sort(function(a, b){return b.upvotes - a.upvotes})
        console.log(postData);
        for( var i = 0; i < postData.length; i++) {
          if (postData[i].topic !== topic){
            postData.splice(i,1)
            i = i - 1;
          }
        }

      });
      
    }, 

    renderNewFeed: function(topic){
      this.postData = [];
      postData = this.postData;
      getPosts((dbResult)=>{
        dbResult.forEach(function(doc) {
          postData.push(doc.data());
        });
        // sort the feeds by maximum upvotes
        postData.sort(function(a, b){return b.timestamp - a.timestamp})
        
      });

    }
  },
  
  created: function(){
    postData = this.postData;
    getPosts((dbResult)=>{
      dbResult.forEach(function(doc) {
        postData.push(doc.data());
      });
      // sort the feeds by maximum upvotes
      postData.sort(function(a, b){return b.upvotes - a.upvotes})
    })
  },
  
  
  
  

  template:`

  <div>
  <template>
    <v-toolbar dark class="teal accent-3">
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
      <v-btn flat @click.native='refreshData'>Top</v-btn>
      <v-btn flat @click.native='renderNewFeed'>New</v-btn>

      <v-btn flat @click.native="renderTopicFeed('Computer Science')">Computer Science</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Business')">Business</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Design')">Design</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Physics')">Physics</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Chemistry')">Chemistry</v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    
    <v-btn class="white--text indigo" v-show="!showSignUp" @click.native="showSignUp = !showSignUp">
      Login or Signup
    </v-btn>  

    <v-btn class="white--text error" v-show="showSignUp" @click.native="showSignUp = !showSignUp">
    Cancel
    </v-btn> 
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    </v-toolbar>
  </template>
  <br>
  <br>
  <msg></msg>
  <br>
  <br>
  <div id="firebaseui-auth-container" v-show="showSignUp"></div>
  <posts v-bind:post-data='postData' ></posts>
  </div>`
})

var vueApp = new Vue({
  el: '#intro'
});