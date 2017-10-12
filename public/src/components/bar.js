Vue.component('bar',{
  props: ['showForm','userState','logIn', 'refreshData','renderNewFeed', 'renderTopicFeed', 'renderAllTimeFeed'],

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
    <v-toolbar dark class="indigo accent-3">
    <v-spacer></v-spacer>
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
      
      
     
      <v-btn flat @click.native='refreshData'>Top</v-btn>
      <v-btn flat @click.native='renderNewFeed'>New</v-btn>
      <v-btn flat @click.native='renderAllTimeFeed'>All Time</v-btn>

      <v-btn flat @click.native="renderTopicFeed('Computer Science')">Computer Science</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Business')">Business</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Design')">Design</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Physics')">Physics</v-btn>
      <v-btn flat @click.native="renderTopicFeed('Chemistry')">Chemistry</v-btn>
      
      

      
      

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

      <!-- took out userState from below v-show -->
      <v-btn class="white--text light-blue accent-3"  v-show="!show.status" @click.native="show.status = !show.status">
        <v-icon v-show="!show.status">add</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-toolbar>
  </template>
  </div>`
})