(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/user-info"],{"027e":function(e,t,n){"use strict";var u;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return u}));var r=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"47e1":function(e,t,n){},8646:function(e,t,n){"use strict";n.r(t);var u=n("027e"),r=n("f377");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("9cdf");var o,i=n("f0c5"),s=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,"f1683b7c",null,!1,u["a"],o);t["default"]=s.exports},"9cdf":function(e,t,n){"use strict";var u=n("47e1"),r=n.n(u);r.a},c10f:function(e,t,n){"use strict";(function(e){n("2344");u(n("66fd"));var t=u(n("8646"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},e14f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,u,r,a,o){try{var i=e[a](o),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(u,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(u,r){var o=e.apply(t,n);function i(e){a(o,u,r,i,s,"next",e)}function s(e){a(o,u,r,i,s,"throw",e)}i(void 0)}))}}var i={data:function(){return{ruleForm:{},tableName:"",yonghusexTypesOptions:[],yonghusexTypesIndex:0}},onLoad:function(){var t=this;return o(u.default.mark((function n(){var r,a,o,i;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,t.$api.session(r);case 3:if(a=n.sent,t.ruleForm=a.data,t.tableName=r,"yonghu"!=t.tableName){n.next=12;break}return o={page:1,limit:100,dicCode:"sex_types"},n.next=10,t.$api.page("dictionary",o);case 10:i=n.sent,t.yonghusexTypesOptions=i.data.list;case 12:t.styleChange();case 13:case"end":return n.stop()}}),n)})))()},methods:{yonghusexTypesChange:function(e){this.yonghusexTypesIndex=e.target.value,this.ruleForm.sexValue=this.yonghusexTypesOptions[this.yonghusexTypesIndex].indexName,this.ruleForm.sexTypes=this.yonghusexTypesOptions[this.yonghusexTypesIndex].codeIndex},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var t=this;return o(u.default.mark((function n(){var r;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.username||"yonghu"!=t.tableName){n.next=3;break}return t.$utils.msg("用户名不能为空"),n.abrupt("return");case 3:if(t.ruleForm.yonghuName||"yonghu"!=t.tableName){n.next=6;break}return t.$utils.msg("姓名不能为空"),n.abrupt("return");case 6:if("yonghu"!=t.tableName||!t.ruleForm.yonghuPhone||t.$validate.isMobile(t.ruleForm.yonghuPhone)){n.next=9;break}return t.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 9:if("yonghu"!=t.tableName||!t.ruleForm.yonghuIdNumber||t.$validate.checkIdCard(t.ruleForm.yonghuIdNumber)){n.next=12;break}return t.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 12:return r=e.getStorageSync("nowTable"),n.next=15,t.$api.update(r,t.ruleForm);case 15:t.$utils.msgBack("修改成功");case 17:case"end":return n.stop()}}),n)})))()},yonghuyonghuPhotoTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))}}};t.default=i}).call(this,n("543d")["default"])},f377:function(e,t,n){"use strict";n.r(t);var u=n("e14f"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);t["default"]=r.a}},[["c10f","common/runtime","common/vendor"]]]);