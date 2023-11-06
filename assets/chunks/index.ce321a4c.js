import{_ as G,g as T,h as ie,s as me,a as he}from"./index.8a7f7853.js";import{d as w,V as oe,g as v,K as ee,o as K,c as D,k as ge,r as se,n as R,b as $e,w as pe,O as u,a3 as Ce,e as re,U as ke,a9 as _e,a5 as E,h as g,j as ue,E as L,J as ce,W as xe,x as U,a6 as F,a0 as Be,a7 as Se,D as Ie}from"./framework.683b9a23.js";import{I as J,R as te}from"./icon-hover.a3d0803b.js";import{I as Oe}from"./index.2a01ce05.js";import{a as ze,I as Te}from"./index.560a6753.js";import{I as we,a as Pe}from"./index.d250733d.js";import{I as Ke}from"./index.33ee6aa9.js";import{u as Re}from"./use-size.d0f4c4cf.js";import{u as je}from"./use-children-components.bd841548.js";const He=({direction:e,type:a,offset:t})=>e==="vertical"?{transform:`translateY(${-t}px)`}:{transform:`translateX(${-t}px)`},X=Symbol("ArcoTabs"),Ne=w({name:"TabsTab",components:{IconHover:J,IconClose:Oe},props:{tab:{type:Object,required:!0},active:Boolean,editable:Boolean},emits:["click","delete"],setup(e,{emit:a}){const t=T("tabs-tab"),f=oe(X,{}),d=r=>{e.tab.disabled||a("click",e.tab.key,r)},m=r=>{r.key==="Enter"&&d(r)},o=v(()=>Object.assign(f.trigger==="click"?{onClick:d}:{onMouseover:d},{onKeydown:m})),i=r=>{e.tab.disabled||a("delete",e.tab.key,r)},s=v(()=>[t,{[`${t}-active`]:e.active,[`${t}-closable`]:e.editable&&e.tab.closable,[`${t}-disabled`]:e.tab.disabled}]);return{prefixCls:t,cls:s,eventHandlers:o,handleDelete:i}}});function Ae(e,a,t,f,d,m){const o=ee("icon-close"),i=ee("icon-hover");return K(),D("div",ke({tabindex:"0",class:e.cls},e.eventHandlers),[ge("span",{class:R(`${e.prefixCls}-title`)},[se(e.$slots,"default")],2),e.editable&&e.tab.closable?(K(),$e(i,{key:0,class:R(`${e.prefixCls}-close-btn`),onClick:Ce(e.handleDelete,["stop"])},{default:pe(()=>[u(o)]),_:1},8,["class","onClick"])):re("v-if",!0)],16)}var De=G(Ne,[["render",Ae]]);function Le(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_e(e)}var ae=w({name:"TabsButton",props:{type:{type:String,default:"next"},direction:{type:String,default:"horizontal"},disabled:{type:Boolean,default:!1},onClick:{type:Function}},emits:["click"],setup(e,{emit:a}){const t=T("tabs-nav-button"),f=o=>{e.disabled||a("click",e.type,o)},d=()=>e.direction==="horizontal"?e.type==="next"?u(ze,null,null):u(Te,null,null):e.type==="next"?u(Ke,null,null):u(we,null,null),m=v(()=>[t,{[`${t}-disabled`]:e.disabled,[`${t}-left`]:e.direction==="horizontal"&&e.type==="previous",[`${t}-right`]:e.direction==="horizontal"&&e.type==="next",[`${t}-up`]:e.direction==="vertical"&&e.type==="previous",[`${t}-down`]:e.direction==="vertical"&&e.type==="next"}]);return()=>{let o;return u("div",{class:m.value,onClick:f},[u(J,{disabled:e.disabled},Le(o=d())?o:{default:()=>[o]})])}}});const Ee=w({name:"TabsNavInk",props:{activeTabRef:{type:Object},direction:{type:String},disabled:Boolean,animation:Boolean},setup(e){const{activeTabRef:a}=E(e),t=T("tabs-nav-ink"),f=g(0),d=g(0),m=v(()=>e.direction==="vertical"?{top:`${f.value}px`,height:`${d.value}px`}:{left:`${f.value}px`,width:`${d.value}px`}),o=()=>{if(a.value){const s=e.direction==="vertical"?a.value.offsetTop:a.value.offsetLeft,r=e.direction==="vertical"?a.value.offsetHeight:a.value.offsetWidth;(s!==f.value||r!==d.value)&&(f.value=s,d.value=r)}};ue(()=>{L(()=>o())}),ce(()=>{o()});const i=v(()=>[t,{[`${t}-animation`]:e.animation,[`${t}-disabled`]:e.disabled}]);return{prefixCls:t,cls:i,style:m}}});function We(e,a,t,f,d,m){return K(),D("div",{class:R(e.cls),style:xe(e.style)},null,6)}var qe=G(Ee,[["render",We]]),Ve=w({name:"TabsNav",props:{tabs:{type:Array,required:!0},direction:{type:String,required:!0},type:{type:String,required:!0},activeKey:{type:[String,Number]},activeIndex:{type:Number,required:!0},position:{type:String,required:!0},size:{type:String,required:!0},showAddButton:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},animation:{type:Boolean,required:!0},headerPadding:{type:Boolean,default:!0}},emits:["click","add","delete"],setup(e,{emit:a,slots:t}){const{tabs:f,activeKey:d,activeIndex:m,direction:o}=E(e),i=T("tabs-nav"),s=g(),r=g(),k=g({}),_=v(()=>{if(!ie(d.value))return k.value[d.value]}),p=g(),x=v(()=>e.editable&&["line","card","card-gutter"].includes(e.type)),y=g(!1),C=g(0),B=g(0),S=g([]),b=g(0),I=()=>{var n,c,z;return(z=o.value==="vertical"?(n=s.value)==null?void 0:n.offsetHeight:(c=s.value)==null?void 0:c.offsetWidth)!=null?z:0},j=()=>!r.value||!s.value?0:o.value==="vertical"?r.value.offsetHeight-s.value.offsetHeight:r.value.offsetWidth-s.value.offsetWidth,H=()=>f.value.map(n=>{const c=k.value[n.key];return o.value==="vertical"?c.offsetTop+c.offsetHeight:c.offsetLeft+c.offsetWidth}),O=()=>{y.value=W(),y.value?(C.value=I(),B.value=j(),S.value=H(),b.value>B.value&&(b.value=B.value)):b.value=0},W=()=>s.value&&r.value?e.direction==="vertical"?r.value.offsetHeight>s.value.offsetHeight:r.value.offsetWidth>s.value.offsetWidth:!1,N=n=>{var c;return((c=S.value[n-1])!=null?c:0)>=b.value&&S.value[n]<=b.value+C.value},A=n=>s.value?n==="previous"?b.value-C.value:b.value+C.value:0,q=n=>!s.value||!r.value||n<0?0:n>B.value?B.value:n,l=(n,c)=>{a("click",n,c)},h=(n,c)=>{a("delete",n,c)},P=n=>{b.value=q(A(n))},de=()=>{O(),p.value&&p.value.$forceUpdate()};U(f,()=>{L(()=>{O()})}),U(m,(n,c)=>{L(()=>{var z;if(y.value)if(n>=c){const $=n<S.value.length-1?n+1:n;N($)||(b.value=S.value[$]-C.value)}else{const $=n>0?n-1:n;N($)||(b.value=(z=S.value[$-1])!=null?z:0)}})}),ue(()=>{O()});const Y=()=>!x.value||!e.showAddButton?null:u("div",{class:`${i}-add-btn`,onClick:n=>a("add",n)},[u(J,null,{default:()=>[u(Pe,null,null)]})]),ve=v(()=>[i,`${i}-${e.direction}`,`${i}-${e.position}`,`${i}-size-${e.size}`,`${i}-type-${e.type}`]),fe=v(()=>[`${i}-tab-list`,{[`${i}-tab-list-no-padding`]:!e.headerPadding&&["line","text"].includes(e.type)&&e.direction==="horizontal"}]),ye=v(()=>He({direction:e.direction,type:e.type,offset:b.value})),be=v(()=>[`${i}-tab`,{[`${i}-tab-scroll`]:y.value}]);return()=>{var n;return u("div",{class:ve.value},[y.value&&u(ae,{type:"previous",direction:e.direction,disabled:b.value<=0,onClick:P},null),u(te,{onResize:()=>O()},{default:()=>[u("div",{class:be.value,ref:s},[u(te,{onResize:de},{default:()=>[u("div",{ref:r,class:fe.value,style:ye.value},[e.tabs.map((c,z)=>u(De,{key:c.key,ref:$=>{$!=null&&$.$el&&(k.value[c.key]=$.$el)},active:c.key===d.value,tab:c,editable:e.editable,onClick:l,onDelete:h},{default:()=>{var $,Q,Z;return[(Z=(Q=($=c.slots).title)==null?void 0:Q.call($))!=null?Z:c.title]}})),e.type==="line"&&_.value&&u(qe,{ref:p,activeTabRef:_.value,direction:e.direction,disabled:!1,animation:e.animation},null)])]}),!y.value&&Y()])]}),y.value&&u(ae,{type:"next",direction:e.direction,disabled:b.value>=B.value,onClick:P},null),u("div",{class:`${i}-extra`},[y.value&&Y(),(n=t.extra)==null?void 0:n.call(t)])])}}}),V=w({name:"Tabs",props:{activeKey:{type:[String,Number],default:void 0},defaultActiveKey:{type:[String,Number],default:void 0},position:{type:String,default:"top"},size:{type:String},type:{type:String,default:"line"},direction:{type:String,default:"horizontal"},editable:{type:Boolean,default:!1},showAddButton:{type:Boolean,default:!1},destroyOnHide:{type:Boolean,default:!1},lazyLoad:{type:Boolean,default:!1},justify:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},headerPadding:{type:Boolean,default:!0},autoSwitch:{type:Boolean,default:!1},hideContent:{type:Boolean,default:!1},trigger:{type:String,default:"click"}},emits:{"update:activeKey":e=>!0,change:e=>!0,tabClick:(e,a)=>!0,add:e=>!0,delete:(e,a)=>!0},setup(e,{emit:a,slots:t}){const{size:f,lazyLoad:d,destroyOnHide:m,trigger:o}=E(e),i=T("tabs"),{mergedSize:s}=Re(f),r=v(()=>e.direction==="vertical"?"left":e.position),k=v(()=>["left","right"].includes(r.value)?"vertical":"horizontal"),{children:_,components:p}=je("TabPane"),x=F(new Map),y=v(()=>{const l=[];return p.value.forEach(h=>{const P=x.get(h);P&&l.push(P)}),l}),C=v(()=>y.value.map(l=>l.key)),B=(l,h)=>{x.set(l,h)},S=l=>{x.delete(l)},b=g(e.defaultActiveKey),I=v(()=>{var l;const h=(l=e.activeKey)!=null?l:b.value;return ie(h)?C.value[0]:h}),j=v(()=>{const l=C.value.indexOf(I.value);return l===-1?0:l});Be(X,F({lazyLoad:d,destroyOnHide:m,activeKey:I,addItem:B,removeItem:S,trigger:o}));const H=l=>{l!==I.value&&(b.value=l,a("update:activeKey",l),a("change",l))},O=(l,h)=>{H(l),a("tabClick",l,h)},W=l=>{a("add",l),e.autoSwitch&&L(()=>{const h=C.value[C.value.length-1];H(h)})},N=(l,h)=>{a("delete",l,h)},A=()=>u("div",{class:[`${i}-content`,{[`${i}-content-hide`]:e.hideContent}]},[u("div",{class:[`${i}-content-list`,{[`${i}-content-animation`]:e.animation}],style:{marginLeft:`-${j.value*100}%`}},[_.value])]),q=v(()=>[i,`${i}-${k.value}`,`${i}-${r.value}`,`${i}-type-${e.type}`,`${i}-size-${s.value}`,{[`${i}-justify`]:e.justify}]);return()=>{var l;return _.value=(l=t.default)==null?void 0:l.call(t),u("div",{class:q.value},[r.value==="bottom"&&A(),u(Ve,{tabs:y.value,activeKey:I.value,activeIndex:j.value,direction:k.value,position:r.value,editable:e.editable,animation:e.animation,showAddButton:e.showAddButton,headerPadding:e.headerPadding,size:s.value,type:e.type,onClick:O,onAdd:W,onDelete:N},{extra:t.extra}),r.value!=="bottom"&&A()])}}}),Me=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,le=(e,a,t)=>a in e?Me(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,Ge=(e,a)=>{for(var t in a||(a={}))Ue.call(a,t)&&le(e,t,a[t]);if(ne)for(var t of ne(a))Fe.call(a,t)&&le(e,t,a[t]);return e};const Je=w({name:"TabPane",props:{title:String,disabled:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},destroyOnHide:{type:Boolean,default:!1}},setup(e,{slots:a}){var t;const{title:f,disabled:d,closable:m}=E(e),o=Ie(),i=T("tabs"),s=oe(X,{}),r=g(),k=v(()=>o==null?void 0:o.vnode.key),_=v(()=>k.value===s.activeKey),p=g(s.lazyLoad?_.value:!0),x=F({key:k,title:f,disabled:d,closable:m,slots:a});return o!=null&&o.uid&&((t=s.addItem)==null||t.call(s,o.uid,x)),Se(()=>{var y;o!=null&&o.uid&&((y=s.removeItem)==null||y.call(s,o.uid))}),U(_,y=>{y?p.value||(p.value=!0):(e.destroyOnHide||s.destroyOnHide)&&(p.value=!1)}),ce(()=>{x.slots=Ge({},a)}),{prefixCls:i,active:_,itemRef:r,mounted:p}}});function Xe(e,a,t,f,d,m){return K(),D("div",{ref:"itemRef",class:R([`${e.prefixCls}-content-item`,{[`${e.prefixCls}-content-item-active`]:e.active}])},[e.mounted?(K(),D("div",{key:0,class:R(`${e.prefixCls}-pane`)},[se(e.$slots,"default")],2)):re("v-if",!0)],2)}var M=G(Je,[["render",Xe]]);const ot=Object.assign(V,{TabPane:M,install:(e,a)=>{me(e,a);const t=he(a);e.component(t+V.name,V),e.component(t+M.name,M)}});export{ot as T,M as a};
