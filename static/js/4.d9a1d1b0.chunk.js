(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{2024:function(e,s,t){e.exports={chatWrapper:"Chat_chatWrapper__2X21x"}},2026:function(e,s,t){"use strict";t.r(s);var a=t(0),r=t.n(a),n=t(464),c=t.n(n),i=t(46),l=t(232),u=t.n(l),o=t(465),d=t.n(o),j=t(63),g=t(2028),f=t(15),b=t(183),h=t(3),O=function(){var e=Object(a.useState)(""),s=Object(i.a)(e,2),t=s[0],r=s[1],n=Object(f.c)((function(e){return e.chat.isReady})),c=Object(f.b)(),l=function(){t&&(c(Object(b.b)(t)),r(""))};return Object(h.jsxs)("div",{className:d.a.addMessage,children:[Object(h.jsx)(u.a,{placeholder:"New message",className:d.a.messageInput,autoSize:{minRows:1},value:t,onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),l())}}),Object(h.jsx)(j.a,{icon:Object(h.jsx)(g.a,{style:{color:"rgba(0, 0, 0, 0.85)"}}),type:"text",className:d.a.sendBtn,onClick:l,disabled:!n})]})},x=t(463),p=t.n(x),_=t(248),m=t(446),v=t(31),M=t(231),w=t.n(M),N=r.a.memo((function(e){var s=e.last||e.unique?p.a.lastMessageWrapper:p.a.message,t=e.last||e.unique?p.a.lastMessage:p.a.messageContent;return Object(h.jsxs)("div",{className:s,children:[(e.last||e.unique)&&Object(h.jsxs)(v.c,{to:"/social-network/profile/"+e.userId,children:[Object(h.jsx)(_.a,{src:e.photo&&e.photo,icon:!e.photo&&Object(h.jsx)(m.a,{}),className:p.a.avatar,size:40}),Object(h.jsx)("div",{className:p.a.svgAppendix,children:Object(h.jsxs)("svg",{width:"9",height:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("filter",{x:"-50%",y:"-14.7%",width:"200%",height:"141.2%",filterUnits:"objectBoundingBox",id:"a",children:[Object(h.jsx)("feOffset",{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),Object(h.jsx)("feGaussianBlur",{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),Object(h.jsx)("feColorMatrix",{values:"0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0",in:"shadowBlurOuter1"})]})}),Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("path",{d:"M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z",fill:"rgba(0, 0, 0, 0.85)",filter:"url(#a)"}),Object(h.jsx)("path",{d:"M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z",fill:"rgba(0, 0, 0, 0.85)",className:"corner"})]})]})})]}),Object(h.jsxs)("div",{className:t,children:[(e.first||e.unique)&&Object(h.jsx)(v.c,{to:"/social-network/profile/"+e.userId,children:Object(h.jsx)("div",{className:p.a.name,children:e.userName})}),Object(h.jsx)("div",{className:p.a.text,children:Object(h.jsx)(w.a,{children:e.message})})]})]})})),I=t(466),B=t.n(I),y=t(2027),A=t(467),C=t(25),q=r.a.memo((function(e){var s=e.last||e.unique?p.a.userLastMessageWrapper:p.a.userMessage,t=e.last||e.unique?p.a.userLastMessage:p.a.userMessageContent;return Object(h.jsxs)("div",{className:s,children:[(e.last||e.unique)&&Object(h.jsx)("div",{className:p.a.userAppendix,children:Object(h.jsxs)("svg",{width:"9",height:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("defs",{children:Object(h.jsxs)("filter",{x:"-50%",y:"-14.7%",width:"200%",height:"141.2%",filterUnits:"objectBoundingBox",id:"a",children:[Object(h.jsx)("feOffset",{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}),Object(h.jsx)("feGaussianBlur",{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),Object(h.jsx)("feColorMatrix",{values:"0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0",in:"shadowBlurOuter1"})]})}),Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(h.jsx)("path",{d:"M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",fill:"#1890ff",filter:"url(#a)"}),Object(h.jsx)("path",{d:"M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z",fill:"#1890ff",className:"corner"})]})]})}),Object(h.jsx)("div",{className:t,children:Object(h.jsx)("div",{className:p.a.userText,children:e.message})})]})})),W=function(){var e=Object(a.useState)([]),s=Object(i.a)(e,2),t=s[0],r=s[1],n=Object(f.c)((function(e){return e.chat.messages})),c=Object(f.c)(C.b),l=Object(a.useState)(!0),u=Object(i.a)(l,2),o=u[0],d=u[1],g=Object(a.useState)(-2),b=Object(i.a)(g,2),O=b[0],x=b[1],p=document.getElementById("data");Object(a.useEffect)((function(){var e=n.slice();if(n){for(var s=0;s<e.length;s++)e[s].userId===c&&(e[s].userMessage=!0);for(var t=0;t<e.length;t++){var a,i,l;if(e[t].userId===(null===(a=e[t+1])||void 0===a?void 0:a.userId)&&e[t].userId!==(null===(i=e[t-1])||void 0===i?void 0:i.userId)){e[t].first=!0,e[t].unique=!1;for(var u=t;e[u].userId===(null===(d=e[u+1])||void 0===d?void 0:d.userId)&&e[u+1].userId;){var d;u++}e[u-1].last=!1,e[u].last=!0,t=u}e[t].userId===(null===(l=e[t+1])||void 0===l?void 0:l.userId)||e[t].last||(e[t].unique=!0)}}r(e.reverse()),x(O+1),setTimeout((function(){p&&o&&(p.scrollTop=p.scrollHeight,x(0))}),5)}),[n]);return Object(h.jsxs)("div",{id:"data",className:B.a.messagesWrapper,onScroll:function(e){var s=e.currentTarget;Math.abs(s.scrollHeight-s.scrollTop-s.clientHeight)<150?d(!0):d(!1)},children:[!o&&Object(h.jsx)(j.a,{type:"text",icon:Object(h.jsx)(y.a,{count:O,size:"small",children:Object(h.jsx)(A.DownCircleOutlined,{style:{fontSize:"25px"}})}),className:B.a.badge,size:"large",onClick:function(){p&&(p.scrollTop=p.scrollHeight,x(0))}}),t.map((function(e,s){return e.userMessage?Object(h.jsx)(q,{message:e.message,last:e.last,first:e.first,unique:e.unique},s):Object(h.jsx)(N,{userName:e.userName,message:e.message,userId:e.userId,photo:e.photo,first:e.first,last:e.last,unique:e.unique},s)}))]})},z=t(2024),k=t.n(z),S=function(e){var s=Object(f.b)();return Object(a.useEffect)((function(){return s(Object(b.c)()),function(){s(Object(b.d)())}}),[]),Object(h.jsxs)("div",{className:k.a.chatWrapper,children:[Object(h.jsx)(W,{}),Object(h.jsx)(O,{})]})};s.default=function(e){return Object(h.jsx)("div",{className:c.a.dialogs,children:Object(h.jsx)(S,{})})}},463:function(e,s,t){e.exports={message:"Message_message__3CLID",lastMessageWrapper:"Message_lastMessageWrapper__24vfZ",avatar:"Message_avatar__mw1E4",messageContent:"Message_messageContent__zSm26",lastMessage:"Message_lastMessage__2nboT",svgAppendix:"Message_svgAppendix__2H4ze",name:"Message_name__frqHt",text:"Message_text__228oE",userLastMessageWrapper:"Message_userLastMessageWrapper__QydPZ",userMessage:"Message_userMessage__1BDzA",userMessageContent:"Message_userMessageContent__1yBBK",userLastMessage:"Message_userLastMessage__3Wgx_",userAppendix:"Message_userAppendix__e3w45",userText:"Message_userText__36twZ"}},464:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__2goUN"}},465:function(e,s,t){e.exports={addMessage:"AddMessageForm_addMessage__1pBo-",messageInput:"AddMessageForm_messageInput__1eIFv",sendBtn:"AddMessageForm_sendBtn__3Z0hk"}},466:function(e,s,t){e.exports={messagesWrapper:"Messages_messagesWrapper__3Ef1v",badge:"Messages_badge__3CZMy"}}}]);
//# sourceMappingURL=4.d9a1d1b0.chunk.js.map