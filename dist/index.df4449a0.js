function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},o={},i=e.parcelRequire3a11;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequire3a11=i),i.register("27Lyk",(function(e,n){var r,o;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>o),(t=>o=t));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.df4449a0.js","eyyUD":"icons.9801e6f1.svg"}'));var a,c,u={},s=function(t){return t&&t.Math==Math&&t};u=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof e&&e)||function(){return this}()||Function("return this")();var f,l;f=!(l=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!l((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!m.call({1:2},1);d=y?function(t){var e=g(this,t);return!!e&&e.enumerable}:m;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var w,_,E={},O={},S=Function.prototype,F=S.bind,j=S.call,L=p&&F.bind(j,j),x=(O=p?function(t){return t&&L(t)}:function(t){return t&&function(){return j.apply(t,arguments)}})({}.toString),k=O("".slice);_=function(t){return k(x(t),8,-1)};var T=u.Object,P=O("".split);E=l((function(){return!T("z").propertyIsEnumerable(0)}))?function(t){return"String"==_(t)?P(t,""):T(t)}:T;var M,$=u.TypeError;M=function(t){if(null==t)throw $("Can't call method on "+t);return t},w=function(t){return E(M(t))};var I,N,R,z;z=function(t){return"function"==typeof t},R=function(t){return"object"==typeof t?null!==t:z(t)};var C,D={},G=function(t){return z(t)?t:void 0};C=function(t,e){return arguments.length<2?G(u[t]):u[t]&&u[t][e]};var A={};A=O({}.isPrototypeOf);var q,U,H,Y={};Y=C("navigator","userAgent")||"";var B,V,W=u.process,J=u.Deno,K=W&&W.versions||J&&J.version,X=K&&K.v8;X&&(V=(B=X.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!V&&Y&&(!(B=Y.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=Y.match(/Chrome\/(\d+)/))&&(V=+B[1]),H=V,U=!!Object.getOwnPropertySymbols&&!l((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&H&&H<41})),q=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var Q=u.Object;D=q?function(t){return"symbol"==typeof t}:function(t){var e=C("Symbol");return z(e)&&A(e.prototype,Q(t))};var Z,tt,et,nt=u.String;et=function(t){try{return nt(t)}catch(t){return"Object"}};var rt=u.TypeError;tt=function(t){if(z(t))return t;throw rt(et(t)+" is not a function")},Z=function(t,e){var n=t[e];return null==n?void 0:tt(n)};var ot,it=u.TypeError;ot=function(t,e){var n,r;if("string"===e&&z(n=t.toString)&&!R(r=h(n,t)))return r;if(z(n=t.valueOf)&&!R(r=h(n,t)))return r;if("string"!==e&&z(n=t.toString)&&!R(r=h(n,t)))return r;throw it("Can't convert object to primitive value")};var at,ct;var ut,st={},ft=Object.defineProperty;ut=function(t,e){try{ft(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e};var lt=u["__core-js_shared__"]||ut("__core-js_shared__",{});st=lt,(ct=function(t,e){return st[t]||(st[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pt,ht={},dt=u.Object;pt=function(t){return dt(M(t))};var vt=O({}.hasOwnProperty);ht=Object.hasOwn||function(t,e){return vt(pt(t),e)};var mt,gt=0,yt=Math.random(),bt=O(1..toString);mt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+bt(++gt+yt,36)};var wt=ct("wks"),_t=u.Symbol,Et=_t&&_t.for,Ot=q?_t:_t&&_t.withoutSetter||mt;at=function(t){if(!ht(wt,t)||!U&&"string"!=typeof wt[t]){var e="Symbol."+t;U&&ht(_t,t)?wt[t]=_t[t]:wt[t]=q&&Et?Et(e):Ot(e)}return wt[t]};var St=u.TypeError,Ft=at("toPrimitive");N=function(t,e){if(!R(t)||D(t))return t;var n,r=Z(t,Ft);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!R(n)||D(n))return n;throw St("Can't convert object to primitive value")}return void 0===e&&(e="number"),ot(t,e)},I=function(t){var e=N(t,"string");return D(e)?e:e+""};var jt,Lt,xt=u.document,kt=R(xt)&&R(xt.createElement);Lt=function(t){return kt?xt.createElement(t):{}},jt=!f&&!l((function(){return 7!=Object.defineProperty(Lt("div"),"a",{get:function(){return 7}}).a}));var Tt,Pt,Mt=Object.getOwnPropertyDescriptor,$t=c=f?Mt:function(t,e){if(t=w(t),e=I(e),jt)try{return Mt(t,e)}catch(t){}if(ht(t,e))return b(!h(d,t,e),t[e])},It={};Pt=f&&l((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Nt,Rt=u.String,zt=u.TypeError;Nt=function(t){if(R(t))return t;throw zt(Rt(t)+" is not an object")};var Ct=u.TypeError,Dt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor;Tt=f?Pt?function(t,e,n){if(Nt(t),e=I(e),Nt(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=Gt(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Dt(t,e,n)}:Dt:function(t,e,n){if(Nt(t),e=I(e),Nt(n),jt)try{return Dt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Ct("Accessors not supported");return"value"in n&&(t[e]=n.value),t},It=f?function(t,e,n){return Tt(t,e,b(1,n))}:function(t,e,n){return t[e]=n,t};var At,qt={},Ut=O(Function.toString);z(st.inspectSource)||(st.inspectSource=function(t){return Ut(t)}),qt=st.inspectSource;var Ht,Yt,Bt=u.WeakMap;Yt=z(Bt)&&/native code/.test(qt(Bt));var Vt,Wt=ct("keys");Vt=function(t){return Wt[t]||(Wt[t]=mt(t))};var Jt={};Jt={};var Kt,Xt,Qt,Zt=u.TypeError,te=u.WeakMap;if(Yt||st.state){var ee=st.state||(st.state=new te),ne=O(ee.get),re=O(ee.has),oe=O(ee.set);Kt=function(t,e){if(re(ee,t))throw new Zt("Object already initialized");return e.facade=t,oe(ee,t,e),e},Xt=function(t){return ne(ee,t)||{}},Qt=function(t){return re(ee,t)}}else{var ie=Vt("state");Jt[ie]=!0,Kt=function(t,e){if(ht(t,ie))throw new Zt("Object already initialized");return e.facade=t,It(t,ie,e),e},Xt=function(t){return ht(t,ie)?t[ie]:{}},Qt=function(t){return ht(t,ie)}}Ht={set:Kt,get:Xt,has:Qt,enforce:function(t){return Qt(t)?Xt(t):Kt(t,{})},getterFor:function(t){return function(e){var n;if(!R(e)||(n=Xt(e)).type!==t)throw Zt("Incompatible receiver, "+t+" required");return n}}};var ae=Function.prototype,ce=f&&Object.getOwnPropertyDescriptor,ue=ht(ae,"name"),se={EXISTS:ue,PROPER:ue&&"something"===function(){}.name,CONFIGURABLE:ue&&(!f||f&&ce(ae,"name").configurable)}.CONFIGURABLE,fe=Ht.get,le=Ht.enforce,pe=String(String).split("String");(At=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:e;z(n)&&("Symbol("===String(s).slice(0,7)&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ht(n,"name")||se&&n.name!==s)&&It(n,"name",s),(o=le(n)).source||(o.source=pe.join("string"==typeof s?s:""))),t!==u?(i?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=n:It(t,e,n)):a?t[e]=n:ut(e,n)})(Function.prototype,"toString",(function(){return z(this)&&fe(this).source||qt(this)}));var he,de,ve,me,ge,ye={},be=Math.ceil,we=Math.floor;ge=function(t){var e=+t;return e!=e||0===e?0:(e>0?we:be)(e)};var _e=Math.max,Ee=Math.min;me=function(t,e){var n=ge(t);return n<0?_e(n+e,0):Ee(n,e)};var Oe,Se,Fe=Math.min;Se=function(t){return t>0?Fe(ge(t),9007199254740991):0},Oe=function(t){return Se(t.length)};var je=function(t){return function(e,n,r){var o,i=w(e),a=Oe(i),c=me(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Le={includes:je(!0),indexOf:je(!1)}.indexOf,xe=O([].push);ve=function(t,e){var n,r=w(t),o=0,i=[];for(n in r)!ht(Jt,n)&&ht(r,n)&&xe(i,n);for(;e.length>o;)ht(r,n=e[o++])&&(~Le(i,n)||xe(i,n));return i};var ke,Te=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");de=Object.getOwnPropertyNames||function(t){return ve(t,Te)},ke=Object.getOwnPropertySymbols;var Pe=O([].concat);ye=C("Reflect","ownKeys")||function(t){var e=de(Nt(t));return ke?Pe(e,ke(t)):e},he=function(t,e,n){for(var r=ye(e),o=Tt,i=c,a=0;a<r.length;a++){var u=r[a];ht(t,u)||n&&ht(n,u)||o(t,u,i(e,u))}};var Me={},$e=/#|\.prototype\./,Ie=function(t,e){var n=Re[Ne(t)];return n==Ce||n!=ze&&(z(e)?l(e):!!e)},Ne=Ie.normalize=function(t){return String(t).replace($e,".").toLowerCase()},Re=Ie.data={},ze=Ie.NATIVE="N",Ce=Ie.POLYFILL="P";Me=Ie,a=function(t,e){var n,r,o,i,a,c=t.target,s=t.global,f=t.stat;if(n=s?u:f?u[c]||ut(c,{}):(u[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=$t(n,r))&&a.value:n[r],!Me(s?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;he(i,o)}(t.sham||o&&o.sham)&&It(i,"sham",!0),At(n,r,i,t)}};var De,Ge={},Ae=Function.prototype,qe=Ae.apply,Ue=Ae.call;Ge="object"==typeof Reflect&&Reflect.apply||(p?Ue.bind(qe):function(){return Ue.apply(qe,arguments)});var He,Ye=O(O.bind);He=function(t,e){return tt(t),void 0===e?t:p?Ye(t,e):function(){return t.apply(e,arguments)}};var Be={};Be=C("document","documentElement");var Ve={};Ve=O([].slice);var We,Je=u.TypeError;We=function(t,e){if(t<e)throw Je("Not enough arguments");return t};var Ke;Ke=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var Xe;Xe="process"==_(u.process);var Qe,Ze,tn,en,nn=u.setImmediate,rn=u.clearImmediate,on=u.process,an=u.Dispatch,cn=u.Function,un=u.MessageChannel,sn=u.String,fn=0,ln={};try{Qe=u.location}catch(t){}var pn=function(t){if(ht(ln,t)){var e=ln[t];delete ln[t],e()}},hn=function(t){return function(){pn(t)}},dn=function(t){pn(t.data)},vn=function(t){u.postMessage(sn(t),Qe.protocol+"//"+Qe.host)};nn&&rn||(nn=function(t){We(arguments.length,1);var e=z(t)?t:cn(t),n=Ve(arguments,1);return ln[++fn]=function(){Ge(e,void 0,n)},Ze(fn),fn},rn=function(t){delete ln[t]},Xe?Ze=function(t){on.nextTick(hn(t))}:an&&an.now?Ze=function(t){an.now(hn(t))}:un&&!Ke?(en=(tn=new un).port2,tn.port1.onmessage=dn,Ze=He(en.postMessage,en)):u.addEventListener&&z(u.postMessage)&&!u.importScripts&&Qe&&"file:"!==Qe.protocol&&!l(vn)?(Ze=vn,u.addEventListener("message",dn,!1)):Ze="onreadystatechange"in Lt("script")?function(t){Be.appendChild(Lt("script")).onreadystatechange=function(){Be.removeChild(this),pn(t)}}:function(t){setTimeout(hn(t),0)}),De={set:nn,clear:rn},a({global:!0,bind:!0,enumerable:!0,forced:!u.setImmediate||!u.clearImmediate},{setImmediate:De.set,clearImmediate:De.clear});var mn=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=F(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=f(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(k([])));_&&_!==n&&r.call(_,i)&&(b=_);var E=y.prototype=m.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function F(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,F(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=y,u(E,"constructor",y),u(y,"constructor",g),g.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},O(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=mn}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=mn:Function("r","regeneratorRuntime = r")(mn)}const gn={recipe:{}},yn=async function(t){try{const e=await async function(t){try{const n=await Promise.race([fetch(t),(e=10,new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(t){throw t}var e}(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:n}=e.data;gn.recipe={cookingTime:n.cooking_time,id:n.id,image:n.image_url,ingredients:n.ingredients,publisher:n.publisher,servings:n.servings,sourceUrl:n.source_url,title:n.title}}catch(t){alert(t)}};var bn,wn,_n,En;bn=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString(),Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(_n=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},En=function(t,e){if(e){var n=Math.pow(10,e);return Math.round(t*n)/n}return Math.round(t)},function(){if(_n(this.denominator)){var t=En(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}_n(this.numerator)&&(t=En(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return r.forEach((function(t){var e=o.indexOf(t);e>=0&&(n.push(t),o.splice(e,1))})),0===n.length?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},wn=Fraction;var On=new class{#t=document.querySelector(".recipe");#e;render(t){this.#e=t;const e=this.#n();this.#r(),this.#t.insertAdjacentHTML("afterbegin",e)}renderSpinner(){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(bn)}#icon-loader"></use>\n        </svg>\n      </div> \n    `;this.#r(),this.#t.insertAdjacentHTML("afterbegin",t)}#n(){return`\n      <figure class="recipe__fig">\n            <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${this.#e.title}</span>\n            </h1>\n          </figure>\n    \n          <div class="recipe__details">\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(bn)}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${this.#e.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(bn)}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${this.#e.servings}</span>\n              <span class="recipe__info-text">servings</span>\n    \n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n(bn)}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n(bn)}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n    \n            <div class="recipe__user-generated">\n              <svg>\n                <use href="${n(bn)}#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round">\n              <svg class="">\n                <use href="${n(bn)}#icon-bookmark-fill"></use>\n              </svg>\n            </button>\n          </div>\n    \n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n    \n            ${this.#e.ingredients.map(this.#o).join("")}\n    \n            </ul>\n          </div>\n    \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this.#e.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this.#e.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n(bn)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n      `}#r(){this.#t.innerHTML=" "}#o(t){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(bn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${t.quantity?new wn(t.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.description}\n      </div>\n    </li>      \n  `}};const Sn=async function(){try{const t=window.location.hash.slice(1);if(!t)return;On.renderSpinner(),await yn(t),On.render(gn.recipe)}catch(t){alert(t)}};["hashchange","load"].forEach((t=>window.addEventListener(t,Sn)));
//# sourceMappingURL=index.df4449a0.js.map
