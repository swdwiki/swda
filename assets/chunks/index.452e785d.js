import{h as p,_ as w,g as V,s as S,a as P}from"./index.8a7f7853.js";import{h as b,a5 as h,x as _,g as a,d as O,K as T,o as $,b as j,w as c,r as f,a as k,t as B,n as A}from"./framework.683b9a23.js";import{T as z}from"./index.6ced3d4b.js";function E(e){const t=b(e);return[t,n=>{t.value=n}]}function U(e,t){const{value:o}=h(t),[n,l]=E(p(o.value)?e:o.value);return _(o,s=>{p(s)&&l(void 0)}),[a(()=>p(o.value)?n.value:o.value),l,n]}var I=Object.defineProperty,d=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,g=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&g(e,o,t[o]);if(d)for(var o of d(t))D.call(t,o)&&g(e,o,t[o]);return e};const G=O({name:"Tooltip",components:{Trigger:z},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},content:String,position:{type:String,default:"top"},mini:{type:Boolean,default:!1},backgroundColor:{type:String},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:t}){const o=V("tooltip"),n=b(e.defaultPopupVisible),l=a(()=>{var r;return(r=e.popupVisible)!=null?r:n.value}),i=r=>{n.value=r,t("update:popupVisible",r),t("popupVisibleChange",r)},s=a(()=>[`${o}-content`,e.contentClass,{[`${o}-mini`]:e.mini}]),C=a(()=>{if(e.backgroundColor||e.contentStyle)return m({backgroundColor:e.backgroundColor},e.contentStyle)}),y=a(()=>[`${o}-popup-arrow`,e.arrowClass]),v=a(()=>{if(e.backgroundColor||e.arrowStyle)return m({backgroundColor:e.backgroundColor},e.arrowStyle)});return{prefixCls:o,computedPopupVisible:l,contentCls:s,computedContentStyle:C,arrowCls:y,computedArrowStyle:v,handlePopupVisibleChange:i}}});function K(e,t,o,n,l,i){const s=T("Trigger");return $(),j(s,{class:A(e.prefixCls),trigger:"hover",position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"show-arrow":"","content-class":e.contentCls,"content-style":e.computedContentStyle,"arrow-class":e.arrowCls,"arrow-style":e.computedArrowStyle,"popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",role:"tooltip",onPopupVisibleChange:e.handlePopupVisibleChange},{content:c(()=>[f(e.$slots,"content",{},()=>[k(B(e.content),1)])]),default:c(()=>[f(e.$slots,"default")]),_:3},8,["class","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var u=w(G,[["render",K]]);const q=Object.assign(u,{install:(e,t)=>{S(e,t);const o=P(t);e.component(o+u.name,u)}});export{q as T,U as u};