var bgImg, bg;
var gameState = 2
var startImgSprite, startImg;
var launchingSpaceCraft, launchingSpaceCraftImg;
var spaceCraft, spaceCraftImg, spaceCraftImgRev;
var sun, sunImg
var mercury, mercuryImg
var venus, venusImg
var earth, earthImg
var mars, marsImg
var jupiter, jupiterImg
var saturn, saturnImg
var uranus, uranusImg
var neptune, neptuneImg
var invisibleGround1
var invisibleGround2
var sunInfo,meInfo,veInfo,eaInfo,maInfo,juInfo,saInfo,urInfo,neInfo;
var sunInfoImg,meInfoImg,veInfoImg,eaInfoImg,maInfoImg,juInfoImg,saInfoImg,urInfoImg,neInfoImg;
var bgSound
var sunNtImg,merNtImg,venNtImg,earNtImg,marNtImg,jupNtImg,satNtImg,uraNtImg,nepNtImg
var sunNt,merNt,venNt,earNt,marNt,jupNt,satNt,uraNt,nepNt
var arrowRight,arrowLeft,arrowLeftImg,arrowRightImg
function preload() {
  bgImg = loadImage("Images/background.jpg")
  startImg = loadImage("Images/StartingImgText.jpg")
  launchingSpaceCraftImg = loadImage("Images/rocket1.png")
  spaceCraftImg = loadImage("Images/spacecraft2.png")
  spaceCraftImgRev = loadImage("Images/spacecraftRev.png")

  sunImg = loadImage("Images/sun.png")
  bgSound=loadSound("BackgroundSound.mp3")
  mercuryImg = loadImage("Images/mercury.png")
  venusImg = loadImage("Images/venus.png")
  earthImg = loadImage("Images/earth.png")
  marsImg = loadImage("Images/mars.png")
  jupiterImg = loadImage("Images/jupiter.png")
  saturnImg = loadImage("Images/saturn.png")
  uranusImg = loadImage("Images/uranus.png")
  neptuneImg = loadImage("Images/neptune.png")

  sunInfoImg = loadImage("info/Sun.png")
  meInfoImg = loadImage("info/Mercury.png")
  veInfoImg = loadImage("info/Venus.png")
  eaInfoImg = loadImage("info/Earth.png")
  maInfoImg = loadImage("info/Mars.png")
  juInfoImg = loadImage("info/Jupiter.png")
  saInfoImg = loadImage("info/Saturn.png")
  urInfoImg = loadImage("info/Uranus.png")
  neInfoImg = loadImage("info/Neptune.png")

  arrowLeftImg=loadImage("Images/Arrow_Left.png")
  arrowRightImg=loadImage("Images/Arrow_Right.png")
  
  sunNtImg=loadImage("NameTag/Sun.png")
  merNtImg=loadImage("NameTag/Mercury.png")
  venNtImg=loadImage("NameTag/Venus.png")
  earNtImg=loadImage("NameTag/Earth.png")
  marNtImg=loadImage("NameTag/Mars.png")
  jupNtImg=loadImage("NameTag/Jupiter.png")
  satNtImg=loadImage("NameTag/Saturn.png")
  uraNtImg=loadImage("NameTag/Uranus.png")
  nepNtImg=loadImage("NameTag/Neptune.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight); //canvas size is equal to the screen size
  
  bg = createSprite(windowWidth,windowHeight-470 , 500, 20);  //for background
  bg.addImage("stars", bgImg)   //bg image loaded in function preload
  bg.scale = 2.1               //making the pic bigger
  bg.visible = false            //making the space img invisible in gamestate 1&2
  
  startImgSprite = createSprite(displayWidth / 2, displayHeight / 2, displayWidth ,displayHeight)  //introductory img in gamestate 0
  startImgSprite.addImage("start", startImg)      //adding the img loaded in function preload
  startImgSprite.scale = 2    //making the img bigger
  startImgSprite.visible = false  //making the img invisible

  launchingSpaceCraft = createSprite(300, 700, 10, 10)
  launchingSpaceCraft.addImage("launch", launchingSpaceCraftImg)
  launchingSpaceCraft.scale = 0.75
  launchingSpaceCraft.visible = false

  infoSprites()

  classObject()
  spaceCraft = createSprite(-5000, displayHeight / 2-120, 10, 10) //main sprite in the game
  spaceCraft.addImage("spaceCraft", spaceCraftImg)
  spaceCraft.visible = false
  //arrowRight=createSprite(spaceCraft.x,spaceCraft.y,100,100)
 // obstacleSprites()

  invisibleGround1=createSprite(-16000,0,0,10000)
  invisibleGround1.visible=false
  invisibleGround2=createSprite(11600,0,0,10000)
  invisibleGround2.visible=false
  bgSound.play();
  
}

function draw() {
  background("black")
  
 // bgSound.setVolume(0.5)*/
  /*if (gameState === 0) {        //in gamestate 0 the introductory img should
    startImgSprite.visible = true
  }
  if (keyCode === 13) {
    startImgSprite.visible = false
    launchingSpaceCraft.visible = true
    launchingSpaceCraft.velocityX = 20
    launchingSpaceCraft.velocityY = -16
    gameState = 1
    if (launchingSpaceCraft.y < -250) {
      gameState = 2
    }
  }*/
  NameTag()
  if (gameState === 2) {
    if (!bgSound.isPlaying()) {

      bgSound.play();
  
      //bgSound.setVolume(0.1);
    }
    visible()
    camera.x = spaceCraft.x
    if (camera.x < displayWidth - 10) {
      bg.x = -2500
    }
    
  }
  Information()
  if(spaceCraft.isTouching(invisibleGround1)||spaceCraft.isTouching(invisibleGround2)){
    spaceCraft.velocityX=0
  }
  if(frameCount%60===0){
  
  }
  drawSprites();
}
