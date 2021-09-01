(this.webpackJsonpsample3_meals_app=this.webpackJsonpsample3_meals_app||[]).push([[0],{151:function(n,e){},153:function(n,e){},163:function(n,e){},165:function(n,e){},192:function(n,e){},193:function(n,e){},198:function(n,e){},200:function(n,e){},207:function(n,e){},226:function(n,e){},264:function(n,e,t){"use strict";t.r(e);var a,r,i,c,o,s,l,d,u,p,b,x,j,h,m,f,g,v,O,w,y,k,S,N,z,_=t(0),C=t.n(_),M=t(43),G=t.n(M),R="https://api.themoviedb.org/3/",T="b9e54af5375f3d939047dc168be51aa8",E="".concat(R,"search/movie?api_key=").concat(T,"&language=en-US&query="),I="".concat(R,"movie/popular?api_key=").concat(T,"&language=en-US"),B="".concat(R,"authentication/token/new?api_key=").concat(T),L="".concat(R,"authentication/token/validate_with_login?api_key=").concat(T),P="".concat(R,"authentication/session/new?api_key=").concat(T),F="http://image.tmdb.org/t/p/",q="w1280",D=t(7),U=t.n(D),J=t(45),W=t(17),V=t(12),X=t(8),Y={method:"POST",headers:{"Content-Type":"application/json"}},H={fetchMovies:function(){var n=Object(V.a)(U.a.mark((function n(e,t){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e?"".concat(E).concat(e,"&page=").concat(t):"".concat(I,"&page=").concat(t),n.next=3,fetch(a);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(V.a)(U.a.mark((function n(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(R,"movie/").concat(e,"?api_key=").concat(T),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(V.a)(U.a.mark((function n(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(R,"movie/").concat(e,"/credits?api_key=").concat(T),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(V.a)(U.a.mark((function n(){var e;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(B);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(V.a)(U.a.mark((function n(e,t,a){var r,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:t,password:a,request_token:e},n.next=3,fetch(L,Object(W.a)(Object(W.a)({},Y),{},{body:JSON.stringify(r)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(P,Object(W.a)(Object(W.a)({},Y),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return i=n.sent,n.abrupt("return",i);case 13:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(V.a)(U.a.mark((function n(e,t,a){var r,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(R,"movie/").concat(t,"/rating?api_key=").concat(T,"&session_id=").concat(e),n.next=3,fetch(r,Object(W.a)(Object(W.a)({},Y),{},{body:JSON.stringify({value:a})}));case 3:return n.next=5,n.sent.json();case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},A=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},K=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},Q=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},Z={page:0,results:[],total_pages:0,total_results:0},$=t(3),nn=t(4),en=nn.b.div(a||(a=Object($.a)(["\n   margin: 0 auto;\n   padding: 0 20px;\n   max-width: var(--maxWidth);\n   \n"]))),tn=nn.b.div(r||(r=Object($.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill,minmax(",",1fr)) ;\n  grid-gap: 2rem;\n\n \n"])),(function(n){return n.minmax})),an=t(1),rn=function(n){var e=n.heading,t=n.children,a=n.minmax;return Object(an.jsxs)(en,{children:[Object(an.jsx)("h1",{children:e}),Object(an.jsx)(tn,{minmax:a,children:t})]})},cn=nn.b.div(i||(i=Object($.a)(["\nbackground: linear-gradient(to bottom ,rgb(0,0,0,0)41%,rgb(0,0,0,0.65) 100%),\n            url(","),var(--darkGray);\n            background-size:cover;\n            background-position: center;\n            background-repeat: no-repeat;\n            position: relative;\n            animation: animateimage 2s;\n            height: 600px;\n            @keyframes animateimage{\n                from{\n                    opacity: 0;\n                }\n                to{\n                    opacity: 1;\n                }\n            }\n\n           \n          \n"])),(function(n){return n.image})),on=nn.b.div(c||(c=Object($.a)(["\n      margin: 0 auto;\n      padding: 20px;\n      max-width: var(--maxWidth);\n"]))),sn=nn.b.div(o||(o=Object($.a)(["\n     z-index: 100;\n     position: absolute;\n     bottom: 40px;\n     color: var(--white);\n     margin-right: 20px;\n     max-width: 700px;\n     min-height:100px;\n\n     h1{\n       font-size: var(--fontSuperBig);\n       @media (max-width: 720px){\n       font-size: var(--fontBig);\n       }\n     }\n\n     p{\n        font-size: var(--fontMed);\n        @media (max-width: 720px){\n        font-size: var(--fontSmall);\n     }\n\n     @media (max-width:720px){\n         max-width: 100%;\n     }\n     \n     }\n\n"]))),ln=function(n){var e=n.image,t=n.title,a=n.text;return Object(an.jsx)(cn,{image:e,children:Object(an.jsx)(on,{children:Object(an.jsxs)(sn,{children:[Object(an.jsx)("h1",{children:t}),Object(an.jsx)("p",{children:a})]})})})},dn=nn.b.img(s||(s=Object($.a)(["\n  width: 100%;\n  max-width: 600px;\n  object-fit: cover;\n  border-radius: "," ;\n  transition: all 0.3s;\n  animation: animation 0.5s;\n  height: ",";\n  \n  \n  \n\n  @keyframes animation{\n      from{\n         opacity: 0;\n      }\n      to{\n         opacity: 1;\n      }\n  }\n\n  :hover{\n      opacity: 0.8;\n  }\n"])),(function(n){return n.bottomR?"20px 20px 0 0":"20px"}),(function(n){return n.clickable?"300px":"600px"})),un=t(13),pn=function(n){var e=n.image,a=n.movieid,r=n.clickable,i=n.bottomBorderNone,c=t(72)("b9e54af5375f3d939047dc168be51aa8").encrypt(a).toString().replaceAll("/","%nk%");return Object(an.jsx)("div",{children:r?Object(an.jsx)(un.b,{to:"/Movie/".concat(c),children:Object(an.jsx)(dn,{src:e,alt:"movie-image",clickable:r,bottomR:i})}):Object(an.jsx)(dn,{src:e,alt:"movie-image",bottomR:i})})},bn=t.p+"static/media/no_image.22d2aa4d.jpg",xn=nn.b.div(l||(l=Object($.a)(["\n   width: 50px;\n   height: 50px;\n   border: 5px solid var(--lightGray);\n   animation: animate 1.5s linear infinite;\n   border-right: 5px solid var(--darkGray);\n   border-bottom: 5px solid var(--darkGray);\n   border-radius: 50%;\n   margin: 20px auto;\n\n   @keyframes animate{\n       0%{\n          transform: rotate(0deg) ;\n       }\n       100%{\n          transform: rotate(360deg);\n        }\n   }\n"]))),jn=nn.b.div(d||(d=Object($.a)(["\n\n margin: 0;\n background-color: var(--darkGray);\n padding: 20px 0;\n"]))),hn=nn.b.div(u||(u=Object($.a)(["\n width: 90%;\n padding: 3px 10px;\n background-color: var(--medGray);\n display: flex;\n justify-content: center;\n margin: 0 auto;\n border-radius: 40px;\n max-width: var(--maxWidth);\n img{\n     width: 25px;\n     height: 25px;\n     margin: auto 5px;\n     margin-right: 10px;\n }\n input{\n     border-style: none;\n     border-radius: 10px;\n     width: 100%;\n     padding: 8px 10px;\n     outline: none;\n     background: transparent;\n     color: var(--white);\n     font-size: var(--fontMed);\n }\n\n"]))),mn=t.p+"static/media/search-icon.cd820f5a.svg",fn=function(n){var e=n.box,t=n.setsearchTerms,a=Object(_.useState)(""),r=Object(X.a)(a,2),i=r[0],c=r[1],o=Object(_.useRef)(!0);return Object(_.useEffect)((function(){if(!0!==o.current){var n=setTimeout((function(){t(i)}),500);return function(){clearTimeout(n)}}o.current=!1}),[i,t]),Object(an.jsx)(jn,{children:Object(an.jsxs)(hn,{children:[Object(an.jsx)("img",{onClick:function(){return e.current.focus()},src:mn,alt:"search-icon"}),Object(an.jsx)("input",{ref:e,type:"text",value:i,onChange:function(n){return c(n.target.value)},placeholder:"Search Movie"})]})})},gn=nn.b.button(p||(p=Object($.a)(["\n  outline: none;\n  background-color: var(--darkGray);\n  color:var(--white);\n  width: 80%;\n  margin: 20px auto;\n  display: block;\n  max-width: 250px;\n  padding: 9px;\n  border-radius: 30px;\n  font-size: var(--fontMed);\n  border: none;\n  cursor: pointer;\n\n  :hover{\n      opacity: 0.8;\n  }\n"]))),vn=function(n){var e=n.text,t=n.callback;return Object(an.jsx)(gn,{type:"button",onClick:t,children:e})},On=nn.b.div(b||(b=Object($.a)(["\nbackground: var(--darkGray);\npadding: 0 20px;\n"]))),wn=nn.b.div(x||(x=Object($.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: space-between;\nmax-width: var(--maxWidth);\npadding: 20px 0px;\nmargin: 0 auto;\n\n"]))),yn=nn.b.img(j||(j=Object($.a)(["\nwidth: 200px;\n\n@media (max-width: 500px){\n   width: 150px;\n}\n\n"]))),kn=nn.b.img(h||(h=Object($.a)(["\nwidth: 100px;\n\n@media (max-width: 500px){\n    width: 80px;\n}\n"]))),Sn=t.p+"static/media/react-movie-logo.42955eb6.svg",Nn=t.p+"static/media/tmdb_logo.f15b6632.svg",zn=function(){return Object(an.jsx)(On,{children:Object(an.jsxs)(wn,{children:[Object(an.jsx)(un.b,{to:"/",children:Object(an.jsx)(yn,{src:Sn,alt:"RNDBlogo"})}),Object(an.jsx)(kn,{src:Nn,alt:"TMDBLogo"})]})})},_n=nn.b.div(m||(m=Object($.a)(["\n   box-shadow: 0 2px 4px 0;\n   border-radius: 20px 20px 10px 10px;\n   \n"]))),Cn=nn.b.div(f||(f=Object($.a)(["\n    margin: 6px 10px;\n    \n  h3{\n      margin: 0 0;\n      font-size: var(--fontMed);\n\n      @media (max-width:786px){\n        font-size: var(--fontSmall);\n      }\n  }\n  p{\n      margin: 2px 0;\n      font-size: var(--fontSmall);\n  }\n"]))),Mn=t(6),Gn=function(){var n=function(){var n=Object(_.useState)(""),e=Object(X.a)(n,2),t=e[0],a=e[1],r=Object(_.useState)(Z),i=Object(X.a)(r,2),c=i[0],o=i[1],s=Object(_.useState)(!1),l=Object(X.a)(s,2),d=l[0],u=l[1],p=Object(_.useState)(!1),b=Object(X.a)(p,2),x=b[0],j=b[1],h=Object(_.useState)(!1),m=Object(X.a)(h,2),f=m[0],g=m[1],v=function(){var n=Object(V.a)(U.a.mark((function n(e){var t,a,r=arguments;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"",n.prev=1,j(!1),u(!0),n.next=6,H.fetchMovies(t,e);case 6:a=n.sent,o((function(n){return Object(W.a)(Object(W.a)({},a),{},{results:e>1?[].concat(Object(J.a)(n.results),Object(J.a)(a.results)):Object(J.a)(a.results)})})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),j(!0);case 14:u(!1);case 15:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}();return console.log(c),Object(_.useEffect)((function(){if(!t){var n=Q("homestate");if(n)return void o(n)}o(Z),v(1,t)}),[t]),Object(_.useEffect)((function(){f&&(v(c.page+1,t),g(!1))}),[c.page,t,f]),Object(_.useEffect)((function(){t||sessionStorage.setItem("homestate",JSON.stringify(c))}),[t,c]),{state:c,loader:d,error:x,setstate:o,setsearchTerms:a,searchTerms:t,setloadMore:g}}(),e=n.state,t=n.loader,a=n.setsearchTerms,r=n.searchTerms,i=n.setloadMore,c=Object(_.useRef)(),o=Object(_.useRef)();return Object(_.useEffect)((function(){console.log(o),o.current=localStorage.getItem("token")}),[]),t||null!==o.current?Object(an.jsx)("div",{children:t?Object(an.jsx)(an.Fragment,{}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(zn,{}),!r&&e.results[0]?Object(an.jsx)(ln,{image:"".concat(F).concat(q).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(an.jsx)(fn,{box:c,setsearchTerms:a}),Object(an.jsx)(rn,{heading:r?"Search Results":"Popular content",minmax:"300px",children:e.results.map((function(n,e){var t=n.release_date.slice(0,4);return Object(an.jsxs)(_n,{children:[Object(an.jsx)(pn,{clickable:!0,image:n.backdrop_path?"".concat(F).concat(q).concat(n.backdrop_path):bn,movieid:n.id,bottomBorderNone:!0}),Object(an.jsxs)(Cn,{children:[Object(an.jsx)("h3",{children:n.title}),Object(an.jsx)("p",{children:t})]})]},n.id)}))}),t&&Object(an.jsx)(xn,{}),!t&&e.page<e.total_pages&&Object(an.jsx)(vn,{text:"Load More",callback:function(){return i(!0)}})]})}):Object(an.jsx)(Mn.a,{to:"/Login"})},Rn=Object(nn.a)(g||(g=Object($.a)(["\n :root{\n     --maxWidth:1380px;\n     --white:#fff;\n     --lightGray:#eee;\n     --medGray:#353535;\n     --darkGray:#1c1c1c;\n     --fontSuperBig:2.5rem;\n     --fontBig:1.5rem;\n     --fontMed:1.3rem;\n     --fontSmall:1rem;\n     \n }\n\n *{\n     box-sizing: border-box;\n     font-family: 'Abel',sans-serif;\n     \n     \n }\n\n body{\n   \n     margin: 0;\n     padding: 0;\n    -webkit-overflow-scrolling: inherit;\n     h1{\n         font-size: 2rem;\n         font-weight: 600;\n         color: var(---white);\n     }\n     h3{\n         font-size: 1.1rem;\n         font-weight: 600;\n\n     }\n     p{\n         font-size: 1rem;\n         color: var(---white);\n     }\n }\n\n"]))),Tn=function(n){var e=Object(_.useState)({}),t=Object(X.a)(e,2),a=t[0],r=t[1],i=Object(_.useState)(!0),c=Object(X.a)(i,2),o=c[0],s=c[1],l=Object(_.useState)(!1),d=Object(X.a)(l,2),u=d[0],p=d[1];return Object(_.useEffect)((function(){var e=Q(n);if(e)return r(e),void s(!1);!function(){var n=Object(V.a)(U.a.mark((function n(e){var t,a,i;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,H.fetchMovie(e);case 3:return t=n.sent,n.next=6,H.fetchCredits(e);case 6:a=n.sent,i=a.crew.filter((function(n){return"Director"===n.job})),r(Object(W.a)(Object(W.a)({},t),{},{credits:a.cast,director:i})),s(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),p(!0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()(n)}),[n]),Object(_.useEffect)((function(){sessionStorage.setItem(n,JSON.stringify(a))}),[a,n]),{state:a,loading:o,error:u}},En=nn.b.div(v||(v=Object($.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--medGray);\n  height: 70px;\n  \n\n"]))),In=nn.b.div(O||(O=Object($.a)(["\n   width: 100%;\n   max-width: var(--maxWidth);\n    \n   @media (max-width:1280px){\n        padding: 0 20px;\n    }\n\nspan{\n    color: var(--white);\n    font-size: var(--fontMed);\n\n    @media (max-width:768px){\n        font-size: var(--fontSmall);\n    }\n}\n\n"]))),Bn=function(n){var e=n.movieTitle;return Object(an.jsx)(En,{children:Object(an.jsxs)(In,{children:[Object(an.jsx)(un.b,{to:"/",children:Object(an.jsx)("span",{children:"Home"})}),Object(an.jsx)("span",{children:" | "}),Object(an.jsx)("span",{children:e})]})})},Ln=nn.b.div(w||(w=Object($.a)(["\n   background: ",";\n   background-position:100% center;\n   background-size: cover;\n   padding: 40px 20px;\n   \n"])),(function(n){var e=n.backdrop;return e?"url(".concat(F).concat(q).concat(e,")"):"#eee"})),Pn=nn.b.div(y||(y=Object($.a)(["\n   display: flex;\n   max-width: var(--maxWidth);\n   justify-content: center;\n   margin: 0 auto;\n   height: 100%;\n   background-color: rgb(0,0,0,0.7);\n   border-radius: 20px;\n   padding: 0;\n   animation: cont 0.7s ease-in-out 1 ;\n  \n   @keyframes cont{\n       0%{transform:translateX(3000px)}\n      100%{transform:translateX(0px)}\n   }\n  \n\n\n   @media (max-width:1000px){\n    flex-wrap: wrap;\n    min-width: fit-content;\n   }\n\n   \n   \n"]))),Fn=nn.b.div(k||(k=Object($.a)(["\n   max-width: 950px;\n   padding: 20px 40px;\n   color: var(--white);\n   font-size: var(--fontMed);\n   animation: textview 1.2s ease-out 1 ;\n  \n   \n\n   @keyframes textview{\n    0% {opacity:0}\n    75%{opacity:0}\n    100%{opacity:1}\n   }\n\n   @media (max-width:768px){\n    font-size: var(--fontSmall);\n   }\n\n   p{\n    font-size: var(--fontMed);\n\n    @media (max-width:768px){\n    font-size: var(--fontSmall);\n   }\n   }\n\n  \n  h3{\n    font-size: var(--fontBig);\n\n    @media (max-width:768px){\n    font-size: var(--fontMed);\n    }\n\n  }\n   .rat-dir{\n       display: flex;\n   }\n\n   .rating{\n       margin-right: 40px;\n      \n       h3{\n           color:var(--white);\n       }\n       .vote{\n        color: black;\n        background-color:var(--white) ;\n        width: 40px;\n        height: 40px;\n        border-radius: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-weight: 900;\n       }\n\n       .director{\n           align-self: center;\n       }\n       \n   }\n\n  \n"]))),qn=function(n){var e=n.movie;return Object(an.jsx)(Ln,{backdrop:e.backdrop_path,children:Object(an.jsxs)(Pn,{children:[Object(an.jsx)(pn,{image:e.backdrop_path?"".concat(F).concat(q).concat(e.backdrop_path):bn,movieid:e.id,clickable:!1}),Object(an.jsxs)(Fn,{children:[Object(an.jsx)("h1",{children:e.title}),Object(an.jsx)("h3",{children:"PLOT"}),Object(an.jsx)("p",{children:e.overview}),Object(an.jsxs)("div",{className:"rat-dir",children:[Object(an.jsxs)("div",{className:"rating",children:[Object(an.jsx)("h3",{children:"Rating"}),Object(an.jsx)("div",{className:"vote",children:e.vote_average})]}),Object(an.jsxs)("div",{className:"director",children:[Object(an.jsxs)("h3",{children:["Director",e.director.length>1?"s":""]}),e.director.map((function(n,e){return Object(an.jsx)("p",{className:"dirname",children:n.name},n.id)}))]})]})]})]})})},Dn=nn.b.div(S||(S=Object($.a)(["\n   display: flex;\n   justify-content: center;\n   background-color: var(--darkGray);\n"]))),Un=nn.b.div(N||(N=Object($.a)(["\n   display: flex;\n   width: 100%;\n   max-width: var(--maxWidth);\n   justify-content: space-between;\n   flex-wrap: wrap;\n   padding: 10px 0;\n\n  \n"]))),Jn=nn.b.div(z||(z=Object($.a)(["\n   color: var(--white);\n   background-color: var(--medGray);\n   padding: 0 20px;\n   flex: 1;\n   text-align: center;\n   border-radius: 20px;\n   margin:15px 20px;\n   font-weight: 900;\n   font-size: var(--fontMed);\n   min-width: 200px;\n\n   @media (max-width:786px){\n    font-size: var(--fontSmall);\n   \n   }\n   \n"]))),Wn=t(137),Vn=t.n(Wn);DataView.propTypes={title:Vn.a.string};var Xn,Yn,Hn,An,Kn,Qn,Zn=function(n){var e=n.movie,t=function(n){var e=n.title,t=n.value;return Object(an.jsx)(Jn,{children:Object(an.jsxs)("p",{children:[e,": ",t]})})};return Object(an.jsx)(Dn,{children:Object(an.jsxs)(Un,{children:[Object(an.jsx)(t,{title:"Running time",value:A(e.runtime)}),Object(an.jsx)(t,{title:"Budget",value:K(e.budget)}),Object(an.jsx)(t,{title:"Revenue",value:K(e.revenue)})]})})},$n=nn.b.div(Xn||(Xn=Object($.a)(["\n  width: 100%;\n  height: 400px;\n  background-color: var(--darkGray);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 20px;\n  padding: 5px 0;\n  color: var(--white);\n  justify-content: space-around;\n\n  h3{\n      margin: 0 auto;\n      text-align: center;\n  }\n  p{\n      margin: 0 auto;\n      text-align: center;\n  }\n"]))),ne=nn.b.img(Yn||(Yn=Object($.a)(["\n   width: 90% cover;\n   height: 300px;\n   border-radius: 20px;\n   margin: 0 0 5px 0;\n   \n"]))),ee=function(n){var e=n.url,t=n.name,a=n.character;return Object(an.jsxs)($n,{children:[Object(an.jsx)(ne,{src:e}),Object(an.jsx)("h3",{children:t}),Object(an.jsx)("p",{children:a})]})},te=t(72)("b9e54af5375f3d939047dc168be51aa8"),ae=function(){var n=Object(Mn.i)().MovieId.replaceAll("%nk%","/"),e=te.decrypt(n);console.log("hello",e);var t=Tn(e),a=t.state,r=t.loading,i=t.error;return console.log(a),r?Object(an.jsx)(xn,{}):i?Object(an.jsx)("div",{children:"Something went wrong...."}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(Bn,{movieTitle:a.original_title}),Object(an.jsx)(qn,{movie:a}),Object(an.jsx)(Zn,{movie:a}),Object(an.jsx)(rn,{heading:"Cast",minmax:"200px",children:a.credits.map((function(n,e){return Object(an.jsx)(ee,{url:n.profile_path?"".concat(F).concat("w780").concat(n.profile_path):bn,name:n.name,character:n.character},n.credit_id)}))})]})},re=function(){return Object(an.jsx)("div",{children:"Not Found"})},ie=t.p+"static/media/bg.a6e3c68c.jpg",ce=nn.b.div(Hn||(Hn=Object($.a)(["\n   background:url(",") no-repeat;\n   height: 100vh;\n   background-size: cover;\n   background-position: center;\n   position: relative;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 0 10px;\n"])),ie),oe=nn.b.div(An||(An=Object($.a)(["\n   width: 100%;\n   height: 400px;\n   max-width: 485px;\n   background-color: rgba(0,0,0,0.7);\n   border-radius: 10px;\n   box-shadow: 0 15px 25px rgba(0,0,0,0.5) ;\n   position: relative;\n   display: flex;\n   align-items: center;\n   flex-direction: column;\n   padding: 20px 40px;\n\n   @media (max-width:400px){\n      padding:30px 20px;\n   }\n\n   .imgContainer{\n      position: absolute;\n      width: 100px;\n      height: 100px;\n      background-color:  rgba(255,255,255,0.8);\n      top:-12%;\n      left:50% -50;\n      border-radius: 50%;\n      overflow: hidden;\n      pointer-events: none;\n   }\n   img{\n      width: 100%;\n      height: 100%;\n   }\n\n   .logintext{\n      font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';\n      color: #ff652f;\n      margin-top: 15%;\n      font-size: 1.8rem;\n   }\n   .form{\n      width: 100%;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n   }\n   .inputcontainer{\n      width:100%;\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      \n   }\n\n   .inpfield{\n      outline: none;\n      border: none;\n      height: 40px;\n      font-size: 18px;\n      padding: 0 10px;\n      background-color: transparent;\n      border-bottom: 1px solid silver;\n      margin-bottom: 30px;\n      color: var(--white);\n      font-family: 'sans-serif';\n      transition: 0.3s ease-in;\n      \n   }\n   \n  .inputcontainer label{\n     position: absolute;\n     bottom: 40px;\n     transition: 0.3s ease;\n     font-size: 18px;\n     color: var(--white);\n     font-family: 'sans-serif';\n     pointer-events: none;\n  }\n \n  .inputcontainer input:not([value='']) ~ label,\n  .inputcontainer input:valid ~ label,\n  .inputcontainer input:focus ~ label{\n     transform: translateY(-23px);\n     font-size: 20px;\n     color: #ff652f;\n  }\n  \n\n  .inputcontainer input:-webkit-autofill{\n    box-shadow:0 0 0 1000px rgba(0,0,0,0.3) inset !important;\n    \n  }\n\n  .inputcontainer .underline{\n     position: absolute;\n     bottom: 30px;\n     width: 100%;\n     height: 2px;\n     \n  }\n  .inputcontainer .underline:before{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      background-color: var(--white);\n      transform: scaleX(0);\n      transition:transform 0.3s ease;\n  }\n  .inputcontainer input:focus ~ .underline:before,\n  .inputcontainer input:valid ~ .underline:before{\n      \n\n      transform: scaleX(1);\n  }\n\n  .btn{\n      width: 100px;\n      height: 40px;\n      border: none;\n      background-color: #ff652f;\n      cursor: pointer;\n      border-radius: 5px;\n      font-family: sans-serif;\n      font-size: 18px;\n      font-weight: 400;\n      color: var(--darkGray);\n  }\n  .bottomV{\n     display: flex;\n     flex-direction: row;\n     justify-content: space-between;\n     width: 100%;\n     align-items: center;\n  }\n  .link{\n      \n      font-size: 20px;\n      color: var(--white);\n  }\n  .linkd{\n      color: #ff652f;\n  }\n \n"]))),se=t.p+"static/media/avatar.f6b9b89b.png",le=t(14),de=t(138),ue=t.n(de).a.create({baseURL:"https://technotoil-movie.herokuapp.com/api/"}),pe=Object(_.createContext)(),be=function(n){var e=Object(_.useState)(null),t=Object(X.a)(e,2),a=t[0],r=t[1];return Object(an.jsx)(pe.Provider,{value:[a,r],children:n.children})},xe={position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},je=function(){var n=Object(_.useContext)(pe),e=Object(X.a)(n,2),t=(e[0],e[1]),a=Object(_.useState)(""),r=Object(X.a)(a,2),i=r[0],c=r[1],o=Object(_.useState)(""),s=Object(X.a)(o,2),l=s[0],d=s[1],u=Object(_.useState)(!1),p=Object(X.a)(u,2),b=p[0],x=p[1],j=Object(_.useRef)(null),h=Object(Mn.h)(),m=function(){var n=Object(V.a)(U.a.mark((function n(e){var a,r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),x(!0),j.current=Object(le.b)("Request is process",xe),n.prev=3,n.next=6,ue.post("/auth",{email:i,password:l});case 6:a=n.sent,le.b.update(j.current,{render:"Login successfully",type:le.b.TYPE.SUCCESS,autoClose:3e3,hideProgressBar:!0}),t(a.data.token),localStorage.setItem("token",a.data.token),console.log(a.data),x(!1),h("/"),n.next=21;break;case 15:n.prev=15,n.t0=n.catch(3),console.log(n.t0.response.data),r=n.t0.response.data,le.b.update(j.current,{render:r.error,type:le.b.TYPE.ERROR,autoClose:3e3,hideProgressBar:!0}),x(!1);case 21:case"end":return n.stop()}}),n,null,[[3,15]])})));return function(e){return n.apply(this,arguments)}}();return Object(an.jsx)(ce,{children:Object(an.jsxs)(oe,{children:[Object(an.jsx)("div",{className:"imgContainer",children:Object(an.jsx)("img",{src:se,alt:"profile"})}),Object(an.jsx)("h2",{className:"logintext",children:"Login"}),Object(an.jsxs)("form",{className:"form",onSubmit:m,children:[Object(an.jsxs)("div",{className:"inputcontainer",children:[Object(an.jsx)("input",{type:"email",name:"email",id:"email",required:!0,className:"inpfield",value:i,onChange:function(n){return c(n.target.value)}}),Object(an.jsx)("label",{htmlFor:"email",children:"Email"}),Object(an.jsx)("div",{className:"underline"})]}),Object(an.jsxs)("div",{className:"inputcontainer",children:[Object(an.jsx)("input",{type:"password",name:"password",id:"password",required:!0,className:"inpfield",value:l,onChange:function(n){return d(n.target.value)}}),Object(an.jsx)("label",{htmlFor:"password",children:"Password"}),Object(an.jsx)("div",{className:"underline"})]}),Object(an.jsx)("div",{className:"bottomV",children:b?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)("p",{className:"link",children:"Create new account ? Sign in"}),Object(an.jsx)("button",{type:"button",className:"btn",children:"LOGIN"})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)("p",{className:"link",children:["Create new account ? ",Object(an.jsx)(un.b,{className:"linkd",to:"/Signin",children:" Sign In"})]}),Object(an.jsx)("button",{type:"submit",className:"btn",children:"LOGIN"})]})})]})]})})},he=function(){return Object(an.jsx)(je,{})},me=nn.b.div(Kn||(Kn=Object($.a)(["\n   background:url(",") no-repeat;\n   height: 100vh;\n   background-size: cover;\n   background-position: center;\n   position: relative;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 0 10px;\n"])),ie),fe=nn.b.div(Qn||(Qn=Object($.a)(["\n   width: 100%;\n   height: 450px;\n   max-width: 485px;\n   background-color: rgba(0,0,0,0.7);\n   border-radius: 10px;\n   box-shadow: 0 15px 25px rgba(0,0,0,0.5) ;\n   position: relative;\n   display: flex;\n   align-items: center;\n   flex-direction: column;\n   padding: 20px 40px;\n\n   @media (max-width:400px){\n      padding:30px 20px;\n   }\n\n   .imgContainer{\n      position: absolute;\n      width: 100px;\n      height: 100px;\n      background-color:  rgba(255,255,255,0.8);\n      top:-12%;\n      left:50% -50;\n      border-radius: 50%;\n      overflow: hidden;\n      pointer-events: none;\n   }\n   img{\n      width: 100%;\n      height: 100%;\n   }\n\n   .logintext{\n      font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';\n      color: #ff652f;\n      margin-top: 15%;\n      font-size: 1.8rem;\n   }\n   .form{\n      width: 100%;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n   }\n   .inputcontainer{\n      width:100%;\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      \n   }\n\n   .inpfield{\n      outline: none;\n      border: none;\n      height: 40px;\n      font-size: 18px;\n      padding: 0 10px;\n      background-color: transparent;\n      border-bottom: 1px solid silver;\n      margin-bottom: 30px;\n      color: var(--white);\n      font-family: 'sans-serif';\n      transition: 0.3s ease-in;\n      \n   }\n   \n  .inputcontainer label{\n     position: absolute;\n     bottom: 45px;\n     transition: 0.3s ease;\n     font-size: 18px;\n     color: var(--white);\n     font-family: 'sans-serif';\n     pointer-events: none;\n  }\n \n  .inputcontainer input:not([value='']) ~ label,\n  .inputcontainer input:valid ~ label,\n  .inputcontainer input:focus ~ label{\n     transform: translateY(-23px);\n     font-size: 20px;\n     color: #ff652f;\n  }\n  \n\n  .inputcontainer input:-webkit-autofill{\n    box-shadow:0 0 0 1000px rgba(0,0,0,0.3) inset !important;\n    \n  }\n\n  .inputcontainer .underline{\n     position: absolute;\n     bottom: 30px;\n     width: 100%;\n     height: 2px;\n     \n  }\n  .inputcontainer .underline:before{\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      background-color: var(--white);\n      transform: scaleX(0);\n      transition:transform 0.3s ease;\n  }\n  .inputcontainer input:focus ~ .underline:before,\n  .inputcontainer input:valid ~ .underline:before{\n      \n\n      transform: scaleX(1);\n  }\n\n  .btn{\n      width: 100px;\n      height: 40px;\n      border: none;\n      background-color: #ff652f;\n      cursor: pointer;\n      border-radius: 5px;\n      font-family: sans-serif;\n      font-size: 18px;\n      font-weight: 400;\n      color: var(--darkGray);\n  }\n  .bottomV{\n     display: flex;\n     flex-direction: row;\n     justify-content: space-between;\n     width: 100%;\n     align-items: center;\n  }\n  .link{\n      \n      font-size: 20px;\n      color: var(--white);\n  }\n  .linkd{\n      color: #ff652f;\n  }\n \n"]))),ge={position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},ve=function(){var n=Object(_.useState)(""),e=Object(X.a)(n,2),t=e[0],a=e[1],r=Object(_.useState)(""),i=Object(X.a)(r,2),c=i[0],o=i[1],s=Object(_.useState)(""),l=Object(X.a)(s,2),d=l[0],u=l[1],p=Object(_.useState)(!1),b=Object(X.a)(p,2),x=b[0],j=b[1],h=Object(_.useRef)(null),m=Object(Mn.h)(),f=function(){var n=Object(V.a)(U.a.mark((function n(e){var a,r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),j(!0),h.current=Object(le.b)("Request is process",ge),n.prev=3,n.next=6,ue.post("/users",{name:t,email:c,password:d});case 6:a=n.sent,le.b.update(h.current,{render:"Account created successfully",type:le.b.TYPE.SUCCESS,autoClose:3e3,hideProgressBar:!0}),console.log(a),j(!1),m("/Login"),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(3),console.log(n.t0.response.data),r=n.t0.response.data,le.b.update(h.current,{render:r.error,type:le.b.TYPE.ERROR,autoClose:3e3,hideProgressBar:!0}),j(!1);case 19:case"end":return n.stop()}}),n,null,[[3,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(an.jsx)(me,{children:Object(an.jsxs)(fe,{children:[Object(an.jsx)("div",{className:"imgContainer",children:Object(an.jsx)("img",{src:se,alt:"profile"})}),Object(an.jsx)("h2",{className:"logintext",children:"Sign in"}),Object(an.jsxs)("form",{className:"form",onSubmit:f,children:[Object(an.jsxs)("div",{className:"inputcontainer",children:[Object(an.jsx)("input",{type:"text",name:"name",id:"name",minLength:5,required:!0,className:"inpfield",value:t,onChange:function(n){return a(n.target.value)}}),Object(an.jsx)("label",{htmlFor:"name",children:"Name"}),Object(an.jsx)("div",{className:"underline"})]}),Object(an.jsxs)("div",{className:"inputcontainer",children:[Object(an.jsx)("input",{type:"email",name:"email",id:"email",required:!0,className:"inpfield",value:c,onChange:function(n){return o(n.target.value)}}),Object(an.jsx)("label",{htmlFor:"email",children:"Email"}),Object(an.jsx)("div",{className:"underline"})]}),Object(an.jsxs)("div",{className:"inputcontainer",children:[Object(an.jsx)("input",{type:"password",name:"password",id:"password",required:!0,minLength:8,className:"inpfield",value:d,onChange:function(n){return u(n.target.value)}}),Object(an.jsx)("label",{htmlFor:"password",children:"Password"}),Object(an.jsx)("div",{className:"underline"})]}),Object(an.jsx)("div",{className:"bottomV",children:x?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)("p",{className:"link",children:"Have account ? Login"}),Object(an.jsx)("button",{type:"button",className:"btn",children:"SIGN IN"})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)("p",{className:"link",children:["Have account ? ",Object(an.jsx)(un.b,{className:"linkd",to:"/Login",children:" Login"})]}),Object(an.jsx)("button",{type:"submit",className:"btn",children:"SIGN IN"})]})})]})]})})},Oe=(t(263),function(){return Object(an.jsx)(un.a,{children:Object(an.jsxs)(be,{children:[Object(an.jsxs)(Mn.d,{children:[Object(an.jsx)(Mn.b,{path:"/Signin",element:Object(an.jsx)(ve,{})}),Object(an.jsx)(Mn.b,{path:"/Login",element:Object(an.jsx)(he,{})}),Object(an.jsx)(Mn.b,{path:"/",element:Object(an.jsx)(Gn,{})}),Object(an.jsx)(Mn.b,{path:"/Movie/:MovieId",element:Object(an.jsx)(ae,{})}),Object(an.jsx)(Mn.b,{path:"/*",element:Object(an.jsx)(re,{})})]}),Object(an.jsx)(Rn,{}),Object(an.jsx)(le.a,{})]})})});G.a.render(Object(an.jsx)(C.a.StrictMode,{children:Object(an.jsx)(Oe,{})}),document.getElementById("root"))}},[[264,1,2]]]);
//# sourceMappingURL=main.9a8a9af9.chunk.js.map