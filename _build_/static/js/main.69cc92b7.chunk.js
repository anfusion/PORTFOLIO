(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),s=n.n(c),u=n(24),o=n(6),i=n(2),l=n(4),p=n(5),d=n(8),f=n(7),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),n}(a.a.Component),h=Object(o.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(m),v=n(3),b=n.n(v),y=n(10),O=n(26),j=n.n(O).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),E=n(27),k=n.n(E),g=function(){return function(){var e=Object(y.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(y.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(h,{userId:e.userId})))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"relaxed ui divided list"},this.renderList())}}]),n}(a.a.Component),C=Object(o.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(y.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(g());case 2:k.a.chain(n().posts).map("userId").uniq().forEach((function(e){return t(w(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(x),N=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(C,null))}}]),n}(a.a.Component),S=n(28),T=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(S.a)(e),[t.payload]);default:return e}}}),U=Object(i.d)(T,Object(i.a)(u.a));s.a.render(a.a.createElement(o.a,{store:U},a.a.createElement(N,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.69cc92b7.chunk.js.map