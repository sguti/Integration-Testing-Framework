(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},31:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),o=a.n(r),d=a(10),c=(a(31),a(4)),l=a(6);c.b.add(l.m),c.b.add(l.k),c.b.add(l.a),c.b.add(l.i),c.b.add(l.j),c.b.add(l.f),c.b.add(l.d),c.b.add(l.e),c.b.add(l.b),c.b.add(l.n),c.b.add(l.h),c.b.add(l.l),c.b.add(l.c),c.b.add(l.g);var i=a(7),p=a(8),u=a(11),f=a(9),C=a(12),m=(a(33),a(34),a(36),a(3)),E="ADD_NEW_SIDENAV_FOLDER",b="REMOVE_SIDENAV_FOLDER",v="ADD_TEST_CASE",I="REMOVE_TEST_CASE",O="FOLDER_ICON_CLICK",h="RUN_TEST_CASE",y="RUN_TEST_CASE_COMPLETE",j="SELECT_FOLDER",x="SELECT_TEST_CASE",N="ADD_TEST_CASE_STEP",T="REMOVE_TEST_CASE_STEP",S="EDIT_TEST_CASE_STEP",_="UPDATE_TEST_CASE_STEP",g="EDIT_FOLDER_NAME",k="EDIT_TEST_CASE_NAME",A="SAVE_FOLDER_NAME",R="SAVE_TEST_CASE_NAME";function D(e){return{type:b,payload:e}}function F(e){return{type:v,payload:e}}function w(e){return{type:x,payload:e}}var L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(f.a)(t).call(this,e))).toggle=function(){a.setState(function(e,t){return{isExpanded:!e.isExpanded}})},a.state={isExpanded:!1},a}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"sidenav-wrapper"},this.state.isExpanded&&s.a.createElement(m.a,{icon:"times",onClick:this.toggle}),!this.state.isExpanded&&s.a.createElement(m.a,{icon:"bars",onClick:this.toggle}),this.state.isExpanded&&s.a.createElement("div",{className:"sidenav-content"},s.a.createElement("div",{className:"sidenav-primary-toolbar"},s.a.createElement(m.a,{onClick:this.props.onAddFolderClick,icon:"folder-plus"}),s.a.createElement(m.a,{icon:"th-list"})),s.a.createElement("div",{className:"sidenav-folders"},this.props.folders.map(function(t){return s.a.createElement("div",{className:"sidenav-folder-wrapper",key:t.id},s.a.createElement("div",{className:"folder-header"},s.a.createElement("div",{onClick:function(){return e.props.onFolderIconClick({folderId:t.id})}},t.open&&s.a.createElement(m.a,{icon:"folder-open"}),!t.open&&s.a.createElement(m.a,{icon:"folder"})),s.a.createElement("span",{className:"folder-name",onClick:function(a){a.preventDefault(),e.props.onSelectFolder({folderId:t.id})}}," ",!t.editable&&t.name,t.editable&&s.a.createElement("input",{type:"text",autoFocus:"true",value:t.name,onClick:function(e){e.preventDefault()},onBlur:function(a){a.preventDefault(),e.props.onSaveFolderName({folderId:t.id,blur:!0,folderName:a.target.value})},onChange:function(a){a.preventDefault(),e.props.onSaveFolderName({folderId:t.id,folderName:a.target.value})}}),!t.editable&&s.a.createElement(m.a,{icon:"pen",onClick:function(){return e.props.onEditFolderName({folderId:t.id})}})),s.a.createElement("div",{className:"folder-options-wrapper"},s.a.createElement(m.a,{icon:"ellipsis-h"}),s.a.createElement("div",{className:"folder-options"},s.a.createElement("div",{onClick:function(){return e.props.onAddTestCase({folderId:t.id})}},s.a.createElement(m.a,{icon:"plus"})),s.a.createElement("div",{onClick:function(){return e.props.onRemoveFolderClick({folderId:t.id})}},s.a.createElement(m.a,{icon:"trash"})),s.a.createElement("div",null,s.a.createElement(m.a,{icon:"play"}))))),s.a.createElement("div",{className:"folder-content"},t.open&&t.testCases.map(function(a){return s.a.createElement("div",{className:"test-case"},s.a.createElement(m.a,{icon:"vial"}),a.isRunning&&s.a.createElement("div",{class:"loading"}),s.a.createElement("span",{className:a.isRunning?"test-case-name running":"test-case-name",onClick:function(){return e.props.onSelectTestCase({folderId:t.id,testCaseId:a.id})}},a.name),s.a.createElement("div",{className:"test-case-options-wrapper"},s.a.createElement(m.a,{icon:"ellipsis-h"}),s.a.createElement("div",{className:"test-case-options"},s.a.createElement("div",{onClick:function(){return e.props.onRemoveTestCase({folderId:t.id,testCaseId:a.id})}},s.a.createElement(m.a,{icon:"trash"})),s.a.createElement("div",null,s.a.createElement(m.a,{icon:"play"})))))})))}))))}}]),t}(n.Component),U=Object(d.b)(function(e){return{folders:e.sidenav.folders}},function(e){return{onAddFolderClick:function(){var t;e({type:E,payload:t})},onRemoveFolderClick:function(t){e(D(t))},onEditFolderName:function(t){e(function(e){return{type:g,payload:e}}(t))},onSaveFolderName:function(t){e(function(e){return{type:A,payload:e}}(t))},onAddTestCase:function(t){e(F(t))},onFolderIconClick:function(t){e(function(e){return{type:O,payload:e}}(t))},onRemoveTestCase:function(t){e(function(e){return{type:I,payload:e}}(t))},onSelectFolder:function(t){e(function(e){return{type:j,payload:e}}(t))},onSelectTestCase:function(t){e(w(t))}}})(L),M=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"top-bar-wrapper"},s.a.createElement("div",{className:"menu"}),s.a.createElement("div",{className:"current-selection"},"folder"===this.props.currentContext.type&&s.a.createElement(m.a,{icon:"folder"}),"testcase"===this.props.currentContext.type&&s.a.createElement(m.a,{icon:"vial"}),s.a.createElement("span",null,this.props.currentContext.name)),s.a.createElement("div",{className:"tools"},"folder"===this.props.currentContext.type&&s.a.createElement("div",{className:"tools-options-container"},s.a.createElement("div",{onClick:function(){return e.props.onAddTestCase({folderId:e.props.currentContext.folder.id})}},s.a.createElement(m.a,{icon:"plus"})),s.a.createElement("div",{onClick:function(){return e.props.onRemoveFolderClick({folderId:e.props.currentContext.folder.id})}},s.a.createElement(m.a,{icon:"trash"})),s.a.createElement("div",null,s.a.createElement(m.a,{icon:"play"}))),"testcase"===this.props.currentContext.type&&s.a.createElement("div",{className:"tools-options-container"},s.a.createElement("div",{onClick:function(){return e.props.onAddTestCaseStep({folderId:e.props.currentContext.folder.id,testCaseId:e.props.currentContext.testCase.id})}},s.a.createElement(m.a,{icon:"plus"})),s.a.createElement("div",{onClick:function(){return e.props.onRunTestCase({folderId:e.props.currentContext.folder.id,testCaseId:e.props.currentContext.testCase.id})}},s.a.createElement(m.a,{icon:"play"})))),s.a.createElement("div",{className:"user-info"},s.a.createElement(m.a,{icon:"user"})))}}]),t}(n.Component)),q=Object(d.b)(function(e){return{currentContext:e.sidenav.currentContext}},function(e){return{onRemoveFolderClick:function(t){e(D(t))},onAddTestCase:function(t){e(F(t))},onAddTestCaseStep:function(t){e(function(e){return{type:N,payload:e}}(t))},onRunTestCase:function(t){e(function(e){return function(t){return t({type:h,payload:e}),new Promise(function(a){setTimeout(function(){a(),t({type:y,payload:e})},2e3)})}}(t))}}})(M),P=(a(40),a(42),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"test-case-compact-wrapper"},s.a.createElement("div",{className:"test-case-compact-header"},s.a.createElement("span",{className:"test-case-name",onClick:function(){return e.props.onSelectTestCase({folderId:e.props.folderId,testCaseId:e.props.testCase.id})}},this.props.testCase.name)),s.a.createElement("div",{className:"test-case-compact-steps"},!this.props.testCase.steps.length&&s.a.createElement("span",null," No Step Added Yet ")),s.a.createElement("div",{className:"test-case-compact-historical"}))}}]),t}(n.Component)),V=Object(d.b)(function(e){return{}},function(e){return{onSelectTestCase:function(t){e(w(t))}}})(P),W=(a(44),a(46),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"step-wrapper"},s.a.createElement("div",{className:"step-header"},!this.props.step.nameEditable&&this.props.step.name,this.props.step.nameEditable&&s.a.createElement("input",{type:"text",autoFocus:"true",value:this.props.step.name,onClick:function(e){e.preventDefault()},onBlur:function(t){t.preventDefault(),e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{name:t.target.value,nameEditable:!1}})},onChange:function(t){t.preventDefault(),e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{name:t.target.value}})}}),!this.props.step.nameEditable&&s.a.createElement(m.a,{icon:"pen",onClick:function(t){e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{nameEditable:!0}})}})),s.a.createElement("div",{className:"step-type"},s.a.createElement("div",{className:"step-type-options  blue semi-square"},s.a.createElement("select",{name:"step-type-options",onChange:function(t){return e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{featureId:t.target.value}})},value:this.props.step.featureId},this.props.features.map(function(e){return s.a.createElement("option",{value:e.id},e.name)})))),s.a.createElement("div",{className:"step-data"},this.props.features.find(function(t){return t.id==e.props.step.featureId}).inputRequired&&!this.props.features.find(function(t){return t.id==e.props.step.featureId}).multiline&&s.a.createElement("input",{type:"text",value:this.props.step.data,onChange:function(t){return e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{data:t.target.value}})}}),this.props.features.find(function(t){return t.id==e.props.step.featureId}).inputRequired&&this.props.features.find(function(t){return t.id==e.props.step.featureId}).multiline&&s.a.createElement("textarea",{cols:"50",rows:"20",value:this.props.step.data,onChange:function(t){return e.props.onUpdateTestCaseStep({folderId:e.props.folderId,testCaseId:e.props.testCaseId,stepId:e.props.step.id,delta:{data:t.target.value}})}})))}}]),t}(n.Component)),B=Object(d.b)(function(e){return{features:e.features.features}},function(e){return{onUpdateTestCaseStep:function(t){return e(function(e){return{type:_,payload:e}}(t))}}})(W),J=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"test-case-wrapper"},s.a.createElement("div",{className:"test-case-header"},!this.props.testCase.nameEditable&&this.props.testCase.name,this.props.testCase.nameEditable&&s.a.createElement("input",{type:"text",autoFocus:"true",value:this.props.testCase.name,onClick:function(e){e.preventDefault()},onBlur:function(t){t.preventDefault(),e.props.onSaveTestCaseName({folderId:e.props.folderId,testCaseId:e.props.testCase.id,blur:!0,testCaseName:t.target.value})},onChange:function(t){t.preventDefault(),e.props.onSaveTestCaseName({folderId:e.props.folderId,testCaseId:e.props.testCase.id,testCaseName:t.target.value})}}),!this.props.testCase.nameEditable&&s.a.createElement(m.a,{icon:"pen",onClick:function(){return e.props.onEditTestCaseName({folderId:e.props.folderId,testCaseId:e.props.testCase.id})}})),s.a.createElement("div",{className:"test-case-steps"},this.props.testCase.steps.map(function(t){return s.a.createElement("div",{key:t.id},s.a.createElement(B,{step:t,folderId:e.props.folderId,testCaseId:e.props.testCase.id}))})))}}]),t}(n.Component),K=Object(d.b)(function(e){return{}},function(e){return{onSelectTestCase:function(t){e(w(t))},onEditTestCaseName:function(t){e(function(e){return{type:k,payload:e}}(t))},onSaveTestCaseName:function(t){e(function(e){return{type:R,payload:e}}(t))}}})(J),Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App-content"},"folder"===this.props.currentContext.type&&this.props.currentContext.folder.testCases.map(function(t){return s.a.createElement(V,{folderId:e.props.currentContext.folder.id,testCase:t,key:t.id})}),"testcase"===this.props.currentContext.type&&s.a.createElement(K,{folderId:this.props.currentContext.folder.id,testCase:this.props.currentContext.testCase}))}}]),t}(n.Component),$=Object(d.b)(function(e){return{currentContext:e.sidenav.currentContext}},function(e){return{}})(Y),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(q,null),s.a.createElement(U,null),s.a.createElement($,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(13),H=a(5),Q=a(1);var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{folders:[],selected:{},currentContext:{type:"none",name:"",folder:{},testcase:null}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(Q.a)({},e,{folders:e.folders.concat({id:"__folder_".concat(e.folders.length+1),name:"Folder ".concat(e.folders.length+1),open:!1,testCases:[]})});case b:return Object(Q.a)({},e,{folders:Object(H.a)(e.folders.filter(function(e){return e.id!==t.payload.folderId}))});case g:return Object(Q.a)({},e,{folders:e.folders.map(function(e){return e.id===t.payload.folderId&&(e.editable=!0),e})});case A:return Object(Q.a)({},e,{folders:e.folders.map(function(e){return e.id===t.payload.folderId&&(e.editable=!t.payload.blur,e.name=t.payload.folderName),e})});case v:var a=Object(Q.a)({},e,{folders:e.folders.map(function(e){return e.id===t.payload.folderId&&(e.testCases=e.testCases.concat({id:"".concat(e.id,"_testcase_").concat(e.testCases.length+1),name:"Test Case ".concat(e.testCases.length+1),steps:[],history:[]}),e.open=!0),e})});return e.currentContext.folder.id===t.payload.folderId&&(a=Object(Q.a)({},a,{currentContext:Object(Q.a)({},a.currentContext,{folder:Object(Q.a)({},a.folders.find(function(e){return e.id===t.payload.folderId}))})})),a;case N:var n=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),s=e.folders[n].testCases.findIndex(function(e){return e.id===t.payload.testCaseId});return e.folders[n].testCases[s].steps=Object(H.a)(e.folders[n].testCases[s].steps).concat([{id:"".concat(e.folders[n].id,"_testcase_").concat(e.folders[n].testCases[s].id,"_step_").concat(e.folders[n].testCases[s].steps.length+1),name:"Step ".concat(e.folders[n].testCases[s].steps.length+1),featureId:1,data:""}]),e.folders[n].testCases=Object(H.a)(e.folders[n].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[n].testCases[s])})});case k:var r=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),o=e.folders[r].testCases.findIndex(function(e){return e.id===t.payload.testCaseId});return e.folders[r].testCases[o]=Object(Q.a)({},e.folders[r].testCases[o],{nameEditable:!0}),e.folders[r].testCases=Object(H.a)(e.folders[r].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[r].testCases[o])})});case R:var d=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),c=e.folders[d].testCases.findIndex(function(e){return e.id===t.payload.testCaseId});return e.folders[d].testCases[c]=Object(Q.a)({},e.folders[d].testCases[c],{nameEditable:!t.payload.blur,name:t.payload.testCaseName}),e.folders[d].testCases=Object(H.a)(e.folders[d].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[d].testCases[c]),name:"".concat(e.folders[d].name,"/").concat(e.folders[d].testCases[c].name)})});case h:var l=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),i=e.folders[l].testCases.findIndex(function(e){return e.id===t.payload.testCaseId});return e.folders[l].testCases[i]=Object(Q.a)({},e.folders[l].testCases[i],{isRunning:!0}),e.folders[l].testCases=Object(H.a)(e.folders[l].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[l].testCases[i])})});case y:var p=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),u=e.folders[p].testCases.findIndex(function(e){return e.id===t.payload.testCaseId});return e.folders[p].testCases[u]=Object(Q.a)({},e.folders[p].testCases[u],{isRunning:!1}),e.folders[p].testCases=Object(H.a)(e.folders[p].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[p].testCases[u])})});case _:var f=e.folders.findIndex(function(e){return e.id===t.payload.folderId}),C=e.folders[f].testCases.findIndex(function(e){return e.id===t.payload.testCaseId}),m=e.folders[f].testCases[C].steps.findIndex(function(e){return e.id===t.payload.stepId});return e.folders[f].testCases[C].steps[m]=Object(Q.a)({},e.folders[f].testCases[C].steps[m],t.payload.delta),e.folders[f].testCases=Object(H.a)(e.folders[f].testCases),e.folders[f].testCases[C].steps=Object(H.a)(e.folders[f].testCases[C].steps),e.folders[f].testCases=Object(H.a)(e.folders[f].testCases),Object(Q.a)({},e,{folders:Object(H.a)(e.folders),currentContext:Object(Q.a)({},e.currentContext,{testCase:Object(Q.a)({},e.folders[f].testCases[C])})});case T:case S:return e;case O:return Object(Q.a)({},e,{folders:e.folders.map(function(e){return e.id===t.payload.folderId&&(e.open=!e.open),e})});case I:var D=Object(Q.a)({},e,{folders:e.folders.map(function(e){return e.id===t.payload.folderId&&(e.testCases=e.testCases.filter(function(e){return e.id!==t.payload.testCaseId})),e})});return e.currentContext.folder.id===t.payload.folderId&&(D=Object(Q.a)({},D,{currentContext:Object(Q.a)({},D.currentContext,{folder:Object(Q.a)({},D.folders.find(function(e){return e.id===t.payload.folderId}))})})),D;case x:var F=e.folders.find(function(e){return e.id===t.payload.folderId}),w=F.testCases.find(function(e){return e.id===t.payload.testCaseId});return Object(Q.a)({},e,{currentContext:Object(Q.a)({},e.currentContext,{type:"testcase",name:"".concat(F.name,"/").concat(w.name),folder:Object(Q.a)({},F),testCase:Object(Q.a)({},w)})});case j:var L=e.folders.find(function(e){return e.id===t.payload.folderId});return Object(Q.a)({},e,{currentContext:Object(Q.a)({},e.currentContext,{type:"folder",name:L.name,folder:Object(Q.a)({},L)})});default:return e}};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{features:[{id:1,name:"Open URL",inputRequired:!0,description:"Opens URL in current tab"},{id:2,name:"Wait for DOM element",inputRequired:!0,description:"Wait for an element to be loaded in DOM"},{id:3,name:"Screenshot",inputRequired:!1,description:"Captures screenshot of current tab"},{id:4,name:"Script",inputRequired:!0,multiline:!0,description:"Executes the script in current context of the tab"},{id:5,name:"Wait",inputRequired:!0,description:"Wait for the mentioned mentioned time"}]};return(arguments.length>1?arguments[1]:void 0).type,e},ee=Object(G.c)({sidenav:X,features:Z}),te=[a(22).a],ae=function(){return Object(G.d)(ee,G.a.apply(void 0,te))}();o.a.render(s.a.createElement(d.a,{store:ae},s.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.2eb74c99.chunk.js.map