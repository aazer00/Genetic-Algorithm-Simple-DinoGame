function DINO() {
	this.x = 80;
	this.en = 60;
	this.y = 300;
	this.uzunluq = 100;
	this.gravity = 1;
	this.jump_velocity = 0;
	this.jump_perm = true;
	this.brain;
	this.score = 0;
	this.alive = true;

	this.show = function(){
		fill('rgba(0,255,0, 0.10)');
		rect(this.x, this.y ,this.en, this.uzunluq);
	}

	this.update = function(){
		this.y -= this.jump_velocity;
		this.jump_velocity -= this.gravity;
		if(this.y>300) 
		{
			this.y = 300;
			this.jump_perm = true;

		}
	}

	this.jump = function(){

		this.jump_velocity = 10;
		if(this.y<200)
		this.jump_perm = false;
	}

	this.get_result = function(){
		return this.brain.layers[this.brain.layers.length-1]._data;
	}
}