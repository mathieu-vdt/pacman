class Ghost {

    x;
    y;
    direction = 0;
    className
    constructor(x = 14, y = 7, direction = 0, className = 'ghost1') {
        this.x = x
        this.y = y
        this.direction = direction
        this.className = className
    }

    afficheGhost(map){
        const elem = document.createElement('div')
        elem.className = this.className
        elem.style.gridRow = `${this.y} / ${this.y + 1}`
        elem.style.gridColumn = `${this.x} / ${this.x + 1}`
        map.appendChild(elem)
    }


    deplaceGhost() {
        if (this.direction == 0) { // right
            this.moveRight()
        } else if (this.direction == 1) { // down
            this.moveDown()
        } else if (this.direction == 2) { // left
            this.moveLeft()
        } else { // up
            this.moveUp()
        }
    }

    collisionGhost(mapTable) {
        if (this.x < 1) {
            this.x = mapTable[0].length + 1
        }
        if (this.x + 1 > mapTable[0].length) {
            this.x = 1
        }
        if (this.y < 1) {
            this.y = mapTable.length
        }
        if (this.y > mapTable.length) {
            this.y = 1
        }
      }
    

     /* Déplacements */
  moveLeft(){
    const findGhost = document.querySelector(`.${this.className}`);
    const currentX = parseInt(findGhost.style.gridColumn);
    let newX = currentX - 1;
  
    if (newX > 0) {
      const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
      if (targetCell && !targetCell.classList.contains('wall')) {
        findGhost.style.gridColumn = `${newX} / ${newX + 1}`;
        this.direction = 2;
        this.x--;
        
        findGhost.style.transform = 'scaleX(-1)'


      }else{
        this.direction = getRandomInt(4)
        this.deplaceGhost()
      }
    }
  }
  
  moveRight(){
    const findGhost = document.querySelector(`.${this.className}`);
    const currentX = parseInt(findGhost.style.gridColumn);
      let newX = currentX + 1;
  
      if (newX > 0) {
        const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
        if (targetCell && !targetCell.classList.contains('wall')) {
          findGhost.style.gridColumn = `${newX} / ${newX + 1}`;
          this.direction = 0;
          this.x++;
          
          findGhost.style.transform = 'rotate(0deg)'

        }else{
          this.direction = getRandomInt(4)
          this.deplaceGhost()
        }
      }
  }
  
   moveUp(){
    const findGhost = document.querySelector(`.${this.className}`);
    const currentY = parseInt(findGhost.style.gridRow);
    const newY = currentY - 1;
    
    if (newY > 0) {
        const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
        if (targetCell && !targetCell.classList.contains('wall')) {
          findGhost.style.gridRow = `${newY} / ${newY + 1}`;
          this.direction = 3;
          this.y--;
            
        }else{
          this.direction = getRandomInt(4)
          this.deplaceGhost()
        }
    }
  }
  
   moveDown(){
    const findGhost = document.querySelector(`.${this.className}`);
    const currentY = parseInt(findGhost.style.gridRow);
    const newY = currentY + 1;
  
    if (newY > 0) {
      const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
      if (targetCell && !targetCell.classList.contains('wall')) {
        findGhost.style.gridRow = `${newY} / ${newY + 1}`;
        this.direction = 1;
        this.y++;
  
      }else{
        this.direction = getRandomInt(4)
        this.deplaceGhost()
      }
    }
  }
}

