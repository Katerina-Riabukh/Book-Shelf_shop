var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequire0229;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,i.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequire0229=i),i("j2GOd"),i("lyquk");const o=document.querySelector("#checkbox"),s=document.querySelector("body"),r={LIGHT:"light-theme",DARK:"dark-theme"},a="theme";o&&o.addEventListener("change",function(t){let e="";t.currentTarget.checked?(e=r.DARK,s.classList.add(e),s.classList.remove(r.LIGHT)):(e=r.LIGHT,s.classList.remove(r.DARK),s.classList.add(e)),localStorage.setItem(a,e)}),function(){let t=localStorage.getItem(a);t?null==s||s.classList.add(t):null==s||s.classList.add(r.LIGHT),o&&(t===r.DARK?o.checked=!0:o.checked=!1)}(),i("clbZJ");var c=i("bZsAe"),l={};window,l=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,(function(e){return t[e]}).bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o,s,r=Object.prototype.hasOwnProperty;for(o=1,s=arguments.length;o<s;o+=1)for(i in n=arguments[o])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),o=n(17),s=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):s(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var o,s;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,o=n;n>=0&&o<s;o+=1)if(e[o]===t)return o;return -1}},function(t,e,n){"use strict";var i=n(29),o=n(30),s=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=s(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),o=n(7),s=n(0),r=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=s({},l,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(o/2),1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i):(e=(s-1)*o+1,n=Math.min(n=s*o,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),o=n(14),s=n(4),r=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?l(t=t.split(u),function(t){i._bindEvent(t,e,n)}):r(t)&&(n=e,l(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(r(t)){n=e,l(t,function(t,e){i.once(e,t,n)});return}this.on(t,function o(){e.apply(n,arguments),i.off(t,o,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,s=e===i.context,r=o&&s;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);l(t=t.split(u),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(l(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?l(t,function(t,e){i.off(e,t)}):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),l(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),o=n(7),s=n(21),r=n(22),a=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],m=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(h,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(g,function(t){this._buttons[t+"More"]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(c(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(c(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){r(this._getContainerElement(),"click",function(e){var n,i,o=s(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),o=n(3),s=n(23);function r(t,e,n,i){var r,a;function c(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,c):"attachEvent"in t&&t.attachEvent("on"+e,c),r=s(t,e),a=!1,o(r,function(t){return t.handler!==n||(a=!0,!1)}),a||r.push({handler:n,wrappedHandler:c})}t.exports=function(t,e,n,s){if(i(e)){o(e.split(/\s+/g),function(e){r(t,e,n,s)});return}o(e,function(e,i){r(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),o=n(8),s=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];if(a){i(n,function(e){t.classList.add(e)});return}(e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>o(t,c)&&c.push(t)}),r(t,c)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),o=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),o=n(3),s=n(2),r=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i,s,r,a,c=(i=[t],s=[],r=0,a=0,o(e,function(t,n){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(a,n)),a=n+1)}),s.push(e.slice(a)),{exps:i,sourcesInsideIf:s}),l=!1,u="";return o(c.exps,function(t,e){return(l=b(t,n))&&(u=y(c.sourcesInsideIf[e],n)),!l}),u},each:function(t,e,n){var i=b(t,n),r=s(i)?"@index":"@key",c={},l="";return o(i,function(t,i){c[r]=i,c["@this"]=t,a(n,c),l+=y(e.slice(),n)}),l},with:function(t,e,n){var o=i("as",t),s=t[o+1],r=b(t.slice(0,o),n),c={};return c[s]=r,y(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],s=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return o.push(t.slice(s)),o};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):l.test(t)?i=_((n=t.split(u))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function b(t,e){var n,i,s=_(t[0],e);return s instanceof Function?(n=t.slice(1),i=[],o(n,function(t){i.push(_(t,e))}),s.apply(null,i)):s}function y(t,e){for(var n,i,o,s=1,a=t[1];r(a);)m[i=(n=a.split(" "))[0]]?(o=function(t,e,n){for(var i,o,s,a=m[t],c=1,l=2,u=e[2];c&&r(u);)0===u.indexOf(t)?c+=1:0===u.indexOf("/"+t)&&(c-=1,s=l),l+=2,u=e[l];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=a(e[0].split(" ").slice(1),(i=s,(o=e.splice(1,i-0)).pop(),o),n),e}(i,t.splice(s,t.length-s),e),t=t.concat(o)):t[s]=b(n,e),s+=2,a=t[s];return t.join("")}t.exports=function(t,e){return y(v(t,c),e)}},function(t,e,n){"use strict";var i=n(1),o=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!r||new Date().getTime()-r>6048e5)&&(window.localStorage.setItem(s,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,function(t,e){o+="&"+e+"="+t}),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);const u=document.querySelector(".js-shop-list"),p=document.querySelector(".js-shop-background");let f=function(){let t=document.documentElement.clientWidth;if(t>1440||t>768&&t<1439.98||t<767.99)return 3}();const d=document.querySelector("#pagination"),h=document.querySelector(".remove-books"),g=document.querySelector(".amount-books");function m(t){if(!t||0===t.length){(0,c.Loading).remove("Loading...");return}if(p&&(p.setAttribute("hidden",""),h.removeAttribute("hidden","")),u){var e;let n=0*f,i=n+f,o=t.slice(n,i);v(o);let s=t.length,r=2;window.innerWidth>768&&(r=3);let a={totalItems:s,itemsPerPage:f,visiblePages:r},c=new((e=l)&&e.__esModule?e.default:e)("#pagination",a);c.on("beforeMove",e=>{let n=e.page,i=(n-1)*f,o=i+f,s=t.slice(i,o);v(s)})}(t.length<f||t.length===f)&&(d.innerHTML="")}function v(t){(0,c.Loading).standard("Loading...");let e=t.map(t=>`
<li id=${t.id} class="shop-item-book"><img class="shop-book-img" alt="Wrapper of book" src="${t.book_image}" loading="lazy"/>
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${t.title}</h2>
              <p class="shop-category">${t.list_name}</p>
              <p class="shop-desc">${t.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${t.author}</p>
                <ul class="shop-platform-list">
                  <li><a href="${t.marketAmazon}" class="shop-link-amazon" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                  <li>
                  <a href="${t.marketAppleBooks}" class="shop-link-applebook" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                  <li><a href="${t.marketBookshop}" class="shop-link-bookshop" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="shop-delete-btn js-delete-btn"></button>
          </li>`).join("");(0,c.Loading).remove("Loading...");let n=JSON.parse(localStorage.getItem("storage-data"));g.innerHTML=`You have ${n.length} book(s) in your shopping-list`,u.innerHTML=e}u.addEventListener("click",function(t){if("BUTTON"===t.target.nodeName){let e=t.target.parentNode.getAttribute("id");(function(t){let e=JSON.parse(localStorage.getItem("storage-data")),n=e.filter(({id:e})=>e!==t);localStorage.setItem("storage-data",JSON.stringify(n)),u.innerHTML="",m(n),n&&0!==n.length||(p.removeAttribute("hidden",""),h.setAttribute("hidden",""),d.innerHTML=""),(n.length<f||n.length===f)&&(d.innerHTML=""),(0,c.Loading).remove("Loading...")})(e)}}),h.addEventListener("click",function(){(0,c.Loading).standard("Loading..."),localStorage.removeItem("storage-data"),u.innerHTML="",p.removeAttribute("hidden",""),h.setAttribute("hidden",""),d.innerHTML="",(0,c.Loading).remove("Loading...")}),m(JSON.parse(localStorage.getItem("storage-data")));const _=document.querySelector(".js-wraper-mobile-menu"),b=document.querySelector(".js-modal-mobile-menu"),y=document.querySelector(".js-burger"),x=document.querySelector(".js-close-menu"),L=document.querySelector(".header-container"),P=document.body,E=document.querySelector(".js-modal-home-btn"),C=document.querySelector(".js-modal-list-btn"),M=document.querySelector(".list-btn-svg-menu");null==y||y.addEventListener("click",function(t){null==L||L.classList.add("index"),null==_||_.classList.add("no-scroll"),null==P||P.classList.add("no-scroll"),null==_||_.classList.remove("is-hidden-mobile"),b.classList.add("active-mobile-menu"),null==y||y.classList.add("is-hidden-btn"),null==x||x.classList.remove("is-hidden-btn")}),null==x||x.addEventListener("click",function(){null==_||_.classList.remove("no-scroll"),null==y||y.classList.remove("is-hidden-btn"),null==x||x.classList.add("is-hidden-btn"),null==P||P.classList.remove("no-scroll"),b.classList.remove("active-mobile-menu")}),window.location.href===C.href?(C.classList.add("current"),E.classList.remove("current"),M.classList.remove("fill"),E.classList.add("pudding")):window.location.href===E.href&&(E.classList.remove("pudding"),C.classList.add("padding"),M.classList.add("fill")),document.querySelector(".modal-home-btn");const w=document.querySelector(".modal-list-btn");w.addEventListener("click",()=>{"shoplist"===window.location.href&&"Shopping list"===w.textContent&&w.classList.add("current")}),i("cZaO3"),i("d0qiv"),i("7t6q4"),i("ipb79"),i("bWpVP");const I=document.querySelector(".footer_container_shop"),k=document.querySelector(".shoplist-wrapper-desc");window.addEventListener("scroll",()=>{k.offsetHeight-window.scrollY<800?I.style.bottom="0px":(I.style.position="fixed",I.style.bottom="-72px",I.style.left="50%",I.style.transform="translate(-50%)",I.style.width="100%")}),document.scrollHeight===document.offsetHeight&&(I.style.position="fixed",I.style.bottom="0px",I.style.left="50%",I.style.transform="translate(-50%)",I.style.width="100%");
//# sourceMappingURL=shoplist.d1d8e36d.js.map