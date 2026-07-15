function vI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _I(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pv={exports:{}},lu={},Cv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),wI=Symbol.for("react.portal"),EI=Symbol.for("react.fragment"),TI=Symbol.for("react.strict_mode"),II=Symbol.for("react.profiler"),SI=Symbol.for("react.provider"),AI=Symbol.for("react.context"),RI=Symbol.for("react.forward_ref"),PI=Symbol.for("react.suspense"),CI=Symbol.for("react.memo"),kI=Symbol.for("react.lazy"),bm=Symbol.iterator;function xI(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xv=Object.assign,Nv={};function as(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||kv}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dv(){}Dv.prototype=as.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=Nv,this.updater=n||kv}var Fd=bd.prototype=new Dv;Fd.constructor=bd;xv(Fd,as.prototype);Fd.isPureReactComponent=!0;var Fm=Array.isArray,Ov=Object.prototype.hasOwnProperty,Ud={current:null},Vv={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Wo,type:t,key:s,ref:o,props:i,_owner:Ud.current}}function NI(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function DI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?DI(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case wI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sc(o,0):r,Fm(i)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),Ga(i,e,n,"",function(c){return c})):i!=null&&(jd(i)&&(i=NI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sc(s,l);o+=Ga(s,e,n,u,i)}else if(u=xI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sc(s,l++),o+=Ga(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Qa={transition:null},VI={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Ud};function Mv(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=as;Z.Fragment=EI;Z.Profiler=II;Z.PureComponent=bd;Z.StrictMode=TI;Z.Suspense=PI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI;Z.act=Mv;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ud.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ov.call(e,u)&&!Vv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Wo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:AI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:SI,_context:t},t.Consumer=t};Z.createElement=Lv;Z.createFactory=function(t){var e=Lv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:RI,render:t}};Z.isValidElement=jd;Z.lazy=function(t){return{$$typeof:kI,_payload:{_status:-1,_result:t},_init:OI}};Z.memo=function(t,e){return{$$typeof:CI,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};Z.unstable_act=Mv;Z.useCallback=function(t,e){return ct.current.useCallback(t,e)};Z.useContext=function(t){return ct.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ct.current.useEffect(t,e)};Z.useId=function(){return ct.current.useId()};Z.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ct.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};Z.useRef=function(t){return ct.current.useRef(t)};Z.useState=function(t){return ct.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ct.current.useTransition()};Z.version="18.3.1";Cv.exports=Z;var b=Cv.exports;const bv=_I(b),LI=vI({__proto__:null,default:bv},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MI=b,bI=Symbol.for("react.element"),FI=Symbol.for("react.fragment"),UI=Object.prototype.hasOwnProperty,jI=MI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,BI={key:!0,ref:!0,__self:!0,__source:!0};function Fv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)UI.call(e,r)&&!BI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bI,type:t,key:s,ref:o,props:i,_owner:jI.current}}lu.Fragment=FI;lu.jsx=Fv;lu.jsxs=Fv;Pv.exports=lu;var L=Pv.exports,dh={},Uv={exports:{}},Rt={},jv={exports:{}},Bv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,J){var X=$.length;$.push(J);e:for(;0<X;){var ge=X-1>>>1,le=$[ge];if(0<i(le,J))$[ge]=J,$[X]=le,X=ge;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var J=$[0],X=$.pop();if(X!==J){$[0]=X;e:for(var ge=0,le=$.length,Ae=le>>>1;ge<Ae;){var ln=2*(ge+1)-1,un=$[ln],cn=ln+1,hn=$[cn];if(0>i(un,X))cn<le&&0>i(hn,un)?($[ge]=hn,$[cn]=X,ge=cn):($[ge]=un,$[ln]=X,ge=ln);else if(cn<le&&0>i(hn,X))$[ge]=hn,$[cn]=X,ge=cn;else break e}}return J}function i($,J){var X=$.sortIndex-J.sortIndex;return X!==0?X:$.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,T=!1,R=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I($){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=$)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function O($){if(C=!1,I($),!R)if(n(u)!==null)R=!0,_s(D);else{var J=n(c);J!==null&&an(O,J.startTime-$)}}function D($,J){R=!1,C&&(C=!1,E(y),y=-1),T=!0;var X=m;try{for(I(J),p=n(u);p!==null&&(!(p.expirationTime>J)||$&&!P());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=J);J=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),I(J)}else r(u);p=n(u)}if(p!==null)var Ae=!0;else{var ln=n(c);ln!==null&&an(O,ln.startTime-J),Ae=!1}return Ae}finally{p=null,m=X,T=!1}}var F=!1,_=null,y=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function k(){if(_!==null){var $=t.unstable_now();S=$;var J=!0;try{J=_(!0,$)}finally{J?A():(F=!1,_=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(k)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,Sr=Ct.port2;Ct.port1.onmessage=k,A=function(){Sr.postMessage(null)}}else A=function(){N(k,0)};function _s($){_=$,F||(F=!0,A())}function an($,J){y=N(function(){$(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,_s(D))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var X=m;m=J;try{return $()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,J){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var X=m;m=$;try{return J()}finally{m=X}},t.unstable_scheduleCallback=function($,J,X){var ge=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,$){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,$={id:f++,callback:J,priorityLevel:$,startTime:X,expirationTime:le,sortIndex:-1},X>ge?($.sortIndex=X,e(c,$),n(u)===null&&$===n(c)&&(C?(E(y),y=-1):C=!0,an(O,X-ge))):($.sortIndex=le,e(u,$),R||T||(R=!0,_s(D))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var J=m;return function(){var X=m;m=J;try{return $.apply(this,arguments)}finally{m=X}}}})(Bv);jv.exports=Bv;var zI=jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $I=b,At=zI;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,mo={};function ei(t,e){Wi(t,e),Wi(t+"Capture",e)}function Wi(t,e){for(mo[t]=e,t=0;t<e.length;t++)zv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,WI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jm={},Bm={};function qI(t){return fh.call(Bm,t)?!0:fh.call(jm,t)?!1:WI.test(t)?Bm[t]=!0:(jm[t]=!0,!1)}function HI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function KI(t,e,n,r){if(e===null||typeof e>"u"||HI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,zd);We[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,zd);We[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,zd);We[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(KI(e,n,i,r)&&(n=null),r||i===null?qI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Vn=$I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ra=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),mh=Symbol.for("react.suspense"),gh=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),qv=Symbol.for("react.offscreen"),zm=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ac;function $s(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Rc=!1;function Pc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function GI(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function yh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case ph:return"Profiler";case Wd:return"StrictMode";case mh:return"Suspense";case gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wv:return(t.displayName||"Context")+".Consumer";case $v:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:yh(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return yh(t(e))}catch{}}return null}function QI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YI(t){var e=Hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=YI(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Hv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $m(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gv(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function _h(t,e){Gv(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ws(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Qv(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Jv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JI=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){JI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function Xv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function Zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XI=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(XI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,Li=null,Mi=null;function Km(t){if(t=Ko(t)){if(typeof Rh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=fu(e),Rh(t.stateNode,t.type,e))}}function e_(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function t_(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,Km(t),e)for(t=0;t<e.length;t++)Km(e[t])}}function n_(t,e){return t(e)}function r_(){}var Cc=!1;function i_(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return n_(t,e,n)}finally{Cc=!1,(Li!==null||Mi!==null)&&(r_(),t_())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var r=fu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Ph=!1;if(An)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Ph=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Ph=!1}function ZI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Zs=!1,gl=null,yl=!1,Ch=null,eS={onError:function(t){Zs=!0,gl=t}};function tS(t,e,n,r,i,s,o,l,u){Zs=!1,gl=null,ZI.apply(eS,arguments)}function nS(t,e,n,r,i,s,o,l,u){if(tS.apply(this,arguments),Zs){if(Zs){var c=gl;Zs=!1,gl=null}else throw Error(j(198));yl||(yl=!0,Ch=c)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(ti(t)!==t)throw Error(j(188))}function rS(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gm(i),t;if(s===r)return Gm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function o_(t){return t=rS(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var l_=At.unstable_scheduleCallback,Qm=At.unstable_cancelCallback,iS=At.unstable_shouldYield,sS=At.unstable_requestPaint,Pe=At.unstable_now,oS=At.unstable_getCurrentPriorityLevel,Gd=At.unstable_ImmediatePriority,u_=At.unstable_UserBlockingPriority,vl=At.unstable_NormalPriority,aS=At.unstable_LowPriority,c_=At.unstable_IdlePriority,uu=null,Zt=null;function lS(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(uu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:hS,uS=Math.log,cS=Math.LN2;function hS(t){return t>>>=0,t===0?32:31-(uS(t)/cS|0)|0}var ka=64,xa=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=qs(l):(s&=o,s!==0&&(r=qs(s)))}else o=n&~i,o!==0?r=qs(o):s!==0&&(r=qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function dS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=dS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function kh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h_(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function pS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function d_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f_,Yd,p_,m_,g_,xh=!1,Na=[],Zn=null,er=null,tr=null,vo=new Map,_o=new Map,$n=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ko(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gS(t,e,n,r,i){switch(e){case"focusin":return Zn=Ls(Zn,t,e,n,r,i),!0;case"dragenter":return er=Ls(er,t,e,n,r,i),!0;case"mouseover":return tr=Ls(tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,Ls(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,Ls(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function y_(t){var e=Dr(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=s_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ah=r,n.target.dispatchEvent(r),Ah=null}else return e=Ko(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Jm(t,e,n){Ya(t)&&n.delete(e)}function yS(){xh=!1,Zn!==null&&Ya(Zn)&&(Zn=null),er!==null&&Ya(er)&&(er=null),tr!==null&&Ya(tr)&&(tr=null),vo.forEach(Jm),_o.forEach(Jm)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,xh||(xh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,yS)))}function wo(t){function e(i){return Ms(i,t)}if(0<Na.length){Ms(Na[0],t);for(var n=1;n<Na.length;n++){var r=Na[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zn!==null&&Ms(Zn,t),er!==null&&Ms(er,t),tr!==null&&Ms(tr,t),vo.forEach(e),_o.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)y_(n),n.blockedOn===null&&$n.shift()}var bi=Vn.ReactCurrentBatchConfig,wl=!0;function vS(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=1,Jd(t,e,n,r)}finally{ae=i,bi.transition=s}}function _S(t,e,n,r){var i=ae,s=bi.transition;bi.transition=null;try{ae=4,Jd(t,e,n,r)}finally{ae=i,bi.transition=s}}function Jd(t,e,n,r){if(wl){var i=Nh(t,e,n,r);if(i===null)Uc(t,e,r,El,n),Ym(t,r);else if(gS(i,t,e,n,r))r.stopPropagation();else if(Ym(t,r),e&4&&-1<mS.indexOf(t)){for(;i!==null;){var s=Ko(i);if(s!==null&&f_(s),s=Nh(t,e,n,r),s===null&&Uc(t,e,r,El,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uc(t,e,r,null,n)}}var El=null;function Nh(t,e,n,r){if(El=null,t=Kd(r),t=Dr(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oS()){case Gd:return 1;case u_:return 4;case vl:case aS:return 16;case c_:return 536870912;default:return 16}default:return 16}}var Qn=null,Xd=null,Ja=null;function __(){if(Ja)return Ja;var t,e=Xd,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Xm(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Xm,this.isPropagationStopped=Xm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=Pt(ls),Ho=we({},ls,{view:0,detail:0}),wS=Pt(Ho),xc,Nc,bs,cu=we({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(xc=t.screenX-bs.screenX,Nc=t.screenY-bs.screenY):Nc=xc=0,bs=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:Nc}}),Zm=Pt(cu),ES=we({},cu,{dataTransfer:0}),TS=Pt(ES),IS=we({},Ho,{relatedTarget:0}),Dc=Pt(IS),SS=we({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),AS=Pt(SS),RS=we({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),PS=Pt(RS),CS=we({},ls,{data:0}),eg=Pt(CS),kS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NS[t])?!!e[t]:!1}function ef(){return DS}var OS=we({},Ho,{key:function(t){if(t.key){var e=kS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=Pt(OS),LS=we({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=Pt(LS),MS=we({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),bS=Pt(MS),FS=we({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=Pt(FS),jS=we({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=Pt(jS),zS=[9,13,27,32],tf=An&&"CompositionEvent"in window,eo=null;An&&"documentMode"in document&&(eo=document.documentMode);var $S=An&&"TextEvent"in window&&!eo,w_=An&&(!tf||eo&&8<eo&&11>=eo),ng=" ",rg=!1;function E_(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function WS(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(rg=!0,ng);case"textInput":return t=e.data,t===ng&&rg?null:t;default:return null}}function qS(t,e){if(Ti)return t==="compositionend"||!tf&&E_(t,e)?(t=__(),Ja=Xd=Qn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HS[t.type]:e==="textarea"}function I_(t,e,n,r){e_(r),e=Tl(e,"onChange"),0<e.length&&(n=new Zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var to=null,Eo=null;function KS(t){V_(t,0)}function hu(t){var e=Ai(t);if(Kv(e))return t}function GS(t,e){if(t==="change")return e}var S_=!1;if(An){var Oc;if(An){var Vc="oninput"in document;if(!Vc){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Vc=typeof sg.oninput=="function"}Oc=Vc}else Oc=!1;S_=Oc&&(!document.documentMode||9<document.documentMode)}function og(){to&&(to.detachEvent("onpropertychange",A_),Eo=to=null)}function A_(t){if(t.propertyName==="value"&&hu(Eo)){var e=[];I_(e,Eo,t,Kd(t)),i_(KS,e)}}function QS(t,e,n){t==="focusin"?(og(),to=e,Eo=n,to.attachEvent("onpropertychange",A_)):t==="focusout"&&og()}function YS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Eo)}function JS(t,e){if(t==="click")return hu(e)}function XS(t,e){if(t==="input"||t==="change")return hu(e)}function ZS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:ZS;function To(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fh.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function ag(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lg(t,e){var n=ag(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ag(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P_(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eA(t){var e=P_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lg(n,s);var o=lg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tA=An&&"documentMode"in document&&11>=document.documentMode,Ii=null,Dh=null,no=null,Oh=!1;function ug(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||Ii==null||Ii!==ml(r)||(r=Ii,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&To(no,r)||(no=r,r=Tl(Dh,"onSelect"),0<r.length&&(e=new Zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ii)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Lc={},C_={};An&&(C_=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function du(t){if(Lc[t])return Lc[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in C_)return Lc[t]=e[n];return t}var k_=du("animationend"),x_=du("animationiteration"),N_=du("animationstart"),D_=du("transitionend"),O_=new Map,cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){O_.set(t,e),ei(e,[t])}for(var Mc=0;Mc<cg.length;Mc++){var bc=cg[Mc],nA=bc.toLowerCase(),rA=bc[0].toUpperCase()+bc.slice(1);yr(nA,"on"+rA)}yr(k_,"onAnimationEnd");yr(x_,"onAnimationIteration");yr(N_,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(D_,"onTransitionEnd");Wi("onMouseEnter",["mouseout","mouseover"]);Wi("onMouseLeave",["mouseout","mouseover"]);Wi("onPointerEnter",["pointerout","pointerover"]);Wi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function hg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nS(r,e,void 0,t),t.currentTarget=null}function V_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;hg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;hg(i,l,c),s=u}}}if(yl)throw t=Ch,yl=!1,Ch=null,t}function fe(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(L_(e,t,2,!1),n.add(r))}function Fc(t,e,n){var r=0;e&&(r|=4),L_(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[Va]){t[Va]=!0,zv.forEach(function(n){n!=="selectionchange"&&(iA.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Fc("selectionchange",!1,e))}}function L_(t,e,n,r){switch(v_(e)){case 1:var i=vS;break;case 4:i=_S;break;default:i=Jd}n=i.bind(null,e,n,t),i=void 0,!Ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}i_(function(){var c=s,f=Kd(n),p=[];e:{var m=O_.get(t);if(m!==void 0){var T=Zd,R=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":T=VS;break;case"focusin":R="focus",T=Dc;break;case"focusout":R="blur",T=Dc;break;case"beforeblur":case"afterblur":T=Dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=TS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=bS;break;case k_:case x_:case N_:T=AS;break;case D_:T=US;break;case"scroll":T=wS;break;case"wheel":T=BS;break;case"copy":case"cut":case"paste":T=PS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=tg}var C=(e&4)!==0,N=!C&&t==="scroll",E=C?m!==null?m+"Capture":null:m;C=[];for(var v=c,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,E!==null&&(O=yo(v,E),O!=null&&C.push(So(v,O,I)))),N)break;v=v.return}0<C.length&&(m=new T(m,R,null,n,f),p.push({event:m,listeners:C}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ah&&(R=n.relatedTarget||n.fromElement)&&(Dr(R)||R[Rn]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Dr(R):null,R!==null&&(N=ti(R),R!==N||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(C=Zm,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(C=tg,O="onPointerLeave",E="onPointerEnter",v="pointer"),N=T==null?m:Ai(T),I=R==null?m:Ai(R),m=new C(O,v+"leave",T,n,f),m.target=N,m.relatedTarget=I,O=null,Dr(f)===c&&(C=new C(E,v+"enter",R,n,f),C.target=I,C.relatedTarget=N,O=C),N=O,T&&R)t:{for(C=T,E=R,v=0,I=C;I;I=mi(I))v++;for(I=0,O=E;O;O=mi(O))I++;for(;0<v-I;)C=mi(C),v--;for(;0<I-v;)E=mi(E),I--;for(;v--;){if(C===E||E!==null&&C===E.alternate)break t;C=mi(C),E=mi(E)}C=null}else C=null;T!==null&&dg(p,m,T,C,!1),R!==null&&N!==null&&dg(p,N,R,C,!0)}}e:{if(m=c?Ai(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var D=GS;else if(ig(m))if(S_)D=XS;else{D=YS;var F=QS}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(D=JS);if(D&&(D=D(t,c))){I_(p,D,n,f);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&wh(m,"number",m.value)}switch(F=c?Ai(c):window,t){case"focusin":(ig(F)||F.contentEditable==="true")&&(Ii=F,Dh=c,no=null);break;case"focusout":no=Dh=Ii=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,ug(p,n,f);break;case"selectionchange":if(tA)break;case"keydown":case"keyup":ug(p,n,f)}var _;if(tf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ti?E_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w_&&n.locale!=="ko"&&(Ti||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ti&&(_=__()):(Qn=f,Xd="value"in Qn?Qn.value:Qn.textContent,Ti=!0)),F=Tl(c,y),0<F.length&&(y=new eg(y,t,null,n,f),p.push({event:y,listeners:F}),_?y.data=_:(_=T_(n),_!==null&&(y.data=_)))),(_=$S?WS(t,n):qS(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(f=new eg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=_))}V_(p,e)})}function So(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=yo(t,n),s!=null&&r.unshift(So(t,s,i)),s=yo(t,e),s!=null&&r.push(So(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=yo(n,s),u!=null&&o.unshift(So(n,u,l))):i||(u=yo(n,s),u!=null&&o.push(So(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sA=/\r\n?/g,oA=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(sA,`
`).replace(oA,"")}function La(t,e,n){if(e=fg(e),fg(t)!==e&&n)throw Error(j(425))}function Il(){}var Vh=null,Lh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,aA=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,lA=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(uA)}:bh;function uA(t){setTimeout(function(){throw t})}function jc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),Jt="__reactFiber$"+us,Ao="__reactProps$"+us,Rn="__reactContainer$"+us,Fh="__reactEvents$"+us,cA="__reactListeners$"+us,hA="__reactHandles$"+us;function Dr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mg(t);t!==null;){if(n=t[Jt])return n;t=mg(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[Jt]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function fu(t){return t[Ao]||null}var Uh=[],Ri=-1;function vr(t){return{current:t}}function pe(t){0>Ri||(t.current=Uh[Ri],Uh[Ri]=null,Ri--)}function he(t,e){Ri++,Uh[Ri]=t.current,t.current=e}var dr={},nt=vr(dr),pt=vr(!1),jr=dr;function qi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function Sl(){pe(pt),pe(nt)}function gg(t,e,n){if(nt.current!==dr)throw Error(j(168));he(nt,e),he(pt,n)}function M_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,QI(t)||"Unknown",i));return we({},n,r)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,jr=nt.current,he(nt,t),he(pt,pt.current),!0}function yg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=M_(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(nt),he(nt,t)):pe(pt),he(pt,n)}var mn=null,pu=!1,Bc=!1;function b_(t){mn===null?mn=[t]:mn.push(t)}function dA(t){pu=!0,b_(t)}function _r(){if(!Bc&&mn!==null){Bc=!0;var t=0,e=ae;try{var n=mn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,pu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),l_(Gd,_r),i}finally{ae=e,Bc=!1}}return null}var Pi=[],Ci=0,Rl=null,Pl=0,kt=[],xt=0,Br=null,gn=1,yn="";function kr(t,e){Pi[Ci++]=Pl,Pi[Ci++]=Rl,Rl=t,Pl=e}function F_(t,e,n){kt[xt++]=gn,kt[xt++]=yn,kt[xt++]=Br,Br=t;var r=gn;t=yn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Bt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function rf(t){t.return!==null&&(kr(t,1),F_(t,1,0))}function sf(t){for(;t===Rl;)Rl=Pi[--Ci],Pi[Ci]=null,Pl=Pi[--Ci],Pi[Ci]=null;for(;t===Br;)Br=kt[--xt],kt[xt]=null,yn=kt[--xt],kt[xt]=null,gn=kt[--xt],kt[xt]=null}var Tt=null,wt=null,me=!1,jt=null;function U_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,wt=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,wt=null,!0):!1;default:return!1}}function jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(me){var e=wt;if(e){var n=e;if(!vg(t,e)){if(jh(t))throw Error(j(418));e=nr(n.nextSibling);var r=Tt;e&&vg(t,e)?U_(r,n):(t.flags=t.flags&-4097|2,me=!1,Tt=t)}}else{if(jh(t))throw Error(j(418));t.flags=t.flags&-4097|2,me=!1,Tt=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Ma(t){if(t!==Tt)return!1;if(!me)return _g(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=wt)){if(jh(t))throw j_(),Error(j(418));for(;e;)U_(t,e),e=nr(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Tt?nr(t.stateNode.nextSibling):null;return!0}function j_(){for(var t=wt;t;)t=nr(t.nextSibling)}function Hi(){wt=Tt=null,me=!1}function of(t){jt===null?jt=[t]:jt.push(t)}var fA=Vn.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wg(t){var e=t._init;return e(t._payload)}function B_(t){function e(E,v){if(t){var I=E.deletions;I===null?(E.deletions=[v],E.flags|=16):I.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=or(E,v),E.index=0,E.sibling=null,E}function s(E,v,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<v?(E.flags|=2,v):I):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,I,O){return v===null||v.tag!==6?(v=Gc(I,E.mode,O),v.return=E,v):(v=i(v,I),v.return=E,v)}function u(E,v,I,O){var D=I.type;return D===Ei?f(E,v,I.props.children,O,I.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Bn&&wg(D)===v.type)?(O=i(v,I.props),O.ref=Fs(E,v,I),O.return=E,O):(O=sl(I.type,I.key,I.props,null,E.mode,O),O.ref=Fs(E,v,I),O.return=E,O)}function c(E,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Qc(I,E.mode,O),v.return=E,v):(v=i(v,I.children||[]),v.return=E,v)}function f(E,v,I,O,D){return v===null||v.tag!==7?(v=Fr(I,E.mode,O,D),v.return=E,v):(v=i(v,I),v.return=E,v)}function p(E,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gc(""+v,E.mode,I),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ra:return I=sl(v.type,v.key,v.props,null,E.mode,I),I.ref=Fs(E,null,v),I.return=E,I;case wi:return v=Qc(v,E.mode,I),v.return=E,v;case Bn:var O=v._init;return p(E,O(v._payload),I)}if(Ws(v)||Os(v))return v=Fr(v,E.mode,I,null),v.return=E,v;ba(E,v)}return null}function m(E,v,I,O){var D=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return D!==null?null:l(E,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ra:return I.key===D?u(E,v,I,O):null;case wi:return I.key===D?c(E,v,I,O):null;case Bn:return D=I._init,m(E,v,D(I._payload),O)}if(Ws(I)||Os(I))return D!==null?null:f(E,v,I,O,null);ba(E,I)}return null}function T(E,v,I,O,D){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(I)||null,l(v,E,""+O,D);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ra:return E=E.get(O.key===null?I:O.key)||null,u(v,E,O,D);case wi:return E=E.get(O.key===null?I:O.key)||null,c(v,E,O,D);case Bn:var F=O._init;return T(E,v,I,F(O._payload),D)}if(Ws(O)||Os(O))return E=E.get(I)||null,f(v,E,O,D,null);ba(v,O)}return null}function R(E,v,I,O){for(var D=null,F=null,_=v,y=v=0,w=null;_!==null&&y<I.length;y++){_.index>y?(w=_,_=null):w=_.sibling;var S=m(E,_,I[y],O);if(S===null){_===null&&(_=w);break}t&&_&&S.alternate===null&&e(E,_),v=s(S,v,y),F===null?D=S:F.sibling=S,F=S,_=w}if(y===I.length)return n(E,_),me&&kr(E,y),D;if(_===null){for(;y<I.length;y++)_=p(E,I[y],O),_!==null&&(v=s(_,v,y),F===null?D=_:F.sibling=_,F=_);return me&&kr(E,y),D}for(_=r(E,_);y<I.length;y++)w=T(_,E,y,I[y],O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?y:w.key),v=s(w,v,y),F===null?D=w:F.sibling=w,F=w);return t&&_.forEach(function(P){return e(E,P)}),me&&kr(E,y),D}function C(E,v,I,O){var D=Os(I);if(typeof D!="function")throw Error(j(150));if(I=D.call(I),I==null)throw Error(j(151));for(var F=D=null,_=v,y=v=0,w=null,S=I.next();_!==null&&!S.done;y++,S=I.next()){_.index>y?(w=_,_=null):w=_.sibling;var P=m(E,_,S.value,O);if(P===null){_===null&&(_=w);break}t&&_&&P.alternate===null&&e(E,_),v=s(P,v,y),F===null?D=P:F.sibling=P,F=P,_=w}if(S.done)return n(E,_),me&&kr(E,y),D;if(_===null){for(;!S.done;y++,S=I.next())S=p(E,S.value,O),S!==null&&(v=s(S,v,y),F===null?D=S:F.sibling=S,F=S);return me&&kr(E,y),D}for(_=r(E,_);!S.done;y++,S=I.next())S=T(_,E,y,S.value,O),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?y:S.key),v=s(S,v,y),F===null?D=S:F.sibling=S,F=S);return t&&_.forEach(function(k){return e(E,k)}),me&&kr(E,y),D}function N(E,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Ei&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ra:e:{for(var D=I.key,F=v;F!==null;){if(F.key===D){if(D=I.type,D===Ei){if(F.tag===7){n(E,F.sibling),v=i(F,I.props.children),v.return=E,E=v;break e}}else if(F.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Bn&&wg(D)===F.type){n(E,F.sibling),v=i(F,I.props),v.ref=Fs(E,F,I),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}I.type===Ei?(v=Fr(I.props.children,E.mode,O,I.key),v.return=E,E=v):(O=sl(I.type,I.key,I.props,null,E.mode,O),O.ref=Fs(E,v,I),O.return=E,E=O)}return o(E);case wi:e:{for(F=I.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(E,v.sibling),v=i(v,I.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Qc(I,E.mode,O),v.return=E,E=v}return o(E);case Bn:return F=I._init,N(E,v,F(I._payload),O)}if(Ws(I))return R(E,v,I,O);if(Os(I))return C(E,v,I,O);ba(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,I),v.return=E,E=v):(n(E,v),v=Gc(I,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return N}var Ki=B_(!0),z_=B_(!1),Cl=vr(null),kl=null,ki=null,af=null;function lf(){af=ki=kl=null}function uf(t){var e=Cl.current;pe(Cl),t._currentValue=e}function zh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){kl=t,af=ki=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},ki===null){if(kl===null)throw Error(j(308));ki=t,kl.dependencies={lanes:0,firstContext:t}}else ki=ki.next=t;return e}var Or=null;function cf(t){Or===null?Or=[t]:Or.push(t)}function $_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function Eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,C=l;switch(m=e,T=n,C.tag){case 1:if(R=C.payload,typeof R=="function"){p=R.call(T,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=C.payload,m=typeof R=="function"?R.call(T,p,m):R,m==null)break e;p=we({},p,m);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=p):f=f.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=p}}function Tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Go={},en=vr(Go),Ro=vr(Go),Po=vr(Go);function Vr(t){if(t===Go)throw Error(j(174));return t}function df(t,e){switch(he(Po,e),he(Ro,t),he(en,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Th(e,t)}pe(en),he(en,e)}function Gi(){pe(en),pe(Ro),pe(Po)}function q_(t){Vr(Po.current);var e=Vr(en.current),n=Th(e,t.type);e!==n&&(he(Ro,t),he(en,n))}function ff(t){Ro.current===t&&(pe(en),pe(Ro))}var ye=vr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zc=[];function pf(){for(var t=0;t<zc.length;t++)zc[t]._workInProgressVersionPrimary=null;zc.length=0}var el=Vn.ReactCurrentDispatcher,$c=Vn.ReactCurrentBatchConfig,zr=0,ve=null,Ne=null,Le=null,Dl=!1,ro=!1,Co=0,pA=0;function Qe(){throw Error(j(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,i,s){if(zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?vA:_A,t=n(r,i),ro){s=0;do{if(ro=!1,Co=0,25<=s)throw Error(j(301));s+=1,Le=Ne=null,e.updateQueue=null,el.current=wA,t=n(r,i)}while(ro)}if(el.current=Ol,e=Ne!==null&&Ne.next!==null,zr=0,Le=Ne=ve=null,Dl=!1,e)throw Error(j(300));return t}function yf(){var t=Co!==0;return Co=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ve.memoizedState=Le=t:Le=Le.next=t,Le}function Lt(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Le===null?ve.memoizedState:Le.next;if(e!==null)Le=e,Ne=t;else{if(t===null)throw Error(j(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Le===null?ve.memoizedState=Le=t:Le=Le.next=t}return Le}function ko(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,$r|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function H_(){}function K_(t,e){var n=ve,r=Lt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,vf(Y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,xo(9,Q_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(j(349));zr&30||G_(n,e,i)}return i}function G_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,r){e.value=n,e.getSnapshot=r,J_(e)&&X_(t)}function Y_(t,e,n){return n(function(){J_(e)&&X_(t)})}function J_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function X_(t){var e=Pn(t,1);e!==null&&zt(e,t,1,-1)}function Ig(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},e.queue=t,t=t.dispatch=yA.bind(null,ve,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z_(){return Lt().memoizedState}function tl(t,e,n,r){var i=Yt();ve.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function mu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&mf(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function Sg(t,e){return tl(8390656,8,t,e)}function vf(t,e){return mu(2048,8,t,e)}function ew(t,e){return mu(4,2,t,e)}function tw(t,e){return mu(4,4,t,e)}function nw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rw(t,e,n){return n=n!=null?n.concat([t]):null,mu(4,4,nw.bind(null,e,t),n)}function _f(){}function iw(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sw(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ow(t,e,n){return zr&21?(Wt(n,e)||(n=h_(),ve.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function mA(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=$c.transition;$c.transition={};try{t(!1),e()}finally{ae=n,$c.transition=r}}function aw(){return Lt().memoizedState}function gA(t,e,n){var r=sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lw(t))uw(e,n);else if(n=$_(t,e,n,r),n!==null){var i=ut();zt(n,t,r,i),cw(n,e,r)}}function yA(t,e,n){var r=sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lw(t))uw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=$_(t,e,i,r),n!==null&&(i=ut(),zt(n,t,r,i),cw(n,e,r))}}function lw(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function uw(t,e){ro=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var Ol={readContext:Vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},vA={readContext:Vt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,nw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gA.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:Ig,useDebugValue:_f,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=Ig(!1),e=t[0];return t=mA.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Yt();if(me){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),be===null)throw Error(j(349));zr&30||G_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sg(Y_.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,Q_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=be.identifierPrefix;if(me){var n=yn,r=gn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_A={readContext:Vt,useCallback:iw,useContext:Vt,useEffect:vf,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:Wc,useRef:Z_,useState:function(){return Wc(ko)},useDebugValue:_f,useDeferredValue:function(t){var e=Lt();return ow(e,Ne.memoizedState,t)},useTransition:function(){var t=Wc(ko)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:K_,useId:aw,unstable_isNewReconciler:!1},wA={readContext:Vt,useCallback:iw,useContext:Vt,useEffect:vf,useImperativeHandle:rw,useInsertionEffect:ew,useLayoutEffect:tw,useMemo:sw,useReducer:qc,useRef:Z_,useState:function(){return qc(ko)},useDebugValue:_f,useDeferredValue:function(t){var e=Lt();return Ne===null?e.memoizedState=t:ow(e,Ne.memoizedState,t)},useTransition:function(){var t=qc(ko)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:H_,useSyncExternalStore:K_,useId:aw,unstable_isNewReconciler:!1};function Ft(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=sr(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(zt(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=sr(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,i),e!==null&&(zt(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=sr(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=rr(t,i,r),e!==null&&(zt(e,t,r,n),Za(e,t,r))}};function Ag(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,r)||!To(i,s):!0}function hw(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=mt(e)?jr:nt.current,r=e.contextTypes,s=(r=r!=null)?qi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function Wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=mt(e)?jr:nt.current,i.context=qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qi(t,e){try{var n="",r=e;do n+=GI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EA=typeof WeakMap=="function"?WeakMap:Map;function dw(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,td=r),qh(t,e)},n}function fw(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qh(t,e),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LA.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var TA=Vn.ReactCurrentOwner,ft=!1;function ot(t,e,n,r){e.child=t===null?z_(e,null,n,r):Ki(e,t.child,n,r)}function xg(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=gf(t,e,n,r,s,i),n=yf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&n&&rf(e),e.flags|=1,ot(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pw(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,r)&&t.ref===e.ref)return Cn(t,e,i)}return e.flags|=1,t=or(s,r),t.ref=e.ref,t.return=e,e.child=t}function pw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(To(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Cn(t,e,i)}return Hh(t,e,n,r,i)}function mw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ni,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ni,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ni,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ni,_t),_t|=r;return ot(t,e,i,n),e.child}function gw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hh(t,e,n,r,i){var s=mt(n)?jr:nt.current;return s=qi(e,s),Fi(e,i),n=gf(t,e,n,r,s,i),r=yf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cn(t,e,i)):(me&&r&&rf(e),e.flags|=1,ot(t,e,n,i),e.child)}function Dg(t,e,n,r,i){if(mt(n)){var s=!0;Al(e)}else s=!1;if(Fi(e,i),e.stateNode===null)nl(t,e),hw(e,n,r),Wh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vt(c):(c=mt(n)?jr:nt.current,c=qi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Rg(e,o,r,c),zn=!1;var m=e.memoizedState;o.state=m,xl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||zn?(typeof f=="function"&&($h(e,n,f,r),u=e.memoizedState),(l=zn||Ag(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,W_(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Ft(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=mt(n)?jr:nt.current,u=qi(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Rg(e,o,r,u),zn=!1,m=e.memoizedState,o.state=m,xl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||pt.current||zn?(typeof T=="function"&&($h(e,n,T,r),R=e.memoizedState),(c=zn||Ag(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kh(t,e,n,r,s,i)}function Kh(t,e,n,r,i,s){gw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&yg(e,n,!1),Cn(t,e,s);r=e.stateNode,TA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&yg(e,n,!0),e.child}function yw(t){var e=t.stateNode;e.pendingContext?gg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gg(t,e.context,!1),df(t,e.containerInfo)}function Og(t,e,n,r,i){return Hi(),of(i),e.flags|=256,ot(t,e,n,r),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Qh(t){return{baseLanes:t,cachePool:null,transitions:null}}function vw(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ye,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,r,0,null),t=Fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qh(n),e.memoizedState=Gh,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return IA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=or(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Qh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gh,r}return s=t.child,t=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&of(r),Ki(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Hc(Error(j(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_u({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=Qh(o),e.memoizedState=Gh,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Hc(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),zt(r,t,i,-1))}return Rf(),r=Hc(Error(j(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=nr(i.nextSibling),Tt=e,me=!0,jt=null,t!==null&&(kt[xt++]=gn,kt[xt++]=yn,kt[xt++]=Br,gn=t.id,yn=t.overflow,Br=e),e=wf(e,r.children),e.flags|=4096,e)}function Vg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zh(t.return,e,n)}function Kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _w(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vg(t,n,e);else if(t.tag===19)Vg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SA(t,e,n){switch(e.tag){case 3:yw(e),Hi();break;case 5:q_(e);break;case 1:mt(e.type)&&Al(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?vw(t,e,n):(he(ye,ye.current&1),t=Cn(t,e,n),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _w(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,mw(t,e,n)}return Cn(t,e,n)}var ww,Yh,Ew,Tw;ww=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yh=function(){};Ew=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vr(en.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Eh(t,i),r=Eh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}Ih(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Us(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AA(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&Sl(),Ye(e),null;case 3:return r=e.stateNode,Gi(),pe(pt),pe(nt),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(id(jt),jt=null))),Yh(t,e),Ye(e),null;case 5:ff(e);var i=Vr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)Ew(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ye(e),null}if(t=Vr(en.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Hs.length;i++)fe(Hs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":$m(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":qm(r,s),fe("invalid",r)}Ih(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&La(r.textContent,l,t),i=["children",""+l]):mo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Pa(r),Wm(r,s,!0);break;case"textarea":Pa(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[Ao]=r,ww(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hs.length;i++)fe(Hs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":$m(t,r),i=vh(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",t);break;case"textarea":qm(t,r),i=Eh(t,r),fe("invalid",t);break;default:i=r}Ih(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&go(t,u):typeof u=="number"&&go(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&$d(t,s,u,o))}switch(n){case"input":Pa(t),Wm(t,r,!1);break;case"textarea":Pa(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Tw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Vr(Po.current),Vr(en.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&wt!==null&&e.mode&1&&!(e.flags&128))j_(),Hi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Jt]=e}else Hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else jt!==null&&(id(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?De===0&&(De=3):Rf())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Gi(),Yh(t,e),t===null&&Io(e.stateNode.containerInfo),Ye(e),null;case 10:return uf(e.type._context),Ye(e),null;case 17:return mt(e.type)&&Sl(),Ye(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Us(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Us(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>Yi&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ye(e),null}else 2*Pe()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function RA(t,e){switch(sf(e),e.tag){case 1:return mt(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),pe(pt),pe(nt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Gi(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var Ua=!1,Ze=!1,PA=typeof WeakSet=="function"?WeakSet:Set,W=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Lg=!1;function CA(t,e){if(Vh=wl,t=P_(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},wl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var C=R.memoizedProps,N=R.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?C:Ft(e.type,C),N);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=Lg,Lg=!1,R}function io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iw(t){var e=t.alternate;e!==null&&(t.alternate=null,Iw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[Ao],delete e[Fh],delete e[cA],delete e[hA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sw(t){return t.tag===5||t.tag===3||t.tag===4}function Mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(Zh(t,e,n),t=t.sibling;t!==null;)Zh(t,e,n),t=t.sibling}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Ue=null,Ut=!1;function Un(t,e,n){for(n=n.child;n!==null;)Aw(t,e,n),n=n.sibling}function Aw(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(uu,n)}catch{}switch(n.tag){case 5:Ze||xi(n,e);case 6:var r=Ue,i=Ut;Ue=null,Un(t,e,n),Ue=r,Ut=i,Ue!==null&&(Ut?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ut?(t=Ue,n=n.stateNode,t.nodeType===8?jc(t.parentNode,n):t.nodeType===1&&jc(t,n),wo(t)):jc(Ue,n.stateNode));break;case 4:r=Ue,i=Ut,Ue=n.stateNode.containerInfo,Ut=!0,Un(t,e,n),Ue=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}Un(t,e,n);break;case 1:if(!Ze&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Un(t,e,n),Ze=r):Un(t,e,n);break;default:Un(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PA),e.forEach(function(r){var i=bA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ue=l.stateNode,Ut=!1;break e;case 3:Ue=l.stateNode.containerInfo,Ut=!0;break e;case 4:Ue=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Ue===null)throw Error(j(160));Aw(s,o,i),Ue=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rw(e,t),e=e.sibling}function Rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Qt(t),r&4){try{io(3,t,t.return),yu(3,t)}catch(C){Ie(t,t.return,C)}try{io(5,t,t.return)}catch(C){Ie(t,t.return,C)}}break;case 1:bt(e,t),Qt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(bt(e,t),Qt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{go(i,"")}catch(C){Ie(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gv(i,s),Sh(l,o);var c=Sh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Zv(i,p):f==="dangerouslySetInnerHTML"?Jv(i,p):f==="children"?go(i,p):$d(i,f,p,c)}switch(l){case"input":_h(i,s);break;case"textarea":Qv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Vi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(C){Ie(t,t.return,C)}}break;case 6:if(bt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){Ie(t,t.return,C)}}break;case 3:if(bt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(C){Ie(t,t.return,C)}break;case 4:bt(e,t),Qt(t);break;case 13:bt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Pe())),r&4&&bg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,bt(e,t),Ze=c):bt(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,T=m.child,m.tag){case 0:case 11:case 14:case 15:io(4,m,m.return);break;case 1:xi(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(C){Ie(r,n,C)}}break;case 5:xi(m,m.return);break;case 22:if(m.memoizedState!==null){Ug(p);continue}}T!==null?(T.return=m,W=T):Ug(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Xv("display",o))}catch(C){Ie(t,t.return,C)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){Ie(t,t.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bt(e,t),Qt(t),r&4&&bg(t);break;case 21:break;default:bt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(go(i,""),r.flags&=-33);var s=Mg(t);ed(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mg(t);Zh(t,l,o);break;default:throw Error(j(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kA(t,e,n){W=t,Pw(t)}function Pw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Ua;var c=Ze;if(Ua=o,(Ze=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?jg(i):u!==null?(u.return=o,W=u):jg(i);for(;s!==null;)W=s,Pw(s),s=s.sibling;W=i,Ua=l,Ze=c}Fg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Fg(t)}}function Fg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&wo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Ze||e.flags&512&&Xh(e)}catch(m){Ie(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ug(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function jg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Xh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Xh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var xA=Math.ceil,Vl=Vn.ReactCurrentDispatcher,Ef=Vn.ReactCurrentOwner,Dt=Vn.ReactCurrentBatchConfig,re=0,be=null,ke=null,ze=0,_t=0,Ni=vr(0),De=0,No=null,$r=0,vu=0,Tf=0,so=null,dt=null,If=0,Yi=1/0,pn=null,Ll=!1,td=null,ir=null,ja=!1,Yn=null,Ml=0,oo=0,nd=null,rl=-1,il=0;function ut(){return re&6?Pe():rl!==-1?rl:rl=Pe()}function sr(t){return t.mode&1?re&2&&ze!==0?ze&-ze:fA.transition!==null?(il===0&&(il=h_()),il):(t=ae,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function zt(t,e,n,r){if(50<oo)throw oo=0,nd=null,Error(j(185));qo(t,n,r),(!(re&2)||t!==be)&&(t===be&&(!(re&2)&&(vu|=n),De===4&&Wn(t,ze)),gt(t,r),n===1&&re===0&&!(e.mode&1)&&(Yi=Pe()+500,pu&&_r()))}function gt(t,e){var n=t.callbackNode;fS(t,e);var r=_l(t,t===be?ze:0);if(r===0)n!==null&&Qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qm(n),e===1)t.tag===0?dA(Bg.bind(null,t)):b_(Bg.bind(null,t)),lA(function(){!(re&6)&&_r()}),n=null;else{switch(d_(r)){case 1:n=Gd;break;case 4:n=u_;break;case 16:n=vl;break;case 536870912:n=c_;break;default:n=vl}n=Lw(n,Cw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cw(t,e){if(rl=-1,il=0,re&6)throw Error(j(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=_l(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bl(t,r);else{e=r;var i=re;re|=2;var s=xw();(be!==t||ze!==e)&&(pn=null,Yi=Pe()+500,br(t,e));do try{OA();break}catch(l){kw(t,l)}while(!0);lf(),Vl.current=s,re=i,ke!==null?e=0:(be=null,ze=0,e=De)}if(e!==0){if(e===2&&(i=kh(t),i!==0&&(r=i,e=rd(t,i))),e===1)throw n=No,br(t,0),Wn(t,r),gt(t,Pe()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!NA(i)&&(e=bl(t,r),e===2&&(s=kh(t),s!==0&&(r=s,e=rd(t,s))),e===1))throw n=No,br(t,0),Wn(t,r),gt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:xr(t,dt,pn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=If+500-Pe(),10<e)){if(_l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bh(xr.bind(null,t,dt,pn),e);break}xr(t,dt,pn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xA(r/1960))-r,10<r){t.timeoutHandle=bh(xr.bind(null,t,dt,pn),r);break}xr(t,dt,pn);break;case 5:xr(t,dt,pn);break;default:throw Error(j(329))}}}return gt(t,Pe()),t.callbackNode===n?Cw.bind(null,t):null}function rd(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=bl(t,e),t!==2&&(e=dt,dt=n,e!==null&&id(e)),t}function id(t){dt===null?dt=t:dt.push.apply(dt,t)}function NA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~Tf,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Bg(t){if(re&6)throw Error(j(327));Ui();var e=_l(t,0);if(!(e&1))return gt(t,Pe()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var r=kh(t);r!==0&&(e=r,n=rd(t,r))}if(n===1)throw n=No,br(t,0),Wn(t,e),gt(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,dt,pn),gt(t,Pe()),null}function Sf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Yi=Pe()+500,pu&&_r())}}function Wr(t){Yn!==null&&Yn.tag===0&&!(re&6)&&Ui();var e=re;re|=1;var n=Dt.transition,r=ae;try{if(Dt.transition=null,ae=1,t)return t()}finally{ae=r,Dt.transition=n,re=e,!(re&6)&&_r()}}function Af(){_t=Ni.current,pe(Ni)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aA(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Gi(),pe(pt),pe(nt),pf();break;case 5:ff(r);break;case 4:Gi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:uf(r.type._context);break;case 22:case 23:Af()}n=n.return}if(be=t,ke=t=or(t.current,null),ze=_t=e,De=0,No=null,Tf=vu=$r=0,dt=so=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Or=null}return t}function kw(t,e){do{var n=ke;try{if(lf(),el.current=Ol,Dl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dl=!1}if(zr=0,Le=Ne=ve=null,ro=!1,Co=0,Ef.current=null,n===null||n.return===null){De=1,No=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Cg(o);if(T!==null){T.flags&=-257,kg(T,o,l,s,e),T.mode&1&&Pg(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var C=new Set;C.add(u),e.updateQueue=C}else R.add(u);break e}else{if(!(e&1)){Pg(s,c,e),Rf();break e}u=Error(j(426))}}else if(me&&l.mode&1){var N=Cg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kg(N,o,l,s,e),of(Qi(u,l));break e}}s=u=Qi(u,l),De!==4&&(De=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=dw(s,u,e);Eg(s,E);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(ir===null||!ir.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=fw(s,l,e);Eg(s,O);break e}}s=s.return}while(s!==null)}Dw(n)}catch(D){e=D,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function xw(){var t=Vl.current;return Vl.current=Ol,t===null?Ol:t}function Rf(){(De===0||De===3||De===2)&&(De=4),be===null||!($r&268435455)&&!(vu&268435455)||Wn(be,ze)}function bl(t,e){var n=re;re|=2;var r=xw();(be!==t||ze!==e)&&(pn=null,br(t,e));do try{DA();break}catch(i){kw(t,i)}while(!0);if(lf(),re=n,Vl.current=r,ke!==null)throw Error(j(261));return be=null,ze=0,De}function DA(){for(;ke!==null;)Nw(ke)}function OA(){for(;ke!==null&&!iS();)Nw(ke)}function Nw(t){var e=Vw(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?Dw(t):ke=e,Ef.current=null}function Dw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RA(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,ke=null;return}}else if(n=AA(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);De===0&&(De=5)}function xr(t,e,n){var r=ae,i=Dt.transition;try{Dt.transition=null,ae=1,VA(t,e,n,r)}finally{Dt.transition=i,ae=r}return null}function VA(t,e,n,r){do Ui();while(Yn!==null);if(re&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pS(t,s),t===be&&(ke=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,Lw(vl,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=ae;ae=1;var l=re;re|=4,Ef.current=null,CA(t,n),Rw(n,t),eA(Lh),wl=!!Vh,Lh=Vh=null,t.current=n,kA(n),sS(),re=l,ae=o,Dt.transition=s}else t.current=n;if(ja&&(ja=!1,Yn=t,Ml=i),s=t.pendingLanes,s===0&&(ir=null),lS(n.stateNode),gt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=td,td=null,t;return Ml&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===nd?oo++:(oo=0,nd=t):oo=0,_r(),null}function Ui(){if(Yn!==null){var t=d_(Ml),e=Dt.transition,n=ae;try{if(Dt.transition=null,ae=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,Ml=0,re&6)throw Error(j(331));var i=re;for(re|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:io(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,T=f.return;if(Iw(f),f===c){W=null;break}if(m!==null){m.return=T,W=m;break}W=T}}}var R=s.alternate;if(R!==null){var C=R.child;if(C!==null){R.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,W=E;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yu(9,l)}}catch(D){Ie(l,l.return,D)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(re=i,_r(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(uu,t)}catch{}r=!0}return r}finally{ae=n,Dt.transition=e}}return!1}function zg(t,e,n){e=Qi(n,e),e=dw(t,e,1),t=rr(t,e,1),e=ut(),t!==null&&(qo(t,1,e),gt(t,e))}function Ie(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){t=Qi(n,t),t=fw(e,t,1),e=rr(e,t,1),t=ut(),e!==null&&(qo(e,1,t),gt(e,t));break}}e=e.return}}function LA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(De===4||De===3&&(ze&130023424)===ze&&500>Pe()-If?br(t,0):Tf|=n),gt(t,e)}function Ow(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=ut();t=Pn(t,e),t!==null&&(qo(t,e,n),gt(t,n))}function MA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ow(t,n)}function bA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Ow(t,n)}var Vw;Vw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,SA(t,e,n);ft=!!(t.flags&131072)}else ft=!1,me&&e.flags&1048576&&F_(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=qi(e,nt.current);Fi(e,n),i=gf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,Al(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,Wh(e,r,t,n),e=Kh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&rf(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UA(r),t=Ft(r,t),i){case 0:e=Hh(null,e,r,t,n);break e;case 1:e=Dg(null,e,r,t,n);break e;case 11:e=xg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,Ft(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),Dg(t,e,r,i,n);case 3:e:{if(yw(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,W_(t,e),xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qi(Error(j(423)),e),e=Og(t,e,r,n,i);break e}else if(r!==i){i=Qi(Error(j(424)),e),e=Og(t,e,r,n,i);break e}else for(wt=nr(e.stateNode.containerInfo.firstChild),Tt=e,me=!0,jt=null,n=z_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=Cn(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return q_(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),gw(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return vw(t,e,n);case 4:return df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),xg(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Cl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!pt.current){e=Cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Vt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Ft(r,e.pendingProps),i=Ft(r.type,i),Ng(t,e,r,i,n);case 15:return pw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ft(r,i),nl(t,e),e.tag=1,mt(r)?(t=!0,Al(e)):t=!1,Fi(e,n),hw(e,r,i),Wh(e,r,i,n),Kh(null,e,r,!0,t,n);case 19:return _w(t,e,n);case 22:return mw(t,e,n)}throw Error(j(156,e.tag))};function Lw(t,e){return l_(t,e)}function FA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new FA(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UA(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Hd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Fr(n.children,i,s,e);case Wd:o=8,i|=8;break;case ph:return t=Nt(12,n,e,i|2),t.elementType=ph,t.lanes=s,t;case mh:return t=Nt(13,n,e,i),t.elementType=mh,t.lanes=s,t;case gh:return t=Nt(19,n,e,i),t.elementType=gh,t.lanes=s,t;case qv:return _u(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $v:o=10;break e;case Wv:o=9;break e;case qd:o=11;break e;case Hd:o=14;break e;case Bn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=qv,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,i,s,o,l,u){return t=new jA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function BA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Mw(t){if(!t)return dr;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(mt(n))return M_(t,n,e)}return e}function bw(t,e,n,r,i,s,o,l,u){return t=Cf(n,r,!0,t,i,s,o,l,u),t.context=Mw(null),n=t.current,r=ut(),i=sr(n),s=Tn(r,i),s.callback=e??null,rr(n,s,i),t.current.lanes=i,qo(t,i,r),gt(t,r),t}function wu(t,e,n,r){var i=e.current,s=ut(),o=sr(i);return n=Mw(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rr(i,e,o),t!==null&&(zt(t,i,o,s),Za(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){$g(t,e),(t=t.alternate)&&$g(t,e)}function zA(){return null}var Fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function xf(t){this._internalRoot=t}Eu.prototype.render=xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));wu(t,e,null,null)};Eu.prototype.unmount=xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){wu(null,t,null,null)}),e[Rn]=null}};function Eu(t){this._internalRoot=t}Eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&y_(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function $A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fl(o);s.call(c)}}var o=bw(e,r,t,0,null,!1,!1,"",Wg);return t._reactRootContainer=o,t[Rn]=o.current,Io(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Fl(u);l.call(c)}}var u=Cf(t,0,!1,null,null,!1,!1,"",Wg);return t._reactRootContainer=u,t[Rn]=u.current,Io(t.nodeType===8?t.parentNode:t),Wr(function(){wu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Fl(o);l.call(u)}}wu(e,o,t,i)}else o=$A(n,e,t,i,r);return Fl(o)}f_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(Qd(e,n|1),gt(e,Pe()),!(re&6)&&(Yi=Pe()+500,_r()))}break;case 13:Wr(function(){var r=Pn(t,1);if(r!==null){var i=ut();zt(r,t,1,i)}}),kf(t,1)}};Yd=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ut();zt(e,t,134217728,n)}kf(t,134217728)}};p_=function(t){if(t.tag===13){var e=sr(t),n=Pn(t,e);if(n!==null){var r=ut();zt(n,t,e,r)}kf(t,e)}};m_=function(){return ae};g_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Rh=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fu(r);if(!i)throw Error(j(90));Kv(r),_h(r,i)}}}break;case"textarea":Qv(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};n_=Sf;r_=Wr;var WA={usingClientEntryPoint:!1,Events:[Ko,Ai,fu,e_,t_,Sf]},js={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qA={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||zA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{uu=Ba.inject(qA),Zt=Ba}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(j(200));return BA(t,e,null,n)};Rt.createRoot=function(t,e){if(!Nf(t))throw Error(j(299));var n=!1,r="",i=Fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,Io(t.nodeType===8?t.parentNode:t),new xf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Wr(t)};Rt.hydrate=function(t,e,n){if(!Tu(e))throw Error(j(200));return Iu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bw(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,Io(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Eu(e)};Rt.render=function(t,e,n){if(!Tu(e))throw Error(j(200));return Iu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(j(40));return t._reactRootContainer?(Wr(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Sf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Iu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uw)}catch(t){console.error(t)}}Uw(),Uv.exports=Rt;var HA=Uv.exports,qg=HA;dh.createRoot=qg.createRoot,dh.hydrateRoot=qg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Do.apply(null,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const Hg="popstate";function KA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return sd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ul(i)}return QA(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Df(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GA(){return Math.random().toString(36).substr(2,8)}function Kg(t,e){return{usr:t.state,key:t.key,idx:e}}function sd(t,e,n,r){return n===void 0&&(n=null),Do({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?cs(e):e,{state:n,key:e&&e.key||r||GA()})}function Ul(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function cs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Do({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Jn.Pop;let N=f(),E=N==null?null:N-c;c=N,u&&u({action:l,location:C.location,delta:E})}function m(N,E){l=Jn.Push;let v=sd(C.location,N,E);c=f()+1;let I=Kg(v,c),O=C.createHref(v);try{o.pushState(I,"",O)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(O)}s&&u&&u({action:l,location:C.location,delta:1})}function T(N,E){l=Jn.Replace;let v=sd(C.location,N,E);c=f();let I=Kg(v,c),O=C.createHref(v);o.replaceState(I,"",O),s&&u&&u({action:l,location:C.location,delta:0})}function R(N){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:Ul(N);return v=v.replace(/ $/,"%20"),_e(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let C={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hg,p),u=N,()=>{i.removeEventListener(Hg,p),u=null}},createHref(N){return e(i,N)},createURL:R,encodeLocation(N){let E=R(N);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:T,go(N){return o.go(N)}};return C}var Gg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gg||(Gg={}));function YA(t,e,n){return n===void 0&&(n="/"),JA(t,e,n)}function JA(t,e,n,r){let i=typeof e=="string"?cs(e):e,s=Ji(i.pathname||"/",n);if(s==null)return null;let o=jw(t);XA(o);let l=null,u=uR(s);for(let c=0;l==null&&c<o.length;++c)l=aR(o[c],u);return l}function jw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(_e(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ar([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jw(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:sR(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Bw(s.path))i(s,o,u)}),e}function Bw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function XA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:oR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ZA=/^:[\w-]+$/,eR=3,tR=2,nR=1,rR=10,iR=-2,Qg=t=>t==="*";function sR(t,e){let n=t.split("/"),r=n.length;return n.some(Qg)&&(r+=iR),e&&(r+=tR),n.filter(i=>!Qg(i)).reduce((i,s)=>i+(ZA.test(s)?eR:s===""?nR:rR),r)}function oR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function aR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=od({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ar([s,p.pathname]),pathnameBase:pR(ar([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ar([s,p.pathnameBase]))}return o}function od(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:T}=f;if(m==="*"){let C=l[p]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const R=l[p];return T&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function lR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Df(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Df(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const cR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hR=t=>cR.test(t);function dR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?cs(t):t,s;if(n)if(hR(n))s=n;else{if(n.includes("//")){let o=n;n=zw(n),Df(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Yg(n.substring(1),"/"):s=Yg(n,e)}else s=e;return{pathname:s,search:mR(r),hash:gR(i)}}function Yg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Of(t,e){let n=fR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=cs(t):(i=Do({},t),_e(!i.pathname||!i.pathname.includes("?"),Yc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Yc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=dR(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const zw=t=>t.replace(/\/\/+/g,"/"),ar=t=>zw(t.join("/")),pR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),mR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,gR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $w=["post","put","patch","delete"];new Set($w);const vR=["get",...$w];new Set(vR);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(null,arguments)}const Su=b.createContext(null),Ww=b.createContext(null),Ln=b.createContext(null),Au=b.createContext(null),wr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),qw=b.createContext(null);function _R(t,e){let{relative:n}=e===void 0?{}:e;hs()||_e(!1);let{basename:r,navigator:i}=b.useContext(Ln),{hash:s,pathname:o,search:l}=Ru(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function hs(){return b.useContext(Au)!=null}function ni(){return hs()||_e(!1),b.useContext(Au).location}function Hw(t){b.useContext(Ln).static||b.useLayoutEffect(t)}function ds(){let{isDataRoute:t}=b.useContext(wr);return t?DR():wR()}function wR(){hs()||_e(!1);let t=b.useContext(Su),{basename:e,future:n,navigator:r}=b.useContext(Ln),{matches:i}=b.useContext(wr),{pathname:s}=ni(),o=JSON.stringify(Of(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return Hw(()=>{l.current=!0}),b.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Vf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ar([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function Ru(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Ln),{matches:i}=b.useContext(wr),{pathname:s}=ni(),o=JSON.stringify(Of(i,r.v7_relativeSplatPath));return b.useMemo(()=>Vf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ER(t,e){return TR(t,e)}function TR(t,e,n,r){hs()||_e(!1);let{navigator:i}=b.useContext(Ln),{matches:s}=b.useContext(wr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ni(),f;if(e){var p;let N=typeof e=="string"?cs(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||_e(!1),f=N}else f=c;let m=f.pathname||"/",T=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=YA(t,{pathname:T}),C=PR(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:ar([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:ar([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&C?b.createElement(Au.Provider,{value:{location:Oo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jn.Pop}},C):C}function IR(){let t=NR(),e=yR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const SR=b.createElement(IR,null);class AR extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(wr.Provider,{value:this.props.routeContext},b.createElement(qw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RR(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Su);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(wr.Provider,{value:e},r)}function PR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||_e(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:T}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let T,R=!1,C=null,N=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,C=p.route.errorElement||SR,u&&(c<0&&m===0?(OR("route-fallback"),R=!0,N=null):c===m&&(R=!0,N=p.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let I;return T?I=C:R?I=N:p.route.Component?I=b.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=f,b.createElement(RR,{match:p,routeContext:{outlet:f,matches:E,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?b.createElement(AR,{location:n.location,revalidation:n.revalidation,component:C,error:T,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var Kw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Kw||{}),Gw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gw||{});function CR(t){let e=b.useContext(Su);return e||_e(!1),e}function kR(t){let e=b.useContext(Ww);return e||_e(!1),e}function xR(t){let e=b.useContext(wr);return e||_e(!1),e}function Qw(t){let e=xR(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function NR(){var t;let e=b.useContext(qw),n=kR(),r=Qw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function DR(){let{router:t}=CR(Kw.UseNavigateStable),e=Qw(Gw.UseNavigateStable),n=b.useRef(!1);return Hw(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Oo({fromRouteId:e},s)))},[t,e])}const Jg={};function OR(t,e,n){Jg[t]||(Jg[t]=!0)}function VR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function LR(t){let{to:e,replace:n,state:r,relative:i}=t;hs()||_e(!1);let{future:s,static:o}=b.useContext(Ln),{matches:l}=b.useContext(wr),{pathname:u}=ni(),c=ds(),f=Vf(e,Of(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return b.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function gi(t){_e(!1)}function MR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1,future:l}=t;hs()&&_e(!1);let u=e.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:u,navigator:s,static:o,future:Oo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=cs(r));let{pathname:f="/",search:p="",hash:m="",state:T=null,key:R="default"}=r,C=b.useMemo(()=>{let N=Ji(f,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:T,key:R},navigationType:i}},[u,f,p,m,T,R,i]);return C==null?null:b.createElement(Ln.Provider,{value:c},b.createElement(Au.Provider,{children:n,value:C}))}function bR(t){let{children:e,location:n}=t;return ER(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,ad(r.props.children,s));return}r.type!==gi&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(null,arguments)}function Yw(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function FR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function UR(t,e){return t.button===0&&(!e||e==="_self")&&!FR(t)}function ld(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function jR(t,e){let n=ld(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const BR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zR=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$R="6";try{window.__reactRouterVersion=$R}catch{}const WR=b.createContext({isTransitioning:!1}),qR="startTransition",Xg=LI[qR];function HR(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=KA({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=b.useCallback(p=>{c&&Xg?Xg(()=>u(p)):u(p)},[u,c]);return b.useLayoutEffect(()=>o.listen(f),[o,f]),b.useEffect(()=>VR(r),[r]),b.createElement(MR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const KR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QR=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=Yw(e,BR),{basename:T}=b.useContext(Ln),R,C=!1;if(typeof c=="string"&&GR.test(c)&&(R=c,KR))try{let I=new URL(window.location.href),O=c.startsWith("//")?new URL(I.protocol+c):new URL(c),D=Ji(O.pathname,T);O.origin===I.origin&&D!=null?c=D+O.search+O.hash:C=!0}catch{}let N=_R(c,{relative:i}),E=XR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function v(I){r&&r(I),I.defaultPrevented||E(I)}return b.createElement("a",jl({},m,{href:R||N,onClick:C||s?r:v,ref:n,target:u}))}),YR=b.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:f}=e,p=Yw(e,zR),m=Ru(u,{relative:p.relative}),T=ni(),R=b.useContext(Ww),{navigator:C,basename:N}=b.useContext(Ln),E=R!=null&&eP(m)&&c===!0,v=C.encodeLocation?C.encodeLocation(m).pathname:m.pathname,I=T.pathname,O=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(I=I.toLowerCase(),O=O?O.toLowerCase():null,v=v.toLowerCase()),O&&N&&(O=Ji(O,N)||O);const D=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=I===v||!o&&I.startsWith(v)&&I.charAt(D)==="/",_=O!=null&&(O===v||!o&&O.startsWith(v)&&O.charAt(v.length)==="/"),y={isActive:F,isPending:_,isTransitioning:E},w=F?r:void 0,S;typeof s=="function"?S=s(y):S=[s,F?"active":null,_?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(y):l;return b.createElement(QR,jl({},p,{"aria-current":w,className:S,ref:n,style:P,to:u,viewTransition:c}),typeof f=="function"?f(y):f)});var ud;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ud||(ud={}));var Zg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zg||(Zg={}));function JR(t){let e=b.useContext(Su);return e||_e(!1),e}function XR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ds(),c=ni(),f=Ru(t,{relative:o});return b.useCallback(p=>{if(UR(p,n)){p.preventDefault();let m=r!==void 0?r:Ul(c)===Ul(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}function ZR(t){let e=b.useRef(ld(t)),n=b.useRef(!1),r=ni(),i=b.useMemo(()=>jR(r.search,n.current?null:e.current),[r.search]),s=ds(),o=b.useCallback((l,u)=>{const c=ld(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}function eP(t,e){e===void 0&&(e={});let n=b.useContext(WR);n==null&&_e(!1);let{basename:r}=JR(ud.useViewTransitionState),i=Ru(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ji(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ji(n.nextLocation.pathname,r)||n.nextLocation.pathname;return od(i.pathname,o)!=null||od(i.pathname,s)!=null}var ey={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new nP;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rP=function(t){const e=Jw(t);return Xw.encodeByteArray(e,!0)},Bl=function(t){return rP(t).replace(/\./g,"")},Zw=function(t){try{return Xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=()=>iP().__FIREBASE_DEFAULTS__,oP=()=>{if(typeof process>"u"||typeof ey>"u")return;const t=ey.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zw(t[1]);return e&&JSON.parse(e)},Pu=()=>{try{return sP()||oP()||aP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eE=t=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lP=t=>{const e=eE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tE=()=>{var t;return(t=Pu())===null||t===void 0?void 0:t.config},nE=t=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function dP(){var t;const e=(t=Pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mP(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gP(){return!dP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iE(){try{return typeof indexedDB=="object"}catch{return!1}}function sE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vP,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_P(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Gt(i,l,r)}}function _P(t,e){return t.replace(wP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wP=/\{\$([^}]+)}/g;function EP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ty(s)&&ty(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ty(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TP(t,e){const n=new IP(t,e);return n.subscribe.bind(n)}class IP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jc),i.error===void 0&&(i.error=Jc),i.complete===void 0&&(i.complete=Jc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=1e3,RP=2,PP=4*60*60*1e3,CP=.5;function ny(t,e=AP,n=RP){const r=e*Math.pow(n,t),i=Math.round(CP*r*(Math.random()-.5)*2);return Math.min(PP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NP(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xP(t){return t===Nr?void 0:t}function NP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const OP={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},VP=te.INFO,LP={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},MP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=LP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=VP,this._logHandler=MP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const bP=(t,e)=>e.some(n=>t instanceof n);let ry,iy;function FP(){return ry||(ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UP(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,cd=new WeakMap,aE=new WeakMap,Xc=new WeakMap,Lf=new WeakMap;function jP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function BP(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zP(t){hd=t(hd)}function $P(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zc(this),e,...n);return aE.set(r,e.sort?e.sort():[e]),lr(r)}:UP().includes(t)?function(...e){return t.apply(Zc(this),e),lr(oE.get(this))}:function(...e){return lr(t.apply(Zc(this),e))}}function WP(t){return typeof t=="function"?$P(t):(t instanceof IDBTransaction&&BP(t),bP(t,FP())?new Proxy(t,hd):t)}function lr(t){if(t instanceof IDBRequest)return jP(t);if(Xc.has(t))return Xc.get(t);const e=WP(t);return e!==t&&(Xc.set(t,e),Lf.set(e,t)),e}const Zc=t=>Lf.get(t);function lE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qP=["get","getKey","getAll","getAllKeys","count"],HP=["put","add","delete","clear"],eh=new Map;function sy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eh.get(e))return eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return eh.set(e,s),s}zP(t=>({...t,get:(e,n,r)=>sy(e,n)||t.get(e,n,r),has:(e,n)=>!!sy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",oy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Cu("@firebase/app"),QP="@firebase/app-compat",YP="@firebase/analytics-compat",JP="@firebase/analytics",XP="@firebase/app-check-compat",ZP="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/data-connect",iC="@firebase/database-compat",sC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",uC="@firebase/messaging",cC="@firebase/messaging-compat",hC="@firebase/performance",dC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",yC="@firebase/firestore",vC="@firebase/vertexai-preview",_C="@firebase/firestore-compat",wC="firebase",EC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="[DEFAULT]",TC={[dd]:"fire-core",[QP]:"fire-core-compat",[JP]:"fire-analytics",[YP]:"fire-analytics-compat",[ZP]:"fire-app-check",[XP]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-data-connect",[iC]:"fire-rtdb-compat",[sC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[uC]:"fire-fcm",[cC]:"fire-fcm-compat",[hC]:"fire-perf",[dC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[yC]:"fire-fst",[_C]:"fire-fst-compat",[vC]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,IC=new Map,pd=new Map;function ay(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(pd.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,t);for(const n of zl.values())ay(n,t);for(const n of IC.values())ay(n,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new ri("app","Firebase",SC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=EC;function uE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=tE()),!n)throw ur.create("no-options");const s=zl.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new DP(i);for(const u of pd.values())o.addComponent(u);const l=new AC(n,r,o);return zl.set(i,l),l}function Mf(t=fd){const e=zl.get(t);if(!e&&t===fd&&tE())return uE();if(!e)throw ur.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=TC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}sn(new qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="firebase-heartbeat-database",PC=1,Vo="firebase-heartbeat-store";let th=null;function cE(){return th||(th=lE(RC,PC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),th}async function CC(t){try{const n=(await cE()).transaction(Vo),r=await n.objectStore(Vo).get(hE(t));return await n.done,r}catch(e){if(e instanceof Gt)kn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function ly(t,e){try{const r=(await cE()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,hE(t)),await r.done}catch(n){if(n instanceof Gt)kn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function hE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=1024,xC=30*24*60*60*1e3;class NC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=xC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uy(),{heartbeatsToSend:r,unsentEntries:i}=DC(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function uy(){return new Date().toISOString().substring(0,10)}function DC(t,e=kC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iE()?sE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cy(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){sn(new qt("platform-logger",e=>new KP(e),"PRIVATE")),sn(new qt("heartbeat",e=>new NC(e),"PRIVATE")),Ot(dd,oy,t),Ot(dd,oy,"esm2017"),Ot("fire-js","")}VC("");function bf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LC=dE,fE=new ri("auth","Firebase",dE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Cu("@firebase/auth");function MC(t,...e){$l.logLevel<=te.WARN&&$l.warn(`Auth (${fs}): ${t}`,...e)}function ol(t,...e){$l.logLevel<=te.ERROR&&$l.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Ff(t,...e)}function tn(t,...e){return Ff(t,...e)}function pE(t,e,n){const r=Object.assign(Object.assign({},LC()),{[e]:n});return new ri("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return pE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fE.create(t,...e)}function Q(t,e,...n){if(!t)throw Ff(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function xn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bC(){return hy()==="http:"||hy()==="https:"}function hy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bC()||rE()||"connection"in navigator)?navigator.onLine:!0}function UC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=hP()||pP()}get(){return FC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new Yo(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,i={}){return gE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return fP()||(c.referrerPolicy="no-referrer"),mE.fetch()(yE(t,t.config.apiHost,n,l),c)})}async function gE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jC),e);try{const i=new $C(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pE(t,f,c);Ht(t,f)}}catch(i){if(i instanceof Gt)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Jo(t,e,n,r,i={}){const s=await Tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Uf(t.config,i):`${t.config.apiScheme}://${i}`}function zC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $C{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),BC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function dy(t){return t!==void 0&&t.enterprise!==void 0}class WC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qC(t,e){return Tr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function vE(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KC(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=jf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ao(nh(i.auth_time)),issuedAtTime:ao(nh(i.iat)),expirationTime:ao(nh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nh(t){return Number(t)*1e3}function jf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zw(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fy(t){const e=jf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&GC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Lo(t,vE(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_E(s.providerUserInfo):[],l=JC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new gd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function YC(t){const e=Se(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _E(t){return t.map(e=>{var{providerId:n}=e,r=bf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){const n=await gE(t,{},async()=>{const r=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=yE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",mE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZC(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=fy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ji;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KC(this,e)}reload(){return YC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Lo(this,HC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:O,isAnonymous:D,providerData:F,stsTokenManager:_}=n;Q(I&&_,e,"internal-error");const y=ji.fromJSON(this.name,_);Q(typeof I=="string",e,"internal-error"),jn(p,e.name),jn(m,e.name),Q(typeof O=="boolean",e,"internal-error"),Q(typeof D=="boolean",e,"internal-error"),jn(T,e.name),jn(R,e.name),jn(C,e.name),jn(N,e.name),jn(E,e.name),jn(v,e.name);const w=new _n({uid:I,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:D,photoURL:R,phoneNumber:T,tenantId:C,stsTokenManager:y,createdAt:E,lastLoginAt:v});return F&&Array.isArray(F)&&(w.providerData=F.map(S=>Object.assign({},S))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_E(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ji;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Map;function wn(t){xn(t instanceof Function,"Expected a class definition");let e=py.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,py.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const my=wE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=al(this.userKey,i.apiKey,s),this.fullPersistenceKey=al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(wn(my),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||wn(my);const o=al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=_n._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RE(e))return"Blackberry";if(PE(e))return"Webos";if(TE(e))return"Safari";if((e.includes("chrome/")||IE(e))&&!e.includes("edge/"))return"Chrome";if(AE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function EE(t=rt()){return/firefox\//i.test(t)}function TE(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function IE(t=rt()){return/crios\//i.test(t)}function SE(t=rt()){return/iemobile/i.test(t)}function AE(t=rt()){return/android/i.test(t)}function RE(t=rt()){return/blackberry/i.test(t)}function PE(t=rt()){return/webos/i.test(t)}function Bf(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function e1(t=rt()){var e;return Bf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function t1(){return mP()&&document.documentMode===10}function CE(t=rt()){return Bf(t)||AE(t)||PE(t)||RE(t)||/windows phone/i.test(t)||SE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e=[]){let n;switch(t){case"Browser":n=gy(rt());break;case"Worker":n=`${gy(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=6;class s1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:i1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yy(this),this.idTokenSubscription=new yy(this),this.beforeStateQueue=new n1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vE(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(In(this));const n=e?Se(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r1(this),n=new s1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return Se(t)}class yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=TP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a1(t){ku=t}function xE(t){return ku.loadJS(t)}function l1(){return ku.recaptchaEnterpriseScript}function u1(){return ku.gapiScript}function c1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const h1="recaptcha-enterprise",d1="NO_RECAPTCHA";class f1{constructor(e){this.type=h1,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{qC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new WC(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;dy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(d1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&dy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=l1();u.length!==0&&(u+=l),xE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function vy(t,e,n,r=!1){const i=new f1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function yd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await vy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await vy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){const n=ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function m1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g1(t,e,n){const r=si(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=NE(e),{host:o,port:l}=y1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),v1()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function y1(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_y(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_y(o)}}}function _y(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function v1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function _1(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function T1(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends zf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Mo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Mo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,n,"signInWithPassword",w1);case"emailLink":return E1(e,{email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yd(e,r,"signUpPassword",_1);case"emailLink":return T1(e,{idToken:n,email:this._email,oobCode:this._password});default:Ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class Hr extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A1(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class $f{constructor(e){var n,r,i,s,o,l;const u=Ks(Gs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=S1((i=u.mode)!==null&&i!==void 0?i:null);Q(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=A1(e);try{return new $f(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return Mo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$f.parseLink(n);return Q(r,"argument-error"),Mo._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends DE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Xo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Xo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Xo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e){return Jo(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=wy(r);return new Kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wy(r);return new Kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Gt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function OE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function P1(t,e,n=!1){const r=await Lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Lo(t,OE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=jf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r="signIn",i=await OE(t,r,e),s=await Kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function k1(t,e){return VE(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x1(t,e,n){if(Xt(t.app))return Promise.reject(In(t));const r=si(t),o=await yd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",R1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&LE(t),u}),l=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function N1(t,e,n){return Xt(t.app)?Promise.reject(In(t)):k1(Se(t),ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&LE(t),r})}function D1(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function O1(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function V1(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function L1(t){return Se(t).signOut()}const Hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=1e3,b1=10;class bE extends ME{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);t1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,b1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},M1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bE.type="LOCAL";const F1=bE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends ME{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FE.type="SESSION";const UE=FE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await U1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Wf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function B1(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function W1(){return jE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firebaseLocalStorageDb",q1=1,Kl="firebaseLocalStorage",zE="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function H1(){const t=indexedDB.deleteDatabase(BE);return new Zo(t).toPromise()}function vd(){const t=indexedDB.open(BE,q1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:zE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await H1(),e(await vd()))})})}async function Ey(t,e,n){const r=Nu(t,!0).put({[zE]:e,value:n});return new Zo(r).toPromise()}async function K1(t,e){const n=Nu(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function Ty(t,e){const n=Nu(t,!0).delete(e);return new Zo(n).toPromise()}const G1=800,Q1=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Q1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xu._getInstance(W1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await z1(),!this.activeServiceWorker)return;this.sender=new j1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vd();return await Ey(e,Hl,"1"),await Ty(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>K1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nu(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const Y1=$E;new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e){return e?wn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function X1(t){return VE(t.auth,new qf(t),t.bypassAuthState)}function Z1(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),C1(n,new qf(t),t.bypassAuthState)}async function ek(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),P1(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X1;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return Z1;default:Ht(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new Yo(2e3,1e4);class Di extends WE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}Di.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="pendingRedirect",ll=new Map;class rk extends WE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await ik(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ik(t,e){const n=ak(e),r=ok(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sk(t,e){ll.set(t._key(),e)}function ok(t){return wn(t._redirectPersistence)}function ak(t){return al(nk,t.config.apiKey,t.name)}async function lk(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const r=si(t),i=J1(r,e),o=await new rk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=10*60*1e3;class ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iy(e))}saveEventToCache(e){this.cachedEventUids.add(Iy(e)),this.lastProcessedEventTime=Date.now()}}function Iy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function mk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dk(t);for(const n of e)try{if(gk(n))return}catch{}Ht(t,"unauthorized-domain")}function gk(t){const e=md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pk.test(n))return!1;if(fk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=new Yo(3e4,6e4);function Sy(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vk(t){return new Promise((e,n)=>{var r,i,s;function o(){Sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sy(),n(tn(t,"network-request-failed"))},timeout:yk.get()})}if(!((i=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=nn().gapi)===null||s===void 0)&&s.load)o();else{const l=c1("iframefcb");return nn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},xE(`${u1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function _k(t){return ul=ul||vk(t),ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=new Yo(5e3,15e3),Ek="__/auth/iframe",Tk="emulator/auth/iframe",Ik={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ak(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uf(e,Tk):`https://${t.config.authDomain}/${Ek}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=Sk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qo(r).slice(1)}`}async function Rk(t){const e=await _k(t),n=nn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Ak(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ik,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},wk.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ck=500,kk=600,xk="_blank",Nk="http://localhost";class Ay{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dk(t,e,n,r=Ck,i=kk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Pk),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(l=IE(c)?xk:n),EE(c)&&(e=e||Nk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(e1(c)&&l!=="_self")return Ok(e||"",l),new Ay(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Ay(p)}function Ok(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="__/auth/handler",Lk="emulator/auth/handler",Mk=encodeURIComponent("fac");async function Ry(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof DE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Xo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Mk}=${encodeURIComponent(u)}`:"";return`${bk(t)}?${Qo(l).slice(1)}${c}`}function bk({config:t}){return t.emulator?Uf(t,Lk):`https://${t.authDomain}/${Vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="webStorageSupport";class Fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UE,this._completeRedirectFn=lk,this._overrideRedirectResult=sk}async _openPopup(e,n,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ry(e,n,r,md(),i);return Dk(e,o,Wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ry(e,n,r,md(),i);return B1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rk(e),r=new ck(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rh,{type:rh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rh];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return CE()||TE()||Bf()}}const Uk=Fk;var Py="@firebase/auth",Cy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zk(t){sn(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kE(t)},c=new o1(r,i,s,u);return m1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),sn(new qt("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new jk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Py,Cy,Bk(t)),Ot(Py,Cy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=5*60,Wk=nE("authIdTokenMaxAge")||$k;let ky=null;const qk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wk)return;const i=n==null?void 0:n.token;ky!==i&&(ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hk(t=Mf()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=p1(t,{popupRedirectResolver:Uk,persistence:[Y1,F1,UE]}),r=nE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qk(s.toString());O1(n,o,()=>o(n.currentUser)),D1(n,l=>o(l))}}const i=eE("auth");return i&&g1(n,`http://${i}`),n}function Kk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}a1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zk("Browser");var Gk="firebase",Qk="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(Gk,Qk,"app");const HE="@firebase/installations",Hf="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=1e4,GE=`w:${Hf}`,QE="FIS_v2",Yk="https://firebaseinstallations.googleapis.com/v1",Jk=60*60*1e3,Xk="installations",Zk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gr=new ri(Xk,Zk,ex);function YE(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE({projectId:t}){return`${Yk}/projects/${t}/installations`}function XE(t){return{token:t.token,requestStatus:2,expiresIn:nx(t.expiresIn),creationTime:Date.now()}}async function ZE(t,e){const r=(await e.json()).error;return Gr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tx(t,{refreshToken:e}){const n=e0(t);return n.append("Authorization",rx(e)),n}async function t0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nx(t){return Number(t.replace("s","000"))}function rx(t){return`${QE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ix({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=JE(t),i=e0(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:QE,appId:t.appId,sdkVersion:GE},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await t0(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:XE(c.authToken)}}else throw await ZE("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=/^[cdef][\w-]{21}$/,_d="";function ax(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lx(t);return ox.test(n)?n:_d}catch{return _d}}function lx(t){return sx(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Map;function i0(t,e){const n=Du(t);s0(n,e),ux(n,e)}function s0(t,e){const n=r0.get(t);if(n)for(const r of n)r(e)}function ux(t,e){const n=cx();n&&n.postMessage({key:t,fid:e}),hx()}let Lr=null;function cx(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=t=>{s0(t.data.key,t.data.fid)}),Lr}function hx(){r0.size===0&&Lr&&(Lr.close(),Lr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="firebase-installations-database",fx=1,Qr="firebase-installations-store";let ih=null;function Kf(){return ih||(ih=lE(dx,fx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qr)}}})),ih}async function Gl(t,e){const n=Du(t),i=(await Kf()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&i0(t,e.fid),e}async function o0(t){const e=Du(t),r=(await Kf()).transaction(Qr,"readwrite");await r.objectStore(Qr).delete(e),await r.done}async function Ou(t,e){const n=Du(t),i=(await Kf()).transaction(Qr,"readwrite"),s=i.objectStore(Qr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&i0(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(t){let e;const n=await Ou(t.appConfig,r=>{const i=px(r),s=mx(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===_d?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function px(t){const e=t||{fid:ax(),registrationStatus:0};return a0(e)}function mx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gx(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yx(t)}:{installationEntry:e}}async function gx(t,e){try{const n=await ix(t,e);return Gl(t.appConfig,n)}catch(n){throw YE(n)&&n.customData.serverCode===409?await o0(t.appConfig):await Gl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yx(t){let e=await xy(t.appConfig);for(;e.registrationStatus===1;)await n0(100),e=await xy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Gf(t);return r||n}return e}function xy(t){return Ou(t,e=>{if(!e)throw Gr.create("installation-not-found");return a0(e)})}function a0(t){return vx(t)?{fid:t.fid,registrationStatus:0}:t}function vx(t){return t.registrationStatus===1&&t.registrationTime+KE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x({appConfig:t,heartbeatServiceProvider:e},n){const r=wx(t,n),i=tx(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:GE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await t0(()=>fetch(r,l));if(u.ok){const c=await u.json();return XE(c)}else throw await ZE("Generate Auth Token",u)}function wx(t,{fid:e}){return`${JE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t,e=!1){let n;const r=await Ou(t.appConfig,s=>{if(!l0(s))throw Gr.create("not-registered");const o=s.authToken;if(!e&&Ix(o))return s;if(o.requestStatus===1)return n=Ex(t,e),s;{if(!navigator.onLine)throw Gr.create("app-offline");const l=Ax(s);return n=Tx(t,l),l}});return n?await n:r.authToken}async function Ex(t,e){let n=await Ny(t.appConfig);for(;n.authToken.requestStatus===1;)await n0(100),n=await Ny(t.appConfig);const r=n.authToken;return r.requestStatus===0?Qf(t,e):r}function Ny(t){return Ou(t,e=>{if(!l0(e))throw Gr.create("not-registered");const n=e.authToken;return Rx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Tx(t,e){try{const n=await _x(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Gl(t.appConfig,r),n}catch(n){if(YE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await o0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gl(t.appConfig,r)}throw n}}function l0(t){return t!==void 0&&t.registrationStatus===2}function Ix(t){return t.requestStatus===2&&!Sx(t)}function Sx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jk}function Ax(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Rx(t){return t.requestStatus===1&&t.requestTime+KE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t){const e=t,{installationEntry:n,registrationPromise:r}=await Gf(e);return r?r.catch(console.error):Qf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(t,e=!1){const n=t;return await kx(n),(await Qf(n,e)).token}async function kx(t){const{registrationPromise:e}=await Gf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){if(!t||!t.options)throw sh("App Configuration");if(!t.name)throw sh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw sh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function sh(t){return Gr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="installations",Nx="installations-internal",Dx=t=>{const e=t.getProvider("app").getImmediate(),n=xx(e),r=ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ox=t=>{const e=t.getProvider("app").getImmediate(),n=ii(e,u0).getImmediate();return{getId:()=>Px(n),getToken:i=>Cx(n,i)}};function Vx(){sn(new qt(u0,Dx,"PUBLIC")),sn(new qt(Nx,Ox,"PRIVATE"))}Vx();Ot(HE,Hf);Ot(HE,Hf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="analytics",Lx="firebase_id",Mx="origin",bx=60*1e3,Fx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Cu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new ri("analytics","Analytics",Ux);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){if(!t.startsWith(Yf)){const e=It.create("invalid-gtag-resource",{gtagURL:t});return yt.warn(e.message),""}return t}function c0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bx(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function zx(t,e){const n=Bx("firebase-js-sdk-policy",{createScriptURL:jx}),r=document.createElement("script"),i=`${Yf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $x(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Wx(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await c0(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){yt.error(l)}t("config",i,s)}async function qx(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await c0(n);for(const u of o){const c=l.find(p=>p.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){yt.error(s)}}function Hx(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await qx(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Wx(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){yt.error(l)}}return i}function Kx(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Hx(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Gx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Yf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=30,Yx=1e3;class Jx{constructor(e={},n=Yx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const h0=new Jx;function Xx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Zx(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Xx(r)},s=Fx.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function eN(t,e=h0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw It.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw It.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new rN;return setTimeout(async()=>{l.abort()},bx),d0({appId:r,apiKey:i,measurementId:s},o,l,e)}async function d0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=h0){var s;const{appId:o,measurementId:l}=t;try{await tN(r,e)}catch(u){if(l)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Zx(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!nN(c)){if(i.deleteThrottleMetadata(o),l)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ny(n,i.intervalMillis,Qx):ny(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,p),yt.debug(`Calling attemptFetch again in ${f} millis`),d0(t,p,r,i)}}function tN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nN(t){if(!(t instanceof Gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class rN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(){if(iE())try{await sE()}catch(t){return yt.warn(It.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return yt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oN(t,e,n,r,i,s,o){var l;const u=eN(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>yt.error(T)),e.push(u);const c=sN().then(T=>{if(T)return r.getId()}),[f,p]=await Promise.all([u,c]);Gx(s)||zx(s,f.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Mx]="firebase",m.update=!0,p!=null&&(m[Lx]=p),i("config",f.measurementId,m),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e){this.app=e}_delete(){return delete lo[this.app.options.appId],Promise.resolve()}}let lo={},Dy=[];const Oy={};let oh="dataLayer",lN="gtag",Vy,f0,Ly=!1;function uN(){const t=[];if(rE()&&t.push("This is a browser extension environment."),yP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function cN(t,e,n){uN();const r=t.options.appId;if(!r)throw It.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(lo[r]!=null)throw It.create("already-exists",{id:r});if(!Ly){$x(oh);const{wrappedGtag:s,gtagCore:o}=Kx(lo,Dy,Oy,oh,lN);f0=s,Vy=o,Ly=!0}return lo[r]=oN(t,Dy,Oy,e,Vy,oh,n),new aN(t)}function hN(t=Mf()){t=Se(t);const e=ii(t,Ql);return e.isInitialized()?e.getImmediate():dN(t)}function dN(t,e={}){const n=ii(t,Ql);if(n.isInitialized()){const i=n.getImmediate();if(qr(e,n.getOptions()))return i;throw It.create("already-initialized")}return n.initialize({options:e})}function fN(t,e,n,r){t=Se(t),iN(f0,lo[t.app.options.appId],e,n,r).catch(i=>yt.error(i))}const My="@firebase/analytics",by="0.10.8";function pN(){sn(new qt(Ql,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return cN(r,i,n)},"PUBLIC")),sn(new qt("analytics-internal",t,"PRIVATE")),Ot(My,by),Ot(My,by,"esm2017");function t(e){try{const n=e.getProvider(Ql).getImmediate();return{logEvent:(r,i,s)=>fN(n,r,i,s)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}pN();var Fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,p0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function w(){}w.prototype=y.prototype,_.D=y.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(S,P,k){for(var A=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)A[Ct-2]=arguments[Ct];return y.prototype[P].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,w){w||(w=0);var S=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)S[P]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(P=0;16>P;++P)S[P]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=_.g[0],w=_.g[1],P=_.g[2];var k=_.g[3],A=y+(k^w&(P^k))+S[0]+3614090360&4294967295;y=w+(A<<7&4294967295|A>>>25),A=k+(P^y&(w^P))+S[1]+3905402710&4294967295,k=y+(A<<12&4294967295|A>>>20),A=P+(w^k&(y^w))+S[2]+606105819&4294967295,P=k+(A<<17&4294967295|A>>>15),A=w+(y^P&(k^y))+S[3]+3250441966&4294967295,w=P+(A<<22&4294967295|A>>>10),A=y+(k^w&(P^k))+S[4]+4118548399&4294967295,y=w+(A<<7&4294967295|A>>>25),A=k+(P^y&(w^P))+S[5]+1200080426&4294967295,k=y+(A<<12&4294967295|A>>>20),A=P+(w^k&(y^w))+S[6]+2821735955&4294967295,P=k+(A<<17&4294967295|A>>>15),A=w+(y^P&(k^y))+S[7]+4249261313&4294967295,w=P+(A<<22&4294967295|A>>>10),A=y+(k^w&(P^k))+S[8]+1770035416&4294967295,y=w+(A<<7&4294967295|A>>>25),A=k+(P^y&(w^P))+S[9]+2336552879&4294967295,k=y+(A<<12&4294967295|A>>>20),A=P+(w^k&(y^w))+S[10]+4294925233&4294967295,P=k+(A<<17&4294967295|A>>>15),A=w+(y^P&(k^y))+S[11]+2304563134&4294967295,w=P+(A<<22&4294967295|A>>>10),A=y+(k^w&(P^k))+S[12]+1804603682&4294967295,y=w+(A<<7&4294967295|A>>>25),A=k+(P^y&(w^P))+S[13]+4254626195&4294967295,k=y+(A<<12&4294967295|A>>>20),A=P+(w^k&(y^w))+S[14]+2792965006&4294967295,P=k+(A<<17&4294967295|A>>>15),A=w+(y^P&(k^y))+S[15]+1236535329&4294967295,w=P+(A<<22&4294967295|A>>>10),A=y+(P^k&(w^P))+S[1]+4129170786&4294967295,y=w+(A<<5&4294967295|A>>>27),A=k+(w^P&(y^w))+S[6]+3225465664&4294967295,k=y+(A<<9&4294967295|A>>>23),A=P+(y^w&(k^y))+S[11]+643717713&4294967295,P=k+(A<<14&4294967295|A>>>18),A=w+(k^y&(P^k))+S[0]+3921069994&4294967295,w=P+(A<<20&4294967295|A>>>12),A=y+(P^k&(w^P))+S[5]+3593408605&4294967295,y=w+(A<<5&4294967295|A>>>27),A=k+(w^P&(y^w))+S[10]+38016083&4294967295,k=y+(A<<9&4294967295|A>>>23),A=P+(y^w&(k^y))+S[15]+3634488961&4294967295,P=k+(A<<14&4294967295|A>>>18),A=w+(k^y&(P^k))+S[4]+3889429448&4294967295,w=P+(A<<20&4294967295|A>>>12),A=y+(P^k&(w^P))+S[9]+568446438&4294967295,y=w+(A<<5&4294967295|A>>>27),A=k+(w^P&(y^w))+S[14]+3275163606&4294967295,k=y+(A<<9&4294967295|A>>>23),A=P+(y^w&(k^y))+S[3]+4107603335&4294967295,P=k+(A<<14&4294967295|A>>>18),A=w+(k^y&(P^k))+S[8]+1163531501&4294967295,w=P+(A<<20&4294967295|A>>>12),A=y+(P^k&(w^P))+S[13]+2850285829&4294967295,y=w+(A<<5&4294967295|A>>>27),A=k+(w^P&(y^w))+S[2]+4243563512&4294967295,k=y+(A<<9&4294967295|A>>>23),A=P+(y^w&(k^y))+S[7]+1735328473&4294967295,P=k+(A<<14&4294967295|A>>>18),A=w+(k^y&(P^k))+S[12]+2368359562&4294967295,w=P+(A<<20&4294967295|A>>>12),A=y+(w^P^k)+S[5]+4294588738&4294967295,y=w+(A<<4&4294967295|A>>>28),A=k+(y^w^P)+S[8]+2272392833&4294967295,k=y+(A<<11&4294967295|A>>>21),A=P+(k^y^w)+S[11]+1839030562&4294967295,P=k+(A<<16&4294967295|A>>>16),A=w+(P^k^y)+S[14]+4259657740&4294967295,w=P+(A<<23&4294967295|A>>>9),A=y+(w^P^k)+S[1]+2763975236&4294967295,y=w+(A<<4&4294967295|A>>>28),A=k+(y^w^P)+S[4]+1272893353&4294967295,k=y+(A<<11&4294967295|A>>>21),A=P+(k^y^w)+S[7]+4139469664&4294967295,P=k+(A<<16&4294967295|A>>>16),A=w+(P^k^y)+S[10]+3200236656&4294967295,w=P+(A<<23&4294967295|A>>>9),A=y+(w^P^k)+S[13]+681279174&4294967295,y=w+(A<<4&4294967295|A>>>28),A=k+(y^w^P)+S[0]+3936430074&4294967295,k=y+(A<<11&4294967295|A>>>21),A=P+(k^y^w)+S[3]+3572445317&4294967295,P=k+(A<<16&4294967295|A>>>16),A=w+(P^k^y)+S[6]+76029189&4294967295,w=P+(A<<23&4294967295|A>>>9),A=y+(w^P^k)+S[9]+3654602809&4294967295,y=w+(A<<4&4294967295|A>>>28),A=k+(y^w^P)+S[12]+3873151461&4294967295,k=y+(A<<11&4294967295|A>>>21),A=P+(k^y^w)+S[15]+530742520&4294967295,P=k+(A<<16&4294967295|A>>>16),A=w+(P^k^y)+S[2]+3299628645&4294967295,w=P+(A<<23&4294967295|A>>>9),A=y+(P^(w|~k))+S[0]+4096336452&4294967295,y=w+(A<<6&4294967295|A>>>26),A=k+(w^(y|~P))+S[7]+1126891415&4294967295,k=y+(A<<10&4294967295|A>>>22),A=P+(y^(k|~w))+S[14]+2878612391&4294967295,P=k+(A<<15&4294967295|A>>>17),A=w+(k^(P|~y))+S[5]+4237533241&4294967295,w=P+(A<<21&4294967295|A>>>11),A=y+(P^(w|~k))+S[12]+1700485571&4294967295,y=w+(A<<6&4294967295|A>>>26),A=k+(w^(y|~P))+S[3]+2399980690&4294967295,k=y+(A<<10&4294967295|A>>>22),A=P+(y^(k|~w))+S[10]+4293915773&4294967295,P=k+(A<<15&4294967295|A>>>17),A=w+(k^(P|~y))+S[1]+2240044497&4294967295,w=P+(A<<21&4294967295|A>>>11),A=y+(P^(w|~k))+S[8]+1873313359&4294967295,y=w+(A<<6&4294967295|A>>>26),A=k+(w^(y|~P))+S[15]+4264355552&4294967295,k=y+(A<<10&4294967295|A>>>22),A=P+(y^(k|~w))+S[6]+2734768916&4294967295,P=k+(A<<15&4294967295|A>>>17),A=w+(k^(P|~y))+S[13]+1309151649&4294967295,w=P+(A<<21&4294967295|A>>>11),A=y+(P^(w|~k))+S[4]+4149444226&4294967295,y=w+(A<<6&4294967295|A>>>26),A=k+(w^(y|~P))+S[11]+3174756917&4294967295,k=y+(A<<10&4294967295|A>>>22),A=P+(y^(k|~w))+S[2]+718787259&4294967295,P=k+(A<<15&4294967295|A>>>17),A=w+(k^(P|~y))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,_.g[2]=_.g[2]+P&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.u=function(_,y){y===void 0&&(y=_.length);for(var w=y-this.blockSize,S=this.B,P=this.h,k=0;k<y;){if(P==0)for(;k<=w;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<y;)if(S[P++]=_.charCodeAt(k++),P==this.blockSize){i(this,S),P=0;break}}else for(;k<y;)if(S[P++]=_[k++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;var w=8*this.o;for(y=_.length-8;y<_.length;++y)_[y]=w&255,w/=256;for(this.u(_),_=Array(16),y=w=0;4>y;++y)for(var S=0;32>S;S+=8)_[w++]=this.g[y]>>>S&255;return _};function s(_,y){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=y(_)}function o(_,y){this.h=y;for(var w=[],S=!0,P=_.length-1;0<=P;P--){var k=_[P]|0;S&&k==y||(w[P]=k,S=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(y){return new o([y|0],0>y?-1:0)}):new o([_|0],0>_?-1:0)}function c(_){if(isNaN(_)||!isFinite(_))return p;if(0>_)return N(c(-_));for(var y=[],w=1,S=0;_>=w;S++)y[S]=_/w|0,w*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return N(f(_.substring(1),y));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),S=p,P=0;P<_.length;P+=8){var k=Math.min(8,_.length-P),A=parseInt(_.substring(P,P+k),y);8>k?(k=c(Math.pow(y,k)),S=S.j(k).add(c(A))):(S=S.j(w),S=S.add(c(A)))}return S}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var _=0,y=1,w=0;w<this.g.length;w++){var S=this.i(w);_+=(0<=S?S:4294967296+S)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(C(this))return"-"+N(this).toString(_);for(var y=c(Math.pow(_,6)),w=this,S="";;){var P=O(w,y).g;w=E(w,P.j(y));var k=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=P,R(w))return k+S;for(;6>k.length;)k="0"+k;S=k+S}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function C(_){return _.h==-1}t.l=function(_){return _=E(this,_),C(_)?-1:R(_)?0:1};function N(_){for(var y=_.g.length,w=[],S=0;S<y;S++)w[S]=~_.g[S];return new o(w,~_.h).add(m)}t.abs=function(){return C(this)?N(this):this},t.add=function(_){for(var y=Math.max(this.g.length,_.g.length),w=[],S=0,P=0;P<=y;P++){var k=S+(this.i(P)&65535)+(_.i(P)&65535),A=(k>>>16)+(this.i(P)>>>16)+(_.i(P)>>>16);S=A>>>16,k&=65535,A&=65535,w[P]=A<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,y){return _.add(N(y))}t.j=function(_){if(R(this)||R(_))return p;if(C(this))return C(_)?N(this).j(N(_)):N(N(this).j(_));if(C(_))return N(this.j(N(_)));if(0>this.l(T)&&0>_.l(T))return c(this.m()*_.m());for(var y=this.g.length+_.g.length,w=[],S=0;S<2*y;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<_.g.length;P++){var k=this.i(S)>>>16,A=this.i(S)&65535,Ct=_.i(P)>>>16,Sr=_.i(P)&65535;w[2*S+2*P]+=A*Sr,v(w,2*S+2*P),w[2*S+2*P+1]+=k*Sr,v(w,2*S+2*P+1),w[2*S+2*P+1]+=A*Ct,v(w,2*S+2*P+1),w[2*S+2*P+2]+=k*Ct,v(w,2*S+2*P+2)}for(S=0;S<y;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=y;S<2*y;S++)w[S]=0;return new o(w,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function I(_,y){this.g=_,this.h=y}function O(_,y){if(R(y))throw Error("division by zero");if(R(_))return new I(p,p);if(C(_))return y=O(N(_),y),new I(N(y.g),N(y.h));if(C(y))return y=O(_,N(y)),new I(N(y.g),y.h);if(30<_.g.length){if(C(_)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=y;0>=S.l(_);)w=D(w),S=D(S);var P=F(w,1),k=F(S,1);for(S=F(S,2),w=F(w,2);!R(S);){var A=k.add(S);0>=A.l(_)&&(P=P.add(w),k=A),S=F(S,1),w=F(w,1)}return y=E(_,P.j(y)),new I(P,y)}for(P=p;0<=_.l(y);){for(w=Math.max(1,Math.floor(_.m()/y.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),k=c(w),A=k.j(y);C(A)||0<A.l(_);)w-=S,k=c(w),A=k.j(y);R(k)&&(k=m),P=P.add(k),_=E(_,A)}return new I(P,_)}t.A=function(_){return O(this,_).h},t.and=function(_){for(var y=Math.max(this.g.length,_.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)&_.i(S);return new o(w,this.h&_.h)},t.or=function(_){for(var y=Math.max(this.g.length,_.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)|_.i(S);return new o(w,this.h|_.h)},t.xor=function(_){for(var y=Math.max(this.g.length,_.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)^_.i(S);return new o(w,this.h^_.h)};function D(_){for(var y=_.g.length+1,w=[],S=0;S<y;S++)w[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(w,_.h)}function F(_,y){var w=y>>5;y%=32;for(var S=_.g.length-w,P=[],k=0;k<S;k++)P[k]=0<y?_.i(k+w)>>>y|_.i(k+w+1)<<32-y:_.i(k+w);return new o(P,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Ur=o}).apply(typeof Fy<"u"?Fy:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,Qs,g0,cl,wd,y0,v0,_0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in d))break e;d=d[x]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,x={next:function(){if(!g&&d<a.length){var V=d++;return{value:h(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,x,V){for(var B=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)B[ue-2]=arguments[ue];return h.prototype[x].apply(g,B)}}function C(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const x=a.length||0,V=g.length||0;a.length=x+V;for(let B=0;B<V;B++)a[x+B]=g[B]}else a.push(g)}}class E{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var D=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function _(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let d,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(d in g)a[d]=g[d];for(let V=0;V<w.length;V++)d=w[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function P(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function A(){var a=J;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ct{constructor(){this.h=this.g=null}add(h,d){const g=Sr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Sr=new E(()=>new _s,a=>a.reset());class _s{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let an,$=!1,J=new Ct,X=()=>{const a=l.Promise.resolve(void 0);an=()=>{a.then(ge)}};var ge=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){k(d)}var h=Sr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function un(a,h){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(D){e:{try{O(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}R(un,Ae);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),BT=0;function zT(a,h,d,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=x,this.key=++BT,this.da=this.fa=!1}function aa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function la(a){this.src=a,this.g={},this.h=0}la.prototype.add=function(a,h,d,g,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var B=nc(a,h,g,x);return-1<B?(h=a[B],d||(h.fa=!1)):(h=new zT(h,this.src,V,!!g,x),h.fa=d,a.push(h)),h};function tc(a,h){var d=h.type;if(d in a.g){var g=a.g[d],x=Array.prototype.indexOf.call(g,h,void 0),V;(V=0<=x)&&Array.prototype.splice.call(g,x,1),V&&(aa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function nc(a,h,d,g){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return x}return-1}var rc="closure_lm_"+(1e6*Math.random()|0),ic={};function Fp(a,h,d,g,x){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Fp(a,h[V],d,g,x);return null}return d=Bp(d),a&&a[hn]?a.K(h,d,c(g)?!!g.capture:!1,x):$T(a,h,d,!1,g,x)}function $T(a,h,d,g,x,V){if(!h)throw Error("Invalid event type");var B=c(x)?!!x.capture:!!x,ue=oc(a);if(ue||(a[rc]=ue=new la(a)),d=ue.add(h,d,g,B,V),d.proxy)return d;if(g=WT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)ln||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(jp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function WT(){function a(d){return h.call(a.src,a.listener,d)}const h=qT;return a}function Up(a,h,d,g,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)Up(a,h[V],d,g,x);else g=c(g)?!!g.capture:!!g,d=Bp(d),a&&a[hn]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],d=nc(V,d,g,x),-1<d&&(aa(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=oc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=nc(h,d,g,x)),(d=-1<a?h[a]:null)&&sc(d))}function sc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[hn])tc(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(jp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=oc(h))?(tc(d,a),d.h==0&&(d.src=null,h[rc]=null)):aa(a)}}}function jp(a){return a in ic?ic[a]:ic[a]="on"+a}function qT(a,h){if(a.da)a=!0;else{h=new un(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&sc(a),a=d.call(g,h)}return a}function oc(a){return a=a[rc],a instanceof la?a:null}var ac="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bp(a){return typeof a=="function"?a:(a[ac]||(a[ac]=function(h){return a.handleEvent(h)}),a[ac])}function He(){le.call(this),this.i=new la(this),this.M=this,this.F=null}R(He,le),He.prototype[hn]=!0,He.prototype.removeEventListener=function(a,h,d,g){Up(this,a,h,d,g)};function it(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ae(h,a);else if(h instanceof Ae)h.target=h.target||a;else{var x=h;h=new Ae(g,a),S(h,x)}if(x=!0,d)for(var V=d.length-1;0<=V;V--){var B=h.g=d[V];x=ua(B,g,!0,h)&&x}if(B=h.g=a,x=ua(B,g,!0,h)&&x,x=ua(B,g,!1,h)&&x,d)for(V=0;V<d.length;V++)B=h.g=d[V],x=ua(B,g,!1,h)&&x}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)aa(d[g]);delete a.g[h],a.h--}}this.F=null},He.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},He.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ua(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,V=0;V<h.length;++V){var B=h[V];if(B&&!B.da&&B.capture==d){var ue=B.listener,Fe=B.ha||B.src;B.fa&&tc(a.i,B),x=ue.call(Fe,g)!==!1&&x}}return x&&!g.defaultPrevented}function zp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function $p(a){a.g=zp(()=>{a.g=null,a.i&&(a.i=!1,$p(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HT extends le{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:$p(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(a){le.call(this),this.h=a,this.g={}}R(ws,le);var Wp=[];function qp(a){F(a.g,function(h,d){this.g.hasOwnProperty(d)&&sc(h)},a),a.g={}}ws.prototype.N=function(){ws.aa.N.call(this),qp(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lc=l.JSON.stringify,KT=l.JSON.parse,GT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function uc(){}uc.prototype.h=null;function Hp(a){return a.h||(a.h=a.i())}function Kp(){}var Es={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cc(){Ae.call(this,"d")}R(cc,Ae);function hc(){Ae.call(this,"c")}R(hc,Ae);var Ar={},Gp=null;function ca(){return Gp=Gp||new He}Ar.La="serverreachability";function Qp(a){Ae.call(this,Ar.La,a)}R(Qp,Ae);function Ts(a){const h=ca();it(h,new Qp(h))}Ar.STAT_EVENT="statevent";function Yp(a,h){Ae.call(this,Ar.STAT_EVENT,a),this.stat=h}R(Yp,Ae);function st(a){const h=ca();it(h,new Yp(h,a))}Ar.Ma="timingevent";function Jp(a,h){Ae.call(this,Ar.Ma,a),this.size=h}R(Jp,Ae);function Is(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ss(){this.g=!0}Ss.prototype.xa=function(){this.g=!1};function QT(a,h,d,g,x,V){a.info(function(){if(a.g)if(V)for(var B="",ue=V.split("&"),Fe=0;Fe<ue.length;Fe++){var se=ue[Fe].split("=");if(1<se.length){var Ke=se[0];se=se[1];var Ge=Ke.split("_");B=2<=Ge.length&&Ge[1]=="type"?B+(Ke+"="+se+"&"):B+(Ke+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+d+`
`+B})}function YT(a,h,d,g,x,V,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+d+`
`+V+" "+B})}function hi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+XT(a,d)+(g?" "+g:"")})}function JT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ss.prototype.info=function(){};function XT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<x.length;B++)x[B]=""}}}}return lc(d)}catch{return h}}var ha={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dc;function da(){}R(da,uc),da.prototype.g=function(){return new XMLHttpRequest},da.prototype.i=function(){return{}},dc=new da;function Mn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ws(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zp}function Zp(){this.i=null,this.g="",this.h=!1}var em={},fc={};function pc(a,h,d){a.L=1,a.v=ga(dn(h)),a.m=d,a.P=!0,tm(a,null)}function tm(a,h){a.F=Date.now(),fa(a),a.A=dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Zp,a.g=Om(a.j,d?h:null,!a.m),0<a.O&&(a.M=new HT(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Wp[0]=x.toString()),x=Wp);for(var V=0;V<x.length;V++){var B=Fp(d,x[V],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ts(),QT(a.i,a.u,a.A,a.l,a.R,a.m)}Mn.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=fn(this.g);var h=this.g.Ba();const pi=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Tm(this.g)))){this.J||Ge!=4||h==7||(h==8||0>=pi?Ts(3):Ts(2)),mc(this);var d=this.g.Z();this.X=d;t:if(nm(this)){var g=Tm(this.g);a="";var x=g.length,V=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),As(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(V&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,YT(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Fe=this.g;if((ue=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ue)){var se=ue;break t}}se=null}if(d=se)hi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,d);else{this.o=!1,this.s=3,st(12),Rr(this),As(this);break e}}if(this.P){d=!0;let Mt;for(;!this.J&&this.C<B.length;)if(Mt=ZT(this,B),Mt==fc){Ge==4&&(this.s=4,st(14),d=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==em){this.s=4,st(15),hi(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else hi(this.i,this.l,Mt,null),gc(this,Mt);if(nm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||B.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)hi(this.i,this.l,B,"[Invalid Chunked Response]"),Rr(this),As(this);else if(0<B.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Tc(Ke),Ke.M=!0,st(11))}}else hi(this.i,this.l,B,null),gc(this,B);Ge==4&&Rr(this),this.o&&!this.J&&(Ge==4?km(this.j,this):(this.o=!1,fa(this)))}else gI(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Rr(this),As(this)}}}catch{}finally{}};function nm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ZT(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?fc:(d=Number(h.substring(d,g)),isNaN(d)?em:(g+=1,g+d>h.length?fc:(h=h.slice(g,g+d),a.C=g+d,h)))}Mn.prototype.cancel=function(){this.J=!0,Rr(this)};function fa(a){a.S=Date.now()+a.I,rm(a,a.I)}function rm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Is(m(a.ba,a),h)}function mc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(JT(this.i,this.A),this.L!=2&&(Ts(),st(17)),Rr(this),this.s=2,As(this)):rm(this,this.S-a)};function As(a){a.j.G==0||a.J||km(a.j,a)}function Rr(a){mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,qp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function gc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||yc(d.h,a))){if(!a.K&&yc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ta(d),wa(d);else break e;Ec(d),st(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(m(d.Za,d),6e3));if(1>=om(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Cr(d,11)}else if((a.K||d.g==a)&&Ta(d),!v(h))for(x=d.Da.g.parse(h),h=0;h<x.length;h++){let se=x[h];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ke=se[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Ge=se[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const pi=se[5];pi!=null&&typeof pi=="number"&&0<pi&&(g=1.5*pi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Mt=a.g;if(Mt){const Sa=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var V=g.h;V.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(vc(V,V.h),V.h=null))}if(g.D){const Ic=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ic&&(g.ya=Ic,de(g.I,g.D,Ic))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=Dm(g,g.J?g.ia:null,g.W),B.K){am(g.h,B);var ue=B,Fe=g.L;Fe&&(ue.I=Fe),ue.B&&(mc(ue),fa(ue)),g.g=B}else Pm(g);0<d.i.length&&Ea(d)}else se[0]!="stop"&&se[0]!="close"||Cr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Cr(d,7):wc(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}Ts(4)}catch{}}var eI=class{constructor(a,h){this.g=a,this.map=h}};function im(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function om(a){return a.h?1:a.g?a.g.size:0}function yc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function vc(a,h){a.g?a.g.add(h):a.h=h}function am(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}im.prototype.cancel=function(){if(this.i=lm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return C(a.i)}function tI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function nI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function um(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=nI(a),g=tI(a),x=g.length,V=0;V<x;V++)h.call(void 0,g[V],d&&d[V],a)}var cm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rI(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),x=null;if(0<=g){var V=a[d].substring(0,g);x=a[d].substring(g+1)}else V=a[d];h(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,pa(this,a.j),this.o=a.o,this.g=a.g,ma(this,a.s),this.l=a.l;var h=a.i,d=new Cs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),hm(this,d),this.m=a.m}else a&&(h=String(a).match(cm))?(this.h=!1,pa(this,h[1]||"",!0),this.o=Rs(h[2]||""),this.g=Rs(h[3]||"",!0),ma(this,h[4]),this.l=Rs(h[5]||"",!0),hm(this,h[6]||"",!0),this.m=Rs(h[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}Pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ps(h,dm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,dm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ps(d,d.charAt(0)=="/"?oI:sI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ps(d,lI)),a.join("")};function dn(a){return new Pr(a)}function pa(a,h,d){a.j=d?Rs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ma(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function hm(a,h,d){h instanceof Cs?(a.i=h,uI(a.i,a.h)):(d||(h=Ps(h,aI)),a.i=new Cs(h,a.h))}function de(a,h,d){a.i.set(h,d)}function ga(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Rs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,iI),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dm=/[#\/\?@]/g,sI=/[#\?:]/g,oI=/[#\?]/g,aI=/[#\?@]/g,lI=/#/g;function Cs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function bn(a){a.g||(a.g=new Map,a.h=0,a.i&&rI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Cs.prototype,t.add=function(a,h){bn(this),this.i=null,a=di(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function fm(a,h){bn(a),h=di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function pm(a,h){return bn(a),h=di(a,h),a.g.has(h)}t.forEach=function(a,h){bn(this),this.g.forEach(function(d,g){d.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){bn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const x=a[g];for(let V=0;V<x.length;V++)d.push(h[g])}return d},t.V=function(a){bn(this);let h=[];if(typeof a=="string")pm(this,a)&&(h=h.concat(this.g.get(di(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return bn(this),this.i=null,a=di(this,a),pm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function mm(a,h,d){fm(a,h),0<d.length&&(a.i=null,a.g.set(di(a,h),C(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const V=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var x=V;B[g]!==""&&(x+="="+encodeURIComponent(String(B[g]))),a.push(x)}}return this.i=a.join("&")};function di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uI(a,h){h&&!a.j&&(bn(a),a.i=null,a.g.forEach(function(d,g){var x=g.toLowerCase();g!=x&&(fm(this,g),mm(this,x,d))},a)),a.j=h}function cI(a,h){const d=new Ss;if(l.Image){const g=new Image;g.onload=T(Fn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=T(Fn,d,"TestLoadImage: error",!1,h,g),g.onabort=T(Fn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(Fn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function hI(a,h){const d=new Ss,g=new AbortController,x=setTimeout(()=>{g.abort(),Fn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?Fn(d,"TestPingServer: ok",!0,h):Fn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Fn(d,"TestPingServer: error",!1,h)})}function Fn(a,h,d,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(d)}catch{}}function dI(){this.g=new GT}function fI(a,h,d){const g=d||"";try{um(a,function(x,V){let B=x;c(x)&&(B=lc(x)),h.push(g+V+"="+encodeURIComponent(B))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function ya(a){this.l=a.Ub||null,this.j=a.eb||!1}R(ya,uc),ya.prototype.g=function(){return new va(this.l,this.j)},ya.prototype.i=function(a){return function(){return a}}({});function va(a,h){He.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(va,He),t=va.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ks(this):xs(this),this.readyState==3&&gm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ks(this))},t.Qa=function(a){this.g&&(this.response=a,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(a){a.readyState=4,a.l=null,a.j=null,a.v=null,xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ym(a){let h="";return F(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function _c(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=ym(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,h,d))}function Te(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Te,He);var pI=/^https?$/i,mI=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dc.g(),this.v=this.o?Hp(this.o):Hp(dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){vm(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)d.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(mI,h,void 0))||g||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of d)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Em(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){vm(this,V)}};function vm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,_m(a),_a(a)}function _m(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),_a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_a(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?wm(this):this.bb())},t.bb=function(){wm(this)};function wm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)zp(a.Ea,0,a);else if(it(a,"readystatechange"),fn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=B===0){var x=String(a.D).match(cm)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!pI.test(x?x.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var V=2<fn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",_m(a)}}finally{_a(a)}}}}function _a(a,h){if(a.g){Em(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function Em(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),KT(h)}};function Tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function gI(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var d=P(a[g]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[x]||[];h[x]=V,V.push(d)}_(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Im(a){this.Aa=0,this.i=[],this.j=new Ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,a),this.cb=Ns("retryDelaySeedMs",1e4,a),this.Wa=Ns("forwardChannelMaxRetries",2,a),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new im(a&&a.concurrentRequestLimit),this.Da=new dI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Im.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){st(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Dm(this,null,this.W),Ea(this)};function wc(a){if(Sm(a),a.G==3){var h=a.U++,d=dn(a.I);if(de(d,"SID",a.K),de(d,"RID",h),de(d,"TYPE","terminate"),Ds(a,d),h=new Mn(a,a.j,h),h.L=2,h.v=ga(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Om(h.j,null),h.g.ea(h.v)),h.F=Date.now(),fa(h)}Nm(a)}function wa(a){a.g&&(Tc(a),a.g.cancel(),a.g=null)}function Sm(a){wa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ea(a){if(!sm(a.h)&&!a.s){a.s=!0;var h=a.Ga;an||X(),$||(an(),$=!0),J.add(h,a),a.B=0}}function yI(a,h){return om(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Is(m(a.Ga,a,h),xm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Mn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),S(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Rm(this,x,h),d=dn(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),Ds(this,d),V&&(this.O?h="headers="+encodeURIComponent(String(ym(V)))+"&"+h:this.m&&_c(d,this.m,V)),vc(this.h,x),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",h),de(d,"SID","null"),x.T=!0,pc(x,d,null)):pc(x,d,h),this.G=2}}else this.G==3&&(a?Am(this,a):this.i.length==0||sm(this.h)||Am(this))};function Am(a,h){var d;h?d=h.l:d=a.U++;const g=dn(a.I);de(g,"SID",a.K),de(g,"RID",d),de(g,"AID",a.T),Ds(a,g),a.m&&a.o&&_c(g,a.m,a.o),d=new Mn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Rm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),vc(a.h,d),pc(d,g,h)}function Ds(a,h){a.H&&F(a.H,function(d,g){de(h,g,d)}),a.l&&um({},function(d,g){de(h,g,d)})}function Rm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const B=["count="+d];V==-1?0<d?(V=x[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let ue=!0;for(let Fe=0;Fe<d;Fe++){let se=x[Fe].g;const Ke=x[Fe].map;if(se-=V,0>se)V=Math.max(0,x[Fe].g-100),ue=!1;else try{fI(Ke,B,"req"+se+"_")}catch{g&&g(Ke)}}if(ue){g=B.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Pm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;an||X(),$||(an(),$=!0),J.add(h,a),a.v=0}}function Ec(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Is(m(a.Fa,a),xm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Is(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),wa(this),Cm(this))};function Tc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cm(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dn(a.qa);de(h,"RID","rpc"),de(h,"SID",a.K),de(h,"AID",a.T),de(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(h,"TO",a.ja),de(h,"TYPE","xmlhttp"),Ds(a,h),a.m&&a.o&&_c(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ga(dn(h)),d.m=null,d.P=!0,tm(d,a)}t.Za=function(){this.C!=null&&(this.C=null,wa(this),Ec(this),st(19))};function Ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function km(a,h){var d=null;if(a.g==h){Ta(a),Tc(a),a.g=null;var g=2}else if(yc(a.h,h))d=h.D,am(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=ca(),it(g,new Jp(g,d)),Ea(a)}else Pm(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&yI(a,h)||g==2&&Ec(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),x){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function xm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Cr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const x=!g;g=new Pr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pa(g,"https"),ga(g),x?cI(g.toString(),d):hI(g.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(h),Nm(a),Sm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Nm(a){if(a.G=0,a.ka=[],a.l){const h=lm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Dm(a,h,d){var g=d instanceof Pr?dn(d):new Pr(d);if(g.g!="")h&&(g.g=h+"."+g.g),ma(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var V=new Pr(null);g&&pa(V,g),h&&(V.g=h),x&&ma(V,x),d&&(V.l=d),g=V}return d=a.D,h=a.ya,d&&h&&de(g,d,h),de(g,"VER",a.la),Ds(a,g),g}function Om(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Te(new ya({eb:d})):new Te(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vm(){}t=Vm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ia(){}Ia.prototype.g=function(a,h){return new vt(a,h)};function vt(a,h){He.call(this),this.g=new Im(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fi(this)}R(vt,He),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){wc(this.g)},vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=lc(a),a=d);h.i.push(new eI(h.Ya++,a)),h.G==3&&Ea(h)},vt.prototype.N=function(){this.g.l=null,delete this.j,wc(this.g),delete this.g,vt.aa.N.call(this)};function Lm(a){cc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Lm,cc);function Mm(){hc.call(this),this.status=1}R(Mm,hc);function fi(a){this.g=a}R(fi,Vm),fi.prototype.ua=function(){it(this.g,"a")},fi.prototype.ta=function(a){it(this.g,new Lm(a))},fi.prototype.sa=function(a){it(this.g,new Mm)},fi.prototype.ra=function(){it(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,_0=function(){return new Ia},v0=function(){return ca()},y0=Ar,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ha.NO_ERROR=0,ha.TIMEOUT=8,ha.HTTP_ERROR=6,cl=ha,Xp.COMPLETE="complete",g0=Xp,Kp.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",He.prototype.listen=He.prototype.K,Qs=Kp,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,m0=Te}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Uy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Cu("@firebase/firestore");function Bs(){return Yr.logLevel}function q(t,...e){if(Yr.logLevel<=te.DEBUG){const n=e.map(Jf);Yr.debug(`Firestore (${ms}): ${t}`,...n)}}function Nn(t,...e){if(Yr.logLevel<=te.ERROR){const n=e.map(Jf);Yr.error(`Firestore (${ms}): ${t}`,...n)}}function Xi(t,...e){if(Yr.logLevel<=te.WARN){const n=e.map(Jf);Yr.warn(`Firestore (${ms}): ${t}`,...n)}}function Jf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function ie(t,e){t||K()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class gN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yN{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new w0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Xe(e)}}class vN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _N{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ie(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new wN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=TN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Oe(0,0))}static max(){return new G(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends bo{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const IN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends bo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return IN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ce.fromString(e))}static fromName(e){return new H(ce.fromString(e).popFirst(5))}static empty(){return new H(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ce(e.slice()))}}function SN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new fr(i,H.empty(),e)}function AN(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(G.min(),H.empty(),-1)}static max(){return new fr(G.max(),H.empty(),-1)}}function RN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==PN)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ta(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Xf.oe=-1;function na(t){return t==null}function Yl(t){return t===0&&1/t==-1/0}function xN(t){return typeof t=="number"&&Number.isInteger(t)&&!Yl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Et([])}unionWith(e){let n=new $e(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new I0("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const NN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(ie(!!t),typeof t=="string"){let e=0;const n=NN.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Jr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ep(t){const e=t.mapValue.fields.__previous_value__;return Zf(e)?ep(e):e}function Fo(t){const e=pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={mapValue:{}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:VN(t)?9007199254740991:ON(t)?10:11:K()}function on(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Jr(i.bytesValue).isEqual(Jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?Yl(o)===Yl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jy(o)!==jy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function jo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=Xr(t),r=Xr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return zy(t.timestampValue,e.timestampValue);case 4:return zy(Fo(t),Fo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Jr(s),u=Jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=oe(l[c],u[c]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Re(s.latitude),Re(o.latitude));return l!==0?l:oe(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $y(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,C=oe(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:$y(T,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=oe(u[p],f[p]);if(m!==0)return m;const T=es(l[u[p]],c[f[p]]);if(T!==0)return T}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K()}}function zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=pr(t),r=pr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function $y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=es(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function ts(t){return Ed(t)}function Ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ed(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ed(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Td(t){return!!t&&"integerValue"in t}function tp(t){return!!t&&"arrayValue"in t}function qy(t){return!!t&&"nullValue"in t}function Hy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hl(t){return!!t&&"mapValue"in t}function ON(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=uo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(uo(this.value))}}function S0(t){const e=[];return oi(t.fields,(n,r)=>{const i=new Be([n]);if(hl(r)){const s=S0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Me(e,0,G.min(),G.min(),G.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,G.min(),G.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,G.min(),G.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{}class xe extends A0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new BN(e,r):n==="not-in"?new zN(e,r):n==="array-contains-any"?new $N(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FN(e,r):new UN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&Xr(this.value)===Xr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kt extends A0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Kt(e,n)}matches(e){return R0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function R0(t){return t.op==="and"}function P0(t){return MN(t)&&R0(t)}function MN(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function Id(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(P0(t))return t.filters.map(e=>Id(e)).join(",");{const e=t.filters.map(n=>Id(n)).join(",");return`${t.op}(${e})`}}function C0(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Kt?function(r,i){return i instanceof Kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&C0(o,i.filters[l]),!0):!1}(t,e):void K()}function k0(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof Kt?function(n){return n.op.toString()+" {"+n.getFilters().map(k0).join(" ,")+"}"}(t):"Filter"}class bN extends xe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class FN extends xe{constructor(e,n){super(e,"in",n),this.keys=x0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UN extends xe{constructor(e,n){super(e,"not-in",n),this.keys=x0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class jN extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tp(n)&&jo(n.arrayValue,this.value)}}class BN extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class zN extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class $N extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Qy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WN(t,e,n,r,i,s,o)}function np(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),na(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ue=n}return e.ue}function rp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!C0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function Sd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qN(t,e,n,r,i,s,o,l){return new gs(t,e,n,r,i,s,o,l)}function Vu(t){return new gs(t)}function Yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function N0(t){return t.collectionGroup!==null}function co(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Bo(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Bo(Be.keyField(),r))}return e.ce}function rn(t){const e=Y(t);return e.le||(e.le=HN(e,co(t))),e.le}function HN(t,e){if(t.limitType==="F")return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Bo(i.field,s)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ad(t,e){const n=t.filters.concat([e]);return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Rd(t,e,n){return new gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return rp(rn(t),rn(e))&&t.limitType===e.limitType}function D0(t){return`${np(rn(t))}|lt:${t.limitType}`}function yi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>k0(i)).join(", ")}]`),na(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,co(r),i)||r.endAt&&!function(o,l,u){const c=Ky(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,co(r),i))}(t,e)}function KN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function O0(t){return(e,n)=>{let r=!1;for(const i of co(t)){const s=GN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GN(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?es(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return T0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=new Ee(H.comparator);function Dn(){return QN}const V0=new Ee(H.comparator);function Ys(...t){let e=V0;for(const n of t)e=e.insert(n.key,n);return e}function L0(t){let e=V0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return ho()}function M0(){return ho()}function ho(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const YN=new Ee(H.comparator),JN=new $e(H.comparator);function ee(...t){let e=JN;for(const n of t)e=e.add(n);return e}const XN=new $e(oe);function ZN(){return XN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yl(e)?"-0":e}}function b0(t){return{integerValue:""+t}}function F0(t,e){return xN(e)?b0(e):ip(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this._=void 0}}function eD(t,e,n){return t instanceof zo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zf(s)&&(s=ep(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ns?j0(t,e):t instanceof rs?B0(t,e):function(i,s){const o=U0(i,s),l=Jy(o)+Jy(i.Pe);return Td(o)&&Td(i.Pe)?b0(l):ip(i.serializer,l)}(t,e)}function tD(t,e,n){return t instanceof ns?j0(t,e):t instanceof rs?B0(t,e):n}function U0(t,e){return t instanceof $o?function(r){return Td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zo extends bu{}class ns extends bu{constructor(e){super(),this.elements=e}}function j0(t,e){const n=z0(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class rs extends bu{constructor(e){super(),this.elements=e}}function B0(t,e){let n=z0(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class $o extends bu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jy(t){return Re(t.integerValue||t.doubleValue)}function z0(t){return tp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n){this.field=e,this.transform=n}}function nD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ns&&i instanceof ns||r instanceof rs&&i instanceof rs?Zi(r.elements,i.elements,on):r instanceof $o&&i instanceof $o?on(r.Pe,i.Pe):r instanceof zo&&i instanceof zo}(t.transform,e.transform)}class rD{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function $0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ju(t.key,et.none()):new ra(t.key,t.data,et.none());{const n=t.data,r=at.empty();let i=new $e(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new Et(i.toArray()),et.none())}}function iD(t,e,n){t instanceof ra?function(i,s,o){const l=i.value.clone(),u=Zy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(W0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof ra?function(s,o,l,u){if(!dl(s.precondition,o))return l;const c=s.value.clone(),f=ev(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,l,u){if(!dl(s.precondition,o))return l;const c=ev(s.fieldTransforms,u,o),f=o.data;return f.setAll(W0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function sD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=U0(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function Xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>nD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Uu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends Uu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function W0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zy(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,tD(o,l,n[i]))}return r}function ev(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,eD(s,o,e))}return r}class ju extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q0 extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&iD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=M0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=$0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>Xy(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>Xy(n,r))}}class sp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return YN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ne;function H0(t){switch(t){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function K0(t){if(t===void 0)return Nn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ce.OK:return M.OK;case Ce.CANCELLED:return M.CANCELLED;case Ce.UNKNOWN:return M.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return M.INTERNAL;case Ce.UNAVAILABLE:return M.UNAVAILABLE;case Ce.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ce.NOT_FOUND:return M.NOT_FOUND;case Ce.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ce.ABORTED:return M.ABORTED;case Ce.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ce.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(ne=Ce||(Ce={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new Ur([4294967295,4294967295],0);function tv(t){const e=uD().encode(t),n=new p0;return n.update(e),new Uint8Array(n.digest())}function nv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([i,s],0)]}class op{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ur.fromNumber(r)));return i.compare(cD)===1&&(i=new Ur([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tv(e),[r,i]=nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new op(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=tv(e),[r,i]=nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bu(G.min(),i,new Ee(oe),Dn(),ee())}}class ia{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class G0{constructor(e,n){this.targetId=e,this.me=n}}class Q0{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rv{constructor(){this.fe=0,this.ge=sv(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ia(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=sv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=iv(),this.Qe=new Ee(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sd(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Me.newNoDocument(o,G.min()))}else ie(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Jr(r).toUint8Array()}catch(u){if(u instanceof I0)return Xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new op(o,i,s)}catch(u){return Xi(u instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Sd(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Me.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Bu(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=iv(),this.Qe=new Ee(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function iv(){return new Ee(H.comparator)}function sv(){return new Ee(H.comparator)}const dD={asc:"ASCENDING",desc:"DESCENDING"},fD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pD={and:"AND",or:"OR"};class mD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pd(t,e){return t.useProto3Json||na(e)?e:{value:e}}function Xl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gD(t,e){return Xl(t,e.toTimestamp())}function St(t){return ie(!!t),G.fromTimestamp(function(n){const r=pr(n);return new Oe(r.seconds,r.nanos)}(t))}function ap(t,e){return Cd(t,e).canonicalString()}function Cd(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function J0(t){const e=ce.fromString(t);return ie(rT(e)),e}function Zl(t,e){return ap(t.databaseId,e.path)}function po(t,e){const n=J0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Z0(n))}function X0(t,e){return ap(t.databaseId,e)}function yD(t){const e=J0(t);return e.length===4?ce.emptyPath():Z0(e)}function kd(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z0(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ov(t,e,n){return{name:Zl(t,e),fields:n.value.mapValue.fields}}function vD(t,e){return"found"in e?function(r,i){ie(!!i.found),i.found.name,i.found.updateTime;const s=po(r,i.found.name),o=St(i.found.updateTime),l=i.found.createTime?St(i.found.createTime):G.min(),u=new at({mapValue:{fields:i.found.fields}});return Me.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ie(!!i.missing),ie(!!i.readTime);const s=po(r,i.missing),o=St(i.readTime);return Me.newNoDocument(s,o)}(t,e):K()}function _D(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ie(f===void 0||typeof f=="string"),qe.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array),qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?M.UNKNOWN:K0(c.code);return new z(f,c.message||"")}(o);n=new Q0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=po(t,r.document.name),s=St(r.document.updateTime),o=r.document.createTime?St(r.document.createTime):G.min(),l=new at({mapValue:{fields:r.document.fields}}),u=Me.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new fl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=po(t,r.document),s=r.readTime?St(r.readTime):G.min(),o=Me.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=po(t,r.document),s=r.removedTargetIds||[];n=new fl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lD(i,s),l=r.targetId;n=new G0(l,o)}}return n}function eT(t,e){let n;if(e instanceof ra)n={update:ov(t,e.key,e.value)};else if(e instanceof ju)n={delete:Zl(t,e.key)};else if(e instanceof Ir)n={update:ov(t,e.key,e.data),updateMask:CD(e.fieldMask)};else{if(!(e instanceof q0))return K();n={verify:Zl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $o)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function wD(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?St(i.updateTime):St(s);return o.isEqual(G.min())&&(o=St(s)),new rD(o,i.transformResults||[])}(n,e))):[]}function ED(t,e){return{documents:[X0(t,e.path)]}}function TD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=X0(t,i);const s=function(c){if(c.length!==0)return nT(Kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:vi(m.field),direction:AD(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function ID(t){let e=yD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=tT(p);return m instanceof Kt&&P0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Bo(_i(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,na(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new Jl(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new Jl(T,m)}(n.endAt)),qN(e,i,o,s,l,"F",u,c)}function SD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Kt.create(n.compositeFilter.filters.map(r=>tT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function AD(t){return dD[t]}function RD(t){return fD[t]}function PD(t){return pD[t]}function vi(t){return{fieldPath:t.canonicalString()}}function _i(t){return Be.fromServerFormat(t.fieldPath)}function nT(t){return t instanceof xe?function(n){if(n.op==="=="){if(Hy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(qy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(qy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:RD(n.op),value:n.value}}}(t):t instanceof Kt?function(n){const r=n.getFilters().map(i=>nT(i));return r.length===1?r[0]:{compositeFilter:{op:PD(n.op),filters:r}}}(t):K()}function CD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,i,s=G.min(),o=G.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.ct=e}}function xD(t){const e=ID({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(){this.un=new DD}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(fr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class DD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new is(0)}static kn(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fo(r.mutation,i,Et.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ys();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=ho(),l=function(){return ho()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ir)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),fo(f.mutation,c,f.mutation.getFieldMask(),Oe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new VD(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ho();let i=new Ee((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=M0();f.forEach(m=>{if(!s.has(m)){const T=$0(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):N0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(Mr());let l=-1,u=s;return o.next(c=>U.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:L0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,s).next(l=>U.forEach(l,u=>{const c=function(p,m){return new gs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Me.newInvalidDocument(f)))});let l=Ys();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&fo(f.mutation,c,Et.empty(),Oe.now()),Mu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:St(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:xD(i.bundledQuery),readTime:St(i.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(){this.overlays=new Ee(H.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Mr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return U.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aD(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.Tr=new $e(Ve.Er),this.dr=new $e(Ve.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ve(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new ce([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Ve.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(oe);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new $e(oe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ve(n,0),i=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.Mr=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||RN(AN(f),r)<=0||(i.has(f.key)||Mu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BD(this)}getSize(e){return U.resolve(this.size)}}class BD extends OD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.persistence=e,this.Nr=new ys(n=>np(n),rp),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new lp,this.targetCount=0,this.kr=is.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Xf(0),this.Kr=!1,this.Kr=!0,this.$r=new FD,this.referenceDelegate=e(this),this.Ur=new zD(this),this.indexManager=new ND,this.remoteDocumentCache=function(i){return new jD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new kD(n),this.Gr=new MD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new UD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new WD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class WD extends CN{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Jr=new lp,this.Yr=null}static Zr(e){return new up(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gP()?8:kN(rt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new qD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Bs()<=te.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",yi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Bs()<=te.DEBUG&&q("QueryEngine","Query:",yi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Bs()<=te.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",yi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):U.resolve())}Yi(e,n){if(Yy(n))return U.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rd(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Rd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Yy(n)||i.isEqual(G.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?U.resolve(null):(Bs()<=te.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yi(n)),this.rs(e,o,n,SN(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(O0(e));return n.forEach((i,s)=>{Mu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Bs()<=te.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",yi(n)),this.Ji.getDocumentsMatchingQuery(e,n,fr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(oe),this._s=new ys(s=>np(s),rp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function GD(t,e,n,r){return new KD(t,e,n,r)}async function iT(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function QD(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let T=U.resolve();return m.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(C=>{const N=c.docVersions.get(R);ie(N!==null),C.version.compareTo(N)<0&&(p.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),f.addEntry(C)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sT(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function YD(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(qe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(C,N,E){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,T,f)&&l.push(n.Ur.updateTargetData(s,T))});let u=Dn(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(JD(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(G.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return U.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function JD(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(G.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function XD(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZD(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function xd(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function av(t,e,n){const r=Y(t);let i=G.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Y(u),m=p._s.get(f);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:ee())).next(l=>(eO(r,KN(e),l),{documents:l,Ts:s})))}function eO(t,e,n){let r=t.us.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class lv{constructor(){this.activeTargetIds=ZN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tO{constructor(){this.so=new lv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new lv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha=null;function ah(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class sO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=ah(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Xi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=rO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ah();return new Promise((o,l)=>{const u=new m0;u.setWithCredentials(!0),u.listenOnce(g0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case cl.NO_ERROR:const f=u.getResponseJson();q(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case cl.TIMEOUT:q(Je,`RPC '${e}' ${s} timed out`),l(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const p=u.getStatus();if(q(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(N){const E=N.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(E)>=0?E:M.UNKNOWN}(T.status);l(new z(R,T.message))}else l(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{q(Je,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=ah(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_0(),l=v0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,T=!1;const R=new iO({Io:N=>{T?q(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(q(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(Je,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),C=(N,E,v)=>{N.listen(E,I=>{try{v(I)}catch(O){setTimeout(()=>{throw O},0)}})};return C(p,Qs.EventType.OPEN,()=>{T||(q(Je,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),C(p,Qs.EventType.CLOSE,()=>{T||(T=!0,q(Je,`RPC '${e}' stream ${i} transport closed`),R.So())}),C(p,Qs.EventType.ERROR,N=>{T||(T=!0,Xi(Je,`RPC '${e}' stream ${i} transport errored:`,N),R.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),C(p,Qs.EventType.MESSAGE,N=>{var E;if(!T){const v=N.data[0];ie(!!v);const I=v,O=I.error||((E=I[0])===null||E===void 0?void 0:E.error);if(O){q(Je,`RPC '${e}' stream ${i} received error:`,O);const D=O.status;let F=function(w){const S=Ce[w];if(S!==void 0)return K0(S)}(D),_=O.message;F===void 0&&(F=M.INTERNAL,_="Unknown error status: "+D+" with message "+O.message),T=!0,R.So(new z(F,_)),p.close()}else q(Je,`RPC '${e}' stream ${i} received:`,v),R.bo(v)}}),C(l,y0.STAT_EVENT,N=>{N.stat===wd.PROXY?q(Je,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===wd.NOPROXY&&q(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function lh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return new mD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new hp(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oO extends oT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=_D(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?St(o.readTime):G.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sd(u)?{documents:ED(s,u)}:{query:TD(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Y0(s,o.resumeToken);const c=Pd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(G.min())>0){l.readTime=Xl(s,o.snapshotVersion.toTimestamp());const c=Pd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=SD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kd(this.serializer),n.removeTarget=e,this.a_(n)}}class aO extends oT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=wD(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eT(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Cd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Cd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ai(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.L_.add(4),await sa(c),c.q_.set("Unknown"),c.L_.delete(4),await $u(c)}(this))})}),this.q_=new uO(r,i)}}async function $u(t){if(ai(t))for(const e of t.B_)await e(!0)}async function sa(t){for(const e of t.B_)await e(!1)}function aT(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mp(n)?pp(n):vs(n).r_()&&fp(n,e))}function dp(t,e){const n=Y(t),r=vs(n);n.N_.delete(e),r.r_()&&lT(n,e),n.N_.size===0&&(r.r_()?r.o_():ai(n)&&n.q_.set("Unknown"))}function fp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).A_(e)}function lT(t,e){t.Q_.xe(e),vs(t).R_(e)}function pp(t){t.Q_=new hD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.q_.v_()}function mp(t){return ai(t)&&!vs(t).n_()&&t.N_.size>0}function ai(t){return Y(t).L_.size===0}function uT(t){t.Q_=void 0}async function hO(t){t.q_.set("Online")}async function dO(t){t.N_.forEach((e,n)=>{fp(t,e)})}async function fO(t,e){uT(t),mp(t)?(t.q_.M_(e),pp(t)):t.q_.set("Unknown")}async function pO(t,e,n){if(t.q_.set("Online"),e instanceof Q0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(t,r)}else if(e instanceof fl?t.Q_.Ke(e):e instanceof G0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(G.min()))try{const r=await sT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(qe.EMPTY_BYTE_STRING,f.snapshotVersion)),lT(s,u);const p=new Xn(f.target,u,c,f.sequenceNumber);fp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await eu(t,r)}}async function eu(t,e,n){if(!ta(e))throw e;t.L_.add(1),await sa(t),t.q_.set("Offline"),n||(n=()=>sT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $u(t)})}function cT(t,e){return e().catch(n=>eu(t,n,e))}async function Wu(t){const e=Y(t),n=mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mO(e);)try{const i=await XD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,gO(e,i)}catch(i){await eu(e,i)}hT(e)&&dT(e)}function mO(t){return ai(t)&&t.O_.length<10}function gO(t,e){t.O_.push(e);const n=mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function hT(t){return ai(t)&&!mr(t).n_()&&t.O_.length>0}function dT(t){mr(t).start()}async function yO(t){mr(t).p_()}async function vO(t){const e=mr(t);for(const n of t.O_)e.m_(n.mutations)}async function _O(t,e,n){const r=t.O_.shift(),i=sp.from(r,e,n);await cT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wu(t)}async function wO(t,e){e&&mr(t).V_&&await async function(r,i){if(function(o){return H0(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();mr(r).s_(),await cT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wu(r)}}(t,e),hT(t)&&dT(t)}async function cv(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.L_.add(3),await sa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $u(n)}async function EO(t,e){const n=Y(t);e?(n.L_.delete(2),await $u(n)):e||(n.L_.add(2),await sa(n),n.q_.set("Unknown"))}function vs(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new oO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:hO.bind(null,t),Ro:dO.bind(null,t),mo:fO.bind(null,t),d_:pO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mp(t)?pp(t):t.q_.set("Unknown")):(await t.K_.stop(),uT(t))})),t.K_}function mr(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new aO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yO.bind(null,t),mo:wO.bind(null,t),f_:vO.bind(null,t),g_:_O.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wu(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new gp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),ta(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new $i(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $i)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $i;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.W_=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ss(e,n,$i.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class IO{constructor(){this.queries=dv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=dv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function dv(){return new ys(t=>D0(t),Lu)}async function fT(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new TO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=yp(o,`Initialization of query '${yi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&vp(n)}async function pT(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SO(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&vp(n)}function AO(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function vp(t){t.Y_.forEach(e=>{e.next()})}var Nd,fv;(fv=Nd||(Nd={})).ea="default",fv.Cache="cache";class mT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.key=e}}class yT{constructor(e){this.key=e}}class RO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=O0(e),this.Ra=new $i(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=Mu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),C=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?R!==C&&(r.track({type:3,doc:T}),N=!0):this.ga(m,T)||(r.track({type:2,doc:T}),N=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),N=!0):m&&!T&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(T?(o=o.add(T),s=C?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,R){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return C(T)-C(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ss(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new yT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new gT(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ss.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class PO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CO{constructor(e){this.key=e,this.va=!1}}class kO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ys(l=>D0(l),Lu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(H.comparator),this.Na=new Map,this.La=new lp,this.Ba={},this.ka=new Map,this.qa=is.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function xO(t,e,n=!0){const r=IT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await vT(r,e,n,!0),i}async function NO(t,e){const n=IT(t);await vT(n,e,!0,!1)}async function vT(t,e,n,r){const i=await ZD(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await DO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&aT(t.remoteStore,i),l}async function DO(t,e,n,r,i){t.Ka=(p,m,T)=>async function(C,N,E,v){let I=N.view.ma(E);I.ns&&(I=await av(C.localStore,N.query,!1).then(({documents:_})=>N.view.ma(_,I)));const O=v&&v.targetChanges.get(N.targetId),D=v&&v.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(I,C.isPrimaryClient,O,D);return mv(C,N.targetId,F.wa),F.snapshot}(t,p,m,T);const s=await av(t.localStore,e,!0),o=new RO(e,s.Ts),l=o.ma(s.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);mv(t,n,c.wa);const f=new PO(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function OO(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Lu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dp(r.remoteStore,i.targetId),Dd(r,i.targetId)}).catch(ea)):(Dd(r,i.targetId),await xd(r.localStore,i.targetId,!0))}async function VO(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dp(n.remoteStore,r.targetId))}async function LO(t,e,n){const r=zO(t);try{const i=await function(o,l){const u=Y(o),c=Oe.now(),f=l.reduce((T,R)=>T.add(R.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Dn(),C=ee();return u.cs.getEntries(T,f).next(N=>{R=N,R.forEach((E,v)=>{v.isValidDocument()||(C=C.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(N=>{p=N;const E=[];for(const v of l){const I=sD(v,p.get(v.key).overlayedDocument);I!=null&&E.push(new Ir(v.key,I,S0(I.value.mapValue),et.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,E,l)}).next(N=>{m=N;const E=N.applyToLocalDocumentSet(p,C);return u.documentOverlayCache.saveOverlays(T,N.batchId,E)})}).then(()=>({batchId:m.batchId,changes:L0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(oe)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await oa(r,i.changes),await Wu(r.remoteStore)}catch(i){const s=yp(i,"Failed to persist write");n.reject(s)}}async function _T(t,e){const n=Y(t);try{const r=await YD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ie(o.va):i.removedDocuments.size>0&&(ie(o.va),o.va=!1))}),await oa(n,r,e)}catch(r){await ea(r)}}function pv(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&vp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MO(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,Me.newNoDocument(s,G.min()));const l=ee().add(s),u=new Bu(G.min(),new Map,new Ee(oe),o,l);await _T(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),_p(r)}else await xd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ea)}async function bO(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await QD(n.localStore,e);ET(n,r,null),wT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,i)}catch(i){await ea(i)}}async function FO(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ie(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);ET(r,e,n),wT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,i)}catch(i){await ea(i)}}function wT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function ET(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||TT(t,r)})}function TT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(dp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),_p(t))}function mv(t,e,n){for(const r of n)r instanceof gT?(t.La.addReference(r.key,e),UO(t,r)):r instanceof yT?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||TT(t,r.key)):K()}function UO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),_p(t))}function _p(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(ce.fromString(e)),r=t.qa.next();t.Na.set(r,new CO(n)),t.Oa=t.Oa.insert(n,r),aT(t.remoteStore,new Xn(rn(Vu(n.path)),r,"TargetPurposeLimboResolution",Xf.oe))}}async function oa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=cp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(c,m=>U.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>U.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ta(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=f.os.get(m),R=T.snapshotVersion,C=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,C)}}}(r.localStore,s))}async function jO(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await iT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.hs)}}function BO(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function IT(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_T.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MO.bind(null,e),e.Ca.d_=SO.bind(null,e.eventManager),e.Ca.$a=AO.bind(null,e.eventManager),e}function zO(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FO.bind(null,e),e}class tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return GD(this.persistence,new HD,e.initialUser,this.serializer)}Ga(e){return new $D(up.Zr,this.serializer)}Wa(e){return new tO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tu.provider={build:()=>new tu};class Od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jO.bind(null,this.syncEngine),await EO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IO}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=function(s){return new sO(s)}(e.databaseInfo);return function(s,o,l,u){return new lO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new cO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pv(this.syncEngine,n,0),function(){return uv.D()?new uv:new nO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new kO(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await sa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Od.provider={build:()=>new Od};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=Y(i),l={documents:s.map(p=>Zl(o.serializer,p))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ce.emptyPath(),l,s.length),c=new Map;u.forEach(p=>{const m=vD(o.serializer,p);c.set(m.key.toString(),m)});const f=[];return s.forEach(p=>{const m=c.get(p.toString());ie(!!m),f.push(m)}),f}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ju(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new q0(i,this.precondition(i)))}),await async function(r,i){const s=Y(r),o={writes:i.map(l=>eT(s.serializer,l))};await s.Mo("Commit",s.serializer.databaseId,ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?et.exists(!1):et.updateTime(n):et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new z(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return et.updateTime(n)}return et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new hp(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new $O(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!na(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!H0(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=E0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cv(e.remoteStore,i)),t._onlineComponents=e}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Xi("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new tu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new tu);return t._offlineComponents}async function wp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await gv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await gv(t,new Od))),t._onlineComponents}function KO(t){return wp(t).then(e=>e.syncEngine)}function GO(t){return wp(t).then(e=>e.datastore)}async function Vd(t){const e=await wp(t),n=e.eventManager;return n.onListen=xO.bind(null,e.syncEngine),n.onUnlisten=OO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VO.bind(null,e.syncEngine),n}function QO(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new ST({next:m=>{f.Za(),o.enqueueAndForget(()=>pT(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new mT(Vu(l.path),f,{includeMetadataChanges:!0,_a:!0});return fT(s,p)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YO(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vv(t){if(!H.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _v(t){if(H.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mN;switch(r.type){case"firstParty":return new _N(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yv.get(n);r&&(q("ComponentProvider","Removing Datastore"),yv.delete(n),r.terminate())}(this),Promise.resolve()}}function JO(t,e,n,r={}){var i;const s=(t=$t(t,Hu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=cP(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(c)}t._authCredentials=new gN(new w0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new li(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class cr extends li{constructor(e,n,r){super(e,n,Vu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new H(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function os(t,e,...n){if(t=Se(t),RT("collection","path",e),t instanceof Hu){const r=ce.fromString(e,...n);return _v(r),new cr(t,null,r)}{if(!(t instanceof tt||t instanceof cr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return _v(r),new cr(t.firestore,null,r)}}function En(t,e,...n){if(t=Se(t),arguments.length===1&&(e=E0.newId()),RT("doc","path",e),t instanceof Hu){const r=ce.fromString(e,...n);return vv(r),new tt(t,null,new H(r))}{if(!(t instanceof tt||t instanceof cr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return vv(r),new tt(t.firestore,t instanceof cr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new hp(this,"async_queue_retry"),this.Vu=()=>{const r=lh();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ta(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=gp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Tv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class gr extends Hu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ev,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ev(e),this._firestoreClient=void 0,await e}}}function XO(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:"(default)",i=ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lP("firestore");s&&JO(i,...s)}return i}function Ku(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZO(t),t._firestoreClient}function ZO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new DN(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,AT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new qO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(qe.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=/^__.*__$/;class tV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class PT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Qu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(CT(this.Cu)&&eV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class nV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}Qu(e,n,r,i=!1){return new Qu({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yu(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new nV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ip(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Cp("Data must be an object, but it was:",o,r);const l=xT(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Ld(e,p,n);if(!o.contains(m))throw new z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);DT(f,m)||f.push(m)}u=new Et(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new tV(new at(l),u,c)}class Ju extends ui{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ju}}function kT(t,e,n){return new Qu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sp extends ui{_toFieldTransform(e){return new Fu(e.path,new zo)}isEqual(e){return e instanceof Sp}}class Ap extends ui{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.Ku.map(s=>ci(s,n)),i=new ns(r);return new Fu(e.path,i)}isEqual(e){return e instanceof Ap&&qr(this.Ku,e.Ku)}}class Rp extends ui{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=kT(this,e,!0),r=this.Ku.map(s=>ci(s,n)),i=new rs(r);return new Fu(e.path,i)}isEqual(e){return e instanceof Rp&&qr(this.Ku,e.Ku)}}class Pp extends ui{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new $o(e.serializer,F0(e.serializer,this.$u));return new Fu(e.path,n)}isEqual(e){return e instanceof Pp&&this.$u===e.$u}}function rV(t,e,n,r){const i=t.Qu(1,e,n);Cp("Data must be an object, but it was:",i,r);const s=[],o=at.empty();oi(r,(u,c)=>{const f=kp(e,u,n);c=Se(c);const p=i.Nu(f);if(c instanceof Ju)s.push(f);else{const m=ci(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Et(s);return new PT(o,l,i.fieldTransforms)}function iV(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Ld(e,r,n)],u=[i];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ld(e,s[m])),u.push(s[m+1]);const c=[],f=at.empty();for(let m=l.length-1;m>=0;--m)if(!DT(c,l[m])){const T=l[m];let R=u[m];R=Se(R);const C=o.Nu(T);if(R instanceof Ju)c.push(T);else{const N=ci(R,C);N!=null&&(c.push(T),f.set(T,N))}}const p=new Et(c);return new PT(f,p,o.fieldTransforms)}function sV(t,e,n,r=!1){return ci(n,t.Qu(r?4:3,e))}function ci(t,e){if(NT(t=Se(t)))return Cp("Unsupported field value:",e,t),xT(t,e);if(t instanceof ui)return function(r,i){if(!CT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ci(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return F0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Xl(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xl(i.serializer,s)}}if(r instanceof Ep)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:Y0(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ap(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Tp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ip(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${qu(r)}`)}(t,e)}function xT(t,e){const n={};return T0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,i)=>{const s=ci(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Ep||t instanceof Zr||t instanceof tt||t instanceof ui||t instanceof Tp)}function Cp(t,e,n){if(!NT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ld(t,e,n){if((e=Se(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return kp(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const oV=new RegExp("[~\\*/\\[\\]]");function kp(t,e,n){if(e.search(oV)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,l+t+u)}function DT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aV extends ru{data(){return super.data()}}function Xu(t,e){return typeof e=="string"?kp(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{}class OT extends xp{}function iu(t,e,...n){let r=[];e instanceof xp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Np).length,l=s.filter(u=>u instanceof Zu).length;if(o>1||o>0&&l>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zu extends OT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zu(e,n,r)}_apply(e){const n=this._parse(e);return VT(e._query,n),new li(e.firestore,e.converter,Ad(e._query,n))}_parse(e){const n=Yu(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Sv(p,f);const T=[];for(const R of p)T.push(Iv(u,s,R));m={arrayValue:{values:T}}}else m=Iv(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Sv(p,f),m=sV(l,o,p,f==="in"||f==="not-in");return xe.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function su(t,e,n){const r=e,i=Xu("where",t);return Zu._create(i,r,n)}class Np extends xp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Np(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)VT(o,u),o=Ad(o,u)}(e._query,n),new li(e.firestore,e.converter,Ad(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dp extends OT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bo(s,o)}(e._query,this._field,this._direction);return new li(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new gs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function uV(t,e="asc"){const n=e,r=Xu("orderBy",t);return Dp._create(r,n)}function Iv(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!N0(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!H.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wy(t,new H(r))}if(n instanceof tt)return Wy(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qu(n)}.`)}function Sv(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class LT{convertValue(e,n="none"){switch(Xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new Tp(s)}convertGeoPoint(e){return new Ep(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ep(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=pr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);ie(rT(r));const i=new Uo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class cV extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vp extends ru{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pl extends Vp{data(e={}){return super.data(e)}}class hV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Oi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pl(this._firestore,this._userDataWriter,r.key,r,new Oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new pl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new pl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Oi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:dV(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t){t=$t(t,tt);const e=$t(t.firestore,gr);return QO(Ku(e),t._key).then(n=>FT(e,t,n))}class Lp extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function Av(t,e,n){t=$t(t,tt);const r=$t(t.firestore,gr),i=Op(t.converter,e,n);return Mp(r,[Ip(Yu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,et.none())])}function MT(t){return Mp($t(t.firestore,gr),[new ju(t._key,et.none())])}function bT(t,e){const n=$t(t.firestore,gr),r=En(t),i=Op(t.converter,e);return Mp(n,[Ip(Yu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then(()=>r)}function ou(t,...e){var n,r,i;t=Se(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Tv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof tt)c=$t(t.firestore,gr),f=Vu(t._key.path),u={next:p=>{e[o]&&e[o](FT(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,li);c=$t(p.firestore,gr),f=p._query;const m=new Lp(c);u={next:T=>{e[o]&&e[o](new hV(c,m,p,T))},error:e[o+1],complete:e[o+2]},lV(t._query)}return function(m,T,R,C){const N=new ST(C),E=new mT(T,N,R);return m.asyncQueue.enqueueAndForget(async()=>fT(await Vd(m),E)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>pT(await Vd(m),E))}}(Ku(c),f,l,u)}function Mp(t,e){return function(r,i){const s=new Sn;return r.asyncQueue.enqueueAndForget(async()=>LO(await KO(r),i,s)),s.promise}(Ku(t),e)}function FT(t,e,n){const r=n.docs.get(e._key),i=new Lp(t);return new Vp(t,i,e._key,r,new Oi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={maxAttempts:5};function zs(t,e){if((t=Se(t)).firestore!==e)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Yu(n)}get(n){const r=zs(n,this._firestore),i=new cV(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new ru(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ru(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=zs(n,this._firestore),o=Op(s.converter,r,i),l=Ip(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(n,r,i,...s){const o=zs(n,this._firestore);let l;return l=typeof(r=Se(r))=="string"||r instanceof Gu?iV(this._dataReader,"Transaction.update",o._key,r,i,s):rV(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,l),this}delete(n){const r=zs(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=zs(e,this._firestore),r=new Lp(this._firestore);return super.get(e).then(i=>new Vp(this._firestore,r,n._key,i._document,new Oi(!1,!1),n.converter))}}function mV(t,e,n){t=$t(t,gr);const r=Object.assign(Object.assign({},fV),n);return function(s){if(s.maxAttempts<1)throw new z(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new Sn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await GO(s);new WO(s.asyncQueue,c,l,o,u).au()}),u.promise}(Ku(t),i=>e(new pV(t,i)),r)}function au(){return new Sp("serverTimestamp")}function gV(...t){return new Ap("arrayUnion",t)}function yV(...t){return new Rp("arrayRemove",t)}function Rv(t){return new Pp("increment",t)}(function(e,n=!0){(function(i){ms=i})(fs),sn(new qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gr(new yN(r.getProvider("auth-internal")),new EN(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(Uy,"4.7.3",e),Ot(Uy,"4.7.3","esm2017")})();const vV={apiKey:"AIzaSyCeJnvPBD7QCBfU4w7qdlkPCfm0kbQD1r4",authDomain:"the-inner-room-ed60f.firebaseapp.com",projectId:"the-inner-room-ed60f",storageBucket:"the-inner-room-ed60f.firebasestorage.app",messagingSenderId:"551650016368",appId:"1:551650016368:web:d2d53b56333e275633c8b5",measurementId:"G-TGXC3HBLES"},bp=uE(vV);hN(bp);const On=Hk(bp),lt=XO(bp),Ka=[{text:"Be still, and know that I am God.",ref:"Psalm 46:10"},{text:"I can do all things through Christ which strengtheneth me.",ref:"Philippians 4:13"},{text:"The Lord is my shepherd; I shall not want.",ref:"Psalm 23:1"},{text:"Trust in the Lord with all thine heart, and lean not unto thine own understanding.",ref:"Proverbs 3:5"},{text:"For God so loved the world, that he gave his only begotten Son.",ref:"John 3:16"},{text:"Cast all your anxiety on him because he cares for you.",ref:"1 Peter 5:7"},{text:"The Lord is my light and my salvation; whom shall I fear?",ref:"Psalm 27:1"},{text:"This is the day which the Lord hath made; we will rejoice and be glad in it.",ref:"Psalm 118:24"},{text:"Fear thou not; for I am with thee: be not dismayed; for I am thy God.",ref:"Isaiah 41:10"},{text:"Come unto me, all ye that labour and are heavy laden, and I will give you rest.",ref:"Matthew 11:28"},{text:"Rejoice in the Lord always: and again I say, Rejoice.",ref:"Philippians 4:4"},{text:"Be strong and of a good courage; be not afraid.",ref:"Joshua 1:9"},{text:"The joy of the Lord is your strength.",ref:"Nehemiah 8:10"},{text:"In all thy ways acknowledge him, and he shall direct thy paths.",ref:"Proverbs 3:6"},{text:"Delight thyself also in the Lord; and he shall give thee the desires of thine heart.",ref:"Psalm 37:4"},{text:"Let not your heart be troubled: ye believe in God, believe also in me.",ref:"John 14:1"},{text:"And we know that all things work together for good to them that love God.",ref:"Romans 8:28"},{text:"The name of the Lord is a strong tower: the righteous runneth into it.",ref:"Proverbs 18:10"},{text:"But they that wait upon the Lord shall renew their strength.",ref:"Isaiah 40:31"},{text:"Create in me a clean heart, O God; and renew a right spirit within me.",ref:"Psalm 51:10"},{text:"Be ye kind one to another, tenderhearted, forgiving one another.",ref:"Ephesians 4:32"},{text:"Love is patient, love is kind.",ref:"1 Corinthians 13:4"},{text:"Seek ye first the kingdom of God, and his righteousness.",ref:"Matthew 6:33"},{text:"The Lord will fight for you; you need only to be still.",ref:"Exodus 14:14"},{text:"God is our refuge and strength, a very present help in trouble.",ref:"Psalm 46:1"},{text:"I have set the Lord always before me: because he is at my right hand, I shall not be moved.",ref:"Psalm 16:8"},{text:"Thy word is a lamp unto my feet, and a light unto my path.",ref:"Psalm 119:105"},{text:"Give thanks in everything, for this is the will of God in Christ Jesus.",ref:"1 Thessalonians 5:18"},{text:"Draw nigh to God, and he will draw nigh to you.",ref:"James 4:8"},{text:"The Lord bless thee, and keep thee.",ref:"Numbers 6:24"},{text:"Ask, and it shall be given you; seek, and ye shall find.",ref:"Matthew 7:7"},{text:"Blessed are the pure in heart: for they shall see God.",ref:"Matthew 5:8"},{text:"Let your light so shine before men, that they may see your good works.",ref:"Matthew 5:16"},{text:"Take my yoke upon you, and learn of me; for I am meek and lowly in heart.",ref:"Matthew 11:29"},{text:"Ye are the salt of the earth.",ref:"Matthew 5:13"},{text:"With God all things are possible.",ref:"Matthew 19:26"},{text:"Where two or three are gathered together in my name, there am I in the midst of them.",ref:"Matthew 18:20"},{text:"Judge not, that ye be not judged.",ref:"Matthew 7:1"},{text:"It is more blessed to give than to receive.",ref:"Acts 20:35"},{text:"I am the way, the truth, and the life.",ref:"John 14:6"},{text:"Ye shall know the truth, and the truth shall make you free.",ref:"John 8:32"},{text:"Peace I leave with you, my peace I give unto you.",ref:"John 14:27"},{text:"Greater love hath no man than this, that a man lay down his life for his friends.",ref:"John 15:13"},{text:"I am the good shepherd: the good shepherd giveth his life for the sheep.",ref:"John 10:11"},{text:"In my Father’s house are many mansions.",ref:"John 14:2"},{text:"Now abideth faith, hope, charity, these three; but the greatest of these is charity.",ref:"1 Corinthians 13:13"},{text:"Watch ye, stand fast in the faith, quit you like men, be strong.",ref:"1 Corinthians 16:13"},{text:"Let all that you do be done in love.",ref:"1 Corinthians 16:14"},{text:"We walk by faith, not by sight.",ref:"2 Corinthians 5:7"},{text:"God loveth a cheerful giver.",ref:"2 Corinthians 9:7"},{text:"My grace is sufficient for thee: for my strength is made perfect in weakness.",ref:"2 Corinthians 12:9"},{text:"Bear ye one another’s burdens.",ref:"Galatians 6:2"},{text:"The fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith.",ref:"Galatians 5:22"},{text:"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",ref:"Ephesians 2:8"},{text:"Be strong in the Lord, and in the power of his might.",ref:"Ephesians 6:10"},{text:"Finally, brethren, whatsoever things are true, whatsoever things are honest, think on these things.",ref:"Philippians 4:8"},{text:"I have learned, in whatsoever state I am, therewith to be content.",ref:"Philippians 4:11"},{text:"My God shall supply all your need according to his riches in glory by Christ Jesus.",ref:"Philippians 4:19"},{text:"Set your affection on things above, not on things on the earth.",ref:"Colossians 3:2"},{text:"And whatsoever ye do, do it heartily, as to the Lord, and not unto men.",ref:"Colossians 3:23"}],_V=new Date(2024,0,1);function UT(t=new Date){const e=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=(Math.round((e-_V)/864e5)%Ka.length+Ka.length)%Ka.length;return Ka[r]}function ec(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function jT(t){return new Date(`${t}T00:00:00`)}function wV(t){return jT(t).toLocaleDateString(void 0,{month:"short",day:"numeric"})}const EV=["S","M","T","W","T","F","S"];function TV(t,e){let n=0;const r=new Date(e);for(;t.has(ec(r));)n+=1,r.setDate(r.getDate()-1);return n}function IV(){var v;const t=ds(),e=UT(),[n,r]=b.useState(new Set),[i,s]=b.useState(new Set),o=(v=On.currentUser)==null?void 0:v.uid,l=new Date,u=l.getFullYear(),c=l.getMonth(),f=ec(l),p=l.toLocaleDateString(void 0,{month:"long"}),m=`${u}-${String(c+1).padStart(2,"0")}`,T=new Date(u,c+1,0).getDate(),R=new Date(u,c,1).getDay();b.useEffect(()=>{if(!o)return;const I=iu(os(lt,"notes"),su("uid","==",o));return ou(I,O=>{const D=new Set;O.forEach(F=>{F.data().date&&D.add(F.data().date)}),r(D)})},[o]),b.useEffect(()=>{if(!o)return;const I=iu(os(lt,"dayLogs"),su("uid","==",o));return ou(I,O=>{const D=new Set;O.forEach(F=>{const _=F.data();_.date&&(_.mood||_.health)&&D.add(_.date)}),s(D)})},[o]);const C=new Set([...n,...i]),N=TV(C,l),E=[...Array.from({length:R},()=>null),...Array.from({length:T},(I,O)=>O+1)];return L.jsxs("div",{className:"screen",children:[L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 6px"},children:"Today's scripture"}),L.jsxs("p",{className:"serif",style:{fontSize:18,margin:0,lineHeight:1.4},children:[e.text," — ",e.ref]})]}),L.jsxs("div",{className:"two-col",children:[L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsxs("p",{style:{fontSize:13,margin:"0 0 6px"},children:["🔥 ",N," day",N===1?"":"s"," streak"]}),L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:0},children:N>0?"Keep showing up daily":"Log a note or a check-in today to start your streak"})]}),L.jsxs("div",{className:"card",children:[L.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 10px"},children:p}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6,marginBottom:8},children:EV.map((I,O)=>L.jsx("span",{style:{fontSize:10,color:"var(--text-faint)",textAlign:"center"},children:I},O))}),L.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:6},children:E.map((I,O)=>{if(I===null)return L.jsx("span",{},`blank-${O}`);const D=`${m}-${String(I).padStart(2,"0")}`,F=C.has(D),_=D===f;return L.jsx("button",{onClick:()=>t(`/notes?date=${D}`),style:{aspectRatio:"1",border:_?"0.5px solid #2ED8A7":"none",borderRadius:6,background:F?"#2ED8A7":"#1C1C1C",color:F?"#04342C":"#F5F5F5",fontSize:11,cursor:"pointer"},children:I},D)})})]})]})]})}function SV(t){return t!=null&&t.displayName?t.displayName:t!=null&&t.email?t.email.split("@")[0]:"Someone"}function AV(){var p;const[t,e]=b.useState([]),[n,r]=b.useState(""),[i,s]=b.useState(!1),o=(p=On.currentUser)==null?void 0:p.uid;b.useEffect(()=>{const m=iu(os(lt,"prayers"),uV("createdAt","desc"));return ou(m,R=>{e(R.docs.map(C=>({id:C.id,...C.data()})))})},[]);async function l(m){const T=En(lt,"prayers",m.id);await mV(lt,async R=>{var E;(((E=(await R.get(T)).data())==null?void 0:E.prayedBy)||[]).includes(o)?R.update(T,{prayedBy:yV(o),praying:Rv(-1)}):R.update(T,{prayedBy:gV(o),praying:Rv(1)})})}function u(){alert("Post reported. A moderator will review it.")}async function c(m){confirm("Delete this prayer? This cannot be undone.")&&await MT(En(lt,"prayers",m))}async function f(){n.trim()&&(await bT(os(lt,"prayers"),{text:n.trim(),uid:o,author:i?"Anonymous":SV(On.currentUser),anonymous:i,praying:0,prayedBy:[],createdAt:au()}),r(""),s(!1))}return L.jsxs("div",{className:"screen",children:[L.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:L.jsx("p",{style:{fontSize:15,margin:0,fontWeight:500},children:"Prayer wall"})}),L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("textarea",{value:n,onChange:m=>r(m.target.value),placeholder:"Share a prayer request...",rows:3,style:{width:"100%",background:"transparent",color:"var(--text)",border:"none",resize:"none",fontSize:13,outline:"none"}}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[L.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:11,color:"var(--text-muted)",cursor:"pointer"},children:[L.jsx("input",{type:"checkbox",checked:i,onChange:m=>s(m.target.checked)}),"Post anonymously"]}),L.jsx("button",{className:"btn-accent",onClick:f,children:"Post"})]})]}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[t.map(m=>{const T=m.uid===o,R=(m.prayedBy||[]).includes(o);return L.jsxs("div",{className:"card",children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[L.jsx("p",{style:{fontSize:12,margin:"0 0 8px",lineHeight:1.4,flex:1},children:m.text}),L.jsx("button",{onClick:()=>T?c(m.id):u(m.id),"aria-label":T?"Delete post":"Report post",style:{background:"none",border:"none",color:"var(--text-faint)",cursor:"pointer",marginLeft:8},children:T?"🗑":"⚑"})]}),L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[L.jsx("span",{style:{fontSize:10,color:"var(--text-faint)"},children:m.anonymous?"Anonymous":m.author}),L.jsxs("button",{onClick:()=>l(m),className:"pill",style:{background:R?"var(--accent)":"none",color:R?"var(--accent-dark)":"var(--accent)",cursor:"pointer"},children:["🙏 ",m.praying||0," praying"]})]})]},m.id)}),t.length===0&&L.jsx("p",{style:{fontSize:12,color:"var(--text-faint)",textAlign:"center"},children:"No prayers yet. Be the first to share."})]}),L.jsxs("p",{style:{fontSize:10,color:"var(--text-faint)",textAlign:"center",marginTop:16},children:["In crisis? ",L.jsx("a",{href:"/help",style:{color:"var(--accent)"},children:"Get support now"})]})]})}const RV=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],PV={amazing:"🤩 Amazing",good:"🙂 Good",meh:"😐 Meh",bad:"☹️ Bad",awful:"😞 Awful"},CV={healthy:"💪 Healthy",tired:"🥱 Tired",sick:"🤒 Sick"},ch={width:"100%",background:"#0B0B0B",border:"0.5px solid var(--border)",borderRadius:8,padding:8,color:"var(--text)",fontSize:12};function kV(){var O;const[t]=ZR(),e=t.get("date")||ec(new Date),n=(O=On.currentUser)==null?void 0:O.uid,r=UT(jT(e)),[i,s]=b.useState([]),[o,l]=b.useState(""),[u,c]=b.useState(""),[f,p]=b.useState(""),[m,T]=b.useState(""),[R,C]=b.useState(null),[N,E]=b.useState(!0);b.useEffect(()=>{if(!n)return;const D=iu(os(lt,"notes"),su("uid","==",n),su("date","==",e));return ou(D,F=>{const _=F.docs.map(y=>({id:y.id,...y.data()}));_.sort((y,w)=>{var S,P,k,A;return(((P=(S=y.createdAt)==null?void 0:S.toMillis)==null?void 0:P.call(S))||0)-(((A=(k=w.createdAt)==null?void 0:k.toMillis)==null?void 0:A.call(k))||0)}),s(_)})},[n,e]),b.useEffect(()=>{if(!n)return;let D=!0;return E(!0),Md(En(lt,"dayLogs",`${n}_${e}`)).then(F=>{D&&C(F.exists()?F.data():null)}).catch(F=>console.error("Failed to load day log:",F)).finally(()=>{D&&E(!1)}),()=>{D=!1}},[n,e]);async function v(){if(!o.trim()||!u||!f.trim()||!m.trim())return;const D=`${u} ${f.trim()}:${m.trim()}`;await bT(os(lt,"notes"),{uid:n,date:e,passageRef:D,reflection:o.trim(),createdAt:au()}),l(""),T("")}async function I(D){confirm("Delete this note? This cannot be undone.")&&await MT(En(lt,"notes",D))}return L.jsxs("div",{className:"screen",children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 2px"},children:wV(e)}),L.jsx("p",{style:{fontSize:15,margin:"0 0 16px",fontWeight:500},children:"Day view"}),L.jsxs("div",{className:"two-col",style:{marginBottom:16},children:[L.jsxs("div",{className:"card",style:{marginBottom:12},children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Mood"}),L.jsx("p",{style:{fontSize:13,margin:0},children:N?"...":R!=null&&R.mood?PV[R.mood]:"Not logged"})]}),L.jsxs("div",{className:"card",children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Health"}),L.jsx("p",{style:{fontSize:13,margin:0},children:N?"...":R!=null&&R.health?CV[R.health]:"Not logged"})]})]}),L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Scripture of the day"}),L.jsxs("p",{className:"serif",style:{fontSize:13,margin:0,lineHeight:1.5},children:[r.text," ",r.ref]})]}),L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 6px"},children:"Add a note"}),L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("p",{style:{fontSize:10,color:"var(--text-muted)",margin:"0 0 4px"},children:"Book"}),L.jsxs("select",{value:u,onChange:D=>c(D.target.value),style:{...ch,marginBottom:10},children:[L.jsx("option",{value:"",children:"Select book..."}),RV.map(D=>L.jsx("option",{value:D,children:D},D))]}),L.jsxs("div",{style:{display:"flex",gap:10,marginBottom:10},children:[L.jsxs("div",{style:{width:90},children:[L.jsx("p",{style:{fontSize:10,color:"var(--text-muted)",margin:"0 0 4px"},children:"Chapter"}),L.jsx("input",{type:"number",min:"1",value:f,onChange:D=>p(D.target.value),placeholder:"3",style:ch})]}),L.jsxs("div",{style:{flex:1},children:[L.jsx("p",{style:{fontSize:10,color:"var(--text-muted)",margin:"0 0 4px"},children:"Verse(s)"}),L.jsx("input",{value:m,onChange:D=>T(D.target.value),placeholder:"16 or 16-18",style:ch})]})]}),L.jsx("textarea",{value:o,onChange:D=>l(D.target.value),placeholder:"Write what stood out to you today...",rows:4,style:{width:"100%",background:"transparent",color:"var(--text)",border:"none",resize:"none",fontSize:12,outline:"none"}}),L.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:L.jsx("button",{className:"btn-accent",onClick:v,children:"Add note"})})]}),L.jsxs("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 6px"},children:["Notes for this day",i.length>0?` (${i.length})`:""]}),L.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[i.map(D=>L.jsxs("div",{className:"card",children:[L.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[L.jsx("p",{style:{fontSize:10,color:"var(--accent)",margin:"0 0 6px",flex:1},children:D.passageRef}),L.jsx("button",{onClick:()=>I(D.id),"aria-label":"Delete note",style:{background:"none",border:"none",color:"var(--text-faint)",cursor:"pointer",marginLeft:8},children:"🗑"})]}),L.jsx("p",{style:{fontSize:12,margin:0,lineHeight:1.4},children:D.reflection})]},D.id)),i.length===0&&L.jsx("p",{style:{fontSize:12,color:"var(--text-faint)",textAlign:"center"},children:"No notes yet for this day."})]})]})}const xV=[{key:"amazing",label:"Amazing",emoji:"🤩"},{key:"good",label:"Good",emoji:"🙂"},{key:"meh",label:"Meh",emoji:"😐"},{key:"bad",label:"Bad",emoji:"☹️"},{key:"awful",label:"Awful",emoji:"😞"}],NV=[{key:"healthy",label:"Healthy",emoji:"💪"},{key:"tired",label:"Tired",emoji:"🥱"},{key:"sick",label:"Sick",emoji:"🤒"}],DV=["Female","Male","Other","Prefer not to say"],hh={width:"100%",background:"#0B0B0B",border:"0.5px solid var(--border)",borderRadius:8,padding:10,color:"var(--text)",fontSize:13};function OV(){var O;const t=ds(),e=(O=On.currentUser)==null?void 0:O.uid,n=ec(new Date),[r,i]=b.useState(""),[s,o]=b.useState(""),[l,u]=b.useState(""),[c,f]=b.useState(!0),[p,m]=b.useState(!1),[T,R]=b.useState(null),[C,N]=b.useState(null);b.useEffect(()=>{e&&Promise.all([Md(En(lt,"users",e)),Md(En(lt,"dayLogs",`${e}_${n}`))]).then(([D,F])=>{if(D.exists()){const _=D.data();i(_.name||""),o(_.gender||""),u(_.age||"")}F.exists()&&(R(F.data().mood||null),N(F.data().health||null))}).catch(D=>console.error("Failed to load profile:",D)).finally(()=>f(!1))},[e]);async function E(){await Av(En(lt,"users",e),{name:r,gender:s,age:l,updatedAt:au()},{merge:!0}),m(!0)}async function v(D){const F=D.mood??T,_=D.health??C;R(F),N(_),await Av(En(lt,"dayLogs",`${e}_${n}`),{uid:e,date:n,mood:F,health:_,updatedAt:au()},{merge:!0})}async function I(){confirm("Sign out?")&&(await L1(On),t("/"))}return c?L.jsx("div",{className:"screen",children:L.jsx("p",{style:{fontSize:12,color:"var(--text-faint)"},children:"Loading..."})}):L.jsxs("div",{className:"screen",children:[L.jsx("p",{style:{fontSize:15,margin:"0 0 16px",fontWeight:500},children:"Profile"}),L.jsxs("div",{className:"card",style:{marginBottom:16,display:"flex",flexDirection:"column",gap:10},children:[L.jsxs("div",{children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Name"}),L.jsx("input",{value:r,onChange:D=>{i(D.target.value),m(!1)},placeholder:"Your name",style:hh})]}),L.jsxs("div",{children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Gender"}),L.jsxs("select",{value:s,onChange:D=>{o(D.target.value),m(!1)},style:hh,children:[L.jsx("option",{value:"",children:"Select..."}),DV.map(D=>L.jsx("option",{value:D,children:D},D))]})]}),L.jsxs("div",{children:[L.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",margin:"0 0 4px"},children:"Age"}),L.jsx("input",{type:"number",min:"0",value:l,onChange:D=>{u(D.target.value),m(!1)},placeholder:"Your age",style:hh})]}),L.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:10},children:[p&&L.jsx("span",{style:{fontSize:11,color:"var(--text-faint)"},children:"Saved"}),L.jsx("button",{className:"btn-accent",onClick:E,children:"Save profile"})]})]}),L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 10px"},children:"Today's mood"}),L.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:xV.map(D=>L.jsxs("button",{onClick:()=>v({mood:D.key}),className:"pill",style:{background:T===D.key?"var(--accent)":"none",color:T===D.key?"var(--accent-dark)":"var(--accent)",cursor:"pointer"},children:[D.emoji," ",D.label]},D.key))})]}),L.jsxs("div",{className:"card",style:{marginBottom:16},children:[L.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",margin:"0 0 10px"},children:"Today's health"}),L.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:NV.map(D=>L.jsxs("button",{onClick:()=>v({health:D.key}),className:"pill",style:{background:C===D.key?"var(--accent)":"none",color:C===D.key?"var(--accent-dark)":"var(--accent)",cursor:"pointer"},children:[D.emoji," ",D.label]},D.key))})]}),L.jsx("button",{onClick:I,style:{width:"100%",background:"none",border:"0.5px solid var(--border)",borderRadius:20,padding:"10px 18px",color:"#E85D5D",fontSize:13,cursor:"pointer"},children:"Sign out"})]})}function VV(){const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState("signin"),[o,l]=b.useState(""),u=ds();async function c(){l("");try{i==="signin"?await N1(On,t,n):await x1(On,t,n),u("/")}catch(f){l(f.message)}}return L.jsxs("div",{className:"screen",style:{display:"flex",flexDirection:"column",justifyContent:"center",minHeight:"100vh"},children:[L.jsx("p",{className:"serif",style:{fontSize:24,marginBottom:24,textAlign:"center"},children:"The Inner Room"}),L.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:10},children:[L.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:f=>e(f.target.value),style:{background:"#0B0B0B",border:"0.5px solid var(--border)",borderRadius:8,padding:10,color:"var(--text)"}}),L.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:f=>r(f.target.value),style:{background:"#0B0B0B",border:"0.5px solid var(--border)",borderRadius:8,padding:10,color:"var(--text)"}}),o&&L.jsx("p",{style:{color:"#E85D5D",fontSize:12},children:o}),L.jsx("button",{className:"btn-accent",onClick:c,children:i==="signin"?"Sign in":"Create account"}),L.jsx("button",{onClick:()=>s(i==="signin"?"signup":"signin"),style:{background:"none",border:"none",color:"var(--text-muted)",fontSize:12,cursor:"pointer"},children:i==="signin"?"Don't have an account? Sign up":"Already have an account? Sign in"})]})]})}const LV=[{to:"/",label:"Home",icon:"🏠"},{to:"/prayer",label:"Prayer wall",icon:"🙏"},{to:"/notes",label:"Notes",icon:"📝"},{to:"/profile",label:"Profile",icon:"👤"}];function MV(){return L.jsx("nav",{style:{position:"sticky",bottom:0,display:"flex",justifyContent:"space-around",padding:"10px 12px calc(10px + env(safe-area-inset-bottom))",background:"#0B0B0B",borderTop:"0.5px solid #2A2A2A"},children:LV.map(({to:t,label:e,icon:n})=>L.jsxs(YR,{to:t,end:t==="/",style:({isActive:r})=>({display:"flex",flexDirection:"column",alignItems:"center",gap:3,flex:1,padding:"6px 4px",borderRadius:14,textDecoration:"none",fontSize:11,fontWeight:r?600:400,color:r?"var(--accent-dark)":"var(--text-faint)",background:r?"var(--accent)":"transparent",transition:"background 0.15s ease, color 0.15s ease"}),children:[L.jsx("span",{style:{fontSize:16,lineHeight:1},children:n}),e]},t))})}function bV(){const[t,e]=b.useState(void 0);return b.useEffect(()=>V1(On,n=>e(n)),[]),t===void 0?L.jsx("div",{style:{color:"var(--text)",padding:40},children:"Loading..."}):t?L.jsxs("div",{className:"app-shell",children:[L.jsxs(bR,{children:[L.jsx(gi,{path:"/",element:L.jsx(IV,{})}),L.jsx(gi,{path:"/prayer",element:L.jsx(AV,{})}),L.jsx(gi,{path:"/notes",element:L.jsx(kV,{})}),L.jsx(gi,{path:"/profile",element:L.jsx(OV,{})}),L.jsx(gi,{path:"*",element:L.jsx(LR,{to:"/"})})]}),L.jsx(MV,{})]}):L.jsx(VV,{})}dh.createRoot(document.getElementById("root")).render(L.jsx(bv.StrictMode,{children:L.jsx(HR,{basename:"/the-inner-room/",children:L.jsx(bV,{})})}));
