"use strict";(self.webpackChunkigor_app=self.webpackChunkigor_app||[]).push([[369],{7974:function(e,s,n){n.d(s,{Z:function(){return o}});var a=n(8683),r=n(5987),i=(n(2791),"TextareaForm_error__j-1+o"),t="TextareaForm_spanError__M+rTe",c=n(184),m=["input","meta"],o=function(e){var s=e.input,n=e.meta,o=(0,r.Z)(e,m),u=n.touched&&n.error;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("textarea",(0,a.Z)((0,a.Z)((0,a.Z)({},s),o),{},{className:u?" "+i:""})),u&&(0,c.jsxs)("span",{className:t,children:[n.error,"*"]})]})}},1369:function(e,s,n){n.r(s),n.d(s,{default:function(){return C}});n(2791);var a="PanelSendMess_dialogs__Ab778",r="PanelSendMess_dialogsItems__Zlg3t",i="PanelSendMess_messages__08GZ6",t="DialogsItem_dialog__+ifj2",c="DialogsItem_active__AqvDs",m=n(1087),o=n(184),u=function(e){return(0,o.jsx)("div",{className:t,children:(0,o.jsxs)(m.OL,{to:"/dialogs/"+e.id,className:function(e){return e.isActive?c:""},children:[(0,o.jsx)("img",{src:e.img,alt:"igor"}),(0,o.jsx)("span",{children:"Name"})]})})},l="MyMessage_messages__-R--l",d="MyMessage_userInfo__yjJbJ",g="MyMessage_textMessage__rgJIt",_=function(e){return(0,o.jsxs)("div",{className:l,children:[(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("img",{src:e.img,alt:"img"}),e.name]}),(0,o.jsx)("div",{className:g,children:e.message})]})},x="Message_messages__ybfIv",f="Message_userInfo__wUBbL",j="Message_textMessage__pkK6k",h=function(e){return(0,o.jsxs)("div",{className:x,children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("img",{src:e.img,alt:"img"}),e.name]}),(0,o.jsx)("div",{className:j,children:e.message})]})},v="SendMessForm_wrapper__AJvrt",p="SendMessForm_panelSendMess__+gowc",M=n(704),N=n(7974),Z=n(5236),S=n(6165),b=(0,Z.D)(50),A=(0,M.Z)({form:"PanelSendMess"})((function(e){return(0,o.jsx)("div",{className:p,children:(0,o.jsxs)("form",{className:v,onSubmit:e.handleSubmit,children:[(0,S.e)("sendMess","enter you mess...",[Z.C,b],N.Z,null,e.text),(0,o.jsx)("button",{children:"Send"})]})})})),y=function(e){var s=e.dialogs.map((function(e,s){return(0,o.jsx)(u,{id:e.id,img:e.img},s)})),n=e.messages.map((function(e,s){return"000001"===e.id?(0,o.jsx)(_,{message:e.messages,name:e.name,img:e.img},s):(0,o.jsx)(h,{message:e.messages,name:e.name,img:e.img},s)}));return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:r,children:s}),(0,o.jsx)("div",{className:i,children:n}),(0,o.jsx)(A,{value:e.value,onSubmit:function(s){e.actionAddMessage(s.sendMess)}})]})},k=n(2392),I=n(8687),P=n(1709),w=n(7781),D=function(e){return e.dialogPage.messages},F=function(e){return e.dialogPage.newMessageText},C=(0,w.qC)((0,I.$j)((function(e){return{dialogs:(s=e,s.dialogPage.dialogs),messages:D(e),text:F(e)};var s}),{actionAddMessage:k.$}),P.D)(y)},1709:function(e,s,n){n.d(s,{D:function(){return g}});var a=n(8683),r=n(5671),i=n(3144),t=n(136),c=n(516),m=n(2791),o=n(7689),u=n(8687),l=n(184),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){(0,t.Z)(m,s);var n=(0,c.Z)(m);function m(){return(0,r.Z)(this,m),n.apply(this,arguments)}return(0,i.Z)(m,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,a.Z)({},this.props)):(0,l.jsx)(o.Fg,{to:"/login"})}}]),m}(m.Component);return(0,u.$j)(d)(s)}}}]);
//# sourceMappingURL=369.94d43da2.chunk.js.map