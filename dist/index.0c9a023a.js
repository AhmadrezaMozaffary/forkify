function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(t){return t&&t.__esModule?t.default:t}var n={},i={},o=e.parcelRequire3a11;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequire3a11=o),o.register("27Lyk",(function(e,r){var n,i;t(e.exports,"register",(()=>n),(t=>n=t)),t(e.exports,"resolve",(()=>i),(t=>i=t));var o={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)o[e[r]]=t[e[r]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.0c9a023a.js","eyyUD":"icons.9801e6f1.svg"}'));var a,c,s={},u=function(t){return t&&t.Math==Math&&t};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!m.call({1:2},1);d=y?function(t){var e=g(this,t);return!!e&&e.enumerable}:m;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var _,w,E={},S={},O=Function.prototype,j=O.bind,F=O.call,L=p&&j.bind(F,F),k=(S=p?function(t){return t&&L(t)}:function(t){return t&&function(){return F.apply(t,arguments)}})({}.toString),x=S("".slice);w=function(t){return x(k(t),8,-1)};var M=s.Object,P=S("".split);E=f((function(){return!M("z").propertyIsEnumerable(0)}))?function(t){return"String"==w(t)?P(t,""):M(t)}:M;var T,$=s.TypeError;T=function(t){if(null==t)throw $("Can't call method on "+t);return t},_=function(t){return E(T(t))};var I,N,R,q;q=function(t){return"function"==typeof t},R=function(t){return"object"==typeof t?null!==t:q(t)};var z,A={},C=function(t){return q(t)?t:void 0};z=function(t,e){return arguments.length<2?C(s[t]):s[t]&&s[t][e]};var D={};D=S({}.isPrototypeOf);var H,G,U,W={};W=z("navigator","userAgent")||"";var Y,B,Q=s.process,V=s.Deno,J=Q&&Q.versions||V&&V.version,K=J&&J.v8;K&&(B=(Y=K.split("."))[0]>0&&Y[0]<4?1:+(Y[0]+Y[1])),!B&&W&&(!(Y=W.match(/Edge\/(\d+)/))||Y[1]>=74)&&(Y=W.match(/Chrome\/(\d+)/))&&(B=+Y[1]),U=B,G=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&U&&U<41})),H=G&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=s.Object;A=H?function(t){return"symbol"==typeof t}:function(t){var e=z("Symbol");return q(e)&&D(e.prototype,X(t))};var Z,tt,et,rt=s.String;et=function(t){try{return rt(t)}catch(t){return"Object"}};var nt=s.TypeError;tt=function(t){if(q(t))return t;throw nt(et(t)+" is not a function")},Z=function(t,e){var r=t[e];return null==r?void 0:tt(r)};var it,ot=s.TypeError;it=function(t,e){var r,n;if("string"===e&&q(r=t.toString)&&!R(n=h(r,t)))return n;if(q(r=t.valueOf)&&!R(n=h(r,t)))return n;if("string"!==e&&q(r=t.toString)&&!R(n=h(r,t)))return n;throw ot("Can't convert object to primitive value")};var at,ct;var st,ut={},lt=Object.defineProperty;st=function(t,e){try{lt(s,t,{value:e,configurable:!0,writable:!0})}catch(r){s[t]=e}return e};var ft=s["__core-js_shared__"]||st("__core-js_shared__",{});ut=ft,(ct=function(t,e){return ut[t]||(ut[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var pt,ht={},dt=s.Object;pt=function(t){return dt(T(t))};var vt=S({}.hasOwnProperty);ht=Object.hasOwn||function(t,e){return vt(pt(t),e)};var mt,gt=0,yt=Math.random(),bt=S(1..toString);mt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+bt(++gt+yt,36)};var _t=ct("wks"),wt=s.Symbol,Et=wt&&wt.for,St=H?wt:wt&&wt.withoutSetter||mt;at=function(t){if(!ht(_t,t)||!G&&"string"!=typeof _t[t]){var e="Symbol."+t;G&&ht(wt,t)?_t[t]=wt[t]:_t[t]=H&&Et?Et(e):St(e)}return _t[t]};var Ot=s.TypeError,jt=at("toPrimitive");N=function(t,e){if(!R(t)||A(t))return t;var r,n=Z(t,jt);if(n){if(void 0===e&&(e="default"),r=h(n,t,e),!R(r)||A(r))return r;throw Ot("Can't convert object to primitive value")}return void 0===e&&(e="number"),it(t,e)},I=function(t){var e=N(t,"string");return A(e)?e:e+""};var Ft,Lt,kt=s.document,xt=R(kt)&&R(kt.createElement);Lt=function(t){return xt?kt.createElement(t):{}},Ft=!l&&!f((function(){return 7!=Object.defineProperty(Lt("div"),"a",{get:function(){return 7}}).a}));var Mt,Pt,Tt=Object.getOwnPropertyDescriptor,$t=c=l?Tt:function(t,e){if(t=_(t),e=I(e),Ft)try{return Tt(t,e)}catch(t){}if(ht(t,e))return b(!h(d,t,e),t[e])},It={};Pt=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Nt,Rt=s.String,qt=s.TypeError;Nt=function(t){if(R(t))return t;throw qt(Rt(t)+" is not an object")};var zt=s.TypeError,At=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor;Mt=l?Pt?function(t,e,r){if(Nt(t),e=I(e),Nt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=Ct(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return At(t,e,r)}:At:function(t,e,r){if(Nt(t),e=I(e),Nt(r),Ft)try{return At(t,e,r)}catch(t){}if("get"in r||"set"in r)throw zt("Accessors not supported");return"value"in r&&(t[e]=r.value),t},It=l?function(t,e,r){return Mt(t,e,b(1,r))}:function(t,e,r){return t[e]=r,t};var Dt,Ht={},Gt=S(Function.toString);q(ut.inspectSource)||(ut.inspectSource=function(t){return Gt(t)}),Ht=ut.inspectSource;var Ut,Wt,Yt=s.WeakMap;Wt=q(Yt)&&/native code/.test(Ht(Yt));var Bt,Qt=ct("keys");Bt=function(t){return Qt[t]||(Qt[t]=mt(t))};var Vt={};Vt={};var Jt,Kt,Xt,Zt=s.TypeError,te=s.WeakMap;if(Wt||ut.state){var ee=ut.state||(ut.state=new te),re=S(ee.get),ne=S(ee.has),ie=S(ee.set);Jt=function(t,e){if(ne(ee,t))throw new Zt("Object already initialized");return e.facade=t,ie(ee,t,e),e},Kt=function(t){return re(ee,t)||{}},Xt=function(t){return ne(ee,t)}}else{var oe=Bt("state");Vt[oe]=!0,Jt=function(t,e){if(ht(t,oe))throw new Zt("Object already initialized");return e.facade=t,It(t,oe,e),e},Kt=function(t){return ht(t,oe)?t[oe]:{}},Xt=function(t){return ht(t,oe)}}Ut={set:Jt,get:Kt,has:Xt,enforce:function(t){return Xt(t)?Kt(t):Jt(t,{})},getterFor:function(t){return function(e){var r;if(!R(e)||(r=Kt(e)).type!==t)throw Zt("Incompatible receiver, "+t+" required");return r}}};var ae=Function.prototype,ce=l&&Object.getOwnPropertyDescriptor,se=ht(ae,"name"),ue={EXISTS:se,PROPER:se&&"something"===function(){}.name,CONFIGURABLE:se&&(!l||l&&ce(ae,"name").configurable)}.CONFIGURABLE,le=Ut.get,fe=Ut.enforce,pe=String(String).split("String");(Dt=function(t,e,r,n){var i,o=!!n&&!!n.unsafe,a=!!n&&!!n.enumerable,c=!!n&&!!n.noTargetGet,u=n&&void 0!==n.name?n.name:e;q(r)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!ht(r,"name")||ue&&r.name!==u)&&It(r,"name",u),(i=fe(r)).source||(i.source=pe.join("string"==typeof u?u:""))),t!==s?(o?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=r:It(t,e,r)):a?t[e]=r:st(e,r)})(Function.prototype,"toString",(function(){return q(this)&&le(this).source||Ht(this)}));var he,de,ve,me,ge,ye={},be=Math.ceil,_e=Math.floor;ge=function(t){var e=+t;return e!=e||0===e?0:(e>0?_e:be)(e)};var we=Math.max,Ee=Math.min;me=function(t,e){var r=ge(t);return r<0?we(r+e,0):Ee(r,e)};var Se,Oe,je=Math.min;Oe=function(t){return t>0?je(ge(t),9007199254740991):0},Se=function(t){return Oe(t.length)};var Fe=function(t){return function(e,r,n){var i,o=_(e),a=Se(o),c=me(n,a);if(t&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===r)return t||c||0;return!t&&-1}},Le={includes:Fe(!0),indexOf:Fe(!1)}.indexOf,ke=S([].push);ve=function(t,e){var r,n=_(t),i=0,o=[];for(r in n)!ht(Vt,r)&&ht(n,r)&&ke(o,r);for(;e.length>i;)ht(n,r=e[i++])&&(~Le(o,r)||ke(o,r));return o};var xe,Me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");de=Object.getOwnPropertyNames||function(t){return ve(t,Me)},xe=Object.getOwnPropertySymbols;var Pe=S([].concat);ye=z("Reflect","ownKeys")||function(t){var e=de(Nt(t));return xe?Pe(e,xe(t)):e},he=function(t,e,r){for(var n=ye(e),i=Mt,o=c,a=0;a<n.length;a++){var s=n[a];ht(t,s)||r&&ht(r,s)||i(t,s,o(e,s))}};var Te={},$e=/#|\.prototype\./,Ie=function(t,e){var r=Re[Ne(t)];return r==ze||r!=qe&&(q(e)?f(e):!!e)},Ne=Ie.normalize=function(t){return String(t).replace($e,".").toLowerCase()},Re=Ie.data={},qe=Ie.NATIVE="N",ze=Ie.POLYFILL="P";Te=Ie,a=function(t,e){var r,n,i,o,a,c=t.target,u=t.global,l=t.stat;if(r=u?s:l?s[c]||st(c,{}):(s[c]||{}).prototype)for(n in e){if(o=e[n],i=t.noTargetGet?(a=$t(r,n))&&a.value:r[n],!Te(u?n:c+(l?".":"#")+n,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;he(o,i)}(t.sham||i&&i.sham)&&It(o,"sham",!0),Dt(r,n,o,t)}};var Ae,Ce={},De=Function.prototype,He=De.apply,Ge=De.call;Ce="object"==typeof Reflect&&Reflect.apply||(p?Ge.bind(He):function(){return Ge.apply(He,arguments)});var Ue,We=S(S.bind);Ue=function(t,e){return tt(t),void 0===e?t:p?We(t,e):function(){return t.apply(e,arguments)}};var Ye={};Ye=z("document","documentElement");var Be={};Be=S([].slice);var Qe,Ve=s.TypeError;Qe=function(t,e){if(t<e)throw Ve("Not enough arguments");return t};var Je;Je=/(?:ipad|iphone|ipod).*applewebkit/i.test(W);var Ke;Ke="process"==w(s.process);var Xe,Ze,tr,er,rr=s.setImmediate,nr=s.clearImmediate,ir=s.process,or=s.Dispatch,ar=s.Function,cr=s.MessageChannel,sr=s.String,ur=0,lr={};try{Xe=s.location}catch(t){}var fr=function(t){if(ht(lr,t)){var e=lr[t];delete lr[t],e()}},pr=function(t){return function(){fr(t)}},hr=function(t){fr(t.data)},dr=function(t){s.postMessage(sr(t),Xe.protocol+"//"+Xe.host)};rr&&nr||(rr=function(t){Qe(arguments.length,1);var e=q(t)?t:ar(t),r=Be(arguments,1);return lr[++ur]=function(){Ce(e,void 0,r)},Ze(ur),ur},nr=function(t){delete lr[t]},Ke?Ze=function(t){ir.nextTick(pr(t))}:or&&or.now?Ze=function(t){or.now(pr(t))}:cr&&!Je?(er=(tr=new cr).port2,tr.port1.onmessage=hr,Ze=Ue(er.postMessage,er)):s.addEventListener&&q(s.postMessage)&&!s.importScripts&&Xe&&"file:"!==Xe.protocol&&!f(dr)?(Ze=dr,s.addEventListener("message",hr,!1)):Ze="onreadystatechange"in Lt("script")?function(t){Ye.appendChild(Lt("script")).onreadystatechange=function(){Ye.removeChild(this),fr(t)}}:function(t){setTimeout(pr(t),0)}),Ae={set:rr,clear:nr},a({global:!0,bind:!0,enumerable:!0,forced:!s.setImmediate||!s.clearImmediate},{setImmediate:Ae.set,clearImmediate:Ae.clear});var vr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new k(n||[]);return o._invoke=function(t,e,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return M()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,o)&&(b=w);var E=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function x(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return g.prototype=y,s(E,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),s(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,c,"Generator"),s(E,o,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=vr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=vr:Function("r","regeneratorRuntime = r")(vr)}const mr=async function(t){try{const r=await Promise.race([fetch(t),(e=10,new Promise((function(t,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)})))]),n=await r.json();if(!r.ok)throw new Error(`${n.message} (${r.status})`);return n}catch(t){throw t}var e},gr={recipe:{},search:{query:"",results:[]}};var yr,br,_r,wr;yr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Er{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;const e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){const t=`\n          <div class="spinner">\n            <svg>\n              <use href="${r(yr)}#icon-loader"></use>\n            </svg>\n          </div> \n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const e=`\n          <div class="error">\n            <div>\n              <svg>\n                <use href="${r(yr)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${t}</p>\n          </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=" "}}Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(_r=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},wr=function(t,e){if(e){var r=Math.pow(10,e);return Math.round(t*r)/r}return Math.round(t)},function(){if(_r(this.denominator)){var t=wr(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}_r(this.numerator)&&(t=wr(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return n.forEach((function(t){var e=i.indexOf(t);e>=0&&(r.push(t),i.splice(e,1))})),0===r.length?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;return 1!=e&&r.push(e),r},br=Fraction;var Sr=new class extends Er{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe, Please try another one!";addHandlerRender(t){["hashchange","load"].forEach((e=>window.addEventListener(e,t)))}_generateMarkup(){return`\n      <figure class="recipe__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${this._data.title}</span>\n            </h1>\n          </figure>\n    \n          <div class="recipe__details">\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${r(yr)}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${r(yr)}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n              <span class="recipe__info-text">servings</span>\n    \n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${r(yr)}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--increase-servings">\n                  <svg>\n                    <use href="${r(yr)}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n    \n            <div class="recipe__user-generated">\n              <svg>\n                <use href="${r(yr)}#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round">\n              <svg class="">\n                <use href="${r(yr)}#icon-bookmark-fill"></use>\n              </svg>\n            </button>\n          </div>\n    \n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n    \n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n    \n            </ul>\n          </div>\n    \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this._data.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${r(yr)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n      `}_generateMarkupIngredient(t){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${r(yr)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${t.quantity?new br(t.quantity).toString():""}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${t.unit}</span>\n        ${t.description}\n      </div>\n    </li>       \n  `}};var Or=new class{_parentElement=document.querySelector(".search");getQuery(){const t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){return this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",(function(e){e.preventDefault(),t()}))}};var jr=new class extends Er{_parentElement=document.querySelector(".results");_errorMessage="No recipie(s) found for your search query :(";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`\n        <li class="preview">\n            <a class="preview__link" href="#${t.id}">\n            <figure class="preview__fig">\n                <img src="${t.image}" alt="${t.title}" />\n            </figure>\n            <div class="preview__data">\n                <h4 class="preview__title">${t.title}</h4>\n                <p class="preview__publisher">${t.publisher}</p>\n            </div>\n            </a>\n        </li>\n      `}};const Fr=async function(){try{const t=window.location.hash.slice(1);if(!t)return;Sr.renderSpinner(),await async function(t){try{const e=await mr(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),{recipe:r}=e.data;gr.recipe={cookingTime:r.cooking_time,id:r.id,image:r.image_url,ingredients:r.ingredients,publisher:r.publisher,servings:r.servings,sourceUrl:r.source_url,title:r.title}}catch(t){throw t}}(t),Sr.render(gr.recipe)}catch(t){Sr.renderError()}},Lr=async function(){try{jr.renderSpinner();const t=Or.getQuery();if(!t)return;await async function(t){try{gr.search.query=t;const e=await mr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}`);gr.search.results=e.data.recipes.map((t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url})))}catch(t){throw t}}(t),jr.render(gr.search.results)}catch(t){console.error(t)}};Sr.addHandlerRender(Fr),Or.addHandlerSearch(Lr);
//# sourceMappingURL=index.0c9a023a.js.map
