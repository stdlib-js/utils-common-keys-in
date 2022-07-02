// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t){var n,r;for(r in n=[],t)n.push(r);return n};var n=function(t,n){return null!=t&&("symbol"==typeof n?n in Object(t):String(n)in Object(t))};function r(){var r,e,o,i,u,f,a;if((r=arguments.length)<2)throw new Error("insufficient arguments. Must provide at least two objects.");for(u=(e=t(arguments[0])).length,f=1;f<r;f++){for(o=arguments[f],i=0,a=0;a<u;a++)n(o,e[a])&&(e[i]=e[a],i+=1);u=i}return e.length=u,e}export{r as default};
//# sourceMappingURL=mod.js.map
