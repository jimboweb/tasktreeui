(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(9),c=n.n(i),r=(n(16),n(2)),s=n(3),u=n(5),l=n(4),d=n(6),h=(n(18),n(7),n(1)),p={composeXWwwFormUrlEncoded:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}};var f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={components:[],fetchOptions:{method:"get"},headers:new Headers({"x-access-token":n.props.xAccessToken}),categories:void 0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.categories?a.a.createElement("div",{className:"categoryList",id:"categoryRoot"},"//xAccessToken = ",this.props.xAccessToken):a.a.createElement("div",null,"loading gif...")}}]),t}(o.Component),m=n(10),g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.login(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){return a.a.createElement("form",{id:this.props.id},"Enter your username and password",a.a.createElement("label",null,"Username:",a.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),a.a.createElement("label",null,"Password:",a.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),a.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),t}(o.Component),b={getData:function(e,t){b.fetchData(e,"get",null,t)},postData:function(e,t,n){b.fetchData(e,"post",t,n)},putData:function(e,t,n){b.fetchData(e,"put",t,n)},deleteData:function(e,t,n){b.fetchData(e,"delete",t,n)},patchData:function(e,t,n){b.fetchData(e,"patch",t,n)},fetchData:function(e,t,n,o){var a=new Headers({"Content-Type":"application/x-www-form-urlencoded"});"get"!==t&&n&&({method:t,mode:"cors",redirect:"follow",headers:a}.body=n);var i=new Request("https://insolent-preclude.herokuapp.com"+e,{method:t,mode:"cors",redirect:"follow",headers:a,body:n});fetch(i).then(function(e){return e.json()}).then(function(e){o(e)})}},v=b,w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:void 0,xAccessToken:void 0,apiUrl:"https://insolent-preclude.herokuapp.com",uiUrl:"http://localhost:8080"},n.login=n.login.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e,t){var n=this,o=p.composeXWwwFormUrlEncoded({username:e,password:t});v.postData("/account/login",o,function(e){n.setState({xAccessToken:e.token})})}},{key:"render",value:function(){return this.state.xAccessToken?a.a.createElement("div",{id:"userRoot"},a.a.createElement(f,{xAccessToken:this.state.xAccessToken})):a.a.createElement(g,{login:this.login,apiUrl:this.state.apiUrl})}}]),t}(o.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(w,null)}}]),t}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");k?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):O(e)})}}()},7:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.87f59fc4.chunk.js.map