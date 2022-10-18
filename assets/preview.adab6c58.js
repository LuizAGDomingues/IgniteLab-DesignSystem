import{c as b,j as L,k as M,w as D,d as W,u as F}from"./iframe.22a9995a.js";import{m as B}from"./make-decorator.3769f4d4.js";var V="actions",k="storybook/actions",G="".concat(k,"/action-event"),d,A=typeof b<"u"&&(b.crypto||b.msCrypto);if(A&&A.getRandomValues){var S=new Uint8Array(16);d=function(){return A.getRandomValues(S),S}}if(!d){var j=new Array(16);d=function(){for(var r=0,e;r<16;r++)(r&3)===0&&(e=Math.random()*4294967296),j[r]=e>>>((r&3)<<3)&255;return j}}var K=d,H=[];for(var v=0;v<256;++v)H[v]=(v+256).toString(16).substr(1);function Y(r,e){var t=e||0,n=H;return n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+"-"+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]+n[r[t++]]}var q=Y,J=K,Q=q;function X(r,e,t){var n=e&&t||0;typeof r=="string"&&(e=r=="binary"?new Array(16):null,r=null),r=r||{};var a=r.random||(r.rng||J)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,e)for(var o=0;o<16;++o)e[n+o]=a[o];return e||Q(a)}var Z=X,T={depth:10,clearOnStoryChange:!0,limit:50};function m(r){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(r)}var rr=function r(e,t){var n=Object.getPrototypeOf(e);return!n||t(n)?n:r(n,t)},tr=function(e){return Boolean(m(e)==="object"&&e&&rr(e,function(t){return/^Synthetic(?:Base)?Event$/.test(t.constructor.name)})&&typeof e.persist=="function")},er=function(e){if(tr(e)){var t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();var n=Object.getOwnPropertyDescriptor(t,"view"),a=n==null?void 0:n.value;return m(a)==="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",Object.assign({},n,{value:Object.create(a.constructor.prototype)})),t}return e};function _(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=Object.assign({},T,e),n=function(){for(var o=L.getChannel(),u=Z(),i=5,c=arguments.length,l=new Array(c),s=0;s<c;s++)l[s]=arguments[s];var f=l.map(er),h=l.length>1?f:f[0],y={id:u,count:0,data:{name:r,args:h},options:Object.assign({},t,{maxDepth:i+(t.depth||3),allowFunction:t.allowFunction||!1})};o.emit(G,y)};return n}function nr(r,e){return ur(r)||ir(r,e)||or(r,e)||ar()}function ar(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(r,e){if(!!r){if(typeof r=="string")return I(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(r,e)}}function I(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function ir(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(c){o=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw i}}return n}}function ur(r){if(Array.isArray(r))return r}var E=function(){for(var e=T,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var o=n;if(o.length===1&&Array.isArray(o[0])){var u=o,i=nr(u,1);o=i[0]}o.length!==1&&typeof o[o.length-1]!="string"&&(e=Object.assign({},T,o.pop()));var c=o[0];(o.length!==1||typeof c=="string")&&(c={},o.forEach(function(s){c[s]=s}));var l={};return Object.keys(c).forEach(function(s){l[s]=_(c[s],e)}),l};M(function(){},"decorate.* is no longer supported as of Storybook 6.0.");var $;function cr(r){return fr(r)||lr(r)||C(r)||sr()}function sr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function fr(r){if(Array.isArray(r))return O(r)}function yr(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}function x(r,e){return dr(r)||pr(r,e)||C(r,e)||vr()}function vr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(r,e){if(!!r){if(typeof r=="string")return O(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(r,e)}}function O(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function pr(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(c){o=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw i}}return n}}function dr(r){if(Array.isArray(r))return r}var R=D.document,N=D.Element,mr=/^(\S+)\s*(.*)$/,gr=N!=null&&!N.prototype.matches,hr=gr?"msMatchesSelector":"matches",p=R&&R.getElementById("root"),br=function r(e,t){if(e[hr](t))return!0;var n=e.parentElement;return n?r(n,t):!1},Ar=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o=e.apply(void 0,n);return Object.entries(o).map(function(u){var i=x(u,2),c=i[0],l=i[1],s=c.match(mr),f=x(s,3);f[0];var h=f[1],y=f[2];return{eventName:h,handler:function(w){(!y||br(w.target,y))&&l(w)}}})},U=M(function(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];F(function(){if(p!=null){var a=Ar.apply(void 0,[r].concat(t));return a.forEach(function(o){var u=o.eventName,i=o.handler;return p.addEventListener(u,i)}),function(){return a.forEach(function(o){var u=o.eventName,i=o.handler;return p.removeEventListener(u,i)})}}},[p,r,t])},W($||($=yr([`
    withActions(options) is deprecated, please configure addon-actions using the addParameter api:

    addParameters({
      actions: {
        handles: options
      },
    });
  `])))),Tr=function(e,t){t&&U(e,t)},Or=B({name:"withActions",parameterName:V,skipIfNoParametersOrOptions:!0,wrapper:function(e,t,n){var a=n.parameters,o=n.options;return Tr(E,o),a&&a.handles&&U.apply(void 0,[E].concat(cr(a.handles))),e(t)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var Nr=[Or];function g(r,e){return jr(r)||Sr(r,e)||wr(r,e)||_r()}function _r(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wr(r,e){if(!!r){if(typeof r=="string")return P(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(r,e)}}function P(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Sr(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,u,i;try{for(t=t.call(r);!(a=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));a=!0);}catch(c){o=!0,i=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw i}}return n}}function jr(r){if(Array.isArray(r))return r}var z=function(e,t){return typeof t[e]>"u"&&!(e in t)},Ir=function(e){var t=e.initialArgs,n=e.argTypes,a=e.parameters.actions;if(!a||a.disable||!a.argTypesRegex||!n)return{};var o=new RegExp(a.argTypesRegex),u=Object.entries(n).filter(function(i){var c=g(i,1),l=c[0];return!!o.test(l)});return u.reduce(function(i,c){var l=g(c,2),s=l[0];return l[1],z(s,t)&&(i[s]=_(s)),i},{})},Er=function(e){var t=e.initialArgs,n=e.argTypes,a=e.parameters.actions;if(a!=null&&a.disable||!n)return{};var o=Object.entries(n).filter(function(u){var i=g(u,2);i[0];var c=i[1];return!!c.action});return o.reduce(function(u,i){var c=g(i,2),l=c[0],s=c[1];return z(l,t)&&(u[l]=_(typeof s.action=="string"?s.action:l)),u},{})},Pr=[Er,Ir];export{Pr as argsEnhancers,Nr as decorators};
//# sourceMappingURL=preview.adab6c58.js.map
