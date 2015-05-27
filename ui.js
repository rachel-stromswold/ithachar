function getMousePos(can, evt){
	var rect = can.getBoundingRect();
	return {x:evt.clientX-rect.left, y:evt.clientY-rect.top};//not a class description like in c++ even though it looks like it :p
}

function enterText(){
}

function updateMods(num){
	var val=document.getElementById("ab"+num+"_0").value;
	var temp=Math.floor(val/2 - 5);
	if(temp>=0)
		document.getElementById("ab"+num+"_1").value="+"+temp;
	else
		document.getElementById("ab"+num+"_1").value=""+temp;

} 

function collapseField(field){
    var fieldObject = document.getElementById(field);
    if(field.style != "none")
	field.style.display = "none";
    else
	field.style.display = "inline";
}

function updateAC() {
	var ac = 10;
	var acMods = document.getElementsByClassName('acMod');
	for(var i = 0; i < acMods.length; ++i) {
		ac += +(acMods[i].value);
	}
	document.getElementById('ac0').value=ac;
}
