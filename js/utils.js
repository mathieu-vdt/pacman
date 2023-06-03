/* Générer un nombre aléatoire */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeDirPacman(e) {
    switch (e.key) {
        case 'z' || 37: // Haut
        case 'Z':
            pacman.checkUp();
            break;
        case 'q': // Gauche
        case 'Q':
            pacman.checkLeft()
            break;
        case 's': // Bas
        case 'S':
            pacman.checkDown()
            break;
        case 'd': // Droite
        case 'D':
            pacman.checkRight();
            break;
        default:
            break;
    }
  
    switch(event.keyCode) {
          case 37: // Gauche
            pacman.checkLeft();
            break;
          case 38: // Haut
            pacman.checkUp();
            break;
          case 39: // Droite
            pacman.checkRight();
            break;
          case 40: // Bas
            pacman.checkDown();
            break;
        }
  
  }