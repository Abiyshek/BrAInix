(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ep={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),x0=Symbol.for("react.portal"),y0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),T0=Symbol.for("react.forward_ref"),A0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),b0=Symbol.for("react.lazy"),zd=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=zd&&t[zd]||t["@@iterator"],typeof t=="function"?t:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,wp={};function ms(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Sp}ms.prototype.isReactComponent={};ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tp(){}Tp.prototype=ms.prototype;function Iu(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Sp}var Nu=Iu.prototype=new Tp;Nu.constructor=Iu;Mp(Nu,ms.prototype);Nu.isPureReactComponent=!0;var Bd=Array.isArray,Ap=Object.prototype.hasOwnProperty,Fu={current:null},Cp={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ap.call(e,i)&&!Cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:Fu.current}}function P0(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function L0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hd=/\/+/g;function bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L0(""+t.key):e.toString(36)}function va(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case x0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bl(o,0):i,Bd(r)?(n="",t!=null&&(n=t.replace(Hd,"$&/")+"/"),va(r,e,n,"",function(c){return c})):r!=null&&(ku(r)&&(r=P0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bl(s,a);o+=va(s,e,n,l,r)}else if(l=R0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bl(s,a++),o+=va(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ro(t,e,n){if(t==null)return t;var i=[],r=0;return va(t,i,"","",function(s){return e.call(n,s,r++)}),i}function D0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},_a={transition:null},U0={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Fu};function Rp(){throw Error("act(...) is not supported in production builds of React.")}De.Children={map:Ro,forEach:function(t,e,n){Ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ro(t,function(){e++}),e},toArray:function(t){return Ro(t,function(e){return e})||[]},only:function(t){if(!ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};De.Component=ms;De.Fragment=y0;De.Profiler=S0;De.PureComponent=Iu;De.StrictMode=E0;De.Suspense=A0;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;De.act=Rp;De.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ap.call(e,l)&&!Cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(t){return t={$$typeof:w0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:M0,_context:t},t.Consumer=t};De.createElement=bp;De.createFactory=function(t){var e=bp.bind(null,t);return e.type=t,e};De.createRef=function(){return{current:null}};De.forwardRef=function(t){return{$$typeof:T0,render:t}};De.isValidElement=ku;De.lazy=function(t){return{$$typeof:b0,_payload:{_status:-1,_result:t},_init:D0}};De.memo=function(t,e){return{$$typeof:C0,type:t,compare:e===void 0?null:e}};De.startTransition=function(t){var e=_a.transition;_a.transition={};try{t()}finally{_a.transition=e}};De.unstable_act=Rp;De.useCallback=function(t,e){return Wt.current.useCallback(t,e)};De.useContext=function(t){return Wt.current.useContext(t)};De.useDebugValue=function(){};De.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};De.useEffect=function(t,e){return Wt.current.useEffect(t,e)};De.useId=function(){return Wt.current.useId()};De.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};De.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};De.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};De.useMemo=function(t,e){return Wt.current.useMemo(t,e)};De.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};De.useRef=function(t){return Wt.current.useRef(t)};De.useState=function(t){return Wt.current.useState(t)};De.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};De.useTransition=function(){return Wt.current.useTransition()};De.version="18.3.1";Ep.exports=De;var ze=Ep.exports;const y=_0(ze);var Dc={},Pp={exports:{}},fn={},Lp={exports:{}},Dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var B=I.length;I.push(G);e:for(;0<B;){var le=B-1>>>1,J=I[le];if(0<r(J,G))I[le]=G,I[B]=J,B=le;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],B=I.pop();if(B!==G){I[0]=B;e:for(var le=0,J=I.length,V=J>>>1;le<V;){var Q=2*(le+1)-1,re=I[Q],oe=Q+1,U=I[oe];if(0>r(re,B))oe<J&&0>r(U,re)?(I[le]=U,I[oe]=B,le=oe):(I[le]=re,I[Q]=B,le=Q);else if(oe<J&&0>r(U,B))I[le]=U,I[oe]=B,le=oe;else break e}}return G}function r(I,G){var B=I.sortIndex-G.sortIndex;return B!==0?B:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function E(I){if(x=!1,g(I),!_)if(n(l)!==null)_=!0,Z(w);else{var G=n(c);G!==null&&K(E,G.startTime-I)}}function w(I,G){_=!1,x&&(x=!1,u(L),L=-1),p=!0;var B=f;try{for(g(G),h=n(l);h!==null&&(!(h.expirationTime>G)||I&&!H());){var le=h.callback;if(typeof le=="function"){h.callback=null,f=h.priorityLevel;var J=le(h.expirationTime<=G);G=t.unstable_now(),typeof J=="function"?h.callback=J:h===n(l)&&i(l),g(G)}else i(l);h=n(l)}if(h!==null)var V=!0;else{var Q=n(c);Q!==null&&K(E,Q.startTime-G),V=!1}return V}finally{h=null,f=B,p=!1}}var A=!1,R=null,L=-1,S=5,M=-1;function H(){return!(t.unstable_now()-M<S)}function z(){if(R!==null){var I=t.unstable_now();M=I;var G=!0;try{G=R(!0,I)}finally{G?k():(A=!1,R=null)}}else A=!1}var k;if(typeof m=="function")k=function(){m(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,P=W.port2;W.port1.onmessage=z,k=function(){P.postMessage(null)}}else k=function(){v(z,0)};function Z(I){R=I,A||(A=!0,k())}function K(I,G){L=v(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Z(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var B=f;f=G;try{return I()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=f;f=I;try{return G()}finally{f=B}},t.unstable_scheduleCallback=function(I,G,B){var le=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?le+B:le):B=le,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,I={id:d++,callback:G,priorityLevel:I,startTime:B,expirationTime:J,sortIndex:-1},B>le?(I.sortIndex=B,e(c,I),n(l)===null&&I===n(c)&&(x?(u(L),L=-1):x=!0,K(E,B-le))):(I.sortIndex=J,e(l,I),_||p||(_=!0,Z(w))),I},t.unstable_shouldYield=H,t.unstable_wrapCallback=function(I){var G=f;return function(){var B=f;f=G;try{return I.apply(this,arguments)}finally{f=B}}}})(Dp);Lp.exports=Dp;var I0=Lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=ze,dn=I0;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,Zs={};function mr(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(Zs[t]=e,t=0;t<e.length;t++)Up.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gd={},Vd={};function k0(t){return Uc.call(Vd,t)?!0:Uc.call(Gd,t)?!1:F0.test(t)?Vd[t]=!0:(Gd[t]=!0,!1)}function O0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z0(t,e,n,i){if(e===null||typeof e>"u"||O0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ou,zu);Rt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ou,zu);Rt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ou,zu);Rt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bu(t,e,n,i){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,n,r,i)&&(n=null),i||r===null?k0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),Fr=Symbol.for("react.fragment"),Hu=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Nc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),xi=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),Wd=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,Rl;function Is(t){if(Rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var Pl=!1;function Ll(t,e){if(!t||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Is(t):""}function B0(t){switch(t.tag){case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return Is("Suspense");case 19:return Is("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fr:return"Fragment";case Nr:return"Portal";case Ic:return"Profiler";case Hu:return"StrictMode";case Nc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Np:return(t.displayName||"Context")+".Consumer";case Ip:return(t._context.displayName||"Context")+".Provider";case Gu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vu:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case xi:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function H0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(t){var e=kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lo(t){t._valueTracker||(t._valueTracker=G0(t))}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Oc(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zp(t,e){e=e.checked,e!=null&&Bu(t,"checked",e,!1)}function zc(t,e){zp(t,e);var n=Ii(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bc(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bc(t,e,n){(e!=="number"||Da(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ns=Array.isArray;function Yr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ns(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function Bp(t,e){var n=Ii(e.value),i=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){V0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Vp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Wp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W0=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vc(t,e){if(e){if(W0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Wc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xc=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,$r=null,Kr=null;function $d(t){if(t=yo(t)){if(typeof jc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=ul(e),jc(t.stateNode,t.type,e))}}function Xp(t){$r?Kr?Kr.push(t):Kr=[t]:$r=t}function jp(){if($r){var t=$r,e=Kr;if(Kr=$r=null,$d(t),e)for(t=0;t<e.length;t++)$d(e[t])}}function qp(t,e){return t(e)}function Yp(){}var Dl=!1;function $p(t,e,n){if(Dl)return t(e,n);Dl=!0;try{return qp(t,e,n)}finally{Dl=!1,($r!==null||Kr!==null)&&(Yp(),jp())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var i=ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var qc=!1;if(li)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){qc=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{qc=!1}function X0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Bs=!1,Ua=null,Ia=!1,Yc=null,j0={onError:function(t){Bs=!0,Ua=t}};function q0(t,e,n,i,r,s,o,a,l){Bs=!1,Ua=null,X0.apply(j0,arguments)}function Y0(t,e,n,i,r,s,o,a,l){if(q0.apply(this,arguments),Bs){if(Bs){var c=Ua;Bs=!1,Ua=null}else throw Error(te(198));Ia||(Ia=!0,Yc=c)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(gr(t)!==t)throw Error(te(188))}function $0(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Kd(r),t;if(s===i)return Kd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Zp(t){return t=$0(t),t!==null?Qp(t):null}function Qp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qp(t);if(e!==null)return e;t=t.sibling}return null}var Jp=dn.unstable_scheduleCallback,Zd=dn.unstable_cancelCallback,K0=dn.unstable_shouldYield,Z0=dn.unstable_requestPaint,at=dn.unstable_now,Q0=dn.unstable_getCurrentPriorityLevel,Xu=dn.unstable_ImmediatePriority,em=dn.unstable_UserBlockingPriority,Na=dn.unstable_NormalPriority,J0=dn.unstable_LowPriority,tm=dn.unstable_IdlePriority,ol=null,Xn=null;function ev(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:iv,tv=Math.log,nv=Math.LN2;function iv(t){return t>>>=0,t===0?32:31-(tv(t)/nv|0)|0}var Uo=64,Io=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fs(a):(s&=o,s!==0&&(i=Fs(s)))}else o=n&~r,o!==0?i=Fs(o):s!==0&&(i=Fs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Fn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=rv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $c(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nm(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function Ul(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var We=0;function im(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rm,qu,sm,om,am,Kc=!1,No=[],Ti=null,Ai=null,Ci=null,eo=new Map,to=new Map,Ei=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qd(t,e){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Ci=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&qu(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lv(t,e,n,i,r){switch(e){case"focusin":return Ti=ws(Ti,t,e,n,i,r),!0;case"dragenter":return Ai=ws(Ai,t,e,n,i,r),!0;case"mouseover":return Ci=ws(Ci,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return eo.set(s,ws(eo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,to.set(s,ws(to.get(s)||null,t,e,n,i,r)),!0}return!1}function lm(t){var e=Zi(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Kp(n),e!==null){t.blockedOn=e,am(t.priority,function(){sm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xc=i,n.target.dispatchEvent(i),Xc=null}else return e=yo(n),e!==null&&qu(e),t.blockedOn=n,!1;e.shift()}return!0}function Jd(t,e,n){xa(t)&&n.delete(e)}function cv(){Kc=!1,Ti!==null&&xa(Ti)&&(Ti=null),Ai!==null&&xa(Ai)&&(Ai=null),Ci!==null&&xa(Ci)&&(Ci=null),eo.forEach(Jd),to.forEach(Jd)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,cv)))}function no(t){function e(r){return Ts(r,t)}if(0<No.length){Ts(No[0],t);for(var n=1;n<No.length;n++){var i=No[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ti!==null&&Ts(Ti,t),Ai!==null&&Ts(Ai,t),Ci!==null&&Ts(Ci,t),eo.forEach(e),to.forEach(e),n=0;n<Ei.length;n++)i=Ei[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ei.length&&(n=Ei[0],n.blockedOn===null);)lm(n),n.blockedOn===null&&Ei.shift()}var Zr=fi.ReactCurrentBatchConfig,ka=!0;function uv(t,e,n,i){var r=We,s=Zr.transition;Zr.transition=null;try{We=1,Yu(t,e,n,i)}finally{We=r,Zr.transition=s}}function dv(t,e,n,i){var r=We,s=Zr.transition;Zr.transition=null;try{We=4,Yu(t,e,n,i)}finally{We=r,Zr.transition=s}}function Yu(t,e,n,i){if(ka){var r=Zc(t,e,n,i);if(r===null)Vl(t,e,i,Oa,n),Qd(t,i);else if(lv(r,t,e,n,i))i.stopPropagation();else if(Qd(t,i),e&4&&-1<av.indexOf(t)){for(;r!==null;){var s=yo(r);if(s!==null&&rm(s),s=Zc(t,e,n,i),s===null&&Vl(t,e,i,Oa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vl(t,e,i,null,n)}}var Oa=null;function Zc(t,e,n,i){if(Oa=null,t=Wu(i),t=Zi(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function cm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q0()){case Xu:return 1;case em:return 4;case Na:case J0:return 16;case tm:return 536870912;default:return 16}default:return 16}}var Mi=null,$u=null,ya=null;function um(){if(ya)return ya;var t,e=$u,n=e.length,i,r="value"in Mi?Mi.value:Mi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ya=r.slice(t,1<i?1-i:void 0)}function Ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function ef(){return!1}function hn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:ef,this.isPropagationStopped=ef,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=hn(gs),xo=nt({},gs,{view:0,detail:0}),fv=hn(xo),Il,Nl,As,al=nt({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Il=t.screenX-As.screenX,Nl=t.screenY-As.screenY):Nl=Il=0,As=t),Il)},movementY:function(t){return"movementY"in t?t.movementY:Nl}}),tf=hn(al),hv=nt({},al,{dataTransfer:0}),pv=hn(hv),mv=nt({},xo,{relatedTarget:0}),Fl=hn(mv),gv=nt({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=hn(gv),_v=nt({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=hn(_v),yv=nt({},gs,{data:0}),nf=hn(yv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mv[t])?!!e[t]:!1}function Zu(){return wv}var Tv=nt({},xo,{key:function(t){if(t.key){var e=Ev[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(t){return t.type==="keypress"?Ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Av=hn(Tv),Cv=nt({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=hn(Cv),bv=nt({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),Rv=hn(bv),Pv=nt({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=hn(Pv),Dv=nt({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=hn(Dv),Iv=[9,13,27,32],Qu=li&&"CompositionEvent"in window,Hs=null;li&&"documentMode"in document&&(Hs=document.documentMode);var Nv=li&&"TextEvent"in window&&!Hs,dm=li&&(!Qu||Hs&&8<Hs&&11>=Hs),sf=" ",of=!1;function fm(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function Fv(t,e){switch(t){case"compositionend":return hm(e);case"keypress":return e.which!==32?null:(of=!0,sf);case"textInput":return t=e.data,t===sf&&of?null:t;default:return null}}function kv(t,e){if(kr)return t==="compositionend"||!Qu&&fm(t,e)?(t=um(),ya=$u=Mi=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dm&&e.locale!=="ko"?null:e.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ov[t.type]:e==="textarea"}function pm(t,e,n,i){Xp(i),e=za(e,"onChange"),0<e.length&&(n=new Ku("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Gs=null,io=null;function zv(t){Tm(t,0)}function ll(t){var e=Br(t);if(Op(e))return t}function Bv(t,e){if(t==="change")return e}var mm=!1;if(li){var kl;if(li){var Ol="oninput"in document;if(!Ol){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Ol=typeof lf.oninput=="function"}kl=Ol}else kl=!1;mm=kl&&(!document.documentMode||9<document.documentMode)}function cf(){Gs&&(Gs.detachEvent("onpropertychange",gm),io=Gs=null)}function gm(t){if(t.propertyName==="value"&&ll(io)){var e=[];pm(e,io,t,Wu(t)),$p(zv,e)}}function Hv(t,e,n){t==="focusin"?(cf(),Gs=e,io=n,Gs.attachEvent("onpropertychange",gm)):t==="focusout"&&cf()}function Gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(io)}function Vv(t,e){if(t==="click")return ll(e)}function Wv(t,e){if(t==="input"||t==="change")return ll(e)}function Xv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:Xv;function ro(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uc.call(e,r)||!On(t[r],e[r]))return!1}return!0}function uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function df(t,e){var n=uf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function vm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _m(){for(var t=window,e=Da();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Da(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jv(t){var e=_m(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vm(n.ownerDocument.documentElement,n)){if(i!==null&&Ju(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=df(n,s);var o=df(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qv=li&&"documentMode"in document&&11>=document.documentMode,Or=null,Qc=null,Vs=null,Jc=!1;function ff(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Or==null||Or!==Da(i)||(i=Or,"selectionStart"in i&&Ju(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vs&&ro(Vs,i)||(Vs=i,i=za(Qc,"onSelect"),0<i.length&&(e=new Ku("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Or)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},zl={},xm={};li&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function cl(t){if(zl[t])return zl[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xm)return zl[t]=e[n];return t}var ym=cl("animationend"),Em=cl("animationiteration"),Sm=cl("animationstart"),Mm=cl("transitionend"),wm=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){wm.set(t,e),mr(e,[t])}for(var Bl=0;Bl<hf.length;Bl++){var Hl=hf[Bl],Yv=Hl.toLowerCase(),$v=Hl[0].toUpperCase()+Hl.slice(1);ki(Yv,"on"+$v)}ki(ym,"onAnimationEnd");ki(Em,"onAnimationIteration");ki(Sm,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(Mm,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function pf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y0(i,e,void 0,t),t.currentTarget=null}function Tm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pf(r,a,c),s=l}}}if(Ia)throw t=Yc,Ia=!1,Yc=null,t}function Ze(t,e){var n=e[ru];n===void 0&&(n=e[ru]=new Set);var i=t+"__bubble";n.has(i)||(Am(e,t,2,!1),n.add(i))}function Gl(t,e,n){var i=0;e&&(i|=4),Am(n,t,i,e)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[Oo]){t[Oo]=!0,Up.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||Gl(n,!1,t),Gl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oo]||(e[Oo]=!0,Gl("selectionchange",!1,e))}}function Am(t,e,n,i){switch(cm(e)){case 1:var r=uv;break;case 4:r=dv;break;default:r=Yu}n=r.bind(null,e,n,t),r=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$p(function(){var c=s,d=Wu(n),h=[];e:{var f=wm.get(t);if(f!==void 0){var p=Ku,_=t;switch(t){case"keypress":if(Ea(n)===0)break e;case"keydown":case"keyup":p=Av;break;case"focusin":_="focus",p=Fl;break;case"focusout":_="blur",p=Fl;break;case"beforeblur":case"afterblur":p=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Rv;break;case ym:case Em:case Sm:p=vv;break;case Mm:p=Lv;break;case"scroll":p=fv;break;case"wheel":p=Uv;break;case"copy":case"cut":case"paste":p=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rf}var x=(e&4)!==0,v=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var m=c,g;m!==null;){g=m;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,u!==null&&(E=Js(m,u),E!=null&&x.push(oo(m,E,g)))),v)break;m=m.return}0<x.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Xc&&(_=n.relatedTarget||n.fromElement)&&(Zi(_)||_[ci]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Zi(_):null,_!==null&&(v=gr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=tf,E="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=rf,E="onPointerLeave",u="onPointerEnter",m="pointer"),v=p==null?f:Br(p),g=_==null?f:Br(_),f=new x(E,m+"leave",p,n,d),f.target=v,f.relatedTarget=g,E=null,Zi(d)===c&&(x=new x(u,m+"enter",_,n,d),x.target=g,x.relatedTarget=v,E=x),v=E,p&&_)t:{for(x=p,u=_,m=0,g=x;g;g=vr(g))m++;for(g=0,E=u;E;E=vr(E))g++;for(;0<m-g;)x=vr(x),m--;for(;0<g-m;)u=vr(u),g--;for(;m--;){if(x===u||u!==null&&x===u.alternate)break t;x=vr(x),u=vr(u)}x=null}else x=null;p!==null&&mf(h,f,p,x,!1),_!==null&&v!==null&&mf(h,v,_,x,!0)}}e:{if(f=c?Br(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=Bv;else if(af(f))if(mm)w=Wv;else{w=Gv;var A=Hv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Vv);if(w&&(w=w(t,c))){pm(h,w,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Bc(f,"number",f.value)}switch(A=c?Br(c):window,t){case"focusin":(af(A)||A.contentEditable==="true")&&(Or=A,Qc=c,Vs=null);break;case"focusout":Vs=Qc=Or=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,ff(h,n,d);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":ff(h,n,d)}var R;if(Qu)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else kr?fm(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(dm&&n.locale!=="ko"&&(kr||L!=="onCompositionStart"?L==="onCompositionEnd"&&kr&&(R=um()):(Mi=d,$u="value"in Mi?Mi.value:Mi.textContent,kr=!0)),A=za(c,L),0<A.length&&(L=new nf(L,t,null,n,d),h.push({event:L,listeners:A}),R?L.data=R:(R=hm(n),R!==null&&(L.data=R)))),(R=Nv?Fv(t,n):kv(t,n))&&(c=za(c,"onBeforeInput"),0<c.length&&(d=new nf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=R))}Tm(h,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Js(t,n),s!=null&&i.unshift(oo(t,s,r)),s=Js(t,e),s!=null&&i.push(oo(t,s,r))),t=t.return}return i}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Js(n,s),l!=null&&o.unshift(oo(n,l,a))):r||(l=Js(n,s),l!=null&&o.push(oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function gf(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Qv,"")}function zo(t,e,n){if(e=gf(e),gf(t)!==e&&n)throw Error(te(425))}function Ba(){}var eu=null,tu=null;function nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,e_=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(t_)}:iu;function t_(t){setTimeout(function(){throw t})}function Wl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),no(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);no(e)}function bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _f(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Wn="__reactFiber$"+vs,ao="__reactProps$"+vs,ci="__reactContainer$"+vs,ru="__reactEvents$"+vs,n_="__reactListeners$"+vs,i_="__reactHandles$"+vs;function Zi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ci]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_f(t);t!==null;){if(n=t[Wn])return n;t=_f(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Wn]||t[ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function ul(t){return t[ao]||null}var su=[],Hr=-1;function Oi(t){return{current:t}}function Qe(t){0>Hr||(t.current=su[Hr],su[Hr]=null,Hr--)}function Ke(t,e){Hr++,su[Hr]=t.current,t.current=e}var Ni={},Ft=Oi(Ni),Kt=Oi(!1),ar=Ni;function ss(t,e){var n=t.type.contextTypes;if(!n)return Ni;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function Ha(){Qe(Kt),Qe(Ft)}function xf(t,e,n){if(Ft.current!==Ni)throw Error(te(168));Ke(Ft,e),Ke(Kt,n)}function Cm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,H0(t)||"Unknown",r));return nt({},n,i)}function Ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,ar=Ft.current,Ke(Ft,t),Ke(Kt,Kt.current),!0}function yf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Cm(t,e,ar),i.__reactInternalMemoizedMergedChildContext=t,Qe(Kt),Qe(Ft),Ke(Ft,t)):Qe(Kt),Ke(Kt,n)}var ni=null,dl=!1,Xl=!1;function bm(t){ni===null?ni=[t]:ni.push(t)}function r_(t){dl=!0,bm(t)}function zi(){if(!Xl&&ni!==null){Xl=!0;var t=0,e=We;try{var n=ni;for(We=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ni=null,dl=!1}catch(r){throw ni!==null&&(ni=ni.slice(t+1)),Jp(Xu,zi),r}finally{We=e,Xl=!1}}return null}var Gr=[],Vr=0,Va=null,Wa=0,gn=[],vn=0,lr=null,ri=1,si="";function ji(t,e){Gr[Vr++]=Wa,Gr[Vr++]=Va,Va=t,Wa=e}function Rm(t,e,n){gn[vn++]=ri,gn[vn++]=si,gn[vn++]=lr,lr=t;var i=ri;t=si;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-Fn(e)+r|n<<r|i,si=s+t}else ri=1<<s|n<<r|i,si=t}function ed(t){t.return!==null&&(ji(t,1),Rm(t,1,0))}function td(t){for(;t===Va;)Va=Gr[--Vr],Gr[Vr]=null,Wa=Gr[--Vr],Gr[Vr]=null;for(;t===lr;)lr=gn[--vn],gn[vn]=null,si=gn[--vn],gn[vn]=null,ri=gn[--vn],gn[vn]=null}var ln=null,an=null,Je=!1,Dn=null;function Pm(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ef(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,an=bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,an=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lr!==null?{id:ri,overflow:si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,an=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(Je){var e=an;if(e){var n=e;if(!Ef(t,e)){if(ou(t))throw Error(te(418));e=bi(n.nextSibling);var i=ln;e&&Ef(t,e)?Pm(i,n):(t.flags=t.flags&-4097|2,Je=!1,ln=t)}}else{if(ou(t))throw Error(te(418));t.flags=t.flags&-4097|2,Je=!1,ln=t}}}function Sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function Bo(t){if(t!==ln)return!1;if(!Je)return Sf(t),Je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nu(t.type,t.memoizedProps)),e&&(e=an)){if(ou(t))throw Lm(),Error(te(418));for(;e;)Pm(t,e),e=bi(e.nextSibling)}if(Sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){an=bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}an=null}}else an=ln?bi(t.stateNode.nextSibling):null;return!0}function Lm(){for(var t=an;t;)t=bi(t.nextSibling)}function os(){an=ln=null,Je=!1}function nd(t){Dn===null?Dn=[t]:Dn.push(t)}var s_=fi.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ho(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mf(t){var e=t._init;return e(t._payload)}function Dm(t){function e(u,m){if(t){var g=u.deletions;g===null?(u.deletions=[m],u.flags|=16):g.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Di(u,m),u.index=0,u.sibling=null,u}function s(u,m,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<m?(u.flags|=2,m):g):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,g,E){return m===null||m.tag!==6?(m=Ql(g,u.mode,E),m.return=u,m):(m=r(m,g),m.return=u,m)}function l(u,m,g,E){var w=g.type;return w===Fr?d(u,m,g.props.children,E,g.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xi&&Mf(w)===m.type)?(E=r(m,g.props),E.ref=Cs(u,m,g),E.return=u,E):(E=ba(g.type,g.key,g.props,null,u.mode,E),E.ref=Cs(u,m,g),E.return=u,E)}function c(u,m,g,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Jl(g,u.mode,E),m.return=u,m):(m=r(m,g.children||[]),m.return=u,m)}function d(u,m,g,E,w){return m===null||m.tag!==7?(m=ir(g,u.mode,E,w),m.return=u,m):(m=r(m,g),m.return=u,m)}function h(u,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ql(""+m,u.mode,g),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Po:return g=ba(m.type,m.key,m.props,null,u.mode,g),g.ref=Cs(u,null,m),g.return=u,g;case Nr:return m=Jl(m,u.mode,g),m.return=u,m;case xi:var E=m._init;return h(u,E(m._payload),g)}if(Ns(m)||Ss(m))return m=ir(m,u.mode,g,null),m.return=u,m;Ho(u,m)}return null}function f(u,m,g,E){var w=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(u,m,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:return g.key===w?l(u,m,g,E):null;case Nr:return g.key===w?c(u,m,g,E):null;case xi:return w=g._init,f(u,m,w(g._payload),E)}if(Ns(g)||Ss(g))return w!==null?null:d(u,m,g,E,null);Ho(u,g)}return null}function p(u,m,g,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(g)||null,a(m,u,""+E,w);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Po:return u=u.get(E.key===null?g:E.key)||null,l(m,u,E,w);case Nr:return u=u.get(E.key===null?g:E.key)||null,c(m,u,E,w);case xi:var A=E._init;return p(u,m,g,A(E._payload),w)}if(Ns(E)||Ss(E))return u=u.get(g)||null,d(m,u,E,w,null);Ho(m,E)}return null}function _(u,m,g,E){for(var w=null,A=null,R=m,L=m=0,S=null;R!==null&&L<g.length;L++){R.index>L?(S=R,R=null):S=R.sibling;var M=f(u,R,g[L],E);if(M===null){R===null&&(R=S);break}t&&R&&M.alternate===null&&e(u,R),m=s(M,m,L),A===null?w=M:A.sibling=M,A=M,R=S}if(L===g.length)return n(u,R),Je&&ji(u,L),w;if(R===null){for(;L<g.length;L++)R=h(u,g[L],E),R!==null&&(m=s(R,m,L),A===null?w=R:A.sibling=R,A=R);return Je&&ji(u,L),w}for(R=i(u,R);L<g.length;L++)S=p(R,u,L,g[L],E),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?L:S.key),m=s(S,m,L),A===null?w=S:A.sibling=S,A=S);return t&&R.forEach(function(H){return e(u,H)}),Je&&ji(u,L),w}function x(u,m,g,E){var w=Ss(g);if(typeof w!="function")throw Error(te(150));if(g=w.call(g),g==null)throw Error(te(151));for(var A=w=null,R=m,L=m=0,S=null,M=g.next();R!==null&&!M.done;L++,M=g.next()){R.index>L?(S=R,R=null):S=R.sibling;var H=f(u,R,M.value,E);if(H===null){R===null&&(R=S);break}t&&R&&H.alternate===null&&e(u,R),m=s(H,m,L),A===null?w=H:A.sibling=H,A=H,R=S}if(M.done)return n(u,R),Je&&ji(u,L),w;if(R===null){for(;!M.done;L++,M=g.next())M=h(u,M.value,E),M!==null&&(m=s(M,m,L),A===null?w=M:A.sibling=M,A=M);return Je&&ji(u,L),w}for(R=i(u,R);!M.done;L++,M=g.next())M=p(R,u,L,M.value,E),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?L:M.key),m=s(M,m,L),A===null?w=M:A.sibling=M,A=M);return t&&R.forEach(function(z){return e(u,z)}),Je&&ji(u,L),w}function v(u,m,g,E){if(typeof g=="object"&&g!==null&&g.type===Fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Po:e:{for(var w=g.key,A=m;A!==null;){if(A.key===w){if(w=g.type,w===Fr){if(A.tag===7){n(u,A.sibling),m=r(A,g.props.children),m.return=u,u=m;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===xi&&Mf(w)===A.type){n(u,A.sibling),m=r(A,g.props),m.ref=Cs(u,A,g),m.return=u,u=m;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===Fr?(m=ir(g.props.children,u.mode,E,g.key),m.return=u,u=m):(E=ba(g.type,g.key,g.props,null,u.mode,E),E.ref=Cs(u,m,g),E.return=u,u=E)}return o(u);case Nr:e:{for(A=g.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(u,m.sibling),m=r(m,g.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Jl(g,u.mode,E),m.return=u,u=m}return o(u);case xi:return A=g._init,v(u,m,A(g._payload),E)}if(Ns(g))return _(u,m,g,E);if(Ss(g))return x(u,m,g,E);Ho(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,g),m.return=u,u=m):(n(u,m),m=Ql(g,u.mode,E),m.return=u,u=m),o(u)):n(u,m)}return v}var as=Dm(!0),Um=Dm(!1),Xa=Oi(null),ja=null,Wr=null,id=null;function rd(){id=Wr=ja=null}function sd(t){var e=Xa.current;Qe(Xa),t._currentValue=e}function lu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){ja=t,id=Wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},Wr===null){if(ja===null)throw Error(te(308));Wr=t,ja.dependencies={lanes:0,firstContext:t}}else Wr=Wr.next=t;return e}var Qi=null;function od(t){Qi===null?Qi=[t]:Qi.push(t)}function Im(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,od(e)):(n.next=r.next,r.next=n),e.interleaved=n,ui(t,i)}function ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yi=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ui(t,n)}return r=i.interleaved,r===null?(e.next=e,od(i)):(e.next=r.next,r.next=e),i.interleaved=e,ui(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ju(t,n)}}function wf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qa(t,e,n,i){var r=t.updateQueue;yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(f=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=nt({},h,f);break e;case 2:yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=h}}function Tf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Eo={},jn=Oi(Eo),lo=Oi(Eo),co=Oi(Eo);function Ji(t){if(t===Eo)throw Error(te(174));return t}function ld(t,e){switch(Ke(co,e),Ke(lo,t),Ke(jn,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}Qe(jn),Ke(jn,e)}function ls(){Qe(jn),Qe(lo),Qe(co)}function Fm(t){Ji(co.current);var e=Ji(jn.current),n=Gc(e,t.type);e!==n&&(Ke(lo,t),Ke(jn,n))}function cd(t){lo.current===t&&(Qe(jn),Qe(lo))}var et=Oi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jl=[];function ud(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var Ma=fi.ReactCurrentDispatcher,ql=fi.ReactCurrentBatchConfig,cr=0,tt=null,ft=null,Et=null,$a=!1,Ws=!1,uo=0,o_=0;function Lt(){throw Error(te(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function fd(t,e,n,i,r,s){if(cr=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ma.current=t===null||t.memoizedState===null?u_:d_,t=n(i,r),Ws){s=0;do{if(Ws=!1,uo=0,25<=s)throw Error(te(301));s+=1,Et=ft=null,e.updateQueue=null,Ma.current=f_,t=n(i,r)}while(Ws)}if(Ma.current=Ka,e=ft!==null&&ft.next!==null,cr=0,Et=ft=tt=null,$a=!1,e)throw Error(te(300));return t}function hd(){var t=uo!==0;return uo=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?tt.memoizedState=Et=t:Et=Et.next=t,Et}function Mn(){if(ft===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=Et===null?tt.memoizedState:Et.next;if(e!==null)Et=e,ft=t;else{if(t===null)throw Error(te(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Et===null?tt.memoizedState=Et=t:Et=Et.next=t}return Et}function fo(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=Mn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((cr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,tt.lanes|=d,ur|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,tt.lanes|=s,ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $l(t){var e=Mn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function km(){}function Om(t,e){var n=tt,i=Mn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,$t=!0),i=i.queue,pd(Hm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,ho(9,Bm.bind(null,n,i,r,e),void 0,null),Mt===null)throw Error(te(349));cr&30||zm(n,e,r)}return r}function zm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,i){e.value=n,e.getSnapshot=i,Gm(e)&&Vm(t)}function Hm(t,e,n){return n(function(){Gm(e)&&Vm(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function Vm(t){var e=ui(t,1);e!==null&&kn(e,t,1,-1)}function Af(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=c_.bind(null,tt,t),[e.memoizedState,t]}function ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wm(){return Mn().memoizedState}function wa(t,e,n,i){var r=Gn();tt.flags|=t,r.memoizedState=ho(1|e,n,void 0,i===void 0?null:i)}function fl(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(ft!==null){var o=ft.memoizedState;if(s=o.destroy,i!==null&&dd(i,o.deps)){r.memoizedState=ho(e,n,s,i);return}}tt.flags|=t,r.memoizedState=ho(1|e,n,s,i)}function Cf(t,e){return wa(8390656,8,t,e)}function pd(t,e){return fl(2048,8,t,e)}function Xm(t,e){return fl(4,2,t,e)}function jm(t,e){return fl(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ym(t,e,n){return n=n!=null?n.concat([t]):null,fl(4,4,qm.bind(null,e,t),n)}function md(){}function $m(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Km(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zm(t,e,n){return cr&21?(On(n,e)||(n=nm(),tt.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function a_(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var i=ql.transition;ql.transition={};try{t(!1),e()}finally{We=n,ql.transition=i}}function Qm(){return Mn().memoizedState}function l_(t,e,n){var i=Li(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jm(t))eg(e,n);else if(n=Im(t,e,n,i),n!==null){var r=Gt();kn(n,t,i,r),tg(n,e,i)}}function c_(t,e,n){var i=Li(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jm(t))eg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Im(t,e,r,i),n!==null&&(r=Gt(),kn(n,t,i,r),tg(n,e,i))}}function Jm(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function eg(t,e){Ws=$a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ju(t,n)}}var Ka={readContext:Sn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},u_={readContext:Sn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:Cf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wa(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return wa(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=l_.bind(null,tt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Af,useDebugValue:md,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Af(!1),e=t[0];return t=a_.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=tt,r=Gn();if(Je){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Mt===null)throw Error(te(349));cr&30||zm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cf(Hm.bind(null,i,s,t),[t]),i.flags|=2048,ho(9,Bm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Mt.identifierPrefix;if(Je){var n=si,i=ri;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=o_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},d_={readContext:Sn,useCallback:$m,useContext:Sn,useEffect:pd,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:jm,useMemo:Km,useReducer:Yl,useRef:Wm,useState:function(){return Yl(fo)},useDebugValue:md,useDeferredValue:function(t){var e=Mn();return Zm(e,ft.memoizedState,t)},useTransition:function(){var t=Yl(fo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1},f_={readContext:Sn,useCallback:$m,useContext:Sn,useEffect:pd,useImperativeHandle:Ym,useInsertionEffect:Xm,useLayoutEffect:jm,useMemo:Km,useReducer:$l,useRef:Wm,useState:function(){return $l(fo)},useDebugValue:md,useDeferredValue:function(t){var e=Mn();return ft===null?e.memoizedState=t:Zm(e,ft.memoizedState,t)},useTransition:function(){var t=$l(fo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:km,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Li(t),s=oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,r),e!==null&&(kn(e,t,r,i),Sa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=Li(t),s=oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,r),e!==null&&(kn(e,t,r,i),Sa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=Li(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ri(t,r,i),e!==null&&(kn(e,t,i,n),Sa(e,t,i))}};function bf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,i)||!ro(r,s):!0}function ng(t,e,n){var i=!1,r=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=Zt(e)?ar:Ft.current,i=e.contextTypes,s=(i=i!=null)?ss(t,r):Ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=Zt(e)?ar:Ft.current,r.context=ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hl.enqueueReplaceState(r,r.state,null),qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",i=e;do n+=B0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var h_=typeof WeakMap=="function"?WeakMap:Map;function ig(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qa||(Qa=!0,Eu=i),du(t,e)},n}function rg(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(t,e),typeof i!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new h_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=C_.bind(null,t,e,n),e.then(t,t))}function Lf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Df(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Ri(n,e,1))),n.lanes|=1),t)}var p_=fi.ReactCurrentOwner,$t=!1;function Bt(t,e,n,i){e.child=t===null?Um(e,null,n,i):as(e,t.child,n,i)}function Uf(t,e,n,i,r){n=n.render;var s=e.ref;return Qr(e,r),i=fd(t,e,n,i,s,r),n=hd(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(Je&&n&&ed(e),e.flags|=1,Bt(t,e,i,r),e.child)}function If(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sg(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Di(s,i),t.ref=e.ref,t.return=e,e.child=t}function sg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ro(s,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,di(t,e,r)}return fu(t,e,n,i,r)}function og(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(jr,sn),sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(jr,sn),sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ke(jr,sn),sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ke(jr,sn),sn|=i;return Bt(t,e,r,n),e.child}function ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fu(t,e,n,i,r){var s=Zt(n)?ar:Ft.current;return s=ss(e,s),Qr(e,r),n=fd(t,e,n,i,s,r),i=hd(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(Je&&i&&ed(e),e.flags|=1,Bt(t,e,n,r),e.child)}function Nf(t,e,n,i,r){if(Zt(n)){var s=!0;Ga(e)}else s=!1;if(Qr(e,r),e.stateNode===null)Ta(t,e),ng(e,n,i),uu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Sn(c):(c=Zt(n)?ar:Ft.current,c=ss(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Rf(e,o,i,c),yi=!1;var f=e.memoizedState;o.state=f,qa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kt.current||yi?(typeof d=="function"&&(cu(e,n,d,i),l=e.memoizedState),(a=yi||bf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Nm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=Zt(n)?ar:Ft.current,l=ss(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Rf(e,o,i,l),yi=!1,f=e.memoizedState,o.state=f,qa(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||Kt.current||yi?(typeof p=="function"&&(cu(e,n,p,i),_=e.memoizedState),(c=yi||bf(e,n,c,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return hu(t,e,n,i,s,r)}function hu(t,e,n,i,r,s){ag(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&yf(e,n,!1),di(t,e,s);i=e.stateNode,p_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=as(e,t.child,null,s),e.child=as(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=i.state,r&&yf(e,n,!0),e.child}function lg(t){var e=t.stateNode;e.pendingContext?xf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xf(t,e.context,!1),ld(t,e.containerInfo)}function Ff(t,e,n,i,r){return os(),nd(r),e.flags|=256,Bt(t,e,n,i),e.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cg(t,e,n){var i=e.pendingProps,r=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(et,r&1),t===null)return au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,i,0,null),t=ir(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mu(n),e.memoizedState=pu,t):gd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return m_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Di(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Di(a,s):(s=ir(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pu,i}return s=t.child,t=s.sibling,i=Di(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gd(t,e){return e=gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,i){return i!==null&&nd(i),as(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function m_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kl(Error(te(422))),Go(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gl({mode:"visible",children:i.children},r,0,null),s=ir(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&as(e,t.child,null,o),e.child.memoizedState=mu(o),e.memoizedState=pu,s);if(!(e.mode&1))return Go(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Kl(s,i,void 0),Go(t,e,o,i)}if(a=(o&t.childLanes)!==0,$t||a){if(i=Mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ui(t,r),kn(i,t,r,-1))}return Sd(),i=Kl(Error(te(421))),Go(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=b_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,an=bi(r.nextSibling),ln=e,Je=!0,Dn=null,t!==null&&(gn[vn++]=ri,gn[vn++]=si,gn[vn++]=lr,ri=t.id,si=t.overflow,lr=e),e=gd(e,i.children),e.flags|=4096,e)}function kf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),lu(t.return,e,n)}function Zl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bt(t,e,i.children,n),i=et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kf(t,n,e);else if(t.tag===19)kf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zl(e,!0,n,null,s);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g_(t,e,n){switch(e.tag){case 3:lg(e),os();break;case 5:Fm(e);break;case 1:Zt(e.type)&&Ga(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?cg(t,e,n):(Ke(et,et.current&1),t=di(t,e,n),t!==null?t.sibling:null);Ke(et,et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(et,et.current),i)break;return null;case 22:case 23:return e.lanes=0,og(t,e,n)}return di(t,e,n)}var dg,gu,fg,hg;dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ji(jn.current);var s=null;switch(n){case"input":r=Oc(t,r),i=Oc(t,i),s=[];break;case"select":r=nt({},r,{value:void 0}),i=nt({},i,{value:void 0}),s=[];break;case"textarea":r=Hc(t,r),i=Hc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ba)}Vc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ze("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hg=function(t,e,n,i){n!==i&&(e.flags|=4)};function bs(t,e){if(!Je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function v_(t,e,n){var i=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Zt(e.type)&&Ha(),Dt(e),null;case 3:return i=e.stateNode,ls(),Qe(Kt),Qe(Ft),ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(wu(Dn),Dn=null))),gu(t,e),Dt(e),null;case 5:cd(e);var r=Ji(co.current);if(n=e.type,t!==null&&e.stateNode!=null)fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Dt(e),null}if(t=Ji(jn.current),Bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<ks.length;r++)Ze(ks[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Xd(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":qd(i,s),Ze("invalid",i)}Vc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(n){case"input":Lo(i),jd(i,s,!0);break;case"textarea":Lo(i),Yd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Wn]=e,t[ao]=i,dg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wc(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<ks.length;r++)Ze(ks[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":Xd(t,i),r=Oc(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=nt({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":qd(t,i),r=Hc(t,i),Ze("invalid",t);break;default:r=i}Vc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qs(t,l):typeof l=="number"&&Qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",t):l!=null&&Bu(t,s,l,o))}switch(n){case"input":Lo(t),jd(t,i,!1);break;case"textarea":Lo(t),Yd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ii(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Yr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Yr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)hg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ji(co.current),Ji(jn.current),Bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return Dt(e),null;case 13:if(Qe(et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Je&&an!==null&&e.mode&1&&!(e.flags&128))Lm(),os(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Wn]=e}else os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else Dn!==null&&(wu(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?ht===0&&(ht=3):Sd())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return ls(),gu(t,e),t===null&&so(e.stateNode.containerInfo),Dt(e),null;case 10:return sd(e.type._context),Dt(e),null;case 17:return Zt(e.type)&&Ha(),Dt(e),null;case 19:if(Qe(et),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bs(s,!1);else{if(ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,bs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>us&&(e.flags|=128,i=!0,bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Je)return Dt(e),null}else 2*at()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,i=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=et.current,Ke(et,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Ed(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?sn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function __(t,e){switch(td(e),e.tag){case 1:return Zt(e.type)&&Ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ls(),Qe(Kt),Qe(Ft),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(Qe(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(et),null;case 4:return ls(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Vo=!1,Nt=!1,x_=typeof WeakSet=="function"?WeakSet:Set,de=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rt(t,e,i)}else n.current=null}function vu(t,e,n){try{n()}catch(i){rt(t,e,i)}}var Of=!1;function y_(t,e){if(eu=ka,t=_m(),Ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:t,selectionRange:n},ka=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,v=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Pn(e.type,x),v);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(E){rt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=Of,Of=!1,_}function Xs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vu(e,n,s)}r=r.next}while(r!==i)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pg(t){var e=t.alternate;e!==null&&(t.alternate=null,pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[ao],delete e[ru],delete e[n_],delete e[i_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mg(t){return t.tag===5||t.tag===3||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}function yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}var Tt=null,Ln=!1;function pi(t,e,n){for(n=n.child;n!==null;)gg(t,e,n),n=n.sibling}function gg(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Nt||Xr(n,e);case 6:var i=Tt,r=Ln;Tt=null,pi(t,e,n),Tt=i,Ln=r,Tt!==null&&(Ln?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Ln?(t=Tt,n=n.stateNode,t.nodeType===8?Wl(t.parentNode,n):t.nodeType===1&&Wl(t,n),no(t)):Wl(Tt,n.stateNode));break;case 4:i=Tt,r=Ln,Tt=n.stateNode.containerInfo,Ln=!0,pi(t,e,n),Tt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vu(n,e,o),r=r.next}while(r!==i)}pi(t,e,n);break;case 1:if(!Nt&&(Xr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){rt(n,e,a)}pi(t,e,n);break;case 21:pi(t,e,n);break;case 22:n.mode&1?(Nt=(i=Nt)||n.memoizedState!==null,pi(t,e,n),Nt=i):pi(t,e,n);break;default:pi(t,e,n)}}function Bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new x_),e.forEach(function(i){var r=R_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Ln=!1;break e;case 3:Tt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Tt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Tt===null)throw Error(te(160));gg(s,o,r),Tt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vg(e,t),e=e.sibling}function vg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),Bn(t),i&4){try{Xs(3,t,t.return),pl(3,t)}catch(x){rt(t,t.return,x)}try{Xs(5,t,t.return)}catch(x){rt(t,t.return,x)}}break;case 1:Tn(e,t),Bn(t),i&512&&n!==null&&Xr(n,n.return);break;case 5:if(Tn(e,t),Bn(t),i&512&&n!==null&&Xr(n,n.return),t.flags&32){var r=t.stateNode;try{Qs(r,"")}catch(x){rt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zp(r,s),Wc(a,o);var c=Wc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Wp(r,h):d==="dangerouslySetInnerHTML"?Gp(r,h):d==="children"?Qs(r,h):Bu(r,d,h,c)}switch(a){case"input":zc(r,s);break;case"textarea":Bp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Yr(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Yr(r,!!s.multiple,s.defaultValue,!0):Yr(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(x){rt(t,t.return,x)}}break;case 6:if(Tn(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){rt(t,t.return,x)}}break;case 3:if(Tn(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(x){rt(t,t.return,x)}break;case 4:Tn(e,t),Bn(t);break;case 13:Tn(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xd=at())),i&4&&Bf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(c=Nt)||d,Tn(e,t),Nt=c):Tn(e,t),Bn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(de=t,d=t.child;d!==null;){for(h=de=d;de!==null;){switch(f=de,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xs(4,f,f.return);break;case 1:Xr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){rt(i,n,x)}}break;case 5:Xr(f,f.return);break;case 22:if(f.memoizedState!==null){Gf(h);continue}}p!==null?(p.return=f,de=p):Gf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vp("display",o))}catch(x){rt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){rt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(e,t),Bn(t),i&4&&Bf(t);break;case 21:break;default:Tn(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mg(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qs(r,""),i.flags&=-33);var s=zf(t);yu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zf(t);xu(t,a,o);break;default:throw Error(te(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function E_(t,e,n){de=t,_g(t)}function _g(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Vo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Vo;var c=Nt;if(Vo=o,(Nt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Vf(r):l!==null?(l.return=o,de=l):Vf(r);for(;s!==null;)de=s,_g(s),s=s.sibling;de=r,Vo=a,Nt=c}Hf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Hf(t)}}function Hf(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Nt||e.flags&512&&_u(e)}catch(f){rt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Gf(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Vf(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(l){rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){rt(e,r,l)}}var s=e.return;try{_u(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{_u(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var S_=Math.ceil,Za=fi.ReactCurrentDispatcher,vd=fi.ReactCurrentOwner,En=fi.ReactCurrentBatchConfig,Be=0,Mt=null,ut=null,Ct=0,sn=0,jr=Oi(0),ht=0,po=null,ur=0,ml=0,_d=0,js=null,qt=null,xd=0,us=1/0,ti=null,Qa=!1,Eu=null,Pi=null,Wo=!1,wi=null,Ja=0,qs=0,Su=null,Aa=-1,Ca=0;function Gt(){return Be&6?at():Aa!==-1?Aa:Aa=at()}function Li(t){return t.mode&1?Be&2&&Ct!==0?Ct&-Ct:s_.transition!==null?(Ca===0&&(Ca=nm()),Ca):(t=We,t!==0||(t=window.event,t=t===void 0?16:cm(t.type)),t):1}function kn(t,e,n,i){if(50<qs)throw qs=0,Su=null,Error(te(185));_o(t,n,i),(!(Be&2)||t!==Mt)&&(t===Mt&&(!(Be&2)&&(ml|=n),ht===4&&Si(t,Ct)),Qt(t,i),n===1&&Be===0&&!(e.mode&1)&&(us=at()+500,dl&&zi()))}function Qt(t,e){var n=t.callbackNode;sv(t,e);var i=Fa(t,t===Mt?Ct:0);if(i===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?r_(Wf.bind(null,t)):bm(Wf.bind(null,t)),e_(function(){!(Be&6)&&zi()}),n=null;else{switch(im(i)){case 1:n=Xu;break;case 4:n=em;break;case 16:n=Na;break;case 536870912:n=tm;break;default:n=Na}n=Ag(n,xg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xg(t,e){if(Aa=-1,Ca=0,Be&6)throw Error(te(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var i=Fa(t,t===Mt?Ct:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=el(t,i);else{e=i;var r=Be;Be|=2;var s=Eg();(Mt!==t||Ct!==e)&&(ti=null,us=at()+500,nr(t,e));do try{T_();break}catch(a){yg(t,a)}while(!0);rd(),Za.current=s,Be=r,ut!==null?e=0:(Mt=null,Ct=0,e=ht)}if(e!==0){if(e===2&&(r=$c(t),r!==0&&(i=r,e=Mu(t,r))),e===1)throw n=po,nr(t,0),Si(t,i),Qt(t,at()),n;if(e===6)Si(t,i);else{if(r=t.current.alternate,!(i&30)&&!M_(r)&&(e=el(t,i),e===2&&(s=$c(t),s!==0&&(i=s,e=Mu(t,s))),e===1))throw n=po,nr(t,0),Si(t,i),Qt(t,at()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:qi(t,qt,ti);break;case 3:if(Si(t,i),(i&130023424)===i&&(e=xd+500-at(),10<e)){if(Fa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=iu(qi.bind(null,t,qt,ti),e);break}qi(t,qt,ti);break;case 4:if(Si(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Fn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=at()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*S_(i/1960))-i,10<i){t.timeoutHandle=iu(qi.bind(null,t,qt,ti),i);break}qi(t,qt,ti);break;case 5:qi(t,qt,ti);break;default:throw Error(te(329))}}}return Qt(t,at()),t.callbackNode===n?xg.bind(null,t):null}function Mu(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(nr(t,e).flags|=256),t=el(t,e),t!==2&&(e=qt,qt=n,e!==null&&wu(e)),t}function wu(t){qt===null?qt=t:qt.push.apply(qt,t)}function M_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~_d,e&=~ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Wf(t){if(Be&6)throw Error(te(327));Jr();var e=Fa(t,0);if(!(e&1))return Qt(t,at()),null;var n=el(t,e);if(t.tag!==0&&n===2){var i=$c(t);i!==0&&(e=i,n=Mu(t,i))}if(n===1)throw n=po,nr(t,0),Si(t,e),Qt(t,at()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qi(t,qt,ti),Qt(t,at()),null}function yd(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(us=at()+500,dl&&zi())}}function dr(t){wi!==null&&wi.tag===0&&!(Be&6)&&Jr();var e=Be;Be|=1;var n=En.transition,i=We;try{if(En.transition=null,We=1,t)return t()}finally{We=i,En.transition=n,Be=e,!(Be&6)&&zi()}}function Ed(){sn=jr.current,Qe(jr)}function nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jv(n)),ut!==null)for(n=ut.return;n!==null;){var i=n;switch(td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ha();break;case 3:ls(),Qe(Kt),Qe(Ft),ud();break;case 5:cd(i);break;case 4:ls();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:sd(i.type._context);break;case 22:case 23:Ed()}n=n.return}if(Mt=t,ut=t=Di(t.current,null),Ct=sn=e,ht=0,po=null,_d=ml=ur=0,qt=js=null,Qi!==null){for(e=0;e<Qi.length;e++)if(n=Qi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qi=null}return t}function yg(t,e){do{var n=ut;try{if(rd(),Ma.current=Ka,$a){for(var i=tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$a=!1}if(cr=0,Et=ft=tt=null,Ws=!1,uo=0,vd.current=null,n===null||n.return===null){ht=1,po=e,ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Lf(o);if(p!==null){p.flags&=-257,Df(p,o,a,s,e),p.mode&1&&Pf(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Pf(s,c,e),Sd();break e}l=Error(te(426))}}else if(Je&&a.mode&1){var v=Lf(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Df(v,o,a,s,e),nd(cs(l,a));break e}}s=l=cs(l,a),ht!==4&&(ht=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ig(s,l,e);wf(s,u);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pi===null||!Pi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=rg(s,a,e);wf(s,E);break e}}s=s.return}while(s!==null)}Mg(n)}catch(w){e=w,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(!0)}function Eg(){var t=Za.current;return Za.current=Ka,t===null?Ka:t}function Sd(){(ht===0||ht===3||ht===2)&&(ht=4),Mt===null||!(ur&268435455)&&!(ml&268435455)||Si(Mt,Ct)}function el(t,e){var n=Be;Be|=2;var i=Eg();(Mt!==t||Ct!==e)&&(ti=null,nr(t,e));do try{w_();break}catch(r){yg(t,r)}while(!0);if(rd(),Be=n,Za.current=i,ut!==null)throw Error(te(261));return Mt=null,Ct=0,ht}function w_(){for(;ut!==null;)Sg(ut)}function T_(){for(;ut!==null&&!K0();)Sg(ut)}function Sg(t){var e=Tg(t.alternate,t,sn);t.memoizedProps=t.pendingProps,e===null?Mg(t):ut=e,vd.current=null}function Mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=__(n,e),n!==null){n.flags&=32767,ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ht=6,ut=null;return}}else if(n=v_(n,e,sn),n!==null){ut=n;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);ht===0&&(ht=5)}function qi(t,e,n){var i=We,r=En.transition;try{En.transition=null,We=1,A_(t,e,n,i)}finally{En.transition=r,We=i}return null}function A_(t,e,n,i){do Jr();while(wi!==null);if(Be&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ov(t,s),t===Mt&&(ut=Mt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,Ag(Na,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var o=We;We=1;var a=Be;Be|=4,vd.current=null,y_(t,n),vg(n,t),jv(tu),ka=!!eu,tu=eu=null,t.current=n,E_(n),Z0(),Be=a,We=o,En.transition=s}else t.current=n;if(Wo&&(Wo=!1,wi=t,Ja=r),s=t.pendingLanes,s===0&&(Pi=null),ev(n.stateNode),Qt(t,at()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,t=Eu,Eu=null,t;return Ja&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===Su?qs++:(qs=0,Su=t):qs=0,zi(),null}function Jr(){if(wi!==null){var t=im(Ja),e=En.transition,n=We;try{if(En.transition=null,We=16>t?16:t,wi===null)var i=!1;else{if(t=wi,wi=null,Ja=0,Be&6)throw Error(te(331));var r=Be;for(Be|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(de=c;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:Xs(8,d,s)}var h=d.child;if(h!==null)h.return=d,de=h;else for(;de!==null;){d=de;var f=d.sibling,p=d.return;if(pg(d),d===c){de=null;break}if(f!==null){f.return=p,de=f;break}de=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var v=x.sibling;x.sibling=null,x=v}while(x!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xs(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,de=u;break e}de=s.return}}var m=t.current;for(de=m;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=m;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pl(9,a)}}catch(w){rt(a,a.return,w)}if(a===o){de=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,de=E;break e}de=a.return}}if(Be=r,zi(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(ol,t)}catch{}i=!0}return i}finally{We=n,En.transition=e}}return!1}function Xf(t,e,n){e=cs(n,e),e=ig(t,e,1),t=Ri(t,e,1),e=Gt(),t!==null&&(_o(t,1,e),Qt(t,e))}function rt(t,e,n){if(t.tag===3)Xf(t,t,n);else for(;e!==null;){if(e.tag===3){Xf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pi===null||!Pi.has(i))){t=cs(n,t),t=rg(e,t,1),e=Ri(e,t,1),t=Gt(),e!==null&&(_o(e,1,t),Qt(e,t));break}}e=e.return}}function C_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Mt===t&&(Ct&n)===n&&(ht===4||ht===3&&(Ct&130023424)===Ct&&500>at()-xd?nr(t,0):_d|=n),Qt(t,e)}function wg(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Gt();t=ui(t,e),t!==null&&(_o(t,e,n),Qt(t,n))}function b_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wg(t,n)}function R_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),wg(t,n)}var Tg;Tg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,g_(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Je&&e.flags&1048576&&Rm(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ta(t,e),t=e.pendingProps;var r=ss(e,Ft.current);Qr(e,n),r=fd(null,e,i,t,r,n);var s=hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,Ga(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=hl,e.stateNode=r,r._reactInternals=e,uu(e,i,t,n),e=hu(null,e,i,!0,s,n)):(e.tag=0,Je&&s&&ed(e),Bt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ta(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=L_(i),t=Pn(i,t),r){case 0:e=fu(null,e,i,t,n);break e;case 1:e=Nf(null,e,i,t,n);break e;case 11:e=Uf(null,e,i,t,n);break e;case 14:e=If(null,e,i,Pn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Nf(t,e,i,r,n);case 3:e:{if(lg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nm(t,e),qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=cs(Error(te(423)),e),e=Ff(t,e,i,n,r);break e}else if(i!==r){r=cs(Error(te(424)),e),e=Ff(t,e,i,n,r);break e}else for(an=bi(e.stateNode.containerInfo.firstChild),ln=e,Je=!0,Dn=null,n=Um(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(os(),i===r){e=di(t,e,n);break e}Bt(t,e,i,n)}e=e.child}return e;case 5:return Fm(e),t===null&&au(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,nu(i,r)?o=null:s!==null&&nu(i,s)&&(e.flags|=32),ag(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&au(e),null;case 13:return cg(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=as(e,null,i,n):Bt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Uf(t,e,i,r,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(Xa,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!Kt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qr(e,n),r=Sn(r),i=i(r),e.flags|=1,Bt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),If(t,e,i,r,n);case 15:return sg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Ta(t,e),e.tag=1,Zt(i)?(t=!0,Ga(e)):t=!1,Qr(e,n),ng(e,i,r),uu(e,i,r,n),hu(null,e,i,!0,t,n);case 19:return ug(t,e,n);case 22:return og(t,e,n)}throw Error(te(156,e.tag))};function Ag(t,e){return Jp(t,e)}function P_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new P_(t,e,n,i)}function Md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L_(t){if(typeof t=="function")return Md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gu)return 11;if(t===Vu)return 14}return 2}function Di(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fr:return ir(n.children,r,s,e);case Hu:o=8,r|=8;break;case Ic:return t=xn(12,n,e,r|2),t.elementType=Ic,t.lanes=s,t;case Nc:return t=xn(13,n,e,r),t.elementType=Nc,t.lanes=s,t;case Fc:return t=xn(19,n,e,r),t.elementType=Fc,t.lanes=s,t;case Fp:return gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ip:o=10;break e;case Np:o=9;break e;case Gu:o=11;break e;case Vu:o=14;break e;case xi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ir(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function gl(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Fp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ql(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Jl(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function D_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wd(t,e,n,i,r,s,o,a,l){return t=new D_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function U_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cg(t){if(!t)return Ni;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Zt(n))return Cm(t,n,e)}return e}function bg(t,e,n,i,r,s,o,a,l){return t=wd(n,i,!0,t,r,s,o,a,l),t.context=Cg(null),n=t.current,i=Gt(),r=Li(n),s=oi(i,r),s.callback=e??null,Ri(n,s,r),t.current.lanes=r,_o(t,r,i),Qt(t,i),t}function vl(t,e,n,i){var r=e.current,s=Gt(),o=Li(r);return n=Cg(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ri(r,e,o),t!==null&&(kn(t,r,o,s),Sa(t,r,o)),o}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Td(t,e){jf(t,e),(t=t.alternate)&&jf(t,e)}function I_(){return null}var Rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}_l.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));vl(t,e,null,null)};_l.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;dr(function(){vl(null,t,null,null)}),e[ci]=null}};function _l(t){this._internalRoot=t}_l.prototype.unstable_scheduleHydration=function(t){if(t){var e=om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ei.length&&e!==0&&e<Ei[n].priority;n++);Ei.splice(n,0,t),n===0&&lm(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qf(){}function N_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tl(o);s.call(c)}}var o=bg(e,i,t,0,null,!1,!1,"",qf);return t._reactRootContainer=o,t[ci]=o.current,so(t.nodeType===8?t.parentNode:t),dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tl(l);a.call(c)}}var l=wd(t,0,!1,null,null,!1,!1,"",qf);return t._reactRootContainer=l,t[ci]=l.current,so(t.nodeType===8?t.parentNode:t),dr(function(){vl(e,l,n,i)}),l}function yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}vl(e,o,t,r)}else o=N_(n,e,t,r,i);return tl(o)}rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(ju(e,n|1),Qt(e,at()),!(Be&6)&&(us=at()+500,zi()))}break;case 13:dr(function(){var i=ui(t,1);if(i!==null){var r=Gt();kn(i,t,1,r)}}),Td(t,1)}};qu=function(t){if(t.tag===13){var e=ui(t,134217728);if(e!==null){var n=Gt();kn(e,t,134217728,n)}Td(t,134217728)}};sm=function(t){if(t.tag===13){var e=Li(t),n=ui(t,e);if(n!==null){var i=Gt();kn(n,t,e,i)}Td(t,e)}};om=function(){return We};am=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};jc=function(t,e,n){switch(e){case"input":if(zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ul(i);if(!r)throw Error(te(90));Op(i),zc(i,r)}}}break;case"textarea":Bp(t,n);break;case"select":e=n.value,e!=null&&Yr(t,!!n.multiple,e,!1)}};qp=yd;Yp=dr;var F_={usingClientEntryPoint:!1,Events:[yo,Br,ul,Xp,jp,yd]},Rs={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zp(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||I_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{ol=Xo.inject(k_),Xn=Xo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(te(200));return U_(t,e,null,n)};fn.createRoot=function(t,e){if(!Cd(t))throw Error(te(299));var n=!1,i="",r=Rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wd(t,1,!1,null,null,n,!1,i,r),t[ci]=e.current,so(t.nodeType===8?t.parentNode:t),new Ad(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Zp(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return dr(t)};fn.hydrate=function(t,e,n){if(!xl(e))throw Error(te(200));return yl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!Cd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Rg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bg(e,null,t,1,n??null,r,!1,s,o),t[ci]=e.current,so(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _l(e)};fn.render=function(t,e,n){if(!xl(e))throw Error(te(200));return yl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!xl(t))throw Error(te(40));return t._reactRootContainer?(dr(function(){yl(null,null,t,!1,function(){t._reactRootContainer=null,t[ci]=null})}),!0):!1};fn.unstable_batchedUpdates=yd;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return yl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426";function Pg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pg)}catch(t){console.error(t)}}Pg(),Pp.exports=fn;var O_=Pp.exports,Yf=O_;Dc.createRoot=Yf.createRoot,Dc.hydrateRoot=Yf.hydrateRoot;var z_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const B_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H_=(t,e)=>{const n=ze.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},c)=>ze.createElement("svg",{ref:c,...z_,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:`lucide lucide-${B_(t)}`,...l},[...e.map(([d,h])=>ze.createElement(d,h)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n};var Fe=H_;const G_=Fe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]),V_=Fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),W_=Fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Lg=Fe("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),X_=Fe("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]),$f=Fe("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),j_=Fe("Bot",[["rect",{width:"18",height:"10",x:"3",y:"11",rx:"2",key:"1ofdy3"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"M12 7v4",key:"xawao1"}],["line",{x1:"8",x2:"8",y1:"16",y2:"16",key:"h6x27f"}],["line",{x1:"16",x2:"16",y1:"16",y2:"16",key:"5lty7f"}]]),Dg=Fe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),q_=Fe("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]),Y_=Fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),$_=Fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Ug=Fe("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]),K_=Fe("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),Ig=Fe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]),Z_=Fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Q_=Fe("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]),J_=Fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),Ra=Fe("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]),Kf=Fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Zf=Fe("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),ex=Fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Ng=Fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),tx=Fe("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]),Fg=Fe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Qf=Fe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Jf=Fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),nx=Fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),kg=Fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]),ix=Fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),rx=Fe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",key:"3xmgem"}]]),bd=Fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),sx=Fe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),Og=Fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),zg=Fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ox=Fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="152",ax=0,eh=1,lx=2,Bg=1,cx=2,ei=3,Fi=0,Jt=1,ii=2,Ui=0,es=1,th=2,nh=3,ih=4,ux=5,Ir=100,dx=101,fx=102,rh=103,sh=104,hx=200,px=201,mx=202,gx=203,Hg=204,Gg=205,vx=206,_x=207,xx=208,yx=209,Ex=210,Sx=0,Mx=1,wx=2,Tu=3,Tx=4,Ax=5,Cx=6,bx=7,Vg=0,Rx=1,Px=2,ai=0,Lx=1,Dx=2,Ux=3,Ix=4,Nx=5,Wg=300,ds=301,fs=302,Au=303,Cu=304,El=306,bu=1e3,In=1001,Ru=1002,Ht=1003,oh=1004,ec=1005,_n=1006,Fx=1007,mo=1008,fr=1009,kx=1010,Ox=1011,Xg=1012,zx=1013,er=1014,tr=1015,go=1016,Bx=1017,Hx=1018,ts=1020,Gx=1021,Nn=1023,Vx=1024,Wx=1025,rr=1026,hs=1027,Xx=1028,jx=1029,qx=1030,Yx=1031,$x=1033,tc=33776,nc=33777,ic=33778,rc=33779,ah=35840,lh=35841,ch=35842,uh=35843,Kx=36196,dh=37492,fh=37496,hh=37808,ph=37809,mh=37810,gh=37811,vh=37812,_h=37813,xh=37814,yh=37815,Eh=37816,Sh=37817,Mh=37818,wh=37819,Th=37820,Ah=37821,sc=36492,Zx=36283,Ch=36284,bh=36285,Rh=36286,jg=3e3,sr=3001,Qx=3200,Jx=3201,ey=0,ty=1,or="",Ce="srgb",qn="srgb-linear",qg="display-p3",oc=7680,ny=519,Ph=35044,Lh="300 es",Pu=1035;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,Lu=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function iy(t,e){return(t%e+e)%e}function lc(t,e,n){return(1-n)*t+n*e}function Dh(t){return(t&t-1)===0&&t!==0}function ry(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function jo(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],x=r[0],v=r[3],u=r[6],m=r[1],g=r[4],E=r[7],w=r[2],A=r[5],R=r[8];return s[0]=o*x+a*m+l*w,s[3]=o*v+a*g+l*A,s[6]=o*u+a*E+l*R,s[1]=c*x+d*m+h*w,s[4]=c*v+d*g+h*A,s[7]=c*u+d*E+h*R,s[2]=f*x+p*m+_*w,s[5]=f*v+p*g+_*A,s[8]=f*u+p*E+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,p=c*s-o*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cc.makeScale(e,n)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(cc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Ne;function Yg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Uh={};function Ys(t){t in Uh||(Uh[t]=!0,console.warn(t))}function ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const sy=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),oy=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ay(t){return t.convertSRGBToLinear().applyMatrix3(oy)}function ly(t){return t.applyMatrix3(sy).convertLinearToSRGB()}const cy={[qn]:t=>t,[Ce]:t=>t.convertSRGBToLinear(),[qg]:ay},uy={[qn]:t=>t,[Ce]:t=>t.convertLinearToSRGB(),[qg]:ly},An={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return qn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cy[e],r=uy[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let _r;class $g{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=nl("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ns(n[i]/255)*255):n[i]=ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kg{constructor(e=null){this.isSource=!0,this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dc(r[o].image)):s.push(dc(r[o]))}else s=dc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$g.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dy=0;class cn extends _s{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=In,r=In,s=_n,o=mo,a=Nn,l=fr,c=cn.DEFAULT_ANISOTROPY,d=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=So(),this.name="",this.source=new Kg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===sr?Ce:or),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bu:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bu:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ce?sr:jg}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Ce:or}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Wg;cn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],v=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+v)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(p+1)/2,w=(u+1)/2,A=(d+f)/4,R=(h+x)/4,L=(_+v)/4;return g>E&&g>w?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=R/i):E>w?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=L/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=L/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-_)*(v-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(v-_)/m,this.y=(h-x)/m,this.z=(f-d)/m,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hr extends _s{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Ce:or),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Kg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zg extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fy extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==p||d!==_){let v=1-a;const u=l*f+c*p+d*_+h*x,m=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const w=Math.sqrt(g),A=Math.atan2(w,u*m);v=Math.sin(v*A)/w,a=Math.sin(a*A)/w}const E=a*m;if(l=l*v+f*E,c=c*v+p*E,d=d*v+_*E,h=h*v+x*E,v===1-a){const w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-a*p,e[n+2]=c*_+d*p+a*f-l*h,e[n+3]=d*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ih.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ih.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,d=l*i+a*n-s*r,h=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=c*l+f*-s+d*-a-h*-o,this.y=d*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new N,Ih=new Mo;class wo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)$n.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint($n)}else r.boundingBox===null&&r.computeBoundingBox(),xr.copy(r.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),qo.subVectors(this.max,Ps),yr.subVectors(e.a,Ps),Er.subVectors(e.b,Ps),Sr.subVectors(e.c,Ps),mi.subVectors(Er,yr),gi.subVectors(Sr,Er),Vi.subVectors(yr,Sr);let n=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Vi.z,Vi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Vi.z,0,-Vi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Vi.y,Vi.x,0];return!hc(n,yr,Er,Sr,qo)||(n=[1,0,0,0,1,0,0,0,1],!hc(n,yr,Er,Sr,qo))?!1:(Yo.crossVectors(mi,gi),n=[Yo.x,Yo.y,Yo.z],hc(n,yr,Er,Sr,qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,xr=new wo,yr=new N,Er=new N,Sr=new N,mi=new N,gi=new N,Vi=new N,Ps=new N,qo=new N,Yo=new N,Wi=new N;function hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wi.fromArray(t,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=n.dot(Wi),d=i.dot(Wi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const hy=new wo,Ls=new N,pc=new N;class To{constructor(e=new N,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const n=Ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(pc)),this.expandByPoint(Ls.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new N,mc=new N,$o=new N,vi=new N,gc=new N,Ko=new N,vc=new N;class Pd{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,n),Kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mc.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(mc);const s=e.distanceTo(n)*.5,o=-this.direction.dot($o),a=vi.dot(this.direction),l=-vi.dot($o),c=vi.lengthSq(),d=Math.abs(1-o*o);let h,f,p,_;if(d>0)if(h=o*l-a,f=o*a-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mc).addScaledVector($o,f),p}intersectSphere(e,n){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,n,i,r,s){gc.subVectors(n,e),Ko.subVectors(i,e),vc.crossVectors(gc,Ko);let o=this.direction.dot(vc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(Ko.crossVectors(vi,Ko));if(l<0)return null;const c=a*this.direction.dot(gc.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(vc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,d,h,f,p,_,x,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=x,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,p=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,x=c*h;n[0]=f+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*d,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,p=o*h,_=a*d,x=a*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=o*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,n,i){const r=this.elements;return nn.subVectors(e,n),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),_i.crossVectors(i,nn),_i.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),_i.crossVectors(i,nn)),_i.normalize(),Zo.crossVectors(nn,_i),r[0]=_i.x,r[4]=Zo.x,r[8]=nn.x,r[1]=_i.y,r[5]=Zo.y,r[9]=nn.y,r[2]=_i.z,r[6]=Zo.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],x=i[6],v=i[10],u=i[14],m=i[3],g=i[7],E=i[11],w=i[15],A=r[0],R=r[4],L=r[8],S=r[12],M=r[1],H=r[5],z=r[9],k=r[13],W=r[2],P=r[6],Z=r[10],K=r[14],I=r[3],G=r[7],B=r[11],le=r[15];return s[0]=o*A+a*M+l*W+c*I,s[4]=o*R+a*H+l*P+c*G,s[8]=o*L+a*z+l*Z+c*B,s[12]=o*S+a*k+l*K+c*le,s[1]=d*A+h*M+f*W+p*I,s[5]=d*R+h*H+f*P+p*G,s[9]=d*L+h*z+f*Z+p*B,s[13]=d*S+h*k+f*K+p*le,s[2]=_*A+x*M+v*W+u*I,s[6]=_*R+x*H+v*P+u*G,s[10]=_*L+x*z+v*Z+u*B,s[14]=_*S+x*k+v*K+u*le,s[3]=m*A+g*M+E*W+w*I,s[7]=m*R+g*H+E*P+w*G,s[11]=m*L+g*z+E*Z+w*B,s[15]=m*S+g*k+E*K+w*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],x=e[7],v=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*d-s*l*d)+v*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],x=e[13],v=e[14],u=e[15],m=h*v*c-x*f*c+x*l*p-a*v*p-h*l*u+a*f*u,g=_*f*c-d*v*c-_*l*p+o*v*p+d*l*u-o*f*u,E=d*x*c-_*h*c+_*a*p-o*x*p-d*a*u+o*h*u,w=_*h*l-d*x*l-_*a*f+o*x*f+d*a*v-o*h*v,A=n*m+i*g+r*E+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(x*f*s-h*v*s-x*r*p+i*v*p+h*r*u-i*f*u)*R,e[2]=(a*v*s-x*l*s+x*r*c-i*v*c-a*r*u+i*l*u)*R,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*R,e[4]=g*R,e[5]=(d*v*s-_*f*s+_*r*p-n*v*p-d*r*u+n*f*u)*R,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*u-n*l*u)*R,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*p+n*l*p)*R,e[8]=E*R,e[9]=(_*h*s-d*x*s-_*i*p+n*x*p+d*i*u-n*h*u)*R,e[10]=(o*x*s-_*a*s+_*i*c-n*x*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*p-n*a*p)*R,e[12]=w*R,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*v+n*h*v)*R,e[14]=(_*a*r-o*x*r-_*i*l+n*x*l+o*i*v-n*a*v)*R,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,p=s*d,_=s*h,x=o*d,v=o*h,u=a*h,m=l*c,g=l*d,E=l*h,w=i.x,A=i.y,R=i.z;return r[0]=(1-(x+u))*w,r[1]=(p+E)*w,r[2]=(_-g)*w,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(f+u))*A,r[6]=(v+m)*A,r[7]=0,r[8]=(_+g)*R,r[9]=(v-m)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,d=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),d=1/(o-s),h=(n+e)*l,f=(i+r)*c,p=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new N,Cn=new pt,py=new N(0,0,0),my=new N(1,1,1),_i=new N,Zo=new N,nn=new N,Nh=new pt,Fh=new Mo;class Sl{constructor(e=0,n=0,i=0,r=Sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sl.DEFAULT_ORDER="XYZ";class Qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gy=0;const kh=new N,wr=new Mo,Zn=new pt,Qo=new N,Ds=new N,vy=new N,_y=new Mo,Oh=new N(1,0,0),zh=new N(0,1,0),Bh=new N(0,0,1),xy={type:"added"},Hh={type:"removed"};class Vt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new N,n=new Sl,i=new Mo,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ne}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(zh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,n){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(zh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ds,Qo,this.up):Zn.lookAt(Qo,Ds,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Zn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Hh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new N(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new N,Qn=new N,_c=new N,Jn=new N,Tr=new N,Ar=new N,Gh=new N,xc=new N,yc=new N,Ec=new N;let Jo=!1;class Un{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Qn.subVectors(i,n),_c.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Qn),l=bn.dot(_c),c=Qn.dot(Qn),d=Qn.dot(_c),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn),l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Qn.subVectors(e,n),bn.cross(Qn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),bn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Jo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jo=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Tr.subVectors(r,i),Ar.subVectors(s,i),xc.subVectors(e,i);const l=Tr.dot(xc),c=Ar.dot(xc);if(l<=0&&c<=0)return n.copy(i);yc.subVectors(e,r);const d=Tr.dot(yc),h=Ar.dot(yc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Tr,o);Ec.subVectors(e,s);const p=Tr.dot(Ec),_=Ar.dot(Ec);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ar,a);const v=d*_-p*h;if(v<=0&&h-d>=0&&p-_>=0)return Gh.subVectors(s,r),a=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(Gh,a);const u=1/(v+x+f);return o=x*u,a=f*u,n.copy(i).addScaledVector(Tr,o).addScaledVector(Ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let yy=0;class xs extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=So(),this.name="",this.type="Material",this.blending=es,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hg,this.blendDst=Gg,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Tu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ny,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ce){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,An.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=An.workingColorSpace){return this.r=e,this.g=n,this.b=i,An.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=An.workingColorSpace){if(e=iy(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Sc(o,s,e+1/3),this.g=Sc(o,s,e),this.b=Sc(o,s,e-1/3)}return An.toWorkingColorSpace(this,r),this}setStyle(e,n=Ce){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ce){const i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=uc(e.r),this.g=uc(e.g),this.b=uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ce){return An.fromWorkingColorSpace(It.copy(this),e),Math.round(Yt(It.r*255,0,255))*65536+Math.round(Yt(It.g*255,0,255))*256+Math.round(Yt(It.b*255,0,255))}getHexString(e=Ce){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=An.workingColorSpace){An.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=An.workingColorSpace){return An.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ce){An.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Ce?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Rn),Rn.h+=e,Rn.s+=n,Rn.l+=i,this.setHSL(Rn.h,Rn.s,Rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Rn),e.getHSL(ea);const i=lc(Rn.h,ea.h,n),r=lc(Rn.s,ea.s,n),s=lc(Rn.l,ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new He;He.NAMES=Jg;class is extends xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new N,ta=new qe;class un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ph,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ta.fromBufferAttribute(this,n),ta.applyMatrix3(e),this.setXY(n,ta.x,ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class e0 extends un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class t0 extends un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class bt extends un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ey=0;const mn=new pt,Mc=new Vt,Cr=new N,rn=new wo,Us=new wo,yt=new N;class St extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?t0:e0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(rn.min,Us.min),rn.expandByPoint(yt),yt.addVectors(rn.max,Us.max),rn.expandByPoint(yt)):(rn.expandByPoint(Us.min),rn.expandByPoint(Us.max))}rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)yt.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),yt.add(Cr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let M=0;M<a;M++)c[M]=new N,d[M]=new N;const h=new N,f=new N,p=new N,_=new qe,x=new qe,v=new qe,u=new N,m=new N;function g(M,H,z){h.fromArray(r,M*3),f.fromArray(r,H*3),p.fromArray(r,z*3),_.fromArray(o,M*2),x.fromArray(o,H*2),v.fromArray(o,z*2),f.sub(h),p.sub(h),x.sub(_),v.sub(_);const k=1/(x.x*v.y-v.x*x.y);isFinite(k)&&(u.copy(f).multiplyScalar(v.y).addScaledVector(p,-x.y).multiplyScalar(k),m.copy(p).multiplyScalar(x.x).addScaledVector(f,-v.x).multiplyScalar(k),c[M].add(u),c[H].add(u),c[z].add(u),d[M].add(m),d[H].add(m),d[z].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let M=0,H=E.length;M<H;++M){const z=E[M],k=z.start,W=z.count;for(let P=k,Z=k+W;P<Z;P+=3)g(i[P+0],i[P+1],i[P+2])}const w=new N,A=new N,R=new N,L=new N;function S(M){R.fromArray(s,M*3),L.copy(R);const H=c[M];w.copy(H),w.sub(R.multiplyScalar(R.dot(H))).normalize(),A.crossVectors(L,H);const k=A.dot(d[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=k}for(let M=0,H=E.length;M<H;++M){const z=E[M],k=z.start,W=z.count;for(let P=k,Z=k+W;P<Z;P+=3)S(i[P+0]),S(i[P+1]),S(i[P+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,h=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),x=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,v),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let x=0,v=l.length;x<v;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new un(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new St,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new pt,Hn=new Pd,na=new To,Wh=new N,br=new N,Rr=new N,Pr=new N,wc=new N,ia=new N,ra=new qe,sa=new qe,oa=new qe,Xh=new N,jh=new N,qh=new N,aa=new N,la=new N;class yn extends Vt{constructor(e=new St,n=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(wc.fromBufferAttribute(h,e),o?ia.addScaledVector(wc,d):ia.addScaledVector(wc.sub(n),d))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(na.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(na,Wh)===null||Hn.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Vh.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){const x=h[p],v=s[x.materialIndex],u=Math.max(x.start,f.start),m=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let g=u,E=m;g<E;g+=3){const w=o.getX(g),A=o.getX(g+1),R=o.getX(g+2);i=ca(this,v,e,Hn,l,c,d,w,A,R),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let x=p,v=_;x<v;x+=3){const u=o.getX(x),m=o.getX(x+1),g=o.getX(x+2);i=ca(this,s,e,Hn,l,c,d,u,m,g),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,_=h.length;p<_;p++){const x=h[p],v=s[x.materialIndex],u=Math.max(x.start,f.start),m=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let g=u,E=m;g<E;g+=3){const w=g,A=g+1,R=g+2;i=ca(this,v,e,Hn,l,c,d,w,A,R),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let x=p,v=_;x<v;x+=3){const u=x,m=x+1,g=x+2;i=ca(this,s,e,Hn,l,c,d,u,m,g),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}}}function Sy(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;la.copy(a),la.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(la);return c<n.near||c>n.far?null:{distance:c,point:la.clone(),object:t}}function ca(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,br),t.getVertexPosition(l,Rr),t.getVertexPosition(c,Pr);const d=Sy(t,e,n,i,br,Rr,Pr,aa);if(d){r&&(ra.fromBufferAttribute(r,a),sa.fromBufferAttribute(r,l),oa.fromBufferAttribute(r,c),d.uv=Un.getInterpolation(aa,br,Rr,Pr,ra,sa,oa,new qe)),s&&(ra.fromBufferAttribute(s,a),sa.fromBufferAttribute(s,l),oa.fromBufferAttribute(s,c),d.uv1=Un.getInterpolation(aa,br,Rr,Pr,ra,sa,oa,new qe),d.uv2=d.uv1),o&&(Xh.fromBufferAttribute(o,a),jh.fromBufferAttribute(o,l),qh.fromBufferAttribute(o,c),d.normal=Un.getInterpolation(aa,br,Rr,Pr,Xh,jh,qh,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Un.getNormal(br,Rr,Pr,h.normal),d.face=h}return d}class Ao extends St{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(h,2));function _(x,v,u,m,g,E,w,A,R,L,S){const M=E/R,H=w/L,z=E/2,k=w/2,W=A/2,P=R+1,Z=L+1;let K=0,I=0;const G=new N;for(let B=0;B<Z;B++){const le=B*H-k;for(let J=0;J<P;J++){const V=J*M-z;G[x]=V*m,G[v]=le*g,G[u]=W,c.push(G.x,G.y,G.z),G[x]=0,G[v]=0,G[u]=A>0?1:-1,d.push(G.x,G.y,G.z),h.push(J/R),h.push(1-B/L),K+=1}}for(let B=0;B<L;B++)for(let le=0;le<R;le++){const J=f+le+P*B,V=f+le+P*(B+1),Q=f+(le+1)+P*(B+1),re=f+(le+1)+P*B;l.push(J,V,re),l.push(V,Q,re),I+=6}a.addGroup(p,I,S),p+=I,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=ps(t[n]);for(const r in i)e[r]=i[r]}return e}function My(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n0(t){return t.getRenderTarget()===null?t.outputColorSpace:qn}const wy={clone:ps,merge:zt};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class i0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends i0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lu*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Dr=1;class Cy extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new on(Lr,Dr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new on(Lr,Dr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new on(Lr,Dr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new on(Lr,Dr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new on(Lr,Dr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new on(Lr,Dr,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,d=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(d),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class r0 extends cn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ds,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class by extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?Ce:or),this.texture=new r0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_n}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ao(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ui});s.uniforms.tEquirect.value=n;const o=new yn(r,s),a=n.minFilter;return n.minFilter===mo&&(n.minFilter=_n),new Cy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tc=new N,Ry=new N,Py=new Ne;class Yi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tc.subVectors(i,n).cross(Ry.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Py.getNormalMatrix(e),r=this.coplanarPoint(Tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new To,ua=new N;class s0{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],d=i[6],h=i[7],f=i[8],p=i[9],_=i[10],x=i[11],v=i[12],u=i[13],m=i[14],g=i[15];return n[0].setComponents(a-r,h-l,x-f,g-v).normalize(),n[1].setComponents(a+r,h+l,x+f,g+v).normalize(),n[2].setComponents(a+s,h+c,x+p,g+u).normalize(),n[3].setComponents(a-s,h-c,x-p,g-u).normalize(),n[4].setComponents(a-o,h-d,x-_,g-m).normalize(),n[5].setComponents(a+o,h+d,x+_,g+m).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function o0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ly(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,p=t.createBuffer();t.bindBuffer(d,p),t.bufferData(d,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,h){const f=d.array,p=d.updateRange;t.bindBuffer(h,c),p.count===-1?t.bufferSubData(h,0,f):(n?t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):t.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,d)):h.version<c.version&&(s(h.buffer,c,d),h.version=c.version)}return{get:o,remove:a,update:l}}class Ld extends St{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,p=[],_=[],x=[],v=[];for(let u=0;u<d;u++){const m=u*f-o;for(let g=0;g<c;g++){const E=g*h-s;_.push(E,-m,0),x.push(0,0,1),v.push(g/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const g=m+c*u,E=m+c*(u+1),w=m+1+c*(u+1),A=m+1+c*u;p.push(g,E,A),p.push(E,w,A)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy="vec3 transformed = vec3( position );",zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EE=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,CE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,NE=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,FE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,VE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,XE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,SS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,MS=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TS=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,US=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,NS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Dy,alphamap_pars_fragment:Uy,alphatest_fragment:Iy,alphatest_pars_fragment:Ny,aomap_fragment:Fy,aomap_pars_fragment:ky,begin_vertex:Oy,beginnormal_vertex:zy,bsdfs:By,iridescence_fragment:Hy,bumpmap_pars_fragment:Gy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:jy,color_fragment:qy,color_pars_fragment:Yy,color_pars_vertex:$y,color_vertex:Ky,common:Zy,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,encodings_fragment:rE,encodings_pars_fragment:sE,envmap_fragment:oE,envmap_common_pars_fragment:aE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:EE,envmap_vertex:uE,fog_vertex:dE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_fragment:gE,lightmap_pars_fragment:vE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:xE,lights_pars_begin:yE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:wE,lights_phong_pars_fragment:TE,lights_physical_fragment:AE,lights_physical_pars_fragment:CE,lights_fragment_begin:bE,lights_fragment_maps:RE,lights_fragment_end:PE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:IE,map_fragment:NE,map_pars_fragment:FE,map_particle_fragment:kE,map_particle_pars_fragment:OE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:BE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:WE,normal_fragment_begin:XE,normal_fragment_maps:jE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:$E,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:eS,output_fragment:tS,packing:nS,premultiplied_alpha_fragment:iS,project_vertex:rS,dithering_fragment:sS,dithering_pars_fragment:oS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:lS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:uS,shadowmap_vertex:dS,shadowmask_pars_fragment:fS,skinbase_vertex:hS,skinning_pars_vertex:pS,skinning_vertex:mS,skinnormal_vertex:gS,specularmap_fragment:vS,specularmap_pars_fragment:_S,tonemapping_fragment:xS,tonemapping_pars_fragment:yS,transmission_fragment:ES,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:wS,uv_vertex:TS,worldpos_vertex:AS,background_vert:CS,background_frag:bS,backgroundCube_vert:RS,backgroundCube_frag:PS,cube_vert:LS,cube_frag:DS,depth_vert:US,depth_frag:IS,distanceRGBA_vert:NS,distanceRGBA_frag:FS,equirect_vert:kS,equirect_frag:OS,linedashed_vert:zS,linedashed_frag:BS,meshbasic_vert:HS,meshbasic_frag:GS,meshlambert_vert:VS,meshlambert_frag:WS,meshmatcap_vert:XS,meshmatcap_frag:jS,meshnormal_vert:qS,meshnormal_frag:YS,meshphong_vert:$S,meshphong_frag:KS,meshphysical_vert:ZS,meshphysical_frag:QS,meshtoon_vert:JS,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:rM,sprite_vert:sM,sprite_frag:oM},se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}}},Vn={basic:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:zt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:zt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:zt([se.points,se.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:zt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:zt([se.common,se.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:zt([se.sprite,se.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:zt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:zt([se.lights,se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Vn.physical={uniforms:zt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const da={r:0,b:0,g:0};function aM(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function _(v,u){let m=!1,g=u.isScene===!0?u.background:null;switch(g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),m=!0),t.xr.getEnvironmentBlendMode()){case"opaque":m=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),m=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),m=!0;break}(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===El)?(d===void 0&&(d=new yn(new Ao(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:ps(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=g.colorSpace!==Ce,(h!==g||f!==g.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=g,f=g.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new yn(new Ld(2,2),new pr({name:"BackgroundMaterial",uniforms:ps(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ce,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,f=g.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,u){v.getRGB(da,n0(t)),i.buffers.color.setClear(da.r,da.g,da.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(v,u=1){a.set(v),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:_}}function lM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=v(null);let c=l,d=!1;function h(W,P,Z,K,I){let G=!1;if(o){const B=x(K,Z,P);c!==B&&(c=B,p(c.object)),G=u(W,K,Z,I),G&&m(W,K,Z,I)}else{const B=P.wireframe===!0;(c.geometry!==K.id||c.program!==Z.id||c.wireframe!==B)&&(c.geometry=K.id,c.program=Z.id,c.wireframe=B,G=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,L(W,P,Z,K),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(W){return i.isWebGL2?t.bindVertexArray(W):s.bindVertexArrayOES(W)}function _(W){return i.isWebGL2?t.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function x(W,P,Z){const K=Z.wireframe===!0;let I=a[W.id];I===void 0&&(I={},a[W.id]=I);let G=I[P.id];G===void 0&&(G={},I[P.id]=G);let B=G[K];return B===void 0&&(B=v(f()),G[K]=B),B}function v(W){const P=[],Z=[],K=[];for(let I=0;I<r;I++)P[I]=0,Z[I]=0,K[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Z,attributeDivisors:K,object:W,attributes:{},index:null}}function u(W,P,Z,K){const I=c.attributes,G=P.attributes;let B=0;const le=Z.getAttributes();for(const J in le)if(le[J].location>=0){const Q=I[J];let re=G[J];if(re===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&(re=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&(re=W.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;B++}return c.attributesNum!==B||c.index!==K}function m(W,P,Z,K){const I={},G=P.attributes;let B=0;const le=Z.getAttributes();for(const J in le)if(le[J].location>=0){let Q=G[J];Q===void 0&&(J==="instanceMatrix"&&W.instanceMatrix&&(Q=W.instanceMatrix),J==="instanceColor"&&W.instanceColor&&(Q=W.instanceColor));const re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),I[J]=re,B++}c.attributes=I,c.attributesNum=B,c.index=K}function g(){const W=c.newAttributes;for(let P=0,Z=W.length;P<Z;P++)W[P]=0}function E(W){w(W,0)}function w(W,P){const Z=c.newAttributes,K=c.enabledAttributes,I=c.attributeDivisors;Z[W]=1,K[W]===0&&(t.enableVertexAttribArray(W),K[W]=1),I[W]!==P&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,P),I[W]=P)}function A(){const W=c.newAttributes,P=c.enabledAttributes;for(let Z=0,K=P.length;Z<K;Z++)P[Z]!==W[Z]&&(t.disableVertexAttribArray(Z),P[Z]=0)}function R(W,P,Z,K,I,G){i.isWebGL2===!0&&(Z===t.INT||Z===t.UNSIGNED_INT)?t.vertexAttribIPointer(W,P,Z,I,G):t.vertexAttribPointer(W,P,Z,K,I,G)}function L(W,P,Z,K){if(i.isWebGL2===!1&&(W.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=K.attributes,G=Z.getAttributes(),B=P.defaultAttributeValues;for(const le in G){const J=G[le];if(J.location>=0){let V=I[le];if(V===void 0&&(le==="instanceMatrix"&&W.instanceMatrix&&(V=W.instanceMatrix),le==="instanceColor"&&W.instanceColor&&(V=W.instanceColor)),V!==void 0){const Q=V.normalized,re=V.itemSize,oe=n.get(V);if(oe===void 0)continue;const U=oe.buffer,Ae=oe.type,we=oe.bytesPerElement;if(V.isInterleavedBufferAttribute){const ae=V.data,Se=ae.stride,Ge=V.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)w(J.location+ve,ae.meshPerAttribute);W.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<J.locationSize;ve++)E(J.location+ve);t.bindBuffer(t.ARRAY_BUFFER,U);for(let ve=0;ve<J.locationSize;ve++)R(J.location+ve,re/J.locationSize,Ae,Q,Se*we,(Ge+re/J.locationSize*ve)*we)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)w(J.location+ae,V.meshPerAttribute);W.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<J.locationSize;ae++)E(J.location+ae);t.bindBuffer(t.ARRAY_BUFFER,U);for(let ae=0;ae<J.locationSize;ae++)R(J.location+ae,re/J.locationSize,Ae,Q,re*we,re/J.locationSize*ae*we)}}else if(B!==void 0){const Q=B[le];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(J.location,Q);break;case 3:t.vertexAttrib3fv(J.location,Q);break;case 4:t.vertexAttrib4fv(J.location,Q);break;default:t.vertexAttrib1fv(J.location,Q)}}}}A()}function S(){z();for(const W in a){const P=a[W];for(const Z in P){const K=P[Z];for(const I in K)_(K[I].object),delete K[I];delete P[Z]}delete a[W]}}function M(W){if(a[W.id]===void 0)return;const P=a[W.id];for(const Z in P){const K=P[Z];for(const I in K)_(K[I].object),delete K[I];delete P[Z]}delete a[W.id]}function H(W){for(const P in a){const Z=a[P];if(Z[W.id]===void 0)continue;const K=Z[W.id];for(const I in K)_(K[I].object),delete K[I];delete Z[W.id]}}function z(){k(),d=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:k,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:E,disableUnusedAttributes:A}}function cM(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){t.drawArrays(s,c,d),n.update(d,s,1)}function l(c,d,h){if(h===0)return;let f,p;if(r)f=t,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,d,h),n.update(d,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function uM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,E=o||e.has("OES_texture_float"),w=g&&E,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:v,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:A}}function dM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yi,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,x=h.clipIntersection,v=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!v)s?d(null):c();else{const m=s?0:i,g=m*4;let E=u.clippingState||null;l.value=E,E=d(_,f,g,p);for(let w=0;w!==g;++w)E[w]=n[w];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const x=h!==null?h.length:0;let v=null;if(x!==0){if(v=l.value,_!==!0||v===null){const u=p+x*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<u)&&(v=new Float32Array(u));for(let g=0,E=p;g!==x;++g,E+=4)o.copy(h[g]).applyMatrix4(m,a),o.normal.toArray(v,E),v[E+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function fM(t){let e=new WeakMap;function n(o,a){return a===Au?o.mapping=ds:a===Cu&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Au||a===Cu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new by(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hM extends i0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qr=4,Yh=[.125,.215,.35,.446,.526,.582],Ki=20,Ac=new hM,$h=new He;let Cc=null;const $i=(1+Math.sqrt(5))/2,Ur=1/$i,Kh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,$i,Ur),new N(0,$i,-Ur),new N(Ur,0,$i),new N(-Ur,0,$i),new N($i,Ur,0),new N(-$i,Ur,0)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cc),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:go,format:Nn,colorSpace:qn,depthBuffer:!1},r=Qh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(s)),this._blurMaterial=mM(s,e,n)}return r}_compileMaterial(e){const n=new yn(this._lodPlanes[0],e);this._renderer.compile(n,Ac)}_sceneToCubeUV(e,n,i,r){const a=new on(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor($h),d.toneMapping=ai,d.autoClear=!1;const p=new is({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new yn(new Ao,p);let x=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,x=!0):(p.color.copy($h),x=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;fa(r,m*g,u>2?g:0,g,g),d.setRenderTarget(r),x&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kh[(r-1)%Kh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new yn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),x=s/_,v=isFinite(s)?1+Math.floor(d*x):Ki;v>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ki}`);const u=[];let m=0;for(let R=0;R<Ki;++R){const L=R/x,S=Math.exp(-L*L/2);u.push(S),R===0?m+=S:R<v&&(m+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/m;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const E=this._sizeLods[r],w=3*E*(r>g-qr?r-g+qr:0),A=4*(this._cubeSize-E);fa(n,w,A,3*E,2*E),l.setRenderTarget(n),l.render(h,Ac)}}function pM(t){const e=[],n=[],i=[];let r=t;const s=t-qr+1+Yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qr?l=Yh[o-t+qr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,x=3,v=2,u=1,m=new Float32Array(x*_*p),g=new Float32Array(v*_*p),E=new Float32Array(u*_*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,L=A>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];m.set(S,x*_*A),g.set(f,v*_*A);const M=[A,A,A,A,A,A];E.set(M,u*_*A)}const w=new St;w.setAttribute("position",new un(m,x)),w.setAttribute("uv",new un(g,v)),w.setAttribute("faceIndex",new un(E,u)),e.push(w),r>qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qh(t,e,n){const i=new hr(t,e,n);return i.texture.mapping=El,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mM(t,e,n){const i=new Float32Array(Ki),r=new N(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Jh(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ep(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Au||l===Cu,d=l===ds||l===fs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Zh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Zh(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _M(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let v=0,u=x.length;v<u;v++)e.update(x[v],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let g=0,E=m.length;g<E;g+=3){const w=m[g+0],A=m[g+1],R=m[g+2];f.push(w,A,A,R,R,w)}}else{const m=_.array;x=_.version;for(let g=0,E=m.length/3-1;g<E;g+=3){const w=g+0,A=g+1,R=g+2;f.push(w,A,A,R,R,w)}}const v=new(Yg(f)?t0:e0)(f,1);v.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,v)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function xM(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,p){t.drawElements(s,p,a,f*l),n.update(p,s,1)}function h(f,p,_){if(_===0)return;let x,v;if(r)x=t,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](s,p,a,f*l,_),n.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h}function yM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function EM(t,e){return t[0]-e[0]}function SM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function MM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new At,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==x){let P=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",P)};var p=P;v!==void 0&&v.texture.dispose();const g=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let S=0;g===!0&&(S=1),E===!0&&(S=2),w===!0&&(S=3);let M=d.attributes.position.count*S,H=1;M>e.maxTextureSize&&(H=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*H*4*x),k=new Zg(z,M,H,x);k.type=tr,k.needsUpdate=!0;const W=S*4;for(let Z=0;Z<x;Z++){const K=A[Z],I=R[Z],G=L[Z],B=M*H*4*Z;for(let le=0;le<K.count;le++){const J=le*W;g===!0&&(o.fromBufferAttribute(K,le),z[B+J+0]=o.x,z[B+J+1]=o.y,z[B+J+2]=o.z,z[B+J+3]=0),E===!0&&(o.fromBufferAttribute(I,le),z[B+J+4]=o.x,z[B+J+5]=o.y,z[B+J+6]=o.z,z[B+J+7]=0),w===!0&&(o.fromBufferAttribute(G,le),z[B+J+8]=o.x,z[B+J+9]=o.y,z[B+J+10]=o.z,z[B+J+11]=G.itemSize===4?o.w:1)}}v={count:x,texture:k,size:new qe(M,H)},s.set(d,v),d.addEventListener("dispose",P)}let u=0;for(let g=0;g<f.length;g++)u+=f[g];const m=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const _=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];i[d.id]=x}for(let E=0;E<_;E++){const w=x[E];w[0]=E,w[1]=f[E]}x.sort(SM);for(let E=0;E<8;E++)E<_&&x[E][1]?(a[E][0]=x[E][0],a[E][1]=x[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(EM);const v=d.morphAttributes.position,u=d.morphAttributes.normal;let m=0;for(let E=0;E<8;E++){const w=a[E],A=w[0],R=w[1];A!==Number.MAX_SAFE_INTEGER&&R?(v&&d.getAttribute("morphTarget"+E)!==v[A]&&d.setAttribute("morphTarget"+E,v[A]),u&&d.getAttribute("morphNormal"+E)!==u[A]&&d.setAttribute("morphNormal"+E,u[A]),r[E]=R,m+=R):(v&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const g=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function wM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const a0=new cn,l0=new Zg,c0=new fy,u0=new r0,tp=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tp[r];if(s===void 0&&(s=new Float32Array(r),tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ml(t,e){let n=np[e];n===void 0&&(n=new Int32Array(e),np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2fv(this.addr,e),gt(n,e)}}function CM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mt(n,e))return;t.uniform3fv(this.addr,e),gt(n,e)}}function bM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4fv(this.addr,e),gt(n,e)}}function RM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;sp.set(i),t.uniformMatrix2fv(this.addr,!1,sp),gt(n,i)}}function PM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;rp.set(i),t.uniformMatrix3fv(this.addr,!1,rp),gt(n,i)}}function LM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;ip.set(i),t.uniformMatrix4fv(this.addr,!1,ip),gt(n,i)}}function DM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function UM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2iv(this.addr,e),gt(n,e)}}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3iv(this.addr,e),gt(n,e)}}function NM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4iv(this.addr,e),gt(n,e)}}function FM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2uiv(this.addr,e),gt(n,e)}}function OM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3uiv(this.addr,e),gt(n,e)}}function zM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4uiv(this.addr,e),gt(n,e)}}function BM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||a0,r)}function HM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c0,r)}function GM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u0,r)}function VM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l0,r)}function WM(t){switch(t){case 5126:return TM;case 35664:return AM;case 35665:return CM;case 35666:return bM;case 35674:return RM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return FM;case 36294:return kM;case 36295:return OM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return VM}}function XM(t,e){t.uniform1fv(this.addr,e)}function jM(t,e){const n=ys(e,this.size,2);t.uniform2fv(this.addr,n)}function qM(t,e){const n=ys(e,this.size,3);t.uniform3fv(this.addr,n)}function YM(t,e){const n=ys(e,this.size,4);t.uniform4fv(this.addr,n)}function $M(t,e){const n=ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KM(t,e){const n=ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZM(t,e){const n=ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QM(t,e){t.uniform1iv(this.addr,e)}function JM(t,e){t.uniform2iv(this.addr,e)}function e1(t,e){t.uniform3iv(this.addr,e)}function t1(t,e){t.uniform4iv(this.addr,e)}function n1(t,e){t.uniform1uiv(this.addr,e)}function i1(t,e){t.uniform2uiv(this.addr,e)}function r1(t,e){t.uniform3uiv(this.addr,e)}function s1(t,e){t.uniform4uiv(this.addr,e)}function o1(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a0,s[o])}function a1(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||c0,s[o])}function l1(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||u0,s[o])}function c1(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||l0,s[o])}function u1(t){switch(t){case 5126:return XM;case 35664:return jM;case 35665:return qM;case 35666:return YM;case 35674:return $M;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return QM;case 35667:case 35671:return JM;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}class d1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=WM(n.type)}}class f1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=u1(n.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function op(t,e){t.seq.push(e),t.map[e.id]=e}function p1(t,e,n){const i=t.name,r=i.length;for(bc.lastIndex=0;;){const s=bc.exec(i),o=bc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){op(n,c===void 0?new d1(a,t,e):new f1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new h1(a),op(n,h)),n=h}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);p1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ap(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let m1=0;function g1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function v1(t){switch(t){case qn:return["Linear","( value )"];case Ce:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function lp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+g1(t.getShaderSource(e),o)}else return r}function _1(t,e){const n=v1(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function x1(t,e){let n;switch(e){case Lx:n="Linear";break;case Dx:n="Reinhard";break;case Ux:n="OptimizedCineon";break;case Ix:n="ACESFilmic";break;case Nx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function y1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function E1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function S1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Os(t){return t!==""}function cp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function up(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(t){return t.replace(M1,w1)}function w1(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Du(n)}const T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(t){return t.replace(T1,A1)}function A1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vg:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function L1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function D1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=C1(n),c=b1(n),d=R1(n),h=P1(n),f=L1(n),p=n.isWebGL2?"":y1(n),_=E1(s),x=r.createProgram();let v,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=[_].filter(Os).join(`
`),v.length>0&&(v+=`
`),u=[p,_].filter(Os).join(`
`),u.length>0&&(u+=`
`)):(v=[fp(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),u=[p,fp(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ai?"#define TONE_MAPPING":"",n.toneMapping!==ai?Re.tonemapping_pars_fragment:"",n.toneMapping!==ai?x1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,_1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),o=Du(o),o=cp(o,n),o=up(o,n),a=Du(a),a=cp(a,n),a=up(a,n),o=dp(o),a=dp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=m+v+o,E=m+u+a,w=ap(r,r.VERTEX_SHADER,g),A=ap(r,r.FRAGMENT_SHADER,E);if(r.attachShader(x,w),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),M=r.getShaderInfoLog(w).trim(),H=r.getShaderInfoLog(A).trim();let z=!0,k=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,w,A);else{const W=lp(r,w,"vertex"),P=lp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+W+`
`+P)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(M===""||H==="")&&(k=!1);k&&(this.diagnostics={runnable:z,programLog:S,vertexShader:{log:M,prefix:v},fragmentShader:{log:H,prefix:u}})}r.deleteShader(w),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Pa(r,x)),R};let L;return this.getAttributes=function(){return L===void 0&&(L=S1(r,x)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=n.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let U1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new N1(e),n.set(e,i)),i}}class N1{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}}function F1(t,e,n,i,r,s,o){const a=new Qg,l=new I1,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function v(S,M,H,z,k){const W=z.fog,P=k.geometry,Z=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),I=K&&K.mapping===El?K.image.height:null,G=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,le=B!==void 0?B.length:0;let J=0;P.morphAttributes.position!==void 0&&(J=1),P.morphAttributes.normal!==void 0&&(J=2),P.morphAttributes.color!==void 0&&(J=3);let V,Q,re,oe;if(G){const Ye=Vn[G];V=Ye.vertexShader,Q=Ye.fragmentShader}else V=S.vertexShader,Q=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const U=t.getRenderTarget(),Ae=k.isInstancedMesh===!0,we=!!S.map,ae=!!S.matcap,Se=!!K,Ge=!!S.aoMap,ve=!!S.lightMap,Ue=!!S.bumpMap,vt=!!S.normalMap,wt=!!S.displacementMap,_t=!!S.emissiveMap,dt=!!S.metalnessMap,Ve=!!S.roughnessMap,it=S.clearcoat>0,jt=S.iridescence>0,b=S.sheen>0,T=S.transmission>0,X=it&&!!S.clearcoatMap,ne=it&&!!S.clearcoatNormalMap,ie=it&&!!S.clearcoatRoughnessMap,ce=jt&&!!S.iridescenceMap,Me=jt&&!!S.iridescenceThicknessMap,he=b&&!!S.sheenColorMap,Y=b&&!!S.sheenRoughnessMap,me=!!S.specularMap,_e=!!S.specularColorMap,ye=!!S.specularIntensityMap,fe=T&&!!S.transmissionMap,ge=T&&!!S.thicknessMap,ke=!!S.gradientMap,Xe=!!S.alphaMap,st=S.alphaTest>0,D=!!S.extensions,j=!!P.attributes.uv1,ee=!!P.attributes.uv2,ue=!!P.attributes.uv3;return{isWebGL2:d,shaderID:G,shaderName:S.type,vertexShader:V,fragmentShader:Q,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ae,instancingColor:Ae&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:qn,map:we,matcap:ae,envMap:Se,envMapMode:Se&&K.mapping,envMapCubeUVHeight:I,aoMap:Ge,lightMap:ve,bumpMap:Ue,normalMap:vt,displacementMap:f&&wt,emissiveMap:_t,normalMapObjectSpace:vt&&S.normalMapType===ty,normalMapTangentSpace:vt&&S.normalMapType===ey,metalnessMap:dt,roughnessMap:Ve,clearcoat:it,clearcoatMap:X,clearcoatNormalMap:ne,clearcoatRoughnessMap:ie,iridescence:jt,iridescenceMap:ce,iridescenceThicknessMap:Me,sheen:b,sheenColorMap:he,sheenRoughnessMap:Y,specularMap:me,specularColorMap:_e,specularIntensityMap:ye,transmission:T,transmissionMap:fe,thicknessMap:ge,gradientMap:ke,opaque:S.transparent===!1&&S.blending===es,alphaMap:Xe,alphaTest:st,combine:S.combine,mapUv:we&&x(S.map.channel),aoMapUv:Ge&&x(S.aoMap.channel),lightMapUv:ve&&x(S.lightMap.channel),bumpMapUv:Ue&&x(S.bumpMap.channel),normalMapUv:vt&&x(S.normalMap.channel),displacementMapUv:wt&&x(S.displacementMap.channel),emissiveMapUv:_t&&x(S.emissiveMap.channel),metalnessMapUv:dt&&x(S.metalnessMap.channel),roughnessMapUv:Ve&&x(S.roughnessMap.channel),clearcoatMapUv:X&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Y&&x(S.sheenRoughnessMap.channel),specularMapUv:me&&x(S.specularMap.channel),specularColorMapUv:_e&&x(S.specularColorMap.channel),specularIntensityMapUv:ye&&x(S.specularIntensityMap.channel),transmissionMapUv:fe&&x(S.transmissionMap.channel),thicknessMapUv:ge&&x(S.thicknessMap.channel),alphaMapUv:Xe&&x(S.alphaMap.channel),vertexTangents:vt&&!!P.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:ee,vertexUv3s:ue,pointsUvs:k.isPoints===!0&&!!P.attributes.uv&&(we||Xe),fog:!!W,useFog:S.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:ai,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ii,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:D&&S.extensions.derivatives===!0,extensionFragDepth:D&&S.extensions.fragDepth===!0,extensionDrawBuffers:D&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)M.push(H),M.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(m(M,S),g(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function g(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),S.push(a.mask)}function E(S){const M=_[S.type];let H;if(M){const z=Vn[M];H=wy.clone(z.uniforms)}else H=S.uniforms;return H}function w(S,M){let H;for(let z=0,k=c.length;z<k;z++){const W=c[z];if(W.cacheKey===M){H=W,++H.usedTimes;break}}return H===void 0&&(H=new D1(t,M,S,s),c.push(H)),H}function A(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:E,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:L}}function k1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function O1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,_,x,v){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:v},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=v),e++,u}function a(h,f,p,_,x,v){const u=o(h,f,p,_,x,v);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,_,x,v){const u=o(h,f,p,_,x,v);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||O1),i.length>1&&i.sort(f||hp),r.length>1&&r.sort(f||hp)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function z1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pp,t.set(i,[o])):r>=s.length?(o=new pp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function B1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new He};break;case"SpotLight":n={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function H1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let G1=0;function V1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function W1(t,e){const n=new B1,i=H1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new N);const s=new N,o=new pt,a=new pt;function l(d,h){let f=0,p=0,_=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let x=0,v=0,u=0,m=0,g=0,E=0,w=0,A=0,R=0,L=0;d.sort(V1);const S=h===!0?Math.PI:1;for(let H=0,z=d.length;H<z;H++){const k=d[H],W=k.color,P=k.intensity,Z=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=W.r*P*S,p+=W.g*P*S,_+=W.b*P*S;else if(k.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(k.sh.coefficients[I],P);else if(k.isDirectionalLight){const I=n.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*S),k.castShadow){const G=k.shadow,B=i.get(k);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=K,r.directionalShadowMatrix[x]=k.shadow.matrix,E++}r.directional[x]=I,x++}else if(k.isSpotLight){const I=n.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(W).multiplyScalar(P*S),I.distance=Z,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,r.spot[u]=I;const G=k.shadow;if(k.map&&(r.spotLightMap[R]=k.map,R++,G.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[u]=G.matrix,k.castShadow){const B=i.get(k);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,r.spotShadow[u]=B,r.spotShadowMap[u]=K,A++}u++}else if(k.isRectAreaLight){const I=n.get(k);I.color.copy(W).multiplyScalar(P),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),r.rectArea[m]=I,m++}else if(k.isPointLight){const I=n.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*S),I.distance=k.distance,I.decay=k.decay,k.castShadow){const G=k.shadow,B=i.get(k);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,r.pointShadow[v]=B,r.pointShadowMap[v]=K,r.pointShadowMatrix[v]=k.shadow.matrix,w++}r.point[v]=I,v++}else if(k.isHemisphereLight){const I=n.get(k);I.skyColor.copy(k.color).multiplyScalar(P*S),I.groundColor.copy(k.groundColor).multiplyScalar(P*S),r.hemi[g]=I,g++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const M=r.hash;(M.directionalLength!==x||M.pointLength!==v||M.spotLength!==u||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==E||M.numPointShadows!==w||M.numSpotShadows!==A||M.numSpotMaps!==R)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=m,r.point.length=v,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+R-L,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=L,M.directionalLength=x,M.pointLength=v,M.spotLength=u,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=E,M.numPointShadows=w,M.numSpotShadows=A,M.numSpotMaps=R,r.version=G1++)}function c(d,h){let f=0,p=0,_=0,x=0,v=0;const u=h.matrixWorldInverse;for(let m=0,g=d.length;m<g;m++){const E=d[m];if(E.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(E.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const w=r.rectArea[x];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),a.identity(),o.copy(E.matrixWorld),o.premultiply(u),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(u),p++}else if(E.isHemisphereLight){const w=r.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(u),v++}}}return{setup:l,setupView:c,state:r}}function mp(t,e){const n=new W1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function X1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new mp(t,e),n.set(s,[l])):o>=a.length?(l=new mp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class j1 extends xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q1 extends xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function K1(t,e,n){let i=new s0;const r=new qe,s=new qe,o=new At,a=new j1({depthPacking:Jx}),l=new q1,c={},d=n.maxTextureSize,h={[Fi]:Jt,[Jt]:Fi,[ii]:ii},f=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new St;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new yn(_,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let u=this.type;this.render=function(w,A,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||w.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==ei&&this.type===ei,k=u===ei&&this.type!==ei;for(let W=0,P=w.length;W<P;W++){const Z=w[W],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const I=K.getFrameExtents();if(r.multiply(I),s.copy(K.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,K.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,K.mapSize.y=s.y)),K.map===null||z===!0||k===!0){const B=this.type!==ei?{minFilter:Ht,magFilter:Ht}:{};K.map!==null&&K.map.dispose(),K.map=new hr(r.x,r.y,B),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}t.setRenderTarget(K.map),t.clear();const G=K.getViewportCount();for(let B=0;B<G;B++){const le=K.getViewport(B);o.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),H.viewport(o),K.updateMatrices(Z,B),i=K.getFrustum(),E(A,R,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===ei&&m(K,R),K.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(L,S,M)};function m(w,A){const R=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,R,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,R,p,x,null)}function g(w,A,R,L){let S=null;const M=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)S=M;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,z=A.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let W=k[z];W===void 0&&(W=S.clone(),k[z]=W),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,L===ei?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=R}return S}function E(w,A,R,L,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ei)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),k=w.material;if(Array.isArray(k)){const W=z.groups;for(let P=0,Z=W.length;P<Z;P++){const K=W[P],I=k[K.materialIndex];if(I&&I.visible){const G=g(w,I,L,S);t.renderBufferDirect(R,null,z,G,w,K)}}}else if(k.visible){const W=g(w,k,L,S);t.renderBufferDirect(R,null,z,W,w,null)}}const H=w.children;for(let z=0,k=H.length;z<k;z++)E(H[z],A,R,L,S)}}function Z1(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const j=new At;let ee=null;const ue=new At(0,0,0,0);return{setMask:function(pe){ee!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),ee=pe)},setLocked:function(pe){D=pe},setClear:function(pe,Ye,$e,Pt,hi){hi===!0&&(pe*=Pt,Ye*=Pt,$e*=Pt),j.set(pe,Ye,$e,Pt),ue.equals(j)===!1&&(t.clearColor(pe,Ye,$e,Pt),ue.copy(j))},reset:function(){D=!1,ee=null,ue.set(-1,0,0,0)}}}function s(){let D=!1,j=null,ee=null,ue=null;return{setTest:function(pe){pe?U(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(pe){j!==pe&&!D&&(t.depthMask(pe),j=pe)},setFunc:function(pe){if(ee!==pe){switch(pe){case Sx:t.depthFunc(t.NEVER);break;case Mx:t.depthFunc(t.ALWAYS);break;case wx:t.depthFunc(t.LESS);break;case Tu:t.depthFunc(t.LEQUAL);break;case Tx:t.depthFunc(t.EQUAL);break;case Ax:t.depthFunc(t.GEQUAL);break;case Cx:t.depthFunc(t.GREATER);break;case bx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=pe}},setLocked:function(pe){D=pe},setClear:function(pe){ue!==pe&&(t.clearDepth(pe),ue=pe)},reset:function(){D=!1,j=null,ee=null,ue=null}}}function o(){let D=!1,j=null,ee=null,ue=null,pe=null,Ye=null,$e=null,Pt=null,hi=null;return{setTest:function(ot){D||(ot?U(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(ot){j!==ot&&!D&&(t.stencilMask(ot),j=ot)},setFunc:function(ot,pn,zn){(ee!==ot||ue!==pn||pe!==zn)&&(t.stencilFunc(ot,pn,zn),ee=ot,ue=pn,pe=zn)},setOp:function(ot,pn,zn){(Ye!==ot||$e!==pn||Pt!==zn)&&(t.stencilOp(ot,pn,zn),Ye=ot,$e=pn,Pt=zn)},setLocked:function(ot){D=ot},setClear:function(ot){hi!==ot&&(t.clearStencil(ot),hi=ot)},reset:function(){D=!1,j=null,ee=null,ue=null,pe=null,Ye=null,$e=null,Pt=null,hi=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,x=[],v=null,u=!1,m=null,g=null,E=null,w=null,A=null,R=null,L=null,S=!1,M=null,H=null,z=null,k=null,W=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=K>=1):I.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=K>=2);let G=null,B={};const le=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),V=new At().fromArray(le),Q=new At().fromArray(J);function re(D,j,ee,ue){const pe=new Uint8Array(4),Ye=t.createTexture();t.bindTexture(D,Ye),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ee;$e++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(j,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(j+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return Ye}const oe={};oe[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(t.DEPTH_TEST),l.setFunc(Tu),wt(!1),_t(eh),U(t.CULL_FACE),Ue(Ui);function U(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function Ae(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function we(D,j){return p[D]!==j?(t.bindFramebuffer(D,j),p[D]=j,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=j),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=j)),!0):!1}function ae(D,j){let ee=x,ue=!1;if(D)if(ee=_.get(j),ee===void 0&&(ee=[],_.set(j,ee)),D.isWebGLMultipleRenderTargets){const pe=D.texture;if(ee.length!==pe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ye=0,$e=pe.length;Ye<$e;Ye++)ee[Ye]=t.COLOR_ATTACHMENT0+Ye;ee.length=pe.length,ue=!0}}else ee[0]!==t.COLOR_ATTACHMENT0&&(ee[0]=t.COLOR_ATTACHMENT0,ue=!0);else ee[0]!==t.BACK&&(ee[0]=t.BACK,ue=!0);ue&&(n.isWebGL2?t.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Se(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const Ge={[Ir]:t.FUNC_ADD,[dx]:t.FUNC_SUBTRACT,[fx]:t.FUNC_REVERSE_SUBTRACT};if(i)Ge[rh]=t.MIN,Ge[sh]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ge[rh]=D.MIN_EXT,Ge[sh]=D.MAX_EXT)}const ve={[hx]:t.ZERO,[px]:t.ONE,[mx]:t.SRC_COLOR,[Hg]:t.SRC_ALPHA,[Ex]:t.SRC_ALPHA_SATURATE,[xx]:t.DST_COLOR,[vx]:t.DST_ALPHA,[gx]:t.ONE_MINUS_SRC_COLOR,[Gg]:t.ONE_MINUS_SRC_ALPHA,[yx]:t.ONE_MINUS_DST_COLOR,[_x]:t.ONE_MINUS_DST_ALPHA};function Ue(D,j,ee,ue,pe,Ye,$e,Pt){if(D===Ui){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(U(t.BLEND),u=!0),D!==ux){if(D!==m||Pt!==S){if((g!==Ir||A!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,A=Ir),Pt)switch(D){case es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,w=null,R=null,L=null,m=D,S=Pt}return}pe=pe||j,Ye=Ye||ee,$e=$e||ue,(j!==g||pe!==A)&&(t.blendEquationSeparate(Ge[j],Ge[pe]),g=j,A=pe),(ee!==E||ue!==w||Ye!==R||$e!==L)&&(t.blendFuncSeparate(ve[ee],ve[ue],ve[Ye],ve[$e]),E=ee,w=ue,R=Ye,L=$e),m=D,S=!1}function vt(D,j){D.side===ii?Ae(t.CULL_FACE):U(t.CULL_FACE);let ee=D.side===Jt;j&&(ee=!ee),wt(ee),D.blending===es&&D.transparent===!1?Ue(Ui):Ue(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ue=D.stencilWrite;c.setTest(ue),ue&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){M!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),M=D)}function _t(D){D!==ax?(U(t.CULL_FACE),D!==H&&(D===eh?t.cullFace(t.BACK):D===lx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),H=D}function dt(D){D!==z&&(Z&&t.lineWidth(D),z=D)}function Ve(D,j,ee){D?(U(t.POLYGON_OFFSET_FILL),(k!==j||W!==ee)&&(t.polygonOffset(j,ee),k=j,W=ee)):Ae(t.POLYGON_OFFSET_FILL)}function it(D){D?U(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function jt(D){D===void 0&&(D=t.TEXTURE0+P-1),G!==D&&(t.activeTexture(D),G=D)}function b(D,j,ee){ee===void 0&&(G===null?ee=t.TEXTURE0+P-1:ee=G);let ue=B[ee];ue===void 0&&(ue={type:void 0,texture:void 0},B[ee]=ue),(ue.type!==D||ue.texture!==j)&&(G!==ee&&(t.activeTexture(ee),G=ee),t.bindTexture(D,j||oe[D]),ue.type=D,ue.texture=j)}function T(){const D=B[G];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(D){V.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),V.copy(D))}function ge(D){Q.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function ke(D,j){let ee=h.get(j);ee===void 0&&(ee=new WeakMap,h.set(j,ee));let ue=ee.get(D);ue===void 0&&(ue=t.getUniformBlockIndex(j,D.name),ee.set(D,ue))}function Xe(D,j){const ue=h.get(j).get(D);d.get(j)!==ue&&(t.uniformBlockBinding(j,ue,D.__bindingPointIndex),d.set(j,ue))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},G=null,B={},p={},_=new WeakMap,x=[],v=null,u=!1,m=null,g=null,E=null,w=null,A=null,R=null,L=null,S=!1,M=null,H=null,z=null,k=null,W=null,V.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:U,disable:Ae,bindFramebuffer:we,drawBuffers:ae,useProgram:Se,setBlending:Ue,setMaterial:vt,setFlipSided:wt,setCullFace:_t,setLineWidth:dt,setPolygonOffset:Ve,setScissorTest:it,activeTexture:jt,bindTexture:b,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:_e,texImage3D:ye,updateUBOMapping:ke,uniformBlockBinding:Xe,texStorage2D:Y,texStorage3D:me,texSubImage2D:ie,texSubImage3D:ce,compressedTexSubImage2D:Me,compressedTexSubImage3D:he,scissor:fe,viewport:ge,reset:st}}function Q1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const v=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,T){return u?new OffscreenCanvas(b,T):nl("canvas")}function g(b,T,X,ne){let ie=1;if((b.width>ne||b.height>ne)&&(ie=ne/Math.max(b.width,b.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=T?ry:Math.floor,Me=ce(ie*b.width),he=ce(ie*b.height);x===void 0&&(x=m(Me,he));const Y=X?m(Me,he):x;return Y.width=Me,Y.height=he,Y.getContext("2d").drawImage(b,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Me+"x"+he+")."),Y}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return Dh(b.width)&&Dh(b.height)}function w(b){return a?!1:b.wrapS!==In||b.wrapT!==In||b.minFilter!==Ht&&b.minFilter!==_n}function A(b,T){return b.generateMipmaps&&T&&b.minFilter!==Ht&&b.minFilter!==_n}function R(b){t.generateMipmap(b)}function L(b,T,X,ne,ie=!1){if(a===!1)return T;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=T;return T===t.RED&&(X===t.FLOAT&&(ce=t.R32F),X===t.HALF_FLOAT&&(ce=t.R16F),X===t.UNSIGNED_BYTE&&(ce=t.R8)),T===t.RG&&(X===t.FLOAT&&(ce=t.RG32F),X===t.HALF_FLOAT&&(ce=t.RG16F),X===t.UNSIGNED_BYTE&&(ce=t.RG8)),T===t.RGBA&&(X===t.FLOAT&&(ce=t.RGBA32F),X===t.HALF_FLOAT&&(ce=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ce=ne===Ce&&ie===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function S(b,T,X){return A(b,X)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function M(b){return b===Ht||b===oh||b===ec?t.NEAREST:t.LINEAR}function H(b){const T=b.target;T.removeEventListener("dispose",H),k(T),T.isVideoTexture&&_.delete(T)}function z(b){const T=b.target;T.removeEventListener("dispose",z),P(T)}function k(b){const T=i.get(b);if(T.__webglInit===void 0)return;const X=b.source,ne=v.get(X);if(ne){const ie=ne[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&W(b),Object.keys(ne).length===0&&v.delete(X)}i.remove(b)}function W(b){const T=i.get(b);t.deleteTexture(T.__webglTexture);const X=b.source,ne=v.get(X);delete ne[T.__cacheKey],o.memory.textures--}function P(b){const T=b.texture,X=i.get(b),ne=i.get(T);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(X.__webglFramebuffer[ie]),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ie=0;ie<X.__webglColorRenderbuffer.length;ie++)X.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ie]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ce=T.length;ie<ce;ie++){const Me=i.get(T[ie]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(T[ie])}i.remove(T),i.remove(b)}let Z=0;function K(){Z=0}function I(){const b=Z;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Z+=1,b}function G(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function B(b,T){const X=i.get(b);if(b.isVideoTexture&&it(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(X,b,T);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+T)}function le(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Ae(X,b,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+T)}function J(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){Ae(X,b,T);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+T)}function V(b,T){const X=i.get(b);if(b.version>0&&X.__version!==b.version){we(X,b,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+T)}const Q={[bu]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[Ru]:t.MIRRORED_REPEAT},re={[Ht]:t.NEAREST,[oh]:t.NEAREST_MIPMAP_NEAREST,[ec]:t.NEAREST_MIPMAP_LINEAR,[_n]:t.LINEAR,[Fx]:t.LINEAR_MIPMAP_NEAREST,[mo]:t.LINEAR_MIPMAP_LINEAR};function oe(b,T,X){if(X?(t.texParameteri(b,t.TEXTURE_WRAP_S,Q[T.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Q[T.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Q[T.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,re[T.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,re[T.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==In||T.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,M(T.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==Ht&&T.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ht||T.minFilter!==ec&&T.minFilter!==mo||T.type===tr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===go&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function U(b,T){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",H));const ne=T.source;let ie=v.get(ne);ie===void 0&&(ie={},v.set(ne,ie));const ce=G(T);if(ce!==b.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[ce].usedTimes++;const Me=ie[b.__cacheKey];Me!==void 0&&(ie[b.__cacheKey].usedTimes--,Me.usedTimes===0&&W(T)),b.__cacheKey=ce,b.__webglTexture=ie[ce].texture}return X}function Ae(b,T,X){let ne=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=t.TEXTURE_3D);const ie=U(b,T),ce=T.source;n.bindTexture(ne,b.__webglTexture,t.TEXTURE0+X);const Me=i.get(ce);if(ce.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=w(T)&&E(T.image)===!1;let Y=g(T.image,he,!1,d);Y=jt(T,Y);const me=E(Y)||a,_e=s.convert(T.format,T.colorSpace);let ye=s.convert(T.type),fe=L(T.internalFormat,_e,ye,T.colorSpace);oe(ne,T,me);let ge;const ke=T.mipmaps,Xe=a&&T.isVideoTexture!==!0,st=Me.__version===void 0||ie===!0,D=S(T,Y,me);if(T.isDepthTexture)fe=t.DEPTH_COMPONENT,a?T.type===tr?fe=t.DEPTH_COMPONENT32F:T.type===er?fe=t.DEPTH_COMPONENT24:T.type===ts?fe=t.DEPTH24_STENCIL8:fe=t.DEPTH_COMPONENT16:T.type===tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===rr&&fe===t.DEPTH_COMPONENT&&T.type!==Xg&&T.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=er,ye=s.convert(T.type)),T.format===hs&&fe===t.DEPTH_COMPONENT&&(fe=t.DEPTH_STENCIL,T.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ts,ye=s.convert(T.type))),st&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,fe,Y.width,Y.height):n.texImage2D(t.TEXTURE_2D,0,fe,Y.width,Y.height,0,_e,ye,null));else if(T.isDataTexture)if(ke.length>0&&me){Xe&&st&&n.texStorage2D(t.TEXTURE_2D,D,fe,ke[0].width,ke[0].height);for(let j=0,ee=ke.length;j<ee;j++)ge=ke[j],Xe?n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,_e,ye,ge.data):n.texImage2D(t.TEXTURE_2D,j,fe,ge.width,ge.height,0,_e,ye,ge.data);T.generateMipmaps=!1}else Xe?(st&&n.texStorage2D(t.TEXTURE_2D,D,fe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Y.width,Y.height,_e,ye,Y.data)):n.texImage2D(t.TEXTURE_2D,0,fe,Y.width,Y.height,0,_e,ye,Y.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,fe,ke[0].width,ke[0].height,Y.depth);for(let j=0,ee=ke.length;j<ee;j++)ge=ke[j],T.format!==Nn?_e!==null?Xe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,Y.depth,_e,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,fe,ge.width,ge.height,Y.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,Y.depth,_e,ye,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,fe,ge.width,ge.height,Y.depth,0,_e,ye,ge.data)}else{Xe&&st&&n.texStorage2D(t.TEXTURE_2D,D,fe,ke[0].width,ke[0].height);for(let j=0,ee=ke.length;j<ee;j++)ge=ke[j],T.format!==Nn?_e!==null?Xe?n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,j,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?n.texSubImage2D(t.TEXTURE_2D,j,0,0,ge.width,ge.height,_e,ye,ge.data):n.texImage2D(t.TEXTURE_2D,j,fe,ge.width,ge.height,0,_e,ye,ge.data)}else if(T.isDataArrayTexture)Xe?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,fe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,_e,ye,Y.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,Y.width,Y.height,Y.depth,0,_e,ye,Y.data);else if(T.isData3DTexture)Xe?(st&&n.texStorage3D(t.TEXTURE_3D,D,fe,Y.width,Y.height,Y.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,_e,ye,Y.data)):n.texImage3D(t.TEXTURE_3D,0,fe,Y.width,Y.height,Y.depth,0,_e,ye,Y.data);else if(T.isFramebufferTexture){if(st)if(Xe)n.texStorage2D(t.TEXTURE_2D,D,fe,Y.width,Y.height);else{let j=Y.width,ee=Y.height;for(let ue=0;ue<D;ue++)n.texImage2D(t.TEXTURE_2D,ue,fe,j,ee,0,_e,ye,null),j>>=1,ee>>=1}}else if(ke.length>0&&me){Xe&&st&&n.texStorage2D(t.TEXTURE_2D,D,fe,ke[0].width,ke[0].height);for(let j=0,ee=ke.length;j<ee;j++)ge=ke[j],Xe?n.texSubImage2D(t.TEXTURE_2D,j,0,0,_e,ye,ge):n.texImage2D(t.TEXTURE_2D,j,fe,_e,ye,ge);T.generateMipmaps=!1}else Xe?(st&&n.texStorage2D(t.TEXTURE_2D,D,fe,Y.width,Y.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,ye,Y)):n.texImage2D(t.TEXTURE_2D,0,fe,_e,ye,Y);A(T,me)&&R(ne),Me.__version=ce.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function we(b,T,X){if(T.image.length!==6)return;const ne=U(b,T),ie=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+X);const ce=i.get(ie);if(ie.version!==ce.__version||ne===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!Me&&!he?Y[j]=g(T.image[j],!1,!0,c):Y[j]=he?T.image[j].image:T.image[j],Y[j]=jt(T,Y[j]);const me=Y[0],_e=E(me)||a,ye=s.convert(T.format,T.colorSpace),fe=s.convert(T.type),ge=L(T.internalFormat,ye,fe,T.colorSpace),ke=a&&T.isVideoTexture!==!0,Xe=ce.__version===void 0||ne===!0;let st=S(T,me,_e);oe(t.TEXTURE_CUBE_MAP,T,_e);let D;if(Me){ke&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,ge,me.width,me.height);for(let j=0;j<6;j++){D=Y[j].mipmaps;for(let ee=0;ee<D.length;ee++){const ue=D[ee];T.format!==Nn?ye!==null?ke?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,ue.width,ue.height,ye,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,0,0,ue.width,ue.height,ye,fe,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee,ge,ue.width,ue.height,0,ye,fe,ue.data)}}}else{D=T.mipmaps,ke&&Xe&&(D.length>0&&st++,n.texStorage2D(t.TEXTURE_CUBE_MAP,st,ge,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(he){ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,ye,fe,Y[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ge,Y[j].width,Y[j].height,0,ye,fe,Y[j].data);for(let ee=0;ee<D.length;ee++){const pe=D[ee].image[j].image;ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,pe.width,pe.height,ye,fe,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,ge,pe.width,pe.height,0,ye,fe,pe.data)}}else{ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye,fe,Y[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ge,ye,fe,Y[j]);for(let ee=0;ee<D.length;ee++){const ue=D[ee];ke?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,0,0,ye,fe,ue.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee+1,ge,ye,fe,ue.image[j])}}}A(T,_e)&&R(t.TEXTURE_CUBE_MAP),ce.__version=ie.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ae(b,T,X,ne,ie){const ce=s.convert(X.format,X.colorSpace),Me=s.convert(X.type),he=L(X.internalFormat,ce,Me,X.colorSpace);i.get(T).__hasExternalTextures||(ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,he,T.width,T.height,T.depth,0,ce,Me,null):n.texImage2D(ie,0,he,T.width,T.height,0,ce,Me,null)),n.bindFramebuffer(t.FRAMEBUFFER,b),Ve(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ie,i.get(X).__webglTexture,0,dt(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ie,i.get(X).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(b,T,X){if(t.bindRenderbuffer(t.RENDERBUFFER,b),T.depthBuffer&&!T.stencilBuffer){let ne=t.DEPTH_COMPONENT16;if(X||Ve(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===tr?ne=t.DEPTH_COMPONENT32F:ie.type===er&&(ne=t.DEPTH_COMPONENT24));const ce=dt(T);Ve(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ne,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ne,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(T.depthBuffer&&T.stencilBuffer){const ne=dt(T);X&&Ve(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,T.width,T.height):Ve(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<ne.length;ie++){const ce=ne[ie],Me=s.convert(ce.format,ce.colorSpace),he=s.convert(ce.type),Y=L(ce.internalFormat,Me,he,ce.colorSpace),me=dt(T);X&&Ve(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,Y,T.width,T.height):Ve(T)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,Y,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Y,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,ie=dt(T);if(T.depthTexture.format===rr)Ve(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(T.depthTexture.format===hs)Ve(T)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ve(b){const T=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ge(T.__webglFramebuffer,b)}else if(X){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=t.createRenderbuffer(),Se(T.__webglDepthbuffer[ne],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),Se(T.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(b,T,X){const ne=i.get(b);T!==void 0&&ae(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),X!==void 0&&ve(b)}function vt(b){const T=b.texture,X=i.get(b),ne=i.get(T);b.addEventListener("dispose",z),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=T.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,Me=E(b)||a;if(ie){X.__webglFramebuffer=[];for(let he=0;he<6;he++)X.__webglFramebuffer[he]=t.createFramebuffer()}else{if(X.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const he=b.texture;for(let Y=0,me=he.length;Y<me;Y++){const _e=i.get(he[Y]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ve(b)===!1){const he=ce?T:[T];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const me=he[Y];X.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Y]);const _e=s.convert(me.format,me.colorSpace),ye=s.convert(me.type),fe=L(me.internalFormat,_e,ye,me.colorSpace,b.isXRRenderTarget===!0),ge=dt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,fe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,X.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),oe(t.TEXTURE_CUBE_MAP,T,Me);for(let he=0;he<6;he++)ae(X.__webglFramebuffer[he],b,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he);A(T,Me)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const he=b.texture;for(let Y=0,me=he.length;Y<me;Y++){const _e=he[Y],ye=i.get(_e);n.bindTexture(t.TEXTURE_2D,ye.__webglTexture),oe(t.TEXTURE_2D,_e,Me),ae(X.__webglFramebuffer,b,_e,t.COLOR_ATTACHMENT0+Y,t.TEXTURE_2D),A(_e,Me)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?he=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,ne.__webglTexture),oe(he,T,Me),ae(X.__webglFramebuffer,b,T,t.COLOR_ATTACHMENT0,he),A(T,Me)&&R(he),n.unbindTexture()}b.depthBuffer&&ve(b)}function wt(b){const T=E(b)||a,X=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,ie=X.length;ne<ie;ne++){const ce=X[ne];if(A(ce,T)){const Me=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(ce).__webglTexture;n.bindTexture(Me,he),R(Me),n.unbindTexture()}}}function _t(b){if(a&&b.samples>0&&Ve(b)===!1){const T=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],X=b.width,ne=b.height;let ie=t.COLOR_BUFFER_BIT;const ce=[],Me=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(b),Y=b.isWebGLMultipleRenderTargets===!0;if(Y)for(let me=0;me<T.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<T.length;me++){ce.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&ce.push(Me);const _e=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(_e===!1&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),Y&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[me]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),Y){const ye=i.get(T[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,X,ne,0,0,X,ne,ie,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let me=0;me<T.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const _e=i.get(T[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function dt(b){return Math.min(h,b.samples)}function Ve(b){const T=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function it(b){const T=o.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function jt(b,T){const X=b.colorSpace,ne=b.format,ie=b.type;return b.isCompressedTexture===!0||b.format===Pu||X!==qn&&X!==or&&(X===Ce?a===!1?e.has("EXT_sRGB")===!0&&ne===Nn?(b.format=Pu,b.minFilter=_n,b.generateMipmaps=!1):T=$g.sRGBToLinear(T):(ne!==Nn||ie!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=I,this.resetTextureUnits=K,this.setTexture2D=B,this.setTexture2DArray=le,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Ue,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ve}function J1(t,e,n){const i=n.isWebGL2;function r(s,o=or){let a;if(s===fr)return t.UNSIGNED_BYTE;if(s===Bx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Hx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===kx)return t.BYTE;if(s===Ox)return t.SHORT;if(s===Xg)return t.UNSIGNED_SHORT;if(s===zx)return t.INT;if(s===er)return t.UNSIGNED_INT;if(s===tr)return t.FLOAT;if(s===go)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Gx)return t.ALPHA;if(s===Nn)return t.RGBA;if(s===Vx)return t.LUMINANCE;if(s===Wx)return t.LUMINANCE_ALPHA;if(s===rr)return t.DEPTH_COMPONENT;if(s===hs)return t.DEPTH_STENCIL;if(s===Pu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xx)return t.RED;if(s===jx)return t.RED_INTEGER;if(s===qx)return t.RG;if(s===Yx)return t.RG_INTEGER;if(s===$x)return t.RGBA_INTEGER;if(s===tc||s===nc||s===ic||s===rc)if(o===Ce)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ah||s===lh||s===ch||s===uh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dh||s===fh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===dh)return o===Ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===fh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hh||s===ph||s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Eh||s===Sh||s===Mh||s===wh||s===Th||s===Ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===hh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ph)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_h)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Th)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return o===Ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===sc)return o===Ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zx||s===Ch||s===bh||s===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===sc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ts?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class ew extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ha extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const v=n.getJointPose(x,i),u=this._getHandJoint(c,x);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nw extends cn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:rr,d!==rr&&d!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===rr&&(i=er),i===void 0&&d===hs&&(i=ts),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class iw extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const x=n.getContextAttributes();let v=null,u=null;const m=[],g=[],E=new Set,w=new Map,A=new on;A.layers.enable(1),A.viewport=new At;const R=new on;R.layers.enable(2),R.viewport=new At;const L=[A,R],S=new ew;S.layers.enable(1),S.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=m[V];return Q===void 0&&(Q=new Rc,m[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=m[V];return Q===void 0&&(Q=new Rc,m[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=m[V];return Q===void 0&&(Q=new Rc,m[V]=Q),Q.getHandSpace()};function z(V){const Q=g.indexOf(V.inputSource);if(Q===-1)return;const re=m[Q];re!==void 0&&(re.update(V.inputSource,V.frame,c||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let V=0;V<m.length;V++){const Q=g[V];Q!==null&&(g[V]=null,m[V].disconnect(Q))}M=null,H=null,e.setRenderTarget(v),p=null,f=null,h=null,r=null,u=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:p}),u=new hr(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,re=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=x.stencil?hs:rr,re=x.stencil?ts:er);const U={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(U),r.updateRenderState({layers:[f]}),u=new hr(f.textureWidth,f.textureHeight,{format:Nn,type:fr,depthTexture:new nw(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ae=e.properties.get(u);Ae.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(V){for(let Q=0;Q<V.removed.length;Q++){const re=V.removed[Q],oe=g.indexOf(re);oe>=0&&(g[oe]=null,m[oe].disconnect(re))}for(let Q=0;Q<V.added.length;Q++){const re=V.added[Q];let oe=g.indexOf(re);if(oe===-1){for(let Ae=0;Ae<m.length;Ae++)if(Ae>=g.length){g.push(re),oe=Ae;break}else if(g[Ae]===null){g[Ae]=re,oe=Ae;break}if(oe===-1)break}const U=m[oe];U&&U.connect(re)}}const P=new N,Z=new N;function K(V,Q,re){P.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(re.matrixWorld);const oe=P.distanceTo(Z),U=Q.projectionMatrix.elements,Ae=re.projectionMatrix.elements,we=U[14]/(U[10]-1),ae=U[14]/(U[10]+1),Se=(U[9]+1)/U[5],Ge=(U[9]-1)/U[5],ve=(U[8]-1)/U[0],Ue=(Ae[8]+1)/Ae[0],vt=we*ve,wt=we*Ue,_t=oe/(-ve+Ue),dt=_t*-ve;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(_t),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ve=we+_t,it=ae+_t,jt=vt-dt,b=wt+(oe-dt),T=Se*ae/it*Ve,X=Ge*ae/it*Ve;V.projectionMatrix.makePerspective(jt,b,T,X,Ve,it),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function I(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.near=R.near=A.near=V.near,S.far=R.far=A.far=V.far,(M!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,H=S.far);const Q=V.parent,re=S.cameras;I(S,Q);for(let oe=0;oe<re.length;oe++)I(re[oe],Q);re.length===2?K(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),G(V,S,Q)};function G(V,Q,re){re===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const oe=V.children;for(let U=0,Ae=oe.length;U<Ae;U++)oe[U].updateMatrixWorld(!0);V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Lu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return E};let B=null;function le(V,Q){if(d=Q.getViewerPose(c||o),_=Q,d!==null){const re=d.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let oe=!1;re.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let U=0;U<re.length;U++){const Ae=re[U];let we=null;if(p!==null)we=p.getViewport(Ae);else{const Se=h.getViewSubImage(f,Ae);we=Se.viewport,U===0&&(e.setRenderTargetTextures(u,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(u))}let ae=L[U];ae===void 0&&(ae=new on,ae.layers.enable(U),ae.viewport=new At,L[U]=ae),ae.matrix.fromArray(Ae.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ae.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(we.x,we.y,we.width,we.height),U===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(ae)}}for(let re=0;re<m.length;re++){const oe=g[re],U=m[re];oe!==null&&U!==void 0&&U.update(oe,Q,c||o)}if(B&&B(V,Q),Q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let re=null;for(const oe of E)Q.detectedPlanes.has(oe)||(re===null&&(re=[]),re.push(oe));if(re!==null)for(const oe of re)E.delete(oe),w.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Q.detectedPlanes)if(!E.has(oe))E.add(oe),w.set(oe,Q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const U=w.get(oe);oe.lastChangedTime>U&&(w.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}_=null}const J=new o0;J.setAnimationLoop(le),this.setAnimationLoop=function(V){B=V},this.dispose=function(){}}}function rw(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,n0(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,m,g,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),h(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u)):u.isMeshStandardMaterial?(s(v,u),f(v,u),u.isMeshPhysicalMaterial&&p(v,u,E)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),x(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,m,g):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===Jt&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===Jt&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(v.envMap.value=m,v.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap){v.lightMap.value=u.lightMap;const g=t.useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,v.lightMapTransform)}u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,m,g){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*m,v.scale.value=g*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function h(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function f(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),e.get(u).envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function p(v,u,m){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&v.clearcoatNormalScale.value.negate())),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function x(v,u){const m=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,g){const E=g.program;i.uniformBlockBinding(m,E)}function c(m,g){let E=r[m.id];E===void 0&&(_(m),E=d(m),r[m.id]=E,m.addEventListener("dispose",v));const w=g.program;i.updateUBOMapping(m,w);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function d(m){const g=h();m.__bindingPointIndex=g;const E=t.createBuffer(),w=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const g=r[m.id],E=m.uniforms,w=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,R=E.length;A<R;A++){const L=E[A];if(p(L,A,w)===!0){const S=L.__offset,M=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let z=0;z<M.length;z++){const k=M[z],W=x(k);typeof k=="number"?(L.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,S+H,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=k.elements[0],L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=k.elements[0],L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=k.elements[0]):(k.toArray(L.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,L.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,g,E){const w=m.value;if(E[g]===void 0){if(typeof w=="number")E[g]=w;else{const A=Array.isArray(w)?w:[w],R=[];for(let L=0;L<A.length;L++)R.push(A[L].clone());E[g]=R}return!0}else if(typeof w=="number"){if(E[g]!==w)return E[g]=w,!0}else{const A=Array.isArray(E[g])?E[g]:[E[g]],R=Array.isArray(w)?w:[w];for(let L=0;L<A.length;L++){const S=A[L];if(S.equals(R[L])===!1)return S.copy(R[L]),!0}}return!1}function _(m){const g=m.uniforms;let E=0;const w=16;let A=0;for(let R=0,L=g.length;R<L;R++){const S=g[R],M={boundary:0,storage:0},H=Array.isArray(S.value)?S.value:[S.value];for(let z=0,k=H.length;z<k;z++){const W=H[z],P=x(W);M.boundary+=P.boundary,M.storage+=P.storage}if(S.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,R>0){A=E%w;const z=w-A;A!==0&&z-M.boundary<0&&(E+=w-A,S.__offset=E)}E+=M.storage}return A=E%w,A>0&&(E+=w-A),m.__size=E,m.__cache={},this}function x(m){const g={boundary:0,storage:0};return typeof m=="number"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){const g=m.target;g.removeEventListener("dispose",v);const E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}function ow(){const t=nl("canvas");return t.style.display="block",t}class Ud{constructor(e={}){const{canvas:n=ow(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=null,_=null;const x=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ce,this.useLegacyLights=!0,this.toneMapping=ai,this.toneMappingExposure=1;const u=this;let m=!1,g=0,E=0,w=null,A=-1,R=null;const L=new At,S=new At;let M=null,H=n.width,z=n.height,k=1,W=null,P=null;const Z=new At(0,0,H,z),K=new At(0,0,H,z);let I=!1;const G=new s0;let B=!1,le=!1,J=null;const V=new pt,Q=new N,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return w===null?k:1}let U=i;function Ae(C,O){for(let q=0;q<C.length;q++){const F=C[q],$=n.getContext(F,O);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rd}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&O.shift(),U=Ae(O,C),U===null)throw Ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let we,ae,Se,Ge,ve,Ue,vt,wt,_t,dt,Ve,it,jt,b,T,X,ne,ie,ce,Me,he,Y,me,_e;function ye(){we=new vM(U),ae=new uM(U,we,e),we.init(ae),Y=new J1(U,we,ae),Se=new Z1(U,we,ae),Ge=new yM(U),ve=new k1,Ue=new Q1(U,we,Se,ve,ae,Y,Ge),vt=new fM(u),wt=new gM(u),_t=new Ly(U,ae),me=new lM(U,we,_t,ae),dt=new _M(U,_t,Ge,me),Ve=new wM(U,dt,_t,Ge),ce=new MM(U,ae,Ue),X=new dM(ve),it=new F1(u,vt,wt,we,ae,me,X),jt=new rw(u,ve),b=new z1,T=new X1(we,ae),ie=new aM(u,vt,wt,Se,Ve,f,l),ne=new K1(u,Ve,ae),_e=new sw(U,Ge,ae,Se),Me=new cM(U,we,Ge,ae),he=new xM(U,we,Ge,ae),Ge.programs=it.programs,u.capabilities=ae,u.extensions=we,u.properties=ve,u.renderLists=b,u.shadowMap=ne,u.state=Se,u.info=Ge}ye();const fe=new iw(u,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(C){C!==void 0&&(k=C,this.setSize(H,z,!1))},this.getSize=function(C){return C.set(H,z)},this.setSize=function(C,O,q=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,z=O,n.width=Math.floor(C*k),n.height=Math.floor(O*k),q===!0&&(n.style.width=C+"px",n.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(H*k,z*k).floor()},this.setDrawingBufferSize=function(C,O,q){H=C,z=O,k=q,n.width=Math.floor(C*q),n.height=Math.floor(O*q),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,O,q,F){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,O,q,F),Se.viewport(L.copy(Z).multiplyScalar(k).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,O,q,F){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,O,q,F),Se.scissor(S.copy(K).multiplyScalar(k).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(C){Se.setScissorTest(I=C)},this.setOpaqueSort=function(C){W=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(C=!0,O=!0,q=!0){let F=0;C&&(F|=U.COLOR_BUFFER_BIT),O&&(F|=U.DEPTH_BUFFER_BIT),q&&(F|=U.STENCIL_BUFFER_BIT),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),b.dispose(),T.dispose(),ve.dispose(),vt.dispose(),wt.dispose(),Ve.dispose(),me.dispose(),_e.dispose(),it.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",pe),fe.removeEventListener("sessionend",Ye),J&&(J.dispose(),J=null),$e.stop()};function ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Ge.autoReset,O=ne.enabled,q=ne.autoUpdate,F=ne.needsUpdate,$=ne.type;ye(),Ge.autoReset=C,ne.enabled=O,ne.autoUpdate=q,ne.needsUpdate=F,ne.type=$}function Xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const O=C.target;O.removeEventListener("dispose",st),D(O)}function D(C){j(C),ve.remove(C)}function j(C){const O=ve.get(C).programs;O!==void 0&&(O.forEach(function(q){it.releaseProgram(q)}),C.isShaderMaterial&&it.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,q,F,$,xe){O===null&&(O=re);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,Te=p0(C,O,q,F,$);Se.setMaterial(F,Ee);let be=q.index,Pe=1;F.wireframe===!0&&(be=dt.getWireframeAttribute(q),Pe=2);const Le=q.drawRange,Ie=q.attributes.position;let je=Le.start*Pe,kt=(Le.start+Le.count)*Pe;xe!==null&&(je=Math.max(je,xe.start*Pe),kt=Math.min(kt,(xe.start+xe.count)*Pe)),be!==null?(je=Math.max(je,0),kt=Math.min(kt,be.count)):Ie!=null&&(je=Math.max(je,0),kt=Math.min(kt,Ie.count));const wn=kt-je;if(wn<0||wn===1/0)return;me.setup($,F,Te,q,be);let Bi,lt=Me;if(be!==null&&(Bi=_t.get(be),lt=he,lt.setIndex(Bi)),$.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*oe()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if($.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),Se.setLineWidth(Oe*oe()),$.isLineSegments?lt.setMode(U.LINES):$.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else $.isPoints?lt.setMode(U.POINTS):$.isSprite&&lt.setMode(U.TRIANGLES);if($.isInstancedMesh)lt.renderInstances(je,wn,$.count);else if(q.isInstancedBufferGeometry){const Oe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,wl=Math.min(q.instanceCount,Oe);lt.renderInstances(je,wn,wl)}else lt.render(je,wn)},this.compile=function(C,O){function q(F,$,xe){F.transparent===!0&&F.side===ii&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,bo(F,$,xe),F.side=Fi,F.needsUpdate=!0,bo(F,$,xe),F.side=ii):bo(F,$,xe)}_=T.get(C),_.init(),v.push(_),C.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights(u.useLegacyLights),C.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let xe=0;xe<$.length;xe++){const Ee=$[xe];q(Ee,C,F)}else q($,C,F)}),v.pop(),_=null};let ee=null;function ue(C){ee&&ee(C)}function pe(){$e.stop()}function Ye(){$e.start()}const $e=new o0;$e.setAnimationLoop(ue),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(C){ee=C,fe.setAnimationLoop(C),C===null?$e.stop():$e.start()},fe.addEventListener("sessionstart",pe),fe.addEventListener("sessionend",Ye),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),C.isScene===!0&&C.onBeforeRender(u,C,O,w),_=T.get(C,v.length),_.init(),v.push(_),V.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(V),le=this.localClippingEnabled,B=X.init(this.clippingPlanes,le),p=b.get(C,x.length),p.init(),x.push(p),Pt(C,O,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(W,P),B===!0&&X.beginShadows();const q=_.state.shadowsArray;if(ne.render(q,C,O),B===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,C),_.setupLights(u.useLegacyLights),O.isArrayCamera){const F=O.cameras;for(let $=0,xe=F.length;$<xe;$++){const Ee=F[$];hi(p,C,Ee,Ee.viewport)}}else hi(p,C,O);w!==null&&(Ue.updateMultisampleRenderTarget(w),Ue.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(u,C,O),me.resetDefaultState(),A=-1,R=null,v.pop(),v.length>0?_=v[v.length-1]:_=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Pt(C,O,q,F){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){F&&Q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(V);const Ee=Ve.update(C),Te=C.material;Te.visible&&p.push(C,Ee,Te,q,Q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==Ge.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ge.render.frame);const Ee=Ve.update(C),Te=C.material;if(F&&(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Q.copy(Ee.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(V)),Array.isArray(Te)){const be=Ee.groups;for(let Pe=0,Le=be.length;Pe<Le;Pe++){const Ie=be[Pe],je=Te[Ie.materialIndex];je&&je.visible&&p.push(C,Ee,je,q,Q.z,Ie)}}else Te.visible&&p.push(C,Ee,Te,q,Q.z,null)}}const xe=C.children;for(let Ee=0,Te=xe.length;Ee<Te;Ee++)Pt(xe[Ee],O,q,F)}function hi(C,O,q,F){const $=C.opaque,xe=C.transmissive,Ee=C.transparent;_.setupLightsView(q),B===!0&&X.setGlobalState(u.clippingPlanes,q),xe.length>0&&ot($,xe,O,q),F&&Se.viewport(L.copy(F)),$.length>0&&pn($,O,q),xe.length>0&&pn(xe,O,q),Ee.length>0&&pn(Ee,O,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ot(C,O,q,F){if(J===null){const Te=ae.isWebGL2;J=new hr(1024,1024,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?go:fr,minFilter:mo,samples:Te&&a===!0?4:0})}const $=u.getRenderTarget();u.setRenderTarget(J),u.clear();const xe=u.toneMapping;u.toneMapping=ai,pn(C,q,F),Ue.updateMultisampleRenderTarget(J),Ue.updateRenderTargetMipmap(J);let Ee=!1;for(let Te=0,be=O.length;Te<be;Te++){const Pe=O[Te],Le=Pe.object,Ie=Pe.geometry,je=Pe.material,kt=Pe.group;if(je.side===ii&&Le.layers.test(F.layers)){const wn=je.side;je.side=Jt,je.needsUpdate=!0,zn(Le,q,F,Ie,je,kt),je.side=wn,je.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ue.updateMultisampleRenderTarget(J),Ue.updateRenderTargetMipmap(J)),u.setRenderTarget($),u.toneMapping=xe}function pn(C,O,q){const F=O.isScene===!0?O.overrideMaterial:null;for(let $=0,xe=C.length;$<xe;$++){const Ee=C[$],Te=Ee.object,be=Ee.geometry,Pe=F===null?Ee.material:F,Le=Ee.group;Te.layers.test(q.layers)&&zn(Te,O,q,be,Pe,Le)}}function zn(C,O,q,F,$,xe){C.onBeforeRender(u,O,q,F,$,xe),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(u,O,q,F,C,xe),$.transparent===!0&&$.side===ii&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,u.renderBufferDirect(q,O,F,$,C,xe),$.side=Fi,$.needsUpdate=!0,u.renderBufferDirect(q,O,F,$,C,xe),$.side=ii):u.renderBufferDirect(q,O,F,$,C,xe),C.onAfterRender(u,O,q,F,$,xe)}function bo(C,O,q){O.isScene!==!0&&(O=re);const F=ve.get(C),$=_.state.lights,xe=_.state.shadowsArray,Ee=$.state.version,Te=it.getParameters(C,$.state,xe,O,q),be=it.getProgramCacheKey(Te);let Pe=F.programs;F.environment=C.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(C.isMeshStandardMaterial?wt:vt).get(C.envMap||F.environment),Pe===void 0&&(C.addEventListener("dispose",st),Pe=new Map,F.programs=Pe);let Le=Pe.get(be);if(Le!==void 0){if(F.currentProgram===Le&&F.lightsStateVersion===Ee)return Fd(C,Te),Le}else Te.uniforms=it.getUniforms(C),C.onBuild(q,Te,u),C.onBeforeCompile(Te,u),Le=it.acquireProgram(Te,be),Pe.set(be,Le),F.uniforms=Te.uniforms;const Ie=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=X.uniform),Fd(C,Te),F.needsLights=g0(C),F.lightsStateVersion=Ee,F.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const je=Le.getUniforms(),kt=Pa.seqWithValue(je.seq,Ie);return F.currentProgram=Le,F.uniformsList=kt,Le}function Fd(C,O){const q=ve.get(C);q.outputColorSpace=O.outputColorSpace,q.instancing=O.instancing,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function p0(C,O,q,F,$){O.isScene!==!0&&(O=re),Ue.resetTextureUnits();const xe=O.fog,Ee=F.isMeshStandardMaterial?O.environment:null,Te=w===null?u.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,be=(F.isMeshStandardMaterial?wt:vt).get(F.envMap||Ee),Pe=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!F.normalMap&&!!q.attributes.tangent,Ie=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color,wn=F.toneMapped?u.toneMapping:ai,Bi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Bi!==void 0?Bi.length:0,Oe=ve.get(F),wl=_.state.lights;if(B===!0&&(le===!0||C!==R)){const en=C===R&&F.id===A;X.setState(F,C,en)}let xt=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==wl.state.version||Oe.outputColorSpace!==Te||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==be||F.fog===!0&&Oe.fog!==xe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==X.numPlanes||Oe.numIntersection!==X.numIntersection)||Oe.vertexAlphas!==Pe||Oe.vertexTangents!==Le||Oe.morphTargets!==Ie||Oe.morphNormals!==je||Oe.morphColors!==kt||Oe.toneMapping!==wn||ae.isWebGL2===!0&&Oe.morphTargetsCount!==lt)&&(xt=!0):(xt=!0,Oe.__version=F.version);let Hi=Oe.currentProgram;xt===!0&&(Hi=bo(F,O,$));let kd=!1,Es=!1,Tl=!1;const Ot=Hi.getUniforms(),Gi=Oe.uniforms;if(Se.useProgram(Hi.program)&&(kd=!0,Es=!0,Tl=!0),F.id!==A&&(A=F.id,Es=!0),kd||R!==C){if(Ot.setValue(U,"projectionMatrix",C.projectionMatrix),ae.logarithmicDepthBuffer&&Ot.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),R!==C&&(R=C,Es=!0,Tl=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const en=Ot.map.cameraPosition;en!==void 0&&en.setValue(U,Q.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ot.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&Ot.setValue(U,"viewMatrix",C.matrixWorldInverse)}if($.isSkinnedMesh){Ot.setOptional(U,$,"bindMatrix"),Ot.setOptional(U,$,"bindMatrixInverse");const en=$.skeleton;en&&(ae.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ot.setValue(U,"boneTexture",en.boneTexture,Ue),Ot.setValue(U,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Al=q.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&ae.isWebGL2===!0)&&ce.update($,q,Hi),(Es||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,Ot.setValue(U,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Gi.envMap.value=be,Gi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Es&&(Ot.setValue(U,"toneMappingExposure",u.toneMappingExposure),Oe.needsLights&&m0(Gi,Tl),xe&&F.fog===!0&&jt.refreshFogUniforms(Gi,xe),jt.refreshMaterialUniforms(Gi,F,k,z,J),Pa.upload(U,Oe.uniformsList,Gi,Ue)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Pa.upload(U,Oe.uniformsList,Gi,Ue),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ot.setValue(U,"center",$.center),Ot.setValue(U,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(U,"normalMatrix",$.normalMatrix),Ot.setValue(U,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const en=F.uniformsGroups;for(let Cl=0,v0=en.length;Cl<v0;Cl++)if(ae.isWebGL2){const Od=en[Cl];_e.update(Od,Hi),_e.bind(Od,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function m0(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function g0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,O,q){ve.get(C.texture).__webglTexture=O,ve.get(C.depthTexture).__webglTexture=q;const F=ve.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,O){const q=ve.get(C);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,q=0){w=C,g=O,E=q;let F=!0,$=null,xe=!1,Ee=!1;if(C){const be=ve.get(C);be.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(U.FRAMEBUFFER,null),F=!1):be.__webglFramebuffer===void 0?Ue.setupRenderTarget(C):be.__hasExternalTextures&&Ue.rebindTextures(C,ve.get(C.texture).__webglTexture,ve.get(C.depthTexture).__webglTexture);const Pe=C.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const Le=ve.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?($=Le[O],xe=!0):ae.isWebGL2&&C.samples>0&&Ue.useMultisampledRTT(C)===!1?$=ve.get(C).__webglMultisampledFramebuffer:$=Le,L.copy(C.viewport),S.copy(C.scissor),M=C.scissorTest}else L.copy(Z).multiplyScalar(k).floor(),S.copy(K).multiplyScalar(k).floor(),M=I;if(Se.bindFramebuffer(U.FRAMEBUFFER,$)&&ae.drawBuffers&&F&&Se.drawBuffers(C,$),Se.viewport(L),Se.scissor(S),Se.setScissorTest(M),xe){const be=ve.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,q)}else if(Ee){const be=ve.get(C.texture),Pe=O||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Pe)}A=-1},this.readRenderTargetPixels=function(C,O,q,F,$,xe,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ve.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Se.bindFramebuffer(U.FRAMEBUFFER,Te);try{const be=C.texture,Pe=be.format,Le=be.type;if(Pe!==Nn&&Y.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Le===go&&(we.has("EXT_color_buffer_half_float")||ae.isWebGL2&&we.has("EXT_color_buffer_float"));if(Le!==fr&&Y.convert(Le)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===tr&&(ae.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-F&&q>=0&&q<=C.height-$&&U.readPixels(O,q,F,$,Y.convert(Pe),Y.convert(Le),xe)}finally{const be=w!==null?ve.get(w).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,O,q=0){const F=Math.pow(2,-q),$=Math.floor(O.image.width*F),xe=Math.floor(O.image.height*F);Ue.setTexture2D(O,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,C.x,C.y,$,xe),Se.unbindTexture()},this.copyTextureToTexture=function(C,O,q,F=0){const $=O.image.width,xe=O.image.height,Ee=Y.convert(q.format),Te=Y.convert(q.type);Ue.setTexture2D(q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,C.x,C.y,$,xe,Ee,Te,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,C.x,C.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,F,C.x,C.y,Ee,Te,O.image),F===0&&q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(C,O,q,F,$=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,Te=C.max.z-C.min.z+1,be=Y.convert(F.format),Pe=Y.convert(F.type);let Le;if(F.isData3DTexture)Ue.setTexture3D(F,0),Le=U.TEXTURE_3D;else if(F.isDataArrayTexture)Ue.setTexture2DArray(F,0),Le=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),kt=U.getParameter(U.UNPACK_SKIP_PIXELS),wn=U.getParameter(U.UNPACK_SKIP_ROWS),Bi=U.getParameter(U.UNPACK_SKIP_IMAGES),lt=q.isCompressedTexture?q.mipmaps[0]:q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(Le,$,O.x,O.y,O.z,xe,Ee,Te,be,Pe,lt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Le,$,O.x,O.y,O.z,xe,Ee,Te,be,lt.data)):U.texSubImage3D(Le,$,O.x,O.y,O.z,xe,Ee,Te,be,Pe,lt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,wn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bi),$===0&&F.generateMipmaps&&U.generateMipmap(Le),Se.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ue.setTextureCube(C,0):C.isData3DTexture?Ue.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ue.setTexture2DArray(C,0):Ue.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){g=0,E=0,w=null,Se.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ce?sr:jg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Ce:qn}}class aw extends Ud{}aw.prototype.isWebGL1Renderer=!0;class d0 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $s extends xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gp=new N,vp=new N,_p=new pt,Pc=new Pd,pa=new To;class La extends Vt{constructor(e=new St,n=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)gp.fromBufferAttribute(n,r-1),vp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=gp.distanceTo(vp);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;_p.copy(r).invert(),Pc.copy(e.ray).applyMatrix4(_p);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,d=new N,h=new N,f=new N,p=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let g=u,E=m-1;g<E;g+=p){const w=_.getX(g),A=_.getX(g+1);if(c.fromBufferAttribute(v,w),d.fromBufferAttribute(v,A),Pc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||n.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(v.count,o.start+o.count);for(let g=u,E=m-1;g<E;g+=p){if(c.fromBufferAttribute(v,g),d.fromBufferAttribute(v,g+1),Pc.distanceSqToSegment(c,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||n.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Id extends xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xp=new pt,Uu=new Pd,ma=new To,ga=new N;class f0 extends Vt{constructor(e=new St,n=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),ma.radius+=s,e.ray.intersectsSphere(ma)===!1)return;xp.copy(r).invert(),Uu.copy(e.ray).applyMatrix4(xp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,x=p;_<x;_++){const v=c.getX(_);ga.fromBufferAttribute(h,v),yp(ga,v,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,x=p;_<x;_++)ga.fromBufferAttribute(h,_),yp(ga,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yp(t,e,n,i,r,s,o){const a=Uu.distanceSqToPoint(t);if(a<n){const l=new N;Uu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Co extends St{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const g=new N,E=new N,w=new N;for(let A=0;A<n.length;A+=3)p(n[A+0],g),p(n[A+1],E),p(n[A+2],w),l(g,E,w,m)}function l(m,g,E,w){const A=w+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const S=m.clone().lerp(E,L/A),M=g.clone().lerp(E,L/A),H=A-L;for(let z=0;z<=H;z++)z===0&&L===A?R[L][z]=S:R[L][z]=S.clone().lerp(M,z/H)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){const M=Math.floor(S/2);S%2===0?(f(R[L][M+1]),f(R[L+1][M]),f(R[L][M])):(f(R[L][M+1]),f(R[L+1][M+1]),f(R[L+1][M]))}}function c(m){const g=new N;for(let E=0;E<s.length;E+=3)g.x=s[E+0],g.y=s[E+1],g.z=s[E+2],g.normalize().multiplyScalar(m),s[E+0]=g.x,s[E+1]=g.y,s[E+2]=g.z}function d(){const m=new N;for(let g=0;g<s.length;g+=3){m.x=s[g+0],m.y=s[g+1],m.z=s[g+2];const E=v(m)/2/Math.PI+.5,w=u(m)/Math.PI+.5;o.push(E,1-w)}_(),h()}function h(){for(let m=0;m<o.length;m+=6){const g=o[m+0],E=o[m+2],w=o[m+4],A=Math.max(g,E,w),R=Math.min(g,E,w);A>.9&&R<.1&&(g<.2&&(o[m+0]+=1),E<.2&&(o[m+2]+=1),w<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,g){const E=m*3;g.x=e[E+0],g.y=e[E+1],g.z=e[E+2]}function _(){const m=new N,g=new N,E=new N,w=new N,A=new qe,R=new qe,L=new qe;for(let S=0,M=0;S<s.length;S+=9,M+=6){m.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),E.set(s[S+6],s[S+7],s[S+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),w.copy(m).add(g).add(E).divideScalar(3);const H=v(w);x(A,M+0,m,H),x(R,M+2,g,H),x(L,M+4,E,H)}}function x(m,g,E,w){w<0&&m.x===1&&(o[g]=m.x-1),E.x===0&&E.z===0&&(o[g]=w/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.vertices,e.indices,e.radius,e.details)}}class il extends Co{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new il(e.radius,e.detail)}}class Ks extends Co{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ks(e.radius,e.detail)}}class Nd extends St{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new N,f=new N,p=[],_=[],x=[],v=[];for(let u=0;u<=i;u++){const m=[],g=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let w=0;w<=n;w++){const A=w/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),v.push(A+E,1-g),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const g=d[u][m+1],E=d[u][m],w=d[u+1][m],A=d[u+1][m+1];(u!==0||o>0)&&p.push(g,E,A),(u!==i-1||l<Math.PI)&&p.push(E,w,A)}this.setIndex(p),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(x,3)),this.setAttribute("uv",new bt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rl extends Co{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new rl(e.radius,e.detail)}}class sl extends St{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,h=new N,f=new N;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const x=_/r*s,v=p/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(x),h.y=(e+n*Math.cos(v))*Math.sin(x),h.z=n*Math.sin(v),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,v=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,m=(r+1)*p+_;o.push(x,v,m),o.push(v,u,m)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);function lw(){const t=ze.useRef(null);return ze.useEffect(()=>{const e=t.current,n=new Ud({canvas:e,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(devicePixelRatio,2)),n.setSize(innerWidth,innerHeight);const i=new d0,r=new on(60,innerWidth/innerHeight,.1,1e3);r.position.z=32;const s=4200,o=new St,a=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),d=[new He(58879),new He(8141549),new He(10980346),new He(16096779),new He(16777215)];for(let M=0;M<s;M++){a[M*3]=(Math.random()-.5)*120,a[M*3+1]=(Math.random()-.5)*80,a[M*3+2]=(Math.random()-.5)*60,c[M*3]=(Math.random()-.5)*.005,c[M*3+1]=(Math.random()-.5)*.005,c[M*3+2]=0;const H=d[Math.floor(Math.random()*d.length)];l[M*3]=H.r*.6,l[M*3+1]=H.g*.6,l[M*3+2]=H.b*.6}o.setAttribute("position",new un(a,3)),o.setAttribute("color",new un(l,3));const h=new Id({size:.22,vertexColors:!0,transparent:!0,opacity:.75,sizeAttenuation:!0}),f=new f0(o,h);i.add(f);const p=new yn(new sl(6,.04,8,80),new is({color:58879,transparent:!0,opacity:.08}));p.position.z=5,i.add(p);const _=new yn(new sl(9,.03,8,80),new is({color:8141549,transparent:!0,opacity:.05}));_.position.z=5,i.add(_);const x=[];[{G:new Ks(1.4,0),c:58879,o:.18,p:[-13,4,4],s:.003},{G:new rl(1.1,0),c:8141549,o:.14,p:[14,-3,2],s:.005},{G:new il(1,0),c:47316,o:.12,p:[5,9,-1],s:.004},{G:new Ks(.9,0),c:10980346,o:.1,p:[-9,-7,-3],s:.006},{G:new il(.7,0),c:16096779,o:.09,p:[11,5,-6],s:.003},{G:new rl(1.5,0),c:58879,o:.07,p:[-4,11,2],s:.002},{G:new Ks(.6,0),c:10980346,o:.08,p:[18,1,0],s:.007}].forEach(M=>{const H=new yn(M.G,new is({color:M.c,wireframe:!0,transparent:!0,opacity:M.o}));H.position.set(...M.p),H.userData={s:M.s,off:Math.random()*Math.PI*2,base:M.p.slice()},i.add(H),x.push(H)});const u=[],m=[];for(let M=0;M<200;M++){const H=M/200*Math.PI*8;u.push(new N(Math.cos(H)*3+20,M*.1-10,Math.sin(H)*3-5)),m.push(new N(Math.cos(H+Math.PI)*3+20,M*.1-10,Math.sin(H+Math.PI)*3-5))}i.add(new La(new St().setFromPoints(u),new $s({color:58879,transparent:!0,opacity:.13}))),i.add(new La(new St().setFromPoints(m),new $s({color:8141549,transparent:!0,opacity:.1})));for(let M=0;M<28;M++){const H=new N((Math.random()-.5)*70,(Math.random()-.5)*50,(Math.random()-.5)*20),z=new N((Math.random()-.5)*70,(Math.random()-.5)*50,(Math.random()-.5)*20);i.add(new La(new St().setFromPoints([H,z]),new $s({color:58879,transparent:!0,opacity:.035})))}let g=0,E=0;const w=M=>{g=(M.clientX/innerWidth-.5)*2,E=-(M.clientY/innerHeight-.5)*2};window.addEventListener("mousemove",w);let A=0,R;function L(){R=requestAnimationFrame(L),A+=.005;const M=o.attributes.position.array;for(let z=0;z<s;z++)M[z*3]+=c[z*3],M[z*3+1]+=c[z*3+1],Math.abs(M[z*3])>60&&(c[z*3]*=-1),Math.abs(M[z*3+1])>40&&(c[z*3+1]*=-1);o.attributes.position.needsUpdate=!0,f.rotation.y=A*.03+g*.06,f.rotation.x=E*.04;const H=1+Math.sin(A*1.2)*.04;p.scale.set(H,H,1),_.scale.set(1+Math.sin(A*.8+1)*.05,1+Math.sin(A*.8+1)*.05,1),p.rotation.z=A*.2,_.rotation.z=-A*.15,p.material.opacity=.05+Math.sin(A)*.04,_.material.opacity=.03+Math.sin(A*.7)*.03,r.position.x+=(g*4-r.position.x)*.04,r.position.y+=(E*2.5-r.position.y)*.04,x.forEach(z=>{z.rotation.x+=z.userData.s,z.rotation.y+=z.userData.s*1.4,z.position.y=z.userData.base[1]+Math.sin(A*.9+z.userData.off)*.8,z.position.x=z.userData.base[0]+Math.cos(A*.5+z.userData.off)*.3}),n.render(i,r)}L();const S=()=>{n.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()};return window.addEventListener("resize",S),()=>{cancelAnimationFrame(R),window.removeEventListener("mousemove",w),window.removeEventListener("resize",S),n.dispose()}},[]),y.createElement("canvas",{ref:t,id:"hero-canvas"})}function cw(){const t=ze.useRef(null);return ze.useEffect(()=>{const e=document.getElementById("how"),n=t.current,i=e.offsetWidth,r=Math.max(e.offsetHeight,700),s=new Ud({canvas:n,antialias:!0,alpha:!0});s.setPixelRatio(Math.min(devicePixelRatio,1.5)),s.setSize(i,r);const o=new d0,a=new on(50,i/r,.1,500);a.position.z=28;const l=[[0],[1,2,3],[4,5,6,7],[8,9,10],[11]],c=[],d=[],h=[58879,8141549,10980346,47316,58879];l.forEach((m,g)=>{const E=(g-2)*5;m.forEach((w,A)=>{const R=(A-(m.length-1)/2)*3.2;c[w]={x:E,y:R,z:0};const L=new yn(new Nd(.3,12,12),new is({color:h[g],transparent:!0,opacity:.7}));L.position.set(E,R,-5),o.add(L),d.push(L)})});const f=[];[[0,1],[0,2],[0,3],[1,4],[1,5],[2,4],[2,5],[2,6],[3,5],[3,6],[3,7],[4,8],[4,9],[5,8],[5,9],[5,10],[6,9],[6,10],[7,10],[8,11],[9,11],[10,11]].forEach(([m,g])=>{const E=c[m],w=c[g];if(!E||!w)return;const A=new $s({color:58879,transparent:!0,opacity:.08});o.add(new La(new St().setFromPoints([new N(E.x,E.y,-5),new N(w.x,w.y,-5)]),A)),f.push(A)});const p=new St,_=new Float32Array(900*3);for(let m=0;m<900;m++)_[m*3]=(Math.random()-.5)*70,_[m*3+1]=(Math.random()-.5)*50,_[m*3+2]=(Math.random()-.5)*20-10;p.setAttribute("position",new un(_,3)),o.add(new f0(p,new Id({size:.12,color:58879,transparent:!0,opacity:.28})));let x=0,v;function u(){v=requestAnimationFrame(u),x+=.008,d.forEach((m,g)=>{m.material.opacity=.5+Math.sin(x*1.5+g*.8)*.25,m.scale.setScalar(1+Math.sin(x*2+g)*.1)}),f.forEach((m,g)=>{m.opacity=.04+Math.sin(x*1.2+g*.5)*.06}),o.rotation.y=Math.sin(x*.3)*.15,s.render(o,a)}return u(),()=>{cancelAnimationFrame(v),s.dispose()}},[]),y.createElement("canvas",{ref:t,id:"how-canvas"})}const h0="http://localhost:5000",uw=async t=>{try{const e=await fetch(`${h0}/api/enrollment/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const n=await e.json();throw new Error(n.message||"Failed to submit enrollment")}return await e.json()}catch(e){throw console.error("Enrollment submission error:",e),e}},dw=async t=>{try{const e=await fetch(`${h0}/api/enrollment/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:t.fullName,email:t.email,phone:t.phone,courseName:`Service: ${t.serviceName}`,experience:`Budget: ${t.budget} | Description: ${t.description}`})});if(!e.ok){const n=await e.json();throw new Error(n.message||"Failed to submit inquiry")}return await e.json()}catch(e){throw console.error("Inquiry submission error:",e),e}};function fw({isOpen:t,mode:e,item:n,onClose:i}){const[r,s]=ze.useState({fullName:"",email:"",phone:"",experience:"beginner",budget:"₹10,000 - ₹50,000",description:""}),[o,a]=ze.useState(!1),[l,c]=ze.useState(null);ze.useEffect(()=>{s({fullName:"",email:"",phone:"",experience:"beginner",budget:"₹10,000 - ₹50,000",description:""}),c(null)},[n,e]);const d=p=>{const{name:_,value:x}=p.target;s(v=>({...v,[_]:x}))},h=p=>{if(p.preventDefault(),c(null),!r.fullName.trim()){c({type:"error",msg:"Please enter your name."});return}if(!r.email.includes("@")||!r.email.includes(".")){c({type:"error",msg:"Please enter a valid email address."});return}if(!r.phone.match(/^\d{10}$/)){c({type:"error",msg:"Please enter a valid 10-digit phone number."});return}if(e==="services"&&!r.description.trim()){c({type:"error",msg:"Please describe your project briefly."});return}a(!0),e==="services"?dw({fullName:r.fullName,email:r.email,phone:r.phone,serviceName:n.name,budget:r.budget,description:r.description}).then(()=>{a(!1),c({type:"success",msg:"Inquiry Sent! We will contact you within 24 hours."}),setTimeout(()=>{i()},2200)}).catch(_=>{a(!1),c({type:"error",msg:_.message||"Failed to submit inquiry. Please try again."})}):uw({fullName:r.fullName,email:r.email,phone:r.phone,courseName:n.name,experience:r.experience}).then(()=>{a(!1),c({type:"success",msg:"Registered !!! Check your inbox for next steps."}),setTimeout(()=>{i()},2200)}).catch(_=>{a(!1),c({type:"error",msg:_.message||"Failed to register. Please try again."})})};if(!t||!n)return null;const f=e==="services";return y.createElement("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(10, 14, 26, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,backdropFilter:"blur(12px)"}},y.createElement("div",{style:{background:"var(--ink)",border:f?"0.5px solid var(--border)":"0.5px solid var(--border2)",borderRadius:"24px",padding:"2.5rem",maxWidth:"500px",width:"90%",maxHeight:"90vh",overflowY:"auto",position:"relative",boxShadow:f?"0 20px 50px rgba(0, 229, 255, 0.15)":"0 20px 50px rgba(124, 58, 237, 0.15)",animation:"fadeUp 0.3s ease-out"}},y.createElement("button",{onClick:i,style:{position:"absolute",top:"1.5rem",right:"1.5rem",background:"rgba(255, 255, 255, 0.05)",border:"none",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:p=>p.currentTarget.style.background="rgba(255, 255, 255, 0.15)",onMouseLeave:p=>p.currentTarget.style.background="rgba(255, 255, 255, 0.05)"},y.createElement(zg,{size:20,color:"var(--text)"})),y.createElement("div",{style:{marginBottom:"1.5rem"}},y.createElement("span",{style:{fontSize:"0.72rem",letterSpacing:"0.15em",textTransform:"uppercase",color:f?"var(--cyan)":"var(--violet2)",fontWeight:"700"}},f?"BrAInix Services Hub":"BrAInix Academy"),y.createElement("h2",{style:{fontFamily:"var(--fh)",fontSize:"1.8rem",fontWeight:"800",marginTop:"0.4rem",marginBottom:"0.5rem",color:"var(--text)"}},f?`Inquire: ${n.name}`:`Enroll: ${n.name}`),y.createElement("p",{style:{color:"var(--text2)",fontSize:"0.92rem",fontWeight:"300"}},f?"Share your project goals below, and we'll engineer a customized blueprint and timeline.":"Register below to secure your workspace and receive step-by-step onboarding details.")),y.createElement("form",{onSubmit:h,style:{marginBottom:"1rem"}},y.createElement("div",{style:{marginBottom:"1.2rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Full Name *"),y.createElement("input",{type:"text",name:"fullName",value:r.fullName,onChange:d,placeholder:"e.g. John Doe",style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box"},onFocus:p=>{p.target.style.borderColor=f?"var(--cyan)":"var(--violet2)",p.target.style.boxShadow=f?"0 0 0 3px rgba(0, 229, 255, 0.1)":"0 0 0 3px rgba(124, 58, 237, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}})),y.createElement("div",{style:{marginBottom:"1.2rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Email *"),y.createElement("input",{type:"email",name:"email",value:r.email,onChange:d,placeholder:"e.g. john@company.com",style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box"},onFocus:p=>{p.target.style.borderColor=f?"var(--cyan)":"var(--violet2)",p.target.style.boxShadow=f?"0 0 0 3px rgba(0, 229, 255, 0.1)":"0 0 0 3px rgba(124, 58, 237, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}})),y.createElement("div",{style:{marginBottom:"1.2rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Phone Number *"),y.createElement("input",{type:"tel",name:"phone",value:r.phone,onChange:d,placeholder:"e.g. 9876543210",style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box"},onFocus:p=>{p.target.style.borderColor=f?"var(--cyan)":"var(--violet2)",p.target.style.boxShadow=f?"0 0 0 3px rgba(0, 229, 255, 0.1)":"0 0 0 3px rgba(124, 58, 237, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}})),f?y.createElement(y.Fragment,null,y.createElement("div",{style:{marginBottom:"1.2rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Estimated Budget *"),y.createElement("select",{name:"budget",value:r.budget,onChange:d,style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box",cursor:"pointer"},onFocus:p=>{p.target.style.borderColor="var(--cyan)",p.target.style.boxShadow="0 0 0 3px rgba(0, 229, 255, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}},y.createElement("option",{value:"Under ₹50,000",style:{background:"var(--ink2)"}},"Under ₹50,000"),y.createElement("option",{value:"₹50,000 - ₹1,00,000",style:{background:"var(--ink2)"}},"₹50,000 - ₹1,00,000"),y.createElement("option",{value:"₹1,00,000 - ₹2,50,000",style:{background:"var(--ink2)"}},"₹1,00,000 - ₹2,50,000"),y.createElement("option",{value:"₹2,50,000+",style:{background:"var(--ink2)"}},"₹2,50,000+ (Enterprise)"))),y.createElement("div",{style:{marginBottom:"1.5rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Project Overview & Requirements *"),y.createElement("textarea",{name:"description",value:r.description,onChange:d,rows:4,placeholder:"Tell us about your brand, functional pages needed, timelines, reference websites, etc.",style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box",resize:"vertical"},onFocus:p=>{p.target.style.borderColor="var(--cyan)",p.target.style.boxShadow="0 0 0 3px rgba(0, 229, 255, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}}))):y.createElement("div",{style:{marginBottom:"1.5rem"}},y.createElement("label",{style:{display:"block",color:"var(--text)",fontSize:"0.85rem",fontWeight:"500",marginBottom:"0.4rem"}},"Experience Level"),y.createElement("select",{name:"experience",value:r.experience,onChange:d,style:{width:"100%",padding:"0.75rem 1rem",background:"rgba(255, 255, 255, 0.03)",border:"0.5px solid rgba(255, 255, 255, 0.12)",borderRadius:"12px",color:"var(--text)",fontFamily:"var(--fb)",fontSize:"0.95rem",outline:"none",transition:"all 0.2s",boxSizing:"border-box",cursor:"pointer"},onFocus:p=>{p.target.style.borderColor="var(--violet2)",p.target.style.boxShadow="0 0 0 3px rgba(124, 58, 237, 0.1)"},onBlur:p=>{p.target.style.borderColor="rgba(255, 255, 255, 0.12)",p.target.style.boxShadow="none"}},y.createElement("option",{value:"beginner",style:{background:"var(--ink2)"}},"Beginner (No coding experience)"),y.createElement("option",{value:"intermediate",style:{background:"var(--ink2)"}},"Intermediate (Builds basic projects)"),y.createElement("option",{value:"advanced",style:{background:"var(--ink2)"}},"Advanced (Working professional)"))),y.createElement("button",{type:"submit",disabled:o,style:{width:"100%",padding:"0.85rem 1.5rem",background:o?"rgba(255, 255, 255, 0.1)":f?"linear-gradient(135deg, var(--cyan), var(--violet))":"linear-gradient(135deg, var(--violet), var(--gold))",color:o?"var(--muted)":"#000",fontFamily:"var(--fh)",fontWeight:"700",fontSize:"1rem",border:"none",borderRadius:"100px",cursor:o?"not-allowed":"pointer",transition:"all 0.25s",boxShadow:o?"none":f?"0 4px 15px rgba(0, 229, 255, 0.3)":"0 4px 15px rgba(124, 58, 237, 0.3)"},onMouseEnter:p=>{o||(p.currentTarget.style.transform="translateY(-2px)",p.currentTarget.style.boxShadow=f?"0 6px 20px rgba(0, 229, 255, 0.5)":"0 6px 20px rgba(124, 58, 237, 0.5)")},onMouseLeave:p=>{o||(p.currentTarget.style.transform="translateY(0)",p.currentTarget.style.boxShadow=f?"0 4px 15px rgba(0, 229, 255, 0.3)":"0 4px 15px rgba(124, 58, 237, 0.3)")}},o?"Sending Project Blueprint...":f?"Request Service Blueprint":"Complete Registration")),l&&y.createElement("div",{style:{borderRadius:"12px",padding:"1rem 1.2rem",fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.8rem",background:l.type==="success"?"rgba(0, 229, 255, 0.1)":"rgba(239, 68, 68, 0.1)",border:l.type==="success"?"0.5px solid var(--cyan)":"0.5px solid #EF4444",color:l.type==="success"?"var(--cyan)":"#FCA5A5",marginTop:"1.2rem"}},l.type==="success"?y.createElement(Y_,{size:18}):y.createElement(V_,{size:18}),y.createElement("span",null,l.msg))))}function hw(){const t=ze.useRef(null),e=ze.useRef(null),n=ze.useRef(null),i=ze.useRef([]),r=ze.useRef(0),s=ze.useRef(0),o=ze.useRef(0),a=ze.useRef(0),l=ze.useRef(null);return ze.useEffect(()=>{const d=[];for(let v=0;v<14;v++){const u=document.createElement("div");u.className="trail";const m=1-v/14,g=Math.max(2,6*m);u.style.cssText=`width:${g}px;height:${g}px;opacity:${m*.55};background:hsl(${185+v*9},100%,${55+v*2}%)`,document.body.appendChild(u),d.push({el:u,x:0,y:0})}i.current=d;const h=v=>{r.current=v.clientX,s.current=v.clientY},f=()=>{var v;return(v=t.current)==null?void 0:v.classList.add("cursor-click")},p=()=>{var v;return(v=t.current)==null?void 0:v.classList.remove("cursor-click")};document.addEventListener("mousemove",h),document.addEventListener("mousedown",f),document.addEventListener("mouseup",p),document.querySelectorAll("button,a,.course-card,.feature-card,.test-card,.step,.pillar-card,.cta-card").forEach(v=>{v.addEventListener("mouseenter",()=>{var u;return(u=t.current)==null?void 0:u.classList.add("cursor-hover")}),v.addEventListener("mouseleave",()=>{var u;return(u=t.current)==null?void 0:u.classList.remove("cursor-hover")})});function x(){o.current+=(r.current-o.current)*.12,a.current+=(s.current-a.current)*.12,e.current&&(e.current.style.left=r.current+"px",e.current.style.top=s.current+"px"),n.current&&(n.current.style.left=o.current+"px",n.current.style.top=a.current+"px");let v=r.current,u=s.current;i.current.forEach(m=>{m.x+=(v-m.x)*.26,m.y+=(u-m.y)*.26,m.el.style.left=m.x+"px",m.el.style.top=m.y+"px",v=m.x,u=m.y}),l.current=requestAnimationFrame(x)}return x(),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",f),document.removeEventListener("mouseup",p),cancelAnimationFrame(l.current),d.forEach(v=>v.el.remove())}},[]),{cursorRef:t,dotRef:e,outerRef:n}}function pw(t,e,n){ze.useEffect(()=>{const i=new IntersectionObserver(r=>{r.forEach(s=>{var o;if(s.isIntersecting){const l=Array.from(((o=s.target.parentElement)==null?void 0:o.children)||[]).indexOf(s.target);setTimeout(()=>s.target.classList.add("vis"),l*80),i.unobserve(s.target)}})},{threshold:.01});return document.querySelectorAll(".reveal").forEach(r=>{r.classList.remove("vis"),i.observe(r)}),()=>i.disconnect()},[t,e,n])}const mw=[{icon:y.createElement(Dg,{size:22}),cls:"ic-cyan",title:"Adaptive AI Curriculum",text:"Our neural engine maps your knowledge graph in real time, surfacing exactly what you need to learn next — no wasted effort."},{icon:y.createElement(ox,{size:22}),cls:"ic-violet",title:"Live Mentor Sessions",text:"Connect with industry practitioners for live 1-on-1 or cohort-based sessions. Real feedback, real breakthroughs."},{icon:y.createElement(Q_,{size:22}),cls:"ic-gold",title:"Immersive 3D Labs",text:"Hands-on practice in interactive 3D environments — from data science sandboxes to virtual engineering labs."},{icon:y.createElement(X_,{size:22}),cls:"ic-cyan",title:"Progress Intelligence",text:"Detailed analytics on your learning velocity, retention rates, and skill mastery — visualized beautifully, acted on instantly."},{icon:y.createElement(Lg,{size:22}),cls:"ic-violet",title:"Verified Credentials",text:"Industry-recognized certificates anchored to blockchain — fraud-proof, globally verifiable, and career-defining."},{icon:y.createElement(Og,{size:22}),cls:"ic-gold",title:"Peer Learning Networks",text:"Collaborative spaces where learners co-build projects, share insights, and accelerate each other's growth."}],gw=[{icon:y.createElement(j_,{size:52,color:"#00E5FF",strokeWidth:1.2}),thumb:"t-cyan",badge:"Most Popular",tags:[{l:"AI & ML"},{l:"Beginner"}],name:"AI/ML Fundamentals",desc:"Master machine learning algorithms, neural networks, and AI concepts from scratch.",price:"₹1000",meta:"40 hrs · 15 projects",priceColor:"var(--cyan)"},{icon:y.createElement(K_,{size:52,color:"#A78BFA",strokeWidth:1.2}),thumb:"t-violet",badge:"Trending",tags:[{l:"Python",cls:"v"},{l:"Beginner",cls:"v"}],name:"Python Essentials",desc:"Learn Python programming fundamentals, data structures, and best practices.",price:"₹1000",meta:"35 hrs · 12 projects",priceColor:"var(--violet2)"},{icon:y.createElement(Ug,{size:52,color:"#F59E0B",strokeWidth:1.2}),thumb:"t-gold",badge:"New",tags:[{l:"FullStack",cls:"g"},{l:"Intermediate",cls:"g"}],name:"Python FullStack Web Dev",desc:"Build complete web applications with Python, databases, and frontend frameworks.",price:"₹1000",meta:"56 hrs · 20 projects",priceColor:"var(--gold)"},{icon:y.createElement(Ig,{size:52,color:"#00E5FF",strokeWidth:1.2}),thumb:"t-cyan",badge:"Popular",tags:[{l:"Java",cls:""},{l:"Intermediate"}],name:"Core Java Programming",desc:"Advanced Java concepts, OOP principles, and enterprise-level development.",price:"₹1000",meta:"48 hrs · 18 projects",priceColor:"var(--cyan)"},{icon:y.createElement(tx,{size:52,color:"#A78BFA",strokeWidth:1.2}),thumb:"t-violet",badge:"Trending",tags:[{l:"MERN",cls:"v"},{l:"Advanced",cls:"v"}],name:"MERN Stack Development",desc:"Build scalable applications with MongoDB, Express, React, and Node.js.",price:"₹1000",meta:"60 hrs · 25 projects",priceColor:"var(--violet2)"},{icon:y.createElement(sx,{size:52,color:"#F59E0B",strokeWidth:1.2}),thumb:"t-gold",badge:"New",tags:[{l:"IoT",cls:"g"},{l:"Advanced",cls:"g"}],name:"IoT & Embedded Systems",desc:"Create connected devices, sensors, and real-time data processing systems.",price:"₹1000",meta:"50 hrs · 16 projects",priceColor:"var(--gold)"},{icon:y.createElement(Z_,{size:52,color:"#00E5FF",strokeWidth:1.2}),thumb:"t-cyan",badge:"Essential",tags:[{l:"DSA",cls:""},{l:"Intermediate"}],name:"Data Structures & Algorithms",desc:"Master DSA concepts for coding interviews and optimal problem-solving.",price:"₹1000",meta:"45 hrs · 20 projects",priceColor:"var(--cyan)"}],vw=[{icon:y.createElement(Dg,{size:16}),title:"Discover Your Path",text:"Take our 5-min skill assessment. Our AI builds a personalized roadmap tailored to your goals."},{icon:y.createElement(Ug,{size:16}),title:"Learn Through Doing",text:"Interactive labs, real projects, and live mentor feedback — not just videos and quizzes."},{icon:y.createElement(Lg,{size:16}),title:"Track & Adapt",text:"Weekly AI-driven progress reports surface exactly where to focus next, keeping you sharp."},{icon:y.createElement(Og,{size:16}),title:"Earn & Launch",text:"Graduate with a verified certificate and connections to our 500+ hiring partner network."}],_w=[{num:"52",label:"Active Learners"},{num:"95%",label:"Completion Rate"},{num:"7",label:"Expert Courses"},{num:"4.9★",label:"Avg. Rating"}],xw=[{icon:y.createElement(J_,{size:52,color:"#00E5FF",strokeWidth:1.2}),thumb:"t-cyan",badge:"Core Service",tags:[{l:"Web Development"},{l:"Next.js & React"}],name:"Custom Web Development",desc:"Bespoke, blazingly fast websites, SaaS platforms, and dynamic web portals designed with rich aesthetics and peak responsiveness.",price:"Custom Quote",meta:"Figma design · Clean code · SEO ready",priceColor:"var(--cyan)"},{icon:y.createElement(kg,{size:52,color:"#A78BFA",strokeWidth:1.2}),thumb:"t-violet",badge:"DevOps & Cloud",tags:[{l:"Deployment",cls:"v"},{l:"AWS/GCP/Vercel",cls:"v"}],name:"Production Deployment",desc:"Seamless, high-performance cloud deployment. Multi-environment architecture, CI/CD automation pipelines, SSL, and robust scalability setups.",price:"Custom Quote",meta:"Zero downtime · Dockerized · Monitoring",priceColor:"var(--violet2)"},{icon:y.createElement(Fg,{size:52,color:"#F59E0B",strokeWidth:1.2}),thumb:"t-gold",badge:"Brand Identity",tags:[{l:"Logo & UI Design",cls:"g"},{l:"Vector Graphics",cls:"g"}],name:"Logo & Creative Identity",desc:"Luxury visual identity systems, vector brandmarks, stationery, and cohesive layout guidelines tailored to make your company stand out.",price:"Custom Quote",meta:"3 initial drafts · Brand manual · Source files",priceColor:"var(--gold)"},{icon:y.createElement(bd,{size:52,color:"#00E5FF",strokeWidth:1.2}),thumb:"t-cyan",badge:"Custom APIs",tags:[{l:"Backend Systems"},{l:"Automation"}],name:"Custom Web & API Solutions",desc:"Robust, custom-engineered APIs, backend scraping architectures, database designs, automated workflows, and complex system integrations.",price:"Custom Quote",meta:"GraphQL/REST · High security · PostgreSQL/Mongo",priceColor:"var(--cyan)"}],yw=[{icon:y.createElement(Ra,{size:22}),cls:"ic-cyan",title:"Premium Visuals",text:"We craft immersive designs incorporating glassmorphism, tailored gradients, and premium modern typography to capture attention."},{icon:y.createElement(bd,{size:22}),cls:"ic-violet",title:"State-of-the-Art Code",text:"Highly optimized React/Next.js/Node architectures. Clean, modular codebases designed to be easily extensible."},{icon:y.createElement(rx,{size:22}),cls:"ic-gold",title:"Enterprise Security",text:"Robust protection against web vulnerabilities. Encrypted databases, secure environment keys, and safe server configurations."},{icon:y.createElement(G_,{size:22}),cls:"ic-cyan",title:"Performance Tuning",text:"Core Web Vitals optimization, lazy loading, lightweight styling rules, and serverless architectures for maximum speed."},{icon:y.createElement(Ng,{size:22}),cls:"ic-violet",title:"Dedicated Support",text:"Direct line of contact with the lead architects. Transparent timelines, weekly demos, and swift project handoffs."},{icon:y.createElement(ix,{size:22}),cls:"ic-gold",title:"Hassle-Free Handoff",text:"Full workspace configuration, documentation, host account delegation, and comprehensive post-launch guidelines."}],Ew=[{icon:y.createElement(Ng,{size:16}),title:"Scope & Consultation",text:"We jump on a brief call to align on your design aesthetics, feature requirements, timelines, and budget expectations."},{icon:y.createElement(Fg,{size:16}),title:"Interactive Mockups",text:"We deliver dynamic high-fidelity Figma previews or code-based prototypes, refining colors, layouts, and animations."},{icon:y.createElement(bd,{size:16}),title:"Agile Production",text:"Our architects build using standard clean code structures, with regular review pipelines and live staging demos."},{icon:y.createElement(kg,{size:16}),title:"Zero-Downtime Launch",text:"We orchestrate professional server setups, point DNS records, configure database structures, and launch live."}],Sw=[{num:"100%",label:"Satisfaction Rate"},{num:"10+",label:"Completed Projects"},{num:"4.9★",label:"Client Rating"},{num:"24/7",label:"Architect Support"}],Lc="/assets/BrAInix_logo-gZ3eDCSz.jpg",Mw="/assets/our_mission-BgT1qehP.png",ww="/assets/our_vision-DLZ6_GfL.png",Tw="/assets/why_choose_us-BDVkCcgl.png",Aw="/assets/founder_avatar-BrixT3AS.jpg";function Cw(){const{cursorRef:t,dotRef:e,outerRef:n}=hw(),[i,r]=ze.useState("services"),[s,o]=ze.useState("home"),[a,l]=ze.useState(!1),[c,d]=ze.useState(!0),[h,f]=ze.useState(!1);pw(i,s,c);const[p,_]=ze.useState(""),[x,v]=ze.useState(null),[u,m]=ze.useState(!1);y.useEffect(()=>{const P=setTimeout(()=>{f(!0)},4400),Z=setTimeout(()=>{d(!1)},5e3);return()=>{clearTimeout(P),clearTimeout(Z)}},[]);const g=P=>{P.preventDefault(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?window.location.href="tel:6374724269":window.open("https://wa.me/916374724269","_blank")},[E,w]=ze.useState(!1),[A,R]=ze.useState(null),L=P=>{const Z=document.getElementById("book-consultation-btn");Z?Z.scrollIntoView({behavior:"smooth",block:"center"}):document.getElementById("cta").scrollIntoView({behavior:"smooth"})},S=()=>{w(!1),R(null)},M=(P,Z)=>{P.preventDefault(),o("home"),setTimeout(()=>{const K=document.getElementById(Z);K&&K.scrollIntoView({behavior:"smooth"})},100)},H=i==="services"?yw:mw,z=i==="services"?xw:gw,k=i==="services"?Ew:vw,W=i==="services"?Sw:_w;return y.createElement(y.Fragment,null,c&&y.createElement("div",{className:`preloader ${h?"fade-out":""}`},y.createElement("div",{className:"preloader-logo-wrap"},y.createElement("img",{src:Lc,alt:"BrAInix",className:"preloader-logo"})),y.createElement("div",{className:"preloader-text"},"BrAInix"),y.createElement("div",{className:"preloader-bar-bg"},y.createElement("div",{className:"preloader-bar"}))),y.createElement("div",{id:"np-cursor",ref:t},y.createElement("div",{className:"cur-ring",ref:n}),y.createElement("div",{className:"cur-dot",ref:e})),y.createElement("nav",null,y.createElement("div",{style:{display:"flex",alignItems:"center",gap:"1rem"}},y.createElement("div",{className:"logo-container",onClick:()=>{o("home"),window.scrollTo({top:0,behavior:"smooth"}),l(!1)},style:{cursor:"pointer",display:"flex",alignItems:"center",gap:"0.6rem"}},y.createElement("img",{src:Lc,alt:"BrAInix Logo",style:{height:"34px",width:"34px",borderRadius:"8px",objectFit:"cover",border:"0.5px solid var(--border)"}}),y.createElement("span",{className:"logo-text",style:{fontFamily:"var(--fh)",fontWeight:"800",fontSize:"1.4rem",letterSpacing:"-0.03em",background:"linear-gradient(135deg, var(--cyan), var(--violet2))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"BrAInix")),y.createElement("div",{className:"prod-switcher"},y.createElement("button",{className:`switcher-btn ${i==="services"?"active services":""}`,onClick:()=>{o("home"),r("services"),l(!1)}},"Services"),y.createElement("button",{className:`switcher-btn ${i==="edu"?"active edu":""}`,onClick:()=>{o("home"),r("edu"),l(!1)}},"Edu Platform"))),y.createElement("ul",{className:"nav-links"},y.createElement("li",null,y.createElement("a",{href:"#hero",onClick:P=>{P.preventDefault(),o("home"),window.scrollTo({top:0,behavior:"smooth"})},style:{color:s==="home"?"var(--cyan)":"var(--text2)",cursor:"pointer"}},"Home")),y.createElement("li",null,y.createElement("a",{href:"#about",onClick:P=>{P.preventDefault(),o("about"),window.scrollTo({top:0,behavior:"smooth"})},style:{color:s==="about"?"var(--cyan)":"var(--text2)",cursor:"pointer"}},"About")),i==="services"?y.createElement(y.Fragment,null,y.createElement("li",null,y.createElement("a",{href:"#pillars",onClick:P=>M(P,"pillars")},"Products")),y.createElement("li",null,y.createElement("a",{href:"#features",onClick:P=>M(P,"features")},"Standards")),y.createElement("li",null,y.createElement("a",{href:"#courses",onClick:P=>M(P,"courses")},"Capabilities")),y.createElement("li",null,y.createElement("a",{href:"#how",onClick:P=>M(P,"how")},"Workflow")),y.createElement("li",null,y.createElement("a",{href:"#cta",onClick:P=>M(P,"cta")},"Connect"))):y.createElement(y.Fragment,null,y.createElement("li",null,y.createElement("a",{href:"#pillars",onClick:P=>M(P,"pillars")},"Platforms")),y.createElement("li",null,y.createElement("a",{href:"#features",onClick:P=>M(P,"features")},"Features")),y.createElement("li",null,y.createElement("a",{href:"#courses",onClick:P=>M(P,"courses")},"Catalogue")),y.createElement("li",null,y.createElement("a",{href:"#how",onClick:P=>M(P,"how")},"Process")),y.createElement("li",null,y.createElement("a",{href:"#cta",onClick:P=>M(P,"cta")},"Connect")))),y.createElement("button",{className:"nav-cta",onClick:()=>{if(s!=="home")o("home"),setTimeout(()=>{const P=document.getElementById("cta");P&&P.scrollIntoView({behavior:"smooth"})},100);else{const P=document.getElementById("cta");P&&P.scrollIntoView({behavior:"smooth"})}}},i==="services"?"Request Consultation":"Start Learning"),y.createElement("button",{className:"mobile-nav-toggle",onClick:()=>l(!a)},a?y.createElement(zg,{size:20}):y.createElement(ex,{size:20}))),a&&y.createElement("div",{className:"mobile-menu"},y.createElement("ul",{className:"mobile-menu-links"},y.createElement("li",null,y.createElement("a",{href:"#hero",onClick:P=>{P.preventDefault(),o("home"),window.scrollTo({top:0,behavior:"smooth"}),l(!1)},style:{color:s==="home"?"var(--cyan)":"var(--text2)"}},"Home")),y.createElement("li",null,y.createElement("a",{href:"#about",onClick:P=>{P.preventDefault(),o("about"),window.scrollTo({top:0,behavior:"smooth"}),l(!1)},style:{color:s==="about"?"var(--cyan)":"var(--text2)"}},"About")),i==="services"?y.createElement(y.Fragment,null,y.createElement("li",null,y.createElement("a",{href:"#pillars",onClick:P=>{M(P,"pillars"),l(!1)}},"Products")),y.createElement("li",null,y.createElement("a",{href:"#features",onClick:P=>{M(P,"features"),l(!1)}},"Standards")),y.createElement("li",null,y.createElement("a",{href:"#courses",onClick:P=>{M(P,"courses"),l(!1)}},"Capabilities")),y.createElement("li",null,y.createElement("a",{href:"#how",onClick:P=>{M(P,"how"),l(!1)}},"Workflow")),y.createElement("li",null,y.createElement("a",{href:"#cta",onClick:P=>{M(P,"cta"),l(!1)}},"Connect"))):y.createElement(y.Fragment,null,y.createElement("li",null,y.createElement("a",{href:"#pillars",onClick:P=>{M(P,"pillars"),l(!1)}},"Platforms")),y.createElement("li",null,y.createElement("a",{href:"#features",onClick:P=>{M(P,"features"),l(!1)}},"Features")),y.createElement("li",null,y.createElement("a",{href:"#courses",onClick:P=>{M(P,"courses"),l(!1)}},"Catalogue")),y.createElement("li",null,y.createElement("a",{href:"#how",onClick:P=>{M(P,"how"),l(!1)}},"Process")),y.createElement("li",null,y.createElement("a",{href:"#cta",onClick:P=>{M(P,"cta"),l(!1)}},"Connect")))),y.createElement("button",{className:"nav-cta",style:{width:"100%",marginTop:"1rem"},onClick:()=>{if(l(!1),s!=="home")o("home"),setTimeout(()=>{const P=document.getElementById("cta");P&&P.scrollIntoView({behavior:"smooth"})},100);else{const P=document.getElementById("cta");P&&P.scrollIntoView({behavior:"smooth"})}}},i==="services"?"Request Consultation":"Start Learning")),s==="home"?y.createElement(y.Fragment,null,y.createElement("section",{id:"hero"},y.createElement(lw,null),y.createElement("div",{className:"hero-content"},i==="services"?y.createElement(y.Fragment,null,y.createElement("div",{className:"hero-badge services-badge"},y.createElement("span",{className:"badge-dot services-dot"}),y.createElement(Ra,{size:12,style:{marginRight:"4px"}}),"Premium Development & Identity Studio"),y.createElement("h1",{style:{letterSpacing:"-0.04em"}},"Architecting the",y.createElement("br",null),y.createElement("span",{className:"grad"},"Future of Digital"),y.createElement("br",null),"Web Products."),y.createElement("p",{className:"hero-sub"},"We craft visually gorgeous, highly performant web applications, custom brand identities, and seamless product deployments for high-growth enterprises."),y.createElement("div",{className:"hero-actions"},y.createElement("button",{className:"btn-primary",onClick:()=>document.getElementById("courses").scrollIntoView({behavior:"smooth"})},y.createElement(q_,{size:18})," Our Web Services"),y.createElement("button",{className:"btn-ghost",onClick:()=>document.getElementById("how").scrollIntoView({behavior:"smooth"})},y.createElement(Jf,{size:16})," View Delivery Workflow"))):y.createElement(y.Fragment,null,y.createElement("div",{className:"hero-badge"},y.createElement("span",{className:"badge-dot"}),y.createElement(Ig,{size:12,style:{marginRight:"4px"}}),"AI-Powered Learning Platform"),y.createElement("h1",null,"Learn Smarter.",y.createElement("br",null),y.createElement("span",{className:"grad"},"Think Deeper."),y.createElement("br",null),"Grow Faster."),y.createElement("p",{className:"hero-sub"},"BrAInix adapts to your unique mind, delivering personalized, immersive education powered by cutting-edge AI and real-world expertise."),y.createElement("div",{className:"hero-actions"},y.createElement("button",{className:"btn-primary",onClick:()=>document.getElementById("courses").scrollIntoView({behavior:"smooth"})},y.createElement($f,{size:18})," Explore Courses"),y.createElement("button",{className:"btn-ghost",onClick:()=>document.getElementById("how").scrollIntoView({behavior:"smooth"})},y.createElement(Jf,{size:16})," See How It Works"))),y.createElement("div",{className:"hero-stats"},W.map(({num:P,label:Z})=>y.createElement("div",{key:Z,style:{textAlign:"center"}},y.createElement("div",{className:"stat-num"},P),y.createElement("div",{className:"stat-lbl"},Z))))),y.createElement("div",{className:"scroll-ind",onClick:()=>document.getElementById("features").scrollIntoView({behavior:"smooth"})},y.createElement("div",{className:"scroll-line"}),y.createElement($_,{size:14}))),y.createElement("section",{id:"pillars",style:{padding:"4rem 3rem",background:"var(--ink2)",borderTop:"0.5px solid var(--border)",borderBottom:"0.5px solid var(--border)"}},y.createElement("div",{style:{maxWidth:1100,margin:"0 auto",textAlign:"center"}},y.createElement("div",{className:"sec-label"},"Dual Engine Architecture"),y.createElement("h2",{className:"sec-title",style:{fontSize:"2rem",marginBottom:"2rem"}},"Choose your BrAInix destination"),y.createElement("div",{style:{display:"flex",gap:"1.5rem",justifyContent:"center",flexWrap:"wrap"}},y.createElement("div",{className:`pillar-card ${i==="services"?"selected":""}`,onClick:()=>r("services"),style:{background:"var(--ink)",border:i==="services"?"1px solid var(--cyan)":"0.5px solid rgba(255,255,255,0.05)",borderRadius:"20px",padding:"2rem",cursor:"pointer",maxWidth:"350px",textAlign:"left",flex:"1 1 300px",transition:"all 0.3s"}},y.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}},y.createElement("div",{style:{background:"rgba(0, 229, 255, 0.1)",border:"0.5px solid var(--cyan)",borderRadius:"10px",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--cyan)"}},y.createElement(Ra,{size:20})),i==="services"&&y.createElement("span",{style:{fontSize:"0.68rem",color:"var(--cyan)",border:"0.5px solid var(--cyan)",borderRadius:"100px",padding:"0.15rem 0.6rem"}},"Active")),y.createElement("h3",{style:{fontFamily:"var(--fh)",fontSize:"1.2rem",color:"var(--text)",marginBottom:"0.5rem"}},"BrAInix Services"),y.createElement("p",{style:{color:"var(--text2)",fontSize:"0.85rem",lineHeight:"1.5",fontWeight:"300"}},"Custom high-end web platforms, full-stack design, cloud deployment, and system automation.")),y.createElement("div",{className:`pillar-card ${i==="edu"?"selected":""}`,onClick:()=>r("edu"),style:{background:"var(--ink)",border:i==="edu"?"1px solid var(--violet2)":"0.5px solid rgba(255,255,255,0.05)",borderRadius:"20px",padding:"2rem",cursor:"pointer",maxWidth:"350px",textAlign:"left",flex:"1 1 300px",transition:"all 0.3s"}},y.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}},y.createElement("div",{style:{background:"rgba(167, 139, 250, 0.1)",border:"0.5px solid var(--violet2)",borderRadius:"10px",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--violet2)"}},y.createElement($f,{size:20})),i==="edu"&&y.createElement("span",{style:{fontSize:"0.68rem",color:"var(--violet2)",border:"0.5px solid var(--violet2)",borderRadius:"100px",padding:"0.15rem 0.6rem"}},"Active")),y.createElement("h3",{style:{fontFamily:"var(--fh)",fontSize:"1.2rem",color:"var(--text)",marginBottom:"0.5rem"}},"BrAInix Edu"),y.createElement("p",{style:{color:"var(--text2)",fontSize:"0.85rem",lineHeight:"1.5",fontWeight:"300"}},"AI-Powered interactive courses spanning AI/ML, Python, Full Stack, DSA, and Embedded Systems."))))),y.createElement("section",{id:"features"},y.createElement("div",{className:"features-header reveal"},y.createElement("div",null,y.createElement("div",{className:"sec-label"},i==="services"?"The Studio Standard":"The Academy standard"),y.createElement("h2",{className:"sec-title"},i==="services"?`Engineered for elite
business results`:`Built for the future
of human potential`)),y.createElement("p",{className:"sec-sub"},i==="services"?"Every pixel perfectly aligned, every database query highly optimized, and every cloud instance secured to professional standards.":"Every tool, every feature engineered to remove friction between you and your breakthrough moment.")),y.createElement("div",{className:"features-grid"},H.map(P=>y.createElement("div",{className:"feature-card reveal",key:P.title},y.createElement("div",{className:`feat-icon ${P.cls}`},P.icon),y.createElement("div",{className:"feat-title"},P.title),y.createElement("p",{className:"feat-text"},P.text))))),y.createElement("section",{id:"courses"},y.createElement("div",{style:{maxWidth:1100,margin:"0 auto"}},y.createElement("div",{className:"sec-label reveal"},i==="services"?"Studio Capabilities":"Academic Catalogue"),y.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:"1rem"}},y.createElement("h2",{className:"sec-title reveal"},i==="services"?`Web solutions that
define brands`:`Courses that open
new worlds`),y.createElement("p",{className:"sec-sub reveal",style:{maxWidth:380,margin:0}},i==="services"?"From initial vector brand assets to cloud deployments handling massive traffic.":"From beginner to expert structured paths that actually get you there."))),y.createElement("div",{className:"courses-row"},z.map(P=>y.createElement("div",{className:"course-card reveal",key:P.name},y.createElement("div",{className:`course-thumb ${P.thumb}`},P.icon,y.createElement("span",{className:"thumb-badge"},P.badge)),y.createElement("div",{className:"course-body"},y.createElement("div",{className:"course-tags"},P.tags.map(Z=>y.createElement("span",{key:Z.l,className:`ctag ${Z.cls||""}`},Z.l))),y.createElement("div",{className:"course-name"},P.name),y.createElement("div",{className:"course-desc"},P.desc),y.createElement("div",{className:"course-footer"},y.createElement("div",null,y.createElement("div",{className:"c-price",style:{color:P.priceColor}},P.price),y.createElement("div",{className:"c-meta"},P.meta)),y.createElement("button",{className:"c-btn",onClick:()=>L()},i==="services"?"Inquire":"Enroll"," ",y.createElement(W_,{size:12})))))))),y.createElement("section",{id:"how"},y.createElement(cw,null),y.createElement("div",{className:"how-inner"},y.createElement("div",{className:"reveal"},y.createElement("div",{className:"sec-label"},i==="services"?"Our Blueprint Flow":"The learning structure"),y.createElement("h2",{className:"sec-title",style:{marginBottom:"2.5rem"}},i==="services"?`From dynamic scoping
to live launching`:`From absolute zero
to career-ready`),y.createElement("div",{className:"how-steps"},k.map((P,Z)=>y.createElement("div",{className:"step",key:P.title},y.createElement("div",{className:"step-num"},"0",Z+1),y.createElement("div",null,y.createElement("div",{className:"step-title"},P.icon,P.title),y.createElement("p",{className:"step-text"},P.text)))))),y.createElement("div",{className:"how-visual reveal"},y.createElement("div",{className:"orb-ring r1"}),y.createElement("div",{className:"orb-ring r2"}),y.createElement("div",{className:"orb-ring r3"}),y.createElement("div",{className:"how-orb"},y.createElement("div",{className:"orb-inner"},i==="services"?y.createElement(y.Fragment,null,y.createElement(Ra,{size:64,color:"#00E5FF",strokeWidth:1}),y.createElement("div",{className:"orb-label"},"BrAInix Studio"),y.createElement("div",{className:"orb-sub"},"High-Fidelity Engine")):y.createElement(y.Fragment,null,y.createElement(nx,{size:64,color:"#00E5FF",strokeWidth:1}),y.createElement("div",{className:"orb-label"},"BrAInix AI"),y.createElement("div",{className:"orb-sub"},"Adaptive Learning Engine"))))))),y.createElement("section",{id:"cta"},y.createElement("div",{className:"cta-inner",style:{padding:"4rem 2rem"}},y.createElement("div",{className:"cta-glow"}),i==="services"?y.createElement(y.Fragment,null,y.createElement("div",{className:"sec-label"},"Connect With Our Studio"),y.createElement("h2",null,"Ready to build ",y.createElement("span",{className:"grad"},"something legendary?")),y.createElement("p",{style:{marginBottom:"1.5rem"}},"Reach out directly to kickstart your next digital product, schedule a design sprint, or request a custom architectural roadmap.")):y.createElement(y.Fragment,null,y.createElement("div",{className:"sec-label"},"Connect With Our Academy"),y.createElement("h2",null,"Begin your learning ",y.createElement("span",{className:"grad"},"journey today")),y.createElement("p",{style:{marginBottom:"1.5rem"}},"Get in touch with our admissions coordinators and engineering mentors to select the perfect roadmap for your career goals.")),y.createElement("div",{style:{marginBottom:"2.5rem",display:"flex",justifyContent:"center"}},y.createElement("a",{id:"book-consultation-btn",href:"https://forms.gle/7p2BKU7n1imjDusJA",target:"_blank",rel:"noopener noreferrer",className:"btn-primary",style:{textDecoration:"none"}},"Book Consultation")),y.createElement("div",{className:"cta-contacts-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem",maxWidth:"960px",margin:"2rem auto 0"}},y.createElement("a",{href:"#",onClick:g,className:"cta-card cyan-card"},y.createElement("div",{style:{background:"rgba(0, 229, 255, 0.08)",borderRadius:"50%",padding:"1rem",marginBottom:"1rem"}},y.createElement(Qf,{size:24,color:"var(--cyan)"})),y.createElement("div",{style:{fontSize:"0.72rem",color:"var(--cyan)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.4rem"}},"Mobile / WhatsApp"),y.createElement("div",{style:{fontWeight:"700",fontSize:"1.1rem"}},"+91 63747 24269")),y.createElement("a",{href:"mailto:hashedtechs@gmail.com",className:"cta-card violet-card"},y.createElement("div",{style:{background:"rgba(167, 139, 250, 0.08)",borderRadius:"50%",padding:"1rem",marginBottom:"1rem"}},y.createElement(Kf,{size:24,color:"var(--violet2)"})),y.createElement("div",{style:{fontSize:"0.72rem",color:"var(--violet2)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.4rem"}},"Direct Email"),y.createElement("div",{style:{fontWeight:"700",fontSize:"1.1rem"}},"hashedtechs@gmail.com")),y.createElement("a",{href:"https://maps.google.com/?q=42,+5th+cross,+maraimalai+nagar,+velrampet,+Puducherry-605004",target:"_blank",rel:"noopener noreferrer",className:"cta-card gold-card"},y.createElement("div",{style:{background:"rgba(245, 158, 11, 0.08)",borderRadius:"50%",padding:"1rem",marginBottom:"1rem"}},y.createElement(Zf,{size:24,color:"var(--gold)"})),y.createElement("div",{style:{fontSize:"0.72rem",color:"var(--gold)",textTransform:"uppercase",letterSpacing:"0.1em",fontWeight:"600",marginBottom:"0.4rem"}},"Studio Address"),y.createElement("div",{style:{fontWeight:"500",fontSize:"0.82rem",lineHeight:"1.4",textAlign:"center",maxWidth:"220px"}},"42, 5th cross, maraimalai nagar, velrampet, Puducherry-605004")))))):y.createElement(bw,null),y.createElement("footer",null,y.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"}},y.createElement("img",{src:Lc,alt:"BrAInix Logo",style:{height:"26px",width:"26px",borderRadius:"6px",objectFit:"cover",border:"0.5px solid var(--border)"}}),y.createElement("span",{style:{fontFamily:"var(--fh)",fontWeight:"800",fontSize:"1.2rem",letterSpacing:"-0.03em",background:"linear-gradient(135deg, var(--cyan), var(--violet2))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},"BrAInix")),y.createElement("div",{className:"f-contact",style:{display:"flex",gap:"2.5rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},y.createElement("a",{href:"#",onClick:g,className:"f-contact-link",style:{display:"flex",alignItems:"center",gap:"0.5rem",textDecoration:"none",color:"var(--text2)",fontSize:"0.85rem",transition:"color 0.2s"},onMouseEnter:P=>P.currentTarget.style.color="var(--cyan)",onMouseLeave:P=>P.currentTarget.style.color="var(--text2)"},y.createElement(Qf,{size:15,color:"var(--cyan)"}),y.createElement("span",null,"+91 63747 24269")),y.createElement("a",{href:"mailto:hashedtechs@gmail.com",className:"f-contact-link",style:{display:"flex",alignItems:"center",gap:"0.5rem",textDecoration:"none",color:"var(--text2)",fontSize:"0.85rem",transition:"color 0.2s"},onMouseEnter:P=>P.currentTarget.style.color="var(--cyan)",onMouseLeave:P=>P.currentTarget.style.color="var(--text2)"},y.createElement(Kf,{size:15,color:"var(--cyan)"}),y.createElement("span",null,"hashedtechs@gmail.com")),y.createElement("a",{href:"https://maps.google.com/?q=42,+5th+cross,+maraimalai+nagar,+velrampet,+Puducherry-605004",target:"_blank",rel:"noopener noreferrer",className:"f-contact-link",style:{display:"flex",alignItems:"center",gap:"0.5rem",textDecoration:"none",color:"var(--text2)",fontSize:"0.85rem",transition:"color 0.2s"},onMouseEnter:P=>P.currentTarget.style.color="var(--cyan)",onMouseLeave:P=>P.currentTarget.style.color="var(--text2)"},y.createElement(Zf,{size:15,color:"var(--cyan)"}),y.createElement("span",null,"42, 5th cross, maraimalai nagar, velrampet, Puducherry"))),y.createElement("div",{className:"f-copy"},"© 2026 BrAInix, Inc.")),y.createElement(fw,{isOpen:E,mode:i,item:A,onClose:S}))}function bw(){return y.createElement("div",{className:"about-page",style:{background:"var(--ink)",color:"var(--text)",paddingTop:"7rem",paddingBottom:"5rem"}},y.createElement("section",{style:{padding:"4rem 3rem",display:"flex",alignItems:"center",justifyContent:"center"}},y.createElement("div",{style:{maxWidth:"1100px",width:"100%",margin:"0 auto",textAlign:"center"}},y.createElement("span",{className:"sec-label",style:{fontSize:"0.75rem",letterSpacing:"0.2em",color:"var(--cyan)"}},"WHO WE ARE"),y.createElement("h1",{className:"grad",style:{fontSize:"clamp(2.5rem, 5vw, 4.5rem)",fontWeight:"800",marginTop:"1rem",marginBottom:"1.5rem",fontFamily:"var(--fh)",letterSpacing:"-0.03em"}},"About BrAInix"),y.createElement("p",{style:{color:"var(--text2)",fontSize:"1.1rem",fontWeight:"300",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto"}},"Bridging advanced web development and AI-driven adaptive education to shape the creators of tomorrow's digital economy."))),y.createElement("section",{style:{padding:"5rem 3rem",background:"var(--ink2)",borderTop:"0.5px solid var(--border)",borderBottom:"0.5px solid var(--border)"}},y.createElement("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"4rem",alignItems:"center",flexWrap:"wrap"}},y.createElement("div",{style:{flex:"1 1 450px"}},y.createElement("span",{className:"sec-label",style:{color:"var(--cyan)"}},"Our Mission"),y.createElement("h2",{style:{fontFamily:"var(--fh)",fontSize:"2.2rem",fontWeight:"800",marginTop:"0.5rem",marginBottom:"1.5rem"}},"Simplifying the path to unleash potential."),y.createElement("p",{style:{color:"var(--text2)",fontSize:"0.95rem",lineHeight:"1.8",fontWeight:"300"}},"At BrAInix, we bridge the gap between cutting-edge technology and human capability. Our mission is to engineer high-fidelity web products for businesses while empowering learners to master complex engineering skills through adaptive, personalized pathways. We believe technology should expand horizons, not create barriers.")),y.createElement("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center"}},y.createElement("img",{src:Mw,alt:"Our Mission",style:{width:"100%",maxWidth:"450px",borderRadius:"24px",border:"1px solid var(--border)",boxShadow:"0 20px 40px rgba(0, 229, 255, 0.15)"}})))),y.createElement("section",{style:{padding:"5rem 3rem"}},y.createElement("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"4rem",alignItems:"center",flexWrap:"wrap"}},y.createElement("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center"}},y.createElement("img",{src:ww,alt:"Our Vision",style:{width:"100%",maxWidth:"450px",borderRadius:"24px",border:"1px solid var(--border2)",boxShadow:"0 20px 40px rgba(124, 58, 237, 0.15)"}})),y.createElement("div",{style:{flex:"1 1 450px"}},y.createElement("span",{className:"sec-label",style:{color:"var(--violet2)"}},"Our Vision"),y.createElement("h2",{style:{fontFamily:"var(--fh)",fontSize:"2.2rem",fontWeight:"800",marginTop:"0.5rem",marginBottom:"1.5rem"}},"Empowering a limitless digital future."),y.createElement("p",{style:{color:"var(--text2)",fontSize:"0.95rem",lineHeight:"1.8",fontWeight:"300"}},"Our vision outlines the desired future state we aspire to achieve, breaking barriers and enabling users to explore endless possibilities in the digital realm. By combining custom product design, robust system architectures, and AI-powered education, we are sculpting the future of digital product building.")))),y.createElement("section",{style:{padding:"5rem 3rem",background:"var(--ink2)",borderTop:"0.5px solid var(--border)",borderBottom:"0.5px solid var(--border)"}},y.createElement("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"flex",gap:"4rem",alignItems:"center",flexWrap:"wrap"}},y.createElement("div",{style:{flex:"1 1 450px"}},y.createElement("span",{className:"sec-label",style:{color:"var(--gold)"}},"Why Choose Us"),y.createElement("h2",{style:{fontFamily:"var(--fh)",fontSize:"2.2rem",fontWeight:"800",marginTop:"0.5rem",marginBottom:"2rem"}},"Engineered for Excellence"),y.createElement("ul",{style:{listStyle:"none",padding:0}},["Precision-Built Custom Web Platforms","Industry-Expert Consultations","Continuous Quality Assurance & Robust Testing","High-Fidelity UI & Luxury Brand Identity Design","Highly Scalable & Secure Cloud Infrastructure","Dedicated Post-Launch Technical Support","Interactive, AI-Powered Learning Paths","Seamless Project Transition & Handoff Setup","Transparent, Collaborative Development Workflows","No Overheads for Custom System Upgrades"].map((t,e)=>y.createElement("li",{key:e,style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem",color:"var(--text)",fontSize:"0.95rem",fontWeight:"400"}},y.createElement("span",{style:{color:"var(--cyan)",fontWeight:"900",fontSize:"1.2rem"}},"•"),t)))),y.createElement("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center"}},y.createElement("img",{src:Tw,alt:"Why Choose Us",style:{width:"100%",maxWidth:"450px",borderRadius:"24px",border:"1px solid rgba(245, 158, 11, 0.25)",boxShadow:"0 20px 40px rgba(245, 158, 11, 0.15)"}})))),y.createElement("section",{style:{padding:"5rem 3rem"}},y.createElement("div",{style:{maxWidth:"1100px",margin:"0 auto",textAlign:"center"}},y.createElement("span",{className:"sec-label",style:{color:"var(--cyan)"}},"THE LEADERSHIP"),y.createElement("h2",{style:{fontFamily:"var(--fh)",fontSize:"2.2rem",fontWeight:"800",marginTop:"0.5rem",marginBottom:"3rem"}},"Meet Our Founder"),y.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},y.createElement("div",{style:{width:"200px",height:"200px",borderRadius:"50%",overflow:"hidden",border:"4px solid var(--cyan)",boxShadow:"0 0 30px rgba(0, 229, 255, 0.3)",marginBottom:"1.5rem"}},y.createElement("img",{src:`${Aw}?update=${Date.now()}`,alt:"Founder Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})),y.createElement("h3",{style:{fontFamily:"var(--fh)",fontSize:"1.6rem",fontWeight:"700",color:"var(--text)",marginBottom:"0.5rem"}},"S ABIYSHEK"),y.createElement("p",{style:{color:"var(--cyan)",fontSize:"1rem",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.1em"}},"Founder & CEO, BrAInix")))))}Dc.createRoot(document.getElementById("root")).render(y.createElement(y.StrictMode,null,y.createElement(Cw,null)));
