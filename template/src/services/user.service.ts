import {user1, user2} from './../data/user.data'

export class userService {

	get (id: number) : Promise<any> {
		return new Promise((reject, resolve)=>{
			resolve([user1, user2])
		})
	}

}

