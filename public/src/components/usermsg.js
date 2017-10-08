Vue.component('usermsg',{

  props: ['msg'],
  template:`
  <div>
  <template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title> 
            <h5>Awesome to have you here!</h5> 
            <p>If you'd like to contribute a learning link, hit the plus on the top right! Otherwise you can check out other posts below!</p>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
</div>`
})