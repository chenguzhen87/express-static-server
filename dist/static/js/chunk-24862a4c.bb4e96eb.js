(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24862a4c"],{"182f":function(e,t,n){},"95b0":function(e,t,n){"use strict";var s=n("182f"),o=n.n(s);o.a},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-form"},[1===e.showModule?n("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"off","label-position":"left"}},[n("el-card",[n("div",{staticClass:"title-container"},[n("h4",{staticStyle:{"text-align":"center"}},[e._v("Beehub")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("登录")])]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{ref:"account",attrs:{placeholder:"用户名",name:"account",type:"text",tabindex:"1",autocomplete:"off"},model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account","string"===typeof t?t.trim():t)},expression:"loginForm.account"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"user_pass"}},[n("el-input",{key:e.passwordType,ref:"user_pass",attrs:{type:e.passwordType,placeholder:"密码",name:"user_pass",tabindex:"2",autocomplete:"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.user_pass,callback:function(t){e.$set(e.loginForm,"user_pass","string"===typeof t?t.trim():t)},expression:"loginForm.user_pass"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),n("el-button",{staticClass:"button-btn",attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n              登录\n             ")])],1)],1):e._e(),e._v(" "),2===e.showModule?n("el-form",{ref:"settingInfoForm",attrs:{model:e.settingInfoForm,rules:e.settingInfoRules,"label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-card",[n("div",{staticClass:"title-container"},[n("h4",{staticStyle:{"text-align":"center"}},[e._v("Beehub")]),e._v(" "),n("h3",{staticClass:"title"},[e._v("设置信息")])]),e._v(" "),n("el-form-item",{attrs:{prop:"user_name"}},[n("el-input",{ref:"user_name",attrs:{placeholder:"昵称",name:"user_name"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleHome(t)}},model:{value:e.settingInfoForm.user_name,callback:function(t){e.$set(e.settingInfoForm,"user_name","string"===typeof t?t.trim():t)},expression:"settingInfoForm.user_name"}})],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{loading:e.settingInfoLoading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleHome(t)}}},[e._v("进入大厅")]),e._v(" "),n("el-form-item",[n("span",{staticClass:"prev",on:{click:function(t){return e.prev(2)}}},[n("i",{staticClass:"el-icon-arrow-left"}),e._v(" 前一页")])])],1)],1):e._e()],1)])},o=[],r=n("e20c"),i=(n("7bc1"),n("ed08")),a={name:"Login",data:function(){return{showModule:1,loginForm:{account:"",user_pass:""},loginRules:{account:[{required:!0,trigger:"blur",message:"请输入用户名"}],userpass:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,trigger:"blur",message:"密码长度不能少于5位"}]},settingInfoLoading:!1,settingInfoForm:{user_name:""},settingInfoRules:{user_name:[{required:!0,trigger:"blur",message:"请输入昵称"},{min:4,max:30,trigger:"blur",message:"昵称长度为4~30个字符"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){var t=e.fullPath.indexOf("?redirect=")>0;if(t){var n=e.fullPath.split("?redirect=")[1];this.redirect=decodeURIComponent(n)}},immediate:!0}},methods:{prev:function(e){this.showModule=--e},submit:function(){},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.user_pass.focus()})},handleLogin:function(){var e=this,t=this.$refs;t.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),e.loading=!1,!1;e.loading=!0;var n=e.loginForm.user_pass,s=Object(i["d"])(n),o=Object(r["a"])({},e.loginForm,{user_pass:s});e.$store.dispatch("user/login",o).then(function(t){var n=t.inited;e.loading=!1,0===n?(e.showModule=2,e.$nextTick(function(){e.$refs.user_name.focus()})):(e.$store.dispatch("message/hasnew"),e.$router.push({path:e.redirect||"/"}))}).catch(function(){e.loading=!1})})},handleHome:function(){var e=this;this.$refs.settingInfoForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.settingInfoLoading=!0,e.$store.dispatch("user/inituser",e.settingInfoForm).then(function(){e.$store.dispatch("message/hasnew"),e.$router.push({path:e.redirect||"/"}),e.settingInfoLoading=!1}).catch(function(){e.settingInfoLoading=!1})})}}},l=a,u=(n("95b0"),n("17cc")),c=Object(u["a"])(l,s,o,!1,null,"7e870fcf",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-24862a4c.bb4e96eb.js.map