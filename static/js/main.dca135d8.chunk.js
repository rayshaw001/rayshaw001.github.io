(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e,t,n){e.exports=n(470)},245:function(e,t,n){},247:function(e,t,n){},346:function(e,t,n){},397:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),i=n.n(c),s=(n(245),n(37)),l=n(38),r=n(40),u=n(39),h=n(41),m=(n(247),n(130)),d=n.n(m),p=n(48),f=n.n(p),b=n(472),k=(n(346),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={selectedItem:-1},n.handleClick=function(e,t){n.setState({selectedItem:t}),n.props.handleOnItemClick(e)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e="https://api.github.com/repos/rayshaw001/books/contents/Note/";this.props.notes.map(function(t,n){t.folder?(t.notes=[],f.a.get(e+t.name).then(function(e){return t.notes.push({name:e.data.name,folder:!1}),t})):f.a.get(e+t.name).then(function(e){return t.content=decodeURIComponent(escape(window.atob(e.data.content))),t})})}},{key:"render",value:function(){var e=this,n=this.props.notes.map(function(n,a){return n.folder?o.a.createElement(b.a.SubMenu,{key:"sub1",title:o.a.createElement("span",null,n.name)},o.a.createElement(t,{notes:n.notes,handleOnItemClick:e.handleClick.bind(e)})):o.a.createElement(b.a.Item,{selected:e.state.selectedItem===a,onClick:e.handleClick.bind(e,n.content,a)},o.a.createElement("span",null,n.name))});return o.a.createElement("div",{className:"NoteList"},o.a.createElement(b.a,null,n))}}]),t}(a.Component)),v=(n(397),n(138)),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleOnClick=function(e){window.location=e},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"Header"},o.a.createElement(v.a,{onClick:this.handleOnClick.bind(this,"https://rayshaw001.github.io"),alt:"Ray Shaw",src:"https://avatars3.githubusercontent.com/u/15726041"}))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={input:"",notes:[],noteTotalSize:0},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];f.a.get("https://api.github.com/repos/rayshaw001/books/contents/Note/").then(function(n){e.setState({noteTotalSize:n.data.length}),n.data.map(function(n){t.push({name:n.name,folder:!1}),e.setState({notes:t})})})}},{key:"shouldComponentUpdate",value:function(e,t){return t.notes.length===this.state.noteTotalSize||this.state.input!==t.input}},{key:"render",value:function(){return console.log(this),o.a.createElement("div",{className:"Main"},o.a.createElement(O,null),o.a.createElement("div",{className:"body"},o.a.createElement(k,{notes:this.state.notes,handleOnItemClick:this.handleOnItemClick.bind(this)}),o.a.createElement(d.a,{className:"markdown",source:this.state.input})))}},{key:"handleOnItemClick",value:function(e){this.setState({input:e})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[240,2,1]]]);
//# sourceMappingURL=main.dca135d8.chunk.js.map