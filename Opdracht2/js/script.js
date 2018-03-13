var buttonterug = document.querySelector('.terug');
var buttonverder = document.querySelector('.verder');
var verschuiven = document.querySelector('.beelden');

buttonverder.addEventListener("click", scrollnaarright);
// laat de button de sectie naar rechts verschuiven
function scrollnaarright(){
	var positie = verschuiven.getBoundingClientRect(); //hierdoor wordt er gekeken naar de positie zodra die verschuifd
	if( positie.x < -2433){ // als de positie groter is dan -1700 moet hij stoppen met verschuiven
		verschuiven.style.transform += 'translateX(0)';
	}
	else{
		console.log("ik kom hier" + verschuiven)
		verschuiven.style.transform += `translateX(-733px)`; //anders verschuifd de sectie met -400px
	}
}

buttonterug.addEventListener("click", scrollnaarleft);
//met de addEvent click werk de verschuiving naar links via de klik op de pijltjesbutton
// met de addEvent keydown werkt de verschuiving van links via de pijltjestoetsen

function scrollnaarleft(){
	var positie = verschuiven.getBoundingClientRect(); //hierdoor wordt er gekeken naar de positie zodra die verschuifd
	if( positie.x > -8){ // als de positie groter is dan -8 moet hij stoppen met verschuiven
		verschuiven.style.transform += 'translateX(0)';
	}
	else {
	verschuiven.style.transform += 'translateX(733px)'; //anders verschuifd de sectie met 400px
}
}


document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (event.key == 'ArrowRight'){
  	scrollnaarright()
  	// ga naar rechts
  } else if (event.key == 'ArrowLeft'){
  	// ga naar links
  	scrollnaarleft()
  }
});
