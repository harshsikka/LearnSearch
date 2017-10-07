Vue.component('bar',{
  props: ['showForm','userState','logIn'],

  data: function(){
    return {
    show: this.showForm,
    logging: this.logIn
    }
  },
  
  
  

  template:`
  <div>
  <template>
    <v-toolbar dark class="teal accent-3">
    <v-spacer></v-spacer>
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

      <!-- commenting out signup issues <v-btn class="white--text indigo" v-show="!userState" @click.native="logging.status = !logging.status">
        Login or Signup
      </v-btn>  

      <v-btn class="white--text error" v-show="logging.status" @click.native="logging.status = !logging.status">
      Cancel
      </v-btn> -->

      <!-- took out userState from below v-show -->
      <v-btn class="white--text blue"  v-show="!show.status" @click.native="show.status = !show.status">
        <v-icon v-show="!show.status">add</v-icon>
      </v-btn>

      <v-btn error v-show="show.status" @click.native="show.status = !show.status">
      <v-icon >cancel</v-icon>
     </v-btn>

      <v-spacer></v-spacer>
    </v-toolbar>
  </template>
  </div>`
})