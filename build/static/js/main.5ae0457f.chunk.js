(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),i=(a(16),a(1)),o=a(2),l=a(5),u=a(3),d=a(4),p=(a(18),a(6),a(7)),m={composeXWwwFormUrlEncoded:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},h={getApiUrl:function(){return"https://insolent-preclude.herokuapp.com"},getData:function(e,t,a){h.fetchData(e,"get",t,null,a)},postData:function(e,t,a,n){h.fetchData(e,"post",t,a,n)},putData:function(e,t,a,n){h.fetchData(e,"put",t,a,n)},deleteData:function(e,t,a,n){h.fetchData(e,"delete",t,a,n)},patchData:function(e,t,a,n){h.fetchData(e,"patch",t,a,n)},fetchData:function(e,t,a,n,r){var s=new Headers({"Content-Type":"application/x-www-form-urlencoded"});a&&s.set("x-access-token",a);var c={method:t,mode:"cors",redirect:"follow",headers:s};"get"!==t&&n&&(c.body=n);var i=new Request(h.getApiUrl()+e,c);fetch(i).then(function(e){return e.json()},function(e){throw"error: "+e}).then(function(e){r(e)})}},f=h,v=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"});var b=function(e){return r.a.createElement("div",null)},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},this.props.data.map(function(e){return r.a.createElement(b,{data:e})}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component);var g=function(e){return r.a.createElement("div",{className:"task ",id:e.data._id},r.a.createElement("div",{className:"collapser"},r.a.createElement("button",{onClick:e.buttonAction},e.displayState===v.EXPANDED?"-":"+")),r.a.createElement("div",{className:"dataWrapper"},r.a.createElement("h4",null,e.data.name),r.a.createElement("div",{className:e.displayState===v.EXPANDED?"expanded":"collapsed"},r.a.createElement("div",{className:"property"},"Description : ",e.data.description),r.a.createElement("div",{className:"property"},"Completed : ",e.data.completed),r.a.createElement("div",{className:"property"},"Deadline : ",e.data.deadline),r.a.createElement("div",{className:"property"},"Start Date : ",e.data.startDate),r.a.createElement("div",{className:"property"},"External : ",e.data.external),r.a.createElement("div",{className:"property"},"Estimated Time : ",e.data.estTime),e.data.subTasks?r.a.createElement("div",{className:"sublist"},r.a.createElement("h5",null,"SubTasks:"),r.a.createElement(w,{data:e.data.subTasks})):"",e.data.events?r.a.createElement("div",{className:"sublist"},r.a.createElement("h5",null,"Events:"),r.a.createElement(E,{data:e.data.events})):"",e.data.prqTasks?r.a.createElement("div",{className:"sublist"},r.a.createElement("h5",null,"Prerequisite Tasks:"),r.a.createElement(w,{data:e.data.prqTasks})):"",e.data.prqEvents?r.a.createElement("div",{className:"sublist"},r.a.createElement("h5",null,"Prerequisite Events:"),r.a.createElement(E,{data:e.data.prqEvents})):"",e.data.notes?r.a.createElement("div",{className:"sublist"},r.a.createElement("h5",null,"Notes:"),r.a.createElement(O,{data:e.data.notes})):"")))},j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===v.COLLAPSED?a.setState({displayState:v.EXPANDED}):a.setState({displayState:v.COLLAPSED})},a.input=function(){a.setState({displayState:v.INPUT})},a.state={displayState:v.COLLAPSED},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.displayState!==v.INPUT?r.a.createElement(g,{data:this.props.data,buttonAction:this.expandCollapse,displayState:this.state.displayState}):r.a.createElement(j,{data:this.props.data})}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},this.props.data.map(function(e){return r.a.createElement(k,{data:e})}))}}]),t}(n.Component);var y=function(e){return r.a.createElement("div",{className:"category",id:e.data._id},r.a.createElement("h2",{className:"catName"},e.data.name),r.a.createElement("h3",null,"Tasks"),r.a.createElement(w,{data:e.data.children.tasks,catId:e.data._id}),r.a.createElement("h3",null,"Events"),r.a.createElement(E,{data:e.data.children.events,catId:e.data._id}))},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={components:[],fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken}),categories:void 0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.categories?r.a.createElement("div",{className:"categoryList",id:"categoryRoot"},this.state.categories.map(function(e){return r.a.createElement(y,{id:e._id,data:e})})):(f.getData("/category/",this.props.xAccessToken,function(t){e.setState({categories:t})}),r.a.createElement("div",null,"loading gif..."))}}]),t}(n.Component),N=a(10),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(N.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.login(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{id:this.props.id},"Enter your username and password",r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:void 0,xAccessToken:void 0,apiUrl:"https://insolent-preclude.herokuapp.com",uiUrl:"http://localhost:8080"},a.login=a.login.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e,t){var a=this,n=m.composeXWwwFormUrlEncoded({username:e,password:t});f.postData("/account/login",null,n,function(e){a.setState({xAccessToken:e.token})})}},{key:"render",value:function(){return this.state.xAccessToken?r.a.createElement("div",{id:"userRoot"},r.a.createElement(D,{xAccessToken:this.state.xAccessToken})):r.a.createElement(C,{login:this.login,apiUrl:this.state.apiUrl})}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null)}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):A(e)})}}()},6:function(e,t,a){}},[[11,2,1]]]);
//# sourceMappingURL=main.5ae0457f.chunk.js.map