Vue.component('usermsg',{

  props: ['msg', 'showUserMessage'],
  template:`
  <div v-show='showUserMessage.status' >
  <template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.native='showUserMessage.status = !showUserMessage.status'>
        

        <v-card-title primary-title>
        
            <h5>Awesome to have you here!</h5> 
            <p>If you'd like to contribute a learning link, hit the plus on the top right! Otherwise you can check out other posts below!</p>

            <h5>Some Tips</h5>
            <ul>
            <li><h6>Clear Announcements by clicking on them!</h6></li>
            <li><h6>Feature Suggestions or Bug Reports? Awesome, shoot me an <a href='mailto:has727@g.harvard.edu'>email</a>, or <a href='https://twitter.com/HarshSikka'>tweet me</a>!</h6></li>
            </ul>  
            

            

        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
</div>

`


})