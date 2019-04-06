//var cols=["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(215, 0, 255)","rgb(255, 182, 145)","rgb(154, 147, 210)","rgb(255, 0, 0)","rgb(255, 0, 0)","rgb(255, 0, 0)"]
var cols=GenerateRandomColors(6);
var sq=document.querySelectorAll(".square1");
var heading=document.querySelector("h1");
var messagedisplay= document.querySelector("#message");
var colordisplay = pickaColor();
var pickcolor=document.querySelector("#col");
var resetbutton=document.querySelector('#reset');
var easybutton=document.querySelector('#easy');
var hardbutton=document.querySelector('#hard');
var numsq=6;
pickcolor.textContent=colordisplay;
for(var i=0;i<sq.length;i++)
{
sq[i].style.background=cols[i];
sq[i].addEventListener("click",function(){
var clickcolor = this.style.background;
if(clickcolor == colordisplay)
{

changeColor(clickcolor);
heading.style.background=clickcolor;
messagedisplay.textContent="Correct";
resetbutton.textContent="Play Again";
}
else{
	
	this.style.background ='#000';
	messagedisplay.textContent="Try Again";
}	
});


}
function changeColor(color){
	//function to make all squares of same color when correct answer is given
for(var i=0;i<sq.length;i++)
{

	sq[i].style.background= colordisplay;
}

}
function pickaColor(){
	//pick a random color from the colors array
	var rand=Math.floor(Math.random() * cols.length);
	return cols[rand];
}
function GenerateRandomColors(num){
	//generating the random colors
	var arr=[];
	for(var i=0;i<num;i++)
	{
	arr.push(randomColor())
}
	return arr;
}
function randomColor()
{	//make random colors
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r +", " + g +", " + b +")";
	//add spaces to fix bug to make color 
}
resetbutton.addEventListener("click",function(){
	
	//Genrate Random colrs
cols=GenerateRandomColors(numsq);
//choose a random color
colordisplay = pickaColor();
//change the text to random color
pickcolor.textContent=colordisplay;
for(var i=0;i<sq.length;i++)
{//displaying the square colors
sq[i].style.background=cols[i];
messagedisplay.textContent=" ";
}
});
easybutton.addEventListener("click",function(){
	numsq=3;
			easybutton.classList.add("selected");
			hardbutton.classList.remove("selected");
			cols=GenerateRandomColors(numsq);
			colordisplay= pickaColor();
			pickcolor.textContent=colordisplay;
			for(var i=0;i<sq.length;i++)
			{
				if(i<3)
				{
					sq[i].style.background=cols[i];
				}
				else{
					sq[i].style.display="none";
				}
			}

});
hardbutton.addEventListener("click",function(){
	numsq=6;
			hardbutton.classList.add("selected");
			easybutton.classList.remove("selected");
			cols=GenerateRandomColors(numsq);
			colordisplay= pickaColor();
			pickcolor.textContent=colordisplay;
			for(var i=0;i<sq.length;i++)
			{
					sq[i].style.background=cols[i];
					sq[i].style.display="block";
			}
});