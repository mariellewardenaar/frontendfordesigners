Voor opdracht twee heb ik een carrousel uitgewerkt. Deze is te bedienen via de buttons op de pagina, maar ook via de pijltjestoetsen op het toetsenbord.
Hierbij heb ik gewerkt vanuit de 3 Principles of User Interface Design.

One primary action per screen
Every screen we design should support a single action of real value to the person using it. This makes it easier to learn, easier to use, and easier to add to or build on when necessary. Screens that support two or more primary actions become confusing quickly. Like a written article should have a single, strong thesis, every screen we design should support a single, strong action that is its raison d'etre.

Er speelt 1 actie een grote rol op mijn pagina, het bewegen van de carrousel. Dit kan echter op twee manieren, door op de buttons te drukken of door de Arrow keys op het toetsenbord te gebruiken. 

De volgende principle kan nog geoptimaliseerd worden door te zorgen dat er precies van foto naar foto gescrolld wordt. 

Provide a natural next step
Very few interactions are meant to be the last, so thoughtfully design a next step for each interaction a person has with your interface. Anticipate what the next interaction should be and design to support it. Just as we like in human conversation, provide an opening for further interaction. Don't leave a person hanging because they've done what you want them to do…give them a natural next step that helps them further achieve their goals.

Dit is waarschijnlijk ook wat de gebruiker verwacht. 
Nu bestaat de code uit een transform van 400px. 

```js
function scrollnaarright(){
	var positie = verschuiven.getBoundingClientRect(); //hierdoor wordt er gekeken naar de positie zodra die verschuifd
	if( positie.x < -1700){ // als de positie groter is dan -1700 moet hij stoppen met verschuiven
		verschuiven.style.transform += 'translateX(0)';
	}
	else{
		console.log("ik kom hier" + verschuiven)
		verschuiven.style.transform += `translateX(-400px)`; //anders verschuifd de sectie met -400px
	}
}

```
