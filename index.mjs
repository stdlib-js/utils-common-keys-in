// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys-in@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.1-esm/index.mjs";function e(){var e,n,o,i,d,m,l;if((e=arguments.length)<2)throw new Error(t("1S51b"));for(d=(n=r(arguments[0])).length,m=1;m<e;m++){for(o=arguments[m],i=0,l=0;l<d;l++)s(o,n[l])&&(n[i]=n[l],i+=1);d=i}return n.length=d,n}export{e as default};
//# sourceMappingURL=index.mjs.map
