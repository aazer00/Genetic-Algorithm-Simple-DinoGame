var dino = [];
var cactus = [];
var dino_size = 100;
var ga;
var nb;
var count = 0;
function setup() {
  createCanvas(800,400);

  ga = new GA();
  for(i = 0; i<dino_size; i++)
  {
  	dino[i] = new DINO();
  	dino[i].brain = new neural_network();
  	dino[i].brain.init([2,5,5,3,2]);
  }
  
  for (var i = 0; i <3; i++) {
  	cactus[i] = new CACTUS();
  }
  cactus[1].x = 1500;
  cactus[2].x = 2000;
  nb = dino_size;
 
}

function draw() {
  background(255);

  
  for(i = 0; i<dino_size; i++)
  {
  	if(dino[i].alive)
  	{
  		dino[i].show();
  		dino[i].update();
	 	dino[i].score++;
	 	if(cactus[count].deydi(dino[i].y))
	  	{
	  		
	  		nb--;
	  		//console.log(i, nb);
	  		dino[i].alive = false;
	  	}

	  	dino[i].brain.feedfoward([(cactus[count].x-80)/800, cactus[count].y/800]);
	  	//console.log(dino[i].get_result);
	  	if(dino[i].brain.layers[dino[0].brain.layers.length-1]._data[0]>dino[i].brain.layers[dino[0].brain.layers.length-1]._data[1] && dino[i].jump_perm == true)
	  	{
	  		dino[i].jump();
	  	}
  	}
  	
  }
  //dino[0].brain.feedfoward([0.4, 0.6]);
  for (var i = 0; i <3; i++) {
  	cactus[i].show();
  	cactus[i].update();
  	cactus[i].check();
  	
  }
  if(cactus[count].x<50)
  {
  	count++;
  	if(count==3) count = 0;
  }

  if(nb <= 0) restart();
  //console.log(count);
  /*if(keyIsDown(UP_ARROW) && dino.jump_perm == true)
  {
  	dino.jump();
  }*/
  
}

/*function keyPressed(){
	if(keyCode == UP_ARROW && dino.jump_perm == true)
	{
		dino.jump();
	}
}*/

function restart(){
	/*for(i = 0; i<100; i++)
    {
  	dino[i] = new DINO();
  	dino[i].brain = new neural_network();
  	dino[i].brain.init([2,5,5,3,2]);
    }*/

	

	/////////////////////////////////////////////
	dino.sort(function(a, b){return a.score - b.score});

	var count = 0;
	var cem = 0;
	var new_generations = [];

	for(var i = 80; i<dino_size; i++)
   {
   	cem += dino[i].score;

   }

	
	for(var i = 0; i<dino_size; i++)
   {
   	var parent1;
   	var parent2;

   	var n1 = (Math.floor(Math.random() * (cem+1)));
   	var ncem = 0;
	for(var j = 80; j<dino_size; j++)
	{
	   ncem += dino[j].score;
	   if(ncem>=n1) {parent1 = dino[j]; break;}
	}


	var n2 = (Math.floor(Math.random() * (cem+1)));
	var ncem = 0;
	for(var j = 80; j<dino_size; j++)
	{
	   ncem += dino[j].score;
	   if(ncem>=n2) {parent2 = dino[j]; break;}
	}

   	new_generations[i] = new DINO();
   	new_generations[i].brain = new neural_network();
   	new_generations[i].brain.init([2,5,5,3,2]);
   	console.log(parent1.score, parent2.score);
   	new_generations[i] = ga.crossover(parent1,parent2)

   }
    dino = new_generations;
    scor = 0;
    cactus = [];
    nb = dino_size;

	for (var i = 0; i <3; i++) {
  	cactus[i] = new CACTUS();
	}
	cactus[1].x = 1500;
	cactus[2].x = 2000;
	count = 0;
	
}