import{am as n}from"./vendor-862c62a4.js";function m(e,t){e.traverse(r=>{if(r.type==="Mesh"){const a=r,s=Object.assign({map:a.material.map||{}},t);a.material=new n(s),a.renderOrder=1,r.parent?.type==="Mesh"&&(r.renderOrder=r.parent.renderOrder+1)}})}export{m as t};