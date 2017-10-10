Vue.component('bar',{
  props: ['showForm','userState','logIn', 'refreshData','renderNewFeed', 'renderTopicFeed'],

  data: function(){
    return {
    show: this.showForm,
    logging: this.logIn
    }
  },

  methods: {

  },
  
  
  

  template:`
  <div>
  <template>
    <v-toolbar dark class="teal accent-3">
    <v-spacer></v-spacer>
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
      
      
     
      <v-btn flat @click.native='refreshData'>Top</v-btn>
      <v-btn flat @click.native='renderNewFeed'>New</v-btn>

      <v-btn flat @click.native="renderTopicFeed('programming')">Programming</v-btn>
      <v-btn flat @click.native="renderTopicFeed('AI')">Artificial Intelligence</v-btn>
      <v-btn flat @click.native="renderTopicFeed('design')">Design</v-btn>
      
      

      
      

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

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