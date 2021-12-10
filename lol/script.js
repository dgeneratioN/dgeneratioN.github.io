var thisdata;
var currentType;
var currentHero;

fetch('./parse.json')
  .then((res) => res.json())
  .then((data) => parsearHeroes(data));

function parsearHeroes(data){
  //parsing hero types
  thisdata = data;
  addEntries(data, typelist);
  addEntries(data['AGI'], herolist);
  currentType = Object.keys(data)[1];
  typelist.value = currentType;
  trocarTipo();
}

function addEntries(data, optionMenu){
  Object.keys(data).forEach( x => {
    let no = document.createElement("option");
    no.value = x;
    no.textContent = x;
    optionMenu.appendChild(no);
  })
}

let index = 0;
const herolist = document.querySelector(".herolist");
const typelist = document.querySelector(".typelist");
const portrait = document.querySelector("#foto");
let som = new Audio();


Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function trocarTipo(){
  currentType = typelist.value;
  herolist.innerHTML = "";
  addEntries(thisdata[currentType], herolist);
  trocarHero();
}

function trocarHero(){
  currentHero = herolist.value;
  let imagemurl = thisdata[currentType][currentHero]['img'].split('/').pop().replace('_icon.png','.png');
  //document.querySelector("#editme").textContent = sndlist[currentHero].vo.random();
  portrait.src = 'img/' + imagemurl;
  portrait.style = "height: 300px;"
}

function defaultPortrait(){
  portrait.src = thisdata[currentType][currentHero]['img'];
  portrait.style = "height: 150px;"
}

function rir(){
  currentHero = herolist.value;
  som = new Audio()
  som.src = thisdata[currentType][currentHero]['vo'].random();
  som.play();
}

function sendfunnyimage(){
  open('https://t.me/diegofernands/')
}


document.querySelector(".herolist").addEventListener("change", trocarHero, false);
document.querySelector(".typelist").addEventListener("change", trocarTipo, false);
document.querySelector(".button").addEventListener("click", rir, false);
document.querySelector(".button2").addEventListener("click", sendfunnyimage, false);

document.querySelector("#foto").addEventListener("error", defaultPortrait, false);



