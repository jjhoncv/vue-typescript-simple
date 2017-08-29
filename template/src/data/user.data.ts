import { IUser } from './../models/user.model'
import { Package } from './../models/package.model'
import { Seller } from './../models/seller.model'
import { packageList } from './../models/packageList.model'
import { sellerList } from './../models/sellerList.model'


export const user1: IUser = {
	name: 'Jhon',
	type: 2,
	id: 3,
	packages: new packageList(new Package(1,'aa',new Date, new Date)),
	sellers: new sellerList(new Seller(2, 'cc')) 
}

export const user2: IUser = {
	name: 'xxx',
	type: 5,
	id: 1,
	packages: new packageList(new Package(7,'bb',new Date, new Date)),
	sellers: new sellerList(new Seller(21, 'xx')) 
}