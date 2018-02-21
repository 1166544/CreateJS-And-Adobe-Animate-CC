(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p1_atlas_', frames: [[0, 0, 750, 1212], [1875, 453, 116, 117], [1504, 0, 369, 571], [1875, 0, 151, 149], [1875, 151, 151, 149], [1872, 813, 151, 149], [1872, 964, 151, 149], [1875, 302, 151, 149], [1338, 813, 278, 540], [0, 1214, 198, 139], [752, 540, 584, 584], [752, 1126, 216, 216], [970, 1126, 218, 142], [1338, 573, 651, 238], [1618, 813, 252, 414], [752, 0, 750, 538]]}
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


(lib.bg1 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.cop1 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.JB = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.m1 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.m2 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.m3 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.m4 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.m5 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.montage5 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.montagep114 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.montagep17 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();


(lib.montagep18 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();


(lib.montagep19 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();


(lib.P1 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();


(lib.talor = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();


(lib.VCG21gic15864762 = function() {
	this.spriteSheet = ss.montage_p1_atlas_;
	this.gotoAndStop(15);
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


(lib.tweendss = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep18();
	this.instance.parent = this;
	this.instance.setTransform(-108, -108);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108, -108, 216, 216);


(lib.tween1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(-375, -559, 1.027, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -559, 770, 1212);


(lib.tswseen1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep17();
	this.instance.parent = this;
	this.instance.setTransform(-292, -292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292, -292, 584, 584);


(lib.magesTween23 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m2();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween22 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m3();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween21 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween20 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m5();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween19 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween16 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m1();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween15 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m5();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween13 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m5();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween12 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m2();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween11 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m2();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween10 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m4();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.magesTween9 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(['rgba(255,204,0,0.827)', 'rgba(255,233,0,0.22)', 'rgba(255,255,0,0)'], [0, 0.533, 0.925], 2.9, -300.5, 2.9, 219.5).s()
.p('EgPAAh7MALkhD1IDwAAMAOtBD1g');
	this.shape.setTransform(8.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(['rgba(255,204,0,0.91)', 'rgba(255,233,0,0.22)', 'rgba(255,255,0,0)'], [0, 0.533, 0.925], -0.1, -300.5, -0.1, 219.5).s()
.p('EgW9Ah7MAKThD1ITsAAMAP9BD1g');
	this.shape_1.setTransform(11.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136, -227, 294.1, 434.1);


(lib.magesTween8 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(['rgba(51,102,204,0.827)', 'rgba(51,102,204,0.22)', 'rgba(51,102,204,0)'], [0, 0.533, 0.925], 2.9, -300.5, 2.9, 219.5).s()
.p('EgPAAh7MALkhD1IDwAAMAOtBD1g');
	this.shape.setTransform(8.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(['rgba(51,51,204,0.91)', 'rgba(51,51,204,0.22)', 'rgba(51,102,204,0)'], [0, 0.533, 0.925], -0.1, -300.5, -0.1, 219.5).s()
.p('EgW9Ah7MAKThD1ITsAAMAP9BD1g');
	this.shape_1.setTransform(11.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136, -227, 294.1, 434.1);


(lib.magesTween7 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(['rgba(51,102,204,0.827)', 'rgba(51,102,204,0.22)', 'rgba(51,102,204,0)'], [0, 0.533, 0.925], 2.9, -300.5, 2.9, 219.5).s()
.p('EgPAAh7MALkhD1IDwAAMAOtBD1g');
	this.shape.setTransform(8.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(['rgba(51,51,204,0.91)', 'rgba(51,51,204,0.22)', 'rgba(51,102,204,0)'], [0, 0.533, 0.925], -0.1, -300.5, -0.1, 219.5).s()
.p('EgW9Ah7MAKThD1ITsAAMAP9BD1g');
	this.shape_1.setTransform(11.1, -10);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136, -227, 294.1, 434.1);


(lib.magesTween6 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.cop1();
	this.instance.parent = this;
	this.instance.setTransform(-58, -58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58, -58.5, 116, 117);


(lib.magesTween5 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep114();
	this.instance.parent = this;
	this.instance.setTransform(-99, -69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99, -69.5, 198, 139);


(lib.magesTween4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.JB();
	this.instance.parent = this;
	this.instance.setTransform(-184.5, -285.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5, -285.5, 369, 571);


(lib.magesTween3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montage5();
	this.instance.parent = this;
	this.instance.setTransform(-139, -270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139, -270, 278, 540);


(lib.magesTween2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.talor();
	this.instance.parent = this;
	this.instance.setTransform(-126, -207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126, -207, 252, 414);


(lib.magesTween1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.montagep19();
	this.instance.parent = this;
	this.instance.setTransform(-109, -71);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109, -71, 218, 142);


(lib.imagesTween4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.m1();
	this.instance.parent = this;
	this.instance.setTransform(-75.5, -74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.5, -74.5, 151, 149);


(lib.dialogue_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.P1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dialogue_mc, new cjs.Rectangle(0, 0, 651, 238), null);


(lib.spy_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.magesTween5('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(99, 69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 43.5}, 49)
.to({y: 69.5}, 50)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 198, 139);


(lib.small_cd_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweendss('synched', 0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: 360}, 124)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108, -108, 216, 216);


(lib.cd_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_0 = function() {
		playSound('cd_move');
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0)
.wait(125));

	// 图层 1
	this.instance = new lib.tswseen1('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(292, 292);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: 360}, 124)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 584, 584);


(lib.ball_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.magesTween6('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(58, 58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y: -49.5}, 22, cjs.Ease.get(0.99))
.to({y: 58.5}, 77, cjs.Ease.get(1))
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 116, 117);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_131 = function() {
		playSound('money_drop');
	};
	this.frame_160 = function() {
		this.stop();
		
		if (p1Model) {
			p1Model.dispatchEvent('p1-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(131)
.call(this.frame_131)
.wait(29)
.call(this.frame_160)
.wait(1));

	// m4.png
	this.instance = new lib.magesTween10('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(564.5, -35.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135)
.to({_off: false}, 0)
.to({y: 724.5}, 14)
.wait(12));

	// m2.png
	this.instance_1 = new lib.magesTween11('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.5, 31.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135)
.to({_off: false}, 0)
.to({y: 791.5}, 14)
.wait(12));

	// m2.png
	this.instance_2 = new lib.magesTween12('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(188.5, 434.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136)
.to({_off: false}, 0)
.to({y: 1194.5}, 14)
.wait(11));

	// m5.png
	this.instance_3 = new lib.magesTween13('synched', 0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(101.5, 63.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136)
.to({_off: false}, 0)
.to({y: 823.5}, 14)
.wait(11));

	// m5.png
	this.instance_4 = new lib.magesTween14('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(674.5, 2.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136)
.to({_off: false}, 0)
.to({y: 762.5}, 14)
.wait(11));

	// m4.png
	this.instance_5 = new lib.magesTween15('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(308.5, 416.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137)
.to({_off: false}, 0)
.to({y: 1176.5}, 14)
.wait(10));

	// m1.png
	this.instance_6 = new lib.magesTween16('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(459.5, 434.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137)
.to({_off: false}, 0)
.to({y: 1194.5}, 14)
.wait(10));

	// m4.png
	this.instance_7 = new lib.magesTween17('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(630.5, 498.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(136)
.to({_off: false}, 0)
.to({y: 1258.5}, 14)
.wait(11));

	// m4.png
	this.instance_8 = new lib.magesTween18('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(476.5, 113.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(136)
.to({_off: false}, 0)
.to({y: 873.5}, 14)
.wait(11));

	// m4.png
	this.instance_9 = new lib.magesTween19('synched', 0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(371.5, -85.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(136)
.to({_off: false}, 0)
.to({y: 674.5}, 14)
.wait(11));

	// m5.png
	this.instance_10 = new lib.magesTween20('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(188.5, 368.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135)
.to({_off: false}, 0)
.to({y: 1128.5}, 14)
.wait(12));

	// m4.png
	this.instance_11 = new lib.magesTween21('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(388.5, 368.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(135)
.to({_off: false}, 0)
.to({y: 1128.5}, 14)
.wait(12));

	// m3.png
	this.instance_12 = new lib.magesTween22('synched', 0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(576.5, 208.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(135)
.to({_off: false}, 0)
.to({y: 968.5}, 14)
.wait(12));

	// m2.png
	this.instance_13 = new lib.magesTween23('synched', 0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(432.5, 180.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(134)
.to({_off: false}, 0)
.to({y: 940.5}, 13)
.wait(14));

	// m1.png
	this.instance_14 = new lib.imagesTween4('synched', 0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(204.5, 184.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(141)
.to({_off: false}, 0)
.to({y: 944.5}, 13)
.wait(7));

	// m4.png
	this.instance_15 = new lib.magesTween10('synched', 0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(564.5, -75.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 724.5, alpha: 0}, 19)
.wait(9));

	// m2.png
	this.instance_16 = new lib.magesTween11('synched', 0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(237.5, -8.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 791.5, alpha: 0}, 19)
.wait(9));

	// m2.png
	this.instance_17 = new lib.magesTween12('synched', 0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(188.5, 394.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(141)
.to({_off: false}, 0)
.to({rotation: 360, y: 1194.5, alpha: 0}, 19)
.wait(1));

	// m5.png
	this.instance_18 = new lib.magesTween13('synched', 0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(101.5, 23.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(141)
.to({_off: false}, 0)
.to({y: 823.5, alpha: 0}, 19)
.wait(1));

	// m5.png
	this.instance_19 = new lib.magesTween14('synched', 0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(674.5, -37.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(141)
.to({_off: false}, 0)
.to({rotation: -360, y: 762.5, alpha: 0}, 19)
.wait(1));

	// m4.png
	this.instance_20 = new lib.magesTween15('synched', 0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(308.5, 376.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(141)
.to({_off: false}, 0)
.to({rotation: -360, y: 1176.5, alpha: 0}, 19)
.wait(1));

	// m1.png
	this.instance_21 = new lib.magesTween16('synched', 0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(459.5, 394.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(133)
.to({_off: false}, 0)
.to({rotation: -360, y: 1194.5, alpha: 0}, 19)
.wait(9));

	// m4.png
	this.instance_22 = new lib.magesTween17('synched', 0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(630.5, 458.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(139)
.to({_off: false}, 0)
.to({rotation: 360, y: 1258.5, alpha: 0}, 19)
.wait(3));

	// m4.png
	this.instance_23 = new lib.magesTween18('synched', 0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(476.5, 73.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 873.5, alpha: 0}, 19)
.wait(9));

	// m4.png
	this.instance_24 = new lib.magesTween19('synched', 0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(371.5, -125.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 674.5, alpha: 0}, 19)
.wait(9));

	// m5.png
	this.instance_25 = new lib.magesTween20('synched', 0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(188.5, 328.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 1128.5, alpha: 0}, 19)
.wait(9));

	// m4.png
	this.instance_26 = new lib.magesTween21('synched', 0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(388.5, 328.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 1128.5, alpha: 0}, 19)
.wait(9));

	// m3.png
	this.instance_27 = new lib.magesTween22('synched', 0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(576.5, 168.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 968.5, alpha: 0}, 19)
.wait(9));

	// m2.png
	this.instance_28 = new lib.magesTween23('synched', 0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(432.5, 140.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(133)
.to({_off: false}, 0)
.to({rotation: 360, y: 940.5, alpha: 0}, 19)
.wait(9));

	// m1.png
	this.instance_29 = new lib.imagesTween4('synched', 0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(204.5, 144.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(133)
.to({_off: false}, 0)
.to({y: 944.5, alpha: 0}, 19)
.wait(9));

	// dialogue
	this.instance_30 = new lib.dialogue_mc();
	this.instance_30.parent = this;
	this.instance_30.setTransform(380.5, 1030, 1, 1, 0, 0, 0, 325.5, 100);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(35)
.to({_off: false}, 0)
.to({y: 1014, alpha: 1}, 18)
.wait(108));

	// 图层 8
	this.instance_31 = new lib.magesTween1('synched', 0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(770, 487, 1, 1, -45, 0, 0, 109, -71);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(24)
.to({_off: false}, 0)
.to({rotation: 0, alpha: 1}, 11, cjs.Ease.get(1))
.wait(126));

	// 图层 12
	this.instance_32 = new lib.montagep18();
	this.instance_32.parent = this;
	this.instance_32.setTransform(277, 485);

	this.instance_33 = new lib.small_cd_mc();
	this.instance_33.parent = this;
	this.instance_33.setTransform(385, 593);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_32}]}, 8)
.to({state: [{t: this.instance_33}]}, 21)
.wait(132));

	// 图层 5 (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p('EhHkAPtIAA/BQNAAVMcgsIAAH7QBegQCAAGQBMADCVALQCGAJBWgJQB1gLBagtQA7gcBehJQBlhPAwgcQCEhJC+gMQB5gIDdAUQAABzACA6QN5ApM8AMQDSADB4gSQCzgcB1hXIAuChQHhgODxAIQGQANE4BEQBLAQCVAmQCGAgBcAOQBcAOB1AGQBGAECNACIIiALQChACBDgDQCAgFBggXIAAVyg');
	var mask_graphics_9 = new cjs.Graphics().p('Eg82ARCIquiFIAA/yQMdAVMCgdIBlgEQAHAhAFAgQAQBIAMBGQAIAwAKAuQAPAvAEA0IADAOQBEgOBWgDIBJgCQAnAAA7ACIBOgKIAigDIAigCQBuAFBPgGQB4gKBegmIAcgNQA5gZBMgxQBZg7A4gZIALgEQBBgVBRgEQBJgOBSgEQCFgHDZAQQAPBkAQAyIARAAIC4gbQExAHEmAEQBOARBeAKQBUAHBWACIAUAFIIhAIQBRABBHgBIAtgLQBKgEA6gIQC0gZCBhMQAbAuAoBcIA6gCQARAEARACQAgAFAfAEIBJAHIBMAEIGjAIIACAAQBkACBrAFQByAHBoAMIAsgDQCAAPB/AVQBSAOCVAgIBVAPQBGAFA1gHIBIgEQA8AFBEACIAYABQA7ASBmARIHUBlQCKAVA5ARQBuAOBSAAIAAWTInJBZg');
	var mask_graphics_10 = new cjs.Graphics().p('Eg+pASYIo7kMMAAAgghQMtAVMXgUIBngDQAPAbAKAbQAgA7AYA2QAPAmAWAgQAcAgAKAoIAFALQBEgQBZgHIBLgEIBjgCQAWgLAqgOQAPgFASgEQAQgEAQgDQBvAEBTgEQB6gIBggfIAegLQA/gVBOgpQBcgxA9gVIAKgBQA2ABBEAOQBLgLBUgEQCPgGDWAOQAeBTAgApIAQABICahBQE5AEErgDQBBAhBkAQQBTALBbACIAQAJIIuAHQBSABBKgBQATgKASgKQBKgDA+gHQC0gXCNhBQAmAmAzBMIA7gCQAPAIAOAEQAbAMAfAIQAhAJAmAHIBMAJQDqANDFACIACAAQBiABBzAEQB4AFBnAMIAlgMQB/ALCIARQBZALCVAaQAuAHArAGQA6gJAtgWQAbgJAggLQA+AEBGABIAXABQAxAhBVAgIGGC/QB0AoAvAlQBbAiBFAVIAAW1Il+Czg');
	var mask_graphics_11 = new cjs.Graphics().p('EhAbAT7InJmRMAAAghTQM+AXMrgLIBqgCQAWAWAPAUIBVBUQAVAbAiATQAqARAOAeIAIAHQBFgTBagJIBOgIQApgDA8gCQALgSAngXQAOgIAQgHQAPgHAQgFQBvAEBXgDQB9gFBkgZIAfgJQBEgRBPggQBegnBFgSIAIAEQArAVA2AhQBPgJBUgDQCbgFDSALQAtBDAuAhIARAAIB7hmQFCgBEvgIQA1AvBqAYQBSAPBeACIAOANII7AFQBTABBNgBIAdgcQBLgDBCgHQCzgTCZg2QAyAdA9A8IA8gCQAMAMAMAHQAXATAcAMQAgAOAmALQAkAIApAGQDgAVDbABIAEAAQBeAAB8ADQB8ADBoAMIAegWQB9AICSANQBfAICVAUIBcAJQAvgWAjglIAxgjQA/ACBHABIAXAAQAnAwBEAvIE5EZQBcA7AmA5QBJA1A3AsIAAXXIkxEMg');
	var mask_graphics_12 = new cjs.Graphics().p('EhCNAV/IlXoXMAAAgiDQNOAYNAgCQA6AAAygBQAeAQAVAPQA/AhAxAWQAdAQAtAGQA3ABATATIALADQBGgUBcgNIBQgJIBngKQABgZAjghQAMgKAPgJQAOgKAPgIQBxAFBagDQCAgDBogSIAfgHQBJgMBSgYQBggeBNgNIAFAHIBJBeQBRgHBWgCQClgDDPAIQA8AyA9AYIARABIBciMQFLgFE1gNQAnA9BwAeQBSAUBhADIALAQIJIAEICkAAIAWgkQBLgEBFgFQCzgRClgrQA9AVBGArIA/gCQAKAQAJAKQATAZAaASQAcATAoANQAjALAsAJQDUAeDygBIAFAAIDfAAQCDADBmALIAXgfIEZAMQBlAGCVAOIBeAGQAkgjAag1IAkgyQBCAABHAAIAZAAQAdBAAzA+IDqFzQBFBNAdBNQA2BKAqBBIAAX5IjlFlg');
	var mask_graphics_13 = new cjs.Graphics().p('EhEAAYLIjkqdMAAAgi0QNeAZNVAIQA9AAAxgBQAnALAYAKQBRAUA8AFQAkAGA4gIQBFgOAYAJIANgBQBIgXBdgPIBSgNIBqgNQgJghAfgoQAKgOAOgNQANgLAQgKQBwAEBfgBQCBgCBsgLIAhgFQBOgHBUgRQBhgTBVgJIADALQAXA/AbBGQBTgFBXgBQCvgCDMAFQBLAhBLARIASAAIA9ixQFTgKE7gSQAbBMB0AlQBSAYBlADIAHAUIJWADICnAAIAQgtQBKgEBJgFQCzgNCxggQBIANBRAbIBBgCQAGAUAHANQAPAfAYAVQAaAZAoARQAiANAuAMQDLAmEHgCIAGAAIDmgCQCGABBnALIAPgpIEhAFQBsADCWAIIBhADQAYgxAShDIAYhDICLgBIAZgBQAUBPAiBNICcHMQAuBiATBhQAlBcAbBYIAAYbIiYG+g');
	var mask_graphics_14 = new cjs.Graphics().p('EhFyAaeIhysjMAAAgjkQNvAZNpARQBAABAxAAIBLAJQBhAHBIgLQArgEBEgXQBTgdAcgBIAQgFQBKgaBegSIBUgPIBsgRQgTgnAagyQAKgSAMgNQAMgPAPgMQByADBhABQCFABBvgFIAigDQBUgDBWgJQBkgJBbgFIACAOQALBVANBYICugDQC6gBDJADQBaAQBaAJIASAAIAfjXQFcgNE/gZQAOBbB6AtQBRAcBpACIADAYIJkABICrAAIAIg1ICXgIQC0gLC7gUQBUAFBbALIBCgDQAEAZAFAPQALAmAWAaQAYAeAoAUQAiAQAvAOQDBAvEcgFIAIAAIDrgDQCLAABoAKIAIgzIEpgCQBzAACUACIBlAAQANg9AJhUIAMhSICPgDIAZgBQAJBeASBcIBNImQAXB1AKB0QASBwAOBuIAAY9IhNIYg');
	var mask_graphics_15 = new cjs.Graphics().p('EhHkAcxMAAAgy+Ib+AzQCHAEBDgDQBwgGBWgaQAygRBPgjQBhgsAggMQBRgiBtgYQA1gMCPgaQgdgvAWg7QAPgoAegcQEhAHDTACQDBABC5gBIAADmIMgAAIAAj8QFlgRFEgeQACBqB+AyQBSAhBsADIAAAbIMgAAIAAg+IMfgjQAAAdADASQAGAsAUAeQAWAjAqAZQAgASAyAQQC2A4EzgGID5gHQCQgBBoAKIAAg7QDkgJHEgMIACkOICqgIMAAAA5Bg');
	var mask_graphics_16 = new cjs.Graphics().p('Eg1WAeCIyOjTMAAAgzlIAhAAQBUAMBbAEQBZAEBhACQLDAJLEAVQCDAFBKgDQBwgEBZgWIAWgGQAmgDA2gRIAogLQA5gUAcgIQBVgZBsgVIDGgiQgIgSACgWQACgYAPgcQASgiAhgbQDWgBCvgLQA0AAA9gIQBDgEBGgGQB7gKB0gGIAEAVIAFDQIBIAMQEZADEagCICjgCIAnjdICRgLIArAFQAiABAjgBQDZgLDQgQQARBaB+AtIAiAKQAcADAigBIBCgBIAQADIAAAcQAdAHAeADILoACIAJg1IMpgdQAEAZAGAPQAMAmAXAaQAZAeArAVQAjARAyANIAaAHQAuAVBCAOQBBALBOAFQBDAEBJAGIA8AHIAyAHIDBgDQCOAABtAJIACgPIAAgeQDEAsGDApIACi+ICSAVMAAAAvYIhlIvg');
	var mask_graphics_17 = new cjs.Graphics().p('Eg4YAfmIvMmlMAAAg0MIAiAAQBPAUBfAHQBWAFBnAAQLKAALNAVQCAAFBQgBQBwgEBbgRIAXgEQAhAJAtgGIAgABQA5gQAggFQBXgSBtgRQBDgHCEgVQgCgRAFgTQAIgTARgYQAXgeAigYQDWgICxgYQAugCBEgPQBBgJBHgMQB9gVBxgLIAIAQIAKDSIA+AZQEcAIEegFIClgEQAnheAmhgQBKgGBJgIIAlALQAhAHAigBQDdgJDSgOQAiBNB8AkIAiAJIA4gJQAdgHAigFIANAHIABAcQAaAMAYAIIL0ACIATgsIMygVQAIAUAJANQARAgAbAWQAdAZAsARQAlAOAxAMIAcAFQAmAdBEARQBAAOBQAEQBGAEBGANQAfAGAaAHIAoARQBUABBvgBQCPAABwAHIAFgNIAAgRQCkBhFCBfIABhuQA7AYA/AYMAAAAv8IjKHRg');
	var mask_graphics_18 = new cjs.Graphics().p('Eg7bAhTIsJp4MAAAg0zIAigBQBMAdBhAJQBUAGBsgBQLSgKLWAWQB9AEBWAAQBvgBBfgMIAYgEQAaAWAkAGIAbALQA3gLAjgCQBbgLBsgMQBKgGB/gTQADgNALgQQAMgRATgTQAcgaAkgUQDUgPC0gmQAogDBLgXQA+gNBKgTQB+gfBugQIALALIAQDUIA1AmQEfAMEigHICmgGQA6hOA6hSQBKgHBKgJQABAGAcALQAhALAkAAQDdgHDWgKQAzA9B5AeIAjAGQAVgKAdgMQAbgMAhgIIAKAKIACAcQAVASAUAMIL/AEIAdgjIM8gPQAMARAMAKQAWAaAfARQAgAVAuAOQAnALAxAJIAeAFQAeAjBGAVQA+AQBSADQBIAEBEAUQAgAKAXALQATAMALANQBYACBuAAQCMABB1AFIAIgKIAAgFQCDCXECCTQABAAAAgdQAuAlAzAmMAAAAwgIkuF1g');
	var mask_graphics_19 = new cjs.Graphics().p('Eg+dAi/IpHtLMAAAg1aIAigCQBIAnBlALQBRAHBxgDQLZgULhAYIDVAFQBuAABjgIIAYgCQAUAjAcARIATAVQA3gEAmAAQBfgFBsgIQBRgDB5gQQAJgLAOgMQARgOAWgQQAhgVAmgRQDSgWC3gzQAigEBSggQA8gRBLgZQCAgqBsgUIAPAGIAVDXIAqAyQEjAPEkgKQBVgCBUgFQBOg+BOhDICTgSQgFAIAdAQQAfAPAkAAQDggFDZgHQBEAuB4AXIAkAFQAQgRAagSQAZgRAggNIAJANIABAeQARAXAPAQIMKAGIAngaINHgIQAPAMAPAIQAbATAjAOQAlAPAtALQAqAIAxAHIAgAEQAVArBIAXQA9ATBUAEQBKADBDAaQAfAOAUAOQAQAQAGASQBbAEBrABIEFAFIALgIIAAAIQBiDLDBDKIABAxQAjA1AmAzMAAAAxEImTEXg');
	var mask_graphics_20 = new cjs.Graphics().p('EhBfAkrImFwdMAAAg2BIAjgCQBDAuBoANQBPAKB2gFQLigeLoAYIDZAHQBtABBogCIAXgBQAOAvATAcIANAgQA1ABAqACQBiADBsgEQBZgBB0gOIAggRIAvgWQAlgQAogPQDRgcC5hCQAbgEBZgoQA7gWBNgfQCCg0BogZIATABIAaDZIAgA/QEmATEogMQBVgEBWgFQBhguBig0ICUgWQgNALAdAVQAgASAlABQDggCDegFQBTAgB3APIAkAEQAMgZAYgWQAWgXAggRIAGAQIACAeQANAeAKATQFWACHAAGIAxgRINPgCQATAJATAFQAhANAmAJQAoAKAuAHQAsAHAxAEIAiADQANAzBKAbQA9AUBVADQBMADBBAhQAgARAQATQAPAUgDAWQBfAGBqACQCKADB+AAIAOgFIAAAVQBAD/CCD/IAACCQAXBCAaBCMAAAAxoIn4C5g');
	var mask_graphics_21 = new cjs.Graphics().p('EhEiAmaIjCzwMAAAg2pIAkgDQA+A4BsAPQBMALB8gHQLognLyAYIDcAIIDXAFIAYABQAIA8AKAnIAHArIBiALQBlAKBrgBQBhACBugLIAqgLIA3gPIBTgYQDPgkC8hOQAVgGBggwICHg+QCEg/BmgfIAVgEIAgDcIAWBLQEpAYEsgPQBXgEBWgIQB1gdB0glQBLgLBLgNQgVANAfAYQAfAYAkABIHEgBQBkAQB1AIIAkACQAJgfAVgcQAUgdAegVIAFAUIACAeIAOA7IMiAJIA6gIINaAFIAsAHQAnAHApAFQArAFAwAEIBfAGIAkACQAFA6BLAeQA8AXBYADQBNADA/AnQAgAVANAWQAMAYgJAaQBjAIBoADQCJAECCgBIAQgEIAAAjQAhE0BBE0IAADSIAYCfMAAAAyMIpdBdg');
	var mask_graphics_22 = new cjs.Graphics().p('EhHkAoJMAAAhOTIAkgDQA7BABuASQBKAMCBgJQPVhBPnBAQAEBzAAA8QEYA/EkggQEigiECh9QAWgLDmh9QCXhTBrgjQAVB4AdC+QErAbEwgQQEsgSEqg7QgcAQAfAdQAeAcAlABILWAGQAFglASgiQASgjAdgXQAIBPACAqQLMAJV8ATQgEBBBNAiQA7AaBaABQBPAEA+AuQBDAyggA7QD5AWD1gJMAAABGPg');
	var mask_graphics_23 = new cjs.Graphics().p('Eg9/ApyIplhvMAAAhPOIANgCIAYgCQBBA0BsAMQBRAHB7gJIAVgBQDdgUDTgJQCugHC+gCQDKgDCyACIJZADQBnACBkAEQATBgALAyQB/ASByAIQClAHCrgSQA5gGA4gJQDcgjDThRIAQgHQApgKDZhrQCYhGBygdQANAkAPAtQAaBRAlBqQBfAHBjAEQCaAICtgDIBagDQCDgEB3gMQBUAKBTgEQBQgKBPgMQgVANAfAZQAgAZAmABQDkADDlgBQCKgBCLgCQAKgiAVgdQAWgfAegVQAQBCAMAiIDIgFQA9ANBWAJQBcAIBnACIVTAZIC3AhQgEBBBCAnQAzAiBNANQBEAPA0AzQA6A1gbA8QDVA6DSAeMAAABG+IgBAFg');
	var mask_graphics_24 = new cjs.Graphics().p('Eg/mArcIn+jeMAAAhQKIANgCIAYgDQBKAoBoAHQBZACBzgLIAVgBQDmgZDOgKQCpgJDJgBQDYgCCnAAQEagBFHgKQBpgCBjAAQAgBOAYAmQCHAMBrAEQCmADCugSQA6gGA5gHQDbggDdhDIARgGQA6gHDOhZQCag7B3gXQAUAfAUAmQAlBDA4BZQBfAIBmAFQCTAGC4AAIBbgCQCJgCBzgJQBGAfBGAJQBRgHBQgJQgMAMAfAUQAhAVAmACQDnACDogEQCNgDCLgFQAPgdAYgZQAZgbAggUQAYA2AVAaIDKgNQAtAYBXATQBbAPBoADQJ7AOLkAPICYBAQgDBCA3AsQArAqA/AZQA5AaAsA4QAwA3gXA/QCyBcCvBHMAAABHzIgCAEg');
	var mask_graphics_25 = new cjs.Graphics().p('EhBMAtGImYlMMAAAhRHIANgCIAZgEQBQAcBlADQBggFBugLIAUgCQDugfDKgLQClgIDTgCIGCgCQETgFFVgVQBrgGBjgDQAvA7AjAbIDzAFQCngCCxgQQA7gGA6gGQDagbDng2IASgFQBNgGDBhGQCbgvB+gSQAaAaAZAeQAxA2BKBKQBfAGBnAFQCPAGDCADIBcAAQCQAABugGQA4A1A4ATQBSgDBSgHQgDAKAeARQAjARAnABQDpAEDrgHQCOgFCNgJQAUgYAbgWQAcgXAigQQAhAoAdARIDMgUQAcAkBaAbQBZAXBpADQKiASLJARIB6BeQgDBDAsAyQAiAyAzAkQAtAlAkA9QAmA7gTA/QCPB/CMBvMAAABIoIgDAEg');
	var mask_graphics_26 = new cjs.Graphics().p('EhCxAuvIkzm7MAAAhSDIAOgBIAYgEQBYAPBjgDQBmgJBogNIAUgCQD1gkDGgMQCggKDdgBQDzgBCTgDQEMgGFkghQBtgKBigHQA9AoAvASQCXgFBdgBQCngIC2gPIB3gLQDYgXDygoIASgDQBfgFC1g1QCcgiCFgLQAfATAgAXQA7AqBdA5IDJAKQCJAHDMAFIBdABQCVACBsgDQApBKArAgQBUAABTgEQAFAHAeAOQAlANAmABQDtAEDugKQCOgHCPgMQAZgTAfgTQAegSAkgPQApAbAoAKQBjgMBpgQQALAvBbAkQBZAfBrADQLJAWKsATQAtA+AuA+QgBBFAhA2QAZA6AnAwQAiAwAaBCQAdA9gOBBQBrCjBpCVMAAABJfIgEACg');
	var mask_graphics_27 = new cjs.Graphics().p('EhEYAwZIjMoqMAAAhS/IAOgCIAYgEQBfADBggIIDPgcIAUgDQD+gqDBgNQCagKDpgBQEBgBCIgDQEGgJFxguIDRgXQBMAUA7AIQCdgNBXgEIFhgaIB5gKQDXgTD8gbIATgCQBygDCogiQCegWCKgGQAlANAmAQQBGAeBvAoIDMAKQCDAGDYAIIBdACQCcAFBngBQAcBgAcAsQBVACBVgBQAOAGAeAJQAmAKAnABQDvAFDxgOQCQgJCRgPQAdgPAigOQAigPAlgMQAyAOAwACQBlgQBogTQgEA6BdAsQBXAnBsADQLwAaKSAVIA8CbQgBBFAWA8QARBBAZA8QAYA7ARBHQATBAgJBCQBHDGBGC9MAAABKUIgFACg');
	var mask_graphics_28 = new cjs.Graphics().p('EhF+AyDIhmqZMAAAhT7IAOgCIAZgFQBngJBcgNIDRgjIATgDQEFgvC+gOQCVgMDzAAQEPAAB8gFQD/gLGBg6IDRgeQBbABBHgDQClgVBQgGQCpgSC8gNIB6gIQDYgPEFgNIATgBQCFgCCbgQQCfgJCSgBQAsAIAqAJQBQAQCDAYIDOAKIFgAQIBfAEQCiAHBiACQANB0AQA5QBWAFBXACIAzAJQAnAGApABQDyAFDzgRQCSgKCRgSIBIgVIBLgVQA7ABA5gGQBngUBngXQgTBGBeA1QBWAuBtADQMYAeJ1AWIAeC6QAABGALBBQAJBKAMBGQAMBHAIBMQAKBDgEBEIBGHNMAAABLKIgFABg');
	var mask_graphics_29 = new cjs.Graphics().p('EhHkAzxMAAAhg9IAOgDIHGhaQEMg0C6gPQCQgND9AAQEdAABygFQD4gOGPhGQH3hZCOgRQDggeEFgMQDXgKEQAAQGBgBFSAOIHCAVIFlATIFlATQAACJACBFQGRAmGWghQGSgiGJhoQgkBSBhA9QBUA2BvADIWYA7MAAABhNg');

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0})
.wait(8)
.to({graphics: mask_graphics_8, x: 378.1, y: 1127.9})
.wait(1)
.to({graphics: mask_graphics_9, x: 378.1, y: 1118.1})
.wait(1)
.to({graphics: mask_graphics_10, x: 378.1, y: 1108.4})
.wait(1)
.to({graphics: mask_graphics_11, x: 378.1, y: 1097.4})
.wait(1)
.to({graphics: mask_graphics_12, x: 378.1, y: 1083})
.wait(1)
.to({graphics: mask_graphics_13, x: 378.1, y: 1067.9})
.wait(1)
.to({graphics: mask_graphics_14, x: 378.1, y: 1052.1})
.wait(1)
.to({graphics: mask_graphics_15, x: 378.1, y: 1036.3})
.wait(1)
.to({graphics: mask_graphics_16, x: 378.1, y: 1029.3})
.wait(1)
.to({graphics: mask_graphics_17, x: 378.1, y: 1020.4})
.wait(1)
.to({graphics: mask_graphics_18, x: 378.1, y: 1010.7})
.wait(1)
.to({graphics: mask_graphics_19, x: 378.1, y: 1001})
.wait(1)
.to({graphics: mask_graphics_20, x: 378.1, y: 991.3})
.wait(1)
.to({graphics: mask_graphics_21, x: 378.1, y: 981.4})
.wait(1)
.to({graphics: mask_graphics_22, x: 378.1, y: 971.5})
.wait(1)
.to({graphics: mask_graphics_23, x: 378.1, y: 961.5})
.wait(1)
.to({graphics: mask_graphics_24, x: 378.1, y: 951.5})
.wait(1)
.to({graphics: mask_graphics_25, x: 378.1, y: 941.5})
.wait(1)
.to({graphics: mask_graphics_26, x: 378.1, y: 931.5})
.wait(1)
.to({graphics: mask_graphics_27, x: 378.1, y: 921.5})
.wait(1)
.to({graphics: mask_graphics_28, x: 378.1, y: 911.5})
.wait(1)
.to({graphics: mask_graphics_29, x: 378.1, y: 901})
.wait(132));

	// 图层 3
	this.instance_34 = new lib.VCG21gic15864762();
	this.instance_34.parent = this;
	this.instance_34.setTransform(0, 674);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(8)
.to({_off: false}, 0)
.wait(153));

	// 图层 7
	this.instance_35 = new lib.cd_mc();
	this.instance_35.parent = this;
	this.instance_35.setTransform(385, 594, 1, 1, 0, 0, 0, 292, 292);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(29)
.to({_off: false}, 0)
.wait(132));

	// montage-12.png
	this.instance_36 = new lib.magesTween7('synched', 0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(770.1, -0.5, 1, 1, -7.2, 0, 0, 0.1, -229.9);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(85)
.to({_off: false}, 0)
.to({regY: -230, rotation: 35, y: -0.4, alpha: 1}, 9, cjs.Ease.get(1))
.wait(21)
.to({startPosition: 0}, 0)
.to({_off: true}, 1)
.wait(1)
.to({_off: false}, 0)
.to({_off: true}, 1)
.wait(1)
.to({_off: false}, 0)
.to({_off: true}, 5)
.wait(37));

	// montage-12.png
	this.instance_37 = new lib.magesTween8('synched', 0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(8.2, -2, 1, 1, 9.5, 0, 0, 0.1, -230.5);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(85)
.to({_off: false}, 0)
.to({rotation: -30, x: 8.1, y: -2.1, alpha: 1}, 9, cjs.Ease.get(1))
.wait(5)
.to({startPosition: 0}, 0)
.to({_off: true}, 1)
.wait(1)
.to({_off: false}, 0)
.to({_off: true}, 25)
.wait(35));

	// montage-p1-10-2.png
	this.instance_38 = new lib.magesTween9('synched', 0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(380, 228.5);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(79)
.to({_off: false}, 0)
.to({startPosition: 0}, 6)
.wait(22)
.to({startPosition: 0}, 0)
.to({_off: true}, 1)
.wait(1)
.to({_off: false}, 0)
.to({_off: true}, 1)
.wait(1)
.to({_off: false}, 0)
.to({_off: true}, 17)
.wait(33));

	// montage-p1-14.png
	this.instance_39 = new lib.magesTween5('synched', 0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(751, 389.5);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.instance_40 = new lib.spy_mc();
	this.instance_40.parent = this;
	this.instance_40.setTransform(751, 389.5, 1, 1, 0, 0, 0, 99, 69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_39}]}, 70)
.to({state: [{t: this.instance_39}]}, 9)
.to({state: [{t: this.instance_40}]}, 1)
.wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(70)
.to({_off: false}, 0)
.to({alpha: 1}, 9)
.to({_off: true}, 1)
.wait(81));

	// cop1.png
	this.instance_41 = new lib.magesTween6('synched', 0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(8, 410.5);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.instance_42 = new lib.ball_mc();
	this.instance_42.parent = this;
	this.instance_42.setTransform(8, 410.5, 1, 1, 0, 0, 0, 58, 58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_41}]}, 70)
.to({state: [{t: this.instance_41}]}, 9)
.to({state: [{t: this.instance_42}]}, 1)
.wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(70)
.to({_off: false}, 0)
.to({alpha: 1}, 9)
.to({_off: true}, 1)
.wait(81));

	// talor.png
	this.instance_43 = new lib.magesTween2('synched', 0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(573, 434.1);
	this.instance_43.alpha = 0;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(53)
.to({_off: false}, 0)
.to({y: 286, alpha: 1}, 5, cjs.Ease.get(1))
.to({y: 326}, 12, cjs.Ease.get(1))
.wait(91));

	// montage-5.png
	this.instance_44 = new lib.magesTween3('synched', 0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(396, 395.1);
	this.instance_44.alpha = 0;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(48)
.to({_off: false}, 0)
.to({y: 247, alpha: 1}, 5, cjs.Ease.get(1))
.to({y: 287}, 12, cjs.Ease.get(1))
.wait(96));

	// JB.png
	this.instance_45 = new lib.magesTween4('synched', 0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(210.5, 451.6);
	this.instance_45.alpha = 0;
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(43)
.to({_off: false}, 0)
.to({y: 303.5, alpha: 1}, 5, cjs.Ease.get(1))
.to({y: 343.5}, 12, cjs.Ease.get(1))
.wait(101));

	// 图层 2
	this.instance_46 = new lib.tswseen1('synched', 0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(1025.2, 594);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({x: 385, alpha: 1}, 8, cjs.Ease.get(1))
.wait(153));

	// 图层 1
	this.instance_47 = new lib.tween1('synched', 0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(375, 558.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(161));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, -0.5, 1317.2, 1212);


// stage content:
(lib.montagep1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320, 479.5, 1317.2, 1212);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '1/images/montage_p1_atlas_.png', id: 'montage_p1_atlas_'},
		{src: window.configs.perfixUrl + '1/sounds/cd_move.mp3', id: 'cd_move'},
		{src: window.configs.perfixUrl + '1/sounds/money_drop.mp3', id: 'money_drop'}
	],
	preloads: []
};


})(lib1 = lib1 || {}, images1 = images1 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib1, images1, createjs, ss, AdobeAn;