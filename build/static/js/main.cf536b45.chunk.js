(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),c=a.n(i),r=(a(24),a(1)),o=a(5),l=a(3),u=a(2),p=a(4),d=(a(25),a(6),a(7)),h={composeXWwwFormUrlEncoded:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},formInputsToObject:function(e){var t=Array.from(e.querySelectorAll("input")),a={};return t.forEach(function(e){"checkbox"===e.type?a[e.name]="checked"===e.checked:a[e.name]=e.value}),a}},m={getApiUrl:function(){return"https://insolent-preclude.herokuapp.com/"},getData:function(e,t,a){m.fetchData(e,"get",t,null,a)},postData:function(e,t,a,n){m.fetchData(e,"post",t,a,n)},putData:function(e,t,a,n){m.fetchData(e,"put",t,a,n)},deleteData:function(e,t,a){m.fetchData(e,"delete",t,null,a)},patchData:function(e,t,a,n){m.fetchData(e,"patch",t,a,n)},fetchData:function(e,t,a,n,s){var i=new Headers("get"===t?{}:{"Content-Type":"account/login"===e?"application/x-www-form-urlencoded":"application/json"});a&&i.set("x-access-token",a);var c={method:t,mode:"cors",redirect:"follow",headers:i};"get"!==t&&n&&(c.body=n);var r=new Request(m.getApiUrl()+e,c);fetch(r).then(function(e){return e.json()},function(e){throw"error: "+e}).then(function(e){s(e)})}},b=m,f=a(9),O=Object.freeze({EXPANDED:"expanded",COLLAPSED:"collapsed",INPUT:"input"}),v=a(10),j=function e(t){var a=this;Object(r.a)(this,e),this.createObject=function(e,t,n,s,i){var c=JSON.stringify(e);b.postData("".concat(a.routeString,"/").concat(t,"/").concat(n),s,c,function(e){return i(e)})},this.modifyObject=function(e,t,n){var s=JSON.stringify(e);b.putData("".concat(a.routeString,"/").concat(e._id.toString()),t,s,function(e){return n(e)})},this.getObject=function(e,t,n){var s="".concat(a.routeString,"/").concat(e);b.getData(s,t,function(e){n(e)})},this.getAllObjects=function(e,t){var n="".concat(a.routeString);b.getData(n,e,function(e){t(e)})},this.deleteObject=function(e,t,n){b.deleteData("".concat(a.routeString,"/").concat(e),t,function(e){return n(e)})},this.deleteObjectRebaseChildren=function(e,t,n,s,i){"task"===a.routeString||"category"===a.routeString?b.deleteData("".concat(a.routeString,"/").concat(e,"/").concat(n,"/").concat(s),t,function(e){return i(e)}):a.deleteObject(e,t,i)},this.rebaseObject=function(e,t,n,s,i){return b.patchData("".concat(a.routeString,"/id"),s,JSON.stringify({newParentType:t,parentId:n}),i)},this.routeString=t},y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this,"task"))).getTask=function(t,a,n){return e.getObject(t,a,n)},e.modifyTask=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteTaskAndChildren=function(t,a,n){return e.deleteObject(t,a,n)},e.deleteTaskRebaseChildren=function(t,a,n,s,i){return e.deleteObjectRebaseChildren(t,a,n,s)},e.createTask=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e.rebaseTask=function(t,a,n,s,i){return e.rebaseObject(t,a,n,s,i)},e}return Object(p.a)(t,e),t}(j),k=function e(t,a,n,s,i){Object(r.a)(this,e),this.addItem=function(e){return s.createObject(e,t,a,n,function(e){return i(e)})},this.deleteItem=function(e){return s.deleteObject(e,n,function(e){return i(e)})}},E=function(e){function t(e,a,n){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,"task",e,a,y,n))}return Object(p.a)(t,e),t}(k),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this,"note"))).getNote=function(t,a,n){return e.getObject(t,a,n)},e.modifyNote=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteNote=function(t,a,n){return e.deleteObject(t,a,n)},e.createNote=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e}return Object(p.a)(t,e),t}(j);var A=function(e){return s.a.createElement("div",{className:"note",id:e.data.id},s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("div",{className:e.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},e.data.dateTime," : ",e.data.note))))},T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"text",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"password",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),S=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"reset",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={checked:!!a.props.checked&&a.state.checked},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleCheck",value:function(e){this.setState({checked:e.target.checked})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"checkbox",name:this.props.name.toLowerCase(),checked:this.state.checked,onChange:this.handleCheck.bind(this)},this.props.attributes))))}}]),t}(n.Component),N=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"submit",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),x=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.action(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",Object.assign({type:"button",name:this.props.name.toLowerCase(),onClick:this.handleClick.bind(this)},this.props.attributes)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value instanceof Date?a.props.value.getDate():new Date(a.props.value).getDate()},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,"::",s.a.createElement("input",Object.assign({type:"date",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"email",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.props.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value?a.props.value:""},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement("fragment",null,s.a.createElement("label",null,this.props.name,":",s.a.createElement("input",Object.assign({type:"number",name:this.props.name.toLowerCase(),value:this.state.value,onChange:this.handleChange.bind(this)},this.props.attributes))))}}]),t}(n.Component),M=Object.freeze({TEXT:T,PASSWORD:C,SUBMIT:N,RESET:S,CHECKBOX:D,BUTTON:x,DATE:w,EMAIL:L,NUMBER:I,TIMEINTERVAL:P}),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{id:this.props.id},this.props.inputFields.map(function(t){var a=Object.assign({key:""+e.props.data._id+t.props.name,value:e.props.data[t.props.name]},t.props);return t.content?s.a.createElement(t.type,a,t.content):s.a.createElement(t.type,a)}))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:M.TEXT},{props:{name:"description"},type:M.TEXT},{props:{name:"deadline"},type:M.DATE},{props:{name:"startDate"},type:M.DATE},{props:{name:"external"},type:M.CHECKBOX},{props:{name:"estTime"},type:M.NUMBER},{props:{name:"Done",action:a.submitAction},type:M.SUBMIT}]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(R,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{Note:"name"},type:M.TEXT}]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"noteInput",id:"form"+this.props.id},s.a.createElement(F,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),q=function e(t,a,n,s){Object(r.a)(this,e),this.timeStamp=a||new Date,this.note=t||"",this.parent=n||0,this.parentType=s||""};var X=function(e){return s.a.createElement("div",null,"Loading gif...")},B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.noteApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({task:e})})},a.modify=function(e){a.state.noteApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,task:void 0,noteApiCalls:new g},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.state.task){new E(this.state.task._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(U,{data:this.state.note,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(A,{data:this.state.task,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken})}return this.props.id?(this.update(),s.a.createElement(X,null)):s.a.createElement(U,{data:new q,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addNote})}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addNote=function(){return a.setState({addNote:!0})},a.addNewNoteTrue=function(e){return[].concat(Object(v.a)(e),[null])},a.state={addNote:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.addNote?this.addNewNoteTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"noteList",id:this.props.catId+"NoteList"},t.map(function(t){return s.a.createElement(B,{id:t,xAccessToken:e.props.xAccessToken,modifyListActions:e.props.modifyListActions})}))}}]),t}(n.Component);var W=function(e){return s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,e.data.name),s.a.createElement("div",{className:e.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Date : ",e.data.date),s.a.createElement("div",{className:"property"},"Length : ",e.data.length),s.a.createElement("div",{className:"property"},"Completed : ",e.data.completed),e.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(oe,{data:e.data.prqTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement($,{data:e.data.prqEvents,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(_,{data:e.data.notes,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):""))},J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.data,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:M.TEXT},{props:{name:"date"},type:M.DATE},{props:{name:"length"},type:M.NUMBER}]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"eventInput",id:"form"+this.props.id},s.a.createElement(R,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.data}))}}]),t}(n.Component),H=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this,"event"))).getEvent=function(t,a,n){return e.getObject(t,a,n)},e.modifyEvent=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteEvent=function(t,a,n){return e.deleteObject(t,a,n)},e.createEvent=function(t,a,n,s,i){return e.createObject(t,a,n,s,i)},e.rebaseEvent=function(t,a,n,s,i){return e.rebaseObject(t,a,n,s,i)},e}return Object(p.a)(t,e),t}(j),V=function(e){function t(e,a,n){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,"event",e,a,H,n))}return Object(p.a)(t,e),t}(k),z=function e(t,a,n,s,i,c,o,l,u,p,d){Object(r.a)(this,e),this.name=t||"",this.dateTime=a||new Date,this.length=n||0,this.notes=s||[],this.prqTask=i||[],this.prqEvents=c||[],this.parent=o||0,this.completed=u||!1,this.prevDates=p||[],this.accountId=d||0},K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.eventApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({event:e})})},a.modify=function(e){a.state.eventApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,event:void 0,eventApiCalls:new H},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.state.event){var e=new V(this.state.event._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(J,{data:this.state.event,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(W,{data:this.state.event,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,modifyListActions:e})}return this.props.id?(this.update(),s.a.createElement(X,null)):s.a.createElement(J,{data:new z,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addEvent})}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addEvent=function(){return a.setState({addNote:!0})},a.addNewEventTrue=function(e){return[].concat(Object(v.a)(e),[null])},a.state={addEvent:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.addEvent?this.addNewEventTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"eventList",id:this.props.catId+"EventList"},t.map(function(t){return s.a.createElement(K,{id:t,xAccessToken:e.props.xAccessToken,modifyListActions:e.props.modifyListActions})}))}}]),t}(n.Component);var G=function(e){return s.a.createElement("div",{className:"task ",id:e.data._id},s.a.createElement("div",{className:"collapser"},s.a.createElement("button",{onClick:e.buttonAction},e.displayState===O.EXPANDED?"-":"+")),s.a.createElement("div",{className:"dataWrapper"},s.a.createElement("h4",null,e.data.name),s.a.createElement("div",{className:e.displayState===O.EXPANDED?"expanded":"collapsed"},s.a.createElement("div",{className:"property"},"Description : ",e.data.description),s.a.createElement("div",{className:"property"},"Completed : ",e.data.completed),s.a.createElement("div",{className:"property"},"Deadline : ",e.data.deadline),s.a.createElement("div",{className:"property"},"Start Date : ",e.data.startDate),s.a.createElement("div",{className:"property"},"External : ",e.data.external),s.a.createElement("div",{className:"property"},"Estimated Time : ",e.data.estTime),e.data.subTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"SubTasks:"),s.a.createElement(oe,{data:e.data.subTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.events?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Events:"),s.a.createElement($,{data:e.data.events,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.prqTasks?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Tasks:"),s.a.createElement(oe,{data:e.data.prqTasks,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.prqEvents?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Prerequisite Events:"),s.a.createElement($,{data:e.data.prqEvents,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"",e.data.notes?s.a.createElement("div",{className:"sublist"},s.a.createElement("h5",null,"Notes:"),s.a.createElement(_,{data:e.data.notes,xAccessToken:e.xAccessToken,modifyListActions:e.modifyListActions})):"")),s.a.createElement("div",{className:"editDeleteButton"},s.a.createElement("button",{onClick:e.editAction,className:"inputButton"},s.a.createElement("img",{src:"../src/img/edit.svg"})),s.a.createElement("button",{onClick:function(){e.showDeleteModal(e.data._id,e.data.name)},className:"inputButton"},s.a.createElement("img",{src:"../src/img/trash.png"}))))},Q=function e(t,a,n,s,i,c,o,l,u,p,d,h,m,b,f){Object(r.a)(this,e),this.name=t||"",this.description=a||"",this.subTasks=n||[],this.events=s||[],this.completed=i||"",this.deadline=c||new Date,this.startDate=o||new Date,this.notes=l||[],this.external=u||!1,this.parent=p||0,this.parentType=d||"",this.prqTask=h||[],this.prqEvent=m||[],this.estTime=b||0,this.accountId=f||""},Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.taskApiCalls.getObject(a.props.id,a.props.xAccessToken,function(e){return a.setState({task:e})})},a.modify=function(e){a.state.taskApiCalls.modifyObject(e,a.props.xAccessToken,function(e){a.setState({task:e,displayState:O.EXPANDED})})},a.state={displayState:O.COLLAPSED,task:void 0,taskApiCalls:new y},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.state.task){var e=new E(this.state.task._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(F,{data:this.state.task,xAccessToken:this.props.xAccessToken,submitAction:this.modify}):s.a.createElement(G,{data:this.state.task,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,xAccessToken:this.props.xAccessToken,modifyListActions:e,showDeleteModal:this.props.showDeleteModal})}return this.props.id?(this.update(),s.a.createElement(X,null)):s.a.createElement(F,{data:new Q,xAccessToken:this.props.xAccessToken,submitAction:this.props.modifyListActions.addTask})}}]),t}(n.Component),Z=function e(){Object(r.a)(this,e),this.searchBranchesByString=function(e,t,a,n){b.postData("search",a,{types:e,string:t},n)}},ee=a(18),te=a.n(ee),ae=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this,"category"))).getCategory=function(t,a,n){return e.getObject(t,a,n)},e.modifyCategory=function(t,a,n){return e.modifyObject(t,a,n)},e.deleteCategoryAndChildren=function(t,a,n){return e.deleteObject(t,a,n)},e.deleteCategoryRebaseChildren=function(t,a,n,s,i){return e.deleteObjectRebaseChildren(t,a,n,n,i)},e.addCategory=function(e,t,a){return b.postData("category/",t,e,function(e){return a(e)})},e}return Object(p.a)(t,e),t}(j),ne=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).apiCalls={category:new ae,task:new y,event:new H},a.getSuggestions=function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:a.state.branches.filter(function(e){return e.name.toLowerCase().slice(0,n)===t})},a.populateList=function(e){return e.map(function(e){return a.apiCalls[e].getAllObjects()}).flat()},a.searchApiCalls=new Z,a.getSuggestionValue=function(e){return e.name},a.renderSuggestion=function(e){return s.a.createElement("div",null,e.name)},a.onSuggestionsClearRequested=function(){a.setState({suggestions:[]})},a.onChange=function(e,t){a.setState({value:t})},a.onSuggestionsFetchRequested=function(e){var t=e.value;a.setState({suggestions:a.getSuggestions(t)})},a.inputProps={placeholder:"Type the name of the new parent",value:a.state.value,onChange:a.onChange},a.state={value:"",suggestions:[],branches:[]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.populateList(this.props.types);this.setState({branches:e})}},{key:"render",value:function(){return s.a.createElement("div",null,"Rebase child to parent:",s.a.createElement(te.a,{suggestions:this.state.suggestions,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:this.inputProps}))}}]),t}(n.Component),se=a(14),ie=a.n(se),ce={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var re=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).deleteChildren=function(){a.props.deleteChildren(a.props.taskToDeleteId),a.props.closeModal()},a.rebaseChildren=function(e,t){a.props.rebaseChildren(a.props.taskToDeleteId,e,t),a.props.closeModal()},a.state={},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(ie.a,{isOpen:this.props.modalIsOpen,onAfterOpen:this.props.afterOpenModal,onRequestClose:this.props.closeModal,style:ce,contentLabel:"Example Modal"},"The ",this.props.componentType," ",this.props.componentName," that you are deleting contains child Tasks or Events. Do you want to delete the children or assign them to a new parent?",s.a.createElement("button",{className:"deleteChildren",onClick:this.deleteChildren},"Delete Children"),s.a.createElement(ne,{parentTypes:this.props.parentTypes,buttonAction:this.state.rebaseChildren,xAccessToken:this.props.xAccessToken}),s.a.createElement("button",{onClick:this.props.closeModal,id:"closeModalButton"},"Cancel delete"))}}]),t}(s.a.Component),oe=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addTask=function(){return a.setState({addTask:!0})},a.addNewTaskTrue=function(e){if(!e||!e.length)return[new Q];e.push(new Q)},a.deleteTaskRebaseChildren=function(e,t,n){a.taskApiCalls.deleteTaskRebaseChildren(e,t,n,function(){return a.props.update})},a.deleteTaskAndChildren=function(e){a.taskApiCalls.deleteTaskAndChildren(e,a.props.xAccessToken,function(){return a.props.update})},a.showDeleteModal=function(e,t){a.setState({taskToDeleteName:t,taskToDeleteId:e}),a.setState({deleteModalOpen:!0})},a.state={addTask:!1,taskToDeleteName:"",taskToDeleteId:0,deleteModalOpen:!1},a.taskApiCalls=new y,a.showDeleteModal=a.showDeleteModal.bind(Object(d.a)(Object(d.a)(a))),a.afterOpenModal=a.afterOpenModal.bind(Object(d.a)(Object(d.a)(a))),a.closeDeleteModal=a.closeDeleteModal.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeDeleteModal",value:function(){this.setState({deleteModalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state.addTask?this.addNewTaskTrue(this.props.data):this.props.data;return s.a.createElement("div",{className:"TaskList",id:this.props.catId+"Tasks"},t.map(function(t){return s.a.createElement(Y,{id:t,xAccessToken:e.props.xAccessToken,modifyListActions:e.props.modifyListActions,showDeleteModal:e.showDeleteModal})}),s.a.createElement(re,{modalIsOpen:this.state.deleteModalOpen,closeModal:this.closeDeleteModal,onAfterOpen:this.afterOpenModal,componentType:"task",parentTypes:["component","task"],componentName:this.state.taskToDeleteName,rebaseChildren:this.deleteTaskRebaseChildren,deleteChildren:this.deleteTaskAndChildren,taskToDeleteName:this.state.taskToDeleteName,taskToDeleteId:this.state.taskToDeleteId,xAccessToken:this.props.xAccessToken}))}}]),t}(n.Component);var le=function(e){var t;return s.a.createElement("div",{className:"category",id:e.data._id},s.a.createElement("h2",{className:"catName"},e.data.name),s.a.createElement("h3",null,"Tasks"),s.a.createElement(oe,{data:e.data.tasks,catId:e.data._id,modifyListActions:e.modifyListActions,xAccessToken:e.xAccessToken,update:e.update}),s.a.createElement("h3",null,"Events"),s.a.createElement($,(t={data:e.data.events,catId:e.data._id,modifyListActions:e.modifyListActions},Object(f.a)(t,"catId",e.data._id),Object(f.a)(t,"xAccessToken",e.xAccessToken),Object(f.a)(t,"update",e.update),t)))},ue=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).submitAction=function(){var e=document.getElementById("form"+a.props.id),t=h.formInputsToObject(e),n=Object.assign(a.props.category,t);a.props.submitAction(n)},a.state={inputFields:[{props:{name:"name"},type:M.TEXT}]},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"taskInput",id:"form"+this.props.id},s.a.createElement(R,{inputFields:this.state.inputFields,handlers:this.state.handlers,data:this.props.category}))}}]),t}(n.Component),pe=function(e){function t(e,a,n){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,"category",e,a,ae,n))}return Object(p.a)(t,e),t}(k),de=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).expandCollapse=function(){a.state.displayState===O.COLLAPSED?a.setState({displayState:O.EXPANDED}):a.setState({displayState:O.COLLAPSED})},a.input=function(){a.setState({displayState:O.INPUT})},a.update=function(){a.state.categoryApiCalls.getCategory(a.props.id,a.props.xAccessToken,function(e){return a.setState({category:e})})},a.modify=function(e){a.categoryApiCalls.modifyCategory(e,a.props.xAccessToken,function(e){return a.setState({category:e})})},a.state={displayState:O.COLLAPSED,category:void 0,categoryApiCalls:new ae},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.state.category){var e=new pe(this.state.category._id,this.props.xAccessToken,this.update);return this.state.displayState===O.INPUT?s.a.createElement(ue,{data:this.props.data,submitAction:this.modify}):s.a.createElement(le,{data:this.state.category,buttonAction:this.expandCollapse,editAction:this.input,displayState:this.state.displayState,modifyListActions:e,xAccessToken:this.props.xAccessToken,update:this.update})}return this.update(),s.a.createElement(X,null)}}]),t}(n.Component),he=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={categories:void 0,fetchOptions:{method:"get"},headers:new Headers({"x-access-token":a.props.xAccessToken})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.categories?s.a.createElement("div",{className:"categoryList",id:"categoryRoot"},this.state.categories.map(function(t){return s.a.createElement(de,{id:t._id,xAccessToken:e.props.xAccessToken})})):(b.getData("category/",this.props.xAccessToken,function(t){e.setState({categories:t})}),s.a.createElement(X,null))}}]),t}(n.Component),me=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.login(this.state.username,this.state.password),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:this.props.id},"Enter your username and password",s.a.createElement("label",null,"Username:",s.a.createElement("input",{type:"text",name:"username",id:"usernameInput",value:this.state.username,onChange:this.handleChange})),s.a.createElement("label",null,"Password:",s.a.createElement("input",{type:"password",name:"password",id:"passwordInput",value:this.state.password,onChange:this.handleChange})),s.a.createElement("input",{type:"submit",name:"submit",id:"submitInput",value:"submit",onClick:this.handleSubmit}))}}]),t}(n.Component),be=s.a.createContext({}),fe=be.Provider,Oe=(be.Consumer,function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={username:void 0,xAccessToken:void 0,apiUrl:"http://localhost:3434",uiUrl:"http://localhost:8080"},a.login=a.login.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"login",value:function(e,t){var a=this,n=h.composeXWwwFormUrlEncoded({username:e,password:t});b.postData("account/login",null,n,function(e){a.setState({xAccessToken:e.token})})}},{key:"render",value:function(){return this.state.xAccessToken?s.a.createElement("div",{id:"userRoot"},s.a.createElement(fe,{value:this.state.xAccessToken},s.a.createElement(he,{xAccessToken:this.state.xAccessToken}))):s.a.createElement(me,{login:this.login,apiUrl:this.state.apiUrl})}}]),t}(n.Component)),ve=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(Oe,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(ve,null),document.getElementById("root"))},6:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.cf536b45.chunk.js.map