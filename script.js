var time;
var dTime = 43200;
var hTime = 3600;
var mTime = 60;

function setUpClock(){
	var now = new Date();
	time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

function setClock(){
	time += 1;
	var timer = time % dTime;
	document.getElementById('hour').style.transform = "rotate(" + (time/dTime) * 360 + "deg)";
	maxTime = 3600;
	timer = timer % hTime;
	document.getElementById('minute').style.transform = "rotate(" + (time/hTime) * 360 + "deg)";
	maxTime = 60;
	timer = timer % mTime;
	document.getElementById('second').style.transform = "rotate(" + (time/mTime) * 360 + "deg)";
}

setUpClock();
setInterval(setClock, 1000);
