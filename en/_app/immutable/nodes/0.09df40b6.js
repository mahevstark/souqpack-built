import{s as v,c as D,o as E,d as I,u as P,g as S,e as T,n as V}from"../chunks/scheduler.ce710c66.js";import{S as j,i as q,e as d,a as p,t as u,b as z,d as _,f as c,p as C,g as b,s as L,h as k,j as w,c as M,k as y,x as $,r as N,u as O,v as A,w as B,m as F,n as G,o as H}from"../chunks/index.d2955eda.js";import{n as J}from"../chunks/stores.a1eeed25.js";import{t as h}from"../chunks/stores.94e23840.js";import{P as K}from"../chunks/page.123f46c5.js";function Q(i){let e,s,o;const r=i[3].default,n=I(r,i,i[2],null);let a=i[0].show&&g(i);return{c(){e=b("div"),n&&n.c(),s=L(),a&&a.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var t=w(e);n&&n.l(t),s=M(t),a&&a.l(t),t.forEach(c),this.h()},h(){y(e,"class","w-full relative ")},m(l,t){p(l,e,t),n&&n.m(e,null),$(e,s),a&&a.m(e,null),o=!0},p(l,t){n&&n.p&&(!o||t&4)&&P(n,r,l,l[2],o?T(r,l[2],t,null):S(l[2]),null),l[0].show?a?a.p(l,t):(a=g(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(l){o||(_(n,l),o=!0)},o(l){u(n,l),o=!1},d(l){l&&c(e),n&&n.d(l),a&&a.d()}}}function R(i){let e,s;return e=new K({}),{c(){N(e.$$.fragment)},l(o){O(e.$$.fragment,o)},m(o,r){A(e,o,r),s=!0},p:V,i(o){s||(_(e.$$.fragment,o),s=!0)},o(o){u(e.$$.fragment,o),s=!1},d(o){B(e,o)}}}function g(i){let e,s=i[0].message+"",o;return{c(){e=b("div"),o=F(s),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=w(e);o=G(n,s),n.forEach(c),this.h()},h(){y(e,"class","fixed right-10 top-20 z-[5000] min-w-[400px] bg-[#f9ca03] bg-opacity-70 rounded-md py-4 px-4")},m(r,n){p(r,e,n),$(e,o)},p(r,n){n&1&&s!==(s=r[0].message+"")&&H(o,s)},d(r){r&&c(e)}}}function U(i){let e,s,o,r;const n=[R,Q],a=[];function l(t,f){return t[1]?0:1}return e=l(i),s=a[e]=n[e](i),{c(){s.c(),o=d()},l(t){s.l(t),o=d()},m(t,f){a[e].m(t,f),p(t,o,f),r=!0},p(t,[f]){let m=e;e=l(t),e===m?a[e].p(t,f):(C(),u(a[m],1,1,()=>{a[m]=null}),z(),s=a[e],s?s.p(t,f):(s=a[e]=n[e](t),s.c()),_(s,1),s.m(o.parentNode,o))},i(t){r||(_(s),r=!0)},o(t){u(s),r=!1},d(t){t&&c(o),a[e].d(t)}}}function W(i,e,s){let o;D(i,J,t=>s(1,o=t));let{$$slots:r={},$$scope:n}=e,a={message:"",type:"",show:!1},l=!1;return E(()=>{h.subscribe(t=>{if(l||!t.show){l=!1;return}console.log("toastff",t),t.show&&(s(0,a=t),setTimeout(()=>{l=!0,t.show=!1,h.set(t),s(0,a.show=!1,a)},3e3))})}),i.$$set=t=>{"$$scope"in t&&s(2,n=t.$$scope)},[a,o,n,r]}class te extends j{constructor(e){super(),q(this,e,W,U,v,{})}}export{te as component};