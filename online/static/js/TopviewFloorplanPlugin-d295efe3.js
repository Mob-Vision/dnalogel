import{f as w,T as g,w as r}from"./mockData-a7cc7513.js";import{r as s,a as h,u as F,H as P,j as e,t as x,b as v,v as b,w as l,x as E,k as u,y as S,c as y,z as _,B as c,p as j,F as z,R as B}from"./vendor-0e0b86ae.js";/* empty css              */function p(){return{width:window.innerWidth,height:window.innerHeight}}function N(){const[n,t]=s.exports.useState(p);return s.exports.useEffect(()=>{const o=()=>t(p());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),n}const k=n=>{const t=h(),[o,i]=F(),a=P();return s.exports.useEffect(()=>{t.plugins.topviewFloorplanPlugin.load(w)},[]),a!=="Loaded"?null:e(x,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:v(b,{showLabels:!0,value:o.mode,onChange:(f,m)=>{i({mode:m})},children:[e(l,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(E,{}),value:u.Mode.Panorama}),e(l,{label:"\u4FEF\u89C6\u6A21\u578B",icon:e(S,{}),value:u.Mode.Topview})]})})},C=()=>{const n=window.location.search?.slice(1)?.split("&");let t={};return n?(n.forEach(o=>{const i=o.split("=");if(i[0]!=="renderCode"){let a={};a[i[0]]=i[1],Object.assign(t,a)}}),t):{}},M={selector:".plugin-full-screen-container",hoverEnable:!0},d=C(),R=JSON.stringify(d)!=="{}"?d:M,W=y({plugins:[[g,"topviewFloorplanPlugin",{...R}]]}),A=()=>{const n=N();return _.memo(()=>e(c,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),()=>!0),r&&v(W,{initialWork:j(r),ref:t=>Object.assign(window,{$five:t?.five}),children:[e(z,{...n}),e(c,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),e(k,{})]})};B.render(e(A,{}),document.querySelector("#app"));
