(this["webpackJsonpboard-licores"]=this["webpackJsonpboard-licores"]||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(23),i=c.n(a),s=c(116),o=c(109),l=c(114),j=c(3),d=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(s.a,{bg:"dark",variant:"dark",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(s.a.Brand,{href:"#home",children:"Navbar"}),Object(j.jsxs)(l.a,{className:"me-auto",children:[Object(j.jsx)(l.a.Link,{href:"#home",children:"Home"}),Object(j.jsx)(l.a.Link,{href:"#features",children:"Features"}),Object(j.jsx)(l.a.Link,{href:"#pricing",children:"Pricing"})]})]})})})},b=c(7),h=c(110),x=c(75),O=c(117),u=c(111),m=function(){var e=function(e){var t=Object(r.useState)({data:null,loading:!0,error:null}),c=Object(b.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){a({loading:!1,error:null,data:e})}))}),[e]),n}("https://api-licores.herokuapp.com/licores"),t=(e.loading,e.data),c=[];document.querySelectorAll(".text-center").forEach((function(e){e.addEventListener("click",a)}));var a=function(e){var t=e.target.closest(".item"),c=t.querySelector(".card-title").textContent,r=t.querySelector(".card-description").textContent,n=t.querySelector(".card-precio").textContent,a=t.querySelector(".card-img").src;i(c,r,n,a)},i=function(e,t,c,r){};return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(h.a,{children:t&&t?t.map((function(e,t){return Object(j.jsx)(x.a,{xs:4,style:{marginTop:"10px",marginBottom:"10px"},children:Object(j.jsx)("div",{className:"item",children:Object(j.jsxs)(O.a,{className:"text-center",style:{height:"800px"},children:[Object(j.jsx)(O.a.Img,{variant:"top",src:e.url,width:"150px !important",height:"200px !importan",className:"card-img"}),Object(j.jsxs)(O.a.Body,{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column "},children:[Object(j.jsx)(O.a.Title,{className:"card-title",children:e.nombre}),Object(j.jsx)(O.a.Text,{className:"card-description",children:e.descripcion}),Object(j.jsxs)(O.a.Text,{className:"card-precio",children:[e.precio," $"]})]}),Object(j.jsx)(O.a.Footer,{className:"text-muted",children:Object(j.jsx)(u.a,{variant:"primary",style:{width:"300px"},onClick:function(){c.push()},id:e.id,children:"Comprar"})})]})})},t)})):Object(j.jsx)("h1",{children:"No hay datos"})})})})},p=c(115);var f=function(){return Object(j.jsxs)(p.a,{style:{marginLeft:"20%",marginTop:"30px",marginRight:"20%",marginBottom:"30px"},children:[Object(j.jsx)(p.a.Item,{children:Object(j.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/hMp95K3/slider-3.jpg",alt:"First slide",width:"1000px",height:"500px"})}),Object(j.jsx)(p.a.Item,{children:Object(j.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/yfcYHhk/slider-1.jpg",alt:"Second slide",width:"1000px",height:"500px"})}),Object(j.jsx)(p.a.Item,{children:Object(j.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/1T27Z9m/slider-2.jpg",alt:"Third slide",width:"1000px",height:"500px"})})]})},g=c(112),v=c(11),y=c(27),N=c(34),E="AGREGAR_LICOR",k="BORRAR_LICOR",C=c(77),S=c.n(C),I=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),c=Object(b.a)(t,2),n=c[0],a=c[1];return[n,function(e){var t=e.target;a(Object(y.a)(Object(y.a)({},n),{},Object(v.a)({},t.name,t.value)))},function(){a(e)}]}({nombre:"",producto:""}),t=Object(b.a)(e,3),c=t[0],a=t[1],i=t[2],s=Object(N.b)(),l=function(e){s(function(e){return{type:E,payload:e}}(e))},d=c.nombre,O=c.producto,m=Object(N.c)((function(e){return e.productos}));return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(x.a,{xs:6,children:Object(j.jsxs)(g.a,{onSubmit:function(e){e.preventDefault(),i(),l({id:S()(),nombre:d,producto:O})},children:[Object(j.jsx)("h1",{children:"Registrate para Obtener Nuestras Promociones"}),Object(j.jsxs)(g.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(g.a.Label,{children:"Ingrese su Nombre"}),Object(j.jsx)(g.a.Control,{type:"text",placeholder:"Enter email",name:"nombre",value:d,onChange:a}),Object(j.jsx)(g.a.Text,{className:"text-muted",children:"\xbfCual es tu nombre?"})]}),Object(j.jsxs)(g.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(g.a.Label,{children:"Ingrese su Direccion"}),Object(j.jsx)(g.a.Control,{type:"text",placeholder:"Direccion de domicilio",name:"producto",value:O,onChange:a}),Object(j.jsx)(g.a.Text,{className:"text-muted",children:"\xbfEn donde vives?"})]}),Object(j.jsx)(u.a,{variant:"primary",type:"submit",children:"Enviar"})]})}),Object(j.jsx)(x.a,{xs:6,children:Object(j.jsx)("div",{className:"card mt-5",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h2",{children:"Registro de Usuarios Promocionados"}),Object(j.jsx)("div",{className:"lista-citas",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Nombre del Cliente"}),Object(j.jsx)("th",{scope:"col",children:"Producto Seleccionado"})]})}),Object(j.jsx)("tbody",{children:m.licores.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.nombre}),Object(j.jsx)("td",{children:e.producto}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:function(){return s((t=e.id,{type:k,payload:t}));var t},children:"Borrar"})})]},e.id)}))})]})})]})})})]})})})},_=c(56),w=c(16),T={licores:[]},R=Object(_.a)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(y.a)(Object(y.a)({},e),{},{licores:[].concat(Object(w.a)(e.licores),[t.payload])});case k:return Object(y.a)(Object(y.a)({},e),{},{licores:e.licores.filter((function(e){return e.id!==t.payload}))});default:return e}}}),L=Object(_.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),B=c(113);var D=function(){return Object(j.jsx)(N.a,{store:L,children:Object(j.jsx)(B.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(f,{}),Object(j.jsx)(m,{}),Object(j.jsx)(I,{})]})})})};c(102);i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.73e5fff4.chunk.js.map