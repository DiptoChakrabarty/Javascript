var cols=GenerateRandomColors(6);
var sq=document.querySelectorAll(".square1");
var heading=document.querySelector("h1");
var messagedisplay= document.querySelector("#message");
var colordisplay = pickaColor();
var pickcolor=document.querySelector("#col");
var resetbutton=document.querySelector('#reset');
var easybutton=document.querySelector('#easy');
var hardbutton=document.querySelector('#hard');
var game=document.querySelector('#new_game');
var add=document.querySelector('#add');
var numsq=6;
var marks=0;
var count=0;
var attempt_no=0;
var display_points=document.querySelector('#points');
var attempt=document.querySelector('#attempt');
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
 marks=marks+(numsq-count)*10;
 display_points.textContent= marks;
 add.textContent= (numsq-count)*10;
 attempt_no=attempt_no+1;
 attempt.textContent=attempt_no;
}
else{
	count=count+1;
	this.style.background ='#000';
	messagedisplay.textContent="Try Again";
	add.textContent= 0;
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
	count=0;
cols=GenerateRandomColors(numsq);
//choose a random color
colordisplay = pickaColor();
//change the text to random color
pickcolor.textContent=colordisplay;
for(var i=0;i<sq.length;i++)
{//displaying the square colors
sq[i].style.background=cols[i];
messagedisplay.textContent=" ";
add.textContent= 0;
}
});
easybutton.addEventListener("click",function(){
	numsq=3;
	count=0;
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
	count=0;
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
game.addEventListener("click",function(){
count=0;
marks=0;
cols=GenerateRandomColors(numsq);
//choose a random color
colordisplay = pickaColor();
//change the text to random color
pickcolor.textContent=colordisplay;
for(var i=0;i<sq.length;i++)
{//displaying the square colors
sq[i].style.background=cols[i];
messagedisplay.textContent=" ";
add.textContent= 0;
attempt.textContent=0;
attempt_no=0;
}

display_points.textContent= marks;
});
display_points.textContent= marks;
