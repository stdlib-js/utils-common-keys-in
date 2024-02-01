// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys-in@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.1.1-esm/index.mjs";function s(){var s,r,n,i,o,d,l;if((s=arguments.length)<2)throw new Error("insufficient arguments. Must provide at least two objects.");for(o=(r=t(arguments[0])).length,d=1;d<s;d++){for(n=arguments[d],i=0,l=0;l<o;l++)e(n,r[l])&&(r[i]=r[l],i+=1);o=i}return r.length=o,r}export{s as default};
//# sourceMappingURL=index.mjs.map
