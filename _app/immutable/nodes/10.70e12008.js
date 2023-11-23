import{s as ae,n as Q}from"../chunks/scheduler.ce710c66.js";import{S as le,i as se,g as p,s as w,h,j as _,c as b,f as u,k as g,l as x,a as P,x as d,m as S,H as ne,n as q,G as oe,o as L,y as fe,z as ie,L as W,B as ce,r as R,u as H,v as T,d as z,t as M,w as G}from"../chunks/index.d2955eda.js";import{e as X,P as de,a as ue}from"../chunks/page.c3ec49c5.js";function Y(f,e,a){const o=f.slice();return o[3]=e[a],o[5]=a,o}function Z(f){let e,a,o=f[0].props.page.title+"",c,i,l,s,t=f[0].props.page.content+"";return{c(){e=p("div"),a=p("span"),c=S(o),i=w(),l=p("div"),s=new ne(!1),this.h()},l(r){e=h(r,"DIV",{class:!0});var n=_(e);a=h(n,"SPAN",{class:!0,style:!0});var m=_(a);c=q(m,o),m.forEach(u),i=b(n),l=h(n,"DIV",{class:!0});var $=_(l);s=oe($,!1),$.forEach(u),n.forEach(u),this.h()},h(){g(a,"class","text-2xl "),x(a,"font-family","RobotoBold"),s.a=null,g(l,"class","flex flex-col px-2 mt-4 space-y-4"),g(e,"class","flex flex-col w-full items-center px-4")},m(r,n){P(r,e,n),d(e,a),d(a,c),d(e,i),d(e,l),s.m(t,l)},p(r,n){n&1&&o!==(o=r[0].props.page.title+"")&&L(c,o),n&1&&t!==(t=r[0].props.page.content+"")&&s.p(t)},d(r){r&&u(e)}}}function ee(f){let e,a,o="أسئلة مكررة",c,i,l=X(f[0].props.page),s=[];for(let t=0;t<l.length;t+=1)s[t]=te(Y(f,l,t));return{c(){e=p("div"),a=p("span"),a.textContent=o,c=w(),i=p("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=h(t,"DIV",{class:!0});var r=_(e);a=h(r,"SPAN",{class:!0,style:!0,"data-svelte-h":!0}),fe(a)!=="svelte-62bdwi"&&(a.textContent=o),c=b(r),i=h(r,"DIV",{class:!0});var n=_(i);for(let m=0;m<s.length;m+=1)s[m].l(n);n.forEach(u),r.forEach(u),this.h()},h(){g(a,"class","text-2xl "),x(a,"font-family","RobotoBold"),g(i,"class","flex flex-col px-2 mt-4 space-y-4 w-full"),g(e,"class","flex flex-col w-full items-center px-4 bg-white py-4")},m(t,r){P(t,e,r),d(e,a),d(e,c),d(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(i,null)},p(t,r){if(r&3){l=X(t[0].props.page);let n;for(n=0;n<l.length;n+=1){const m=Y(t,l,n);s[n]?s[n].p(m,r):(s[n]=te(m),s[n].c(),s[n].m(i,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}},d(t){t&&u(e),ie(s,t)}}}function te(f){let e,a,o,c,i=f[5]+1+"",l,s,t,r=f[3].title+"",n,m,$,I=f[1]==f[5]?"-":"+",D,B,y,k,V=f[3].content+"",j,C,O;function re(){return f[2](f[5])}return{c(){e=p("div"),a=p("button"),o=p("div"),c=p("span"),l=S(i),s=w(),t=p("span"),n=S(r),m=w(),$=p("span"),D=S(I),B=w(),y=p("div"),k=new ne(!1),j=w(),this.h()},l(E){e=h(E,"DIV",{class:!0});var v=_(e);a=h(v,"BUTTON",{class:!0,style:!0});var N=_(a);o=h(N,"DIV",{class:!0});var A=_(o);c=h(A,"SPAN",{});var U=_(c);l=q(U,i),U.forEach(u),s=b(A),t=h(A,"SPAN",{class:!0});var F=_(t);n=q(F,r),F.forEach(u),A.forEach(u),m=b(N),$=h(N,"SPAN",{});var J=_($);D=q(J,I),J.forEach(u),N.forEach(u),B=b(v),y=h(v,"DIV",{class:!0});var K=_(y);k=oe(K,!1),K.forEach(u),j=b(v),v.forEach(u),this.h()},h(){g(t,"class","ml-4"),g(o,"class","flex flex-row items-center"),g(a,"class","flex flex-row items-center w-full justify-between "),x(a,"font-family","RobotoBold"),k.a=null,g(y,"class","flex pl-6 flex-col px-2 mt-4 space-y-4 duration-500 transition-all "),W(y,"hidden",f[1]!=f[5]),g(e,"class","flex flex-col border border-gray-300 px-2 py-2")},m(E,v){P(E,e,v),d(e,a),d(a,o),d(o,c),d(c,l),d(o,s),d(o,t),d(t,n),d(a,m),d(a,$),d($,D),d(e,B),d(e,y),k.m(V,y),d(e,j),C||(O=ce(a,"click",re),C=!0)},p(E,v){f=E,v&1&&r!==(r=f[3].title+"")&&L(n,r),v&2&&I!==(I=f[1]==f[5]?"-":"+")&&L(D,I),v&1&&V!==(V=f[3].content+"")&&k.p(V),v&2&&W(y,"hidden",f[1]!=f[5])},d(E){E&&u(e),C=!1,O()}}}function pe(f){let e,a,o,c,i=f[0].props.slug!="faq"&&Z(f),l=f[0].props.slug=="faq"&&ee(f);return{c(){e=p("main"),a=p("div"),o=p("div"),i&&i.c(),c=w(),l&&l.c(),this.h()},l(s){e=h(s,"MAIN",{class:!0,style:!0});var t=_(e);a=h(t,"DIV",{class:!0});var r=_(a);o=h(r,"DIV",{class:!0});var n=_(o);i&&i.l(n),c=b(n),l&&l.l(n),n.forEach(u),r.forEach(u),t.forEach(u),this.h()},h(){g(o,"class","max-w-[1140px] w-full flex lg:flex-row flex-col justify-center self-center "),g(a,"class","flex flex-col w-full justify-center"),g(e,"class","mt-10 mb-10"),x(e,"font-family","Roboto"),x(e,"font-size","13px"),x(e,"color","#687188")},m(s,t){P(s,e,t),d(e,a),d(a,o),i&&i.m(o,null),d(o,c),l&&l.m(o,null)},p(s,[t]){s[0].props.slug!="faq"?i?i.p(s,t):(i=Z(s),i.c(),i.m(o,c)):i&&(i.d(1),i=null),s[0].props.slug=="faq"?l?l.p(s,t):(l=ee(s),l.c(),l.m(o,null)):l&&(l.d(1),l=null)},i:Q,o:Q,d(s){s&&u(e),i&&i.d(),l&&l.d()}}}function he(f,e,a){let{data:o}=e,c=-1;const i=l=>{c==l?a(1,c=-1):a(1,c=l)};return f.$$set=l=>{"data"in l&&a(0,o=l.data)},[o,c,i]}class me extends le{constructor(e){super(),se(this,e,he,pe,ae,{data:0})}}function _e(f){let e,a,o,c,i,l,s;return a=new de({props:{data:f[0]}}),c=new me({props:{data:f[0]}}),l=new ue({props:{data:f[0]}}),{c(){e=p("main"),R(a.$$.fragment),o=w(),R(c.$$.fragment),i=w(),R(l.$$.fragment),this.h()},l(t){e=h(t,"MAIN",{class:!0});var r=_(e);H(a.$$.fragment,r),o=b(r),H(c.$$.fragment,r),i=b(r),H(l.$$.fragment,r),r.forEach(u),this.h()},h(){g(e,"class","bg-[#fff]")},m(t,r){P(t,e,r),T(a,e,null),d(e,o),T(c,e,null),d(e,i),T(l,e,null),s=!0},p(t,[r]){const n={};r&1&&(n.data=t[0]),a.$set(n);const m={};r&1&&(m.data=t[0]),c.$set(m);const $={};r&1&&($.data=t[0]),l.$set($)},i(t){s||(z(a.$$.fragment,t),z(c.$$.fragment,t),z(l.$$.fragment,t),s=!0)},o(t){M(a.$$.fragment,t),M(c.$$.fragment,t),M(l.$$.fragment,t),s=!1},d(t){t&&u(e),G(a),G(c),G(l)}}}function ge(f,e,a){let{data:o}=e;return f.$$set=c=>{"data"in c&&a(0,o=c.data)},[o]}class be extends le{constructor(e){super(),se(this,e,ge,_e,ae,{data:0})}}export{be as component};
