function getMousePos(can, evt){
	var rect=can.getBoundingRect();
	return {x:evt.clientX-rect.left, y:evt.clientY-rect.top};//not a class description like in c++ even though it looks like it :p
}

function enterText(){
} 
