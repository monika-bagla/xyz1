function infoSprites()
{
    sunInfo=createSprite(-13630,displayHeight / 2-350,10,10)
    sunInfo.addImage(sunInfoImg)
    sunInfo.scale=1
    sunInfo.visible=false

  meInfo=createSprite(-10820,displayHeight / 2-300,10,10)
  meInfo.addImage(meInfoImg)
  meInfo.scale=0.43
  meInfo.visible=false
  
  veInfo=createSprite(-7790,displayHeight / 2-350,10,10)
  veInfo.addImage(veInfoImg)
  veInfo.scale=0.43
  veInfo.visible=false

  eaInfo=createSprite(-4790,displayHeight / 2-350,10,10)
  eaInfo.addImage(eaInfoImg)
  eaInfo.scale=0.43  
  eaInfo.visible=false
  
  maInfo=createSprite(-1840,displayHeight / 2-350,10,10)
  maInfo.addImage(maInfoImg)
  maInfo.scale=0.43 
  maInfo.visible=false
  
  juInfo=createSprite(1320,displayHeight / 2-350,10,10)
  juInfo.addImage(juInfoImg)
  juInfo.scale=0.43
  juInfo.visible=false

  saInfo=createSprite(4360,displayHeight / 2-350,10,10)
  saInfo.addImage(saInfoImg)
  saInfo.scale=0.43
  saInfo.visible=false

  urInfo=createSprite(7200,displayHeight / 2-350,10,10)
  urInfo.addImage(urInfoImg)
  urInfo.scale=0.43
  urInfo.visible=false

  neInfo=createSprite(10200,displayHeight / 2-350,10,10)
  neInfo.addImage(neInfoImg)
  neInfo.scale=0.43
  neInfo.visible=false
}

function Information()
{ 
  if(gameState===2)
  {
        
        if(spaceCraft.x>-14500&&spaceCraft.x<-13500){
            sunInfo.visible=true
        }
        else{
            sunInfo.visible=false
        }
        if(spaceCraft.x>-11500&&spaceCraft.x<-10500){
        meInfo.visible=true
        merNt.visible=true
        }
        else{
        meInfo.visible=false
        merNt.visible=false
        }

        if(spaceCraft.x>-8500&&spaceCraft.x<-7500){
        veInfo.visible=true
        venNt.visible=true
        }
        else{
        veInfo.visible=false
        venNt.visible=false
        }
        
        if(spaceCraft.x>-5500&&spaceCraft.x<-4500){
        eaInfo.visible=true
        earNt.visible=true
        }
        else{
        eaInfo.visible=false
        earNt.visible=false
        }

        if(spaceCraft.x>-2500&&spaceCraft.x<-1500){
        maInfo.visible=true
        marNt.visible=true
        }
        else{
        maInfo.visible=false
        marNt.visible=false
        }
        
        if(spaceCraft.x>500&&spaceCraft.x<1500){
        juInfo.visible=true
        jupNt.visible=true
        }
        else{
        juInfo.visible=false
        jupNt.visible=false
        }
        
        if(spaceCraft.x>3500&&spaceCraft.x<4500){
        saInfo.visible=true
        satNt.visible=true
        }
        else{
        saInfo.visible=false
        satNt.visible=false
        }
        
        if(spaceCraft.x>6500&&spaceCraft.x<7500){
        urInfo.visible=true
        uraNt.visible=true
        }
        else{
        urInfo.visible=false
        uraNt.visible=false
        }
        
        if(spaceCraft.x>9500&&spaceCraft.x<10500){
        neInfo.visible=true
        nepNt.visible=true
        }
        else{
        neInfo.visible=false
        nepNt.visible=false
        }
  }
}

