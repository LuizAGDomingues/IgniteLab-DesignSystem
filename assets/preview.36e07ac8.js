import{j as v,F as y,q as _}from"./iframe.22a9995a.js";import{M as p,i as b}from"./index.29f7a84f.js";function m(r,t){return E(r)||g(r,t)||A(r,t)||h()}function h(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(r,t){if(!!r){if(typeof r=="string")return s(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return s(r,t)}}function s(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function g(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],a=!0,u=!1,l,o;try{for(e=e.call(r);!(a=(l=e.next()).done)&&(n.push(l.value),!(t&&n.length===t));a=!0);}catch(i){u=!0,o=i}finally{try{!a&&e.return!=null&&e.return()}finally{if(u)throw o}}return n}}function E(r){if(Array.isArray(r))return r}var c=new p(global),w=c.fn.bind(c),T=b({action:w},{retain:!0}),C=T.action,d=v.getChannel(),f=[];d.on(y,function(){return f.forEach(function(r){var t;return r==null||(t=r.mockClear)===null||t===void 0?void 0:t.call(r)})});d.on(_,function(r){var t=r.newPhase;t==="loading"&&f.forEach(function(e){var n;return e==null||(n=e.mockClear)===null||n===void 0?void 0:n.call(e)})});var O=function(t){var e=t.id,n=t.initialArgs;return Object.entries(n).reduce(function(a,u){var l=m(u,2),o=l[0],i=l[1];return typeof i=="function"&&i.name==="actionHandler"?(Object.defineProperty(i,"name",{value:o,writable:!1}),Object.defineProperty(i,"__storyId__",{value:e,writable:!1}),a[o]=C(i),f.push(a[o]),a):(a[o]=i,a)},{})},I=[O];export{I as argsEnhancers};
//# sourceMappingURL=preview.36e07ac8.js.map