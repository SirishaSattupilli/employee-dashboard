(this["webpackJsonpemployee-dashboard"]=this["webpackJsonpemployee-dashboard"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(31),s=a.n(r),l=(a(37),a(38),a(39),a(4)),i=a.n(l),o=a(10),u=a(12),d=a(11),m=a.n(d),j=a(5),p=a(16),b=a(0),h=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://localhost:3003/employees");case 2:t=e.sent,n(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("http://localhost:3003/employees/".concat(t));case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{className:"text-center",children:"Home Page"}),Object(b.jsxs)("table",{className:"table border shadow table-striped",children:[Object(b.jsx)("caption",{children:"List of employees"}),Object(b.jsx)("thead",{className:"thead-dark",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Employee Id"}),Object(b.jsx)("th",{scope:"col",children:"Login"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Salary"}),Object(b.jsx)("th",{scope:"col",children:"Action"})]})}),Object(b.jsx)("tbody",{children:a.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:e.id}),Object(b.jsx)("td",{children:e.username}),Object(b.jsx)("td",{children:e.fullName}),Object(b.jsx)("td",{children:e.salary}),Object(b.jsxs)("td",{children:[Object(b.jsx)(j.b,{className:"btn btn-primary me-2",to:"/employees/".concat(e.id),children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(j.b,{className:"btn btn-outline-primary me-2",to:"/employees/edit/".concat(e.id),children:Object(b.jsx)(p.c,{})}),Object(b.jsx)(j.b,{className:"btn btn-danger",onClick:function(){return s(e.id)},children:Object(b.jsx)(p.d,{})})]})]})}))})]})]})})},x=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{children:"About Page"}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})},O=function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"py-4",children:[Object(b.jsx)("h1",{children:"Contact Page"}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})},f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Dashboard"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.c,{className:"nav-link","aria-current":"page",to:"/",exact:!0,children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.c,{className:"nav-link",to:"/about",exact:!0,children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.c,{className:"nav-link",to:"/contact",exact:!0,children:"Contact"})})]})})]}),Object(b.jsx)(j.b,{className:"btn btn-outline-light",to:"/employees/add",children:"Add Employee"})]})})})},v=a(2),g=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Page Not Found"})})},N=a(14),y=a(15),E=function(){var e=Object(v.f)(),t=Object(c.useState)({id:"",username:"",fullName:"",salary:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=function(e){r(Object(y.a)(Object(y.a)({},n),{},Object(N.a)({},e.target.name,e.target.value)))},l=n.username,d=n.fullName,j=n.salary,p=function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,m.a.post("https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees",n);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Add Employee"}),Object(b.jsxs)("form",{onSubmit:function(e){return p(e)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter Employee ID",name:"id",onChange:function(e){return s(e)}})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter UserName",name:"username",value:l,onChange:function(e){return s(e)}})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter FullName",name:"fullName",value:d,onChange:function(e){return s(e)}})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter Salary",name:"salary",value:j,onChange:function(e){return s(e)}})}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("button",{className:"btn btn-primary btn-block",placeholder:"Another input placeholder",type:"submit",children:"Add Employee"})})]})]})})},q=function(){var e=Object(v.f)(),t=Object(v.g)().id,a=Object(c.useState)({username:"",fullName:"",salary:""}),n=Object(u.a)(a,2),r=n[0],s=n[1],l=r.username,d=r.fullName,j=r.salary,p=function(e){s(Object(y.a)(Object(y.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees/".concat(t));case 2:a=e.sent,s(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var h=function(){var a=Object(o.a)(i.a.mark((function a(c){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.next=3,m.a.put("https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees/".concat(t),r);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"w-75 mx-auto shadow p-5 row justify-content-center",children:[Object(b.jsx)("h2",{className:"text-center mb-4",children:"Edit Employee"}),Object(b.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{label:!0,htmlFor:"exampleEmployeeId",class:"col-lg-2 col-form-label",children:"Employee Id"}),Object(b.jsx)("div",{class:"col-lg-5",children:Object(b.jsx)("input",{type:"text",className:"form-control-plaintext form-control-lg mb-3",placeholder:"Enter Employee ID",name:"id",value:t})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{label:!0,htmlFor:"exampleUserName",class:"col-lg-2 col-form-label",children:"UserName"}),Object(b.jsx)("div",{class:"col-lg-5",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter UserName",name:"username",value:l,onChange:function(e){return p(e)}})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{label:!0,htmlFor:"exampleFullName",class:"col-lg-2 col-form-label",children:"FullName"}),Object(b.jsx)("div",{class:"col-lg-5",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter FullName",name:"fullName",value:d,onChange:function(e){return p(e)}})})]}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("label",{label:!0,htmlFor:"exampleSalary",class:"col-lg-2 col-form-label",children:"Salary"}),Object(b.jsx)("div",{class:"col-lg-5",children:Object(b.jsx)("input",{type:"text",className:"form-control form-control-lg mb-3",placeholder:"Enter Salary",name:"salary",value:j,onChange:function(e){return p(e)}})})]}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("button",{className:"btn btn-warning btn-block",placeholder:"Another input placeholder",type:"submit",children:"Update Employee"})})]})]})})},w=function(){var e=Object(c.useState)({eid:"",username:"",fullName:"",salary:""}),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(v.g)().id;return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://my-json-server.typicode.com/sirishasattupilli/employee-dashboard/employees/".concat(r));case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(b.jsxs)("div",{className:"container py-4",children:[Object(b.jsxs)(j.b,{className:"btn btn-primary",to:"/",children:[Object(b.jsx)(p.b,{})," Back to HomePage"]}),Object(b.jsxs)("h1",{className:"display-4",children:["Employee Id: ",r]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("ul",{className:"list-group w-50",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Id: "}),r]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Username: "}),a.username]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Full Name: "}),a.fullName]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsx)("strong",{children:"Salary: "}),a.salary]})]})]})};var k=function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(v.a,{exact:!0,path:"/about",component:x}),Object(b.jsx)(v.a,{exact:!0,path:"/contact",component:O}),Object(b.jsx)(v.a,{exact:!0,path:"/employees/add",component:E}),Object(b.jsx)(v.a,{exact:!0,path:"/employees/edit/:id",component:q}),Object(b.jsx)(v.a,{exact:!0,path:"/employees/:id",component:w}),Object(b.jsx)(v.a,{component:g})]})]})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.db55057d.chunk.js.map