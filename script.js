var btn=document.getElementById('btn-smart');
btn.onclick=function(){
	btn.style.width="20%"
}
var btn1=document.getElementById('btn-smart1');
btn1.onclick=function(){
	btn1.style.borderRadius="50%";
	btn1.style.height="100px";
	btn1.style.width="200px";
	
}
var btn2=document.getElementById('btn-smart2');
btn2.onclick=function(){
	btn2.style.height='50px';
}
var btn3=document.getElementById('btn-smart3');
btn3.onclick=function(){
	btn3.style.left="40%";
	btn3.style.transform='rotate(20deg)';
}
var btn4=document.getElementById('btn-smart4');
btn4.onclick=function(){
	btn4.style.fontSize="36px";
	btn4.style.height="100px";
	btn4.style.width='200px'
}

/*
accordian
*/

var acc1=document.getElementById('ac1');
var pan1=document.getElementById('p1');
var acc2=document.getElementById('ac2');
var pan2=document.getElementById('p2');
var acc3=document.getElementById('ac3');
var pan3=document.getElementById('p3');
pan1.style.display="none";
pan2.style.display="none";
pan3.style.display="none";



acc1.onclick=function(){

	if(pan1.style.display==="none") {
		pan1.style.display='block';
		acc1.style.backgroundColor='pink';
}
	else{
		pan1.style.display="none";
		acc1.style.backgroundColor='#eee';
	}
}
acc2.onclick=function(){
	if (pan2.style.display==='none') {
		pan2.style.display='block';
		acc2.style.backgroundColor='pink';
	}
	else{
		pan2.style.display="none";
		acc2.style.backgroundColor='#eee';
	}
}
acc3.onclick=function(){
	if (pan3.style.display==='none') {
		pan3.style.display='block';
		acc3.style.backgroundColor='pink';
	}
	else{
		pan3.style.display="none";
		acc3.style.backgroundColor='#eee';
	}
}
cls.onclick=function(){
	pop.style.display="none";
}
ask.onclick=function(){
	answer.style.display='block';
	pop.style.display="none";

}
ok.onclick=function(){
	answer.style.display='none';
}

var btndn=document.getElementById('btn-download');
btndn.onclick=function(){
	btndn.style.width="50%";
}
img.onclick=function(){
	pop.style.display="block";

}
car.style.width="70px";
	car.style.height="70px";
	car.style.left="88%";
	car.style.top="300px";
	car.title="click to make bigger wheel";

car.onclick=function(){
	if ((car.style.width==="70px")&&(car.style.height==="70px")&&(car.style.left==="88%")&&(car.style.top==="300px")&&(car.title="click to make bigger wheel")) {
	car.style.width="400px";
	car.style.height="400px";
	car.style.left="30%";
	car.style.top="30%";
	car.title="click to make smaller wheel";

	}else
	{
	car.style.width="70px";
	car.style.height="70px";
	car.style.left="88%";
	car.style.top="300px";
	car.title="click to make bigger wheel";
	}
	
	
}


