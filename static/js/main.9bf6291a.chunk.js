(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{100:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__14t2F",dialogs_items:"Dialogs_dialogs_items__2Qi4m",messages:"Dialogs_messages__3ydIv",addMessage:"Dialogs_addMessage__1GQ4N"}},135:function(e,t,s){e.exports={usersPage:"UsersPage_usersPage__3wZfu",selectedPage:"UsersPage_selectedPage__24X7K"}},136:function(e,t,s){e.exports={header:"Post_header__3-fyf",item:"Post_item__yAHA8",likes:"Post_likes__1y5HF"}},156:function(e,t,s){e.exports={userNewPosts:"UserPosts_userNewPosts__3Atrz",form:"UserPosts_form__RbOpr"}},193:function(e,t,s){e.exports={dialog:"DialogItem_dialog__1SljY"}},194:function(e,t,s){e.exports={message:"Message_message__1Kit1"}},205:function(e,t,s){e.exports={userStatus:"Header_userStatus__3qXXs"}},213:function(e,t,s){},297:function(e,t,s){},347:function(e,t,s){"use strict";s.r(t);s(213);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,370)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))},a=s(28),r=s(66),c=s(13),i=s(34),o=s.p+"static/media/userAvatar.9ca0a8b7.jpg",l=s(190),u=s.n(l).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d5ee63b2-b8ea-4e76-b89c-c960812b3f51"}}),j=function(e,t){return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},d=function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))},b=function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},O=function(e){return u.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return u.get("profile/status/".concat(e))},p=function(e){return u.put("profile/status",{status:e})},g=function(){return u.get("auth/me").then((function(e){return e.data}))},m=function(e){return u.post("auth/login",e)},h=function(){return u.delete("auth/login")},x="ADD-POST",v="SET-STATUS",_="SET-USER-PROFILE",w={profile:{photos:{large:o,small:o},fullName:"Nikita",aboutMe:"Zdarova",userID:"18309"},status:"",postsData:[{id:Object(i.v1)(),postContent:"Hello World !!!",postLikes:15},{id:Object(i.v1)(),postContent:"It's my first post!!",postLikes:28}]},P=function(e){return{type:v,newText:e}},N=function(e){return function(t){O(e).then((function(e){t({type:_,profile:e})}))}},S=function(e){return function(t){p(e).then((function(s){console.log(s),0===s.data.resultCode&&t(P(e))}))}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var s={id:Object(i.v1)(),postContent:t.newPostText,postLikes:0};return Object(c.a)(Object(c.a)({},e),{},{postsData:[s].concat(Object(r.a)(e.postsData))});case v:return Object(c.a)(Object(c.a)({},e),{},{status:t.newText});case _:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});default:return e}},I=s.p+"static/media/dimych.4cfb0ddb.jpg",k=s.p+"static/media/andrey.05d81a41.jpg",C=s.p+"static/media/sveta.2e2af972.jpg",E="ADD-MESSAGE",T={dialogsData:[{id:"2",userName:"Dimych",avatar:I},{id:Object(i.v1)(),userName:"Andrey",avatar:k},{id:Object(i.v1)(),userName:"Sveta",avatar:C},{id:Object(i.v1)(),userName:"Sasha"},{id:Object(i.v1)(),userName:"Viktor"},{id:Object(i.v1)(),userName:"Valera"}],messageData:[{id:Object(i.v1)(),messageText:"HI"},{id:Object(i.v1)(),messageText:"Hello"},{id:Object(i.v1)(),messageText:"YO"}],newMessageText:""},U=function(e){return{type:E,newMessage:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var s={id:Object(i.v1)(),messageText:t.newMessage};return Object(c.a)(Object(c.a)({},e),{},{messageData:[].concat(Object(r.a)(e.messageData),[s])});default:return e}},D={contactsData:[{id:Object(i.v1)(),userName:"Dimych",avatar:I},{id:Object(i.v1)(),userName:"Andrey",avatar:k},{id:Object(i.v1)(),userName:"Sveta",avatar:C}]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;return e},L="FOLLOW",M="UNFOLLOW",z="SET-USERS",R="SET-CURRENT-PAGE",B="SET-TOTAL-USERS-COUNT",H="CHANGE-FETCHING-STATUS",W="CHANGE-RESPONSE-STATUS",G={users:[],pageSize:5,totalCount:0,currentPage:1,isFetching:!1,responseInProgress:!0,followingUsers:[]},Z=function(e){return{type:H,isFetching:e}},q=function(e,t){return{type:W,responseInProgress:e,id:t}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case M:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case z:return Object(c.a)(Object(c.a)({},e),{},{users:Object(r.a)(t.users)});case R:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case B:return Object(c.a)(Object(c.a)({},e),{},{totalCount:t.totalCount});case H:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case W:return Object(c.a)(Object(c.a)({},e),{},{followingUsers:t.responseInProgress?[].concat(Object(r.a)(e.followingUsers),[t.id]):e.followingUsers.filter((function(e){return e!==t.id}))});default:return e}},X={data:{id:null,email:null,login:null},isAuth:!1,isInitialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(c.a)(Object(c.a)({},e),{},{data:t.data,isAuth:!0});case"USER_BEEN_LOGINED":return Object(c.a)(Object(c.a)({},e),{},{isAuth:!0});case"USER_BEEN_LOGINED_OUT":return Object(c.a)(Object(c.a)({},e),{},{isAuth:!1});case"SET-APP-INITIALIZED":return Object(c.a)(Object(c.a)({},e),{},{isInitialized:t.isInitialized});default:return e}},K=s(191),J=s(358),V=Object(a.c)({profilePage:y,dialogsPage:A,rightNavbar:F,users:Q,auth:Y,form:J.a}),$=Object(a.e)(V,Object(a.a)(K.a)),ee=s(0),te=s.n(ee),se=s(40),ne=s.n(se),ae=(s(297),s(298),s(350)),re=s(29),ce=s(100),ie=s.n(ce),oe=s(193),le=s.n(oe),ue=s(30),je=s(3),de=function(e){var t="/social-network/profile/"+e.id;return Object(je.jsxs)("div",{className:le.a.dialog,children:[e.avatar?Object(je.jsx)("img",{src:e.avatar,alt:"userImage"}):"",Object(je.jsx)(ue.c,{to:t,children:e.userName})]})},be=s(194),Oe=s.n(be),fe=function(e){return Object(je.jsx)("div",{className:Oe.a.message,children:e.messageText})},pe=s(356),ge=s(353),me=s(16),he=s(84),xe=Object(ge.a)({form:"message"})((function(e){return Object(je.jsxs)("form",{children:[Object(je.jsx)(pe.a,{name:"message",component:"input",placeholder:"Type your message"}),Object(je.jsx)("div",{children:Object(je.jsx)(he.a,{onClick:function(t){e.handleSubmit(t),e.reset()},children:"Send"})})]})})),ve=function(e){var t=e.dialogsPage,s=Object(me.c)(),n=t.dialogsData.map((function(e){return Object(je.jsx)(de,{userName:e.userName,id:e.id,avatar:e.avatar},e.id)})),a=t.messageData.map((function(e){return Object(je.jsx)(fe,{messageText:e.messageText,id:e.id},e.id)}));return Object(je.jsxs)("div",{className:ie.a.dialogs,children:[Object(je.jsx)("div",{className:ie.a.dialogs_yaritems,children:n}),Object(je.jsxs)("div",{className:ie.a.messages,children:[a,Object(je.jsx)("div",{className:ie.a.addMessage,children:Object(je.jsx)(xe,{onSubmit:function(e){s(U(e.message))}})})]})]})},_e=s(81),we=["isAuth"],Pe=function(e){return{isAuth:e.auth.isAuth}};function Ne(e){return Object(me.b)(Pe)((function(t){var s=t.isAuth,n=Object(_e.a)(t,we);return s?Object(je.jsx)(e,Object(c.a)({},n)):Object(je.jsx)(re.a,{to:"/social-network/login"})}))}var Se=Object(a.d)(Object(me.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:U}),Ne)(ve),ye=s(196),Ie=s(197),ke=s(211),Ce=s(208),Ee=s(135),Te=s.n(Ee),Ue=s(85),Ae=s.n(Ue),De=s(352),Fe=s(360),Le=s(361),Me=["user","followingUsers","changeFollowStatus","onPageChanged"],ze=te.a.memo((function(e){var t=e.user,s=e.followingUsers,n=e.changeFollowStatus;e.onPageChanged,Object(_e.a)(e,Me);return Object(je.jsxs)("div",{className:Ae.a.userInfo,children:[Object(je.jsxs)("div",{className:Ae.a.ava,children:[Object(je.jsx)(ue.c,{to:"/social-network/profile/"+t.id,children:Object(je.jsx)("img",{src:null!==t.photos.small?t.photos.small:C,alt:t.id+" avatar",className:Ae.a.img})}),Object(je.jsx)(he.a,{size:"small",onClick:function(){return n(t.id,t.followed)},disabled:s.some((function(e){return e===t.id})),icon:t.followed?Object(je.jsx)(Le.a,{}):Object(je.jsx)(Fe.a,{}),shape:"circle",type:"text"})]}),Object(je.jsx)(De.a,{title:Object(je.jsx)(ue.c,{to:"/social-network/profile/"+t.id,style:{textDecoration:"none",color:"black"},children:t.name}),className:Ae.a.descriptionWrapper,children:Object(je.jsxs)("div",{className:Ae.a.description,style:{fontSize:"13px"},children:['" ',t.status,' "',Object(je.jsxs)("div",{style:{fontSize:"15px",textAlign:"center"},children:[Object(je.jsx)("div",{children:"Belarus,"}),Object(je.jsx)("div",{children:"Minsk"})]})]})})]},t.id)})),Re=function(e){for(var t=[],s=1;s<=10;s++)t.push(s);return Object(je.jsxs)("div",{className:Te.a.usersPage,children:[e.users.map((function(t){return Object(je.jsx)(ze,{user:t,followingUsers:e.followingUsers,onPageChanged:e.onPageChanged,changeFollowStatus:e.changeFollowStatus},t.id)})),Object(je.jsx)("div",{className:Te.a.pagination,children:t.map((function(t){return Object(je.jsxs)("span",{className:e.currentPage===t?Te.a.selectedPage:"",onClick:function(s){e.onPageChanged(t)},children:[t," "]},t)}))})]})},Be=s(359),He=s(349),We=s(98),Ge=Object(je.jsx)(We.a,{style:{fontSize:48},spin:!0}),Ze=function(){return Object(je.jsx)(Be.b,{style:{display:"flex",width:"100%",justifyContent:"center"},size:"large",children:Object(je.jsx)(He.a,{indicator:Ge})})},qe=function(e){Object(ke.a)(s,e);var t=Object(Ce.a)(s);function s(){var e;Object(ye.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).changeFollowStatus=function(t,s){e.props.followUnfollow(t,s)},e.onPageChanged=function(t){e.props.getUsers(t,e.props.usersPage.pageSize)},e}return Object(Ie.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize)}},{key:"render",value:function(){return Object(je.jsx)(je.Fragment,{children:this.props.usersPage.isFetching?Object(je.jsx)(Ze,{}):Object(je.jsx)(Re,{users:this.props.usersPage.users,totalCount:this.props.usersPage.totalCount,currentPage:this.props.usersPage.currentPage,pageSize:this.props.usersPage.pageSize,followingUsers:this.props.usersPage.followingUsers,onPageChanged:this.onPageChanged,changeFollowStatus:this.changeFollowStatus})})}}]),s}(te.a.Component),Qe=Object(a.d)(Object(me.b)((function(e){return{usersPage:e.users}}),{getUsers:function(e,t){return function(s){s(function(e){return{type:R,currentPage:e}}(e)),s(Z(!0)),j(e,t).then((function(e){var t,n;s((t=e.items,{type:z,users:t})),s((n=e.items.totalCount,{type:B,totalCount:n})),s(Z(!1))}))}},followUnfollow:function(e,t){return function(s){s(q(!0,e)),t?d(e).then((function(t){0===t.resultCode&&(s(function(e){return{type:M,id:e}}(e)),s(q(!1,e)))})):b(e).then((function(t){0===t.resultCode&&(s(function(e){return{type:L,id:e}}(e)),s(q(!1,e)))}))}}}),Ne)(qe);var Xe=function(){return Object(je.jsx)("div",{children:"Music"})};var Ye=function(){return Object(je.jsx)("div",{children:"News"})};var Ke=function(){return Object(je.jsx)(je.Fragment,{children:"Settings"})},Je=s(351),Ve=s(355),$e=s(357),et=s(206),tt=s(86),st=s.n(tt),nt=function(e){return e.auth.isAuth},at=function(e){return e.auth.isInitialized},rt=function(e){return e.profilePage},ct=function(e){return e.profilePage.profile.userID},it=function(){var e=Object(me.d)(nt),t=Object(me.c)(),s=Object(et.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?/^[A-Z0-9._%+-]{4,}$/i.test(e.password)||(t.password="Password must be longer than 3 symbols"):t.password="Required",t},onSubmit:function(e){var n;t((n=e,function(e){m(n).then((function(t){0===t.data.resultCode&&e({type:"USER_BEEN_LOGINED"})}))})),s.resetForm()}});return e?Object(je.jsx)(re.a,{to:"/social-network/profile/:userId?"}):Object(je.jsxs)(Je.a,{className:st.a.formWrapper,onFinish:s.handleSubmit,children:[Object(je.jsxs)("p",{children:["To log in get registered",Object(je.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(je.jsx)("p",{children:"or use common test account credentials:"}),Object(je.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(je.jsx)("p",{children:"Password: free"}),Object(je.jsxs)("div",{className:st.a.inputItem,children:[Object(je.jsx)(Je.a.Item,Object(c.a)(Object(c.a)({label:"Email"},s.getFieldProps("email")),{},{className:st.a.formItem,children:Object(je.jsx)(Ve.a,{})})),s.touched.email&&s.errors.email&&Object(je.jsx)("div",{style:{color:"red"},children:s.errors.email})]}),Object(je.jsxs)("div",{className:st.a.inputItem,children:[Object(je.jsx)(Je.a.Item,Object(c.a)(Object(c.a)({label:"Password"},s.getFieldProps("password")),{},{className:st.a.formItem,children:Object(je.jsx)(Ve.a.Password,{})})),s.touched.password&&s.errors.password&&Object(je.jsx)("div",{style:{color:"red"},children:s.errors.password})]}),Object(je.jsx)(Je.a.Item,{children:Object(je.jsx)($e.a,Object(c.a)(Object(c.a)({checked:s.values.rememberMe},s.getFieldProps("rememberMe")),{},{children:"RememberMe"}))}),Object(je.jsx)(Je.a.Item,{children:Object(je.jsx)(he.a,{htmlType:"submit",children:"Login"})})]})},ot=s(67),lt=s(157),ut=s(362),jt=s(363),dt=s(364),bt=s(365),Ot=s(366),ft=s(367),pt=ae.a.Sider;var gt=function(){var e=Object(ee.useState)(!0),t=Object(ot.a)(e,2),s=t[0],n=t[1];return Object(je.jsx)(pt,{collapsible:!0,collapsed:s,onCollapse:function(){n(!s)},children:Object(je.jsxs)(lt.a,{theme:"dark",mode:"inline",children:[Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(ut.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/news/",children:"News"})},"1"),Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(jt.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/profile/",children:"Profile"})},"2"),Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(dt.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/dialogs/",children:"Messages"})},"3"),Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(bt.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/users-page",children:"Developers"})},"4"),Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(Ot.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/music/",children:"Music"})},"5"),Object(je.jsx)(lt.a.Item,{icon:Object(je.jsx)(ft.a,{}),children:Object(je.jsx)(ue.b,{to:"/social-network/settings/",children:"Settings"})},"6")]})})},mt=s(354),ht=s(207),xt=s(205),vt=s.n(xt),_t=te.a.memo((function(){var e=Object(me.c)(),t=Object(me.d)((function(e){return e.auth.isAuth})),s=Object(me.d)((function(e){return e.auth.data.login}));Object(ee.useEffect)((function(){}),[t,s]);var n=Object(ee.useCallback)((function(){e((function(e){h().then((function(t){0===t.data.resultCode&&e({type:"USER_BEEN_LOGINED_OUT"})}))}))}),[e]);return Object(je.jsx)(mt.a,{title:"Social Network",extra:t?Object(je.jsxs)("div",{className:vt.a.userStatus,children:[Object(je.jsxs)(ue.c,{to:"/social-network/profile",children:[Object(je.jsx)(ht.a,{style:{backgroundColor:"#87d068"},icon:Object(je.jsx)(jt.a,{})}),s]}),Object(je.jsx)(he.a,{onClick:n,children:"Log Out"})]}):Object(je.jsx)(ue.c,{to:"/social-network/login",children:Object(je.jsx)(he.a,{color:"primary",children:"Login"})})})})),wt=s(87),Pt=s.n(wt),Nt=["status"],St=te.a.memo((function(e){var t=e.status,s=(Object(_e.a)(e,Nt),Object(me.c)()),n=Object(ee.useState)(!1),a=Object(ot.a)(n,2),r=a[0],c=a[1],i=Object(ee.useState)(t),o=Object(ot.a)(i,2),l=o[0],u=o[1];return Object(je.jsx)("div",{style:{height:"32px"},children:r?Object(je.jsx)(Ve.a,{autoFocus:!0,onBlur:function(){c(!1),s(S(l))},onKeyPress:function(e){"Enter"===e.key&&(c(!1),s(S(l)))},onChange:function(e){u(e.currentTarget.value)},value:l}):Object(je.jsx)("span",{onDoubleClick:function(){c(!0),u(t)},children:t||"-----"})})}));var yt=function(){var e=Object(me.d)(rt);return e.profile?Object(je.jsx)("div",{className:Pt.a.infoContainer,children:Object(je.jsxs)("div",{className:Pt.a.mainInfo,children:[Object(je.jsx)("img",{className:Pt.a.ava,alt:"".concat(e.profile.userID," user ava"),src:null!==e.profile.photos.small?e.profile.photos.small:C}),Object(je.jsxs)("div",{className:Pt.a.description,children:[Object(je.jsx)("span",{className:Pt.a.fullName,children:e.profile.fullName}),Object(je.jsx)(St,{status:e.status})]})]})}):Object(je.jsx)(Ze,{})},It=s(156),kt=s.n(It),Ct=s(136),Et=s.n(Ct),Tt=s(368),Ut=s(369);var At=function(e){var t=Object(me.d)((function(e){return e.profilePage.profile.photos.small})),s=Object(me.d)((function(e){return e.profilePage.profile.fullName})),n=Object(ee.useState)(!1),a=Object(ot.a)(n,2),r=a[0],c=a[1];return Object(je.jsxs)(De.a,{title:Object(je.jsxs)("div",{className:Et.a.header,children:[Object(je.jsx)(ht.a,{size:"large",src:null!==t?t:C,alt:"userImage"}),Object(je.jsx)("span",{children:s})]}),className:Et.a.item,children:[Object(je.jsx)("div",{children:e.postContent}),Object(je.jsxs)("div",{className:Et.a.likes,children:[Object(je.jsx)("span",{children:e.postLikes}),Object(je.jsx)(he.a,{icon:r?Object(je.jsx)(Tt.a,{}):Object(je.jsx)(Ut.a,{}),onClick:function(){return c(!r)},shape:"circle",type:"text"})]})]})},Dt=Object(ge.a)({form:"post"})((function(e){return Object(je.jsxs)("form",{className:kt.a.form,children:[Object(je.jsx)(pe.a,{name:"post",component:"input",placeholder:"Type your post"}),Object(je.jsx)("div",{children:Object(je.jsx)(he.a,{onClick:function(t){e.handleSubmit(t),e.reset()},children:"Send"})})]})}));var Ft=function(e){var t=e.profilePage.postsData.map((function(e){return Object(je.jsx)(At,{postContent:e.postContent,postLikes:e.postLikes,id:e.id},e.id)})),s=Object(me.c)();return Object(je.jsxs)("div",{children:[Object(je.jsx)("div",{className:kt.a.userNewPosts,children:Object(je.jsx)(Dt,{onSubmit:function(e){var t;s((t=e.post,{type:x,newPostText:t}))}})}),t]})},Lt=Object(me.b)((function(e){return{profilePage:e.profilePage}}),{})(Ft);var Mt=function(){var e=Object(me.d)(ct),t=Object(me.c)();return Object(ee.useEffect)((function(){e&&":userId"!==e||(e="18309"),t(N(e)),t(function(e){return function(t){f(e).then((function(e){t(P(e.data))}))}}(e))}),[]),Object(me.d)(nt)?Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(yt,{}),Object(je.jsx)(Lt,{})]}):Object(je.jsx)(re.a,{to:"/social-network/login"})},zt=ae.a.Content,Rt=ae.a.Footer,Bt=function(){var e=Object(me.d)(at),t=Object(me.c)();return Object(ee.useEffect)((function(){t((function(e){g().then((function(t){0===t.resultCode&&e(function(e){return{type:"SET-USER-DATA",data:e}}(t.data))})).finally((function(){e({type:"SET-APP-INITIALIZED",isInitialized:!0})}))}))}),[]),e?Object(je.jsxs)(je.Fragment,{children:[Object(je.jsx)(_t,{}),Object(je.jsxs)(ae.a,{style:{minHeight:"100vh"},children:[Object(je.jsx)(gt,{}),Object(je.jsxs)(ae.a,{className:"site-layout",children:[Object(je.jsx)(zt,{style:{margin:"0 16px"},children:Object(je.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(je.jsx)(re.b,{path:"/social-network/dialogs",render:function(){return Object(je.jsx)(Se,{})}}),Object(je.jsx)(re.b,{path:"/social-network/profile/:userId?",render:function(){return Object(je.jsx)(Mt,{})}}),Object(je.jsx)(re.b,{path:"/social-network/users-page",render:function(){return Object(je.jsx)(Qe,{})}}),Object(je.jsx)(re.b,{path:"/social-network/music",component:Xe}),Object(je.jsx)(re.b,{path:"/social-network/news",component:Ye}),Object(je.jsx)(re.b,{path:"/social-network/settings",component:Ke}),Object(je.jsx)(re.b,{exact:!0,path:"/social-network/login",component:it})]})}),Object(je.jsx)(Rt,{style:{textAlign:"center"},children:"Social Network \xa92021 by Matumba125"})]})]})]}):Object(je.jsx)(We.a,{style:{fontSize:"48px"}})};ne.a.render(Object(je.jsx)(ue.a,{children:Object(je.jsx)(me.a,{store:$,children:Object(je.jsx)(Bt,{})})}),document.getElementById("root")),n()},85:function(e,t,s){e.exports={userInfo:"UserPage_userInfo__1DlE8",img:"UserPage_img__3eEIc",ava:"UserPage_ava__XYoxP",descriptionWrapper:"UserPage_descriptionWrapper__1qNFJ",description:"UserPage_description__2mX2r",item:"UserPage_item__2WanN"}},86:function(e,t,s){e.exports={formWrapper:"Login_formWrapper__Qq-gU",inputItem:"Login_inputItem__N37h_",formItem:"Login_formItem__2fyxt"}},87:function(e,t,s){e.exports={infoContainer:"ProfileInfo_infoContainer__1BEBN",mainInfo:"ProfileInfo_mainInfo__150Qa",description:"ProfileInfo_description__np7mD",fullName:"ProfileInfo_fullName__1BFQY",ava:"ProfileInfo_ava__3pWAT"}}},[[347,1,2]]]);
//# sourceMappingURL=main.9bf6291a.chunk.js.map