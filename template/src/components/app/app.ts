import Vue from 'vue'
import Component from 'vue-class-component'

import Hello from './../Hello'
import Date from './../Date'

@Component({
  components: {
    Hello,
    Date
  }
})

/*console.log('env', process.env)*/

export default class extends Vue {
  message = 'Welcome to Your Vue.js App'
}