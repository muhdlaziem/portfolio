(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),s=t.n(i),r=(t(13),t(1)),c=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hi, ",e.name," here."),l.a.createElement("div",null,l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"Looking for Intership from July 2020 to December 2020")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",{className:"achieve"},e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experience"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",{className:"achive"},e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),E=(n.Component,n.Component,n.Component,function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component)),f={imagebaseurl:"https://muhdlaziem.github.io/",name:"Muhammad Laziem Shafie",role:"Mobile App Developer | Data Enginner | Backend Developer",linkedinId:"muhdlaziem",skypeid:"Your skypeid",roleDescription:"Very passionate at programming. Love to explore many things about it and ready to learn new technologies. However, the basic of computer science is always important !",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/muhdlaziem/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/muhdlaziem",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/muhdlaziem",className:"fa fa-twitter"}],aboutme:"4rd year student of Kulliyah Information and Communication Technology, IIUM. Very commited, determined, hard-working and patience in work. Easy to adapt changes. Looking for Machine Learning, Data Science and Software Development fields.",address:"Kuala Lumpur, Malaysia",website:"https://muhdlaziem.github.io",email:"muhdlaziem@gmail.com",education:[{UniversityName:"SAM Bestari Subang Jaya",specialization:"SPM",MonthOfPassing:null,YearOfPassing:"2014",Achievements:["Result: 8A3B"]},{UniversityName:"Center For Foundation Studies IIUM",specialization:"Foundation in Computer Science",MonthOfPassing:null,YearOfPassing:"2015 - 2016",Achievements:["CGPA: 3.399"]},{UniversityName:"International Islamic University Malaysia",specialization:"Bachelor of Computer Science. Specialized in Data Science and Computational Intelligence",MonthOfPassing:"",YearOfPassing:"2017 - 2021",Achievements:["Current CGPA: 3.79"]}],work:[{CompanyName:"Part-Timer IIUM Advanced Technologies Sdn Bhd",specialization:"Setup PC for UTM & Maintain PC in several Labs in IIUM",MonthOfLeaving:"",YearOfLeaving:"2017-2018",Achievements:""},{CompanyName:"FYP : Automated Diabetic Retinopathy Detection using Deep Neural Network",specialization:"Research and Development",MonthOfLeaving:"",YearOfLeaving:"2019 - 2020",Achievements:""}],skillsDescription:"These are the languages and frameworks that I excelled",skills:[{skillname:"HTML5/CSS/JavaScript"},{skillname:"Nodejs/Reactjs/React-Native"},{skillname:"R/Python"},{skillname:"Tensorflow/Keras"},{skillname:"MySQL"},{skillname:"C/C++/Java"},{skillname:"Solidity"}],portfolio:[{name:"Barcode Scanner",description:"Mobile Application(React-Native)",imgurl:"images/portfolio/coffee.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},v=function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:f}),l.a.createElement(h,{resumeData:f}),l.a.createElement(d,{resumeData:f}),l.a.createElement(E,{resumeData:f}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.a2a41e92.chunk.js.map