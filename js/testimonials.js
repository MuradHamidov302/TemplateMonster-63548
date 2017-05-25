var frame=document.querySelector(".frame");
var demoDiv=document.querySelector(".demo");
var answers=document.querySelectorAll("#questions p");
var questions=document.querySelectorAll("#questions h1")

var count=0;

function slide(param){
	frame.style.left=-600*param+"px";
}

function question(param){
	for(i=0;i<answers.length;i++){
		answers[i].style.display="none";
		questions[i].setAttribute("data-attr",'+')

	}
	param.nextElementSibling.style.display="block";
	param.setAttribute("data-attr",'-')

}

function demo(){
	count+=1;
	demoDiv.style.width=count+"px";
	if(count>=document.body.clientWidth){
		clearInterval(myInterval);
	}
}

var myInterval=setInterval(demo,1)

