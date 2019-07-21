// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/TextShaping",["require","exports","./Placement"],function(v,w,u){return function(){function q(g,f,c,a,e,k,b,l){this._glyphItems=g;this._maxWidth=f;this._lineHeight=c;this._letterSpacing=a;this._offset=e;this._hAnchor=k;this._vAnchor=b;this._justify=l}q.prototype.getShaping=function(g,f){for(var c=this._glyphItems,a=this._letterSpacing,e=this._offset[0],k=this._offset[1],b=[],l=g.length,d=0;d<l;d++){var h=g.charCodeAt(d),r=c[h];r&&(b.push(new u.ShapedGlyph(h,
e,k)),e+=r.metrics.advance+a)}if(0<b.length){r=this._maxWidth;c=this._lineHeight;e=this._justify;k=b.length;h=l=a=0;if(0!==r)for(var m=0,q=0,d=0;d<k;d++){var n=b[d];n.x-=q;n.y=f?n.y-c*a:n.y+c*a;if(n.x>r&&0<m){for(var t=b[m+1].x,h=Math.max(t,h),p=m+1;p<=d;p++)b[p].y=f?b[p].y-c:b[p].y+c,b[p].x-=t;e&&this._applyJustification(b,l,m-1);l=m+1;m=0;q+=t;a++}32===n.glyph&&(m=d)}d=b[k-1];h=Math.max(h,d.x+this._glyphItems[d.glyph].metrics.advance);e&&this._applyJustification(b,l,k-1);d=(e-this._hAnchor)*h;e=
(-this._vAnchor*(a+1)+.5)*c;f&&a&&(e+=a*c);for(c=0;c<b.length;c++)a=b[c],a.x+=d,a.y+=e}return b};q.prototype._applyJustification=function(g,f,c){for(var a=g[c],a=(a.x+this._glyphItems[a.glyph].metrics.advance)*this._justify;f<=c;f++)g[f].x-=a};return q}()});