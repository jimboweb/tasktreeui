(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(12),o=a.n(i),c=(a(24),a(1)),r=a(5),l=a(3),p=a(2),u=a(4),d=(a(25),a(6),a(7)),h={composeXWwwFormUrlEncoded:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},formInputsToObject:function(e){var t=Array.from(e.querySelectorAll("input")),a={};return t.forEach(function(e){"checkbox"===e.type?a[e.name]="checked"===e.checked:a[e.name]=e.value}),a}},m={getApiUrl:function(){return"http://localhost:3434/"},getData:function(e,t,a){m.fetchData(e,"get",t,null,a)},postData:function(e,t,a,n){m.fetchData(e,"post",t,a,n)},putData:function(e,t,a,n){m.fetchData(e,"put",t,a,n)},deleteData:function(e,t,a){m.fetchData(e,"delete",t,null,a)},patchData:function(e,t,a,n){m.fetchData(e,"patch",t,a,n)},fetchData:function(e,t,a,n,s){var i=new Headers("get"===t?{}:{"Content-Type":"account/login"===e?"application/x-www-form-urlencoded":"application/json"});a&&i.set("x-access-token",a);var o={method:t,mode:"cors",redirect:"follow",headers:i};"get"!==t&&n&&(o.body=n);var c=new Request(m.getApiUrl()+e,o);fetch(c).then(function(e){return e.json()},function(e){throw"error: "+e}).then(function(e){s(e)})}},b=m;var f=function(e){return s.a.createElement("div",null,"Loading gif...")},k=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"}),v=a(9),y=function e(t){var a=this;Object(c.a)(this,e),this.createObject=function(e,t,n,s,i){var o=JSON.stringify(e);b.postData("".concat(a.routeString,"/").concat(t,"/").concat(n),s,o,function(e){return i(e)})},this.modifyObject=function(e,t,n){var s=JSON.stringify(e);b.putData("".concat(a.routeString,"/").concat(e._id.toString()),t,s,function(e){return n(e)})},this.getObject=function(e,t,n){var s="".concat(a.routeString,"/").concat(e);b.getData(s,t,function(e){n(e)})},this.getAllObjects=function(e,t){var n="".concat(a.routeString);b.getData(n,e,function(e){t(e)})},this.deleteObject=function(e,t,n){b.deleteData("".concat(a.routeString,"/").concat(e),t,function(e){return n(e)})},this.deleteObjectRebaseChildren=function(e,t,n,s,i){"task"===a.routeString||"category"===a.routeString?b.deleteData("".concat(a.routeString,"/").concat(e,"/").concat(n,"/").concat(s),t,function(e){return i(e)}):a.deleteObject(e,t,i)},this.rebaseObject=function(e,t,n,s,i){return b.patchData("".concat(a.routeString,"/id"),s,JSON.stringify({newParentType:t,parentId:n}),i)},this.routeString=t},O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this,"note"))).getNote=function(t,a,n){return e.getObject(t,a,n)},e.modifyNote=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteNote=function(t,a,n){return e.deleteObject(t,a,n)},e.createNote=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e}return Object(u.a)(t,e),t}(y);var g=function(e){return s.a.createElement("div",{className:"note",id:e.data.id},s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("div",{className:e.displayState===k.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},e.data.dateTime," : ",e.data.note))))},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"text",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"password",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),j=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"reset",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={checked:!!a.props.checked&&a.state.checked},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleCheck",value:function(e){this.setState({checked:e.target.checked})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"checkbox",name:this.props.name.toLowerCase(),checked:this.state.checked,onChange:this.handleCheck.bind(this)},this.props.attributes))))}}]),t}(n.Component),C=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"submit",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),S=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"button",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value instanceof Date?a.props.value.getDate():new Date(a.props.value).getDate()},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,"::",s.a.createElement("input",Object.assign({type:"date",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"email",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.props.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement("fragment",null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),L=Object.freeze({TEXT:E,PASSWORD:T,SUBMIT:C,RESET:j,CHECKBOX:A,BUTTON:S,DATE:D,EMAIL:N,NUMBER:x,TIMEINTERVAL:w}),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{id:this.props.id},this.props.inputFields.map(function(t){var a=Object.assign({key:""+e.props.data._id+t.props.name,value:e.props.data[t.props.name]},t.props);return t.content?s.a.createElement(t.type,a,t.content):s.a.createElement(t.type,a)}))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:L.TEXT},{props:{name:"description"},type:L.TEXT},{props:{name:"deadline"},type:L.DATE},{props:{name:"startDate"},type:L.DATE},{props:{name:"external"},type:L.CHECKBOX},{props:{name:"estTime"},type:L.NUMBER},{props:{name:"Done",action:a.submitAction},type:L.SUBMIT}]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{display:this.props.display?this.props.display:"block"},className:"taskInput",id:"form"+this.props.id},s.a.createElement(I,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{Note:"name"},type:L.TEXT}]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"noteInput",id:"form"+this.props.id},s.a.createElement(M,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),R=function e(t,a,n,s){Object(c.a)(this,e),this.timeStamp=a||new Date,this.note=t||"",this.parent=n||0,this.parentType=s||""},U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).input=function(){a.setState({displayState:k.INPUT})},a.update=function(){a.state.noteApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({task:e})})},a.modify=function(e){a.state.noteApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:k.EXPANDED})})},a.state={displayState:k.COLLAPSED,task:void 0,noteApiCalls:new O},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.task?this.state.displayState===k.INPUT?s.a.createElement(P,{data:this.state.note,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(g,{data:this.state.task,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken}):this.props.id?(this.update(),s.a.createElement(f,null)):s.a.createElement(P,{data:new R,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addNote})}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).addNote=function(){return a.setState({addNote:!0})},a.addNewNoteTrue=function(e){return[].concat(Object(v.a)(e),[null])},a.state={addNote:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.addNote?this.addNewNoteTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"noteList",id:this.props.catId+"NoteList"},t.map(function(t){return s.a.createElement(U,{id:t,xAccessToken:e.props.xAccessToken,modifyListActions:e.props.modifyListActions})}))}}]),t}(n.Component);var B=function(e){return s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,e.data.name),s.a.createElement("div",{className:e.displayState===k.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Date : ",e.data.date),s.a.createElement("div",{className:"property"},"Length : ",e.data.length),s.a.createElement("div",{className:"property"},"Completed : ",e.data.completed),e.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(ne,{data:e.data.prqTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement(W,{data:e.data.prqEvents,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(F,{data:e.data.notes,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):""))},q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:L.TEXT},{props:{name:"date"},type:L.DATE},{props:{name:"length"},type:L.NUMBER}]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"eventInput",id:"form"+this.props.id},s.a.createElement(I,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this,"event"))).getEvent=function(t,a,n){return e.getObject(t,a,n)},e.modifyEvent=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteEvent=function(t,a,n){return e.deleteObject(t,a,n)},e.createEvent=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e.rebaseEvent=function(t,a,n,s,i){return e.rebaseObject(t,a,n,s,i)},e}return Object(u.a)(t,e),t}(y),_=function e(t,a,n,s,i,o,r,l,p,u,d){Object(c.a)(this,e),this.name=t||"",this.dateTime=a||new Date,this.length=n||0,this.notes=s||[],this.prqTask=i||[],this.prqEvents=o||[],this.parent=r||0,this.completed=p||!1,this.prevDates=u||[],this.accountId=d||0},V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===k.COLLAPSED?a.setState({displayState:k.EXPANDED}):a.setState({displayState:k.COLLAPSED})},a.input=function(){a.setState({displayState:k.INPUT})},a.update=function(){a.state.eventApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({event:e})})},a.modify=function(e){a.state.eventApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:k.EXPANDED})})},a.state={displayState:k.COLLAPSED,event:void 0,eventApiCalls:new X},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.event?this.state.displayState===k.INPUT?s.a.createElement(q,{data:this.state.event,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(B,{data:this.state.event,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken}):this.props.id?(this.update(),s.a.createElement(f,null)):s.a.createElement(q,{data:new _,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addEvent})}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).addEvent=function(){return a.setState({addNote:!0})},a.addNewEventTrue=function(e){return[].concat(Object(v.a)(e),[null])},a.state={addEvent:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.addEvent?this.addNewEventTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},t.map(function(t){return s.a.createElement(V,{id:t,xAccessToken:e.props.xAccessToken,modifyListActions:e.props.modifyListActions})}))}}]),t}(n.Component);var J=function(e){return s.a.createElement("div",{className:"task ",id:e.data._id},s.a.createElement("div",{className:"collapser"},s.a.createElement("button",{onClick:e.buttonAction},e.displayState===k.EXPANDED?"V":">")),s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",{className:e.data.completed?"completedTaskName":"taskName"},e.data.name),s.a.createElement("div",{className:e.displayState===k.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Description : ",e.data.description),s.a.createElement("div",{className:"property"},"Completed : ",e.data.completed.toString()),s.a.createElement("div",{className:"property"},"Deadline : ",e.data.deadline),s.a.createElement("div",{className:"property"},"Start Date : ",e.data.startDate),s.a.createElement("div",{className:"property"},"External : ",e.data.external),s.a.createElement("div",{className:"property"},"Estimated Time : ",e.data.estTime),e.data.subTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"SubTasks:"),s.a.createElement(ne,{data:e.data.subTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions,parentType:"task",parentId:e.data._id,update:e.update,visibleTasks:e.visibleTasks})):"",e.data.events?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Events:"),s.a.createElement(W,{data:e.data.events,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions,parentType:"task",parentId:e.data._id})):"",e.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(ne,{data:e.data.prqTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement(W,{data:e.data.prqEvents,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(F,{data:e.data.notes,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions,parentType:"task",parentId:e.data._id})):"")),s.a.createElement("div",{className:"editDeleteButton"},s.a.createElement("button",{onClick:e.editAction,className:"inputButton"},s.a.createElement("img",{src:"../src/img/edit.svg"})),s.a.createElement("button",{onClick:function(){e.showDeleteModal(e.data._id,e.data.name)},className:"inputButton"},s.a.createElement("img",{src:"../src/img/trash.png"})),s.a.createElement("button",{onClick:e.complete,className:"inputButton"},"\u2713")))},H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this,"task"))).getTask=function(t,a,n){return e.getObject(t,a,n)},e.modifyTask=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteTaskAndChildren=function(t,a,n){return e.deleteObject(t,a,n)},e.deleteTaskRebaseChildren=function(t,a,n,s,i){return e.deleteObjectRebaseChildren(t,a,n,s)},e.createTask=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e.rebaseTask=function(t,a,n,s,i){return e.rebaseObject(t,a,n,s,i)},e}return Object(u.a)(t,e),t}(y),z=function e(t,a,n,s,i,o,r,l,p,u,d,h,m,b,f){Object(c.a)(this,e),this.name=t||"",this.description=a||"",this.subTasks=n||[],this.events=s||[],this.completed=i||"",this.deadline=o||new Date,this.startDate=r||new Date,this.notes=l||[],this.external=p||!1,this.parent=u||0,this.parentType=d||"",this.prqTask=h||[],this.prqEvent=m||[],this.estTime=b||0,this.accountId=f||""},G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===k.COLLAPSED?a.setState({displayState:k.EXPANDED}):a.setState({displayState:k.COLLAPSED})},a.input=function(){a.setState({displayState:k.INPUT})},a.update=function(){a.state.taskApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({task:e})})},a.modify=function(e){a.state.taskApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:k.EXPANDED})})},a.complete=function(){var e=Object.assign(a.state.task,{completed:!0});a.state.taskApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:k.EXPANDED})})},a.state={displayState:k.COLLAPSED,task:void 0,taskApiCalls:new H},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.task?this.state.displayState===k.INPUT?s.a.createElement(M,{id:this.props.id,display:"block",data:this.state.task,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(J,{data:this.state.task,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,showDeleteModal:this.props.showDeleteModal,update:this.update,complete:this.complete,visibleTasks:this.props.visibleTasks}):this.props.newTask?s.a.createElement(M,{display:this.props.display,data:new z,xAccessToken:this.props.xAccessToken,submitAction:this.props.addTask,id:this.props.id}):(this.update(),s.a.createElement(f,null))}}]),t}(n.Component),K=a(17),$=a.n(K),Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(p.a)(t).call(this,"category"))).getCategory=function(t,a,n){return e.getObject(t,a,n)},e.modifyCategory=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteCategoryAndChildren=function(t,a,n){return e.deleteObject(t,a,n)},e.deleteCategoryRebaseChildren=function(t,a,n,s,i){return e.deleteObjectRebaseChildren(t,a,n,n,i)},e.addCategory=function(e,t,a){return b.postData("category/",t,JSON.stringify(e),function(e){return a(e)})},e}return Object(u.a)(t,e),t}(y),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).apiCalls={category:new Q,task:new H,event:new X},a.getSuggestions=function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:a.state.branches.filter(function(e){return e.name.toLowerCase().slice(0,n)===t})},a.populateList=function(e){return e.map(function(e){a.apiCalls[e].getAllObjects(a.props.xAccessToken,function(t){a.setState({branches:a.state.branches.concat(t.filter(function(e){return e._id!==a.props.itemToDeleteId}).map(function(t){return Object.assign(t,{type:e})}))})})})},a.getSuggestionValue=function(e){return e.name},a.renderSuggestion=function(e){return s.a.createElement("div",null,e.name)},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.onChange=function(e,t){var n=t.newValue;a.setState({value:n})},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:a.getSuggestions(t)})},a.onSuggestionSelected=function(e,t){var n=t.suggestion;t.suggestionValue,t.suggestionIndex,t.sectionIndex,t.method;a.setState({rebaseParent:n})},a.deleteAndRebaseChildren=function(){a.props.rebaseChildren(a.state.rebaseParent.type,a.state.rebaseParent._id)},a.state={value:"",suggestions:[],branches:[],rebaseParent:null},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.populateList(this.props.parentTypes)}},{key:"render",value:function(){var e={placeholder:"Type the name of the new parent",value:this.state.value,onChange:this.onChange};return s.a.createElement("div",null,"Rebase child to parent:",s.a.createElement($.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:e,onSuggestionSelected:this.onSuggestionSelected}),s.a.createElement("button",{disabled:!this.state.rebaseParent,onClick:this.deleteAndRebaseChildren},"Delete and rebase children"))}}]),t}(n.Component),Z=a(13),ee=a.n(Z),te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ee.a.setAppElement("#root");var ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).deleteChildren=function(){a.props.deleteChildren(a.props.componentId),a.props.closeModal()},a.rebaseChildren=function(e,t){a.props.rebaseChildren(a.props.componentId,e,t),a.props.closeModal()},a.state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(ee.a,{isOpen:this.props.modalIsOpen,onAfterOpen:this.props.afterOpenModal,onRequestClose:this.props.closeModal,style:te,contentLabel:"Example Modal"},"The ",this.props.componentType," ",this.props.componentName," that you are deleting contains child Tasks or Events. Do you want to delete the children or assign them to a new parent?",s.a.createElement("button",{className:"deleteChildren",onClick:this.deleteChildren},"Delete Children"),s.a.createElement(Y,{itemToDeleteId:this.props.componentId,parentTypes:this.props.parentTypes,rebaseChildren:this.rebaseChildren,xAccessToken:this.props.xAccessToken}),s.a.createElement("button",{onClick:this.props.closeModal,id:"closeModalButton"},"Cancel delete"))}}]),t}(s.a.Component),ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).newTask=function(){return a.setState({newTask:!0})},a.addTask=function(e){a.taskApiCalls.createTask(e,a.props.parentType,a.props.parentId,a.props.xAccessToken,a.props.update),a.state.newTask=!1},a.deleteTaskRebaseChildren=function(e,t,n){a.taskApiCalls.deleteTaskRebaseChildren(e,a.props.xAccessToken,t,n,a.props.update)},a.deleteTaskAndChildren=function(e){a.taskApiCalls.deleteTaskAndChildren(e,a.props.xAccessToken,a.props.update)},a.showDeleteModal=function(e,t){a.setState({taskToDeleteName:t,taskToDeleteId:e}),a.setState({deleteModalOpen:!0})},a.state={newTask:!1,taskToDeleteName:"",taskToDeleteId:0,deleteModalOpen:!1},a.taskApiCalls=new H,a.showDeleteModal=a.showDeleteModal.bind(Object(d.a)(Object(d.a)(a))),a.afterOpenModal=a.afterOpenModal.bind(Object(d.a)(Object(d.a)(a))),a.closeDeleteModal=a.closeDeleteModal.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeDeleteModal",value:function(){this.setState({deleteModalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.data.filter(this.props.visibleTasks);return s.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},t.map(function(t){return s.a.createElement(G,{id:t,xAccessToken:e.props.xAccessToken,showDeleteModal:e.showDeleteModal,addTask:e.addTask,visibleTasks:e.props.visibleTasks})}),s.a.createElement(G,{display:this.state.newTask?"block":"none",id:"NewTaskCat".concat(this.props.parentId),xAccessToken:this.props.xAccessToken,showDeleteModal:this.showDeleteModal,addTask:this.addTask,newTask:!0,visibleTasks:this.props.visibleTasks}),s.a.createElement("div",{style:{display:this.state.newTask?"none":"block"},className:"addButton"},s.a.createElement("button",{onClick:this.newTask},"+")),s.a.createElement(ae,{modalIsOpen:this.state.deleteModalOpen,closeModal:this.closeDeleteModal,onAfterOpen:this.afterOpenModal,componentType:"task",parentTypes:["category","task"],componentName:this.state.taskToDeleteName,componentId:this.state.taskToDeleteId,rebaseChildren:this.deleteTaskRebaseChildren,deleteChildren:this.deleteTaskAndChildren,xAccessToken:this.props.xAccessToken}))}}]),t}(n.Component);var se=function(e){return s.a.createElement("div",{className:"category",id:e.data._id},s.a.createElement("div",{className:"collapser"},s.a.createElement("button",{onClick:e.buttonAction},e.displayState===k.EXPANDED?"V":">")),s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h2",{className:"catName"},e.data.name),s.a.createElement("h3",null,"Tasks"),s.a.createElement(ne,{data:e.data.tasks,parentType:"category",parentId:e.data._id,modifyListActions:e.modifyListActions,xAccessToken:e.xAccessToken,update:e.update,visibleTasks:e.visibleTasks}),s.a.createElement("h3",null,"Events"),s.a.createElement(W,{data:e.data.events,catId:e.data._id,parentType:"category",modifyListActions:e.modifyListActions,parentId:e.data._id,xAccessToken:e.xAccessToken,update:e.update})),s.a.createElement("div",{className:"editDeleteButton"},s.a.createElement("button",{onClick:e.editAction,className:"inputButton"},s.a.createElement("img",{src:"../src/img/edit.svg"})),s.a.createElement("button",{onClick:function(){e.showDeleteModal(e.data._id,e.data.name)},className:"inputButton"},s.a.createElement("img",{src:"../src/img/trash.png"}))))},ie=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:L.TEXT},{props:{name:"Done",action:a.submitAction},type:L.SUBMIT}]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(I,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),oe=function e(t,a,n){Object(c.a)(this,e),this.name=t||"",this.tasks=a||[],this.events=n||[]},ce=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===k.COLLAPSED?a.setState({displayState:k.EXPANDED}):a.setState({displayState:k.COLLAPSED})},a.input=function(){a.setState({displayState:k.INPUT})},a.update=function(){a.state.categoryApiCalls.getCategory(a.props.id,a.props.xAccessToken,function(e){return a.setState({category:e})})},a.modify=function(e){a.state.categoryApiCalls.modifyCategory(e,a.props.xAccessToken,function(e){return a.setState({category:e})})},a.state={displayState:k.COLLAPSED,category:void 0,categoryApiCalls:new Q},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){if(this.state.category)return this.state.displayState===k.INPUT?s.a.createElement(ie,{data:this.props.data,submitAction:this.modify}):s.a.createElement(se,{data:this.state.category,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,showDeleteModal:this.props.showDeleteModal,update:this.update,visibleTasks:this.props.visibleTasks});if(this.props.newCategory){var e=new oe;return s.a.createElement(ie,{display:this.props.display,data:e,xAccessToken:this.props.xAccessToken,submitAction:this.props.addCategory,id:this.props.id})}return this.update(),s.a.createElement(f,null)}}]),t}(n.Component),re=Object.freeze({INCOMPLETE:function(e){return!e.completed},ALL:function(e){return e},URGENT:function(e){return e.deadline-e.startDate<1}}),le=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).update=function(){b.getData("category/",a.props.xAccessToken,function(e){a.setState({categories:e})})},a.addCategory=function(e){a.categoryApiCalls.addCategory(e,a.props.xAccessToken,a.update)},a.deleteAndRebase=function(e,t,n){a.categoryApiCalls.deleteCategoryRebaseChildren(e,a.props.xAccessToken,t,n,a.update)},a.deleteWithChildren=function(e){a.categoryApiCalls.deleteCategoryAndChildren(e,a.props.xAccessToken,a.update)},a.showDeleteModal=function(e,t){a.setState({categoryToDeleteName:t,categoryToDeleteId:e}),a.state.deleteModalOpen=!0},a.afterOpenModal=function(){a.subtitle.style.color="#f00"},a.closeDeleteModal=function(){a.setState({deleteModalOpen:!1})},a.setVisibleTasks=function(){var e=document.getElementById("visibleTasks").value;a.setState({visibleTasks:re[e]})},a.state={categories:void 0,fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken}),newCategory:!1,categoryToDeleteName:"",categoryToDeleteId:"",deleteModalOpen:!1,visibleTasks:re.INCOMPLETE},a.categoryApiCalls=new Q,a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return this.state.categories?s.a.createElement("div",{className:"categoryList",id:"categoryRoot"},"] Display:",s.a.createElement("select",{id:"visibleTasks",onChange:this.setVisibleTasks},s.a.createElement("option",{value:"INCOMPLETE",selected:!0},"Incomplete Tasks"),s.a.createElement("option",{value:"ALL"},"All Tasks"),s.a.createElement("option",{value:"URGENT"},"Urgent")),this.state.categories.map(function(t){return s.a.createElement(ce,{id:t._id,xAccessToken:e.props.xAccessToken,showDeleteModal:e.showDeleteModal,addCategory:e.addCategory,visibleTasks:e.state.visibleTasks})}),s.a.createElement(ce,{display:this.state.newTask?"block":"none",id:"NewCat",xAccessToken:this.props.xAccessToken,showDeleteModal:this.showDeleteModal,addCategory:this.addCategory,newCategory:!0,visibleTasks:this.state.visibleTasks}),s.a.createElement("div",{style:{display:this.state.newCategory?"none":"block"},className:"addButton"},s.a.createElement("button",{onClick:this.newCategory},"+")),s.a.createElement(ae,{modalIsOpen:this.state.deleteModalOpen,closeModal:this.closeDeleteModal,onAfterOpen:this.afterOpenModal,componentType:"category",parentTypes:["category","task"],componentName:this.state.categoryToDeleteName,componentId:this.state.categoryToDeleteId,rebaseChildren:this.deleteAndRebase,deleteChildren:this.deleteWithChildren,xAccessToken:this.props.xAccessToken,visibleTasks:this.state.visibleTasks})):(b.getData("category/",this.props.xAccessToken,function(t){e.setState({categories:t,display:"allTasks"})}),s.a.createElement(f,null))}}]),t}(n.Component),pe=a(18),ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(pe.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.login(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:this.props.id},"Enter your username and password",s.a.createElement("label",null,"Username:",s.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),s.a.createElement("label",null,"Password:",s.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),t}(n.Component),de=s.a.createContext({}),he=de.Provider,me=(de.Consumer,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={username:void 0,xAccessToken:void 0,apiUrl:"http://localhost:3434",uiUrl:"http://localhost:8080"},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e,t){var a=this,n=h.composeXWwwFormUrlEncoded({username:e,password:t});b.postData("account/login",null,n,function(e){a.setState({xAccessToken:e.token})})}},{key:"render",value:function(){return this.state.xAccessToken?s.a.createElement("div",{id:"userRoot"},s.a.createElement(he,{value:this.state.xAccessToken},s.a.createElement(le,{xAccessToken:this.state.xAccessToken}))):s.a.createElement(ue,{login:this.login,apiUrl:this.state.apiUrl})}}]),t}(n.Component)),be=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(me,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(be,null),document.getElementById("root"))},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.5d336096.chunk.js.map