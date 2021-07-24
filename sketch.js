      var path,pathImg;
      var runner,runnerImg;
      var bomb,bombImg;
      var power,powerImg;
      var coin,coinImg;
      
      function preload(){
        runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
        pathImg = loadImage("path.png");
        powerImg = loadImage("power.png");
        bombImg = loadImage("bomb.png");
        coinImg = loadImage("coin.png");
        energyDrinkImg = loadImage("energyDrink.png");
      }

      function setup(){
        createCanvas(400,400);
        
        path = createSprite(200,200);
        path.addImage(pathImg);
        
        runner = createSprite(200,250,20,20);
        runner.addAnimation("running",runnerImg);
        runner.scale= 0.1;
        
        bomb = createSprite(50,50,30,30);
        bomb.addAnimation(bombImg);
        bomb.scale=0.2;

        power = createSprite(210,50,20,20);
        power.addImage(powerImg);
        power.scale = 0.2;
      }

      function draw() {
        background(0);

        path.velocityY = 13

        if(path.y > 400 ){
          path.y = height/2;
        }
        
        
        drawSprites();
      }
