var dog,dogImg,happydogImg;
var database;
var FoodStock;

function preload (){

dogImg = loadImage("images/dogImg.png")
happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

dog = createSprite(250,250);
dog.addImage(dogImg);
dog.scale=0.2;

database = firebase.database();

FoodStock = database.ref("Food");
FoodStock.on("value",readStock);


}

function draw() {  

background("yellow");

if(keyWentDown(UP_ARROW)){

writeStock(FoodS);
dog.addImage(happyDogImg)
}

  drawSprites();


  fill("red");
  textSize(20);
  text("Press UP_ARROW key to feed",100,50);
  text("Food: "+foodS,100,100)
}

function readStock(data){

  foodS = data.val();
}

function writeStock(x){

  x = x-1;
  
  database.ref('/').update({

    Food:x
  })
}