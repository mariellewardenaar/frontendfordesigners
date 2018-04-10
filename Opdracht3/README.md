Link naar de website: http://ta-creations.nl/ta-creations.nl/login/Opdracht3/

Op de pagina is een carrousel met verschillende films te vinden. Door de carrousel valt heen te sliden, daarnaast wordt er meer informatie over de film getoond, waneer je op de film drukt.

De carrousel is op verschillende manieren te bedienen. Door de pijltjes toetsen onderaan de pagina, maar ook door de pijltjes toetsen op je toetsenbord. 

Tijdens het maken van de website heb ik gebruik gemaakt van de Principles of User Interface Design. Door de knoppen zijn de users in control. Zij bepalen wat en wanneer er wat op de website gebeurd. 

![alt text](https://media.giphy.com/media/EpNGa22cAiO5yUgpHL/giphy.gif)

```js
var buttonterug = document.querySelector('.terug');
var buttonverder = document.querySelector('.verder');
var verschuiven = document.querySelector('.movies');

buttonverder.addEventListener("click", scrollnaarright);
// laat de button de sectie naar rechts verschuiven
  function scrollnaarright(){
    var positie = verschuiven.getBoundingClientRect(); //hierdoor wordt er gekeken naar de positie zodra die verschuifd
    if( positie.x < -880){ // als de positie groter is dan -1700 moet hij stoppen met verschuiven
      verschuiven.style.transform += 'translateX(0)';
    }
    else{
      console.log("ik kom hier" + verschuiven)
      verschuiven.style.transform += `translateX(-420px)`; //anders verschuifd de sectie met -400px
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
    verschuiven.style.transform += 'translateX(420px)'; //anders verschuifd de sectie met 400px
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
```


