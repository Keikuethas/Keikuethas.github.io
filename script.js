var your = 0;
var rbutton = document.getElementById("rbutton");
var sbutton = document.getElementById("sbutton"); 
var pbutton = document.getElementById("pbutton"); 

function fight()
{
	var res = 0;
	var my = getRandomInRange(0,2);
	switch(your) 
	{
		case 0:switch(my)
		{
			case 0:res = 2;
			case 1:res = 1;
		}
		case 1:switch(my)
		{
			case 2:res = 1;
			case 1:res = 2;
		}
		case 2:switch(my)
		{
			case 0:res = 1;
			case 2:res = 2;
		}
		console.log(res);
		document.write(res);
		Window.promt(res)
	}
}

function getRandomInRange(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

rbutton.addEventListener("click",function()
{
your = 0;
fight();
});
sbutton.addEventListener("click",function()
{
your = 1;
fight();
});
pbutton.addEventListener("click",function()
{
your = 2;
fight();
});

