(this["webpackJsonpandytelliott.github.io"]=this["webpackJsonpandytelliott.github.io"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(10)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),l=a.n(r),c=(a(8),a(9),function(){var e=[{href:"#About",title:"About Me",onClick:function(){return window.scrollTo(0,0)}},{href:"#Projects",title:"Projects"},{href:"#FaithActivities",title:"Faith and Activities"},{href:"#Contact",title:"Contact Me"}];return i.a.createElement("header",{style:{position:"fixed",backgroundColor:"var(--baby-powder)",zIndex:"100",width:"100%"}},i.a.createElement("nav",{style:{width:"100%",zIndex:"100",justifyContent:"flex-end",display:"flex",boxShadow:"0 4px 10px rgba(0,0,0,0.2)"}},i.a.createElement("ul",{className:"navLinks"},e.map((function(e){return i.a.createElement("li",{key:e.title},i.a.createElement("a",{onClick:e.onClick,href:e.href},e.title))}))),i.a.createElement("button",{className:"hamburger"},i.a.createElement("svg",{width:"50px",height:"50px",viewBox:"25 25 50 50",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{strokeDasharray:"21 100",strokeDashoffset:"82",stroke:"#aaa",strokeWidth:"3",strokeLinecap:"round",fill:"none"},i.a.createElement("path",{d:"M0 40h62c13 0 6 28-4 18L35 35"}),i.a.createElement("path",{d:"M0 50h70"}),i.a.createElement("path",{d:"M0 60h62c13 0 6-28-4-18L35 65"}),i.a.createElement("animate",{attributeName:"strokeDashoffset",values:"82;26",dur:"0.4s",fill:"freeze",begin:"startAnimation.begin"}),i.a.createElement("animate",{attributeName:"strokeDashoffset",values:"26;82",dur:"0.4s",fill:"freeze",begin:"reverseAnimation.begin"})),i.a.createElement("rect",{id:"animate",x:"25",y:"25",width:"50",height:"50",fillOpacity:"0"}),i.a.createElement("circle",{cx:"50",cy:"50",r:"50",fill:"red",style:{cursor:"pointer"},fillOpacity:"0"},i.a.createElement("animate",{dur:"0.01s",id:"startAnimation",attributeName:"r",values:"16; 0",fill:"freeze",begin:"click"}),i.a.createElement("animate",{dur:"0.01s",attributeName:"r",values:"0; 50",fill:"freeze",begin:"reverseAnimation.end"})),i.a.createElement("circle",{cx:"50",cy:"50",r:"0",fill:"green",style:{cursor:"pointer"},fillOpacity:"0"},i.a.createElement("animate",{dur:"0.001s",id:"reverseAnimation",attributeName:"r",values:"16; 0",fill:"freeze",begin:"click"}),i.a.createElement("animate",{dur:"0.001s",attributeName:"r",values:"0; 50",begin:"startAnimation.end",fill:"freeze"}))))))}),o=function(){return i.a.createElement("section",{className:"row center-xs start-sm middle-sm",id:"About"},i.a.createElement("div",{className:"oval"}),i.a.createElement("div",{className:"oval orange"}),i.a.createElement("div",{className:"profilePic col-sm-offset-1"}),i.a.createElement("div",{className:"col-xs-11 col-sm-5 col-sm-offset-1 "},i.a.createElement("h1",{className:"title"}," ","My name is ",i.a.createElement("span",null,"Andrew Elliott")," "),i.a.createElement("p",null,"Welcome to my website! First and foremeost, I am an ambassador for Jesus Christ, husband, and a Computer Engineering graduate from North Dakota State University! I made this website for you to share more information about myself. Scroll down to learn more! Feel free to"," ",i.a.createElement("a",{href:"#Contact"},"contact me "),"if you have any questions or want to chat!")))},s=function(e){var t=e.title,a=e.description,n=e.image,r={backgroundImage:'url("'.concat("/ProjectImages/"+n,'")'),height:"40vw",maxHeight:"10em",width:"40vw",maxWidth:"10em",marginTop:"2em",marginRight:"1em",backgroundPosition:"center center",backgroundSize:"cover",borderRadius:"15%",boxShadow:"4px 4px 15px rgba(0, 0, 0, 0.2)"};return i.a.createElement("li",{className:"row center-xs start-sm"},i.a.createElement("div",{style:r}),i.a.createElement("div",{className:"col-xs-12 col-sm-6"},i.a.createElement("h3",{className:"col-xs-12 projectTitle"},t),i.a.createElement("p",null,a)))},m=function(){return i.a.createElement("section",{id:"Projects"},i.a.createElement("div",{className:"containerX"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-xs-12 sectionTitle"},"Projects"))),i.a.createElement("ul",{className:"containerX"},[{title:"My Personal Website",description:"The website you are currently looking at was created from scratch using React.js. I started building this website in August of 2020 and is a working progress.",image:"React_symbol.png"},{title:"Parts Inventory System",description:"This system was my capstone project at NDSU and was created to locate over 2,000 parts on a shelf in the Electrical and Computer Engineering building. It consists of 2 Raspberry Pi's that communicate wirelessly; one connected to a GUI and the other connected to the LEDs. Click the picture to find out more!",image:"PartsInventory.png"}].map((function(e){return i.a.createElement(s,{key:e.title,image:e.image,title:e.title,description:e.description})}))))},d=function(e){var t=e.title,a=e.description,n=e.image,r={backgroundImage:'url("'.concat("/ActivityImages/"+n,'")'),height:"40vw",maxHeight:"10em",width:"40vw",maxWidth:"15em",marginTop:"2em",marginRight:"1em",backgroundPosition:"center center",backgroundSize:"65%",backgroundRepeat:"no-repeat",boxShadow:"4px 4px 15px rgba(0, 0, 0, 0.2)"};return i.a.createElement("li",{className:"row center-xs start-sm"},i.a.createElement("div",{style:r}),i.a.createElement("div",{className:"col-xs-12 col-sm-6"},i.a.createElement("h3",{className:"col-xs-12 projectTitle"},t),i.a.createElement("p",null,a)))},u=function(){return i.a.createElement("section",{id:"FaithActivities"},i.a.createElement("div",{className:"containerX"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-xs-12 sectionTitle"},"Faith and Activities"))),i.a.createElement("ul",{className:"containerX"},[{title:"The Impact Movement",description:"A passion on mine is to reach the Black community on campus. The Impact Movement is about engaging with Black students and leading them into a realtionship with Jesus Christ ",image:"Impact.png"},{title:"Chi Alpha Ministries",description:"Join Chi Alpha! It is a great way to find life-long friends and know more about Jesus! I have been apart of Chi Alpha for 3 years.",image:"ChiAlpha.png"}].map((function(e){return i.a.createElement(d,{key:e.title,image:e.image,title:e.title,description:e.description})}))))},h=function(){return i.a.createElement("section",{id:"Contact"},i.a.createElement("div",{className:"containerX"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"col-xs-12 sectionTitle"},"Contact Me"),i.a.createElement("p",{className:"col-xs-12",style:{textAlign:"center"}}," You can contact me at ",i.a.createElement("a",{href:"mailto: andy.telliott@icloud.com"}," andy.telliott@icloud.com"),"."),i.a.createElement("a",{className:"col-xs-12 row center-xs",href:"/linkedin.svg"},i.a.createElement("div",null,i.a.createElement("object",{data:"/linkedin.svg",width:"50px"}))))))},g=function(){return i.a.createElement("main",null,i.a.createElement(o,null),i.a.createElement(m,null),i.a.createElement(u,null),i.a.createElement(h,null))};var f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.4884c4e8.chunk.js.map