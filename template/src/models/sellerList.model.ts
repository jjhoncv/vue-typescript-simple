import {Seller} from './seller.model'

interface ISellerList {
	sellers: Array<Seller>
}

export class sellerList implements ISellerList{
	sellers: Array<Seller> = []

	constructor (seller: Seller) {
		this.sellers.push(seller)	
	}

	add (seller: Seller) {
		this.sellers.push(seller)
	}
}