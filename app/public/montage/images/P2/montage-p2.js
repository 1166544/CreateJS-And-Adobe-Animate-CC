(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p2_atlas_', frames: [[0, 1221, 613, 359], [229, 1582, 151, 106], [615, 1414, 651, 240], [752, 858, 680, 554], [1720, 1340, 129, 236], [1367, 0, 613, 856], [752, 0, 613, 856], [1434, 1340, 284, 296], [0, 1582, 227, 213], [1356, 1414, 68, 216], [1982, 0, 42, 134], [1853, 858, 191, 733], [615, 1221, 110, 104], [382, 1582, 110, 104], [1720, 1578, 110, 104], [1268, 1414, 86, 341], [1434, 858, 417, 480], [0, 0, 750, 1219]]}
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


(lib.ca49687fc6a82dc7671f3c73208b8934e9b559c291262pEduVk_fw658拷贝 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.coffeecup = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.montagep1sdffs = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.montagep21 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.montagep217 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.montagep2191 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.montagep219 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.montagep221 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.montagep222 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.montagep223 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.montagep229 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();


(lib.montagep2blood = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();


(lib.montagep2l1 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();


(lib.montagep2l2 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();


(lib.montagep2l3 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();


(lib.montagep2right = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();


(lib.montagep2rouse = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();


(lib.VCG21gic191185482 = function() {
	this.spriteSheet = ss.montage_p2_atlas_;
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.tween18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep217();
	this.instance.parent = this;
	this.instance.setTransform(41.2, -72, 0.639, 0.611, 0, 0, 180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1, -72, 82.4, 144.1);


(lib.tween17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep217();
	this.instance.parent = this;
	this.instance.setTransform(41.2, -72, 0.639, 0.611, 0, 0, 180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.1, -72, 82.4, 144.1);


(lib.tween16 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.coffeecup();
	this.instance.parent = this;
	this.instance.setTransform(-74, -68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74, -68, 151, 106);


(lib.tween14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep217();
	this.instance.parent = this;
	this.instance.setTransform(-64.5, -118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5, -118, 129, 236);


(lib.tween13 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep217();
	this.instance.parent = this;
	this.instance.setTransform(-64.5, -118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5, -118, 129, 236);


(lib.tween10 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep229();
	this.instance.parent = this;
	this.instance.setTransform(-21, -67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21, -67, 42, 134);


(lib.tween9 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep222();
	this.instance.parent = this;
	this.instance.setTransform(-113.5, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.5, -106.5, 227, 213);


(lib.tween8 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep221();
	this.instance.parent = this;
	this.instance.setTransform(-142, -148);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142, -148, 284, 296);


(lib.tween7 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep2rouse();
	this.instance.parent = this;
	this.instance.setTransform(-208.5, -240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.5, -240, 417, 480);


(lib.tween6 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep21();
	this.instance.parent = this;
	this.instance.setTransform(-340, -277);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340, -277, 680, 554);


(lib.tween5 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.ca49687fc6a82dc7671f3c73208b8934e9b559c291262pEduVk_fw658拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-306.5, -179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5, -179.5, 613, 359);


(lib.tween4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep219();
	this.instance.parent = this;
	this.instance.setTransform(-306.5, -428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5, -428, 613, 856);


(lib.tween3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep2191();
	this.instance.parent = this;
	this.instance.setTransform(-306.5, -428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.5, -428, 613, 856);


(lib.dialogue_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep1sdffs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dialogue_mc, new cjs.Rectangle(0, 0, 651, 240), null);


(lib.butterfly = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// montage-p2-l-3.png
	this.instance = new lib.montagep2l3();
	this.instance.parent = this;
	this.instance.setTransform(-55, -52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4)
.to({scaleX: 0.44, rotation: -15, x: -36.6, y: -44}, 0)
.wait(1)
.to({scaleX: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 0.44, rotation: -15, x: -36.6, y: -44}, 0)
.wait(1)
.to({scaleX: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 0.44, rotation: -15, x: -36.6, y: -44}, 0)
.wait(1)
.to({scaleX: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 0.44, rotation: -15, x: -36.6, y: -44}, 0)
.wait(1)
.to({scaleX: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(12)
.to({scaleX: 0.4, rotation: -30, x: -45, y: -34}, 0)
.wait(1)
.to({scaleX: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(7));

	// montage-p2-l-2.png
	this.instance_1 = new lib.montagep2l2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55, -52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4)
.to({scaleX: 1.09, scaleY: 0.66, rotation: 15, x: -47.5, y: -48.4}, 0)
.wait(1)
.to({scaleX: 1, scaleY: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 1.09, scaleY: 0.66, rotation: 15, x: -47.5, y: -48.4}, 0)
.wait(1)
.to({scaleX: 1, scaleY: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 1.09, scaleY: 0.66, rotation: 15, x: -47.5, y: -48.4}, 0)
.wait(1)
.to({scaleX: 1, scaleY: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(4)
.to({scaleX: 1.09, scaleY: 0.66, rotation: 15, x: -47.5, y: -48.4}, 0)
.wait(1)
.to({scaleX: 1, scaleY: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(12)
.to({scaleY: 0.44, rotation: 30, x: -36.1, y: -47.4}, 0)
.wait(1)
.to({scaleY: 1, rotation: 0, x: -55, y: -52}, 0)
.wait(7));

	// montage-p2-l-1.png
	this.instance_2 = new lib.montagep2l1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57, -53);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57, -53, 112, 105);


(lib.leg_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 2
	this.instance = new lib.tween10('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(42, 12, 1, 1, 0, 0, 0, -13, -55);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX: 1, scaleY: 1, rotation: -24.8, x: 46.2, y: 15.1}, 5)
.to({regY: -54.9, scaleX: 1, scaleY: 1, rotation: -15, y: 15}, 7)
.wait(5)
.to({startPosition: 0}, 0)
.to({regY: -55, rotation: 0, x: 42, y: 12}, 10)
.wait(1));

	// 图层 1
	this.instance_1 = new lib.montagep223();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 76, 216);


(lib.butterfly2_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 3
	this.instance = new lib.butterfly();
	this.instance.parent = this;
	this.instance.setTransform(-63.6, 86.1, 0.636, 0.636, 75, 0, 0, 0.1, 0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94)
.to({_off: false}, 0)
.to({regY: -0.1, rotation: 60, guide: {path: [-63.6, 86, -31.5, 52.5, 0.2, -2]}}, 22)
.wait(1));

	// 图层 1
	this.instance_1 = new lib.butterfly();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.4, 0.8, 0.636, 0.636, 60, 0, 0, 0.1, -0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation: 30, guide: {path: [-1.3, 0.8, -0.1, -1.2, 1.1, -3.3, 33.7, -60, 46.6, -105.8, 54.7, -134.4, 52.2, -148.4]}}, 24)
.to({regY: 0, rotation: -90, guide: {path: [52.1, -148.4, 50.6, -156.9, 45.2, -160, 36.4, -165.1, 20.5, -154.1]}}, 13)
.to({regX: 0.3, regY: 0.1, rotation: -105, guide: {path: [20.4, -154.1, 10.4, -147.2, -2.4, -134.1, -35.7, -99.9, -68.3, -43.3, -90.6, -4.6, -103.7, 29]}}, 42)
.to({_off: true}, 1)
.wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7, -47.4, 92.4, 95.1);


(lib.butterfly_mc1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 3
	this.instance = new lib.butterfly();
	this.instance.parent = this;
	this.instance.setTransform(123.7, 283.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89)
.to({_off: false}, 0)
.to({guide: {path: [123.7, 283.6, 121.6, 255.9, 103.8, 207.1, 72.9, 122.5, 13.1, 24.2, 7.3, 14.6, 1.6, 5.5]}}, 30)
.wait(1));

	// 图层 1
	this.instance_1 = new lib.butterfly();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.8, -3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation: -30, guide: {path: [-3.9, -3, -54.5, -82.2, -100.5, -128.9, -142.3, -171.3, -161.4, -167.9]}}, 26)
.to({regX: -0.1, regY: -0.1, scaleX: 1, scaleY: 1, rotation: -151.4, guide: {path: [-161.3, -168, -166.8, -167, -170.4, -162.3, -183.1, -145.6, -167, -90.1]}}, 8)
.to({regX: 0, regY: 0, scaleX: 1, scaleY: 1, rotation: -210, guide: {path: [-167, -90.1, -162.5, -74.7, -155.8, -56.3, -124.9, 28.2, -65, 126.6, -5.3, 225.1, 48.4, 279.7, 74.9, 306.6, 92.4, 315.1]}}, 55)
.to({_off: true}, 1)
.wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8, -56, 112, 105);


(lib.tween11 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// leg_mc
	this.instance = new lib.leg_mc();
	this.instance.parent = this;
	this.instance.setTransform(2.2, 0, 1, 1, 0, 0, 0, 34, 108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// leg_mc
	this.instance_1 = new lib.leg_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90.3, 17.5, 0.647, 0.647, 0, 0, 0, 34, 108.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// leg_mc
	this.instance_2 = new lib.leg_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.1, 6.5, 0.647, 0.647, 0, 0, 0, 34, 108.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3, -108, 224.6, 216);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_220 = function() {
		// 最后一帧派发
		this.stop();
		
		if (p2Model) {
		  p2Model.dispatchEvent('p2-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(220)
.call(this.frame_220)
.wait(1));

	// 图层 25 (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	var mask_graphics_156 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_157 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_158 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_159 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_160 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_161 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_162 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_163 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_164 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_165 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_166 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_167 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_168 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_169 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_170 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_171 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_172 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_173 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_174 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_175 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_176 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_177 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_178 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_179 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_180 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_181 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_182 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_183 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_184 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_185 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_186 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_187 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_188 = new cjs.Graphics().p('AkgVvMAAAg+gIJCAAMAAAA+gQh/TDiRAAQiQAAiizDg');
	var mask_graphics_189 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');
	var mask_graphics_190 = new cjs.Graphics().p('AkgVuMAAAg+fIJCAAMAAAA+fQh/TEiRAAQiQAAiizEg');

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0})
.wait(156)
.to({graphics: mask_graphics_156, x: 709, y: 362})
.wait(1)
.to({graphics: mask_graphics_157, x: 709, y: 371.1})
.wait(1)
.to({graphics: mask_graphics_158, x: 709, y: 380.1})
.wait(1)
.to({graphics: mask_graphics_159, x: 709, y: 389.2})
.wait(1)
.to({graphics: mask_graphics_160, x: 709, y: 398.3})
.wait(1)
.to({graphics: mask_graphics_161, x: 709, y: 407.3})
.wait(1)
.to({graphics: mask_graphics_162, x: 709, y: 416.4})
.wait(1)
.to({graphics: mask_graphics_163, x: 709, y: 425.4})
.wait(1)
.to({graphics: mask_graphics_164, x: 709, y: 434.5})
.wait(1)
.to({graphics: mask_graphics_165, x: 709, y: 443.6})
.wait(1)
.to({graphics: mask_graphics_166, x: 709, y: 452.6})
.wait(1)
.to({graphics: mask_graphics_167, x: 709, y: 461.7})
.wait(1)
.to({graphics: mask_graphics_168, x: 709, y: 470.7})
.wait(1)
.to({graphics: mask_graphics_169, x: 709, y: 479.8})
.wait(1)
.to({graphics: mask_graphics_170, x: 709, y: 488.9})
.wait(1)
.to({graphics: mask_graphics_171, x: 709, y: 497.9})
.wait(1)
.to({graphics: mask_graphics_172, x: 709, y: 507})
.wait(1)
.to({graphics: mask_graphics_173, x: 709, y: 516.1})
.wait(1)
.to({graphics: mask_graphics_174, x: 709, y: 525.1})
.wait(1)
.to({graphics: mask_graphics_175, x: 709, y: 534.2})
.wait(1)
.to({graphics: mask_graphics_176, x: 709, y: 543.2})
.wait(1)
.to({graphics: mask_graphics_177, x: 709, y: 552.3})
.wait(1)
.to({graphics: mask_graphics_178, x: 709, y: 561.4})
.wait(1)
.to({graphics: mask_graphics_179, x: 709, y: 570.4})
.wait(1)
.to({graphics: mask_graphics_180, x: 709, y: 579.5})
.wait(1)
.to({graphics: mask_graphics_181, x: 709, y: 588.5})
.wait(1)
.to({graphics: mask_graphics_182, x: 709, y: 597.6})
.wait(1)
.to({graphics: mask_graphics_183, x: 709, y: 606.7})
.wait(1)
.to({graphics: mask_graphics_184, x: 709, y: 615.7})
.wait(1)
.to({graphics: mask_graphics_185, x: 709, y: 624.8})
.wait(1)
.to({graphics: mask_graphics_186, x: 709, y: 633.8})
.wait(1)
.to({graphics: mask_graphics_187, x: 709, y: 642.9})
.wait(1)
.to({graphics: mask_graphics_188, x: 709, y: 652})
.wait(1)
.to({graphics: mask_graphics_189, x: 709, y: 661})
.wait(1)
.to({graphics: mask_graphics_190, x: 709, y: 670.1})
.wait(31));

	// 图层 22
	this.instance = new lib.montagep2right();
	this.instance.parent = this;
	this.instance.setTransform(661, 549);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(156)
.to({_off: false}, 0)
.wait(65));

	// 图层 18
	this.instance_1 = new lib.tween17('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(800.2, 604.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.tween18('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(682.2, 530.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_1}]}, 73)
.to({state: [{t: this.instance_2}]}, 7)
.wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73)
.to({_off: false}, 0)
.to({_off: true, x: 682.2, y: 530.1}, 7, cjs.Ease.get(1))
.wait(141));

	// 图层 17
	this.instance_3 = new lib.tween16('synched', 0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77, 800.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66)
.to({_off: false}, 0)
.to({x: 74}, 7, cjs.Ease.get(1))
.wait(148));

	// 图层 24 (mask)
	var mask_1 = new cjs.Shape();

	mask_1._off = true;
	var mask_1_graphics_156 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_157 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_158 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_159 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_160 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_161 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_162 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_163 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_164 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_165 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_166 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_167 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_168 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_169 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_170 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_171 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_172 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_173 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_174 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_175 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_176 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_177 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_178 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_179 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_180 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_181 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_182 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_183 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_184 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_185 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_186 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_187 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_188 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');
	var mask_1_graphics_189 = new cjs.Graphics().p('ApNVvMAAAg+gISbAAMAAAA+gQkCTDknAAQkmAAlMzDg');
	var mask_1_graphics_190 = new cjs.Graphics().p('ApNVuMAAAg+fISbAAMAAAA+fQkCTEknAAQkmAAlMzEg');

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics: null, x: 0, y: 0})
.wait(156)
.to({graphics: mask_1_graphics_156, x: 71, y: 253})
.wait(1)
.to({graphics: mask_1_graphics_157, x: 71, y: 264})
.wait(1)
.to({graphics: mask_1_graphics_158, x: 71, y: 274.9})
.wait(1)
.to({graphics: mask_1_graphics_159, x: 71, y: 285.9})
.wait(1)
.to({graphics: mask_1_graphics_160, x: 71, y: 296.8})
.wait(1)
.to({graphics: mask_1_graphics_161, x: 71, y: 307.7})
.wait(1)
.to({graphics: mask_1_graphics_162, x: 71, y: 318.7})
.wait(1)
.to({graphics: mask_1_graphics_163, x: 71, y: 329.6})
.wait(1)
.to({graphics: mask_1_graphics_164, x: 71, y: 340.6})
.wait(1)
.to({graphics: mask_1_graphics_165, x: 71, y: 351.5})
.wait(1)
.to({graphics: mask_1_graphics_166, x: 71, y: 362.4})
.wait(1)
.to({graphics: mask_1_graphics_167, x: 71, y: 373.4})
.wait(1)
.to({graphics: mask_1_graphics_168, x: 71, y: 384.3})
.wait(1)
.to({graphics: mask_1_graphics_169, x: 71, y: 395.3})
.wait(1)
.to({graphics: mask_1_graphics_170, x: 71, y: 406.2})
.wait(1)
.to({graphics: mask_1_graphics_171, x: 71, y: 417.1})
.wait(1)
.to({graphics: mask_1_graphics_172, x: 71, y: 428.1})
.wait(1)
.to({graphics: mask_1_graphics_173, x: 71, y: 439})
.wait(1)
.to({graphics: mask_1_graphics_174, x: 71, y: 450})
.wait(1)
.to({graphics: mask_1_graphics_175, x: 71, y: 460.9})
.wait(1)
.to({graphics: mask_1_graphics_176, x: 71, y: 471.9})
.wait(1)
.to({graphics: mask_1_graphics_177, x: 71, y: 482.8})
.wait(1)
.to({graphics: mask_1_graphics_178, x: 71, y: 493.7})
.wait(1)
.to({graphics: mask_1_graphics_179, x: 71, y: 504.7})
.wait(1)
.to({graphics: mask_1_graphics_180, x: 71, y: 515.6})
.wait(1)
.to({graphics: mask_1_graphics_181, x: 71, y: 526.6})
.wait(1)
.to({graphics: mask_1_graphics_182, x: 71, y: 537.5})
.wait(1)
.to({graphics: mask_1_graphics_183, x: 71, y: 548.4})
.wait(1)
.to({graphics: mask_1_graphics_184, x: 71, y: 559.4})
.wait(1)
.to({graphics: mask_1_graphics_185, x: 71, y: 570.3})
.wait(1)
.to({graphics: mask_1_graphics_186, x: 71, y: 581.3})
.wait(1)
.to({graphics: mask_1_graphics_187, x: 71, y: 592.2})
.wait(1)
.to({graphics: mask_1_graphics_188, x: 71, y: 603.1})
.wait(1)
.to({graphics: mask_1_graphics_189, x: 71, y: 614.1})
.wait(1)
.to({graphics: mask_1_graphics_190, x: 71, y: 625})
.wait(31));

	// 图层 23
	this.instance_4 = new lib.montagep2blood();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0, 333);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156)
.to({_off: false}, 0)
.wait(65));

	// 图层 16
	this.instance_5 = new lib.tween13('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-64.5, 461);
	this.instance_5._off = true;

	this.instance_6 = new lib.tween14('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(96.5, 387);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_5}]}, 66)
.to({state: [{t: this.instance_6}]}, 7)
.wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(66)
.to({_off: false}, 0)
.to({_off: true, x: 96.5, y: 387}, 7, cjs.Ease.get(1))
.wait(148));

	// 图层 14
	this.instance_7 = new lib.dialogue_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376.5, 1085, 1, 1, 0, 0, 0, 325.5, 100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49)
.to({_off: false}, 0)
.to({y: 1035.3, alpha: 1}, 17, cjs.Ease.get(1))
.wait(155));

	// leg
	this.instance_8 = new lib.tween11('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(378.8, 569, 0.412, 0.412);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35)
.to({_off: false}, 0)
.to({scaleX: 1, scaleY: 1, y: 487.2, alpha: 1}, 14, cjs.Ease.get(1))
.wait(172));

	// flower
	this.instance_9 = new lib.tween7('synched', 0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(821.5, 1404.1, 0.463, 0.463);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15)
.to({_off: false}, 0)
.to({scaleX: 1, scaleY: 1, x: 668.5, y: 1122, alpha: 1}, 9, cjs.Ease.get(1))
.wait(197));

	// montage-p2-19-1.png
	this.instance_10 = new lib.tween3('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(374.5, 1039.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7)
.to({_off: false}, 0)
.to({y: 453.6}, 8, cjs.Ease.get(1))
.wait(206));

	// montage-p2-19.png
	this.instance_11 = new lib.tween4('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(373.5, 1033.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7)
.to({_off: false}, 0)
.to({y: 451.6}, 8, cjs.Ease.get(1))
.wait(206));

	// butterfly2
	this.instance_12 = new lib.butterfly();
	this.instance_12.parent = this;
	this.instance_12.setTransform(541.2, 366.1, 0.636, 0.636, 60, 0, 0, 0.1, -0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.butterfly2_mc();
	this.instance_13.parent = this;
	this.instance_13.setTransform(647, 147.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_12}]}, 80)
.to({state: [{t: this.instance_12}]}, 18)
.to({state: [{t: this.instance_13}]}, 1)
.wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80)
.to({_off: false}, 0)
.to({x: 647.2, y: 222, alpha: 1}, 18, cjs.Ease.get(1))
.to({_off: true}, 1)
.wait(122));

	// butterfly
	this.instance_14 = new lib.butterfly();
	this.instance_14.parent = this;
	this.instance_14.setTransform(378.8, 585);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.instance_15 = new lib.butterfly_mc1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(279, 216.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_14}]}, 80)
.to({state: [{t: this.instance_14}]}, 18)
.to({state: [{t: this.instance_15}]}, 1)
.wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(80)
.to({_off: false}, 0)
.to({x: 280, y: 291, alpha: 1}, 18, cjs.Ease.get(1))
.to({_off: true}, 1)
.wait(122));

	// ca49687fc6a82dc7671f3c73208b8934e9b559c291262-pEduVk_fw658-拷贝.png
	this.instance_16 = new lib.tween5('synched', 0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(373.5, 1278.4);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3)
.to({_off: false}, 0)
.to({y: 698.1}, 8, cjs.Ease.get(1))
.wait(210));

	// montage-p2-1.png
	this.instance_17 = new lib.tween6('synched', 0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(340, 1532.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x: 342, y: 941}, 6, cjs.Ease.get(1))
.wait(215));

	// cd2
	this.instance_18 = new lib.tween9('synched', 0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(499.5, 777.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(24)
.to({_off: false}, 0)
.to({regX: 0.1, regY: 0.1, scaleX: 0.77, scaleY: 0.79, x: 567.6, y: 575.6}, 11, cjs.Ease.get(1))
.wait(186));

	// cd
	this.instance_19 = new lib.tween8('synched', 0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(81, 1273);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24)
.to({_off: false}, 0)
.to({scaleX: 0.91, scaleY: 0.89, y: 963}, 11, cjs.Ease.get(1))
.wait(186));

	// 图层 1
	this.instance_20 = new lib.VCG21gic191185482();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0, -1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, -1, 750, 1810.9);


// stage content:
(lib.montagep2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.scene();
	this.instance.parent = this;
	this.instance.setTransform(375, 667, 1, 1, 0, 0, 0, 375, 667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375, 666, 750, 1810.9);
// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '2/images/montage_p2_atlas_.png', id: 'montage_p2_atlas_'}
	],
	preloads: []
};


})(lib2 = lib2 || {}, images2 = images2 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib2, images2, createjs, ss, AdobeAn;