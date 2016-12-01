var tns=function(){"use strict";function t(t){function i(){return"gallery"===Wt||"page"===t.slideBy?Ut:t.slideBy}function f(){return(kt+Yt)/Ut}function y(){if(Ft<=Ut){Qt=!1;var n;An="gallery"===Wt?0:rn,An!==n&&A.emit("indexChanged",xt()),wn&&c(wn),bn&&c(bn),Sn&&c(Sn)}else Qt=t.arrowKeys,xn&&u(wn),pn&&u(bn),Nn&&u(Sn)}function g(){if(r(Bt,{"data-tns-role":"wrapper"}),r(Rt,{"data-tns-role":"content-wrapper"}),"vertical"===Ht?r(Rt,{"data-tns-hidden":"y"}):r(Bt,{"data-tns-hidden":"x"}),"carousel"===Wt){var t=Jt&&Kt?j():Kt?Kt+Yt:0;Rt.style.cssText="horizontal"===Ht?"margin: 0 "+t+"px;":"padding: "+t+"px 0 "+Kt+"px; height: "+X()+"px;"}}function D(){kt=Jn(),Ut=Yn(),Pt=sn-Ut-Pn,"horizontal"!==Ht||Jt||(an=f()),Dt=Kn(),Xt=i()}function P(){""===Gt.id&&(Gt.id=en),r(Gt,{"data-tns-role":"content","data-tns-mode":Wt,"data-tns-axis":Ht}),"horizontal"===Ht&&(Gt.style.width=(an+1)*sn+"px")}function k(){"carousel"===Wt&&(_t&&r(Gt,{"data-tns-hidden":"y"}),Gt.style[fn]=vn+Math.round(-Mt[An])+"px"+mn)}function N(){navigator.msMaxTouchPoints&&(Bt.classList.add("ms-touch"),h(Bt,["scroll",dt]))}function L(){for(var t=0;t<Ft;t++){var n=jt[t];n.id=en+"-item"+t,"gallery"===Wt&&Xn&&n.classList.add(Xn),r(n,{"aria-hidden":"true"});var e="horizontal"===Ht?"right":"bottom",a="";"carousel"===Wt&&(a="margin-"+e+": "+Yt+"px;"),"horizontal"===Ht&&(a="width: "+(an-Yt)+"px; "+a),n.style.cssText+=a}if($t||Kt){for(var i=document.createDocumentFragment(),o=document.createDocumentFragment(),l=rn;l--;){var c=l%Ft,u=jt[c].cloneNode(!0);if(s(u,"id"),o.insertBefore(u,o.firstChild),"carousel"===Wt){var d=jt[Ft-1-c].cloneNode(!0);s(d,"id"),i.appendChild(d)}}Gt.insertBefore(i,Gt.firstChild),Gt.appendChild(o),jt=Gt.children}}function z(){pn&&(t.controlsContainer?(Tt=bn.children[0],Ct=bn.children[1],r(bn,{"aria-label":"Carousel Navigation"}),r(Tt,{"data-controls":"prev"}),r(Ct,{"data-controls":"next"}),r(bn.children,{"aria-controls":en,tabindex:"-1"})):(gn.append(Bt,'<div data-tns-role="controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+en+'" type="button">'+yn[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+en+'" type="button">'+yn[1]+"</button></div>"),bn=Rt.nextElementSibling,Tt=bn.children[0],Ct=bn.children[1]))}function I(){if(xn)if(t.navContainer){r(wn,{"aria-label":"Carousel Pagination"}),At=wn.children;for(var n=At.length;n--;)r(At[n],{"data-nav":n,tabindex:"-1","aria-selected":"false","aria-controls":en+"-item"+n})}else{for(var e="",a=0;a<Ft;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-selected="false" aria-controls="'+en+"-item"+a+'" type="button"></button>';e='<div data-tns-role="nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(Bt,e),wn=bn.nextElementSibling,At=wn.children;for(var i=Dt;i<Ft;i++)r(At[i],{hidden:""});En=Dt}}function O(){Nn&&(Sn?r(Sn,{"data-action":"stop"}):(wn||(gn.append(Bt,'<div data-tns-role="nav" aria-label="Carousel Pagination"></div>'),wn=Bt.querySelector('[data-tns-role="nav"]')),gn.append(wn,'<button data-action="stop" type="button">'+Bn+In[0]+"</button>"),Sn=wn.querySelector("[data-action]")),it())}function S(){for(var t=An;t<An+Ut;t++){var n=jt[t];r(n,{"aria-hidden":"false"}),"gallery"===Wt&&(n.style.left=an*(t-An)+"px",n.classList.remove(Xn),n.classList.add(Fn))}pn&&(r(Ct,{tabindex:"0"}),(An===kn&&!$t||Zt)&&(Tt.disabled=!0)),xn&&r(At[0],{tabindex:"0","aria-selected":"true"})}function W(){if("carousel"===Wt&&(w&&h(Gt,[w,$]),Rn&&h(Gt,[["touchstart",ft],["touchmove",ht],["touchend",vt],["touchcancel",vt]])),xn)for(var t=0;t<Ft;t++)h(At[t],[["click",at],["keydown",ut]]);pn&&(h(Tt,[["click",nt],["keydown",ct]]),h(Ct,[["click",et],["keydown",ct]])),Nn&&(h(Sn,["click",rt]),On&&(h(Gt,["mouseover",function(){Wn&&(ot(),Hn=!0)}]),h(Gt,["mouseout",function(){!Wn&&Hn&&(it(),Hn=!1)}]))),Qt&&h(document,["keydown",st]),"inner"===qt?A.on("outerResized",function(){wt(),A.emit("innerLoaded",xt())}):(h(window,["resize",Et]),"outer"===qt&&A.on("innerLoaded",B))}function H(){for(var t=[],n=An-1;n<An+Ut+1;n++){for(var e=jt[n].querySelectorAll('[data-tns-role="lazy-img"]'),a=e.length;a--;t.unshift(e[a]));t.unshift()}for(var i=t.length;i--;){var r=t[i];r.classList.contains("loaded")||(r.src=o(r,"data-src"),r.classList.add("loaded"))}}function B(){for(var t=[],n=An;n<An+Ut;n++)for(var e=jt[n].querySelectorAll("img"),a=e.length;a--;)t.push(e[a]);0===t.length?F():R(t)}function R(t){for(var n=t.length;n--;)d(t[n])&&t.splice(n,1);0===t.length?F():setTimeout(function(){R(t)},16)}function G(){gn.wrap(Gt,Rt),gn.wrap(Rt,Bt),D(),P(),L(),U(),g(),k(),N(),z(),I(),O(),S(),W(),y(),nn&&H(),_t&&B(),A.emit("initialized",xt()),"inner"===qt&&A.emit("innerLoaded",xt())}function j(){return(kt%an+Yt)/2}function F(){for(var t,n=[],e=An;e<An+Ut;e++)n.push(jt[e].offsetHeight);t=Math.max.apply(null,n),Gt.style.height!==t&&(b&&Q(Vt),Gt.style.height=t+"px")}function U(){Mt=[0];for(var t,n=jt[0].getBoundingClientRect()[dn],e=1;e<sn;e++)t=jt[e].getBoundingClientRect()[dn],Mt.push(t-n)}function X(){return Mt[An+Ut]-Mt[An]}function q(){Bt.style.msScrollSnapPointsX="snapInterval(0%, "+an+")"}function Y(){var t,n,e,a;An!==Dn&&(An>Dn?(t=Dn,n=Math.min(Dn+Ut,An),e=Math.max(Dn+Ut,An),a=An+Ut):(t=Math.max(An+Ut,Dn),n=Dn+Ut,e=An,a=Math.min(An+Ut,Dn))),Xt%1!==0&&(t=Math.round(t),n=Math.round(n),e=Math.round(e),a=Math.round(a));for(var i=t;i<n;i++)r(jt[i],{"aria-hidden":"true"});for(var o=e;o<a;o++)r(jt[o],{"aria-hidden":"false"})}function K(){xn&&(Mn===-1?t.navContainer?Tn=An%Ft:(Tn=Math.floor(An%Ft/Ut),$t||Ft%Ut===0||An!==Pt||(Tn+=1)):(Tn=Mn,Mn=-1),Tn!==Cn&&(r(At[Cn],{tabindex:"-1","aria-selected":"false"}),r(At[Tn],{tabindex:"0","aria-selected":"true"}),Cn=Tn))}function J(){if(pn&&!$t){var t=[],n=[];if(An===kn?(t.push(Tt),n.push(Ct),lt(Tt,Ct)):Zt||An!==Pt?n.push(Tt,Ct):(t.push(Ct),n.push(Tt),lt(Ct,Tt)),t.length>0)for(var e=t.length;e--;){var a=t[e];a.disabled||(a.disabled=!0,r(a,{tabindex:"-1"}))}if(n.length>0)for(var i=n.length;i--;){var o=n[i];o.disabled&&(o.disabled=!1,r(o,{tabindex:"0"}))}}}function Q(t,n){t=t?t/1e3+"s":"",n=n||Gt,n.style[b]=t,"gallery"===Wt&&(n.style[E]=t),"vertical"===Ht&&(Rt.style[b]=t)}function V(t,n){void 0===t&&(t=Vt),b&&Q(t),Qn(t,n)}function Z(){r(Gt,{"aria-busy":"true"}),cn&&Vn(),An!==Dn&&A.emit("indexChanged",xt()),A.emit("transitionStart",xt()),V()}function $(t){if(A.emit("transitionEnd",xt(t)),"gallery"===Wt&&on.length>0)for(var n=0;n<Ut;n++){var e=on[n];b&&Q(0,e),qn&&x&&(e.style[x]=e.style[M]=""),e.classList.remove(Un),e.classList.add(Xn),e.style.left=""}if(!t||t.target===Gt&&t.propertyName===fn){if(!cn){var a=An;Vn(),An!==a&&(V(0),A.emit("indexChanged",xt()))}Y(),K(),J(),nn&&H(),_t&&B(),"inner"===qt&&A.emit("innerLoaded",xt()),s(Gt,"aria-busy"),_()}}function _(){Dn=An}function tt(t){"true"!==o(Gt,"aria-busy")&&(An+=t*Xt,Z())}function nt(){tt(-1)}function et(){tt(Zt&&An===Pt?-(Pt-kn)/Xt:1)}function at(n){if("true"!==o(Gt,"aria-busy")){for(var e,a=n.target||n.srcElement;gn.indexOf(At,a)===-1;)a=a.parentNode;e=Mn=Number(o(a,"data-nav"));var i="gallery"===Wt?0:rn;An=t.navContainer?e+i:e*Ut+i,An!==Dn&&Z()}}function it(){Nt=setInterval(function(){tt(zn)},Ln),r(Sn,{"data-action":"stop"}),Sn.innerHTML=Bn+In[1],Wn=!0}function ot(){clearInterval(Nt),r(Sn,{"data-action":"start"}),Sn.innerHTML=Bn.replace("Stop","Start")+In[0],Wn=!1}function rt(){Wn?ot():it()}function st(t){switch(t=t||window.event,t.keyCode){case C.LEFT:nt();break;case C.RIGHT:et()}}function lt(t,n){"object"==typeof t&&"object"==typeof n&&t===document.activeElement&&(t.blur(),n.focus())}function ct(t){t=t||window.event;var n=t.keyCode,e=document.activeElement;switch(n){case C.LEFT:case C.UP:case C.HOME:case C.PAGEUP:e!==Tt&&Tt.disabled!==!0&&lt(e,Tt);break;case C.RIGHT:case C.DOWN:case C.END:case C.PAGEDOWN:e!==Ct&&Ct.disabled!==!0&&lt(e,Ct);break;case C.ENTER:case C.SPACE:e===Ct?et():nt()}}function ut(t){t=t||window.event;var n=t.keyCode,e=document.activeElement,a=o(e,"data-nav");switch(n){case C.LEFT:case C.PAGEUP:a>0&&lt(e,e.previousElementSibling);break;case C.UP:case C.HOME:0!==a&&lt(e,At[0]);break;case C.RIGHT:case C.PAGEDOWN:a<Dt-1&&lt(e,e.nextElementSibling);break;case C.DOWN:case C.END:a<Dt-1&&lt(e,At[Dt-1]);break;case C.ENTER:case C.SPACE:at(t)}}function dt(){V(0,Gt.scrollLeft()),_()}function ft(t){t.stopPropagation();var n=t.changedTouches[0];Gn=parseInt(n.clientX),jn=parseInt(n.clientY),Lt=Number(Gt.style[p].slice(11,-3)),A.emit("touchStart",xt(t))}function ht(t){t.stopPropagation();var n=t.changedTouches[0];if(zt=parseInt(n.clientX)-Gn,It=parseInt(n.clientY)-jn,a(e(It,zt),15)===Ht){Ot=!0,t.preventDefault(),A.emit("touchMove",xt(t));var i="horizontal"===Ht?"X("+(Lt+zt):"Y("+(Lt+It);Q(0),Gt.style[p]="translate"+i+"px)"}}function vt(t){t.stopPropagation();var n=t.changedTouches[0];if(zt=parseInt(n.clientX)-Gn,It=parseInt(n.clientY)-jn,Ot){if(Ot=!1,t.preventDefault(),"horizontal"===Ht)An=-(Lt+zt)/an,An=zt>0?Math.floor(An):Math.ceil(An);else{var e=-(Lt+It);if(e<=0)An=kn;else if(e>=Mt[Mt.length-1])An=Pt;else{var a=0;do a++,An=It<0?a+1:a;while(a<sn&&e>=Math.round(Mt[a+1]))}}A.emit("touchEnd",xt(t)),Z()}}function mt(){Gt.style.width=(an+1)*sn+"px";for(var t=sn;t--;)jt[t].style.width=an-Yt+"px"}function pt(){for(var t=An+1,n=An+Ut;t<n;t++)jt[t].style.left=an*(t-An)+"px"}function yt(){Rt.style.cssText="margin: 0px "+j()+"px"}function gt(){Rt.style.height=X()+"px"}function bt(){if(Dt!==En)if(Dt>En)for(var t=En;t<Dt;t++)s(At[t],"hidden");else for(var n=Dt;n<En;n++)r(At[n],{hidden:""});En=Dt}function xt(t){return{container:Gt,slideItems:jt,navItems:At,prevButton:Tt,nextButton:Ct,items:Ut,index:An,indexCached:Dn,navCurrent:Tn,navCurrentCached:Cn,slideCount:Ft,cloneCount:rn,slideCountNew:sn,event:t||{}}}function wt(){var n=An,e=Ut;D(),y(),Vn(),"horizontal"===Ht?(Jt&&Kt?yt():(mt(),"gallery"===Wt&&pt()),U()):(U(),gt()),An!==n&&(A.emit("indexChanged",xt()),Y(),$t||J()),Ut===e||t.navContainer||(bt(),K()),(An!==n||"carousel"===Wt&&!Jt)&&V(0),_t&&B(),(nn&&An!==n||Ut!==e)&&H(),navigator.msMaxTouchPoints&&q()}function Et(t){clearTimeout(St),St=setTimeout(function(){kt!==Jn()&&(wt(),"outer"===qt&&A.emit("outerResized",xt(t)))},100)}if(t=gn.extend({container:document.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1,nested:!1},t||{}),"object"!=typeof t.container||null===t.container)return{destory:function(){},events:A};var Mt,Tt,Ct,At,Dt,Pt,kt,Nt,Lt,zt,It,Ot,St,Wt=t.mode,Ht=t.axis,Bt=document.createElement("div"),Rt=document.createElement("div"),Gt=t.container,jt=Gt.children,Ft=jt.length,Ut=t.items,Xt=i(),qt=t.nested,Yt=t.gutter,Kt="gallery"!==Wt&&t.edgePadding,Jt=t.fixedWidth,Qt=t.arrowKeys,Vt=t.speed,Zt=t.rewind,$t="gallery"===Wt||!t.rewind&&t.loop,_t="gallery"===Wt||t.autoHeight,tn=!Jt&&t.responsive,nn=t.lazyload,en=Gt.id||n(),an=Jt?Jt+Yt:0,on=[],rn=$t?2*Ft:Kt?1:0,sn="gallery"===Wt?Ft+rn:Ft+2*rn,ln=!(!Jt||$t||Kt),cn="gallery"===Wt||!$t,un="horizontal"===Ht?"X":"Y",dn="horizontal"===Ht?"left":"top",fn=dn,hn="translate",vn="",mn="",pn=t.controls,yn=t.controlsText,bn=!!t.controlsContainer&&t.controlsContainer,xn=t.nav,wn=t.navContainer||!1,En=Ft,Mn=-1,Tn=0,Cn=0,An="gallery"===Wt?0:rn,Dn=An,Pn=Kt?1:0,kn=Pn,Nn=t.autoplay,Ln=t.autoplayTimeout,zn="forward"===t.autoplayDirection?1:-1,In=t.autoplayText,On=t.autoplayHoverPause,Sn=t.autoplayButton,Wn=!1,Hn=!1,Bn="<span hidden>Stop Animation</span>",Rn=t.touch,Gn=0,jn=0,Fn=E?t.animateIn:"tns-fadeIn",Un=E?t.animateOut:"tns-fadeOut",Xn=E?t.animateNormal:"tns-normal",qn=!!E&&t.animateDelay;p&&(fn=p,vn=hn+un+"(",mn=")");var Yn=function(){return Jt?function(){return Math.max(1,Math.min(Ft,Math.floor(kt/Jt)))}:function(){var n=t.items,e="object"==typeof tn&&Object.keys(tn);if(e)for(var a=0;a<e.length;a++)kt>=e[a]&&(n=tn[e[a]]);return Math.max(1,Math.min(Ft,n))}}(),Kn=function(){return t.navContainer?function(){return Ft}:function(){return Math.ceil(Ft/Ut)}}(),Jn=function(){return"horizontal"===Ht&&!Jt&&Kt?function(){return Bt.clientWidth-2*(Kt+Yt)}:function(){return Bt.clientWidth}}();G();var Qn=function(){return"carousel"===Wt?function(t,n){n||(n=-Mt[An]),ln&&An===Pt&&(n=Math.max(n,-sn*an+kt+Yt)),b||!t?Gt.style[fn]=vn+Math.round(n)+"px"+mn:m(Gt,fn,vn,mn,n,Vt,$),"vertical"===Ht&&(Rt.style.height=X()+"px")}:function(){on=[],v(jt[Dn],[[w,$],[T,$]]),h(jt[An],[[w,$],[T,$]]),function(){for(var t=Dn,n=Dn+Ut;t<n;t++){var e=jt[t];if(b&&Q(Vt,e),qn&&x){var a=qn*(t-Dn)/1e3;e.style[x]=a+"s",e.style[M]=a+"s"}e.classList.remove(Fn),e.classList.add(Un),on.push(e)}}(),function(){for(var t=An,n=An+Ut;t<n;t++){var e=jt[t];if(b&&Q(Vt,e),qn&&x){var a=qn*(t-An)/1e3;e.style[x]=a+"s",e.style[M]=a+"s"}e.classList.remove(Xn),e.classList.add(Fn),t>An&&(e.style.left=(t-An)*an+"px")}}()}}(),Vn=function(){return $t?function(){var t="carousel"===Wt?Xt+kn:kn,n="carousel"===Wt?Pt-Xt:Pt;if(Jt&&kt%an!==0&&(n-=1),An>n)for(;An>=t+Ft;)An-=Ft;else if(An<t)for(;An<=n-Ft;)An+=Ft}:function(){An=Math.max(kn,Math.min(Pt,An))}}();return{getInfo:xt,events:A,destory:function(){if(gn.unwrap(Bt),gn.unwrap(Rt),Bt=Rt=null,s(Gt,["id","style","data-tns-role","data-tns-features"]),$t)for(var n=rn;n--;)jt[0].remove(),jt[jt.length-1].remove();s(jt,["id","style","aria-hidden"]),en=Ft=null,pn&&(t.controlsContainer?(s(bn,["aria-label"]),s(bn.children,["aria-controls","tabindex"]),l(bn)):(bn.remove(),bn=Tt=Ct=null)),xn&&(t.navContainer?(s(wn,["aria-label"]),s(At,["aria-selected","aria-controls","tabindex"]),l(wn)):(wn.remove(),wn=null),At=null),Nn&&(t.navContainer||null===wn?l(Sn):(wn.remove(),wn=null)),l(Gt),Qt&&v(document,["keydown",st]),v(window,["resize",Et])}}}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function e(t,n){return Math.atan2(t,n)*(180/Math.PI)}function a(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n&&"vertical"}function i(t,n){return t.hasAttribute(n)}function o(t,n){return t.getAttribute(n)}function r(t,n){if(t=gn.isNodeList(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(n))for(var e=t.length;e--;)for(var a in n)t[e].setAttribute(a,n[a])}function s(t,n){t=gn.isNodeList(t)||t instanceof Array?t:[t],n=n instanceof Array?n:[n];for(var e=n.length,a=t.length;a--;)for(var i=e;i--;)t[a].removeAttribute(n[i])}function l(t){var n=t.cloneNode(!0),e=t.parentNode;e.insertBefore(n,t),t.remove(),t=null}function c(t){i(t,"hidden")||r(t,{hidden:""})}function u(t){i(t,"hidden")&&s(t,"hidden")}function d(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function f(t){var n,e=document.createElement("fakeelement");for(n in t)if(void 0!==e.style[n])return[n,t[n][0],t[n][1]];return!1}function h(t,n){function e(n){t.addEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function v(t,n){function e(n){t.removeEventListener(n[0],n[1],!1)}if(Array.isArray(n))if(Array.isArray(n[0]))for(var a=n.length;a--;)e(n[a]);else e(n)}function m(t,n,e,a,i,o,r){function s(){o-=l,c+=u,t.style[n]=e+c+"px"+a,o>0?setTimeout(s,l):r()}var l=Math.min(o,10),c=Number(t.style[n].slice(e.length,-(a.length+2))),u=(i-c)/o*l;setTimeout(s,l)}var p=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),y={transitionDuration:["transitionDelay","transitionend"],WebkitTransitionDuration:["WebkitTransitionDelay","webkitTransitionEnd"],MozTransitionDuration:["MozTransitionDelay","transitionend"],OTransitionDuration:["OTransitionDelay","oTransitionEnd"]},g={animationDuration:["animationDelay","animationend"],WebkitAnimationDuration:["WebkitAnimationDelay","webkitAnimationEnd"],MozAnimationDuration:["MozAnimationDelay","animationend"],OAnimationDuration:["OAnimationDelay","oAnimationEnd"]},b=f(y)[0],x=f(y)[1],w=f(y)[2],E=f(g)[0],M=f(g)[1],T=f(g)[2],C={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},A={events:{},on:function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},off:function(t,n){if(this.events[t])for(var e=0;e<this.events[t].length;e++)if(this.events[t][e]===n){this.events[t].splice(e,1);break}},emit:function(t,n){this.events[t]&&this.events[t].forEach(function(t){t(n)})}};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.native.js.map
