import{r as a}from"./index.d8049e38.js";import{a as I,j as g}from"./jsx-runtime.d363c3ff.js";var _=a.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),B=function(i,o,t){var r=t.get(i);return r?r(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function f(e,i){if(e==null)return{};var o={},t=Object.keys(e),r,n;for(n=0;n<t.length;n++)r=t[n],!(i.indexOf(r)>=0)&&(o[r]=e[r]);return o}var x=a.exports.forwardRef(function(e,i){var o=e.alt,t=e.color,r=e.size,n=e.weight,m=e.mirrored,w=e.children,v=e.renderPath,C=f(e,["alt","color","size","weight","mirrored","children","renderPath"]),l=a.exports.useContext(_),s=l.color,c=s===void 0?"currentColor":s,h=l.size,d=l.weight,z=d===void 0?"regular":d,u=l.mirrored,P=u===void 0?!1:u,j=f(l,["color","size","weight","mirrored"]);return I("svg",{...Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:r!=null?r:h,height:r!=null?r:h,fill:t!=null?t:c,viewBox:"0 0 256 256",transform:m||P?"scale(-1, 1)":void 0},j,C),children:[!!o&&g("title",{children:o}),w,g("rect",{width:"256",height:"256",fill:"none"}),v(n!=null?n:z,t!=null?t:c)]})});x.displayName="IconBase";const W=x;export{W as I,B as r};
//# sourceMappingURL=IconBase.esm.d8aac2ad.js.map
