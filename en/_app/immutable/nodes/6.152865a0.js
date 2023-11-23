import{s as Tt,o as qt,f as $e,n as lt,r as Ot}from"../chunks/scheduler.ce710c66.js";import{S as Pt,i as Mt,e as gt,a as G,p as Dt,t as we,b as Vt,d as ye,f as w,E as St,g as y,s as P,m as J,h as I,j as E,y as be,c as M,n as Y,k,l as et,x as c,D as Z,A as _e,o as le,z as Se,r as Re,u as ze,v as Qe,w as Ae}from"../chunks/index.f931a049.js";import{g as Ct,e as B,P as Nt,a as jt}from"../chunks/page.14f8c491.js";import{P as Lt}from"../chunks/page.8d9c1114.js";import{c as Ht}from"../chunks/auth.6035c411.js";import{e as Rt}from"../chunks/singletons.4b2d37d2.js";const tt=""+new URL("../assets/checklist.76a17575.webp",import.meta.url).href;async function zt(r){var l=localStorage.getItem("login_data"),t="6a325475cb6af3a3cfaa66683b24a0f7";return l&&(l=JSON.parse(l),t=l.token),r.is_guest=0,r.guest_id=1,r.token=t,r.lang_id=2,r.region_id=1,fetch("https://admin.souqpack.com/api/custom_order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}function mt(r,l,t){const a=r.slice();return a[58]=l[t],a[60]=t,a}function vt(r,l,t){const a=r.slice();return a[8]=l[t],a[60]=t,a}function bt(r,l,t){const a=r.slice();return a[58]=l[t],a[60]=t,a}function wt(r,l,t){const a=r.slice();return a[58]=l[t],a[60]=t,a}function yt(r,l,t){const a=r.slice();return a[58]=l[t],a[60]=t,a}function Qt(r){let l,t,a=`<i class="fas fa-boxes text-2xl mr-2"></i>
			CUSTOMIZE YOUR ORDER`,g,m,f,o,s,u,i,S,e,d,qe,Ie,oe,se=r[3].cat_title+"",ue,ke,z,K,pe=`<img alt="social icon" class="w-8 h-8 p-1" src="${tt}"/> <h1 class="p-1" style="font-family: RobotoBold;">Start Your Order</h1>`,xe,j,W,X,b="Item Title",h,p,x,v,F,T,O=r[3].unit_name+"",ae,Q,L,Ee,re,Fe,Te=r[3].table_size_en+"",Oe,Ue,$,Be,ne,Pe,Me=r[3].table_title_en+"",De,Je,ee,Ye,fe,Ge,ie,ot=`<div class="p-2 w-full flex lg:flex-row flex-col items-center bg-[#FFFFFF] rounded-md"><img alt="social icon" class="w-8 h-8 p-1" src="${tt}"/> <h2 style="font-family: RobotoBold;">Product Color</h2></div> <div class="w-full flex flex-row bg-[#FFFFFF] rounded-md items-center justify-center"><input class="w-[60px]" type="color" id="colorPicker" name="colorPicker"/></div> <div class="w-full flex flex-row bg-[#FFFFFF] rounded-md"></div>`,Ze,ce,st='<div><div>Name</div> <input minlength="2" maxlength="255" required="" class="mt-1 border py-1 border-[#ced4da] px-4 w-full rounded-md" type="text" name="name" id="name" placeholder="Name"/></div> <div><div>Email</div> <input minlength="2" maxlength="255" required="" class="mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2" type="text" name="email" id="email" placeholder="Email"/></div> <div><div>Phone</div> <input minlength="2" maxlength="255" required="" class="mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2" type="text" name="phone" id="phone" placeholder="Phone"/></div>',Ke,de,te,at="<span>SEND ORDER</span>",We,rt,he=B(r[2].variations),D=[];for(let _=0;_<he.length;_+=1)D[_]=It(yt(r,he,_));let ge=B(r[3].db_logic.selected_table.rows),V=[];for(let _=0;_<ge.length;_+=1)V[_]=kt(wt(r,ge,_));let me=B(r[3].db_logic.selected_table.rows[r[3].db_logic.row_index].faces),C=[];for(let _=0;_<me.length;_+=1)C[_]=xt(bt(r,me,_));let ve=B(r[2].variations[r[4]].options),N=[];for(let _=0;_<ve.length;_+=1)N[_]=Ft(mt(r,ve,_));return{c(){l=y("div"),t=y("div"),t.innerHTML=a,g=P(),m=y("div"),f=y("div"),o=y("img"),u=P(),i=y("div"),S=y("div"),e=y("div"),d=y("img"),Ie=P(),oe=y("h2"),ue=J(se),ke=P(),z=y("div"),K=y("div"),K.innerHTML=pe,xe=P(),j=y("div"),W=y("div"),X=y("div"),X.textContent=b,h=P(),p=y("select");for(let _=0;_<D.length;_+=1)D[_].c();x=P(),v=y("div"),F=y("div"),T=J("Quantity "),ae=J(O),Q=P(),L=y("input"),Ee=P(),re=y("div"),Fe=y("h1"),Oe=J(Te),Ue=P(),$=y("select");for(let _=0;_<V.length;_+=1)V[_].c();Be=P(),ne=y("div"),Pe=y("h1"),De=J(Me),Je=P(),ee=y("select");for(let _=0;_<C.length;_+=1)C[_].c();Ye=P(),fe=y("div");for(let _=0;_<N.length;_+=1)N[_].c();Ge=P(),ie=y("div"),ie.innerHTML=ot,Ze=P(),ce=y("div"),ce.innerHTML=st,Ke=P(),de=y("div"),te=y("button"),te.innerHTML=at,this.h()},l(_){l=I(_,"DIV",{});var q=E(l);t=I(q,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),be(t)!=="svelte-1m5x10j"&&(t.innerHTML=a),g=M(q),m=I(q,"DIV",{class:!0,style:!0});var n=E(m);f=I(n,"DIV",{class:!0});var R=E(f);o=I(R,"IMG",{alt:!0,class:!0,src:!0}),R.forEach(w),u=M(n),i=I(n,"DIV",{class:!0});var A=E(i);S=I(A,"DIV",{class:!0});var nt=E(S);e=I(nt,"DIV",{class:!0});var Ve=E(e);d=I(Ve,"IMG",{alt:!0,class:!0,src:!0}),Ie=M(Ve),oe=I(Ve,"H2",{style:!0});var it=E(oe);ue=Y(it,se),it.forEach(w),Ve.forEach(w),nt.forEach(w),ke=M(A),z=I(A,"DIV",{class:!0});var Ce=E(z);K=I(Ce,"DIV",{class:!0,"data-svelte-h":!0}),be(K)!=="svelte-1t9nbhu"&&(K.innerHTML=pe),xe=M(Ce),j=I(Ce,"DIV",{class:!0});var U=E(j);W=I(U,"DIV",{});var Ne=E(W);X=I(Ne,"DIV",{class:!0,"data-svelte-h":!0}),be(X)!=="svelte-wajc1u"&&(X.textContent=b),h=M(Ne),p=I(Ne,"SELECT",{class:!0,name:!0});var ct=E(p);for(let H=0;H<D.length;H+=1)D[H].l(ct);ct.forEach(w),Ne.forEach(w),x=M(U),v=I(U,"DIV",{});var je=E(v);F=I(je,"DIV",{});var Xe=E(F);T=Y(Xe,"Quantity "),ae=Y(Xe,O),Xe.forEach(w),Q=M(je),L=I(je,"INPUT",{class:!0,type:!0,step:!0}),je.forEach(w),Ee=M(U),re=I(U,"DIV",{});var Le=E(re);Fe=I(Le,"H1",{});var _t=E(Fe);Oe=Y(_t,Te),_t.forEach(w),Ue=M(Le),$=I(Le,"SELECT",{class:!0,name:!0});var ut=E($);for(let H=0;H<V.length;H+=1)V[H].l(ut);ut.forEach(w),Le.forEach(w),Be=M(U),ne=I(U,"DIV",{});var He=E(ne);Pe=I(He,"H1",{});var pt=E(Pe);De=Y(pt,Me),pt.forEach(w),Je=M(He),ee=I(He,"SELECT",{class:!0,name:!0});var ft=E(ee);for(let H=0;H<C.length;H+=1)C[H].l(ft);ft.forEach(w),He.forEach(w),Ye=M(U),fe=I(U,"DIV",{});var dt=E(fe);for(let H=0;H<N.length;H+=1)N[H].l(dt);dt.forEach(w),U.forEach(w),Ce.forEach(w),Ge=M(A),ie=I(A,"DIV",{class:!0,"data-svelte-h":!0}),be(ie)!=="svelte-1i6rebt"&&(ie.innerHTML=ot),Ze=M(A),ce=I(A,"DIV",{class:!0,"data-svelte-h":!0}),be(ce)!=="svelte-jjg31m"&&(ce.innerHTML=st),Ke=M(A),de=I(A,"DIV",{class:!0});var ht=E(de);te=I(ht,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),be(te)!=="svelte-1m409f4"&&(te.innerHTML=at),ht.forEach(w),A.forEach(w),n.forEach(w),q.forEach(w),this.h()},h(){k(t,"class","flex items-center justify-center h-[45px] bg-[#f9ca03] text-white shadow-lg"),et(t,"font-family","RobotoBold"),k(o,"alt","Shipped"),k(o,"class","lg:h-[400px] lg:w-[400px] w-full shadow-lg rounded-md"),$e(o.src,s=`https://admin.souqpack.com/resources/uploads/categories/${r[1]}`)||k(o,"src",s),k(f,"class","lg:w-4/12 w-full flex justify-center pt-10"),k(d,"alt","social icon"),k(d,"class","w-8 h-8 p-1"),$e(d.src,qe=tt)||k(d,"src",qe),et(oe,"font-family","RobotoBold"),k(e,"class","w-full bg-[#FFFFFF] flex flex-row items-center rounded-md shadow-sm focus:ring-opacity-50 p-5"),k(S,"class","flex flex-col shadow-lg pt-10"),k(K,"class","flex flex-row items-center p-5"),k(X,"class","text-access"),k(p,"class","border p-2 rounded-lg w-full"),k(p,"name","option_1"),k(L,"class","mt-1 px-4 w-full py-1 rounded-md border-[#ced4da] border-2"),k(L,"type","number"),k(L,"step","1"),k($,"class","border p-2 rounded-lg w-full"),k($,"name","option_1"),k(ee,"class","border p-2 rounded-lg w-full"),k(ee,"name","option_1"),k(j,"class","grid lg:grid-cols-3 grid-cols-2 w-full pb-10 p-5 gap-4"),k(z,"class","shadow-lg rounded-md"),k(ie,"class","flex lg:flex-row flex-col shadow-lg pt-10 items-center justify-between p-5"),k(ce,"class","pt-10 grid lg:grid-cols-3 grid-cols gap-4 p-5 shadow-lg"),k(te,"type","button"),k(te,"class","bg-[#5a5a5a] mx-auto lg:w-[170px] lg:h:[15px] w-full text-white font-bold py-2 px-4 rounded"),k(de,"class","tota_input_cont tota_input_cont_less flex justify-center pt-5"),k(i,"class","lg:w-8/12 w-full h-full gap-4 pb-5"),k(m,"class","flex lg:flex-row flex-col px-20"),et(m,"color","#687188")},m(_,q){G(_,l,q),c(l,t),c(l,g),c(l,m),c(m,f),c(f,o),c(m,u),c(m,i),c(i,S),c(S,e),c(e,d),c(e,Ie),c(e,oe),c(oe,ue),c(i,ke),c(i,z),c(z,K),c(z,xe),c(z,j),c(j,W),c(W,X),c(W,h),c(W,p);for(let n=0;n<D.length;n+=1)D[n]&&D[n].m(p,null);c(j,x),c(j,v),c(v,F),c(F,T),c(F,ae),c(v,Q),c(v,L),Z(L,r[3].statics.qty),c(j,Ee),c(j,re),c(re,Fe),c(Fe,Oe),c(re,Ue),c(re,$);for(let n=0;n<V.length;n+=1)V[n]&&V[n].m($,null);c(j,Be),c(j,ne),c(ne,Pe),c(Pe,De),c(ne,Je),c(ne,ee);for(let n=0;n<C.length;n+=1)C[n]&&C[n].m(ee,null);c(j,Ye),c(j,fe);for(let n=0;n<N.length;n+=1)N[n]&&N[n].m(fe,null);c(i,Ge),c(i,ie),c(i,Ze),c(i,ce),c(i,Ke),c(i,de),c(de,te),We||(rt=[_e(p,"change",r[6]),_e(L,"input",r[10]),_e(L,"input",r[5]),_e($,"change",r[6]),_e(ee,"change",r[6]),_e(te,"click",r[7])],We=!0)},p(_,q){if(q[0]&2&&!$e(o.src,s=`https://admin.souqpack.com/resources/uploads/categories/${_[1]}`)&&k(o,"src",s),q[0]&8&&se!==(se=_[3].cat_title+"")&&le(ue,se),q[0]&4){he=B(_[2].variations);let n;for(n=0;n<he.length;n+=1){const R=yt(_,he,n);D[n]?D[n].p(R,q):(D[n]=It(R),D[n].c(),D[n].m(p,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=he.length}if(q[0]&8&&O!==(O=_[3].unit_name+"")&&le(ae,O),q[0]&8&&St(L.value)!==_[3].statics.qty&&Z(L,_[3].statics.qty),q[0]&8&&Te!==(Te=_[3].table_size_en+"")&&le(Oe,Te),q[0]&8){ge=B(_[3].db_logic.selected_table.rows);let n;for(n=0;n<ge.length;n+=1){const R=wt(_,ge,n);V[n]?V[n].p(R,q):(V[n]=kt(R),V[n].c(),V[n].m($,null))}for(;n<V.length;n+=1)V[n].d(1);V.length=ge.length}if(q[0]&8&&Me!==(Me=_[3].table_title_en+"")&&le(De,Me),q[0]&8){me=B(_[3].db_logic.selected_table.rows[_[3].db_logic.row_index].faces);let n;for(n=0;n<me.length;n+=1){const R=bt(_,me,n);C[n]?C[n].p(R,q):(C[n]=xt(R),C[n].c(),C[n].m(ee,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=me.length}if(q[0]&84){ve=B(_[2].variations[_[4]].options);let n;for(n=0;n<ve.length;n+=1){const R=mt(_,ve,n);N[n]?N[n].p(R,q):(N[n]=Ft(R),N[n].c(),N[n].m(fe,null))}for(;n<N.length;n+=1)N[n].d(1);N.length=ve.length}},i:lt,o:lt,d(_){_&&w(l),Se(D,_),Se(V,_),Se(C,_),Se(N,_),We=!1,Ot(rt)}}}function At(r){let l,t;return l=new Lt({}),{c(){Re(l.$$.fragment)},l(a){ze(l.$$.fragment,a)},m(a,g){Qe(l,a,g),t=!0},p:lt,i(a){t||(ye(l.$$.fragment,a),t=!0)},o(a){we(l.$$.fragment,a),t=!1},d(a){Ae(l,a)}}}function It(r){let l,t,a=r[58].c_title+"",g,m,f;return{c(){l=y("option"),t=y("span"),g=J(a),m=P(),this.h()},l(o){l=I(o,"OPTION",{"data-index":!0});var s=E(l);t=I(s,"SPAN",{});var u=E(t);g=Y(u,a),u.forEach(w),m=M(s),s.forEach(w),this.h()},h(){l.__value=f=r[58].c_title,Z(l,l.__value),k(l,"data-index",r[60])},m(o,s){G(o,l,s),c(l,t),c(t,g),c(l,m)},p(o,s){s[0]&4&&a!==(a=o[58].c_title+"")&&le(g,a),s[0]&4&&f!==(f=o[58].c_title)&&(l.__value=f,Z(l,l.__value))},d(o){o&&w(l)}}}function kt(r){let l,t,a=r[58].whg+"",g,m,f;return{c(){l=y("option"),t=y("span"),g=J(a),m=P(),this.h()},l(o){l=I(o,"OPTION",{"data-index":!0});var s=E(l);t=I(s,"SPAN",{});var u=E(t);g=Y(u,a),u.forEach(w),m=M(s),s.forEach(w),this.h()},h(){l.__value=f=r[58].whg,Z(l,l.__value),k(l,"data-index",r[60])},m(o,s){G(o,l,s),c(l,t),c(t,g),c(l,m)},p(o,s){s[0]&8&&a!==(a=o[58].whg+"")&&le(g,a),s[0]&8&&f!==(f=o[58].whg)&&(l.__value=f,Z(l,l.__value))},d(o){o&&w(l)}}}function xt(r){let l,t,a=r[58].title+"",g,m,f;return{c(){l=y("option"),t=y("span"),g=J(a),m=P(),this.h()},l(o){l=I(o,"OPTION",{"data-index":!0});var s=E(l);t=I(s,"SPAN",{});var u=E(t);g=Y(u,a),u.forEach(w),m=M(s),s.forEach(w),this.h()},h(){l.__value=f=r[58].title,Z(l,l.__value),k(l,"data-index",r[60])},m(o,s){G(o,l,s),c(l,t),c(t,g),c(l,m)},p(o,s){s[0]&8&&a!==(a=o[58].title+"")&&le(g,a),s[0]&8&&f!==(f=o[58].title)&&(l.__value=f,Z(l,l.__value))},d(o){o&&w(l)}}}function Et(r){let l,t,a=r[8].en+"",g,m,f;return{c(){l=y("option"),t=y("span"),g=J(a),m=P(),this.h()},l(o){l=I(o,"OPTION",{"data-index":!0});var s=E(l);t=I(s,"SPAN",{});var u=E(t);g=Y(u,a),u.forEach(w),m=M(s),s.forEach(w),this.h()},h(){l.__value=f=r[8].en,Z(l,l.__value),k(l,"data-index",r[60])},m(o,s){G(o,l,s),c(l,t),c(t,g),c(l,m)},p(o,s){s[0]&20&&a!==(a=o[8].en+"")&&le(g,a),s[0]&20&&f!==(f=o[8].en)&&(l.__value=f,Z(l,l.__value))},d(o){o&&w(l)}}}function Ft(r){let l,t=r[58].title+"",a,g,m,f,o,s=B(r[58].options),u=[];for(let i=0;i<s.length;i+=1)u[i]=Et(vt(r,s,i));return{c(){l=y("p"),a=J(t),g=P(),m=y("select");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){l=I(i,"P",{});var S=E(l);a=Y(S,t),S.forEach(w),g=M(i),m=I(i,"SELECT",{class:!0,name:!0});var e=E(m);for(let d=0;d<u.length;d+=1)u[d].l(e);e.forEach(w),this.h()},h(){k(m,"class","border p-2 rounded-lg w-full"),k(m,"name","option_1")},m(i,S){G(i,l,S),c(l,a),G(i,g,S),G(i,m,S);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(m,null);f||(o=_e(m,"change",r[6]),f=!0)},p(i,S){if(S[0]&20&&t!==(t=i[58].title+"")&&le(a,t),S[0]&20){s=B(i[58].options);let e;for(e=0;e<s.length;e+=1){const d=vt(i,s,e);u[e]?u[e].p(d,S):(u[e]=Et(d),u[e].c(),u[e].m(m,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=s.length}},d(i){i&&(w(l),w(g),w(m)),Se(u,i),f=!1,o()}}}function Ut(r){let l,t,a,g;const m=[At,Qt],f=[];function o(s,u){return s[0]?0:1}return l=o(r),t=f[l]=m[l](r),{c(){t.c(),a=gt()},l(s){t.l(s),a=gt()},m(s,u){f[l].m(s,u),G(s,a,u),g=!0},p(s,u){let i=l;l=o(s),l===i?f[l].p(s,u):(Dt(),we(f[i],1,1,()=>{f[i]=null}),Vt(),t=f[l],t?t.p(s,u):(t=f[l]=m[l](s),t.c()),ye(t,1),t.m(a.parentNode,a))},i(s){g||(ye(t),g=!0)},o(s){we(t),g=!1},d(s){s&&w(a),f[l].d(s)}}}let Bt=0,Jt="";function Yt(r,l){return parseInt(r.qty)<parseInt(l.qty)?-1:parseInt(r.qty)>parseInt(l.qty)?1:0}function Gt(r,l,t){return"#"+((1<<24)+(r<<16)+(l<<8)+t).toString(16).slice(1)}function Zt(r,l,t){let{data:a}=l;console.log("dd",a);let g=!0,m="",f={subs:[]},o={cust_image:"i.png",options:[],shipping:0,vat:15,logo_price:0},s=[],u=[],i={only_items_price:"0",stamps_price:"0",s_price:0,price:558.56,s_logo:0,logo:0,down:549.45,shipping:0,s_vat:0,vat:5945.55,delivery:504.54,total:95459.9,sub_total:0},S=0,e={cat_title:"",c_title:"",c_title_ar:"",c_descps_ar:"",c_descps_en:"",lang_id:2,table_title_ar:"",table_title_en:"",table_size_ar:"",table_size_en:"",unit_name:"",unit_name_ar:"",options:[],more_images:[],statics:{},db_logic:{table_index:0,selected_table:{rows:[]},minQty:0,row_index:0,prints:[],face_index:0,slots:[]},logo:{logo_type:0,logo_file:{file_name:"",logo_print:"UV",logo_colors:"4",logo_stamps:"4",selected:1},logo_create:{logo_name:"",logo_name_2:"",logo_colors:"4",logo_desc:"",selected:0}},color:{choose_color:{color:"#000000",selected:1},create_color:{selected:0,hex_color:"",color:{c:0,m:0,y:0,k:0}}},email:"",name:"",phone:"",total:{},sub_cat_id:0,junk_login:0,junk_login_for:""},d=0;qt(async()=>{await Ht()||(Ct(Rt+"/login"),console.log("not logedin")),t(0,g=!0),z(),qe();const h=localStorage.getItem("login_data");h!="null"&&JSON.parse(h).email});function qe(){Ie()}function Ie(b){fetch("https://admin.souqpack.com/api/fast_get_cust_cats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({lang_id:2,slug:a.props.slug,page:1,region_id:1})}).then(h=>h.json()).then(h=>{h.action=="success"?(s=h.data.categories,f=s[0],console.log("test",f),oe()):console.log("Coudn't load data")}).catch(h=>{console.log("error",h),alert("Failed")})}function oe(){console.log("c",s.length);for(var b=0;b<=s.length-1;b++)if(console.log(s[b]),s[b].selected==1){f=s[b];for(var h=!1,p=0;p<=f.subs.length-1;p++)f.subs[p].selected==1&&(t(2,o=0),t(2,o=f.subs[p]),se(),h=!0);h||t(2,o=f.subs[0]),u=o.options;for(var x=0;x<=u.length-1;x++)u[x].vals=u[x].values.split(`
`);i.s_logo=parseFloat(o.logo_price),i.s_vat=parseFloat(o.vat),i.shipping=parseFloat(o.shipping);var v=o;t(3,e.statics.pc_price=parseInt(v.pc_price),e),t(3,e.statics.stamps_price=parseInt(v.stamps_price),e),t(3,e.statics.faces=parseInt(v.faces),e),t(3,e.statics.faces_from=parseInt(v.faces_from),e),t(3,e.statics.faces_to=parseInt(v.faces_to),e),t(3,e.statics.faces_price=parseInt(v.faces_price),e),t(3,e.statics.faces_val=parseInt("0"),e),t(3,e.statics.faces_options=[],e);for(var T=parseInt(v.faces_from),O=parseInt(v.faces_to),F=T;F<=O;F++)e.statics.faces_options.push(F);t(3,e.statics.colors=parseInt(v.colors),e),t(3,e.statics.colors_from=parseInt(v.colors_from),e),t(3,e.statics.colors_to=parseInt(v.colors_from),e),t(3,e.statics.colors_price=parseInt(v.colors_price),e),t(3,e.statics.colors_val=parseInt("0"),e),t(3,e.statics.colors_options=[],e);for(var T=parseInt(v.colors_from),O=parseInt(v.colors_to),F=T;F<=O;F++)e.statics.colors_options.push(F);t(3,e.statics.sides=parseInt(v.sides),e),t(3,e.statics.sides_price=parseInt(v.sides_price),e),t(3,e.statics.sides_val=parseInt("0"),e),t(3,e.statics.base=parseInt(v.base),e),t(3,e.statics.base_price=parseInt(v.base_price),e),t(3,e.statics.base_val=parseInt("0"),e),t(3,e.statics.height=parseInt(v.height),e),t(3,e.statics.width=parseInt(v.width),e),t(3,e.statics.height_val=0,e),t(3,e.statics.width_val=0,e),pe()}}function se(){var b=o.variations[d].tables;console.log("all tablesss",b),b.sort(Yt);var h=[];b[0].qty;for(var p=0,x=0;x<=b.length-1;x++)h.push(b[x].qty);const v=localStorage.getItem("cat_title");console.log("here"),t(3,e.db_logic.selected_table=o.variations[d].tables[p],e),t(3,e.db_logic.table_index=p,e),t(3,e.db_logic.minQty=o.variations[d].tables[p].qty,e),t(3,e.statics.qty=o.variations[d].tables[p].qty,e),t(3,e.cat_title=v,e),console.log("catTitle1",e.cat_title),t(3,e.c_title=o.variations[d].c_title,e),t(3,e.c_title_ar=o.variations[d].c_title_ar,e),t(3,e.c_descps_en=o.variations[d].c_descps_en,e),t(3,e.c_descps_ar=o.variations[d].c_descps_ar,e),t(3,e.table_title_ar=o.variations[d].tables[p].table_print_name_ar,e),t(3,e.table_title_en=o.variations[d].tables[p].table_print_name_en,e),t(3,e.table_size_ar=o.variations[d].tables[p].size_ar,e),t(3,e.table_size_en=o.variations[d].tables[p].size_eng,e),o.variations[d].tables[p].unit_name==null?t(3,e.unit_name="",e):t(3,e.unit_name="("+o.variations[d].tables[p].unit_name+")",e),o.variations[d].tables[p].unit_name_ar==null?t(3,e.unit_name_ar="",e):t(3,e.unit_name_ar="("+o.variations[d].tables[p].unit_name_ar+")",e),t(3,e.more_images=o.variations[d].more_images,e),t(1,m=o.variations[d].cust_image),ke()}function ue(){if(e.statics.qty<e.db_logic.minQty){t(3,e.statics.qty=e.db_logic.minQty,e),alert("Minimum "+e.db_logic.minQty+" qauntity is required");return}for(var b=e.db_logic.slots,h=0,p=0;p<=b.length-1;p++)(e.statics.qty>=b[b.length-1]||b[p]<=e.statics.qty&&b[p+1]>e.statics.qty)&&(h=p);t(3,e.db_logic.selected_table=o.variations[d].tables[h],e),t(3,e.db_logic.table_index=h,e),t(3,e.db_logic.row_index=0,e),t(3,e.c_title=o.variations[d].c_title,e),t(3,e.c_title_ar=o.variations[d].c_title_ar,e),t(3,e.c_descps_en=o.variations[d].c_descps_en,e),t(3,e.c_descps_ar=o.variations[d].c_descps_ar,e),t(3,e.table_title_ar=o.variations[d].tables[h].table_print_name_en,e),t(3,e.table_title_en=o.variations[d].tables[h].table_print_name_en,e),t(3,e.table_size_ar=o.variations[d].tables[h].ara_title_size,e),t(3,e.table_size_en=o.variations[d].tables[h].eng_title_size,e),o.variations[d].tables[h].unit_name==null?t(3,e.unit_name="",e):t(3,e.unit_name=o.variations[d].tables[h].unit_name,e),o.variations[d].tables[h].unit_name_ar==null?t(3,e.unit_name_ar="",e):t(3,e.unit_name_ar="("+o.variations[d].tables[h].unit_name_ar+")",e),title.setTitle(o.variations[d].meta_title_en),meta.updateTag({name:"title",content:o.variations[d].meta_title_en}),meta.updateTag({name:"description",content:o.variations[d].meta_descps_en}),meta.updateTag({name:"keywords",content:o.variations[d].meta_keys_en}),seoService.updateCanonicalUrl(),pe()}function ke(){t(3,e.db_logic.face_index=0,e)}function z(){var b=e.color.create_color.color.c,h=e.color.create_color.color.m,p=e.color.create_color.color.y,x=e.color.create_color.color.k;b=b/100,h=h/100,p=p/100,x=x/100,b=b*(1-x)+x,h=h*(1-x)+x,p=p*(1-x)+x;var v=1-b,F=1-h,T=1-p;v=Math.round(255*v),F=Math.round(255*F),T=Math.round(255*T);var O=Gt(v,F,T);t(3,e.color.create_color.hex_color=O,e)}function K(b,h){for(var p=o.variations[d].options[b].options,x=0;x<=p.length-1;x++)p[x].selected=0;p[h].selected=1,t(2,o.variations[d].options[b].options=p,o),pe()}function pe(){setTimeout(()=>{if(e.db_logic.minQty>e.statics.qty){alert("Minium "+e.statics.min_qty+" is required to order");return}var b=0;let h=0;for(var p=o.variations[d].options,x=0;x<=p.length-1;x++)for(var v=p[x].options,F=0;F<=v.length-1;F++)if(v[F].selected==1){b+=Math.round(parseFloat(v[F].price)),h+=parseFloat(v[F].price);break}var T=e.statics,O=e.db_logic;T.qty*h,parseInt(O.selected_table.rows[O.row_index].faces[O.face_index].print_index)+1;var ae=0,Q=O.selected_table.rows[O.row_index].faces[O.face_index].price*1;Q=Q+h,Q=Math.round(Q*100)/100,t(3,e.statics.pc_price=Q,e);var L=Q*T.qty,Ee=L+ae;i.logo=0,i.shipping=parseFloat(o.shipping),L=Ee+h,i.only_items_price=L.toFixed(2),i.s_price=L+ae,i.s_price=parseFloat(i.s_price.toFixed(2)),console.log("total--->",i),xe()},500)}function xe(){console.log("total---33>",i),i.price=i.s_price;var b=i.price+i.shipping+i.logo,h=i.s_vat/100;h=0,i.vat=Math.round(h),b=h+b;var p=Math.round(b/2);i.down=p,i.sub_total=Math.round(b),i.total=Math.round(p),t(0,g=!1)}function j(){if(console.log("here"),e.color.choose_color.color==""){alert("Your must choose a color");return}for(var b=[],h=o.variations[d].options,p=0;p<=h.length-1;p++)for(var x=h[p].options,v=0;v<=x.length-1;v++)if(x[v].selected==1){var F,F={title:h[p].title,value:x[v].en,id:h[p].id,price:x[v].price};b.push(F)}t(3,e.options=b,e),t(3,e.logo.logo_type=S,e),t(3,e.total=i,e),t(3,e.sub_cat_id=o.id,e),t(3,e.junk_login=Bt,e),t(3,e.junk_login_for=Jt,e),zt(e).then(T=>T.json()).then(T=>{console.log("Result"),console.log(T),T.action=="success"?alert("Your Custom Order #"+T.order_id+" has been processed, Please proceed with the payment to complete order."):alert(T.error)}).catch(T=>{console.log("Result"),console.log(T),alert("Something went wrong with this request, please try again later.")})}let W=[{en:"Option 1",ar:"خيار 1"},{en:"Option 2",ar:"خيار 2"},{en:"Option 3",ar:"خيار 3"}];function X(){e.statics.qty=St(this.value),t(3,e)}return r.$$set=b=>{"data"in b&&t(9,a=b.data)},[g,m,o,e,d,ue,K,j,W,a,X]}let Kt=class extends Pt{constructor(l){super(),Mt(this,l,Zt,Ut,Tt,{data:9},null,[-1,-1,-1])}};function Wt(r){let l,t,a,g,m,f,o;return t=new Nt({props:{data:r[0]}}),g=new Kt({props:{data:r[0]}}),f=new jt({props:{data:r[0]}}),{c(){l=y("main"),Re(t.$$.fragment),a=P(),Re(g.$$.fragment),m=P(),Re(f.$$.fragment),this.h()},l(s){l=I(s,"MAIN",{class:!0});var u=E(l);ze(t.$$.fragment,u),a=M(u),ze(g.$$.fragment,u),m=M(u),ze(f.$$.fragment,u),u.forEach(w),this.h()},h(){k(l,"class","bg-[#fff]")},m(s,u){G(s,l,u),Qe(t,l,null),c(l,a),Qe(g,l,null),c(l,m),Qe(f,l,null),o=!0},p(s,[u]){const i={};u&1&&(i.data=s[0]),t.$set(i);const S={};u&1&&(S.data=s[0]),g.$set(S);const e={};u&1&&(e.data=s[0]),f.$set(e)},i(s){o||(ye(t.$$.fragment,s),ye(g.$$.fragment,s),ye(f.$$.fragment,s),o=!0)},o(s){we(t.$$.fragment,s),we(g.$$.fragment,s),we(f.$$.fragment,s),o=!1},d(s){s&&w(l),Ae(t),Ae(g),Ae(f)}}}function Xt(r,l,t){let{data:a}=l;return r.$$set=g=>{"data"in g&&t(0,a=g.data)},[a]}class rl extends Pt{constructor(l){super(),Mt(this,l,Xt,Wt,Tt,{data:0})}}export{rl as component};