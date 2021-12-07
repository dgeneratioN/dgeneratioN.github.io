const sndlist = [
  {
    "name": "Anti-Mage",
    "portrait": "am.png",
    "vo": 
    [
      "snd/Vo_antimage_anti_laugh_01.mp3",
      "snd/Vo_antimage_anti_laugh_02.mp3",
      "snd/Vo_antimage_anti_laugh_03.mp3",
      "snd/Vo_antimage_anti_laugh_04.mp3",
      "snd/Vo_antimage_anti_laugh_05.mp3",
      "snd/Vo_antimage_anti_laugh_06.mp3",
      "snd/Vo_antimage_anti_laugh_07.mp3",
      "snd/Vo_antimage_anti_laugh_08.mp3",
      "snd/Vo_antimage_anti_laugh_09.mp3"
    ]
  },
  {
    "name": "Keeper of the Light",
    "portrait": "kotl.png",
    "vo": 
    [
      "snd/Vo_keeper_of_the_light_keep_laugh_01.mp3",
      "snd/Vo_keeper_of_the_light_keep_laugh_02.mp3",
      "snd/Vo_keeper_of_the_light_keep_laugh_03.mp3",
      "snd/Vo_keeper_of_the_light_keep_laugh_04.mp3",
      "snd/Vo_keeper_of_the_light_keep_laugh_05.mp3",
      "snd/Vo_keeper_of_the_light_keep_laugh_06.mp3"
    ]
  },
  {
    "name": "Rattletrap",
    "portrait": "clock.png",
    "vo": 
    [
      "snd/Vo_rattletrap_ratt_kill_15.mp3",
      "snd/Vo_rattletrap_ratt_kill_16.mp3",
      "snd/Vo_rattletrap_ratt_laugh_01.mp3",
      "snd/Vo_rattletrap_ratt_laugh_02.mp3",
      "snd/Vo_rattletrap_ratt_laugh_03.mp3",
      "snd/Vo_rattletrap_ratt_laugh_04.mp3"
    ]
  },
  {
    "name": "Razor",
    "portrait": "razor.png",
    "vo": 
    [
      "snd/Vo_razor_raz_laugh_01.mp3",
      "snd/Vo_razor_raz_laugh_02.mp3",
      "snd/Vo_razor_raz_laugh_03.mp3",
      "snd/Vo_razor_raz_laugh_04.mp3",
      "snd/Vo_razor_raz_laugh_05.mp3",
      "snd/Vo_razor_raz_laugh_06.mp3"
    ]
  },
  {
    "name": "Silencer",
    "portrait": "silencer.png",
    "vo": 
    [
      "snd/Vo_silencer_silen_laugh_01.mp3",
      "snd/Vo_silencer_silen_laugh_02.mp3",
      "snd/Vo_silencer_silen_laugh_03.mp3",
      "snd/Vo_silencer_silen_laugh_04.mp3",
      "snd/Vo_silencer_silen_laugh_05.mp3",
      "snd/Vo_silencer_silen_laugh_06.mp3",
      "snd/Vo_silencer_silen_laugh_07.mp3",
      "snd/Vo_silencer_silen_laugh_08.mp3",
      "snd/Vo_silencer_silen_laugh_09.mp3",
      "snd/Vo_silencer_silen_laugh_10.mp3",
      "snd/Vo_silencer_silen_laugh_11.mp3",
      "snd/Vo_silencer_silen_laugh_12.mp3",
      "snd/Vo_silencer_silen_laugh_13.mp3",
      "snd/Vo_silencer_silen_laugh_14.mp3" 
    ]
  },
  {
    "name": "Warlock",
    "portrait": "warlock.png",
    "vo": 
    [
      "snd/Vo_warlock_warl_laugh_01.mp3",
      "snd/Vo_warlock_warl_laugh_02.mp3",
      "snd/Vo_warlock_warl_laugh_03.mp3",
      "snd/Vo_warlock_warl_laugh_04.mp3",
      "snd/Vo_warlock_warl_laugh_05.mp3",
      "snd/Vo_warlock_warl_laugh_06.mp3"
    ]
  }
];


let index = 0;
let som = new Audio();
let herolist = document.querySelector(".herolist");

sndlist.forEach(o => {
  let no = document.createElement("option");
  no.value = index++;
  no.textContent = o.name;
  herolist.appendChild(no);
});

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

function trocarHero(){
  currentHero = herolist.value;
  document.querySelector("#editme").textContent = sndlist[currentHero].vo.random();
  document.querySelector("#foto").src = 'img/' + sndlist[currentHero].portrait;
}

function rir(){
  currentHero = herolist.value;
  som.src = sndlist[currentHero].vo.random();
  som.play();
}


document.querySelector(".herolist").addEventListener("change", trocarHero, false);
document.querySelector(".button").addEventListener("click", rir, false);



