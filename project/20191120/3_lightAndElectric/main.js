(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_12x = function() {
	this.initialize(img.bg_12x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.colorbar = function() {
	this.initialize(img.colorbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,41);


(lib.energy = function() {
	this.initialize(img.energy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,50);


(lib.pointer2x = function() {
	this.initialize(img.pointer2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,61);// helper functions:

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


(lib.pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.pointer_num = new cjs.Text("3.000", "8px 'Heiti TC'", "#FF0000");
	this.pointer_num.name = "pointer_num";
	this.pointer_num.textAlign = "center";
	this.pointer_num.lineHeight = 10;
	this.pointer_num.lineWidth = 20;
	this.pointer_num.parent = this;
	this.pointer_num.setTransform(0,-50.8);

	this.instance = new lib.pointer2x();
	this.instance.parent = this;
	this.instance.setTransform(-10,-15,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().p("AhoFVIAAqqIDRAAIAAKqg");
	this.shape.setTransform(-1.5,-18.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.pointer_num}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(-12,-52.8,24,68.3), null);


(lib.mc_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A7YHSMAthggOIJQJsMg2iAoNg");
	this.shape.setTransform(-12,-69.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_light, new cjs.Rectangle(-187.2,-229.3,350.5,319.5), null);


(lib.mc_field = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_energy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.energy();
	this.instance.parent = this;
	this.instance.setTransform(-10,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_energy, new cjs.Rectangle(-10,-13,20,25), null);


(lib.colorBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.colorbar();
	this.instance.parent = this;
	this.instance.setTransform(-200.25,-10.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorBar, new cjs.Rectangle(-200.2,-10.2,400.5,20.5), null);


(lib.colorPicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointer
	this.mc_pointer = new lib.pointer();
	this.mc_pointer.name = "mc_pointer";
	this.mc_pointer.parent = this;
	this.mc_pointer.setTransform(0,26.25);

	this.timeline.addTween(cjs.Tween.get(this.mc_pointer).wait(1));

	// Layer_1
	this.colorBar = new lib.colorBar();
	this.colorBar.name = "colorBar";
	this.colorBar.parent = this;
	this.colorBar.setTransform(200.25,10.25);

	this.timeline.addTween(cjs.Tween.get(this.colorBar).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorPicker, new cjs.Rectangle(-12,-26.5,412.5,68.3), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var stage = this.getStage();
		
		
		var ctx = stage.canvas.getContext('2d');
		var main = this;
		var num = 3.00;
		var en_startX = 670;
		var en_endX = 938;
		var en_startY = 646;
		var en_endY = 435;
		var diffY = (en_endY - en_startY) / (3 - 0.5);
		var spd = 30;
		var elecTotal = 10;
		
		main.mc_colorPicker.mc_pointer.on("pressmove", function (evt) {
			createjs.Ticker.paused = true;
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			if (p.x <= 580) {
				evt.currentTarget.x = 0;
				num = 3.00;
			} else if (p.x >= 978) {
				evt.currentTarget.x = 399;
				num = 0.35;
			} else {
				evt.currentTarget.x = p.x - 580;
				num = 3.00 - evt.currentTarget.x * (3.00 - 0.35) / 399;
			}
			num = num.toFixed(3);
			main.mc_colorPicker.mc_pointer.pointer_num.text = num;
			//
			main.mc_en.x = en_startX + (num - 0.35) * (en_endX - en_startX) / (3.00 - 0.35);
			if (num <= 0.5) {
				main.mc_en.y = en_startY;
			} else {
				main.mc_en.y = en_startY + (num - 0.5) * diffY;
			}
			//
			var ratio = stage.canvas.clientWidth / 1024;
			var data = ctx.getImageData((580 + evt.currentTarget.x) * ratio, 146 * ratio, 1, 1).data;
			var currentRGBA = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] / 255 + ')';
			main.mc_light.shape.graphics._fill.style = currentRGBA;
			if (num < 0.5) {
				spd = 0;
			} else {
				spd = (num - 0.5) * 10;
			}
			for (var i = 0; i < elecTotal; i++) {
				var getG = main.mc_field.getChildByName("g_" + i);
				getG.x = -400 * Math.random();;
			}
		});
		for (var i = 0; i < elecTotal; i++) {
			var g = new createjs.Shape(
				new createjs.Graphics().beginFill("#666").beginStroke("#000")
				.drawCircle(0, 0, 5));
			g.name = "g_" + i;
			g.x = -400 * Math.random()+ i*10;
			g.y = Math.random() * 100 + 10;
			main.mc_field.addChild(g);
		
		}
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(event) {
			if (!event.paused) {
				for (var i = 0; i < elecTotal; i++) {
					var getG = main.mc_field.getChildByName("g_" + i);
					getG.x += spd;
					if (getG.x > 400) {
						getG.x -= (400 + Math.random() * 50);
					}
				}
		
			}
		}
		
		main.mc_colorPicker.mc_pointer.on("pressup", function (evt) {
			createjs.Ticker.paused = false;
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// energy
	this.mc_en = new lib.mc_energy();
	this.mc_en.name = "mc_en";
	this.mc_en.parent = this;
	this.mc_en.setTransform(938.4,434.45);

	this.timeline.addTween(cjs.Tween.get(this.mc_en).wait(1));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgX6ApUIAAhzQAdlzgPl6QgGiEgIhiIAAiAMA92AAAQgLBlgEChQgFCuACCgQAAGpAeCmIAHAjg");
	mask.setTransform(244.7375,264.375);

	// field
	this.mc_field = new lib.mc_field();
	this.mc_field.name = "mc_field";
	this.mc_field.parent = this;
	this.mc_field.setTransform(89.2,403.65);

	var maskedShapeInstanceList = [this.mc_field];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc_field).wait(1));

	// light
	this.mc_light = new lib.mc_light();
	this.mc_light.name = "mc_light";
	this.mc_light.parent = this;
	this.mc_light.setTransform(276.45,431.65);
	this.mc_light.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.mc_light).wait(1));

	// colorPicker
	this.mc_colorPicker = new lib.colorPicker();
	this.mc_colorPicker.name = "mc_colorPicker";
	this.mc_colorPicker.parent = this;
	this.mc_colorPicker.setTransform(779.2,164.8,1,1,0,0,0,200.2,20.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_colorPicker).wait(1));

	// bg
	this.instance = new lib.bg_12x();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,512,384);
// library properties:
lib.properties = {
	id: 'A76410F4E7AB4AD1B13196473B3C497F',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_12x.jpg?1574221791635", id:"bg_12x"},
		{src:"images/colorbar.jpg?1574221791635", id:"colorbar"},
		{src:"images/energy.png?1574221791635", id:"energy"},
		{src:"images/pointer2x.png?1574221791635", id:"pointer2x"}
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
an.compositions['A76410F4E7AB4AD1B13196473B3C497F'] = {
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