function CACTUS(){
	this.x = 1000;
	this.en = 30;	
	this.uzunluq = random()*20+20;
	this.y = 400-this.uzunluq;
	this.col = 'green';
	

	this.show = function(){
		fill(this.col);
		rect(this.x, this.y, this.en, this.uzunluq);
	}

	this.update = function(){
		this.x -= 10;
	}

	this.check = function(){
		if(this.x<-500)
		{
			this.x = 1000;
			this.uzunluq = random()*40+80;
			this.y = 400-this.uzunluq;
			this.col = 'green';
		}
		
	}

	this.deydi = function(diny){
		if(this.x<140 && diny>this.y-100&&this.x>50){
			return true;
		}
	}
}