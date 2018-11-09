//Sets the initial colours of the three elements on page load
document.getElementById("blue").style.color="blue";
document.getElementById("green").style.color="green";
document.getElementById("red").style.color="red";

//A function to change colours of elements when called
function mix(){

	document.getElementById("blue").style.color=getRandomColour();
	document.getElementById("green").style.color=getRandomColour();
	document.getElementById("red").style.color=getRandomColour();

}

//A function to get a random colour
function getRandomColour(){
	var letters = "0123456789abcdef";
	var result = "#";
	for (var i = 0; i < 6; i++) {
		result += letters.charAt(parseInt(Math.random() * letters.length));
	}
	return result;
}
