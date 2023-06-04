const meanings = {
  wall: 0,
  empty: 1, 
  point: 2
}

/* Map */
let mapModel = new Map()
let mapTable = mapModel.map

/* Pacman */
let pacman = new Pacman();

/* Fantomes */
let ghosts = [ 
  new Ghost(14, 7, 0, 'ghost1'),
  new Ghost(2, 15, 0, 'ghost2'),
  new Ghost(2, 5, 0, 'ghost3'),
  new Ghost(15, 21, 0, 'ghost4')
]

// Création du conteneur pour le tableau
const map = document.querySelector('#map');

const totalPoint = totalPoints();



function totalPoints(){
  let count = 0;
  for(let y in mapTable){
    for(let x in mapTable[y]){
      if(mapTable[y][x] == 2){
        count++;
      }
    }
  }
  return count;
}

function isWon(){
  if(countPoints() === 30){
    return true;
  }else{
    return false;
  }
}

function isLoose(){

  // let targetCells = document.querySelectorAll(`div[style*='grid-area: ${pacman.y} / ${pacman.x} / ${pacman.y + 1} / ${pacman.x + 1}']`);
  // let classNames = Array.from(targetCells).map(function(element) {
  //   return element.className;
  // });

  let loose = false;

 for(let i in ghosts){
  if(ghosts[i].x == pacman.x && ghosts[i].y == pacman.y){
    loose = true;
  }
 }

  // for(let i = 1; i<= 4; i++){ // < 4 car ghost4 est le dernier
  //   if(classNames.includes(`ghost${i}`) && classNames.includes(`pacman`)){
  //     console.log(classNames)
  //     loose = true;
  //   }
  // }

  return loose;
}


function countPoints(){
  let count = 0;
  for(let y in mapTable){
    for(let x in mapTable[y]){
      if(mapTable[y][x] == 2){
        count++;
      }
    }
  }
  return totalPoint - count;
}

function afficheGhosts(){
  for(let i in ghosts){
    ghosts[i].afficheGhost(map)
  }
}

function deplaceGhost() {
  for(let i in ghosts){
    ghosts[i].deplaceGhost(ghosts[i])
  }
}

function collisionGhosts() {
  for(let i in ghosts){
    ghosts[i].collisionGhost(mapTable)
  }
}

document.addEventListener('keydown', changeDirPacman)



// Appel de la fonction pour générer le tableau
function tourDeJeux(){

  let win = isWon();
  map.innerHTML = ''

  mapModel.createTable(map);
  pacman.affichePacman(map);
  afficheGhosts();
  deplaceGhost();
  pacman.deplacePacman();
  pacman.collisionPacman();
  collisionGhosts();
  
  
  let scoreDiv = document.querySelector('.score');
  scoreDiv.innerHTML = `Score: ${countPoints()} / ${totalPoint}`
  if(win === true){
    alert('Gagné !')
    relaunch()
  }

  let loose = isLoose();
  if(loose === true){
    alert('Perdu !')
    relaunch()
  }
  

}

function relaunch(){
  /* Map */
  mapModel = new Map()
  mapTable = mapModel.map

  /* Pacman */
  pacman = new Pacman();

  /* Fantomes */
  ghosts = [ 
    new Ghost(14, 7, 0, 'ghost1'),
    new Ghost(2, 15, 0, 'ghost2'),
    new Ghost(2, 5, 0, 'ghost3'),
    new Ghost(15, 21, 0, 'ghost4')
  ]

  tourDeJeux()

}

setInterval(tourDeJeux, 200)


