READ ME OPDRACHT 1

Voor opdracht 1 heb ik de volgende case gekozen: In een lijst gevonden studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is.

Daarbij zijn de volgende principles te vinden:

Priciples of User Interface Design

4. Keep users in control
Humans are most comfortable when they feel in control of themselves and their environment. Thoughtless software takes away that comfort by forcing people into unplanned interactions, confusing pathways, and surprising outcomes. Keep users in control by regularly surfacing system status, by describing causation (if you do this that will happen) and by giving insight into what to expect at every turn. Don't worry about stating the obvious the obvious almost never is.


11. Strong visual hierarchies work best
A strong visual hierarchy is achieved when there is a clear viewing order to the visual elements on a screen. That is, when users view the same items in the same order every time. Weak visual hierarchies give little clue about where to rest one's gaze and end up feeling cluttered and confusing. In environments of great change it is hard to maintain a strong visual hierarchy because visual weight is relative: when everything is bold, nothing is bold. Should a single visually heavy element be added to a screen, the designer may need to reset the visual weight of all elements to once again achieve a strong hierarchy. Most people don't notice visual hierarchy but it is one of the easiest ways to strengthen (or weaken) a design.


Beide komen terug doordat ik een simpel design heb gebruikt, dat voorzichzelf werkt. De boxjes zijn per huis in een zelde kleur, waardoor er een hierarchy ontstaat. De gebruiker zal weten wat hij moet doen, doordat alle handelingen het zelfde zijn. Daarnaast is er een duidelijke button aanwezig waar "meer informatie" op staat. Wat de gebruiker zou triggeren om deze button te openen en te kijken wat er naar voren komt. Als de gebruiker erop gedrukt heeft, ontstaat er een animatie. Dit zorgt voor feedback, waardoor de gebruiker weet dat er iets gebeurde door zijn klik. Niet alleen de animatie is te zien, maar ook de informatie die onder de button verschuilen zat.

Zo zijn er ook geen onaangekondigde interacties en is de gebruiker altijd in control. 

link naar site: http://ta-creations.nl/ta-creations.nl/login/V2%20-%20Marielle/


Uitleg van mijn code:

Hier wordt verteld dat als er op de de button wordt gedrukt, ik wil dat hij meer informatie over het huis laat zien. Daarnaast moet hij de informatie weer verstoppen als je er nog een keertje op drukt. Hij moet dus togglen.

``` javascript

var klikbaar = document.querySelector('#info');
var open = document.querySelector('.open');

klikbaar.addEventListener("click", function(event){
    open.classList.toggle('open');
  }
);

```

Hier declareer ik eerst dat 'klikbaar' en 'open' staan voor de id Info en class open. Daarna schrijf ik de code waarin verteld wordt wat er moet gebeuren. Klikbaar moet op het moment dat erop geklikt wordt een functie uitvoeren. Namelijk de classlist openen en ook togglen.

Uit mijn test kwam naar voren dat ik geen gebruik had gemaakt van een transition. 
Hier voor heb ik de volgende code gebruikt

``` javascript

var transitie = document.getElementById("favcount");

transitie.classList.toggle("bounceIn");

```

Hierin zit er dus een transitie op het id "favcount".
Eerst declareer ik die, daarna schrijf ik wat er moet gebeuren.
De transitie moet togglen en als er op gedrukt wordt moet hij naar binnen komen bouncen.

Ik gebruik de CSS van animate.css, in de CSS staat dit

``` css

@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.bounceIn {
  -webkit-animation-duration: 1.75s;
  animation-duration: 1.75s;
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}

```

Naast dat ik geen transitie in mijn code had, kwam uit het testen ook naar voren dat het niet duidelijk genoeg was dat er op het hele blok geklikt moest worden. Vanaar dat ik een button heb toegevoegd.
In deze button staat de tekst: meer informatie, zodat het voor de gebruiker duidelijk is dat er meer informatie verschijnd als hij/zij op de button klikt. Nu wilde ik dat de tekst verandert naar: minder informatie, zodra erop de button geklikt is.

Daarvoor heb ik de volgende code:

``` javascript

var informatie = document.querySelector('#info')

informatie.addEventListener("click",function(){     
	document.getElementById("info").textContent="minder informatie"; } );
    
```

Hierbij declareer ik de id info, naar informatie. Daaronder roep ik wat er moet gebeuren aan.

Als er op informatie geklikt wordt moet de tekst die binnen het id info staat, veranderen naar "minder informatie"



