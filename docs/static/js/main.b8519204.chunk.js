(this["webpackJsonpproyecto-ecommerce"]=this["webpackJsonpproyecto-ecommerce"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(35),i=c.n(r),s=(c(43),c(44),c(11)),o=(c(45),c(46),c(36)),j=c(37),l=c(2),b=function(){return Object(l.jsx)("a",{href:"",children:Object(l.jsx)(o.a,{className:"cart",icon:j.a})})},d=c(14),u=c(20),O=c(32),m=a.a.createContext([]),h=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(l.jsx)(m.Provider,{value:[a,function(){return a.reduce((function(e,t){return e+t.quantity}),0)},function(e,t){var c=!1,n=a.map((function(n){return n.id===e.id&&(n.quantity=n.quantity+t,n.subtotal=n.quantity*n.price,c=!0),n}));r(c?n:[].concat(Object(O.a)(a),[Object(u.a)(Object(u.a)({},e),{},{quantity:t,subtotal:e.price*t})]))},function(){r([])},function(e){a.splice(a.findIndex((function(t){return t.id===e})),1),r(Object(O.a)(a))},function(){return a.reduce((function(e,t){return e+t.price*t.quantity}),0)}],children:e.children})},x=function(){var e=Object(n.useContext)(m),t=Object(s.a)(e,6),c=(t[0],t[1]);t[2],t[3],t[4],t[5];return Object(l.jsx)("header",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark container-fluid p-3",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"CLOTHES"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Productos"})})}),Object(l.jsx)(d.b,{to:"/categories",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:"Categor\xedas"})})})]}),Object(l.jsx)("form",{className:"d-flex",children:Object(l.jsx)(d.b,{to:"/cart",children:Object(l.jsxs)("a",{className:"text-white",children:[Object(l.jsx)(b,{}),c()>0?c():Object(l.jsx)("p",{})]})})})]})]})})})},p=(c(54),function(){return Object(l.jsx)("p",{className:"footer",children:"Realizado por Agust\xedn Ammazzagatti - Todos los Derechos Reservados."})}),f=(c(55),c(56),function(e){return console.log(e),Object(l.jsxs)("div",{className:"col-12 col-md-6 col-xl-4 mb-4 itemList",children:[Object(l.jsx)("img",{src:e.image,alt:"Image"}),Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"$"}),e.price]}),Object(l.jsx)(d.b,{to:"/item/".concat(e.id),children:Object(l.jsx)("button",{className:"btn btn-success",children:"Ver Producto"})})]})}),g=c(31),v=(c(62),g.a.initializeApp({apiKey:"AIzaSyB0i-mrGkJq4izZdILwyziP6IKaKEX_ANA",authDomain:"proyecto-ecommerce-28108.firebaseapp.com",projectId:"proyecto-ecommerce-28108",storageBucket:"proyecto-ecommerce-28108.appspot.com",messagingSenderId:"1059039972058",appId:"1:1059039972058:web:464508fc1b9beef2ff33e3"})),N=function(){return g.a.firestore(v)},y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){N().collection("items").get().then((function(e){0===e.size&&j(!0),a(e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())})))})).catch((function(e){return console.error("Firestore error:",e)}))}),[]),o?Object(l.jsx)("p",{children:"Esta p\xe1gina actualmente no tiene productos"}):c.map((function(e){return Object(l.jsx)(f,{price:e.price,id:e.id,title:e.title,image:e.image})}))},C=c(9),I=(c(63),function(e){e.initial,e.stock;var t=e.onAdd,c=Object(n.useState)(1),a=Object(s.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){r<0?i(0):(11==r&&i(10),t(r))}),[r]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"m-1",onClick:function(){return i(r-1)},children:"-"}),r,Object(l.jsx)("button",{className:"m-1",onClick:function(){return i(r+1)},children:"+"})]}),Object(l.jsx)("div",{})]})}),k=function(e){var t=Object(n.useContext)(m),c=Object(s.a)(t,6),a=(c[0],c[1],c[2]),r=(c[3],c[4],c[5],Object(n.useState)(0)),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(l.jsxs)("div",{className:"col-12 mt-5 itemDetail",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:e.image,alt:"Image"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("p",{className:"itemPrice",children:["$",e.price]}),Object(l.jsx)("p",{children:"Indumentaria de algod\xf3n con estampa."}),Object(l.jsx)(I,{initial:1,stock:5,onAdd:function(e){j(e)}}),Object(l.jsxs)("button",{className:"btn btn-success btn-sm mt-3",onClick:function(){return a(e,o)},children:[" ","Agregar al Carrito : ",o]})]})]})},S=function(){var e=Object(C.f)().id,t=Object(n.useState)(null),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){N().collection("items").doc(e).get().then((function(e){var t=e.data();r(t)}))}),[]),Object(l.jsx)(l.Fragment,{children:a?Object(l.jsx)(k,{price:a.price,id:e,title:a.title,image:a.image}):Object(l.jsx)("p",{children:"Item no encontrado..."})})},E=(c(64),function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"text-center mt-3",children:"Categor\xedas de Productos"}),Object(l.jsxs)("div",{className:"container category mt-5",children:[Object(l.jsxs)("div",{className:"category-border",children:[Object(l.jsx)("h2",{children:"Remeras"}),Object(l.jsx)("p",{children:"Ver cat\xe1logo de remeras"}),Object(l.jsx)(d.b,{to:"/category/1",children:Object(l.jsx)("button",{className:"btn btn-dark mt-5",children:"Ingrese aqu\xed"})})]}),Object(l.jsxs)("div",{className:"category-border",children:[Object(l.jsx)("h2",{children:"Calcetines"}),Object(l.jsx)("p",{children:"Ver cat\xe1logo de calcetines"}),Object(l.jsx)(d.b,{to:"/category/2",children:Object(l.jsx)("button",{className:"btn btn-dark mt-5",children:"Ingrese aqu\xed"})})]})]})]})});c(65);var q=function(){var e=Object(n.useContext)(m),t=Object(s.a)(e,6),c=t[0],a=(t[1],t[2],t[3]),r=t[4],i=t[5];Object(n.useEffect)((function(){console.log(c)}));var o=Object(n.useState)(0),j=Object(s.a)(o,2),b=j[0],u=j[1],O=Object(n.useState)(),h=Object(s.a)(O,2),x=h[0],p=h[1],f=Object(n.useState)(),g=Object(s.a)(f,2),v=g[0],y=g[1],C=Object(n.useState)(),I=Object(s.a)(C,2),k=I[0],S=I[1];return Object(n.useEffect)((function(){b&&alert(b)}),[b]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"mt-3",children:"Detalle de tu Carrito"}),c.length>0?c.map((function(e){return Object(l.jsxs)("div",{className:"col-12 col-md-6 col-xl-4 mb-4 itemList",children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{children:["Item:",e.title]}),Object(l.jsxs)("p",{children:["Cantidad:",e.quantity]}),Object(l.jsxs)("p",{children:["Precio:$",e.price]}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{height:100,src:e.image,alt:"Image"})}),Object(l.jsx)("button",{onClick:function(){return r(c.id)},class:"btn btn-danger btn-sm",children:"Eliminar Producto"}),Object(l.jsx)("hr",{})]})})):Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Carrito vac\xedo - Comience a Comprar!"}),Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("button",{className:"btn btn-dark btn-sm",children:"Volver a p\xe1gina principal"})})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn btn-danger btn-sm mt-3 mb-3",onClick:function(){return a()},children:"Vaciar Carrito"})}),Object(l.jsxs)("h4",{className:"mt-3",children:["Importe Total: $ ",i()]}),Object(l.jsxs)("div",{className:"mt-5",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Nombre:"}),Object(l.jsx)("input",{className:"ml-2",type:"name",id:"name",name:"name",placeholder:"Tu Nombre",onBlur:function(e){return p(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Email:"}),Object(l.jsx)("input",{className:"ml-2",type:"email",id:"email",name:"email",placeholder:"Tu Correo Electr\xf3nico",onBlur:function(e){return y(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Tel\xe9fono Celular:"}),Object(l.jsx)("input",{className:"ml-2",type:"phone",id:"phone",name:"phone",placeholder:"Tu Tel\xe9fono",onBlur:function(e){return S(e.target.value)},required:!0})]}),Object(l.jsx)("button",{onClick:function(){var e=N().collection("orders"),t={buyer:{name:x,email:v,phone:k},products:c,total:c.reduce((function(e,t){return e+t.subtotal}),0)};e.add(t).then((function(e){var t=e.id;u(t)})).catch((function(e){console.log("error"+e)}))},className:"btn btn-dark btn-sm mb-5 mt-3",children:"Finalizar Compra"})]})]})},T=function(){var e=Object(C.f)().categoryId,t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),j=o[0],b=o[1];return Object(n.useEffect)((function(){N().collection("items").where("categoryId","==",Number(e)).get().then((function(e){0===e.size&&b(!0),r(e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())})))})).catch((function(e){return console.error("Firestore error:",e)}))}),[]),j?Object(l.jsx)("p",{children:"Esta p\xe1gina actualmente no tiene productos"}):a.map((function(e){return Object(l.jsx)(f,{price:e.price,id:e.id,title:e.title,image:e.image})}))};var z=function(){return Object(l.jsx)(h,{children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(C.c,{children:[Object(l.jsxs)(C.a,{exact:!0,path:"/",children:[Object(l.jsx)(y,{}),Object(l.jsx)(p,{})]}),Object(l.jsx)(C.a,{path:"/item/:id",children:Object(l.jsx)(S,{})}),Object(l.jsx)(C.a,{path:"/categories",children:Object(l.jsx)(E,{})}),Object(l.jsx)(C.a,{path:"/category/:categoryId",children:Object(l.jsx)(T,{})}),Object(l.jsx)(C.a,{path:"/cart",children:Object(l.jsx)(q,{})})]})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),P()}},[[66,1,2]]]);
//# sourceMappingURL=main.b8519204.chunk.js.map