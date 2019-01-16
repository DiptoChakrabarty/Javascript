var bt=document.querySelectorAll('button');
var p1=document.querySelector('#p1Display');
var p2=document.querySelector('#p2Display');
//var in=document.querySelector('input');
var t=5;
var gover=false;
var b1=0;
var b2=0;
console.log(p1)
bt[0].addEventListener("click",function(){
	if(gover==false)
{	b1++;
	p1.textContent=b1;
	if(b1==5)
	{
		p1.style.color='purple';
		gover=true;
	}
}
	
});
bt[1].addEventListener("click",function(){
	if(gover==false)
{	b2++;
	p2.textContent=b2;
	if(b2==5)
	{
		p2.style.color='red';
		gover=true;
	}
}
	
	
});
bt[2].addEventListener("click",function(){
	b1=0;
	b2=0;
	gover=false;
});
