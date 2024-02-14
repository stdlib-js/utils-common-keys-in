// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var n,r;for(r in n=[],t)n.push(r);return n}function n(t,n){return null!=t&&("symbol"==typeof n?n in Object(t):String(n)in Object(t))}function r(){var r,e,o,i,u,f,l;if((r=arguments.length)<2)throw new Error("insufficient arguments. Must provide at least two objects.");for(u=(e=t(arguments[0])).length,f=1;f<r;f++){for(o=arguments[f],i=0,l=0;l<u;l++)n(o,e[l])&&(e[i]=e[l],i+=1);u=i}return e.length=u,e}export{r as default};
//# sourceMappingURL=mod.js.map
