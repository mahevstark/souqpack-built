import{s as pe,n as ce}from"../chunks/scheduler.ce710c66.js";import{S as fe,i as me,g as d,h as p,j as T,f as I,k as o,a as le,x as a,m as L,s as g,n as x,c as y,y as he,r as te,u as ae,v as ne,d as oe,t as re,w as se}from"../chunks/index.d2955eda.js";import{P as _e,a as ve}from"../chunks/page.b5505a16.js";const ge=!1,ye=!1,Pe=!0;async function we({params:l}){try{const e=l.id,t=await(await fetch("https://admin.souqpack.com/api/get_important_data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),u={email:t.data.email,phone:t.data.phone,address:t.data.address,footer_about:t.data.footer_about,facebook:t.data.facebook,instagram:t.data.instagram,twitter:t.data.twitter,youtube:t.data.youtube,snapchat:t.data.snapchat,copy_right:t.data.copy_right,footers:t.data.footers},s=await(await fetch("https://admin.souqpack.com/api/get_categories",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),i=localStorage.getItem("login_data");let _="null";i&&(_=JSON.parse(i).token);const n=await(await fetch("https://admin.souqpack.com/api/get_order_web",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1,is_guest:0,token:_,order_id:e})})).json(),v=await(await fetch("https://admin.souqpack.com/api/get_payfort",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1,is_guest:0,token:_,order_id:e})})).json();return console.log("payfort"),console.log(v.payfort),console.log("order"),console.log(n),t.action=="success"&&s.action=="success"&&n.action=="success"&&v.action=="success"?{props:{browser:!1,langs:t.data.langs,regions:t.data.regions,cats:s.data.categories,home:{},footer:u,product:{},category:{},order:n.data,payfort:v.payfort}}:{status:500,error:"Failed to fetch data from the API."}}catch(e){return console.error("Error fetching data:",e),{status:500,error:"Failed to fetch data from the API."}}}const Ce=Object.freeze(Object.defineProperty({__proto__:null,csr:Pe,load:we,prerender:ge,ssr:ye},Symbol.toStringTag,{value:"Module"}));function Ie(l){let e,r,t,u,f,s,i,_,b,n,$,v,k,c,m,R,N,A,G,E,F,K,O,J,Q,j,M,W,C,z,X,V,Y,U,B,Z,D,H,ee,S,ie="Pay with Credit Card";return{c(){e=d("div"),r=d("h4"),t=L("Pay "),u=L(l[1]),f=g(),s=L(de),i=L(" to complete your order"),_=g(),b=d("div"),n=d("form"),$=d("input"),k=g(),c=d("input"),R=g(),N=d("input"),G=g(),E=d("input"),K=g(),O=d("input"),Q=g(),j=d("input"),W=g(),C=d("input"),X=g(),V=d("input"),Y=g(),U=d("input"),Z=g(),D=d("input"),ee=g(),S=d("button"),S.textContent=ie,this.h()},l(w){e=p(w,"DIV",{class:!0});var P=T(e);r=p(P,"H4",{});var q=T(r);t=x(q,"Pay "),u=x(q,l[1]),f=y(q),s=x(q,de),i=x(q," to complete your order"),q.forEach(I),_=y(P),b=p(P,"DIV",{class:!0});var ue=T(b);n=p(ue,"FORM",{method:!0,action:!0});var h=T(n);$=p(h,"INPUT",{type:!0,name:!0}),k=y(h),c=p(h,"INPUT",{type:!0,name:!0}),R=y(h),N=p(h,"INPUT",{type:!0,name:!0}),G=y(h),E=p(h,"INPUT",{type:!0,name:!0}),K=y(h),O=p(h,"INPUT",{type:!0,name:!0}),Q=y(h),j=p(h,"INPUT",{type:!0,name:!0}),W=y(h),C=p(h,"INPUT",{type:!0,name:!0}),X=y(h),V=p(h,"INPUT",{type:!0,name:!0}),Y=y(h),U=p(h,"INPUT",{type:!0,name:!0}),Z=y(h),D=p(h,"INPUT",{type:!0,name:!0}),ee=y(h),S=p(h,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),he(S)!=="svelte-683a05"&&(S.textContent=ie),h.forEach(I),ue.forEach(I),P.forEach(I),this.h()},h(){o($,"type","hidden"),o($,"name","access_code"),$.value=v=l[0].vals.access_code,o(c,"type","hidden"),o(c,"name","amount"),c.value=m=l[0].vals.amount,o(N,"type","hidden"),o(N,"name","command"),N.value=A=l[0].vals.command,o(E,"type","hidden"),o(E,"name","currency"),E.value=F=l[0].vals.currency,o(O,"type","hidden"),o(O,"name","customer_email"),O.value=J=l[0].vals.customer_email,o(j,"type","hidden"),o(j,"name","language"),j.value=M=l[0].vals.language,o(C,"type","hidden"),o(C,"name","merchant_identifier"),C.value=z=l[0].vals.merchant_identifier,o(V,"type","hidden"),o(V,"name","merchant_reference"),V.value=l[2],o(U,"type","hidden"),o(U,"name","return_url"),U.value=B=l[0].vals.return_url,o(D,"type","hidden"),o(D,"name","signature"),D.value=H=l[0].signature,o(S,"type","submit"),o(S,"class","block w-full px-4 py-2 text-center bg-[#f9ca03] text-white rounded "),o(n,"method","POST"),o(n,"action","https://checkout.payfort.com/FortAPI/paymentPage"),o(b,"class","flex justify-center"),o(e,"class","col-span-6")},m(w,P){le(w,e,P),a(e,r),a(r,t),a(r,u),a(r,f),a(r,s),a(r,i),a(e,_),a(e,b),a(b,n),a(n,$),a(n,k),a(n,c),a(n,R),a(n,N),a(n,G),a(n,E),a(n,K),a(n,O),a(n,Q),a(n,j),a(n,W),a(n,C),a(n,X),a(n,V),a(n,Y),a(n,U),a(n,Z),a(n,D),a(n,ee),a(n,S)},p(w,P){P&1&&v!==(v=w[0].vals.access_code)&&($.value=v),P&1&&m!==(m=w[0].vals.amount)&&(c.value=m),P&1&&A!==(A=w[0].vals.command)&&(N.value=A),P&1&&F!==(F=w[0].vals.currency)&&(E.value=F),P&1&&J!==(J=w[0].vals.customer_email)&&(O.value=J),P&1&&M!==(M=w[0].vals.language)&&(j.value=M),P&1&&z!==(z=w[0].vals.merchant_identifier)&&(C.value=z),P&1&&B!==(B=w[0].vals.return_url)&&(U.value=B),P&1&&H!==(H=w[0].signature)&&(D.value=H)},d(w){w&&I(e)}}}function be(l){let e,r,t,u,f=Ie(l);return{c(){e=d("main"),r=d("div"),t=d("div"),u=d("div"),f&&f.c(),this.h()},l(s){e=p(s,"MAIN",{});var i=T(e);r=p(i,"DIV",{class:!0});var _=T(r);t=p(_,"DIV",{class:!0});var b=T(t);u=p(b,"DIV",{class:!0});var n=T(u);f&&f.l(n),n.forEach(I),b.forEach(I),_.forEach(I),i.forEach(I),this.h()},h(){o(u,"class","flex flex-col w-full"),o(t,"class","flex flex-col max-w-[1280px] w-full self-center justify-start items-start px-5 py-5 bg-white shadow-xl"),o(r,"class","flex flex-row items-center justify-center w-full")},m(s,i){le(s,e,i),a(e,r),a(r,t),a(t,u),f&&f.m(u,null)},p(s,[i]){f.p(s,i)},i:ce,o:ce,d(s){s&&I(e),f&&f.d()}}}let de="SAR",$e="customer@souqpack.com";function Te(l,e,r){let{order:t}=e,{payfort:u}=e;console.log("payfort",u),console.log("order",t);let f=t.total,s=t.id;return console.log("orderId",s),console.log("myEmail",$e),l.$$set=i=>{"order"in i&&r(3,t=i.order),"payfort"in i&&r(0,u=i.payfort)},[u,f,s,t]}let Ne=class extends fe{constructor(e){super(),me(this,e,Te,be,pe,{order:3,payfort:0})}};function ke(l){let e,r,t,u,f,s,i,_,b,n,$,v,k;return r=new _e({props:{data:l[0]}}),s=new Ne({props:{order:l[1],payfort:l[2]}}),v=new ve({props:{data:l[0]}}),{c(){e=d("main"),te(r.$$.fragment),t=g(),u=d("div"),f=g(),te(s.$$.fragment),i=g(),_=d("div"),b=g(),n=d("div"),$=g(),te(v.$$.fragment),this.h()},l(c){e=p(c,"MAIN",{class:!0});var m=T(e);ae(r.$$.fragment,m),t=y(m),u=p(m,"DIV",{class:!0}),T(u).forEach(I),f=y(m),ae(s.$$.fragment,m),i=y(m),_=p(m,"DIV",{class:!0}),T(_).forEach(I),b=y(m),n=p(m,"DIV",{class:!0}),T(n).forEach(I),$=y(m),ae(v.$$.fragment,m),m.forEach(I),this.h()},h(){o(u,"class","h-5 w-full"),o(_,"class","h-5 w-full"),o(n,"class","h-5 w-full"),o(e,"class","bg-[#f5f5f5]")},m(c,m){le(c,e,m),ne(r,e,null),a(e,t),a(e,u),a(e,f),ne(s,e,null),a(e,i),a(e,_),a(e,b),a(e,n),a(e,$),ne(v,e,null),k=!0},p(c,[m]){const R={};m&1&&(R.data=c[0]),r.$set(R);const N={};m&1&&(N.data=c[0]),v.$set(N)},i(c){k||(oe(r.$$.fragment,c),oe(s.$$.fragment,c),oe(v.$$.fragment,c),k=!0)},o(c){re(r.$$.fragment,c),re(s.$$.fragment,c),re(v.$$.fragment,c),k=!1},d(c){c&&I(e),se(r),se(s),se(v)}}}function Se(l,e,r){var s,i;let{data:t}=e;console.log("pay page data",t);const u=(s=t.props)==null?void 0:s.order,f=(i=t.props)==null?void 0:i.payfort;return l.$$set=_=>{"data"in _&&r(0,t=_.data)},[t,u,f]}class De extends fe{constructor(e){super(),me(this,e,Se,ke,pe,{data:0})}}export{De as component,Ce as universal};
