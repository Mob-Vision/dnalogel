import{u as p0,D as b0}from"./useFetchDatas-f7287a8d.js";import{w as J,x as Z,N as G,a3 as Y,ac as z,aF as _0,aj as h0,ad as A,an as k,aH as M,aV as S,a6 as P,ak as L,as as f0,aG as y0,at as K,aa as D,a4 as g0,a5 as x0,a7 as k0,a8 as $,a9 as e0,ab as v0,ae as I0,af as w0,ag as A0,ah as F0,aW as L0,ao as z0,ai as q0,aw as E0,ax as B0,T as W0,l as N0,F,r as B,u as j0,a as C0,b as P0,aN as D0,j as x,aO as O0,d as t0,aP as Q0,aQ as C,aR as V0,aS as M0,aX as S0,c as K0,p as T0,e as R0,B as U0,f as X0}from"./vendor-0279cb68.js";import{d as H0}from"./debounce-4258dff5.js";import{g as J0}from"./getInitialParamFromUrl-141e6748.js";var v;(function(i){i.SMALL="small",i.MIDLLE="middle",i.LARGE="large",i.EXTRA_LARGE="x-large"})(v||(v={}));function Z0(i){Y(i,"svelte-1mttyji",`.item-label-item.svelte-1mttyji{position:absolute;z-index:0;transform:none;cursor:pointer;pointer-events:none;user-select:none;opacity:0}.item-label-item.visible.svelte-1mttyji{opacity:1;animation:svelte-1mttyji-fadeIn .3s ease-in}.item-label-item__text-wrap.svelte-1mttyji::before{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, .3);filter:blur(16px);z-index:-1}.item-label-item__text-wrap.svelte-1mttyji{padding:6px 6px 0;position:absolute;height:20px;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap;line-height:10px;font-size:11px;font-weight:bold;color:#FFEAC0;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center}.item-label-item__text.svelte-1mttyji{padding-bottom:4px;border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:1px solid;border-image:linear-gradient(to right, rgba(234, 208, 154, 0), rgba(234, 208, 154, 100), rgba(234, 208, 154, 0)) 4.5 1 4.5}.item-label-item__bar.svelte-1mttyji{position:absolute;bottom:0;width:1px;background-image:linear-gradient(to bottom, rgba(234, 208, 154, 0), rgba(234, 208, 154, 1))}@keyframes svelte-1mttyji-fadeIn{from{opacity:0
        }to{opacity:1
        }}`)}function G0(i){let e,t,l,a=(i[0].name.length>6?`${i[0].name.slice(0,6)}...`:i[0].name)+"",s,u,m,n,o,c;return{c(){e=z("div"),t=z("div"),l=z("span"),s=_0(a),u=h0(),m=z("div"),A(l,"class","item-label-item__text svelte-1mttyji"),A(t,"class","item-label-item__text-wrap svelte-1mttyji"),k(t,"top",`-${i[0].strokeLength+26}px`),A(m,"class","item-label-item__bar svelte-1mttyji"),k(m,"height",`${i[0].strokeLength}px`),A(e,"class",n=M(S("item-label-item",{visible:i[0].visible}))+" svelte-1mttyji"),k(e,"z-index",i[0].zIndex,!1),k(e,"transform",i[0].transform,!1)},m(b,_){P(b,e,_),L(e,t),L(t,l),L(l,s),L(e,u),L(e,m),o||(c=f0(l,"click",i[1]),o=!0)},p(b,[_]){_&1&&a!==(a=(b[0].name.length>6?`${b[0].name.slice(0,6)}...`:b[0].name)+"")&&y0(s,a),_&1&&k(t,"top",`-${b[0].strokeLength+26}px`),_&1&&k(m,"height",`${b[0].strokeLength}px`),_&1&&n!==(n=M(S("item-label-item",{visible:b[0].visible}))+" svelte-1mttyji")&&A(e,"class",n),_&1&&k(e,"z-index",b[0].zIndex,!1),_&1&&k(e,"transform",b[0].transform,!1)},i:K,o:K,d(b){b&&D(e),o=!1,c()}}}function Y0(i,e,t){let{itemLabel:l}=e,{hooks:a}=e;function s(){console.log("__onclick___: ",l),a.emit("onLabelClick",l)}return i.$$set=u=>{"itemLabel"in u&&t(0,l=u.itemLabel),"hooks"in u&&t(2,a=u.hooks)},[l,s,a]}class $0 extends J{constructor(e){super();Z(this,e,Y0,G0,G,{itemLabel:0,hooks:2},Z0)}}function ee(i){Y(i,"svelte-rmdeb",".item-labels-container.svelte-rmdeb{width:100%;height:100%;position:relative}")}function T(i,e,t){const l=i.slice();return l[28]=e[t],l}function R(i,e){let t,l,a;return l=new $0({props:{itemLabel:e[28],hooks:e[0]}}),{key:i,first:null,c(){t=g0(),x0(l.$$.fragment),this.first=t},m(s,u){P(s,t,u),k0(l,s,u),a=!0},p(s,u){e=s;const m={};u&2&&(m.itemLabel=e[28]),u&1&&(m.hooks=e[0]),l.$set(m)},i(s){a||($(l.$$.fragment,s),a=!0)},o(s){e0(l.$$.fragment,s),a=!1},d(s){s&&D(t),v0(l,s)}}}function te(i){let e,t=[],l=new Map,a,s,u=i[1];const m=n=>n[28].id;for(let n=0;n<u.length;n+=1){let o=T(i,u,n),c=m(o);l.set(c,t[n]=R(c,o))}return{c(){e=z("div");for(let n=0;n<t.length;n+=1)t[n].c();A(e,"class","item-labels-container svelte-rmdeb"),I0(()=>i[10].call(e)),k(e,"opacity",i[4]?1:0,!1)},m(n,o){P(n,e,o);for(let c=0;c<t.length;c+=1)t[c].m(e,null);a=w0(e,i[10].bind(e)),s=!0},p(n,[o]){o&3&&(u=n[1],E0(),t=A0(t,o,m,1,n,u,l,e,B0,R,null,T),F0()),o&16&&k(e,"opacity",n[4]?1:0,!1)},i(n){if(!s){for(let o=0;o<u.length;o+=1)$(t[o]);s=!0}},o(n){for(let o=0;o<t.length;o+=1)e0(t[o]);s=!1},d(n){n&&D(e);for(let o=0;o<t.length;o+=1)t[o].d();a()}}}let U=26,ae=11;function ie(i,e,t){const{Raycaster:l,Vector3:a}=W0;let{five:s}=e,{modelOcclusionEnable:u}=e,{itemLabels:m}=e,{wrapper:n}=e,{hooks:o}=e,{displayStrategyType:c}=e,b=null,_=null,I={width:0,height:0},f,W,q=[],N=!0;const a0=(r,h)=>{const g=new l,p=r.camera.position.clone(),d=new a(h.modelPosition[0],h.modelPosition[1],h.modelPosition[2]),y=d.distanceTo(p);g.set(p.clone(),d.clone().sub(p).normalize());const[w]=r.model.intersectRaycaster(g);return!(w&&w.distance+1<y)},i0=(r,h)=>{const g=new a(h.modelPosition[0],h.modelPosition[1],h.modelPosition[2]),p=r.project2d(g),d=p==null?void 0:p.x,y=p==null?void 0:p.y;return[d,y]},o0=r=>`translate(${r[0]}px, ${r[1]}px)`,n0=(r,h)=>q.length===0?!1:!!q.find(p=>r[0]>=p[0]-h&&r[0]<=p[0]+h||r[1]>=p[1]-U&&r[1]<=p[1]+U);function r0(r,h){switch(h){case v.SMALL:return Math.ceil(-27.78*r+85);case v.MIDLLE:return Math.ceil(-38.9*r+130);case v.LARGE:return Math.ceil(-44.44*r+140);case v.EXTRA_LARGE:return Math.ceil(-92.59*r+300)}}const l0=(r,h)=>{const g=h.map(d=>{const y=i0(r,d),w=d.name.length*ae,V=r0(d.modelPosition[1],c),j=(u?a0(r,d):!0)&&!n0([y[0],y[1]+V],w);if(!j)return Object.assign(Object.assign({},d),{visible:j});q.push(y);const c0=o0(y);return Object.assign(Object.assign({},d),{visible:j,transform:c0,strokeLength:V})}),p=g.filter(({visible:d})=>d).map(d=>({itemLabelItem:d,distance:new a(d.modelPosition[0],d.modelPosition[1],d.modelPosition[2]).clone().distanceTo(r.camera.position)})).sort((d,y)=>d.distance-y.distance);return g.map(d=>{const y=p.findIndex(w=>w.itemLabelItem.id===d.id);return y!==void 0?Object.assign(Object.assign({},d),{zIndex:y*10}):d})},E=()=>{q=[],t(1,_=l0(s,_))};L0(()=>{m0()});const O=()=>{t(4,N=!1),s0()};z0(()=>{t(1,_=m),b=m,E(),u0(),s.on("cameraUpdate",O)});const s0=H0(()=>{t(4,N=!0),E()},300),u0=()=>{I={width:n.clientWidth,height:n.clientHeight},Q.observe(n)},m0=()=>{b!==m&&(t(1,_=m),b=m,E())},Q=new ResizeObserver(r=>{const g=r[0].target,p=g.clientWidth,d=g.clientHeight;(I.width!==p||I.height!==d)&&(I={width:p,height:d},E())});q0(()=>{s.off("cameraUpdate",O),Q.unobserve(n)});function d0(){f=this.clientWidth,W=this.clientHeight,t(2,f),t(3,W)}return i.$$set=r=>{"five"in r&&t(5,s=r.five),"modelOcclusionEnable"in r&&t(6,u=r.modelOcclusionEnable),"itemLabels"in r&&t(7,m=r.itemLabels),"wrapper"in r&&t(8,n=r.wrapper),"hooks"in r&&t(0,o=r.hooks),"displayStrategyType"in r&&t(9,c=r.displayStrategyType)},[o,_,f,W,N,s,u,m,n,c,d0]}class oe extends J{constructor(e){super();Z(this,e,ie,te,G,{five:5,modelOcclusionEnable:6,itemLabels:7,wrapper:8,hooks:0,displayStrategyType:9},ee)}}function ne(i){return i.model_item_labels.map(e=>Object.assign({modelPosition:[e.position[0],e.position[1]+e.size[1],e.position[2]]},e))}const re=(i,e)=>{var t,l;const a={container:document.createElement("div"),data:null,enabled:!0,fiveModeEnabled:void 0,itemLabels:[],wrapper:null,app:void 0,hooks:new N0,modelOcclusionEnable:(t=e==null?void 0:e.modelOcclusionEnable)!==null&&t!==void 0?t:!0,displayStrategyType:(l=e==null?void 0:e.displayStrategyType)!==null&&l!==void 0?l:v.SMALL};a.container.setAttribute("class","model-item-label-plugin-container"),a.container.style.cssText=`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
    `,a.container.style.pointerEvents="none";const s=f=>(a.wrapper=f,f.appendChild(a.container),c(),!0),u=f=>{a.itemLabels=ne(f),c()},m=()=>(a.enabled||(a.enabled=!0,c()),!0),n=()=>(a.enabled&&(a.enabled=!1,c()),!0),o=()=>{_(),a.container.remove()},c=()=>{var f;if(!!a.wrapper){if(!a.enabled||!a.fiveModeEnabled){(f=a.app)===null||f===void 0||f.$destroy(),a.app=void 0;return}a.app?a.app.$set({five:i,itemLabels:a.itemLabels}):a.app=new oe({target:a.container,props:{five:i,modelOcclusionEnable:a.modelOcclusionEnable,itemLabels:a.itemLabels,wrapper:a.wrapper,hooks:a.hooks,displayStrategyType:a.displayStrategyType}})}},b=()=>{i.on("modeChange",I),i.once("dispose",o)},_=()=>{i.off("modeChange",I)},I=f=>{if(!!a.enabled){if(f!==F.Mode.Floorplan){a.fiveModeEnabled=!1,c();return}i.once("initAnimationEnded",()=>{a.fiveModeEnabled=i.currentMode===F.Mode.Floorplan,c()})}};return b(),{appendTo:s,load:u,enable:m,disable:n,dispose:o,hooks:a.hooks}};function X(){return{width:window.innerWidth,height:window.innerHeight}}function le(){const[i,e]=B.exports.useState(X);return B.exports.useEffect(()=>{const t=()=>e(X());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),i}const se=i=>{const[e,t]=j0(),l=C0(),a=P0(),[s,u]=B.exports.useState(0),m=[{model_item_labels:[{__type:"Item",materials:null,library:6219,adsorption:null,position:[7.04986,-11e-6,2.898],quaternion:[0,.707106,0,-.707107],size:[.37002,.70497,.68223],matrix:[0,0,.01,0,0,.009999,0,0,-.01,0,0,0,7.04986,-11e-6,2.898,1],matrixWorld:[0,0,.01,0,0,.009999,0,0,-.01,0,0,0,7.04986,-11e-6,2.898,1],name:"\u79D1\u52D2\u5750\u4FBF\u5668",type:["kitchen_bathroom","bathroom","toilet_bowl"],path:"b080ac6fda0d9f41feb031e661f845d4",center:[0,35.249948,-.002501],id:"u-RLv26eKv9Q7hww",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:253,adsorption:null,position:[7.27061,0,3.17008],quaternion:[0,.707106,0,-.707107],size:[.17434,.41051,.24112],matrix:[0,0,.01,0,0,.009999,0,0,-.010001,0,0,0,7.27061,0,3.17008,1],matrixWorld:[0,0,.01,0,0,.009999,0,0,-.010001,0,0,0,7.27061,0,3.17008,1],name:"\u5783\u573E\u6876",type:["home_decoration","trash_can","refuse_bin"],path:"e2f0661b4ad51a199532d6111d4c7a2f",center:[.010449,20.52565,.017199],id:"u-w576TJKv9q7hXi",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:4478,adsorption:null,position:[7.28241,1.314405,2.898],quaternion:[0,.707106,0,-.707107],size:[.58352,.17051,.21718],matrix:[0,0,.01,0,0,.009999,0,0,-.01,0,0,0,7.28241,1.314405,2.898,1],matrixWorld:[0,0,.01,0,0,.009999,0,0,-.01,0,0,0,7.28241,1.314405,2.898,1],name:"\u6D74\u5DFE\u67B6",type:["kitchen_bathroom","bathroom","bathroom_hardware","bath_towel_rack"],path:"a83382ba9b4cd1f5906972c1106aaeb3",center:[0,8.559249,0],id:"u-s4k11JKV9Q7HZq",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:193,adsorption:null,position:[7.056939,.99825,1.520029],quaternion:[0,0,0,1],size:[.17876,.60346,.10383],matrix:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,7.056939,.99825,1.520029,1],matrixWorld:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,7.056939,.99825,1.520029,1],name:"cj_northern_bathroom_no_010",type:["kitchen_bathroom","bathroom","bathroom_hardware","towel_ring"],path:"35215568325916b550a76d1382198f4c",center:[-.3598,30.1749,-.012401],id:"u-pscQ7QkV9Q7I29",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:1231,adsorption:null,position:[7.261239,.980211,3.623795],quaternion:[0,.707106,0,-.707107],size:[.327377,.542716,.217991],matrix:[0,0,.008499,0,0,.0085,0,0,-.0085,0,0,0,7.261239,.980211,3.623795,1],matrixWorld:[0,0,.008499,0,0,.0085,0,0,-.0085,0,0,0,7.261239,.980211,3.623795,1],name:"\u89D2\u67B6",type:["kitchen_bathroom","bathroom","bathroom_accessories","corner_shelf_basket"],path:"d943759d40899445dd7492d05d5f5681",center:[.180747,31.988482,-.180005],id:"u-vNgfllKV9Q7i2W",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:3433,adsorption:null,position:[1.202324,-5e-5,-2.802681],quaternion:[0,0,0,1],size:[.36116,.35142,.47978],matrix:[.01,0,0,0,0,.01,0,0,0,0,.009999,0,1.202324,-5e-5,-2.802681,1],matrixWorld:[.01,0,0,0,0,.01,0,0,0,0,.009999,0,1.202324,-5e-5,-2.802681,1],name:"\u732B\u7A9D",type:["home_decoration","pet_supplies","pet_products"],path:"dfe84c03297da3aed12b120fde9427ee",center:[.20515,17.57595,.557049],id:"u-FIZ8nxKv9q7I4f",roomName:"\u9633\u53F0"},{__type:"Item",materials:null,library:3231,adsorption:null,position:[1.204375,0,-2.371881],quaternion:[0,0,0,1],size:[.40002,.15208,.1855],matrix:[.01,0,0,0,0,.009999,0,0,0,0,.01,0,1.204375,0,-2.371881,1],matrixWorld:[.01,0,0,0,0,.009999,0,0,0,0,.01,0,1.204375,0,-2.371881,1],name:"\u732B\u7897 \u72D7\u7897",type:["home_decoration","pet_supplies","pet_products"],path:"7397c7c3e6e7ebd552832a45a28e384f",center:[0,7.604249,.016099],id:"u-s49qbaKv9Q7I4o",roomName:"\u9633\u53F0"},{__type:"Item",materials:null,library:39053,adsorption:null,position:[-.772691,1.55064,-.38561],quaternion:[0,.707106,0,.707106],size:[.9,.55499,.52],matrix:[0,0,-.010001,0,0,.009999,0,0,.01,0,0,0,-.772691,1.55064,-.38561,1],matrixWorld:[0,0,-.010001,0,0,.009999,0,0,.01,0,0,0,-.772691,1.55064,-.38561,1],name:"\u62BD\u6CB9\u70DF\u673A 009",type:["appliance","kitchen_appliance","cooker_hood"],path:"a8a99535bd59f7e47d7801e1df647524",center:[.075901,27.6851,-11.4315],id:"u-aTr4OCkv9Q7I4Z",roomName:"\u53A8\u623F"},{__type:"Item",materials:null,library:41557,adsorption:null,position:[-1.096521,.89,-1.393528],quaternion:[0,.707106,0,.707106],size:[1.02897,.65043,.09948],matrix:[0,0,-.01,0,0,.009999,0,0,.009998,0,0,0,-1.096521,.89,-1.393528,1],matrixWorld:[0,0,-.01,0,0,.009999,0,0,.009998,0,0,0,-1.096521,.89,-1.393528,1],name:"\u53A8\u623F\u6302\u4EF6 1/2#193",type:["kitchen_bathroom","kitchen","kitchen_accessories","kitchen_pendant"],path:"e7849bfe3812e5ac95abed7169ce69d8",center:[-.081099,32.521549,-.07445],id:"u-XlNc5ekV9Q7i5O",roomName:"\u53A8\u623F"},{__type:"Item",materials:null,library:32806,adsorption:null,position:[-.38339,.85,-2.8363],quaternion:[0,0,0,1],size:[.22723,.14785,.16141],matrix:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,-.38339,.85,-2.8363,1],matrixWorld:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,-.38339,.85,-2.8363,1],name:"\u9910\u53A8\u6446\u4EF618#176",type:["kitchen_bathroom","kitchen","kitchen_accessories","kitchen_decoration"],path:"a8b2d541c06a560c57261f2b53fdb341",center:[0,7.392599,0],id:"u-5GY4m5kv9q7i7r",roomName:"\u53A8\u623F"},{__type:"Item",materials:null,library:37595,adsorption:null,position:[-.87469,.85,-1.152685],quaternion:[0,.707106,0,.707106],size:[.53262,.14077,.30949],matrix:[0,0,-.01,0,0,.009999,0,0,.009999,0,0,0,-.87469,.85,-1.152685,1],matrixWorld:[0,0,-.01,0,0,.009999,0,0,.009999,0,0,0,-.87469,.85,-1.152685,1],name:"\u679C\u76D8-A065",type:["home_decoration","tableware","kitchen_supplies","fruit_basket"],path:"eff0b9b1a8fb34449a4b36d2a106d47f",center:[0,7.03865,.2431],id:"u-p6QhO6kV9Q7i8j",roomName:"\u53A8\u623F"},{__type:"Item",materials:null,library:32779,adsorption:null,position:[-.00268,.85,-2.80151],quaternion:[0,0,0,1],size:[.33419,.263,.23099],matrix:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,-.00268,.85,-2.80151,1],matrixWorld:[.009999,0,0,0,0,.01,0,0,0,0,.009999,0,-.00268,.85,-2.80151,1],name:"\u9762\u5305\u673A18#168",type:["appliance","kitchen_appliance","kitchen_electron"],path:"0a81d72e4c047395683c59563cab71ea",center:[0,13.149999,0],id:"u-St688VKv9Q7iAj",roomName:"\u53A8\u623F"},{__type:"Item",materials:null,library:737,adsorption:null,position:[.603225,.81976,2.645004],quaternion:[0,.707106,0,.707106],size:[.50287,1.16044,.04771],matrix:[0,0,-.01,0,0,.009999,0,0,.009998,0,0,0,.603225,.81976,2.645004,1],matrixWorld:[0,0,-.01,0,0,.009999,0,0,.009998,0,0,0,.603225,.81976,2.645004,1],name:"cj_hr_lha_lhb0144010_001",type:["home_decoration","mirror","dressing_mirror"],path:"77cb1efdd44f6a921a252d98dc408beb",center:[0,58.02435,0],id:"u-5kszSekV9Q7Ib4",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:3688,adsorption:null,position:[.728372,-201e-6,3.793119],quaternion:[0,.707106,0,.707106],size:[1,.01,.6],matrix:[0,0,-.005001,0,0,.01,0,0,.004285,0,0,0,.728372,-201e-6,3.793119,1],matrixWorld:[0,0,-.005001,0,0,.01,0,0,.004285,0,0,0,.728372,-201e-6,3.793119,1],name:"\u5730\u6BEF",type:["home_decoration","cloth_soft_decoration","carpet"],path:"0c3dd880b1d11f6c78ec73b5a72d7896",center:[0,.519999,0],id:"u-9G27TIkV9q7Ict",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:9448,adsorption:null,position:[.611044,0,3.393118],quaternion:[0,.707106,0,.707106],size:[.22782,.07872,.26541],matrix:[0,0,-.010001,0,0,.01,0,0,.009999,0,0,0,.611044,0,3.393118,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.009999,0,0,0,.611044,0,3.393118,1],name:"\u62D6\u978B",type:["home_decoration","tableware","clothing_accessories","flip_flop"],path:"30081929b72fd298258de821d6849a82",center:[0,3.936099,.00345],id:"u-4Kz5ATKV9q7IcW",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:9449,adsorption:null,position:[.611044,0,4.193114],quaternion:[0,.707106,0,.707106],size:[.22782,.07872,.26541],matrix:[0,0,-.010001,0,0,.01,0,0,.009999,0,0,0,.611044,0,4.193114,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.009999,0,0,0,.611044,0,4.193114,1],name:"\u62D6\u978B",type:["home_decoration","tableware","clothing_accessories","flip_flop"],path:"9f265dfabd783de0fca0dc40e9887a26",center:[0,3.936099,.00345],id:"u-FHU0EikV9q7idJ",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:1994,adsorption:null,position:[4.511845,.918291,.518683],quaternion:[0,.707106,0,-.707107],size:[1.357,.771988,.03151],matrix:[0,0,.009502,0,0,.009502,0,0,-.009503,0,0,0,4.511845,.918291,.518683,1],matrixWorld:[0,0,.009502,0,0,.009502,0,0,-.009503,0,0,0,4.511845,.918291,.518683,1],name:"\u7535\u89C6",type:["appliance","electric_appliance","television","television_2"],path:"9bee8e8a9fe8a41ba272aab89070ff30",center:[0,40.640001,0],id:"u-q806t7Kv9q7iFi",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:36229,adsorption:null,position:[4.277453,.415436,1.321097],quaternion:[0,.707106,0,-.707107],size:[.44492,.118765,.270905],matrix:[0,0,.016178,0,0,.01344,0,0,-.013272,0,0,0,4.277453,.415436,1.321097,1],matrixWorld:[0,0,.016178,0,0,.01344,0,0,-.013272,0,0,0,4.277453,.415436,1.321097,1],name:"\u5E73\u653E\u4E66 20#280",type:["home_decoration","literary_form","cultural_and_educational_books","book_lying_flat"],path:"3b6aebab11594f12f6962806dd52d6a8",center:[.93635,4.41855,.3866],id:"u-gI1X8Vkv9q7iFZ",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:36229,adsorption:null,position:[7.078084,1.856931,5.886247],quaternion:[0,.707106,0,-.707107],size:[.33,.106027,.244928],matrix:[0,0,.011999,0,0,.011999,0,0,-.012,0,0,0,7.078084,1.856931,5.886247,1],matrixWorld:[0,0,.011999,0,0,.011999,0,0,-.012,0,0,0,7.078084,1.856931,5.886247,1],name:"\u5E73\u653E\u4E66 20#280",type:["home_decoration","literary_form","cultural_and_educational_books","book_lying_flat"],path:"3b6aebab11594f12f6962806dd52d6a8",center:[.93635,4.41855,.3866],id:"u-6npK0jKV9Q7Ii7",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:28813,adsorption:null,position:[4.289209,.612689,.002931],quaternion:[0,.707106,0,-.707107],size:[.681399,.55159,.298799],matrix:[0,0,.012189,0,0,.012243,0,0,-.01,0,0,0,4.289209,.612689,.002931,1],matrixWorld:[0,0,.012189,0,0,.012243,0,0,-.01,0,0,0,4.289209,.612689,.002931,1],name:"\u62BD\u8C61\u6446\u4EF614#004",type:["home_decoration","tableware","tableware_others","abstract_ornaments"],path:"b1b1a99297ca076235eb1b3edaf9f180",center:[0,22.495,0],id:"u-lv103gkV9Q7II8",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:6313,adsorption:null,position:[4.268131,.668092,-.475332],quaternion:[0,0,0,1],size:[.30814,.729741,.148441],matrix:[.009999,0,0,0,0,.015021,0,0,0,0,.012189,0,4.268131,.668092,-.475332,1],matrixWorld:[.009999,0,0,0,0,.015021,0,0,0,0,.012189,0,4.268131,.668092,-.475332,1],name:"\u9970\u54C1",type:["home_decoration","tableware","tableware_others","abstract_ornaments"],path:"f7ff4dc5677bc72d319347709ea15c72",center:[.01335,24.327749,.00285],id:"u-oh2JTYkv9q7ij0",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:26393,adsorption:null,position:[4.241505,.984622,-.729805],quaternion:[0,.707106,0,.707106],size:[.280361,.16162,.225264],matrix:[0,0,-.009352,0,0,.009241,0,0,.009999,0,0,0,4.241505,.984622,-.729805,1],matrixWorld:[0,0,-.009352,0,0,.009241,0,0,.009999,0,0,0,4.241505,.984622,-.729805,1],name:"\u4E66\u7C4D\u6587\u6559 14#046",type:["home_decoration","literary_form","cultural_and_educational_books","cultural_and_educational_books_4"],path:"9fbcdcecaba14bde19036d82f7d2efbd",center:[-.130001,8.743849,-.116301],id:"u-yRKdx9Kv9Q7iJL",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:26388,adsorption:null,position:[4.225509,1.146146,-.730986],quaternion:[0,.707106,0,-.707107],size:[.280579,.257124,.080999],matrix:[0,0,.006367,0,0,.007617,0,0,-.005225,0,0,0,4.225509,1.146146,-.730986,1],matrixWorld:[0,0,.006367,0,0,.007617,0,0,-.005225,0,0,0,4.225509,1.146146,-.730986,1],name:"\u62BD\u8C61\u6446\u4EF6 14#007",type:["home_decoration","tableware","tableware_others","abstract_ornaments"],path:"cddf2dfada7b4a561663ade47318ca94",center:[-.009902,16.807595,0],id:"u-POq1Z6kV9q7ILh",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:26384,adsorption:null,position:[4.187621,.427824,-.729092],quaternion:[0,-.707107,0,.707107],size:[.268171,.329363,.230003],matrix:[0,0,.007637,0,0,.009213,0,0,-.008516,0,0,0,4.187621,.427824,-.729092,1],matrixWorld:[0,0,.007637,0,0,.009213,0,0,-.008516,0,0,0,4.187621,.427824,-.729092,1],name:"\u7ACB\u653E\u4E66 14#003",type:["home_decoration","literary_form","cultural_and_educational_books","standing_book"],path:"542903087cbf8df35479c0ec2630ef5c",center:[0,17.873399,0],id:"u-37d45yKV9Q7IMj",roomName:"\u5BA2\u5385"},{__type:"Item",materials:null,library:9374,adsorption:null,position:[7.011738,1.535564,5.399609],quaternion:[0,.707106,0,-.707107],size:[.302,.229999,.160999],matrix:[0,0,.009258,0,0,.006578,0,0,-.013998,0,0,0,7.011738,1.535564,5.399609,1],matrixWorld:[0,0,.009258,0,0,.006578,0,0,-.013998,0,0,0,7.011738,1.535564,5.399609,1],name:"\u5546\u52A1\u5973\u5305",type:["home_decoration","tableware","clothing_accessories","bag"],path:"21e00d5dc71a21a13027077e040d1cbf",center:[.00285,17.49905,-5e-5],id:"u-zEmKLpKv9q7ioI",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:9374,adsorption:null,position:[7.033441,.95666,5.903193],quaternion:[0,.707106,0,-.707107],size:[.302,.229999,.160999],matrix:[0,0,.009258,0,0,.006578,0,0,-.013998,0,0,0,7.033441,.95666,5.903193,1],matrixWorld:[0,0,.009258,0,0,.006578,0,0,-.013998,0,0,0,7.033441,.95666,5.903193,1],name:"\u5546\u52A1\u5973\u5305",type:["home_decoration","tableware","clothing_accessories","bag"],path:"21e00d5dc71a21a13027077e040d1cbf",center:[.00285,17.49905,-5e-5],id:"u-DH8FmXkV9Q7Ip4",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:35508,adsorption:null,position:[7.102287,.962433,5.42086],quaternion:[0,.707106,0,-.707107],size:[.304172,.224605,.269108],matrix:[0,0,.009999,0,0,.009999,0,0,-.01,0,0,0,7.102287,.962433,5.42086,1],matrixWorld:[0,0,.009999,0,0,.009999,0,0,-.01,0,0,0,7.102287,.962433,5.42086,1],name:"\u62BD\u8C61\u6446\u4EF6 20#033",type:["home_decoration","tableware","tableware_others","abstract_ornaments"],path:"cb11387ad48bd3590983f9a5f778cde0",center:[0,11.230344,0],id:"u-j467RkKv9Q7iP5",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:24331,adsorption:null,position:[7.022253,1.250898,5.465582],quaternion:[.054267,.779522,.0682,-.620282],size:[.190451,.235139,.038999],matrix:[-.001702,-1e-6,.007381,0,.001281,.00746,295e-6,0,-.00727,.001315,-.001676,0,7.022253,1.250898,5.465582,1],matrixWorld:[-.001702,-1e-6,.007381,0,.001281,.00746,295e-6,0,-.00727,.001315,-.001676,0,7.022253,1.250898,5.465582,1],name:"\u76F8\u6846",type:["home_decoration","tableware","tableware_others","photo_frame"],path:"30bcbc12d7024f4648f15faa96e086d6",center:[0,15.519849,0],id:"u-M36Pt3KV9Q7iRh",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:24991,adsorption:null,position:[6.987783,1.250898,5.344846],quaternion:[-.11077,-.679979,-.105027,.717167],size:[.138419,.173024,.016999],matrix:[368e-6,-1e-6,.006911,0,.002085,.006598,-112e-6,0,-.006589,.002087,35e-5,0,6.987783,1.250898,5.344846,1],matrixWorld:[368e-6,-1e-6,.006911,0,.002085,.006598,-112e-6,0,-.006589,.002087,35e-5,0,6.987783,1.250898,5.344846,1],name:"\u76F8\u6846",type:["home_decoration","tableware","tableware_others","photo_frame"],path:"0f89cee7dbd1f5445bcc04c9c9fb2b8e",center:[0,12.5,0],id:"u-2QB8bIkV9q7iS6",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:32434,adsorption:null,position:[5.288675,-2e-4,7.372929],quaternion:[0,.707106,0,.707106],size:[2.069826,1.084624,2.377951],matrix:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,5.288675,-2e-4,7.372929,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,5.288675,-2e-4,7.372929,1],name:"\u8F6F\u5305\u5E8A",type:["furniture","bed","normal_bed","normal_bed_4"],path:"6a22f0b25f5e2c8c9ccaaa80c3636c72",center:[-1.7072,54.251348,6.729499],id:"u-Ga9jerkV9Q7itk",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:32434,adsorption:null,position:[6.269324,-2e-4,-.62893],quaternion:[0,.707106,0,-.707107],size:[2.069826,1.084624,2.377951],matrix:[0,0,.01,0,0,.01,0,0,-.010001,0,0,0,6.269324,-2e-4,-.62893,1],matrixWorld:[0,0,.01,0,0,.01,0,0,-.010001,0,0,0,6.269324,-2e-4,-.62893,1],name:"\u8F6F\u5305\u5E8A",type:["furniture","bed","normal_bed","normal_bed_4"],path:"6a22f0b25f5e2c8c9ccaaa80c3636c72",center:[-1.7072,54.251348,6.729499],id:"u-V5C6FeKv9Q7iUF",roomName:"\u5367\u5BA4B"},{__type:"Item",materials:null,library:29978,adsorption:null,position:[4.39022,-1e-5,8.642688],quaternion:[0,.707106,0,.707106],size:[.552406,.553133,.400673],matrix:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.39022,-1e-5,8.642688,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.39022,-1e-5,8.642688,1],name:"\u5E8A\u5934\u67DC",type:["furniture","cabinet","beside_table"],path:"9f9be734bd1643a9a97f00bc199bc140",center:[-.00965,27.65765,.2111],id:"u-5A3b6IKV9q7iUg",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:29978,adsorption:null,position:[4.39022,-1e-5,6.112122],quaternion:[0,.707106,0,.707106],size:[.552406,.553133,.400673],matrix:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.39022,-1e-5,6.112122,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.39022,-1e-5,6.112122,1],name:"\u5E8A\u5934\u67DC",type:["furniture","cabinet","beside_table"],path:"9f9be734bd1643a9a97f00bc199bc140",center:[-.00965,27.65765,.2111],id:"u-p4w6QSKv9q7IWn",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:29978,adsorption:null,position:[7.167779,-1e-5,.631877],quaternion:[0,.707106,0,-.707107],size:[.552406,.553133,.400673],matrix:[0,0,.01,0,0,.01,0,0,-.010001,0,0,0,7.167779,-1e-5,.631877,1],matrixWorld:[0,0,.01,0,0,.01,0,0,-.010001,0,0,0,7.167779,-1e-5,.631877,1],name:"\u5E8A\u5934\u67DC",type:["furniture","cabinet","beside_table"],path:"9f9be734bd1643a9a97f00bc199bc140",center:[-.00965,27.65765,.2111],id:"u-O5gJeckV9Q7Iwo",roomName:"\u5367\u5BA4B"},{__type:"Item",materials:null,library:22646,adsorption:null,position:[4.390691,.552948,8.711916],quaternion:[0,.923879,0,.382683],size:[.243542,.529301,.361192],matrix:[-.007072,0,-.007072,0,0,.01,0,0,.007071,0,-.007072,0,4.390691,.552948,8.711916,1],matrixWorld:[-.007072,0,-.007072,0,0,.01,0,0,.007071,0,-.007072,0,4.390691,.552948,8.711916,1],name:"cj_yhymeq_2100020075_001",type:["lighting","table_lamp","desk_lamp","desk_lamp_4"],path:"759dc5ef6351ecbbb493e2bd39b81961",center:[0,26.465099,-1.46305],id:"u-REN585kV9Q7iWP",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:22646,adsorption:null,position:[4.388576,.55291,6.077964],quaternion:[0,.382683,0,.923879],size:[.243542,.529301,.361192],matrix:[.007071,0,-.007072,0,0,.01,0,0,.007071,0,.007071,0,4.388576,.55291,6.077964,1],matrixWorld:[.007071,0,-.007072,0,0,.01,0,0,.007071,0,.007071,0,4.388576,.55291,6.077964,1],name:"cj_yhymeq_2100020075_001",type:["lighting","table_lamp","desk_lamp","desk_lamp_4"],path:"759dc5ef6351ecbbb493e2bd39b81961",center:[0,26.465099,-1.46305],id:"u-3WEho7KV9Q7iXc",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:22646,adsorption:null,position:[7.169423,.55291,.666035],quaternion:[0,.923879,0,-.382684],size:[.243542,.529301,.361192],matrix:[-.007072,0,.007071,0,0,.01,0,0,-.007072,0,-.007072,0,7.169423,.55291,.666035,1],matrixWorld:[-.007072,0,.007071,0,0,.01,0,0,-.007072,0,-.007072,0,7.169423,.55291,.666035,1],name:"cj_yhymeq_2100020075_001",type:["lighting","table_lamp","desk_lamp","desk_lamp_4"],path:"759dc5ef6351ecbbb493e2bd39b81961",center:[0,26.465099,-1.46305],id:"u-M9iZi9Kv9q7iXd",roomName:"\u5367\u5BA4B"},{__type:"Item",materials:null,library:2835,adsorption:null,position:[4.252789,.552948,8.571903],quaternion:[0,.923879,0,.382683],size:[.097265,.207492,.129878],matrix:[-.007072,0,-.007072,0,0,.01,0,0,.007071,0,-.007072,0,4.252789,.552948,8.571903,1],matrixWorld:[-.007072,0,-.007072,0,0,.01,0,0,.007071,0,-.007072,0,4.252789,.552948,8.571903,1],name:"\u9970\u54C1\u6446\u4EF6",type:["home_decoration","tableware","tableware_others","abstract_ornaments"],path:"052902c5ad0df04365ebbaf91b0fcc8a",center:[0,10.374634,-2e-6],id:"u-InhCA4Kv9q7ixF",roomName:"\u5367\u5BA4A"},{__type:"Item",materials:null,library:3338,adsorption:null,position:[4.289206,.55291,8.441922],quaternion:[0,.707106,0,.707106],size:[.169855,.243295,.176824],matrix:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.289206,.55291,8.441922,1],matrixWorld:[0,0,-.010001,0,0,.01,0,0,.01,0,0,0,4.289206,.55291,8.441922,1],name:"\u4ED9\u4EBA\u638C",type:["home_decoration","plants","green_plants","desktop_green_plant"],path:"f0c2824c389f185b0080a5db3f2cbbb3",center:[-6e-4,12.169499,-.017851],id:"u-kzS6ickV9Q7iZB",roomName:"\u5367\u5BA4A"}]},{model_item_labels:[{__type:"Item",materials:null,library:53062,adsorption:null,position:[6.133254,-2e-5,3.64173],quaternion:[0,1,0,0],size:[.59951,.84969,.65004],matrix:[-.01,0,0,0,0,.01,0,0,0,0,-.01,0,6.133254,-2e-5,3.64173,1],matrixWorld:[-.01,0,0,0,0,.01,0,0,0,0,-.01,0,6.133254,-2e-5,3.64173,1],name:"\u6D17\u8863\u673A",type:["appliance","electric_appliance","washing_machine"],path:"fa8dac89932ee105aec72781475c3911",center:[.22515,42.48655,2.474349],id:"u-cFm1qrkv9Q7lOY",roomName:"\u536B\u751F\u95F4"},{__type:"Item",materials:null,library:1547,adsorption:null,position:[.779794,-137e-6,-2.335],quaternion:[0,.707106,0,.707106],size:[.964656,1.063765,.40084],matrix:[0,0,-.012,0,0,.010499,0,0,.01,0,0,0,.779794,-137e-6,-2.335,1],matrixWorld:[0,0,-.012,0,0,.010499,0,0,.01,0,0,0,.779794,-137e-6,-2.335,1],name:"\u978B\u67DC",type:["furniture","cabinet","shoe_cabinet"],path:"1631f3effb1830dcbec9ef171236932e",center:[0,50.66865,0],id:"u-Lev7PdkV9Q7LrC",roomName:"\u9633\u53F0"},{__type:"Item",materials:null,library:26411,adsorption:null,position:[7.03238,1.856154,5.323339],quaternion:[0,.707106,0,-.707107],size:[.301,.225,.22],matrix:[0,0,.006023,0,0,.006756,0,0,-.008509,0,0,0,7.03238,1.856154,5.323339,1],matrixWorld:[0,0,.006023,0,0,.006756,0,0,-.008509,0,0,0,7.03238,1.856154,5.323339,1],name:"\u7ACB\u653E\u4E66 14#019",type:["home_decoration","literary_form","cultural_and_educational_books","standing_book"],path:"9c96cf14d6f5b3b47cb9f577ce2a0f68",center:[0,16.649999,-.0101],id:"u-FxlXwVKv9Q7Ls7",roomName:"\u5367\u5BA4A"}]}];B.exports.useEffect(()=>{const o=document.querySelector(".plugin-full-screen-container");o&&l.plugins.modelItemLabelPlugin.appendTo(o)},[]),D0("modelLoaded",()=>{!m||(l.plugins.modelItemLabelPlugin.load(m[s]),l.plugins.modelItemLabelPlugin.hooks.on("onLabelClick",o=>{console.log("\u{1F436}---\u{1F436}\uFF1A ",o)}),t({mode:F.Mode.Floorplan}))},[m]);const n=()=>{const o=Number(!s);l.plugins.modelItemLabelPlugin.load(m[o]),u(o)};return a!=="Loaded"?null:x(O0,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"model-item-label-plugin-show",children:t0(Q0,{showLabels:!0,value:e.mode,onChange:(o,c)=>{t({mode:c})},children:[x(C,{label:"\u5168\u666F\u6F2B\u6E38",icon:x(V0,{}),value:F.Mode.Panorama}),x(C,{label:"\u7A7A\u95F4\u603B\u89C8",icon:x(M0,{}),value:F.Mode.Floorplan}),e.mode===F.Mode.Floorplan&&x(C,{label:"\u6807\u7B7E\u5207\u6362",onClick:n,icon:x(S0,{}),value:null})]})})},ue={modelOcclusionEnable:!1,displayStrategyType:v.MIDLLE},H=J0(),me=JSON.stringify(H)!=="{}"?H:ue,de=K0({imageOptions:{size:512},textureOptions:{size:512},plugins:[[re,"modelItemLabelPlugin",{...me}]]}),ce=()=>{const i=le(),e=p0(b0.WORK,"pWLy9nekmQdMXqja");return e&&t0(de,{initialWork:T0(e),ref:t=>Object.assign(window,{$five:t?.five}),children:[x(R0,{...i}),x(U0,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),x(se,{})]})};X0.exports.render(x(ce,{}),document.querySelector("#app"));
