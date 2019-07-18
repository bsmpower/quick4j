// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/BackgroundRenderer","require exports ../../../core/libs/gl-matrix/mat3 ../../../core/libs/gl-matrix/vec4 ../../webgl/Program ../../webgl/VertexArrayObject ../../webgl/BufferObject ./vtShaderSnippets".split(" "),function(t,u,q,r,k,l,m,f){return function(){function d(){this._patternMatrix=q.create();this._color=r.create();this._initialized=!1}d.prototype.renderSolidColor=function(a,b){this._initialized||this._initialize(a);a.bindVAO(this._solidVertexArrayObject);
a.bindProgram(this._solidProgram);this._solidProgram.setUniformMatrix4fv("u_transformMatrix",b.u_matrix);this._solidProgram.setUniform2fv("u_normalized_origin",b.u_normalized_origin);this._solidProgram.setUniform1f("u_coord_range",b.u_coord_range||4096);this._solidProgram.setUniform1f("u_depth",b.u_depth||0);this._solidProgram.setUniform4fv("u_color",b.u_color||new Float32Array([1,0,0,1]));a.drawArrays(5,0,4);a.bindVAO()};d.prototype.render=function(a,b,c,e,n,g,h,f){this._initialized||this._initialize(a);
var d=n.getPaintValue("background-color",b);f*=n.getPaintValue("background-opacity",b);var k=n.getPaintValue("background-pattern",b),l=void 0!==k,p=d[3]*f,m=l||1>p;if(!m||0!==c)if(m||1!==c){if(l){a.bindVAO(this._patternVertexArrayObject);a.bindProgram(this._patternProgram);c=g.getMosaicItemPosition(k,!0);if(!c)return;b=e.coordRange/512/Math.pow(2,Math.floor(b)-e.key.level)/h;q.identity(this._patternMatrix);h=1/(c.size[1]*b);this._patternMatrix[0]=1/(c.size[0]*b);this._patternMatrix[4]=h;g.bind(a,
9729,0);this._patternProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform);this._patternProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord);this._patternProgram.setUniform1f("u_depth",n.z);this._patternProgram.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix);this._patternProgram.setUniform1f("u_opacity",f);this._patternProgram.setUniform2f("u_pattern_tl",c.tl[0],c.tl[1]);this._patternProgram.setUniform2f("u_pattern_br",c.br[0],c.br[1]);this._patternProgram.setUniform1i("u_texture",
0)}else this._color[0]=p*d[0],this._color[1]=p*d[1],this._color[2]=p*d[2],this._color[3]=p,a.bindVAO(this._solidVertexArrayObject),a.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",e.coordRange),this._solidProgram.setUniform1f("u_depth",n.z||0),this._solidProgram.setUniform4fv("u_color",this._color);
a.drawArrays(5,0,4);a.bindVAO()}};d.prototype._initialize=function(a){if(this._initialized)return!0;var b={a_pos:0},c=new k(a,f.backgroundVS,f.backgroundFS,b);if(!c)return!1;var e=new k(a,f.patternFillShaderVS,f.patternFillShaderFS,b);if(!e)return!1;var d={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},g=new Int8Array([0,0,1,0,0,1,1,1]),h=m.createVertex(a,35044,g),h=new l(a,b,d,{geometry:h}),g=new Int16Array([0,0,4096,0,0,4096,4096,4096]),g=m.createVertex(a,
35044,g);a=new l(a,b,{geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:g});this._solidProgram=c;this._patternProgram=e;this._vertexAttributes=d;this._solidVertexArrayObject=h;this._patternVertexArrayObject=a;return this._initialized=!0};return d}()});