(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43b850c8"],{"05fd":function(t,e,i){t.exports=i.p+"static/img/networkdoesnotforce.07d9d586.png"},"1df7":function(t,e,i){},"237d":function(t,e,i){},2702:function(t,e,i){t.exports=i.p+"static/img/norelateddata.4b6c9c6e.png"},"365c":function(t,e,i){"use strict";i.d(e,"f",function(){return a}),i.d(e,"n",function(){return r}),i.d(e,"q",function(){return n}),i.d(e,"i",function(){return o}),i.d(e,"j",function(){return c}),i.d(e,"r",function(){return l}),i.d(e,"g",function(){return u}),i.d(e,"k",function(){return d}),i.d(e,"p",function(){return m}),i.d(e,"e",function(){return f}),i.d(e,"a",function(){return b}),i.d(e,"h",function(){return v}),i.d(e,"b",function(){return h}),i.d(e,"c",function(){return p}),i.d(e,"o",function(){return g}),i.d(e,"m",function(){return _}),i.d(e,"s",function(){return x}),i.d(e,"d",function(){return j}),i.d(e,"t",function(){return C}),i.d(e,"l",function(){return w});var s=i("b775");function a(t){return Object(s["a"])({url:"/subject/index/list",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/user/subject/find",method:"post",data:t})}function n(t){return Object(s["a"])({url:"/user/subject/mine",method:"get",params:t})}function o(t){return Object(s["a"])({url:"/subject/material/mine",method:"get",params:t})}function c(t){return Object(s["a"])({url:"/user/subject/add",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/user/subject/modify",method:"post",data:t})}function u(t){return Object(s["a"])({url:"/user/info/find",method:"post",data:t})}function d(t){return Object(s["a"])({url:"/user/subject/addmember",method:"post",data:t})}function m(t){return Object(s["a"])({url:"/user/subject/memberof",method:"get",params:t})}function f(t){return Object(s["a"])({url:"/user/info/getuser",method:"get",params:t})}function b(t){return Object(s["a"])({url:"/subject/article/list",method:"get",params:t})}function v(t){return Object(s["a"])({url:"/subject/material/list",method:"get",params:t})}function h(t){return Object(s["a"])({url:"/subject/article/mine",method:"get",params:t})}function p(t){return Object(s["a"])({url:"/subject/comment/add",method:"post",data:t})}function g(t){return Object(s["a"])({url:"/user/subject/get",method:"get",params:t})}function _(t){return Object(s["a"])({url:"/user/subject/close",method:"post",data:t})}function x(t){return Object(s["a"])({url:"/user/subject/open",method:"post",data:t})}function j(t){return Object(s["a"])({url:"/subject/comment/find",method:"post",data:t})}function C(t){return Object(s["a"])({url:"/user/subject/removemember",method:"post",data:t})}function w(t){return Object(s["a"])({url:"/user/subject/banmember",method:"post",data:t})}},"4ba4":function(t,e,i){t.exports=i.p+"static/img/nocommentyet.01e247c3.png"},"513e":function(t,e,i){"use strict";var s=i("237d"),a=i.n(s);a.a},"815f":function(t,e,i){"use strict";var s=i("1df7"),a=i.n(s);a.a},"81d6":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"box-img"},[1==t.oder?s("img",{attrs:{src:i("2702")}}):t._e(),t._v(" "),2==t.oder?s("img",{attrs:{src:i("05fd")}}):t._e(),t._v(" "),3==t.oder?s("img",{attrs:{src:i("a21d")}}):t._e(),t._v(" "),4==t.oder?s("img",{attrs:{src:i("4ba4")}}):t._e(),t._v(" "),5==t.oder?s("img",{attrs:{src:i("e1d7")}}):t._e()]),t._v(" "),s("div",{staticClass:"box-txt"},[t._v(t._s(t.txt))])])},a=[],r={name:"Tip",props:{txt:{type:String,default:""},oder:{type:String,default:""}},computed:{}},n=r,o=(i("f706"),i("17cc")),c=Object(o["a"])(n,s,a,!1,null,"dda50fbc",null);e["a"]=c.exports},"8e01":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},[i("breadcrumb-wrapper",{scopedSlots:t._u([{key:"left",fn:function(){return[i("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[i("transition-group",{attrs:{name:"breadcrumb"}},["Home"==t.fromPage?i("el-breadcrumb-item",{key:"1"},[i("router-link",{attrs:{to:"/home"}},[t._v("大厅")])],1):t._e(),t._v(" "),"Workbench"==t.fromPage?i("el-breadcrumb-item",{key:"2"},[i("router-link",{attrs:{to:"/workbench"}},[t._v("我的工作台")])],1):t._e(),t._v(" "),"MessageList"==t.fromPage?i("el-breadcrumb-item",{key:"3"},[i("router-link",{attrs:{to:"/messageList"}},[t._v("消息中心")])],1):t._e(),t._v(" "),i("el-breadcrumb-item",{key:"4"},[t._v(t._s(t.subjectInfor.title)+"工作室")])],1)],1)]},proxy:!0}])}),t._v(" "),i("div",{staticClass:"wrapper-box-box"},[i("el-card",{directives:[{name:"show",rawName:"v-show",value:"owner"==t.subjectInfor.role,expression:"subjectInfor.role == 'owner'"}],staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"studio"},[i("div",{staticClass:"studio-top"},[i("div",{staticClass:"flex-space-between"},[i("div",{staticClass:"studio-top-left"},[i("div",{staticClass:"h1"},[t._v("\n                "+t._s(t.subjectInfor.title)+"\n                "),i("span",{staticStyle:{"font-size":"12px","font-weight":"normal","margin-left":"20px",cursor:"pointer",color:"#409EFF"},on:{click:function(e){t.dialogFormVisible1=!0}}},[t._v("编辑")])]),t._v(" "),i("div",{staticClass:"studio-time time"},[t._v(t._s(t.subjectInfor.ptime)+"创建")])]),t._v(" "),i("div",{staticClass:"studio-top-right flex-space-between"},[i("div",{staticClass:"management"},[i("el-button-group",[i("el-button",{attrs:{type:0==t.subjectInfor.hide_flag?"danger":""},on:{click:function(e){return t.switchsubject("1")}}},[0==t.subjectInfor.hide_flag?i("span",[t._v("公开状态")]):i("span",[t._v("设为公开")])]),t._v(" "),i("el-button",{attrs:{type:1==t.subjectInfor.hide_flag?"primary":""},on:{click:function(e){return t.switchsubject("0")}}},[1==t.subjectInfor.hide_flag?i("span",[t._v("私有状态")]):i("span",[t._v("设为私有")])])],1)],1)])]),t._v(" "),i("div",{staticClass:"studio-txt time",class:{Ellipsis:!t.txtmore},staticStyle:{"line-height":"20px"}},[t._v(t._s(t.subjectInfor.content))]),t._v(" "),t.isShowHintHideHint?i("div",{staticClass:"txtmore",on:{click:t.clicktxtmore}},[t.txtmore?i("span",[t._v("收起")]):i("span",[t._v("展开")])]):t._e()]),t._v(" "),i("div",{staticClass:"line studio-line"}),t._v(" "),i("div",{staticClass:"studio-bottom",staticStyle:{"text-align":"right",position:"relative"}},[i("div",{staticClass:"managementbox",class:{managementboxwidth:t.isbounceInRight}},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"sliders FLEX slideX",class:{transforM:t.slidefase}},[i("div",{staticClass:"managementbox-box"},[i("div",{staticClass:"managementbox-h1 flex-space-between"},[i("div",{},[t._v("管理人员")]),t._v(" "),i("div",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addnumwitch}},[t._v("+添加人员")])],1)]),t._v(" "),i("div",{staticClass:"search-result"},[i("ul",t._l(t.subjectInfor.members,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.subjectInfor&&t.subjectInfor.members&&t.subjectInfor.members.length>0,expression:"subjectInfor && subjectInfor.members && subjectInfor.members.length > 0"}],key:e.id,staticClass:"flex-space-between"},[i("div",{staticClass:"user FLEX"},[i("avatar",{staticStyle:{margin:"0 auto",width:"45px",height:"45px","line-height":"45px"},attrs:{headIcon:e.user_headicon,name:e.user_abbr,size:"mini",bgColor:e.user_backcolor}}),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"time"},[t._v(t._s(e.user_name))]),t._v(" "),i("div",[t._v(t._s(e.account))])])],1),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.subjectremovemember(e.id)}}},[t._v("移除")])],1)}),0)])]),t._v(" "),i("div",{staticClass:"addmenber"},[i("div",{staticClass:"time"},[i("el-link",{staticStyle:{color:"#ccc","margin-bottom":"25px",outline:"none"},attrs:{icon:"el-icon-arrow-left"},on:{click:t.goback}},[t._v("返回")])],1),t._v(" "),i("div",[i("el-input",{attrs:{placeholder:"输入邮箱或用户名搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.infofind(e)}},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("div",{staticClass:"search-result"},[i("ul",t._l(t.searchuser,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.searchuser&&t.searchuser.length>0,expression:"searchuser && searchuser.length > 0"}],key:e.id,staticClass:"flex-space-between"},[i("div",{staticClass:"user FLEX"},[i("avatar",{staticStyle:{margin:"0 auto",width:"45px",height:"45px","line-height":"45px"},attrs:{headIcon:e.user_headicon,name:e.user_abbr,size:"mini",bgColor:e.user_backcolor}}),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"time"},[t._v(t._s(e.user_name))]),t._v(" "),i("div",[t._v(t._s(e.account))])])],1),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(i){return t.subjectaddmember(e.id)}}},[t._v("添加")])],1)}),0)])])])])],1),t._v(" "),i("span",{staticClass:"span",staticStyle:{"font-size":"12px","font-weight":"normal","margin-left":"20px",cursor:"pointer",color:"#409EFF"},on:{click:function(e){return t.getRadio(t.isbounceInRight)}}},[t._v("管理人员")]),t._v(" "),i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.subjectInfor.members,function(e){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.subjectInfor&&t.subjectInfor.members&&t.subjectInfor.members.length>0,expression:"subjectInfor && subjectInfor.members && subjectInfor.members.length > 0"}],key:e.id,staticClass:"swiper-slide"},[i("div",{staticClass:"person",staticStyle:{width:"55px !important","border-radius":"100% !important",margin:"0 auto"}},[i("router-link",{attrs:{to:{path:"/article",query:{id:t.id,uid:e.id}}}},[i("avatar",{staticStyle:{margin:"0 auto"},attrs:{headIcon:e.user_headicon,bgColor:e.user_backcolor,name:e.user_abbr,size:"small"}})],1),t._v(" "),i("div",{staticStyle:{"margin-top":"5px","font-size":"12px","text-align":"center",color:"#989898","font-weight":"400"}},[t._v(t._s(e.user_name))])],1)])}),0),t._v(" "),i("div",{staticClass:"swiper-button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next"})])])])]),t._v(" "),i("el-card",{directives:[{name:"show",rawName:"v-show",value:!("owner"==t.subjectInfor.role),expression:"!(subjectInfor.role == 'owner')"}],staticClass:"box-card",attrs:{shadow:"hover"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:5}},[i("div",{staticClass:"studio",staticStyle:{"border-right":"1px solid #eeeeee","margin-right":"20px","padding-bottom":"20px",height:"223.8px"}},[i("div",{staticClass:"h1"},[t._v("课题创建人")]),t._v(" "),i("div",{staticClass:"user"},[i("div",{staticClass:"person position"},[i("avatar",{attrs:{headIcon:t.subjectInfor.creator.user_headicon,bgColor:t.subjectInfor.creator.user_backcolor,name:t.subjectInfor.creator.user_abbr,size:"medium"}})],1),t._v(" "),i("div",{staticClass:"time username"},[t._v("\n                  "+t._s(t.subjectInfor.creator.user_name)+"\n              ")])])])]),t._v(" "),i("el-col",{attrs:{span:19}},[i("div",{staticClass:"studio"},[i("div",{staticClass:"studio-top"},[i("div",{staticClass:"flex-space-between"},[i("div",{staticClass:"studio-top-left"},[i("div",{staticClass:"h1"},[t._v(t._s(t.subjectInfor.title))]),t._v(" "),i("div",{staticClass:"studio-time time"},[t._v(t._s(t.subjectInfor.ptime)+"创建")])])]),t._v(" "),i("div",{staticClass:"studio-txt time",class:{Ellipsis:!t.txtmore}},[t._v(t._s(t.subjectInfor.content))]),t._v(" "),t.isShowHintHideHint?i("div",{staticClass:"txtmore",on:{click:t.clicktxtmore}},[t.txtmore?i("span",[t._v("收起")]):i("span",[t._v("展开")])]):t._e()]),t._v(" "),i("div",{staticClass:"line studio-line"}),t._v(" "),i("div",{staticClass:"studio-bottom"},[i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.subjectInfor.members,function(e){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.subjectInfor&&t.subjectInfor.members&&t.subjectInfor.members.length>0,expression:"subjectInfor && subjectInfor.members && subjectInfor.members.length > 0"}],key:e.id,staticClass:"swiper-slide"},[i("div",{staticClass:"person",staticStyle:{width:"55px !important","border-radius":"100% !important",margin:"0 auto"}},[i("router-link",{attrs:{to:{path:"/article",query:{id:t.id,uid:e.id}}}},[i("avatar",{staticStyle:{margin:"0 auto"},attrs:{headIcon:e.user_headicon,bgColor:e.user_backcolor,name:e.user_abbr,size:"small"}})],1),t._v(" "),i("div",{staticStyle:{"margin-top":"5px","font-size":"12px","text-align":"center",color:"#989898","font-weight":"400"}},[t._v(t._s(e.user_name))])],1)])}),0),t._v(" "),i("div",{staticClass:"swiper-button-prev"}),t._v(" "),i("div",{staticClass:"swiper-button-next"})])])])])],1)],1)],1),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:18}},[i("el-card",{attrs:{shadow:"hover"}},[i("div",{staticClass:"discuss"},[i("div",{staticClass:"flex-space-between"},[i("div",{staticClass:"h1"},[t._v("文章列表（"+t._s(t.total)+"篇）")]),t._v(" "),i("div",{staticClass:"FLEX administration-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:"owner"==t.subjectInfor.role||"member"==t.subjectInfor.role,expression:"subjectInfor.role == 'owner' || subjectInfor.role == 'member'"}],staticClass:"edit"},[i("router-link",{attrs:{to:{path:"/addArticle",query:{sid:t.id}}}},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:"member"==t.subjectInfor.role||"owner"==t.subjectInfor.role||"banned"==t.subjectInfor.role,expression:"subjectInfor.role == 'member' || subjectInfor.role == 'owner'  || subjectInfor.role == 'banned' "}],attrs:{type:"primary",size:"mini"}},[t._v("添加文章")])],1)],1)])]),t._v(" "),i("div",{staticClass:"article-list"},[i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"全部",name:"first"}},[t.articlemines&&t.articlemines.length>0?i("ul",{staticClass:"lists-ul"},t._l(t.articlemines,function(e){return i("li",{key:e.id,staticClass:"list-li flexBox",staticStyle:{"align-items":"center"}},[i("div",{staticClass:"li-left"},[i("router-link",{attrs:{to:{path:"/article",query:{id:t.id,uid:e.creator.id}}}},[i("avatar",{attrs:{headIcon:e.creator.user_headicon,bgColor:e.creator.user_backcolor,name:e.creator.user_abbr,size:"mini"}})],1)],1),t._v(" "),i("div",{staticClass:"flexItem ellipsis"},[i("router-link",{staticClass:"ellipsis",attrs:{to:"/articleDetail/"+e.id+"?fromPage=Studio"}},[t._v(t._s(e.title))])],1),t._v(" "),i("div",{staticClass:"time li-right"},[t._v(t._s(e.mtime))])])}),0):i("div",{staticClass:"time",staticStyle:{"min-height":"500px",background:"#ffffff",overflow:"hidden"}},[i("tip",{attrs:{txt:"暂无内容",oder:"3"}})],1)]),t._v(" "),"member"==t.subjectInfor.role||"owner"==t.subjectInfor.role?i("el-tab-pane",{attrs:{label:"我的",name:"second"}},[t.articlemines&&t.articlemines.length>0?i("ul",{staticClass:"lists-ul"},t._l(t.articlemines,function(e){return i("li",{key:e.id,staticClass:"list-li flexBox",staticStyle:{"align-items":"center"}},[i("div",{staticClass:"li-left"}),t._v(" "),i("div",{staticClass:"flexItem ellipsis"},[i("router-link",{staticClass:"ellipsis",attrs:{to:"/articleDetail/"+e.id+"?fromPage=Studio"}},[t._v(t._s(e.title))])],1),t._v(" "),i("div",{staticClass:"time li-right"},[t._v(t._s(e.mtime))])])}),0):i("div",{staticClass:"time",staticStyle:{"min-height":"500px",background:"#ffffff",overflow:"hidden"}},[i("tip",{attrs:{txt:"暂无内容",oder:"3"}})],1),t._v(" "),t._v("\n                 \n              ")]):t._e()],1)],1)])]),t._v(" "),i("el-card",{directives:[{name:"show",rawName:"v-show",value:t.articlemines.length>0,expression:"articlemines.length > 0"}],attrs:{shadow:"hover"}},[i("div",{staticClass:"more",on:{click:t.gomore1}},[t._v(t._s(t.moreTxt))])])],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"list-box"},[i("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[i("div",{staticClass:"flex-space-between"},[i("div",{staticClass:"h1",staticStyle:{"font-size":"16px"}},[t._v("资料库")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"member"==t.subjectInfor.role||"owner"==t.subjectInfor.role||"banned"==t.subjectInfor.role,expression:"subjectInfor.role == 'member' || subjectInfor.role == 'owner'  || subjectInfor.role == 'banned' "}],staticClass:"more"},[i("router-link",{attrs:{to:{path:"/database",query:{id:t.id,fromPage:"Studio"}}}},[t._v("全部 >>")])],1)]),t._v(" "),t.materiallists&&t.materiallists.length>0?i("ul",{staticClass:"list-height",staticStyle:{"margin-top":"10px",height:"270px"}},t._l(t.materiallists,function(e){return i("li",{key:e.id,staticClass:"flex-space-between"},[i("div",{staticClass:"list-title ellipsis"},[i("router-link",{staticClass:"ellipsis",attrs:{to:"/dataDetail/"+e.id+"?fromPage=Studio"}},[t._v(t._s(e.title))])],1)])}),0):i("div",{staticClass:"nulldata"},["member"==t.subjectInfor.role||"owner"==t.subjectInfor.role||"banned"==t.subjectInfor.role?i("div",{staticClass:"time nulldata-txt"},[t._v("您还未添加文章，请点击按钮添加")]):i("div",{staticClass:"time nulldata-txt",staticStyle:{"padding-bottom":"100px"}},[i("tip",{attrs:{txt:"暂无内容",oder:"3"}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"member"==t.subjectInfor.role||"owner"==t.subjectInfor.role||"banned"==t.subjectInfor.role,expression:"subjectInfor.role == 'member' || subjectInfor.role == 'owner' || subjectInfor.role == 'banned' "}],staticClass:"Btn"},[i("router-link",{attrs:{to:{path:"/addData",query:{sid:t.id}}}},[t._v("添加资料")])],1)])])],1)])],1),t._v(" "),i("el-dialog",{attrs:{title:"讨论记录",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("div",[i("el-input",{attrs:{placeholder:"输入关键字enter键搜索"},on:{change:t.changekey},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.commentfind(e)}},model:{value:t.key1,callback:function(e){t.key1=e},expression:"key1"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("div",{staticClass:"time",staticStyle:{"text-align":"center","line-height":"36px",cursor:"pointer"},on:{click:t.gomore}},[t._v(t._s(t.moreT))]),t._v(" "),i("div",{staticClass:"search-result"},[t.commentfindlist&&t.commentfindlist.length>0?i("ul",t._l(t.commentfindlist,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.commentfindlist&&t.commentfindlist.length>0,expression:"commentfindlist && commentfindlist.length > 0"}],key:e.id,staticClass:"flex-space-between"},[i("div",{staticClass:"user FLEX",staticStyle:{"margin-top":"0px"}},[i("avatar",{staticStyle:{margin:"0 auto",width:"45px",height:"45px","line-height":"45px"},attrs:{headIcon:e.creator.user_headicon,bgColor:e.creator.user_backcolor,name:e.creator.user_abbr,size:"mini"}}),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"time"},[t._v("\n                "+t._s(e.creator.user_name)+"\n                "),i("span",{staticStyle:{"margin-left":"15px"}},[t._v(t._s(e.ptime))])]),t._v(" "),i("div",[t._v(t._s(e.content))])])],1)])}),0):t._e(),t._v(" "),t.commentfindlist&&0==t.commentfindlist.length?i("div",{staticClass:"time"},[t._v(t._s(t.noned))]):t._e()])]),t._v(" "),i("el-dialog",{attrs:{title:"编辑课题",visible:t.dialogFormVisible1},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[i("el-form",{attrs:{model:t.subjectInfor},nativeOn:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("el-form-item",{attrs:{label:"课题名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.subjectInfor.title,callback:function(e){t.$set(t.subjectInfor,"title",e)},expression:"subjectInfor.title"}})],1),t._v(" "),i("el-input",{staticStyle:{display:"none"},attrs:{autocomplete:"off"}}),t._v(" "),i("el-form-item",{attrs:{label:"摘要","label-width":t.formLabelWidth}},[i("el-input",{attrs:{type:"textarea",rows:5},model:{value:t.subjectInfor.content,callback:function(e){t.$set(t.subjectInfor,"content",e)},expression:"subjectInfor.content"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible1=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.subjectmodify(t.subjectInfor)}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"添加人员",visible:t.dialogFormVisible2},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[i("div",[i("el-input",{attrs:{placeholder:"输入邮箱或用户名搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.infofind(e)}},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[i("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),i("div",{staticClass:"search-result"},[i("ul",t._l(t.searchuser,function(e){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.searchuser&&t.searchuser.length>0,expression:"searchuser && searchuser.length > 0"}],key:e.id,staticClass:"flex-space-between"},[i("div",{staticClass:"user FLEX"},[i("avatar",{staticStyle:{margin:"0 auto",width:"45px",height:"45px","line-height":"45px"},attrs:{headIcon:e.user_headicon,name:e.user_abbr,size:"mini",bgColor:e.user_backcolor}}),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"time"},[t._v(t._s(e.user_name))]),t._v(" "),i("div",[t._v(t._s(e.account))])])],1),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(i){return t.subjectaddmember(e.id)}}},[t._v("添加")])],1)}),0)])]),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible3,width:"30%"},on:{"update:visible":function(e){t.dialogVisible3=e}}},[i("span",[t._v(t._s(t.tiptxt))]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible3=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.hide_flagConfir}},[t._v("确 定")])],1)])],1)},a=[],r=i("e20c"),n=i("591a"),o=i("3677"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._l(t.comments,function(e){return i("div",{key:e.id,class:e.creator.id==t.id?"comment-right":"comment"},[i("div",[i("div",{staticClass:"info"},[i("div",{on:{click:function(i){return t.getuser(e)}}},[i("avatar",{staticStyle:{width:"40px",height:"40px","line-height":"40px"},attrs:{bgColor:e.creator.user_backcolor,name:e.creator.user_abbr,size:"mini"}})],1),t._v(" "),i("div",{staticClass:"right",staticStyle:{"margin-right":"10px"}},[i("div",{staticClass:"name"},[t._v(t._s(e.creator.user_name))]),t._v(" "),i("div",{staticClass:"date time"},[t._v(t._s(e.ptime))])])]),t._v(" "),i("div",{staticClass:"content",staticStyle:{padding:"10px 0px"}},[t._v(t._s(e.content))])])])}),t._v(" "),i("el-dialog",{attrs:{title:"",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("span",[i("div",{staticClass:"info FLEX"},[i("avatar",{attrs:{bgColor:t.user.user_backcolor,name:t.user.user_abbr,size:"small"}}),t._v(" "),i("div",{staticClass:"right",staticStyle:{"margin-left":"10px","line-height":"24px"}},[i("div",{staticClass:"name"},[t._v(t._s(t.user.user_name))]),t._v(" "),i("div",{staticClass:"date"},[t._v(t._s(t.user.ptime))])])],1)]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.subjectremovemember}},[t._v("移除")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.subjectbanmember}},[t._v("禁言")])],1)])],2)},l=[],u=i("6e6d"),d=i("77c0"),m=i("365c"),f={name:"comment",props:{comments:{type:Array,default:[]},role:String},components:{Avatar:d["a"]},data:function(){return{inputComment:"",showItemId:"",id:this.$store.state.user.user.id,crruid:"",centerDialogVisible:!1,user:{},sid:""}},mounted:function(){},computed:{},methods:{subjectremovemember:function(){var t=this;Object(m["t"])({id:this.sid,uid:this.crruid}).then(function(e){200==e.code&&t.$message({message:"移除成功！",type:"success"}),t.centerDialogVisible=!1}).catch(function(e){t.centerDialogVisible=!1})},subjectbanmember:function(){var t=this;Object(m["l"])({id:this.sid,uid:this.crruid}).then(function(e){t.centerDialogVisible=!1,200==e.code&&t.$message({message:"禁言成功！",type:"success"})}).catch(function(e){t.centerDialogVisible=!1})},getuser:function(t){"owner"==this.role?t.creator.id==this.id?this.$message({message:"您不能在该话题中禁言自己或者移除自己！",type:"error"}):(console.log("user",t),this.centerDialogVisible=!0,this.user=t.creator,this.sid=t.subject_id,this.crruid=t.creator.id):this.$message({message:"您无权限！",type:"error"})},likeClick:function(t){null===t.isLike?(u["default"].$set(t,"isLike",!0),t.likeNum++):(t.isLike?t.likeNum--:t.likeNum++,t.isLike=!t.isLike)},cancel:function(){this.showItemId=""},commitComment:function(){console.log(this.inputComment)},showCommentInput:function(t,e){this.inputComment=e?"@"+e.fromName+" ":"",this.showItemId=t.id}},created:function(){}},b=f,v=(i("b850"),i("17cc")),h=Object(v["a"])(b,c,l,!1,null,"35710dbc",null),p=h.exports,g=i("d3fe"),_=i("81d6"),x={name:"Studio",components:{comment:p,BreadcrumbWrapper:g["a"],Avatar:d["a"],Tip:_["a"]},computed:Object(r["a"])({},Object(n["b"])(["name"]),{isShowHintHideHint:function(){return!!this.ischinese}}),data:function(){return{moreTxt:"点击加载更多",value:!0,person:'<div class="person"><img src="###" alt=""></div>',comments:[],id:this.$route.query.id,fromPage:this.$route.query.fromPage,uid:this.$store.state.user.user.id,materiallists:[],articlemines:[],commentinput:"",limit:10,limit1:100,page:1,page1:1,page2:1,page3:1,subjectInfor:{creator:{},members:[]},total:0,dialogFormVisible:!1,dialogFormVisible1:!1,dialogFormVisible2:!1,dialogVisible3:!1,tiptxt:"关闭开关后不能显示在大厅 ， 确认操作？",hide_flag:0,formLabelWidth:"120px",key:"",key1:"",searchuser:[],commentfindlist:[],noned:"",moreT:"",flag:!0,flag1:!0,role:"",radio:"",isbounceInRight:!1,slidefase:!1,activeName:"first",txtmore:!1,ischinese:!1}},created:function(){},mounted:function(){this.subjectget(),this.materiallist(),this.articlelist()},methods:{gomore1:function(){console.log("this.id 0= ",this.id),console.log("this.id 1= ",this.$route.query.id),this.flag&&(this.key?this.articlefind():this.articlelist())},articlefind:function(){var t=this;Object(m["a"])({sid:this.id,uid:"first"==this.activeName?"":this.uid,limit:this.limit,page:this.page}).then(function(e){t.articlemines=[],t.articlemines=t.articlemines.concat(e.data.list),t.total=e.data.total,e.data.list.length>0||(t.isShow=!0),e.data.list.length<t.limit?(t.flag=!1,t.moreTxt="已无更多"):(t.moreTxt="点击加载更多",t.flag=!0,t.page=++t.page)})},articlelist:function(){var t=this;console.log("this.page",this.page),Object(m["a"])({sid:this.id,uid:"first"==this.activeName?"":this.uid,limit:this.limit,page:this.page}).then(function(e){t.articlemines=t.articlemines.concat(e.data.list),t.total=e.data.total,e.data.list.length<t.limit?(t.flag=!1,t.moreTxt="已无更多"):(t.moreTxt="点击加载更多",t.flag=!0,t.page=++t.page)})},isChinese:function(t){return!!/[\u4e00-\u9fa5]/.test(t)},clicktxtmore:function(){this.txtmore=!this.txtmore},onSubmit:function(){return!1},scrollToBottom:function(){var t=this;this.$nextTick(function(){var e=t.$el.querySelector(".container");e.scrollTop=e.scrollHeight})},subjectget:function(){var t=this;Object(m["o"])({id:this.id}).then(function(e){t.subjectInfor=e.data,t.role=e.data.role,t.hide_flag=e.data.hide_flag,t.ischinese=t.isChinese(e.data.content),t.$nextTick(function(){new o["a"](".swiper-container",{slidesPerView:7,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},hiddenClass:"btn-hidden"})})})},materiallist:function(){var t=this;Object(m["h"])({sid:this.id,page:this.page3,limit:this.limit}).then(function(e){t.materiallists=e.data.list})},articlemine:function(){var t=this;Object(m["b"])({sid:this.id,page:this.page3,limit:this.limit}).then(function(e){t.articlemines=e.data.list})},commentadd:function(){var t=this;Object(m["c"])({sid:this.id,content:this.commentinput}).then(function(e){t.commentinput="",t.comments.push(e.data),t.scrollToBottom()})},changekey:function(){this.page1=1,this.commentfindlist=[]},commentfind:function(){var t=this;if(""==this.key1)return this.moreT="",this.commentfindlist=[],!1;Object(m["d"])({key:this.key1,sid:this.id,limit:this.limit,page:this.page1}).then(function(e){e.data.list&&0==e.data.list.length?t.noned="无对应评论":t.moreT="查看更多",t.commentfindlist=t.commentfindlist.concat(e.data.list),e.data.list&&e.data.list.length<t.limit?t.flag1=!1:t.flag1=!0,t.page1=++t.page1})},gomore:function(){""==this.key1?this.flag&&this.commentlist():this.flag1&&this.commentfind()},switchsubject:function(t){"owner"==this.subjectInfor.role?"0"==t?(this.dialogVisible3=!0,this.tiptxt="切换后将不显示在大厅 ， 确认操作？"):"1"==t&&(this.dialogVisible3=!0,this.tiptxt="切换后将显示在大厅 ， 确认操作？"):this.$message({message:"您无权限！",type:"error"})},subjectclose:function(){var t=this;Object(m["m"])({id:this.id}).then(function(e){t.subjectget()})},subjectopen:function(){var t=this;Object(m["s"])({id:this.id}).then(function(e){t.subjectget()})},hide_flagConfir:function(){"0"==this.hide_flag&&(this.subjectclose(),this.dialogVisible3=!1),"1"==this.hide_flag&&(this.subjectopen(),this.dialogVisible3=!1)},subjectmodify:function(t){var e=this;console.log("value",t),this.dialogFormVisible1=!1,Object(m["r"])({id:this.id,title:t.title,content:t.content}).then(function(t){200==t.code&&e.$message({message:"修改成功！",type:"success"})})},infofind:function(){var t=this;Object(m["g"])({key:this.key,limit:this.limit1,page:this.page2}).then(function(e){t.searchuser=e.data.list,console.log("searchuser",t.searchuser)})},subjectaddmember:function(t){var e=this;t==this.uid?this.$message({message:"不能添加 自己！",type:"error"}):Object(m["k"])({id:this.id,uid:t}).then(function(t){200==t.code?e.$message({message:"添加成员成功！",type:"success"}):e.$message({message:"添加成员失败！",type:"error"}),e.dialogFormVisible2=!1,e.subjectget()})},getRadio:function(t){this.isbounceInRight=!t},subjectremovemember:function(t){var e=this;t==this.uid?this.$message({message:"不能移除自己！",type:"error"}):Object(m["t"])({id:this.id,uid:t}).then(function(t){200==t.code&&(e.$message({message:"移除成功！",type:"success"}),e.subjectget())}).catch(function(t){})},addnumwitch:function(){this.slidefase=!0},goback:function(){this.slidefase=!1},handleClick:function(t,e){console.log("xxxxxxxxxxxxxxxxxxxx",t),this.page=1,this.articlemines=[],this.articlefind(),console.log(t,e)}}},j=x,C=(i("ec58"),i("815f"),Object(v["a"])(j,s,a,!1,null,"406ffa0d",null));e["default"]=C.exports},a21d:function(t,e,i){t.exports=i.p+"static/img/nocontentyet.84e6237e.png"},a2bd:function(t,e,i){},b850:function(t,e,i){"use strict";var s=i("eedf"),a=i.n(s);a.a},ca8e:function(t,e,i){},d3fe:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"breadcrumbBox app-container"},[i("div",{staticClass:"flexBox",staticStyle:{"align-items":"center"}},[i("div",[t._t("left")],2),t._v(" "),i("div",{staticClass:"flexItem",staticStyle:{"text-align":"right"}},[t._t("right")],2)])])},a=[],r={name:"BreadcrumbWrapper"},n=r,o=(i("513e"),i("17cc")),c=Object(o["a"])(n,s,a,!1,null,"9c156d0c",null);e["a"]=c.exports},e1d7:function(t,e,i){t.exports=i.p+"static/img/nonotice.5f7fe124.png"},ec58:function(t,e,i){"use strict";var s=i("a2bd"),a=i.n(s);a.a},eedf:function(t,e,i){},f706:function(t,e,i){"use strict";var s=i("ca8e"),a=i.n(s);a.a}}]);
//# sourceMappingURL=chunk-43b850c8.2ba70be2.js.map