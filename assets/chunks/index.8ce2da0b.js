import{g as f,f as x,r as $,s as y,a as h}from"./index.8a7f7853.js";import{I as p}from"./index.ec731783.js";import{d as m,O as t,V as C,g as I,L as u,a8 as S}from"./framework.683b9a23.js";const N=5;var _=m({name:"DotLoading",props:{size:{type:Number}},setup(e){const i=f("dot-loading");return()=>{const n=e.size?{width:`${e.size}px`,height:`${e.size}px`}:{};return t("div",{class:i,style:{width:e.size?`${e.size*7}px`:void 0,height:e.size?`${e.size}px`:void 0}},[Array(N).fill(1).map((o,l)=>t("div",{class:`${i}-item`,key:l,style:n},null))])}}}),s=m({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String,hideIcon:{type:Boolean,default:!1}},setup(e,{slots:i}){const n=f("spin"),o=C(x,void 0),l=I(()=>[n,{[`${n}-loading`]:e.loading,[`${n}-with-tip`]:e.tip&&!i.default}]),g=()=>{if(i.icon){const a=$(i.icon());if(a)return S(a,{spin:!0})}return i.element?i.element():e.dot?t(_,{size:e.size},null):o!=null&&o.slots.loading?o.slots.loading():t(p,{spin:!0,size:e.size},null)},c=()=>{var a,d,r;const v=e.size?{fontSize:`${e.size}px`}:void 0,z=!!((a=i.tip)!=null?a:e.tip);return t(u,null,[!e.hideIcon&&t("div",{class:`${n}-icon`,style:v},[g()]),z&&t("div",{class:`${n}-tip`},[(r=(d=i.tip)==null?void 0:d.call(i))!=null?r:e.tip])])};return()=>t("div",{class:l.value},[i.default?t(u,null,[i.default(),e.loading&&t("div",{class:`${n}-mask`},[t("div",{class:`${n}-mask-icon`},[c()])])]):c()])}});const P=Object.assign(s,{install:(e,i)=>{y(e,i);const n=h(i);e.component(n+s.name,s)}});export{P as S};
