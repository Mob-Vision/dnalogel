import{f as c,b as m,w as i}from"./mockData-985af735.js";import{r as t,u as p,a as v,t as f,F as n,j as e,v as h,d as l,w as g,x as r,y as w,z as C,c as F,p as _,e as x,R as P}from"./vendor-74dbed36.js";/* empty css              */function d(){return{width:window.innerWidth,height:window.innerHeight}}function b(){const[s,a]=t.exports.useState(d);return t.exports.useEffect(()=>{const o=()=>a(d());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),s}const S=c?.computed_data?.entrance?.north_rad,z=()=>{const[s,a]=p(),o=v();return f("modelLoaded",async()=>{await o.plugins.modelChassisCompassPlugin.load({north_rad:S}),a({panoIndex:0,fov:106,latitude:-.07983208586321928,longitude:1.52265306535823,mode:n.Mode.Floorplan}),o.plugins.modelChassisCompassPlugin.enable()}),t.exports.useEffect(()=>{},[s.mode]),e(h,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},children:l(g,{showLabels:!0,value:s.mode,onChange:(k,u)=>{a({mode:u})},children:[e(r,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(w,{}),value:n.Mode.Panorama}),e(r,{label:"\u7A7A\u95F4\u603B\u89C8",icon:e(C,{}),value:n.Mode.Floorplan})]})})},E=F({plugins:[[m,"modelChassisCompassPlugin",{}]]}),M=()=>{const s=b();return i&&l(E,{initialWork:_(i),ref:a=>Object.assign(window,{$five:a?.five}),children:[e(x,{...s}),e(z,{})]})};P.render(e(M,{}),document.querySelector("#app"));