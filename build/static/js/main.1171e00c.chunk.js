(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(22)},18:function(t,e,a){},20:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(12),i=a.n(c),r=(a(18),a(2)),o=a(5),u=a(3),l=a(1),p=a(4),d=(a(20),a(7),a(6)),h={composeXWwwFormUrlEncoded:function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},formInputsToObject:function(t){var e=Array.from(t.querySelectorAll("input")),a={};return e.forEach(function(t){"checkbox"===t.type?a[t.name]="checked"===t.checked:a[t.name]=t.value}),a}},m={getApiUrl:function(){return"https://insolent-preclude.herokuapp.com/"},getData:function(t,e,a){m.fetchData(t,"get",e,null,a)},postData:function(t,e,a,n){m.fetchData(t,"post",e,a,n)},putData:function(t,e,a,n){m.fetchData(t,"put",e,a,n)},deleteData:function(t,e,a){m.fetchData(t,"delete",e,null,a)},patchData:function(t,e,a,n){m.fetchData(t,"patch",e,a,n)},fetchData:function(t,e,a,n,s){var c=new Headers("get"===e?{}:{"Content-Type":"account/login"===t?"application/x-www-form-urlencoded":"application/json"});a&&c.set("x-access-token",a);var i={method:e,mode:"cors",redirect:"follow",headers:c};"get"!==e&&n&&(i.body=n);var r=new Request(m.getApiUrl()+t,i);fetch(r).then(function(t){return t.json()},function(t){throw"error: "+t}).then(function(t){s(t)})}},b=m,f=a(10),O=a(9),j=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"});var v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).addEvent=function(){return a.setState({addNote:!0})},a.addNewEventTrue=function(t){return Object(O.a)(t).concat([null])},a.state={addEvent:!1},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addNote?this.props.data:this.props.data.addNewNoteTrue();return s.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},e.map(function(e){return s.a.createElement(v,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions})}))}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),e}(n.Component),k=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).addNote=function(){return a.setState({addNote:!0})},a.addNewNoteTrue=function(t){return Object(O.a)(t).concat([null])},a.state={addNote:!1},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addNote?this.props.data:this.props.data.addNewNoteTrue();return s.a.createElement("div",{className:"noteList",id:this.props.catId+"NoteList"},e.map(function(e){return s.a.createElement(E,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions})}))}}]),e}(n.Component);var g=function(t){return s.a.createElement("div",{className:"task ",id:t.data._id},s.a.createElement("div",{className:"collapser"},s.a.createElement("button",{onClick:t.buttonAction},t.displayState===j.EXPANDED?"-":"+")),s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,t.data.name),s.a.createElement("div",{className:t.displayState===j.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Description : ",t.data.description),s.a.createElement("div",{className:"property"},"Completed : ",t.data.completed),s.a.createElement("div",{className:"property"},"Deadline : ",t.data.deadline),s.a.createElement("div",{className:"property"},"Start Date : ",t.data.startDate),s.a.createElement("div",{className:"property"},"External : ",t.data.external),s.a.createElement("div",{className:"property"},"Estimated Time : ",t.data.estTime),t.data.subTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"SubTasks:"),s.a.createElement(W,{data:t.data.subTasks,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.events?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Events:"),s.a.createElement(y,{data:t.data.events,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(W,{data:t.data.prqTasks,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement(y,{data:t.data.prqEvents,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(k,{data:t.data.notes,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"")),s.a.createElement("div",{className:"editButton"},s.a.createElement("button",{onClick:t.editAction,class:"inputButton"},s.a.createElement("img",{src:"../src/img/edit.svg"}))))},T=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"text",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),A=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"password",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),C=function(t){function e(t){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"reset",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),S=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={checked:!!a.props.checked&&a.state.checked},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleCheck",value:function(t){this.setState({checked:t.target.checked})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"checkbox",name:this.props.name.toLowerCase(),checked:this.state.checked,onChange:this.handleCheck.bind(this)},this.props.attributes))))}}]),e}(n.Component),x=function(t){function e(t){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"submit",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),N=function(t){function e(t){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"button",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),w=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value.split("T")[0]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,"::",s.a.createElement("input",Object.assign({type:"date",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),D=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"email",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),L=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.props.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement("fragment",null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),P=Object.freeze({TEXT:T,PASSWORD:A,SUBMIT:x,RESET:C,CHECKBOX:S,BUTTON:N,DATE:w,EMAIL:D,NUMBER:L,TIMEINTERVAL:I}),U=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("form",{id:this.props.id},this.props.inputFields.map(function(e){var a=Object.assign({key:""+t.props.data._id+e.props.name,value:t.props.data[e.props.name]},e.props);return e.content?s.a.createElement(e.type,a,e.content):s.a.createElement(e.type,a)}))}}]),e}(n.Component),F=a(8),X=function t(e){var a=this;Object(r.a)(this,t),this.createObject=function(t,e,n,s,c){var i=JSON.stringify(t);b.postData("".concat(a.routeString,"/").concat(e,"/").concat(n),s,i,function(t){return c(t)})},this.modifyObject=function(t,e,n){var s=JSON.stringify(t);b.putData("".concat(a.routeString,"/").concat(t._id.toString()),e,s,function(t){return n(t)})},this.getObject=function(t,e,n){var s="".concat(a.routeString,"/").concat(t);b.getData(s,e,function(t){n(t)})},this.deleteObject=function(t,e,n){b.deleteData("".concat(a.routeString,"/").concat(t),e,function(t){return n(t)})},this.rebaseObject=function(t,e,n,s,c){return b.patchData("".concat(a.routeString,"/id"),s,JSON.stringify({newParentType:e,parentId:n}),c)},this.routeString=e},B=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this,"task/"))).getTask=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"getObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.modifyTask=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"modifyObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.deleteTask=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"deleteObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.createTask=function(a,n,s,c,i){return Object(F.a)(Object(l.a)(e.prototype),"createObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,c,i)},t.rebaseTask=function(a,n,s,c,i){return Object(F.a)(Object(l.a)(e.prototype),"rebaseObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,c,i)},t}return Object(p.a)(e,t),e}(X),q=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.data,e);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:P.TEXT},{props:{name:"description"},type:P.TEXT},{props:{name:"deadline"},type:P.DATE},{props:{name:"startDate"},type:P.DATE},{props:{name:"external"},type:P.CHECKBOX},{props:{name:"estTime"},type:P.NUMBER},{props:{name:"Done",action:a.submitAction},type:P.SUBMIT}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(U,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),e}(n.Component);var R=function(t){return s.a.createElement("div",null,"Loading gif...")},_=function t(){Object(r.a)(this,t),this.name="",this.description="",this.subTasks=[],this.events=[],this.completed="",this.deadline=new Date,this.startDate=new Date,this.notes=[],this.external=!1,this.parent=0,this.parentType="",this.prqTask=[],this.prqEvent=[],this.estTime=0,this.accountId=""},M=function t(e,a,n,s,c){Object(r.a)(this,t),this.addItem=function(t){s.createObject(t,e,a,n,function(t){return c(t)})}},J=function(t){function e(t,a,n,s){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).call(this,t,a,n,B,s))}return Object(p.a)(e,t),e}(M),H=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).expandCollapse=function(){a.state.displayState===j.COLLAPSED?a.setState({displayState:j.EXPANDED}):a.setState({displayState:j.COLLAPSED})},a.input=function(){a.setState({displayState:j.INPUT})},a.update=function(){B.getObject(a.props.id,a.props.xAccessToken,function(t){return a.setState({task:t})})},a.modify=function(t){B.modifyObject(t,a.props.xAccessToken,function(t){a.setState({task:t,displayState:j.EXPANDED})})},a.state={displayState:j.COLLAPSED,task:void 0},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.task){var t=new J("TaskObject",this.state.task._id,this.props.xAccessToken,this.update);return this.state.displayState===j.INPUT?s.a.createElement(q,{data:this.state.task,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(g,{data:this.state.task,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,modifyListActions:t})}return this.props.id?(this.update(),s.a.createElement(R,null)):s.a.createElement(q,{data:new _,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addTask})}}]),e}(n.Component),W=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).addTask=function(){return a.setState({addTask:!0})},a.addNewTaskTrue=function(t){return Object(O.a)(t).concat([null])},a.state={addTask:!1},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addTask?this.props.data:this.props.data.addNewTaskTrue();return s.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},e.map(function(e){return s.a.createElement(H,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions})}))}}]),e}(n.Component);var z=function(t){var e;return s.a.createElement("div",{className:"category",id:t.data._id},s.a.createElement("h2",{className:"catName"},t.data.name),s.a.createElement("h3",null,"Tasks"),s.a.createElement(W,{data:t.data.tasks,catId:t.data._id,modifyListActions:t.modifyListActions,xAccessToken:t.xAccessToken}),s.a.createElement("h3",null,"Events"),s.a.createElement(y,(e={data:t.data.events,catId:t.data._id,modifyListActions:t.modifyListActions},Object(f.a)(e,"catId",t.data._id),Object(f.a)(e,"xAccessToken",t.xAccessToken),e)))},K=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this,"category"))).getCategory=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"getObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.modifyCategory=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"modifyObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.deleteCategory=function(a,n,s){return Object(F.a)(Object(l.a)(e.prototype),"deleteObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.addCategory=function(t,e,a){return b.postData("category/",e,t,function(t){return a(t)})},t}return Object(p.a)(e,t),e}(X),V=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.category,e);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:P.TEXT}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(U,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.category}))}}]),e}(n.Component),$=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).expandCollapse=function(){a.state.displayState===j.COLLAPSED?a.setState({displayState:j.EXPANDED}):a.setState({displayState:j.COLLAPSED})},a.input=function(){a.setState({displayState:j.INPUT})},a.update=function(){K.getCategory(a.props.id,a.props.xAccessToken,function(t){return a.setState({category:t})})},a.modify=function(t){K.modifyCategory(t,a.props.xAccessToken,function(t){return a.setState({category:t})})},a.state={displayState:j.COLLAPSED,category:void 0},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.category){var t=new M("Category",this.state.category._id,this.props.xAccessToken,this.update);return this.state.displayState===j.INPUT?s.a.createElement(V,{data:this.props.data,submitAction:this.modify}):s.a.createElement(z,{data:this.state.category,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,modifyListActions:t,xAccessToken:this.props.xAccessToken})}return this.update(),s.a.createElement(R,null)}}]),e}(n.Component),G=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={categories:void 0,fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken})},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return this.state.categories?s.a.createElement("div",{className:"categoryList",id:"categoryRoot"},this.state.categories.map(function(e){return s.a.createElement($,{id:e._id,xAccessToken:t.props.xAccessToken})})):(b.getData("category/",this.props.xAccessToken,function(e){t.setState({categories:e})}),s.a.createElement(R,null))}}]),e}(n.Component),Q=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.login(this.state.username,this.state.password),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:this.props.id},"Enter your username and password",s.a.createElement("label",null,"Username:",s.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),s.a.createElement("label",null,"Password:",s.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),e}(n.Component),Y=s.a.createContext({}),Z=Y.Provider,tt=(Y.Consumer,function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={username:void 0,xAccessToken:void 0,apiUrl:"http://localhost:3434",uiUrl:"http://localhost:8080"},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(t,e){var a=this,n=h.composeXWwwFormUrlEncoded({username:t,password:e});b.postData("account/login",null,n,function(t){a.setState({xAccessToken:t.token})})}},{key:"render",value:function(){return this.state.xAccessToken?s.a.createElement("div",{id:"userRoot"},s.a.createElement(Z,{value:this.state.xAccessToken},s.a.createElement(G,{xAccessToken:this.state.xAccessToken}))):s.a.createElement(Q,{login:this.login,apiUrl:this.state.apiUrl})}}]),e}(n.Component)),et=function(t){function e(){return Object(r.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement(tt,null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(et,null),document.getElementById("root"))},7:function(t,e,a){}},[[13,2,1]]]);
//# sourceMappingURL=main.1171e00c.chunk.js.map