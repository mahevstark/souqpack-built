import{s as ce,n as oe}from"../chunks/scheduler.ce710c66.js";import{S as me,i as de,g as o,h as f,j as E,f as I,k as n,a as ue,x as t,m as z,s as h,n as G,c as _,y as ve,r as ee,u as te,v as ae,d as ne,t as le,w as re}from"../chunks/index.f931a049.js";import{P as he,a as _e}from"../chunks/page.14f8c491.js";function ye(u){let e,l,s,c,v,r,m,y,P,a,N,w,U,i,d,A,T,q,J,D,x,K,S,L,V,F,Q,k,R,W,M,X,C,B,Y,j,H,Z,b,se="Pay with Credit Card";return{c(){e=o("div"),l=o("h4"),s=z("Pay "),c=z(u[1]),v=h(),r=z(fe),m=z(" to complete your order"),y=h(),P=o("div"),a=o("form"),N=o("input"),U=h(),i=o("input"),A=h(),T=o("input"),J=h(),D=o("input"),K=h(),S=o("input"),L=h(),V=o("input"),Q=h(),k=o("input"),W=h(),M=o("input"),X=h(),C=o("input"),Y=h(),j=o("input"),Z=h(),b=o("button"),b.textContent=se,this.h()},l($){e=f($,"DIV",{class:!0});var g=E(e);l=f(g,"H4",{});var O=E(l);s=G(O,"Pay "),c=G(O,u[1]),v=_(O),r=G(O,fe),m=G(O," to complete your order"),O.forEach(I),y=_(g),P=f(g,"DIV",{class:!0});var ie=E(P);a=f(ie,"FORM",{method:!0,action:!0});var p=E(a);N=f(p,"INPUT",{type:!0,name:!0}),U=_(p),i=f(p,"INPUT",{type:!0,name:!0}),A=_(p),T=f(p,"INPUT",{type:!0,name:!0}),J=_(p),D=f(p,"INPUT",{type:!0,name:!0}),K=_(p),S=f(p,"INPUT",{type:!0,name:!0}),L=_(p),V=f(p,"INPUT",{type:!0,name:!0}),Q=_(p),k=f(p,"INPUT",{type:!0,name:!0}),W=_(p),M=f(p,"INPUT",{type:!0,name:!0}),X=_(p),C=f(p,"INPUT",{type:!0,name:!0}),Y=_(p),j=f(p,"INPUT",{type:!0,name:!0}),Z=_(p),b=f(p,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),ve(b)!=="svelte-683a05"&&(b.textContent=se),p.forEach(I),ie.forEach(I),g.forEach(I),this.h()},h(){n(N,"type","hidden"),n(N,"name","access_code"),N.value=w=u[0].vals.access_code,n(i,"type","hidden"),n(i,"name","amount"),i.value=d=u[0].vals.amount,n(T,"type","hidden"),n(T,"name","command"),T.value=q=u[0].vals.command,n(D,"type","hidden"),n(D,"name","currency"),D.value=x=u[0].vals.currency,n(S,"type","hidden"),n(S,"name","customer_email"),S.value=pe,n(V,"type","hidden"),n(V,"name","language"),V.value=F=u[0].vals.language,n(k,"type","hidden"),n(k,"name","merchant_identifier"),k.value=R=u[0].vals.merchant_identifier,n(M,"type","hidden"),n(M,"name","merchant_reference"),M.value=u[2],n(C,"type","hidden"),n(C,"name","return_url"),C.value=B=u[0].vals.return_url,n(j,"type","hidden"),n(j,"name","signature"),j.value=H=u[0].signature,n(b,"type","submit"),n(b,"class","block w-full px-4 py-2 text-center bg-[#f9ca03] text-white rounded "),n(a,"method","POST"),n(a,"action","https://checkout.payfort.com/FortAPI/paymentPage"),n(P,"class","flex justify-center"),n(e,"class","col-span-6")},m($,g){ue($,e,g),t(e,l),t(l,s),t(l,c),t(l,v),t(l,r),t(l,m),t(e,y),t(e,P),t(P,a),t(a,N),t(a,U),t(a,i),t(a,A),t(a,T),t(a,J),t(a,D),t(a,K),t(a,S),t(a,L),t(a,V),t(a,Q),t(a,k),t(a,W),t(a,M),t(a,X),t(a,C),t(a,Y),t(a,j),t(a,Z),t(a,b)},p($,g){g&1&&w!==(w=$[0].vals.access_code)&&(N.value=w),g&1&&d!==(d=$[0].vals.amount)&&(i.value=d),g&1&&q!==(q=$[0].vals.command)&&(T.value=q),g&1&&x!==(x=$[0].vals.currency)&&(D.value=x),g&1&&F!==(F=$[0].vals.language)&&(V.value=F),g&1&&R!==(R=$[0].vals.merchant_identifier)&&(k.value=R),g&1&&B!==(B=$[0].vals.return_url)&&(C.value=B),g&1&&H!==(H=$[0].signature)&&(j.value=H)},d($){$&&I(e)}}}function ge(u){let e,l,s,c,v=ye(u);return{c(){e=o("main"),l=o("div"),s=o("div"),c=o("div"),v&&v.c(),this.h()},l(r){e=f(r,"MAIN",{});var m=E(e);l=f(m,"DIV",{class:!0});var y=E(l);s=f(y,"DIV",{class:!0});var P=E(s);c=f(P,"DIV",{class:!0});var a=E(c);v&&v.l(a),a.forEach(I),P.forEach(I),y.forEach(I),m.forEach(I),this.h()},h(){n(c,"class","flex flex-col w-full"),n(s,"class","flex flex-col max-w-[1280px] w-full self-center justify-start items-start px-5 py-5 bg-white shadow-xl"),n(l,"class","flex flex-row items-center justify-center w-full")},m(r,m){ue(r,e,m),t(e,l),t(l,s),t(s,c),v&&v.m(c,null)},p(r,[m]){v.p(r,m)},i:oe,o:oe,d(r){r&&I(e),v&&v.d()}}}let fe="SAR",pe="customer@souqpack.com";function Ie(u,e,l){let{order:s}=e,{payfort:c}=e;console.log("payfort",c);let v=s.total,r=s.id;return console.log("orderId",r),console.log("myEmail",pe),u.$$set=m=>{"order"in m&&l(3,s=m.order),"payfort"in m&&l(0,c=m.payfort)},[c,v,r,s]}let $e=class extends me{constructor(e){super(),de(this,e,Ie,ge,ce,{order:3,payfort:0})}};function Pe(u){let e,l,s,c,v,r,m,y,P,a,N,w,U;return l=new he({props:{data:u[0]}}),r=new $e({props:{order:u[1],payfort:u[2]}}),w=new _e({props:{data:u[0]}}),{c(){e=o("main"),ee(l.$$.fragment),s=h(),c=o("div"),v=h(),ee(r.$$.fragment),m=h(),y=o("div"),P=h(),a=o("div"),N=h(),ee(w.$$.fragment),this.h()},l(i){e=f(i,"MAIN",{class:!0});var d=E(e);te(l.$$.fragment,d),s=_(d),c=f(d,"DIV",{class:!0}),E(c).forEach(I),v=_(d),te(r.$$.fragment,d),m=_(d),y=f(d,"DIV",{class:!0}),E(y).forEach(I),P=_(d),a=f(d,"DIV",{class:!0}),E(a).forEach(I),N=_(d),te(w.$$.fragment,d),d.forEach(I),this.h()},h(){n(c,"class","h-5 w-full"),n(y,"class","h-5 w-full"),n(a,"class","h-5 w-full"),n(e,"class","bg-[#f5f5f5]")},m(i,d){ue(i,e,d),ae(l,e,null),t(e,s),t(e,c),t(e,v),ae(r,e,null),t(e,m),t(e,y),t(e,P),t(e,a),t(e,N),ae(w,e,null),U=!0},p(i,[d]){const A={};d&1&&(A.data=i[0]),l.$set(A);const T={};d&1&&(T.data=i[0]),w.$set(T)},i(i){U||(ne(l.$$.fragment,i),ne(r.$$.fragment,i),ne(w.$$.fragment,i),U=!0)},o(i){le(l.$$.fragment,i),le(r.$$.fragment,i),le(w.$$.fragment,i),U=!1},d(i){i&&I(e),re(l),re(r),re(w)}}}function we(u,e,l){var r,m;let{data:s}=e;const c=(r=s.props)==null?void 0:r.order,v=(m=s.props)==null?void 0:m.payfort;return u.$$set=y=>{"data"in y&&l(0,s=y.data)},[s,c,v]}class be extends me{constructor(e){super(),de(this,e,we,Pe,ce,{data:0})}}export{be as component};
