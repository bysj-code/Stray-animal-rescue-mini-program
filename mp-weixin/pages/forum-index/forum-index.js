(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-index/forum-index"],{"2cea":function(n,e,t){"use strict";(function(n){t("2344");r(t("66fd"));var e=r(t("3c83"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},3040:function(n,e,t){"use strict";var r=t("ba70"),o=t.n(r);o.a},"3c83":function(n,e,t){"use strict";t.r(e);var r=t("d06f"),o=t("6b3b");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("3040");var i,c=t("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=a.exports},"6b3b":function(n,e,t){"use strict";t.r(e);var r=t("b744"),o=t.n(r);for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);e["default"]=o.a},b744:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,r,o,u,i){try{var c=n[u](i),a=c.value}catch(s){return void t(s)}c.done?e(a):Promise.resolve(a).then(r,o)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){u(i,r,o,c,a,"next",n)}function a(n){u(i,r,o,c,a,"throw",n)}c(void 0)}))}}t("b316");var c=function(){Promise.all([t.e("common/vendor"),t.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(t("e17f"))}.bind(null,t)).catch(t.oe)},a=function(){t.e("components/uni-ui/lib/uni-notice-bar/uni-notice-bar").then(function(){return resolve(t("e552"))}.bind(null,t)).catch(t.oe)},s={components:{uniIcons:c,uniNoticeBar:a},data:function(){return{swiperList:[],list:[],searchForm:{},mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0}},onShow:function(){var n=this;return i(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.hasNext=!0,n.mescroll&&n.mescroll.resetUpScroll();case 2:case"end":return e.stop()}}),e)})))()},methods:{mescrollInit:function(n){this.mescroll=n},downCallback:function(n){this.hasNext=!0,n.resetUpScroll()},upCallback:function(n){var e=this;return i(r.default.mark((function t(){var o,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o={forumStateTypes:1,page:n.num,limit:n.size},t.next=3,e.$api.list("forum",o);case 3:u=t.sent,1==n.num&&(e.list=[]),e.list=e.list.concat(u.data.list),0==u.data.list.length&&(e.hasNext=!1),n.endSuccess(n.size,e.hasNext);case 8:case"end":return t.stop()}}),t)})))()},onDetailTap:function(n){this.$utils.jump("../forum-detail/forum-detail?id=".concat(n))},onSwiperTap:function(n){},search:function(){var n=this;return i(r.default.mark((function e(){var t,o,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n,t.mescroll.num=1,1==t.mescroll.num&&(t.list=[]),o={forumStateTypes:1,page:t.mescroll.num,limit:t.mescroll.size,forumName:t.searchForm.forumName},e.next=6,t.$api.list("forum",o);case 6:u=e.sent,t.list=t.list.concat(u.data.list),0==u.data.list.length&&(t.hasNext=!1),t.mescroll.endSuccess(t.mescroll.size,t.hasNext);case 10:case"end":return e.stop()}}),e)})))()}}};e.default=s},ba70:function(n,e,t){},d06f:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([t.e("common/vendor"),t.e("components/mescroll-uni/mescroll-uni")]).then(t.bind(null,"2b1b"))}},o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.list,(function(e,t){var r=n.__get_orig(e),o=e.forumContent.length>50?e.forumContent.substring(0,50):null;return{$orig:r,g0:o}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},u=[]}},[["2cea","common/runtime","common/vendor"]]]);