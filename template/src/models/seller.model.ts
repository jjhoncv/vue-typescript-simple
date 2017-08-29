interface Iseller {
	id: number
	name: string
}


export class Seller implements Iseller{
	id: number
	name: string

	constructor (id: number, name: string) {
		this.id = id
		this.name = name
	}

}