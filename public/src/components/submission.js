

Vue.component('submission',{

  data:function() {
    return {
      title: 'Add your title here!',
      link: 'Add your url here!'
    }
  },
  

  template:`
  <div>
    <v-container fluid grid-list-md text-xs-center>
      
      <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-form offset-xs3>
        
          
          <v-flex xs12 sm6 offset-sm1>
            <v-text-field teal label="Title" v-model="title"></v-text-field>
            <v-text-field teal label="Link" v-model="link"></v-text-field>
          </v-flex>
        
        </v-form>

        <v-btn primary>
          submit
        </v-btn>
      </v-card>
      </v-flex>
    </v-container>
  </div>
    `
  
});