import{s as v,c as D,o as E,d as I,u as P,g as S,e as T,n as V}from"../chunks/scheduler.ce710c66.js";import{S as j,i as q,e as h,a as d,t as u,b as z,d as _,f as c,p as C,g as k,s as L,h as w,j as y,c as M,k as p,x as $,r as N,u as O,v as A,w as B,m as F,n as G,o as H}from"../chunks/index.f931a049.js";import{n as J}from"../chunks/stores.c578e6aa.js";import{t as g}from"../chunks/stores.99df2591.js";import{P as K}from"../chunks/page.8d9c1114.js";function Q(i){let e,s,o;const r=i[3].default,l=I(r,i,i[2],null);let a=i[0].show&&b(i);return{c(){e=k("div"),l&&l.c(),s=L(),a&&a.c(),this.h()},l(n){e=w(n,"DIV",{class:!0,dir:!0});var t=y(e);l&&l.l(t),s=M(t),a&&a.l(t),t.forEach(c),this.h()},h(){p(e,"class","w-full relative "),p(e,"dir","rtl")},m(n,t){d(n,e,t),l&&l.m(e,null),$(e,s),a&&a.m(e,null),o=!0},p(n,t){l&&l.p&&(!o||t&4)&&P(l,r,n,n[2],o?T(r,n[2],t,null):S(n[2]),null),n[0].show?a?a.p(n,t):(a=b(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(n){o||(_(l,n),o=!0)},o(n){u(l,n),o=!1},d(n){n&&c(e),l&&l.d(n),a&&a.d()}}}function R(i){let e,s;return e=new K({}),{c(){N(e.$$.fragment)},l(o){O(e.$$.fragment,o)},m(o,r){A(e,o,r),s=!0},p:V,i(o){s||(_(e.$$.fragment,o),s=!0)},o(o){u(e.$$.fragment,o),s=!1},d(o){B(e,o)}}}function b(i){let e,s=i[0].message+"",o;return{c(){e=k("div"),o=F(s),this.h()},l(r){e=w(r,"DIV",{class:!0});var l=y(e);o=G(l,s),l.forEach(c),this.h()},h(){p(e,"class","fixed right-10 top-20 z-[5000] min-w-[400px] bg-[#f9ca03] bg-opacity-70 rounded-md py-4 px-4")},m(r,l){d(r,e,l),$(e,o)},p(r,l){l&1&&s!==(s=r[0].message+"")&&H(o,s)},d(r){r&&c(e)}}}function U(i){let e,s,o,r;const l=[R,Q],a=[];function n(t,f){return t[1]?0:1}return e=n(i),s=a[e]=l[e](i),{c(){s.c(),o=h()},l(t){s.l(t),o=h()},m(t,f){a[e].m(t,f),d(t,o,f),r=!0},p(t,[f]){let m=e;e=n(t),e===m?a[e].p(t,f):(C(),u(a[m],1,1,()=>{a[m]=null}),z(),s=a[e],s?s.p(t,f):(s=a[e]=l[e](t),s.c()),_(s,1),s.m(o.parentNode,o))},i(t){r||(_(s),r=!0)},o(t){u(s),r=!1},d(t){t&&c(o),a[e].d(t)}}}function W(i,e,s){let o;D(i,J,t=>s(1,o=t));let{$$slots:r={},$$scope:l}=e,a={message:"",type:"",show:!1},n=!1;return E(()=>{g.subscribe(t=>{if(n||!t.show){n=!1;return}console.log("toast",t),t.show&&(s(0,a=t),setTimeout(()=>{n=!0,t.show=!1,g.set(t),s(0,a.show=!1,a)},3e3))})}),i.$$set=t=>{"$$scope"in t&&s(2,l=t.$$scope)},[a,o,l,r]}class te extends j{constructor(e){super(),q(this,e,W,U,v,{})}}export{te as component};