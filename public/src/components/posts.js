Vue.component('posts',{
  props: ['postData'],
  template:`
  
  <div>
  
    <v-container grid-list-md text-xs-center>
    
    <post v-for="post in postData" v-bind:post='post'/>
    
    </v-container>
  
  </div>
  `
})

