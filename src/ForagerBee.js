/*jshint esversion:6*/
class ForagerBee extends Bee {
	constructor(age, color, food, job, canFly, treasureChest) {
		super(age, color, food, job);
		this.age = 10;
		this.job = "find pollen";
		this.canFly = true;
		this.treasureChest = [];
	} 	
	forage() {
		return this.treasureChest.push("treasure");
	}
}
