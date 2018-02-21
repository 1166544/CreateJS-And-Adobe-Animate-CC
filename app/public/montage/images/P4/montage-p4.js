(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p4_atlas_', frames: [[0, 0, 750, 1214], [1445, 242, 321, 401], [752, 0, 437, 435], [752, 437, 417, 268], [1768, 242, 230, 439], [1693, 683, 134, 596], [1445, 645, 246, 358], [1191, 0, 651, 240], [752, 1005, 704, 96], [1191, 242, 252, 578], [752, 707, 201, 280], [1829, 683, 141, 527], [955, 707, 179, 281]]}
];


lib.updateListCache = function (cacheList) {		
	for (var i = 0; i < cacheList.length; i++) {		
		if (cacheList[i].cacheCanvas) {cacheList[i].updateCache();}		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		

	while (cur != exportRoot) {		
		if (cacheList.indexOf(cur) != -1) {break;}		
		cur = cur.parent;		
	}		
	if (cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		

		while (cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	} else {		
		cur = textInst;		
		while (cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		

	for (var f = 0; f < txtInst.length; ++f) {lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);}		

	loadedGoogleCount++;		
	if (loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		

	for (var f = 0; f < txtInst.length; ++f) {lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);}		

	loadedTypekitCount++;		
	if (loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:


(lib.beijing = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.cusong = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.daziji = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.gongfang = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.hanyun = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.MicrosoftYaHeiUI = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.MicrosoftYaHeiUI_1 = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.P4 = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.pixcel = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.tongxin = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.youshou = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();


(lib.zizi = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();


(lib.zuoshou = function() {
	this.spriteSheet = ss.montage_p4_atlas_;
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();


(lib.tween18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.P4();
	this.instance.parent = this;
	this.instance.setTransform(-325.5, -120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.5, -120, 651, 240);


(lib.tween17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.P4();
	this.instance.parent = this;
	this.instance.setTransform(-325.5, -120);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.5, -120, 651, 240);


(lib.tween15 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.cusong();
	this.instance.parent = this;
	this.instance.setTransform(-160.5, -200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.5, -200.5, 321, 401);


(lib.tween14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.cusong();
	this.instance.parent = this;
	this.instance.setTransform(152.2, -206.9, 1, 1, 75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.2, -206.9, 470.5, 413.9);


(lib.tween13 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.gongfang();
	this.instance.parent = this;
	this.instance.setTransform(-422, 193, 1, 1, -90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422, -224, 268, 417);


(lib.tween12 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.hanyun();
	this.instance.parent = this;
	this.instance.setTransform(-115, -219.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115, -219.5, 230, 439);


(lib.tween11 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.MicrosoftYaHeiUI_1();
	this.instance.parent = this;
	this.instance.setTransform(-123, -179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123, -179, 246, 358);


(lib.tween10 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tongxin();
	this.instance.parent = this;
	this.instance.setTransform(-126, -289);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126, -289, 252, 578);


(lib.tween9 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.zizi();
	this.instance.parent = this;
	this.instance.setTransform(-70.5, -263.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.5, -263.5, 141, 527);


(lib.tween8 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.zizi();
	this.instance.parent = this;
	this.instance.setTransform(70.7, -263.4, 1, 1, 30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.8, -263.4, 385.6, 526.9);


(lib.tween7 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.MicrosoftYaHeiUI_1();
	this.instance.parent = this;
	this.instance.setTransform(39.6, -213.5, 1, 1, 45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213.5, -213.5, 427.1, 427.1);


(lib.tween6 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.MicrosoftYaHeiUI();
	this.instance.parent = this;
	this.instance.setTransform(-67, -298);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67, -298, 134, 596);


(lib.tween5 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.pixcel();
	this.instance.parent = this;
	this.instance.setTransform(-352, -48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352, -48, 704, 96);


(lib.tween4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.youshou();
	this.instance.parent = this;
	this.instance.setTransform(-100.5, -140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5, -140, 201, 280);


(lib.tween3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.zuoshou();
	this.instance.parent = this;
	this.instance.setTransform(-89.5, -140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5, -140.5, 179, 281);


(lib.tween2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.daziji();
	this.instance.parent = this;
	this.instance.setTransform(-218.5, -217.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.5, -217.5, 437, 435);


(lib.type6 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9)
.call(this.frame_9)
.wait(1));

	// I
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#000000').s()
.p('AgrCIIAAgdIAaAAIAAjUIgaAAIAAgeIBXAAIAAAeIgaAAIAADUIAaAAIAAAdg');
	this.shape.setTransform(315.5, 26.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9)
.to({_off: false}, 0)
.wait(1));

	// U
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#000000').s()
.p('AhlAbIAAikIAjAAIAACjQAABRBDAAQBDABAAhQIAAilIAjAAIAACgQAAB0hpAAQhjAAAAhwg');
	this.shape_1.setTransform(296.8, 26.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(8)
.to({_off: false}, 0)
.wait(2));

	// i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#000000').s()
.p('AgRCOIAAjBIAhAAIAADBgAgPhoQgGgHAAgJQAAgJAHgGQAGgGAIAAQAJAAAGAGQAHAGAAAJQAAAJgHAHQgGAGgJAAQgIAAgHgGg');
	this.shape_2.setTransform(268, 25.9);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(8)
.to({_off: false}, 0)
.wait(2));

	// e
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#000000').s()
.p('Ag9BLQgXgbAAgvQAAgsAagdQAZgdAmAAQAmAAAVAZQAVAYABAsIAAARIiHAAQABAfAPARQARARAcAAQAgAAAcgVIAAAfQgaASgqAAQgqAAgXgbgAgeg6QgPAQgEAYIBkAAQAAgagNgPQgLgOgXAAQgTAAgPAPg');
	this.shape_3.setTransform(253.1, 30.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7)
.to({_off: false}, 0)
.wait(3));

	// H
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#000000').s()
.p('ABFCIIAAh6IiJAAIAAB6IgjAAIAAkPIAjAAIAAB2ICJAAIAAh2IAjAAIAAEPg');
	this.shape_4.setTransform(228.8, 26.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6)
.to({_off: false}, 0)
.wait(4));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#000000').s()
.p('Ag8BXQgRgQAAgaQAAg1BAgJIA5gIQAAgwgoAAQghAAgdAYIAAgiQAdgSAlAAQBGAAAABKIAAB8IgiAAIAAgeIgBAAQgUAjgmAAQgdAAgQgPgAgBAGQgYADgIAJQgKAJABAPQgBAOALAJQAJAJARAAQAVAAAPgQQAOgQAAgYIAAgSg');
	this.shape_5.setTransform(204.4, 30.4);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5)
.to({_off: false}, 0)
.wait(5));

	// Y
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#000000').s()
.p('AgSCIIAAhjIhXisIAoAAIA7B5IAGAQIAAAAIAHgQIA+h5IAlAAIhaCrIAABkg');
	this.shape_6.setTransform(187.9, 26.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(5)
.to({_off: false}, 0)
.wait(5));

	// t
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#000000').s()
.p('AgYBGIAAhvIghAAIAAgdIAhAAIAAguIAigLIAAA5IAwAAIAAAdIgwAAIAABpQAAATAHAIQAGAJAPAAQALAAAJgGIAAAcQgLAGgTAAQg0AAAAg6g');
	this.shape_7.setTransform(159.6, 27.7);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4)
.to({_off: false}, 0)
.wait(6));

	// f
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#000000').s()
.p('AgaCSIAAilIghAAIAAgdIAhAAIAAgeQAAggASgRQARgSAcAAQAOAAAJADIAAAeQgJgEgMAAQgggBAAAoIAAAdIAtAAIAAAdIgtAAIAAClg');
	this.shape_8.setTransform(146.8, 25.5);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4)
.to({_off: false}, 0)
.wait(6));

	// o
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f('#000000').s()
.p('AhFBKQgagbAAgtQAAgvAagcQAbgcAtAAQAsAAAZAbQAZAbgBAvQABAtgbAdQgaAcgsAAQgsAAgZgcgAgsg0QgQATAAAiQAAAiAQATQASATAbAAQAdAAAQgSQAPgTAAgkQAAgigPgTQgQgTgdAAQgcAAgRAUg');
	this.shape_9.setTransform(129.1, 30.4);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4)
.to({_off: false}, 0)
.wait(6));

	// s
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f('#000000').s()
.p('AhABaIAAgjQAaATAdAAQAoAAAAgaQAAgMgJgHQgJgHgagKQgggMgKgNQgJgNAAgSQAAgaAVgPQAXgQAeAAQAZAAAVAJIAAAhQgVgOgcAAQgQAAgKAHQgKAHAAAMQgBAMAJAGQAGAHAZAKQAhAMALAMQAMANgBATQAAAbgVAQQgWAPgiAAQgeAAgWgMg');
	this.shape_10.setTransform(109.5, 30.4);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2)
.to({_off: false}, 0)
.wait(8));

	// o
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f('#000000').s()
.p('AhGBKQgagbAAgtQABgvAagcQAbgcAtAAQAsAAAZAbQAZAbAAAvQAAAtgbAdQgaAcgsAAQgsAAgagcgAgsg0QgQATgBAiQABAiAQATQARATAcAAQAdAAAQgSQAQgTAAgkQAAgigQgTQgQgTgdAAQgcAAgRAUg');
	this.shape_11.setTransform(89.5, 30.4);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2)
.to({_off: false}, 0)
.wait(8));

	// r
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f('#000000').s()
.p('AgzBjIAAjCIAiAAIAAAoIABAAQAOgrAkAAQAMAAAGADIAAAiQgJgFgOAAQgVgBgMAUQgNASAAAdIAABjg');
	this.shape_12.setTransform(73.1, 30.2);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(2)
.to({_off: false}, 0)
.wait(8));

	// c
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f('#000000').s()
.p('AgvBLQgagbAAgrQAAgvAcgdQAcgeAtAAQAbAAATAKIAAAiQgVgPgZAAQgdAAgSAUQgSAVgBAhQAAAhASATQASATAcAAQAZAAAXgQIAAAfQgXAOgfAAQgpAAgagbg');
	this.shape_13.setTransform(55.9, 30.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(10));

	// i
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f('#000000').s()
.p('AgRCOIAAjBIAhAAIAADBgAgPhoQgGgHAAgJQAAgJAGgGQAGgGAJAAQAJAAAHAGQAGAGAAAJQAAAJgGAHQgHAGgJAAQgJAAgGgGg');
	this.shape_14.setTransform(42, 25.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(10));

	// M
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f('#000000').s()
.p('ABqCIIAAizQAAgWACggIgBAAQgEAUgEAIIhZDNIgTAAIhajMQgDgHgFgWIgBAAQACATAAAkIAACyIgiAAIAAkPIAwAAIBQC6QAKAVACAMIABAAIANgiIBRi5IAuAAIAAEPg');
	this.shape_15.setTransform(19.6, 26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.5, 11.7, 57.8, 28.9);


(lib.type4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8)
.call(this.frame_8)
.wait(1));

	// g
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#000000').s()
.p('AAQBoIAAgbIAbAAIAAAbgAgMBoIAAgbIAaAAIAAAbgAgqBoIAAgbIAbAAIAAAbgAAvBJIAAgbIAbAAIAAAbgAhJBJIAAgbIAbAAIAAAbgAAQAsIAAgbIAbAAIAAAbgAgMAsIAAgbIAaAAIAAAbgAgqAsIAAgbIAbAAIAAAbgAhJAsIAAgbIAbAAIAAAbgAhJAOIAAgaIAbAAIAAAagAgMgQIAAgbIAaAAIAAAbgAgqgQIAAgbIAbAAIAAAbgAAQgtIAAgbIAbAAIAAAbgAhJgtIAAgbIAbAAIAAAbgAAvhLIAAgbIAbAAIAAAbgAAQhLIAAgbIAbAAIAAAbgAgMhLIAAgbIAaAAIAAAbgAgqhLIAAgbIAbAAIAAAbg');
	this.shape.setTransform(300.5, 27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7)
.to({_off: false}, 0)
.wait(2));

	// n
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#000000').s()
.p('AA+BKIAAgbIAbAAIAAAbgAAfBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAg6BKIAAgbIAbAAIAAAbgAhXBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbgAg6gtIAAgbIAbAAIAAAbgAhXgtIAAgbIAbAAIAAAbg');
	this.shape_1.setTransform(281, 24.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6)
.to({_off: false}, 0)
.wait(3));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_2.setTransform(263, 24.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5)
.to({_off: false}, 0)
.wait(4));

	// T
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#000000').s()
.p('AARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgMgfIAAgbIAaAAIAAAbgAAug8IAAgbIAbAAIAAAbgAgMg8IAAgbIAaAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbg');
	this.shape_3.setTransform(243.5, 20);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4)
.to({_off: false}, 0)
.wait(5));

	// g
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#000000').s()
.p('AAQBoIAAgbIAbAAIAAAbgAgMBoIAAgbIAaAAIAAAbgAgqBoIAAgbIAbAAIAAAbgAAvBJIAAgbIAbAAIAAAbgAhJBJIAAgbIAbAAIAAAbgAAQAsIAAgbIAbAAIAAAbgAgMAsIAAgbIAaAAIAAAbgAgqAsIAAgbIAbAAIAAAbgAhJAsIAAgbIAbAAIAAAbgAhJAOIAAgaIAbAAIAAAagAgMgQIAAgbIAaAAIAAAbgAgqgQIAAgbIAbAAIAAAbgAAQgtIAAgbIAbAAIAAAbgAhJgtIAAgbIAbAAIAAAbgAAvhLIAAgbIAbAAIAAAbgAAQhLIAAgbIAbAAIAAAbgAgMhLIAAgbIAaAAIAAAbgAgqhLIAAgbIAbAAIAAAbg');
	this.shape_4.setTransform(228.5, 27.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3)
.to({_off: false}, 0)
.wait(6));

	// n
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#000000').s()
.p('AA+BKIAAgbIAbAAIAAAbgAAfBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAg6BKIAAgbIAbAAIAAAbgAhXBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbgAg6gtIAAgbIAbAAIAAAbgAhXgtIAAgbIAbAAIAAAbg');
	this.shape_5.setTransform(209, 24.5);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3)
.to({_off: false}, 0)
.wait(6));

	// a
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#000000').s()
.p('AAvBKIAAgbIAbAAIAAAbgAgMBKIAAgbIAaAAIAAAbgAgqBKIAAgbIAbAAIAAAbgAAQAsIAAgbIAbAAIAAAbgAhJAsIAAgbIAbAAIAAAbgAAQANIAAgaIAbAAIAAAagAgMANIAAgaIAaAAIAAAagAgqANIAAgaIAbAAIAAAagAAQgPIAAgbIAbAAIAAAbgAhJgPIAAgbIAbAAIAAAbgAgMgtIAAgbIAaAAIAAAbgAgqgtIAAgbIAbAAIAAAbg');
	this.shape_6.setTransform(192.5, 24.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(3)
.to({_off: false}, 0)
.wait(6));

	// F
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#000000').s()
.p('AgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAgrAdIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAARgfIAAgbIAbAAIAAAbgAgrgfIAAgbIAbAAIAAAbgAAug8IAAgbIAbAAIAAAbgAgrg8IAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbg');
	this.shape_7.setTransform(171.5, 20);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(3)
.to({_off: false}, 0)
.wait(6));

	// g
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#000000').s()
.p('AAQBoIAAgbIAbAAIAAAbgAgMBoIAAgbIAaAAIAAAbgAgqBoIAAgbIAbAAIAAAbgAAvBJIAAgbIAbAAIAAAbgAhJBJIAAgbIAbAAIAAAbgAAQAsIAAgbIAbAAIAAAbgAgMAsIAAgbIAaAAIAAAbgAgqAsIAAgbIAbAAIAAAbgAhJAsIAAgbIAbAAIAAAbgAhJAOIAAgaIAbAAIAAAagAgMgQIAAgbIAaAAIAAAbgAgqgQIAAgbIAbAAIAAAbgAAQgtIAAgbIAbAAIAAAbgAhJgtIAAgbIAbAAIAAAbgAAvhLIAAgbIAbAAIAAAbgAAQhLIAAgbIAbAAIAAAbgAgMhLIAAgbIAaAAIAAAbgAgqhLIAAgbIAbAAIAAAbg');
	this.shape_8.setTransform(156.5, 27.5);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(2)
.to({_off: false}, 0)
.wait(7));

	// n
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f('#000000').s()
.p('AA+BKIAAgbIAbAAIAAAbgAAfBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAg6BKIAAgbIAbAAIAAAbgAhXBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbgAg6gtIAAgbIAbAAIAAAbgAhXgtIAAgbIAbAAIAAAbg');
	this.shape_9.setTransform(137, 24.5);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(2)
.to({_off: false}, 0)
.wait(7));

	// o
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_10.setTransform(119, 24.5);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2)
.to({_off: false}, 0)
.wait(7));

	// G
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f('#000000').s()
.p('AACB3IAAgbIAbAAIAAAbgAgbB3IAAgbIAbAAIAAAbgAg6B3IAAgbIAbAAIAAAbgAAfBZIAAgbIAbAAIAAAbgAhXBZIAAgbIAbAAIAAAbgAAfA6IAAgbIAbAAIAAAbgAhXA6IAAgbIAbAAIAAAbgAA+AdIAAgbIAbAAIAAAbgAAfAdIAAgbIAbAAIAAAbgAACAdIAAgbIAbAAIAAAbgAhXAdIAAgbIAbAAIAAAbgAhXAAIAAgbIAbAAIAAAbgAhXgfIAAgbIAbAAIAAAbgAAfg8IAAgbIAbAAIAAAbgAhXg8IAAgbIAbAAIAAAbgAAfhaIAAgbIAbAAIAAAbgAAChaIAAgbIAbAAIAAAbgAgbhaIAAgbIAbAAIAAAbgAg6haIAAgbIAbAAIAAAbg');
	this.shape_11.setTransform(101, 20);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(2)
.to({_off: false}, 0)
.wait(7));

	// i
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f('#000000').s()
.p('AARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbg');
	this.shape_12.setTransform(81.5, 20);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1)
.to({_off: false}, 0)
.wait(8));

	// Z
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f('#000000').s()
.p('AAuB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAARgfIAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbg');
	this.shape_13.setTransform(63.5, 20);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1)
.to({_off: false}, 0)
.wait(8));

	// o
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_14.setTransform(47, 24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(9));

	// a
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f('#000000').s()
.p('AAvBKIAAgbIAbAAIAAAbgAgMBKIAAgbIAaAAIAAAbgAgqBKIAAgbIAbAAIAAAbgAAQAsIAAgbIAbAAIAAAbgAhJAsIAAgbIAbAAIAAAbgAAQANIAAgaIAbAAIAAAagAgMANIAAgaIAaAAIAAAagAgqANIAAgaIAbAAIAAAagAAQgPIAAgbIAbAAIAAAbgAhJgPIAAgbIAbAAIAAAbgAgMgtIAAgbIAaAAIAAAbgAgqgtIAAgbIAbAAIAAAbg');
	this.shape_15.setTransform(30.5, 24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(9));

	// Z
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f('#000000').s()
.p('AAuB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAARgfIAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbg');
	this.shape_16.setTransform(9.5, 20);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 58.2, 40);


(lib.type3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11)
.call(this.frame_11)
.wait(1));

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#000000').s()
.p('AAfBoIAAgbIAbAAIAAAbgAACBoIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAgbArIAAgbIAbAAIAAAbgAgbAOIAAgaIAbAAIAAAagAACgPIAAgbIAbAAIAAAbgAgbgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAgbguIAAgbIAbAAIAAAbgAgbhLIAAgbIAbAAIAAAbg');
	this.shape.setTransform(155, 21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8)
.to({_off: false}, 0)
.wait(4));

	// f
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#000000').s()
.p('AAQB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgqB3IAAgbIAbAAIAAAbgAhJB3IAAgbIAbAAIAAAbgAgqBZIAAgbIAbAAIAAAbgAgqA6IAAgbIAbAAIAAAbgAgqAdIAAgbIAbAAIAAAbgAAQAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgqAAIAAgbIAbAAIAAAbgAhJAAIAAgbIAbAAIAAAbgAgqgfIAAgbIAbAAIAAAbgAgqg8IAAgbIAbAAIAAAbgAAvhaIAAgbIAbAAIAAAbgAAQhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbg');
	this.shape_1.setTransform(138.5, 20);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7)
.to({_off: false}, 0)
.wait(5));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_2.setTransform(119, 24.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6)
.to({_off: false}, 0)
.wait(6));

	// s
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAg6BKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAACANIAAgaIAbAAIAAAagAgbANIAAgaIAbAAIAAAagAg6gPIAAgbIAbAAIAAAbgAAfgtIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_3.setTransform(101, 24.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5)
.to({_off: false}, 0)
.wait(7));

	// o
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#000000').s()
.p('AACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAAfAsIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAAfANIAAgaIAbAAIAAAagAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_4.setTransform(83, 24.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(4)
.to({_off: false}, 0)
.wait(8));

	// r
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#000000').s()
.p('AgMBKIAAgbIAaAAIAAAbgAgrBKIAAgbIAbAAIAAAbgAhIBKIAAgbIAbAAIAAAbgAgrAsIAAgbIAbAAIAAAbgAgrANIAAgaIAbAAIAAAagAgMgPIAAgbIAaAAIAAAbgAgrgPIAAgbIAbAAIAAAbgAAugtIAAgbIAbAAIAAAbgAARgtIAAgbIAbAAIAAAbgAgrgtIAAgbIAbAAIAAAbgAhIgtIAAgbIAbAAIAAAbg');
	this.shape_5.setTransform(63.5, 24.5);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(3)
.to({_off: false}, 0)
.wait(9));

	// c
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#000000').s()
.p('AAfBKIAAgbIAbAAIAAAbgAACBKIAAgbIAbAAIAAAbgAgbBKIAAgbIAbAAIAAAbgAg6AsIAAgbIAbAAIAAAbgAg6ANIAAgaIAbAAIAAAagAAfgPIAAgbIAbAAIAAAbgAg6gPIAAgbIAbAAIAAAbgAAfgtIAAgbIAbAAIAAAbgAACgtIAAgbIAbAAIAAAbgAgbgtIAAgbIAbAAIAAAbg');
	this.shape_6.setTransform(47, 24.5);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2)
.to({_off: false}, 0)
.wait(10));

	// i
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#000000').s()
.p('AARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbg');
	this.shape_7.setTransform(27.5, 20);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1)
.to({_off: false}, 0)
.wait(11));

	// M
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#000000').s()
.p('AAuB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAAuA6IAAgbIAbAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAhIA6IAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAhIAdIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgAAugfIAAgbIAbAAIAAAbgAARgfIAAgbIAbAAIAAAbgAgrgfIAAgbIAbAAIAAAbgAhIgfIAAgbIAbAAIAAAbgAAug8IAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAgrg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbg');
	this.shape_8.setTransform(9.5, 20);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2, 8.2, 14.7, 23.7);


(lib.type2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10)
.call(this.frame_10)
.wait(1));

	// 宋
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#000000').s()
.p('AgMCzIAAgbIAaAAIAAAbgACICUIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAgMCUIAAgbIAaAAIAAAbgAiFCUIAAgbIAbAAIAAAbgAiiCUIAAgbIAbAAIAAAbgABNB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAhmB3IAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgrA6IAAgbIAbAAIAAAbgACIAdIAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgABNAdIAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgrAdIAAgbIAbAAIAAAbgAhIAdIAAgbIAbAAIAAAbgAhmAdIAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgAiiAdIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgMgfIAAgbIAaAAIAAAbgACIg8IAAgbIAbAAIAAAbgAiig8IAAgbIAbAAIAAAbgACIhaIAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAhmhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgAgMh5IAAgbIAaAAIAAAbgAgriWIAAgbIAbAAIAAAbg');
	this.shape.setTransform(198.5, 20);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10)
.to({_off: false}, 0)
.wait(1));

	// 朗
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#000000').s()
.p('AB5CzIAAgbIAbAAIAAAbgABcCzIAAgbIAbAAIAAAbgAACCzIAAgbIAbAAIAAAbgAiUCzIAAgbIAbAAIAAAbgAB5CUIAAgbIAbAAIAAAbgAAfCUIAAgbIAbAAIAAAbgAgbCUIAAgbIAbAAIAAAbgAh1CUIAAgbIAbAAIAAAbgAiUCUIAAgbIAbAAIAAAbgAB5B3IAAgbIAbAAIAAAbgAAfB3IAAgbIAbAAIAAAbgAgbB3IAAgbIAbAAIAAAbgAhXB3IAAgbIAbAAIAAAbgAiUB3IAAgbIAbAAIAAAbgAB5BZIAAgbIAbAAIAAAbgAAfBZIAAgbIAbAAIAAAbgAg6BZIAAgbIAbAAIAAAbgAiUBZIAAgbIAbAAIAAAbgAB5A6IAAgbIAbAAIAAAbgABcA6IAAgbIAbAAIAAAbgAA+A6IAAgbIAbAAIAAAbgAAfA6IAAgbIAbAAIAAAbgAhXA6IAAgbIAbAAIAAAbgAiUA6IAAgbIAbAAIAAAbgAB5AdIAAgbIAbAAIAAAbgAAfAdIAAgbIAbAAIAAAbgAgbAdIAAgbIAbAAIAAAbgAg6AdIAAgbIAbAAIAAAbgAhXAdIAAgbIAbAAIAAAbgAh1AdIAAgbIAbAAIAAAbgAiUAdIAAgbIAbAAIAAAbgAB5AAIAAgbIAbAAIAAAbgAAfAAIAAgbIAbAAIAAAbgAgbAAIAAgbIAbAAIAAAbgAiUAAIAAgbIAbAAIAAAbgAB5gfIAAgbIAbAAIAAAbgABcgfIAAgbIAbAAIAAAbgAA+gfIAAgbIAbAAIAAAbgAAfgfIAAgbIAbAAIAAAbgAgbgfIAAgbIAbAAIAAAbgAg6gfIAAgbIAbAAIAAAbgAhXgfIAAgbIAbAAIAAAbgAh1gfIAAgbIAbAAIAAAbgAiUgfIAAgbIAbAAIAAAbgAB5g8IAAgbIAbAAIAAAbgAAfg8IAAgbIAbAAIAAAbgAgbg8IAAgbIAbAAIAAAbgAiUg8IAAgbIAbAAIAAAbgAB5haIAAgbIAbAAIAAAbgAAfhaIAAgbIAbAAIAAAbgAgbhaIAAgbIAbAAIAAAbgAg6haIAAgbIAbAAIAAAbgAhXhaIAAgbIAbAAIAAAbgAh1haIAAgbIAbAAIAAAbgAiUhaIAAgbIAbAAIAAAbgAB5h5IAAgbIAbAAIAAAbgABch5IAAgbIAbAAIAAAbgAA+h5IAAgbIAbAAIAAAbgAAfh5IAAgbIAbAAIAAAbgAhXh5IAAgbIAbAAIAAAbgAh1iWIAAgbIAbAAIAAAbg');
	this.shape_1.setTransform(164, 20);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(8)
.to({_off: false}, 0)
.wait(3));

	// 房
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#000000').s()
.p('ABNCzIAAgbIAbAAIAAAbgAAuCzIAAgbIAbAAIAAAbgAhmCzIAAgbIAbAAIAAAbgAiiCzIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAhICUIAAgbIAbAAIAAAbgAiFCUIAAgbIAbAAIAAAbgABrB3IAAgbIAbAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAiFB3IAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgABNBZIAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAARBZIAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAiFBZIAAgbIAbAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAiFA6IAAgbIAbAAIAAAbgACIAdIAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgABNAdIAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgrAdIAAgbIAbAAIAAAbgAhIAdIAAgbIAbAAIAAAbgAhmAdIAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAiFAAIAAgbIAbAAIAAAbgAgMgfIAAgbIAaAAIAAAbgAiFgfIAAgbIAbAAIAAAbgACIg8IAAgbIAbAAIAAAbgABrg8IAAgbIAbAAIAAAbgABNg8IAAgbIAbAAIAAAbgAAug8IAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAgMg8IAAgbIAaAAIAAAbgAgrg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAhmg8IAAgbIAbAAIAAAbgAiFg8IAAgbIAbAAIAAAbgACIhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgACIh5IAAgbIAbAAIAAAbgABrh5IAAgbIAbAAIAAAbgABNh5IAAgbIAbAAIAAAbgAAuh5IAAgbIAbAAIAAAbgAARh5IAAgbIAbAAIAAAbgAgMh5IAAgbIAaAAIAAAbgAgrh5IAAgbIAbAAIAAAbgAhIh5IAAgbIAbAAIAAAbgAhmh5IAAgbIAbAAIAAAbgAiFh5IAAgbIAbAAIAAAbgAARiWIAAgbIAbAAIAAAbg');
	this.shape_2.setTransform(126.5, 20);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(6)
.to({_off: false}, 0)
.wait(5));

	// 工
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#000000').s()
.p('ACICkIAAgbIAbAAIAAAbgABrCkIAAgbIAbAAIAAAbgABNCkIAAgbIAbAAIAAAbgAAuCkIAAgbIAbAAIAAAbgAARCkIAAgbIAbAAIAAAbgAgMCkIAAgbIAaAAIAAAbgAgrCkIAAgbIAbAAIAAAbgAhICkIAAgbIAbAAIAAAbgAhmCkIAAgbIAbAAIAAAbgAiFCkIAAgbIAbAAIAAAbgAiiCkIAAgbIAbAAIAAAbgAgMCFIAAgbIAaAAIAAAbgAgMBoIAAgbIAaAAIAAAbgAgMBKIAAgbIAaAAIAAAbgAgMArIAAgbIAaAAIAAAbgAgMAOIAAgaIAaAAIAAAagAgMgPIAAgbIAaAAIAAAbgAgMguIAAgbIAaAAIAAAbgAgMhLIAAgbIAaAAIAAAbgAgMhpIAAgbIAaAAIAAAbgABriIIAAgbIAbAAIAAAbgABNiIIAAgbIAbAAIAAAbgAAuiIIAAgbIAbAAIAAAbgAARiIIAAgbIAbAAIAAAbgAgMiIIAAgbIAaAAIAAAbgAgriIIAAgbIAbAAIAAAbgAhIiIIAAgbIAbAAIAAAbgAhmiIIAAgbIAbAAIAAAbgAiFiIIAAgbIAbAAIAAAbg');
	this.shape_3.setTransform(90.5, 21.5);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4)
.to({_off: false}, 0)
.wait(7));

	// 字
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#000000').s()
.p('AgMCzIAAgbIAaAAIAAAbgAgrCzIAAgbIAbAAIAAAbgAhICzIAAgbIAbAAIAAAbgAgMCUIAAgbIAaAAIAAAbgAgMB3IAAgbIAaAAIAAAbgACIBZIAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgABNBZIAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAARBZIAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAhmBZIAAgbIAbAAIAAAbgAiFBZIAAgbIAbAAIAAAbgAiiBZIAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgABNAAIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgAhmAAIAAgbIAbAAIAAAbgACIg8IAAgbIAbAAIAAAbgAiig8IAAgbIAbAAIAAAbgACIhaIAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAhmhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgAgMh5IAAgbIAaAAIAAAbgAgriWIAAgbIAbAAIAAAbg');
	this.shape_4.setTransform(54.5, 20);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1)
.to({_off: false}, 0)
.wait(10));

	// 造
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#000000').s()
.p('ACICzIAAgbIAbAAIAAAbgABrCzIAAgbIAbAAIAAAbgABNCzIAAgbIAbAAIAAAbgAAuCzIAAgbIAbAAIAAAbgAARCzIAAgbIAbAAIAAAbgAgMCzIAAgbIAaAAIAAAbgAgrCzIAAgbIAbAAIAAAbgAhICzIAAgbIAbAAIAAAbgAhmCzIAAgbIAbAAIAAAbgAiiCzIAAgbIAbAAIAAAbgAiFCUIAAgbIAbAAIAAAbgABrB3IAAgbIAbAAIAAAbgABNB3IAAgbIAbAAIAAAbgAAuB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAiFB3IAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAiFBZIAAgbIAbAAIAAAbgABrA6IAAgbIAbAAIAAAbgABNA6IAAgbIAbAAIAAAbgAAuA6IAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAhIA6IAAgbIAbAAIAAAbgAiFA6IAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgACIAAIAAgbIAbAAIAAAbgABrAAIAAgbIAbAAIAAAbgABNAAIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgAhmAAIAAgbIAbAAIAAAbgAiFAAIAAgbIAbAAIAAAbgAARgfIAAgbIAbAAIAAAbgAiFgfIAAgbIAbAAIAAAbgAiigfIAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAhmg8IAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAARh5IAAgbIAbAAIAAAbgAhIh5IAAgbIAbAAIAAAbgAiFh5IAAgbIAbAAIAAAbgAARiWIAAgbIAbAAIAAAbgAiiiWIAAgbIAbAAIAAAbg');
	this.shape_5.setTransform(18.5, 20);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2, 2.2, 32.7, 35.7);


(lib.type = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7)
.call(this.frame_7)
.wait(1));

	// 体
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#000000').s()
.p('AARCzIAAgbIAbAAIAAAbgAiFCzIAAgbIAbAAIAAAbgAARCUIAAgbIAbAAIAAAbgAiFCUIAAgbIAbAAIAAAbgABNB3IAAgbIAbAAIAAAbgAAuB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAiFB3IAAgbIAbAAIAAAbgACIBZIAAgbIAbAAIAAAbgAARBZIAAgbIAbAAIAAAbgAhmBZIAAgbIAbAAIAAAbgAiFBZIAAgbIAbAAIAAAbgABrA6IAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAhIA6IAAgbIAbAAIAAAbgAiFA6IAAgbIAbAAIAAAbgABNAdIAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAgrAdIAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAiFAAIAAgbIAbAAIAAAbgAARgfIAAgbIAbAAIAAAbgAiFgfIAAgbIAbAAIAAAbgAiigfIAAgbIAbAAIAAAbgABrg8IAAgbIAbAAIAAAbgABNg8IAAgbIAbAAIAAAbgAAug8IAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAgMg8IAAgbIAaAAIAAAbgAgrg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAiFg8IAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgAARh5IAAgbIAbAAIAAAbgAhmh5IAAgbIAbAAIAAAbgAARiWIAAgbIAbAAIAAAbgAhmiWIAAgbIAbAAIAAAbg');
	this.shape.setTransform(198.5, 20);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7)
.to({_off: false}, 0)
.wait(1));

	// 简
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#000000').s()
.p('ABrCzIAAgbIAbAAIAAAbgABNCzIAAgbIAbAAIAAAbgAAuCzIAAgbIAbAAIAAAbgAiFCzIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAiFCUIAAgbIAbAAIAAAbgABrB3IAAgbIAbAAIAAAbgAAuB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAgrB3IAAgbIAbAAIAAAbgAhIB3IAAgbIAbAAIAAAbgAiFB3IAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAiFBZIAAgbIAbAAIAAAbgABrA6IAAgbIAbAAIAAAbgAAuA6IAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgrA6IAAgbIAbAAIAAAbgAhIA6IAAgbIAbAAIAAAbgAiFA6IAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgAhIAdIAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgABrAAIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgABrgfIAAgbIAbAAIAAAbgAhmgfIAAgbIAbAAIAAAbgABrg8IAAgbIAbAAIAAAbgABNg8IAAgbIAbAAIAAAbgAAug8IAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAgMg8IAAgbIAaAAIAAAbgAgrg8IAAgbIAbAAIAAAbgAiFg8IAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgACIh5IAAgbIAbAAIAAAbgABrh5IAAgbIAbAAIAAAbgABNh5IAAgbIAbAAIAAAbgAAuh5IAAgbIAbAAIAAAbgAARh5IAAgbIAbAAIAAAbgAgrh5IAAgbIAbAAIAAAbgAhIh5IAAgbIAbAAIAAAbgAhmh5IAAgbIAbAAIAAAbgAiFh5IAAgbIAbAAIAAAbgAARiWIAAgbIAbAAIAAAbgAiFiWIAAgbIAbAAIAAAbg');
	this.shape_1.setTransform(162.5, 20);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6)
.to({_off: false}, 0)
.wait(2));

	// 宋
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#000000').s()
.p('AgMCzIAAgbIAaAAIAAAbgACICUIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAgMCUIAAgbIAaAAIAAAbgAiFCUIAAgbIAbAAIAAAbgAiiCUIAAgbIAbAAIAAAbgABNB3IAAgbIAbAAIAAAbgAgMB3IAAgbIAaAAIAAAbgAhmB3IAAgbIAbAAIAAAbgAAuBZIAAgbIAbAAIAAAbgAgMBZIAAgbIAaAAIAAAbgAhIBZIAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAgMA6IAAgbIAaAAIAAAbgAgrA6IAAgbIAbAAIAAAbgACIAdIAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgABNAdIAAgbIAbAAIAAAbgAAuAdIAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAgMAdIAAgbIAaAAIAAAbgAgrAdIAAgbIAbAAIAAAbgAhIAdIAAgbIAbAAIAAAbgAhmAdIAAgbIAbAAIAAAbgAiFAdIAAgbIAbAAIAAAbgAiiAdIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgMgfIAAgbIAaAAIAAAbgACIg8IAAgbIAbAAIAAAbgAiig8IAAgbIAbAAIAAAbgACIhaIAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAhmhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgAgMh5IAAgbIAaAAIAAAbgAgriWIAAgbIAbAAIAAAbg');
	this.shape_2.setTransform(126.5, 20);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5)
.to({_off: false}, 0)
.wait(3));

	// 粗
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#000000').s()
.p('ACICzIAAgbIAbAAIAAAbgABrCzIAAgbIAbAAIAAAbgABNCzIAAgbIAbAAIAAAbgAAuCzIAAgbIAbAAIAAAbgAARCzIAAgbIAbAAIAAAbgAgMCzIAAgbIAaAAIAAAbgAhmCzIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAARCUIAAgbIAbAAIAAAbgAhmCUIAAgbIAbAAIAAAbgABrB3IAAgbIAbAAIAAAbgAARB3IAAgbIAbAAIAAAbgAhmB3IAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgAARBZIAAgbIAbAAIAAAbgAgrBZIAAgbIAbAAIAAAbgAhmBZIAAgbIAbAAIAAAbgAiiBZIAAgbIAbAAIAAAbgABrA6IAAgbIAbAAIAAAbgABNA6IAAgbIAbAAIAAAbgAAuA6IAAgbIAbAAIAAAbgAARA6IAAgbIAbAAIAAAbgAhIA6IAAgbIAbAAIAAAbgAhmA6IAAgbIAbAAIAAAbgAiFA6IAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgAARAdIAAgbIAbAAIAAAbgAhmAdIAAgbIAbAAIAAAbgABrAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgAhmAAIAAgbIAbAAIAAAbgAiFAAIAAgbIAbAAIAAAbgAiiAAIAAgbIAbAAIAAAbgABrgfIAAgbIAbAAIAAAbgABNgfIAAgbIAbAAIAAAbgAAugfIAAgbIAbAAIAAAbgAARgfIAAgbIAbAAIAAAbgAhmgfIAAgbIAbAAIAAAbgABrg8IAAgbIAbAAIAAAbgAARg8IAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgAhmg8IAAgbIAbAAIAAAbgAiFg8IAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhmhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgABrh5IAAgbIAbAAIAAAbgABNh5IAAgbIAbAAIAAAbgAAuh5IAAgbIAbAAIAAAbgAARh5IAAgbIAbAAIAAAbgAhmh5IAAgbIAbAAIAAAbgAhmiWIAAgbIAbAAIAAAbg');
	this.shape_3.setTransform(90.5, 20);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4)
.to({_off: false}, 0)
.wait(4));

	// 正
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#000000').s()
.p('ACICkIAAgbIAbAAIAAAbgABrCkIAAgbIAbAAIAAAbgABNCkIAAgbIAbAAIAAAbgAAuCkIAAgbIAbAAIAAAbgAARCkIAAgbIAbAAIAAAbgAgMCkIAAgbIAaAAIAAAbgAgrCkIAAgbIAbAAIAAAbgAhICkIAAgbIAbAAIAAAbgAhmCkIAAgbIAbAAIAAAbgAiFCkIAAgbIAbAAIAAAbgAiiCkIAAgbIAbAAIAAAbgAgMCFIAAgbIAaAAIAAAbgAhmCFIAAgbIAbAAIAAAbgAgMBoIAAgbIAaAAIAAAbgAhmBoIAAgbIAbAAIAAAbgAgMBKIAAgbIAaAAIAAAbgAhmBKIAAgbIAbAAIAAAbgAgMArIAAgbIAaAAIAAAbgAhmArIAAgbIAbAAIAAAbgABrAOIAAgaIAbAAIAAAagABNAOIAAgaIAbAAIAAAagAAuAOIAAgaIAbAAIAAAagAARAOIAAgaIAbAAIAAAagAgMAOIAAgaIAaAAIAAAagAhmAOIAAgaIAbAAIAAAagAgMgPIAAgbIAaAAIAAAbgAhmgPIAAgbIAbAAIAAAbgAgMguIAAgbIAaAAIAAAbgAgMhLIAAgbIAaAAIAAAbgAgMhpIAAgbIAaAAIAAAbgABriIIAAgbIAbAAIAAAbgABNiIIAAgbIAbAAIAAAbgAAuiIIAAgbIAbAAIAAAbgAARiIIAAgbIAbAAIAAAbgAgMiIIAAgbIAaAAIAAAbgAgriIIAAgbIAbAAIAAAbgAhIiIIAAgbIAbAAIAAAbgAhmiIIAAgbIAbAAIAAAbgAiFiIIAAgbIAbAAIAAAbg');
	this.shape_4.setTransform(54.5, 21.5);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2)
.to({_off: false}, 0)
.wait(6));

	// 方
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#000000').s()
.p('ABNCzIAAgbIAbAAIAAAbgAAuCzIAAgbIAbAAIAAAbgAARCzIAAgbIAbAAIAAAbgAiiCzIAAgbIAbAAIAAAbgABrCUIAAgbIAbAAIAAAbgAiFCUIAAgbIAbAAIAAAbgABrB3IAAgbIAbAAIAAAbgAhmB3IAAgbIAbAAIAAAbgABrBZIAAgbIAbAAIAAAbgAhmBZIAAgbIAbAAIAAAbgABrA6IAAgbIAbAAIAAAbgAhIA6IAAgbIAbAAIAAAbgABrAdIAAgbIAbAAIAAAbgAhIAdIAAgbIAbAAIAAAbgABrAAIAAgbIAbAAIAAAbgABNAAIAAgbIAbAAIAAAbgAAuAAIAAgbIAbAAIAAAbgAARAAIAAgbIAbAAIAAAbgAgMAAIAAgbIAaAAIAAAbgAgrAAIAAgbIAbAAIAAAbgAhIAAIAAgbIAbAAIAAAbgAhIgfIAAgbIAbAAIAAAbgAhIg8IAAgbIAbAAIAAAbgACIhaIAAgbIAbAAIAAAbgABrhaIAAgbIAbAAIAAAbgABNhaIAAgbIAbAAIAAAbgAAuhaIAAgbIAbAAIAAAbgAARhaIAAgbIAbAAIAAAbgAgMhaIAAgbIAaAAIAAAbgAgrhaIAAgbIAbAAIAAAbgAhIhaIAAgbIAbAAIAAAbgAhmhaIAAgbIAbAAIAAAbgAiFhaIAAgbIAbAAIAAAbgAiihaIAAgbIAbAAIAAAbgAgMh5IAAgbIAaAAIAAAbgAgriWIAAgbIAbAAIAAAbg');
	this.shape_5.setTransform(18.5, 20);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2, 2.2, 32.7, 35.7);


(lib.hand = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_121 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(121)
.call(this.frame_121)
.wait(1));

	// tween3
	this.instance = new lib.tween3('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(89.5, 140.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 112.5, y: 120.5}, 5)
.to({x: 128.5, y: 140.5}, 5)
.to({x: 114.5}, 5)
.to({x: 110.5}, 4)
.to({x: 89.5}, 5)
.to({startPosition: 0}, 5)
.to({x: 112.5, y: 120.5}, 5)
.to({x: 128.5, y: 140.5}, 5)
.to({x: 114.5}, 5)
.to({x: 110.5}, 4)
.to({x: 89.5}, 5)
.to({startPosition: 0}, 5)
.to({x: 128.5}, 6)
.to({x: 114.5}, 5)
.to({x: 110.5}, 4)
.to({x: 89.5}, 5)
.to({startPosition: 0}, 5)
.to({startPosition: 0}, 6)
.wait(1)
.to({startPosition: 0}, 0)
.to({x: 128.5}, 6)
.to({x: 114.5}, 5)
.to({x: 110.5}, 4)
.to({x: 89.5}, 5)
.to({startPosition: 0}, 5)
.to({startPosition: 0}, 6)
.wait(1));

	// tween4
	this.instance_1 = new lib.tween4('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(312.5, 145);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x: 289.5}, 5)
.to({x: 367.5}, 5)
.to({x: 304.5}, 5)
.to({x: 339.5}, 4)
.to({x: 312.5}, 5)
.to({startPosition: 0}, 5)
.to({x: 289.5}, 5)
.to({x: 367.5}, 5)
.to({x: 304.5}, 5)
.to({x: 339.5}, 4)
.to({x: 312.5}, 5)
.to({startPosition: 0}, 5)
.to({x: 367.5}, 6)
.to({x: 304.5}, 5)
.to({x: 339.5}, 4)
.to({x: 312.5}, 5)
.to({startPosition: 0}, 5)
.to({startPosition: 0}, 6)
.wait(1)
.to({startPosition: 0}, 0)
.to({x: 367.5}, 6)
.to({x: 304.5}, 5)
.to({x: 339.5}, 4)
.to({x: 312.5}, 5)
.to({startPosition: 0}, 5)
.to({startPosition: 0}, 6)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 413, 285);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_45 = function() {
		playSound('typing');
	};
	this.frame_119 = function() {
		this.stop();
		if (p4Model) {
			p4Model.dispatchEvent('p4-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45)
.call(this.frame_45)
.wait(74)
.call(this.frame_119)
.wait(1));

	// 图层 12
	this.instance = new lib.tween17('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(377.5, 1048);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.tween18('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(377.5, 1048);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance}]}, 33)
.to({state: [{t: this.instance_1}]}, 12)
.wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33)
.to({_off: false}, 0)
.to({_off: true, alpha: 1}, 12)
.wait(75));

	// 图层 29
	this.instance_2 = new lib.type6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(475.5, 297.4, 1, 1, 0, 0, 0, 161.5, 25.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98)
.to({_off: false}, 0)
.wait(22));

	// 图层 27
	this.instance_3 = new lib.type4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(469.1, 299.6, 1, 1, 0, 0, 0, 155.1, 20);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(83)
.to({_off: false}, 0)
.to({_off: true}, 12)
.wait(25));

	// 图层 26
	this.instance_4 = new lib.type3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(397.1, 299.6, 1, 1, 0, 0, 0, 83.1, 20);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70)
.to({_off: false}, 0)
.to({_off: true}, 10)
.wait(40));

	// 图层 25
	this.instance_5 = new lib.type2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(424.1, 299.6, 1, 1, 0, 0, 0, 110.1, 20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55)
.to({_off: false}, 0)
.to({_off: true}, 13)
.wait(52));

	// 图层 24
	this.instance_6 = new lib.type();
	this.instance_6.parent = this;
	this.instance_6.setTransform(424.1, 299.6, 1, 1, 0, 0, 0, 110.1, 20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(46)
.to({_off: false}, 0)
.to({_off: true}, 9)
.wait(65));

	// mask (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p('EhIdBABQlGhMj5jIQh5hhiXADQh4ACicBFQg3AYjPBuQiVBPhOARQhvAXhAhDQhJhNgcjPQg9nJCazaUAEzgmfAFQgQmQCXngC7kvQCZj4DijJQF4lOHVk8QDCiDCOhPQCNhQAlAAQAcAABRgkQB3g1A8gVQEYhiEkAwQDwAoB4gPQAegDAPAGQAPAHA8AtQBkBLB4iWQAlgvAjg/IAcg3IOriLMAruAAUIAoDbQV4BkBkAAQHlAAHJAwQOFBdCwDvQBWB2A7hgQAPgYAdhHQAbg/AQgVQA2hDBSCwQBpDeC7KaQCkJJCiGuQAkBfBIC1QA1CGAWBDQA7CyAFDjQAEDUgmJNQggHvAnGSQAOCOAYCWQAOBTAYCHQAjDNgeBqQglCDiqCqQiXCXhGB1QgnBBgmBXQgnBGheBDQhyBSkTCNQj8CBCOASQBIAJD6gaQBQgJACAEQAEAEhoAcQiXApvXDyQsqDHoRCiQmpCMh4AkQipAzjaAQQiRALrTAZQvYAhnfAEQtZAHr2AQQobALrpAyQrfAyjoAEIheAAQl/AAj/g7g');

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0})
.wait(45)
.to({graphics: mask_graphics_45, x: 361.4, y: 875.5})
.wait(75));

	// Microsoft YaHei UI .png
	this.instance_7 = new lib.tween6('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(400, 188.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98)
.to({_off: false}, 0)
.to({x: 364, y: 736}, 9, cjs.Ease.get(1))
.wait(13));

	// Microsoft YaHei UI.png
	this.instance_8 = new lib.tween7('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(398.9, 244.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(92)
.to({_off: false}, 0)
.to({x: 296.9, y: 698.4}, 9, cjs.Ease.get(1))
.wait(19));

	// gongfang.png
	this.instance_9 = new lib.tween13('synched', 0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(812, 441.5, 1, 1, 21, 0, 0, 0.1, 0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(65)
.to({_off: false}, 0)
.to({regX: 0, rotation: 0, x: 505, y: 624.1}, 9, cjs.Ease.get(1))
.wait(46));

	// zizi.png
	this.instance_10 = new lib.tween8('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(420.2, 174.6);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(85)
.to({_off: false}, 0)
.to({x: 270.2, y: 608.5}, 8, cjs.Ease.get(1))
.wait(27));

	// zizi.png
	this.instance_11 = new lib.tween9('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(393.6, 174.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79)
.to({_off: false}, 0)
.to({x: 449.5, y: 674.5}, 8, cjs.Ease.get(1))
.wait(33));

	// tongxin.png
	this.instance_12 = new lib.tween10('synched', 0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(423, 195.9);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74)
.to({_off: false}, 0)
.to({x: 301, y: 662}, 9, cjs.Ease.get(1))
.wait(37));

	// Microsoft YaHei UI.png
	this.instance_13 = new lib.tween11('synched', 0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(330.1, 279.1);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(68)
.to({_off: false}, 0)
.to({x: 538, y: 617}, 9, cjs.Ease.get(1))
.wait(43));

	// hanyun.png
	this.instance_14 = new lib.tween12('synched', 0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(330.1, 247.7);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(62)
.to({_off: false}, 0)
.to({x: 487, y: 661.5}, 9, cjs.Ease.get(1))
.wait(49));

	// gongfang.png
	this.instance_15 = new lib.tween13('synched', 0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(794.6, 428.1, 1, 1, 21, 0, 0, 0.1, 0.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56)
.to({_off: false}, 0)
.to({regX: 0, rotation: 0, x: 581.5, y: 548}, 9, cjs.Ease.get(1))
.wait(55));

	// 2-cusong.png
	this.instance_16 = new lib.tween14('synched', 0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(452.3, 242.6, 1, 1, 180);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(50)
.to({_off: false}, 0)
.to({x: 212.4, y: 528.5}, 10, cjs.Ease.get(1))
.wait(60));

	// 1-cusong.png
	this.instance_17 = new lib.tween15('synched', 0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(312.1, 224.5);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(45)
.to({_off: false}, 0)
.to({x: 542.5, y: 553.5}, 9, cjs.Ease.get(1))
.wait(66));

	// 图层 8
	this.instance_18 = new lib.tween5('synched', 0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(379, 299);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19)
.to({_off: false}, 0)
.to({alpha: 1}, 14)
.wait(87));

	// zuoshou.png
	this.instance_19 = new lib.tween3('synched', 0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(256.5, -159.4);
	this.instance_19._off = true;

	this.instance_20 = new lib.hand();
	this.instance_20.parent = this;
	this.instance_20.setTransform(373.5, 80.5, 1, 1, 0, 0, 0, 206.5, 142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_19}]}, 10)
.to({state: [{t: this.instance_19}]}, 9)
.to({state: [{t: this.instance_20}]}, 26)
.wait(75));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(10)
.to({_off: false}, 0)
.to({y: 78.5}, 9, cjs.Ease.get(1))
.to({_off: true}, 26)
.wait(75));

	// youshou.png
	this.instance_21 = new lib.tween4('synched', 0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(479.5, -154.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(10)
.to({_off: false}, 0)
.to({y: 83}, 9, cjs.Ease.get(1))
.to({_off: true}, 26)
.wait(75));

	// 图层 5
	this.instance_22 = new lib.tween2('synched', 0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(385.5, -79.3);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({y: 298.5, alpha: 1}, 10, cjs.Ease.get(1))
.wait(110));

	// 图层 4
	this.instance_23 = new lib.beijing();
	this.instance_23.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, -296.8, 750, 1510.9);


// stage content:
(lib.montagep4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.scene();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320, 183.1, 750, 1510.9);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '4/images/montage_p4_atlas_.png', id: 'montage_p4_atlas_'},
		{src: window.configs.perfixUrl + '4/sounds/typing.mp3', id: 'typing'}
	],
	preloads: []
};


})(lib4 = lib4 || {}, images4 = images4 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib4, images4, createjs, ss, AdobeAn;