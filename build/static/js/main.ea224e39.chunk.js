(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(22)},18:function(t,e,a){},20:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(12),c=a.n(i),r=(a(18),a(2)),o=a(5),l=a(3),u=a(1),p=a(4),d=(a(20),a(7),a(6)),h={composeXWwwFormUrlEncoded:function(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},formInputsToObject:function(t){var e=Array.from(t.querySelectorAll("input")),a={};return e.forEach(function(t){"checkbox"===t.type?a[t.name]="checked"===t.checked:a[t.name]=t.value}),a}},m={getApiUrl:function(){return"https://insolent-preclude.herokuapp.com/"},getData:function(t,e,a){m.fetchData(t,"get",e,null,a)},postData:function(t,e,a,n){m.fetchData(t,"post",e,a,n)},putData:function(t,e,a,n){m.fetchData(t,"put",e,a,n)},deleteData:function(t,e,a){m.fetchData(t,"delete",e,null,a)},patchData:function(t,e,a,n){m.fetchData(t,"patch",e,a,n)},fetchData:function(t,e,a,n,s){var i=new Headers("get"===e?{}:{"Content-Type":"account/login"===t?"application/x-www-form-urlencoded":"application/json"});a&&i.set("x-access-token",a);var c={method:e,mode:"cors",redirect:"follow",headers:i};"get"!==e&&n&&(c.body=n);var r=new Request(m.getApiUrl()+t,c);fetch(r).then(function(t){return t.json()},function(t){throw"error: "+t}).then(function(t){s(t)})}},b=m,f=a(9),O=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"}),j=a(10),v=a(8),y=function t(e){var a=this;Object(r.a)(this,t),this.createObject=function(t,e,n,s,i){var c=JSON.stringify(t);b.postData("".concat(a.routeString,"/").concat(e,"/").concat(n),s,c,function(t){return i(t)})},this.modifyObject=function(t,e,n){var s=JSON.stringify(t);b.putData("".concat(a.routeString,"/").concat(t._id.toString()),e,s,function(t){return n(t)})},this.getObject=function(t,e,n){var s="".concat(a.routeString,"/").concat(t);b.getData(s,e,function(t){n(t)})},this.deleteObject=function(t,e,n){b.deleteData("".concat(a.routeString,"/").concat(t),e,function(t){return n(t)})},this.rebaseObject=function(t,e,n,s,i){return b.patchData("".concat(a.routeString,"/id"),s,JSON.stringify({newParentType:e,parentId:n}),i)},this.routeString=e},E=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this,"task"))).getTask=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"getObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.modifyTask=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"modifyObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.deleteTask=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"deleteObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.createTask=function(a,n,s,i,c){return Object(v.a)(Object(u.a)(e.prototype),"createObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,i,c)},t.rebaseTask=function(a,n,s,i,c){return Object(v.a)(Object(u.a)(e.prototype),"rebaseObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,i,c)},t}return Object(p.a)(e,t),e}(y),k=function t(e,a,n,s,i){Object(r.a)(this,t),this.addItem=function(t){return s.createObject(t,e,a,n,function(t){return i(t)})},this.deleteItem=function(t){return s.deleteObject(t,n,function(t){return i(t)})}},A=function(t){function e(t,a,n){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,"task",t,a,E,n))}return Object(p.a)(e,t),e}(k),g=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this,"note"))).getNote=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"getObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.modifyNote=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"modifyObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.deleteNote=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"deleteObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.createNote=function(a,n,s,i,c){return Object(v.a)(Object(u.a)(e.prototype),"createObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,i,c)},t}return Object(p.a)(e,t),e}(y);var T=function(t){return s.a.createElement("div",{className:"note",id:t.data.id},s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("div",{className:t.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},t.data.dateTime," : ",t.data.note))))},C=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"text",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),S=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"password",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),x=function(t){function e(t){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"reset",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),N=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={checked:!!a.props.checked&&a.state.checked},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleCheck",value:function(t){this.setState({checked:t.target.checked})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"checkbox",name:this.props.name.toLowerCase(),checked:this.state.checked,onChange:this.handleCheck.bind(this)},this.props.attributes))))}}]),e}(n.Component),D=function(t){function e(t){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"submit",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),w=function(t){function e(t){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.props.action(),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"button",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),e}(n.Component),L=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value instanceof Date?a.props.value.getDate():new Date(a.props.value).getDate()},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,"::",s.a.createElement("input",Object.assign({type:"date",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),I=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"email",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),P=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.props.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),U=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"render",value:function(){return s.a.createElement("fragment",null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),e}(n.Component),F=Object.freeze({TEXT:C,PASSWORD:S,SUBMIT:D,RESET:x,CHECKBOX:N,BUTTON:w,DATE:L,EMAIL:I,NUMBER:P,TIMEINTERVAL:U}),X=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement("form",{id:this.props.id},this.props.inputFields.map(function(e){var a=Object.assign({key:""+t.props.data._id+e.props.name,value:t.props.data[e.props.name]},e.props);return e.content?s.a.createElement(e.type,a,e.content):s.a.createElement(e.type,a)}))}}]),e}(n.Component),B=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.data,e);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:F.TEXT},{props:{name:"description"},type:F.TEXT},{props:{name:"deadline"},type:F.DATE},{props:{name:"startDate"},type:F.DATE},{props:{name:"external"},type:F.CHECKBOX},{props:{name:"estTime"},type:F.NUMBER},{props:{name:"Done",action:a.submitAction},type:F.SUBMIT}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(X,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),e}(n.Component),q=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.data,e);a.props.submitAction(n)},a.state={inputFields:[{props:{Note:"name"},type:F.TEXT}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"noteInput",id:"form"+this.props.id},s.a.createElement(B,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),e}(n.Component),M=function t(e,a,n,s){Object(r.a)(this,t),this.timeStamp=a||new Date,this.note=e||"",this.parent=n||0,this.parentType=s||""};var R=function(t){return s.a.createElement("div",null,"Loading gif...")},_=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.noteApiCalls.getObject(a.props.id,a.props.xAccessToken,function(t){return a.setState({task:t})})},a.modify=function(t){a.state.noteApiCalls.modifyObject(t,a.props.xAccessToken,function(t){a.setState({task:t,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,task:void 0,noteApiCalls:new g},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.task){new A(this.state.task._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(q,{data:this.state.note,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(T,{data:this.state.task,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken})}return this.props.id?(this.update(),s.a.createElement(R,null)):s.a.createElement(q,{data:new M,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addNote})}}]),e}(n.Component),W=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).addNote=function(){return a.setState({addNote:!0})},a.addNewNoteTrue=function(t){return Object(j.a)(t).concat([null])},a.state={addNote:!1},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addNote?this.addNewNoteTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"noteList",id:this.props.catId+"NoteList"},e.map(function(e){return s.a.createElement(_,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions})}))}}]),e}(n.Component);var H=function(t){return s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,t.data.name),s.a.createElement("div",{className:t.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Date : ",t.data.date),s.a.createElement("div",{className:"property"},"Length : ",t.data.length),s.a.createElement("div",{className:"property"},"Completed : ",t.data.completed),t.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(at,{data:t.data.prqTasks,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement(G,{data:t.data.prqEvents,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(W,{data:t.data.notes,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):""))},J=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.data,e);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:F.TEXT},{props:{name:"date"},type:F.DATE},{props:{name:"length"},type:F.NUMBER}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"eventInput",id:"form"+this.props.id},s.a.createElement(X,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),e}(n.Component),z=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this,"event"))).getEvent=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"getObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.modifyEvent=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"modifyObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.deleteEvent=function(a,n,s){return Object(v.a)(Object(u.a)(e.prototype),"deleteObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s)},t.createEvent=function(a,n,s,i,c){return Object(v.a)(Object(u.a)(e.prototype),"createObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,i,c)},t.rebaseEvent=function(a,n,s,i,c){return Object(v.a)(Object(u.a)(e.prototype),"rebaseObject",Object(d.a)(t)).call(Object(d.a)(t),a,n,s,i,c)},t}return Object(p.a)(e,t),e}(y),K=function(t){function e(t,a,n){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,"event",t,a,z,n))}return Object(p.a)(e,t),e}(k),V=function t(e,a,n,s,i,c,o,l,u,p,d){Object(r.a)(this,t),this.name=e||"",this.dateTime=a||new Date,this.length=n||0,this.notes=s||[],this.prqTask=i||[],this.prqEvents=c||[],this.parent=o||0,this.completed=u||!1,this.prevDates=p||[],this.accountId=d||0},$=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.noteApiCalls.getObject(a.props.id,a.props.xAccessToken,function(t){return a.setState({event:t})})},a.modify=function(t){a.state.noteApiCalls.modifyObject(t,a.props.xAccessToken,function(t){a.setState({task:t,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,event:void 0,taskApiCalls:new z},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.event){var t=new K(this.state.event._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(J,{data:this.state.event,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(H,{data:this.state.event,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,modifyListActions:t})}return this.props.id?(this.update(),s.a.createElement(R,null)):s.a.createElement(J,{data:new V,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addEvent})}}]),e}(n.Component),G=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).addEvent=function(){return a.setState({addNote:!0})},a.addNewEventTrue=function(t){return Object(j.a)(t).concat([null])},a.state={addEvent:!1},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addEvent?this.addNewEventTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},e.map(function(e){return s.a.createElement($,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions})}))}}]),e}(n.Component);var Q=function(t){return s.a.createElement("div",{className:"task ",id:t.data._id},s.a.createElement("div",{className:"collapser"},s.a.createElement("button",{onClick:t.buttonAction},t.displayState===O.EXPANDED?"-":"+")),s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,t.data.name),s.a.createElement("div",{className:t.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Description : ",t.data.description),s.a.createElement("div",{className:"property"},"Completed : ",t.data.completed),s.a.createElement("div",{className:"property"},"Deadline : ",t.data.deadline),s.a.createElement("div",{className:"property"},"Start Date : ",t.data.startDate),s.a.createElement("div",{className:"property"},"External : ",t.data.external),s.a.createElement("div",{className:"property"},"Estimated Time : ",t.data.estTime),t.data.subTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"SubTasks:"),s.a.createElement(at,{data:t.data.subTasks,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.events?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Events:"),s.a.createElement(G,{data:t.data.events,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(at,{data:t.data.prqTasks,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement(G,{data:t.data.prqEvents,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"",t.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(W,{data:t.data.notes,xAccessToken:t.xAccessToken,modifyListActions:t.modifyListActions})):"")),s.a.createElement("div",{className:"editDeleteButton"},s.a.createElement("button",{onClick:t.editAction,className:"inputButton"},s.a.createElement("img",{src:"../src/img/edit.svg"})),s.a.createElement("button",{onClick:t.showDeleteModal,className:"inputButton"},s.a.createElement("img",{src:"../src/img/delete.svg"}))))},Y=function t(e,a,n,s,i,c,o,l,u,p,d,h,m,b,f){Object(r.a)(this,t),this.name=e||"",this.description=a||"",this.subTasks=n||[],this.events=s||[],this.completed=i||"",this.deadline=c||new Date,this.startDate=o||new Date,this.notes=l||[],this.external=u||!1,this.parent=p||0,this.parentType=d||"",this.prqTask=h||[],this.prqEvent=m||[],this.estTime=b||0,this.accountId=f||""},Z=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.noteApiCalls.getObject(a.props.id,a.props.xAccessToken,function(t){return a.setState({task:t})})},a.modify=function(t){a.state.noteApiCalls.modifyObject(t,a.props.xAccessToken,function(t){a.setState({task:t,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,task:void 0,taskApiCalls:new E},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.task){var t=new A(this.state.task._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(B,{data:this.state.task,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(Q,{data:this.state.task,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,modifyListActions:t,showDelteModal:this.props.showDeleteModal})}return this.props.id?(this.update(),s.a.createElement(R,null)):s.a.createElement(B,{data:new Y,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addTask})}}]),e}(n.Component),tt=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,"Rebase child to parent: //todo 190209: find new parent input")}}]),e}(n.Component);var et=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={rebaseChildren:function(t){a.props.rebaseChildren(t),a.hide()},deleteChildren:function(){a.props.deleteChildren(),a.hide()},children:s.a.createElement("fragment",null,"The ",a.props.componentType," ",a.props.componentName," that you are deleting contains child Tasks or Events. Do you want to delete the children or assign them to a new parent?",s.a.createElement("button",{className:"deleteChildren",onClick:a.state.deleteChildren},"Delete Children"),s.a.createElement("button",{className:"cancelDelete"},"Don't Delete"),s.a.createElement(tt,{parentTypes:a.props.parentTypes,buttonAction:a.state.rebaseChildren}))},a}return Object(p.a)(e,t),e}(function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).hide=function(){return a.setState({visible:!1})},a.show=function(){return a.setState({visible:!0})},a.toggle=function(){return a.setState({visible:!a.state.visible})},a.componentDidMount=function(){a.setState({visible:a.props.visible})},a.componentWillReceiveProps=function(t,e){a.setState({visible:t.visible})},a.modalContainerStyle={position:"fixed",zIndex:"1",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:a.props.width?a.props.width:"600px",maxWidth:a.props.maxWidth?a.props.maxWidth:"90%",height:a.props.height?a.props.height:"400px",maxHeight:a.props.maxHeight?a.props.maxHeight:"90%",display:a.state.visible?"block":"none"},a.modalContentStyle={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",padding:a.props.padding?a.props.padding:"20px 50px 20px 20px",overflow:"auto",color:a.props.color?a.props.color:"black",backgroundColor:a.props.backgroundColor?a.props.backgroundColor:"white"},a.closeButtonStyle={position:"absolute",top:"5%",right:"5%",color:"color",width:"10px",height:"10px",display:"flex",justifyContent:"center",alignItems:"center"},a.state={visible:!1,children:s.a.createElement("div",null)},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{id:"modal",className:"modal",style:this.modalContainerStyle},s.a.createElement("div",{className:"modalContent",style:this.modalContentStyle},this.state.children),s.a.createElement("div",{id:"modalCloseButton",style:this.closeButtonStyle},s.a.createElement("button",{onClick:this.state.hide},"\xd7")))}}]),e}(n.Component)),at=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).addTask=function(){return a.setState({addTask:!0})},a.addNewTaskTrue=function(t){if(!t||!t.length)return[new Y];t.push(new Y)},a.deleteTaskRebaseChildren=function(t,e){},a.deleteTaskAndChildren=function(t){},a.showDeleteModal=function(t,e){},a.state={addTask:!1,taskToDeleteName:""},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state.addTask?this.addNewTaskTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},e.map(function(e){return s.a.createElement(Z,{id:e,xAccessToken:t.props.xAccessToken,modifyListActions:t.props.modifyListActions,showDeleteModal:t.showDeleteModal})}),s.a.createElement(et,{visible:!1,componentType:"task",parentTypes:["component","task"],componentName:this.state.taskToDeleteName,rebaseChildren:this.deleteTaskRebaseChildren,deleteChildren:this.deleteTaskAndChildren}))}}]),e}(n.Component);var nt=function(t){var e;return s.a.createElement("div",{className:"category",id:t.data._id},s.a.createElement("h2",{className:"catName"},t.data.name),s.a.createElement("h3",null,"Tasks"),s.a.createElement(at,{data:t.data.tasks,catId:t.data._id,modifyListActions:t.modifyListActions,xAccessToken:t.xAccessToken}),s.a.createElement("h3",null,"Events"),s.a.createElement(G,(e={data:t.data.events,catId:t.data._id,modifyListActions:t.modifyListActions},Object(f.a)(e,"catId",t.data._id),Object(f.a)(e,"xAccessToken",t.xAccessToken),e)))},st=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this,"category"))).getCategory=function(e,a,n){return t.getObject(e,a,n)},t.modifyCategory=function(e,a,n){return t.modifyObject(e,a,n)},t.deleteCategory=function(e,a,n){return t.deleteObject(e,a,n)},t.addCategory=function(t,e,a){return b.postData("category/",e,t,function(t){return a(t)})},t}return Object(p.a)(e,t),e}(y),it=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).submitAction=function(){var t=document.getElementById("form"+a.props.id),e=h.formInputsToObject(t),n=Object.assign(a.props.category,e);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:F.TEXT}]},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(X,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.category}))}}]),e}(n.Component),ct=function(t){function e(t,a,n){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,"category",t,a,st,n))}return Object(p.a)(e,t),e}(k),rt=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.categoryApiCalls.getCategory(a.props.id,a.props.xAccessToken,function(t){return a.setState({category:t})})},a.modify=function(t){a.categoryApiCalls.modifyCategory(t,a.props.xAccessToken,function(t){return a.setState({category:t})})},a.state={displayState:O.COLLAPSED,category:void 0,categoryApiCalls:new st},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){if(this.state.category){var t=new ct(this.state.category._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(it,{data:this.props.data,submitAction:this.modify}):s.a.createElement(nt,{data:this.state.category,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,modifyListActions:t,xAccessToken:this.props.xAccessToken})}return this.update(),s.a.createElement(R,null)}}]),e}(n.Component),ot=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={categories:void 0,fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken})},a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return this.state.categories?s.a.createElement("div",{className:"categoryList",id:"categoryRoot"},this.state.categories.map(function(e){return s.a.createElement(rt,{id:e._id,xAccessToken:t.props.xAccessToken})})):(b.getData("category/",this.props.xAccessToken,function(e){t.setState({categories:e})}),s.a.createElement(R,null))}}]),e}(n.Component),lt=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.setState(Object(f.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.login(this.state.username,this.state.password),t.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:this.props.id},"Enter your username and password",s.a.createElement("label",null,"Username:",s.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),s.a.createElement("label",null,"Password:",s.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),e}(n.Component),ut=s.a.createContext({}),pt=ut.Provider,dt=(ut.Consumer,function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={username:void 0,xAccessToken:void 0,apiUrl:"http://localhost:3434",uiUrl:"http://localhost:8080"},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(t,e){var a=this,n=h.composeXWwwFormUrlEncoded({username:t,password:e});b.postData("account/login",null,n,function(t){a.setState({xAccessToken:t.token})})}},{key:"render",value:function(){return this.state.xAccessToken?s.a.createElement("div",{id:"userRoot"},s.a.createElement(pt,{value:this.state.xAccessToken},s.a.createElement(ot,{xAccessToken:this.state.xAccessToken}))):s.a.createElement(lt,{login:this.login,apiUrl:this.state.apiUrl})}}]),e}(n.Component)),ht=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement(dt,null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(ht,null),document.getElementById("root"))},7:function(t,e,a){}},[[13,2,1]]]);
//# sourceMappingURL=main.ea224e39.chunk.js.map