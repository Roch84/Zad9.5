
var allButtons = document.getElementsByTagName('button');

console.log(allButtons);

var targetButton = document.getElementsByClassName('button');
	
console.log(targetButton);
console.log(targetButton.length);
for ( var i = 0 ; i < (targetButton.length); i++) {
	var x = targetButton[+i].innerText;
		alert(x);
}