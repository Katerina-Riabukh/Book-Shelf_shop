!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=o.parcelRequire0229;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},o.parcelRequire0229=s),s.register("lGKbD",function(t,n){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var o,r,a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("17QCl",function(t,n){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),s("lGKbD").register(JSON.parse('{"7lpHJ":"index.4cdb4f40.js","596V4":"amazon-icon1x.985b1de5.png","8x6wp":"amazon-icon2x.b774c146.png","gE1Vz":"applebook-icon1x.a9f158e0.png","7HkBY":"applebook-icon2x.7ba433f7.png","l7W2G":"bookshop-icon1x.95f5821d.png","gxKWS":"bookshop-icon2x.2b4b4a60.png","b7eZW":"index.0a70221e.js","ifrjY":"index.6fec2f97.js"}')),s("dvOze"),s("70qCZ"),s("4qAgR");var l=s("byzP8"),i=s("7UAGh"),c=s("dvOze"),l=s("byzP8"),i=s("7UAGh"),c=s("dvOze"),u=document.querySelector(".books-gallery"),d=new c.APIService;function h(){return(h=(0,l._)(function(e){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return[4,d.fetchBooksByCategory(e)];case 1:return[4,n.sent().data];case 2:var o,r;return t=n.sent(),u.innerHTML='<h1 class="collection-title">'.concat(((o=e.split(" ")).pop(),o.join(" "))," <span>").concat((r=e.trim().split(" "))[r.length-1],'</span></h1>\n    <ul class="top-books rendering-gap js-list-rendering">\n\n    ').concat(t.map(function(e){var t=e.title,n=e.book_image,o=e.author,r=e._id;return'<li class="book-card" data-id="'.concat(r,'">\n        <div class="book-thumb">\n      <img class="book-cover" src="').concat(n,'" alt="').concat(t,'">\n      <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n      <h2 class="book-name">').concat(t,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>")}).join(""),"\n    </ul>\n    \n    "),[2]}})})).apply(this,arguments)}var l=s("byzP8"),i=s("7UAGh"),c=s("dvOze"),p=s("cpWtq"),g=s("hGCuC"),b=new c.APIService,m=document.querySelector(".books-gallery");function f(){return(f=(0,l._)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,b.fetchBestSellersBooks()];case 1:return e=t.sent(),(0,g.Loading).remove("Loading..."),[4,e.data];case 2:return[2,t.sent()];case 3:return console.log(t.sent()),(0,g.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=(0,l._)(function(){var e,t,n,o,r,a,s,l,c;return(0,i.__generator)(this,function(i){switch(i.label){case 0:e='<ul class="top-books rendering-gap js-list-rendering">',i.label=1;case 1:return i.trys.push([1,3,,4]),[4,function(){return f.apply(this,arguments)}()];case 2:t=i.sent(),n=!0,o=!1,r=void 0;try{for(a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0)l=s.value,e+='\n  \n    <li class="book-category-item">\n      <p class="book-category">'.concat(l.list_name,'</p>\n      <ul class="top-books bestsel-books js-list-rendering">\n        ').concat(l.books.map(function(e){return'\n              <li class="book-card flex-element" data-id="'.concat(e._id,'">\n              <div class="book-thumb">\n                <img class="book-cover" src="').concat(e.book_image,'" alt="').concat(e.title,'"/>\n                <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n                <h2 class="book-name">').concat(e.title,'</h2>\n                <h3 class="book-author">').concat(e.author,"</h3>\n                </div>\n              </li>\n            ")}).join(""),'\n      </ul>\n      <button class="book-card-btn" type="button" data-category="').concat(l.list_name,'">see more</button>\n    </li>\n  ')}catch(e){o=!0,r=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return e+="</ul>",m.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>',(c=document.createElement("div")).className="books-collection",c.innerHTML=e,c.addEventListener("click",k),m.appendChild(c),[3,4];case 3:return console.log(i.sent()),[3,4];case 4:return[2]}})})).apply(this,arguments)}if(m)try{v()}catch(e){console.log(e)}function k(e){return L.apply(this,arguments)}function L(){return(L=(0,l._)(function(e){var t,n;return(0,i.__generator)(this,function(o){switch(o.label){case 0:if("BUTTON"!==e.target.nodeName)return[2];t=e.target,o.label=1;case 1:var r,a;if(o.trys.push([1,4,,5]),!t.matches("button[data-category]"))return[3,3];return n=t.dataset.category,m.querySelector(".collection-title").innerHTML="".concat(((r=n.split(" ")).pop(),r.join(" "))," <span>").concat((a=n.trim().split(" "))[a.length-1],"</span>"),H(n),[4,function(e){return _.apply(this,arguments)}(n)];case 2:o.sent(),o.label=3;case 3:return[3,5];case 4:return console.log(o.sent()),[3,5];case 5:return[2]}})})).apply(this,arguments)}function _(){return(_=(0,l._)(function(e){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,b.fetchBooksByCategory(e)];case 1:return[4,n.sent().data];case 2:return t=n.sent(),(0,g.Loading).remove("Loading..."),m.querySelector(".books-collection").innerHTML='\n    <ul class="top-books rendering-gap js-list-rendering">\n    '.concat(t.map(function(e){var t=e.title,n=e.book_image,o=e.author,r=e._id;return'\n        <li class="book-card" data-id='.concat(r,'>\n        <div class="book-thumb">\n         <img class="book-cover" src="').concat(n,'" alt="').concat(t,'">\n         <div class="quick-view">\n          <p class="quick-view-text">QUICK VIEW</p>\n         </div>\n        </div>\n        <div class="book-descr">\n      <h2 class="book-name">').concat(t,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>\n  ")}).join(""),"\n    </ul>"),[3,4];case 3:return console.log(n.sent()),(0,g.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books  were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}var p=s("cpWtq"),g=s("hGCuC"),S=new c.APIService,w=document.querySelector(".book-category__list");function x(){return(x=(0,l._)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,S.fetchBooksCategoryList()];case 1:return e=t.sent(),(0,g.Loading).remove("Loading..."),[4,e.data];case 2:return[2,t.sent()];case 3:return console.log(t.sent()),(0,p.reportsFailure)("Sorry, no books 555 were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function q(){return(q=(0,l._)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return[4,function(){return x.apply(this,arguments)}()];case 1:return e=t.sent().map(function(e){return'<li class="book-category__list-item">'.concat(e.list_name,"</li>")}).join(""),w.insertAdjacentHTML("beforeend",e),[2]}})})).apply(this,arguments)}function E(){return(E=(0,l._)(function(e){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:if("LI"!==e.target.nodeName)return[2];if(H(t=e.target.textContent),!("All categories"!==t))return[3,2];return[4,function(e){return h.apply(this,arguments)}(t)];case 1:return n.sent(),[3,4];case 2:return[4,v()];case 3:n.sent(),n.label=4;case 4:return[2]}})})).apply(this,arguments)}function H(e){var t=document.querySelectorAll(".book-category__list-item"),n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var l=a.value;l.textContent===e?l.classList.add("active"):l.classList.remove("active")}}catch(e){o=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}}w&&(!function(){q.apply(this,arguments)}(),w.addEventListener("click",function(e){return E.apply(this,arguments)}));var l=s("byzP8"),i=s("7UAGh"),p=s("cpWtq"),g=s("hGCuC"),A={btn:document.querySelector(".scrollBtn"),show:function(){this.btn.classList.remove("scrollBtn-hide")},hide:function(){this.btn.classList.add("scrollBtn-hide")},addEventListener:function(){var e=this;this.btn&&(window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>100?e.show():e.hide()}),this.btn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})})}};A.addEventListener();var I=s("jZYs5"),c=s("dvOze"),B={};B=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("596V4");var C={};C=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("8x6wp");var j={};j=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("gE1Vz");var R={};R=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("7HkBY");var G={};G=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("l7W2G");var T={};T=s("17QCl").getBundleURL("7lpHJ")+s("lGKbD").resolve("gxKWS");var O=document.querySelector("#allModal"),U=document.querySelector(".books-gallery"),z=document.querySelector(".add-storage-button"),K=document.querySelector(".remove-storage-btn"),N=document.querySelector(".storage-info"),J=new c.APIService,D="storage-data",F=[],P={};U&&(null==z||z.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem(D));P.description||(P.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");var t=P;e&&0!==e.length?(e.push(t),localStorage.setItem(D,JSON.stringify(e))):(F=[t],localStorage.setItem(D,JSON.stringify(F))),N.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.";var n=JSON.parse(localStorage.getItem(D));1===n.length?(0,p.reportsInfo)("You added book to the shopping list. You have ".concat(n.length," book in your shopping list")):(0,p.reportsInfo)("You added book to the shopping list. You have ".concat(n.length," books in your shopping list")),V()}),null==K||K.addEventListener("click",function(){N.textContent="";var e=P.id,t=JSON.parse(localStorage.getItem(D)),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),1===t.length?(0,p.reportsInfo)("You removed book from your shopping list. You have ".concat(t.length," book in your shopping list")):0!==t.length&&t.length?t.length:(0,p.reportsInfo)("Your shopping list is empty"),localStorage.setItem(D,JSON.stringify(t)),V()}),U.addEventListener("click",function(e){var t=e.target.closest("li");if(t&&t.hasAttribute("data-id")&&t.classList.contains("book-card")){var n=t.getAttribute("data-id");z.hasAttribute("disabled","")&&(0,p.reportsWarning)("Please sign up to show a shopping list"),null==Y||Y.classList.remove("is-hidden"),null==W||W.classList.remove("is-hidden"),document.body.style.overflow="hidden",A.hide(),function(e){M.apply(this,arguments)}(n)}}));var Y=document.querySelector(".about-book-modal"),W=document.querySelector(".card-backdrop-modal");function M(){return(M=(0,l._)(function(e){var n,o;return(0,i.__generator)(this,function(r){switch(r.label){case 0:O&&(O.innerHTML=""),r.label=1;case 1:return r.trys.push([1,3,,4]),(0,g.Loading).standard("Loading..."),[4,function(e){return Q.apply(this,arguments)}(e)];case 2:var a,s,l,i,c,u,d,h,b;return n=r.sent(),V(),(0,g.Loading).remove("Loading..."),a=n.book_image,s=n.title,l=n.author,i=n.buy_links[0].url,c=n.buy_links[1].url,u=n.buy_links[4].url,h=d=n.description,""===d&&(h="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates."),b='  \n  <img src="'.concat(a,'" alt="Book Image" class="image-about-book-modal">\n  <div class="info-modal">\n  <h2 class="title-about-book-modal">').concat(s,'</h2>\n  <p class="author-about-book-modal"> ').concat(l,'</p>\n  <p class="text-about-book-modal">').concat(h,'</p>\n  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="').concat(i,'" target="_blank"\n    > <img class="amazon"\n     width="62"\n    height="19"\n    srcset="\n    ').concat(t(B)," 1x,\n    ").concat(t(C),' 2x\n  "\n   src="').concat(t(B),'"\n    alt="Amazon"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(c,'" target="_blank"\n    > <img class="marketApple"\n    width="33"\n    height="32"\n    srcset="\n    ').concat(t(j)," 1x,\n    ").concat(t(R),' 2x\n  "\n   src="').concat(t(j),'"\n    alt="AppleBooks"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(u,'" target="_blank"\n    > <img\n    width="38"\n    height="36"\n    srcset="\n    ').concat(t(G)," 1x,\n    ").concat(t(T),' 2x\n  "\n   src="').concat(t(G),'"\n    alt="Book-Shop"\n  /></a></li>\n</ul>\n</div>\n  '),O.innerHTML=b,[2,n];case 3:return o=r.sent(),(0,g.Loading).remove("Loading..."),console.log("Error",o),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function Q(){return(Q=(0,l._)(function(e){var t;return(0,i.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),P={},[4,J.fetchBookInfo(e)];case 1:return P={book_image:(t=n.sent().data).book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,marketBookshop:t.buy_links[4].url,list_name:t.list_name,id:t._id,description:t.description},[2,t];case 2:return console.log("Error",n.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function V(){var e=(0,I.isAuthenticated)()?JSON.parse(localStorage.getItem(D)):null,t=P.id;if(e&&0!==e.length)e.find(function(e){return e.id===t})?(z.style.display="none",K.style.display="block"):(z.style.display="block",null==K||(K.style.display="none"));else{z.style.display="block",K.style.display="none";return}}var Z=document.querySelector(".card-backdrop-modal"),$=document.querySelector(".modal"),X=document.getElementById("modal-close");function ee(){var e;null==Z||Z.classList.add("is-hidden"),null==$||$.classList.add("is-hidden"),null===(e=document.body)||void 0===e||e.classList.remove("modal-open"),document.removeEventListener("keydown",et),document.body.style.overflow="",A.show()}function et(e){"Escape"===e.code&&ee()}$&&(null==Z||Z.addEventListener("click",function(e){e.target===Z&&ee()}),null==X||X.addEventListener("click",function(){ee()}),window.addEventListener("keydown",et)),s("3NENv");var en=document.querySelector(".js-wraper-mobile-menu"),eo=document.querySelector(".js-modal-mobile-menu"),er=document.querySelector(".js-burger"),ea=document.querySelector(".js-close-menu"),es=document.querySelector(".header-container"),el=document.body,ei=document.querySelector(".js-modal-home-btn"),ec=document.querySelector(".js-modal-list-btn"),eu=document.querySelector(".list-btn-svg-menu");null==er||er.addEventListener("click",function(e){null==es||es.classList.add("index"),null==en||en.classList.add("no-scroll"),null==el||el.classList.add("no-scroll"),null==en||en.classList.remove("is-hidden-mobile"),eo.classList.add("active-mobile-menu"),null==er||er.classList.add("is-hidden-btn"),null==ea||ea.classList.remove("is-hidden-btn")}),null==ea||ea.addEventListener("click",function(){null==en||en.classList.remove("no-scroll"),null==er||er.classList.remove("is-hidden-btn"),null==ea||ea.classList.add("is-hidden-btn"),null==el||el.classList.remove("no-scroll"),eo.classList.remove("active-mobile-menu")}),window.location.href===ec.href?(ec.classList.add("current"),ei.classList.remove("current"),eu.classList.remove("fill"),ei.classList.add("pudding")):window.location.href===ei.href&&(ei.classList.remove("pudding"),ec.classList.add("padding"),eu.classList.add("fill")),document.querySelector(".modal-home-btn");var ed=document.querySelector(".modal-list-btn");ed.addEventListener("click",function(){"shoplist"===window.location.href&&"Shopping list"===ed.textContent&&ed.classList.add("current")});var eh=document.querySelector("#checkbox"),ep=document.querySelector("body"),eg={LIGHT:"light-theme",DARK:"dark-theme"},eb="theme";eh&&eh.addEventListener("change",function(e){var t="";e.currentTarget.checked?(t=eg.DARK,ep.classList.add(t),ep.classList.remove(eg.LIGHT)):(t=eg.LIGHT,ep.classList.remove(eg.DARK),ep.classList.add(t)),localStorage.setItem(eb,t)}),(n=localStorage.getItem(eb))?null==ep||ep.classList.add(n):null==ep||ep.classList.add(eg.LIGHT),eh&&(n===eg.DARK?eh.checked=!0:eh.checked=!1),s("jZYs5"),s("cpWtq"),s("hse0H"),s("6A01I")}();
//# sourceMappingURL=index.4cdb4f40.js.map