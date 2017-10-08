Vue.component('intro',{

  data: function() {
   return {
     postData:[],
     showSignUp: false
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
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    
    <v-btn class="white--text indigo" v-show="!showSignUp" @click.native="showSignUp = !showSignUp">
      Login or Signup
    </v-btn>  

    <v-btn class="white--text error" v-show="showSignUp" @click.native="showSignUp = !showSignUp">
    Cancel
    </v-btn> 
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