Vue.component('intro',{
 
  
  
  
  

  template:`

  <div>
  <template>
    <v-toolbar dark class="teal accent-3">
      <v-toolbar-title class="white--text headline"> <v-icon>school</v-icon> LearnSearch</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-toolbar>
  </template>
  <br>
  <br>
  <msg></msg>
  </div>`
})

var vueApp = new Vue({
  el: '#intro'
});