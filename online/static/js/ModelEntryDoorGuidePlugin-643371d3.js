import"./BetterTween-5a481d88.js";import{ap as B,al as L,am as q,ao as U,aq as W,r as E,u as $,a as O,b as I,a9 as N,F as v,j as s,aa as H,d as _,ab as J,ac as M,ad as V,ae as X,c as K,p as Q,e as Y,R as Z}from"./vendor-9221c96b.js";import"./constants-39e3873d.js";import{t as ee}from"./transformPositionToVector3-2a70d53c.js";import{t as te}from"./transfromToMeshBasicMaterial-b13c8bcd.js";import{a as A,w as D}from"./mockData-a850cee4.js";import{g as ne}from"./getInitialParamFromUrl-f6979ec1.js";function oe(n,t){const e=t?.size??512,u=t?.fontSize??e*(35/256)*1.2,b=t?.backgroundColor??"rgba(0,0,0,0)",m=t?.fontColor??"#fff",p=t?.textAlign??"center",l=document.createElement("canvas");l.setAttribute("width",e+""),l.setAttribute("height",e+"");const a=l.getContext("2d");return a.fillStyle=b,a.fillRect(0,0,e,e),a.font=`${u}px "\u5FAE\u8F6F\u96C5\u9ED1"`,a.textAlign=p,a.fillStyle=m,a.fillText(n,e/2,e*.7),new B(l)}const ie=(n,t)=>{const e={},u=t.animationEnabled??!0,b=t.position??void 0,m=t.rad??void 0,p=t.fbx_url||"//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx",l=[],a=async o=>{const d=o?.position??b;if(!d)return Promise.reject("ModelEntryDoorGuidePlugin.load(): position is undefined");const f=ee(d),i=o?.rad??m,x=o?.fbx_url??p;if(e.rad=i,i===void 0)return Promise.reject(`ModelEntryDoorGuidePlugin.load(): rad is ${i}`);const r=await new L().loadAsync(x);r.position.copy(f),r.rotation.z=i,r.scale.set(.8,.8,.8),te(r,{transparent:!0,side:q});const c=r.children?.[0]?.children?.[3]?.clone();return c?(c.material=new U({transparent:!0,map:oe("\u5165\u6237\u95E8")}),c.renderOrder=3,r.children[0].add(c),e.object=r,!0):Promise.reject(`ModelEntryDoorGuidePlugin.load(): textMesh is ${c}`)},z=()=>{if(e.animation)return;if(!e.object)return console.error("ModelEntryDoorGuidePlugin.initAnimation(): state.object is ",e.object);const o=1,d=new W(e.object);l.push(d);const f=d.clipAction(e.object.animations[0]);f.timeScale=o;let i;const x=()=>{let h=0,P=0;const T=1e3/30,w=j=>{h=requestAnimationFrame(w);const F=j-P;F<T||(P=j,l.forEach(k=>k.update(F/1e3)),n.needsRender=!0)};return h=requestAnimationFrame(w),()=>{cancelAnimationFrame(h)}},R={play:()=>{i||(f.play(),i=x(),requestAnimationFrame(()=>{e.object&&e.object.rotation.z!==e.rad&&(e.object.rotation.z=e.rad)}))},stop:()=>{f.stop(),i?.(),i=void 0}};e.animation=R},y=o=>{if(!e.object)return console.error("ModelEntryDoorGuidePlugin.enable(): object is ",e.object);(o?.animationEnable??u)&&(e.animation||z(),e.animation.play()),n.scene.add(e.object),n.needsRender=!0},G=()=>{!e.object||(e.animation&&e.animation.stop(),n.scene.remove(e.object),n.needsRender=!0)},g=o=>o==="Floorplan"?y():G();return{load:a,enable:o=>(e.enabled||(e.enabled=!0,g(n.currentMode),n.on("modeChange",g),y(o)),!0),disable:()=>(e.enabled&&(e.enabled=!1,n.off("modeChange",g)),!0)}};function S(){return{width:window.innerWidth,height:window.innerHeight}}function ae(){const[n,t]=E.exports.useState(S);return E.exports.useEffect(()=>{const e=()=>t(S());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)}),n}const re=()=>{const[n,t]=$(),e=O(),u=I();return N("modelLoaded",async()=>{await e.plugins.modelEntryDoorGuidePlugin.load(),t({mode:v.Mode.Floorplan,fov:80,latitude:-.06631286321852166,longitude:2.424613849671955,panoIndex:0}),e.plugins.modelEntryDoorGuidePlugin.enable({animationEnable:!1})}),u!=="Loaded"?null:s(H,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},children:_(J,{showLabels:!0,value:n.mode,onChange:(b,m)=>{t({mode:m})},children:[s(M,{label:"\u5168\u666F\u6F2B\u6E38",icon:s(V,{}),value:v.Mode.Panorama}),s(M,{label:"\u7A7A\u95F4\u603B\u89C8",icon:s(X,{}),value:v.Mode.Floorplan})]})})},se={},C=ne(),le=JSON.stringify(C)!=="{}"?C:se,de=K({plugins:[[ie,"modelEntryDoorGuidePlugin",{fbx_url:"//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx",position:A?.position,rad:A?.rad,...le}]]}),ce=()=>{const n=ae();return D&&_(de,{initialWork:Q(D),ref:t=>Object.assign(window,{$five:t?.five}),children:[s(Y,{...n}),s(re,{})]})};Z.render(s(ce,{}),document.querySelector("#app"));
