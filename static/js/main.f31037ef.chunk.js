(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{118:function(e,a,t){e.exports=t(143)},123:function(e,a,t){},126:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),i=(t(123),t(124),t(125),t(126),t(24)),c=t(12),s=t(202),m=t(4),u=t(203),p=t(22),d=t(104),g=r.a.createContext(),h=g.Provider,f=function(e,a){switch(a.type){case"SHOW_DIALOG":var t=a.show?a.message:"";return{show:a.show,message:t};default:return e}},E=function(e){e.value;var a=Object(d.a)(e,["value"]),t=Object(n.useReducer)(f,{show:!1,message:""}),o=Object(p.a)(t,2),l=o[0],i=o[1];return r.a.createElement(h,Object.assign({value:[l,i]},a))},b=function(){return Object(n.useContext)(g)},v=t(48),y=t.n(v),x=t(57),k=t(84),w=t.n(k),O=t(85),C=t.n(O),j=w.a.join("","/images/"),N={sendMail:function(){var e=Object(x.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.send("default_service","contact_form",{message:a},"user_nccDGeyCbVLYWIItDNN4z");case 3:if(null==(t=e.sent)||200!==t.status){e.next=6;break}return e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),imageFolder:j},S=t(45),T=t(86),M=t.n(T),I=t(103),F=t(43),L=t.n(F),G=t(67),W=t.n(G),z=M()({}),A=Object(I.a)({palette:{primary:{main:L.a[900],contrastText:"#fff"},secondary:{main:W.a[700],contrastText:"#fff"},background:{default:"#fff",contrastText:"#000"},text:{secondary:L.a[200]},portfolioOverlay:{main:L.a[700],contrastText:"#fff"},portfolioOverlayItems:{main:"#fff",contrastText:"#000"},portfolioFooter:{main:L.a[900],contrastText:L.a[100]}},typography:{fontFamily:'"Mada", Arial, Helvetica, sans-serif',overline:{fontSize:"small"},h5:Object(S.a)({color:L.a[700],fontFamily:"Georgia, 'Times New Roman', Times, serif",fontWeight:"bold",marginTop:"1rem",marginBottom:"1rem"},z.up("md"),{marginTop:"2.5rem",marginBottom:"2.5rem"})},overrides:{MuiLink:{root:{color:W.a[400],"&:hover":{color:W.a[600]}}}},toolbar:{border:"3px solid #04c2c9"}}),P=t(174),_=t(176),D=t(178),U=t(179),B=t(180),R=t(181),V=t(90),J=t.n(V),H=Object(P.a)((function(e){return{icon:{color:e.palette.secondary.main},drawer:{width:e.spacing(20)}}}));function Q(e){var a=r.a.useState(!1),t=Object(p.a)(a,2),n=t[0],o=t[1],l=H(),c=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&o(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{className:l.icon,"aria-label":"open menu",edge:"end",onClick:c(!0)},r.a.createElement(J.a,null)),r.a.createElement(D.a,{anchor:"right",open:n,onClose:c(!1)},r.a.createElement("div",{className:l.drawer,onClick:c(!1),onKeyDown:c(!1)},r.a.createElement(U.a,null,r.a.createElement(B.a,{button:!0,component:i.b,to:"/About",className:"active"},r.a.createElement(R.a,{primary:"About"})),r.a.createElement(B.a,{button:!0,component:i.b,to:"/Portfolio"},r.a.createElement(R.a,{primary:"Portfolio"})),r.a.createElement(B.a,{button:!0,component:i.b,to:"/Contact"},r.a.createElement(R.a,{primary:"Contact"}))))))}var q=t(182),K=t(183),Y=t(184),$=t(146),X=t(208),Z=t(206);function ee(){var e=Object(c.f)();return r.a.createElement("div",null,r.a.createElement(q.a,{position:"static",className:"portfolio-navbar"},r.a.createElement(K.a,{variant:"dense"},r.a.createElement(Y.a,{variant:"text",className:"portfolio-title"},r.a.createElement($.a,{component:i.b,to:"/About"},r.a.createElement(X.a,{alt:"Geethanjali Veetil",size:"small",variant:"rounded",src:"".concat(N.imageFolder,"profileImage.JPG")})),r.a.createElement($.a,{component:i.b,to:"/About",color:"inherit"},"Geethanjali Veetil")),r.a.createElement(Z.a,{xsDown:!0},r.a.createElement(Y.a,{float:"right",variant:"text",color:"primary","aria-label":"text primary button group"},r.a.createElement($.a,{component:i.b,to:"/About",className:ae(e.pathname,"/")},"About"),r.a.createElement($.a,{component:i.b,to:"/Portfolio",className:ae(e.pathname,"/Portfolio")},"Portfolio"),r.a.createElement($.a,{component:i.b,to:"/Contact",className:ae(e.pathname,"/Contact")},"Contact"))),r.a.createElement(Z.a,{smUp:!0},r.a.createElement(Q,null)))))}function ae(e,a){return"/"===a?"/Portfolio"!==e&&"/Contact"!==e?"active":"":e===a?"active":""}var te=t(205),ne=t(28),re=Object(P.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,borderTop:e.toolbar.border,position:"absolute",left:0,bottom:0,width:"100%"}}}));function oe(){var e=re();return r.a.createElement(K.a,{component:"footer",variant:"dense",className:e.footer},r.a.createElement(te.a,{display:"flex",margin:"auto"},r.a.createElement(ne.a,{variant:"overline",color:"textSecondary"},"GEETHANJALI VEETIL \xa9 2020.")))}var le=t(185),ie=t(186),ce=t(187),se=t(188),me=t(189);function ue(){var e=b(),a=Object(p.a)(e,2),t=a[0],n=a[1],o=function(){n({type:"SHOW_DIALOG",show:!1})};return r.a.createElement("div",null,r.a.createElement(le.a,{open:t.show,onClose:o,"aria-labelledby":"dialog-title"},r.a.createElement(ie.a,{id:"dialog-title"},"Geethanjali Veetil"),r.a.createElement(ce.a,null,r.a.createElement(se.a,null,t.message)),r.a.createElement(me.a,null,r.a.createElement($.a,{onClick:o,color:"primary",autoFocus:!0},"Close"))))}var pe=t(197),de=t(145),ge=t(91),he=t(190),fe=t(191),Ee=t(192),be=t(108),ve=t(193),ye=t(209),xe=t(194),ke=t(195),we=t(92),Oe=t.n(we),Ce=t(93),je=t.n(Ce),Ne=t(94),Se=t.n(Ne),Te=Object(P.a)((function(e){return{root:{backgroundColor:e.palette.portfolioFooter.main,borderRadius:12,transition:"0.2s",boxShadow:"none","&:hover":{transform:"scale(1.02)",boxShadow:"0 6px 12px 0 ".concat(Oe()(e.palette.primary.main).rotate(-12).darken(.5).fade(.5))}},title:{backgroundColor:e.palette.portfolioFooter.main,color:e.palette.portfolioFooter.contrastText,padding:0,paddingTop:e.spacing(2)},subtitle:{fontSize:"1.2rem",fontWeight:"bold",color:e.palette.portfolioFooter.contrastText},footer:{backgroundColor:e.palette.portfolioFooter.main,color:e.palette.portfolioFooter.contrastText,padding:e.spacing(1)},spacing:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},media:{height:"16rem",position:"relative"},overlay:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",overflow:"hidden",backgroundColor:e.palette.portfolioOverlay.main,color:e.palette.portfolioOverlay.contrastText,display:"flex",justifyContent:"center"},chipContainer:{padding:e.spacing(2),"& > *":{margin:e.spacing(.7),borderRadius:4,fontWeight:"500",color:e.palette.portfolioOverlayItems.contrastText,backgroundColor:e.palette.portfolioOverlayItems.main}}}}));function Me(e){var a=Te(),t=r.a.useState(!1),n=Object(p.a)(t,2),o=n[0],l=n[1],i=function(){l(!o)};return r.a.createElement(he.a,{className:a.root},r.a.createElement(fe.a,{component:"a",href:e.appUrl,target:"_blank",onMouseEnter:i,onMouseLeave:i},r.a.createElement(Ee.a,{className:a.media,image:"".concat(N.imageFolder).concat(e.image,".jpg")},r.a.createElement(be.a,{in:o,timeout:{enter:400,exit:400},mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(ve.a,{className:a.overlay},r.a.createElement(te.a,{m:"auto"},r.a.createElement(ne.a,{variant:"body1",component:"p"},e.description),r.a.createElement(te.a,{className:a.chipContainer},e.technologies.map((function(e){return r.a.createElement(ye.a,{size:"small",label:e,key:e})})))))))),r.a.createElement(xe.a,{classes:{root:a.title,subheader:a.subtitle},subheader:e.title}),r.a.createElement(ke.a,{className:a.footer},r.a.createElement(te.a,{justifyItems:"center",m:"auto"},r.a.createElement($.a,{component:"a",href:e.appUrl,target:"_blank","aria-label":"launch application",color:"inherit",className:a.spacing,startIcon:r.a.createElement(je.a,null)}," Visit Website"),r.a.createElement($.a,{component:"a",href:e.githubUrl,target:"_blank","aria-label":"view code",color:"inherit",className:a.spacing,startIcon:r.a.createElement(Se.a,null)}," View Code"))))}var Ie=t(196);function Fe(){return r.a.createElement(Ie.a,{container:!0,justify:"center",spacing:4},ge.map((function(e){return r.a.createElement(Ie.a,{item:!0,xs:12,sm:6,lg:4,key:e.description},r.a.createElement(Me,e))})))}function Le(e){return r.a.createElement(pe.a,{maxWidth:"lg",component:"div",className:"slide-container"},r.a.createElement(de.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1200,exit:0}},r.a.createElement(te.a,{align:"center"},r.a.createElement(ne.a,{variant:"h5"},"Portfolio"))),r.a.createElement(de.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1e3,exit:0}},r.a.createElement(te.a,{align:"center"},r.a.createElement(Fe,null))))}var Ge=t(198),We=t(199),ze=t(101),Ae=t.n(ze),Pe=t(100),_e=t.n(Pe),De=t(99),Ue=t.n(De),Be=t(95),Re=t.n(Be),Ve=t(96),Je=t.n(Ve),He=t(97),Qe=t.n(He),qe=t(98),Ke=t.n(qe),Ye=Object(P.a)((function(e){return{details:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,paddingLeft:e.spacing(4),paddingRight:e.spacing(4),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),width:"100%",height:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2),backgroundColor:e.palette.primary.contrastText},paddingLeft:{paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));function $e(e){var a=Ye();return r.a.createElement(Ie.a,{container:!0,className:a.details},r.a.createElement(Ie.a,{item:!0,xs:12},r.a.createElement(te.a,{fontStyle:"italic"},r.a.createElement(ne.a,{paragraph:!0},"I'm currently open to freelance work. Please use the form to get in touch."))),r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(Re.a,{fontSize:"small"})),r.a.createElement(Ie.a,{item:!0,xs:11,className:a.paddingLeft},r.a.createElement(ne.a,{variant:"body1"},"Melbourne, Australia")),r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(Je.a,{fontSize:"small"})),r.a.createElement(Ie.a,{item:!0,xs:11,className:a.paddingLeft},r.a.createElement(ne.a,{variant:"body1"},"0459 215 817")),r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(Qe.a,{fontSize:"small"})),r.a.createElement(Ie.a,{item:!0,xs:11,className:a.paddingLeft},r.a.createElement(Ge.a,{variant:"body1",underline:"none",href:"mailto:Geethanjali.tv@gmail.com"},"Geethanjali.tv@gmail.com")),r.a.createElement(Ie.a,{item:!0,xs:1},r.a.createElement(Ke.a,{fontSize:"small"})),r.a.createElement(Ie.a,{item:!0,xs:11,className:a.paddingLeft},r.a.createElement(Ge.a,{variant:"body1",underline:"none",target:"_blank",href:"Resume.pdf"},"Resume")),r.a.createElement(Ie.a,{item:!0,xs:12},r.a.createElement(We.a,{className:a.divider})),r.a.createElement(Ie.a,{item:!0,xs:12,align:"center"},r.a.createElement(ne.a,{variant:"overline"},"Connect with me")),r.a.createElement(Ie.a,{item:!0,xs:12},r.a.createElement(te.a,{display:"flex",justifyContent:"center"},r.a.createElement(_.a,{component:"a","aria-label":"LinkedIn",color:"secondary",target:"_blank",href:"https://www.linkedin.com/in/geethanjali-veetil/"},r.a.createElement(Ue.a,{fontSize:"large"})),r.a.createElement(_.a,{component:"a","aria-label":"GitHub",color:"inherit",target:"_blank",href:"https://github.com/Gveetil"},r.a.createElement(_e.a,null)),r.a.createElement(_.a,{component:"a","aria-label":"Facebook",color:"secondary",target:"_blank",href:"https://www.facebook.com/geethanjali.veetil"},r.a.createElement(Ae.a,{fontSize:"large"})))))}var Xe=t(73),Ze=t(200),ea=t(204),aa=t(207),ta=t(102),na=t.n(ta),ra=r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Incomplete Values! "),r.a.createElement("br",null)," Please complete all the fields."),oa=r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Unable to submit details!"),r.a.createElement("br",null)," Error while sending data - please try again later."),la=Object(P.a)((function(e){return{form:{backgroundColor:e.palette.background.default,color:e.palette.background.contrastText,paddingLeft:e.spacing(3),paddingRight:e.spacing(3),paddingTop:e.spacing(2),paddingBottom:e.spacing(3),width:"100%",height:"100%"},controlMargin:{marginTop:e.spacing(1)},snackbar:{background:"green"}}}));function ia(e){var a=b(),t=Object(p.a)(a,2),o=(t[0],t[1]),l=Object(n.useState)(!1),i=Object(p.a)(l,2),c=i[0],s=i[1],m=la(),u=Object(n.useState)({name:"",email:"",message:""}),d=Object(p.a)(u,2),g=d[0],h=d[1];function f(e,a){"clickaway"!==a&&s(!1)}function E(e){o({type:"SHOW_DIALOG",show:!0,message:e})}function v(e){var a=e.currentTarget.value,t=e.currentTarget.name;h(Object(Xe.a)(Object(Xe.a)({},g),{},Object(S.a)({},t,a)))}function k(){return(k=Object(x.a)(y.a.mark((function e(a){var t,n,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t=g.name.trim(),n=g.email.trim(),r=g.message.trim(),0!==t.length&&0!==n.length&&0!==r.length){e.next=8;break}E(ra),e.next=16;break;case 8:return o="Portfolio Contact Form Submission:\n                            Name: ".concat(t,"\n                            Email: ").concat(n,"\n                            Message: ").concat(r),e.next=11,N.sendMail(o);case 11:if(!e.sent){e.next=15;break}w(),e.next=16;break;case 15:E(oa);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){s(!0),h({name:"",email:"",message:""})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ze.a,{component:"form",noValidate:!0,autoComplete:"off",className:m.form},r.a.createElement(te.a,{display:"flex",flexWrap:"wrap"},r.a.createElement(ea.a,{color:"secondary",name:"name",className:m.controlMargin,value:g.name,onChange:v,margin:"dense",label:"Name",variant:"outlined",fullWidth:!0}),r.a.createElement(ea.a,{color:"secondary",name:"email",className:m.controlMargin,value:g.email,onChange:v,label:"Email",margin:"dense",variant:"outlined",size:"small",fullWidth:!0}),r.a.createElement(ea.a,{fullWidth:!0,color:"secondary",name:"message",className:m.controlMargin,value:g.message,onChange:v,margin:"dense",label:"Message",multiline:!0,rows:9,variant:"outlined"})),r.a.createElement(te.a,{display:"flex",justifyContent:"flex-end",className:m.controlMargin},r.a.createElement($.a,{variant:"outlined",type:"submit",color:"secondary",onClick:function(e){return k.apply(this,arguments)}},"Send Message"))),r.a.createElement(aa.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:c,autoHideDuration:5e3,onClose:f,message:"Success! Thank you for getting in touch.",ContentProps:{className:m.snackbar},action:r.a.createElement(_.a,{size:"small","aria-label":"close",color:"inherit",onClick:f},r.a.createElement(na.a,{fontSize:"small"}))}))}function ca(e){return r.a.createElement(pe.a,{maxWidth:"md",component:"div",className:"slide-container"},r.a.createElement(de.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1200,exit:0}},r.a.createElement(te.a,{align:"center"},r.a.createElement(ne.a,{variant:"h5"},"Contact"))),r.a.createElement(de.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1e3,exit:0}},r.a.createElement(he.a,{elevation:3},r.a.createElement(Ie.a,{container:!0},r.a.createElement(Ie.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement($e,null)),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6,md:8},r.a.createElement(ia,null))))))}var sa=Object(P.a)((function(e){return{root:{backgroundColor:e.palette.background.default,color:e.palette.background.contrastText,paddingLeft:e.spacing(4),paddingRight:e.spacing(3),paddingTop:e.spacing(3),paddingBottom:e.spacing(1),width:"100%",height:"100%"}}}));function ma(e){var a=sa();return r.a.createElement(te.a,{className:a.root},r.a.createElement(ne.a,{paragraph:!0},"Hi, I'm Geetha!"),r.a.createElement(ne.a,{paragraph:!0},"I'm a Full Stack Web Developer based in Melbourne, Australia. I have a strong background in software product design and development and enjoy all things programming. My current skills are in React, Node.js, Express, MySQL, MongoDB, JavaScript, jQuery, Bootstrap and CSS."),r.a.createElement(ne.a,{paragraph:!0},r.a.createElement("strong",{className:"about-me-panel-header"},"Education - "),"Certificate from Monash University Coding Bootcamp in Full Stack Web Technologies. Graduated in Computer Science from Bangalore University."),r.a.createElement(ne.a,{paragraph:!0},r.a.createElement("strong",{className:"about-me-panel-header text-center"},"Work - ")," In an earlier life (1999-2012), I worked extensively with Microsoft .Net technologies like C#. I also have strong analytical and design skills from my work with class and database design (OOAD, SQL Server)."),r.a.createElement(ne.a,{paragraph:!0},"My background in software development combined with my technical aptitude in web technologies make me a valued addition to any team."))}var ua=Object(P.a)((function(e){return{details:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),width:"100%",height:"100%"}}}));function pa(e){var a=ua();return r.a.createElement(Ie.a,{container:!0,item:!0,xs:12,className:a.details,align:"center",justify:"center",direction:"column"},r.a.createElement(te.a,null,r.a.createElement("img",{src:"".concat(N.imageFolder,"profileImage.JPG"),className:"portfolio-image",alt:"Geethanjali Veetil"})))}function da(e){return r.a.createElement(pe.a,{maxWidth:"md",component:"div",className:"slide-container"},r.a.createElement(de.a,{direction:"right",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1200,exit:0}},r.a.createElement(te.a,{align:"center"},r.a.createElement(ne.a,{variant:"h5"},"About Me"))),r.a.createElement(de.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1e3,exit:0}},r.a.createElement(he.a,{elevation:3},r.a.createElement(Ie.a,{container:!0},r.a.createElement(Ie.a,{item:!0,xs:12,sm:4},r.a.createElement(pa,null)),r.a.createElement(Ie.a,{item:!0,xs:12,sm:8},r.a.createElement(ma,null))))))}var ga=Object(m.a)((function(e){return{"@global":{body:{backgroundImage:"url(".concat(N.imageFolder,"background.jpg)"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundColor:"#fff"}}}}))((function(){return r.a.createElement(i.a,{basename:""},r.a.createElement(s.a,{theme:A},r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null),r.a.createElement(ee,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/Portfolio"},r.a.createElement(Le,null)),r.a.createElement(c.a,{exact:!0,path:"/Contact"},r.a.createElement(ca,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(da,null))),r.a.createElement(ue,null),r.a.createElement(oe,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ga,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e){e.exports=JSON.parse('[{"title":"Lets Talk Corona","image":"lets_talk_corona","technologies":["Node.js","Express","MySQL","Sequelize","Materialize","JQuery","Handlebars","Passport"],"description":"Lets Talk Corona is a blogging platform where people come together to share stories about the pandemic.","appUrl":"https://lets-talk-corona.herokuapp.com/","githubUrl":"https://github.com/dev-hg20/lets-talk-corona"},{"title":"Employee Directory","image":"employee_directory","technologies":["React","Bootstrap","json","CSS"],"description":"View a centralized searchable employee directory - browse, sort and locate non-sensitive data about all employees.","appUrl":"https://gveetil.github.io/React-Employee-Directory/","githubUrl":"https://github.com/Gveetil/React-Employee-Directory"},{"title":"EVCS Finder","image":"evcs_finder","technologies":["Materialize","JQuery","Geonames API","Open Charge Map API","Google Maps API"],"description":"The EVCS Finder helps customers find the nearest charging station to charge their electric vehicles.","appUrl":"https://alibahrami633.github.io/EVCS-Finder/","githubUrl":"https://github.com/alibahrami633/EVCS-Finder"},{"title":"Fitness Tracker","image":"fitness_tracker","technologies":["Node.js","Express","MongoDB","Mongoose","Materialize"],"description":"The fitness tracker application tracks your workout progress to help you reach your fitness goals faster.","appUrl":"https://gveetil-fitness-tracker.herokuapp.com/","githubUrl":"https://github.com/Gveetil/nosql-fitness-tracker"},{"title":"Express Note Taker","image":"express_note_taker","technologies":["Node.js","Express","JQuery","Bootstrap","JSON"],"description":"The Note Taker application lets you create, save, and delete notes on the go, and is powered by Node.js and express server.","appUrl":"https://gveetil-note-taker.herokuapp.com/","githubUrl":"https://github.com/Gveetil/Express-Note-Taker"},{"title":"Weather Dashboard","image":"weather_dashboard","technologies":["JQuery","Bootstrap","Open weather API"],"description":"The Weather Dashboard enables users to view the current and future weather outlook for any given city.","appUrl":"https://gveetil.github.io/Weather-Dashboard/","githubUrl":"https://github.com/Gveetil/Weather-Dashboard"}]')}},[[118,1,2]]]);
//# sourceMappingURL=main.f31037ef.chunk.js.map