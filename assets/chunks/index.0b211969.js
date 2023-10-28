import{n as Ue,_ as Ye,g as Be,j as Ke,h as Je,q as Qe,e as Re,f as et,r as tt,t as ot,s as lt,a as nt}from"./index.517ce50b.js";import{d as W,g as S,o as rt,c as at,n as it,Q as st,k as ut,h as m,j as z,D as K,v as k,a5 as J,V as ct,a3 as dt,O as fe,Y as ft,a4 as ht,ad as vt,J as y,ae as mt,N as wt,T as gt,a8 as pt,a9 as yt,F as bt,R as he}from"./framework.4e1b6783.js";import{i as Me}from"./ResizeObserver.es.0f9f8adb.js";const ke=typeof window>"u"?global:window,_t=ke.requestAnimationFrame,ve=ke.cancelAnimationFrame;function me(e){let t=0;const o=(...l)=>{t&&ve(t),t=_t(()=>{e(...l),t=0})};return o.cancel=()=>{ve(t),t=0},o}const Q=()=>{},R=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),Z=(()=>R?Q:(e,t,o,l=!1)=>{e.addEventListener(t,o,l)})(),we=(()=>R?Q:(e,t,o,l=!1)=>{e.removeEventListener(t,o,l)})(),St=(e,t)=>{var o;return R?Q():(o=(t??document).querySelector(e))!=null?o:void 0},ge=(e,t)=>{if(Ue(e)){const o=e[0]==="#"?`[id='${e.slice(1)}']`:e;return St(o,t)}return e},ho=(e,t)=>{const o=e.getBoundingClientRect(),l=t.getBoundingClientRect();return{top:o.top-l.top,bottom:l.bottom-o.bottom,left:o.left-l.left,right:l.right-o.right,width:o.width,height:o.height}},Ot=W({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const o=Be("icon"),l=S(()=>[o,`${o}-loading`,{[`${o}-spin`]:e.spin}]),r=S(()=>{const a={};return e.size&&(a.fontSize=Ke(e.size)?`${e.size}px`:e.size),e.rotate&&(a.transform=`rotate(${e.rotate}deg)`),a});return{cls:l,innerStyle:r,onClick:a=>{t("click",a)}}}}),Ct=["stroke-width","stroke-linecap","stroke-linejoin"],Pt=ut("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),Et=[Pt];function Tt(e,t,o,l,r,i){return rt(),at("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:it(e.cls),style:st(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...a)=>e.onClick&&e.onClick(...a))},Et,14,Ct)}var G=Ye(Ot,[["render",Tt]]);const vo=Object.assign(G,{install:(e,t)=>{var o;const l=(o=t==null?void 0:t.iconPrefix)!=null?o:"";e.component(l+G.name,G)}});var Bt=Object.defineProperty,pe=Object.getOwnPropertySymbols,Mt=Object.prototype.hasOwnProperty,kt=Object.prototype.propertyIsEnumerable,ye=(e,t,o)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,zt=(e,t)=>{for(var o in t||(t={}))Mt.call(t,o)&&ye(e,o,t[o]);if(pe)for(var o of pe(t))kt.call(t,o)&&ye(e,o,t[o]);return e};const xt=(e,t)=>{const o=zt({},e);for(const l of t)l in o&&delete o[l];return o};var Lt=Object.defineProperty,be=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,_e=(e,t,o)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,B=(e,t)=>{for(var o in t||(t={}))$t.call(t,o)&&_e(e,o,t[o]);if(be)for(var o of be(t))Ft.call(t,o)&&_e(e,o,t[o]);return e};const At=()=>{const{body:e}=document,t=document.documentElement;let o;try{o=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight,(o==null?void 0:o.scrollHeight)||0,(o==null?void 0:o.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,t.clientWidth,t.scrollWidth,t.offsetWidth,(o==null?void 0:o.scrollWidth)||0,(o==null?void 0:o.clientWidth)||0)}},jt=()=>{const{height:e,width:t}=At();return{width:Math.min(t,window.innerWidth),height:Math.min(e,window.innerHeight)}},Se=(e,t)=>{var o,l;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:(o=e.offsetWidth)!=null?o:e.clientWidth,height:(l=e.offsetHeight)!=null?l:e.clientHeight}},Wt=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},j=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Nt=(e,t,{containerRect:o,triggerRect:l,popupRect:r,offset:i,translate:a})=>{const c=Wt(e),u=jt(),d={top:o.top+t.top,bottom:u.height-(o.top+t.top+r.height),left:o.left+t.left,right:u.width-(o.left+t.left+r.width)};let f=e;if(c==="top"&&d.top<0)if(l.top>r.height)t.top=-o.top;else{const v=M("bottom",l,r,{offset:i,translate:a});u.height-(o.top+v.top+r.height)>0&&(f=j(e,"bottom"),t.top=v.top)}if(c==="bottom"&&d.bottom<0)if(u.height-l.bottom>r.height)t.top=-o.top+(u.height-r.height);else{const v=M("top",l,r,{offset:i,translate:a});o.top+v.top>0&&(f=j(e,"top"),t.top=v.top)}if(c==="left"&&d.left<0)if(l.left>r.width)t.left=-o.left;else{const v=M("right",l,r,{offset:i,translate:a});u.width-(o.left+v.left+r.width)>0&&(f=j(e,"right"),t.left=v.left)}if(c==="right"&&d.right<0)if(u.width-l.right>r.width)t.left=-o.left+(u.width-r.width);else{const v=M("left",l,r,{offset:i,translate:a});o.left+v.left>0&&(f=j(e,"left"),t.left=v.left)}return(c==="top"||c==="bottom")&&(d.left<0?t.left=-o.left:d.right<0&&(t.left=-o.left+(u.width-r.width))),(c==="left"||c==="right")&&(d.top<0?t.top=-o.top:d.bottom<0&&(t.top=-o.top+(u.height-r.height))),{popupPosition:t,position:f}},M=(e,t,o,{offset:l=0,translate:r=[0,0]}={})=>{var i;const a=(i=Je(r)?r:r[e])!=null?i:[0,0];switch(e){case"top":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(o.width/2)+a[0],top:t.scrollTop-o.height-l+a[1]};case"tl":return{left:t.scrollLeft+a[0],top:t.scrollTop-o.height-l+a[1]};case"tr":return{left:t.scrollRight-o.width+a[0],top:t.scrollTop-o.height-l+a[1]};case"bottom":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(o.width/2)+a[0],top:t.scrollBottom+l+a[1]};case"bl":return{left:t.scrollLeft+a[0],top:t.scrollBottom+l+a[1]};case"br":return{left:t.scrollRight-o.width+a[0],top:t.scrollBottom+l+a[1]};case"left":return{left:t.scrollLeft-o.width-l+a[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(o.height/2)+a[1]};case"lt":return{left:t.scrollLeft-o.width-l+a[0],top:t.scrollTop+a[1]};case"lb":return{left:t.scrollLeft-o.width-l+a[0],top:t.scrollBottom-o.height+a[1]};case"right":return{left:t.scrollRight+l+a[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(o.height/2)+a[1]};case"rt":return{left:t.scrollRight+l+a[0],top:t.scrollTop+a[1]};case"rb":return{left:t.scrollRight+l+a[0],top:t.scrollBottom-o.height+a[1]};default:return{left:0,top:0}}},Dt=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let o="0";return["left","right"].includes(e)?o="50%":["top","tl","tr","lt","rt"].includes(e)&&(o="100%"),`${t} ${o}`},It=(e,t,o,l,{offset:r=0,translate:i=[0,0],customStyle:a={},autoFitPosition:c=!1}={})=>{let u=e,d=M(e,o,l,{offset:r,translate:i});if(c){const v=Nt(e,d,{containerRect:t,popupRect:l,triggerRect:o,offset:r,translate:i});d=v.popupPosition,u=v.position}return{style:B({left:`${d.left}px`,top:`${d.top}px`},a),position:u}},Vt=(e,t,o,{customStyle:l={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let i=Math.abs(t.scrollLeft+t.width/2-o.scrollLeft);return i>o.width-8&&(t.width>o.width?i=o.width/2:i=o.width-8),["top","tl","tr"].includes(e)?B({left:`${i}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},l):B({left:`${i}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)}let r=Math.abs(t.scrollTop+t.height/2-o.scrollTop);return r>o.height-8&&(t.height>o.height?r=o.height/2:r=o.height-8),["left","lt","lb"].includes(e)?B({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},l):B({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)},Ht=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,Oe=e=>{var t;const o=[];let l=e;for(;l&&l!==document.documentElement;)Ht(l)&&o.push(l),l=(t=l.parentElement)!=null?t:void 0;return o},ze=()=>{const e={},t=m(),o=()=>{const l=Qe(e.value);l!==t.value&&(t.value=l)};return z(()=>o()),K(()=>o()),{children:e,firstElement:t}};var Ce=W({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:t,slots:o}){const{children:l,firstElement:r}=ze();let i;const a=u=>{u&&(i=new Me(d=>{const f=d[0];t("resize",f)}),i.observe(u))},c=()=>{i&&(i.disconnect(),i=null)};return k(r,u=>{i&&c(),u&&a(u)}),J(()=>{i&&c()}),()=>{var u;return l.value=(u=o.default)==null?void 0:u.call(o),l.value}}});function qt(e,t){const o=m(e[t]);return K(()=>{const l=e[t];o.value!==l&&(o.value=l)}),o}const Pe=Symbol("ArcoTrigger"),Xt=1e3,Zt=5e3,Gt=1;class Ut{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>(t==="message"?Array.from(this.popupStack.message).pop()||Zt:Array.from(this.popupStack.popup).pop()||Xt)+Gt,this.add=t=>{const o=this.getNextZIndex(t);return this.popupStack[t].add(o),t==="dialog"&&this.popupStack.popup.add(o),o},this.delete=(t,o)=>{this.popupStack[o].delete(t),o==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>this.popupStack.dialog.size>1?t===Array.from(this.popupStack.dialog).pop():!0}}const U=new Ut;function Yt(e,{visible:t,runOnMounted:o}={}){const l=m(0),r=()=>{l.value=U.add(e)},i=()=>{U.delete(l.value,e)},a=()=>e==="dialog"?U.isLastDialog(l.value):!1;return k(()=>t==null?void 0:t.value,c=>{c?r():i()},{immediate:!0}),o&&(z(()=>{r()}),J(()=>{i()})),{zIndex:ct(l),open:r,close:i,isLastDialog:a}}const Kt=({elementRef:e,onResize:t})=>{let o;return{createResizeObserver:()=>{e.value&&(o=new Me(i=>{const a=i[0];Re(t)&&t(a)}),o.observe(e.value))},destroyResizeObserver:()=>{o&&(o.disconnect(),o=null)}}};var Jt=W({name:"ClientOnly",setup(e,{slots:t}){const o=m(!1);return z(()=>o.value=!0),()=>{var l;return o.value?(l=t.default)==null?void 0:l.call(t):null}}});const Qt=({popupContainer:e,visible:t,defaultContainer:o="body",documentContainer:l})=>{const r=m(e.value),i=m(),a=()=>{const c=ge(e.value),u=c?e.value:o,d=c??(l?document.documentElement:ge(o));u!==r.value&&(r.value=u),d!==i.value&&(i.value=d)};return z(()=>a()),k(t,c=>{r.value!==e.value&&c&&a()}),{teleportContainer:r,containerRef:i}};var Rt=Object.defineProperty,eo=Object.defineProperties,to=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,oo=Object.prototype.hasOwnProperty,lo=Object.prototype.propertyIsEnumerable,Te=(e,t,o)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,no=(e,t)=>{for(var o in t||(t={}))oo.call(t,o)&&Te(e,o,t[o]);if(Ee)for(var o of Ee(t))lo.call(t,o)&&Te(e,o,t[o]);return e},ro=(e,t)=>eo(e,to(t));const ao=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var Y=W({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:t,slots:o,attrs:l}){const{popupContainer:r}=dt(e),i=Be("trigger"),a=S(()=>xt(l,ao)),c=fe(et,void 0),u=S(()=>[].concat(e.trigger)),d=new Set,f=fe(Pe,void 0),{children:v,firstElement:P}=ze(),O=m(),ee=m(e.defaultPopupVisible),x=m(e.position),te=m({}),oe=m({}),le=m({}),xe=m(),b=m({top:0,left:0}),h=S(()=>{var n;return(n=e.popupVisible)!=null?n:ee.value}),{teleportContainer:Le,containerRef:N}=Qt({popupContainer:r,visible:h,documentContainer:!0}),{zIndex:$e}=Yt("popup",{visible:h});let E=0,_=!1,D=!1;const Fe=()=>{E&&(window.clearTimeout(E),E=0)},I=n=>{if(e.alignPoint){const{pageX:s,pageY:w}=n;b.value={top:w,left:s}}},C=()=>{if(!P.value||!O.value||!N.value)return;const n=N.value.getBoundingClientRect(),s=e.alignPoint?{top:b.value.top,bottom:b.value.top,left:b.value.left,right:b.value.left,scrollTop:b.value.top,scrollBottom:b.value.top,scrollLeft:b.value.left,scrollRight:b.value.left,width:0,height:0}:Se(P.value,n),w=()=>Se(O.value,n),F=w(),{style:T,position:A}=It(e.position,n,s,F,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(oe.value={transformOrigin:Dt(A)}),e.autoFitPopupMinWidth?T.minWidth=`${s.width}px`:e.autoFitPopupWidth&&(T.width=`${s.width}px`),x.value!==A&&(x.value=A),te.value=T,e.showArrow&&he(()=>{le.value=Vt(A,s,w(),{customStyle:e.arrowStyle})})},g=(n,s)=>{if(n===h.value&&E===0)return;const w=()=>{ee.value=n,t("update:popupVisible",n),t("popupVisibleChange",n),n&&he(()=>{C()})};s?(Fe(),n!==h.value&&(E=window.setTimeout(w,s))):w()},Ae=n=>{var s;(s=l.onClick)==null||s.call(l,n),!(e.disabled||h.value&&!e.clickToClose)&&(u.value.includes("click")?(I(n),g(!h.value)):u.value.includes("contextMenu")&&h.value&&g(!1))},ne=n=>{var s;(s=l.onMouseenter)==null||s.call(l,n),!(e.disabled||!u.value.includes("hover"))&&(I(n),g(!0,e.mouseEnterDelay))},re=n=>{f==null||f.onMouseenter(n),ne(n)},ae=n=>{var s;(s=l.onMouseleave)==null||s.call(l,n),!(e.disabled||!u.value.includes("hover"))&&g(!1,e.mouseLeaveDelay)},ie=n=>{f==null||f.onMouseleave(n),ae(n)},je=n=>{var s;(s=l.onFocusin)==null||s.call(l,n),!(e.disabled||!u.value.includes("focus"))&&g(!0,e.focusDelay)},We=n=>{var s;(s=l.onFocusout)==null||s.call(l,n),!(e.disabled||!u.value.includes("focus"))&&e.blurToClose&&g(!1)},Ne=n=>{var s;(s=l.onContextmenu)==null||s.call(l,n),!(e.disabled||!u.value.includes("contextMenu")||h.value&&!e.clickToClose)&&(I(n),g(!h.value),n.preventDefault())};ft(Pe,ht({onMouseenter:re,onMouseleave:ie,addChildRef:n=>{d.add(n),f==null||f.addChildRef(n)},removeChildRef:n=>{d.delete(n),f==null||f.removeChildRef(n)}}));const V=()=>{we(document.documentElement,"mousedown",H),_=!1},se=qt(o,"content"),De=S(()=>{var n;return e.hideEmpty&&tt((n=se.value)==null?void 0:n.call(se))}),H=n=>{var s,w,F;if(!((s=P.value)!=null&&s.contains(n.target)||(w=O.value)!=null&&w.contains(n.target))){for(const T of d)if((F=T.value)!=null&&F.contains(n.target))return;V(),g(!1)}},L=me(()=>{h.value&&(e.scrollToClose||c!=null&&c.scrollToClose?g(!1):C())}),ue=()=>{we(window,"scroll",ce),D=!1},ce=me(()=>{g(!1),ue()}),q=()=>{h.value&&C()},Ie=()=>{q(),t("resize")},Ve=n=>{e.preventFocus&&n.preventDefault()};f==null||f.addChildRef(O);const He=S(()=>h.value?e.openedClass:void 0);let p;k(h,n=>{if(e.clickOutsideToClose&&(!n&&_?V():n&&!_&&(Z(document.documentElement,"mousedown",H),_=!0)),(e.scrollToClose||c!=null&&c.scrollToClose)&&(Z(window,"scroll",ce),D=!0),e.updateAtScroll||c!=null&&c.updateAtScroll){if(n){p=Oe(P.value);for(const s of p)s.addEventListener("scroll",L)}else if(p){for(const s of p)s.removeEventListener("scroll",L);p=void 0}}n&&(X.value=!0)}),k(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{h.value&&C()});const{createResizeObserver:qe,destroyResizeObserver:Xe}=Kt({elementRef:N,onResize:q});z(()=>{if(qe(),h.value&&(C(),e.clickOutsideToClose&&!_&&(Z(document.documentElement,"mousedown",H),_=!0),e.updateAtScroll||c!=null&&c.updateAtScroll)){p=Oe(P.value);for(const n of p)n.addEventListener("scroll",L)}}),K(()=>{h.value&&C()}),vt(()=>{g(!1)}),J(()=>{if(f==null||f.removeChildRef(O),Xe(),_&&V(),D&&ue(),p){for(const n of p)n.removeEventListener("scroll",L);p=void 0}});const X=m(h.value),$=m(!1),de=()=>{$.value=!0},Ze=()=>{$.value=!1,h.value&&t("show")},Ge=()=>{$.value=!1,h.value||(X.value=!1,t("hide"))};return()=>{var n,s;return v.value=(s=(n=o.default)==null?void 0:n.call(o))!=null?s:[],ot(v.value,{class:He.value,onClick:Ae,onMouseenter:ne,onMouseleave:ae,onFocusin:je,onFocusout:We,onContextmenu:Ne}),y(bt,null,[e.autoFixPosition?y(Ce,{onResize:Ie},{default:()=>[v.value]}):v.value,y(Jt,null,{default:()=>[y(mt,{to:Le.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||h.value||X.value)&&!De.value&&y(Ce,{onResize:q},{default:()=>[y("div",wt({ref:O,class:[`${i}-popup`,`${i}-position-${x.value}`],style:ro(no({},te.value),{zIndex:$e.value,pointerEvents:$.value?"none":"auto"}),"trigger-placement":x.value,onMouseenter:re,onMouseleave:ie,onMousedown:Ve},a.value),[y(gt,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:de,onAfterEnter:Ze,onBeforeLeave:de,onAfterLeave:Ge},{default:()=>{var w;return[pt(y("div",{class:`${i}-popup-wrapper`,style:oe.value},[y("div",{class:[`${i}-content`,e.contentClass],style:e.contentStyle},[(w=o.content)==null?void 0:w.call(o)]),e.showArrow&&y("div",{ref:xe,class:[`${i}-arrow`,e.arrowClass],style:le.value},null)]),[[yt,h.value]])]}})])]})]})]})])}}});const mo=Object.assign(Y,{install:(e,t)=>{lt(e,t);const o=nt(t);e.component(o+Y.name,Y)}});export{vo as I,Ce as R,mo as T,we as a,xt as b,ve as c,ho as g,R as i,Z as o,St as q,_t as r,Yt as u};