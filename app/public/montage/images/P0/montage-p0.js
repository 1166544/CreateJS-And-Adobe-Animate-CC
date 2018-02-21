(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p0_atlas_', frames: [[505, 1481, 256, 113], [0, 0, 750, 1211], [0, 1213, 314, 249], [265, 1481, 238, 213], [0, 1464, 263, 259], [316, 1213, 265, 266], [709, 1338, 64, 64], [709, 1272, 64, 64], [583, 1213, 124, 139], [709, 1213, 86, 57]]}
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


(lib.button = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.di = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.liushengji = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.liushenji2 = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.money1 = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.money2 = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.music1 = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.music2 = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.plane = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.xingqiu = function() {
	this.spriteSheet = ss.montage_p0_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.tweenns24 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tweenns23 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tweenns19 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tweenns18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tweenns17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tweenns16 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.tween4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.xingqiu();
	this.instance.parent = this;
	this.instance.setTransform(-43, -28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43, -28.5, 86, 57);


(lib.tween3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.plane();
	this.instance.parent = this;
	this.instance.setTransform(-62, -69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62, -69.5, 124, 139);


(lib.music_tween = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.music1();
	this.instance.parent = this;
	this.instance.setTransform(-32, -32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);


(lib.btn_play = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0)
.wait(1)
.call(this.frame_1)
.wait(1));

	// 图层 1
	this.instance = new lib.button();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 256, 113);


(lib.sepets22 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.liushenji2();
	this.instance.parent = this;
	this.instance.setTransform(-119, -106.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119, -106.5, 238, 213);


(lib.chevronupsvg = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// chevron-up.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#FFFFFF').s()
.p('EgidARXQghggAAguQgBgtAgggMAhOgf4QAighAvADQAWgCAVAIQAVAIARAQMAhPAf4QAgAggBAtQAAAughAgQhpAFhvgBQjdgCgbgaI7O6HI7NaHQgbAbjdABIgWAAQhjAAhfgEg');
	this.shape.setTransform(224, 111.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1, 0.1, 447.9, 223.1);


(lib.补间2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.money2();
	this.instance.parent = this;
	this.instance.setTransform(-132.5, -133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5, -133, 265, 266);


(lib.补间1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.money1();
	this.instance.parent = this;
	this.instance.setTransform(-131.5, -129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.5, -129.5, 263, 259);


(lib.speaker = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 2
	this.instance = new lib.liushenji2();
	this.instance.parent = this;

	this.instance_1 = new lib.tweenns16('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119, 106.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.tweenns17('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(119, 106.5, 1.252, 1.252);
	this.instance_2._off = true;

	this.instance_3 = new lib.tweenns18('synched', 0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(119, 106.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.tweenns19('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(119, 106.5, 0.849, 0.849);
	this.instance_4._off = true;

	this.instance_5 = new lib.sepets22('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(119, 106.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.tweenns23('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(119, 106.5, 1.188, 1.188);
	this.instance_6._off = true;

	this.instance_7 = new lib.tweenns24('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(119, 106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}]})
.to({state: [{t: this.instance_1}]}, 5)
.to({state: [{t: this.instance_2}]}, 14)
.to({state: [{t: this.instance_3}]}, 14)
.to({state: [{t: this.instance_4}]}, 14)
.to({state: [{t: this.instance_5}]}, 20)
.to({state: [{t: this.instance_6}]}, 27)
.to({state: [{t: this.instance_7}]}, 14)
.wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5)
.to({_off: false}, 0)
.to({_off: true, scaleX: 1.25, scaleY: 1.25}, 14)
.wait(101));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5)
.to({_off: false}, 14)
.to({_off: true, scaleX: 1, scaleY: 1}, 14)
.wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19)
.to({_off: false}, 14)
.to({_off: true, scaleX: 0.85, scaleY: 0.85}, 14)
.wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33)
.to({_off: false}, 14)
.to({_off: true, scaleX: 1, scaleY: 1}, 20)
.wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47)
.to({_off: false}, 20)
.to({_off: true, scaleX: 1.19, scaleY: 1.19}, 27)
.wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67)
.to({_off: false}, 27)
.to({_off: true, scaleX: 1, scaleY: 1}, 14)
.wait(12));

	// 图层 1
	this.instance_8 = new lib.liushengji();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0, 185);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 314, 434);


(lib.plane_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tween3('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(62, 69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 38, y: 37.5}, 29)
.to({x: 62, y: 69.5}, 30)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 124, 139);


(lib.music_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.music_tween('synched', 0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: 360}, 79)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32, -32, 64, 64);


(lib.money_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// shou-hong.png
	this.instance = new lib.补间1('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(138.5, 139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: -3}, 4)
.to({rotation: 0}, 5)
.wait(1));

	// qian-hong.png
	this.instance_1 = new lib.补间2('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.5, 460);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation: 3}, 4)
.to({rotation: 0}, 5)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6, 10, 265, 583);


(lib.earth_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tween4('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(43, 28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 11}, 39)
.to({x: 43}, 40)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 86, 57);


(lib.music = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	};
	this.frame_1 = function() {
		this.stop();
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0)
.wait(1)
.call(this.frame_1)
.wait(1));

	// 图层 1
	this.instance = new lib.music_mc();
	this.instance.parent = this;
	this.instance.setTransform(32, 32);

	this.instance_1 = new lib.music2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}]})
.to({state: [{t: this.instance_1}]}, 1)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 64, 64);


(lib.arrow = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// chevron-up.svg
	this.instance = new lib.chevronupsvg('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(32.1, 109.8, 0.143, 0.143, 0, 0, 0, 224.3, 128.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 90.8, alpha: 1}, 14, cjs.Ease.get(1))
.to({y: 74.8, alpha: 0}, 9, cjs.Ease.get(1))
.wait(12));

	// chevron-up.svg
	this.instance_1 = new lib.chevronupsvg('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.1, 79.6, 0.143, 0.143, 0, 0, 0, 224.3, 128.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5)
.to({_off: false}, 0)
.to({y: 60.6, alpha: 1}, 14, cjs.Ease.get(1))
.to({y: 44.6, alpha: 0}, 11, cjs.Ease.get(1))
.wait(5));

	// chevron-up.svg
	this.instance_2 = new lib.chevronupsvg('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(26.2, 49, 0.143, 0.143, 0, 0, 0, 183.4, 104.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10)
.to({_off: false}, 0)
.to({y: 30, alpha: 1}, 14, cjs.Ease.get(1))
.to({y: 14, alpha: 0}, 10, cjs.Ease.get(1))
.wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f('rgba(0,0,0,0.008)').s()
.p('AlEJ2IAAzrIKJAAIAATrg');
	this.shape.setTransform(32.5, 62);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, -1, 65, 126.1);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
		
		if (p0Model) {
			p0Model.dispatchEvent('p0-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2)
.call(this.frame_2)
.wait(1));

	// 图层 8
	this.playBtn = new lib.btn_play();
	this.playBtn.parent = this;
	this.playBtn.setTransform(372, 1078.3, 1, 1, 0, 0, 0, 128, 56.5);

	this.timeline.addTween(cjs.Tween.get(this.playBtn).wait(3));

	// 图层 7
	this.instance = new lib.speaker();
	this.instance.parent = this;
	this.instance.setTransform(559, 489);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// 图层 6
	this.instance_1 = new lib.earth_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(131, 130.5, 1, 1, 0, 0, 0, 43, 28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));

	// 图层 5
	this.instance_2 = new lib.plane_mc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(112, 558.5, 1, 1, 0, 0, 0, 62, 69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3));

	// 图层 4
	this.instance_3 = new lib.money_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(373, 605, 1, 1, 0, 0, 0, 136, 283);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

	// 图层 3
	this.instance_4 = new lib.di();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 0, 873, 1211);


// stage content:
(lib.montagep0 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320, 480, 873, 1211);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '0/images/montage_p0_atlas_.png', id: 'montage_p0_atlas_'}
	],
	preloads: []
};


})(lib0 = lib0 || {}, images0 = images0 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib0, images0, createjs, ss, AdobeAn;