(this["webpackJsonpboard-licores"]=this["webpackJsonpboard-licores"]||[]).push([[0],{112:function(e,t,c){"use strict";c.r(t);var n,r=c(0),i=c.n(r),a=c(23),s=c.n(a),j=c(32),o=c(125),l=c(119),d=c(3),b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(d.jsx)(l.a,{children:Object(d.jsx)(o.a.Brand,{href:"#home",children:"Licores Board Redux"})})})})},h=c(8),O=c(127),x=c(120),u=c(86),m=c(33),p=Object(m.a)(O.a)(n||(n=Object(j.a)(["\n    height: 600px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),f=function(){var e=function(e){var t=Object(r.useState)({data:null,loading:!0,error:null}),c=Object(h.a)(t,2),n=c[0],i=c[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i({loading:!1,error:null,data:e})}))}),[e]),n}("https://api-licores.herokuapp.com/licores"),t=(e.loading,e.data);return Object(d.jsx)(i.a.Fragment,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(x.a,{children:t&&t?t.map((function(e,t){return Object(d.jsx)(u.a,{xs:4,style:{marginTop:"10px",marginBottom:"10px"},children:Object(d.jsx)("div",{className:"item",children:Object(d.jsxs)(p,{className:"text-center",children:[Object(d.jsx)(O.a.Img,{variant:"top",src:e.url,width:"150px !important",className:"card-img",style:{width:"300px",height:"250px"}}),Object(d.jsxs)(O.a.Body,{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column "},children:[Object(d.jsx)(O.a.Title,{className:"card-title",children:e.nombre}),Object(d.jsx)(O.a.Text,{className:"card-description",children:e.descripcion})]}),Object(d.jsxs)(O.a.Footer,{style:{width:"100%"},children:[e.precio," $"]})]})})},t)})):Object(d.jsx)("h1",{children:"No se han podido cargar los productos"})})})})},g=c(126);var v,y,N=function(){return Object(d.jsxs)(g.a,{style:{marginLeft:"20%",marginTop:"30px",marginRight:"20%",marginBottom:"30px"},children:[Object(d.jsx)(g.a.Item,{children:Object(d.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/hMp95K3/slider-3.jpg",alt:"First slide",width:"1000px",height:"500px"})}),Object(d.jsx)(g.a.Item,{children:Object(d.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/yfcYHhk/slider-1.jpg",alt:"Second slide",width:"1000px",height:"500px"})}),Object(d.jsx)(g.a.Item,{children:Object(d.jsx)("img",{className:"d-block ",src:"https://i.ibb.co/1T27Z9m/slider-2.jpg",alt:"Third slide",width:"1000px",height:"500px"})})]})},w=c(121),E=c(122),R=c(123),I=c(11),_=c(31),T=c(34),B="AGREGAR_LICOR",C="BORRAR_LICOR",k=c(87),S=c.n(k),D=m.a.h1(v||(v=Object(j.a)(["\n    text-align: center;\n    font-size: 34px;\n    margin-top: 100px;\n\n"]))),L=m.a.div(y||(y=Object(j.a)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n"])));function F(){var e=Object(r.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),c=Object(h.a)(t,2),n=c[0],i=c[1];return[n,function(e){var t=e.target;i(Object(_.a)(Object(_.a)({},n),{},Object(I.a)({},t.name,t.value)))},function(){i(e)}]}({nombre:"",producto:""}),a=Object(h.a)(i,3),s=a[0],j=a[1],o=a[2],l=Object(T.b)(),b=function(e){l(function(e){return{type:B,payload:e}}(e))},O=s.nombre,x=s.producto;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(D,{children:"Registrate para Recibir Nuestras Promociones"})}),Object(d.jsx)(L,{children:Object(d.jsx)(w.a,{variant:"primary",onClick:function(){return n(!0)},children:"\xa1Conseguir mi Promoci\xf3n!"})}),Object(d.jsxs)(E.a,{show:c,onHide:function(){return n(!1)},animation:!1,children:[Object(d.jsx)(E.a.Header,{closeButton:!0,children:Object(d.jsx)(E.a.Title,{children:"Rellena tus datos"})}),Object(d.jsx)(E.a.Body,{children:Object(d.jsxs)(R.a,{onSubmit:function(e){e.preventDefault(),o(),b({id:S()(),nombre:O,producto:x})},children:[Object(d.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(d.jsx)(R.a.Label,{children:"Ingrese su Nombre"}),Object(d.jsx)(R.a.Control,{type:"text",placeholder:"Enter email",name:"nombre",value:O,onChange:j}),Object(d.jsx)(R.a.Text,{className:"text-muted",children:"\xbfCual es tu nombre?"})]}),Object(d.jsxs)(R.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(d.jsx)(R.a.Label,{children:"Ingrese su Direccion"}),Object(d.jsx)(R.a.Control,{type:"text",placeholder:"Direccion de domicilio",name:"producto",value:x,onChange:j}),Object(d.jsx)(R.a.Text,{className:"text-muted",children:"\xbfEn donde vives?"})]}),Object(d.jsx)(w.a,{variant:"primary",type:"submit",children:"Enviar"})]})})]})]})}var A,G=function(){var e=Object(T.b)(),t=Object(T.c)((function(e){return e.productos}));return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)(F,{})}),Object(d.jsx)(l.a,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(u.a,{xs:12,children:Object(d.jsx)("div",{className:"card mt-5",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h2",{children:"Registro de Usuarios Promocionados"}),Object(d.jsx)("div",{className:"lista-citas",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Nombre del Cliente"}),Object(d.jsx)("th",{scope:"col",children:"Direccion"})]})}),Object(d.jsx)("tbody",{children:t.licores.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.nombre}),Object(d.jsx)("td",{children:t.producto}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return e((c=t.id,{type:C,payload:c}));var c},children:"Borrar"})})]},t.id)}))})]})})]})})})})})]})},P=c(43),X=c(18),H={licores:[]},U=Object(P.a)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(_.a)(Object(_.a)({},e),{},{licores:[].concat(Object(X.a)(e.licores),[t.payload])});case C:return Object(_.a)(Object(_.a)({},e),{},{licores:e.licores.filter((function(e){return e.id!==t.payload}))});default:return e}}}),J=Object(P.b)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=c(124),V=m.a.div(A||(A=Object(j.a)(["\n    font-family: 'Open Sans', sans-serif;\n"])));var z=function(){return Object(d.jsx)(T.a,{store:J,children:Object(d.jsx)(M.a,{children:Object(d.jsxs)(V,{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(N,{}),Object(d.jsx)(f,{}),Object(d.jsx)(G,{})]})})})};c(111);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.086c1a02.chunk.js.map