Vue.component('post',{
  props: ['post'],
  template:`
  <v-layout>
    <v-flex sm8 offset-sm2>
      <v-card class='elevation-1'>
        <v-card-title primary-title >
            <v-btn color="normal" >{{post.upvotes}}
            <v-icon dark right>navigation</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <div>
            <a :href="post.url">{{post.title}}</a>
          </div>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>`
})