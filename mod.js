// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(){var n,t=arguments,r=t[0],e="https://stdlib.io/e/"+r+"?";for(n=1;n<t.length;n++)e+="&arg[]="+encodeURIComponent(t[n]);return e}function t(n){var t,r;for(r in t=[],n)t.push(r);return t}function r(n,t){return null!=n&&("symbol"==typeof t?t in Object(n):String(t)in Object(n))}function e(){var e,o,f,i,u,l,c;if((e=arguments.length)<2)throw new Error(n("1S51b,Ep"));for(u=(o=t(arguments[0])).length,l=1;l<e;l++){for(f=arguments[l],i=0,c=0;c<u;c++)r(f,o[c])&&(o[i]=o[c],i+=1);u=i}return o.length=u,o}export{e as default};
//# sourceMappingURL=mod.js.map
