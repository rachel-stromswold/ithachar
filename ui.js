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
	var t_ac=10;//touch AC
	var f_ac=10;//flat footed AC

	var acMods = document.getElementsByClassName('acMod');
	for(var i = 0; i < acMods.length; ++i) {
		ac += +(acMods[i].value);
		if(!(i==0 || i==1 || i==4))//If we are looking at armor (artificial or natural) it is ignored for touch attacks
			t_ac+=+(acMods[i].value);
		if(!(i==2 || i==5))//TODO:Check for feats that affect this, for example uncanny dodge
			f_ac+=+(acMods[i].value);
	}
	document.getElementById('ac0').value=ac;
	document.getElementById('ac8').value=t_ac;
	document.getElementById('ac9').value=f_ac;
}

var SKILL_NUM=35;//all of the skills not counting skills that have multiple forms ie. all Knowledge skills count as one

function updateSkills(skillId){
		val2=+(document.getElementById(skillId+"_2").value);
		val3=+(document.getElementById(skillId+"_3").value);
		val4=+(document.getElementById(skillId+"_4").value);
		document.getElementById(skillId+"_1").value=val2+val3+val4;
}

$(document).ready(function() {
	for(var i=0;i<SKILL_NUM;i++){
		document.getElementById("skill0_"+i+"_2").setAttribute("oninput", "updateSkills('skill0_"+i+"')");
		document.getElementById("skill0_"+i+"_3").setAttribute("oninput", "updateSkills('skill0_"+i+"')");
		document.getElementById("skill0_"+i+"_4").setAttribute("oninput", "updateSkills('skill0_"+i+"')");
	}
});
