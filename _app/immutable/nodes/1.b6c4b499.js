import{s as b,n as u,c as S}from"../chunks/scheduler.ce710c66.js";import{S as j,i as q,g as h,m as d,s as y,h as v,j as g,n as x,f as m,c as C,a as _,x as E,o as $}from"../chunks/index.f931a049.js";import{p as H}from"../chunks/stores.bdcbdd60.js";function P(p){var f;let a,t=p[0].status+"",r,o,n,i=((f=p[0].error)==null?void 0:f.message)+"",c;return{c(){a=h("h1"),r=d(t),o=y(),n=h("p"),c=d(i)},l(e){a=v(e,"H1",{});var s=g(a);r=x(s,t),s.forEach(m),o=C(e),n=v(e,"P",{});var l=g(n);c=x(l,i),l.forEach(m)},m(e,s){_(e,a,s),E(a,r),_(e,o,s),_(e,n,s),E(n,c)},p(e,[s]){var l;s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&i!==(i=((l=e[0].error)==null?void 0:l.message)+"")&&$(c,i)},i:u,o:u,d(e){e&&(m(a),m(o),m(n))}}}function k(p,a,t){let r;return S(p,H,o=>t(0,r=o)),[r]}class B extends j{constructor(a){super(),q(this,a,k,P,b,{})}}export{B as component};
