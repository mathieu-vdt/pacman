class Pacman {
    x;
    y;
    direction = 0;
    constructor() {
        this.x = 1
        this.y = 11
        this.direction = 0
    }

    affichePacman(map){
      const elem = document.createElement('div')
      elem.className = 'pacman'
      elem.style.gridRow = `${pacman.y} / ${pacman.y + 1}`
      elem.style.gridColumn = `${pacman.x} / ${pacman.x + 1}`
      map.appendChild(elem)
    }

      deplacePacman() {
        if (this.direction == 0) {
            this.moveRight()
        } else if (this.direction == 1) {
            this.moveDown()
        } else if (this.direction == 2) {
            this.moveLeft()
        } else {
            this.moveUp()
        }
      }
      
      collisionPacman() {
        if (this.x <= 1) {
            this.x = mapTable[0].length
        }else if (this.x >= mapTable[0].length) {
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
        const findPacman = document.querySelector('.pacman');
        const currentX = parseInt(findPacman.style.gridColumn);
        let newX = currentX - 1;
      
        if (newX > 0) {
          const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
          if (targetCell && !targetCell.classList.contains('wall')) {
            findPacman.style.gridColumn = `${newX} / ${newX + 1}`;
            this.x--;
            
            mapTable[this.y - 1][this.x - 1] = 1
            findPacman.style.transform = 'scaleX(-1)'
            // targetCell.className = 'empty'
          }
        }
      }
      
      moveRight(){
        const findPacman = document.querySelector('.pacman');
          const currentX = parseInt(findPacman.style.gridColumn);
          let newX = currentX + 1;
      
          if (newX > 0) {
            const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
            if (targetCell && !targetCell.classList.contains('wall')) {
              findPacman.style.gridColumn = `${newX} / ${newX + 1}`;
              this.x++
              
              mapTable[this.y - 1][this.x - 1] = 1
              
              findPacman.style.transform = 'rotate(0deg)'
              targetCell.className = 'empty'
              
            }
          }
          
      }
      
      moveUp(){
        const findPacman = document.querySelector('.pacman');
        const currentY = parseInt(findPacman.style.gridRow);
        const newY = currentY - 1;
        
        if (newY > 0) {
            const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
            if (targetCell && !targetCell.classList.contains('wall')) {
                findPacman.style.gridRow = `${newY} / ${newY + 1}`;
                this.y--;
                
                mapTable[this.y - 1][this.x - 1] = 1
                findPacman.style.transform = 'rotate(-90deg)'
                // targetCell.className = 'empty'
            }
        }
      }
      
      moveDown(){
        const findPacman = document.querySelector('.pacman');
        const currentY = parseInt(findPacman.style.gridRow);
        const newY = currentY + 1;
      
        if (newY > 0) {
          const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
          if (targetCell && !targetCell.classList.contains('wall')) {
            findPacman.style.gridRow = `${newY} / ${newY + 1}`;
            this.y++;
            
            
            mapTable[this.y - 1][this.x - 1] = 1
            findPacman.style.transform = 'rotate(90deg)'
            targetCell.className = 'empty'
          }
        }
      }
    
    
      /* Traitement des déplacements */
    
      checkLeft(){
        const findPacman = document.querySelector('.pacman');
        const currentX = parseInt(findPacman.style.gridColumn);
        let newX = currentX - 1;
      
        if (newX > 0) {
          const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
          if (targetCell && !targetCell.classList.contains('wall')) {
            findPacman.style.gridColumn = `${newX} / ${newX + 1}`;
            this.direction = 2;
            
            findPacman.style.transform = 'scaleX(-1)'
            targetCell.className = 'empty'
          }
        }
      }
    
      checkRight(){
        const findPacman = document.querySelector('.pacman');
          const currentX = parseInt(findPacman.style.gridColumn);
          let newX = currentX + 1;
      
          if (newX > 0) {
            const targetCell = document.querySelector(`[style="grid-area: ${this.y} / ${newX} / ${this.y + 1} / ${newX + 1};"]`);
            if (targetCell && !targetCell.classList.contains('wall')) {
              findPacman.style.gridColumn = `${newX} / ${newX + 1}`;
              this.direction = 0;
              
              findPacman.style.transform = 'rotate(0deg)'
              targetCell.className = 'empty'
            }
          }
      }
    
      checkUp(){
        const findPacman = document.querySelector('.pacman');
        const currentY = parseInt(findPacman.style.gridRow);
        const newY = currentY - 1;
        
        if (newY > 0) {
            const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
            if (targetCell && !targetCell.classList.contains('wall')) {
                findPacman.style.gridRow = `${newY} / ${newY + 1}`;
                this.direction = 3;
                
                findPacman.style.transform = 'rotate(-90deg)'
                targetCell.className = 'empty'
            }
        }
      }
    
      checkDown(){
        const findPacman = document.querySelector('.pacman');
        const currentY = parseInt(findPacman.style.gridRow);
        const newY = currentY + 1;
      
        if (newY > 0) {
          const targetCell = document.querySelector(`[style="grid-area: ${newY} / ${this.x} / ${newY + 1} / ${this.x + 1};"]`);
          if (targetCell && !targetCell.classList.contains('wall')) {
            findPacman.style.gridRow = `${newY} / ${newY + 1}`;
            this.direction = 1;
      
            findPacman.style.transform = 'rotate(90deg)'
            targetCell.className = 'empty'
          }
        }
      }
}

