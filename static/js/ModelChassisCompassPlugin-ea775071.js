import{u,D as c}from"./useFetchDatas-f7287a8d.js";import{r,u as f,a as h,b as g,aN as _,F as n,j as e,aO as F,d as m,aP as w,aQ as d,aR as C,aS as P,c as S,p as x,e as b,aM as A}from"./vendor-0279cb68.js";import{b as O}from"./index.es-7421fa40.js";function l(){return{width:window.innerWidth,height:window.innerHeight}}function R(){const[t,s]=r.exports.useState(l);return r.exports.useEffect(()=>{const a=()=>s(l());return window.addEventListener("resize",a,!1),()=>window.removeEventListener("resize",a,!1)}),t}const D=()=>{const[t,s]=f(),a=h(),p=g(),o=u(c.FLOOR_PLAN_SERVER_PLUGIN_DATA);return _("modelLoaded",async()=>{if(!o||JSON.stringify(o)==="{}")return;const i=o?.computed_data?.entrance?.north_rad;await a.plugins.modelChassisCompassPlugin.load({north_rad:i}),s({panoIndex:0,fov:106,latitude:-.07983208586321928,longitude:1.52265306535823,mode:n.Mode.Floorplan}),a.plugins.modelChassisCompassPlugin.enable()},[o]),p!=="Loaded"?null:e(F,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},children:m(w,{showLabels:!0,value:t.mode,onChange:(i,v)=>{s({mode:v})},children:[e(d,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(C,{}),value:n.Mode.Panorama}),e(d,{label:"\u7A7A\u95F4\u603B\u89C8",icon:e(P,{}),value:n.Mode.Floorplan})]})})},M=S({imageOptions:{size:512},textureOptions:{size:512},plugins:[[O,"modelChassisCompassPlugin",{}]]}),E=()=>{const t=R(),s=u(c.WORK);return s&&m(M,{initialWork:x(s),ref:a=>Object.assign(window,{$five:a?.five}),children:[e(b,{...t}),e(D,{})]})};A.render(e(E,{}),document.querySelector("#app"));
