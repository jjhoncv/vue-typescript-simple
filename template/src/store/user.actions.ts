import { userService } from './../services/user.service'

export class userActions {

	userService: userService

	constructor () {
		this.userService = new userService()
	}

	getUser (id: number): Promise<any> {
		return this.userService.get(id)
	}

}

