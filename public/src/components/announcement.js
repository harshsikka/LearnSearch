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
            <p>We're getting a ton of new members in the community, so let me know if there's any improvements I can make! Let's change how learning is done, together!</p>
            
            
            
            <h6>Announcements:</h6> 
            <ul>
            <li>Shiny New Features: Subject feeds! Click a topic and see tagged posts. Currently CS, Business, Design, Physics and Chemistry</li>
            <li>Upcoming Features: Descriptions, Comments, and User attribution for posts! Also thinking about karma or points</li>
            <li>Feature Suggestions or Bug Reports? Awesome, shoot me an <a  href='mailto:has727@g.harvard.edu'>email</a>, or <a href='https://twitter.com/HarshSikka' target="_blank">tweet me</a>!</li>
            </ul>
            
            
        </v-card-title>
      </v-card>
      <v-card @click.native='showUserMessage.status = !showUserMessage.status'>
      

      <v-card-title primary-title>
          <p>If you enjoy LearnSearch, would you mind <a href="https://twitter.com/intent/tweet?text=I've been using LearnSearch, and it is awesome! Check it out at https://learnsearch.xyz">tweeting</a> about it, or sharing it with your friends? It would really help spread the word!</p>
          <p> - Harsh </p>
      </v-card-title>
    </v-card>
    </v-flex>
  </v-layout>
</template>
</div>

`


})