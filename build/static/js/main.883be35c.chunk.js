(this["webpackJsonpr3f-template"]=this["webpackJsonpr3f-template"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(5),i=n.n(c),r=n(36),s=n.n(r),a=(n(45),n(46),n(23)),o=Object(a.a)((function(e){return{videoPaths:["/video/blue_hex.mp4","/video/hex_hdri2.mp4","/video/hex_hdri.mp4"],videoIndex:0,switchVideos:function(){return e((function(e){return{videoIndex:(e.videoIndex+1)%e.videoPaths.length}}))},sceneIndex:0,selectScene0:function(){return e((function(){return{sceneIndex:0}}))},selectScene1:function(){return e((function(){return{sceneIndex:1}}))},selectScene2:function(){return e((function(){return{sceneIndex:2}}))},selectScene3:function(){return e((function(){return{sceneIndex:3}}))},bears:0,increasePopulation:function(){return e((function(e){return{bears:e.bears+1}}))},removeAllBears:function(){return e({bears:0})}}})),l=n(6);function d(){var e=o((function(e){return e.videoIndex})),t=o((function(e){return e.videoPaths})),n=document.location.origin+window.location.pathname+t[e];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"cover-screen",children:Object(l.jsx)("source",{src:n,type:"video/mp4"})},n)})})}var j=n(12),h=(n(37),n(35)),u=["Full-Stack Engineer","3D Enthusiast","Forest Walker","Potato Lover","Software Architect"];function b(){var e=i.a.useState(0),t=Object(j.a)(e,2),n=t[0],c=t[1];return i.a.useEffect((function(){var e=setInterval((function(){return c((function(e){return e+1}))}),1200);return function(){return clearTimeout(e)}}),[]),Object(l.jsx)(h.a,{style:{},direction:"up",text:u[n%u.length],springConfig:h.b.wobbly})}function m(){return Object(l.jsx)("section",{className:"section-1",children:Object(l.jsxs)("div",{className:"centered-content",children:[Object(l.jsx)("h2",{children:"Evan Daley"}),Object(l.jsx)("h3",{children:Object(l.jsx)(b,{})})]})})}function x(e){var t=e.prefix,n=e.label;return Object(l.jsxs)("h2",{className:"section-label",children:[Object(l.jsxs)("span",{className:"highlight",children:[t,". "]}),Object(l.jsx)("span",{children:n})]})}function f(){return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{style:{marginTop:"0px"},children:["Hi, I'm Evan Daley! I'm a lead developer and software architect working remotely from Spokane Washington. I love building digital experiences, working with big data, and solving complex challenges.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Recently, I've had the privilege of working for a few really cool tech companies in the Pacific Northwest. At ",Object(l.jsx)("a",{href:"https://www.kaspien.com/software/",rel:"noreferrer",target:"_blank",className:"highlight underline",children:"Kaspien"})," I helped build software that has driven over",Object(l.jsx)("span",{className:"highlight",style:{margin:"0px"},children:"\xa01B\xa0"}),"in sales. At ",Object(l.jsx)("a",{href:"https://www.twobarrels.com/",rel:"noreferrer",target:"_blank",className:"highlight underline",children:"Two Barrels"})," I work on a SaaS product that has empowered over",Object(l.jsx)("span",{className:"highlight",children:"\xa01M"}),"\xa0customers to form companies in the US.\xa0",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"My main focus these days is fullstack software development, primarly for SaaS-driven businesses."]})})}function p(){var e=document.location.origin+window.location.pathname+"/images/profile.png";return Object(l.jsx)("img",{alt:"avatar",src:e,className:"avatar"})}function g(){return Object(l.jsx)("section",{id:"about-me-section",className:"section-2",children:Object(l.jsxs)("div",{className:"content-section",children:[Object(l.jsx)(x,{prefix:"01",label:"About Me"}),Object(l.jsxs)("div",{className:"font-twenty flex-container",children:[Object(l.jsx)(f,{}),Object(l.jsx)(p,{})]})]})})}function O(e){var t=e.title,n=e.company,c=e.duration,i=e.workItems,r=e.link;return Object(l.jsxs)("div",{className:"job",children:[Object(l.jsxs)("p",{className:"job-title",children:[Object(l.jsx)("span",{children:t}),Object(l.jsxs)("span",{className:"highlight",children:["\xa0@\xa0",Object(l.jsx)("a",{href:r,className:"highlightI underline",rel:"noopener noreferrer",target:"_blank",children:n})]})]}),Object(l.jsx)("p",{className:"range",children:c}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{className:"task-summary",children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})}),Object(l.jsx)("br",{})]})}function v(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{title:"Lead Engineer / Architect",company:"Two Barrels",duration:"Sep 2019 - Present",link:"https://www.twobarrels.com/",workItems:["Manage a dev team and flagship software product.","Govern cloud infrastructure: ELB, ECS, RDS, VPC, Route53, SQS.","Write modern, performant, maintainable code for internal products.","Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis."]}),Object(l.jsx)(O,{title:"Lead Engineer",company:"Kaspien",duration:"May 2017 - Sep 2019",link:"https://www.kaspien.com/",workItems:["Manage a dev team and flagship software product.","Write modern, performant, maintainable code for a diverse array of internal projects","Manage infrastructure with cloudformation and CLI: EC2, RDS, VPC, Route53, SQS, ECS.","Engage in regular software practices such as planning, mentorship, and code review."]}),Object(l.jsx)(O,{title:"Independent Contractor",company:"Misc",duration:"June 2017 - Present",link:"#",workItems:["Teach upwards of 60 workshops on basics and best practices of MERN Stack (Nucamp).","Communicate with owners to understand specific system requirements.","Provide advice on project costs, design concepts, or design changes.","Design, build, and maintain features using a wide range of technologies."]})]})}function w(){return Object(l.jsx)("section",{id:"employment-section",className:"section-3",children:Object(l.jsxs)("div",{className:"content-section",children:[Object(l.jsx)(x,{prefix:"02",label:"Where I've Worked"}),Object(l.jsx)("div",{className:"font-twenty flex-container",children:Object(l.jsx)(v,{})})]})})}n(57),n(59),n(60),n(15),n(9);var y=n(58),N=(n(61),n(56),document.location.origin+window.location.pathname+"/models/geo.min.glb");y.a.preload(N,!0);document.location.origin,window.location.pathname;document.location.origin,window.location.pathname;function k(){return Object(l.jsx)("section",{id:"contact-me",className:"section-2",children:Object(l.jsxs)("div",{className:"content-section",children:[Object(l.jsx)(x,{prefix:"03",label:"What\u2019s Next?"}),Object(l.jsxs)("p",{className:"font-twenty",children:["Although I'm not actively looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"daley.evan@gmail.com"]})]})})}function I(){var e=document.location.origin+window.location.pathname+"/images/logo.png";return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"https://evandaley.github.io/portfolio-august-2021/",children:Object(l.jsx)("img",{src:e,className:"logo",alt:"Logo"})})}),Object(l.jsx)("div",{className:"nav-menu",children:Object(l.jsxs)("ol",{className:"menu-ordered-list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#about-me-section",children:"About Me"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#employment-section",children:"Experience"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contact-me",children:"Get in Touch"})})]})})]})})}function S(){return Object(l.jsx)("section",{id:"contact-me",className:"section-2",children:Object(l.jsx)("div",{style:{height:"300px"}})})}var E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"html-content-container",children:[Object(l.jsx)(d,{}),Object(l.jsx)(I,{}),Object(l.jsx)("div",{id:"content",children:Object(l.jsxs)("main",{className:"content-container",children:[Object(l.jsx)(m,{}),Object(l.jsx)(g,{}),Object(l.jsx)(w,{}),Object(l.jsx)(k,{}),Object(l.jsx)(S,{})]})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),P()}},[[55,1,2]]]);
//# sourceMappingURL=main.883be35c.chunk.js.map