(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{113:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2goUN",dialogs_items:"Dialogs_dialogs_items__1JDUH",messages:"Dialogs_messages__iGu3o",addMessage:"Dialogs_addMessage__165qa"}},161:function(e,t,n){e.exports={header:"Post_header__1tqHL",item:"Post_item__24f3h",likes:"Post_likes__1RzjT"}},162:function(e,t,n){e.exports={usersPage:"UsersPage_usersPage__2_3I7",usersList:"UsersPage_usersList__3e0rU",selectedPage:"UsersPage_selectedPage__2Cul_"}},179:function(e,t,n){e.exports={form:"ProfileSettings_form__1rSQL",checkbox:"ProfileSettings_checkbox__9ERdH"}},231:function(e,t,n){e.exports={userStatus:"Header_userStatus__2PMWF"}},237:function(e,t,n){e.exports={userNewPosts:"UserPosts_userNewPosts__2GPsv",form:"UserPosts_form__2ZqT6"}},240:function(e,t,n){e.exports={dialog:"DialogItem_dialog__V9wTe"}},241:function(e,t,n){e.exports={message:"Message_message__1p5Lb"}},242:function(e,t,n){e.exports={formWrapper:"Login_formWrapper__1XssD",inputItem:"Login_inputItem__bFZGa",formItem:"Login_formItem__2MqJa"}},252:function(e,t,n){},276:function(e,t,n){},38:function(e,t,n){e.exports={infoContainer:"ProfileInfo_infoContainer__225Sp",mainInfo:"ProfileInfo_mainInfo__2kUCl",description:"ProfileInfo_description__1VwtT",fullName:"ProfileInfo_fullName__3V4m3",avaWrapper:"ProfileInfo_avaWrapper__3WCOi",ava:"ProfileInfo_ava__3LKTB",workStatus:"ProfileInfo_workStatus__26r-F",userDataContainer:"ProfileInfo_userDataContainer__1q0FO",socialLink:"ProfileInfo_socialLink__34X4A",editButton:"ProfileInfo_editButton__1Z8aA",aboutCard:"ProfileInfo_aboutCard__1MNtW"}},421:function(e,t,n){"use strict";n.r(t);n(252);var a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,450)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))},i=n(160),s=n(86),c=n(12),o=n(37),r=n.p+"static/media/userAvatar.9ca0a8b7.jpg",l=n(229),u=n.n(l).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d5ee63b2-b8ea-4e76-b89c-c960812b3f51"}}),j=function(e,t){return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))},f=function(e){return u.get("profile/".concat(e)).then((function(e){return e.data}))},O=function(e){return u.get("profile/status/".concat(e))},p=function(e){return u.put("profile",e)},h=function(e){return u.put("profile/status",{status:e})},m=function(e){var t=new FormData;return t.append("image",e),u.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},x=function(){return u.get("auth/me").then((function(e){return e.data}))},g=function(e){return u.post("auth/login",e)},v=function(){return u.delete("auth/login")},_="ADD-POST",k="SET-STATUS",w="SET-USER-PROFILE",N={profile:{photos:{large:r,small:r},fullName:"",aboutMe:"",userId:""},status:"",postsData:[{id:Object(o.v1)(),postContent:"Hello World !!!",postLikes:15},{id:Object(o.v1)(),postContent:"It's my first post!!",postLikes:28}]},P=function(e){return{type:k,newText:e}},S=function(e){return function(t){f(e).then((function(e){t({type:w,profile:e})}))}},I=function(e){return function(t){h(e).then((function(n){console.log(n),0===n.data.resultCode&&t(P(e))}))}},C=function(e){var t=ae.getState(),n={userID:t.profilePage.profile.userId,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription?e.lookingForAJobDescription:"-",fullName:e.fullName,aboutMe:e.aboutMe?e.aboutMe:"-",contacts:{github:e.github,vk:e.vk,facebook:e.facebook,instagram:e.instagram,twitter:e.twitter,website:e.website,youtube:e.youtube,mainLink:e.mainLink}};return function(e){p(n).then((function(){e(S(t.auth.data.id))}))}},y=function(e){var t=ae.getState().auth.data.id;return function(n){m(e).then((function(){n(S(t))}))}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n={id:Object(o.v1)(),postContent:t.newPostText,postLikes:0};return Object(c.a)(Object(c.a)({},e),{},{postsData:[n].concat(Object(s.a)(e.postsData))});case k:return Object(c.a)(Object(c.a)({},e),{},{status:t.newText});case w:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});default:return e}},T=n.p+"static/media/dimych.4cfb0ddb.jpg",L=n.p+"static/media/andrey.05d81a41.jpg",A=n.p+"static/media/sveta.2e2af972.jpg",E="ADD-MESSAGE",D={dialogsData:[{id:"2",userName:"Dimych",avatar:T},{id:Object(o.v1)(),userName:"Andrey",avatar:L},{id:Object(o.v1)(),userName:"Sveta",avatar:A},{id:Object(o.v1)(),userName:"Sasha"},{id:Object(o.v1)(),userName:"Viktor"},{id:Object(o.v1)(),userName:"Valera"}],messageData:[{id:Object(o.v1)(),messageText:"HI"},{id:Object(o.v1)(),messageText:"Hello"},{id:Object(o.v1)(),messageText:"YO"}],newMessageText:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n={id:Object(o.v1)(),messageText:t.newMessage};return Object(c.a)(Object(c.a)({},e),{},{messageData:[].concat(Object(s.a)(e.messageData),[n])});default:return e}},M={contactsData:[{id:Object(o.v1)(),userName:"Dimych",avatar:T},{id:Object(o.v1)(),userName:"Andrey",avatar:L},{id:Object(o.v1)(),userName:"Sveta",avatar:A}]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return e},W="FOLLOW",J="UNFOLLOW",B="SET-USERS",z="SET-CURRENT-PAGE",G="SET-TOTAL-USERS-COUNT",H="CHANGE-FETCHING-STATUS",V="CHANGE-RESPONSE-STATUS",Z={users:[],pageSize:16,totalCount:0,currentPage:1,isFetching:!1,responseInProgress:!0,followingUsers:[]},q=function(e){return{type:H,isFetching:e}},Y=function(e,t){return{type:V,responseInProgress:e,id:t}},K=function(e,t){return function(n){n(q(!0)),j(e,t).then((function(t){var a,i;n((a=t.items,{type:B,users:a})),n(function(e){return{type:z,currentPage:e}}(e)),n((i=t.totalCount,{type:G,totalCount:i})),n(q(!1))}))}},X=function(e,t){return function(n){n(Y(!0,e)),t?b(e).then((function(t){0===t.resultCode&&(n(function(e){return{type:J,id:e}}(e)),n(Y(!1,e)))})):d(e).then((function(t){0===t.resultCode&&(n(function(e){return{type:W,id:e}}(e)),n(Y(!1,e)))}))}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!0}):e}))});case J:return Object(c.a)(Object(c.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(c.a)(Object(c.a)({},e),{},{followed:!1}):e}))});case B:return Object(c.a)(Object(c.a)({},e),{},{users:Object(s.a)(t.users)});case z:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case G:return Object(c.a)(Object(c.a)({},e),{},{totalCount:t.totalCount});case H:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case V:return Object(c.a)(Object(c.a)({},e),{},{followingUsers:t.responseInProgress?[].concat(Object(s.a)(e.followingUsers),[t.id]):e.followingUsers.filter((function(e){return e!==t.id}))});default:return e}},Q={data:{id:"",email:"",login:""},isAuth:!1,isInitialized:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(c.a)(Object(c.a)({},e),{},{data:t.data,isAuth:!0});case"USER_BEEN_LOGINED":return Object(c.a)(Object(c.a)({},e),{},{isAuth:!0});case"USER_BEEN_LOGINED_OUT":return Object(c.a)(Object(c.a)({},e),{},{isAuth:!1});case"SET-APP-INITIALIZED":return Object(c.a)(Object(c.a)({},e),{},{isInitialized:t.isInitialized});default:return e}},te=n(230),ne=Object(i.b)({profilePage:F,dialogsPage:U,rightNavbar:R,users:$,auth:ee}),ae=Object(i.c)(ne,Object(i.a)(te.a)),ie=n(0),se=n.n(ie),ce=n(27),oe=n.n(ce),re=(n(276),n(277),n(423)),le=n(61),ue=n(180),je=n(434),be=n(435),de=n(436),fe=n(437),Oe=n(438),pe=n(439),he=n(30),me=n(3),xe=re.a.Sider;var ge=function(){var e=Object(ie.useState)(!0),t=Object(le.a)(e,2),n=t[0],a=t[1];return Object(me.jsx)(xe,{collapsible:!0,collapsed:n,onCollapse:function(){a(!n)},children:Object(me.jsxs)(ue.a,{theme:"dark",mode:"inline",children:[Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(je.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/news/",children:"News"})},"1"),Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(be.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/profile/18309",children:"Profile"})},"2"),Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(de.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/dialogs/",children:"Messages"})},"3"),Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(fe.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/users-page",children:"Developers"})},"4"),Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(Oe.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/music/",children:"Music"})},"5"),Object(me.jsx)(ue.a.Item,{icon:Object(me.jsx)(pe.a,{}),children:Object(me.jsx)(he.b,{to:"/social-network/settings/",children:"Settings"})},"6")]})})},ve=n(19),_e=n(70),ke=n(431),we=n(245),Ne=n(56),Pe=n(231),Se=n.n(Pe),Ie=se.a.memo((function(){var e=Object(ve.b)(),t=Object(ve.c)((function(e){return e.auth.isAuth})),n=Object(ve.c)((function(e){return e.auth.data.login}));Object(ie.useEffect)((function(){}),[t,n]);var a=Object(ie.useCallback)((function(){e((function(e){v().then((function(t){0===t.data.resultCode&&e({type:"USER_BEEN_LOGINED_OUT"})}))}))}),[e]);return Object(me.jsx)(ke.a,{title:"Social Network",extra:t?Object(me.jsxs)("div",{className:Se.a.userStatus,children:[Object(me.jsxs)(he.c,{to:"/social-network/profile",children:[Object(me.jsx)(we.a,{style:{backgroundColor:"#87d068"},icon:Object(me.jsx)(be.a,{})}),n]}),Object(me.jsx)(Ne.a,{onClick:a,children:"Log Out"})]}):Object(me.jsx)(he.c,{to:"/social-network/login",children:Object(me.jsx)(Ne.a,{color:"primary",children:"Login"})})})})),Ce=function(e){return e.auth.isAuth},ye=function(e){return e.auth.isInitialized},Fe=function(e){return e.auth.data.id},Te=function(e){return e.profilePage},Le=function(e){return e.profilePage.profile.userId},Ae=function(e){return e.users.users},Ee=function(e){return e.users.totalCount},De=function(e){return e.users.pageSize},Ue=function(e){return e.users.currentPage},Me=function(e){return e.users.followingUsers},Re=function(e){return e.dialogsPage},We=function(e){return e.profilePage.postsData},Je=n(28),Be=n(104),ze=n.n(Be),Ge=n(141),He=n(433),Ve=n(424),Ze=Object(me.jsx)(_e.a,{style:{fontSize:48},spin:!0}),qe=function(){return Object(me.jsx)(He.b,{style:{display:"flex",width:"100%",justifyContent:"center"},size:"large",children:Object(me.jsx)(Ve.a,{indicator:Ze})})},Ye=n(38),Ke=n.n(Ye),Xe=n(159),$e=n(181),Qe=n(440),et=["status","isProfileBelongsToUser"],tt=se.a.memo((function(e){var t=e.status,n=e.isProfileBelongsToUser,a=(Object(Xe.a)(e,et),Object(ve.b)()),i=Object(ie.useState)(!1),s=Object(le.a)(i,2),c=s[0],o=s[1],r=Object(ie.useState)(t),l=Object(le.a)(r,2),u=l[0],j=l[1],b=function(){o(!0),j(t)};return Object(me.jsx)("div",{style:{height:"32px"},children:c?Object(me.jsx)($e.a,{autoFocus:!0,onBlur:function(){o(!1),a(I(u))},onKeyPress:function(e){"Enter"===e.key&&(o(!1),a(I(u)))},onChange:function(e){j(e.currentTarget.value)},value:u}):Object(me.jsxs)("div",{children:[Object(me.jsx)("span",{onDoubleClick:b,children:t||"-----"}),n&&Object(me.jsx)(Ne.a,{type:"text",icon:Object(me.jsx)(Qe.a,{}),onClick:b})]})})})),nt=n(126),at=n.n(nt),it=n(33),st=n(250),ct=n(179),ot=n.n(ct),rt=function(e){var t,n,a,i,s,o,r,l,u=Object(ve.b)(),j=Object(it.e)({enableReinitialize:!0,initialValues:{fullName:e.profile.profile.fullName,lookingForAJobDescription:"-"===e.profile.profile.lookingForAJobDescription?"":e.profile.profile.lookingForAJobDescription,lookingForAJob:e.profile.profile.lookingForAJob,aboutMe:"-"===e.profile.profile.aboutMe?"":e.profile.profile.aboutMe,github:null===(t=e.profile.profile.contacts)||void 0===t?void 0:t.github,vk:null===(n=e.profile.profile.contacts)||void 0===n?void 0:n.vk,facebook:null===(a=e.profile.profile.contacts)||void 0===a?void 0:a.facebook,instagram:null===(i=e.profile.profile.contacts)||void 0===i?void 0:i.instagram,twitter:null===(s=e.profile.profile.contacts)||void 0===s?void 0:s.twitter,website:null===(o=e.profile.profile.contacts)||void 0===o?void 0:o.website,youtube:null===(r=e.profile.profile.contacts)||void 0===r?void 0:r.youtube,mainLink:null===(l=e.profile.profile.contacts)||void 0===l?void 0:l.mainLink},onSubmit:function(){var t=Object(Ge.a)(ze.a.mark((function t(n){return ze.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j.resetForm(),t.next=3,u(C(n));case 3:e.onSubmitClick();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()});return Object(me.jsx)(at.a,{title:"Profile settings",visible:e.visible,onOk:function(){j.handleSubmit()},onCancel:e.onCancelClick,children:Object(me.jsxs)("form",{className:ot.a.form,children:[Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Full Name"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Full Name"},j.getFieldProps("fullName")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"About Me"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"About Me"},j.getFieldProps("aboutMe")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Additional information for employers"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Additional information for employers"},j.getFieldProps("lookingForAJobDescription")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"GitHub"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"GitHub"},j.getFieldProps("github")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"VK"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"VK"},j.getFieldProps("vk")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Facebook"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Facebook"},j.getFieldProps("facebook")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Instagram"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Instagram"},j.getFieldProps("instagram")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Twitter"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Twitter"},j.getFieldProps("twitter")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Website"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Website"},j.getFieldProps("website")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"YouTube"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"YouTube"},j.getFieldProps("youtube")))]}),Object(me.jsxs)("div",{children:[Object(me.jsx)("h4",{children:"Main Link"}),Object(me.jsx)($e.a,Object(c.a)({placeholder:"Main Link"},j.getFieldProps("mainLink")))]}),Object(me.jsx)(st.a,Object(c.a)(Object(c.a)({className:ot.a.checkbox,checked:j.values.lookingForAJob},j.getFieldProps("lookingForAJob")),{},{children:"I'm open to work"}))]})})},lt=n(430),ut=n(432),jt=function(e){return Object(me.jsx)(ut.a,{visible:e.visible,onOk:e.onSubmitClick,onCancel:e.onCancelClick,children:Object(me.jsx)("input",{onChange:e.selectPhoto,type:"file"})})},bt=n(441),dt=n(442),ft=n(443),Ot=n(444),pt=n(445),ht=n(446),mt=n(447);var xt=function(){var e,t,n,a,i,s,c,o,r,l,u,j,b,d,f,O,p,h,m,x,g,v=Object(ve.b)(),_=Object(ie.useState)(!1),k=Object(le.a)(_,2),w=k[0],N=k[1],P=Object(ie.useState)(!1),S=Object(le.a)(P,2),I=S[0],C=S[1],F=Object(ve.c)(Te),T=Object(ve.c)(Fe),L=F.profile.userId===T,A=Object(ie.useState)(),E=Object(le.a)(A,2),D=E[0],U=E[1],M=function(){var e=Object(Ge.a)(ze.a.mark((function e(){return ze.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!1),e.t0=D,!e.t0){e.next=5;break}return e.next=5,v(y(D));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return F.profile?Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(rt,{visible:w,onSubmitClick:function(){N(!1)},onCancelClick:function(){N(!1)},profile:F}),Object(me.jsx)(jt,{visible:I,onSubmitClick:M,onCancelClick:function(){C(!1)},selectPhoto:function(e){U(e.target.files[0])}}),Object(me.jsxs)("div",{className:Ke.a.infoContainer,children:[Object(me.jsxs)("div",{className:Ke.a.mainInfo,children:[Object(me.jsxs)("div",{className:Ke.a.avaWrapper,children:[Object(me.jsx)(we.a,{className:Ke.a.ava,alt:"".concat(F.profile.userId," user ava"),src:F.profile.photos.small&&F.profile.photos.small,icon:!F.profile.photos.small&&Object(me.jsx)(be.a,{})}),L&&Object(me.jsx)(Ne.a,{type:"text",icon:Object(me.jsx)(Qe.a,{}),onClick:function(){C(!0)}})]}),Object(me.jsxs)("div",{className:Ke.a.description,children:[Object(me.jsxs)("span",{className:Ke.a.fullName,children:[F.profile.fullName,F.profile.lookingForAJob&&Object(me.jsx)("span",{className:Ke.a.workStatus,children:"(Open to work)"})]}),Object(me.jsx)(tt,{isProfileBelongsToUser:L,status:F.status})]})]}),Object(me.jsxs)("div",{className:Ke.a.userDataContainer,children:[L&&Object(me.jsx)(Ne.a,{className:Ke.a.editButton,onClick:function(){N(!0)},children:"Edit Profile"}),F.profile.aboutMe&&Object(me.jsx)(lt.a,{title:"About Me:",className:Ke.a.aboutCard,children:F.profile.aboutMe}),(null===(e=F.profile.contacts)||void 0===e?void 0:e.github)&&Object(me.jsxs)("a",{href:null===(t=F.profile.contacts)||void 0===t?void 0:t.github,className:Ke.a.socialLink,children:[Object(me.jsx)(bt.a,{}),"  ".concat(null===(n=F.profile.contacts)||void 0===n?void 0:n.github)]}),(null===(a=F.profile.contacts)||void 0===a?void 0:a.facebook)&&Object(me.jsxs)("a",{href:null===(i=F.profile.contacts)||void 0===i?void 0:i.facebook,className:Ke.a.socialLink,children:[Object(me.jsx)(dt.a,{}),"  ".concat(null===(s=F.profile.contacts)||void 0===s?void 0:s.facebook)]}),(null===(c=F.profile.contacts)||void 0===c?void 0:c.instagram)&&Object(me.jsxs)("a",{href:null===(o=F.profile.contacts)||void 0===o?void 0:o.twitter,className:Ke.a.socialLink,children:[Object(me.jsx)(ft.a,{}),"`","  ".concat(null===(r=F.profile.contacts)||void 0===r?void 0:r.instagram)]}),(null===(l=F.profile.contacts)||void 0===l?void 0:l.twitter)&&Object(me.jsxs)("a",{href:null===(u=F.profile.contacts)||void 0===u?void 0:u.twitter,className:Ke.a.socialLink,children:[Object(me.jsx)(Ot.a,{}),"  ".concat(null===(j=F.profile.contacts)||void 0===j?void 0:j.twitter)]}),(null===(b=F.profile.contacts)||void 0===b?void 0:b.youtube)&&Object(me.jsxs)("a",{href:null===(d=F.profile.contacts)||void 0===d?void 0:d.youtube,className:Ke.a.socialLink,children:[Object(me.jsx)(pt.a,{}),"  ".concat(null===(f=F.profile.contacts)||void 0===f?void 0:f.youtube)]}),(null===(O=F.profile.contacts)||void 0===O?void 0:O.website)&&Object(me.jsxs)("a",{href:null===(p=F.profile.contacts)||void 0===p?void 0:p.website,className:Ke.a.socialLink,children:[Object(me.jsx)(ht.a,{}),"  ".concat(null===(h=F.profile.contacts)||void 0===h?void 0:h.website)]}),(null===(m=F.profile.contacts)||void 0===m?void 0:m.mainLink)&&Object(me.jsxs)("a",{href:null===(x=F.profile.contacts)||void 0===x?void 0:x.mainLink,className:Ke.a.socialLink,children:[Object(me.jsx)(mt.a,{}),"  ".concat(null===(g=F.profile.contacts)||void 0===g?void 0:g.mainLink)]})]})]})]}):Object(me.jsx)(qe,{})},gt=n(237),vt=n.n(gt),_t=n(161),kt=n.n(_t),wt=n(448),Nt=n(449);var Pt=function(e){var t=Object(ve.c)((function(e){return e.profilePage.profile.photos.small})),n=Object(ve.c)((function(e){return e.profilePage.profile.fullName})),a=Object(ie.useState)(!1),i=Object(le.a)(a,2),s=i[0],c=i[1];return Object(me.jsxs)(lt.a,{title:Object(me.jsxs)("div",{className:kt.a.header,children:[Object(me.jsx)(we.a,{size:"large",src:null!==t?t:A,alt:"userImage"}),Object(me.jsx)("span",{children:n})]}),className:kt.a.item,children:[Object(me.jsx)("div",{children:e.postContent}),Object(me.jsxs)("div",{className:kt.a.likes,children:[Object(me.jsx)("span",{children:e.postLikes}),Object(me.jsx)(Ne.a,{icon:s?Object(me.jsx)(wt.a,{}):Object(me.jsx)(Nt.a,{}),onClick:function(){return c(!s)},shape:"circle",type:"text"})]})]})},St=n(425),It=n(238),Ct=n(426),yt=n(427);var Ft=function(){var e=Object(ve.c)(We),t=Object(ve.c)(Fe)===Object(ve.c)(Le),n=e.map((function(e){return Object(me.jsx)(Pt,{postContent:e.postContent,postLikes:e.postLikes,id:e.id},e.id)})),a=Object(ve.b)();return Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{className:vt.a.userNewPosts,children:Object(me.jsx)(it.c,{initialValues:{post:""},onSubmit:function(e,t){var n;a((n=e.post,{type:_,newPostText:n})),t.resetForm()},render:function(){return Object(me.jsx)(St.a,{children:t&&Object(me.jsxs)("div",{children:[Object(me.jsx)(It.a,{label:"Your Post",name:"post",children:Object(me.jsx)(Ct.a.TextArea,{name:"post"})}),Object(me.jsx)(yt.a,{children:"Post"})]})})}})}),n]})},Tt=function(){var e=Object(Je.f)().userId,t=Object(ve.c)(Fe),n=Object(ve.b)();return Object(ie.useEffect)((function(){e&&":userId"!==e||(e=t),n(S(e)),n(function(e){return function(t){O(e).then((function(e){t(P(e.data))}))}}(e))}),[e]),Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(xt,{}),Object(me.jsx)(Ft,{})]})};var Lt=function(){return Object(me.jsx)("div",{children:"Music"})};var At=function(){return Object(me.jsx)("div",{children:"News"})};var Et=function(){return Object(me.jsx)(me.Fragment,{children:"Settings"})},Dt=n(162),Ut=n.n(Dt),Mt=n(92),Rt=n.n(Mt),Wt=["user"],Jt=se.a.memo((function(e){var t=e.user,n=(Object(Xe.a)(e,Wt),Object(ve.b)()),a=Object(ve.c)(Me);return Object(me.jsxs)(lt.a,{className:Rt.a.descriptionWrapper,children:[Object(me.jsxs)("div",{className:Rt.a.linksWrapper,children:[Object(me.jsx)(he.c,{to:"/social-network/profile/"+t.id,children:Object(me.jsx)(we.a,{size:104,src:t.photos.small&&t.photos.small,icon:!t.photos.small&&Object(me.jsx)(be.a,{}),alt:t.id+" avatar"})}),Object(me.jsx)(he.c,{to:"/social-network/profile/"+t.id,className:Rt.a.nameLink,children:t.name})]}),Object(me.jsxs)("div",{className:Rt.a.description,children:[Object(me.jsx)("p",{className:Rt.a.userStatus,children:t.status}),Object(me.jsx)(Ne.a,{onClick:function(){return n(X(t.id,t.followed))},disabled:a.some((function(e){return e===t.id})),className:Rt.a.followBtn,type:t.followed?"default":"primary",ghost:!t.followed,children:t.followed?"Unfollow":"Follow"})]})]},t.id)})),Bt=n(429),zt=function(){var e=Object(ve.b)(),t=Object(ve.c)(Ae),n=Object(ve.c)(Ue),a=Object(ve.c)(De),i=Object(ve.c)(Ee);return Object(ie.useEffect)((function(){e(K(n,a))}),[]),Object(me.jsxs)("div",{className:Ut.a.usersPage,children:[Object(me.jsx)("div",{className:Ut.a.usersList,children:t.map((function(e){return Object(me.jsx)(Jt,{user:e},e.id)}))}),Object(me.jsx)("div",{className:Ut.a.pagination,children:Object(me.jsx)(Bt.a,{current:n,pageSize:a,total:i,responsive:!0,pageSizeOptions:[],onChange:function(t){return e(K(t,a))}})})]})},Gt=n(113),Ht=n.n(Gt),Vt=n(240),Zt=n.n(Vt),qt=function(e){var t="/social-network/profile/"+e.id;return Object(me.jsxs)("div",{className:Zt.a.dialog,children:[e.avatar?Object(me.jsx)("img",{src:e.avatar,alt:"userImage"}):"",Object(me.jsx)(he.c,{to:t,children:e.userName})]})},Yt=n(241),Kt=n.n(Yt),Xt=function(e){return Object(me.jsx)("div",{className:Kt.a.message,children:e.messageText})},$t=function(e){var t=Object(ve.c)(Re),n=Object(ve.b)(),a=t.dialogsData.map((function(e){return Object(me.jsx)(qt,{userName:e.userName,id:e.id,avatar:e.avatar},e.id)})),i=t.messageData.map((function(e){return Object(me.jsx)(Xt,{messageText:e.messageText,id:e.id},e.id)}));return Object(me.jsxs)("div",{className:Ht.a.dialogs,children:[Object(me.jsx)("div",{className:Ht.a.dialogs_items,children:a}),Object(me.jsxs)("div",{className:Ht.a.messages,children:[i,Object(me.jsx)("div",{className:Ht.a.addMessage,children:Object(me.jsx)(it.c,{initialValues:{message:""},onSubmit:function(e,t){var a;n((a=e.message,{type:E,newMessage:a})),t.resetForm()},render:function(){return Object(me.jsxs)(St.a,{children:[Object(me.jsx)(It.a,{label:"Message",name:"message",children:Object(me.jsx)(Ct.a,{name:"message"})}),Object(me.jsx)(yt.a,{children:"Send"})]})}})})]})]})},Qt=function(){return Object(ve.c)(Ce)?Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(Je.b,{path:"/social-network/dialogs",render:function(){return Object(me.jsx)($t,{})}}),Object(me.jsx)(Je.b,{path:"/social-network/profile/:userId?",render:function(){return Object(me.jsx)(Tt,{})}}),Object(me.jsx)(Je.b,{path:"/social-network/users-page",render:function(){return Object(me.jsx)(zt,{})}}),Object(me.jsx)(Je.b,{path:"/social-network/music",component:Lt}),Object(me.jsx)(Je.b,{path:"/social-network/news",component:At}),Object(me.jsx)(Je.b,{path:"/social-network/settings",component:Et})]}):Object(me.jsx)(Je.a,{to:"/social-network/login"})},en=n(428),tn=n(242),nn=n.n(tn),an=function(){var e=Object(ve.c)(Ce),t=Object(ve.b)();return e?Object(me.jsx)(Je.a,{to:"/social-network/profile/:userId?"}):Object(me.jsx)(it.c,{initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e,n){var a;t((a=e,function(e){g(a).then((function(t){0===t.data.resultCode&&e({type:"USER_BEEN_LOGINED"})}))})),n.resetForm()},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?/^[A-Z0-9._%+-]{4,}$/i.test(e.password)||(t.password="Password must be longer than 3 symbols"):t.password="Required",t},render:function(){return Object(me.jsxs)(St.a,{className:nn.a.formWrapper,children:[Object(me.jsxs)("p",{children:["To log in get registered",Object(me.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:"here"})]}),Object(me.jsx)("p",{children:"or use common test account credentials:"}),Object(me.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(me.jsx)("p",{children:"Password: free"}),Object(me.jsx)(It.a,{label:"Email",name:"email",children:Object(me.jsx)(Ct.a,{name:"email"})}),Object(me.jsx)(It.a,{label:"Password",name:"password",children:Object(me.jsx)(Ct.a.Password,{name:"password"})}),Object(me.jsx)(It.a,{name:"rememberMe",children:Object(me.jsx)(en.a,{name:"rememberMe",children:"RememberMe"})}),Object(me.jsx)(yt.a,{children:"Login"})]})}})},sn=re.a.Content,cn=re.a.Footer,on=function(){var e=Object(ve.c)(ye),t=Object(ve.b)();return Object(ie.useEffect)((function(){t((function(e){x().then((function(t){0===t.resultCode&&e(function(e){return{type:"SET-USER-DATA",data:e}}(t.data))})).finally((function(){e({type:"SET-APP-INITIALIZED",isInitialized:!0})}))}))}),[]),e?Object(me.jsxs)(me.Fragment,{children:[Object(me.jsx)(Ie,{}),Object(me.jsxs)(re.a,{style:{minHeight:"100vh"},children:[Object(me.jsx)(ge,{}),Object(me.jsxs)(re.a,{className:"site-layout",children:[Object(me.jsx)(sn,{style:{margin:"0 16px"},children:Object(me.jsxs)("div",{className:"site-layout-background",children:[Object(me.jsx)(Qt,{}),Object(me.jsx)(Je.b,{path:"/social-network/login",component:an})]})}),Object(me.jsx)(cn,{style:{textAlign:"center"},children:"Social Network \xa92021 by Matumba125"})]})]})]}):Object(me.jsx)(_e.a,{style:{fontSize:"48px"}})};oe.a.render(Object(me.jsx)(he.a,{children:Object(me.jsx)(ve.a,{store:ae,children:Object(me.jsx)(on,{})})}),document.getElementById("root")),a()},92:function(e,t,n){e.exports={descriptionWrapper:"UserPage_descriptionWrapper__3yZxE",description:"UserPage_description__3B2J7",linksWrapper:"UserPage_linksWrapper__2iY8T",nameLink:"UserPage_nameLink__g8IOo",followBtn:"UserPage_followBtn__Nvy2P",userStatus:"UserPage_userStatus__tcupG"}}},[[421,1,2]]]);
//# sourceMappingURL=main.a731f171.chunk.js.map