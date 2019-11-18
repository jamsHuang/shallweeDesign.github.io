(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


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


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var main = this;
		var pt1,pt2,pt3,pt4,pt5;
		var area1,area2;
		
		//x,y,w,h
		area1 = [50 , 100 , 100 ,500];
		area2 = [200, 100 , 100 ,500];
		var g = new createjs.Shape(
				new createjs.Graphics().beginStroke("#000")
				.drawRect(area1[0], area1[1], area1[2], area1[3]));
		var g2 = new createjs.Shape(
				new createjs.Graphics().beginStroke("#000")
				.drawRect(area2[0], area2[1], area2[2], area2[3]));
		
		main.addChild(g);
		main.addChild(g2);
		
		pt1 = new createjs.Point(main.mc_weight1.x,main.mc_weight1.y);
		pt2 = new createjs.Point(main.mc_weight2.x,main.mc_weight2.y);
		pt3 = new createjs.Point(main.mc_weight3.x,main.mc_weight3.y);
		pt4 = new createjs.Point(main.mc_weight4.x,main.mc_weight4.y);
		pt5 = new createjs.Point(main.mc_weight5.x,main.mc_weight5.y);
		
		//console.log(pt1,pt2,pt3,pt4,pt5);
		main.mc_weight1.on("pressmove", function(evt) {
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		});
		main.mc_weight1.on("pressup", function(evt) { 
			console.log("1up",area1[0]+area1[2],area1[0]);
			if(evt.currentTarget.x<=(area1[0]+area1[2]) &&evt.currentTarget.x>=area1[0] && evt.currentTarget.y<=(area1[1]+area1[3]) &&evt.currentTarget.y>=area1[1]){
				console.log("hit");
			}
			else if(evt.currentTarget.x<=(area2[0]+area2[2]) &&evt.currentTarget.x>=area2[0] &&evt.currentTarget.y<=(area2[1]+area2[3]) &&evt.currentTarget.y>=area2[1]){
				console.log("hit2");
			}
			else{
				console.log("hit nothing",evt.currentTarget.x);
				evt.currentTarget.x = pt1.x;
				evt.currentTarget.y = pt1.y;
			}
		});
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

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,512,384);
// library properties:
lib.properties = {
	id: '22A1AD49BF654722B462B7077A3DC532',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1573939985136", id:"bg"},
		{src:"images/weight_1.png?1573939985136", id:"weight_1"},
		{src:"images/weight_2.png?1573939985136", id:"weight_2"},
		{src:"images/weight_3.png?1573939985136", id:"weight_3"},
		{src:"images/weight_4.png?1573939985136", id:"weight_4"},
		{src:"images/weight_green.png?1573939985136", id:"weight_green"}
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