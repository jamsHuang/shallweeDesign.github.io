(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Asset22x100 = function() {
	this.initialize(img.Asset22x100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.Asset22x8 = function() {
	this.initialize(img.Asset22x8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,87);


(lib.Asset32x8 = function() {
	this.initialize(img.Asset32x8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,87);


(lib.Asset42x8 = function() {
	this.initialize(img.Asset42x8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,87);


(lib.farm2x8 = function() {
	this.initialize(img.farm2x8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3504,3476);// helper functions:

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


(lib.mc_yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset22x8();
	this.instance.parent = this;
	this.instance.setTransform(-51.75,-21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_yellow, new cjs.Rectangle(-51.7,-21.7,103.5,43.5), null);


(lib.mc_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset32x8();
	this.instance.parent = this;
	this.instance.setTransform(-51.25,-21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_white, new cjs.Rectangle(-51.2,-21.7,102.5,43.5), null);


(lib.mc_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset42x8();
	this.instance.parent = this;
	this.instance.setTransform(-51.75,-21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_blue, new cjs.Rectangle(-51.7,-21.7,103.5,43.5), null);


(lib.hit_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text_blue = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_blue.name = "text_blue";
	this.text_blue.lineHeight = 17;
	this.text_blue.lineWidth = 15;
	this.text_blue.alpha = 0.60000000;
	this.text_blue.parent = this;
	this.text_blue.setTransform(50.6,12.5);

	this.text_yellow = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_yellow.name = "text_yellow";
	this.text_yellow.lineHeight = 17;
	this.text_yellow.lineWidth = 15;
	this.text_yellow.alpha = 0.60000000;
	this.text_yellow.parent = this;
	this.text_yellow.setTransform(50.6,-23.4);

	this.text_white = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_white.name = "text_white";
	this.text_white.lineHeight = 17;
	this.text_white.lineWidth = 15;
	this.text_white.alpha = 0.60000000;
	this.text_white.parent = this;
	this.text_white.setTransform(50.6,-5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02A0E7").s().p("AhCBEIAAgOIAPAAIAAgZIBnAAIAAAZIAPAAIAAAOgAAWA2IAPAAIAAgMIgPAAgAgIA2IAQAAIAAgMIgQAAgAgjA2IAOAAIAAgMIgOAAgAAXADIAMgGQAOALAHAIIgMAIQgIgKgNgLgAg4AYIAAg8IA+AAIAAALIgTAAIAAAGIAOAAIAAAaIgOAAIAAAGIASAAIAAALgAgqANIAPAAIAAgGIgPAAgAgqgDIAeAAIAAgFIgeAAgAgqgTIAPAAIAAgGIgPAAgAACgDQANgNAFgWIANADIgDALIAiAAIAAANIgnAAQgGALgIAHgAARgnIAAgGIghAAIAAAGIgQAAIAAgGIggAAIAAgPIAgAAIAAgHIAQAAIAAAHIAhAAIAAgHIAQAAIAAAHIAgAAIAAAPIggAAIAAAGg");
	this.shape.setTransform(36.075,18.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBGIAAgLIhNAAIAAALIgPAAIAAhzIAkAAQAEgLACgNIARADQgCALgEAKIA2AAIAABzgAgmAsIBNAAIAAggIhNAAgAgmgBIBNAAIAAgeIhNAAg");
	this.shape_1.setTransform(36.05,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AAOA3IAFgIIgkAAIAGAHQgRAJgfAGIgHgNQAZgDAQgGIgXAAIAAgzIArAAIAAgGIg6AAIAAgOICCAAIAAAOIg6AAIAAAGIAqAAIAAAzIgSAAQASAEAQAGIgFANQgXgKgZgFgAAJAiIAbAAIAAgIIgbAAgAghAiIAcAAIAAgIIgcAAgAAJAPIAbAAIAAgIIgbAAgAghAPIAcAAIAAgIIgcAAgAgfgeIAAgSIgdAAIAAgNIAdAAIAAgIIAPAAIAAAIIAjAAIAAgIIAPAAIAAAIIAdAAIAAANIgdAAIAAASgAgQgpIAjAAIAAgHIgjAAg");
	this.shape_2.setTransform(35.925,-18.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_white},{t:this.text_yellow},{t:this.text_blue}]}).wait(1));

	// Layer_2
	this.mark = new cjs.Text("A", "bold 73px 'Helvetica'", "#333333");
	this.mark.name = "mark";
	this.mark.textAlign = "center";
	this.mark.lineHeight = 75;
	this.mark.lineWidth = 53;
	this.mark.alpha = 0.60000000;
	this.mark.parent = this;
	this.mark.setTransform(-1.65,-31.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.6)").s().p("Ao/E0IAApnIR/AAIAAJng");
	this.shape_3.setTransform(18.4,0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.mark}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_area, new cjs.Rectangle(-39.2,-33.5,115.2,77), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var main = this;
		var mc_y = main.mc_yellow;
		var mc_w = main.mc_white;
		var mc_b = main.mc_blue;
		//
		var pt_y = new createjs.Point(main.mc_yellow.x,main.mc_yellow.y);
		var pt_w = new createjs.Point(main.mc_white.x,main.mc_white.y);
		var pt_b = new createjs.Point(main.mc_blue.x,main.mc_blue.y);
		//
		var total = 0;
		//
		var area1= [main.mc_area1.x,main.mc_area1.y,main.mc_area1.width,main.mc_area1.height];
		var area2= [main.mc_area2.x,main.mc_area2.y,main.mc_area2.width,main.mc_area2.height];
		var area3= [main.mc_area3.x,main.mc_area3.y,main.mc_area3.width,main.mc_area3.height];
		var area4= [main.mc_area4.x,main.mc_area4.y,main.mc_area4.width,main.mc_area4.height];
		var area5= [main.mc_area5.x,main.mc_area5.y,main.mc_area5.width,main.mc_area5.height];
		var area6= [main.mc_area6.x,main.mc_area6.y,main.mc_area6.width,main.mc_area6.height];
		var area7= [main.mc_area7.x,main.mc_area7.y,main.mc_area7.width,main.mc_area7.height];
		var area8= [main.mc_area8.x,main.mc_area8.y,main.mc_area8.width,main.mc_area8.height];
		var area9= [main.mc_area9.x,main.mc_area9.y,main.mc_area9.width,main.mc_area9.height];
		var area10= [main.mc_area10.x,main.mc_area10.y,main.mc_area10.width,main.mc_area10.height];
		var area11= [main.mc_area11.x,main.mc_area11.y,main.mc_area11.width,main.mc_area11.height];
		
		//
		main.mc_area1.mark.text = "A";
		main.mc_area2.mark.text = "B";
		main.mc_area3.mark.text = "C";
		main.mc_area4.mark.text = "D";
		main.mc_area5.mark.text = "E";
		main.mc_area6.mark.text = "F";
		main.mc_area7.mark.text = "G";
		main.mc_area8.mark.text = "H";
		main.mc_area9.mark.text = "I";
		main.mc_area10.mark.text = "J";
		main.mc_area11.mark.text = "K";
		//
		main.mc_yellow.on("pressmove", moveBoard);
		main.mc_yellow.on("pressup", releaseBoard);
		//
		main.mc_white.on("pressmove", moveBoard);
		main.mc_white.on("pressup", releaseBoard);
		//
		main.mc_blue.on("pressmove", moveBoard);
		main.mc_blue.on("pressup", releaseBoard);
		//
		function moveBoard(evt){
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		function releaseBoard(evt){
			switch(evt.currentTarget.name){
				case "mc_yellow":
					evt.currentTarget.x =pt_y.x;
					evt.currentTarget.y =pt_y.y;
					break;
				case "mc_white":
					evt.currentTarget.x =pt_w.x;
					evt.currentTarget.y =pt_w.y;
					break;
				case "mc_blue":
					evt.currentTarget.x =pt_b.x;
					evt.currentTarget.y =pt_b.y;
					break;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mc_area11 = new lib.hit_area();
	this.mc_area11.name = "mc_area11";
	this.mc_area11.parent = this;
	this.mc_area11.setTransform(576.3,497.35);

	this.mc_area10 = new lib.hit_area();
	this.mc_area10.name = "mc_area10";
	this.mc_area10.parent = this;
	this.mc_area10.setTransform(358,497.35);

	this.mc_area9 = new lib.hit_area();
	this.mc_area9.name = "mc_area9";
	this.mc_area9.parent = this;
	this.mc_area9.setTransform(141.65,497.35);

	this.mc_area7 = new lib.hit_area();
	this.mc_area7.name = "mc_area7";
	this.mc_area7.parent = this;
	this.mc_area7.setTransform(141.65,413.15);

	this.mc_area8 = new lib.hit_area();
	this.mc_area8.name = "mc_area8";
	this.mc_area8.parent = this;
	this.mc_area8.setTransform(576.3,413.15);

	this.mc_area6 = new lib.hit_area();
	this.mc_area6.name = "mc_area6";
	this.mc_area6.parent = this;
	this.mc_area6.setTransform(495.2,318);

	this.mc_area5 = new lib.hit_area();
	this.mc_area5.name = "mc_area5";
	this.mc_area5.parent = this;
	this.mc_area5.setTransform(284.95,318);

	this.mc_area3 = new lib.hit_area();
	this.mc_area3.name = "mc_area3";
	this.mc_area3.parent = this;
	this.mc_area3.setTransform(499.3,228.85);

	this.mc_area2 = new lib.hit_area();
	this.mc_area2.name = "mc_area2";
	this.mc_area2.parent = this;
	this.mc_area2.setTransform(284.95,228.85);

	this.mc_area4 = new lib.hit_area();
	this.mc_area4.name = "mc_area4";
	this.mc_area4.parent = this;
	this.mc_area4.setTransform(65.6,318);

	this.mc_area1 = new lib.hit_area();
	this.mc_area1.name = "mc_area1";
	this.mc_area1.parent = this;
	this.mc_area1.setTransform(65.6,228.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_area1},{t:this.mc_area4},{t:this.mc_area2},{t:this.mc_area3},{t:this.mc_area5},{t:this.mc_area6},{t:this.mc_area8},{t:this.mc_area7},{t:this.mc_area9},{t:this.mc_area10},{t:this.mc_area11}]}).wait(1));

	// Layer_3
	this.mc_blue = new lib.mc_blue();
	this.mc_blue.name = "mc_blue";
	this.mc_blue.parent = this;
	this.mc_blue.setTransform(732.75,708.75);

	this.mc_white = new lib.mc_white();
	this.mc_white.name = "mc_white";
	this.mc_white.parent = this;
	this.mc_white.setTransform(620.25,708.75);

	this.mc_yellow = new lib.mc_yellow();
	this.mc_yellow.name = "mc_yellow";
	this.mc_yellow.parent = this;
	this.mc_yellow.setTransform(507.75,708.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_yellow},{t:this.mc_white},{t:this.mc_blue}]}).wait(1));

	// Layer_2
	this.instance = new lib.farm2x8();
	this.instance.parent = this;
	this.instance.setTransform(-379,-471,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Asset22x100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,-87,1240,1354);
// library properties:
lib.properties = {
	id: '6470BD9579BC442F841F8470F22AB1C4',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Asset22x100.jpg?1574149087485", id:"Asset22x100"},
		{src:"images/Asset22x8.png?1574149087485", id:"Asset22x8"},
		{src:"images/Asset32x8.png?1574149087485", id:"Asset32x8"},
		{src:"images/Asset42x8.png?1574149087485", id:"Asset42x8"},
		{src:"images/farm2x8.png?1574149087485", id:"farm2x8"}
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
an.compositions['6470BD9579BC442F841F8470F22AB1C4'] = {
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