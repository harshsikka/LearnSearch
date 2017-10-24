Vue.component('post',{
  props: ['post'],

  data: function() {
    return {
      clicked: {
        number: 0,
        status: false,
      }
    }
  },

  methods: {
    addUpvote: function() {

      if(firebase.auth().currentUser === null){
        alert('Please login or signup to upvote');
      } else {

      var addVote = this.post.upvotes + 1;
      var subVote = this.post.upvotes;
      var title = this.post.title;
      var clicked = this.clicked
      console.log(title);
      dbRef = db.collection("Posts").where("title", "==", title).get()
      
      
      dbRef.then(function(querySnapshot) {
        // console.log(querySnapshot.docs[0]);
        // console.log(querySnapshot.docs[0].ref);
        
        // check to see if already has been clicked. examine this code carefully
        if(clicked.number === 0) {
          querySnapshot.docs[0].ref.update({
            upvotes: addVote
            
            })
          clicked.number = 1;
          clicked.status = true;
        } else {
          //cancel click
          querySnapshot.docs[0].ref.update({
            upvotes: subVote
            })
          clicked.number = 0;
          clicked.status = false;
        }
      })

     }
    }
  },
  template:`
  <v-layout>
    <v-flex sm8 offset-sm2>
      <v-card class='elevation-1'>
        <v-card-title primary-title >

          
          <v-btn flat icon color="normal" @click.native="addUpvote" v-show='!clicked.status'>{{post.upvotes + clicked.number}}
            <v-icon>navigation</v-icon>
          </v-btn>

          <v-btn flat icon color="indigo accent-3" @click.native="addUpvote" v-show='clicked.status'>{{post.upvotes + clicked.number}}
          <v-icon>navigation</v-icon>
          </v-btn>
   

          <div>
          <a :href="post.url" target="_blank" style='text-decoration: none'>{{post.title}}</a> by {{this.post.user}}
          </div>
          
          
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>`
})