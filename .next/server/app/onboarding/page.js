(()=>{var e={};e.id=566,e.ids=[566],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},9135:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>l});var r=s(70260),n=s(28203),a=s(25155),i=s.n(a),o=s(67292),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);s.d(t,d);let l=["",{children:["onboarding",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,91490)),"/home/user/PICE-AMS2-V4/app/onboarding/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,12065)),"/home/user/PICE-AMS2-V4/app/onboarding/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,19611)),"/home/user/PICE-AMS2-V4/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/user/PICE-AMS2-V4/app/onboarding/page.tsx"],m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/onboarding/page",pathname:"/onboarding",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},34449:(e,t,s)=>{Promise.resolve().then(s.bind(s,41414)),Promise.resolve().then(s.t.bind(s,59607,23)),Promise.resolve().then(s.t.bind(s,71066,23))},33777:(e,t,s)=>{Promise.resolve().then(s.bind(s,21737)),Promise.resolve().then(s.t.bind(s,28531,23)),Promise.resolve().then(s.t.bind(s,41902,23))},85616:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,13219,23)),Promise.resolve().then(s.t.bind(s,34863,23)),Promise.resolve().then(s.t.bind(s,25155,23)),Promise.resolve().then(s.t.bind(s,40802,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,48530,23)),Promise.resolve().then(s.t.bind(s,88921,23))},43760:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,66959,23)),Promise.resolve().then(s.t.bind(s,33875,23)),Promise.resolve().then(s.t.bind(s,88903,23)),Promise.resolve().then(s.t.bind(s,57174,23)),Promise.resolve().then(s.t.bind(s,84178,23)),Promise.resolve().then(s.t.bind(s,87190,23)),Promise.resolve().then(s.t.bind(s,61365,23))},53739:(e,t,s)=>{Promise.resolve().then(s.bind(s,56814))},29763:(e,t,s)=>{Promise.resolve().then(s.bind(s,91542))},96487:()=>{},78335:()=>{},21737:(e,t,s)=>{"use strict";s.d(t,{SidePanel:()=>j});var r=s(45512),n=s(28531),a=s.n(n),i=s(87021),o=s(76438),d=s(58009),l=s(89650),c=s(21643),m=s(44269),h=s(59462);let u=l.bL,x=l.l9;l.bm;let f=l.ZL,p=d.forwardRef(({className:e,...t},s)=>(0,r.jsx)(l.hJ,{className:(0,h.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));p.displayName=l.hJ.displayName;let b=(0,c.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),g=d.forwardRef(({side:e="right",className:t,children:s,...n},a)=>(0,r.jsxs)(f,{children:[(0,r.jsx)(p,{}),(0,r.jsxs)(l.UC,{ref:a,className:(0,h.cn)(b({side:e}),t),...n,children:[(0,r.jsxs)(l.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(m.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]}),s]})]}));g.displayName=l.UC.displayName,d.forwardRef(({className:e,...t},s)=>(0,r.jsx)(l.hE,{ref:s,className:(0,h.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=l.hE.displayName,d.forwardRef(({className:e,...t},s)=>(0,r.jsx)(l.VY,{ref:s,className:(0,h.cn)("text-sm text-muted-foreground",e),...t})).displayName=l.VY.displayName;let v=[{href:"/docs",label:"Introduction"},{href:"/docs/tracker",label:"Tracker"},{href:"/docs/administrator",label:"Administrator"}];function j(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(()=>(0,r.jsx)("nav",{className:"hidden md:block bg-white border-r border-gray-200 h-[calc(100vh-4rem)] w-64 fixed top-16",children:(0,r.jsx)("div",{className:"space-y-1 p-4",children:v.map(e=>(0,r.jsx)(a(),{href:e.href,className:"block",children:(0,r.jsx)(i.$,{variant:"ghost",className:"w-full justify-start",children:e.label})},e.href))})}),{}),(0,r.jsx)(()=>(0,r.jsxs)(u,{children:[(0,r.jsx)(x,{asChild:!0,children:(0,r.jsx)(i.$,{variant:"ghost",className:"md:hidden fixed top-4 left-4 z-50",children:(0,r.jsx)(o.A,{className:"h-6 w-6"})})}),(0,r.jsx)(g,{side:"left",className:"w-[240px] sm:w-[300px]",children:(0,r.jsx)("nav",{className:"space-y-1 mt-8",children:v.map(e=>(0,r.jsx)(a(),{href:e.href,className:"block",children:(0,r.jsx)(i.$,{variant:"ghost",className:"w-full justify-start",children:e.label})},e.href))})})]}),{})]})}},87021:(e,t,s)=>{"use strict";s.d(t,{$:()=>l,r:()=>d});var r=s(45512),n=s(58009),a=s(12705),i=s(21643),o=s(59462);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:t,size:s,asChild:n=!1,...i},l)=>{let c=n?a.DX:"button";return(0,r.jsx)(c,{className:(0,o.cn)(d({variant:t,size:s,className:e})),ref:l,...i})});l.displayName="Button"},59462:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(82281),n=s(94805);function a(...e){return(0,n.QP)((0,r.$)(e))}},41414:(e,t,s)=>{"use strict";s.d(t,{SidePanel:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call SidePanel() from the server but SidePanel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/user/PICE-AMS2-V4/app/components/side-panel.tsx","SidePanel")},19611:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(62740);s(76301),s(23141);var n=s(56814);let a={title:"PICE BulSU-SC AMS",description:"Attendance Management System for PICE"},i=({children:e})=>(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("link",{rel:"icon",href:"/web/16.ico",sizes:"16x16"}),(0,r.jsx)("link",{rel:"icon",href:"/web/32.ico",sizes:"32x32"}),(0,r.jsx)("link",{rel:"icon",href:"/web/96.ico",sizes:"96x96"})]}),(0,r.jsxs)("body",{children:[e,(0,r.jsx)(n.Toaster,{position:"bottom-right"})," "]})]})},12065:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(62740),n=s(59607),a=s.n(n),i=s(35635);function o(){return(0,r.jsx)("header",{className:"bg-white shadow-sm sticky top-0 z-50",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"flex justify-center items-center h-16",children:(0,r.jsxs)(a(),{href:"/",className:"flex items-center space-x-2",children:[(0,r.jsx)(i.default,{src:"/web/96.png",alt:"PICE BulSU-SC Logo",width:32,height:32,className:"rounded-full"}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-xl font-bold text-primary",children:"PICE BulSU-SC"}),(0,r.jsx)("h2",{className:"text-sm text-muted-foreground",children:"Attendance Monitoring System"})]})]})})})})}var d=s(41414);function l({children:e}){return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,r.jsx)(o,{}),(0,r.jsxs)("div",{className:"flex-1 flex",children:[(0,r.jsx)(d.SidePanel,{}),(0,r.jsx)("main",{className:"flex-1 p-8 overflow-y-auto docs-content md:ml-64 mt-16",children:(0,r.jsx)("div",{className:"max-w-3xl mx-auto",children:e})})]})]})}},91490:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(62740),n=s(19935);function a(){return(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{className:"max-w-3xl",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"PICE BulSU SC - Attendance Monitoring System (AMS)"}),(0,r.jsx)("p",{className:"text-lg text-gray-700 mb-4",children:"Welcome to the PICE BulSU SC - Attendance Monitoring System (AMS). This web-based application streamlines the process of tracking student attendance during organization events for the officers of PICE BulSU SC. The system utilizes QR code scanning to record student's time-in and time-out, allowing for efficient attendance management."}),(0,r.jsx)("p",{className:"text-lg text-gray-700",children:"This system was built to help the PICE BulSU SC Officers to easily track the attendance of students during the organization events. Here are the things you need to know to get started."})]}),(0,r.jsxs)(n.Zp,{className:"shadow-md mb-4",children:[(0,r.jsx)(n.aR,{children:(0,r.jsx)(n.ZB,{children:"Key Features"})}),(0,r.jsx)(n.Wu,{children:(0,r.jsxs)("ul",{className:"list-disc pl-5 space-y-2",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"QR Code Scanning"}),(0,r.jsx)("p",{children:"Track student attendance by scanning their unique QR codes."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Time Recording"}),(0,r.jsx)("p",{children:"Automatically record the time-in and time-out of students during the scanning process."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Data Management"}),(0,r.jsx)("p",{children:"Generate comprehensive summaries of attendance data."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Batch QR Generation"}),(0,r.jsx)("p",{children:"Admin can generate QR codes for multiple students."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("h3",{className:"font-semibold",children:"Data Consolidation"}),(0,r.jsx)("p",{children:"Merge multiple scanned data and generate summaries."})]})]})})]}),(0,r.jsxs)(n.Zp,{className:"shadow-md mb-4",children:[(0,r.jsx)(n.aR,{children:(0,r.jsx)(n.ZB,{children:"Before you begin"})}),(0,r.jsxs)(n.Wu,{children:[(0,r.jsx)("p",{className:"mb-4",children:"Please read the documentation thoroughly before using the AMS. This will ensure that you understand how the system works and how to effectively use its features."}),(0,r.jsx)("p",{children:"If you have read the documentation and are ready to use the system, you may access it here:"}),(0,r.jsx)("a",{href:"YOUR_GITHUB_URL",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline hover:text-blue-700 transition duration-300 block mt-2",children:"Access the System Here"})]})]})]})}},19935:(e,t,s)=>{"use strict";s.d(t,{Wu:()=>l,ZB:()=>d,Zp:()=>i,aR:()=>o});var r=s(62740),n=s(76301),a=s(55946);let i=n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));i.displayName="Card";let o=n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...t}));o.displayName="CardHeader";let d=n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("font-semibold leading-none tracking-tight",e),...t}));d.displayName="CardTitle",n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let l=n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",e),...t}));l.displayName="CardContent",n.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},55946:(e,t,s)=>{"use strict";s.d(t,{cn:()=>a});var r=s(13673),n=s(47317);function a(...e){return(0,n.QP)((0,r.$)(e))}},23141:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[1,652,650,735],()=>s(9135));module.exports=r})();