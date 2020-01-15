(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_12x = function() {
	this.initialize(img.bg_12x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.colorbar1111 = function() {
	this.initialize(img.colorbar1111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,801,41);


(lib.energy = function() {
	this.initialize(img.energy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,50);


(lib.pointer2x = function() {
	this.initialize(img.pointer2x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,61);


(lib.redline = function() {
	this.initialize(img.redline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,432);// helper functions:

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


(lib.mc_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.redline();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_line, new cjs.Rectangle(0,0,277,216), null);


(lib.mc_light2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.318)").s().p("Ag9BjIAAhsIAqgMIAThNIARBMIAtANIAABsg");
	this.shape.setTransform(7.475,10.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_light2, new cjs.Rectangle(1.3,0.5,12.399999999999999,19.8), null);


(lib.mc_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("A7YHSMAthggOIJQJsMg2iAoNg");
	this.shape.setTransform(-12,-69.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_light, new cjs.Rectangle(-187.2,-229.3,350.5,319.5), null);


(lib.mc_field = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mc_en = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.energy();
	this.instance.parent = this;
	this.instance.setTransform(-10,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_en, new cjs.Rectangle(-10,-13,20,25), null);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(83,83,83,0.008)").s().p("AkwGrIAAtVIJhAAIAANVg");
	this.shape.setTransform(30.5,42.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit, new cjs.Rectangle(0,0,61,85.3), null);


(lib.colorBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.colorbar1111();
	this.instance.parent = this;
	this.instance.setTransform(-200.25,-10.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorBar, new cjs.Rectangle(-200.2,-10.2,400.5,20.5), null);


(lib.pointer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.hit();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-18.5,1,1,0,0,0,30.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.mc_light2 = new lib.mc_light2();
	this.mc_light2.name = "mc_light2";
	this.mc_light2.parent = this;
	this.mc_light2.setTransform(-0.7,0.1,1,1,0,0,0,7.2,10.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_light2).wait(1));

	// Layer_1
	this.pointer_num = new cjs.Text("0.350", "8px 'Heiti TC'", "#FF0000");
	this.pointer_num.name = "pointer_num";
	this.pointer_num.textAlign = "center";
	this.pointer_num.lineHeight = 10;
	this.pointer_num.lineWidth = 20;
	this.pointer_num.parent = this;
	this.pointer_num.setTransform(0,-50.8);

	this.instance_1 = new lib.pointer2x();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.pointer_num}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(-31,-61.1,61,85.3), null);


(lib.colorPicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pointer
	this.mc_pointer = new lib.pointer();
	this.mc_pointer.name = "mc_pointer";
	this.mc_pointer.parent = this;
	this.mc_pointer.setTransform(399.5,26.25);

	this.timeline.addTween(cjs.Tween.get(this.mc_pointer).wait(1));

	// Layer_1
	this.colorBar = new lib.colorBar();
	this.colorBar.name = "colorBar";
	this.colorBar.parent = this;
	this.colorBar.setTransform(200.25,10.25);

	this.timeline.addTween(cjs.Tween.get(this.colorBar).wait(1));

}).prototype = getMCSymbolPrototype(lib.colorPicker, new cjs.Rectangle(0,-34.8,429.5,85.3), null);


(lib.main_view = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGAzIgDgKIAHABQAEAAAAgFIAAglIgVAAIAAgpIAPAAIADgJIAMACIgDAHIAXAAIAAApIgSAAIAAAIIADAHQAJgGAGgGIAHAIQgHAGgJAFQAGAJALAIIgHAIQgMgKgHgNIAAAPQAAAMgLAAgAADgJIAeAAIAAgHIgeAAgAADgZIAeAAIAAgGIgeAAgAgyAvQADgKABgNIAKABQgBANgEAMgAgNAnQAKgIADgOIgJAAIAAgJIATAAIAAAIQgEAVgNAKgAgiAYIAJgDIADAXIgKACgAgWAVIAIgCIAFAPIgIADIgFgQgAgyAJIAGgDQAEgFAGgJIgNACIgDgLQADAAACgDQAGgOAFgQIALAFQgHAQgHAMIAJgBIAHgOIALAFQgOAYgKALIANgDIgDgHIAJgDQAEAJACALIgJADIgBgFQgPAFgMABg");
	this.shape.setTransform(972.05,173.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANAzIAAhlIAMAAIAAAhQANAJAOALIgIALIgTgTIAAA4gAgwAnQAUgLAKgRQgHgGgIgEIAGgIQAIAFAHAEQAGgLADgQIgTAAQgIATgNALIgIgJQASgRAHgdIAMACIgEAMIAZAAIAAAKQgGAygpAZg");
	this.shape_1.setTransform(961,173.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxAvQADgKABgOIAJABQAAAOgDAMgAgGAwIAAgIIgGADIgGgVIAIgDQAEAIADAKIAUAAIAAhGIgTAAIAAgKIAyAAIAAAKIgUAAIAABGIAXAAIAAALgAggAYIAJgCQACAJABAPIgJABQgBgQgCgHgAgwAIIAFgDQAFgFAIgLIgRADIgDgKQADgBACgDQAIgMAGgPIAKAEQgHAQgIAKIAMgCIAHgLIAKADQgPAZgKALIAOgDIgDgHIAIgEQAFAJAEALIgJAEIgCgFQgQAFgOABg");
	this.shape_2.setTransform(949.975,173.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAzIgCgKIAHABQADAAAAgFIAAglIgUAAIAAgpIAOAAIAEgJIALACIgDAHIAXAAIAAApIgTAAIAAAIIAFAHQAIgGAGgGIAHAIQgHAGgKAFQAIAJAKAIIgHAIQgMgKgIgNIAAAPQAAAMgKAAgAADgJIAeAAIAAgHIgeAAgAADgZIAeAAIAAgGIgeAAgAgyAvQADgKABgNIAJABQgBANgCAMgAgNAnQAKgIADgOIgJAAIAAgJIATAAIAAAIQgEAVgNAKgAgiAYIAJgDIADAXIgJACgAgWAVIAIgCIAFAPIgIADIgFgQgAgxAJIAEgDQAFgFAHgJIgOACIgDgLQACAAACgDQAIgOAFgQIAKAFQgHAQgHAMIAJgBIAHgOIAKAFQgNAYgJALIAMgDIgDgHIAJgDQADAJACALIgJADIgBgFQgOAFgNABg");
	this.shape_3.setTransform(606.5,173.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANAzIAAhlIAMAAIAAAhQANAJAOALIgHALIgUgTIAAA4gAgwAnQATgLAMgRQgIgGgIgEIAGgIQAIAFAHAEQAGgLACgQIgSAAQgIATgNALIgIgJQATgRAGgdIAMACIgEAMIAZAAIAAAKQgGAygpAZg");
	this.shape_4.setTransform(595.45,173.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAzIgDgMIAIABQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIAAgLIglABIgCgJIAJAAQAMgDAMgFIgXABIgCgKIAKgBQAJgDALgIIgqAGIgDgLIAJAAIAAgbIAKAAIAAAZIAHAAIAAggIAMAAIAAAJIAOAAIAAAKIgOAAIAAALIAOgDIAAALIgDAAIAGAFQgHAHgKADIASgCIANgHIAKAGQgTALgWAHIAmgBIgGgHIAJgFQAMALAIAJIgKAHIgGgIIgbACIAAANQAAAMgKAAgAAMAlIAGgJQARAFAPAGIgHALQgPgIgQgFgAgwAnQATgEANgHIAHAIIgGADQgMAGgQAFgAASgIQgMAAAAgNIAAgdIALAAIAAAJIAZgEIAEAKQgNADgQACIAAAHQAAAEAEABIAMAAIADgBIACgIIALADQgBAMgEACQgDACgGAAg");
	this.shape_5.setTransform(584.325,173.75);

	this.instance = new lib.bg_12x();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.main_view, new cjs.Rectangle(0,0,1024,768), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var stage = this.parent;
		createjs.Touch.enable(stage);
		
		//this.gotoAndStop(1);
		var main = this.main_view;
		var ctx = stage.canvas.getContext('2d');
		
		var num = 0.35;
		var en_startX = 670;
		var en_endX = 938;
		var en_startY = 646;
		var en_endY = 435;
		var diffY = (en_endY - en_startY) / (3 - 0.5);
		var spd = 30;
		var elecTotal = 10;
		
		var lineX = 661;
		var lineY = 431;
		stage.on('mousedown', function (evt) {
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			//console.log("p", p.x, p.y);
		})
		
		var lineMask = new createjs.Shape();
		lineMask.graphics.beginFill("#ffffff").drawRect(0,0,10,0);
		var mc_line= new lib.mc_line;
		mc_line.x = lineX;
		mc_line.y = lineY;
		mc_line.mask = lineMask;
		main.addChild(mc_line);
		mc_en = new lib.mc_en();
		mc_en.x= en_startX;
		mc_en.y =en_startY;
		main.addChild(mc_en);
		//main.addChild(lineMask);
		main.mc_colorPicker.mc_pointer.on("pressmove", function (evt) {
			createjs.Ticker.paused = true;
			//console.log(evt.stageX , evt.stageY, "global");
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			//console.log(p.x,p.y,"local");
			if (p.x <= 580) {
				evt.currentTarget.x = 0;
				num = 3.00;
			} else if (p.x >= 979) {
				evt.currentTarget.x = 399;
				num = 0.35;
			} else {
				evt.currentTarget.x = p.x - 580;
				num = 3.00 - evt.currentTarget.x * (3.00 - 0.35) / 399;
			}
			num = num.toFixed(3);
			main.mc_colorPicker.mc_pointer.pointer_num.text = num;
			//
			var moveX = (num - 0.35) * (en_endX - en_startX) / (3.00 - 0.35);
			mc_en.x =  en_startX +moveX;
			if (num <= 0.5) {
				mc_en.y = en_startY;
			} else {
				mc_en.y = en_startY + (num - 0.5) * diffY;
			}
			
			lineMask.graphics.drawRect(en_startX,en_startY-400,moveX,550);
			//
			var ratio;
			ratio = stage.canvas.width /1024;
			
			var data = ctx.getImageData((evt.currentTarget.x+580) *ratio , 152*ratio , 1, 1).data;
			var currentRGBA = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + data[3] / 255 * 60 / 100 + ')';
		
			if (data[0] == 0 && data[1] == 0 && data[2] == 0) {
				currentRGBA = "rgba(0,0,0,0.2)";
				console.log(currentRGBA, "0.2");
			}
			console.log(currentRGBA);
			main.mc_light.shape.graphics._fill.style = currentRGBA;
			main.mc_colorPicker.mc_pointer.mc_light2.shape.graphics._fill.style = currentRGBA;
		
			if (num < 0.5) {
				spd = 0;
			} else {
				spd = (num - 0.5) * 50;
			}
			for (var i = 0; i < elecTotal; i++) {
				var getG = main.mc_field.getChildByName("g_" + i);
				getG.x = -400 * Math.random();;
			}
		});
		for (var i = 0; i < elecTotal; i++) {
			var g = new createjs.Shape();
			g.graphics.beginFill("#00CCFF").beginStroke("#666");
			g.graphics.drawCircle(0, 0, 5);
			g.graphics.endFill();
			g.graphics.beginFill("#00CCFF").beginStroke("#666");
			g.graphics.drawCircle(0, 0, 1);
			g.graphics.endFill();
			g.name = "g_" + i;
			g.x = -400 * Math.random() + i * 10;
			g.y = Math.random() * 100 + 10;
			main.mc_field.addChild(g);
		
		}
		createjs.Ticker.addEventListener("tick", handleTick);
		function handleTick(event) {
			if (!event.paused) {
				if (num < 0.5) {
					spd = 0;
				} else {
					spd = (num - 0.5) * 50;
				}
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
	this.main_view = new lib.main_view();
	this.main_view.name = "main_view";
	this.main_view.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.main_view).wait(1));

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
		{src:"images/bg_12x.jpg?1578451408431", id:"bg_12x"},
		{src:"images/colorbar1111.png?1578451408431", id:"colorbar1111"},
		{src:"images/energy.png?1578451408431", id:"energy"},
		{src:"images/pointer2x.png?1578451408431", id:"pointer2x"},
		{src:"images/redline.png?1578451408431", id:"redline"}
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