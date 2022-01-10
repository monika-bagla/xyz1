function keyPressed() {
    if (gameState===2){
    if (keyCode === 39) {
      spaceCraft.velocityX=200
      spaceCraft.changeAnimation("spaceCraft", spaceCraftImg)  
        if(spaceCraft.isTouching(invisibleGround2)){
          spaceCraft.velocityX=0
        }
    }
    if (keyCode === 37) {
      spaceCraft.velocityX = -200
      spaceCraft.addImage("rev", spaceCraftImgRev)
      spaceCraft.changeAnimation("rev", spaceCraftImgRev)
        if(spaceCraft.isTouching(invisibleGround1)){
          spaceCraft.velocityX=0
        }
    }
        
  }
}
  function keyReleased() {
    if(gameState===2){
    if (keyCode === 39) {
      spaceCraft.velocityX = 0
      spaceCraft.changeAnimation("spaceCraft", spaceCraftImg)  
    }
    
    if (keyCode === 37) {
      spaceCraft.velocityX = 0
      spaceCraft.addImage("rev", spaceCraftImgRev)
      spaceCraft.changeAnimation("rev", spaceCraftImgRev)
    }
    
  }
  }