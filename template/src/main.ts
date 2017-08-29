import Vue from 'vue'
import App from './components/app/app.vue'
import store from './store'
/*import * as User from './models/user.model'
*/
import {userActions} from './store/user.actions'

let userAct = new userActions()
userAct.getUser(1)
.then((response)=> {
	console.log(response)
})


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


