(this.webpackJsonpnickytube=this.webpackJsonpnickytube||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),o=a(6),s=a.n(o),l=a(17),m=a(2),u=a(3),d=a(5),p=a(4),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){n.setState({term:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),n.props.onFormSubmit(n.state.term)},n.state={term:""},n}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"segment search-bar"},i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{placeholder:"Enter search term",type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=(a(25),function(e){var t,a=e.video,n=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return n(a)},className:"video-item"},i.a.createElement("div",{className:"video-item-imgbox"},i.a.createElement("img",{alt:a.snippet.title,src:a.snippet.thumbnails.medium.url})),i.a.createElement("div",{className:"video-item-txtbox"},i.a.createElement("p",{className:"header video-item-title"},(t=a.snippet.title,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))))}),f=function(e){var t=e.videos,a=e.onVideoSelect,n=t.slice(1).map((function(e){return i.a.createElement(h,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"videolist-col segment"},n)},b=function(e){var t=e.selectedVideo;if(!t)return i.a.createElement("p",null,"Loading...");var a,n="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",{className:"videodetail-col segment"},i.a.createElement("div",{className:"iframe-container"},i.a.createElement("iframe",{allow:"fullscreen",src:n,title:t.snippet.title})),i.a.createElement("div",{className:"video-detail-description"},i.a.createElement("h4",{className:"header"},(a=t.snippet.title,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))),i.a.createElement("p",{className:"description"},t.snippet.description)))},E=(a(26),a(18)),y=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onFormSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"AIzaSyBJh5OrZGl0V2plEFhVrqDDktxIU5Lmlyc",t.next=3,y.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:7,key:"AIzaSyBJh5OrZGl0V2plEFhVrqDDktxIU5Lmlyc"}});case 3:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onFormSubmit("Tom Misch & Yussef Dayes - What Kinda Music")}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"NickyTube"),i.a.createElement(v,{onFormSubmit:this.onFormSubmit}),i.a.createElement("div",{className:"video-section-wrapper"},i.a.createElement(b,{selectedVideo:this.state.selectedVideo}),i.a.createElement(f,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))}}]),a}(i.a.Component);c.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.14056588.chunk.js.map