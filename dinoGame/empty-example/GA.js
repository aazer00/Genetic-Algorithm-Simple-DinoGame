function GA(){
	
	this.crossover = function(b1,b2){
		var new_dino = new DINO();
		new_dino.brain = new neural_network();
		new_dino.brain.init([2,5,5,3,2]);
		new_dino.brain.weights[0] = b1.brain.weights[0];
		new_dino.brain.weights[1] = b1.brain.weights[1];
		new_dino.brain.weights[2] = b2.brain.weights[2];
		new_dino.brain.weights[3] = b2.brain.weights[3];

		return new_dino;
	}
}