(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a.n(o),s=a(16),n=a.n(s),r=(a(55),a(56),a(48)),c=a(7),l=a(43),h=(a(60),a(26)),d=a(38),u=[{name:"HOME",ref:"#home"},{name:"ABOUT ME",ref:"#about-me"},{name:"TECHNOLOGIES",ref:"#technologies"},{name:"PORTFOLIO",ref:"#myprofile"},{name:"CONTACT",ref:"#contact"}],p=a(1);var b=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(h.a,{className:"navigation_container",style:{zIndex:"2",position:"fixed",width:"100%",top:"0"},collapseOnSelect:!0,expand:"md",children:[Object(p.jsx)(h.a.Brand,{style:{marginLeft:"1rem"},href:"#home",children:"Farnoush Yousefi"}),Object(p.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(h.a.Collapse,{style:{justifyContent:"flex-end",marginRight:"1rem",borderColor:"none"},children:Object(p.jsx)(d.a,{className:"links",style:{margin:"0 1rem"},children:u.map((function(e,t){return Object(p.jsxs)(d.a.Link,{href:e.ref,children:["\xa0 \xa0",e.name]},t)}))})})]})})},m=a(44),j=a.n(m);a(64);var g=function(){return Object(p.jsxs)("div",{className:"mainInfo",children:[Object(p.jsx)("h1",{children:"What am I"}),Object(p.jsx)(j.a,{strings:[" "," A Software Engineer","Also known as an","Front-end developer","Back-end developer","Full stack developer","Or",'"a coder"'," "," "],typeSpeed:40,backSpeed:50,attr:"placeholder",loop:!0,children:Object(p.jsx)("input",{type:"text"})})]})},f=(a(65),a.p+"static/media/new.324cac64.jpg");var x=function(){return Object(p.jsxs)("div",{className:"about__container",id:"about-me",children:[Object(p.jsx)("div",{id:"image",children:Object(p.jsx)("img",{src:f,alt:"person icon"})}),Object(p.jsxs)("div",{className:"about__text",children:[Object(p.jsx)("h1",{children:"ABOUT ME"}),Object(p.jsx)("p",{children:"Master of computer Science from the University of Waterloo, and Full Stack Web Developer, with a certificate from the University of Toronto. Experience in back-end design, database management, and creating automated solutions. A team player, with good communication and problem\x02solving skills. Passionate about programming, with a strong ability to design, build and maintain websites from ideation to production. An eager learner, with two years experience in Software Industry."})]})]})},y=(a(66),[{name:"React/Redux",iconName:"react"},{name:".Net",iconName:"ruby"},{name:"Javascript",iconName:"javascript"},{name:"CSS3",iconName:"css3"},{name:"HTML 5",iconName:"html5"},{name:"Mongo DB",iconName:"mongodb"},{name:"Bootstrap",iconName:"bootstrap"},{name:"SQL lite",iconName:"sqllite"},{name:"Github",iconName:"github"}]);var O=function(){return Object(p.jsxs)("div",{className:"technologies__container",id:"technologies",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h1",{style:{textAlign:"center",marginTop:"1rem",color:"white"},children:"Some of the Technologies that I use"})}),Object(p.jsx)("div",{className:"tech__cards__container",children:y.map((function(e,t){return console.log(e),Object(p.jsx)("div",{className:"tech__card",children:Object(p.jsxs)("span",{style:{margin:"5px",fontSize:"1.5rem"},children:[Object(p.jsx)("i",{className:"fab fa-"+e.iconName}),e.name]})},t)}))})]})},v=a(39),k=(a(67),a.p+"static/media/CodeQuiz.eb8f2bff.gif"),w=a.p+"static/media/weather_dashboard.2b876ce3.gif",S=a.p+"static/media/Work_Day_Scheduler.07aeb1f7.gif",_=a.p+"static/media/Covid_Dashboard.ab3809dd.gif",T=a.p+"static/media/Tech_Blog.64903e19.gif",N=a.p+"static/media/surveayDonkey.35447e59.gif",A=a.p+"static/media/Booklyst.37dab7e0.gif",C=a.p+"static/media/redux.ac4c10cd.gif",H=a.p+"static/media/Zookeeper.a5e194c3.PNG",I=[{image:a.p+"static/media/booksearch.f69f7011.gif",link:"https://booksearch-engine-graphql.herokuapp.com/",desc:"Google Books API search engine with GraphQL API",summary:"The Book search engine is an application is leveraging the entire MERN stack and with a React front end, MongoDB database, and Node.js/Express.js server and API. It is set up to allow users to save book searches to the back end. The application is built using Google Books API search engine build with GraphQL API and Apollo Server.",tech:"HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|bootstrap|Node.js",GitHub:"https://github.com/FarnoushYousefi/graphQlBook"},{image:C,link:"https://ecommerce-shop-redux.herokuapp.com/",summary:"Shop Shop is an e-commerce application that allows users to shop for various items, add these products to the shopping cart, manage the shopping cart by increasing and decreasing quantities, check out their purchases and see their order history. This application is built using Node.js, GraphQL, Apollo Server, MongoDB and it is using React for the front end and Redux for state management.",desc:"A simple ecommerce store that uses Redux for global state state management.",tech:"HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|redux|bootstrap|Node.js",GitHub:"https://github.com/FarnoushYousefi/shop-shop"},{image:A,link:"https://booklyst-project.herokuapp.com",summary:"The Application that we have created will help find the books you are searching for across multiple sites so that you can buy your book for the cheapest cost. You can search book using text or voice. An intuitive dashboard to track all your favourite and read books!",desc:"Web APIs Code Quize",tech:"HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|redux|bootstrap",GitHub:"https://github.com/FarnoushYousefi/BookLyst"},{image:k,link:"https://farnoushyousefi.github.io/Code-Quiz-/",desc:"Code Quiz API",summary:"Web APIs Code Quize",tech:"HTML| Javascript |CSS",GitHub:"https://github.com/FarnoushYousefi/Code-Quiz-"},{image:H,link:"https://secret-anchorage-53620.herokuapp.com/",summary:"A web server using the Express.js framework and add it to a front-end application that the local zoo is developing, called Zoo Keepr. The site\u2019s data will live on the server you build so that anyone can access it without having to download it.",desc:"Zookeeper BackEnd Project",tech:"HTML| Javascript |CSS|Node.js",GitHub:"https://github.com/FarnoushYousefi/zookeepr"},{image:w,link:"https://farnoushyousefi.github.io/weatherApi/",desc:"Weather Dashboard ",summary:"AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly",tech:"HTML| Javascript | API Call",GitHub:"https://github.com/FarnoushYousefi/weatherApi"},{image:S,link:"https://farnoushyousefi.github.io/super-disco/",desc:"Work Day Scheduler",summary:"AS AN employee with a busy scheduleI WANT to add important events to a daily planner SO THAT I can manage my time effectively",tech:"HTML| Javascript|Moment.js",GitHub:"https://github.com/FarnoushYousefi/super-disco"},{image:_,link:"https://farnoushyousefi.github.io/Covid-dashboard/",desc:"survey_dashboard",summary:"This repository contains a Dashborard that shows you the a variaty of information combined in one place for when things re-open in Canada",tech:"HTML| Javascript |CSS",GitHub:"https://github.com/FarnoushYousefi/Covid-dashboard"},{image:T,link:"https://techblog-sequelize.herokuapp.com/",desc:"Tech_Blog",summary:"This is a tech blog that allows a user to post about whatever they wish. It supports account creation with secure password hashing and storage as well as the ability to login. Users can view all posts, or go to their dashboards to see the posts they have made. They can also comment on posts if they are logged in. If the user idles for too long they will be logged out of their accountAS A developer who writes about tech I WANT a CMS-style blog sit SO THAT I can publish articles, blog posts, and my thoughts and opinions",tech:"Handlebars|Node.js|Sequelize|MySQL2|Express-session|heroku",GitHub:"https://github.com/FarnoushYousefi/Tech-Blog-"},{image:N,link:"https://safe-earth-34464.herokuapp.com/",desc:"Survey Donkey",summary:"A survey application where users are able to make their own surveys and share with others. While anyone will be able to take the surveys, only logged in users will be able to create, edit, and delete their surveys.",tech:"Handlebars|Node.js|Sequelize|MySQL2|Express-session|heroku",Github:"https://github.com/uotgroup1/project2-group1"}],F=a(46),G=a(47),L=a(50),M=a(36),B=a(23),z=a(45);console.log("portfolioData",I);var E=function(){var e=Object(o.useState)(!1),t=Object(v.a)(e,2),a=t[0],i=t[1],s=Object(o.useState)({}),n=Object(v.a)(s,2),r=n[0],c=n[1],l=I.map((function(e,t){return console.log("texttttttttt",e,t),Object(p.jsxs)(L.a,{id:"portfolio__card__container",children:[Object(p.jsx)(M.a,{className:"portfolio__image",onClick:function(t){c({image:e.image,link:e.link,desc:e.desc,summary:e.summary,tech:e.tech,GitHub:e.GitHub}),i(!0)},src:e.image}),Object(p.jsx)("div",{className:"portfolio__click__info",children:"\ud83d\udd0e\ufe0e"}),(o=r,Object(p.jsxs)(B.a,{show:a,onHide:function(){return i(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(p.jsx)(B.a.Header,{children:Object(p.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:o.desc})}),Object(p.jsxs)(B.a.Body,{children:[Object(p.jsx)("p",{children:o.summary}),Object(p.jsx)(M.a,{src:o.image,style:{width:"200px"}})]}),Object(p.jsx)("a",{id:"portfolio__modal__link",href:o.link,target:"_blank",rel:"noreferrer",children:"Go to site"}),Object(p.jsxs)("a",{href:o.GitHub,children:[" ",Object(p.jsx)("i",{class:"fab fa-github",style:{color:"black",fontSize:"30px",padding:"1rem"},target:"_blank"}),"Go to GitHub Link"]}),Object(p.jsxs)(B.a.Footer,{children:[Object(p.jsx)("div",{children:"Technologies used: "}),Object(p.jsx)("p",{style:{fontSize:"0.7rem",marginRight:"auto"},children:o.tech}),Object(p.jsx)(z.a,{onClick:function(){return i(!1)},children:"Close"})]})]}))]},t);var o}));return Object(p.jsxs)("div",{className:"portfolio__main__container",id:"portfolio",children:[Object(p.jsx)("h1",{children:"PORTFOLIO"}),Object(p.jsxs)("p",{style:{color:"white",fontSize:"30px"},children:["This is my Github page:",Object(p.jsx)("a",{href:"https://github.com/Juan321654",target:"_blank",rel:"noreferrer",style:{color:"white",fontSize:"20px"},children:" https://github.com/FarnoushYousefi"})]}),Object(p.jsx)("div",{children:Object(p.jsx)(F.a,{fluid:"lg",style:{padding:"2rem 2rem"},children:Object(p.jsx)(G.a,{className:"justify-content-center",children:l})})})]})};a(68);var P=function(){return Object(p.jsxs)("div",{className:"contactMe__container",id:"contact",children:[Object(p.jsxs)("div",{className:"contactMe__data__links",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Tornoto, Canada"}),Object(p.jsx)("p",{children:"Farnoush Yousefi"}),Object(p.jsx)("p",{children:"farnoush.yousefikejani@uwaterloo.ca"})]}),Object(p.jsx)("div",{children:u.map((function(e,t){return Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:e.ref,children:e.name})},t)}))})]}),Object(p.jsxs)("div",{class:"link",children:[Object(p.jsxs)("a",{href:"https://github.com/FarnoushYousefi",children:[" ",Object(p.jsx)("i",{class:"fab fa-github",style:{color:"black",fontSize:"30px",padding:"1rem",margin:"0 auto"},target:"_blank"})]}),Object(p.jsxs)("a",{href:"https://www.linkedin.com/in/farnoushyousefi/",children:[" ",Object(p.jsx)("i",{class:"fab fa-linkedin",style:{color:"white",fontSize:"30px",padding:"1rem",margin:"0 auto"},target:"_blank"})]})]}),Object(p.jsxs)("div",{style:{textAlign:"center"},children:["Copyright\xa9 ",(new Date).getFullYear()," All rights reserved"]})]})};var Q=function(){return Object(p.jsx)(r.a,{basename:"/portfolio",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(b,{}),Object(p.jsx)(c.a,{exact:!0,path:"/home",children:Object(p.jsx)(g,{})}),Object(p.jsx)(c.a,{exact:!0,path:"/technologies",children:Object(p.jsx)(O,{})}),Object(p.jsx)(c.a,{exact:!0,path:"/about-me",children:Object(p.jsx)(x,{})}),Object(p.jsx)(c.a,{exact:!0,path:"/myprofile",children:Object(p.jsx)(E,{})}),Object(p.jsx)(c.a,{exact:!0,path:"/contact",children:Object(p.jsx)(P,{})}),Object(p.jsx)(l.a,{style:{height:"200vh"},background:{r:21,g:22,b:23,a:1},particleSpeed:.1,particleRadius:1.5,color:{r:158,g:217,b:249,a:255}})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),o(e),i(e),s(e),n(e)}))};a(74);n.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[75,1,2]]]);
//# sourceMappingURL=main.7e3608c7.chunk.js.map