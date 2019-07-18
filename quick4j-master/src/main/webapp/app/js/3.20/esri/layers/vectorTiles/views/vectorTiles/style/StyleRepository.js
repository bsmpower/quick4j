// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/style/StyleRepository",["require","exports","./StyleLayer"],function(k,l,f){return function(){function e(b,d){this.styleJSON=b;this.version=parseFloat(b.version);this.sprite=d?d.spriteUrl:b.sprite;this.glyphs=d?d.glyphsUrl:b.glyphs;this.layers=(b.layers||[]).map(e._create);this._identifyRefLayers()}e.prototype._identifyRefLayers=function(){for(var b=[],d=[],g=0,e=this.layers;g<e.length;g++){var c=e[g];if(1===c.type){var a=c.sourceLayer,a=a+("|"+JSON.stringify(c.minzoom)),
a=a+("|"+JSON.stringify(c.maxzoom)),a=a+("|"+JSON.stringify(c.filter));b.push({key:a,layer:c})}2===c.type&&(a=c.sourceLayer,a+="|"+JSON.stringify(c.minzoom),a+="|"+JSON.stringify(c.maxzoom),a+="|"+JSON.stringify(c.filter),a+="|"+JSON.stringify(c.layout["line-cap"]),a+="|"+JSON.stringify(c.layout["line-join"]),d.push({key:a,layer:c}))}this._assignRefLayers(b);this._assignRefLayers(d)};e.prototype._assignRefLayers=function(b){b.sort(function(a,b){return a.key<b.key?-1:a.key>b.key?1:0});for(var d,g,
e=b.length,c=0;c<e;c++){var a=b[c];if(a.key===d)a.layer.refLayerId=g;else if(d=a.key,g=a.layer.id,1===a.layer.type&&!a.layer.hasPaintProperty("fill-outline-color"))for(var f=c+1;f<e;f++){var h=b[f];if(h.key===d){if(h.layer.hasPaintProperty("fill-outline-color")){b[c]=h;b[f]=a;g=h.layer.id;break}}else break}}};e._create=function(b,d,e){d=1-1/(e.length+1)*(1+d);switch(b.type){case "background":return new f.StyleLayer(0,b,d);case "fill":return new f.StyleLayer(1,b,d);case "line":return new f.StyleLayer(2,
b,d);case "symbol":return new f.StyleLayer(3,b,d);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":throw Error("Unsupported vector tile circle layer");}throw Error("Unknown vector tile layer");};return e}()});