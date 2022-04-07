import"./BetterTween-b9d741f5.js";import{F as f,ax as A,r as m,a as O,u as L,b as N,ay as _,j as h,a9 as D,d as F,aa as j,ab as M,ac as G,ad as W,c as k,p as T,e as R,B as z,R as H}from"./vendor-5f3df8df.js";import{a as d,b,S as q,F as U}from"./typing-9caf697c.js";import{o as B,g as V,c as v,M as $}from"./changeModelCanvasOpacity-562eef72.js";import{f as J}from"./RoomHighlight-a3d6fc04.js";import{f as K,w as E}from"./mockData-a850cee4.js";import{g as Q}from"./getInitialParamFromUrl-f6979ec1.js";async function c(t){try{const e=await t;return[null,e]}catch(e){return e instanceof Error?[e,null]:[new Error(""),null]}}function p(t){return Object.prototype.toString.call(t)==="[object Object]"}function w(t,e){return t===e?!0:typeof t!=typeof e?!1:!!(Number.isNaN(t)&&Number.isNaN(e))}function X(t,e){const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertyNames(e);if(n.length!==o.length)return!1;for(let i=0,r=n.length;i<r;i++){const s=n[i];if(!w(t[s],e[s]))return!1}return!0}function Y(t,e){if(t.length!==e.length)return!1;for(let n=0,o=t.length;n<o;n++)if(!w(t[n],e[n]))return!1;return!0}function Z(t,e){return w(t,e)?!0:p(t)&&p(e)?X(t,e):Array.isArray(t)&&Array.isArray(e)?Y(t,e):!1}function P(t,e){return w(t,e)?!0:p(t)&&p(e)?te(t,e):Array.isArray(t)&&Array.isArray(e)?ee(t,e):!1}function ee(t,e){if(t.length!==e.length)return!1;for(let n=0,o=t.length;n<o;n++)if(!P(t[n],e[n]))return!1;return!0}function te(t,e){const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertyNames(e);if(n.length!==o.length)return!1;for(let i=0,r=n.length;i<r;i++){const s=n[i];if(!P(t[s],e[s]))return!1}return!0}function ne(t,e,n={deep:!1}){return n.deep?P(t,e):Z(t,e)}async function ie(t,...e){const[n]=await c(t.changeMode(...e));if(n)throw n;await new Promise((o,i)=>{t.once("initAnimationEnded",o);const r=s=>{s!==e[0]&&i("changeMode \u88AB\u4E2D\u65AD"),t.off("modeChange",r)};t.on("modeChange",r)})}function y(t,e,n=4){return Math.floor(t*Math.pow(10,n))===Math.floor(e*Math.pow(10,n))}function g(t,e){if(t.currentMode!==f.Mode.Floorplan)return!1;const{latitude:n,longitude:o,fov:i}=e,{latitude:r,longitude:s}=t.getCurrentState(),a=t.camera.fov;return!!(y(n,r,1)&&y(o,s,1)&&i===a)}async function re(t,e,n=!0){if(g(t,e)===!0)return;if(t.currentMode!==f.Mode.Floorplan){const[u]=await c(ie(t,f.Mode.Floorplan,e,void 0,n));if(u)throw u;if(g(t,e)===!1)throw new Error(d.ChangeModeError);return}const{latitude:i,longitude:r,fov:s}=t.getCurrentState(),a=Math.min(1e3,Math.max(200,Math.abs(i-Math.PI/2)*1e3,(r>Math.PI?2*Math.PI-r:r)*500,Math.abs(s-e.fov)*10)),[l]=await c(t.updateCamera(e,a,n));if(l)throw new Error(d.UpdateCameraError)}const oe="modelFloorplanPlugin";class se{name=oe;hooks;visible=!1;size={width:0,height:0};app=void 0;pxmm=0;five;panoIndex=0;floorIndex=0;configs={};lastPanoramaLongitude=0;selector;floorplanData;wrapper;container=document.createElement("div");showState;ModelFloorplanPluginsShowOpts;showPromise;showRejection;constructor(e,n){this.five=e,this.hooks=new A,this.selector=n.selector,this.configs=B(n,["selector"]),this.showState={longitude:0,latitude:Math.PI/2,fov:b/(n?.scale??1)},this.container.classList.add("floorplan-plugin"),Object.assign(this.container.style,{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:10}),this.five.model.loaded?this.handleModelLoaded():e.once("modelLoaded",this.handleModelLoaded),e.once("dispose",this.dispose),e.on("modeChange",this.handleModeChange),e.on("panGesture",this.handlePanGesture),e.on("panoArrived",this.handlePanoArrived),e.on("wantsChangeMode",this.handleWantsChangeMode),e.on("wantsInteriaPan",this.handleWantsInteriaPan),e.on("modelShownFloorChange",this.onModelShownFloorChange)}dispose=()=>{const e=this.five;this.hide(),this.app?.$destroy(),this.container?.remove(),e.off("modelLoaded",this.handleModelLoaded),e.off("modeChange",this.handleModeChange),e.off("panGesture",this.handlePanGesture),e.off("panoArrived",this.handlePanoArrived),e.off("wantsChangeMode",this.handleWantsChangeMode),e.off("wantsInteriaPan",this.handleWantsInteriaPan),e.off("wantsTapGesture",this.handleWantsTapGesture),e.off("modelShownFloorChange",this.onModelShownFloorChange)};async load(e){const n=JSON.parse(JSON.stringify(e));this.floorplanData=await J(n),this.render()}appendTo(e){return this.wrapper=e,e.appendChild(this.container),this}updateSize=()=>{if(!this.floorplanData||!g(this.five,this.showState)||!this.container||!this.wrapper)return;const{min:e,max:n}=this.floorplanData.bounding,o=n.x-e.x,i=n.y-e.y,r=this.configs.attachedTo?{attachedTo:this.configs.attachedTo}:void 0,s=V(this.five,this.wrapper,this.floorIndex,r),a=Math.ceil(o*s),l=Math.ceil(i*s);this.size.width===a&&this.size.height===l||(this.pxmm=s,this.size={width:a,height:l},this.container.style.width=a+"px",this.container.style.height=l+"px")};show=async e=>{if(!this.showPromise&&this.visible)return!0;if(!this.five.model?.loaded)throw new Error(d.ModelNotLoaded);if(!this.floorplanData)throw new Error(d.DataNotLoaded);if(this.visible=!0,this.showPromise){const i=ne(e,this.ModelFloorplanPluginsShowOpts,{deep:!1});if(!!this.showPromise&&i)return this.showPromise;!!this.showPromise&&!i&&this.showRejection?.(d.DifferentShowParams)}this.ModelFloorplanPluginsShowOpts=e;const o=(async()=>{let i=!1,r;this.showRejection=u=>{i=!0,r=u};const[s]=await c(re(this.five,this.showState,e?.userAction));if(s)throw s;if(i)throw r?new Error(r):new Error(d.UnknownError);if(!this.visible)throw new Error(d.UnknownError);this.visible=!0,this.updateSize(),e?.floorIndex&&(this.floorIndex=e.floorIndex),this.five.model.show(this.floorIndex);const a=e?.modelOpacity??this.configs.modelOpacity??1,l=e?.immediately?0:q;return v(this.five,a,l),this.render(l),this.five.on("wantsGesture",this.handleWantsGesture),this.five.on("wantsTapGesture",this.handleWantsTapGesture),!0})().then(()=>(this.hooks.emit("showAnimationEnded",{auto:!!e?.isAutoShow,userAction:e?.userAction??!0}),!0)).catch(i=>{if(e?.isAutoShow||!(i instanceof Error))return!1;throw i}).finally(()=>{this.showPromise=void 0,this.showRejection=void 0});return this.showPromise=o,o};hide=e=>{if(this.size.width===0||this.visible===!1)return!0;const n=!!e?.isAutoHide;return this.five.off("wantsGesture",this.handleWantsGesture),this.five.off("wantsTapGesture",this.handleWantsTapGesture),this.visible=!1,this.showRejection?.(d.BreakOffByHide),v(this.five,1,0),this.render(),this.hooks.emit("hide",{auto:n,userAction:e?.userAction??!0}),!0};changeFloor(e){this.five.model.show(e),this.floorIndex=e,this.render()}changeConfigs(e){Object.assign(this.configs,e),!!this.container&&this.render()}onModelShownFloorChange=e=>{e!==null&&(this.floorIndex=e,this.updateSize(),this.render())};handleModelLoaded=()=>{if(this.wrapper||!this.selector)return;const e=this.selector instanceof Element?this.selector:document.querySelector(this.selector);if(!e)throw new Error("\u4E0D\u6B63\u786E\u7684\u7236\u5BB9\u5668\u9009\u62E9\u5668");this.wrapper=e,e.append(this.container)};handleClick=()=>{if(!this.visible)return;if(this.hooks.emit("click"))return!1};handleWantsTapGesture=()=>this.handleClick();handleWantsChangeMode=e=>{e!=="Panorama"&&(this.lastPanoramaLongitude=this.five.getCurrentState().longitude),e!=="Floorplan"&&this.hide()};handleModeChange=e=>{e==="Floorplan"?this.five.on("panGesture",this.handlePanGesture):(this.hide(),this.five.off("panGesture",this.handlePanGesture))};handlePanoArrived=e=>{!this.five?.work||(this.panoIndex=e,this.floorIndex=this.five.work.observers[e].floorIndex)};handleWantsInteriaPan=()=>{if(this.visible)return!1};handleWantsGesture=(e,n)=>{if(!!this.visible&&(n.length>1||e==="mouseWheel"))return!1};handlePanGesture=async({latitude:e,longitude:n},o)=>{if(this.configs.autoShowEnable===!1)return;if(o&&this.visible)return this.five.setState(this.showState,!0);const i=Math.abs(e-Math.PI/2)>5*Math.PI/180,r=n>5*(Math.PI/180)&&n<355*(Math.PI/180),s=i||r;if(this.visible&&s)return this.hide({isAutoHide:!0});if(this.five.camera.fov/b<.8)return;const a=Math.abs(e-Math.PI/2)<10*Math.PI/180,l=n<30*(Math.PI/180)||n>330*(Math.PI/180);if(o&&!this.visible&&a&&l){const u=async(x,C)=>{!C||(this.five.off("interiaPan",u),await this.show({isAutoShow:!0}))};this.five.on("interiaPan",u);return}};render(e){if(!this.container||!this.floorplanData||this.size.width===0)return;const{hoverEnable:n,cameraImageUrl:o,getLabelElement:i,roomLabelsEnable:r,compassEnable:s,ruleLabelsEnable:a}=this.configs,l={five:this.five,pxmm:this.pxmm,cameraImageUrl:o,visible:this.visible,duration:e??0,panoIndex:this.panoIndex,floorIndex:this.floorIndex,floorplanData:this.floorplanData,hoverEnable:n??!1,compassEnable:s??!0,ruleLabelsEnable:a??!0,roomLabelsEnable:r??!0,lastPanoramaLongitude:this.lastPanoramaLongitude,getLabelElement:i,onRoomHeightClick:this.handleClick};this.app?this.app.$set(l):this.app=new $({target:this.container,intro:!0,props:l})}}const ae=(t,e)=>new se(t,e);function S(){return{width:window.innerWidth,height:window.innerHeight}}function le(){const[t,e]=m.exports.useState(S);return m.exports.useEffect(()=>{const n=()=>e(S());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),t}const he=t=>{const e=O(),[n,o]=L(),i=N();return m.exports.useEffect(()=>{if(i!=="Loaded")return;Object.assign(window,{five:e,THREE:_});const r=e.plugins.modelFloorplanPlugin;Promise.resolve(r.load(K)).then(()=>r.show())},[i]),i!=="Loaded"?null:h(D,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:F(j,{showLabels:!0,value:n.mode,onChange:(r,s)=>{o({mode:s})},children:[h(M,{label:"\u5168\u666F\u6F2B\u6E38",icon:h(G,{}),value:f.Mode.Panorama}),h(M,{label:"\u7A7A\u95F4\u603B\u89C8",icon:h(W,{}),value:f.Mode.Floorplan})]})})},de={attachedTo:U.CEILING},I=Q(),ue=JSON.stringify(I)!=="{}"?I:de,fe=k({plugins:[[ae,"modelFloorplanPlugin",{selector:".plugin-full-screen-container",...ue}]]}),ce=()=>{const t=le();return E&&F(fe,{initialWork:T(E),ref:e=>Object.assign(window,{$five:e?.five}),children:[h(R,{...t}),h(z,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),h(he,{})]})};H.render(h(ce,{}),document.querySelector("#app"));