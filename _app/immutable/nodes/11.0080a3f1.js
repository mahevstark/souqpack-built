import{s as pe,n as ce}from"../chunks/scheduler.ce710c66.js";import{S as fe,i as me,g as d,h as p,j as T,f as P,k as r,a as le,x as t,m as F,s as y,n as A,c as w,y as he,r as te,u as ae,v as ne,d as re,t as oe,w as se}from"../chunks/index.d2955eda.js";import{P as _e,a as ve}from"../chunks/page.bdf85309.js";const ge=!1,ye=!1,we=!0;async function Ie({params:l}){try{const e=l.id,n=await(await fetch("https://admin.souqpack.com/api/get_important_data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),u={email:n.data.email,phone:n.data.phone,address:n.data.address,footer_about:n.data.footer_about,facebook:n.data.facebook,instagram:n.data.instagram,twitter:n.data.twitter,youtube:n.data.youtube,snapchat:n.data.snapchat,copy_right:n.data.copy_right,footers:n.data.footers},s=await(await fetch("https://admin.souqpack.com/api/get_categories",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1})})).json(),i=localStorage.getItem("login_data");let _="null";i&&(_=JSON.parse(i).token);const a=await(await fetch("https://admin.souqpack.com/api/get_order_web",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1,is_guest:0,token:_,order_id:e})})).json(),v=await(await fetch("https://admin.souqpack.com/api/get_payfort",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,region_id:1,is_guest:0,token:_,order_id:e})})).json();return console.log("payfort"),console.log(v.payfort),console.log("order"),console.log(a),n.action=="success"&&s.action=="success"&&a.action=="success"&&v.action=="success"?{props:{browser:!1,langs:n.data.langs,regions:n.data.regions,cats:s.data.categories,home:{},footer:u,product:{},category:{},order:a.data,payfort:v.payfort}}:{status:500,error:"Failed to fetch data from the API."}}catch(e){return console.error("Error fetching data:",e),{status:500,error:"Failed to fetch data from the API."}}}const Ue=Object.freeze(Object.defineProperty({__proto__:null,csr:we,load:Ie,prerender:ge,ssr:ye},Symbol.toStringTag,{value:"Module"}));function Pe(l){let e,o,n,u,f,s,i,_,$,a,b,v,k,c,m,V,N,J,G,O,M,K,S,z,Q,j,B,W,U,H,X,R,Y,C,L,Z,D,x,ee,E,ie="دفع مع بطاقة الائتمان";return{c(){e=d("div"),o=d("h4"),n=F("ادفع $"),u=F(l[1]),f=F(" $"),s=F(de),i=F(" لإكمال طلبك"),_=y(),$=d("div"),a=d("form"),b=d("input"),k=y(),c=d("input"),V=y(),N=d("input"),G=y(),O=d("input"),K=y(),S=d("input"),Q=y(),j=d("input"),W=y(),U=d("input"),X=y(),R=d("input"),Y=y(),C=d("input"),Z=y(),D=d("input"),ee=y(),E=d("button"),E.textContent=ie,this.h()},l(I){e=p(I,"DIV",{class:!0});var g=T(e);o=p(g,"H4",{});var q=T(o);n=A(q,"ادفع $"),u=A(q,l[1]),f=A(q," $"),s=A(q,de),i=A(q," لإكمال طلبك"),q.forEach(P),_=w(g),$=p(g,"DIV",{class:!0});var ue=T($);a=p(ue,"FORM",{method:!0,action:!0});var h=T(a);b=p(h,"INPUT",{type:!0,name:!0}),k=w(h),c=p(h,"INPUT",{type:!0,name:!0}),V=w(h),N=p(h,"INPUT",{type:!0,name:!0}),G=w(h),O=p(h,"INPUT",{type:!0,name:!0}),K=w(h),S=p(h,"INPUT",{type:!0,name:!0}),Q=w(h),j=p(h,"INPUT",{type:!0,name:!0}),W=w(h),U=p(h,"INPUT",{type:!0,name:!0}),X=w(h),R=p(h,"INPUT",{type:!0,name:!0}),Y=w(h),C=p(h,"INPUT",{type:!0,name:!0}),Z=w(h),D=p(h,"INPUT",{type:!0,name:!0}),ee=w(h),E=p(h,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),he(E)!=="svelte-1l0in5z"&&(E.textContent=ie),h.forEach(P),ue.forEach(P),g.forEach(P),this.h()},h(){r(b,"type","hidden"),r(b,"name","access_code"),b.value=v=l[0].vals.access_code,r(c,"type","hidden"),r(c,"name","amount"),c.value=m=l[0].vals.amount,r(N,"type","hidden"),r(N,"name","command"),N.value=J=l[0].vals.command,r(O,"type","hidden"),r(O,"name","currency"),O.value=M=l[0].vals.currency,r(S,"type","hidden"),r(S,"name","customer_email"),S.value=z=l[0].vals.customer_email,r(j,"type","hidden"),r(j,"name","language"),j.value=B=l[0].vals.language,r(U,"type","hidden"),r(U,"name","merchant_identifier"),U.value=H=l[0].vals.merchant_identifier,r(R,"type","hidden"),r(R,"name","merchant_reference"),R.value=l[2],r(C,"type","hidden"),r(C,"name","return_url"),C.value=L=l[0].vals.return_url,r(D,"type","hidden"),r(D,"name","signature"),D.value=x=l[0].signature,r(E,"type","submit"),r(E,"class","block w-full px-4 py-2 text-center bg-[#f9ca03] text-white rounded "),r(a,"method","POST"),r(a,"action","https://checkout.payfort.com/FortAPI/paymentPage"),r($,"class","flex justify-center"),r(e,"class","col-span-6")},m(I,g){le(I,e,g),t(e,o),t(o,n),t(o,u),t(o,f),t(o,s),t(o,i),t(e,_),t(e,$),t($,a),t(a,b),t(a,k),t(a,c),t(a,V),t(a,N),t(a,G),t(a,O),t(a,K),t(a,S),t(a,Q),t(a,j),t(a,W),t(a,U),t(a,X),t(a,R),t(a,Y),t(a,C),t(a,Z),t(a,D),t(a,ee),t(a,E)},p(I,g){g&1&&v!==(v=I[0].vals.access_code)&&(b.value=v),g&1&&m!==(m=I[0].vals.amount)&&(c.value=m),g&1&&J!==(J=I[0].vals.command)&&(N.value=J),g&1&&M!==(M=I[0].vals.currency)&&(O.value=M),g&1&&z!==(z=I[0].vals.customer_email)&&(S.value=z),g&1&&B!==(B=I[0].vals.language)&&(j.value=B),g&1&&H!==(H=I[0].vals.merchant_identifier)&&(U.value=H),g&1&&L!==(L=I[0].vals.return_url)&&(C.value=L),g&1&&x!==(x=I[0].signature)&&(D.value=x)},d(I){I&&P(e)}}}function $e(l){let e,o,n,u,f=Pe(l);return{c(){e=d("main"),o=d("div"),n=d("div"),u=d("div"),f&&f.c(),this.h()},l(s){e=p(s,"MAIN",{});var i=T(e);o=p(i,"DIV",{class:!0});var _=T(o);n=p(_,"DIV",{class:!0});var $=T(n);u=p($,"DIV",{class:!0});var a=T(u);f&&f.l(a),a.forEach(P),$.forEach(P),_.forEach(P),i.forEach(P),this.h()},h(){r(u,"class","flex flex-col w-full"),r(n,"class","flex flex-col max-w-[1280px] w-full self-center justify-start items-start px-5 py-5 bg-white shadow-xl"),r(o,"class","flex flex-row items-center justify-center w-full")},m(s,i){le(s,e,i),t(e,o),t(o,n),t(n,u),f&&f.m(u,null)},p(s,[i]){f.p(s,i)},i:ce,o:ce,d(s){s&&P(e),f&&f.d()}}}let de="ر.س",be="customer@souqpack.com";function Te(l,e,o){let{order:n}=e,{payfort:u}=e;console.log("payfort",u);let f=n.total,s=n.id;return console.log("orderId",s),console.log("myEmail",be),l.$$set=i=>{"order"in i&&o(3,n=i.order),"payfort"in i&&o(0,u=i.payfort)},[u,f,s,n]}let Ne=class extends fe{constructor(e){super(),me(this,e,Te,$e,pe,{order:3,payfort:0})}};function ke(l){let e,o,n,u,f,s,i,_,$,a,b,v,k;return o=new _e({props:{data:l[0]}}),s=new Ne({props:{order:l[1],payfort:l[2]}}),v=new ve({props:{data:l[0]}}),{c(){e=d("main"),te(o.$$.fragment),n=y(),u=d("div"),f=y(),te(s.$$.fragment),i=y(),_=d("div"),$=y(),a=d("div"),b=y(),te(v.$$.fragment),this.h()},l(c){e=p(c,"MAIN",{class:!0});var m=T(e);ae(o.$$.fragment,m),n=w(m),u=p(m,"DIV",{class:!0}),T(u).forEach(P),f=w(m),ae(s.$$.fragment,m),i=w(m),_=p(m,"DIV",{class:!0}),T(_).forEach(P),$=w(m),a=p(m,"DIV",{class:!0}),T(a).forEach(P),b=w(m),ae(v.$$.fragment,m),m.forEach(P),this.h()},h(){r(u,"class","h-5 w-full"),r(_,"class","h-5 w-full"),r(a,"class","h-5 w-full"),r(e,"class","bg-[#f5f5f5]")},m(c,m){le(c,e,m),ne(o,e,null),t(e,n),t(e,u),t(e,f),ne(s,e,null),t(e,i),t(e,_),t(e,$),t(e,a),t(e,b),ne(v,e,null),k=!0},p(c,[m]){const V={};m&1&&(V.data=c[0]),o.$set(V);const N={};m&1&&(N.data=c[0]),v.$set(N)},i(c){k||(re(o.$$.fragment,c),re(s.$$.fragment,c),re(v.$$.fragment,c),k=!0)},o(c){oe(o.$$.fragment,c),oe(s.$$.fragment,c),oe(v.$$.fragment,c),k=!1},d(c){c&&P(e),se(o),se(s),se(v)}}}function Ee(l,e,o){var s,i;let{data:n}=e;const u=(s=n.props)==null?void 0:s.order,f=(i=n.props)==null?void 0:i.payfort;return l.$$set=_=>{"data"in _&&o(0,n=_.data)},[n,u,f]}class De extends fe{constructor(e){super(),me(this,e,Ee,ke,pe,{data:0})}}export{De as component,Ue as universal};
