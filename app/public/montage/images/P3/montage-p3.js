(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p3_atlas_', frames: [[1994, 301, 47, 50], [1837, 584, 175, 175], [0, 0, 750, 1214], [1798, 1215, 250, 217], [1504, 1215, 292, 354], [752, 749, 698, 455], [1956, 761, 73, 75], [752, 1206, 750, 370], [0, 1538, 651, 220], [0, 1216, 649, 320], [752, 0, 676, 747], [1452, 584, 383, 403], [1430, 0, 599, 299], [1430, 301, 562, 281], [1504, 989, 465, 224], [1837, 761, 117, 118]]}
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


(lib._2011021514575220 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.arrow = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.ditu = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.mountain23 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.mountain252 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.mountaincopy = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.mountainps = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.mountain = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.P3 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();


(lib.PPT = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();


(lib.women = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();


(lib.women2 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();


(lib.word3 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();


(lib.word4 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();


(lib.word8 = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();


(lib.word = function() {
	this.spriteSheet = ss.montage_p3_atlas_;
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


(lib.补间14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#030EFE').s()
.p('AiBRbMAAAgi1IEDAAMAAAAi1g');
	this.shape.setTransform(184.7, -240.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#FF2AFF').s()
.p('AhtRbMAAAgi1IDbAAMAAAAi1g');
	this.shape_1.setTransform(110.7, -240.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#030FFF').s()
.p('Aj5RbMAAAgi1IHzAAMAAAAi1g');
	this.shape_2.setTransform(55.7, -240.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#FF1B01').s()
.p('AFoRbMAAAgi1IH0AAMAAAAi1gAtbRbMAAAgi1IE2AAMAAAAi1g');
	this.shape_3.setTransform(85.7, -240.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#00E2FF').s()
.p('AiLRbMAAAgi1IEXAAMAAAAi1g');
	this.shape_4.setTransform(-14.3, -240.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#FFFFFF').s()
.p('AhjRbMAAAgi1IDHAAMAAAAi1g');
	this.shape_5.setTransform(-89.4, -240.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#00D303').s()
.p('AhtRbMAAAgi1IDbAAMAAAAi1g');
	this.shape_6.setTransform(-110.4, -240.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#01E3FC').s()
.p('Aj5RbMAAAgi1IHzAAMAAAAi1g');
	this.shape_7.setTransform(-146.4, -240.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#000000').s()
.p('AheRbMAAAgi1IC9AAMAAAAi1g');
	this.shape_8.setTransform(90.2, -240.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f('#FFEE01').s()
.p('AFXRbMAAAgi1IH+AAMAAAAi1gAtURbMAAAgi1IEUAAMAAAAi1g');
	this.shape_9.setTransform(-113.7, -240.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199, -352, 396.7, 223);


(lib.补间13 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-87, -88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87, -88, 175, 175);


(lib.补间10 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 2
	this.instance = new lib.word();
	this.instance.parent = this;
	this.instance.setTransform(-54, -137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.mountain252();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146, -177);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146, -177, 292, 354);


(lib.补间9 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.women();
	this.instance.parent = this;
	this.instance.setTransform(-338, -514);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338, -514, 676, 747);


(lib.补间8 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.mountain23();
	this.instance.parent = this;
	this.instance.setTransform(-125, -108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125, -108.5, 250, 217);


(lib.补间5 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.mountaincopy();
	this.instance.parent = this;
	this.instance.setTransform(-349, -372);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-349, -372, 698, 455);


(lib.补间4 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.mountain();
	this.instance.parent = this;
	this.instance.setTransform(-375, -85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -85, 750, 370);


(lib.yv = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.mountain252();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yv, new cjs.Rectangle(0, 0, 292, 354), null);


(lib.dialogue_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.P3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dialogue_mc, new cjs.Rectangle(0, 0, 651, 220), null);


(lib.补间12 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib._2011021514575220();
	this.instance.parent = this;
	this.instance.setTransform(-17, -152);

	this.instance_1 = new lib.yv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1, -102.9, 0.321, 0.321, 15, 0, 0, 146.2, 177.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_1}, {t: this.instance}]})
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59, -170, 120.1, 134.2);


(lib.补间11 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.mountainps();
	this.instance.parent = this;
	this.instance.setTransform(50, -184);

	this.instance_1 = new lib.yv();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.1, -112, 0.507, 0.507, 30, 0, 0, 146.1, 177);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_1}, {t: this.instance}]})
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.9, -226.7, 217.9, 229.4);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_111 = function() {
		playSound('warning');
	};
	this.frame_125 = function() {
		playSound('Windows_error');
	};
	this.frame_156 = function() {
		this.stop();
		if (p3Model) {
			p3Model.dispatchEvent('p3-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111)
.call(this.frame_111)
.wait(14)
.call(this.frame_125)
.wait(31)
.call(this.frame_156)
.wait(1));

	// 图层 24
	this.instance = new lib.PPT();
	this.instance.parent = this;
	this.instance.setTransform(101, 549);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(137)
.to({_off: false}, 0)
.wait(20));

	// 图层 23
	this.instance_1 = new lib.word3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11, 448);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132)
.to({_off: false}, 0)
.wait(25));

	// 图层 22
	this.instance_2 = new lib.word4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114, 380);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(127)
.to({_off: false}, 0)
.wait(30));

	// 图层 21
	this.instance_3 = new lib.word8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(75, 325);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(121)
.to({_off: false}, 0)
.wait(36));

	// 图层 17 (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p('EgsZgG1IfPAAIAAXkI/PAVgAGjixIE4qFINGGyIlCKEgEAg/gJwIBtnTIJuCjIh4HMg');

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0})
.wait(45)
.to({graphics: mask_graphics_45, x: 367.7, y: 733.9})
.wait(112));

	// 图层 20
	this.instance_4 = new lib.补间14('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(535.9, 732.7, 0.489, 0.489, 14, 0, 0, 0.2, -0.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45)
.to({_off: false}, 0)
.to({regX: 0.1, regY: 0.1, rotation: 16, x: 627.7, y: 803.8}, 25)
.to({x: 544, y: 741.3}, 27)
.to({x: 623, y: 780.8}, 24)
.wait(36));

	// 图层 19
	this.instance_5 = new lib.补间14('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(376.8, 783.6, 0.523, 0.523, 30, 0, 0, 0.1, 0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45)
.to({_off: false}, 0)
.to({x: 439.8, y: 849.7}, 25)
.to({x: 380, y: 790.7}, 27)
.to({x: 430.8, y: 829.6}, 24)
.wait(36));

	// 图层 18
	this.instance_6 = new lib.补间14('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(104, 1014.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45)
.to({_off: false}, 0)
.to({x: 219.5, y: 1014.2}, 25)
.to({x: 151.4, y: 1014.5}, 27)
.to({x: 199, y: 985.3}, 24)
.wait(36));

	// 图层 11
	this.instance_7 = new lib.补间13('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(336, 453.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45)
.to({_off: false}, 0)
.to({x: 484, y: 336}, 25)
.to({x: 616.4}, 27)
.to({x: 452.5, y: 492.1}, 24)
.wait(36));

	// 图层 16 (mask)
	var mask_1 = new cjs.Shape();

	mask_1._off = true;
	var mask_1_graphics_45 = new cjs.Graphics().p('AljMRQichAhoh9Qhoh8gkikQglikApidQAniQBjh1QAcgiAggcQAXhcAyhTQBhigCvhaQCvhaC5APQC7APCeB1QCfB0BFCuQAtBuADB5QAEB5gmBvQg0Cgh/B2QgYBdgwBSQhSCNiOBaQiOBaihANQgcADgcAAQiEAAiAg2g');
	var mask_1_graphics_53 = new cjs.Graphics().p('Al8VDQhugOhlgqIAAAAQgUgIgTgKIAAAAIgdgOIAAAAIgbgNIAAAAIgfgPIAAAAQgTgHgNgJIAAAAQgZgNgYgSIAAAAQgTgKgSgMIAAAAQgkgXgggdIAAAAQgXgVgVgXIAAAAQgzg3gjhEIAAAAQgihDgRhNIAAAAIgBgCQgRhNADhKIAAAAQAChHAThDIAAAAIAMgnIAAAAIAJgjIAAAAQAIgaAKgZIAAAAQAhhSA3hEIAAAAIAfgkIAAAAQASgZAVgYIAAAAIARgTIAAAAQAWgWAYgTIAAAAIAIgJIAAAAIAIgUIAAAAIAdhBIAAAAIAhhAIAAAAIAYgtIAAAAIAHgOIAAAAQATghATgbIAAAAQBfiTCVhSIAAAAQATgLATgJIAAAAIAbgMIAAAAQgBhFAXhBIAAAAQAjhlBihdIAAAAQA+g7CChaIAAAAQBKgzAngeIAAAAQA+gvAtgrIAAAAIBWhaQA0g1AogdIAAAAQBIg0BagTIAAAAQBZgTBXARIAAAAQBXASBMA0IAAAAQBKA0AwBMIAAAAQA8BgATCRIAAAAQAJBIAEC9IAAAAIADCpIAAAAQAABggHBIIAAAAQgVDBhXB7IAAAAIgDAEIAAAAQAABKgbBIIAAAAQgeBTg6A9IAAAAQgJAlgQAiIAAAAQgvBuhbBDIAAAAQgZBTgyBAIAAAAQhMBhh9AoIAAAAQgYBNgjBFIAAAAIgTAiIAAAAQgZAvgcAlIAAAAQgfAogjAiIAAAAQgjAggqAcIAAAAIgeASIAAAAQgcARgeAOIAAAAQgrATgvAOIAAAAQgrAOg0AIIAAAAQg3AKg4ADIAAAAIgyABIAAAAQg1AAgwgFgAEnNaIAAAAIAAAAIAAAAgAEoNaQA9AAA/gTIAAAAQg/ATg9AAgAGmNHIAAAAIAAAAIAAAAgAGnNGIADAAIAAAAIgDAAgAIwG2IAAAAIAAAAIAAAAgAIxG2QATAAAUgCIAAAAQgUACgTAAgAFmlmQhiA0g9BjIAAAAQghA1gQA6IAAAAQgpAsgcA3IAAAAQgRAggKAiIAAAAIgXARIAAAAQg7AygoBGIAAAAQgnBFgNBPIAAAAQgGAkAAAlIAAAAQAAglAGgkIAAAAQANhPAnhFIAAAAQAohGA7gyIAAAAIAXgRIAAAAIACgCIAAAAQAlgaAqgSIAAAAQgqASglAaIAAAAQAdhTA9hAIAAAAQgJAogCApIAAAAIAAALIAAAAIAAgLIAAAAQACgpAJgoIAAAAIAEgQIAAAAQAQg6Ahg1IAAAAQA9hjBig0IAAAAQBcgyBsAAIAAAAQhsAAhcAygALTGpIAAgUIAAAAIAAAUgAI7mYQBzAEBfA6IAAAAQBTAyA1BVIAAAAQA2BVAKBhIAAAAQACAVAAAVIAAAAQAAgVgCgVIAAAAQgKhhg2hVIAAAAQg1hVhTgyIAAAAQhfg6hzgEIAAAAIgCAAIAAAAIACAAgAIumYIAAAAIAAAAIAAAAgABRADQAcg3ApgsIAAAAIgEAQIAAAAQg9BAgdBTIAAAAIgCACIAAAAQAKgiARggg');
	var mask_1_graphics_61 = new cjs.Graphics().p('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');
	var mask_1_graphics_70 = new cjs.Graphics().p('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');
	var mask_1_graphics_78 = new cjs.Graphics().p('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');
	var mask_1_graphics_88 = new cjs.Graphics().p('ArSZ+Qg0gBg2gFQgxgGgugJIgCAAIgUgDIgDgBIgmgIIgSgEIgpgIIgEgBIgOgCQgWgEgWgCIgGgBIgBAAIgSgCIgggEIgYgDIgSgDIgWgDQgkgHgfgLIgFgCIgCAAIgRgEIgbgEIgGgBIgkgHIgHgCIgCAAIAAAAIgPgDIgSgDIgHgBIgYgFIgTgDIgMgDIgFAAQgUgEgRgGQgWgGgUgIIgRgGQgWgHgVgIIgEgCQgbgKgYgNIgJgFIgZgNIgNgIQgWgOgVgPQgXgSgWgTQgpgkgigsIgWgeIgCgEQgFgGgEgHQgQgZgNgaQgMgYgKgZIgBgCQgghQgKhVIAAgCQgJhQALhNIAIgtIAEgZIAEgPIAJglIAHgVIAAgBIABgDQAXg/Ajg5QAPgZARgYIAEgEIAUgcIAMgPIAOgTIADgEIARgVIALgNIACgDIASgVIABgBIABgBQAQgcATgaIAGgJIAKgVIAGgNIAhg6IACgDIAWghIAWgdIAUgaIANgTIAKgNQAaggAbgbIAHgHIAMgMQAbgYAcgVIAKgJIAIgGIAKgIIALgKQAcgXAcgTIAIgGIAVgVIAKgKQAhggAkgbIAIgGIAJgHIAHgFIAJgIIAMgIIAYgRIAEgDIADgEQAMgYANgUIAFgJIAPggIAIgPIABgCIAIgOIAEgHQAggyAZgmIAIgMIAMgQIA0hIIAWgcIAJgNIAxhBIAXgfIAJgNQAegqAfgkIAIgIIAIgKIAOgQIBJhVIADgDQA0g8Ayg2IAFgFQAjgsAvgsIAIgHQAQgQAQgPIAMgTQAfg0ArgrQAfgfAjgZIAcgUIAegSQAcgQAggNQAjgPAlgLQAXgHAZgGIAlgHQAcgGAigEIAEAAIAdgDQASgCAPgEQAQgFARgJIAVgLIAKgGIATgKIAKgGQAlgYBEgcQAWgKAXgJIAWgJQAxgSAtgOIAIgCIAmgKQAlgJAngGQBogSBgAJIAOABQAZADAZAFQAbAGAaAIQAcAJAeANIAaAJQAlANAxAWIA1AYIAvAYIALAGQAYAOAUAPQAgAVAYAXIAIAHQAXASAUAVQArAcAmAkQA2AzAnA+IAHANQAVAOAZAMQAQAJASAHQAkARA6AUQBjArBSBRIALALQAdAcAXAfQApA1AaA7QAgBEAKBHQAGAnAAAoIAAACIACADQAcA6AKBBQAEAYABAZQAEBPgYBMIgHAUQgeBRg7A/IgMALIgRARQgOAigTAiQgTAIgWAPIgpAkQi4CklDBMIiEAeQhMATg0AWQg2AXg9AnQgqAbhCAxQh3BXg7BEQhUBigJBoIgDA2QgDAfgKATQgIAQgRAQQgKAKgWAQIi/CQQhqBUhHBLIhDBKIgDADIgdAQIgOAIIgCAAIgZAWIgGAGIgSANQguAigzAdIgDACIgLAGIgfARQggASgfANQgNAGgMADQgvATgtAOIgBAAIgFABIgVAGQgjAJgmAHIgiAGIgCAAIguAGIgVACQgtADgtAAIgNAAg');
	var mask_1_graphics_97 = new cjs.Graphics().p('ApUaRQg0gBg0gFQg1gFg1gKQgxgJgugNIgCAAIgNgDIgGgCIgDAAIglgMIgQgEIgCgBIgogJIgFgBIgKgCIgEgBQgWgEgYgCIgGAAIAAAAIgPgBIgFgBIgfgCIgZgCIgOgCIgEAAIgXgEQgkgGgggLIgFgCIgDgBIgLgDIgFAAIgcgBIgGgBIgmgDIgGgBIgCgBIgJgBIgGAAIgTgCIgHgBIgZgDIgTgDIgMgCIgFAAIgmgIQgWgGgWgHIgQgFQgWgGgWgIIgEgCQgbgKgZgMIgFgDIgGgCIgagNIgMgIQgXgNgVgPQgYgRgWgTQgrgjgjgrIgYgeIgCgEIgBgBIgJgMQgRgZgOgbQgNgYgLgZIgBgCQgjhQgNhXIAAgBQgMhSAJhPIAGguIAEgZIAEgPQADgTAFgTIAHgVIAAgBIAAgBIABgDQAWhBAjg6QAPgaARgYIAEgFIAUgcIAMgQIAOgRIABgCIACgDIATgWIALgNIACgDIAPgRIAEgFIABgBIABgCQAOgdARgcIAGgJIAJgVIAGgNQAPgcAPgZIAEgGIACgEIAWghQAKgPAMgOIAVgaIAOgTIAKgMQAbgfAdgbIAHgHIANgKQAbgXAegVIALgIIAHgFIABgBIAJgHIANgJQAegWAegRIAHgGIAVgXIAJgKQAgghAkgdIAHgGIAJgHIAHgFIAGgFIACgCIALgIIAZgSIAFgDIADgEQAQgVAQgSIAGgIIABgDIAQgbIAJgOIABgDIAIgNIAEgFIACgCIA+hXIAIgLIANgQIABgCIA0hGIAVgcIAJgNIAEgFIArhAIAVghIAIgNIAEgHQAZgrAZgkIAGgIIAHgLIAMgSIACgCIA/haIACgDQAvhBAug6IAFgGQAigwAsguIAHgHIAfghIANgTQAjg0AsgrQAggfAkgaIAdgTIAegTIADgBQAbgPAfgNQAjgPAmgMQAXgHAZgGIAlgJIABAAQAdgGAigFIAFAAIAfgFQAQgCAQgFQAQgEARgIQALgDAMgGIAKgFIAUgJIAKgFIAAAAQAegTBRgbIAugSIAXgIQAzgRAugNIAIgCIAngJIABAAQAlgJAngFQBogRBkAHIAOACQAZACAZAEIABAAQAdAFAaAHQAeAIAeALIAbAJQAoAMAwAVQAZALAcAOIAsAYIAEACIAKAHQAXAPAUAQQAeAXAYAaIAGAGQAVAVASAXQAuAZApAgQA7AuAvA5IAIALQAWAPAZANIABABQAPAJARAIQAlAVA1AZQBfA1BQBUIAKAMQAcAeAYAgIACADQAnA2AbA5QAiBGAOBHQAIAnACAoIAAACIABABIAAACQAZA+AGBCQADAXAAAYIAAADQgBBRgcBLIgHATIgBABQgiBOg+A8IgDADIgMAKIgTAQIgBABQgPAwgYAuQgMAYgOAYIgUAgQjwgCnKgIQguAAgcAHQgpAKgTAbQgHAMgGAVIgLAjQgHATgLANQgNAPgRABQADBHg9BIQgZAdhjBWQgtAohlBtQhbBhg7AuQgtAjh1BGQhsBAg2AtQAHAVgiAWQgqAbgHAQQgEAIgBATQgBATgEAIQgEANgOAMIgbATQgsAggQBFQgMAuAABPIACCgIgnAPIgEABIgLAEIghANQgiAMggAJIgaAGQgzAMguAIIgBAAIgEABIgFABIgRADIhKAIIgiACIgCAAIgvACIgVAAg');
	var mask_1_graphics_106 = new cjs.Graphics().p('AsxaIIgCAAIgNgEIgGgCIgDgBIgmgMIgPgFIgCgBIgpgMIgFgCIgLgDIgEgBIgsgLIgGgBIgCgBIgMgCIgFgBIgegIIgOgDIgKgCIgNgCIgEgBIgYgGIgJgCIg+gLIgFgBIgDgBIgBAAIgLgCIgFAAIgdAAIgGgBIgWgBIgRgBIgGgBIgCAAIgJgBIgHgBIgTgDIgHgBIgZgFIgTgEIgFgBIgIAAIgFAAIgngCQgWgCgXgEIgQgDQgWgDgXgFIgEgBQgdgHgcgJIgFgCIgGgCIgbgKIgNgFQgZgLgYgMQgZgOgZgQIgNgIQgogbgjghIgcgbIgDgDIgBgBIgKgLQgUgWgRgYQgQgXgPgXIgBgCIgTghQghg+gThEIAAgBQgWhPgChRIAAgBQgBgYACgXIABgaIABgPQACgUADgTIAEgWIAAgBIAAgBIABgDQANhEAdhAIAFgNIAVgpIAEgHIARgdIALgRIAMgTIABgCIADgDIASgZIAKgOIACgEIAQgTIADgFIABgCIACgBQANgYAQgXIAGgKIAGgIIANgUIAHgMIAPgVIAPggIADgGIACgFIATgjIAUgfIATgcIANgTIACgCIAHgLQAagiAegdIAGgHIAMgLQAbgaAdgXIALgIIAHgFIABAAIAJgGIAMgKQAfgWAfgSIAIgGIAWgSIADgDIAJgIQAhgaAjgVIAHgHIAHgHIAIgHIAFgGIAGgGIADgCIAJgJIAYgUIAFgFIAFgFQAQgUASgSIAGgHIACgDIAEgGIAOgSIALgMIACgDIAKgLIAFgFIACgCIAmgmIAigrIAIgKIADgDIALgNIACgDQAggmAXgfIAXgbIABgCIAHgKIAEgFQAYggAWghIAVghIAEgGIAEgGIAEgHIAvhVIAFgIIAHgMIADgGIAHgOIACgDIA1hhIACgEIACgEQAmhGApg+IADgGQAgg2AngxIAGgHIAdgkIANgVQAkg2ArgtQAggiAjgbQANgLAPgKIAdgUIADgCQAcgSAegPQASgJATgIIAkgPQAXgIAZgIIAlgKIABAAQAdgIAigHIAFgBIAhgGIADgBIAggHQAQgEAQgHQAMgDAMgFIAKgEIAVgIIAKgEIABAAQAigOA+gTIAVgGIAxgRIAYgHIBEgUIAjgKIAIgBIAngKIABAAQApgJAlgGIAMgCQBkgPBhADIAOABQAaABAaADIABAAQAeADAcAFIAWAEIAnAJIAbAHQAuALAvASQAcAKAdANQAXALAWAMIAEACIALAGQAXAOAUAQIAJAGQAYAUAVAWIAGAHQAWAVASAYQAeAZAaAdIAXANQBAAmA4AzIAJAJIAxAdIABABIAgASIAmAWIAxAeQBeA9BQBYIAKALQAcAgAZAiIADADQAVAeATAeQAQAaAOAbQAlBGAUBGQALAoAGAoIABACIAAABIABACQALAfAHAgQAIAiADAiQACAYAAAZIAAADQAAAggEAfQgHAygSAvIgHATIAAABQgNAcgPAaQgdAwgrAoIgDAEIgMAKIgVARIAAAAIgFAIQgMATgOASQgGAXgJAWQgJAagLAZIgBABQgjBQhBBHIgHAHQgTAUgTASQgwAtgvAcIgPAKQgRAMgSAKIgJAHIggAXIgOAUIgCAEIgUApIgIANQglBEgiA2IghA4IgWAmQgXAmgdA2IgJAQQgtACg1AKQh9Aeg/AHIhMAGQgtAEgdAJQgkALgqAaQgUANgzAlQhgBFhTA1Qh7BNihBVQhiA0jBBfIizBZQiUBJhIAhQh8A4hmAjIgtAPIg9gRg');
	var mask_1_graphics_121 = new cjs.Graphics().p('ADWboQllgFjBgaQkvgojahwIg5gdQghgPgbgGQgdgGgvABIhNACQg+gDg6gYQgxAMgyAEQiiAOibhBQibhAhoh9Qhoh8glikQgkikApieQAniQBjh1QAcgiAfgcQAYhcAyhTQBhigCuhZQAvgYAxgRQA0hPBFg5QAzgrA6gbQAXgcAbgdQBWhbAPgSQA4hAAgg4QAgg3AdhRIAwiOQCcnUEtilQBcgyCKgkQBQgVCggjICzgtQBrgbBIgNQCxgfC4AOQDeAQB9BdQBXBDAtBoQCcAxCSBrQC9CMCNDVQB6C2AhCkQATBhgMBdQgNBkgwBPQguBNhNA2QgWAPgWAMQgCA3gPA1QglCDhfBSQhJBAhqAfQgWAHgWAFQgSAfgXAkQhABigTAmQgXAtgTA8QgMAkgUBKQhED9gwCtQglCCgcBFQgsBsg8BHQhCBLhiAzQhZAvhtAXQhcATh0AEQgqAChDAAIhlgBg');

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics: null, x: 0, y: 0})
.wait(45)
.to({graphics: mask_1_graphics_45, x: 336.9, y: 453.8})
.wait(8)
.to({graphics: mask_1_graphics_53, x: 359.9, y: 422.9})
.wait(8)
.to({graphics: mask_1_graphics_61, x: 385.2, y: 427.4})
.wait(9)
.to({graphics: mask_1_graphics_70, x: 410.6, y: 404.9})
.wait(8)
.to({graphics: mask_1_graphics_78, x: 435.4, y: 397.4})
.wait(10)
.to({graphics: mask_1_graphics_88, x: 453.5, y: 397.4})
.wait(9)
.to({graphics: mask_1_graphics_97, x: 454.6, y: 398})
.wait(9)
.to({graphics: mask_1_graphics_106, x: 456.2, y: 397.6})
.wait(15)
.to({graphics: mask_1_graphics_121, x: 457.7, y: 403.3})
.wait(36));

	// 图层 15
	this.instance_8 = new lib.women2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(292, 193);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45)
.to({_off: false}, 0)
.wait(112));

	// 图层 14
	this.instance_9 = new lib.dialogue_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(380.5, 1304, 1, 1, 0, 0, 0, 325.5, 100);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(33)
.to({_off: false}, 0)
.to({x: 382.4, y: 1035, alpha: 1}, 12, cjs.Ease.get(1))
.wait(112));

	// 图层 10
	this.instance_10 = new lib.补间10('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(22.1, 840);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(13)
.to({_off: false}, 0)
.to({x: 174.1, alpha: 1}, 12, cjs.Ease.get(1))
.wait(132));

	// 图层 4
	this.instance_11 = new lib.补间8('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(625, 845.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(157));

	// mountain-copy.png
	this.instance_12 = new lib.补间5('synched', 0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(349, 825.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(157));

	// 图层 12
	this.instance_13 = new lib.补间11('synched', 0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(461.9, 999.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13)
.to({_off: false}, 0)
.to({scaleX: 0.88, scaleY: 0.88, x: 391.9, y: 830, alpha: 1}, 9, cjs.Ease.get(1))
.wait(135));

	// mountain.png
	this.instance_14 = new lib.补间4('synched', 0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(368, 625.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(157));

	// 图层 13
	this.instance_15 = new lib.补间12('synched', 0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(659.9, 849.9);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(22)
.to({_off: false}, 0)
.to({x: 607.9, y: 781.9, alpha: 1}, 9, cjs.Ease.get(1))
.wait(126));

	// 图层 9
	this.instance_16 = new lib.补间9('synched', 0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(32.2, 689.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x: 338, y: 686.5, alpha: 1}, 12, cjs.Ease.get(1))
.wait(145));

	// 图层 6
	this.instance_17 = new lib.ditu();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0, -4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(157));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-305.8, -4, 1055.9, 1214);


// stage content:
(lib.montagep3 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.scene();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1, 476, 1055.9, 1214);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '3/images/montage_p3_atlas_.png', id: 'montage_p3_atlas_'},
		{src: window.configs.perfixUrl + '3/sounds/warning.mp3', id: 'warning'},
		{src: window.configs.perfixUrl + '3/sounds/Windows_error.mp3', id: 'Windows_error'}
	],
	preloads: []
};


})(lib3 = lib3 || {}, images3 = images3 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib3, images3, createjs, ss, AdobeAn;