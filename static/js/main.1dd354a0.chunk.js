(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,n){e.exports={wrapper:"Header_wrapper__2vppK",menu:"Header_menu__2O9gG",menuActive:"Header_menuActive__JM5xo",menuList:"Header_menuList__1vXxs",menuBtn:"Header_menuBtn__2oXqC",navLink:"Header_navLink__1qV4Q"}},function(e,t,n){e.exports={wrapper:"Message_wrapper__3YMqA",name:"Message_name__JnYl8",text:"Message_text__Ng3Fp",time:"Message_time__JwyDb",avatar:"Message_avatar__1HCv-",message:"Message_message__2iOR2",angle:"Message_angle__3IvQE"}},,,,,,function(e,t,n){e.exports={someClass:"Affairs_someClass__1J_a8",btn:"Affairs_btn__2o3pf"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3Er5P",errorInput:"SuperInputText_errorInput__RxxTL",error:"SuperInputText_error__3Y04V"}},function(e,t,n){e.exports={blue:"HW4_blue__3zkzz",column:"HW4_column__386_V",testSpanError:"HW4_testSpanError__21Ep_",HW:"HW4_HW__27nS9"}},,function(e,t,n){e.exports={red:"SuperButton_red__2z5_h",default:"SuperButton_default__2gq-T",pulsate:"SuperButton_pulsate__30eyB"}},function(e,t,n){e.exports={greeting:"Greeting_greeting__3dKW2",someClass:"Greeting_someClass__3Mm0s",error:"Greeting_error__3WJln"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3ILZm",spanClassName:"SuperCheckbox_spanClassName__17ATg"}},,function(e,t,n){e.exports={App:"App_App__3YN-p"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(19),c=n.n(s),i=(n(26),n(20)),o=n.n(i),l=n(3),j=n(5),u=n.n(j),b=n(7),d=n(0);var h=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(d.jsx)("div",{className:u.a.wrapper,children:Object(d.jsxs)("div",{className:n?u.a.menuActive:u.a.menu,children:[Object(d.jsx)("button",{className:u.a.menuBtn,onClick:function(e){return r(!n)}}),Object(d.jsxs)("div",{className:u.a.menuList,children:[Object(d.jsx)(b.b,{to:"/pre-junior",className:u.a.navLink,children:" PreJunior "}),Object(d.jsx)(b.b,{to:"/Junior",className:u.a.navLink,children:" Junior "}),Object(d.jsx)(b.b,{to:"/Junior-plus",className:u.a.navLink,children:" Junior Plus "})]})]})})},m=n(2),x=n(6),O=n.n(x);var p=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Roboto+Mono:ital,wght@1,300&family=Ubuntu:ital,wght@1,300&display=swap');"}),Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("img",{className:O.a.avatar,alt:"avatar",src:e.avatar}),Object(d.jsx)("div",{className:O.a.angle}),Object(d.jsxs)("div",{className:O.a.message,children:[Object(d.jsx)("p",{className:O.a.name,children:e.name}),Object(d.jsx)("p",{className:O.a.text,children:e.message}),Object(d.jsx)("p",{className:O.a.time,children:e.time})]})]})]})};var _=function(){var e="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",t="Some Name",n="some text",a="22:00";return Object(d.jsxs)("div",{style:{backgroundColor:"#f19066"},children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(p,{avatar:e,name:t,message:n,time:a}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(12),v=n.n(f),g=n(9),C=n(10),k=n(16),N=n.n(k),w=function(e){var t=e.red,n=e.className,a=Object(C.a)(e,["red","className"]),r="".concat(t?N.a.red:N.a.default," ").concat(n);return Object(d.jsx)("button",Object(g.a)({className:r},a))};var y=function(e){return Object(d.jsxs)("div",{className:v.a.someClass,children:[e.affair.name," ----",e.affair.priority,Object(d.jsx)(w,{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:v.a.btn,children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(w,{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(w,{onClick:function(){e.setFilter("low")},children:"Low"})]})},A=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var H=function(){var e=Object(a.useState)(A),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)("all"),c=Object(l.a)(s,2),i=c[0],o=c[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(d.jsxs)("div",{className:v.a.someClass,children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(21),T=n(17),M=n.n(T),W=n(13),I=n.n(W),E=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=(e.placeholder,Object(C.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","placeholder"])),l="".concat(I.a.error," ").concat(i||""),j="".concat(s?I.a.errorInput:I.a.superInput," ").concat(c);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(g.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),s&&Object(d.jsx)("span",{className:l})]})},L=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,s=e.totalUsers;return Object(d.jsx)("div",{className:M.a.greeting,children:Object(d.jsxs)("div",{children:[Object(d.jsx)(E,{value:t,onChange:n,error:r}),Object(d.jsx)("span",{children:r}),Object(d.jsx)(w,{onClick:a,children:"Add"}),Object(d.jsx)("span",{className:M.a.someClass,children:s})]})})},B=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),s=Object(l.a)(r,2),c=s[0],i=s[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],h=t.length;return Object(d.jsx)(L,{name:c,setNameCallback:function(e){i(e.currentTarget.value),b("")},addUser:function(){""===c?b("\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0430 \u0431\u0443\u043a\u0432\u0430"):alert("Hello ".concat(c," !")),n(c)},error:u,totalUsers:h})},P=n(30);var F=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{style:{backgroundColor:"#778beb"},children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(B,{users:n,addUserCallback:function(e){var t={_id:Object(P.a)(),name:e};r([].concat(Object(J.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},U=n(14),q=n.n(U),G=n(18),K=n.n(G),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),s=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(K.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(g.a)({type:"checkbox",onChange:function(e){var a=e.currentTarget.checked;n&&n(a),t&&t(e)},className:c},s)),r&&Object(d.jsx)("span",{className:K.a.spanClassName,children:r})]})};var z=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=n?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{className:q.a.HW,children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(E,{value:n,onChangeText:r,onEnter:c,error:s}),Object(d.jsx)(E,{className:q.a.blue}),Object(d.jsx)(w,{children:"default"}),Object(d.jsx)(w,{red:!0,onClick:c,children:"delete "}),Object(d.jsx)(w,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var R=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),Object(d.jsx)(H,{}),Object(d.jsx)(F,{}),Object(d.jsx)(z,{})]})};var X=function(){return Object(d.jsx)("div",{children:"Junior"})};var V=function(){return Object(d.jsx)("div",{children:"Junior Plus"})};var Q=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Z="/pre-junior",D="/junior",$="/junior-plus";var ee=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{path:"/",element:Object(d.jsx)(m.a,{to:Z})}),Object(d.jsx)(m.b,{path:Z,element:Object(d.jsx)(R,{})}),Object(d.jsx)(m.b,{path:"/",element:Object(d.jsx)(m.a,{to:D})}),Object(d.jsx)(m.b,{path:D,element:Object(d.jsx)(X,{})}),Object(d.jsx)(m.b,{path:"/",element:Object(d.jsx)(m.a,{to:$})}),Object(d.jsx)(m.b,{path:$,element:Object(d.jsx)(V,{})}),Object(d.jsx)(m.b,{path:"/*",element:Object(d.jsx)(Q,{})})]})})};var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(ee,{})]})})};var ne=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(te,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.1dd354a0.chunk.js.map