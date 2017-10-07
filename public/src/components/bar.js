Vue.component('bar',{
  props: ['showForm'],

  data: function(){
    return {
    show: this.showForm
    }
  },
  
  
  

  template:`
  <div>
  <template>
    <v-toolbar dark class="teal accent-3">
    <v-spacer></v-spacer>
      <v-toolbar-title class="white--text headline"><v-icon>school</v-icon>     LearnSearch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <v-btn class="white--text blue" v-show="!show.status" @click.native="show.status = !show.status">
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