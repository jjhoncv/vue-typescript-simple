import { sellerList } from './sellerList.model'
import { packageList } from './packageList.model'

export interface IUser {
	name: string
	type: number
	id: number
	packages: packageList
	sellers: sellerList
}

export class User implements IUser{
	name: string
	type: number
	id: number	
	packages: packageList
	sellers: sellerList

	constructor (id: number, type: number, name: string) {

		this.name = name
		this.type = type
		this.id = id

	}

	addPackages (packages: packageList) {
		this.packages = packages
	}

	addSellers (sellers: sellerList) {
		this.sellers = sellers
	}
}
