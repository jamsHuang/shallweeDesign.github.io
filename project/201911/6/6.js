(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Asset22x100 = function() {
	this.initialize(img.Asset22x100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2052,1537);


(lib.btn_start = function() {
	this.initialize(img.btn_start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,355,121);


(lib.cup1 = function() {
	this.initialize(img.cup1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,466);


(lib.obj_1 = function() {
	this.initialize(img.obj_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,124);


(lib.obj_2 = function() {
	this.initialize(img.obj_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,124);


(lib.obj_3 = function() {
	this.initialize(img.obj_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,122);// helper functions:

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


(lib.obj3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.obj_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.obj3, new cjs.Rectangle(0,0,130,122), null);


(lib.obj2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.obj_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.obj2, new cjs.Rectangle(0,0,130,124), null);


(lib.obj1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.obj_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.obj1, new cjs.Rectangle(0,0,130,124), null);


(lib.cup1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cup1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171.5,233);


(lib.btn_start_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn_start();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:2},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.5,62.5);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,20,20), null);


(lib.btn_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AskDDIAAmFIZJAAIAAGFg");
	this.shape.setTransform(0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-19.5,161.1,39.1);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,20,20), null);


(lib.ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{obj1liq1cup1:0,obj2liq1cup1:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
		this.parent.num_ml.text = "20";
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
		this.parent.num_ml.text = "40";
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
		this.parent.num_ml.text = "80";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(1).call(this.frame_20).wait(9).call(this.frame_29).wait(1));

	// cup
	this.instance = new lib.cup1_1();
	this.instance.parent = this;
	this.instance.setTransform(219.8,307.5,1,1,0,0,0,85.8,116.5);
	this.instance.alpha = 0.5508;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(10));

	// liq_front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNIX5AAIAAONg");
	this.shape.setTransform(218.6,363.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNICEAAIJ0DwIKLjwIB2AAIAAONg");
	this.shape_1.setTransform(218.6,363.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8H3IAAvuICEAAIJ0DxIKLjxIB2AAIAAPug");
	this.shape_2.setTransform(218.5607,352.9429);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7IoIgCxPICEAAIJ0DwIKMjwIB1AAIACRPg");
	this.shape_3.setTransform(218.5214,342.2607);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7JYIgCyvICEAAIJ0DwIKLjwIB2AAIACSvg");
	this.shape_4.setTransform(218.4821,331.5786);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6KIIgE0PICEAAIJ0DwIKMjwIB1AAIAEUPg");
	this.shape_5.setTransform(218.4429,320.8964);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6K4IgE1vICEAAIJ0DvIKMjvIB1AAIAEVvg");
	this.shape_6.setTransform(218.4036,310.2143);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6LpIgE3RICEAAIJ0DwIKLjwIB2AAIAEXRg");
	this.shape_7.setTransform(218.3643,299.5321);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,204,255,0.886)").s().p("Ar5MZIgG4xICEAAIJ0DwIKMjwIB1AAIAGYxg");
	this.shape_8.setTransform(218.325,288.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer_12
	this.instance_1 = new lib.obj3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(219.75,96,1,1,0,0,0,65,62);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({y:275.65},4,cjs.Ease.cubicOut).wait(1).to({regY:61,y:271.6},0).wait(1).to({y:254.8},0).wait(1).to({y:248.55},0).wait(1).to({y:239.45},0).wait(1).to({regY:62,y:236.05},0).wait(1));

	// liq_back
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,204,255,0.886)").s().p("AosInQjmgwAAhEIAAgEIAAAAIAAtfIAAgCQAAhEDmgwQDngwFFAAQFGAADmAwQDnAwABBEIAAACIAANfIgBAAIABAEQgBBEjnAwQjmAwlGAAQlFAAjngwg");
	this.shape_9.setTransform(220.85,361.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,204,255,0.886)").s().p("AggKnQiHgDh0gPQiVgVhigjIgFgCIAAAAIg2gXQjFhFAAhWIAAgFIAAAAIAAuOIAAgBIAAgCIAAAAQgBhLDVg1IAWgGQCwgqDngIQBYgDBaACQCHADB2APQCVAVBjAkIACAAIA2AYQDFBFABBWIAAACIAAOOIAAACIAAAEIAAABQgBBKjUA1IgXAGQiuAqjmAIQg2ACg4AAIhGgBg");
	this.shape_10.setTransform(220.9786,353.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,204,255,0.886)").s().p("AhCL2QiOgGh5gWQiighhSgzIgEgDIAAAAIgtgiQilhaABhpIAAgEIAAAAIAAu/IAAgBIAAgCIAAgBQAAhUDXg8IAXgGQC3gxD1gHQBdgCBeAEQCOAGB6AWQCjAhBSA0IABABIAtAkQClBaABBoIAAACIAAO+IAAADIAAADIAAABQgBBUjXA8IgYAGQi2AxjzAHIhKABQg5AAg6gDg");
	this.shape_11.setTransform(221.1071,345.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,204,255,0.886)").s().p("AhjNGQiWgKh9gdQiwgthChDIgDgEIAAAAIgkguQiDhvgBh6IABgFIgBAAIAAvvIAAgBIAAgCIAAgBQAAheDbhCIAYgIQC/g3EBgGQBigCBiAGQCWAKB+AdQCxAtBBBEIACACIAkAvQCEBvgBB6IAAADIAAPuIAAADIAAADIAAACQAABdjaBCIgZAIQi+A3j/AGIg0AAQhJAAhJgEg");
	this.shape_12.setTransform(221.2357,337.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,204,255,0.886)").s().p("AiFOVQidgMiCgkQi9g6gxhUIgDgFIAAAAIgbg4QhjiEAAiNIABgFIgBAAIAAwfIAAgBIAAgCIAAgBQAAhnDehKIAZgIQDHg+ENgEQBpgCBkAIQCeAMCCAlQC+A5AyBUIAAADIAbA6QBkCEgBCNIAAADIAAQeIAAADIAAAEIAAABQAABnjdBJIgaAIQjGA+kMAEIgjABQhXAAhVgHg");
	this.shape_13.setTransform(221.3643,329.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,204,255,0.886)").s().p("AinPlQikgQiGgrQjLhGghhkIgBgGIgBAAIgShEQhCiZAAieIABgGIgBAAIAAxPIAAgBIAAgCIAAgBQABhxDghQIAagJQDPhGEZgCQBvgBBnAJQClAQCHAsQDMBFAhBkIABADIASBHQBCCZgBCfIAAACIAARPIAAADIAAAEIAAABQgBBxjfBPIgbAKQjOBFkZACIgVAAQhkAAhfgIg");
	this.shape_14.setTransform(221.4929,321.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,204,255,0.886)").s().p("AjIQ0QisgTiKgyQjZhSgRh0IAAgHIgBAAIgJhPQggiugBixIABgFIgBAAIAAyAIAAgBIAAgCIAAgBQAAh7DkhXIAbgKQDWhMEngBQB0gBBrAMQCsATCLAyQDaBSAQB1IAAADIAJBSQAiCugBCxIAAADIAAR/IAAADIAAAEIAAACQgBB6jiBWIgcAKQjWBMklABIgKAAQhwAAhngLg");
	this.shape_15.setTransform(221.6214,313.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,204,255,0.886)").s().p("AosQ0QjmheAAiEIAAgIIAAAAIAA6WIAAgEQAAiFDmheQDnhdFFAAQFGAADmBdQDnBeABCFIAAAEIAAaWIAAAIQgBCEjnBeQjmBdlGAAQlFAAjnhdg");
	this.shape_16.setTransform(221.75,305.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},20).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	// cup
	this.instance_2 = new lib.cup1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(219.8,307.5,1,1,0,0,0,85.8,116.5);
	this.instance_2.alpha = 0.5508;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(4).to({_off:true},6).wait(10));

	// liq_front
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNIX5AAIAAONg");
	this.shape_17.setTransform(218.6,363.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNICEAAIJ0DwIKLjwIB2AAIAAONg");
	this.shape_18.setTransform(218.6,363.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8H3IAAvuICEAAIJ0DxIKLjxIB2AAIAAPug");
	this.shape_19.setTransform(218.5607,358.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7IoIgCxPICEAAIJ0DwIKMjwIB1AAIACRPg");
	this.shape_20.setTransform(218.5214,353.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7JYIgCyvICEAAIJ0DwIKLjwIB2AAIACSvg");
	this.shape_21.setTransform(218.4821,349.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6KIIgE0PICEAAIJ0DwIKMjwIB1AAIAEUPg");
	this.shape_22.setTransform(218.4429,344.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6K4IgE1wICEAAIJ0DxIKMjxIB1AAIAEVwg");
	this.shape_23.setTransform(218.4036,339.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6LpIgE3RICEAAIJ0DwIKLjwIB2AAIAEXRg");
	this.shape_24.setTransform(218.3643,334.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,204,255,0.886)").s().p("Ar5MZIgG4xICEAAIJ0DwIKMjwIB1AAIAGYxg");
	this.shape_25.setTransform(218.325,329.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},10).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).wait(10));

	// obj
	this.instance_3 = new lib.obj2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(219.75,101,1,1,0,0,0,65,62);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:275.65},4,cjs.Ease.cubicOut).wait(1).to({y:274.05},0).wait(1).to({y:265.3},0).wait(1).to({y:262.05},0).wait(1).to({y:257.35},0).wait(1).to({y:255.05},0).to({_off:true},1).wait(10));

	// liq_back
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,204,255,0.886)").s().p("AosInQjmgwAAhEIAAgEIAAAAIAAtfIAAgCQAAhEDmgwQDngwFFAAQFGAADmAwQDnAwABBEIAAACIAANfIgBAAIABAEQgBBEjnAwQjmAwlGAAQlFAAjngwg");
	this.shape_26.setTransform(220.85,361.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,204,255,0.886)").s().p("AgXKSQitgCiQgTQiXgWhiglIAAAAIgEgCIAAAAQjChBABhUIAAgEIAAAAIAAuCIAAgBIAAgCIAAAAQAAhIDYg0IARgEQC8grD6gIQBFgBBHABQCsACCQATQCXAWBiAlIABABQDFBCAABUIAAACIAAOCIAAABIAAAEIAAAAQgBBJjYAzIgRAEQi7Arj7AHQgxACgzAAIgngBg");
	this.shape_27.setTransform(220.7714,355.823);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,204,255,0.886)").s().p("AgwLOQi0gFiUgaQikgghSgyIAAAAIgDgCIAAAAQiihVAAhiIABgFIgBAAIAAulIAAgBIAAgCIAAAAQAAhQDbg5IASgFQDCgwEEgGQBJgBBIACQC0AECUAaQCkAgBSAyIABACQCjBVAABjIAAACIAAOlIAAABIAAAFIAAAAQAABPjbA5IgRAFQjCAwkEAGIhKAAIhHAAg");
	this.shape_28.setTransform(220.6929,350.2202);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,204,255,0.886)").s().p("AhIMJQi8gHiYghQiygqhBg+IAAgBIgCgDIgBAAQiBhnABhyIAAgFIAAAAIAAvJIAAAAIAAgCIAAgBQAAhXDdg+IASgFQDIg1EPgFQBLgBBLACQC7AHCYAhQCxAqBBA/IACACQCCBoABBzIAAACIAAPIIAAACIAAAEIAAABQgBBWjdA+IgSAFQjHA1kQAFIg2AAQgvAAgwgBg");
	this.shape_29.setTransform(220.6143,344.6186);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,204,255,0.886)").s().p("AhhNEQjDgKicgnQi/gzgxhMIAAgBIgCgEIAAAAQhgh5AAiCIAAgFIAAAAIAAvsIAAgBIAAgCIAAAAQAAhfDfhCIASgGQDPg7EZgDQBOgBBNADQDDAKCcAnQC/A0AxBMIAAACQBjB7AACDIAAACIAAPsIAAABIAAAFIAAAAQgBBejfBDIgTAFQjNA7kaADIglAAQg7AAg7gCg");
	this.shape_30.setTransform(220.5357,339.0185);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,204,255,0.886)").s().p("Ah5N/QjLgMiggtQjMg+ghhZIAAgBIgBgFIAAAAQhAiLgBiSIABgFIgBAAIAAwQIAAAAIAAgCIAAgBQAAhlDihIIATgGQDVhAEjgDQBSAABOAEQDLAMCgAuQDMA+AgBZIABADQBBCNAACTIAAACIAAQPIAAACIAAAFIAAAAQAABljiBHIgSAGQjUBAkkADIgXAAQhGAAhDgEg");
	this.shape_31.setTransform(220.4571,333.4196);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,204,255,0.886)").s().p("AiSO6QjSgOikg0QjZhIgRhmIAAgBIAAgFIAAAAQghifAAihIABgFIgBAAIAAwzIAAAAIAAgCIAAgCQABhsDkhNIATgHQDbhFEugBQBVAABQAFQDSAOCkA0QDZBIAQBnIABADQAgCgAACjIAAACIAAQyIAAACIAAAFIAAABQAABrjkBNIgTAHQjaBFkvABIgLAAQhOAAhMgFg");
	this.shape_32.setTransform(220.3786,327.8218);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,204,255,0.886)").s().p("AosOqQjmhSAAhzIAAgHIAAAAIAA2+IAAgDQAAh0DmhSQDnhRFFAAQFGAADmBRQDnBSABB0IAAADIAAW+IAAAHQgBBzjnBSQjmBRlGAAQlFAAjnhRg");
	this.shape_33.setTransform(220.3,322.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},10).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(10));

	// cup
	this.instance_4 = new lib.cup1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(219.8,307.5,1,1,0,0,0,85.8,116.5);
	this.instance_4.alpha = 0.5508;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:true},6).wait(20));

	// liq_front
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNIX5AAIAAONg");
	this.shape_34.setTransform(218.6,363.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HHIAAuNICEAAIJ0DwIKLjwIB2AAIAAONg");
	this.shape_35.setTransform(218.6,363.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,204,255,0.886)").s().p("Ar8HQIAAueICEAAIJ0DjIKLjjIB2AAIAAOeg");
	this.shape_36.setTransform(219.125,363.0643);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7HYIgCuvICEAAIJ0DYIKMjYIB1AAIACOvg");
	this.shape_37.setTransform(219.65,362.5036);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,204,255,0.886)").s().p("Ar7HgIgCu/ICEAAIJ0DMIKLjMIB2AAIACO/g");
	this.shape_38.setTransform(220.175,361.9429);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6HoIgEvPICEAAIJ0C/IKMi/IB1AAIAEPPg");
	this.shape_39.setTransform(220.7,361.3821);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6HwIgEvgICEAAIJ0C0IKMi0IB1AAIAEPgg");
	this.shape_40.setTransform(221.225,360.8214);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,204,255,0.886)").s().p("Ar6H5IgEvxICEAAIJ0CnIKLinIB2AAIAEPxg");
	this.shape_41.setTransform(221.75,360.2607);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,204,255,0.886)").s().p("Ar5IBIgGwBICEAAIJ0CbIKMibIB1AAIAGQBg");
	this.shape_42.setTransform(222.275,359.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},1).wait(20));

	// Layer_1
	this.instance_5 = new lib.obj1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(219.75,96,1,1,0,0,0,65,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:307.5},4,cjs.Ease.cubicOut).wait(1).to({x:219.65,y:306},0).wait(1).to({x:219.15,y:297.95},0).wait(1).to({x:218.95,y:294.95},0).wait(1).to({x:218.7,y:290.55},0).wait(1).to({x:218.6,y:288.45},0).to({_off:true},1).wait(20));

	// liq_back
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,204,255,0.886)").s().p("AosInQjmgwAAhEIAAgEIAAAAIAAtfIAAgCQAAhEDmgwQDngwFFAAQFGAADmAwQDnAwABBEIAAACIAANfIgBAAIABAEQgBBEjnAwQjmAwlGAAQlFAAjngwg");
	this.shape_43.setTransform(220.85,361.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,204,255,0.886)").s().p("AgGJoQkRgBjPgjQgrgIgngJQh3gbgxgjIgEgCIAAAAQgugfAAgjIAAgEIAAAAIAAtpIAAgBIAAgBIAAgBQAAhEDfgxIAIgCQDZguErgDIAuAAQERABDNAjQAsAIAoAJQB3AbAxAiIACABQAxAgAAAkIAAACIAANpIAAABIAAADIAAACQgEBEjhAxIgDABQjZAuktADIgsAAg");
	this.shape_44.setTransform(220.7714,360.1245);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,204,255,0.886)").s().p("AgMJ5QkWgBjPgnQgsgIgngKQh8gfgpgnIgCgDIgBAAQgngiAAglIABgEIgBAAIAAtzIAAgBIAAgBIAAgBQABhHDggyIAIgCQDbgvEvgDIAuAAQEUABDPAnQAtAIAnAKQB7AfApAmIADACQAnAjAAAmIAAACIAANzIAAABIAAADIAAACQgCBHjiAxIgEABQjbAwkxADIgrAAg");
	this.shape_45.setTransform(220.6929,358.823);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,204,255,0.886)").s().p("AgTKJQkZgBjRgqQgtgJgmgKQiAgjghgsIgCgDIAAAAQggglABgnIAAgEIAAAAIAAt9IAAgBIAAgBIAAgBQAAhJDhg0IAIgCQDdgxEygBIAvgBQEYACDQApQAtAKAoAKQB/AjAhArIABACQAhAmAAAoIAAACIAAN9IAAABIAAADIAAACQgCBJjkAzIgDABQjdAyk1ACIgsgBg");
	this.shape_46.setTransform(220.6143,357.5204);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,204,255,0.886)").s().p("AgaKaQkcgCjTgtQgtgJgmgLQiFgmgYgyIgCgEIAAAAQgXgnAAgpIAAgEIAAAAIAAuHIAAgBIAAgBIAAgBQAAhLDjg2IAIgCQDegyE2gBIAvAAQEcACDQAsQAvAKAoALQCDAnAYAwIABACQAZApAAAqIAAACIAAOHIAAABIAAADIAAACQgCBLjkA1IgEABQjfAzk4ABIgtAAg");
	this.shape_47.setTransform(220.5357,356.2168);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,204,255,0.886)").s().p("AggKrQkhgDjUgvQgtgKgmgMQiJgqgRg3IgBgEIAAAAQgQgqAAgrIABgEIgBAAIAAuRIAAgBIAAgBIAAgCQAAhMDlg3IAIgCQDgg0E6gBIAvAAQEgADDRAvQAwALAnAMQCHAqARA1IABACQAPAsAAAtIAAACIAAOQIAAABIAAADIAAACQgBBNjlA2IgDABQjiA1k7ABIgtAAg");
	this.shape_48.setTransform(220.4571,354.9122);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,204,255,0.886)").s().p("AgnK8QkkgDjVgzQgvgLglgMQiOgtgIg8IAAgFIgBAAQgIgtAAgtIABgEIgBAAIAAubIAAgBIAAgBIAAgCQABhODlg5IAIgCQDig2E9AAIAwAAQEjAEDTAxQAxAMAnANQCLAuAIA6IAAACQAJAvgBAvIAAACIAAOaIAAABIAAADIAAACQAABPjmA4IgEABQjjA3lAAAIgtAAg");
	this.shape_49.setTransform(220.3786,353.6066);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,204,255,0.886)").s().p("AosKTQjmg5AAhRIAAgFIAAAAIAAwKIAAgCQAAhRDmg6QDng5FFAAQFGAADmA5QDnA6ABBRIAAACIAAQKIAAAFQgBBRjnA5QjmA6lGAAQlFAAjng6g");
	this.shape_50.setTransform(220.3,352.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134,34,171.5,390.2);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,20.2,20.2), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,20.2,20.2), null);


(lib.NonNativeArt_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NonNativeArt_1_0, new cjs.Rectangle(0,0,20.2,20.2), null);


(lib.NonNativeArt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NonNativeArt_1, new cjs.Rectangle(0,0,20.2,20.2), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	this.instance_1 = new lib.NonNativeArt_1_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiAkQgPgPAAgVQAAgTAPgPQAOgPAUAAQAUAAAQAPQAOAPAAATQAAAVgOAPQgQAOgUAAQgUAAgOgOg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(5,5,10,10), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjBkIAAjHIDHAAIAADHg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	this.instance_1 = new lib.NonNativeArt_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhGBHQgdgdAAgqQAAgpAdgcQAdgeApAAQApAAAdAeQAeAdAAAoQAAAqgeAdQgdAdgpAAQgpAAgdgdg");
	mask.setTransform(10,10);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.1,1,1,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,20,20), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhNBOQggggAAguQAAgtAgggQAhggAsAAQAuAAAfAgQAhAgAAAtQAAAtghAhQgfAgguAAQgsAAghgggAg+g+QgbAaAAAkQAAAlAbAbQAZAaAlAAQAlAAAbgaQAagbAAglQAAgkgagaQgbgbglAAQglAAgZAbg");
	mask.setTransform(11,11);

	// Layer_3
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(11.1,11.1,1.0618,1.0618,0,0,0,10.1,10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.4,0.4,21.400000000000002,21.400000000000002), null);


(lib.btn_act = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,10.1,10.1);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_act, new cjs.Rectangle(-11,-11,22,22), null);


// stage content:
(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var main = this;
		
		this.stop();
		
		this.btn_cup1.addEventListener("click",switchCup);
		this.btn_cup2.addEventListener("click",switchCup);
		this.btn_cup3.addEventListener("click",switchCup);
		
		this.btn_obj1.addEventListener("click",switchObj);
		this.btn_obj2.addEventListener("click",switchObj);
		this.btn_obj3.addEventListener("click",switchObj);
		
		this.btn_liq1.addEventListener("click",switchLiq);
		this.btn_liq2.addEventListener("click",switchLiq);
		
		this.btn_start.addEventListener("click",playAni);
		
		function playAni(){
			if(obj_num==1&&liq_num==1&&cup_num==1){
				main.ani.gotoAndPlay(1);
			}
			else if(obj_num==2&&liq_num==1&&cup_num==1){
				main.ani.gotoAndPlay(11);
			}
			else if(obj_num==3&&liq_num==1&&cup_num==1){
				main.ani.gotoAndPlay(21);
			}
		}
		function resetCup(){
			main.btn_cup1_active.visible = false;
			main.btn_cup2_active.visible = false;
			main.btn_cup3_active.visible = false;
		}
		function resetObj(){
			main.btn_obj1_active.visible = false;
			main.btn_obj2_active.visible = false;
			main.btn_obj3_active.visible = false;
		}
		function resetLiq(){
			main.btn_liq1_active.visible = false;
			main.btn_liq2_active.visible = false;
		}
		function switchCup(e){
			resetCup();
			switch(e.target.name){
				case "btn_cup1":
					main.btn_cup1_active.visible = true;
					cup_num = 1;
					break;
				case "btn_cup2":
					main.btn_cup2_active.visible = true;
					cup_num = 2;
					break;
				case "btn_cup3":
					main.btn_cup3_active.visible = true;
					cup_num = 3;
					break;
			}
			changeAni();
		}
		
		function switchObj(e){
			resetObj();
			switch(e.target.name){
				case "btn_obj1":
					main.btn_obj1_active.visible = true;
					obj_num=1;
					break;
				case "btn_obj2":
					main.btn_obj2_active.visible = true;
					obj_num=2;
					break;
				case "btn_obj3":
					main.btn_obj3_active.visible = true;
					obj_num=3;
					break;
			}
			changeAni();
		}
		
		function switchLiq(e){
			resetLiq();
			switch(e.target.name){
				case "btn_liq1":
					main.btn_liq1_active.visible = true;
					liq_num=1;
					break;
				case "btn_liq2":
					main.btn_liq2_active.visible = true;
					liq_num=2;
					break;
			}
			changeAni();
		}
		function changeAni(){
			if(obj_num==1&&liq_num==1&&cup_num==1){
				main.ani.gotoAndStop(0);
			}
			else if(obj_num==2&&liq_num==1&&cup_num==1){
				main.ani.gotoAndStop(10);
			}
			else if(obj_num==3&&liq_num==1&&cup_num==1){
				main.ani.gotoAndStop(20);
			}
			else if(obj_num==1&&liq_num==2&&cup_num==1){
				
			}
			else if(obj_num==2&&liq_num==2&&cup_num==1){
				
			}
			else if(obj_num==3&&liq_num==2&&cup_num==1){
				
			}
			else if(obj_num==1&&liq_num==1&&cup_num==2){
				
			}
			else if(obj_num==2&&liq_num==1&&cup_num==2){
				
			}
			else if(obj_num==3&&liq_num==1&&cup_num==2){
				
			}
			else if(obj_num==1&&liq_num==2&&cup_num==2){
				
			}
			else if(obj_num==2&&liq_num==2&&cup_num==2){
				
			}
			else if(obj_num==3&&liq_num==2&&cup_num==2){
				
			}
			else if(obj_num==1&&liq_num==1&&cup_num==3){
				
			}
			else if(obj_num==2&&liq_num==1&&cup_num==3){
				
			}
			else if(obj_num==3&&liq_num==1&&cup_num==3){
				
			}
			else if(obj_num==1&&liq_num==2&&cup_num==3){
				
			}
			else if(obj_num==2&&liq_num==2&&cup_num==3){
				
			}
			else if(obj_num==3&&liq_num==2&&cup_num==3){
				
			}
		}
		var obj_num=1;
		var liq_num=1;
		var cup_num=1;
		function init(){
			resetCup();	
			resetObj();
			resetLiq();
			main.btn_obj1_active.visible = true;
			main.btn_liq1_active.visible = true;
			main.btn_cup1_active.visible = true;
			
		}
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ani
	this.ani = new lib.ani();
	this.ani.name = "ani";
	this.ani.parent = this;
	this.ani.setTransform(687.5,432.5,1,1,0,0,0,195.5,229.5);

	this.timeline.addTween(cjs.Tween.get(this.ani).wait(1));

	// activeBtn
	this.btn_cup3_active = new lib.btn_act();
	this.btn_cup3_active.name = "btn_cup3_active";
	this.btn_cup3_active.parent = this;
	this.btn_cup3_active.setTransform(40.05,663);

	this.btn_cup2_active = new lib.btn_act();
	this.btn_cup2_active.name = "btn_cup2_active";
	this.btn_cup2_active.parent = this;
	this.btn_cup2_active.setTransform(39.95,613.15);

	this.btn_cup1_active = new lib.btn_act();
	this.btn_cup1_active.name = "btn_cup1_active";
	this.btn_cup1_active.parent = this;
	this.btn_cup1_active.setTransform(40.05,563.2);

	this.btn_liq2_active = new lib.btn_act();
	this.btn_liq2_active.name = "btn_liq2_active";
	this.btn_liq2_active.parent = this;
	this.btn_liq2_active.setTransform(40.05,460.4);

	this.btn_liq1_active = new lib.btn_act();
	this.btn_liq1_active.name = "btn_liq1_active";
	this.btn_liq1_active.parent = this;
	this.btn_liq1_active.setTransform(40.05,413.4);

	this.btn_obj3_active = new lib.btn_act();
	this.btn_obj3_active.name = "btn_obj3_active";
	this.btn_obj3_active.parent = this;
	this.btn_obj3_active.setTransform(40.05,313.85);

	this.btn_obj2_active = new lib.btn_act();
	this.btn_obj2_active.name = "btn_obj2_active";
	this.btn_obj2_active.parent = this;
	this.btn_obj2_active.setTransform(40.05,263.8);

	this.btn_obj1_active = new lib.btn_act();
	this.btn_obj1_active.name = "btn_obj1_active";
	this.btn_obj1_active.parent = this;
	this.btn_obj1_active.setTransform(40.05,213.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_obj1_active},{t:this.btn_obj2_active},{t:this.btn_obj3_active},{t:this.btn_liq1_active},{t:this.btn_liq2_active},{t:this.btn_cup1_active},{t:this.btn_cup2_active},{t:this.btn_cup3_active}]}).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9999FF").s().p("AlHBJIAAiRIKPAAIAACRg");
	this.shape.setTransform(135.25,457.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AlHBJIAAiRIKPAAIAACRg");
	this.shape_1.setTransform(135.25,405.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.btn_start = new lib.btn_start_1();
	this.btn_start.name = "btn_start";
	this.btn_start.parent = this;
	this.btn_start.setTransform(896.8,712.2,1,1,0,0,0,88.8,30.2);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 2, false, new lib.btn_start_1(), 3);

	this.num_ml = new cjs.Text("", "40px 'Heiti TC'", "#666666");
	this.num_ml.name = "num_ml";
	this.num_ml.textAlign = "right";
	this.num_ml.lineHeight = 42;
	this.num_ml.lineWidth = 100;
	this.num_ml.parent = this;
	this.num_ml.setTransform(329.15,245.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AidCnIgPgKQAcgKATgPQATgPANgVQALgVAGgbQAGgbABghIg8ABIguADIAAgbIAuACIA8ABIAAhbIgVAGIgRAFIgTAEIgWAGIgDgPIgIgNIAagCIAXgEIAWgFIAZgGIAZgIIAQgGIAKgFIAIgGIAJAMIAKAHIADAEIgBAEIgCAEIgEABIgGgBIgKACIgQADIgYAGIAABiIBuAAIAAhUIgBgsIgEgSIAPADIAQABQAIAAABADQABAEgFADQgHAEAAAQIAABwIAwAAIAngDIAAAbIgogDIgvgBIAAB+IABAdIACAfIgfAAIADgeIABgeIAAh+IhuAAQgBAkgHAeQgHAdgNAYQgMAXgTASQgSASgZANg");
	this.shape_2.setTransform(393.125,265.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AAUC1QgRgCgGgEQgJgEgCgFQgCgGAAgJIAAgcIguAEIgjADIgdADIgdAEIAAgYIAegBIAegBIAjgCIAsgDIAAgYIgjADIgaACIgUADIgVAEIAAgaIATABIATAAIAagBIAmgCIAAgaIgZADIgXACIgUABIgYABIgCgMIgEgMIAYABIAXAAIAXgBIAegCQAYgCAXgEQAYgEASgJIAIAMIAIAKQADADAAACQgBABgFgBIgTAAIgqAFIgLABIgKACIAAAbIAegDIAXgCIATgCIAVgEIAAAXIgUAAIgUABIgXABIgeACIAAAZIAngDIAfgDIAZgDIAZgDIAAAWIgbABIgYABIgeACIgnACIAAAWIABAIQACAEAGADIARADIAfABQAXAAAPgBQAOgBAIgFQAIgEADgIQAEgIACgNQAFAGAGADIAPAEIgLAYQgHAJgJAGQgLAFgRACQgSABgeAAQgcAAgPgBgAilAwIAAhGIAYABIAfABIAtAAIA+AAIA+AAIAsAAIAggBIAYgBIAABCIgYAAIAAgtIkVAAIAAAxgABUgkIgWAAIgdAAIglAAIgjAAIgbAAIgXABIgVAAIACgQIAAgPIAAgRIgCgRIAVABIAXABIAbAAIAjAAIAjAAIAbAAIAWgBIAVgBIAAAKIgBAIIAAAHIAAAJIAAAKIAAAHIABAGIAAAIIgRgBgAhVg2ICjAAIAAgbIijAAgAB8hyIgigBIgpgBIgzAAIg1AAIgpABIgiABIggACIAAgaIAfACIAfABIAoABIAzAAIgHgHIgGgHIgJgHIgLgJIAOgRIANALIALAKIAKAMIAMAOIAsAAIAjgBIAfgCIAcgBIAAAag");
	this.shape_3.setTransform(353.15,264.875);

	this.btn_cup3 = new lib.btn_0();
	this.btn_cup3.name = "btn_cup3";
	this.btn_cup3.parent = this;
	this.btn_cup3.setTransform(103.6,662.1);
	new cjs.ButtonHelper(this.btn_cup3, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_cup2 = new lib.btn_0();
	this.btn_cup2.name = "btn_cup2";
	this.btn_cup2.parent = this;
	this.btn_cup2.setTransform(103.6,613.1);
	new cjs.ButtonHelper(this.btn_cup2, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_cup1 = new lib.btn_0();
	this.btn_cup1.name = "btn_cup1";
	this.btn_cup1.parent = this;
	this.btn_cup1.setTransform(103.6,563.1);
	new cjs.ButtonHelper(this.btn_cup1, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_liq2 = new lib.btn_0();
	this.btn_liq2.name = "btn_liq2";
	this.btn_liq2.parent = this;
	this.btn_liq2.setTransform(103.6,464.1);
	new cjs.ButtonHelper(this.btn_liq2, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_liq1 = new lib.btn_0();
	this.btn_liq1.name = "btn_liq1";
	this.btn_liq1.parent = this;
	this.btn_liq1.setTransform(103.6,413.1);
	new cjs.ButtonHelper(this.btn_liq1, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_obj3 = new lib.btn_0();
	this.btn_obj3.name = "btn_obj3";
	this.btn_obj3.parent = this;
	this.btn_obj3.setTransform(103.6,313.05);
	new cjs.ButtonHelper(this.btn_obj3, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_obj2 = new lib.btn_0();
	this.btn_obj2.name = "btn_obj2";
	this.btn_obj2.parent = this;
	this.btn_obj2.setTransform(103.6,263.05);
	new cjs.ButtonHelper(this.btn_obj2, 0, 1, 2, false, new lib.btn_0(), 3);

	this.btn_obj1 = new lib.btn_0();
	this.btn_obj1.name = "btn_obj1";
	this.btn_obj1.parent = this;
	this.btn_obj1.setTransform(103.6,212.55);
	new cjs.ButtonHelper(this.btn_obj1, 0, 1, 2, false, new lib.btn_0(), 3);

	this.instance = new lib.Asset22x100();
	this.instance.parent = this;
	this.instance.setTransform(0,1,0.499,0.499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_obj1},{t:this.btn_obj2},{t:this.btn_obj3},{t:this.btn_liq1},{t:this.btn_liq2},{t:this.btn_cup1},{t:this.btn_cup2},{t:this.btn_cup3},{t:this.shape_3},{t:this.shape_2},{t:this.num_ml},{t:this.btn_start}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,385,512,383);
// library properties:
lib.properties = {
	id: '4BB7B216624E497C98C3DC5126AA5B20',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png?1573668986514", id:"Image"},
		{src:"images/Image_0.png?1573668986514", id:"Image_0"},
		{src:"images/Image_1.png?1573668986514", id:"Image_1"},
		{src:"images/Image_2.png?1573668986514", id:"Image_2"},
		{src:"images/Asset22x100.jpg?1573668986514", id:"Asset22x100"},
		{src:"images/btn_start.png?1573668986514", id:"btn_start"},
		{src:"images/cup1.png?1573668986514", id:"cup1"},
		{src:"images/obj_1.png?1573668986514", id:"obj_1"},
		{src:"images/obj_2.png?1573668986514", id:"obj_2"},
		{src:"images/obj_3.png?1573668986514", id:"obj_3"}
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
an.compositions['4BB7B216624E497C98C3DC5126AA5B20'] = {
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