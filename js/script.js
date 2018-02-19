
var allButtons = document.getElementsByTagName('button');

console.log(allButtons);

var targetButton = document.getElementsByClassName('button');
	
console.log(targetButton);
console.log(targetButton.length);
var numberButtons = targetButton.length;
console.log(numberButtons);
for ( var i = 0 ; i < numberButtons ; i++) {
	var x = targetButton[i].innerText;
		alert(x);
}