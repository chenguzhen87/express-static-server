(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd631"],{"80be":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("el-card",{attrs:{shadow:"hover"}},[s("el-form",{ref:"form",staticStyle:{width:"50%","margin-top":"30px"},attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"原问题"}},[e._v("\n         "+e._s(e.user_question)+"\n      ")]),e._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:"原问题答案",prop:"user_answer_old"}},[s("el-input",{model:{value:e.form.user_answer_old,callback:function(r){e.$set(e.form,"user_answer_old",r)},expression:"form.user_answer_old"}})],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:"验证问题",prop:"user_question"}},[s("el-input",{model:{value:e.form.user_question,callback:function(r){e.$set(e.form,"user_question",r)},expression:"form.user_question"}})],1),e._v(" "),s("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{label:"问题答案",prop:"user_answer"}},[s("el-input",{nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.onSubmit(r)}},model:{value:e.form.user_answer,callback:function(r){e.$set(e.form,"user_answer",r)},expression:"form.user_answer"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary",loading:e.loading},nativeOn:{click:function(r){return r.preventDefault(),e.onSubmit(r)}}},[e._v("确定")])],1)],1)],1)},n=[],o=s("ed08"),u={name:"ValidProblem",data:function(){return{user_question:this.$store.state.user.user.user_question,form:{user_question:"",user_answer:"",user_answer_old:""},loading:!1,rules:{user_answer_old:[{required:!0,message:"请输入原问题答案",trigger:"blur"}],user_question:[{required:!0,message:"请输入验证问题",trigger:"blur"}],user_answer:[{required:!0,message:"请输入确认新密码",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(r){if(!r)return console.log("error submit!!"),!1;var s=e.form,t=s.user_answer_old,n=s.user_question,u=s.user_answer;e.loading=!0;var a={user_answer_old:Object(o["d"])(t),user_answer:Object(o["d"])(u),user_question:n};e.$store.dispatch("user/changeqa",a).then(function(){e.$refs.form.resetFields(),e.loading=!1,e.$store.dispatch("message/hasnew"),e.$message({message:"修改验证问题成功！",type:"success"})}).catch(function(){e.loading=!1})})}}},a=u,i=s("17cc"),l=Object(i["a"])(a,t,n,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0dd631.c0e29399.js.map