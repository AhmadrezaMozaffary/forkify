function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,n){var r,i;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.531ad9b5.js","eyyUD":"icons.9801e6f1.svg"}'));var a,c,u={},s=function(t){return t&&t.Math==Math&&t};u=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var v,d=Function.prototype.call;h=p?d.bind(d):function(){return d.apply(d,arguments)};var g={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!g.call({1:2},1);v=m?function(t){var e=y(this,t);return!!e&&e.enumerable}:g;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var w,_,O={},E={},S=Function.prototype,j=S.bind,L=S.call,x=p&&j.bind(L,L),k=(E=p?function(t){return t&&x(t)}:function(t){return t&&function(){return L.apply(t,arguments)}})({}.toString),T=E("".slice);_=function(t){return T(k(t),8,-1)};var P=u.Object,$=E("".split);O=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==_(t)?$(t,""):P(t)}:P;var F,I=u.TypeError;F=function(t){if(null==t)throw I("Can't call method on "+t);return t},w=function(t){return O(F(t))};var M,N,R,C;C=function(t){return"function"==typeof t},R=function(t){return"object"==typeof t?null!==t:C(t)};var D,G={},A=function(t){return C(t)?t:void 0};D=function(t,e){return arguments.length<2?A(u[t]):u[t]&&u[t][e]};var U={};U=E({}.isPrototypeOf);var H,q,z,Y={};Y=D("navigator","userAgent")||"";var B,V,W=u.process,J=u.Deno,K=W&&W.versions||J&&J.version,X=K&&K.v8;X&&(V=(B=X.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!V&&Y&&(!(B=Y.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=Y.match(/Chrome\/(\d+)/))&&(V=+B[1]),z=V,q=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&z&&z<41})),H=q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var Q=u.Object;G=H?function(t){return"symbol"==typeof t}:function(t){var e=D("Symbol");return C(e)&&U(e.prototype,Q(t))};var Z,tt,et,nt=u.String;et=function(t){try{return nt(t)}catch(t){return"Object"}};var rt=u.TypeError;tt=function(t){if(C(t))return t;throw rt(et(t)+" is not a function")},Z=function(t,e){var n=t[e];return null==n?void 0:tt(n)};var it,ot=u.TypeError;it=function(t,e){var n,r;if("string"===e&&C(n=t.toString)&&!R(r=h(n,t)))return r;if(C(n=t.valueOf)&&!R(r=h(n,t)))return r;if("string"!==e&&C(n=t.toString)&&!R(r=h(n,t)))return r;throw ot("Can't convert object to primitive value")};var at,ct;var ut,st={},lt=Object.defineProperty;ut=function(t,e){try{lt(u,t,{value:e,configurable:!0,writable:!0})}catch(n){u[t]=e}return e};var ft=u["__core-js_shared__"]||ut("__core-js_shared__",{});st=ft,(ct=function(t,e){return st[t]||(st[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pt,ht={},vt=u.Object;pt=function(t){return vt(F(t))};var dt=E({}.hasOwnProperty);ht=Object.hasOwn||function(t,e){return dt(pt(t),e)};var gt,yt=0,mt=Math.random(),bt=E(1..toString);gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+bt(++yt+mt,36)};var wt=ct("wks"),_t=u.Symbol,Ot=_t&&_t.for,Et=H?_t:_t&&_t.withoutSetter||gt;at=function(t){if(!ht(wt,t)||!q&&"string"!=typeof wt[t]){var e="Symbol."+t;q&&ht(_t,t)?wt[t]=_t[t]:wt[t]=H&&Ot?Ot(e):Et(e)}return wt[t]};var St=u.TypeError,jt=at("toPrimitive");N=function(t,e){if(!R(t)||G(t))return t;var n,r=Z(t,jt);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!R(n)||G(n))return n;throw St("Can't convert object to primitive value")}return void 0===e&&(e="number"),it(t,e)},M=function(t){var e=N(t,"string");return G(e)?e:e+""};var Lt,xt,kt=u.document,Tt=R(kt)&&R(kt.createElement);xt=function(t){return Tt?kt.createElement(t):{}},Lt=!l&&!f((function(){return 7!=Object.defineProperty(xt("div"),"a",{get:function(){return 7}}).a}));var Pt,$t,Ft=Object.getOwnPropertyDescriptor,It=c=l?Ft:function(t,e){if(t=w(t),e=M(e),Lt)try{return Ft(t,e)}catch(t){}if(ht(t,e))return b(!h(v,t,e),t[e])},Mt={};$t=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Nt,Rt=u.String,Ct=u.TypeError;Nt=function(t){if(R(t))return t;throw Ct(Rt(t)+" is not an object")};var Dt=u.TypeError,Gt=Object.defineProperty,At=Object.getOwnPropertyDescriptor;Pt=l?$t?function(t,e,n){if(Nt(t),e=M(e),Nt(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=At(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Gt(t,e,n)}:Gt:function(t,e,n){if(Nt(t),e=M(e),Nt(n),Lt)try{return Gt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Dt("Accessors not supported");return"value"in n&&(t[e]=n.value),t},Mt=l?function(t,e,n){return Pt(t,e,b(1,n))}:function(t,e,n){return t[e]=n,t};var Ut,Ht={},qt=E(Function.toString);C(st.inspectSource)||(st.inspectSource=function(t){return qt(t)}),Ht=st.inspectSource;var zt,Yt,Bt=u.WeakMap;Yt=C(Bt)&&/native code/.test(Ht(Bt));var Vt,Wt=ct("keys");Vt=function(t){return Wt[t]||(Wt[t]=gt(t))};var Jt={};Jt={};var Kt,Xt,Qt,Zt=u.TypeError,te=u.WeakMap;if(Yt||st.state){var ee=st.state||(st.state=new te),ne=E(ee.get),re=E(ee.has),ie=E(ee.set);Kt=function(t,e){if(re(ee,t))throw new Zt("Object already initialized");return e.facade=t,ie(ee,t,e),e},Xt=function(t){return ne(ee,t)||{}},Qt=function(t){return re(ee,t)}}else{var oe=Vt("state");Jt[oe]=!0,Kt=function(t,e){if(ht(t,oe))throw new Zt("Object already initialized");return e.facade=t,Mt(t,oe,e),e},Xt=function(t){return ht(t,oe)?t[oe]:{}},Qt=function(t){return ht(t,oe)}}zt={set:Kt,get:Xt,has:Qt,enforce:function(t){return Qt(t)?Xt(t):Kt(t,{})},getterFor:function(t){return function(e){var n;if(!R(e)||(n=Xt(e)).type!==t)throw Zt("Incompatible receiver, "+t+" required");return n}}};var ae=Function.prototype,ce=l&&Object.getOwnPropertyDescriptor,ue=ht(ae,"name"),se={EXISTS:ue,PROPER:ue&&"something"===function(){}.name,CONFIGURABLE:ue&&(!l||l&&ce(ae,"name").configurable)}.CONFIGURABLE,le=zt.get,fe=zt.enforce,pe=String(String).split("String");(Ut=function(t,e,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:e;C(n)&&("Symbol("===String(s).slice(0,7)&&(s="["+String(s).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ht(n,"name")||se&&n.name!==s)&&Mt(n,"name",s),(i=fe(n)).source||(i.source=pe.join("string"==typeof s?s:""))),t!==u?(o?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Mt(t,e,n)):a?t[e]=n:ut(e,n)})(Function.prototype,"toString",(function(){return C(this)&&le(this).source||Ht(this)}));var he,ve,de,ge,ye,me={},be=Math.ceil,we=Math.floor;ye=function(t){var e=+t;return e!=e||0===e?0:(e>0?we:be)(e)};var _e=Math.max,Oe=Math.min;ge=function(t,e){var n=ye(t);return n<0?_e(n+e,0):Oe(n,e)};var Ee,Se,je=Math.min;Se=function(t){return t>0?je(ye(t),9007199254740991):0},Ee=function(t){return Se(t.length)};var Le=function(t){return function(e,n,r){var i,o=w(e),a=Ee(o),c=ge(r,a);if(t&&n!=n){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},xe={includes:Le(!0),indexOf:Le(!1)}.indexOf,ke=E([].push);de=function(t,e){var n,r=w(t),i=0,o=[];for(n in r)!ht(Jt,n)&&ht(r,n)&&ke(o,n);for(;e.length>i;)ht(r,n=e[i++])&&(~xe(o,n)||ke(o,n));return o};var Te,Pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");ve=Object.getOwnPropertyNames||function(t){return de(t,Pe)},Te=Object.getOwnPropertySymbols;var $e=E([].concat);me=D("Reflect","ownKeys")||function(t){var e=ve(Nt(t));return Te?$e(e,Te(t)):e},he=function(t,e,n){for(var r=me(e),i=Pt,o=c,a=0;a<r.length;a++){var u=r[a];ht(t,u)||n&&ht(n,u)||i(t,u,o(e,u))}};var Fe={},Ie=/#|\.prototype\./,Me=function(t,e){var n=Re[Ne(t)];return n==De||n!=Ce&&(C(e)?f(e):!!e)},Ne=Me.normalize=function(t){return String(t).replace(Ie,".").toLowerCase()},Re=Me.data={},Ce=Me.NATIVE="N",De=Me.POLYFILL="P";Fe=Me,a=function(t,e){var n,r,i,o,a,c=t.target,s=t.global,l=t.stat;if(n=s?u:l?u[c]||ut(c,{}):(u[c]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(a=It(n,r))&&a.value:n[r],!Fe(s?r:c+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;he(o,i)}(t.sham||i&&i.sham)&&Mt(o,"sham",!0),Ut(n,r,o,t)}};var Ge,Ae={},Ue=Function.prototype,He=Ue.apply,qe=Ue.call;Ae="object"==typeof Reflect&&Reflect.apply||(p?qe.bind(He):function(){return qe.apply(He,arguments)});var ze,Ye=E(E.bind);ze=function(t,e){return tt(t),void 0===e?t:p?Ye(t,e):function(){return t.apply(e,arguments)}};var Be={};Be=D("document","documentElement");var Ve={};Ve=E([].slice);var We,Je=u.TypeError;We=function(t,e){if(t<e)throw Je("Not enough arguments");return t};var Ke;Ke=/(?:ipad|iphone|ipod).*applewebkit/i.test(Y);var Xe;Xe="process"==_(u.process);var Qe,Ze,tn,en,nn=u.setImmediate,rn=u.clearImmediate,on=u.process,an=u.Dispatch,cn=u.Function,un=u.MessageChannel,sn=u.String,ln=0,fn={};try{Qe=u.location}catch(t){}var pn=function(t){if(ht(fn,t)){var e=fn[t];delete fn[t],e()}},hn=function(t){return function(){pn(t)}},vn=function(t){pn(t.data)},dn=function(t){u.postMessage(sn(t),Qe.protocol+"//"+Qe.host)};nn&&rn||(nn=function(t){We(arguments.length,1);var e=C(t)?t:cn(t),n=Ve(arguments,1);return fn[++ln]=function(){Ae(e,void 0,n)},Ze(ln),ln},rn=function(t){delete fn[t]},Xe?Ze=function(t){on.nextTick(hn(t))}:an&&an.now?Ze=function(t){an.now(hn(t))}:un&&!Ke?(en=(tn=new un).port2,tn.port1.onmessage=vn,Ze=ze(en.postMessage,en)):u.addEventListener&&C(u.postMessage)&&!u.importScripts&&Qe&&"file:"!==Qe.protocol&&!f(dn)?(Ze=dn,u.addEventListener("message",vn,!1)):Ze="onreadystatechange"in xt("script")?function(t){Be.appendChild(xt("script")).onreadystatechange=function(){Be.removeChild(this),pn(t)}}:function(t){setTimeout(hn(t),0)}),Ge={set:nn,clear:rn},a({global:!0,bind:!0,enumerable:!0,forced:!u.setImmediate||!u.clearImmediate},{setImmediate:Ge.set,clearImmediate:Ge.clear});var gn=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?v:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};u(b,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(T([])));_&&_!==n&&r.call(_,o)&&(b=_);var O=m.prototype=g.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=m,u(O,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new S(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(O),u(O,c,"Generator"),u(O,o,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}({});try{regeneratorRuntime=gn}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=gn:Function("r","regeneratorRuntime = r")(gn)}const yn={recipe:{}};var mn;mn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();var bn=new class{#t=document.querySelector(".recipe");#e;render(t){this.#e=t;const e=this.#n();this.#r(),this.#t.insertAdjacentHTML("afterbegin",e)}renderSpinner(){const t=`\n      <div class="spinner">\n        <svg>\n          <use href="${n(mn)}#icon-loader"></use>\n        </svg>\n      </div> \n    `;this.#r(),this.#t.insertAdjacentHTML("afterbegin",t)}#n(){return`\n      <figure class="recipe__fig">\n            <img src="${this.#e.image}" alt="${this.#e.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${this.#e.title}</span>\n            </h1>\n          </figure>\n    \n          <div class="recipe__details">\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(mn)}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${this.#e.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(mn)}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${this.#e.servings}</span>\n              <span class="recipe__info-text">servings</span>\n    \n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n(mn)}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${n(mn)}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n    \n            <div class="recipe__user-generated">\n              <svg>\n                <use href="${n(mn)}#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round">\n              <svg class="">\n                <use href="${n(mn)}#icon-bookmark-fill"></use>\n              </svg>\n            </button>\n          </div>\n    \n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n    \n            ${this.#e.ingredients.map((t=>`\n                <li class="recipe__ingredient">\n                  <svg class="recipe__icon">\n                    <use href="${n(mn)}#icon-check"></use>\n                  </svg>\n                  <div class="recipe__quantity">${t.quantity}</div>\n                  <div class="recipe__description">\n                    <span class="recipe__unit">${t.unit}</span>\n                    ${t.description}\n                  </div>\n                </li>      \n              `)).join("")}\n    \n            </ul>\n          </div>\n    \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this.#e.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this.#e.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n(mn)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n      `}#r(){this.#t.innerHTML=" "}};document.querySelector(".recipe");const wn=async function(){try{const t=window.location.hash.slice(1);if(!t)return;bn.renderSpinner(),await async function(t){try{const e=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),n=await e.json();if(!e.ok)throw new Error(`${n.message} (${e.status})`);const{recipe:r}=n.data;yn.recipe={cookingTime:r.cooking_time,id:r.id,image:r.image_url,ingredients:r.ingredients,publisher:r.publisher,servings:r.servings,sourceUrl:r.source_url,title:r.title}}catch(t){alert(t)}}(t),bn.render(yn.recipe)}catch(t){alert(t)}};["hashchange","load"].forEach((t=>window.addEventListener(t,wn)));
//# sourceMappingURL=index.531ad9b5.js.map