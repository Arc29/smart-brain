(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},106:function(e,t){},138:function(e,t){},139:function(e,t){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),i=a.n(r),l=(a(95),a(9)),o=a(10),c=a(12),m=a(11),h=a(13),u=(a(96),function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{className:"flex justify-end pa3"},s.a.createElement("p",{className:"f3 link dim black underline pointer pa2",onClick:function(){return t("home")}},"Home"),s.a.createElement("p",{className:"f3 link dim black underline pointer pa2",onClick:function(){return t("profile")}},"Profile"),s.a.createElement("p",{className:"f3 link dim black underline pointer pa2",onClick:function(){return t("signin")}},"Sign Out")):s.a.createElement("nav",{className:"flex justify-end pa3"},s.a.createElement("p",{className:"f3 link dim black underline pointer pa2",onClick:function(){return t("signin")}},"Sign In"),s.a.createElement("p",{className:"f3 link dim black underline pointer pa2",onClick:function(){return t("register")}},"Register"))}),p=a(86),d=a.n(p),b=(a(97),a(87)),f=a.n(b),g=function(){return s.a.createElement("div",{className:"ma4 mt0 "},s.a.createElement(d.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner"}," ",s.a.createElement("img",{alt:"logo",src:f.a})," ")))},w=(a(98),function(e){var t=e.onInputChange,a=e.onButtonClick;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Git it a try."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),E=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"f3 white"},t+", your current number of entries is..."),s.a.createElement("div",{className:"f1 white"},a))},v=a(88),N=a.n(v),C=(a(99),function(e){var t=e.imageURL,a=e.box;return s.a.createElement("div",{className:"center pa3"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputImg",alt:"",src:t,width:"500px",height:"auto"}),s.a.createElement("div",{className:"boxContainer",style:{top:a.top_row,bottom:a.bottom_row,left:a.left_col,right:a.right_col}})))}),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onSEmailChange=function(e){e.target.value?a.setState({emailMatch:!0}):a.setState({emailMatch:!1}),a.setState({signInEmail:e.target.value})},a.onSPasswordChange=function(e){e.target.value?a.setState({passMatch:!0}):a.setState({passMatch:!1}),a.setState({signInPassword:e.target.value})},a.onLogin=function(e){e.preventDefault(),a.state.emailMatch&&a.state.passMatch&&fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,pass:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.message?(a.props.onUserChange(e.id),a.props.onRouteChange("home")):window.alert(e)}).catch(function(e){return console.log(e)})},a.state={signInEmail:"",signInPassword:"",emailMatch:!1,passMatch:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("article",{class:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{onSubmit:this.onLogin,method:"post",className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onSEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onSPasswordChange})),s.a.createElement("div",{className:"lh-copy mt3"},this.state.emailMatch?this.state.passMatch?s.a.createElement("p",null):s.a.createElement("p",{className:"f6 red"},"Password must be filled"):s.a.createElement("p",{className:"f6 red"},"Email must be filled"))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{className:"f6 link dim black db pointer",onClick:function(){return e.props.onRouteChange("register")}},"Register")))))}}]),t}(s.a.Component),y=a(17),S=a.n(y),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){return a.setState({email:e.target.value})},a.onPassChange=function(e){return a.setState({password:e.target.value})},a.onNameChange=function(e){return a.setState({name:e.target.value})},a.onRegister=function(e){e.preventDefault(),fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,passHash:S.a.hashSync(a.state.password,S.a.genSaltSync(10)),name:a.state.name})}).then(function(e){return e.json()}).then(function(e){e.id?a.props.onRouteChange("signin"):window.alert(e)})},a.state={email:"",password:"",name:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("article",{class:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{onSubmit:this.onRegister,method:"post",className:"measure "},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPassChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),t}(s.a.Component),O=a(89),R=(a(184),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onDelete=function(){Object(O.confirmAlert)({customUI:function(e){var t=e.onClose;return s.a.createElement("div",{className:"custom-ui"},s.a.createElement("h1",{className:"red"},"Are you sure?"),s.a.createElement("p",null,"You want to delete this account?"),s.a.createElement("div",{className:"flex justify-between"},s.a.createElement("button",{className:" grow f5 link ph3 pv2 dib white bg-red mt3 pa2",onClick:function(){a.handleClickDelete(),t()}},"Yes, Delete it!"),s.a.createElement("button",{onClick:t,className:" grow f5 link ph3 pv2 dib white bg-green mt3 pa2"},"No")))}})},a.handleClickDelete=function(){fetch("http://localhost:3000/profile/"+a.props.id,{method:"delete"}).then(function(e){return e.json()}).then(function(e){window.alert(e),a.props.onRouteChange("signin")}).catch(function(e){return window.alert(e)})},a.state={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:3000/profile/"+this.props.id).then(function(e){return e.json()}).then(function(t){e.setState(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.entries,r=t.email,i=t.id,l=t.doj;return s.a.createElement("div",{className:"center"},s.a.createElement("article",{className:"mw6 flex flex-column content-center center bg-transparent shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10"},s.a.createElement("div",{className:"tc"},s.a.createElement("h1",{className:"f2"},a),s.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),s.a.createElement("table",{style:{width:"75%"},className:"center content-center"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"ml4 pa2 pr4 br b--gray-10"},"Email"),s.a.createElement("td",{className:"pa2 fw2"},r)),s.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"}),s.a.createElement("tr",null,s.a.createElement("td",{className:"ml4 pa2 br b--gray-10"},"User ID"),s.a.createElement("td",{className:"pa2 fw2"},i)),s.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"}),s.a.createElement("tr",null,s.a.createElement("td",{className:"ml4 pa2 br b--gray-10"},"Entries"),s.a.createElement("td",{className:"pa2 fw2"},n)),s.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"}),s.a.createElement("tr",null,s.a.createElement("td",{className:"ml4 pa2 br b--gray-10"},"Joining Date"),s.a.createElement("td",{className:"pa2 fw2"},l)))),s.a.createElement("div",{className:"center"},s.a.createElement("button",{className:" grow f4 link ph3 pv2 dib white bg-red mt3 pa2",onClick:this.onDelete},"Delete User"),s.a.createElement("button",{className:" grow f4 link ph3 pv2 dib white bg-light-purple mt3 pa2",onClick:function(){return e.props.onRouteChange("passchange")}},"Change Password"))))}}]),t}(s.a.Component)),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onPassChange=function(e){return a.setState({password:e.target.value})},a.onCPassChange=function(e){a.setState({confirmPassword:e.target.value}),console.log(e.target.value),e.target.value!==a.state.password?a.setState({match:!1}):a.setState({match:!0}),console.log(a.state.match)},a.onConfirm=function(e){e.preventDefault(),a.refs.mainForm.reset(),a.state.match&&fetch("http://localhost:3000/profile/"+a.props.id,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({passHash:S.a.hashSync(a.state.password,S.a.genSaltSync(10))})}).then(function(e){return e.json()}).then(function(e){window.alert(e),a.props.onRouteChange("signin")}).catch(function(e){return window.alert(e)})},a.onLogin=function(e){e.preventDefault(),a.refs.mainForm.reset(),!a.state.oldChecked&&a.state.match&&fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.props.email,pass:a.state.password})}).then(function(e){return e.json()}).then(function(e){e.message?a.setState({password:"",confirmPassword:"",oldChecked:!0,match:!1}):(window.alert(e),a.setState({password:"",confirmPassword:"",match:!1}))}).catch(function(e){return console.log(e)})},a.state={password:"",confirmPassword:"",oldChecked:!1,match:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.oldChecked?this.onConfirm:this.onLogin;return s.a.createElement("article",{class:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("form",{method:"post",onSubmit:e,className:"measure",ref:"mainForm"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},this.state.oldChecked?s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Change Password"):s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Retype Old Password"),s.a.createElement("div",{className:"mt3"},this.state.oldChecked?s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Password"):s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Old Password"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"email-address",onChange:this.onPassChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Confirm Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"cpassword",id:"password",onChange:this.onCPassChange})),s.a.createElement("div",{className:"lh-copy mt3"},this.state.match?s.a.createElement("p",null):s.a.createElement("p",{className:"f6 red"},"Passwords do not match"))),s.a.createElement("div",{className:""},s.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Change Password"})))))}}]),t}(s.a.Component),I={particles:{number:{value:80,density:{enable:!0,value_area:800}}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).calcBoxDim=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImg"),n=a.width,s=a.height;return{left_col:n*t.left_col,right_col:n*(1-t.right_col),top_row:s*t.top_row,bottom_row:s*(1-t.bottom_row)}},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonClick=function(){e.setState({imageURL:e.state.input}),fetch("http://localhost:3000/imageAPI",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then(function(e){return e.json()}).then(function(t){e.setState({box:e.calcBoxDim(t)}),fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.id})}).then(function(e){return e.json()}).then(function(t){return e.setState({entries:t})})}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):"signin"===t&&e.setState({id:-1,input:"",imageURL:"",box:{},isSignedIn:!1,name:"",entries:0}),e.setState({route:t})},e.onUserChange=function(t){fetch("http://localhost:3000/profile/"+t).then(function(e){return e.json()}).then(function(a){e.setState({name:a.name,entries:a.entries,id:t,email:a.email})})},e.state={id:-1,input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1,name:"",email:"",entries:0},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(N.a,{className:"particle",params:I}),s.a.createElement(u,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn}),"signin"===this.state.route?s.a.createElement(k,{onRouteChange:this.onRouteChange,onUserChange:this.onUserChange}):"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(g,null),s.a.createElement(E,{name:this.state.name,entries:this.state.entries}),s.a.createElement(w,{onInputChange:this.onInputChange,onButtonClick:this.onButtonClick}),s.a.createElement(C,{imageURL:this.state.imageURL,box:this.state.box})):"profile"===this.state.route?s.a.createElement(R,{id:this.state.id,onRouteChange:this.onRouteChange}):"passchange"===this.state.route?s.a.createElement(P,{id:this.state.id,email:this.state.email,onRouteChange:this.onRouteChange}):s.a.createElement(j,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(185);i.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){e.exports=a.p+"static/media/brain.7ca14f04.jpg"},90:function(e,t,a){e.exports=a(186)},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.1c124126.chunk.js.map