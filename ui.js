function getMousePos(can, evt){
	var rect=can.getBoundingRect();
	return {x:evt.clientX-rect.left, y:evt.clientY-rect.top};//not a class description like in c++ even though it looks like it :p
}

function enterText(){
}

function updateMods(num){
	var val=document.getElementById("ab"+num+"_1").value;
	var temp=Math.floor(val/2 - 5);
	if(temp>=0)
		document.getElementById("ab"+num+"_2").value="+"+temp;
	else
		document.getElementById("ab"+num+"_2").value=""+temp;

} 
