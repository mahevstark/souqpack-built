import{s as k,n as c}from"../chunks/scheduler.ce710c66.js";import{S as y,i as S,g as b,h as j,y as A,a as q,f as h,r as $,s as P,j as E,u as l,c as x,k as H,v as u,x as C,d,t as g,w as p}from"../chunks/index.f931a049.js";import{P as I,a as M}from"../chunks/page.14f8c491.js";function N(o){let t,a="view custom order";return{c(){t=b("h1"),t.textContent=a},l(s){t=j(s,"H1",{"data-svelte-h":!0}),A(t)!=="svelte-1nkr1eu"&&(t.textContent=a)},m(s,n){q(s,t,n)},p:c,i:c,o:c,d(s){s&&h(t)}}}let z=class extends y{constructor(t){super(),S(this,t,null,N,k,{})}};function B(o){let t,a,s,n,f,i,m;return a=new I({props:{data:o[0]}}),n=new z({props:{data:o[0]}}),i=new M({props:{data:o[0]}}),{c(){t=b("main"),$(a.$$.fragment),s=P(),$(n.$$.fragment),f=P(),$(i.$$.fragment),this.h()},l(e){t=j(e,"MAIN",{class:!0});var r=E(t);l(a.$$.fragment,r),s=x(r),l(n.$$.fragment,r),f=x(r),l(i.$$.fragment,r),r.forEach(h),this.h()},h(){H(t,"class","bg-[#fff]")},m(e,r){q(e,t,r),u(a,t,null),C(t,s),u(n,t,null),C(t,f),u(i,t,null),m=!0},p(e,[r]){const _={};r&1&&(_.data=e[0]),a.$set(_);const v={};r&1&&(v.data=e[0]),n.$set(v);const w={};r&1&&(w.data=e[0]),i.$set(w)},i(e){m||(d(a.$$.fragment,e),d(n.$$.fragment,e),d(i.$$.fragment,e),m=!0)},o(e){g(a.$$.fragment,e),g(n.$$.fragment,e),g(i.$$.fragment,e),m=!1},d(e){e&&h(t),p(a),p(n),p(i)}}}function D(o,t,a){let{data:s}=t;return o.$$set=n=>{"data"in n&&a(0,s=n.data)},[s]}class L extends y{constructor(t){super(),S(this,t,D,B,k,{data:0})}}export{L as component};