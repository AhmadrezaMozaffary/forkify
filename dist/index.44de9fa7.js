function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var r={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,n){var r,i;t(e.exports,"register",(()=>r),(t=>r=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.44de9fa7.js","eyyUD":"icons.9801e6f1.svg"}'));var a,s,c={},u=function(t){return t&&t.Math==Math&&t};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);d=y?function(t){var e=m(this,t);return!!e&&e.enumerable}:g;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var _,w,E={},S={},O=Function.prototype,j=O.bind,F=O.call,k=p&&j.bind(F,F),L=(S=p?function(t){return t&&k(t)}:function(t){return t&&function(){return F.apply(t,arguments)}})({}.toString),x=S("".slice);w=function(t){return x(L(t),8,-1)};var P=c.Object,$=S("".split);E=f((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==w(t)?$(t,""):P(t)}:P;var M,T=c.TypeError;M=function(t){if(null==t)throw T("Can't call method on "+t);return t},_=function(t){return E(M(t))};var I,N,q,A;A=function(t){return"function"==typeof t},q=function(t){return"object"==typeof t?null!==t:A(t)};var R,C={},H=function(t){return A(t)?t:void 0};R=function(t,e){return arguments.length<2?H(c[t]):c[t]&&c[t][e]};var z={};z=S({}.isPrototypeOf);var D,G,U,V={};V=R("navigator","userAgent")||"";var W,Y,B=c.process,Q=c.Deno,J=B&&B.versions||Q&&Q.version,K=J&&J.v8;K&&(Y=(W=K.split("."))[0]>0&&W[0]<4?1:+(W[0]+W[1])),!Y&&V&&(!(W=V.match(/Edge\/(\d+)/))||W[1]>=74)&&(W=V.match(/Chrome\/(\d+)/))&&(Y=+W[1]),U=Y,G=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&U&&U<41})),D=G&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;C=D?function(t){return"symbol"==typeof t}:function(t){var e=R("Symbol");return A(e)&&z(e.prototype,X(t))};var Z,tt,et,nt=c.String;et=function(t){try{return nt(t)}catch(t){return"Object"}};var rt=c.TypeError;tt=function(t){if(A(t))return t;throw rt(et(t)+" is not a function")},Z=function(t,e){var n=t[e];return null==n?void 0:tt(n)};var it,ot=c.TypeError;it=function(t,e){var n,r;if("string"===e&&A(n=t.toString)&&!q(r=h(n,t)))return r;if(A(n=t.valueOf)&&!q(r=h(n,t)))return r;if("string"!==e&&A(n=t.toString)&&!q(r=h(n,t)))return r;throw ot("Can't convert object to primitive value")};var at,st;var ct,ut={},lt=Object.defineProperty;ct=function(t,e){try{lt(c,t,{value:e,configurable:!0,writable:!0})}catch(n){c[t]=e}return e};var ft=c["__core-js_shared__"]||ct("__core-js_shared__",{});ut=ft,(st=function(t,e){return ut[t]||(ut[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pt,ht={},dt=c.Object;pt=function(t){return dt(M(t))};var vt=S({}.hasOwnProperty);ht=Object.hasOwn||function(t,e){return vt(pt(t),e)};var gt,mt=0,yt=Math.random(),bt=S(1..toString);gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+bt(++mt+yt,36)};var _t=st("wks"),wt=c.Symbol,Et=wt&&wt.for,St=D?wt:wt&&wt.withoutSetter||gt;at=function(t){if(!ht(_t,t)||!G&&"string"!=typeof _t[t]){var e="Symbol."+t;G&&ht(wt,t)?_t[t]=wt[t]:_t[t]=D&&Et?Et(e):St(e)}return _t[t]};var Ot=c.TypeError,jt=at("toPrimitive");N=function(t,e){if(!q(t)||C(t))return t;var n,r=Z(t,jt);if(r){if(void 0===e&&(e="default"),n=h(r,t,e),!q(n)||C(n))return n;throw Ot("Can't convert object to primitive value")}return void 0===e&&(e="number"),it(t,e)},I=function(t){var e=N(t,"string");return C(e)?e:e+""};var Ft,kt,Lt=c.document,xt=q(Lt)&&q(Lt.createElement);kt=function(t){return xt?Lt.createElement(t):{}},Ft=!l&&!f((function(){return 7!=Object.defineProperty(kt("div"),"a",{get:function(){return 7}}).a}));var Pt,$t,Mt=Object.getOwnPropertyDescriptor,Tt=s=l?Mt:function(t,e){if(t=_(t),e=I(e),Ft)try{return Mt(t,e)}catch(t){}if(ht(t,e))return b(!h(d,t,e),t[e])},It={};$t=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Nt,qt=c.String,At=c.TypeError;Nt=function(t){if(q(t))return t;throw At(qt(t)+" is not an object")};var Rt=c.TypeError,Ct=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor;Pt=l?$t?function(t,e,n){if(Nt(t),e=I(e),Nt(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=Ht(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ct(t,e,n)}:Ct:function(t,e,n){if(Nt(t),e=I(e),Nt(n),Ft)try{return Ct(t,e,n)}catch(t){}if("get"in n||"set"in n)throw Rt("Accessors not supported");return"value"in n&&(t[e]=n.value),t},It=l?function(t,e,n){return Pt(t,e,b(1,n))}:function(t,e,n){return t[e]=n,t};var zt,Dt={},Gt=S(Function.toString);A(ut.inspectSource)||(ut.inspectSource=function(t){return Gt(t)}),Dt=ut.inspectSource;var Ut,Vt,Wt=c.WeakMap;Vt=A(Wt)&&/native code/.test(Dt(Wt));var Yt,Bt=st("keys");Yt=function(t){return Bt[t]||(Bt[t]=gt(t))};var Qt={};Qt={};var Jt,Kt,Xt,Zt=c.TypeError,te=c.WeakMap;if(Vt||ut.state){var ee=ut.state||(ut.state=new te),ne=S(ee.get),re=S(ee.has),ie=S(ee.set);Jt=function(t,e){if(re(ee,t))throw new Zt("Object already initialized");return e.facade=t,ie(ee,t,e),e},Kt=function(t){return ne(ee,t)||{}},Xt=function(t){return re(ee,t)}}else{var oe=Yt("state");Qt[oe]=!0,Jt=function(t,e){if(ht(t,oe))throw new Zt("Object already initialized");return e.facade=t,It(t,oe,e),e},Kt=function(t){return ht(t,oe)?t[oe]:{}},Xt=function(t){return ht(t,oe)}}Ut={set:Jt,get:Kt,has:Xt,enforce:function(t){return Xt(t)?Kt(t):Jt(t,{})},getterFor:function(t){return function(e){var n;if(!q(e)||(n=Kt(e)).type!==t)throw Zt("Incompatible receiver, "+t+" required");return n}}};var ae=Function.prototype,se=l&&Object.getOwnPropertyDescriptor,ce=ht(ae,"name"),ue={EXISTS:ce,PROPER:ce&&"something"===function(){}.name,CONFIGURABLE:ce&&(!l||l&&se(ae,"name").configurable)}.CONFIGURABLE,le=Ut.get,fe=Ut.enforce,pe=String(String).split("String");(zt=function(t,e,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:e;A(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ht(n,"name")||ue&&n.name!==u)&&It(n,"name",u),(i=fe(n)).source||(i.source=pe.join("string"==typeof u?u:""))),t!==c?(o?!s&&t[e]&&(a=!0):delete t[e],a?t[e]=n:It(t,e,n)):a?t[e]=n:ct(e,n)})(Function.prototype,"toString",(function(){return A(this)&&le(this).source||Dt(this)}));var he,de,ve,ge,me,ye={},be=Math.ceil,_e=Math.floor;me=function(t){var e=+t;return e!=e||0===e?0:(e>0?_e:be)(e)};var we=Math.max,Ee=Math.min;ge=function(t,e){var n=me(t);return n<0?we(n+e,0):Ee(n,e)};var Se,Oe,je=Math.min;Oe=function(t){return t>0?je(me(t),9007199254740991):0},Se=function(t){return Oe(t.length)};var Fe=function(t){return function(e,n,r){var i,o=_(e),a=Se(o),s=ge(r,a);if(t&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((t||s in o)&&o[s]===n)return t||s||0;return!t&&-1}},ke={includes:Fe(!0),indexOf:Fe(!1)}.indexOf,Le=S([].push);ve=function(t,e){var n,r=_(t),i=0,o=[];for(n in r)!ht(Qt,n)&&ht(r,n)&&Le(o,n);for(;e.length>i;)ht(r,n=e[i++])&&(~ke(o,n)||Le(o,n));return o};var xe,Pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");de=Object.getOwnPropertyNames||function(t){return ve(t,Pe)},xe=Object.getOwnPropertySymbols;var $e=S([].concat);ye=R("Reflect","ownKeys")||function(t){var e=de(Nt(t));return xe?$e(e,xe(t)):e},he=function(t,e,n){for(var r=ye(e),i=Pt,o=s,a=0;a<r.length;a++){var c=r[a];ht(t,c)||n&&ht(n,c)||i(t,c,o(e,c))}};var Me={},Te=/#|\.prototype\./,Ie=function(t,e){var n=qe[Ne(t)];return n==Re||n!=Ae&&(A(e)?f(e):!!e)},Ne=Ie.normalize=function(t){return String(t).replace(Te,".").toLowerCase()},qe=Ie.data={},Ae=Ie.NATIVE="N",Re=Ie.POLYFILL="P";Me=Ie,a=function(t,e){var n,r,i,o,a,s=t.target,u=t.global,l=t.stat;if(n=u?c:l?c[s]||ct(s,{}):(c[s]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(a=Tt(n,r))&&a.value:n[r],!Me(u?r:s+(l?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;he(o,i)}(t.sham||i&&i.sham)&&It(o,"sham",!0),zt(n,r,o,t)}};var Ce,He={},ze=Function.prototype,De=ze.apply,Ge=ze.call;He="object"==typeof Reflect&&Reflect.apply||(p?Ge.bind(De):function(){return Ge.apply(De,arguments)});var Ue,Ve=S(S.bind);Ue=function(t,e){return tt(t),void 0===e?t:p?Ve(t,e):function(){return t.apply(e,arguments)}};var We={};We=R("document","documentElement");var Ye={};Ye=S([].slice);var Be,Qe=c.TypeError;Be=function(t,e){if(t<e)throw Qe("Not enough arguments");return t};var Je;Je=/(?:ipad|iphone|ipod).*applewebkit/i.test(V);var Ke;Ke="process"==w(c.process);var Xe,Ze,tn,en,nn=c.setImmediate,rn=c.clearImmediate,on=c.process,an=c.Dispatch,sn=c.Function,cn=c.MessageChannel,un=c.String,ln=0,fn={};try{Xe=c.location}catch(t){}var pn=function(t){if(ht(fn,t)){var e=fn[t];delete fn[t],e()}},hn=function(t){return function(){pn(t)}},dn=function(t){pn(t.data)},vn=function(t){c.postMessage(un(t),Xe.protocol+"//"+Xe.host)};nn&&rn||(nn=function(t){Be(arguments.length,1);var e=A(t)?t:sn(t),n=Ye(arguments,1);return fn[++ln]=function(){He(e,void 0,n)},Ze(ln),ln},rn=function(t){delete fn[t]},Ke?Ze=function(t){on.nextTick(hn(t))}:an&&an.now?Ze=function(t){an.now(hn(t))}:cn&&!Je?(en=(tn=new cn).port2,tn.port1.onmessage=dn,Ze=Ue(en.postMessage,en)):c.addEventListener&&A(c.postMessage)&&!c.importScripts&&Xe&&"file:"!==Xe.protocol&&!f(vn)?(Ze=vn,c.addEventListener("message",dn,!1)):Ze="onreadystatechange"in kt("script")?function(t){We.appendChild(kt("script")).onreadystatechange=function(){We.removeChild(this),pn(t)}}:function(t){setTimeout(hn(t),0)}),Ce={set:nn,clear:rn},a({global:!0,bind:!0,enumerable:!0,forced:!c.setImmediate||!c.clearImmediate},{setImmediate:Ce.set,clearImmediate:Ce.clear});var gn=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,o)&&(b=w);var E=y.prototype=g.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function x(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=y,c(E,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),c(E,s,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=gn}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=gn:Function("r","regeneratorRuntime = r")(gn)}const mn=async function(t){try{const n=await Promise.race([fetch(t),(e=10,new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(t){throw t}var e},yn={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:20}},bn=function(t=yn.search.page){yn.search.page=t;const e=(t-1)*yn.search.resultsPerPage,n=t*yn.search.resultsPerPage;return yn.search.results.slice(e,n)};var _n,wn,En,Sn;_n=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class On{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;const e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}update(t){this._data=t;const e=this._generateMarkup(),n=document.createRange().createContextualFragment(e),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((t,e)=>{const n=i[e];t.isEqualNode(n)||""===t.firstChild?.nodeValue.trim()||(n.textContent=t.textContent),t.isEqualNode(n)||Array.from(t.attributes).forEach((t=>n.setAttribute(t.name,t.value)))}))}renderSpinner(){const t=`\n          <div class="spinner">\n            <svg>\n              <use href="${n(_n)}#icon-loader"></use>\n            </svg>\n          </div> \n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const e=`\n          <div class="error">\n            <div>\n              <svg>\n                <use href="${n(_n)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${t}</p>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=" "}}Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=t&&r.push(t),0!=e&&r.push((0===t?e:Math.abs(e))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(En=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},Sn=function(t,e){if(e){var n=Math.pow(10,e);return Math.round(t*n)/n}return Math.round(t)},function(){if(En(this.denominator)){var t=Sn(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}En(this.numerator)&&(t=Sn(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var n=[],r=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return r.forEach((function(t){var e=i.indexOf(t);e>=0&&(n.push(t),i.splice(e,1))})),0===n.length?1:function(){var t,e=n[0];for(t=1;t<n.length;t++)e*=n[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),n=[],r=2;r*r<=e;)e%r==0?(n.push(r),e/=r):r++;return 1!=e&&n.push(e),n},wn=Fraction;var jn=new class extends On{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, Please try another one!";addHandlerRender(t){["hashchange","load"].forEach((e=>window.addEventListener(e,t)))}addHandlerUpdateServings(t){this._parentElement.addEventListener("click",(function(e){const n=e.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&t(+r)}))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${this._data.title}</span>\n            </h1>\n          </figure>\n    \n          <div class="recipe__details">\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(_n)}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n(_n)}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n              <span class="recipe__info-text">servings</span>\n    \n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                  <svg>\n                    <use href="${n(_n)}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                  <svg>\n                    <use href="${n(_n)}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n    \n            <div class="recipe__user-generated">\n              <svg>\n                <use href="${n(_n)}#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round">\n              <svg class="">\n                <use href="${n(_n)}#icon-bookmark-fill"></use>\n              </svg>\n            </button>\n          </div>\n    \n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n    \n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n    \n            </ul>\n          </div>\n    \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this._data.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n(_n)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n      `}_generateMarkupIngredient(t){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(_n)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${t.quantity?new wn(t.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.description}\n      </div>\n    </li>       \n  `}};var Fn=new class{_parentElement=document.querySelector(".search");getQuery(){const t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){return this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",(function(e){e.preventDefault(),t()}))}};var kn=new class extends On{_parentElement=document.querySelector(".results");_errorMessage="No recipie(s) found for your search query :(";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n            <a class="preview__link ${t.id===e?"preview__link--active":""}" href="#${t.id}">\n            <figure class="preview__fig">\n                <img src="${t.image}" alt="${t.title}" />\n            </figure>\n            <div class="preview__data">\n                <h4 class="preview__title">${t.title}</h4>\n                <p class="preview__publisher">${t.publisher}</p>\n            </div>\n            </a>\n        </li>\n      `}};var Ln=new class extends On{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",(function(e){const n=e.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;t(r)}))}_generateMarkup(){const t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&e>1?`\n        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${t+1}</span>\n            <svg class="search__icon">\n            <use href="${n(_n)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `:t===e&&e>1?`\n        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(_n)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t-1}</span>\n        </button>\n      `:t<e?`\n        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(_n)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t-1}</span>\n        </button>\n        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${t+1}</span>\n            <svg class="search__icon">\n            <use href="${n(_n)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `:""}};const xn=async function(){try{const t=window.location.hash.slice(1);if(!t)return;jn.renderSpinner(),kn.update(bn()),await async function(t){try{const e=await mn(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:n}=e.data;yn.recipe={cookingTime:n.cooking_time,id:n.id,image:n.image_url,ingredients:n.ingredients,publisher:n.publisher,servings:n.servings,sourceUrl:n.source_url,title:n.title}}catch(t){throw t}}(t),jn.render(yn.recipe)}catch(t){jn.renderError()}},Pn=async function(){try{kn.renderSpinner();const t=Fn.getQuery();if(!t)return;await async function(t){try{yn.search.query=t;const e=await mn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}`);yn.search.results=e.data.recipes.map((t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url})))}catch(t){throw t}}(t),kn.render(bn(1)),Ln.render(yn.search)}catch(t){console.error(t)}},$n=function(t){kn.render(bn(t)),Ln.render(yn.search)},Mn=function(t){!function(t){yn.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/yn.recipe.servings})),yn.recipe.servings=t}(t),jn.update(yn.recipe)};jn.addHandlerRender(xn),jn.addHandlerUpdateServings(Mn),Fn.addHandlerSearch(Pn),Ln.addHandlerClick($n);
//# sourceMappingURL=index.44de9fa7.js.map
