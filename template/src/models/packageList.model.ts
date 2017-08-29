import {Package} from './package.model'

interface IPackageList {
	packages: Array<Package>
}

export class packageList implements IPackageList {
	packages: Array<Package> = []

	constructor (_package: Package) {
		this.packages.push(_package)
	}

	add (_package: Package) {
		this.packages.push(_package)
	}
}
