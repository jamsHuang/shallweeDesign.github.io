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


(lib.mc_sb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset22x8();
	this.instance.parent = this;
	this.instance.setTransform(-51.75,-21.75,0.5,0.5);

	this.instance_1 = new lib.Asset32x8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51.75,-21.75,0.5,0.5);

	this.instance_2 = new lib.Asset42x8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.75,-21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.7,-21.7,103.5,43.5);


(lib.mc_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset42x8();
	this.instance.parent = this;
	this.instance.setTransform(-51.75,-21.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_blue, new cjs.Rectangle(-51.7,-21.7,103.5,43.5), null);


(lib.hitbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.647)").s().p("Ao/E0IAApnIR/AAIAAJng");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitbg, new cjs.Rectangle(-57.6,-30.7,115.2,61.5), null);


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


(lib.hit_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text_blue = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_blue.name = "text_blue";
	this.text_blue.lineHeight = 17;
	this.text_blue.lineWidth = 15;
	this.text_blue.parent = this;
	this.text_blue.setTransform(89.8,42.5);

	this.text_yellow = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_yellow.name = "text_yellow";
	this.text_yellow.lineHeight = 17;
	this.text_yellow.lineWidth = 16;
	this.text_yellow.parent = this;
	this.text_yellow.setTransform(89.8,6.6);

	this.text_white = new cjs.Text("0", "bold 15px 'Helvetica'", "#333333");
	this.text_white.name = "text_white";
	this.text_white.lineHeight = 17;
	this.text_white.lineWidth = 15;
	this.text_white.parent = this;
	this.text_white.setTransform(89.8,24.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02A0E7").s().p("AhCBEIAAgOIAPAAIAAgZIBnAAIAAAZIAPAAIAAAOgAAWA2IAPAAIAAgMIgPAAgAgIA2IAQAAIAAgMIgQAAgAgjA2IAOAAIAAgMIgOAAgAAXADIAMgGQAOALAHAIIgMAIQgIgKgNgLgAg4AYIAAg8IA+AAIAAALIgTAAIAAAGIAOAAIAAAaIgOAAIAAAGIASAAIAAALgAgqANIAPAAIAAgGIgPAAgAgqgDIAeAAIAAgFIgeAAgAgqgTIAPAAIAAgGIgPAAgAACgDQANgNAFgWIANADIgDALIAiAAIAAANIgnAAQgGALgIAHgAARgnIAAgGIghAAIAAAGIgQAAIAAgGIggAAIAAgPIAgAAIAAgHIAQAAIAAAHIAhAAIAAgHIAQAAIAAAHIAgAAIAAAPIggAAIAAAGg");
	this.shape.setTransform(75.275,48.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBGIAAgLIhNAAIAAALIgPAAIAAhzIAkAAQAEgLACgNIAQADQgCALgDAKIA3AAIAABzgAgmAsIBNAAIAAggIhNAAgAgmgBIBNAAIAAgeIhNAAg");
	this.shape_1.setTransform(75.25,29.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AAOA3IAFgIIgkAAIAGAHQgRAJgfAGIgHgNQAZgDAQgGIgXAAIAAgzIArAAIAAgGIg6AAIAAgOICCAAIAAAOIg6AAIAAAGIAqAAIAAAzIgSAAQASAEAQAGIgFANQgXgKgZgFgAAJAiIAbAAIAAgIIgbAAgAghAiIAcAAIAAgIIgcAAgAAJAPIAbAAIAAgIIgbAAgAghAPIAcAAIAAgIIgcAAgAgfgeIAAgSIgdAAIAAgNIAdAAIAAgIIAPAAIAAAIIAjAAIAAgIIAPAAIAAAIIAdAAIAAANIgdAAIAAASgAgQgpIAjAAIAAgHIgjAAg");
	this.shape_2.setTransform(75.125,11.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_white},{t:this.text_yellow},{t:this.text_blue}]}).wait(1));

	// Layer_4
	this.mark = new cjs.Text("A", "bold 60px 'Helvetica'", "#333333");
	this.mark.name = "mark";
	this.mark.textAlign = "center";
	this.mark.lineHeight = 62;
	this.mark.lineWidth = 53;
	this.mark.parent = this;
	this.mark.setTransform(30.05,3.35);

	this.timeline.addTween(cjs.Tween.get(this.mark).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AkckcII5AAIAAI5Io5AAg");
	this.shape_3.setTransform(30.225,29.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,204,153,0.62)").s().p("AkcEdIAAo5II5AAIAAI5g");
	this.shape_4.setTransform(30.225,29.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_3
	this.hitbg = new lib.hitbg();
	this.hitbg.name = "hitbg";
	this.hitbg.parent = this;
	this.hitbg.setTransform(57.6,30.1);

	this.timeline.addTween(cjs.Tween.get(this.hitbg).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_area, new cjs.Rectangle(0,-0.6,115.2,66), null);


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
		var pt_y = new createjs.Point(main.mc_yellow.x, main.mc_yellow.y);
		var pt_w = new createjs.Point(main.mc_white.x, main.mc_white.y);
		var pt_b = new createjs.Point(main.mc_blue.x, main.mc_blue.y);
		//
		var total = 0;
		//
		var area1 = [main.mc_area1.x, main.mc_area1.y, main.mc_area1.getBounds().height, main.mc_area1.getBounds().height];
		var area2 = [main.mc_area2.x, main.mc_area2.y, main.mc_area2.getBounds().height, main.mc_area2.getBounds().height];
		var area3 = [main.mc_area3.x, main.mc_area3.y, main.mc_area3.getBounds().height, main.mc_area3.getBounds().height];
		var area4 = [main.mc_area4.x, main.mc_area4.y, main.mc_area4.getBounds().height, main.mc_area4.getBounds().height];
		var area5 = [main.mc_area5.x, main.mc_area5.y, main.mc_area5.getBounds().height, main.mc_area5.getBounds().height];
		var area6 = [main.mc_area6.x, main.mc_area6.y, main.mc_area6.getBounds().height, main.mc_area6.getBounds().height];
		var area7 = [main.mc_area7.x, main.mc_area7.y, main.mc_area7.getBounds().height, main.mc_area7.getBounds().height];
		var area8 = [main.mc_area8.x, main.mc_area8.y, main.mc_area8.getBounds().height, main.mc_area8.getBounds().height];
		var area9 = [main.mc_area9.x, main.mc_area9.y, main.mc_area9.getBounds().height, main.mc_area9.getBounds().height];
		//var area10 = [main.mc_area10.x, main.mc_area10.y, main.mc_area10.getBounds().width, main.mc_area10.getBounds().height];
		//var area11 = [main.mc_area11.x, main.mc_area11.y, main.mc_area11.getBounds().width, main.mc_area11.getBounds().height];
		//
		var arr1 = [0, 0, 0];
		var arr2 = [0, 0, 0];
		var arr3 = [0, 0, 0];
		var arr4 = [0, 0, 0];
		var arr5 = [0, 0, 0];
		var arr6 = [0, 0, 0];
		var arr7 = [0, 0, 0];
		var arr8 = [0, 0, 0];
		var arr9 = [0, 0, 0];
		//var arr10 = [0, 0, 0];
		//var arr11 = [0, 0, 0];
		
		var sbArr = [];
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
		//main.mc_area10.mark.text = "J";
		//main.mc_area11.mark.text = "K";
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
		for (var i = 0; i < 9; i++) {
			var sb = new lib.mc_sb;
			sb.visible = false;
			sb.name = "sb" + i;
			sb.scaleX = 0.3;
			sb.scaleY = 0.3;
			sb.area = "";
			sb.col = "";
			sb.gotoAndStop(0);
			//console.log(sb.area,"a");
			sb.on("pressmove", moveSb);
			sb.on("pressup", releaseSb);
			//
			sbArr.push(sb);
			main.addChild(sb);
		}
		function moveSb(evt) {
			main.setChildIndex(evt.currentTarget, main.getNumChildren() - 1);
			var p = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
			evt.scaleX = 0.3;
			evt.scaleY = 0.3;
		
		}
		function releaseSb(e) {
			console.log(e.currentTarget, "re");
			if (main.getChildIndex(e.currentTarget) == (main.getNumChildren() - 1)) {
				//remove from orginal area
				if (e.currentTarget.area == "area1") {
					if (e.currentTarget.col == "yellow") {
						arr1[0] -= 1;
						main.mc_area1.text_yellow.text = arr1[0];
					} else if (e.currentTarget.col == "white") {
						arr1[1] -= 1;
						main.mc_area1.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr1[2] -= 1;
						main.mc_area1.text_blue.text = arr1[2];
					}
				} else if (e.currentTarget.area == "area2") {
					if (e.currentTarget.col == "yellow") {
						arr2[0] -= 1;
						main.mc_area2.text_yellow.text = arr2[0];
					} else if (e.currentTarget.col == "white") {
						arr2[1] -= 1;
						main.mc_area2.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr2[2] -= 1;
						main.mc_area2.text_blue.text = arr2[2];
					}
				} else if (e.currentTarget.area == "area3") {
					if (e.currentTarget.col == "yellow") {
						arr3[0] -= 1;
						main.mc_area3.text_yellow.text = arr3[0];
					} else if (e.currentTarget.col == "white") {
						arr3[1] -= 1;
						main.mc_area3.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr3[2] -= 1;
						main.mc_area3.text_blue.text = arr3[2];
					}
				} else if (e.currentTarget.area == "area4") {
					if (e.currentTarget.col == "yellow") {
						arr4[0] -= 1;
						main.mc_area4.text_yellow.text = arr4[0];
					} else if (e.currentTarget.col == "white") {
						arr4[1] -= 1;
						main.mc_area4.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr4[2] -= 1;
						main.mc_area4.text_blue.text = arr4[2];
					}
				} else if (e.currentTarget.area == "area5") {
					if (e.currentTarget.col == "yellow") {
						arr5[0] -= 1;
						main.mc_area5.text_yellow.text = arr5[0];
					} else if (e.currentTarget.col == "white") {
						arr5[1] -= 1;
						main.mc_area5.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr5[2] -= 1;
						main.mc_area5.text_blue.text = arr5[2];
					}
				} else if (e.currentTarget.area == "area6") {
					if (e.currentTarget.col == "yellow") {
						arr6[0] -= 1;
						main.mc_area6.text_yellow.text = arr6[0];
					} else if (e.currentTarget.col == "white") {
						arr6[1] -= 1;
						main.mc_area6.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr6[2] -= 1;
						main.mc_area6.text_blue.text = arr6[2];
					}
				} else if (e.currentTarget.area == "area7") {
					if (e.currentTarget.col == "yellow") {
						arr7[0] -= 1;
						main.mc_area7.text_yellow.text = arr7[0];
					} else if (e.currentTarget.col == "white") {
						arr7[1] -= 1;
						main.mc_area7.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr7[2] -= 1;
						main.mc_area7.text_blue.text = arr7[2];
					}
				} else if (e.currentTarget.area == "area8") {
					if (e.currentTarget.col == "yellow") {
						arr8[0] -= 1;
						main.mc_area8.text_yellow.text = arr8[0];
					} else if (e.currentTarget.col == "white") {
						arr8[1] -= 1;
						main.mc_area8.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr8[2] -= 1;
						main.mc_area8.text_blue.text = arr8[2];
					}
				} else if (e.currentTarget.area == "area9") {
					if (e.currentTarget.col == "yellow") {
						arr9[0] -= 1;
						main.mc_area9.text_yellow.text = arr9[0];
					} else if (e.currentTarget.col == "white") {
						arr9[1] -= 1;
						main.mc_area9.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr9[2] -= 1;
						main.mc_area9.text_blue.text = arr9[2];
					}
				} 
				/*
				else if (e.currentTarget.area == "area10") {
					if (e.currentTarget.col == "yellow") {
						arr10[0] -= 1;
						main.mc_area10.text_yellow.text = arr10[0];
					} else if (e.currentTarget.col == "white") {
						arr10[1] -= 1;
						main.mc_area10.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr10[2] -= 1;
						main.mc_area10.text_blue.text = arr10[2];
					}
				} else if (e.currentTarget.area == "area11") {
					if (e.currentTarget.col == "yellow") {
						arr11[0] -= 1;
						main.mc_area11.text_yellow.text = arr11[0];
					} else if (e.currentTarget.col == "white") {
						arr11[1] -= 1;
						main.mc_area11.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr11[2] -= 1;
						main.mc_area11.text_blue.text = arr11[2];
					}
				}
				*/
				//add to new area
				if (e.currentTarget.x >= area1[0] && e.currentTarget.x <= (area1[0] + area1[2]) && e.currentTarget.y >= area1[1] && e.currentTarget.y <= (area1[1] + area1[3])) {
					e.currentTarget.area = "area1";
					if (e.currentTarget.col == "yellow") {
						arr1[0] += 1;
						main.mc_area1.text_yellow.text = arr1[0];
					} else if (e.currentTarget.col == "white") {
						arr1[1] += 1;
						main.mc_area1.text_white.text = arr1[1];
					} else if (e.currentTarget.col == "blue") {
						arr1[2] += 1;
						main.mc_area1.text_blue.text = arr1[2];
					}
		
				} else if (e.currentTarget.x >= area2[0] && e.currentTarget.x <= (area2[0] + area2[2]) && e.currentTarget.y >= area2[1] && e.currentTarget.y <= (area2[1] + area2[3])) {
					e.currentTarget.area = "area2";
					if (e.currentTarget.col == "yellow") {
						arr2[0] += 1;
						main.mc_area2.text_yellow.text = arr2[0];
					} else if (e.currentTarget.col == "white") {
						arr2[1] += 1;
						main.mc_area2.text_white.text = arr2[1];
					} else if (e.currentTarget.col == "blue") {
						arr2[2] += 1;
						main.mc_area2.text_blue.text = arr2[2];
					}
		
				} else if (e.currentTarget.x >= area3[0] && e.currentTarget.x <= (area3[0] + area3[2]) && e.currentTarget.y >= area3[1] && e.currentTarget.y <= (area3[1] + area3[3])) {
					e.currentTarget.area = "area3";
					if (e.currentTarget.col == "yellow") {
						arr3[0] += 1;
						main.mc_area3.text_yellow.text = arr3[0];
					} else if (e.currentTarget.col == "white") {
						arr3[1] += 1;
						main.mc_area3.text_white.text = arr3[1];
					} else if (e.currentTarget.col == "blue") {
						arr3[2] += 1;
						main.mc_area3.text_blue.text = arr3[2];
					}
		
				} else if (e.currentTarget.x >= area4[0] && e.currentTarget.x <= (area4[0] + area4[2]) && e.currentTarget.y >= area4[1] && e.currentTarget.y <= (area4[1] + area4[3])) {
					e.currentTarget.area = "area4";
					if (e.currentTarget.col == "yellow") {
						arr4[0] += 1;
						main.mc_area4.text_yellow.text = arr4[0];
					} else if (e.currentTarget.col == "white") {
						arr4[1] += 1;
						main.mc_area4.text_white.text = arr4[1];
					} else if (e.currentTarget.col == "blue") {
						arr4[2] += 1;
						main.mc_area4.text_blue.text = arr4[2];
					}
		
				} else if (e.currentTarget.x >= area5[0] && e.currentTarget.x <= (area5[0] + area5[2]) && e.currentTarget.y >= area5[1] && e.currentTarget.y <= (area5[1] + area5[3])) {
					e.currentTarget.area = "area5";
					if (e.currentTarget.col == "yellow") {
						arr5[0] += 1;
						main.mc_area5.text_yellow.text = arr5[0];
					} else if (e.currentTarget.col == "white") {
						arr5[1] += 1;
						main.mc_area5.text_white.text = arr5[1];
					} else if (e.currentTarget.col == "blue") {
						arr5[2] += 1;
						main.mc_area5.text_blue.text = arr5[2];
					}
		
				} else if (e.currentTarget.x >= area6[0] && e.currentTarget.x <= (area6[0] + area6[2]) && e.currentTarget.y >= area6[1] && e.currentTarget.y <= (area6[1] + area6[3])) {
					e.currentTarget.area = "area6";
					if (e.currentTarget.col == "yellow") {
						arr6[0] += 1;
						main.mc_area6.text_yellow.text = arr6[0];
					} else if (e.currentTarget.col == "white") {
						arr6[1] += 1;
						main.mc_area6.text_white.text = arr6[1];
					} else if (e.currentTarget.col == "blue") {
						arr6[2] += 1;
						main.mc_area6.text_blue.text = arr6[2];
					}
		
				} else if (e.currentTarget.x >= area7[0] && e.currentTarget.x <= (area7[0] + area7[2]) && e.currentTarget.y >= area7[1] && e.currentTarget.y <= (area7[1] + area7[3])) {
					e.currentTarget.area = "area7";
					if (e.currentTarget.col == "yellow") {
						arr7[0] += 1;
						main.mc_area7.text_yellow.text = arr7[0];
					} else if (e.currentTarget.col == "white") {
						arr7[1] += 1;
						main.mc_area7.text_white.text = arr7[1];
					} else if (e.currentTarget.col == "blue") {
						arr7[2] += 1;
						main.mc_area7.text_blue.text = arr7[2];
					}
		
				} else if (e.currentTarget.x >= area8[0] && e.currentTarget.x <= (area8[0] + area8[2]) && e.currentTarget.y >= area8[1] && e.currentTarget.y <= (area8[1] + area8[3])) {
					e.currentTarget.area = "area8";
					if (e.currentTarget.col == "yellow") {
						arr8[0] += 1;
						main.mc_area8.text_yellow.text = arr8[0];
					} else if (e.currentTarget.col == "white") {
						arr8[1] += 1;
						main.mc_area8.text_white.text = arr8[1];
					} else if (e.currentTarget.col == "blue") {
						arr8[2] += 1;
						main.mc_area8.text_blue.text = arr8[2];
					}
		
				} else if (e.currentTarget.x >= area9[0] && e.currentTarget.x <= (area9[0] + area9[2]) && e.currentTarget.y >= area9[1] && e.currentTarget.y <= (area9[1] + area9[3])) {
					e.currentTarget.area = "area9";
					if (e.currentTarget.col == "yellow") {
						arr9[0] += 1;
						main.mc_area9.text_yellow.text = arr9[0];
					} else if (e.currentTarget.col == "white") {
						arr9[1] += 1;
						main.mc_area9.text_white.text = arr9[1];
					} else if (e.currentTarget.col == "blue") {
						arr9[2] += 1;
						main.mc_area9.text_blue.text = arr9[2];
					}
		
				} 
				/*
				else if (e.currentTarget.x >= area10[0] && e.currentTarget.x <= (area10[0] + area10[2]) && e.currentTarget.y >= area10[1] && e.currentTarget.y <= (area10[1] + area10[3])) {
					e.currentTarget.area = "area10";
					if (e.currentTarget.col == "yellow") {
						arr10[0] += 1;
						main.mc_area10.text_yellow.text = arr10[0];
					} else if (e.currentTarget.col == "white") {
						arr10[1] += 1;
						main.mc_area10.text_white.text = arr10[1];
					} else if (e.currentTarget.col == "blue") {
						arr10[2] += 1;
						main.mc_area10.text_blue.text = arr10[2];
					}
		
				} else if (e.currentTarget.x >= area11[0] && e.currentTarget.x <= (area11[0] + area11[2]) && e.currentTarget.y >= area11[1] && e.currentTarget.y <= (area11[1] + area11[3])) {
					e.currentTarget.area = "area11";
					if (e.currentTarget.col == "yellow") {
						arr11[0] += 1;
						main.mc_area11.text_yellow.text = arr11[0];
					} else if (e.currentTarget.col == "white") {
						arr11[1] += 1;
						main.mc_area11.text_white.text = arr11[1];
					} else if (e.currentTarget.col == "blue") {
						arr11[2] += 1;
						main.mc_area11.text_blue.text = arr11[2];
					}
		
				} 
				*/
				else {
					e.currentTarget.area = "";
					e.currentTarget.visible = false;
					e.currentTarget.x = -200;
					e.currentTarget.y = -200;
					for (var i = 0; i < pickArr.length; i++) {
						if (pickArr[i].name == e.currentTarget.name) {
							pickArr.splice(i, 1);
							sbArr.push(e.currentTarget);
						}
					}
					total -= 1;
					main.text_total.text = total;
				}
			}
		}
		
		function moveBoard(evt) {
			if (total < 9) {
				main.setChildIndex(evt.currentTarget, main.getNumChildren() - 1);
				var p = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = p.x;
				evt.currentTarget.y = p.y;
				evt.currentTarget.scaleX = 0.3;
				evt.currentTarget.scaleY = 0.3;
			}
		}
		var pickArr = [];
		function releaseBoard(evt) {
			if (evt.currentTarget.x >= area1[0] && evt.currentTarget.x <= (area1[0] + area1[2]) && evt.currentTarget.y >= area1[1] && evt.currentTarget.y <= (area1[1] + area1[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area1";
				if (evt.currentTarget.name == "mc_yellow") {
					arr1[0] += 1;
					msb.col = "yellow";
					msb.gotoAndStop(0);
					main.mc_area1.text_yellow.text = arr1[0];
				} else if (evt.currentTarget.name == "mc_white") {
					arr1[1] += 1;
					msb.col = "white";
					msb.gotoAndStop(1);
					main.mc_area1.text_white.text = arr1[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					arr1[2] += 1;
					msb.col = "blue";
					msb.gotoAndStop(2);
					main.mc_area1.text_blue.text = arr1[2];
				}
			} else if (evt.currentTarget.x >= area2[0] && evt.currentTarget.x <= (area2[0] + area2[2]) && evt.currentTarget.y >= area2[1] && evt.currentTarget.y <= (area2[1] + area2[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area2";
				if (evt.currentTarget.name == "mc_yellow") {
					arr2[0] += 1;
					msb.col = "yellow";
					msb.gotoAndStop(0);
					main.mc_area2.text_yellow.text = arr2[0];
				} else if (evt.currentTarget.name == "mc_white") {
					arr2[1] += 1;
					msb.col = "white";
					msb.gotoAndStop(1);
					main.mc_area2.text_white.text = arr2[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					arr2[2] += 1;
					msb.col = "blue";
					msb.gotoAndStop(2);
					main.mc_area2.text_blue.text = arr2[2];
				}
			} else if (evt.currentTarget.x >= area3[0] && evt.currentTarget.x <= (area3[0] + area3[2]) && evt.currentTarget.y >= area3[1] && evt.currentTarget.y <= (area3[1] + area3[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area3";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr3[0] += 1;
					main.mc_area3.text_yellow.text = arr3[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr3[1] += 1;
					main.mc_area3.text_white.text = arr3[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr3[2] += 1;
					main.mc_area3.text_blue.text = arr3[2];
				}
			} else if (evt.currentTarget.x >= area4[0] && evt.currentTarget.x <= (area4[0] + area4[2]) && evt.currentTarget.y >= area4[1] && evt.currentTarget.y <= (area4[1] + area4[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area4";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr4[0] += 1;
					main.mc_area4.text_yellow.text = arr4[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr4[1] += 1;
					main.mc_area4.text_white.text = arr4[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr4[2] += 1;
					main.mc_area4.text_blue.text = arr4[2];
				}
			} else if (evt.currentTarget.x >= area5[0] && evt.currentTarget.x <= (area5[0] + area5[2]) && evt.currentTarget.y >= area5[1] && evt.currentTarget.y <= (area5[1] + area5[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area5";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr5[0] += 1;
					main.mc_area5.text_yellow.text = arr5[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr5[1] += 1;
					main.mc_area5.text_white.text = arr5[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr5[2] += 1;
					main.mc_area5.text_blue.text = arr5[2];
				}
			} else if (evt.currentTarget.x >= area6[0] && evt.currentTarget.x <= (area6[0] + area6[2]) && evt.currentTarget.y >= area6[1] && evt.currentTarget.y <= (area6[1] + area6[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area6";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr6[0] += 1;
					main.mc_area6.text_yellow.text = arr6[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr6[1] += 1;
					main.mc_area6.text_white.text = arr6[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr6[2] += 1;
					main.mc_area6.text_blue.text = arr6[2];
				}
			} else if (evt.currentTarget.x >= area7[0] && evt.currentTarget.x <= (area7[0] + area7[2]) && evt.currentTarget.y >= area7[1] && evt.currentTarget.y <= (area7[1] + area7[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area7";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr7[0] += 1;
					main.mc_area7.text_yellow.text = arr7[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr7[1] += 1;
					main.mc_area7.text_white.text = arr7[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr7[2] += 1;
					main.mc_area7.text_blue.text = arr7[2];
				}
			} else if (evt.currentTarget.x >= area8[0] && evt.currentTarget.x <= (area8[0] + area8[2]) && evt.currentTarget.y >= area8[1] && evt.currentTarget.y <= (area8[1] + area8[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area8";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr8[0] += 1;
					main.mc_area8.text_yellow.text = arr8[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr8[1] += 1;
					main.mc_area8.text_white.text = arr8[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr8[2] += 1;
					main.mc_area8.text_blue.text = arr8[2];
				}
			} else if (evt.currentTarget.x >= area9[0] && evt.currentTarget.x <= (area9[0] + area9[2]) && evt.currentTarget.y >= area9[1] && evt.currentTarget.y <= (area9[1] + area9[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area9";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr9[0] += 1;
					main.mc_area9.text_yellow.text = arr9[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr9[1] += 1;
					main.mc_area9.text_white.text = arr9[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr9[2] += 1;
					main.mc_area9.text_blue.text = arr9[2];
				}
			} 
			/*
			else if (evt.currentTarget.x >= area10[0] && evt.currentTarget.x <= (area10[0] + area10[2]) && evt.currentTarget.y >= area10[1] && evt.currentTarget.y <= (area10[1] + area10[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area10";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr10[0] += 1;
					main.mc_area10.text_yellow.text = arr10[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr10[1] += 1;
					main.mc_area10.text_white.text = arr10[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr10[2] += 1;
					main.mc_area10.text_blue.text = arr10[2];
				}
			} else if (evt.currentTarget.x >= area11[0] && evt.currentTarget.x <= (area11[0] + area11[2]) && evt.currentTarget.y >= area11[1] && evt.currentTarget.y <= (area11[1] + area11[3])) {
				total += 1;
				msb = sbArr[0];
				sbArr.splice(0, 1);
				pickArr.push(msb);
				msb.x = evt.currentTarget.x;
				msb.y = evt.currentTarget.y;
				msb.visible = true;
				msb.area = "area11";
				if (evt.currentTarget.name == "mc_yellow") {
					msb.col = "yellow";
					msb.gotoAndStop(0);
					arr11[0] += 1;
					main.mc_area11.text_yellow.text = arr11[0];
				} else if (evt.currentTarget.name == "mc_white") {
					msb.col = "white";
					msb.gotoAndStop(1);
					arr11[1] += 1;
					main.mc_area11.text_white.text = arr11[1];
				} else if (evt.currentTarget.name == "mc_blue") {
					msb.col = "blue";
					msb.gotoAndStop(2);
					arr11[2] += 1;
					main.mc_area11.text_blue.text = arr11[2];
				}
			}
			*/
			switch (evt.currentTarget.name) {
				case "mc_yellow":
					evt.currentTarget.x = pt_y.x;
					evt.currentTarget.y = pt_y.y;
					break;
				case "mc_white":
					evt.currentTarget.x = pt_w.x;
					evt.currentTarget.y = pt_w.y;
					break;
				case "mc_blue":
					evt.currentTarget.x = pt_b.x;
					evt.currentTarget.y = pt_b.y;
					break;
			}
		
			evt.currentTarget.scaleX = 1;
			evt.currentTarget.scaleY = 1;
			main.text_total.text = total;
		}
		main.btn_send.on('click', function (evt) {
			console.log('click');
			var canvas = document.getElementById("canvas");
			var dataURL = canvas.toDataURL("image/jpeg", 1.0);
			var image = new Image();
		        image.src = dataURL;
		
		        var w = window.open("");
		        w.document.write(image.outerHTML);
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mc_sb = new lib.mc_sb();
	this.mc_sb.name = "mc_sb";
	this.mc_sb.parent = this;
	this.mc_sb.setTransform(-96.95,447);

	this.mc_area9 = new lib.hit_area();
	this.mc_area9.name = "mc_area9";
	this.mc_area9.parent = this;
	this.mc_area9.setTransform(497,513.35);

	this.mc_area8 = new lib.hit_area();
	this.mc_area8.name = "mc_area8";
	this.mc_area8.parent = this;
	this.mc_area8.setTransform(279.95,513.35);

	this.mc_area7 = new lib.hit_area();
	this.mc_area7.name = "mc_area7";
	this.mc_area7.parent = this;
	this.mc_area7.setTransform(62.6,513.35);

	this.mc_area6 = new lib.hit_area();
	this.mc_area6.name = "mc_area6";
	this.mc_area6.parent = this;
	this.mc_area6.setTransform(497,333);

	this.mc_area5 = new lib.hit_area();
	this.mc_area5.name = "mc_area5";
	this.mc_area5.parent = this;
	this.mc_area5.setTransform(279.95,333);

	this.mc_area3 = new lib.hit_area();
	this.mc_area3.name = "mc_area3";
	this.mc_area3.parent = this;
	this.mc_area3.setTransform(497,149.35);

	this.mc_area2 = new lib.hit_area();
	this.mc_area2.name = "mc_area2";
	this.mc_area2.parent = this;
	this.mc_area2.setTransform(275.95,149.35);

	this.mc_area4 = new lib.hit_area();
	this.mc_area4.name = "mc_area4";
	this.mc_area4.parent = this;
	this.mc_area4.setTransform(62.6,333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_area4},{t:this.mc_area2},{t:this.mc_area3},{t:this.mc_area5},{t:this.mc_area6},{t:this.mc_area7},{t:this.mc_area8},{t:this.mc_area9},{t:this.mc_sb}]}).wait(1));

	// Layer_6
	this.btn_send = new lib.btn_0();
	this.btn_send.name = "btn_send";
	this.btn_send.parent = this;
	this.btn_send.setTransform(896.9,703.35,1.0869,1.6138);
	new cjs.ButtonHelper(this.btn_send, 0, 1, 2, false, new lib.btn_0(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_send).wait(1));

	// mc_area1
	this.mc_area1 = new lib.hit_area();
	this.mc_area1.name = "mc_area1";
	this.mc_area1.parent = this;
	this.mc_area1.setTransform(62.6,149.35);

	this.timeline.addTween(cjs.Tween.get(this.mc_area1).wait(1));

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
	this.text_total = new cjs.Text("0", "bold 46px 'Helvetica'", "#666666");
	this.text_total.name = "text_total";
	this.text_total.textAlign = "center";
	this.text_total.lineHeight = 48;
	this.text_total.lineWidth = 40;
	this.text_total.alpha = 0.70588235;
	this.text_total.parent = this;
	this.text_total.setTransform(74.45,701.7);

	this.instance_1 = new lib.Asset22x100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_total}]}).wait(1));

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
		{src:"images/Asset22x100.jpg?1576318464031", id:"Asset22x100"},
		{src:"images/Asset22x8.png?1576318464031", id:"Asset22x8"},
		{src:"images/Asset32x8.png?1576318464031", id:"Asset32x8"},
		{src:"images/Asset42x8.png?1576318464031", id:"Asset42x8"},
		{src:"images/farm2x8.png?1576318464031", id:"farm2x8"}
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