import"./BetterTween-b9d741f5.js";import{V as R,F as ne,a7 as ue,r as J,b as le,a as de,a8 as ie,j as q,B as ce,a9 as be,aw as fe,c as _e,d as pe,p as ge,e as xe,R as me}from"./vendor-5f3df8df.js";import"./typing-9caf697c.js";import{t as ye}from"./throttle-19b08aa2.js";function $(e,r){return e.x===r.x&&e.y===r.y}function te(e,r){return Math.abs(e)===1/0&&Math.abs(r)===1/0?!0:Math.abs(e-r)<.001}function W(e,r){return(r.y-e.y)/(r.x-e.x)}function he(e,r,t){const s=W(e[1],e[0]),u=W(r[1],r[0]);if(isNaN(s)||isNaN(u)||te(s,u))return!1;if(K(e[0],r))return e[0];if(K(e[1],r))return e[1];if(K(r[0],e))return r[0];if(K(r[1],e))return r[1];if(t&&!je(e,r))return!1;const g=e[0],o=r[0];if(Math.abs(s)===1/0)return{x:g.x,y:r[1].y-(r[1].x-g.x)*u};if(Math.abs(u)===1/0)return{x:o.x,y:e[1].y-(e[1].x-o.x)*s};const d=(o.y-g.y+s*g.x-u*o.x)/(s-u),F=s*d-s*g.x+g.y;return{x:d,y:F}}function K(e,r){return $(e,r[0])||$(e,r[1])?!0:(r[0].x-e.x)*(e.x-r[1].x)>=0&&(r[0].y-e.y)*(e.y-r[1].y)>=0&&te(W(r[0],e),W(e,r[1]))}function O(e,r,t){return(e.x-t.x)*(r.y-t.y)-(r.x-t.x)*(e.y-t.y)}function je(e,r){return Math.max(e[0].x,e[1].x)>=Math.min(r[0].x,r[1].x)&&Math.max(r[0].x,r[1].x)>=Math.min(e[0].x,e[1].x)&&Math.max(e[0].y,e[1].y)>=Math.min(r[0].y,r[1].y)&&O(r[0],e[1],e[0])*O(e[1],r[1],e[0])>0&&O(e[0],r[1],r[0])*O(r[1],e[1],r[0])>0?1:0}function ae(e,r=0){r<=0?requestAnimationFrame(e):requestAnimationFrame(()=>ae(e,r-1))}const ve=`<style type="text/css">
.PanoRulerPlugin-rule-line {
  position: absolute;
  transform-origin: left center;
  width: 0;
  height: 0.0625rem;
}

.PanoRulerPlugin-rule-line::after {
  content: '';
  position: absolute;
  left: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  z-index: 1;
  animation: viewport-rule-point 0.1s 1s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line::before {
  content: '';
  position: absolute;
  right: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  animation: viewport-rule-point 0.1s 1.5s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line em {
  background: #fff;
  display: block;
  height: 100%;
  animation: viewport-rule-line 0.5s ease 1s;
  animation-fill-mode: both;
  box-shadow: 0 0 0.25rem rgb(0 0 0 / 40%);
}

.PanoRulerPlugin-rule-label {
  position: absolute;
  width: 0;
  height: 0;
  top: 0.0625rem;
}

.PanoRulerPlugin-rule-label-name {
  position: absolute;
  padding: 0.1875rem 0.375rem;
  background: rgba(195,195,195,0.30);
  backdrop-filter: blur(0.25rem);
  -webkit-backdrop-filter: blur(0.25rem);
  border-radius: 6.25rem;
  border: 0.0625rem solid rgba(255,255,255,0.6);
  white-space: nowrap;
  overflow: hidden;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  -webkit-animation: viewport-rule-label 0.25s ease 1s;
  animation: viewport-rule-label 0.25s ease 1s;
  animation-fill-mode: both;
  box-shadow: inset 0 0 0.625rem 0 rgba(255,255,255,0.30);
}

@keyframes viewport-rule-line {
  0% { width: 0% }
  100% { width: 100% }
}

@keyframes viewport-rule-label {
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
}

@keyframes viewport-rule-point {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
</style>
`,we=(e,r)=>Math.sqrt(Math.pow(e.z-r.z,2)+Math.pow(e.x-r.x,2)),ze=(e,r)=>{const t={},s=new ue,u=r.work;if(!u)return t;const g=e.observers;u.observers.forEach((o,d)=>{const{standingPosition:F}=o,D=new R(F.x,F.y,F.z);s.set(D,new R(0,1,0));const[k]=r.model.intersectRaycaster(s),E=k?k.point.y:2.7,T=g[d];if(!T)return t;const N=e.rooms[T].name;t[N]===void 0?t[N]={__roof:[E],__floor:[D.y]}:(t[N].__roof.push(E),t[N].__floor.push(D.y))});for(const o in t){const d=t[o];d.__roof.sort(),d.__floor.sort(),d.floor=d.__floor[~~(d.__floor.length/2)],d.roof=d.__roof[d.__roof.length-1]}return t},Ae=(e,r)=>{const t={enable:!1,loaded:!1,options:r.options||{distanceText:_=>`${_.toFixed(1)}m`}},s=(_,x)=>{const i=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${t.options.distanceText(x)}</div>
        </div>
      </div>
    `,n=document.createElement("div");return n.setAttribute("class","PanoRulerPlugin-rule"),n.setAttribute("data-name",_),n.setAttribute("style","display: none"),n.innerHTML=i,n},u=document.createElement("div");u.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const g=document.createElement("div");g.innerHTML=ve,u.appendChild(g);const o={},d=(_,x)=>{if(t.loaded)throw new Error("\u6807\u5C3A\u88AB\u91CD\u590D\u521D\u59CB\u5316\uFF01");const i=ze(_,e),n=e.work;if(!n)return!1;for(const l in x){const y=x[l],{standingPosition:h}=n.observers[0],j=y.map(({x:c,z:b,observers:a})=>{const m=a.length>0?_.rooms[_.observers[a[0]]].name:"",f=i[m]?i[m].floor:null;let p=1/0,v={index:0,x:h.x,y:h.y,z:h.z};a.forEach(Q=>{if(!n.observers[Q])return;const{standingPosition:I}=n.observers[Q],A={index:Q,x:I.x,y:I.y,z:I.z},M=we({x:c,z:b},A);f?M<p&&Math.abs(A.y-f)<.3&&(p=M,v=A):M<p&&(p=M,v=A)});const z=new R(c,v.y,b);Object.assign(z,{observers:a});const Z=i[m]?i[m].roof:null,C=Z?new R(c,Z,b):null;return C&&Object.assign(C,{observers:a}),{origin:z,vertical:C}});o[l]={origins:j.map(c=>c.origin),rules:[]};for(const{origin:c,vertical:b}of j){if(!b)continue;const a=s(l,c.distanceTo(b));u.append(a),o[l].rules.push({vertical:!0,rule:[c,b],$element:a})}for(let c=0;c<j.length;c++){let b=c+1;b>=j.length&&(b=0);const{origin:a}=j[c],{origin:m}=j[b],f=s(l,a.distanceTo(m));u.append(f),o[l].rules.push({vertical:!1,rule:[a,m],$element:f})}}return t.loaded=!0,!0},F=async(_,x,i)=>{const n=_||r.roomInfo,l=x||r.roomRules;if(!n||!l)throw new Error("\u6807\u5C3A\u6570\u636E\u4F9D\u8D56\u4E0D\u9F50\u5168\uFF01");return t.options=Object.assign({},t.options,i||{}),e.model.loaded?d(n,l):await new Promise(y=>e.once("modelLoaded",()=>y(d(n,l))))};r.roomInfo&&r.roomRules&&F(r.roomInfo,r.roomRules);const D=(_,x,i,n)=>{const l=[[{x:0,y:0},{x:i,y:0}],[{x:0,y:0},{x:0,y:n}],[{x:i,y:0},{x:i,y:n}],[{x:0,y:n},{x:i,y:n}]],y=[];for(let h=0;h<l.length;h++){const j=he([_,x],[l[h][0],l[h][1]],!0);j&&y.push(j)}return y.length===0?!1:y},k=()=>{const _=e.getElement()?.parentElement;if(!_||!t.loaded||Object.keys(o).length<=0)return;const{panoIndex:x,camera:i,currentMode:n}=e;if(x===void 0)return;let l;for(const a in o)a.split(",").indexOf(x.toString())>=0&&(l=a);if(!l)return;const y=i.position,h=i.getWorldDirection(new R),j=_.clientWidth,c=_.clientHeight;if(n!==ne.Mode.Panorama){for(const a in o)for(const{$element:m}of o[a].rules)m.style.display="none";return}for(const a in o)for(const{$element:m}of o[a].rules)m.style.display=a===l?"block":"none";const[b]=o[l].origins.slice().filter(a=>a.observers.indexOf(x)>=0).sort((a,m)=>{const f=a.clone().setY(0).sub(y).normalize().angleTo(h.clone().setY(0)),p=m.clone().setY(0).sub(y).normalize().angleTo(h.clone().setY(0));return f-p});for(const{rule:a,vertical:m,$element:f}of o[l].rules){const[p,v]=a,z=f.querySelector(".PanoRulerPlugin-rule-line");if(!z)return;if(!b){f.style.display="none";continue}if(p!==b&&v!==b){f.style.display="none";continue}if(p.distanceTo(v)<.5){f.style.display="none";continue}if(p.observers.indexOf(x)===-1||v.observers.indexOf(x)===-1){f.style.display="none";continue}if(p.clone().sub(y).normalize().angleTo(h)>Math.PI/2){f.style.display="none";continue}if(v.clone().sub(y).normalize().angleTo(h)>Math.PI/2){f.style.display="none";continue}const U=p.distanceTo(v);if(v.clone().sub(v.clone().sub(p).divide(new R(2,2,2))).distanceTo(y)/U>8){f.style.display="none";continue}const I=p.clone().project(i),A=(I.x+1)/2*j,M=(-I.y+1)/2*c,H=v.clone().project(i),S=(H.x+1)/2*j,Y=(-H.y+1)/2*c,B=Math.sqrt(Math.pow(S-A,2)+Math.pow(Y-M,2));let L=B,V=50;const w=D({x:~~A,y:~~M},{x:~~S,y:~~Y},j,c);if(w&&w.length===1&&(b===p?(L=Math.sqrt(Math.pow(w[0].x-A,2)+Math.pow(w[0].y-M,2)),V=L/B*50):b===v&&(L=Math.sqrt(Math.pow(w[0].x-S,2)+Math.pow(w[0].y-Y,2)),V=100-L/B*50)),w&&w.length===2){const P={x:(w[0].x+w[1].x)/2,y:(w[0].y+w[1].y)/2};V=Math.sqrt(Math.pow(P.x-A,2)+Math.pow(P.y-M,2))/B*100}const oe=(Math.PI/2-Math.atan2(S-A,M-Y))/Math.PI*180,X=z.querySelector(".PanoRulerPlugin-rule-label"),G=X.children[0].clientWidth;G>=B||G/2>=V/100*B||G/2>=(1-V/100)*B?z.style.display="none":(z.style.display="block",z.style.width=B+"px",z.style.left=A+"px",z.style.top=M+"px",z.style.transform=`rotate(${-oe}deg)`,X.style.left=`${V}%`)}},E=()=>ae(k),T=ye(k,80);return{enable:()=>t.loaded?(t.enable||(u.setAttribute("class","PanoRulerPlugin"+(t.options.className?" "+t.options.className:"")),e.getElement()?.parentElement?.append(u),k(),e.on("panoArrived",k),e.on("modeChange",k),e.on("cameraDirectionUpdate",E),e.on("movingToPano",E),e.on("mouseWheel",T),e.on("pinchGesture",T),t.enable=!0),!0):!1,disable:()=>(t.enable&&(e.off("panoArrived",k),e.off("modeChange",k),e.off("cameraDirectionUpdate",E),e.off("movingToPano",E),e.off("mouseWheel",T),e.off("pinchGesture",T),u&&u.remove(),t.enable=!1),!0),load:F,state:t}};function ee(){return{width:window.innerWidth,height:window.innerHeight}}function Me(){const[e,r]=J.exports.useState(ee);return J.exports.useEffect(()=>{const t=()=>r(ee());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),e}const ke={rooms:{"u-8fyHeokV558OzD":{id:"u-8fyHeokV558OzD",name:"\u536B\u751F\u95F4",localName:"\u536B\u751F\u95F4",area:3881706},"u-BqNrq1Kv557eLI":{id:"u-BqNrq1Kv557eLI",name:"\u5367\u5BA4A",localName:"\u5367\u5BA4A",area:16776994746000051e-9},"u-CHPloakv558md2":{id:"u-CHPloakv558md2",name:"\u8FC7\u9053",localName:"\u8FC7\u9053",area:2.0569003596000671e6},"u-D7X97ZkV558Dkb":{id:"u-D7X97ZkV558Dkb",name:"\u9633\u53F0",localName:"\u9633\u53F0",area:3416796306304097e-9},"u-YAQPlSKV5589Yq":{id:"u-YAQPlSKV5589Yq",name:"\u53A8\u623F",localName:"\u53A8\u623F",area:8852130234375e-6},"u-fvZpKZkV558naB":{id:"u-fvZpKZkV558naB",name:"\u5367\u5BA4B",localName:"\u5367\u5BA4B",area:9326712},"u-r0284VKV558Iy8":{id:"u-r0284VKV558Iy8",name:"\u5BA2\u5385",localName:"\u5BA2\u5385",area:2362539564440012e-8}},observers:["u-r0284VKV558Iy8","u-D7X97ZkV558Dkb","u-r0284VKV558Iy8","u-r0284VKV558Iy8","u-YAQPlSKV5589Yq","u-YAQPlSKV5589Yq","u-YAQPlSKV5589Yq","u-r0284VKV558Iy8","u-CHPloakv558md2","u-8fyHeokV558OzD","u-8fyHeokV558OzD","u-fvZpKZkV558naB","u-fvZpKZkV558naB","u-BqNrq1Kv557eLI","u-BqNrq1Kv557eLI"]},Fe={"0,2,3,7":[{x:3.484,z:-1.513,observers:[0,2,3,7]},{x:4.523,z:-1.513,observers:[0,2,3,7]},{x:4.523,z:3.270304400000001,observers:[0,2,3]},{x:4.047,z:3.270304400000001,observers:[0,2,3,7]},{x:4.047,z:4.581,observers:[2,3,7]},{x:.428375,z:4.581,observers:[2,3,7]},{x:.428375,z:3.145,observers:[7]},{x:.579375,z:3.145,observers:[0,2,3,7]},{x:.579375,z:-1.513,observers:[0,2,3,7]},{x:3.484,z:-1.513,observers:[0,2,3,7]}],"1":[{x:1.6959087429091377,z:-3.037,observers:[1]},{x:2.8110884429091385,z:-2.544,observers:[1]},{x:3.424,z:-2.544,observers:[1]},{x:3.424,z:-1.633,observers:[1]},{x:.579375,z:-1.633,observers:[1]},{x:.579375,z:-3.037,observers:[1]},{x:1.6959087429091377,z:-3.037,observers:[1]}],"4,5,6":[{x:-1.147,z:2.473625,observers:[4,5,6]},{x:-1.147,z:-3.037,observers:[4,5,6]},{x:.459375,z:-3.037,observers:[4,5,6]},{x:.459375,z:2.473625,observers:[4,5,6]},{x:-1.147,z:2.473625,observers:[4,5,6]}],"8":[{x:4.643,z:3.4103044000000007,observers:[8]},{x:4.643,z:1.468,observers:[8]},{x:5.702,z:1.468,observers:[8]},{x:5.702,z:3.4103044000000007,observers:[8]},{x:4.643,z:3.4103044000000007,observers:[8]}],"9,10":[{x:5.822,z:3.4703044000000007,observers:[9,10]},{x:5.822,z:1.468,observers:[9,10]},{x:7.391,z:1.468,observers:[10]},{x:7.391,z:3.942,observers:[10]},{x:5.822,z:3.942,observers:[9,10]},{x:5.822,z:3.4703044000000007,observers:[9,10]}],"11,12":[{x:4.643,z:-1.573,observers:[11,12]},{x:4.643,z:-2.046,observers:[11,12]},{x:7.391,z:-2.046,observers:[11,12]},{x:7.391,z:1.348,observers:[11,12]},{x:4.643,z:1.348,observers:[11,12]},{x:4.643,z:-1.573,observers:[11,12]}],"13,14":[{x:7.391,z:8.441,observers:[13,14]},{x:6.561,z:8.441,observers:[13,14]},{x:6.561,z:9.19,observers:[13,14]},{x:4.167,z:9.19,observers:[13,14]},{x:4.167,z:3.390304400000001,observers:[13,14]},{x:4.523,z:3.390304400000001,observers:[]},{x:4.523,z:3.530304400000001,observers:[13,14]},{x:5.702,z:3.530304400000001,observers:[13,14]},{x:5.702,z:4.062,observers:[13,14]},{x:7.391,z:8.441,observers:[13,14]}]},re={_signature:"l0ZJWDCkSCO3NIOxyly9mzFhVigm0TZ5pefe9L55njMT5we7WDKyirOiBAo98IdsxxBJB6ybtTERts5t8lizgsUSIf/uwFeHp55eDvwPlNpzoaYUULl+ZKUFjTathyI19JXABwVjBwWsZ17En+EhhXGrOJtqYy4ho/ea/AhfJ2I=",allow_hosts:["*"],base_url:"https://vrlab-public.ljcdn.com/",certificate:`-----BEGIN CERTIFICATE-----
MIIEMzCCAhsCCQDYAS/7ATZRmTANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMC
Q04xEDAOBgNVBAgMB0JlaWppbmcxEDAOBgNVBAcMB0JlaWppbmcxFDASBgNVBAoM
C2xpYW5qaWEuY29tMRAwDgYDVQQLDAdSZWFsc2VlMREwDwYDVQQDDAhIYXJkd2Fy
ZTElMCMGCSqGSIb3DQEJARYWbml1aGFpcWluZ0BsaWFuamlhLmNvbTAeFw0yMTA5
MTAwNTIwMDBaFw0zMTA5MDgwNTIwMDBaMIGmMQswCQYDVQQGEwJDTjEQMA4GA1UE
CAwHQmVpSmluZzEQMA4GA1UEBwwHQmVpSmluZzEQMA4GA1UECgwHUmVhbHNlZTEZ
MBcGA1UECwwQUmVhbHNlZUFwcEdldHdheTEgMB4GA1UEAwwXYXBwLWdhdGV3YXku
cmVhbHNlZS5jb20xJDAiBgkqhkiG9w0BCQEWFWRldmVsb3BlckByZWFsc2VlLmNv
bTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuv/y3Ezsy/wh3LCA8vomPbgI
SO9iO5kyR+oAetklD+epMU6J/ZbvTDEomZxuS5iyyKGBupzAh2ZFLIy7tsE71Vx1
IIvT7Kdyq66lMU4YzdrpKUcxv7oOQnO8DA1orKluNa4jkyXBywHKs/Q+20LVc+RD
gKXqFGJUdo8mAxEScs0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEAkMxsU4VLPd4J
0rElBNBIyqPtvnlTs6VkhIK0l4oM58wtDKc1uG9UPSX5j29NguZM6LOe0jCsU2Vg
EpUseMWQjx4o2yBg7MokQyjWc1zu6PppKhQ+RqHQy/biJ2zsIMpX3oMASXffvnW5
n4Bjyo1JdDJiLm1fLvLlVVxQoraJD+rtpqWDEYixGVREUo5OIL5Y5dVjkHG2r9RQ
Quu3yEiyr9gAW8yhz3YR6/sJ6boyGK8NC0v8Jih7NnCdT+9ML+3jn3P5F3TeXdSf
VeYIm5oWAOTe3AjjKP8ARMb2RYACjg80/AcowD/dvRRjbwQmyucUNug2pXJynXpD
Nfx1IBmUmzSAT1Z5yNuY/f3VRBJvmIQ6Jpmef+g0/wUJpyS4SObguItyYlFPLqRH
K1oKqNX/uV0GWWEQl6Lml986TzlHxc4ljtHBhjzlKYIYYZLWWipk4JiB8hxJcTK+
crgvclEQSxFlmAyoqxYFClrOOsPqZJdBhDTvoUWnnWuJLQt7DLHpyInp+S75Gg3o
0zgHpt9m26B3YbjQGYMQlYmhl2VLQa+Ey0W8UZQXLcTvoRT4p+8crqr6cNNsxCyZ
m08vBbEMIMvhBeLQvpM75oaMBmelegipFl2eelxVIHdGJWoyJSZQUdXN0uSidhZp
I7AIgzhqK1Ku/IXK0OSXJonn+/9X/VI=
-----END CERTIFICATE-----`,expire_at:"1961649785356",initial:{flag_position:[1.4741313224264068,-1.1730823573683113,-.3355151635912277],fov:95,heading:0,latitude:0,longitude:.02010530290110424,pano_index:3},model:{file_url:"vrframework/release/ue4_decoration_plan/EAPoBGEgwS7V1XMg/vrproc-ue4/render/model.at3d",material_base_url:"https://vrlab-public.ljcdn.com/",material_textures:["release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_0.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_1.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_2.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_3.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_4.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_5.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_6.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_7.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_8.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_9.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_10.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_11.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_12.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_13.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_14.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_15.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_16.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_17.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_18.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_19.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_20.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_21.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_22.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_23.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_24.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_25.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_26.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_27.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_28.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_29.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_30.jpg","release/ue4/523741cf4b42dd6aaebe4635fbc1d5e6/at3d_results/texture_31.jpg"]},observers:[{accessible_nodes:[1,2,3,7],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518629,index:0,position:[2.2087199687957764,1.0625753608558983,-1.402590036392212],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[2.2087199687957764,.0036735391269111517,-1.402590036392212],visible_nodes:[1,2,3,7]},{accessible_nodes:[0,2,3,7],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518630,index:1,position:[2.2550199031829834,1.0639223587725968,-2.1724300384521484],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[2.2550199031829834,.0034959962925815713,-2.1724300384521484],visible_nodes:[0,2,3,7]},{accessible_nodes:[0,1,3,7],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518631,index:2,position:[1.4198999404907227,1.062372354886374,.41596201062202454],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[1.4198999404907227,.0010692009894797128,.41596201062202454],visible_nodes:[0,1,3,7]},{accessible_nodes:[0,1,2,4,7,8],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518632,index:3,position:[2.39274001121521,1.066200358888945,2.3095099925994873],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[2.39274001121521,0,2.3095099925994873],visible_nodes:[0,1,2,4,7,8]},{accessible_nodes:[3,5,6,8],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518633,index:4,position:[-.11163400113582611,1.074421955368361,1.9162299633026123],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[-.11163400113582611,.00715511443844119,1.9162299633026123],visible_nodes:[3,5,6,8]},{accessible_nodes:[4,6],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518634,index:5,position:[-.05157430097460747,1.0766300541375489,-.4384329915046692],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[-.05157430097460747,.011683718821783984,-.4384329915046692],visible_nodes:[4,6]},{accessible_nodes:[4,5],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518635,index:6,position:[-.05112849920988083,1.076569957754454,-1.5918699502944946],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[-.05112849920988083,.012680418754758005,-1.5918699502944946],visible_nodes:[4,5]},{accessible_nodes:[0,1,2,3,8,9,10],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518636,index:7,position:[1.2668399810791016,1.0591623541925759,3.3354299068450928],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[1.2668399810791016,.004535748188228217,3.3354299068450928],visible_nodes:[0,1,2,3,8,9,10]},{accessible_nodes:[3,4,7,9,11,12,13,14],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518637,index:8,position:[5.304900169372559,1.069411357960543,2.583240032196045],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.304900169372559,.006326704324158161,2.583240032196045],visible_nodes:[3,4,7,9,11,12,13,14]},{accessible_nodes:[7,8,10],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518638,index:9,position:[5.782440185546875,1.0786530581329674,1.8537299633026123],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.782440185546875,.031401610979785,1.8537299633026123],visible_nodes:[7,8,10]},{accessible_nodes:[7,9],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518639,index:10,position:[6.431079864501953,1.0864862558458657,1.873579978942871],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[6.431079864501953,.01807715299379531,1.873579978942871],visible_nodes:[7,9]},{accessible_nodes:[8,12,13,14],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518640,index:11,position:[5.49921989440918,1.0657203552339882,.5893459916114807],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.49921989440918,.004061425936848773,.5893459916114807],visible_nodes:[8,12,13,14]},{accessible_nodes:[8,11,13],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518641,index:12,position:[5.9574198722839355,1.0669553560231537,-1.569390058517456],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.9574198722839355,.0013560550584945652,-1.569390058517456],visible_nodes:[8,11,13]},{accessible_nodes:[8,11,12,14],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518642,index:13,position:[5.153560161590576,1.0614733603809685,4.446139812469482],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.153560161590576,.0025794997127555064,4.446139812469482],visible_nodes:[8,11,12,14]},{accessible_nodes:[8,11,13],create_time:"2021-10-24T17:41:13+08:00",floor_index:0,id:79518643,index:14,position:[5.064770221710205,1.0628763568614334,7.815199851989746],quaternion:{w:.7071067811865475,x:0,y:.7071067811865475,z:0},standing_position:[5.064770221710205,.019404059217158265,7.815199851989746],visible_nodes:[8,11,13]}],panorama:{count:15,list:[{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_f.jpg",index:0,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/0/0_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_f.jpg",index:1,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/1/1_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_f.jpg",index:2,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/2/2_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_f.jpg",index:3,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/3/3_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_f.jpg",index:4,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/4/4_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_f.jpg",index:5,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/5/5_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_f.jpg",index:6,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/6/6_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_f.jpg",index:7,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/7/7_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_f.jpg",index:8,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/8/8_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_f.jpg",index:9,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/9/9_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_f.jpg",index:10,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/10/10_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_f.jpg",index:11,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/11/11_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_f.jpg",index:12,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/12/12_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_f.jpg",index:13,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/13/13_u.jpg"},{back:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_b.jpg",down:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_d.jpg",front:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_f.jpg",index:14,left:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_l.jpg",right:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_r.jpg",up:"release/ue4/0f01a227e964116e2c6845e90a7d24bd/ue4_result/14/14_u.jpg"}]},picture_url:"vrframework/release/ue4_decoration_plan/EAPoBGEgwS7V1XMg/vrproc-ue4/render/picture.jpg"},Be=e=>{const r=le(),s=de().plugins.panoRulerPlugin,[u,g]=J.exports.useState(s.state.enable);ie("modelLoaded",async()=>{await s.load(ke,Fe,{distanceText:d=>`\u7EA6 ${d.toFixed(1)}\u7C73`}),s.enable(),g(s.state.enable)});const o=()=>{s[s.state.enable?"disable":"enable"](),g(s.state.enable)};return r!=="Loaded"?null:q(ce,{children:q(be,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:q(fe,{onClick:o,children:u?"\u5173\u95ED\u6807\u5C3A":"\u5F00\u542F\u6807\u5C3A"})})})},Ee=_e({onlyRenderIfNeeds:!0,plugins:[[Ae,"panoRulerPlugin",{}]]}),Te=()=>{const e=Me();return re&&pe(Ee,{initialWork:ge(re),ref:r=>Object.assign(window,{$five:r?.five}),children:[q(xe,{...e}),q(Be,{})]})};me.render(q(Te,{}),document.querySelector("#app"));