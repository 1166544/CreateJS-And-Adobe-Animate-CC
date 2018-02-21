(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p7_atlas_', frames: [[259, 1882, 257, 123], [0, 1882, 257, 123], [0, 1212, 668, 668], [0, 0, 750, 1210], [670, 1212, 348, 407], [670, 1621, 430, 205], [518, 1882, 150, 86], [670, 1828, 185, 207]]}
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


(lib.balance1 = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.balance2 = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.circleglass = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.circleshiper = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.flower = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.guid_layer = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.plaent = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.plane = function() {
	this.spriteSheet = ss.montage_p7_atlas_;
	this.gotoAndStop(7);
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


(lib.tweens112 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.balance2();
	this.instance.parent = this;
	this.instance.setTransform(-128.5, -61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5, -61.5, 257, 123);


(lib.tweens111 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.balance1();
	this.instance.parent = this;
	this.instance.setTransform(-128.5, -61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5, -61.5, 257, 123);


(lib.tweens110 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.circleglass();
	this.instance.parent = this;
	this.instance.setTransform(-334, -334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334, -334, 668, 668);


(lib.tweens19 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.circleglass();
	this.instance.parent = this;
	this.instance.setTransform(-334, -334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334, -334, 668, 668);


(lib.tweens18 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.circleglass();
	this.instance.parent = this;
	this.instance.setTransform(-334, -334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334, -334, 668, 668);


(lib.tweens17 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.circleglass();
	this.instance.parent = this;
	this.instance.setTransform(-334, -334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334, -334, 668, 668);


(lib.tweens16 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.plane();
	this.instance.parent = this;
	this.instance.setTransform(-92.5, -103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5, -103.5, 185, 207);


(lib.tweens15 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.plaent();
	this.instance.parent = this;
	this.instance.setTransform(-75, -43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75, -43, 150, 86);


(lib.tweens14 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.flower();
	this.instance.parent = this;
	this.instance.setTransform(-174, -203.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-174, -203.5, 348, 407);


(lib.tweens13 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.circleshiper();
	this.instance.parent = this;
	this.instance.setTransform(-375, -605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375, -605, 750, 1210);


(lib.tweens11 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f('#FFFFFF').s()
.p('AgTAVQgHgJAAgMQAAgLAIgIQAHgIALgBQAMABAHAIQAIAHAAAMQAAANgHAIQgIAIgMAAQgMgBgHgHg');
	this.shape.setTransform(9.2, 237.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#FFFFFF').s()
.p('AgTAVQgHgJAAgMQAAgLAIgIQAHgIALgBQAMABAHAIQAIAHAAAMQAAANgHAIQgIAIgMAAQgMgBgHgHg');
	this.shape_1.setTransform(0.4, 237.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#FFFFFF').s()
.p('AgTAVQgHgJAAgMQAAgLAIgIQAHgIALgBQAMABAHAIQAIAHAAAMQAAANgHAIQgIAIgMAAQgMgBgHgHg');
	this.shape_2.setTransform(-8.4, 237.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#FFFFFF').s()
.p('AgvCBQgTgKgKgQQgKgQAAgUQAAgaAOgSQANgTAWgJIAAgBQgUgLgKgQQgKgQAAgSQAAgVALgRQAKgQATgJQARgIAWgBQAaAAARAKQARAKAIAPQAIAPAAARQABASgKARQgKAQgWAMIAAABQAWAJAOASQAOARAAAZQAAAYgLARQgMASgUAKQgTAKgZAAQgcAAgTgLgAgiAdQgKAPAAASQAAAOAFAKQAGALAKAHQAKAGANAAQAOAAAKgGQAKgGAGgKQAFgLAAgMQAAgWgOgOQgNgOgVgHQgUAHgLAOgAgUhoQgJAGgEAJQgEAKAAAKQAAASAMAMQALAMATAGQAOgGAKgMQAJgMABgRQAAgKgEgKQgEgJgIgHQgJgFgNAAQgMAAgJAFg');
	this.shape_3.setTransform(30.4, 179);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#FFFFFF').s()
.p('AAICHIAAjnIgBAAIgtAYIgJgeIA8ghIAjAAIAAEOg');
	this.shape_4.setTransform(8.4, 179);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#FFFFFF').s()
.p('AgwB6QgTgRgKgfQgKgfAAgqQAAgsALgfQALgfAUgRQAUgRAbAAQAcABATAQQAUASAJAfQAKAeAAAqQgBBFgXAjQgXAlgpAAQgcAAgUgSgAgghOQgMAcgBAyQAAAyAMAdQAMAcAVAAQARAAAKgQQAKgPAEgXQAFgZAAgcQAAgggFgYQgFgYgKgNQgKgNgQAAQgUAAgMAcg');
	this.shape_5.setTransform(-10.1, 179);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#FFFFFF').s()
.p('AhSCKIAAgaIAdgdQAcgdAVgYQASgXAKgUQALgVAAgTQAAgOgEgLQgFgLgLgHQgKgGgQgBQgPABgOAGQgNAHgKAHIgNgeQANgKATgHQASgIAXAAQAbABASALQASAKAIATQAJARAAAVQAAAZgLAXQgKAWgSAWQgSAXgYAXIgVAXIAAAAIBsAAIAAAjg');
	this.shape_6.setTransform(-30.6, 178.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#FFFFFF').s()
.p('Ag/COQgDgIgFgHQASACAHgBQAIgCgBgIIAAgZIhEAAIAAA/IgfAAIACghIABgYIAAhgIgBgRIgCgQQANACASABIAiABIAXgBIAXgBIATgCIgCAQIgBARIAAB9QAAALgDAGQgEAFgLADQgKADgUACQgBgJgDgHgAhrBIIBEAAIAAgdIhEAAgAhrAXIBEAAIAAgbIhEAAgAAyCWQgNAAgGgEQgGgDgCgHQgBgHAAgMIAAhSIgBgWIgCgRIARACIAQAAQAFAAABACQABABgFAEIgFAFQgBADAAAEIAAAmQAVgJASgKQASgKALgJQAFAIAGAGIAKAKQADADgBACQgBACgEAAQgDgBgVAHIg+AYIAAAkQgBAFACACQACADAJACIAZABQAMAAAHgEQAIgDAEgJQAEgIABgRQAHAJAHAFQAIAFAIABQgEAQgEAJQgEAJgHAFQgGAEgLABQgLABgTAAIgjgBgAA2gSQgNgBgHgEQgGgDgBgGQgCgIAAgLIAAg/IgBgWIgCgSIARACIARABQAEAAABABQABACgFAEQgDACgCADQgBACAAAFIAAAlQATgHASgLQASgKALgJQAFAHAGAGIAMAKQADADgBACQgBADgFgBQgDAAgJACIgbAJQgSAGgcAMIAAATQgBAFADADQACADAIACQAIABASAAQAMABAGgDQAHgCADgIQADgHADgQQAFAHAHAFQAIAFAIACQgFATgHAHQgGAJgLACQgLACgWAAIgjgBgAgTgxIgEgJIhUAIIgTACQgJABgHAEIgDgQIgFgPIAMgGIAJgJQAJgKAIgMIAOgYIALgWIARAJIANADQAGABABACQAAADgHAEIgIAGIgLANIgNAPIgLANIgMAOIBPgCIgMgSIgKgPIAWgLIAXAgIATAfIgZAQIgDgIg');
	this.shape_7.setTransform(180.4, 132);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#FFFFFF').s()
.p('AAXCXQABgIgFgLQgEgKgIgJQAcAFAOAAQAOAAAEgFQAEgEAAgKIAAjaIiOAAIgnABIgYABIgSABIAAgiQAJACAKABIAXABIAnAAICQAAIAvgBQAUgBANgCIAAAjIgWgCIgdgBIAADlQAAAMgCAIQgEAIgIAFQgHAEgQACIgXABIgTAAgAh2BbIACgXIABgZIAAgWIAAgwIAAgSIgBgTIgBgQQAKABASABIAwAAIAsAAQAQgBAJgBIgBAPIgCAUIAAASIAAAwIABAaIACAZIgfAAIAAgaIhSAAIAAAtgAhVATIBSAAIAAhEIhSAAg');
	this.shape_8.setTransform(144.1, 133.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f('#FFFFFF').s()
.p('AA+CLQgFgLgJgIQAZADAMgBQANgCAFgGQAEgFABgLIAHipIhNAAQgFASgHANIgPAcIgMgMQgGgEgHgCQAOgUAMghQANggAHgsIASAFIAUABQAFAAAAADQABACgGAEQgEAEgGAMQgGAMgGASIA8AAIAVgBIATgCIgCARIgBASIgHC0QgBANgGAKQgHAKgOAFQgPAHgbABQgBgKgFgLgAiTCUIACgTIABgQIAAgSIAAigIAAgRIgDgPIARABIAVABQADgSACgRQACgQAAgNIAUADIATACQAEAAAAADQABACgEAEQgDACgDAFIgFAPIgHAcIAjAAIAdgCIgCAQIAAAQIAACeIAAASIABAQIACASIgiAAIAAggIhBAAIAAAjgAhyBZIBBAAIAAhIIhBAAgAhygGIBBAAIAAhAIhBAAgAAnAmIgKgYIgMgTIAdgMQAGAPAJAQQAJARAJAOIggAQIgIgXg');
	this.shape_9.setTransform(108.3, 132);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f('#FFFFFF').s()
.p('Ag8COQgGgIgGgFQAIgEADgFQADgGAAgLIAAhFIgrAAQgBAWgEAUQgDATgGASQgGATgKATQgGgHgIgFQgHgEgJgDQAKgPAGgNQAGgNADgNQAEgNABgQQACgQABgWIAAgnIgBg8IgChGIAVABIAaABIAjABIAwAAIA+AAIApgCIAcgBIgCASIgBAUIABAXIACAVIgWAAIgmAAIAAAeIAhgBIAZgBIAAAcIgZgCIghgBIAAAjIA3gBIAegDIAAAeIgUgCIgngCIhEAAQAEAMAJAMQAIAMAKAJIAQgPIANgPIAIgMIAJAGIAKAHIAJAEQAEACAAACQAAACgFAAQgDAAgLAHQgLAHgTARQAVAKAVAFQAUAFAVABQgHAIgEAJQgDAIgBAKQgqgJgbgPQgcgNgRgXQgSgVgLggIgjAAIAABQIAagPQAKgGAIgHIABAOIAFAOQgfAPgQALQgQAKgFAJQgEgIgHgJgAgJAMIA0AAIAAgjIg0AAgAhigoIgBAbIAAAZIA/AAIAAgiIgWAAIgTACIAAgcIATABIAWABIAAgeIg/AAIABAkgAgJguIA0AAIAAgeIg0AAgAhjhkIDFAAIAAgfIjFAAg');
	this.shape_10.setTransform(72.4, 132.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f('#FFFFFF').s()
.p('AhnCTIgLgNQAagFAVgGQAVgGARgHQAQgHAOgIIgbgbQgOgPgOgSQgRAZgVAUQgUAUgWAQQgFgKgHgGQgGgHgLgFQAagKAYgWQAZgWATgeQATgcALggIgoACQgQACgKADQgKADgHAFQAAgHgDgHQgCgHgGgKQAMgLAKgUQAJgTAEgaQAHAEAJACIAQAFQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBABIgGAIIgKATIgMAXIA9AAQAHgaADgTQAEgTAAgPIAUACIAUAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAQgCACgDAGIgGANIgJAbIgGAZIAuAAIAvgCIAlgDQAQgBAFgCIAAAjIgpgCIg+AAIg2AAIgHAUIgIATIBIAAIAWAAIAZgBIAXgBQgMAdgKAVQgLAVgLAPQgMAPgOANQAMAHAPAEQAOAEAVADQAWACAgABQgHAHgFAKQgFAJgDAMQgjgEgdgJQgdgKgZgRQgPAKgTAKQgTAJgXAHQgWAIgWADQgEgHgFgHgAgmAKIgBACQAIANAPARQAPAQAZAVQAOgMAMgSQAMgRAJgXIhsAAIgBABgABFhwQgJgMgKgIIAYgUIATAYQAKALALAJIgeAUQgGgMgJgMg');
	this.shape_11.setTransform(35.9, 132);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f('#FFFFFF').s()
.p('ABpCKQgQgNgTgLIAOgUQAZANAQAKIAeASIgVAbQgNgMgQgMgAglCWIgNgNQAngIAWgOQAXgOAJgVIgtABIgjABIAAgbIAlACIAyAAQADgRACgZQACgXAAgeIAQACIAOAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBABAAAAIgCAFIgDAJIgBAJIgDAfIgDAUIgCANIAugBIAjgBIAAAbIgXgBIgegBIgiAAQgHAVgMAPQgMAPgUALQgSALgcAJIgJgMgAiUB9QgDgKgEgJIAQgCIAUgCIAdgGIAqgIQgCAGgBAIQAAAIABAHQglAGgXAGQgXAGgNAHIgCgRgAiQAzIgFgMQAHgEAQgQQAPgRAUghIgcADIgMADIgNAEIgFgNIgFgNQAHgDAHgMQAIgMAJgXQAJgXAKgmIASAIIAQAFQAFACAAACQAAACgEABQgCAAgCADIgIALIgQAbIgbAxIAsgDIAMgYIAIgUIAOALIALAGQAEACAAABQAAACgFACIgDACIgJANIgWAgIgoA7IAWgCIAUgCIAZgDIgDAMIAAANIg3AEIgPACIgQADIgKADQAAgHgCgHgAgCAmIgQgPIgPgMIAPgPIAQALIAPANIAOANIgSASIgLgNgAAJgJQgJgKgKgHIANgRIAWAQIAUARIgSASIgSgRgABrgOIANgmIg5AAIguABIgqACIAAgcIASACIAWABIAhAAIAAgcIgoABIgfABIAAgbIAfABIAoABIgBgWIgCgOIAQABIARAAQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAACgDADQgCABgCAGIgBAJIAAAMIArAAIAhgCIAAAbIghgCIgrAAIAAAcIAkAAIAZgBIAUgCIgWBHg');
	this.shape_12.setTransform(-0.2, 132);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f('#FFFFFF').s()
.p('AA1CSQgDgKgGgJQARADAIgBQAJAAACgDQACgEAAgHIAAhFIhCAAQgfAAgUADIAAggQAKACANAAIAcABIBCAAIAAgnIhAABIgxADIAAgfIAeACIAkABIAAgsIgiABIgZADIAAggIAZACIAiABIgBgjIgBgSIAQACIATAAQAFAAAAACQABACgEACQgCACgCAEIgBAHIAAAgIAogBIAegCIAAAeIgegCIgogBIAAAtIAnAAIAegBIAZgCIAAAfIgWgCIgZgBIAAAmIAcgBQAMgBAGgCIAAAgIgSgBIgcgBIAABRQAAANgDAHQgDAHgMADQgMAFgZADQAAgKgEgJgAiICNIgLgTQARACAJAAQAIgBACgDQADgCAAgHIAAhFIgUAMIgSAMIgFgTQgDgKgEgIIAZgJIAZgKIAAhFIgaABIgTACIAAgfIATACIAaABIgBgvQgBgSgDgJIATADIAQAAQAIAAACACQABACgGAFQgDADgCADQgBADAAAEIAAAxIAWgBIARgCIAAAfIgRgCIgWgBIAAA4IAQgHIASgKQgBAIABAHIAEANIgSAIIgUAKIAABhQAAANgDAHQgCAGgLAEQgLADgZADIgFgSgAgHBaQgFgOgGgMIAegJIAIAaIAKAbIgeAMQgDgPgEgPg');
	this.shape_13.setTransform(-36.1, 132.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f('#FFFFFF').s()
.p('AgMCmIABgXIABgWIAAgYIAAhLIgDAAQgNAXgSAWQgTAXgWAVQgWAUgWAQQgFgHgIgGQgIgGgLgFQAmgTAegZQAegZAXggIgrAAIgjABIgeABIAAgdIAkACIAsABIA6AAIAAhWIg0AAIgnABIgeACIAAggIAfACIAmABIA0ABIAAgaIAAgQIgCgKIARACIARAAQAHAAABACQABADgFAFQgEADgBADIgBAJIAAAZIBHgCIA1gCIAAAgIg1gCIhHgBIAABWIBPgBIA5gCIAAAdIgxgCIhBAAQAKAWAUATQATASAYAMQAYAMAXADQgGAIgGAKIgKAVQgcgNgTgNQgUgNgNgOQgNgPgJgSQgJgRgHgWIgCAAIAABLIAAAYIABAWIACAXgAA+gSQgIgEgGAAQALgOAIgOQAHgOAFgNIARAHIAOAFQAFACAAABQAAACgFACIgIAJIgMASIgOAWQgFgFgJgEgAhagjIgPgTIAYgPIARASIAPAUIgcATQgFgMgIgLg');
	this.shape_14.setTransform(-72, 131.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f('#FFFFFF').s()
.p('AgRClIACgdIABgaIAAhCIhDAAIAABaIggAAIACgTIAAgTIAAguIAAgSIgCgNIAiABIAgABIAhAAIAAgVIgBgMIgBgIQAJACAHAAIARAAQAHAAABACQAAACgGAEQgCACgBAHQgBAGAAAQIAgAAIAggBIAigCIgBAOIAAASIAAA6QAAAMgEAGQgEAHgNADQgNAEgZACQgBgJgCgIQgCgJgFgIIAXABQAKgBADgDQADgDgBgEIAAg2IhCAAIAABCIABAaIABAdgAiUAHIAAg8IAfABIAuABIBHABIBHgBIAvgBIAfgBIAAA4IgeAAIAAgeIjuAAIAAAigAhWg9IAAgoIgfACIgdACIAAgeIAdACIAfABIgBgVIgCgSIARABIARAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgFAEQgBADgBADIAAAWIAxAAIAAgXIgBgRIAPABIAQgBQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQgBABAAAAQAAABAAAAQgBABgBAAIgEAFQgCACAAADIAAAYIAwAAIAAgXIgBgQIARABIAPAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABACgEACIgEAEQgCADABADIAAAWIAfgBIAcgCIAAAeIgcgCIgfgCIAAAjIgbAAIAAgjIgwAAIAAAmIgZAAIAAgmIgxAAIAAAog');
	this.shape_15.setTransform(-107.9, 132.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f('#FFFFFF').s()
.p('AhCCLQgIgHgHgDQATgIARgLQARgMAOgNQAOgNAHgNQAJgPAFgOQAGgOADgRQADgRACgbIABgWIABgUIgBgQIALADIAMABIAJABQABgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAIgCAEIgCAJIgDAVIgEAnQgCARgDAOQgFAQgFAPQgHAQgKASQgIAOgNAOQgMANgPANQgPANgQALQgGgIgIgGgABjCRQgWAAgKgCQgKgDgDgIQgDgJAAgQIAAhVIAKABIALACIAIAAQADAAABABQABAAAAABQAAAAgBAAQAAABgBABQAAAAgBABIgCAEIgCAFIAAA9IACALQABAFAEABQAFABAKAAQAMAAAHgCQAGgDAEgJQADgJACgQQAFAGAIAFQAIADAJACIgIAdQgEAJgGAFQgGAFgMABIgVABIgIAAgAieBiIgEgRIAVgCQALgCAQgDIAAhYIgXABIgQADIAAgfIAQABIAXACIAAhKIgZABIgSACIAAgfIAbACIAkAAIAgAAIAXgCIAAAfIgUgCIgbgCIAABLIAZgCIASgBIAAAfIgSgDIgZgBIAABSIAagHIAYgIQgCADAAAGQgBAFABAGIACAIQgpAIgdAKQgeAIgTALQAAgJgDgLgAgcAdIACgZIABgfIAAhfIAAgSIgBgLIAcABIAzABIAjgBIAcAAIAQgBIgBALIAAASIAABeIABAeIADAaIggAAIAAiYIhlAAIAACZg');
	this.shape_16.setTransform(-143.8, 132.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f('#FFFFFF').s()
.p('AiPCTQgEgIgHgHQAkgBAegFQAfgGAagLQgJgGgMgKQgLgKgLgOQgMgNgKgPIgOABIgPABIAAgeQAPACAfAAIBKABIBJgBQAeAAAQgCQgHANgLAQQgLAQgSAQQgRARgaARQAgALAhAEQAiAEAhgCQgIAIgFAJIgIARQgmgDgkgKQgjgKgcgNQgRAIgWAIQgWAIgYAGQgZAGgZAEQgCgJgEgHgAglBIQAQAPASAJQAUgLAQgNQARgOALgSIh/AAQAMARARAPgAASAGIACgRIAAgSIAAhEIgrAAIAABEIAAASIACARIgfAAIABgRIABgSIAAhEIg0ABIgqADIAAghIAkADIAqABIA2AAQgCgJgEgIQgEgIgFgGIAhgJIAGASIAGAWIA2AAIAqgBIAlgDIAAAhIgfgDIgggBIgoAAIAABEIABASIABARgABugUIgXgXQgMgLgKgHIAVgTIAYAUIAaAWIATAUIgaAUIgTgWgAiKgIQgHgFgKgEQARgMAPgRQAPgSALgTIALAJIAOAHQAEACAAACQgBACgEABQgCAAgEAEIgQASIghAmQgDgDgHgFg');
	this.shape_17.setTransform(-180.1, 131.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f('#FFFFFF').s()
.p('AhCCLQgIgHgHgDQATgIARgLQARgMAOgNQAOgNAHgNQAJgPAFgOQAGgOADgRQADgRACgcIABgVIABgUIgBgQIALACIAMACIAJABQABgBABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCADIgCAJIgDAWIgEAnQgCARgDAPQgFAPgFAPQgHAQgKASQgIAOgNAOQgMAOgPAMQgPANgQALQgGgIgIgGgABjCRQgWAAgKgDQgKgCgDgIQgDgIAAgSIAAhUIAKABIALABIAIAAQADAAABACQABAAAAABQAAAAgBAAQAAABgBABQAAAAgBABIgCADIgCAGIAAA9IACAMQABADAEACQAFABAKABQAMgBAHgCQAGgDAEgJQADgIACgSQAFAHAIAFQAIADAJACIgIAcQgEALgGAEQgGAFgMABIgVABIgIAAgAieBiIgEgRIAVgDQALAAAQgEIAAhXIgXAAIgQACIAAgeIAQABIAXACIAAhKIgZABIgSACIAAgfIAbACIAkAAIAgAAIAXgCIAAAfIgUgCIgbgBIAABKIAZgCIASgBIAAAeIgSgCIgZgBIAABSIAbgIIAXgHQgCADAAAFQgBAGABAGIACAIQgpAIgdAKQgeAIgTALQAAgJgDgLgAgcAeIACgaIABgfIAAhfIAAgSIgBgLIAcABIAzABIAjAAIAcgBIAQgBIgBALIAAASIAABdIABAfIADAaIggAAIAAiYIhlAAIAACag');
	this.shape_18.setTransform(90.2, 85.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f('#FFFFFF').s()
.p('AiPCTQgEgIgHgHQAkgBAegFQAfgGAagLQgJgGgMgKQgLgKgLgOQgMgNgKgPIgOABIgPABIAAgeQAPACAfAAIBKABIBJgBQAeAAAQgCQgHANgLAQQgLAQgSAQQgRARgaARQAgALAhAEQAiAEAhgCQgIAIgFAJIgIARQgmgDgkgKQgjgKgcgNQgRAIgWAIQgWAIgYAGQgZAGgZAEQgCgJgEgHgAglBIQAQAPASAJQAUgLAQgNQARgOALgSIh/AAQAMARARAPgAASAGIACgRIAAgSIAAhEIgrAAIAABEIAAASIACARIgfAAIABgRIABgSIAAhEIg0ABIgqADIAAghIAkADIAqABIA2AAQgCgJgEgIQgEgIgFgGIAhgJIAGASIAGAWIA2AAIAqgBIAlgDIAAAhIgfgDIgggBIgoAAIAABEIABASIABARgABugUIgXgXQgMgLgKgHIAVgTIAYAUIAaAWIATAUIgaAUIgTgWgAiKgIQgHgFgKgEQARgMAPgRQAPgSALgTIALAJIAOAHQAEACAAACQgBACgEABQgCAAgEAEIgQASIghAmQgDgDgHgFg');
	this.shape_19.setTransform(53.9, 84.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f('#FFFFFF').s()
.p('ABQCJQgagMghgLQgVAOgkAKQgmAJg3AGIgGgRQgEgIgFgHQAlACAhgEQAigEAcgLIgmgKIgpgJQAJgKAIgJIAQgVIgkAAIgkABIgcACIAAgdIAXACIAfABIAhAAIAcABIAJgQQAEgHACgHIAQAHIAMADQAGABAAACQAAABgGADIgEAEIgJAJIBZAAIAqgBIApgDIAAAdIglgDIgoAAIgLATQgFAIgGAIIgQAQIAyAQIAuAPIgLAOQgEAHgDAJQgRgJgZgLgAgxBHIAgAHIAiAKQAMgIAJgLQAJgLAFgNIhSAAgABYgMIgnAAIgyAAIgzAAIgnAAIggABIABgTIABgYIAAgYIgCgTIAhABIAnAAIAAgjIgcAAIgeABIgZABIgRABIAAgcIAPABIAYABIAsABIBGAAIBGAAIAwgCIAdgBIAAAcQgPgCgbAAIg+gBIAAAjIApAAIAigBIgBASIAAAZIAAAaIABARIgggBgAAtgiIAvAAIAAgpIgvAAgAgbgiIAvAAIAAgpIgvAAgAhfgiIAsAAIAAgpIgsAAgAgbhgIAvAAIAAgjIgvAAg');
	this.shape_20.setTransform(18.4, 85.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f('#FFFFFF').s()
.p('AiSCJQgGgJgIgGQAlgBAdgGQAcgGAUgMIgegVQgMgLgKgKIAXgQQAGAJANAMQANALAPAKQAGgIAEgMQAEgLADgTIgzABIgjABIgYACIACgPIABgOIAAhKIgBgRQgBgHgCgHIAaACIAjABIA1ABIAAghIhRABIg+ACIAAgdIBCACIBYABIBagBIBCgCIAAAdIg9gCIhQgBIAAAhIAzgBIAjgBIAXgCQgBAGgBAJIgBATIAABDIABASIABAPIgZgCIgjgBIgzgBQgCAWgEAPQgFAOgHALQAoARAoAEQAoAFAsgGIgFALIgEAOQgCAHABAFQgdAAgggFQgfgEgegJQgcgIgWgLQgUAQgdAKQgdAJgnAHQgDgJgFgJgAARgFIAAAOIBNAAIAAgeIhMAAIgBAQgAhaAJIBRAAIAAgOIABgQIhSAAgAASgqIBMAAIAAgeIhMAAgAhagqIBSAAIAAgeIhSAAg');
	this.shape_21.setTransform(-18, 85.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f('#FFFFFF').s()
.p('AiECWIgOgPQAogHAcgKQAbgMASgOQARgOAKgTIhSABQgkABgaACIAAgiIAoABIAzABIA/ABIADgcIACgfIAAgfIAAgWIAUACIASAAQABAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAAAAABQgBAAAAAAQAAABAAAAQgBABgBAAQgCABgBAHQgCAGgBAJIgCAdIgCAdIgDAZIBBgBIAzgCIAAAjIg1gDIhGgCQgOAjgjAaQgkAag/AVQgGgJgGgIgABJCBQgXgOgagOIARgXIAnATIAgARQAQAJARAMIgYAdQgYgUgYgPgAhWAJIgdgQIAVgUIAgASIAbAPIgZAUQgLgJgPgIgAgzgjQgPgLgQgIIARgUIAfASIAbARIgTAZIgZgVgAiNg2IAAhIIAUABIAbAAIAkABIA0AAIgGgTIgGgQIAlgIIAHAVIAHAWIA0gBIAiAAIAagBIAABFIgiAAIAAgoIjeAAIAAArg');
	this.shape_22.setTransform(-54.2, 84.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f('#FFFFFF').s()
.p('AiBCYIgNgNQAWgGAYgMQAYgMAZgWIAOANIAOAMQABAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDgBgGACQgEABgKAFIgcAOIgyAbQgDgHgFgGgABdCPQgPgJgRgIQgPgHgRgGIASgYIAvAVIAuAWIgVAcQgMgJgOgIgACJBPIgdgBIgrgBIhAAAIhAAAIgrABIgeABIgVACIAAggIAmACIAoABIAAiSIgiABIgfACIAAgeIAfACIAiABIgBgWIgDgTIARABIARABQAEAAACABQAAABAAAAQAAAAAAABQgBAAAAABQgBAAgBABIgDAEIgBAHIAAAXIBmAAIgBgbQAAgLgDgIIASADIAQABQAGAAABACQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgFAGQgCACABAEIAAAZIAegBIAegCIAAAeIgegCIgegBIAACSIAngBIAlgCIAAAgIgUgCgAgyA0IBmAAIAAglIhmAAgAgygHIBmAAIAAggIhmAAgAgyg+IBmAAIAAggIhmAAg');
	this.shape_23.setTransform(-89.9, 84.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f('#FFFFFF').s()
.p('AiCCXQgJgGgKgCQAIgNAGgPIANghIAJggIAIggQAGAFAIAFQAHAFAJADIgKAdIgJAhIgJAhIgIAgQgKgHgJgFgABsCWIhAgBIg/ABIgvADIAAgiIAqACIA1ACIAAhgIgnABIgfACIAAggIAfACIAnAAIAAhKIguABIglACIAAgiIAsADIA7ABIA7gBIAsgDIAAAiIgngCIg0gBIAABKIAsAAIAigCIAAAgIgigCIgsgBIAABgIA1gCIApgCIAAAiIgvgDgAh1gRQgJgHgKgGIgSgJIAUgZIAcARQAPAIAMAKIgWAcQgHgIgJgIgAhrhpQgNgLgNgIIAUgYIAaASIAYAUIgWAaQgIgKgOgLgAAaiDQgDgKgGgLIAigKIAJAUIAIAVIgkAMQgCgLgEgLg');
	this.shape_24.setTransform(125.9, 37.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f('#FFFFFF').s()
.p('AiOCYQgHgIgKgHQAigIAcgQQAcgPATgXQATgVAGgbIgvABIgmABIgkABIAAgeIAlAAIAnACIAxAAQACgPABgSQABgRgBgSIgtAAIgjACIggACIAAghIAoACIAuABIA9AAQAPgXAHgSQAIgTAFgPIAOAIIAPAHIAJADQAFABAAACQAAADgHADIgJAJIgPARIgQAWIAjAAIAbgBIAbgCIAAAhIgZgCIgagBIgegBIgqAAQAAAUgBARQAAAQgCAPIAuAAIAigBIAdgBIAcAAIAAAeIgcgBIgcgBIghgBIguAAQAYAtAlAWQAlAWAxAFQgIAJgFAJQgFAKgCAMQghgLgcgQQgcgSgUgWQgUgXgJgcQgGAZgQAVQgQAUgbAUQgbATgoAUQgFgJgHgHgAg6hyIgMgRQgHgJgGgFIAcgRIATAYQAKANAKALIgfATIgLgTg');
	this.shape_25.setTransform(90.1, 38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f('#FFFFFF').s()
.p('ABQCJQgagMghgLQgVAOgkAKQgmAJg3AGIgGgRQgEgIgFgHQAlACAhgEQAigEAcgLIgmgKIgpgJQAJgKAIgJIAQgVIgkAAIgkABIgcACIAAgdIAXACIAfABIAhAAIAcABIAJgQQAEgHACgHIAQAHIAMADQAGABAAACQAAABgGADIgEAEIgJAJIBZAAIAqgBIApgDIAAAdIglgDIgoAAIgLATQgFAIgGAIIgQAQIAyAQIAuAPIgLAOQgEAHgDAJQgRgJgZgLgAgxBHIAgAHIAiAKQAMgIAJgLQAJgLAFgNIhSAAgABYgMIgnAAIgyAAIgzAAIgnAAIggABIABgTIABgYIAAgYIgCgTIAhABIAnAAIAAgjIgcAAIgeABIgZABIgRABIAAgcIAPABIAYABIAsABIBGAAIBGAAIAwgCIAdgBIAAAcQgPgCgbAAIg+gBIAAAjIApAAIAigBIgBASIAAAZIAAAaIABARIgggBgAAtgiIAvAAIAAgpIgvAAgAgbgiIAvAAIAAgpIgvAAgAhfgiIAsAAIAAgpIgsAAgAgbhgIAvAAIAAgjIgvAAg');
	this.shape_26.setTransform(54.4, 38.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f('#FFFFFF').s()
.p('ABDCPQgCgIgKgNQATAFAKgDQAJgCgBgJIAAgtIg1AAIAAAqIABAgIgbAAIABgfIABgrIgqAAIAAArIABAhIgaAAIABggIABgsIgsAAIAABUIgeAAIACgPIAAgQIAAg0IAAgOIgCgLIAbACIAiABIAkAAIAGgYIhRAAIgvADIAAgaIAgABIAzABIBDAAIA/AAIA1gBIAigBIAAAZIghgBIgzgBIg8AAIgIAYIAuAAIAsgBIAjgCIgCANIgBAOIAAAkQABATgEAJQgDAKgLAEQgMAGgYADQACgGgDgJgAg0gKIgTgBIgTABIgQAAIAAgWIAVABIAaAAIAWgBIAAAWIgPAAgAgQgKIABgZIAAgZIAAgcIhsAAIAAAsIgbAAIAAhFIAdACIArACIA/ABIAAgZIg5ABIgrABIAAgbIAyACIBEABIBFgBIAzgCIAAAbIgwgCIhAAAIAAAZIBCgBIAsgCIAdgCIAAA/IgcAAIAAgmIhvAAIAAAcIABAaIABAYgABXgNIgUAAIgUAAIgPABIAAgVIAVAAIAaAAIAWAAIAAAVIgOgBgABVgxIgTAAIgTAAIgPABIAAgWIAPABIATAAIATAAIANgBIAAAWIgNgBgAgygxIgTAAIgTAAIgPABIAAgVIAPAAIATABIATgBIAOAAIAAAVIgOgBg');
	this.shape_27.setTransform(18.2, 38.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f('#FFFFFF').s()
.p('AhpCkIADgkIAAggIAAhkQgGAUgGAQQgIAQgIANIgSAbIgHgRIgJgQQAMgMAKgPQAKgQAIgUQAJgWAIgeIgbACIgVACIAAgfIAXACIAeABIgBgwIgDgfIASACIARgBQAGgBAAACQABACgFAFQgDACAAACIgBAHIAAA7IAXgCIATgBIAAAfIgTgCIgXgBIAACbIABAgIADAkgAgqCOIgNgNQAfgOAYgPQAWgQAQgQQgKgQgHgPQgHgQgFgTQgFgRgDgZQgCgZgCgiIgKABIgKAAIAAgfIAjACIAyABIAeAAIAZgBIAWgCQgGAtgJAkQgIAkgMAcQgMAcgRAXQAPAQAWALQAWALAfAGQgGAIgGAKQgFALgEALQgZgLgXgOQgXgPgSgUQgUAUgXAQQgWARgXAMQgDgHgGgHgAAbg0QACAWAEAQQAEAPAGAPQAGAOAJAOQAQgaALgkQAMgkAFguIhNAAQAAAcACAUgAg5ATIgNgbIAWgKIAPAYIANAZIgcAOIgJgag');
	this.shape_28.setTransform(-17.8, 37.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f('#FFFFFF').s()
.p('AiSCXQgHgGgHgFQANgKAKgNQALgNAGgTQAHgTABgbQACgbgDgmIAOABIAYAAIAtABIBJAAIARgiIAHgTIAEgOIALAGIANAHIAKAEQAFACAAACQAAACgGABQgCABgDADIgKANIgRAaIAtAAIAdgBIAQgBIAAAbIgVgBIgfAAIgmgBIiYAAQAAAegDAXQgCAYgHASQgFASgLARQgLARgPATQgGgIgGgGgAg0g1IgLgVIAfgLIALAWIAJAWIghAKIgHgWgAByhfIgvgBIg7AAIg6AAIguABIgnACIAAgeIAlACIAuABIA2AAIgGgUIgIgSIAmgGIAGAVIAFAXIBBgBIAzgCIAAAeIgngCg');
	this.shape_29.setTransform(-54.2, 38.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f('#FFFFFF').s()
.p('AgsCcIgQgIQAUgRAUgXQAUgXAOgbQAHAHAJAEIAPAGQAEAAAAACQAAACgEACIgEADIgMALIgXAaIglAsIgNgJgABrB2QgPgWgTgTIAZgSQARATARAVIAhApIggAUQgLgVgPgVgAh5CJIgNgNQAHgGADgFQAEgGACgGIABgSIAAhrIgcAAIgTABIAAgiIASACIAWABIAXgBIATgCQgDAJgBANIgBAZIAABfIAVgTIARgTQACAKAEAHQADAIAFAFIgyAvQgHAHgGAIQgHAIgDAFIgNgPgAgSgGIABgvIAAghIgCghIgCgdIAWADIAcABIAjABIAhgBIAWgBIATgDIgBAbIgBAhIAAAgIABAxIABAmIgTgBIgWAAIghgBIgjABIgcABIgWABIADgmgAANABIBdAAIAAh1IhdAAgAhthzQgKgRgKgOIAdgSIAMAVIAOAVIANATIghASQgGgPgJgPg');
	this.shape_30.setTransform(-89.8, 37.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f('#FFFFFF').s()
.p('AiICbIgPgLQAggXAUggQAUghAFgmIgqABIggACIAAgfIAhABIAsABIABghIABgmIgfAAIgLAZIgJAVQgHgEgHgCQgIgCgIgBQAMgUAKgWQAJgWAFgVQAGgVAAgSQALAEALADIAVAEQAFAAAAACQAAABgFACIgEAFIgHANIgNAaIAlAAIAjAAIAbgCIAAAfIgWgBIgdgBIAAApIgBAeIAhgBIAZgCIAAAgIgagCIgjgBIgCAMIgDANIAZAWIAZAZIAUAVIgYAYIgNgSIgUgXIgWgYQgLAcgQAZQgRAagVASQgFgGgHgGgAAdCYIACgWIABgQIAAgQIAAi9IAAgUIgCgOIAfACIAeAAIAeAAIAfgCIgCAOIAAAUIAACuIABAeIABAfIggAAIAAgiIg7AAIAAAqgAA9BTIA7AAIAAiwIg7AAg');
	this.shape_31.setTransform(-126.4, 37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_31}, {t: this.shape_30}, {t: this.shape_29}, {t: this.shape_28}, {t: this.shape_27}, {t: this.shape_26}, {t: this.shape_25}, {t: this.shape_24}, {t: this.shape_23}, {t: this.shape_22}, {t: this.shape_21}, {t: this.shape_20}, {t: this.shape_19}, {t: this.shape_18}, {t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]})
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285, 14.8, 570.2, 237);


(lib.shareTips = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.guid_layer();
	this.instance.parent = this;
	this.instance.setTransform(320, 0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f('rgba(69,69,69,0.698)').s()
.p('Eg6lBeiMAAAi9DMB1LAAAMAAAC9Dg');
	this.shape.setTransform(375, 605);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shareTips, new cjs.Rectangle(0, 0, 750, 1210), null);


(lib.SHIPPER = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweens13('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(375, 1210, 1, 1, 0, 0, 0, 0, 605);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SHIPPER, new cjs.Rectangle(0, 0, 750, 1210), null);


(lib.shareBtn = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweens112('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(128.5, 61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shareBtn, new cjs.Rectangle(0, 0, 257, 123), null);


(lib.replayBtn = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweens111('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(128.5, 61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.replayBtn, new cjs.Rectangle(0, 0, 257, 123), null);


(lib.plane_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweens16('synched', 0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 44, y: -32}, 39)
.to({x: 0, y: 0}, 40)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5, -103.5, 185, 207);


(lib.ball_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.tweens15('synched', 0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 64}, 39)
.to({x: 0}, 40)
.wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75, -43, 150, 86);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_194 = function() {
		this.stop();
		if (p7Model) {
			p7Model.dispatchEvent('p7-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(194)
.call(this.frame_194)
.wait(1));

	// 图层 18
	this.shareTips = new lib.shareTips();
	this.shareTips.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.shareTips).wait(195));

	// plane.png
	this.instance = new lib.tweens16('synched', 0);
	this.instance.parent = this;
	this.instance.setTransform(60.4, 244.5, 0.652, 0.652, 0, 0, 0, 0.1, 0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.plane_mc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.5, 180.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance}]}, 31)
.to({state: [{t: this.instance}]}, 12)
.to({state: [{t: this.instance_1}]}, 1)
.wait(151));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31)
.to({_off: false}, 0)
.to({regX: 0, scaleX: 1, scaleY: 1, x: 124.5, y: 180.5, alpha: 1}, 12, cjs.Ease.get(1))
.to({_off: true}, 1)
.wait(151));

	// layer7
	this.instance_2 = new lib.tweens15('synched', 0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(636, 796, 0.413, 0.413);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.ball_mc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(636, 796);

	this.timeline.addTween(cjs.Tween.get({}).to({state: []})
.to({state: [{t: this.instance_2}]}, 22)
.to({state: [{t: this.instance_2}]}, 12)
.to({state: [{t: this.instance_3}]}, 1)
.wait(160));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22)
.to({_off: false}, 0)
.to({scaleX: 1, scaleY: 1, alpha: 1}, 12, cjs.Ease.get(1))
.to({_off: true}, 1)
.wait(160));

	// layer16
	this.replayBtn = new lib.replayBtn();
	this.replayBtn.parent = this;
	this.replayBtn.setTransform(553.5, 994.5, 1, 1, 0, 0, 0, 128.5, 61.5);
	this.replayBtn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.replayBtn).wait(195));

	// balance-2.png
	this.shareBtn = new lib.shareBtn();
	this.shareBtn.parent = this;
	this.shareBtn.setTransform(207.5, 994.5, 1, 1, 0, 0, 0, 128.5, 61.5);
	this.shareBtn.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.shareBtn).wait(195));

	// layer14
	this.instance_4 = new lib.tweens111('synched', 0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(553.5, 994.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(140)
.to({_off: false}, 0)
.to({alpha: 1}, 16, cjs.Ease.get(-1))
.wait(39));

	// balance-2.png
	this.instance_5 = new lib.tweens112('synched', 0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(207.5, 994.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140)
.to({_off: false}, 0)
.to({alpha: 1}, 16, cjs.Ease.get(-1))
.wait(39));

	// layer1
	this.instance_6 = new lib.tweens17('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(384, 490);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22)
.to({_off: false}, 0)
.to({alpha: 1}, 21)
.wait(152));

	// layer9
	this.instance_7 = new lib.tweens18('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(384, 490);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22)
.to({_off: false}, 0)
.to({alpha: 1}, 21)
.wait(152));

	// layer10
	this.instance_8 = new lib.tweens19('synched', 0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(384, 490);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22)
.to({_off: false}, 0)
.to({alpha: 1}, 21)
.wait(152));

	// layer11
	this.instance_9 = new lib.tweens110('synched', 0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(384, 490);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22)
.to({_off: false}, 0)
.to({alpha: 1}, 21)
.wait(152));

	// layer12 (mask)
	var mask = new cjs.Shape();

	mask._off = true;
	var mask_graphics_43 = new cjs.Graphics().p('EgkPAkQQvBvBAA1PQAA1OPBvBQPBvBVOAAQVPAAPBPBQPBPBAAVOQAAVPvBPBQvBPB1PAAQ1OAAvBvBg');

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0})
.wait(43)
.to({graphics: mask_graphics_43, x: 386.9, y: 484.1})
.wait(152));

	// layer13
	this.instance_10 = new lib.tweens11('synched', 0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(388.8, 1153.4);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43)
.to({_off: false}, 0)
.to({y: 353.4}, 151)
.wait(1));

	// layer6
	this.instance_11 = new lib.tweens14('synched', 0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(106, 1086.1, 0.609, 0.609, 0, 0, 0, 0, 0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13)
.to({_off: false}, 0)
.to({regY: 0, scaleX: 1, scaleY: 1, x: 174, y: 1006.5, alpha: 1}, 9, cjs.Ease.get(1))
.wait(173));

	// layer5
	this.instance_12 = new lib.tweens13('synched', 0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(375, 1210, 1, 1, 0, 0, 0, 0, 605);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13)
.to({_off: false}, 0)
.wait(182));

	// layer4
	this.instance_13 = new lib.SHIPPER();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375.2, 1210.1, 1, 1, -41.3, 0, 0, 375, 1210.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY: 1210, rotation: 0, x: 375, y: 1210, alpha: 1}, 12, cjs.Ease.get(1))
.wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-735, 0, 1485, 1467.3);


// stage content:
(lib.montagep7 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400, 480, 1470, 1462.3);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '7/images/montage_p7_atlas_.png', id: 'montage_p7_atlas_'}
	],
	preloads: []
};


})(lib7 = lib7 || {}, images7 = images7 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib7, images7, createjs, ss, AdobeAn;