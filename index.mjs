// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys-in@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@esm/index.mjs";var r=t,s=e;var n=function(){var t,e,n,i,o,a,d;if((t=arguments.length)<2)throw new Error("insufficient input arguments. Must provide at least two objects.");for(o=(e=r(arguments[0])).length,a=1;a<t;a++){for(n=arguments[a],i=0,d=0;d<o;d++)s(n,e[d])&&(e[i]=e[d],i+=1);o=i}return e.length=o,e};export{n as default};
//# sourceMappingURL=index.mjs.map
