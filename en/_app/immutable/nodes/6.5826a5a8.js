import{s as Pt,c as Ot,o as Dt,f as $e,n as lt,r as Nt}from"../chunks/scheduler.ce710c66.js";import{S as qt,i as Mt,g as I,s as M,e as gt,A as Vt,h as k,f as b,c as S,k as y,x as n,a as U,p as Ct,t as ye,b as jt,d as Ie,F as St,m as K,j as F,y as we,n as Z,l as et,E as W,B as pe,o as se,z as qe,r as ze,u as Re,v as Qe,w as Ue}from"../chunks/index.d2955eda.js";import{g as Lt,e as G,P as Ht,a as zt}from"../chunks/page.0077851b.js";import{P as Rt}from"../chunks/page.123f46c5.js";import{c as Qt}from"../chunks/auth.6035c411.js";import{p as Ut}from"../chunks/stores.a1eeed25.js";import{e as At}from"../chunks/singletons.c3af5df3.js";const Bt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,tt=""+new URL("../assets/checklist.76a17575.webp",import.meta.url).href;async function Jt(a){var l=localStorage.getItem("login_data"),t="6a325475cb6af3a3cfaa66683b24a0f7";return l&&(l=JSON.parse(l),t=l.token),a.is_guest=0,a.guest_id=1,a.token=t,a.lang_id=2,a.region_id=1,fetch("https://admin.souqpack.com/api/custom_order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}const{document:mt}=Bt;function vt(a,l,t){const s=a.slice();return s[60]=l[t],s[62]=t,s}function bt(a,l,t){const s=a.slice();return s[9]=l[t],s[62]=t,s}function wt(a,l,t){const s=a.slice();return s[60]=l[t],s[62]=t,s}function yt(a,l,t){const s=a.slice();return s[60]=l[t],s[62]=t,s}function It(a,l,t){const s=a.slice();return s[60]=l[t],s[62]=t,s}function Yt(a){let l,t,s=`<i class="fas fa-boxes text-2xl mr-2"></i>
			CUSTOMIZE YOUR ORDER`,u,m,v,i,o,p,c,d,x,e,w,ke,ae,re=a[3].cat_title+"",fe,Ee,A,X,Me=`<img alt="social icon" class="w-8 h-8 p-1" src="${tt}" title="icon"/> <h1 class="p-1" style="font-family: RobotoBold;">Start Your Order</h1>`,ne,j,$,ee,Se="Item Title",xe,h,g,f,T,E,P=a[3].unit_name+"",q,L,z,B,Q,ie,Te=a[3].table_size_en+"",Oe,Ae,te,Be,ce,Fe,Pe=a[3].table_title_en+"",De,Je,le,Ye,de,Ge,_e,ot=`<div class="p-2 w-full flex lg:flex-row flex-col items-center bg-[#FFFFFF] rounded-md"><img alt="social icon" class="w-8 h-8 p-1" src="${tt}" title="icon"/> <h2 style="font-family: RobotoBold;">Product Color</h2></div> <div class="w-full flex flex-row bg-[#FFFFFF] rounded-md items-center justify-center"><input class="w-[60px]" type="color" id="colorPicker" name="colorPicker"/></div> <div class="w-full flex flex-row bg-[#FFFFFF] rounded-md"></div>`,Ke,ue,st='<div><div>Name</div> <input minlength="2" maxlength="255" required="" class="mt-1 border py-1 border-[#ced4da] px-4 w-full rounded-md" type="text" name="name" id="name" placeholder="Name"/></div> <div><div>Email</div> <input minlength="2" maxlength="255" required="" class="mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2" type="text" name="email" id="email" placeholder="Email"/></div> <div><div>Phone</div> <input minlength="2" maxlength="255" required="" class="mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2" type="text" name="phone" id="phone" placeholder="Phone"/></div>',Ze,he,oe,at="<span>SEND ORDER</span>",We,rt,ge=G(a[2].variations),D=[];for(let _=0;_<ge.length;_+=1)D[_]=kt(It(a,ge,_));let me=G(a[3].db_logic.selected_table.rows),N=[];for(let _=0;_<me.length;_+=1)N[_]=Et(yt(a,me,_));let ve=G(a[3].db_logic.selected_table.rows[a[3].db_logic.row_index].faces),V=[];for(let _=0;_<ve.length;_+=1)V[_]=xt(wt(a,ve,_));let be=G(a[2].variations[a[4]].options),C=[];for(let _=0;_<be.length;_+=1)C[_]=Ft(vt(a,be,_));return{c(){l=I("div"),t=I("div"),t.innerHTML=s,u=M(),m=I("div"),v=I("div"),i=I("img"),p=M(),c=I("div"),d=I("div"),x=I("div"),e=I("img"),ke=M(),ae=I("h2"),fe=K(re),Ee=M(),A=I("div"),X=I("div"),X.innerHTML=Me,ne=M(),j=I("div"),$=I("div"),ee=I("div"),ee.textContent=Se,xe=M(),h=I("select");for(let _=0;_<D.length;_+=1)D[_].c();g=M(),f=I("div"),T=I("div"),E=K("Quantity "),q=K(P),L=M(),z=I("input"),B=M(),Q=I("div"),ie=I("h1"),Oe=K(Te),Ae=M(),te=I("select");for(let _=0;_<N.length;_+=1)N[_].c();Be=M(),ce=I("div"),Fe=I("h1"),De=K(Pe),Je=M(),le=I("select");for(let _=0;_<V.length;_+=1)V[_].c();Ye=M(),de=I("div");for(let _=0;_<C.length;_+=1)C[_].c();Ge=M(),_e=I("div"),_e.innerHTML=ot,Ke=M(),ue=I("div"),ue.innerHTML=st,Ze=M(),he=I("div"),oe=I("button"),oe.innerHTML=at,this.h()},l(_){l=k(_,"DIV",{});var O=F(l);t=k(O,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),we(t)!=="svelte-1m5x10j"&&(t.innerHTML=s),u=S(O),m=k(O,"DIV",{class:!0,style:!0});var r=F(m);v=k(r,"DIV",{class:!0});var R=F(v);i=k(R,"IMG",{alt:!0,class:!0,src:!0,title:!0}),R.forEach(b),p=S(r),c=k(r,"DIV",{class:!0});var J=F(c);d=k(J,"DIV",{class:!0});var nt=F(d);x=k(nt,"DIV",{class:!0});var Ne=F(x);e=k(Ne,"IMG",{alt:!0,class:!0,src:!0,title:!0}),ke=S(Ne),ae=k(Ne,"H2",{style:!0});var it=F(ae);fe=Z(it,re),it.forEach(b),Ne.forEach(b),nt.forEach(b),Ee=S(J),A=k(J,"DIV",{class:!0});var Ve=F(A);X=k(Ve,"DIV",{class:!0,"data-svelte-h":!0}),we(X)!=="svelte-1d9pzcu"&&(X.innerHTML=Me),ne=S(Ve),j=k(Ve,"DIV",{class:!0});var Y=F(j);$=k(Y,"DIV",{});var Ce=F($);ee=k(Ce,"DIV",{class:!0,"data-svelte-h":!0}),we(ee)!=="svelte-wajc1u"&&(ee.textContent=Se),xe=S(Ce),h=k(Ce,"SELECT",{class:!0,name:!0});var ct=F(h);for(let H=0;H<D.length;H+=1)D[H].l(ct);ct.forEach(b),Ce.forEach(b),g=S(Y),f=k(Y,"DIV",{});var je=F(f);T=k(je,"DIV",{});var Xe=F(T);E=Z(Xe,"Quantity "),q=Z(Xe,P),Xe.forEach(b),L=S(je),z=k(je,"INPUT",{class:!0,type:!0,step:!0}),je.forEach(b),B=S(Y),Q=k(Y,"DIV",{});var Le=F(Q);ie=k(Le,"H1",{});var _t=F(ie);Oe=Z(_t,Te),_t.forEach(b),Ae=S(Le),te=k(Le,"SELECT",{class:!0,name:!0});var ut=F(te);for(let H=0;H<N.length;H+=1)N[H].l(ut);ut.forEach(b),Le.forEach(b),Be=S(Y),ce=k(Y,"DIV",{});var He=F(ce);Fe=k(He,"H1",{});var pt=F(Fe);De=Z(pt,Pe),pt.forEach(b),Je=S(He),le=k(He,"SELECT",{class:!0,name:!0});var ft=F(le);for(let H=0;H<V.length;H+=1)V[H].l(ft);ft.forEach(b),He.forEach(b),Ye=S(Y),de=k(Y,"DIV",{});var dt=F(de);for(let H=0;H<C.length;H+=1)C[H].l(dt);dt.forEach(b),Y.forEach(b),Ve.forEach(b),Ge=S(J),_e=k(J,"DIV",{class:!0,"data-svelte-h":!0}),we(_e)!=="svelte-1w1qqfp"&&(_e.innerHTML=ot),Ke=S(J),ue=k(J,"DIV",{class:!0,"data-svelte-h":!0}),we(ue)!=="svelte-jjg31m"&&(ue.innerHTML=st),Ze=S(J),he=k(J,"DIV",{class:!0});var ht=F(he);oe=k(ht,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),we(oe)!=="svelte-1m409f4"&&(oe.innerHTML=at),ht.forEach(b),J.forEach(b),r.forEach(b),O.forEach(b),this.h()},h(){y(t,"class","flex items-center justify-center h-[45px] bg-[#f9ca03] text-white shadow-lg"),et(t,"font-family","RobotoBold"),y(i,"alt","Shipped"),y(i,"class","lg:h-[400px] lg:w-[400px] w-full shadow-lg rounded-md"),$e(i.src,o=`https://admin.souqpack.com/resources/uploads/categories/${a[1]}`)||y(i,"src",o),y(i,"title","product image"),y(v,"class","lg:w-4/12 w-full flex justify-center pt-10"),y(e,"alt","social icon"),y(e,"class","w-8 h-8 p-1"),$e(e.src,w=tt)||y(e,"src",w),y(e,"title","icon"),et(ae,"font-family","RobotoBold"),y(x,"class","w-full bg-[#FFFFFF] flex flex-row items-center rounded-md shadow-sm focus:ring-opacity-50 p-5"),y(d,"class","flex flex-col shadow-lg pt-10"),y(X,"class","flex flex-row items-center p-5"),y(ee,"class","text-access"),y(h,"class","border p-2 rounded-lg w-full"),y(h,"name","option_1"),y(z,"class","mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2"),y(z,"type","number"),y(z,"step","1"),y(te,"class","border p-2 rounded-lg w-full"),y(te,"name","option_1"),y(le,"class","border p-2 rounded-lg w-full"),y(le,"name","option_1"),y(j,"class","grid lg:grid-cols-3 grid-cols-2 w-full pb-10 p-5 gap-4"),y(A,"class","shadow-lg rounded-md"),y(_e,"class","flex lg:flex-row flex-col shadow-lg pt-10 items-center justify-between p-5"),y(ue,"class","pt-10 grid lg:grid-cols-3 grid-cols gap-4 p-5 shadow-lg"),y(oe,"type","button"),y(oe,"class","bg-[#5a5a5a] mx-auto lg:w-[170px] lg:h:[15px] w-full text-white font-bold py-2 px-4 rounded"),y(he,"class","tota_input_cont tota_input_cont_less flex justify-center pt-5"),y(c,"class","lg:w-8/12 w-full h-full gap-4 pb-5"),y(m,"class","flex lg:flex-row flex-col px-20"),et(m,"color","#687188")},m(_,O){U(_,l,O),n(l,t),n(l,u),n(l,m),n(m,v),n(v,i),n(m,p),n(m,c),n(c,d),n(d,x),n(x,e),n(x,ke),n(x,ae),n(ae,fe),n(c,Ee),n(c,A),n(A,X),n(A,ne),n(A,j),n(j,$),n($,ee),n($,xe),n($,h);for(let r=0;r<D.length;r+=1)D[r]&&D[r].m(h,null);n(j,g),n(j,f),n(f,T),n(T,E),n(T,q),n(f,L),n(f,z),W(z,a[3].statics.qty),n(j,B),n(j,Q),n(Q,ie),n(ie,Oe),n(Q,Ae),n(Q,te);for(let r=0;r<N.length;r+=1)N[r]&&N[r].m(te,null);n(j,Be),n(j,ce),n(ce,Fe),n(Fe,De),n(ce,Je),n(ce,le);for(let r=0;r<V.length;r+=1)V[r]&&V[r].m(le,null);n(j,Ye),n(j,de);for(let r=0;r<C.length;r+=1)C[r]&&C[r].m(de,null);n(c,Ge),n(c,_e),n(c,Ke),n(c,ue),n(c,Ze),n(c,he),n(he,oe),We||(rt=[pe(h,"change",a[6]),pe(z,"input",a[11]),pe(z,"input",a[5]),pe(te,"change",a[6]),pe(le,"change",a[6]),pe(oe,"click",a[7])],We=!0)},p(_,O){if(O[0]&2&&!$e(i.src,o=`https://admin.souqpack.com/resources/uploads/categories/${_[1]}`)&&y(i,"src",o),O[0]&8&&re!==(re=_[3].cat_title+"")&&se(fe,re),O[0]&4){ge=G(_[2].variations);let r;for(r=0;r<ge.length;r+=1){const R=It(_,ge,r);D[r]?D[r].p(R,O):(D[r]=kt(R),D[r].c(),D[r].m(h,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=ge.length}if(O[0]&8&&P!==(P=_[3].unit_name+"")&&se(q,P),O[0]&8&&St(z.value)!==_[3].statics.qty&&W(z,_[3].statics.qty),O[0]&8&&Te!==(Te=_[3].table_size_en+"")&&se(Oe,Te),O[0]&8){me=G(_[3].db_logic.selected_table.rows);let r;for(r=0;r<me.length;r+=1){const R=yt(_,me,r);N[r]?N[r].p(R,O):(N[r]=Et(R),N[r].c(),N[r].m(te,null))}for(;r<N.length;r+=1)N[r].d(1);N.length=me.length}if(O[0]&8&&Pe!==(Pe=_[3].table_title_en+"")&&se(De,Pe),O[0]&8){ve=G(_[3].db_logic.selected_table.rows[_[3].db_logic.row_index].faces);let r;for(r=0;r<ve.length;r+=1){const R=wt(_,ve,r);V[r]?V[r].p(R,O):(V[r]=xt(R),V[r].c(),V[r].m(le,null))}for(;r<V.length;r+=1)V[r].d(1);V.length=ve.length}if(O[0]&84){be=G(_[2].variations[_[4]].options);let r;for(r=0;r<be.length;r+=1){const R=vt(_,be,r);C[r]?C[r].p(R,O):(C[r]=Ft(R),C[r].c(),C[r].m(de,null))}for(;r<C.length;r+=1)C[r].d(1);C.length=be.length}},i:lt,o:lt,d(_){_&&b(l),qe(D,_),qe(N,_),qe(V,_),qe(C,_),We=!1,Nt(rt)}}}function Gt(a){let l,t;return l=new Rt({}),{c(){ze(l.$$.fragment)},l(s){Re(l.$$.fragment,s)},m(s,u){Qe(l,s,u),t=!0},p:lt,i(s){t||(Ie(l.$$.fragment,s),t=!0)},o(s){ye(l.$$.fragment,s),t=!1},d(s){Ue(l,s)}}}function kt(a){let l,t,s=a[60].c_title+"",u,m,v;return{c(){l=I("option"),t=I("span"),u=K(s),m=M(),this.h()},l(i){l=k(i,"OPTION",{"data-index":!0});var o=F(l);t=k(o,"SPAN",{});var p=F(t);u=Z(p,s),p.forEach(b),m=S(o),o.forEach(b),this.h()},h(){l.__value=v=a[60].c_title,W(l,l.__value),y(l,"data-index",a[62])},m(i,o){U(i,l,o),n(l,t),n(t,u),n(l,m)},p(i,o){o[0]&4&&s!==(s=i[60].c_title+"")&&se(u,s),o[0]&4&&v!==(v=i[60].c_title)&&(l.__value=v,W(l,l.__value))},d(i){i&&b(l)}}}function Et(a){let l,t,s=a[60].whg+"",u,m,v;return{c(){l=I("option"),t=I("span"),u=K(s),m=M(),this.h()},l(i){l=k(i,"OPTION",{"data-index":!0});var o=F(l);t=k(o,"SPAN",{});var p=F(t);u=Z(p,s),p.forEach(b),m=S(o),o.forEach(b),this.h()},h(){l.__value=v=a[60].whg,W(l,l.__value),y(l,"data-index",a[62])},m(i,o){U(i,l,o),n(l,t),n(t,u),n(l,m)},p(i,o){o[0]&8&&s!==(s=i[60].whg+"")&&se(u,s),o[0]&8&&v!==(v=i[60].whg)&&(l.__value=v,W(l,l.__value))},d(i){i&&b(l)}}}function xt(a){let l,t,s=a[60].title+"",u,m,v;return{c(){l=I("option"),t=I("span"),u=K(s),m=M(),this.h()},l(i){l=k(i,"OPTION",{"data-index":!0});var o=F(l);t=k(o,"SPAN",{});var p=F(t);u=Z(p,s),p.forEach(b),m=S(o),o.forEach(b),this.h()},h(){l.__value=v=a[60].title,W(l,l.__value),y(l,"data-index",a[62])},m(i,o){U(i,l,o),n(l,t),n(t,u),n(l,m)},p(i,o){o[0]&8&&s!==(s=i[60].title+"")&&se(u,s),o[0]&8&&v!==(v=i[60].title)&&(l.__value=v,W(l,l.__value))},d(i){i&&b(l)}}}function Tt(a){let l,t,s=a[9].en+"",u,m,v;return{c(){l=I("option"),t=I("span"),u=K(s),m=M(),this.h()},l(i){l=k(i,"OPTION",{"data-index":!0});var o=F(l);t=k(o,"SPAN",{});var p=F(t);u=Z(p,s),p.forEach(b),m=S(o),o.forEach(b),this.h()},h(){l.__value=v=a[9].en,W(l,l.__value),y(l,"data-index",a[62])},m(i,o){U(i,l,o),n(l,t),n(t,u),n(l,m)},p(i,o){o[0]&20&&s!==(s=i[9].en+"")&&se(u,s),o[0]&20&&v!==(v=i[9].en)&&(l.__value=v,W(l,l.__value))},d(i){i&&b(l)}}}function Ft(a){let l,t=a[60].title+"",s,u,m,v,i,o=G(a[60].options),p=[];for(let c=0;c<o.length;c+=1)p[c]=Tt(bt(a,o,c));return{c(){l=I("p"),s=K(t),u=M(),m=I("select");for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){l=k(c,"P",{});var d=F(l);s=Z(d,t),d.forEach(b),u=S(c),m=k(c,"SELECT",{class:!0,name:!0});var x=F(m);for(let e=0;e<p.length;e+=1)p[e].l(x);x.forEach(b),this.h()},h(){y(m,"class","border p-2 rounded-lg w-full"),y(m,"name","option_1")},m(c,d){U(c,l,d),n(l,s),U(c,u,d),U(c,m,d);for(let x=0;x<p.length;x+=1)p[x]&&p[x].m(m,null);v||(i=pe(m,"change",a[6]),v=!0)},p(c,d){if(d[0]&20&&t!==(t=c[60].title+"")&&se(s,t),d[0]&20){o=G(c[60].options);let x;for(x=0;x<o.length;x+=1){const e=bt(c,o,x);p[x]?p[x].p(e,d):(p[x]=Tt(e),p[x].c(),p[x].m(m,null))}for(;x<p.length;x+=1)p[x].d(1);p.length=o.length}},d(c){c&&(b(l),b(u),b(m)),qe(p,c),v=!1,i()}}}function Kt(a){let l,t,s,u,m,v;const i=[Gt,Yt],o=[];function p(c,d){return c[0]?0:1}return s=p(a),u=o[s]=i[s](a),{c(){l=I("link"),t=M(),u.c(),m=gt(),this.h()},l(c){const d=Vt("svelte-1u6b6hi",mt.head);l=k(d,"LINK",{rel:!0,href:!0}),d.forEach(b),t=S(c),u.l(c),m=gt(),this.h()},h(){y(l,"rel","canonical"),y(l,"href",a[8])},m(c,d){n(mt.head,l),U(c,t,d),o[s].m(c,d),U(c,m,d),v=!0},p(c,d){let x=s;s=p(c),s===x?o[s].p(c,d):(Ct(),ye(o[x],1,1,()=>{o[x]=null}),jt(),u=o[s],u?u.p(c,d):(u=o[s]=i[s](c),u.c()),Ie(u,1),u.m(m.parentNode,m))},i(c){v||(Ie(u),v=!0)},o(c){ye(u),v=!1},d(c){c&&(b(t),b(m)),b(l),o[s].d(c)}}}let Zt=0,Wt="";function Xt(a,l){return parseInt(a.qty)<parseInt(l.qty)?-1:parseInt(a.qty)>parseInt(l.qty)?1:0}function $t(a,l,t){return"#"+((1<<24)+(a<<16)+(l<<8)+t).toString(16).slice(1)}function el(a,l,t){let s;Ot(a,Ut,h=>t(28,s=h));let{data:u}=l,m=!0,v="",i={subs:[]},o={cust_image:"i.png",options:[],shipping:0,vat:15,logo_price:0},p=[],c=[],d={only_items_price:"0",stamps_price:"0",s_price:0,price:558.56,s_logo:0,logo:0,down:549.45,shipping:0,s_vat:0,vat:5945.55,delivery:504.54,total:95459.9,sub_total:0},x=0,e={cat_title:"",c_title:"",c_title_ar:"",c_descps_ar:"",c_descps_en:"",lang_id:2,table_title_ar:"",table_title_en:"",table_size_ar:"",table_size_en:"",unit_name:"",unit_name_ar:"",options:[],more_images:[],statics:{},db_logic:{table_index:0,selected_table:{rows:[]},minQty:0,row_index:0,prints:[],face_index:0,slots:[]},logo:{logo_type:0,logo_file:{file_name:"",logo_print:"UV",logo_colors:"4",logo_stamps:"4",selected:1},logo_create:{logo_name:"",logo_name_2:"",logo_colors:"4",logo_desc:"",selected:0}},color:{choose_color:{color:"#000000",selected:1},create_color:{selected:0,hex_color:"",color:{c:0,m:0,y:0,k:0}}},email:"",name:"",phone:"",total:{},sub_cat_id:0,junk_login:0,junk_login_for:""},w=0;Dt(async()=>{await Qt()||(Lt(At+"/login"),console.log("not logedin")),t(0,m=!0),X(),ke();const g=localStorage.getItem("login_data");g!="null"&&JSON.parse(g).email});function ke(){ae()}function ae(h){fetch("https://admin.souqpack.com/api/fast_get_cust_cats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,slug:u.props.slug,page:1,region_id:1})}).then(g=>g.json()).then(g=>{g.action=="success"?(p=g.data.categories,i=p[0],console.log("test",i),re()):console.log("Coudn't load data")}).catch(g=>{console.log("error",g),alert("Failed")})}function re(){console.log("c",p.length);for(var h=0;h<=p.length-1;h++)if(console.log(p[h]),p[h].selected==1){i=p[h];for(var g=!1,f=0;f<=i.subs.length-1;f++)i.subs[f].selected==1&&(t(2,o=0),t(2,o=i.subs[f]),fe(),g=!0);g||t(2,o=i.subs[0]),c=o.options;for(var T=0;T<=c.length-1;T++)c[T].vals=c[T].values.split(`
`);d.s_logo=parseFloat(o.logo_price),d.s_vat=parseFloat(o.vat),d.shipping=parseFloat(o.shipping);var E=o;t(3,e.statics.pc_price=parseInt(E.pc_price),e),t(3,e.statics.stamps_price=parseInt(E.stamps_price),e),t(3,e.statics.faces=parseInt(E.faces),e),t(3,e.statics.faces_from=parseInt(E.faces_from),e),t(3,e.statics.faces_to=parseInt(E.faces_to),e),t(3,e.statics.faces_price=parseInt(E.faces_price),e),t(3,e.statics.faces_val=parseInt("0"),e),t(3,e.statics.faces_options=[],e);for(var q=parseInt(E.faces_from),L=parseInt(E.faces_to),P=q;P<=L;P++)e.statics.faces_options.push(P);t(3,e.statics.colors=parseInt(E.colors),e),t(3,e.statics.colors_from=parseInt(E.colors_from),e),t(3,e.statics.colors_to=parseInt(E.colors_from),e),t(3,e.statics.colors_price=parseInt(E.colors_price),e),t(3,e.statics.colors_val=parseInt("0"),e),t(3,e.statics.colors_options=[],e);for(var q=parseInt(E.colors_from),L=parseInt(E.colors_to),P=q;P<=L;P++)e.statics.colors_options.push(P);t(3,e.statics.sides=parseInt(E.sides),e),t(3,e.statics.sides_price=parseInt(E.sides_price),e),t(3,e.statics.sides_val=parseInt("0"),e),t(3,e.statics.base=parseInt(E.base),e),t(3,e.statics.base_price=parseInt(E.base_price),e),t(3,e.statics.base_val=parseInt("0"),e),t(3,e.statics.height=parseInt(E.height),e),t(3,e.statics.width=parseInt(E.width),e),t(3,e.statics.height_val=0,e),t(3,e.statics.width_val=0,e),ne()}}function fe(){var h=o.variations[w].tables;console.log("all tablesss",h),h.sort(Xt);var g=[];h[0].qty;for(var f=0,T=0;T<=h.length-1;T++)g.push(h[T].qty);const E=localStorage.getItem("cat_title");console.log("here"),t(3,e.db_logic.selected_table=o.variations[w].tables[f],e),t(3,e.db_logic.table_index=f,e),t(3,e.db_logic.minQty=o.variations[w].tables[f].qty,e),t(3,e.statics.qty=o.variations[w].tables[f].qty,e),t(3,e.cat_title=E,e),console.log("catTitle1",e.cat_title),t(3,e.c_title=o.variations[w].c_title,e),t(3,e.c_title_ar=o.variations[w].c_title_ar,e),t(3,e.c_descps_en=o.variations[w].c_descps_en,e),t(3,e.c_descps_ar=o.variations[w].c_descps_ar,e),t(3,e.table_title_ar=o.variations[w].tables[f].table_print_name_ar,e),t(3,e.table_title_en=o.variations[w].tables[f].table_print_name_en,e),t(3,e.table_size_ar=o.variations[w].tables[f].size_ar,e),t(3,e.table_size_en=o.variations[w].tables[f].size_eng,e),o.variations[w].tables[f].unit_name==null?t(3,e.unit_name="",e):t(3,e.unit_name="("+o.variations[w].tables[f].unit_name+")",e),o.variations[w].tables[f].unit_name_ar==null?t(3,e.unit_name_ar="",e):t(3,e.unit_name_ar="("+o.variations[w].tables[f].unit_name_ar+")",e),t(3,e.more_images=o.variations[w].more_images,e),t(1,v=o.variations[w].cust_image),A()}function Ee(){if(e.statics.qty<e.db_logic.minQty){t(3,e.statics.qty=e.db_logic.minQty,e),alert("Minimum "+e.db_logic.minQty+" qauntity is required");return}for(var h=e.db_logic.slots,g=0,f=0;f<=h.length-1;f++)(e.statics.qty>=h[h.length-1]||h[f]<=e.statics.qty&&h[f+1]>e.statics.qty)&&(g=f);t(3,e.db_logic.selected_table=o.variations[w].tables[g],e),t(3,e.db_logic.table_index=g,e),t(3,e.db_logic.row_index=0,e),t(3,e.c_title=o.variations[w].c_title,e),t(3,e.c_title_ar=o.variations[w].c_title_ar,e),t(3,e.c_descps_en=o.variations[w].c_descps_en,e),t(3,e.c_descps_ar=o.variations[w].c_descps_ar,e),t(3,e.table_title_ar=o.variations[w].tables[g].table_print_name_en,e),t(3,e.table_title_en=o.variations[w].tables[g].table_print_name_en,e),t(3,e.table_size_ar=o.variations[w].tables[g].ara_title_size,e),t(3,e.table_size_en=o.variations[w].tables[g].eng_title_size,e),o.variations[w].tables[g].unit_name==null?t(3,e.unit_name="",e):t(3,e.unit_name=o.variations[w].tables[g].unit_name,e),o.variations[w].tables[g].unit_name_ar==null?t(3,e.unit_name_ar="",e):t(3,e.unit_name_ar="("+o.variations[w].tables[g].unit_name_ar+")",e),title.setTitle(o.variations[w].meta_title_en),meta.updateTag({name:"title",content:o.variations[w].meta_title_en}),meta.updateTag({name:"description",content:o.variations[w].meta_descps_en}),meta.updateTag({name:"keywords",content:o.variations[w].meta_keys_en}),seoService.updateCanonicalUrl(),ne()}function A(){t(3,e.db_logic.face_index=0,e)}function X(){var h=e.color.create_color.color.c,g=e.color.create_color.color.m,f=e.color.create_color.color.y,T=e.color.create_color.color.k;h=h/100,g=g/100,f=f/100,T=T/100,h=h*(1-T)+T,g=g*(1-T)+T,f=f*(1-T)+T;var E=1-h,P=1-g,q=1-f;E=Math.round(255*E),P=Math.round(255*P),q=Math.round(255*q);var L=$t(E,P,q);t(3,e.color.create_color.hex_color=L,e)}function Me(h,g){for(var f=o.variations[w].options[h].options,T=0;T<=f.length-1;T++)f[T].selected=0;f[g].selected=1,t(2,o.variations[w].options[h].options=f,o),ne()}function ne(){setTimeout(()=>{if(e.db_logic.minQty>e.statics.qty){alert("Minium "+e.statics.min_qty+" is required to order");return}var h=0;let g=0;for(var f=o.variations[w].options,T=0;T<=f.length-1;T++)for(var E=f[T].options,P=0;P<=E.length-1;P++)if(E[P].selected==1){h+=Math.round(parseFloat(E[P].price)),g+=parseFloat(E[P].price);break}var q=e.statics,L=e.db_logic;q.qty*g,parseInt(L.selected_table.rows[L.row_index].faces[L.face_index].print_index)+1;var z=0,B=L.selected_table.rows[L.row_index].faces[L.face_index].price*1;B=B+g,B=Math.round(B*100)/100,t(3,e.statics.pc_price=B,e);var Q=B*q.qty,ie=Q+z;d.logo=0,d.shipping=parseFloat(o.shipping),Q=ie+g,d.only_items_price=Q.toFixed(2),d.s_price=Q+z,d.s_price=parseFloat(d.s_price.toFixed(2)),console.log("total--->",d),j()},500)}function j(){console.log("total---33>",d),d.price=d.s_price;var h=d.price+d.shipping+d.logo,g=d.s_vat/100;g=0,d.vat=Math.round(g),h=g+h;var f=Math.round(h/2);d.down=f,d.sub_total=Math.round(h),d.total=Math.round(f),t(0,m=!1)}function $(){if(console.log("here"),e.color.choose_color.color==""){alert("Your must choose a color");return}for(var h=[],g=o.variations[w].options,f=0;f<=g.length-1;f++)for(var T=g[f].options,E=0;E<=T.length-1;E++)if(T[E].selected==1){var P,P={title:g[f].title,value:T[E].en,id:g[f].id,price:T[E].price};h.push(P)}t(3,e.options=h,e),t(3,e.logo.logo_type=x,e),t(3,e.total=d,e),t(3,e.sub_cat_id=o.id,e),t(3,e.junk_login=Zt,e),t(3,e.junk_login_for=Wt,e),Jt(e).then(q=>q.json()).then(q=>{console.log("Result"),console.log(q),q.action=="success"?alert("Your Custom Order #"+q.order_id+" has been processed, Please proceed with the payment to complete order."):alert(q.error)}).catch(q=>{console.log("Result"),console.log(q),alert("Something went wrong with this request, please try again later.")})}let ee=[{en:"Option 1",ar:"خيار 1"},{en:"Option 2",ar:"خيار 2"},{en:"Option 3",ar:"خيار 3"}];const Se=s.url;function xe(){e.statics.qty=St(this.value),t(3,e)}return a.$$set=h=>{"data"in h&&t(10,u=h.data)},[m,v,o,e,w,Ee,Me,$,Se,ee,u,xe]}let tl=class extends qt{constructor(l){super(),Mt(this,l,el,Kt,Pt,{data:10},null,[-1,-1,-1])}};function ll(a){let l,t,s,u,m,v,i;return t=new Ht({props:{data:a[0]}}),u=new tl({props:{data:a[0]}}),v=new zt({props:{data:a[0]}}),{c(){l=I("main"),ze(t.$$.fragment),s=M(),ze(u.$$.fragment),m=M(),ze(v.$$.fragment),this.h()},l(o){l=k(o,"MAIN",{class:!0});var p=F(l);Re(t.$$.fragment,p),s=S(p),Re(u.$$.fragment,p),m=S(p),Re(v.$$.fragment,p),p.forEach(b),this.h()},h(){y(l,"class","bg-[#fff]")},m(o,p){U(o,l,p),Qe(t,l,null),n(l,s),Qe(u,l,null),n(l,m),Qe(v,l,null),i=!0},p(o,[p]){const c={};p&1&&(c.data=o[0]),t.$set(c);const d={};p&1&&(d.data=o[0]),u.$set(d);const x={};p&1&&(x.data=o[0]),v.$set(x)},i(o){i||(Ie(t.$$.fragment,o),Ie(u.$$.fragment,o),Ie(v.$$.fragment,o),i=!0)},o(o){ye(t.$$.fragment,o),ye(u.$$.fragment,o),ye(v.$$.fragment,o),i=!1},d(o){o&&b(l),Ue(t),Ue(u),Ue(v)}}}function ol(a,l,t){let{data:s}=l;return a.$$set=u=>{"data"in u&&t(0,s=u.data)},[s]}class pl extends qt{constructor(l){super(),Mt(this,l,ol,ll,Pt,{data:0})}}export{pl as component};
