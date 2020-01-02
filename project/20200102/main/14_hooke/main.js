(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,113);


(lib.thickspring = function() {
	this.initialize(img.thickspring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,455);


(lib.thinspring = function() {
	this.initialize(img.thinspring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,455);


(lib.weight_1 = function() {
	this.initialize(img.weight_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,269);


(lib.weight_2 = function() {
	this.initialize(img.weight_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,221);


(lib.weight_3 = function() {
	this.initialize(img.weight_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,221);


(lib.weight_4 = function() {
	this.initialize(img.weight_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,165);


(lib.weight_green = function() {
	this.initialize(img.weight_green);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,199);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.unit_spring_thin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thinspring();
	this.instance.parent = this;
	this.instance.setTransform(-25,0,0.5882,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unit_spring_thin, new cjs.Rectangle(-25,0,50,227.5), null);


(lib.unit_spring_thick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thickspring();
	this.instance.parent = this;
	this.instance.setTransform(-25,0,0.3185,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.unit_spring_thick, new cjs.Rectangle(-25,0,50,227.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,131,113), null);


(lib.mc_weight5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.weight_green();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-49.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_weight5, new cjs.Rectangle(-28.5,-49.7,57,99.5), null);


(lib.mc_weight4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.weight_4();
	this.instance.parent = this;
	this.instance.setTransform(-31,-41.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_weight4, new cjs.Rectangle(-31,-41.2,62,82.5), null);


(lib.mc_weight3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.weight_3();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-55.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_weight3, new cjs.Rectangle(-35.5,-55.2,71,110.5), null);


(lib.mc_weight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.weight_2();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-55.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_weight2, new cjs.Rectangle(-35.5,-55.2,71,110.5), null);


(lib.mc_weight1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.weight_1();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-67.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_weight1, new cjs.Rectangle(-48.5,-67.2,97,134.5), null);


(lib.spring_thin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
		this.parent.text_thin1.visible = true;
		this.parent.mc_text.text="伸長量：300mm";
		this.parent.mc_weight1.x = this.x + 2.25;
		this.parent.mc_weight1.y = 109+430.75;
		this.parent.mc_weight1.visible = true;
	}
	this.frame_100 = function() {
		this.stop();
		this.parent.text_thin2.visible = true;
		this.parent.mc_text.text="伸長量：120mm";
		this.parent.mc_weight2 .x = this.x + 3.75;
		this.parent.mc_weight2.y = 109+329.7;
		this.parent.mc_weight2.visible = true;
	}
	this.frame_150 = function() {
		this.stop();
		this.parent.text_thin3.visible = true;
		this.parent.mc_text.text="伸長量：132mm";
		this.parent.mc_weight3.x = this.x + 3.75;
		this.parent.mc_weight3.y = 109+336.7;
		this.parent.mc_weight3.visible = true;
	}
	this.frame_200 = function() {
		this.stop();
		this.parent.text_thin4.visible = true;
		this.parent.mc_text.text="伸長量：60mm";
		this.parent.mc_weight4.x = this.x + 2.25;
		this.parent.mc_weight4.y = 109+285.7;
		this.parent.mc_weight4.visible = true;
	}
	this.frame_250 = function() {
		this.stop();
		this.parent.text_thin5.visible = true;
		this.parent.mc_text.text="伸長量：90mm";
		this.parent.mc_weight5.x = this.x + 2.25;
		this.parent.mc_weight5.y = 109+308.7;
		this.parent.mc_weight5.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(50).call(this.frame_100).wait(50).call(this.frame_150).wait(50).call(this.frame_200).wait(50).call(this.frame_250).wait(1));

	// Layer_1
	this.instance = new lib.mc_weight1();
	this.instance.parent = this;
	this.instance.setTransform(2.25,282.7);
	this.instance._off = true;

	this.instance_1 = new lib.mc_weight2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.75,271.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.mc_weight3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.75,271.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.mc_weight4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.25,256.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.mc_weight5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.25,263.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:430.75},49,cjs.Ease.bounceOut).to({_off:true},1).wait(200));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({y:329.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({y:336.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({y:285.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(201).to({_off:false},0).to({y:308.7},49,cjs.Ease.bounceOut).wait(1));

	// Layer_3
	this.instance_5 = new lib.unit_spring_thin();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,113.8,1,1,0,0,0,0,113.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:0,y:0},0).to({scaleY:1.6593},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.2637},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.2901},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.1318},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.1956},49,cjs.Ease.bounceOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,0,97,498);


(lib.spring_thick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
		this.parent.text_thick1.visible = true;
		this.parent.mc_text.text="伸長量：200mm";
		this.parent.mc_weight1.x = this.x + 2.25;
		this.parent.mc_weight1.y = 109+380.75;
		this.parent.mc_weight1.visible = true;
	}
	this.frame_100 = function() {
		this.stop();
		this.parent.text_thick2.visible = true;
		this.parent.mc_text.text="伸長量：80mm";
		this.parent.mc_weight2 .x = this.x + 3.75;
		this.parent.mc_weight2.y = 109+309.7;
		this.parent.mc_weight2.visible = true;
	}
	this.frame_150 = function() {
		this.stop();
		this.parent.text_thick3.visible = true;
		this.parent.mc_text.text="伸長量：88mm";
		this.parent.mc_weight3.x = this.x + 3.75;
		this.parent.mc_weight3.y = 109+314.7;
		this.parent.mc_weight3.visible = true;
	}
	this.frame_200 = function() {
		this.stop();
		this.parent.text_thick4.visible = true;
		this.parent.mc_text.text="伸長量：40mm";
		this.parent.mc_weight4.x = this.x + 2.25;
		this.parent.mc_weight4.y = 109+275.70;
		this.parent.mc_weight4.visible = true;
	}
	this.frame_250 = function() {
		this.stop();
		this.parent.text_thick5.visible = true;
		this.parent.mc_text.text="伸長量：60mm";
		this.parent.mc_weight5.x = this.x + 2.25;
		this.parent.mc_weight5.y = 109+293.7;
		this.parent.mc_weight5.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(50).call(this.frame_100).wait(50).call(this.frame_150).wait(50).call(this.frame_200).wait(50).call(this.frame_250).wait(1));

	// Layer_3
	this.instance = new lib.mc_weight1();
	this.instance.parent = this;
	this.instance.setTransform(2.25,282.7);
	this.instance._off = true;

	this.instance_1 = new lib.mc_weight2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.75,271.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.mc_weight3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.75,271.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.mc_weight4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(2.25,256.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.mc_weight5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.25,263.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:380.75},49,cjs.Ease.bounceOut).to({_off:true},1).wait(200));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({y:309.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101).to({_off:false},0).to({y:314.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(151).to({_off:false},0).to({y:275.7},49,cjs.Ease.bounceOut).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(201).to({_off:false},0).to({y:293.7},49,cjs.Ease.bounceOut).wait(1));

	// Layer_1
	this.instance_5 = new lib.unit_spring_thick();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,113.8,1,1,0,0,0,0,113.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:0,y:0},0).to({scaleY:1.4396},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.1758},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.1934},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.0879},49,cjs.Ease.bounceOut).wait(1).to({scaleY:1},0).to({scaleY:1.1318},49,cjs.Ease.bounceOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.2,0,97,448);


(lib.mc_hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(65.5,56.5,1,1,0,0,0,65.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_hit, new cjs.Rectangle(0,0,131,113), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var stage = new createjs.Stage("canvas");
		createjs.Touch.enable(stage);
		
		var main = this;
		var pt1,pt2,pt3,pt4,pt5;
		var area1,area2;
		//
		main.text_thick1.visible = false;
		main.text_thick2.visible = false;
		main.text_thick3.visible = false;
		main.text_thick4.visible = false;
		main.text_thick5.visible = false;
		
		main.text_thin1.visible = false;
		main.text_thin2.visible = false;
		main.text_thin3.visible = false;
		main.text_thin4.visible = false;
		main.text_thin5.visible = false;
		//
		//x,y,w,h
		area1 = [main.hit_1.x , main.hit_1.y, main.hit_1.getBounds().width,main.hit_1.getBounds().height];
		area2 = [main.hit_2.x , main.hit_2.y, main.hit_2.getBounds().width,main.hit_2.getBounds().height];
		
		pt1 = new createjs.Point(main.mc_weight1.x,main.mc_weight1.y);
		pt2 = new createjs.Point(main.mc_weight2.x,main.mc_weight2.y);
		pt3 = new createjs.Point(main.mc_weight3.x,main.mc_weight3.y);
		pt4 = new createjs.Point(main.mc_weight4.x,main.mc_weight4.y);
		pt5 = new createjs.Point(main.mc_weight5.x,main.mc_weight5.y);
		
		// stage.on("stagemousedown", function(evt) {
		// console.log("the canvas was clicked at "+evt.stageX+","+evt.stageY);
		// 	 console.log("rawX/Y: "+evt.rawX+","+evt.rawY); 
		// })
		console.log(main.mc_weight1.x);
		var mc1 = new lib.mc_weight1();
		main.addChild(mc1);
		
		mc1.on("pressmove", function(evt) {
			console.log("mc");
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = evt.currentTarget.globalToLocal(evt.stageX, evt.stageY);
		    this.x = p.x ;
		    this.y = p.y ;
			console.log(this.x);
			//evt.currentTarget.x = p.x;
			//evt.currentTarget.y = p.y;
					
		});
		
		
		main.mc_weight1.mouseChildren = false;
		
		main.mc_weight1.on('mousedown', function(evt) {
			
		    var ct = evt.currentTarget,
		        local = ct.globalToLocal(evt.stageX, evt.stageY),
		        nx = ct.regX - local.x,
		        ny = ct.regY - local.y;
		    //set the new regX/Y
		    ct.regX = local.x;
		    ct.regY = local.y;
		    //adjust the real-position, otherwise the new regX/Y would cause a jump
		    ct.x -= nx;
		    ct.y -= ny;
			console.log("ct.x",ct.x);
		});
		
		main.mc_weight1.on("pressmove", function(evt) {
			
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = evt.currentTarget.globalToLocal(evt.stageX, evt.stageY);
		    this.x = p.x ;
		    this.y = p.y ;
			//evt.currentTarget.x = p.x;
			//evt.currentTarget.y = p.y;
					
		});
		main.mc_weight1.on("pressup", function(evt) { 
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				//console.log("hit");
				evt.currentTarget.visible = false;
				main.sp_thin.gotoAndPlay(2);
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				//console.log("hit2");
				evt.currentTarget.visible = false;
				main.sp_thick.gotoAndPlay(1);
			}
			else{
				console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt1.x;
				evt.currentTarget.y = pt1.y;
			}
		});
		//
		main.mc_weight2.on("pressmove", function(evt) {
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		});
		main.mc_weight2.on("pressup", function(evt) { 
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				//console.log("hit");
				evt.currentTarget.visible = false;
				main.sp_thin.gotoAndPlay(52);
				console.log(main.sp_thin);
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				//console.log("hit2");
				evt.currentTarget.visible = false;
				main.sp_thick.gotoAndPlay(51);
			}
			else{
				console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt2.x;
				evt.currentTarget.y = pt2.y;
			}
		});
		//
		main.mc_weight3.on("pressmove", function(evt) {
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		});
		main.mc_weight3.on("pressup", function(evt) { 
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				//console.log("hit");
				evt.currentTarget.visible = false;
				main.sp_thin.gotoAndPlay(102);
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				//console.log("hit2");
				evt.currentTarget.visible = false;
				main.sp_thick.gotoAndPlay(101);
			}
			else{
				//console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt3.x;
				evt.currentTarget.y = pt3.y;
			}
		});
		//
		main.mc_weight4.on("pressmove", function(evt) {
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		});
		main.mc_weight4.on("pressup", function(evt) { 
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				//console.log("hit");
				evt.currentTarget.visible = false;
				main.sp_thin.gotoAndPlay(152);
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				//console.log("hit2");
				evt.currentTarget.visible = false;
				main.sp_thick.gotoAndPlay(151);
			}
			else{
				console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt4.x;
				evt.currentTarget.y = pt4.y;
			}
		});
		//
		main.mc_weight5.on("pressmove", function(evt) {
			reset();
			main.sp_thin.gotoAndStop(0);
			main.sp_thick.gotoAndStop(0);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		});
		main.mc_weight5.on("pressup", function(evt) { 
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				//console.log("hit");
				evt.currentTarget.visible = false;
				main.sp_thin.gotoAndPlay(202);
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				//console.log("hit2");
				evt.currentTarget.visible = false;
				main.sp_thick.gotoAndPlay(201);
			}
			else{
				console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt5.x;
				evt.currentTarget.y = pt5.y;
			}
		});
		function reset(){
			main.mc_weight1.visible = true;
			main.mc_weight2.visible = true;
			main.mc_weight3.visible = true;
			main.mc_weight4.visible = true;
			main.mc_weight5.visible = true;
			main.mc_weight1.x = pt1.x;
			main.mc_weight2.x = pt2.x;
			main.mc_weight3.x = pt3.x;
			main.mc_weight4.x = pt4.x;
			main.mc_weight5.x = pt5.x;
			main.mc_weight1.y = pt1.y;
			main.mc_weight2.y = pt2.y;
			main.mc_weight3.y = pt3.y;
			main.mc_weight4.y = pt4.y;
			main.mc_weight5.y = pt5.y;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.mc_weight5 = new lib.mc_weight5();
	this.mc_weight5.name = "mc_weight5";
	this.mc_weight5.parent = this;
	this.mc_weight5.setTransform(472.5,698.75);

	this.mc_weight4 = new lib.mc_weight4();
	this.mc_weight4.name = "mc_weight4";
	this.mc_weight4.parent = this;
	this.mc_weight4.setTransform(384,707.25);

	this.mc_weight3 = new lib.mc_weight3();
	this.mc_weight3.name = "mc_weight3";
	this.mc_weight3.parent = this;
	this.mc_weight3.setTransform(289.5,693.25);

	this.mc_weight2 = new lib.mc_weight2();
	this.mc_weight2.name = "mc_weight2";
	this.mc_weight2.parent = this;
	this.mc_weight2.setTransform(189.5,693.25);

	this.mc_weight1 = new lib.mc_weight1();
	this.mc_weight1.name = "mc_weight1";
	this.mc_weight1.parent = this;
	this.mc_weight1.setTransform(76.5,681.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_weight1},{t:this.mc_weight2},{t:this.mc_weight3},{t:this.mc_weight4},{t:this.mc_weight5}]}).wait(1));

	// Layer_3
	this.hit_2 = new lib.mc_hit();
	this.hit_2.name = "hit_2";
	this.hit_2.parent = this;
	this.hit_2.setTransform(299.5,354.75,1,1.6726,0,0,0,0,56.6);

	this.hit_1 = new lib.mc_hit();
	this.hit_1.name = "hit_1";
	this.hit_1.parent = this;
	this.hit_1.setTransform(125,350.75,1,1.6018,0,0,0,0,56.6);

	this.sp_thick = new lib.spring_thick();
	this.sp_thick.name = "sp_thick";
	this.sp_thick.parent = this;
	this.sp_thick.setTransform(364.25,222.8,1,1,0,0,0,0,113.8);

	this.sp_thin = new lib.spring_thin();
	this.sp_thin.name = "sp_thin";
	this.sp_thin.parent = this;
	this.sp_thin.setTransform(190.25,222.8,1,1,0,0,0,0,113.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sp_thin},{t:this.sp_thick},{t:this.hit_1},{t:this.hit_2}]}).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("EAoyAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAm6AAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAlCAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAjKAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAhSAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAfaAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAdiAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAbqAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAZyAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAX6AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAWCAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAUKAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgASSAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAQaAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAOiAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAMqAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAKyAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAI6AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHCAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAFKAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgADSAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgABaAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAgdAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAiVAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAkNAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAmFAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAn9AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAp1AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgArtAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAtlAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAvdAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAxVAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAzNAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA1FAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA29AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA41AFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA6tAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA8lAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA+dAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEggVAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgiNAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgkFAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgl9AAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgn1AAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgptAAFQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape.setTransform(259.45,323.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text_thick5 = new cjs.Text("60", "bold 25px 'Helvetica'", "#990000");
	this.text_thick5.name = "text_thick5";
	this.text_thick5.textAlign = "center";
	this.text_thick5.lineHeight = 27;
	this.text_thick5.lineWidth = 56;
	this.text_thick5.parent = this;
	this.text_thick5.setTransform(944.25,707.05);

	this.text_thin5 = new cjs.Text("90", "bold 25px 'Helvetica'", "#990000");
	this.text_thin5.name = "text_thin5";
	this.text_thin5.textAlign = "center";
	this.text_thin5.lineHeight = 27;
	this.text_thin5.lineWidth = 56;
	this.text_thin5.parent = this;
	this.text_thin5.setTransform(815.25,707.05);

	this.text_thick4 = new cjs.Text("40", "bold 25px 'Helvetica'", "#990000");
	this.text_thick4.name = "text_thick4";
	this.text_thick4.textAlign = "center";
	this.text_thick4.lineHeight = 27;
	this.text_thick4.lineWidth = 56;
	this.text_thick4.parent = this;
	this.text_thick4.setTransform(944.25,645.15);

	this.text_thin4 = new cjs.Text("60", "bold 25px 'Helvetica'", "#990000");
	this.text_thin4.name = "text_thin4";
	this.text_thin4.textAlign = "center";
	this.text_thin4.lineHeight = 27;
	this.text_thin4.lineWidth = 56;
	this.text_thin4.parent = this;
	this.text_thin4.setTransform(815.25,645.15);

	this.text_thick3 = new cjs.Text("88", "bold 25px 'Helvetica'", "#990000");
	this.text_thick3.name = "text_thick3";
	this.text_thick3.textAlign = "center";
	this.text_thick3.lineHeight = 27;
	this.text_thick3.lineWidth = 56;
	this.text_thick3.parent = this;
	this.text_thick3.setTransform(944.25,583.3);

	this.text_thin3 = new cjs.Text("132", "bold 25px 'Helvetica'", "#990000");
	this.text_thin3.name = "text_thin3";
	this.text_thin3.textAlign = "center";
	this.text_thin3.lineHeight = 27;
	this.text_thin3.lineWidth = 56;
	this.text_thin3.parent = this;
	this.text_thin3.setTransform(815.25,583.3);

	this.text_thick2 = new cjs.Text("80", "bold 25px 'Helvetica'", "#990000");
	this.text_thick2.name = "text_thick2";
	this.text_thick2.textAlign = "center";
	this.text_thick2.lineHeight = 27;
	this.text_thick2.lineWidth = 56;
	this.text_thick2.parent = this;
	this.text_thick2.setTransform(944.25,521.45);

	this.text_thin2 = new cjs.Text("120", "bold 25px 'Helvetica'", "#990000");
	this.text_thin2.name = "text_thin2";
	this.text_thin2.textAlign = "center";
	this.text_thin2.lineHeight = 27;
	this.text_thin2.lineWidth = 56;
	this.text_thin2.parent = this;
	this.text_thin2.setTransform(815.25,521.45);

	this.text_thick1 = new cjs.Text("200", "bold 25px 'Helvetica'", "#990000");
	this.text_thick1.name = "text_thick1";
	this.text_thick1.textAlign = "center";
	this.text_thick1.lineHeight = 27;
	this.text_thick1.lineWidth = 56;
	this.text_thick1.parent = this;
	this.text_thick1.setTransform(944.25,459.6);

	this.text_thin1 = new cjs.Text("300", "bold 25px 'Helvetica'", "#990000");
	this.text_thin1.name = "text_thin1";
	this.text_thin1.textAlign = "center";
	this.text_thin1.lineHeight = 27;
	this.text_thin1.lineWidth = 56;
	this.text_thin1.parent = this;
	this.text_thin1.setTransform(815.25,459.6);

	this.mc_text = new cjs.Text("伸長量：", "bold 28px 'Helvetica'", "#990000");
	this.mc_text.name = "mc_text";
	this.mc_text.lineHeight = 41;
	this.mc_text.lineWidth = 330;
	this.mc_text.parent = this;
	this.mc_text.setTransform(533.95,289.65);

	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.mc_text},{t:this.text_thin1},{t:this.text_thick1},{t:this.text_thin2},{t:this.text_thick2},{t:this.text_thin3},{t:this.text_thick3},{t:this.text_thin4},{t:this.text_thick4},{t:this.text_thin5},{t:this.text_thick5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(504,384,520,384);
// library properties:
lib.properties = {
	id: '22A1AD49BF654722B462B7077A3DC532',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#DFECF5",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1577942759145", id:"bg"},
		{src:"images/Bitmap1.png?1577942759145", id:"Bitmap1"},
		{src:"images/thickspring.png?1577942759145", id:"thickspring"},
		{src:"images/thinspring.png?1577942759145", id:"thinspring"},
		{src:"images/weight_1.png?1577942759145", id:"weight_1"},
		{src:"images/weight_2.png?1577942759145", id:"weight_2"},
		{src:"images/weight_3.png?1577942759145", id:"weight_3"},
		{src:"images/weight_4.png?1577942759145", id:"weight_4"},
		{src:"images/weight_green.png?1577942759145", id:"weight_green"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['22A1AD49BF654722B462B7077A3DC532'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;