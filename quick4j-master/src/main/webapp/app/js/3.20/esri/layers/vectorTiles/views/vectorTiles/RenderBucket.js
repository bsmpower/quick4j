// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/RenderBucket",["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper"],function(d,f,g,e){d=function(){return function(c){this.type=c}}();f.RenderBucket=d;e=function(c){function b(){var a=c.call(this,2)||this;a.triangleElementStart=0;a.triangleElementCount=0;a.joinStart=0;a.joinCount=0;return a}g(b,c);b.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.joinCount};return b}(d);f.LineRenderBucket=
e;e=function(c){function b(){var a=c.call(this,1)||this;a.triangleElementStart=0;a.triangleElementCount=0;a.outlineElementStart=0;a.outlineElementCount=0;return a}g(b,c);b.prototype.hasData=function(){return 0<this.triangleElementCount||0<this.outlineElementCount};return b}(d);f.FillRenderBucket=e;e=function(c){function b(){var a=c.call(this,3)||this;a.markerPerPageElementsMap=new Map;a.textElementStart=0;a.textElementCount=0;a.isSDF=!1;return a}g(b,c);b.prototype.hasData=function(){return 0<this.markerPerPageElementsMap.size||
0<this.textElementCount};return b}(d);f.SymbolRenderBucket=e;d=function(c){function b(){return c.call(this,0)||this}g(b,c);b.prototype.hasData=function(){return!0};return b}(d);f.BackgroundRenderBucket=d});