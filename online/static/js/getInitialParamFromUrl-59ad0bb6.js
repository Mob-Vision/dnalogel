const n=()=>{const e=window.location.search?.slice(1)?.split("&");let t={};return e?(e.forEach(a=>{const r=a.split("=");if(r[0]!=="renderCode"){let i={};i[r[0]]=r[1],Object.assign(t,i)}}),t):{}};export{n as g};