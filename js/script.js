var answers=document.querySelectorAll("#questions p");
function question(param){
	for(i=0;i<answers.length;i++){
		answers[i].style.display="none";
	}
	param.nextElementSibling.style.display="block";
}