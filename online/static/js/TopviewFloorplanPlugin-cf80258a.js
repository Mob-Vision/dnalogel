import{F as j,f as Re,w as ee}from"./mockData-2a386b6f.js";import{V as te,f as S,i as N,g as G,h as W,k as u,l as I,m as w,n as P,o as x,q as y,w as D,L as O,Z as Se,a3 as Ie,a5 as Ne,N as M,x as H,a0 as ke,Q as q,I as _,J as E,C as F,E as A,H as V,K as R,z as B,a4 as Z,y as ne,_ as C,ad as Ge,U as Me,ae as qe,af as Ue,ag as Ye,r as X,a as Ve,u as Be,b as Te,j as Y,a8 as Oe,d as We,a9 as Qe,aa as le,ab as ze,F as oe,ac as He,c as je,p as Ze,e as Ke,B as Xe,R as Je}from"./vendor-862c62a4.js";import{C as ae,p as J,b as $e,B as et,R as tt,f as nt}from"./RoomHighlight-6e9c024c.js";import{g as lt}from"./getInitialParamFromUrl-f6979ec1.js";const ot={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"10"};function at(o,e){return e(o),o}function rt(o,e){return at({},t=>{for(const n in o)e.indexOf(n)===-1&&(t[n]=o[n])})}function it(o,e,t,n){const l=Math.max(...o.work.observers.map(d=>d.floorIndex));function a(d){return d>l?o.model.bounding.max.y:Math.max(...o.work.observers.filter(c=>c.floorIndex===d).map(c=>c.standingPosition.y))}function i(){const d=a(t),c=a(t+1),h=n?.attachedTo||j.BOUNDING_CENTER;return h===j.BOUNDING_CENTER?(o.model.bounding.max.y+o.model.bounding.min.y)/2:h===j.CEILING?c:d}const r=i(),s=new te(0,r,0),m=new te(1,r,0),g=s.clone().project(o.camera),b=m.clone().project(o.camera);return Math.abs((b.x-g.x)/1e3)*(e.getBoundingClientRect().width/2)}function st(o){return o*180/Math.PI}function ft(o){let e,t;return{c(){e=W("div"),t=W("div"),u(t,"class","floorplan__camera-rotate svelte-e8a2kn"),I(t,"background-image",`url(${o[0]||ae})`),I(t,"width",o[4],!1),I(t,"height",o[4],!1),I(t,"left","-"+o[4],!1),I(t,"top","-"+o[4],!1),I(t,"transform",`rotate(${o[3]}deg)`,!1),I(t,"transform-origin",`${o[4]} ${o[4]}`,!1),u(e,"class","floorplan__camera-position svelte-e8a2kn"),I(e,"left",o[1],!1),I(e,"top",o[2],!1)},m(n,l){w(n,e,l),P(e,t)},p(n,[l]){l&1&&I(t,"background-image",`url(${n[0]||ae})`)},i:x,o:x,d(n){n&&y(e)}}}function ut(o,e,t){let{panoIndex:n}=e,{floorplanData:l}=e,{lastPanoramaLongitude:a}=e,{cameraImageUrl:i}=e;const{observers:r}=l,s=r[n],m=s.positionInImage.x,g=s.positionInImage.y,b=m*100+"%",f=g*100+"%",d=-st(a)+45,c=document.body.clientWidth,h=document.body.clientHeight,L=`${(c<500||h<500?17:37)/16}rem`;return o.$$set=v=>{"panoIndex"in v&&t(5,n=v.panoIndex),"floorplanData"in v&&t(6,l=v.floorplanData),"lastPanoramaLongitude"in v&&t(7,a=v.lastPanoramaLongitude),"cameraImageUrl"in v&&t(0,i=v.cameraImageUrl)},[i,b,f,d,L,n,l,a]}class mt extends S{constructor(e){super();N(this,e,ut,ft,G,{panoIndex:5,floorplanData:6,lastPanoramaLongitude:7,cameraImageUrl:0})}}const ct="data:image/png;base64,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";function dt(o){let e,t,n,l;return{c(){e=W("div"),t=W("div"),n=D(),l=W("span"),l.textContent="\u5317",u(t,"class","floorplan-plugin__compass-image svelte-5l80pv"),I(t,"background-image",`url(${ct})`),u(l,"class","floorplan-plugin__compass-text svelte-5l80pv"),u(e,"class","floorplan-plugin__compass svelte-5l80pv"),I(e,"transform",o[1],!1)},m(a,i){w(a,e,i),P(e,t),P(e,n),P(e,l)},p:x,d(a){a&&y(e)}}}function ht(o){let e,t=o[0]&&dt(o);return{c(){t&&t.c(),e=O()},m(n,l){t&&t.m(n,l),w(n,e,l)},p(n,[l]){n[0]&&t.p(n,l)},i:x,o:x,d(n){t&&t.d(n),n&&y(e)}}}function pt(o){return o/Math.PI*180}function gt(o,e,t){let{floorplanData:n}=e;const l=n.entrance?.northRad,i=`translateX(-50%) translateZ(10px) rotate(${-(l?pt(l):0)+90}deg)`;return o.$$set=r=>{"floorplanData"in r&&t(2,n=r.floorplanData)},[l,i,n]}class bt extends S{constructor(e){super();N(this,e,gt,ht,G,{floorplanData:2})}}function vt(o){let e,t=o[2].outerHTML+"",n;return{c(){e=new Se,n=O(),e.a=n},m(l,a){e.m(t,l,a),w(l,n,a)},p(l,a){a&4&&t!==(t=l[2].outerHTML+"")&&e.p(t)},d(l){l&&y(n),l&&e.d()}}}function _t(o){let e,t=o[0].name+"",n,l,a;return{c(){e=W("span"),n=Ie(t),l=D(),a=W("span"),a.textContent=`${o[3]}`,u(e,"class","floorplan-plugin__room-name"),u(a,"class","floorplan-plugin__room-size svelte-1ashbdx")},m(i,r){w(i,e,r),P(e,n),w(i,l,r),w(i,a,r)},p(i,r){r&1&&t!==(t=i[0].name+"")&&Ne(n,t)},d(i){i&&y(e),i&&y(l),i&&y(a)}}}function wt(o){let e;function t(a,i){if(a[1]===void 0)return _t;if(a[2])return vt}let n=t(o),l=n&&n(o);return{c(){e=W("div"),l&&l.c(),u(e,"class","floorplan-plugin__room-label-item svelte-1ashbdx"),I(e,"left",o[4],!1),I(e,"top",o[5],!1),I(e,"font-size",o[6],!1)},m(a,i){w(a,e,i),l&&l.m(e,null)},p(a,[i]){n===(n=t(a))&&l?l.p(a,i):(l&&l.d(1),l=n&&n(a),l&&(l.c(),l.m(e,null)))},i:x,o:x,d(a){a&&y(e),l&&l.d()}}}function yt(o,e,t){let n,{room:l}=e,{getLabelElement:a}=e;const i=document.body.clientWidth,r=document.body.clientHeight,s=l.size?(l.size/1e6).toFixed(1)+"\u33A1":"",m=l.roomLabel,g=m.positionInImage.x*100+"%",b=m.positionInImage.y*100+"%",f=(i<500||r<500?10:14)/16+"rem";return o.$$set=d=>{"room"in d&&t(0,l=d.room),"getLabelElement"in d&&t(1,a=d.getLabelElement)},o.$$.update=()=>{o.$$.dirty&3&&t(2,n=a?.(l))},[l,a,n,s,g,b,f]}class Et extends S{constructor(e){super();N(this,e,yt,wt,G,{room:0,getLabelElement:1})}}function re(o,e,t){const n=o.slice();return n[4]=e[t],n}function ie(o){let e,t=[],n=new Map,l,a=o[1];const i=r=>r[4].id;for(let r=0;r<a.length;r+=1){let s=re(o,a,r),m=i(s);n.set(m,t[r]=se(m,s))}return{c(){e=W("div");for(let r=0;r<t.length;r+=1)t[r].c();u(e,"class","floorplan-plugin__room-labels svelte-sw25w3")},m(r,s){w(r,e,s);for(let m=0;m<t.length;m+=1)t[m].m(e,null);l=!0},p(r,s){s&3&&(a=r[1],M(),t=H(t,s,i,1,r,a,n,e,ke,se,null,re),q())},i(r){if(!l){for(let s=0;s<a.length;s+=1)_(t[s]);l=!0}},o(r){for(let s=0;s<t.length;s+=1)E(t[s]);l=!1},d(r){r&&y(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function se(o,e){let t,n,l;const a=[{room:e[4],getLabelElement:e[0]}];let i={};for(let r=0;r<a.length;r+=1)i=B(i,a[r]);return n=new Et({props:i}),{key:o,first:null,c(){t=O(),F(n.$$.fragment),this.first=t},m(r,s){w(r,t,s),A(n,r,s),l=!0},p(r,s){e=r;const m=s&3?V(a,[{room:e[4],getLabelElement:e[0]}]):{};n.$set(m)},i(r){l||(_(n.$$.fragment,r),l=!0)},o(r){E(n.$$.fragment,r),l=!1},d(r){r&&y(t),R(n,r)}}}function Pt(o){let e,t,n=o[1]&&ie(o);return{c(){n&&n.c(),e=O()},m(l,a){n&&n.m(l,a),w(l,e,a),t=!0},p(l,[a]){l[1]?n?(n.p(l,a),a&2&&_(n,1)):(n=ie(l),n.c(),_(n,1),n.m(e.parentNode,e)):n&&(M(),E(n,1,1,()=>{n=null}),q())},i(l){t||(_(n),t=!0)},o(l){E(n),t=!1},d(l){n&&n.d(l),l&&y(e)}}}function Lt(o,e,t){let n,{floorIndex:l}=e,{floorplanData:a}=e,{getLabelElement:i}=e;return o.$$set=r=>{"floorIndex"in r&&t(2,l=r.floorIndex),"floorplanData"in r&&t(3,a=r.floorplanData),"getLabelElement"in r&&t(0,i=r.getLabelElement)},o.$$.update=()=>{o.$$.dirty&12&&t(1,n=a.floorDatas[l].rooms)},[i,n,l,a]}class It extends S{constructor(e){super();N(this,e,Lt,Pt,G,{floorIndex:2,floorplanData:3,getLabelElement:0})}}function kt(o){return o!=null}function fe(o,e,t){const n=o.slice();return n[24]=e[t],n[26]=t,n}function ue(o,e,t){const n=o.slice();return n[27]=e[t],n[29]=t,n}function me(o,e){let t,n=`${e[27]}px`;return{key:o,first:null,c(){t=W("div"),u(t,"class","floorplan-plugin__rule-scale svelte-1rr09in"),I(t,"left",n,!1),this.first=t},m(l,a){w(l,t,a)},p(l,a){e=l},d(l){l&&y(t)}}}function ce(o,e){let t,n,l=e[24].distance+"",a,i,r=`${e[24].positionPx}px`;return{key:o,first:null,c(){t=W("div"),n=W("span"),a=Ie(l),i=D(),u(n,"class","floorplan-plugin__rule-text svelte-1rr09in"),Z(n,"is-row",e[5]),u(t,"class","floorplan-plugin__text-wrapper svelte-1rr09in"),Z(t,"floorplan-plugin__text-wrapper--is-left-or-top",e[3]||e[1]),Z(t,"floorplan-plugin__text-wrapper-is-right-or-bottom",e[4]||e[2]),I(t,"left",r,!1),this.first=t},m(s,m){w(s,t,m),P(t,n),P(n,a),P(t,i)},p(s,m){e=s},d(s){s&&y(t)}}}function Wt(o){let e,t,n,l=[],a=new Map,i,r=[],s=new Map,m,g=o[6];const b=c=>c[29];for(let c=0;c<g.length;c+=1){let h=ue(o,g,c),p=b(h);a.set(p,l[c]=me(p,h))}let f=o[10];const d=c=>c[26];for(let c=0;c<f.length;c+=1){let h=fe(o,f,c),p=d(h);s.set(p,r[c]=ce(p,h))}return{c(){e=W("div"),t=W("div"),n=D();for(let c=0;c<l.length;c+=1)l[c].c();i=D();for(let c=0;c<r.length;c+=1)r[c].c();u(t,"class","floorplan-plugin__rule-line svelte-1rr09in"),u(e,"class",m="floorplan-plugin__rule-labels floorplan-plugin__rule-labels-"+o[0]+" svelte-1rr09in"),I(e,"width",o[9],!1),I(e,"transform",o[7],!1),I(e,"transform-origin",o[8],!1)},m(c,h){w(c,e,h),P(e,t),P(e,n);for(let p=0;p<l.length;p+=1)l[p].m(e,null);P(e,i);for(let p=0;p<r.length;p+=1)r[p].m(e,null)},p(c,[h]){h&64&&(g=c[6],l=H(l,h,b,1,c,g,a,e,ne,me,i,ue)),h&1086&&(f=c[10],r=H(r,h,d,1,c,f,s,e,ne,ce,null,fe)),h&1&&m!==(m="floorplan-plugin__rule-labels floorplan-plugin__rule-labels-"+c[0]+" svelte-1rr09in")&&u(e,"class",m)},i:x,o:x,d(c){c&&y(e);for(let h=0;h<l.length;h+=1)l[h].d();for(let h=0;h<r.length;h+=1)r[h].d()}}}const Ct=1e3;function Dt(o,e,t){let{pxmm:n}=e,{type:l}=e,{data:a}=e,{bounding:i}=e;const r=l==="top",s=l==="bottom",m=l==="left",g=l==="right",b=r||s,f=a.map(([k,U])=>b?[k.x,U.x]:[k.y,U.y]).flat().sort().filter((k,U,z)=>U===0?!0:k!==z[U-1]),d=f[0],h=f.slice(-1)[0]-d,p=b?i.min.x:i.min.y,L=h*n,v=f.map(k=>(k-d)/h*L),T=(d-p)*n,Q=27-Ct*n,Ce=`${(()=>{if(r)return`translate(${T}px, ${-Q}px)`;if(s)return`translate(${T}px, ${Q}px)`;if(m)return`translate(${-Q}px, ${-T}px)`;if(g)return`translate(${Q}px, ${-T-L}px)`})()} ${b?"rotate(0)":"rotate(-90deg)"}`,De=`${g?"right":"left"} ${r?"top":"bottom"}`,xe=L+"px",Fe=f.map((k,U,z)=>{if(U===0)return null;const $=k-z[U-1],Ae=(z[U-1]+$/2-d)/h*L;return{distance:$,positionPx:Ae}}).filter(kt).filter(k=>k.distance/h>.12);return o.$$set=k=>{"pxmm"in k&&t(11,n=k.pxmm),"type"in k&&t(0,l=k.type),"data"in k&&t(12,a=k.data),"bounding"in k&&t(13,i=k.bounding)},[l,r,s,m,g,b,v,Ce,De,xe,Fe,n,a,i]}class xt extends S{constructor(e){super();N(this,e,Dt,Wt,G,{pxmm:11,type:0,data:12,bounding:13})}}function de(o,e,t){const n=o.slice();return n[7]=e[t][0],n[8]=e[t][1],n}function he(o,e){let t,n,l;const a=[{type:e[7],data:e[8],pxmm:e[0],bounding:e[2]}];let i={};for(let r=0;r<a.length;r+=1)i=B(i,a[r]);return n=new xt({props:i}),{key:o,first:null,c(){t=O(),F(n.$$.fragment),this.first=t},m(r,s){w(r,t,s),A(n,r,s),l=!0},p(r,s){e=r;const m=s&7?V(a,[{type:e[7],data:e[8],pxmm:e[0],bounding:e[2]}]):{};n.$set(m)},i(r){l||(_(n.$$.fragment,r),l=!0)},o(r){E(n.$$.fragment,r),l=!1},d(r){r&&y(t),R(n,r)}}}function Ft(o){let e,t=[],n=new Map,l,a=o[1];const i=r=>r[7];for(let r=0;r<a.length;r+=1){let s=de(o,a,r),m=i(s);n.set(m,t[r]=he(m,s))}return{c(){e=W("div");for(let r=0;r<t.length;r+=1)t[r].c();u(e,"class","floorplan-plugin__rulelabels")},m(r,s){w(r,e,s);for(let m=0;m<t.length;m+=1)t[m].m(e,null);l=!0},p(r,[s]){s&7&&(a=r[1],M(),t=H(t,s,i,1,r,a,n,e,ke,he,null,de),q())},i(r){if(!l){for(let s=0;s<a.length;s+=1)_(t[s]);l=!0}},o(r){for(let s=0;s<t.length;s+=1)E(t[s]);l=!1},d(r){r&&y(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function At(o,e,t){let n,l,a,i,{pxmm:r}=e,{floorIndex:s}=e,{floorplanData:m}=e;return o.$$set=g=>{"pxmm"in g&&t(0,r=g.pxmm),"floorIndex"in g&&t(3,s=g.floorIndex),"floorplanData"in g&&t(4,m=g.floorplanData)},o.$$.update=()=>{o.$$.dirty&16&&t(2,n=m.bounding),o.$$.dirty&24&&t(5,l=m.floorDatas[s].rules),o.$$.dirty&32&&t(6,a=Object.keys(l)),o.$$.dirty&96&&t(1,i=a.map(g=>[g,l[g]]))},[r,i,n,s,m,l,a]}class Rt extends S{constructor(e){super();N(this,e,At,Ft,G,{pxmm:0,floorIndex:3,floorplanData:4})}}function St(o){let e;return{c(){e=C("path"),u(e,"d",o[0]),u(e,"fill","#2F313A")},m(t,n){w(t,e,n)},p(t,[n]){n&1&&u(e,"d",t[0])},i:x,o:x,d(t){t&&y(e)}}}function Nt(o,e,t){let n,{path:l}=e;return o.$$set=a=>{"path"in a&&t(1,l=a.path)},o.$$.update=()=>{o.$$.dirty&2&&t(0,n=J(l,{needZ:!0}))},[n,l]}class Gt extends S{constructor(e){super();N(this,e,Nt,St,G,{path:1})}}function Mt(o){let e,t,n,l,a,i;return{c(){e=C("defs"),t=C("pattern"),n=C("rect"),l=C("path"),a=D(),i=C("path"),u(n,"x","0"),u(n,"y","0"),u(n,"width",o[1]),u(n,"height",o[1]),u(n,"fill","#323747"),u(l,"d",o[2]),u(l,"stroke","#ffffff"),u(l,"stroke-opacity","0.06"),u(l,"stroke-width","0.5"),u(l,"fill","none"),u(t,"id","fpm-room-pattern-0"),u(t,"x","0"),u(t,"y","0"),u(t,"width",o[1]),u(t,"height",o[1]),u(t,"patternUnits","userSpaceOnUse"),u(i,"d",o[0]),u(i,"fill","url(#fpm-room-pattern-0)")},m(r,s){w(r,e,s),P(e,t),P(t,n),P(t,l),w(r,a,s),w(r,i,s)},p(r,[s]){s&1&&u(i,"d",r[0])},i:x,o:x,d(r){r&&y(e),r&&y(a),r&&y(i)}}}const K=6;function qt(o,e,t){let n,{path:l}=e;const a=K*2,i=`M0 ${K} h ${a} M${K} 0 v ${a}`;return o.$$set=r=>{"path"in r&&t(3,l=r.path)},o.$$.update=()=>{o.$$.dirty&8&&t(0,n=J(l,{needZ:!0}))},[n,a,i,l]}class Ut extends S{constructor(e){super();N(this,e,qt,Mt,G,{path:3})}}function Yt(o){let e,t,n,l,a,i,r,s,m,g,b;return{c(){e=C("defs"),t=C("pattern"),n=C("rect"),l=C("pattern"),a=C("rect"),i=D(),r=C("path"),s=D(),m=C("path"),g=D(),b=C("path"),u(n,"x","0.5"),u(n,"y","0.5"),u(n,"width","6"),u(n,"height","50"),u(n,"fill","none"),u(n,"stroke","#4B4B57"),u(n,"stroke-width","0.5"),u(t,"id","room-material-pattern-1"),u(t,"x","0"),u(t,"y","0"),u(t,"width","13"),u(t,"height","51"),u(t,"patternUnits","userSpaceOnUse"),u(a,"x","0.5"),u(a,"y","0.5"),u(a,"width","6"),u(a,"height","50"),u(a,"fill","none"),u(a,"stroke","#4B4B57"),u(a,"stroke-width","0.5"),u(l,"id","room-material-pattern-2"),u(l,"x","7"),u(l,"y","25"),u(l,"width","13"),u(l,"height","51"),u(l,"patternUnits","userSpaceOnUse"),u(r,"d",o[0]),u(r,"fill","#43434D"),u(m,"d",o[0]),u(m,"fill","url(#room-material-pattern-1)"),u(b,"d",o[0]),u(b,"fill","url(#room-material-pattern-2)")},m(f,d){w(f,e,d),P(e,t),P(t,n),P(e,l),P(l,a),w(f,i,d),w(f,r,d),w(f,s,d),w(f,m,d),w(f,g,d),w(f,b,d)},p(f,[d]){d&1&&u(r,"d",f[0]),d&1&&u(m,"d",f[0]),d&1&&u(b,"d",f[0])},i:x,o:x,d(f){f&&y(e),f&&y(i),f&&y(r),f&&y(s),f&&y(m),f&&y(g),f&&y(b)}}}function Vt(o,e,t){let n,{path:l}=e;return o.$$set=a=>{"path"in a&&t(1,l=a.path)},o.$$.update=()=>{o.$$.dirty&2&&t(0,n=J(l,{needZ:!0}))},[n,l]}class Bt extends S{constructor(e){super();N(this,e,Vt,Yt,G,{path:1})}}function pe(o,e,t){const n=o.slice();return n[4]=e[t],n}function Tt(o){let e,t;return e=new Ut({props:{path:o[4].path}}),{c(){F(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},p(n,l){const a={};l&1&&(a.path=n[4].path),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Ot(o){let e,t;return e=new Bt({props:{path:o[4].path}}),{c(){F(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},p(n,l){const a={};l&1&&(a.path=n[4].path),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Qt(o){let e,t;return e=new Gt({props:{path:o[4].path}}),{c(){F(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},p(n,l){const a={};l&1&&(a.path=n[4].path),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function ge(o){let e,t,n,l;const a=[Qt,Ot,Tt],i=[];function r(s,m){return s[4].floorType===1?0:s[4].floorType===0?1:2}return t=r(o),n=i[t]=a[t](o),{c(){e=C("svg"),n.c(),u(e,"class","svelte-1b0icjc")},m(s,m){w(s,e,m),i[t].m(e,null),l=!0},p(s,m){let g=t;t=r(s),t===g?i[t].p(s,m):(M(),E(i[g],1,1,()=>{i[g]=null}),q(),n=i[t],n?n.p(s,m):(n=i[t]=a[t](s),n.c()),_(n,1),n.m(e,null))},i(s){l||(_(n),l=!0)},o(s){E(n),l=!1},d(s){s&&y(e),i[t].d()}}}function zt(o){let e,t,n=o[0],l=[];for(let i=0;i<n.length;i+=1)l[i]=ge(pe(o,n,i));const a=i=>E(l[i],1,1,()=>{l[i]=null});return{c(){e=W("div");for(let i=0;i<l.length;i+=1)l[i].c();u(e,"class","floorplan-plugin__room-material")},m(i,r){w(i,e,r);for(let s=0;s<l.length;s+=1)l[s].m(e,null);t=!0},p(i,[r]){if(r&1){n=i[0];let s;for(s=0;s<n.length;s+=1){const m=pe(i,n,s);l[s]?(l[s].p(m,r),_(l[s],1)):(l[s]=ge(m),l[s].c(),_(l[s],1),l[s].m(e,null))}for(M(),s=n.length;s<l.length;s+=1)a(s);q()}},i(i){if(!t){for(let r=0;r<n.length;r+=1)_(l[r]);t=!0}},o(i){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)E(l[r]);t=!1},d(i){i&&y(e),Ge(l,i)}}}function Ht(o,e,t){let n,{floorIndex:l}=e,{pxmm:a}=e,{floorplanData:i}=e;return o.$$set=r=>{"floorIndex"in r&&t(1,l=r.floorIndex),"pxmm"in r&&t(2,a=r.pxmm),"floorplanData"in r&&t(3,i=r.floorplanData)},o.$$.update=()=>{o.$$.dirty&14&&t(0,n=i.floorDatas[l].rooms.map(r=>({...r,path:r.path.map(s=>$e(s,a,i.bounding))})))},[n,l,a,i]}class jt extends S{constructor(e){super();N(this,e,Ht,zt,G,{floorIndex:1,pxmm:2,floorplanData:3})}}function be(o){let e,t;const n=[{five:o[1],pxmm:o[0],floorIndex:o[2],floorplanData:o[6],onRoomHeightClick:o[7]}];let l={};for(let a=0;a<n.length;a+=1)l=B(l,n[a]);return e=new tt({props:l}),{c(){F(e.$$.fragment)},m(a,i){A(e,a,i),t=!0},p(a,i){const r=i&199?V(n,[{five:a[1],pxmm:a[0],floorIndex:a[2],floorplanData:a[6],onRoomHeightClick:a[7]}]):{};e.$set(r)},i(a){t||(_(e.$$.fragment,a),t=!0)},o(a){E(e.$$.fragment,a),t=!1},d(a){R(e,a)}}}function ve(o){let e,t;const n=[{floorplanData:o[6],floorIndex:o[2],getLabelElement:o[8]}];let l={};for(let a=0;a<n.length;a+=1)l=B(l,n[a]);return e=new It({props:l}),{c(){F(e.$$.fragment)},m(a,i){A(e,a,i),t=!0},p(a,i){const r=i&324?V(n,[{floorplanData:a[6],floorIndex:a[2],getLabelElement:a[8]}]):{};e.$set(r)},i(a){t||(_(e.$$.fragment,a),t=!0)},o(a){E(e.$$.fragment,a),t=!1},d(a){R(e,a)}}}function _e(o){let e,t;const n=[{floorplanData:o[6],floorIndex:o[2],pxmm:o[0]}];let l={};for(let a=0;a<n.length;a+=1)l=B(l,n[a]);return e=new Rt({props:l}),{c(){F(e.$$.fragment)},m(a,i){A(e,a,i),t=!0},p(a,i){const r=i&69?V(n,[{floorplanData:a[6],floorIndex:a[2],pxmm:a[0]}]):{};e.$set(r)},i(a){t||(_(e.$$.fragment,a),t=!0)},o(a){E(e.$$.fragment,a),t=!1},d(a){R(e,a)}}}function Zt(o){let e,t,n,l,a,i,r,s;const m=[{floorIndex:o[2],floorplanData:o[6],pxmm:o[0]}];let g={};for(let p=0;p<m.length;p+=1)g=B(g,m[p]);t=new jt({props:g});let b=o[3]&&be(o);const f=[{floorplanData:o[6],floorIndex:o[2]}];let d={};for(let p=0;p<f.length;p+=1)d=B(d,f[p]);a=new et({props:d});let c=o[4]&&ve(o),h=o[5]&&_e(o);return{c(){e=W("div"),F(t.$$.fragment),n=D(),b&&b.c(),l=D(),F(a.$$.fragment),i=D(),c&&c.c(),r=D(),h&&h.c(),u(e,"class","floorplan-current-floor svelte-3pdgs4")},m(p,L){w(p,e,L),A(t,e,null),P(e,n),b&&b.m(e,null),P(e,l),A(a,e,null),P(e,i),c&&c.m(e,null),P(e,r),h&&h.m(e,null),s=!0},p(p,[L]){const v=L&69?V(m,[{floorIndex:p[2],floorplanData:p[6],pxmm:p[0]}]):{};t.$set(v),p[3]?b?(b.p(p,L),L&8&&_(b,1)):(b=be(p),b.c(),_(b,1),b.m(e,l)):b&&(M(),E(b,1,1,()=>{b=null}),q());const T=L&68?V(f,[{floorplanData:p[6],floorIndex:p[2]}]):{};a.$set(T),p[4]?c?(c.p(p,L),L&16&&_(c,1)):(c=ve(p),c.c(),_(c,1),c.m(e,r)):c&&(M(),E(c,1,1,()=>{c=null}),q()),p[5]?h?(h.p(p,L),L&32&&_(h,1)):(h=_e(p),h.c(),_(h,1),h.m(e,null)):h&&(M(),E(h,1,1,()=>{h=null}),q())},i(p){s||(_(t.$$.fragment,p),_(b),_(a.$$.fragment,p),_(c),_(h),s=!0)},o(p){E(t.$$.fragment,p),E(b),E(a.$$.fragment,p),E(c),E(h),s=!1},d(p){p&&y(e),R(t),b&&b.d(),R(a),c&&c.d(),h&&h.d()}}}function Kt(o,e,t){let{pxmm:n}=e,{five:l}=e,{floorIndex:a}=e,{hoverEnable:i}=e,{roomLabelsEnable:r}=e,{ruleLabelsEnable:s}=e,{floorplanData:m}=e,{onRoomHeightClick:g}=e,{getLabelElement:b}=e;return o.$$set=f=>{"pxmm"in f&&t(0,n=f.pxmm),"five"in f&&t(1,l=f.five),"floorIndex"in f&&t(2,a=f.floorIndex),"hoverEnable"in f&&t(3,i=f.hoverEnable),"roomLabelsEnable"in f&&t(4,r=f.roomLabelsEnable),"ruleLabelsEnable"in f&&t(5,s=f.ruleLabelsEnable),"floorplanData"in f&&t(6,m=f.floorplanData),"onRoomHeightClick"in f&&t(7,g=f.onRoomHeightClick),"getLabelElement"in f&&t(8,b=f.getLabelElement)},[n,l,a,i,r,s,m,g,b]}class Xt extends S{constructor(e){super();N(this,e,Kt,Zt,G,{pxmm:0,five:1,floorIndex:2,hoverEnable:3,roomLabelsEnable:4,ruleLabelsEnable:5,floorplanData:6,onRoomHeightClick:7,getLabelElement:8})}}function we(o){let e,t,n,l,a,i,r;const s=[{five:o[1],pxmm:o[0],floorIndex:o[5],hoverEnable:o[6],floorplanData:o[10],getLabelElement:o[14],roomLabelsEnable:o[8],ruleLabelsEnable:o[9],onRoomHeightClick:o[13]}];let m={};for(let d=0;d<s.length;d+=1)m=B(m,s[d]);t=new Xt({props:m});const g=[{panoIndex:o[4],floorplanData:o[10],lastPanoramaLongitude:o[11],cameraImageUrl:o[12]}];let b={};for(let d=0;d<g.length;d+=1)b=B(b,g[d]);l=new mt({props:b});let f=o[7]&&ye(o);return{c(){e=W("div"),F(t.$$.fragment),n=D(),F(l.$$.fragment),a=D(),f&&f.c(),u(e,"class","floorplan-main svelte-177x2q7")},m(d,c){w(d,e,c),A(t,e,null),P(e,n),A(l,e,null),P(e,a),f&&f.m(e,null),r=!0},p(d,c){o=d;const h=c&26467?V(s,[{five:o[1],pxmm:o[0],floorIndex:o[5],hoverEnable:o[6],floorplanData:o[10],getLabelElement:o[14],roomLabelsEnable:o[8],ruleLabelsEnable:o[9],onRoomHeightClick:o[13]}]):{};t.$set(h);const p=c&7184?V(g,[{panoIndex:o[4],floorplanData:o[10],lastPanoramaLongitude:o[11],cameraImageUrl:o[12]}]):{};l.$set(p),o[7]?f?(f.p(o,c),c&128&&_(f,1)):(f=ye(o),f.c(),_(f,1),f.m(e,null)):f&&(M(),E(f,1,1,()=>{f=null}),q())},i(d){r||(_(t.$$.fragment,d),_(l.$$.fragment,d),_(f),i||Me(()=>{i=qe(e,Ye,{duration:o[2],easing:Ue}),i.start()}),r=!0)},o(d){E(t.$$.fragment,d),E(l.$$.fragment,d),E(f),r=!1},d(d){d&&y(e),R(t),R(l),f&&f.d()}}}function ye(o){let e,t;return e=new bt({props:{floorplanData:o[10]}}),{c(){F(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},p(n,l){const a={};l&1024&&(a.floorplanData=n[10]),e.$set(a)},i(n){t||(_(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){R(e,n)}}}function Jt(o){let e,t,n=o[3]&&we(o);return{c(){n&&n.c(),e=O()},m(l,a){n&&n.m(l,a),w(l,e,a),t=!0},p(l,[a]){l[3]?n?(n.p(l,a),a&8&&_(n,1)):(n=we(l),n.c(),_(n,1),n.m(e.parentNode,e)):n&&(M(),E(n,1,1,()=>{n=null}),q())},i(l){t||(_(n),t=!0)},o(l){E(n),t=!1},d(l){n&&n.d(l),l&&y(e)}}}function $t(o,e,t){let{pxmm:n}=e,{five:l}=e,{duration:a=0}=e,{visible:i}=e,{panoIndex:r}=e,{floorIndex:s}=e,{hoverEnable:m}=e,{compassEnable:g}=e,{roomLabelsEnable:b}=e,{ruleLabelsEnable:f}=e,{floorplanData:d}=e,{lastPanoramaLongitude:c}=e,{cameraImageUrl:h}=e,{onRoomHeightClick:p}=e,{getLabelElement:L}=e;return o.$$set=v=>{"pxmm"in v&&t(0,n=v.pxmm),"five"in v&&t(1,l=v.five),"duration"in v&&t(2,a=v.duration),"visible"in v&&t(3,i=v.visible),"panoIndex"in v&&t(4,r=v.panoIndex),"floorIndex"in v&&t(5,s=v.floorIndex),"hoverEnable"in v&&t(6,m=v.hoverEnable),"compassEnable"in v&&t(7,g=v.compassEnable),"roomLabelsEnable"in v&&t(8,b=v.roomLabelsEnable),"ruleLabelsEnable"in v&&t(9,f=v.ruleLabelsEnable),"floorplanData"in v&&t(10,d=v.floorplanData),"lastPanoramaLongitude"in v&&t(11,c=v.lastPanoramaLongitude),"cameraImageUrl"in v&&t(12,h=v.cameraImageUrl),"onRoomHeightClick"in v&&t(13,p=v.onRoomHeightClick),"getLabelElement"in v&&t(14,L=v.getLabelElement)},[n,l,a,i,r,s,m,g,b,f,d,c,h,p,L]}class en extends S{constructor(e){super();N(this,e,$t,Jt,G,{pxmm:0,five:1,duration:2,visible:3,panoIndex:4,floorIndex:5,hoverEnable:6,compassEnable:7,roomLabelsEnable:8,ruleLabelsEnable:9,floorplanData:10,lastPanoramaLongitude:11,cameraImageUrl:12,onRoomHeightClick:13,getLabelElement:14})}}function Ee(o,e,t=300){const n=o.getElement();!n||(n.style.opacity=e+"",n.style.transition=t===0?"none":`opacity ${t}ms linear`,t!==0&&Promise.race([new Promise(l=>n.addEventListener("transitionend",l,{once:!0})),new Promise(l=>setTimeout(l,t))]).then(()=>{n.style.transition="none"}))}class tn{size={width:0,height:0};visible=!1;pxmm=0;app;five;panoIndex=0;floorIndex=0;configs={};lastPanoramaLongitude=0;selector;floorplanData;wrapper;container=document.createElement("div");constructor(e,t){this.five=e,this.selector=t.selector,this.configs=rt(t,["selector"]),this.container.classList.add("floorplan-plugin"),Object.assign(this.container.style,ot),this.five.model.loaded?this.handleModelLoaded():e.once("modelLoaded",this.handleModelLoaded),this.five.once("dispose",this.dispose),this.five.on("modeChange",this.handleModeChange),this.five.on("panoArrived",this.handlePanoArrived),this.five.on("initAnimationEnded",this.handleInitAnimationEnded),this.five.on("modelShownFloorChange",this.onModelShownFloorChange)}async load(e){const t=JSON.parse(JSON.stringify(e));this.floorplanData=await nt(t),this.render()}appendTo(e){return this.wrapper=e,e.appendChild(this.container),this}dispose=()=>{this.hide(),this.container?.remove(),this.app?.$destroy(),this.five.off("modeChange",this.handleModeChange),this.five.off("panoArrived",this.handlePanoArrived),this.five.off("modelLoaded",this.handleModelLoaded),this.five.off("wantsMoveToPano",this.handleWantsMoveToPano),this.five.off("wantsPanGesture",this.handleWantsPanGesture),this.five.off("initAnimationEnded",this.handleInitAnimationEnded),this.five.off("modelShownFloorChange",this.onModelShownFloorChange)};onModelShownFloorChange=e=>{e!==null&&(this.floorIndex=e,this.updateSize(),this.render())};handlePanoArrived=e=>{!this.five?.work||(this.panoIndex=e,this.floorIndex=this.five.work.observers[e].floorIndex)};handleWantsMoveToPano=()=>{if(!!this.visible&&this.configs.preventRoomClick)return!1};handleWantsPanGesture=()=>{if(!!this.visible)return!1};handleModelLoaded=()=>{if(this.wrapper||!this.selector)return;const e=this.selector instanceof Element?this.selector:document.querySelector(this.selector);if(!e)throw new Error("\u4E0D\u6B63\u786E\u7684\u7236\u5BB9\u5668\u9009\u62E9\u5668");this.wrapper=e,e.append(this.container)};handleModeChange=e=>{if(e!=="Topview")return this.hide()};handleInitAnimationEnded=()=>{const{mode:e}=this.five.getCurrentState();e==="Topview"&&this.show()};show(){this.visible=!0,this.five.model.show(this.floorIndex),this.updateSize();const e=500,t=this.configs.modelOpacity;typeof t=="number"&&Ee(this.five,t,e),this.render(e),this.five.on("wantsMoveToPano",this.handleWantsMoveToPano),this.five.on("wantsPanGesture",this.handleWantsPanGesture)}hide(){this.visible=!1,Ee(this.five,1,0),this.render(),this.five.on("wantsMoveToPano",this.handleWantsMoveToPano),this.five.on("wantsPanGesture",this.handleWantsPanGesture)}updateSize=()=>{if(!this.floorplanData||!this.container||!this.wrapper||this.five.getCurrentState().mode!=="Topview")return;const{min:e,max:t}=this.floorplanData.bounding,n=t.x-e.x,l=t.y-e.y,a=this.configs.attachedTo?{attachedTo:this.configs.attachedTo}:void 0,i=it(this.five,this.wrapper,this.floorIndex,a),r=Math.ceil(n*i),s=Math.ceil(l*i);this.pxmm=i,this.size={width:r,height:s},this.container.style.width=r+"px",this.container.style.height=s+"px"};render(e){if(!this.container||!this.floorplanData||this.size.width===0)return;const{getLabelElement:t,cameraImageUrl:n,preventRoomClick:l,hoverEnable:a,compassEnable:i,roomLabelsEnable:r,ruleLabelsEnable:s}=this.configs,m=l?()=>!1:void 0,g={five:this.five,pxmm:this.pxmm,cameraImageUrl:n,visible:this.visible,duration:e??0,panoIndex:this.panoIndex,floorIndex:this.floorIndex,floorplanData:this.floorplanData,hoverEnable:a??!1,compassEnable:i??!0,ruleLabelsEnable:s??!0,roomLabelsEnable:r??!0,lastPanoramaLongitude:this.lastPanoramaLongitude,getLabelElement:t,onRoomHeightClick:m};this.app?this.app.$set(g):this.app=new en({target:this.container,intro:!0,props:g})}}const nn=(o,e)=>new tn(o,e);function Pe(){return{width:window.innerWidth,height:window.innerHeight}}function ln(){const[o,e]=X.exports.useState(Pe);return X.exports.useEffect(()=>{const t=()=>e(Pe());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),o}const on=o=>{const e=Ve(),[t,n]=Be(),l=Te();return X.exports.useEffect(()=>{e.plugins.topviewFloorplanPlugin.load(Re)},[]),l!=="Loaded"?null:Y(Oe,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:We(Qe,{showLabels:!0,value:t.mode,onChange:(a,i)=>{n({mode:i})},children:[Y(le,{label:"\u5168\u666F\u6F2B\u6E38",icon:Y(ze,{}),value:oe.Mode.Panorama}),Y(le,{label:"\u4FEF\u89C6\u6A21\u578B",icon:Y(He,{}),value:oe.Mode.Topview})]})})},an={hoverEnable:!0},Le=lt(),rn=JSON.stringify(Le)!=="{}"?Le:an,sn=je({plugins:[[nn,"topviewFloorplanPlugin",{selector:".plugin-full-screen-container",...rn}]]}),fn=()=>{const o=ln();return ee&&We(sn,{initialWork:Ze(ee),ref:e=>Object.assign(window,{$five:e?.five}),children:[Y(Ke,{...o}),Y(Xe,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),Y(on,{})]})};Je.render(Y(fn,{}),document.querySelector("#app"));