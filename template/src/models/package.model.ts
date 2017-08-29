interface IPackage {
	id: number
	name: string
	dateStart: Date
	dateEnd: Date
}


export class Package implements IPackage{
	id: number
	name: string
	dateStart: Date
	dateEnd: Date

	constructor (id: number, name: string, dateStart: Date, dateEnd: Date) {
		this.id = id
		this.name = name
		this.dateStart = dateStart
		this.dateEnd = dateEnd
	}

}