let rocKet ;
rocKet = ("запуск ракеты пошеел !");
console.log(rocKet);

const rocket__game = document.getElementById('rocket__game');
const aliens__game = document.getElementById('aliens__game');

document.addEventListener("keydown", function(event){
  jump();
});

function jump () {
  if (rocket__game.classList !="jump") {
      rocket__game.classList.add("jump")
  }
  setTimeout(function(){
    rocket__game.classList.remove("jump")
  },300)
}

let isAlive = setInterval( function(){
    let rocket__gameTop = parseInt(window.getComputedStyle(rocket__game).getPropertyValue("top"));
    let aliens__gameLeft = parseInt(window.getComputedStyle(aliens__game).getPropertyValue("left"));

    if (aliens__gameLeft </*80*/ 80 && aliens__gameLeft > 0 && rocket__gameTop >= 140){
      alert("земля захвачена.......GAME OVER !")
      
    }
},10);
