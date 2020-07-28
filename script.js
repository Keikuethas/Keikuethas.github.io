var your = 0;
var rbutton = document.getElementById("r");
var sbutton = document.getElementById("s"); 
var pbutton = document.getElementById("p"); 

function fight()
{
	var res = 0;
	var my = getRandomInRange(0,2);
	var a = '';
	switch(your) 
	{
		case 0:switch(my)
		{
			case 0:res = 2; break;
			case 1:res = 1; break;
		}
		break;
		case 1:switch(my)
		{
			case 2:res = 1; break;
			case 1:res = 2; break;
		}
		break;
		case 2:switch(my)
		{
			case 0:res = 1; break;
			case 2:res = 2; break;
		}
		break;
	}
	
	switch(res) 
	{
		case 0:
			sendMessage('Вы проиграли. Ничего, может быть, в следующий раз?');
			break;
		case 1:
			sendMessage('Вы победили!');
			break;
		case 2:
			sendMessage('Ничья!');
			break;
		
	}
	console.log('res == ' + res);
	console.log('in cause of your == ' + your + ' and my == ' + my);
		
}

function sendMessage(message)
{
	var a = window.prompt(message);
}

function getYour(you)
{
	your = you;
	fight();
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


