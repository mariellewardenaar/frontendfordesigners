Link naar de website: http://ta-creations.nl/ta-creations.nl/login/Opdracht3/

Op de pagina is een carrousel met verschillende films te vinden. Door de carrousel valt heen te sliden, daarnaast wordt er meer informatie over de film getoond, waneer je op de film drukt.

![alt text](https://media.giphy.com/media/vNdFZUAudCTehMDRky/giphy.gif)

De carrousel is op verschillende manieren te bedienen. Door de pijltjes toetsen onderaan de pagina, maar ook door de pijltjes toetsen op je toetsenbord. 

Tijdens het maken van de website heb ik gebruik gemaakt van de Principles of User Interface Design. Door de knoppen zijn de users in control. Zij bepalen wat en wanneer er wat op de website gebeurd. 

![alt text](https://media.giphy.com/media/5hgUcrZF5KPbJoKRZD/giphy.gif)

Voor het werken van de carrousel heb ik de volgende code gebruikt:

```js
var buttonterug = document.querySelector('.terug');
var buttonverder = document.querySelector('.verder');
var verschuiven = document.querySelector('.movies');

buttonverder.addEventListener("click", scrollnaarright);
// laat de button de sectie naar rechts verschuiven
  function scrollnaarright(){
    var positie = verschuiven.getBoundingClientRect(); //hierdoor wordt er gekeken naar de positie zodra die verschuifd
    if( positie.x < -880){ // als de positie groter is dan -880 moet hij stoppen met verschuiven
      verschuiven.style.transform += 'translateX(0)';
    }
    else{
      console.log("ik kom hier" + verschuiven)
      verschuiven.style.transform += `translateX(-420px)`; //anders verschuifd de sectie met -420px
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
    verschuiven.style.transform += 'translateX(420px)'; //anders verschuifd de sectie met 420px
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

Om dit te kunnen laten werken heb ik data nodig. Deze data haal ik op via een api. Door een een console log aan te koppelen kan ik zien of de data ook echt wordt opgehaald:

```js

var request = new XMLHttpRequest();

request.open('GET', 'http://dennistel.nl/movies', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }

```

Naast dat het belangrijk is dat de users in control blijven moeten de gebruikers ook kunnen begrijpen welke handelingen zij kunnen gaan verrichten. Dit maak ik de gebruikers duidelijk door de cursor te veranderen bij de hover staat van iets klikbaars. De cursor verandert dan in een handje. Naast het veranderen van de cursor worden de afbeeldingen in de carrousel ook lichter zodra hier over heen wordt gehoverd.

![alt text](https://media.giphy.com/media/5hgUcrZF5KPbJoKRZD/giphy.gif)

Tenslotte speelt een strenge visuele hirarchie ook een rol. Door alles in dezelfde kleuren te stijlen met bijpassende lettertypes wordt dit principe opgevolgd. 




