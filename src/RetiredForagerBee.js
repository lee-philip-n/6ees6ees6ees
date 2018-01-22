/*jshint esversion:6*/
class RetiredForagerBee extends ForagerBee{
	constructor(age, color, food, job, canFly, treasureChest) {
		super(age, color, food, job, canFly, treasureChest);
		this.age = 40;
		this.job = "gamble";
		this.canFly = false;
		this.color = "grey";
	}
	forage() {
		return "I am too old, let me play cards instead";
	}

	gamble() {
		this.treasureChest.push("treasure");
	}
}
