var frame=document.querySelector(".frame");
var demoDiv=document.querySelector(".demo");
var count=0;
function slide(param){
	frame.style.left=-600*param+"px";
}

function demo(){
	count+=1;
	demoDiv.style.width=count+"px";
	if(count>=document.body.clientWidth){
		clearInterval(myInterval);
	}
}
var myInterval=setInterval(demo,1)

