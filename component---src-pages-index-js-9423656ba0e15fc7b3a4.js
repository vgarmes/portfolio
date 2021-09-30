/*! For license information please see component---src-pages-index-js-9423656ba0e15fc7b3a4.js.LICENSE.txt */
"use strict";(self.webpackChunkvictor_portfolio=self.webpackChunkvictor_portfolio||[]).push([[678],{2502:function(e,t,n){var r=n(7294),i=n(5414),o=n(5444),a=n(9499);t.Z=function(e){var t=e.title,n=e.description,s=(0,a.useLocation)().pathname,c=(0,o.K2)("3842516506").site.siteMetadata,l=c.siteTitle,u=c.titleTemplate,d=c.siteDescription,m=c.siteUrl,f=c.image,p=c.twitterUsername,h={title:t||l,description:n||d,url:""+m+s};return r.createElement(i.q,{title:h.title,titleTemplate:u},r.createElement("meta",{name:"description",content:h.description}),r.createElement("meta",{name:"image",content:f}),h.url&&r.createElement("meta",{property:"og:url",content:h.url}),h.title&&r.createElement("meta",{property:"og:title",content:h.title}),h.description&&r.createElement("meta",{property:"og:description",content:h.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&r.createElement("meta",{name:"twitter:creator",content:p}),r.createElement("meta",{name:"twitter:title",content:h.title}),r.createElement("meta",{name:"twitter:description",content:h.description}),r.createElement("meta",{name:"twitter:image",content:f}))}},5532:function(e,t,n){n.r(t),n.d(t,{default:function(){return Me}});var r=n(7294),i=n(9),o=n(5444),a=n(2058),s=n(9434),c=n(4629),l=n(9378),u=i.default.section.withConfig({displayName:"Hero__StyledHeroSection",componentId:"sc-4w7rzl-0"})(["",";flex-direction:column;align-items:flex-start;min-height:100vh;padding:50px 0 0 0;@media (max-width:480px) and (min-height:700px){padding-bottom:10vh;}h2{margin-bottom:15px;font-family:var(--ff-primary);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:600;@media (max-width:480px){margin-bottom:2em;}}h3{margin-top:10px;color:var(--clr-primary-4-lightest);line-height:0.9;}.big-heading{margin:0;font-size:clamp(40px,7vw,60px);}.decorative{color:var(--color-decorative);}.subtitle{margin-top:1em;}p{margin:20px 0 0;max-width:540px;}.contact-btn{",";margin-top:50px;}.social-links{",";width:15rem;margin-top:50px;}"],(function(e){return e.theme.mixins.flexCenter}),(function(e){return e.theme.mixins.bigButton}),(function(e){return e.theme.mixins.flexBetween})),d=function(){var e=(0,a.Z)(),t=[r.createElement("h1",{className:"big-heading"},r.createElement("span",null,"Hi there, I'm ",r.createElement("span",{className:"decorative"},"Victor"),". ",r.createElement("br",null)),r.createElement("span",null,"Front End Developer. ",r.createElement("br",null))),r.createElement(o.rU,{to:"/#contact",className:"contact-btn"},"contact me"),r.createElement("div",{className:"social-links"},l.Z.map((function(e){return r.createElement(c.Z,Object.assign({key:e.id},e))})))];return e?r.createElement(u,null,t.map((function(e,t){return r.createElement(s.Z,{key:t,animationName:"up",duration:1e3,delay:100*t},e)}))):r.createElement(u,null)},m="(prefers-reduced-motion: no-preference)",f="undefined"==typeof window,p=function(){return!!f||!window.matchMedia(m).matches};var h=function(){var e=(0,r.useState)(p),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=window.matchMedia(m),t=function(e){n(!e.matches)};return e.addListener(t),function(){e.removeListener(t)}}),[]),t};var g=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};var v=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||g(e[0]))};var y=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(g);if(g(e))return[e];if(v(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(r){return[]}return[]};function b(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=w();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function E(e,t){for(var n=b(e),r=b(t),i=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],s=0;s<4;s++){var c=4*s,l=[r[c],r[c+1],r[c+2],r[c+3]],u=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];i[o+c]=u}return i}function x(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return b(t[2].split(", ").map(parseFloat))}return w()}function j(e){var t=Math.PI/180*e,n=w();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function k(e,t){var n=w();return n[0]=e,n[5]="number"==typeof t?t:e,n}var N,T=(N=Date.now(),function(e){var t=Date.now();t-N>16?(N=t,e(t)):setTimeout((function(){return T(e)}),0)}),I=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T,O={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var R={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function z(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function C(e,t){if(z(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,r){return t(n,r,e)}));throw new TypeError("Expected either an array or object literal.")}function M(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach((function(e){return r+="\n — "+e})),console.log(r,"color: #ea654b;")}}function S(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},r={active:[],stale:[]};try{C(y("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(i){throw i}C(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),C(t.stale,(function(t){return delete e.store.elements[t]})),C(this.store.elements,(function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),C(this.store.containers,(function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)})),C(r.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),C(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),C(n.stale,(function(t){return delete e.store.sequences[t]}))}var L=function(){var e={},t=document.documentElement.style;function n(n,r){if(void 0===r&&(r=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof r[n])return e[n]=n;if("string"==typeof r["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function P(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,i={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",i.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?i.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var a,s,c,l=parseFloat(t.opacity),u=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),d={computed:l!==u?"opacity: "+l+";":"",generated:l!==u?"opacity: "+u+";":""},m=[];if(parseFloat(r.distance)){var f="top"===r.origin||"bottom"===r.origin?"Y":"X",p=r.distance;"top"!==r.origin&&"left"!==r.origin||(p=/^-/.test(p)?p.substr(1):"-"+p);var h=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=h[0];switch(h[1]){case"em":p=parseInt(t.fontSize)*g;break;case"px":p=g;break;case"%":p="Y"===f?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===f?m.push(function(e){var t=w();return t[13]=e,t}(p)):m.push(function(e){var t=w();return t[12]=e,t}(p))}r.rotate.x&&m.push((a=r.rotate.x,s=Math.PI/180*a,(c=w())[5]=c[10]=Math.cos(s),c[6]=c[9]=Math.sin(s),c[9]*=-1,c)),r.rotate.y&&m.push(function(e){var t=Math.PI/180*e,n=w();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(r.rotate.y)),r.rotate.z&&m.push(j(r.rotate.z)),1!==r.scale&&(0===r.scale?m.push(k(2e-4)):m.push(k(r.scale)));var v={};if(m.length){v.property=L("transform"),v.computed={raw:t[v.property],matrix:x(t[v.property])},m.unshift(v.computed.matrix);var y=m.reduce(E);v.generated={initial:v.property+": matrix3d("+y.join(", ")+");",final:v.property+": matrix3d("+v.computed.matrix.join(", ")+");"}}else v.generated={initial:"",final:""};var b={};if(d.generated||v.generated.initial){b.property=L("transition"),b.computed=t[b.property],b.fragments=[];var N=r.delay,T=r.duration,I=r.easing;d.generated&&b.fragments.push({delayed:"opacity "+T/1e3+"s "+I+" "+N/1e3+"s",instant:"opacity "+T/1e3+"s "+I+" 0s"}),v.generated.initial&&b.fragments.push({delayed:v.property+" "+T/1e3+"s "+I+" "+N/1e3+"s",instant:v.property+" "+T/1e3+"s "+I+" 0s"}),b.computed&&!b.computed.match(/all 0s|none 0s/)&&b.fragments.unshift({delayed:b.computed,instant:b.computed});var O=b.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});b.generated={delayed:b.property+": "+O.delayed+";",instant:b.property+": "+O.instant+";"}}else b.generated={delayed:"",instant:""};return{inline:i,opacity:d,position:n,transform:v,transition:b}}function q(e,t){t.split(";").forEach((function(t){var n=t.split(":"),r=n[0],i=n.slice(1);r&&i&&(e.style[r.trim()]=i.join(":"))}))}function A(e){var t,n=this;try{C(y(e),(function(e){var r=e.getAttribute("data-sr-id");if(null!==r){t=!0;var i=n.store.elements[r];i.callbackTimer&&window.clearTimeout(i.callbackTimer.clock),q(i.node,i.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[r]}}))}catch(r){return M.call(this,"Clean failed.",r.message)}if(t)try{S.call(this)}catch(r){return M.call(this,"Clean failed.",r.message)}}function F(){var e=this;C(this.store.elements,(function(e){q(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),C(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function _(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(z(e))return C(t,(function(t){C(t,(function(t,n){z(t)?(e[n]&&z(e[n])||(e[n]={}),_(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function D(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var H,B=(H=0,function(){return H++});function Z(){var e=this;S.call(this),C(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),q(e.node,t.filter((function(e){return""!==e})).join(" "))})),C(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function U(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,r="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||i?$.call(this,e,r):t.reset||o?W.call(this,e):void 0}function $(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,q(e.node,n.filter((function(e){return""!==e})).join(" ")),Y.call(this,e,t)}function W(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,q(e.node,t.filter((function(e){return""!==e})).join(" ")),Y.call(this,e)}function Y(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&A.call(n,e.node)}),r-a)}}function J(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return U.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var i=new V(n,"visible",this.store),o=new V(n,"revealed",this.store);if(n.models={visible:i,revealed:o},!o.body.length){var a=n.members[i.body[0]],s=this.store.elements[a];if(s)return X.call(this,n,i.body[0],-1,t),X.call(this,n,i.body[0],1,t),U.call(this,s,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(o.head).pop()&&r>=[].concat(i.body).shift())return X.call(this,n,r,-1,t),U.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(o.foot).shift()&&r<=[].concat(i.body).pop())return X.call(this,n,r,1,t),U.call(this,e,{reveal:!0,pristine:t})}}function G(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=B(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function V(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],C(e.members,(function(e,i){var o=n.elements[e];o&&o[t]&&r.body.push(i)})),this.body.length&&C(e.members,(function(e,i){var o=n.elements[e];o&&!o[t]&&(i<r.body[0]?r.head.push(i):r.foot.push(i))}))}function X(e,t,n,r){var i=this,o=["head",null,"foot"][1+n],a=e.members[t+n],s=this.store.elements[a];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,s&&J.call(i,s,r)}),e.interval)}function K(e,t,n){var r=this;void 0===t&&(t={}),void 0===n&&(n=!1);var i,o=[],a=t.interval||O.interval;try{a&&(i=new G(a));var s=y(e);if(!s.length)throw new Error("Invalid reveal target.");var c=s.reduce((function(e,n){var a={},s=n.getAttribute("data-sr-id");s?(_(a,r.store.elements[s]),q(a.node,a.styles.inline.computed)):(a.id=B(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var c=_({},a.config||r.defaults,t);if(!c.mobile&&D()||!c.desktop&&!D())return s&&A.call(r,a),e;var l,u=y(c.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(n)?(l=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var r=null;return C(t,(function(t){C(t,(function(t){null===r&&t.node===e&&(r=t.id)}))})),r}(u,o,r.store.containers),null===l&&(l=B(),o.push({id:l,node:u})),a.config=c,a.containerId=l,a.styles=P(a),i&&(a.sequence={id:i.id,index:i.members.length},i.members.push(a.id)),e.push(a),e):e}),[]);C(c,(function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(l){return M.call(this,"Reveal failed.",l.message)}C(o,(function(e){r.store.containers[e.id]={id:e.id,node:e.node}})),i&&(this.store.sequences[i.id]=i),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(Z.bind(this),0))}function Q(){var e=this;C(this.store.history,(function(t){K.call(e,t.target,t.options,!0)})),Z.call(this)}var ee=Math.sign||function(e){return(e>0)-(e<0)||+e};function te(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,a=e.node;do{isNaN(a.offsetTop)||(i+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:i,right:o+r,bottom:i+n,left:o},height:n,width:r}}function ne(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function re(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,i=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,s=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+r.top,l=t.geometry.bounds.right+t.scroll.left-r.right,u=t.geometry.bounds.bottom+t.scroll.top-r.bottom,d=t.geometry.bounds.left+t.scroll.left+r.left;return i<u&&o>d&&a>c&&s<l||"fixed"===e.styles.position}}function ie(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),I((function(){var r="init"===e.type||"resize"===e.type;C(n.store.containers,(function(e){r&&(e.geometry=te.call(n,e,!0));var t=ne.call(n,e);e.scroll&&(e.direction={x:ee(t.left-e.scroll.left),y:ee(t.top-e.scroll.top)}),e.scroll=t})),C(t,(function(e){(r||void 0===e.geometry)&&(e.geometry=te.call(n,e)),e.visible=re.call(n,e)})),C(t,(function(e){e.sequence?J.call(n,e):U.call(n,e)})),n.pristine=!1}))}var oe,ae,se,ce,le,ue,de,me;function fe(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==fe.prototype)return new fe(e);if(!fe.isSupported())return M.call(this,"Instantiation failed.","This browser is not supported."),R.failure();try{t=_({},ue||O,e)}catch(n){return M.call(this,"Invalid configuration.",n.message),R.failure()}try{if(!y(t.container)[0])throw new Error("Invalid container.")}catch(n){return M.call(this,n.message),R.failure()}return!(ue=t).mobile&&D()||!ue.desktop&&!D()?(M.call(this,"This device is disabled.","desktop: "+ue.desktop,"mobile: "+ue.mobile),R.failure()):(R.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,oe=oe||ie.bind(this),ae=ae||F.bind(this),se=se||K.bind(this),ce=ce||A.bind(this),le=le||Q.bind(this),Object.defineProperty(this,"delegate",{get:function(){return oe}}),Object.defineProperty(this,"destroy",{get:function(){return ae}}),Object.defineProperty(this,"reveal",{get:function(){return se}}),Object.defineProperty(this,"clean",{get:function(){return ce}}),Object.defineProperty(this,"sync",{get:function(){return le}}),Object.defineProperty(this,"defaults",{get:function(){return ue}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),me||(me=this))}fe.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(fe,"debug",{get:function(){return de||!1},set:function(e){return de="boolean"==typeof e?e:de}}),fe();var pe="undefined"==typeof window?null:fe(),he=function(e,t){return void 0===e&&(e=200),void 0===t&&(t=.25),{origin:"bottom",distance:"20px",duration:500,delay:e,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:t,viewOffset:{top:0,right:0,bottom:0,left:0}}},ge=function(e){var t=e.title,n=e.titleRef;return r.createElement("div",{className:"section-title",ref:n},r.createElement("h2",null,t||"default title"),r.createElement("div",{className:"underline"}))},ve=i.default.div.withConfig({displayName:"StackIcon__Box",componentId:"sc-adnpxo-0"})([""," color:var(--color-text);opacity:0.7;p{margin-left:0.5em;margin-bottom:0;}"],(function(e){return e.theme.mixins.flexCenter})),ye=function(e){var t=e.name,n=e.icon,i=e.size,o=void 0===i?"1em":i;return r.createElement(ve,null,r.cloneElement(n,{size:o}),r.createElement("p",null,t))},be=n(9463),we=[{name:"HTML5",icon:r.createElement(be.PSn,null)},{name:"CSS3",icon:r.createElement(be.H5g,null)},{name:"JavaScript",icon:r.createElement(be.vl3,null)},{name:"React",icon:r.createElement(be.pNp,null)},{name:"Gatsby",icon:r.createElement(be.s6Z,null)},{name:"Node JS",icon:r.createElement(be.tsj,null)},{name:"Ruby",icon:r.createElement(be.NTv,null)},{name:"Rails",icon:r.createElement(be.JBi,null)},{name:"MongoDB",icon:r.createElement(be.t$b,null)},{name:"PostgreSQL",icon:r.createElement(be.u4B,null)}],Ee=i.default.div.withConfig({displayName:"About__StyledAboutContainer",componentId:"sc-jvj6vd-0"})([".about-text-container{text-align:center;}.skills-list{",";flex-wrap:wrap;}.skills-list li{position:relative;font-size:var(--fz-md);font-weight:500;letter-spacing:0.1em;padding:1em;color:var(--clr-grey-9);}.about-img-container{display:flex;justify-content:center;align-items:flex-start;border-radius:var(--radius);}.about-img{width:40%;border-radius:var(--radius);}"],(function(e){return e.theme.mixins.flexCenter})),xe=function(){var e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=h();return(0,r.useEffect)((function(){n||(pe.reveal(e.current,he()),pe.reveal(t.current,he(200)))}),[n]),r.createElement("section",{id:"about",ref:t},r.createElement(ge,{title:"About Me"}),r.createElement(Ee,null,r.createElement("div",{className:"about-text-container"},r.createElement("p",null,"Hello! My name is Victor. I am a multi-disciplinary engineer whose interest in web development started a few years ago when I was involved in the back-end development of a monitoring app at my old job."),r.createElement("p",null,"After that experience, I decided I wanted to learn more about web development so I started an online course on full stack development in Ruby on Rails. Ever since then, I have been constantly learning and developing my personal projects."),r.createElement("p",null,"Some technologies I've been working with are:")),r.createElement("ul",{className:"skills-list"},we.map((function(e,t){return r.createElement("li",{key:t},r.createElement(ye,e))})))))},je=n(2359),ke=n(3201),Ne=i.default.article.withConfig({displayName:"Project__StyledProject",componentId:"sc-1opqymq-0"})(["display:grid;margin-bottom:4rem;box-shadow:var(--dark-shadow);border-radius:var(--radius);.project-img{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);height:19rem;z-index:1;}.project-info{background:var(--color-subtle-floating);padding:2rem;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);}@media (max-width:","){.project-info{padding:1rem;}}.project-number{display:inline-block;font-size:1.25rem;color:var(--color-primary);margin-bottom:0.75rem;}.project-header{",";margin-bottom:1.5rem;}.project-slug h3{font-size:1.25rem;text-transform:capitalize;transition:var(--transition);margin-bottom:0;}.project-desc{word-spacing:15px;}.project-stack{margin-bottom:1rem;}.project-stack span,.about-stack span{display:inline-block;background:var(--color-subtle-background);color:var(--color-gray-1000);margin:0.25rem;padding:0.25rem 0.5rem;border-radius:var(--radius);text-transform:uppercase;letter-spacing:var(--extra-spacing);font-size:var(--fz-sm);}.about-stack span{margin-top:0.5rem;}.project-links{",";}.project-icon{color:var(--color-primary);font-size:1.25rem;margin-left:1rem;transition:var(--transition);vertical-align:middle;}.project-icon:hover{color:var(--color-text);}@media screen and (min-width:576px){.project-img{height:19rem;}}@media screen and (min-width:768px){.project-img{height:22rem;}}@media screen and (min-width:992px){grid-template-columns:repeat(12,1fr);align-items:center;box-shadow:none;border-radius:0;.project-img{grid-column:1 / span 8;grid-row:1 / 1;height:30rem;border-radius:var(--radius);box-shadow:var(--dark-shadow);}.project-info{border-radius:var(--radius);box-shadow:var(--dark-shadow);z-index:1;grid-column:5 /12;grid-row:1 / 1;}&:nth-of-type(odd){.project-img{grid-column:5 / -1;grid-row:1 / 1;}}&:nth-of-type(odd){.project-info{grid-column:2 / span 7;grid-row:1 / 1;text-align:left;}}}"],(function(e){return e.theme.breakpoints.mobileL}),(function(e){return e.theme.mixins.flexBetween}),(function(e){return e.theme.mixins.flexBetween})),Te=function(e){var t=e.description,n=e.title,i=e.github,o=e.stack,a=e.url,s=e.image,c=e.projectRef;return r.createElement(Ne,{className:"project",ref:c},r.createElement(je.G,{image:(0,je.d)(s.localFile),className:"project-img",alt:n}),r.createElement("div",{className:"project-info"},r.createElement("div",{className:"project-header"},r.createElement("a",{href:a,className:"project-slug"},r.createElement("h3",null,n)),r.createElement("div",{className:"project-links"},r.createElement("a",{href:i},r.createElement(ke.NML,{className:"project-icon"})),r.createElement("a",{href:a},r.createElement(ke.ZH2,{className:"project-icon"})))),r.createElement("p",{className:"project-desc"},t),r.createElement("div",{className:"project-stack"},o.map((function(e){return r.createElement("span",{key:e.id},e.name)})))))},Ie=function(e){var t=e.title,n=e.projects,i=(0,r.useRef)(null),o=(0,r.useRef)([]),a=h();return(0,r.useEffect)((function(){a||(pe.reveal(i.current,he()),o.current.forEach((function(e){return pe.reveal(e,he())})))}),[a]),r.createElement("section",{id:"projects"},r.createElement(ge,{title:t,titleRef:i}),n.map((function(e,t){return r.createElement(Te,Object.assign({key:e.id,index:t,projectRef:function(e){return o.current[t]=e}},e))})))},Oe=i.default.section.withConfig({displayName:"Contact__StyledContactSection",componentId:"sc-1kzrcei-0"})(["text-align:center;max-width:600px;.contact-btn{",";margin-top:50px;}"],(function(e){return e.theme.mixins.bigButtonOutline})),Re=function(){var e=(0,r.useRef)(null),t=h();return(0,r.useEffect)((function(){t||pe.reveal(e.current,he(200))}),[t]),r.createElement(Oe,{ref:e,id:"contact"},r.createElement(ge,{title:"Contact me"}),r.createElement("p",null,"I'm currently looking for new opportunities, so if you think I'm a good fit for your next project my inbox is open! If you have a question or just want to say hi you are also more than welcome."),r.createElement("a",{className:"contact-btn",href:"mailto:vgmestre@gmail.com"},"say hello"))},ze=n(2502),Ce=i.default.main.withConfig({displayName:"pages__StyledMainContainer",componentId:"sc-1xtrnvw-0"})(["counter-reset:section;"]),Me=function(e){var t=e.data.allStrapiProject.nodes;return r.createElement(r.Fragment,null,r.createElement(ze.Z,{title:"Home"}),r.createElement(Ce,{className:"fillHeight"},r.createElement(d,null),r.createElement(xe,null),r.createElement(Ie,{title:"Featured projects",projects:t}),r.createElement(Re,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9423656ba0e15fc7b3a4.js.map