(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p5_atlas_', frames: [[1771, 879, 193, 259], [752, 0, 750, 1210], [1771, 634, 218, 243], [1328, 1592, 452, 409], [1504, 634, 265, 386], [752, 1212, 574, 607], [0, 1821, 651, 220], [1782, 1592, 257, 335], [0, 1336, 750, 471], [0, 0, 750, 1334], [1328, 1212, 718, 378], [1885, 0, 126, 150], [1504, 0, 379, 632], [1782, 1929, 182, 111]]}
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


(lib.aoliao = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.ditu = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.haoduoyu = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.kangshifu = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.kebike = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.lingshi = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.P5 = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.qiaqia = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.ren = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.shupian = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.tanzi = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();


(lib.wangzai = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();


(lib.xiaohai = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();


(lib.zuogebo = function() {
	this.spriteSheet = ss.montage_p5_atlas_;
	this.gotoAndStop(13);
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


(lib.tween111 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.kebike();
	this.instance.parent = this;
	this.instance.setTransform(-132.5, -193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5, -193, 265, 386);


(lib.tween110 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.wangzai();
	this.instance.parent = this;
	this.instance.setTransform(-63, -75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63, -75, 126, 150);


(lib.tween19 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.aoliao();
	this.instance.parent = this;
	this.instance.setTransform(-96.5, -129.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5, -129.5, 193, 259);


(lib.tween18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.qiaqia();
	this.instance.parent = this;
	this.instance.setTransform(-128.5, -167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5, -167.5, 257, 335);


(lib.tween17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.haoduoyu();
	this.instance.parent = this;
	this.instance.setTransform(-109, -121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109, -121.5, 218, 243);


(lib.tween16 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.kangshifu();
	this.instance.parent = this;
	this.instance.setTransform(-226, -204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226, -204.5, 452, 409);


(lib.tween15 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.ren();
	this.instance.parent = this;
	this.instance.setTransform(-375, -235.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -235.5, 750, 471);


(lib.tween14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tanzi();
	this.instance.parent = this;
	this.instance.setTransform(-359, -189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-359, -189, 718, 378);


(lib.tween12 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.zuogebo();
	this.instance.parent = this;
	this.instance.setTransform(-91, -55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91, -55.5, 182, 111);


(lib.tween1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.xiaohai();
	this.instance.parent = this;
	this.instance.setTransform(-189.5, -316);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.5, -316, 379, 632);


(lib.koke = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 2
	this.instance = new lib.lingshi();
	this.instance.parent = this;
	this.instance.setTransform(0, 15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.koke, new cjs.Rectangle(0, 15, 574, 607), null);


(lib.dialogue_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.P5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dialogue_mc, new cjs.Rectangle(0, 0, 651, 220), null);


(lib.补间2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.shupian();
	this.instance.parent = this;
	this.instance.setTransform(-375, -667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -667, 750, 1334);


(lib.补间1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.shupian();
	this.instance.parent = this;
	this.instance.setTransform(-375, -667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -667, 750, 1334);


(lib.元件1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.lingshi();
	this.instance.parent = this;
	this.instance.setTransform(-287, -303.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287, -303.5, 574, 607);


(lib.koke_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 63 (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	mask.graphics.p('EgvWALQIAAowMAxYAAAIAAIwgACCCgIAAtvMAtVAAAIAANvgACCCgg');
	mask.setTransform(317.1, 588.2);

	// lingshi.png
	this.instance = new lib.元件1('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(287, 320.5);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19)
.to({y: 306.5, alpha: 1}, 0)
.wait(15)
.to({y: 320.5, alpha: 0}, 0)
.wait(25));

	// 图层 64 (mask)
	var mask_1 = new cjs.Shape();

	mask_1._off = true;
	mask_1.graphics.p('EglqAGuIAAtbMBLVAAAIAANbg');
	mask_1.setTransform(255.1, 455.1);

	// lingshi.png
	this.instance_1 = new lib.元件1('synched', 0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(287, 320.5);
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19)
.to({y: 340.5, alpha: 1}, 0)
.wait(15)
.to({y: 320.5, alpha: 0}, 0)
.wait(25));

	// 图层 65 (mask)
	var mask_2 = new cjs.Shape();

	mask_2._off = true;
	mask_2.graphics.p('A4NF8IAAr3MAwbAAAIAAL3g');
	mask_2.setTransform(151.1, 554.2);

	// lingshi.png
	this.instance_2 = new lib.元件1('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(287, 320.5);
	this.instance_2.alpha = 0;

	var maskedShapeInstanceList = [this.instance_2];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19)
.to({x: 271, alpha: 1}, 0)
.wait(15)
.to({x: 287, alpha: 0}, 0)
.wait(25));

	// 图层 66 (mask)
	var mask_3 = new cjs.Shape();

	mask_3._off = true;
	mask_3.graphics.p('AylImIAAxLMAlLAAAIAARLg');
	mask_3.setTransform(41, 181.1);

	// lingshi.png
	this.instance_3 = new lib.元件1('synched', 0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(287, 320.5);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30)
.to({x: 301, alpha: 1}, 0)
.wait(15)
.to({x: 287, alpha: 0}, 0)
.wait(14));

	// 图层 67 (mask)
	var mask_4 = new cjs.Shape();

	mask_4._off = true;
	mask_4.graphics.p('A+8H0IAAvnMA94AAAIAAPng');
	mask_4.setTransform(422.2, 152.1);

	// lingshi.png
	this.instance_4 = new lib.元件1('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(287, 320.5);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9)
.to({y: 310.5, alpha: 1}, 0)
.wait(15)
.to({y: 320.5, alpha: 0}, 0)
.wait(35));

	// 图层 68 (mask)
	var mask_5 = new cjs.Shape();

	mask_5._off = true;
	mask_5.graphics.p('EgvWACWIAAkrMBetAAAIAAErg');
	mask_5.setTransform(325.1, 293.1);

	// lingshi.png
	this.instance_5 = new lib.元件1('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(287, 320.5);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28)
.to({x: 279, alpha: 1}, 0)
.wait(15)
.to({x: 287, alpha: 0}, 0)
.wait(16));

	// 图层 69 (mask)
	var mask_6 = new cjs.Shape();

	mask_6._off = true;
	mask_6.graphics.p('EgoKABQIAAifMBQVAAAIAACfg');
	mask_6.setTransform(387.1, 368.1);

	// lingshi.png
	this.instance_6 = new lib.元件1('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(287, 320.5);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5)
.to({alpha: 1}, 0)
.wait(15)
.to({alpha: 0}, 0)
.wait(39));

	// 图层 70 (mask)
	var mask_7 = new cjs.Shape();

	mask_7._off = true;
	mask_7.graphics.p('Egr6ABQIAAifMBX1AAAIAACfg');
	mask_7.setTransform(211.1, 330.1);

	// 图层 73
	this.instance_7 = new lib.元件1('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(287, 320.5);
	this.instance_7.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36)
.to({alpha: 1}, 0)
.wait(15)
.to({alpha: 0}, 0)
.wait(8));

	// 图层 71 (mask)
	var mask_8 = new cjs.Shape();

	mask_8._off = true;
	mask_8.graphics.p('EgoUADIIAAmPMBQoAAAIAAGPg');
	mask_8.setTransform(446.2, 246.1);

	// lingshi.png
	this.instance_8 = new lib.元件1('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(287, 320.5);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_8];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8)
.to({x: 301, alpha: 1}, 0)
.wait(15)
.to({x: 287, alpha: 0}, 0)
.wait(36));

	// 图层 46 (mask)
	var mask_9 = new cjs.Shape();

	mask_9._off = true;
	mask_9.graphics.p('A9sIIIAAwPMA7ZAAAIAAQPg');
	mask_9.setTransform(140.1, 464.1);

	// lingshi.png
	this.instance_9 = new lib.元件1('synched', 0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(287, 320.5);
	this.instance_9.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30)
.to({alpha: 1}, 0)
.wait(15)
.to({alpha: 0}, 0)
.wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0, 102.1, 574, 522);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_33 = function() {
		playSound('eat');
	};
	this.frame_70 = function() {
		playSound('eat');
	};
	this.frame_169 = function() {
		this.stop();
		if (p5Model) {
			p5Model.dispatchEvent('p5-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(33)
.call(this.frame_33)
.wait(37)
.call(this.frame_70)
.wait(99)
.call(this.frame_169)
.wait(1));

	// 图层 22
	this.instance = new lib.koke();
	this.instance.parent = this;
	this.instance.setTransform(404.5, 499, 1, 1, 0, 0, 0, 278.5, 311);

	this.instance_1 = new lib.koke_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(404.5, 499, 1, 1, 0, 0, 0, 278.5, 311);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance}]}, 126)
.to({state: []}, 5)
.to({state: [{t: this.instance}]}, 3)
.to({state: []}, 5)
.to({state: [{t: this.instance}]}, 6)
.to({state: []}, 7)
.to({state: [{t: this.instance}]}, 4)
.to({state: []}, 5)
.to({state: [{t: this.instance_1}]}, 3)
.wait(6));

	// 图层 3
	this.instance_2 = new lib.koke();
	this.instance_2.parent = this;
	this.instance_2.setTransform(404.5, 499, 1, 1, 0, 0, 0, 278.5, 311);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(164)
.to({_off: false}, 0)
.wait(6));

	// 图层 12
	this.instance_3 = new lib.tween16('synched', 0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(395, -204.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(77)
.to({_off: false}, 0)
.to({y: 605.5}, 13, cjs.Ease.get(-1))
.to({_off: true}, 36)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// 图层 10
	this.instance_4 = new lib.tween17('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(235, -413.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(102)
.to({_off: false}, 0)
.to({y: 396.5}, 13, cjs.Ease.get(-1))
.to({_off: true}, 11)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// 图层 13
	this.instance_5 = new lib.tween18('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(289.5, -427.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84)
.to({_off: false}, 0)
.to({y: 382.5}, 13, cjs.Ease.get(-1))
.to({_off: true}, 29)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// 图层 14
	this.instance_6 = new lib.tween19('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(429.5, -492.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(91)
.to({_off: false}, 0)
.to({y: 317.5}, 13, cjs.Ease.get(-1))
.to({_off: true}, 22)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// 图层 16
	this.instance_7 = new lib.tween110('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(490, -460);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99)
.to({_off: false}, 0)
.to({y: 350}, 13, cjs.Ease.get(-1))
.to({_off: true}, 14)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// 图层 15
	this.instance_8 = new lib.tween111('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(550.5, -352);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96)
.to({_off: false}, 0)
.to({y: 458}, 13, cjs.Ease.get(-1))
.to({_off: true}, 17)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 6)
.wait(7)
.to({_off: false}, 0)
.to({_off: true}, 4)
.wait(5)
.to({_off: false}, 0)
.to({_off: true}, 3)
.wait(6));

	// dialogue
	this.instance_9 = new lib.dialogue_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(380.5, 1064, 1, 1, 0, 0, 0, 325.5, 100);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27)
.to({_off: false}, 0)
.to({y: 1056, alpha: 1}, 13)
.wait(130));

	// 图层 8
	this.instance_10 = new lib.tween15('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(375, 1102.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13)
.to({_off: false}, 0)
.to({y: 974.5, alpha: 1}, 14, cjs.Ease.get(1))
.wait(143));

	// zuogebo.png
	this.instance_11 = new lib.tween12('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(774.2, 452, 1, 1, 0, 0, 0, -87, 30);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x: 235}, 12, cjs.Ease.get(1))
.wait(21)
.to({regX: -89, regY: 28, x: 233, y: 450}, 0)
.to({regY: 27.9, rotation: 21.5, x: 223, y: 449.9}, 20)
.to({regY: 28, rotation: 0, x: 233, y: 450}, 17)
.to({regY: 27.9, rotation: 21.5, x: 223, y: 449.9}, 16)
.to({regY: 28, rotation: 0, x: 233, y: 450}, 21)
.wait(63));

	// 图层 6
	this.instance_12 = new lib.补间1('synched', 0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(393, 593);
	this.instance_12._off = true;

	this.instance_13 = new lib.补间2('synched', 0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(392, 524);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_12}]}, 53)
.to({state: [{t: this.instance_13}]}, 16)
.to({state: []}, 1)
.to({state: [{t: this.instance_12}]}, 16)
.to({state: [{t: this.instance_13}]}, 21)
.wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53)
.to({_off: false}, 0)
.to({_off: true, x: 392, y: 524}, 16)
.wait(17)
.to({_off: false, x: 393, y: 593}, 0)
.to({_off: true, x: 392, y: 524}, 21)
.wait(63));

	// 图层 5
	this.instance_14 = new lib.tween1('synched', 0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(939.5, 504);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x: 400.5}, 12, cjs.Ease.get(1))
.wait(158));

	// tanzi.png
	this.instance_15 = new lib.tween14('synched', 0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-411.2, 771);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x: 418.3, y: 773.7}, 5, cjs.Ease.get(1))
.to({x: 361, y: 775}, 7)
.wait(158));

	// 图层 4
	this.instance_16 = new lib.ditu();
	this.instance_16.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.2, 0, 1899.2, 1210);


// stage content:
(lib.montagep5 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.scene();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.2, 480, 1899.2, 1210);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '5/images/montage_p5_atlas_.png', id: 'montage_p5_atlas_'},
		{src: window.configs.perfixUrl + '5/sounds/eat.mp3', id: 'eat'}
	],
	preloads: []
};


})(lib5 = lib5 || {}, images5 = images5 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib5, images5, createjs, ss, AdobeAn;