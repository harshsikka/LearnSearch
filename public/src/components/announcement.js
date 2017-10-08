Vue.component('announcement',{

  props: ['msg', 'showUserMessage'],
  template:`
  <div v-show='showUserMessage.status' >
  <template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card @click.native='showUserMessage.status = !showUserMessage.status'>
        

        <v-card-title primary-title>
        
            <h6>Awesome to have you here!</h6> 
            <p>If you'd like to contribute a learning link, hit the plus on the top right! Otherwise you can check out other posts below!</p>

            
            <h6>Some Tips Tips for navigating the LearnSearch community!</h6> 
            

            
            <ul>
            <li>Clear Announcements by clicking on them! \n</li>
            
            <li>Feature Suggestions or Bug Reports? Awesome, shoot me an <a  href='mailto:has727@g.harvard.edu'>email</a>, or <a href='https://twitter.com/HarshSikka' target="_blank">tweet me</a>!</li>
            <li>You can find a list of upcoming features <a href='https://github.com/harshsikka123/LearnSearch/blob/master/README.md' target="_blank">here</a>!</li>
            </ul>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
</div>

`


})