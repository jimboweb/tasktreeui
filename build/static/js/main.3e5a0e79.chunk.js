(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/Task.f92ab5d7.java"},function(e,t,n){e.exports=n.p+"static/media/Event.f3fd74fc.java"},,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),r=(n(18),n(1)),s=n(2),u=n(5),l=n(3),d=n(4),h=(n(20),n(7),n(6)),p={composeXWwwFormUrlEncoded:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}},f={getApiUrl:function(){return"http://localhost:3434"},getData:function(e,t,n){f.fetchData(e,"get",t,null,n)},postData:function(e,t,n,a){f.fetchData(e,"post",t,n,a)},putData:function(e,t,n,a){f.fetchData(e,"put",t,n,a)},deleteData:function(e,t,n,a){f.fetchData(e,"delete",t,n,a)},patchData:function(e,t,n,a){f.fetchData(e,"patch",t,n,a)},fetchData:function(e,t,n,a,o){var c=new Headers({"Content-Type":"application/x-www-form-urlencoded"});n&&c.set("x-access-token",n);var i={method:t,mode:"cors",redirect:"follow",headers:c};"get"!==t&&a&&(i.body=a);var r=new Request(f.getApiUrl()+e,i);fetch(r).then(function(e){return e.json()},function(e){throw"error: "+e}).then(function(e){o(e)})}},m=f,b=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"}),v=n(10),g=n.n(v),j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={displayState:b.COLLAPSED},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"expandCollapse",value:function(e){b.COLLAPSED,this.setState({displayStates:b.EXPANDED})}},{key:"input",value:function(){this.setState({displayStates:b.INPUT})}},{key:"render",value:function(){return this.state.displayState!==b.INPUT?o.a.createElement(g.a,{data:this.props.data,buttonAction:this.expandCollapse}):o.a.createElement(j,{data:this.props.data})}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={fetchOptions:{method:"get"},headers:new Headers({"x-access-token":n.props.xAccessToken})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},this.props.data.map(function(e){return o.a.createElement(O,{data:e})}))}}]),t}(a.Component),k=n(11),E=n.n(k),y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},this.props.data.map(function(e){return o.a.createElement(E.a,{data:e})}))}}]),t}(a.Component);var C=function(e){return o.a.createElement("div",{className:"category",id:e.data._id},o.a.createElement("h2",{className:"catName"},e.data.name),o.a.createElement("h3",null,"Tasks"),o.a.createElement(w,{data:e.data.tasks,catId:e.data._id}),o.a.createElement("h3",null,"Events"),o.a.createElement(y,{data:e.data.events,catId:e.data._id}))},D=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={components:[],fetchOptions:{method:"get"},headers:new Headers({"x-access-token":n.props.xAccessToken}),categories:void 0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.categories?o.a.createElement("div",{className:"categoryList",id:"categoryRoot"},this.state.categories.map(function(e){return o.a.createElement(C,{id:e._id,data:e})})):(m.getData("/category/",this.props.xAccessToken,function(t){e.setState({categories:t})}),o.a.createElement("div",null,"loading gif..."))}}]),t}(a.Component),x=n(12),T=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.login(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement("form",{id:this.props.id},"Enter your username and password",o.a.createElement("label",null,"Username:",o.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),o.a.createElement("label",null,"Password:",o.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),o.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),t}(a.Component),A=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={username:void 0,xAccessToken:void 0,apiUrl:"https://insolent-preclude.herokuapp.com",uiUrl:"http://localhost:8080"},n.login=n.login.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e,t){var n=this,a=p.composeXWwwFormUrlEncoded({username:e,password:t});m.postData("/account/login",null,a,function(e){n.setState({xAccessToken:e.token})})}},{key:"render",value:function(){return this.state.xAccessToken?o.a.createElement("div",{id:"userRoot"},o.a.createElement(D,{xAccessToken:this.state.xAccessToken})):o.a.createElement(T,{login:this.login,apiUrl:this.state.apiUrl})}}]),t}(a.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(A,null)}}]),t}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(S,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");U?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()}],[[13,2,1]]]);
//# sourceMappingURL=main.3e5a0e79.chunk.js.map