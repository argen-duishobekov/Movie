(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=n(4),s=n(5),u=n(7),h=n(6),j=(n(12),n(0)),d=function(t){var e=t.el;return Object(j.jsxs)("div",{className:"movie-card",children:[Object(j.jsx)("img",{src:e.Poster,alt:"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0441\u0442\u0435\u0440 \u0444\u0438\u043b\u044c\u043c\u0430"}),Object(j.jsx)("h3",{children:e.Title}),Object(j.jsx)("p",{children:e.Type}),Object(j.jsx)("b",{children:e.Year})]})},l=(n(14),"207cfbe5"),b=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).seacrh=function(e){"Enter"==e.key&&fetch("http://www.omdbapi.com/?s=".concat(e.target.value,"&apikey=").concat(l)).then((function(t){return t})).then((function(t){return t.json()})).then((function(e){t.setState((function(){return{data:e.Search}}))}))},t.state={data:null,error:null,loading:!1,q:"London"},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("http://www.omdbapi.com/?s=".concat(this.state.q,"&apikey=").concat(l)).then((function(t){return t})).then((function(t){return t.json()})).then((function(e){t.setState((function(){return{data:e.Search}}))}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",onKeyPress:this.seacrh}),Object(j.jsx)("div",{className:"container",children:null!==this.state.data&&this.state.data.map((function(t,e){return Object(j.jsx)(d,{el:t},e)}))})]})}}]),n}(a.a.Component);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5013543f.chunk.js.map