import{u as m,D as h}from"./useFetchDatas-f7287a8d.js";import{r as n,b as g,u as x,a as w,aN as b,d as a,B as l,j as e,aO as F,aP as _,aQ as u,aR as P,F as c,aS as S,c as y,p as z,e as T,f as R}from"./vendor-0279cb68.js";import{j as V}from"./index.es-7421fa40.js";function p(){return{width:window.innerWidth,height:window.innerHeight}}function j(){const[s,t]=n.exports.useState(p);return n.exports.useEffect(()=>{const o=()=>t(p());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),s}const A=[{topLeft:{x:-2.4397027504951727,y:1.321611372744071,z:.9610979887310558},bottomLeft:{x:-2.4441131950417114,y:.7002877178083624,z:.9610504005830736},bottomRight:{x:-3.5409557417698365,y:.7129315526064004,z:.9610934983911138},topRight:{x:-3.5415800323154465,y:1.3188503177101172,z:.961031973361969}}],D={video_src:"https://vrlab-public.ljcdn.com/release/web/videos/tv_ads/360/009.mp4",video_poster_src:"https://vrlab-public.ljcdn.com/release/web/videos/posters/002.9203cf99.jpg",points:A},E=s=>{const t=g(),[o,r]=x(),d=n.exports.useRef(null),v=w();return b("modelLoaded",async()=>{if(!d.current)return;const i=v.plugins.modelTVVideoPlugin;await i.load(D),i.enable(),r({panoIndex:2,fov:120,latitude:.22534459988940497,longitude:3.60942475821387})}),t!=="Loaded"?null:a(l,{children:[e(l,{sx:{position:"absolute",left:"13px",bottom:"60px",width:"160px",height:"90px"},children:e("video",{ref:d,style:{position:"absolute",width:"100%",height:"100%"}})}),e(F,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"model-TV-video-plugin-show",children:a(_,{showLabels:!0,value:o.mode,onChange:(i,f)=>{r({mode:f})},sx:{backgroundColor:"transparent"},children:[e(u,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(P,{}),value:c.Mode.Panorama}),e(u,{label:"\u7A7A\u95F4\u603B\u89C8",icon:e(S,{}),value:c.Mode.Floorplan})]})})]})},L=y({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[V,"modelTVVideoPlugin",{}]]}),k=()=>{const s=j(),t=m(h.WORK);return t&&a(L,{initialWork:z(t),ref:o=>Object.assign(window,{$five:o?.five}),children:[e(T,{...s}),e(E,{})]})};R.exports.render(e(k,{}),document.querySelector("#app"));
