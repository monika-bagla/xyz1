class Planet
{
    constructor(x,y,w,h)
    {
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.s=createSprite(this.x,this.y,this.w,this.h)
    }
    display()
    {
        drawSprite()
    }
    image(xyz)
    {
        this.s.addImage("abc",xyz)
    }
    hide()
    {
        this.s.visible=false
    }    
    unHide()
    {
        this.s.visible=true
    }
    scale(abcs)
    {
        this.s.scale=abcs
    }
}
function classObject()
{
  sun = new Planet(-14000, displayHeight / 2 -120, 20)  
  sun.image(sunImg)  
  sun.scale(1.3)   
  sun.hide()   

  mercury = new Planet(-11000, displayHeight / 2-120, 20)
  mercury.image(mercuryImg)
  mercury.scale(0.7)
  mercury.hide()

  venus = new Planet(-8000, displayHeight / 2-120, 20)   
  venus.image(venusImg)
  venus.scale(1.12)
  venus.hide()

  earth = new Planet(-5000, displayHeight / 2-120, 20)  
  earth.image(earthImg)
  earth.scale(1)
  earth.hide()

  mars = new Planet(-2000, displayHeight / 2-120, 20) 
  mars.image(marsImg)
  mars.scale(0.9)
  mars.hide()

  jupiter = new Planet(1000, displayHeight / 2-120, 20)   
  jupiter.image(jupiterImg)
  jupiter.scale(1.3)
  jupiter.hide()

  saturn = new Planet(4000, displayHeight / 2-120, 20)  
  saturn.image(saturnImg)
  saturn.scale(1)
  saturn.hide()

  uranus = new Planet(7000, displayHeight / 2-120, 20)  
  uranus.image(uranusImg)
  uranus.scale(1.7)
  uranus.hide()

  neptune = new Planet(10000, displayHeight / 2-120, 20)  
  neptune.image(neptuneImg)
  neptune.scale(1.2)
  neptune.hide()
}