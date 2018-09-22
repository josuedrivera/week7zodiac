var myVar = [
	{
		type: Mexican
		dish: Tacos
		ingredients: beef, tortilla
		directions: cook beef, put cooked beef on tortilla; fold tortilla. put folded tortilla and meat in your mouth.
	},
	{
		type: Thai
		dish: Green Curry
		ingredients: Green Curry Paste, Chicken, Coconut Milk, Bamboo Shoots, Thai Basil
		directions: Look at and follow instructions on green curry paste.
	},
	{
		type: American
		dish: Cheeseburger
		ingredients: Beef Patty, Bun, American Cheese
		directions: Grill beef patty. Put beef patty on bun; add cheese; add top of bun. Put in mouth.
	},
	{
		type: 
		dish:
		ingredients:
		directions:
	},
	{
		type: 
		dish:
		ingredients:
		directions:
	}
];

var input = document.getElementById("#");
var myH1 = document.getElementById("#");
var myH2 = document.getElementById("#");
var myH3 = document.getElementById("#");

function getInfo() {
	for(var i = 0; i < myVar.length; i++) {
		if(input.value == myVar[i].name) {
		
			myH1.innerText = myVar.
			myH2.innerText = myVar.
			myH3.innerText = myVar.
			



			return;
		} 
		else {
			
		} 
	}
}