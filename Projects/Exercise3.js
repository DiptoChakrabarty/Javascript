var bt=document.querySelector('button');
var r=false;
bt.addEventListener("click",function(){
	if(r==false){
		document.body.style.background="red";
		
	}
	else{
		document.body.style.background="yellow";
		
	}
	r=!r;
	
});

//bt.addEventListener("click",function(){
//	//document.body.classList.toggle("red");
//}
