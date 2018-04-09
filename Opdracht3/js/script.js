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

  data.forEach(function (obj) { //obj zijn alle objecten, daarin heb je dan id of title of cover
    var sectionmovies = document.querySelector(".movies");
    
    var divfilm = document.createElement("div");
    divfilm.setAttribute("class","film"); //geef de div een class met een naam, zodat ik deze specifieke div kan aanroepen
    
    var spantitle = document.createElement("span");
    spantitle.setAttribute("class","title");
    spantitle.textContent = obj.title; //textcontent ipv src omdat het geen plaatje is maar tekst
    divfilm.appendChild(spantitle);

    var imgfilm = document.createElement("img"); // hier maak je een 'img' aan
    imgfilm.setAttribute("class","imgfilm");

    var divmeerinfo = document.createElement("div");
    divmeerinfo.setAttribute("class","meerinfo");

    // de toggle functie
    imgfilm.addEventListener("click", function(event){
      divmeerinfo.classList.toggle("meerinfo");
    }
    );//

    imgfilm.src = obj.cover; // hier zeg je wat er in de 'img' moet staan
    divfilm.appendChild(imgfilm); // om 'img' in de section te laten vallen zet je dit neer, het is een child van de bovenste tak

    sectionmovies.appendChild(divfilm);

    divfilm.appendChild(divmeerinfo);

    var spanplot = document.createElement("span");
    spanplot.setAttribute("class","plot");
    spanplot.textContent = obj.simple_plot;
    divmeerinfo.appendChild(spanplot);

    var divrate = document.createElement("div");
    divrate.setAttribute("class","rate");

    var spangenre = document.createElement("span");
    spangenre.setAttribute("class","genre");
    spangenre.textContent = obj.genres;
    divrate.appendChild(spangenre);

    var spanrelease = document.createElement("span");
    spanrelease.setAttribute("class","release");
    spanrelease.textContent = obj.release_date;
    divrate.appendChild(spanrelease);

    divmeerinfo.appendChild(divrate);


  } )

}

request.send();

// de hover functie

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




