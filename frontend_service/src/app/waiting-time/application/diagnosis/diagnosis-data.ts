import { Sex } from "./sex.enum";
import { Location } from "./location.enum";

export class DiagnosisData {
	id: number;
	sex: Sex;
	age: Date;
	child: boolean;
	location: Location;
	erbrechen: boolean;

			locationString = ["Kopf",
		"Hals",
		"Schultern",
		"Arme",
		"Hände",
		"Oberkörper",
		"Bauch",
		"Oberschenkel",
		"Unterschenkel",
		"Füße",
		"Überall",
		"Psychisch",
		"Nicht Lokalisierbar"];

	constructor(id: number,
		sex: Sex,
		age: Date,
		child: boolean,
		location: Location) {
		this.id = id;
		this.sex = sex;
		this.age = age;
		this.child = child;
		this.location = location;
	}

	toString(): string {

		return "id:" + this.id + " sex:" + this.sex + " age:" + this.age + " child:" + this.child + " location:" + this.locationString[+(this.location.toString())]+" ";

	}

}
