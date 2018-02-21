(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

lib.ssMetadata = [
		{name: 'montage_p6_atlas_', frames: [[752, 676, 674, 649], [1428, 815, 521, 655], [752, 1327, 664, 227], [1504, 0, 542, 813], [0, 1336, 750, 422], [752, 1556, 270, 323], [1418, 1472, 399, 323], [0, 0, 750, 1334], [752, 0, 750, 674]]}
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


(lib.EamesLoungeChair = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();


(lib.eggchair = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();


(lib.P6 = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();


(lib.pantonchair = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();


(lib.qianshitou = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();


(lib.ren = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();


(lib.ren2 = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();


(lib.shanzhopngjian = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();


(lib.xingkong = function() {
	this.spriteSheet = ss.montage_p6_atlas_;
	this.gotoAndStop(8);
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


(lib.sdafw2 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.ren2();
	this.instance.parent = this;
	this.instance.setTransform(-199.5, -161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-199.5, -161.5, 399, 323);


(lib.sadfdf1 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.ren();
	this.instance.parent = this;
	this.instance.setTransform(-135, -161.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135, -161.5, 270, 323);


(lib.panton = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.pantonchair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.panton, new cjs.Rectangle(0, 0, 542, 813), null);


(lib.egg = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.eggchair();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.egg, new cjs.Rectangle(0, 0, 521, 655), null);


(lib.dialogue_mc = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// dialog
	this.instance = new lib.P6();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f('#FFFFFF').s()
.p('AhrBoQAQgaAHgaQAGgaABgcIABg4IgBguIAOAIICBAAIAIgJIAPALIgIAGIABAmIgOAFIAAgLIiDAAIAAAkIAqAAQAAgbgBgGIAWAJIgJAHIAAARIAnAAIgBggIAVAJIgIAGIAAARIASAAIALgLIARAQIguAAIAAAeIAeAAIANgNIATATIhiAAQAKAVAOAPQAWgQANgQIANAPQgKAAgiAUQAOANATAFQATAGAWAAIAAAEQgRADgDALQgZgFgZgTQgZgTgLgmIgZAAIAAA/IAmgQIACADQgiAUgKAOIgMgOQAFgEgBgJIAAg5IgfAAIAAgGIAtAAIAAgeIgLAAIggAAIABgFIgBAAIAAAFIAAAAIgBAXIgBAHIAAAAIgBAGIABAAQgDARgFASQgIAYgWAagAgJAPIAnAAIAAgeIgnAAgAg/g9ICDAAIAAgdIiDAAgAhCAVIgBAAIABgGIAAAAIAAAGgAhCAPIABgHIABgXIAgAAIALAAIAAAegAhCAPgAhAgPgAhAgPIAAgFIABAAIgBAFgAhAgPg');
	this.shape.setTransform(348, 123.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f('#FFFFFF').s()
.p('AhIBrQA6gTAageQgUgbgMggIgIAAQgLAegSAbQgSAcgeAUIgCgDQAPgNAOgUQAPgUALgZQALgXAIgqIgrAAIgIAJIgMgNIAIgFQANgeADgQIASAKIgHAGIgOAiIArAAIAFggIADgeIAUAIIgHAHIgIAvIBdAAIANgNIASASIh9AAQgDASgEARIBPAAIAHgKIAQAOIgJAFQgRAfgVAZQAfAZAxAJIAAADQgOADgDAKQgsgQgbgZQgjAfg4AMgAATAxQASgUAPgeIhDAAQAPAdATAVgAA1hDQgIgOgYgVIACgCQAbALAKAIQAKAIgFAMQgCAGgDAAQgDAAgEgIg');
	this.shape_1.setTransform(322.2, 123.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f('#FFFFFF').s()
.p('AhtBtQAPgaAIgaQAIgbABgqQABgqgBghIAPAIIBQAAQgCAAgDgEQgEgKgNgOIACgDQAPAFAIAFQAIAFgFALQgDAFgDAAIAAAAIAAAAIA5AAIAOgOIAUAUIisAAIgBA2IBGAAIAAgWIgZAAQgMAAgLADIgIgJIA4AAIgBgYIAVAIIgIAGIAAAKIAoAAIAHgJIAPALIgHAHIAAATIAHAAIAMgMIASASIglAAIAAAeIgNAGIAAgJIgiAAQAJAYAMAPQAagRAJgSIAPAQIgJABQgUANgSAJQAYAaAhACIAAAEQgPACgDAKQgbgMgQgVQgRgVgIghIgDAAIAABDQACATgUAJQAAgLgYgIIAAgEQATACAFAAQAHgBgBgMIAAgXQgWANgSANQgTAOgCAGIgOgRQAMgDAUgKQAVgJAWgNIAAggIgaAAQgMAAgLADIgIgJIA5AAIAAgVIgnAAQgNAAgKADIgIgJIAAAAIAAAAIAAAAIgBAcQgCAdgKAXQgKAYgTAagAASAIIAqAAIAAgVIgqAAgAASgTIAqAAIAAgWIgqAAgAgYAwQgHgLgPgMIABgCQAVAFAHAGQAHAFgEAKQgCAFgCAAQgDAAgDgGgAhAgTIAAAAIAAAAIAAAAg');
	this.shape_2.setTransform(295.9, 123.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f('#FFFFFF').s()
.p('Ag9BqQAYgXAJgQQgKgQgMglIAEgBQANAdAJANQAFgOADgRIAFggIgRAAIgGAIIgMgMQAHgEAFgOIAPgmIgNAAIgIACIgHgIIAbAAIAIgIIAMAMIgIAGIgTAyIAQAAIAGgIIAMALIgHAFIgGAlQgEAVgHAOQARARAdAFQAeAFAygHIAAAEQgNADgCAKQg3ABgXgGQgVgHgQgRQgRAVgVAOgAhNAyIAAhKQgOAUgRAPIgBgDQAWgcAOgjQANgkADgRIATAMIgIAEQgOAjgKAUIALAFIgFAGIAABJIABA2IgPAHIABg6gAAqAtIgaAAIgLACIgHgIIAsAAIAAgXIgPAAIgNACIgHgIIAjAAIAAgWIgLAAIgMACIgHgIIAeAAIAAgXIgXAAIgNACIgHgIIArAAIAAgVIgMAAIgNACIgIgIIAhAAIgBgfIASAJIgGAHIAAAPIATAAIAJgIIAMAMIgHAEIAAATIACAAIAJgIIANAOIgYAAIABAfIgNAFIAAgHIgVAAIAAAWIASAAIAKgJIAPAPIgrAAIAAAXIAcAAIAJgJIAPAPIg0AAIAAAdIgMAGIABgjgAA1gSIAVAAIAAgXIgVAAgAA1gvIAVAAIAAgVIgVAAg');
	this.shape_3.setTransform(270.1, 123.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f('#FFFFFF').s()
.p('AhuBbIBOAAIAAibIgBgjIAXALIgJAIIAACrIAmAAIAAiaIgBgkIAYALIgKAHIAACGQAkg1AMgyIAXAQIgKAEQgiA/gbAbIAAAfIAsAAIAPgPIAVAVIjAAAQgMAAgKADgAhCAkQgEgXgcg7IAEgBQAqA6AEAOQACAPgJAKQgCACgCAAQgFAAgCgQg');
	this.shape_4.setTransform(244.1, 122.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f('#FFFFFF').s()
.p('Ag+gFQgWAWgVAOIgBgDQATgUASgXQATgYAJgXIAQAOIgIAFIgVAcIALAIIgGAGIAABlIgOAJIABhygAgFBWIAAgEIAhABQAIAAAAgLIAAheIgjAAQgLAAgLACIgJgIIBrAAIAPgNIAQATIg7AAIAABjQABAZgYAFQAAgNgfgIgAhjgpQAQgPAOgTQANgUAFgNIARANQgGACgRASQgQATgYASgAgOhUIBPAAIAOgNIAPASIhNAAQgNAAgJADg');
	this.shape_5.setTransform(218.1, 123.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f('#FFFFFF').s()
.p('AguBSIAAgFQAVAEAJAAQAKAAAAgNIAAhRIhFAAQgLAAgLADIgJgIIBkAAIAAhCIgnAAQgNAAgKADIgJgJIB9AAIAOgNIASATIhJAAIAABCIBAAAIAPgPIAVAUIhkAAIAABZQABAUgXAIQAAgOgfgIg');
	this.shape_6.setTransform(192, 123.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f('#FFFFFF').s()
.p('AAoBWIAAgEIAjACQAKABAAgNIAAiOIgBgmIAWAJIgIAHIAACtQACAVgXAHQAAgRglgGgAgnA+IAAg9QgbAqgkAaIgDgDQAxgxAQgvIgiAAQgMAAgKADIgJgJIBCAAIAAguIg2AFIAAgEQAkgFAYgGQAZgHAIgIIARASQgKAAghAFIAAAwIAZAAIALgMIASASIg2AAIAAAWQAnAPADAJQADAJgEAHQgFAHgIgNQgHgNgVgQIAABLIABAfIgPAGIABgvgAAmgRIgBg8IAUALIgHAHIAABMIABAeIgOAHIABhHg');
	this.shape_7.setTransform(165.7, 123.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f('#FFFFFF').s()
.p('AASBbIAAgEQAQADAIAAQAIAAAAgJIAAghIhVAAIAAA2IgOAIQABgQAAhpQgaAbgfATIgDgDQAagUAUgVQATgWASgiIg0AAQgMAAgKADIgJgJIBUAAQALgXADgPIAWANIgJAEIgLAVIBPAAIAQgQIAWAWIh2AAQgLATgLAPIBQAAIAHgKIAQANIgIAGIAABuQAAAPgVAHQABgLgagIgAgjArIBVAAIAAgfIhVAAgAgjAGIBVAAIAAggIhVAAg');
	this.shape_8.setTransform(140, 123.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f('#FFFFFF').s()
.p('AhsBnQAigHAUgLQAVgKAIgKQgLgLgPgZIADgCQARAVAMAJQAFgIADgKIAEgXIg0AAIAAAGIgOAGIAAguIAAgyIAPAIIA1AAIAAgbIhEAAQgMAAgKADIgIgJICuAAIANgNIATATIhgAAIAAAbIAyAAIAJgJIAOANIgJAFQAAA2ABARIgNAGIAAgKIg2AAQgEAggLARQAVAPAeAEQAdAEAmgEIAAADQgPAFgCAKQglgBgagGQgYgGgVgRQgNANgXAJQgWAIggAFgAAGAKIA1AAIAAgeIg0AAIgBAegAg7AKIA1AAIABgeIg2AAgAAHgZIA0AAIAAgdIg0AAgAg7gZIA2AAIAAgdIg2AAg');
	this.shape_9.setTransform(114.1, 123.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f('#FFFFFF').s()
.p('AhDBqQAbgSAIgVQAIgUAAg0IAUAJIgHAGQgBAogJAUQgJAVgiARgAAMBPIAAg8IgBgUIAWAIIgIAHIAAA9IABAaIgPAGIABgcgAhSBlQgLgFAFgSQAGgSgFgFQgGgGgOgDIAAgEIAVAAQADAAAGgIQAGgHAihTIADABQgfBagDAMQgCAMAAARIgBAYQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgDAAgFgCgABBBkQgNAAAAgRIAAg+IgCgYIAWAIIgIAHIAABDQgBALAJAAIANAAQAIAAABgKIABgdIAFAAQAAATABAIQACAHAHACQgGANgPAAgAhYgJQgEgMgQgTIABgBQAgAPAAAIQAAAJgEAGQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgDAAgCgIgABJgGIgHgOQgkADgVADQgUADgIAFIgKgRQAJgBAMgNQALgNALgUIgVAAQgMAAgLADIgJgIIA7AAQgCgPgPgOIABgDQAXAJAEAHQAEAHgIAJIAtAAIANgMIAQARIhSAAIAOALIgMACQgXAZgLAJIBOgBQgJgPgIgKIABgCQAWAOAJAKQAIAJgGAJQgEAGgDAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBgAhEg/QgEgNgOgQIABgDQAbANAEAIQAEAHgHAJQgCADgCAAQgDAAgEgIg');
	this.shape_10.setTransform(88.1, 123.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f('#FFFFFF').s()
.p('AhqBqQA6gSAmgiQgUgcgOgsIAEgBQARAoAUAZQATgZALgrIAWANIgJAEQgSAogTATQAoAlBBgDIAAADQgPAHgCAJQg/gJgfgjQgnAhg/AOgAhoAHQAYgPARgTQASgTAFgKIARAPIgKADQgpAlgdAKgABIgDQgHgLgLgKQgLgLgVgPIACgDQAgAPARAKQAQALgFANQgDAGgDAAQgDAAgDgFgAhrhDICwAAIAPgPIAUAUIi1AAQgLAAgKADgAgFhOQgEgMgNgQIADgDQAdAPAAAJQAAAIgGAGQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQgDAAgDgJg');
	this.shape_11.setTransform(556.2, 95.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f('#FFFFFF').s()
.p('AgrgHQgMAVgPASQgOATgTAOIgBgDQAVgYAOgYQAOgYAHgWIggAAIgIACIgIgHIA1AAIAAgrIgwAFIAAgEQAggEAVgHQAUgGAPgJIAMARQgYADgPADIAAAtIAWAAIAJgLIAQAQIgvAAIAAAVQAjALAEAIQADAKgDAGQgEAHgFgJQgFgKgZgTQAABWABATIgPAIQABgcAAhVgAAYgFIgChOIAOAJIAuAAIAJgJIAOANIgHAFQAABpABAbIgPAGIAAgUIgwAAIAAAWIgOAHIAChXgAAkAwIAwAAIAAh0IgwAAg');
	this.shape_12.setTransform(529.6, 95.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f('#FFFFFF').s()
.p('AAWBoQgZgBgPgEQgPgGgOgMQgPgNgCAAQgEAAgHAHQgIAHgNAUIgLgLQAQgOAUgOIAAhOIgJAAQgLAAgLADIgIgJIAkAAIALgKIAMANIgIAGIAABMQAKAIAPAIQAPAIAbACQAcABAbgBQAZgBAXgDIAAAEQgVAGACAJIhGgBgAAvAKIgmAAQgCArgsAYIgCgDQAkgbACglIgPAAQgNgBgKADIgIgJIAuAAIAAgzIgKAAQgMAAgLADIgIgIIApAAIgBgzIAUALIgJAHIAAAhIAmAAIgBgzIAVAKIgIAIIAAAhIAPAAIALgMIAQARIgqAAIAAAzIAWAAIALgJIAQAQIgxAAQAAA2ABANIgOAGIABhJgAAJADIAmAAIAAgzIgmAAgAhFhCQgDgOgNgPIACgBQASAJAGAHQAIAHgBAGQgCAHgFAEIgDABQgDAAgEgLg');
	this.shape_13.setTransform(504, 95.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f('#FFFFFF').s()
.p('ABAA6IgBilIAXALIgIAHIAACZIAAAlIgPAHIABgygAg0BRIAAgEQATAEAJAAQAJABAEgFQADgFAFgQQAEgRAEgdIhFAAIgHAJIgOgNQAIgDADgNQAEgOADgcIAOALIA1AAIAAgrIgyAAQgNAAgKACIgIgIIBRAAIAGgJIAPALIgHAGIAAAzIgOAFIAAgKIg3AAIgJApIBEAAIAIgJIAPAMIgJAGQgFAdgFAVQgGAUgHAIQgIAIgPADQABgNgZgJg');
	this.shape_14.setTransform(477.4, 95.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f('#FFFFFF').s()
.p('Ag/gEQgQAmgcAeIgCgDQAfgtAOg+IgeAAIgJACIgHgIIAvAAIgBg5IAWAJIgIAIIAAAoIAPAAIALgLIARARIgrAAIAAAZQAYAKAJAIQAIAHgFANQgEANgHgQQgIgOgRgPQAABkABATIgPAGIABhygAgtBpQAtgcAbglQgWgqgFhHIgLADIgIgIIBXAAIAGgLIASAOIgJAGQgOBHgbApQAjAlAiAHIAAADQgRACgDALQgkgWgUgeQgkAngqARgAAjAeQAXgmALhBIhBAAQAIBDAXAkg');
	this.shape_15.setTransform(452, 95.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f('#FFFFFF').s()
.p('AhnBZIAAgEQAXAEAGgBQAHAAgBgKIAAhHIgZATIgFAGIgLgQQAKgCAfgRIAAgtIgXAAIgJACIgHgIIAnAAIgBg2IAWAKIgJAIIAAAkIAKAAIAKgJIAPAPIgjAAIAAAnIAagPIACAEIgcAUIAABWQgBAQgTAHQACgLgdgJgAgwBqQArgRAcgcQgLgPgMgeIgIADIgIgIIBHAAIAIgKIAQAQQgIACgJAMIgXAfQASAPASAGQASAGARAAIAAADQgQADgDALQgigLgbgZQgjAcgqAKgAAeA2QANgQANgWIgzAAQAKAUAPASgAgjAEQgFgDAIgHQAHgHAFgUIAEAAIAAAKIBEAAQARgmAFgVIAVAOIgJADQgSAXgKATIAZAAIAHgJIAQAQQgPABgQAUIgCgCIAKgUIhjAAIgBAOQgBAFgGADIgGABQgDAAgCgCgAgFgnQgCgNgJgPIABgCQANAIAFAHQAHAIgCAFQgBAGgFAFIgCABQgDAAgCgKgAAcgqQgBgNgJgRIADgBQAMAJAFAHQAFAHgBAHQgCAHgGADIgCABQgEAAAAgKgAgYhQQAugGAZgFQAZgGAKgGIAPARQgRgBgnAFIhBAGg');
	this.shape_16.setTransform(425.9, 95.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f('#FFFFFF').s()
.p('AAoBWIAAgEIAjACQAKABAAgNIAAiOIgBgmIAWAJIgIAHIAACtQACAVgXAHQAAgRglgGgAgnA+IAAg9QgbAqgkAaIgDgDQAxgxAQgvIgiAAQgMAAgKADIgJgJIBCAAIAAguIg2AFIAAgEQAkgFAYgGQAZgHAIgIIARASQgKAAghAFIAAAwIAZAAIALgMIASASIg2AAIAAAWQAnAPADAJQADAJgEAHQgFAHgIgNQgHgNgVgQIAABLIABAfIgPAGIABgvgAAmgRIgBg8IAUALIgHAHIAABMIABAeIgOAHIABhHg');
	this.shape_17.setTransform(399.7, 95.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f('#FFFFFF').s()
.p('AAfBpQgIgIgRgMQgQgLgdgOIABgEQAgAKAUAJQAOgRAYggIhOAAIgGAIIgNgMQAFgEACgEQADgFAFgXIguAAQgNAAgKADIgIgJIBOAAQAEgPAEgZIggAAQgMAAgLADIgIgIIBAAAIAFgsIATAMIgFAEIgFAcIA2AAIAPgNIAQASIhWAAIgIAoIBaAAIAPgNIASATIh8AAQgEAVgFAOIBNAAIAIgKIASASQgMADgNAMIghAhQAVAIABAJQABAIgCAGQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgDAAgEgFg');
	this.shape_18.setTransform(373.9, 95.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f('#FFFFFF').s()
.p('AhrBqQAwgVAUgZQAVgYAHgZIhBAAQgMAAgKADIgJgIIBhAAQACgUAAgeIg3AAQgNAAgKADIgJgJIBpAAQAIgNAHgRQAGgRADgMIAWAPIgLAFQgQAYgMAPIAwAAIAOgNIATATIhdAAIgCAyIBHAAIAOgNIAUASIhdAAQAJAZAVAWQAWAXApALIAAADQgPABgGALQgZgNgWgWQgUgWgKgnIgIAAQgIAjgcAZQgbAZgtAOgAgghFQgGgTgQgQIACgDQASALAMAKQALAKgGANQgDAFgDAAQgEAAgFgLg');
	this.shape_19.setTransform(348.2, 95.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f('#FFFFFF').s()
.p('Ag0gBQgTApgfAhIgCgCQAlg3ANg4IgOAAQgMAAgLADIgIgIIAvAAIgBg+IAWAJIgJAIIAAAtIATAAIALgNIAPASIgtAAIAAAXQATAFAJAHQAIAGgFAMQgDAMgIgOQgHgNgNgLQAABbABAYIgOAGIABhtgAAKAGQAAhLgBgVIAPAJIA6AAIAHgKIARANIgJAGQAACUABAWIgOAHIAAgUIg8AAIAAARIgPAFQABgZAAhMgAAYBPIA8AAIAAg0Ig8AAgAAYAVIA8AAIAAgsIg8AAgAAYgcIA8AAIAAgvIg8AAg');
	this.shape_20.setTransform(321.6, 95.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f('#FFFFFF').s()
.p('AhoBrQAngIAbgPQAbgQAKgeIhKAAQgMAAgKACIgIgIIBpAAQADgSACgWQACgYAAgSIAXALIgHAGIgJBBIA7AAIANgOIAUAUIheAAIgFAPQAuAOAQAIQARAJgBAQQAAAQgRgRQgQgSgvgYQgMAYgbAMQgcAMgqAGgAgzAUQgHgOgRgQIACgDQAbAKAFAHQAHAIgGALQgCAFgDAAQgDAAgDgIgAgdgQQgGgPgOgOIABgDQAYAJAGAHQAGAIgFALQgDAFgCAAQgEAAgDgIgAhegcQgMgBALgNQALgNADgVIAEAAIAAALICaAAIAKgKIASAVQgQgBgVAYIgDgCIAOgaIicAAQACAPgDAJQgEAHgLAAIgBAAgAgBhMQgDgPgNgRIADgCQAOAHAKAJQAJAJgJAMQgEAFgDAAQgDAAgBgIg');
	this.shape_21.setTransform(296.2, 95.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f('#FFFFFF').s()
.p('AhnBrQASgKAXgSQAWgSAIgOIATAQQgIABgYASQgZARgfALgABIBlQgKgOgqghIAEgDQA2AZAGAJQAHAJgEAKQgCAFgDAAQgEAAgGgIgAhsAnIA/AAIAAhpIgUAAQgNAAgKACIgJgIIA0AAIgBgkIAVAKIgHAFIAAAVIA/AAIgBglIAWALIgIAHIAAATIAWAAIAOgNIASATIg2AAIAABpIAcAAIAQgQIAVAVIi7AAQgMAAgKADgAggAnIA/AAIAAgiIg/AAgAggAAIA/AAIAAgfIg/AAgAgggkIA/AAIAAgeIg/AAg');
	this.shape_22.setTransform(270.1, 95.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f('#FFFFFF').s()
.p('AgPAcQAFgEAFgGQAFgHADgLQgHAAgEgDQgEgDgBgEQgBgFABgEQAAgFAGgEQAGgEAHACQAJACACAHQADAIgEALQgDALgKALQgJALgHABIgDAAQgEAAAFgEg');
	this.shape_23.setTransform(236.9, 101.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f('#FFFFFF').s()
.p('AhqBqQAmgPAWgWQAVgWALgqIg5AAQgNAAgKADIgJgIIBaAAQAEgYABgXIgzAAQgNAZgNAPIgDgCQAVgmAFgpIAVAMQgIADgHAUIAwAAIAAgeIgBgZIAYALIgKAHIAAAlIAtAAIANgNIATATIhNAAIgEAvIBCAAIAPgOIAUATIhcAAQAVAqAaAVQAcAUAWADIAAADQgTADgDAKQgWgMgXgZQgWgZgMgoIgGAAQgKArgZAYQgYAXgtAOg');
	this.shape_24.setTransform(218.2, 95.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f('#FFFFFF').s()
.p('AgsBpQAfgKARgPQASgQAFgVQAFgWAAgXIAWAJIgIAGQgEAqgUAWQgVAWgsAJgAhdBXIAAgEIAaACQAJABgCgOIAAhDQgbATgDAIIgPgQQALgCAigUIAAgpIgaAAIgKACIgIgIIAsAAIgBg2IAYAKIgJAHIAAAlIAJAAIAKgKIAQAQIgjAAIAAAjIAbgQIACADIgdAWIAABXQgBAOgTAIQACgMgdgHgABcBkQgHgKgNgJQgNgJgTgKIABgCQAmAMANAGQAOAHAAAIQgBAIgDAEIgCABQgDAAgFgGgAgIAQIgBgqIAMAIIBNAAIAGgKIAQAMIgIAGIABBBIgNAFIAAhJIhPAAIAABIIgMAFIABgwgAABhDIgBgfIAMAIIA8AAIAGgIIAOAKIgIAGIABAmIgMAGIAAgIIg9AAIAAAFIgMAFIABgfgAAMg0IA9AAIAAghIg9AAg');
	this.shape_25.setTransform(191.6, 95.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f('#FFFFFF').s()
.p('AhZAAQAAhLgBgaIAPAJICQAAIAHgJIAOAKIgHAHIAAB/IABAyIgOAFIAAgTIiRAAIAAASIgPAGQABgZAAhOgAhLBJICRAAIAAifIiRAAgAgrgCIgBgwIAOAJIA1AAIAHgJIAOALIgHAGQAAAzABAPIgOAFIAAgRIg2AAIAAAPIgOAGIABgsgAgeAPIA2AAIAAgzIg2AAg');
	this.shape_26.setTransform(166.4, 95.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f('#FFFFFF').s()
.p('Ag6BrQA/giAOg5IgaAAIAAAIIgNAGIABhEQgIAIgLAIIgCgCQAXgaAMgWQAMgXAEgOIASANIgHACIgNAUIAuAAIAJgJIAQAQQgOAAgfAfIAnAAIAHgKIAOALIgHAGIABAxIgNAGIAAgLIgbAAIAABAQgCAQAPgBIARAAQAMABABgPIABgcIAFAAQAAANACALQACAMAIACQgFAOgUAAIgfAAQgTABACgWIAAhEIgFAAQgRBFhIAagAgHAKIAbAAQADgTABgWIgfAAgAAhAJIArAAIAAgoIgnAAIgEAogAgQgpIAMAFIAhAAIAbggIgyAAIgWAbgAhoBYIAAgEIAZADQAJAAAAgLIAAhDQgNAHgKAIIgDAFIgMgQQAFgBAhgNIAAgxIgXAAIgJACIgHgHIAnAAIgBg1IAWAMIgJAFIAAAkIAGAAIAKgKIAQAPIggAAIAAAtIAdgOIACADIgfASIAABSQAAAPgTAJQAAgNgbgHg');
	this.shape_27.setTransform(139.9, 95.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f('#FFFFFF').s()
.p('AhOBmQAbgFAVgKQAWgJARgRQATgQAJgcQAJgbgChfIAYAKIgIAHQgBA1gDAZQgCAYgHAUQAVAPAMAJQALAJAAAKQAAAKgFAGQgFAFgHgQQgGgQgXgcQgSAegeAQQgfAPgqAHgAhaA6QAFgGAAgKIAAhcIgBgvIAXAMIgIAHIAAB8QATgJAughIAEADIg0AsQgNAMgJAMgAgPgnQgEgRgRgZIACgCQAkAZAAALQAAAKgFAHQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgEAAgEgMg');
	this.shape_28.setTransform(114.8, 95.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f('#FFFFFF').s()
.p('AhrBoQARgTAMgdQAMgdADgYIAWAMQgFACgDAGQgEAGgDALQAaAdAYAIIAAhmIgpAAIAAAGIgNAFIABgtIgBgsIANAHIBfAAIAGgKIAPALIgHAIIABBFIgOAFIAAgMIgrAAIAAAsIAwAAIAPgNIASASIhRAAIAAA5QAtAHA5gFIAAADQgSAEgBAMQgcAAgegDQgegCgUgNQgVgMgTgaQgSAogcAVgAgvgfIBgAAIAAg7IhgAAg');
	this.shape_29.setTransform(88.2, 95.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f('#FFFFFF').s()
.p('AgHAtIAAhSQglA4g8AjIgCgEQAfgWAdgiQAdgiARguIhJAAQgMAAgLADIgIgIICxAAIAOgOIAUATIhZAAIgSAmIAPAJIgIAHIAABZIABArIgPAGIAAg9gABSAeQgKgUgtgnIACgDQA8AmAIALQAHAMgFAKQgCAEgDAAQgFAAgHgNg');
	this.shape_30.setTransform(556.1, 67.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f('#FFFFFF').s()
.p('AhIA1IAAhTQgRAcgSARIgCgCQAUgdANgkQAOgkAEgUIAUALQgEADgGAMIgRAjIAMAGIgHAHIAABeIABAsIgOAFIABg4gABPBmIgHgNQguAEgTADQgSADgMAGIgJgSQAIgBAMgOQAMgNAKgWIgoAAIgLACIgIgIICCAAIALgLIARARIhbAAIAMAJQgIADgLALIgcAcIBXgDQgIgNgPgPIADgCQAhAUAFAJQAFAJgGAIQgDAEgCAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBgAgbgDIBPAAIALgLIAQAPIhMAAQgLAAgLADgAgtgKQgHgEAGgFQAGgFAEgGQAEgGADgPIAEAAIAAAMIAuAAIAAgqIAAgaIAUAKIgHAHIAAAzIAxAAIAJgKIASAQQgIAAgGAFQgHAFgLAOIgDgCIAKgWIhuAAQgBARgGAFQgDADgEAAIgGgCgAArgrQAXgjAIgSIASAPQgIgBgLANIgbAcgAgJg3QgFgOgPgSIACgCQAXAPAEAHQAGAIgGAIQgBAEgCAAQgEAAgCgIg');
	this.shape_31.setTransform(529.9, 67.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f('#FFFFFF').s()
.p('AhtBrQAvgugDg/IgBg+IAUAJIgHAIIAAAuQAFBFg7AqgAAEA/IgBgwIANAIIA4AAIAHgIIAOAMIgIAFQAAAzABAPIgNAHIAAgPIg6AAIAAAMIgMAGIABgtgAAPBVIA6AAIAAg4Ig6AAgAgYBWQgHgLgIgKQgHgKgKgJIACgCQAmATACAKQACAJgDAIQgBABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgCAAgDgHgAhegaIgBhEIANAIIAwAAIAFgIIAQALIgJAGQAABZABAdIgMAFIAAh+IgxAAIAAB9IgNAGIABhNgAgSgFIBDAAQAOgfAEgXIAUANQgHABgIAMIgSAcIAcAAIANgNIAPASIhnAAQgHAAgKACgAATgUQgEgPgKgRIADgCQAYARABAIQACAIgHAIQgCADgCAAQgEAAgBgKgAgLhFIBVAAIANgMIAQASIhZAAQgHAAgJADgAAnhPQgEgMgNgPIACgDQAWAKAEAHQAFAHgGAKQgDAEgCAAQgDAAgCgIg');
	this.shape_32.setTransform(504, 67.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f('#FFFFFF').s()
.p('ABIBlIgGgQQhIAHgLANIgNgUQAKgBAKgVQAKgUAJgYQAIgWACgOIAVAOIgJAEQgaA3gRAcIBNgEQgOgXgLgNIACgDQAeAXAHALQAIAKgBAHQgBAGgGAFQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgDAAgBgEgAhOBNQAFgGgCgLIAAhQIgIAAQgIAAgKADIgIgJIAhAAIAHgIIAQALIgIAHIAABPIApglIADADQgqAygEANgAgvANQAXgZALgeQALgeACgPIAVAOIgIAEQgMAcgNAVQgNAUgSAQgAAxgqQgMghgBgdIASAHIgLAJQAUBHAvARIAAACQgPAAgIALQgZgWgNghgAhDhDQgCgOgNgQIADgCQARAMAGAFQAGAGAAAFQgBAGgGAGIgDABQgEAAgDgJg');
	this.shape_33.setTransform(478, 67.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f('#FFFFFF').s()
.p('Ag/BrQAzgvgCg9IgBhcIAOAKQAZgFAVgGQAUgFAOgKIAOARQgOABgYAEQgYAFggADIAAAqIBRAAIAOgNIAQASIg2AAIAAAoQAmAMAFAIQAGAIgCAIQgDAIgJgKQgKgKgZgNIACBRIgPAIIABheIgegMIABgCIAdAGIAAgmIgtAAIAAAoQgCA8g5AqgAhMBGQADgEABgIIAAhTIgLAAQgIAAgKADIgIgJIAjAAIAHgJIAPALIgIAHIAABRIAigaIACADIgYAZQgKALgGALgAhHhHQgDgNgMgQIADgCQAQAIAGAHQAIAGgBAHQgBAHgHAEIgCABQgEAAgDgJg');
	this.shape_34.setTransform(452, 67.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f('#FFFFFF').s()
.p('AgPAcQAFgEAFgGQAFgHADgLQgHAAgEgDQgEgDgBgEQgBgFABgEQAAgFAGgEQAGgEAHACQAJACACAHQADAIgEALQgDALgKALQgJALgHABIgDAAQgEAAAFgEg');
	this.shape_35.setTransform(418.9, 73.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f('#FFFFFF').s()
.p('AAxBaIAAgEIAbABQAJAAAAgJIAAieIgBgdIAVAKIgHAGIAACvQABATgTAJQgCgPgdgFgAgqBEIAAg6IggAAIAABDIgNAGIABgtIgBgoIAOAHIAfAAIAAgZIgeAAQgNAAgKADIgJgIIA+AAIAAgcIgiAAQgJAQgKAKIgCgBQAJgUAFgPQAEgPABgKIASAJQgGADgHARIAfAAIAAgOIgBgjIAUAJIgIAGIAAAiIAWAAIAKgLIAQARIgwAAIAAAcIAhAAIALgLIARAQIg9AAIAAAZIAfAAIAGgJIAOAKIgIAGIAAAuQACARgTAHQACgLgVgGIAAgEIAUACQAFAAAAgKIAAgrIggAAIAABBIACAcIgOAHIABgqgAAsgFIgBhEIATAJIgIAGIAABVIABAUIgMAHIABg7g');
	this.shape_36.setTransform(399.6, 67.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f('#FFFFFF').s()
.p('AhnBaIAAgEQAVAEAGgBQAHgBAAgNIAAhAQgaAPgEAGIgLgRQAMgDAdgMIAAgzIgUAAIgLABIgIgHIAnAAIgBg0IAXALIgJAHIAAAiIAIAAIAJgJIAPAPIggAAIAAAvIAdgNIACAEIgfASIAABRQgBAPgRAJQAAgLgdgJgAgnBUIBAAAIAAg+IgbAAIgKABIgIgHIBSAAIALgLIARARIgzAAIAAA+IApAAIANgMIASASIh2AAQgNAAgKADgAggAIQAggZAQgeIAQAPIgKADQgcAcgZAMgABPgCQgIgPgbgTIACgDQAcALALAHQAKAHAAAIQAAAGgEAGIgDABQgEAAgFgJgABNgkIAJgWIhfAAIAAAOQgBAFgFACQgGACgEgCQgGgCAIgKQAIgJADgRIADAAIAAALIBfAAIAHgJIAPAPQgMAAgQAXgAAhhLQgEgJgQgQIACgDQAUAIAHAFQAHAFgBAGQgCAHgEADIgCABQgDAAgEgHg');
	this.shape_37.setTransform(374, 67.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f('#FFFFFF').s()
.p('AhrBpQA7gOAlgcQgWgXgLgdIgNAAIgIACIgIgIIBqAAIAJgIIARAPIgLAEQgRAbgXAVQAoAbA8gEIAAAEQgTAEgCALQgxgGgogdQgtAeg7AHgAgCA5QAXgVANgZIhJAAQAPAaAWAUgABDAEIAMgbIieAAQACAUgFAEQgGAGgJgCQgKgCAKgKQAKgLAEgXIAEAAIAAANIAWAAIgEgQQgDgKgKgOIADgCQAOAIAKAKQAKAKgNAOIArAAIgFgWQgDgIgHgOIADgBQAMAHAJAMQAKAMgOAOIAfAAQAMgWAKgeIAVAOIgKAEIgaAiIAqAAIAIgLIATATQgRACgSAYgAhUhRQAqgDAsgHQAtgHARgJIAPATIhOAHQgjADgyABg');
	this.shape_38.setTransform(348.2, 67.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f('#FFFFFF').s()
.p('AgHAtIAAhSQglA4g8AjIgCgEQAfgWAdgiQAdgiARguIhJAAQgMAAgLADIgIgIICxAAIAOgOIAUATIhZAAIgSAmIAPAJIgIAHIAABZIABArIgPAGIAAg9gABSAeQgKgUgtgnIACgDQA8AmAIALQAHAMgFAKQgCAEgDAAQgFAAgHgNg');
	this.shape_39.setTransform(322.1, 67.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f('#FFFFFF').s()
.p('AhrBsQAXgcADgkQADgkgCgdIAQAJIBVAAQAQgiADgPIAWALIgJAEIgbAiIAwAAIAOgOIAUAUIitAAQABAggFAcQgGAcgdAdgAgagZQgEgPgMgRIACgDQASAMAHAKQAIAJgIAKQgDAEgCAAQgEAAgCgKgAhihGIBkAAQgBgQgRgVIADgDQATALAHAIQAIAJgOAMIBBAAIAPgPIAVAUIivAAQgNAAgKADg');
	this.shape_40.setTransform(295.8, 67.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f('#FFFFFF').s()
.p('AhUBlQgJgEAGgFQAGgFAFgIQAGgIAFgSIADAAQAAAigHAJQgEAGgGAAIgFgBgABPBdQgFgPgTgXIADgCQASALALAKQAKALgHAMQgDAFgDAAQgDAAgCgJgAgbBbQgBgPgJgUIACgCQATASAEAKQADALgJAGQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgEAAgCgKgAAXBaQgEgQgKgRIADgCQARAMAGAKQAGAKgHAKQgDADgDAAQgEAAgBgKgAhnAoIBiAAIAAgZIgxAAQgMAAgLADIgIgJIBQAAIAAgcIg3AAIAAAGIgOAGQABgvgBgtIAOAHIB8AAIAJgJIAOAOIgJAHIABA/IgPAHIAAgJIg5AAIAAAcIAuAAIAMgLIASARIhMAAIAAAZIA+AAIAOgPIAVAVIiwAAQgMAAgLADgAAHgYIA5AAIAAg+Ig5AAgAg8gYIA3AAIAAg+Ig3AAgAAPgfQATghACgPIATANIgHADIgeAigAgigrQgDgOgNgSIADgCQASALAGAJQAHAJgIAKQgCAEgDAAQgDAAgCgJg');
	this.shape_41.setTransform(270.1, 67.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f('#FFFFFF').s()
.p('AgoBaIAAgFQAaAFAFgBQAGgBAAgKIAAgvIgtAAQgMAAgKAEIgIgJIBLAAIgBgjIAXALIgJAHIAAARIAoAAIANgMIARARIhGAAIAAA5QAAAQgVAHQAAgNgdgIgAhnBnQAvghAPggIASAQQgHAAgUASQgTASgfAQgABHBdQgLgSgjgcIACgDQAsAXAKAIQAJAIgFAOQgBAGgDAAQgFAAgFgKgAhsALQBBgMAlgaQgSgTgOgcQgWAeghAXIgDgDQAXgRAQgbQARgbAEgQIAVANQgIABgIALIBGAAIAJgKIATAQIgLAGQgRAcgbAVQAnAXA6gCIAAAEQgSACgCALQg5gHgegYQgmAXhGAKgAgjhOQASAdATAPQAYgTANgbIhIAAg');
	this.shape_42.setTransform(244.1, 67.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f('#FFFFFF').s()
.p('AAWBlQgagBgRgHQgTgHgJgKQgKgKgFgCQgEgBgMALQgLALgDAHIgPgNQASgNAVgJIAAhMIgHAAQgNAAgKACIgJgIIAmAAIAGgKIARAMIgJAHIAABKQAIAKAPAIQAQAJAbABQAdACAagBQAZgBAUgCIAAAEQgTAFAAAKQgpAAgbgCgABFA/QgFgIgMgNQgLgOgJgHQgeAigoAQIgBgDQArgcATgcQgXgUgWgRIACgCQAgATARAMQAPgbAFgaIg+AAQgHAAgLADIgIgJIBwAAIAOgPIARAVIgoAAQgJAhgPAbQAYAUAKAKQALAKgDAKQgCAKgDABIgBAAQgCAAgFgJgAhJhEQgDgNgNgTIACgDQARAKAHAGQAHAHgBAIQgBAHgGAFIgDABQgEAAgCgJgAAVhHQgDgMgNgRIABgDQAVALAFAFQAFAGgDAGQgBAGgFAFIgCABQgDAAgCgIg');
	this.shape_43.setTransform(218.1, 67);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f('#FFFFFF').s()
.p('AgvBfQAFgEgBgHIAAgaQgZATgnAOIgBgDQAdgOAVgSQAWgRAKgOIg0AAQgIAAgKADIgJgJIBnAAQgBgQgOgOIABgCQAVAKAFAGQAEAHgJAJIBCAAIAPgOIASAUIhkAAQALATAOANQAcgPALgNIAOARIgJAAIgpAPQANAKAVAIQAVAIAWAAIAAAEQgTADgCALQghgKgVgTQgWgSgMghIgIAAIgXAXIAAApIAtgNIACADQgwAVgFAJgAhrAEQAegLAWgRQAVgSADgaIgqAAQgHAAgLADIgIgIIBFAAIABgjIAWAJIgIAHIgBATIBSAAIAPgPIASAUIhMAAIAAAeQAPgGALgHQALgHAIgGIAMAPQgIAAgLAFIgmAPIAAAHQAAAJALAAIAsAAQAJAAACgIQACgHACgSIAEAAIABAUQABAJAIABQgFAJgFACQgEACgIAAIg5AAQgSABABgOIAAgJQgQAGggAGIgBgCQAigLAPgHIAAgjIgcAAQgEAggZARQgYASgkAIgAAihRQgHgKgRgNIACgCQAQADALAFQAKAFgFALQgCAGgDAAQgCAAgDgFg');
	this.shape_44.setTransform(192, 67.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f('#FFFFFF').s()
.p('AgsBpQAmgLAigcQAigcAXgpIASAOIgKADQggArgjAWQgjAWgiAIgAhkBYIAAgEQAWADAHAAQAHgBAAgGIAAhHQgaANgFAFIgLgSQAJAAAhgKIAAgvIgYAAIgLACIgHgHIAqAAIgBg3IAWALIgIAGIAAAmIAMAAIAKgLIAQAQIgmAAIAAArIAjgNIABAEIgkASIAABQQAAAJgFAGQgFAFgLAFQgDgOgZgHgAAigEQAAhUgBgSIAYALIgKAHIAABdIABAbIgPAHIABgrgAgiAaQAQgWAKgYQAIgYADgRIAVANQgIAGgPAbQgPAagRASgABagWQgGgOgWgXIACgDQAZAQAJAIQAJAIAAAGQgBAGgFAFIgCABQgEAAgFgKg');
	this.shape_45.setTransform(165.8, 67.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f('#FFFFFF').s()
.p('AhqBoQAdgQARgOQARgPAIgLIAQAQIgJACQgoAcglANgABJBeQgOgSghgSIAAgEQAfALATALQASALgDAMQgBAFgEAAQgFAAgIgKgAhqAnIA2AAIAAhlIgBgsIANAJIBTAAIAHgIIAOALIgIAGIAAB/IAPAAIAPgPIAVAUIi1AAQgMAAgLADgAgoAnIBTAAIAAgdIhTAAgAgoAEIBTAAIAAgdIhTAAgAgogeIBTAAIAAgeIhTAAgAgohBIBTAAIAAgaIhTAAg');
	this.shape_46.setTransform(140.1, 67.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f('#FFFFFF').s()
.p('AgfBaIAAgEQAXAFAHgBQAHAAADgGQAEgGAAgLQABgLgCgWQgLAOgeAUQggAUgtAMIAAgEQAmgNAcgSQAbgTAVgaQgCgKgGgIQgHALgYAQQgXAQgrAOIgBgEQAdgLAagSQAagRAMgPIgLgNQgNAKgUAKQgVAKgcAIIgBgDQAhgNAUgMQATgOALgOIgnAAIgHACIgIgIIBxAAIALgLIAQARIhFAAIgOAOIAOAOQAKAJAFAJIAegUQAJgGAGgJIAPAQIgKABIgcALQAJAfARARQAQAQAbAFIAAADQgNABgGAKQgYgNgMgTQgMgTgHgdIgPAIIAHAWQADAMAAARQAAARgHALQgGAMgRAGQgDgMgagIgAhdgvQgGgEAJgHQAKgIADgUIAEAAIAAAMICZAAIAJgLIARARQgNAAgTAWIgCgCIAKgVIibAAQABAPgHAGQgFADgDAAQgDAAgDgCgAAAhSQgEgMgPgNIACgCQAUAGAGAGQAGAHgGAJQgDAFgCAAQgDAAgBgGg');
	this.shape_47.setTransform(113.9, 67.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f('#FFFFFF').s()
.p('AAPBXIAAgEQAgAEAKAAQAKgBAFgJQAFgJAIhiIhSAAQgMA6gfAiQggAighAOIgCgDQAjgXAagjQAagjAJgsIg4AAQgMAAgKADIgIgIIBXAAQAGghgBgpIAZANIgKAGIgGA3IBPAAIAIgNIARANIgIAIQgHBTgDARQgDAQgKAJQgKAIgNAEQgGgQghgHgAArAoQgJgPgegYIABgDQAsATAGAJQAGAJgFAKQgBAEgDAAQgDAAgGgJgAg0g5QgFgOgSgVIADgDQAgAUADAJQABAJgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQgEAAgDgJg');
	this.shape_48.setTransform(88.1, 67.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f('#FFFFFF').s()
.p('AhcBFIAAiHIgBglIAOAJICXAAIAIgKIAOAMIgHAGIAACaIABAdIgOAHIAAgQIiZAAIAAALIgOAGIABgkgAhPBTICZAAIAAisIiZAAgAhDBDQAZgPAPgVQAPgWACgjIgbAAQgMAAgLADIgIgIIA6AAIAAgXIgBgbIAVALIgIAHIAAAgIAhAAIAMgNIASASIg/AAIgCAXQAbAPAMALQAMAMABAIQABAKgGAGQgFAHgHgSQgIgTgbgdQgFAXgQASQgQARgcALg');
	this.shape_49.setTransform(556.2, 39.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f('#FFFFFF').s()
.p('AgPAcQAFgEAFgGQAFgHADgLQgHAAgEgDQgEgDgBgEQgBgFABgEQAAgFAGgEQAGgEAHACQAJACACAHQADAIgEALQgDALgKALQgJALgHABIgDAAQgEAAAFgEg');
	this.shape_50.setTransform(522.9, 45.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f('#FFFFFF').s()
.p('AhsBpQAngZAUgcQAVgdAGgrQAIgrgBgrIAbAMIgJAIQAFAyANAjQAOAhAXAYQAXAYAcAFIAAAFQgSABgIAMQgagSgQgYQgQgYgLgbQgKgagEgwQgDAtgKAdQgJAfgWAZQgXAZgnAQg');
	this.shape_51.setTransform(504.1, 39.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f('#FFFFFF').s()
.p('AhZBDIAAiEIgBgpIAOAIICRAAIAHgIIAPAMIgIAGIAACTIABAmIgOAGIAAgTIiSAAIAAARIgOAGIABgogAhMBOICSAAIAAiqIiSAAgAhHAwIA8AAIAAg9IgZAAIgNADIgJgIIAvAAIAAgsIghAAIgNADIgIgJIBkAAIALgLIARARIg+AAIAAAsIAaAAIALgLIARAQIg2AAIAAA9IAgAAIANgNIATATIhpAAQgMAAgKADgAAfAbQgEgMgSgRIADgDQAUAIAIAIQAIAHgGALQgCAFgDAAQgDAAgDgHg');
	this.shape_52.setTransform(478.5, 39.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f('#FFFFFF').s()
.p('AAUBkQgagCgSgGQgRgHgKgLQgLgKgEAAQgFAAgLALQgLALgEAHIgNgNQAPgNAYgKIAAhJIgGAAQgMAAgKADIgIgJIAjAAIAGgJIAOAKIgIAHIAABHQAJAJAPAKQAPAJApACQApACAygGIAAAEQgSAFAAAKQguAAgbgCgAAegBQAAg5gBgRIANAHIAmAAIAGgJIAOALIgHAGIAABYQAAAQgSAHQAAgOgWgDIAAgEIAXAAQAFAAgBgKIAAhSIgmAAIAACGIgNAIIABhRgAghAiQAFgDgBgKIAAgoIgBg+IAOAHQAfgQAIgLIAOAQQgHAAgMADIgiANIAABgIAmgTIACADIgWARQgQALgHALgAhIg9QgCgNgNgTIACgCQAQALAHAGQAIAHgCAHQgBAHgGAEIgDABQgEAAgCgJg');
	this.shape_53.setTransform(452, 38.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f('#FFFFFF').s()
.p('AgxBoQAogRASghQAUghADg7IAUAKIgGAFQAFAvAQAdQAQAdAbAJIAAADQgPAAgFAKQgZgZgKgaQgJgbgEgnQgHA4gXAaQgWAagmAMgAhtBVQAggjASgsQgSgcgWgZIABgDQAbAXARAWQAKgXAJgoIg4AAIgIACIgIgHIBHAAIALgMIAOAOIgKAGIgKAhQgFAQgJAUQATAYAGAOQAHAOgGAKQgGAKgHgSQgGgRgOgYQgGAOgNATQgNATgXATgAgQABQAQgcAHgeQAJgfADgSIAUALIgIAHIgMAjIA/AAIALgLIAQASQgJACgIAHQgJAIgJANIgDgCIANgdIhDAAQgMAbgSAXg');
	this.shape_54.setTransform(426, 39.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f('#FFFFFF').s()
.p('AgGAtIAAhSQgmA4g8AjIgCgEQAfgWAcgiQAegiARguIhJAAQgMAAgKADIgJgIICxAAIAOgOIAUATIhZAAIgSAmIAPAJIgJAHIAABZIABArIgOAGIABg9gABSAeQgKgUgugnIADgDQA8AmAHALQAIAMgGAKQgBAEgDAAQgFAAgHgNg');
	this.shape_55.setTransform(400.1, 39.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f('#FFFFFF').s()
.p('AhsBfIAvAAQAAh3gBgZIAOAJIAlAAIADgYIg5AAQgMAAgKADIgJgJIBZAAIADggIAVAMIgJAEIgDAQIA9AAIANgOIARAUIhcAAIgEAYIAwAAIAGgKIAPALIgHAHIAAB/IAOAAIAPgOIASAUIi7AAQgMgBgKADgAgwBfIBhAAIAAgeIhhAAgAgwA8IBhAAIAAgeIhhAAgAgwAZIBhAAIAAgbIhhAAgAgwgIIBhAAIAAgaIhhAAg');
	this.shape_56.setTransform(374.1, 38.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f('#FFFFFF').s()
.p('AhqADICtAAIATgOIAVAUIizAAQgPAAgKADg');
	this.shape_57.setTransform(348.1, 37.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f('#FFFFFF').s()
.p('AhrBoQAQgaAHgaQAGgaABgcIABg4IgBguIAOAIICBAAIAIgJIAPALIgIAGIABAmIgOAFIAAgLIiDAAIAAAkIAqAAQAAgbgBgGIAWAJIgJAHIAAARIAnAAIgBggIAVAJIgIAGIAAARIASAAIALgLIARAQIguAAIAAAeIAeAAIANgNIATATIhiAAQAKAVAOAPQAWgQANgQIANAPQgKAAgiAUQAOANATAFQATAGAWAAIAAAEQgRADgDALQgZgFgZgTQgZgTgLgmIgZAAIAAA/IAmgQIACADQgiAUgKAOIgMgOQAFgEgBgJIAAg5IgfAAIAAgGIAtAAIAAgeIgLAAIggAAIABgFIgBAAIAAAFIAAAAIgBAXIgBAHIAAAAIgBAGIABAAQgDARgFASQgIAYgWAagAgJAPIAnAAIAAgeIgnAAgAg/g9ICDAAIAAgdIiDAAgAhCAVgAhCAVgAhDAVIABgGIAAAAIAAAGgAhCAPIABgHIABgXIAgAAIALAAIAAAegAhCAPgAhAgPgAhAgPIAAAAIAAgFIABAAIgBAFg');
	this.shape_58.setTransform(322, 39.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f('#FFFFFF').s()
.p('AhpBoQAcgQARgOQARgPAIgLIAQAQIgKACQgnAcgkANgABJBeQgPgSgggSIAAgEQAgALASALQASALgDAMQgBAFgEAAQgFAAgIgKgAhpAnIA1AAIAAhlIgBgsIANAJIBSAAIAIgIIAOALIgIAGIAAB/IAPAAIAPgPIAUAUIi1AAQgMAAgKADgAgoAnIBTAAIAAgdIhTAAgAgoAEIBTAAIAAgdIhTAAgAgogeIBTAAIAAgeIhTAAgAgohBIBTAAIAAgaIhTAAg');
	this.shape_59.setTransform(296.1, 39.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f('#FFFFFF').s()
.p('AgfBaIAAgEQAXAFAHgBQAHAAADgGQAEgGAAgLQABgLgCgWQgLAOgeAUQggAUgtAMIAAgEQAmgNAcgSQAbgTAVgaQgCgKgGgIQgHALgYAQQgXAQgrAOIgBgEQAdgLAagSQAagRAMgPIgLgNQgNAKgUAKQgVAKgcAIIgBgDQAhgNAUgMQATgOALgOIgnAAIgHACIgIgIIBxAAIALgLIAQARIhFAAIgOAOIAOAOQAKAJAFAJIAegUQAJgGAGgJIAPAQIgKABIgcALQAJAfARARQAQAQAbAFIAAADQgNABgGAKQgYgNgMgTQgMgTgHgdIgPAIIAHAWQADAMAAARQAAARgHALQgGAMgRAGQgDgMgagIgAhdgvQgGgEAJgHQAKgIADgUIAEAAIAAAMICZAAIAJgLIARARQgNAAgTAWIgCgCIAKgVIibAAQABAPgHAGQgFADgDAAQgDAAgDgCgAAAhSQgEgMgPgNIACgCQAUAGAGAGQAGAHgGAJQgDAFgCAAQgDAAgBgGg');
	this.shape_60.setTransform(269.9, 39.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f('#FFFFFF').s()
.p('AhrBqQAhgOAWgVQAXgWAIgcQAKgbABgfIhKAAIgNACIgHgIIBeAAIgBhCIAWAKIgIAIIAAAwIBGAAIAOgPIAWAVIhqAAIAAAIQAKAhAZAjQAYAkAuAMIAAAEQgOAAgIAMQgegTgXghQgWghgJgiQgIA4gbAcQgcAbgtAPg');
	this.shape_61.setTransform(244.1, 39.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f('#FFFFFF').s()
.p('Ag5BLIAAgzQgRAKggALIgBgEQAigPAagRQAagPANgMQgTgWgOgbQgIALgLAKQgLAJgPAJIgBgDQAUgSAOgVQANgUAHgTIATANIgIAFIgIAJIBBAAIAIgJIAOANIgJAGQgTAhgUAWQANAJAaAJQAbAKAiAEIAAADQgRABgEAMQgOgDgbgMQgcgMgTgOQgYASgZAMIAGAEIBPAAIAHgIIAOANIgHAFIAAAoIABAdIgOAGIAAgSIhQAAIAAAOIgPAFIABgjgAgrBVIBQAAIAAg3IhQAAgAglhHQAQAaAVATQASgVAQgdIhDAAg');
	this.shape_62.setTransform(218.1, 39.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f('#FFFFFF').s()
.p('AhkgMIgBhcIANAJIAiAAIAIgJIAOANIgIAGIgbAyQARASAGAJQAGAKABALQAAAKgEAKQgGAJgTAHQgDgNgTgHIAABFIgNAHIABh1gAhYAZQAYAGAHgCQAHgCAAgQQAAgPgWgfIATg3IgjAAgAgQBTIAAgEQAaAEAFAAQAGAAAAgJIAAhnIggAAQgMAAgKADIgIgJIB0AAIALgLIAQARIhEAAIAABrQAAAIgDAHQgFAFgPAGQgCgNgZgIgAg5BQQATgYAMgYQAMgYADgOIATALIgIAGQgbAzgdAVgABQA9QgGgQgHgNIgTggIACgBQAgAeAIAOQAIAPgGAJQgCAEgDAAQgDAAgEgKgAgYhcIBUAAIAKgKIAPAQIhUAAQgGAAgLADg');
	this.shape_63.setTransform(192.9, 39.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f('#FFFFFF').s()
.p('AhZBDIAAiEIgBgpIAOAIICRAAIAHgIIAPAMIgIAGIAACTIABAmIgOAGIAAgTIiSAAIAAARIgOAGIABgogAhMBOICSAAIAAiqIiSAAgAhHAwIA8AAIAAg9IgZAAIgNADIgJgIIAvAAIAAgsIghAAIgNADIgIgJIBkAAIALgLIARARIg+AAIAAAsIAaAAIALgLIARAQIg2AAIAAA9IAgAAIANgNIATATIhpAAQgMAAgKADgAAfAbQgEgMgSgRIADgDQAUAIAIAIQAIAHgGALQgCAFgDAAQgDAAgDgHg');
	this.shape_64.setTransform(166.5, 39.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f('#FFFFFF').s()
.p('AABBFIAAgcIhOAAQgNAAgKADIgJgJIAqAAIgBg+IAQAJIA1AAIAAgvIg5AAQgKAOgKAMQgKALgSAPIgDgCQARgSAPgYQAPgYAKgdIAUANIgJAEIgOAWIB4AAIAPgOIAUAUIhXAAIAAAvIAnAAIAMgNIATASIhGAAIAAAwIA9AAIAOgOIAUAUIhfAAIAAAjIABAdIgQAGIABgqgAg0AjIA1AAIAAgwIg1AAg');
	this.shape_65.setTransform(140.1, 39.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f('#FFFFFF').s()
.p('AhrBlQAjgbALgdQALgdAAgqIgBhOIAQAJIBAAAIAIgJIAQANIgJAGIAACUQgBARAQABIASAAQAJABABgNIADgpIAEAAQABAYACAKQACAJAJAHQgIAOgQAAIggAAQgWABAAgYIAAieIhCAAQABBMgDAYQgEAagNAXQgNAVgmAYg');
	this.shape_66.setTransform(114.3, 40);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f('#FFFFFF').s()
.p('AAYBYIAAgEQAZACAIAAQAHgBgBgLIAAhTIgBgoIAXANIgJAHIAABsQABAWgYAIQgBgOgcgHgAgvBdIAAgEIARABQAHgBAAgKIAAgiIgtAAIAAA6IgNAGIABgkIAAhQIgBgiIANAIIAsAAIAGgJIAPALIgIAGIAABvQABAPgRAIQgCgMgSgEgAhEAnIAtAAIAAgeIgtAAgAhEADIAtAAIAAgeIgtAAgAAWATIgBg1IAUAJIgHAGIAAA6IABAdIgOAGIABg3gAhrg+IB5AAQAJgOAFgLQAFgKAEgLIATANQgHADgKAKQgLAKgIAKIA2AAIANgOIAUAUIi2AAQgMAAgLADgAgihJQgEgNgNgSIADgCQAbAQACAIQACAIgHAIQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAAgCgJg');
	this.shape_67.setTransform(88.1, 39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_67}, {t: this.shape_66}, {t: this.shape_65}, {t: this.shape_64}, {t: this.shape_63}, {t: this.shape_62}, {t: this.shape_61}, {t: this.shape_60}, {t: this.shape_59}, {t: this.shape_58}, {t: this.shape_57}, {t: this.shape_56}, {t: this.shape_55}, {t: this.shape_54}, {t: this.shape_53}, {t: this.shape_52}, {t: this.shape_51}, {t: this.shape_50}, {t: this.shape_49}, {t: this.shape_48}, {t: this.shape_47}, {t: this.shape_46}, {t: this.shape_45}, {t: this.shape_44}, {t: this.shape_43}, {t: this.shape_42}, {t: this.shape_41}, {t: this.shape_40}, {t: this.shape_39}, {t: this.shape_38}, {t: this.shape_37}, {t: this.shape_36}, {t: this.shape_35}, {t: this.shape_34}, {t: this.shape_33}, {t: this.shape_32}, {t: this.shape_31}, {t: this.shape_30}, {t: this.shape_29}, {t: this.shape_28}, {t: this.shape_27}, {t: this.shape_26}, {t: this.shape_25}, {t: this.shape_24}, {t: this.shape_23}, {t: this.shape_22}, {t: this.shape_21}, {t: this.shape_20}, {t: this.shape_19}, {t: this.shape_18}, {t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}, {t: this.instance}]})
.wait(1));

}).prototype = getMCSymbolPrototype(lib.dialogue_mc, new cjs.Rectangle(0, 0, 664, 227), null);


(lib.charles = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// 图层 1
	this.instance = new lib.EamesLoungeChair();
	this.instance.parent = this;
	this.instance.setTransform(-97, 0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.charles, new cjs.Rectangle(-97, 0, 674, 649), null);


(lib.scene = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

	// timeline functions:
	this.frame_299 = function() {
		this.stop();
		
		if (p6Model) {
		  p6Model.dispatchEvent('p6-complete');
		}
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299)
.call(this.frame_299)
.wait(1));

	// dialog
	this.instance = new lib.dialogue_mc();
	this.instance.parent = this;
	this.instance.setTransform(378.1, 1176.3, 1, 1, 0, 0, 0, 325.5, 100);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11)
.to({_off: false}, 0)
.to({x: 379.7, y: 1030.1, alpha: 1}, 12)
.wait(277));

	// qian shitou.png
	this.instance_1 = new lib.qianshitou();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0, 797);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300));

	// charles
	this.instance_2 = new lib.charles();
	this.instance_2.parent = this;
	this.instance_2.setTransform(263.1, 1101.9, 1, 1, -81.9, 0, 0, 256, 939);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(175)
.to({_off: false}, 0)
.to({rotation: 0, x: 421.1, y: 1220.1}, 11, cjs.Ease.get(1))
.wait(114));

	// panton
	this.instance_3 = new lib.panton();
	this.instance_3.parent = this;
	this.instance_3.setTransform(119.3, 1076.8, 1, 1, -80.7, 0, 0, 256, 939);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99)
.to({_off: false}, 0)
.to({rotation: 0, x: 417, y: 1107}, 12, cjs.Ease.get(1))
.wait(51)
.to({x: 432.2, y: 1102.1}, 0)
.to({rotation: 78.2, x: 584.9, y: 1005.9}, 12, cjs.Ease.get(-1))
.to({_off: true}, 1)
.wait(125));

	// egg
	this.instance_4 = new lib.egg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(203.1, 1286, 0.999, 0.999, -67.7, 0, 0, 256, 939);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23)
.to({_off: false}, 0)
.to({scaleX: 1, scaleY: 1, rotation: 0, x: 453.2, y: 1156}, 10)
.wait(50)
.to({rotation: 78.2, x: 492.5, y: 1036.7}, 10, cjs.Ease.get(-1))
.to({_off: true}, 1)
.wait(206));

	// shanzhopngjian.png
	this.instance_5 = new lib.shanzhopngjian();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0, -120);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300));

	// 图层 10
	this.instance_6 = new lib.sdafw2('synched', 0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(190.4, 862.5, 1, 1, -45, 0, 0, -0.1, 532);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(174)
.to({_off: false}, 0)
.to({regX: 0, regY: 532.1, rotation: 0, x: 190.5, y: 847.6}, 12, cjs.Ease.get(1))
.wait(114));

	// 图层 5
	this.instance_7 = new lib.sadfdf1('synched', 0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-135, 302.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX: 32, regY: 508.1, x: 208, y: 811.6}, 11, cjs.Ease.get(0.98))
.wait(163)
.to({y: 809.6}, 0)
.to({rotation: 65, x: 193, y: 824.6}, 12, cjs.Ease.get(1))
.to({_off: true}, 1)
.wait(113));

	// xingkong.png
	this.instance_8 = new lib.xingkong();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0, -60);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270, -120, 1020, 1339);


// stage content:
(lib.montagep6 = function(mode, startPosition, loop) {
	this.initialize(mode, startPosition, loop, {});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50, 360, 1020, 1339);
// library properties:
lib.properties = {
	width: 640,
	height: 960,
	fps: 24,
	color: '#000000',
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src: window.configs.perfixUrl + '6/images/montage_p6_atlas_.png', id: 'montage_p6_atlas_'}
	],
	preloads: []
};


})(lib6 = lib6 || {}, images6 = images6 || {}, createjs = createjs || {}, ss = ss || {}, AdobeAn = AdobeAn || {});
var lib6, images6, createjs, ss, AdobeAn;