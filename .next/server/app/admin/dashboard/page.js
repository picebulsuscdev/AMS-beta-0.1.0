(()=>{var e={};e.id=957,e.ids=[957],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},11399:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=r(70260),a=r(28203),n=r(25155),o=r.n(n),i=r(67292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["admin",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,98307)),"/home/user/PICE-AMS2-V4/app/admin/dashboard/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,19611)),"/home/user/PICE-AMS2-V4/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/user/PICE-AMS2-V4/app/admin/dashboard/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/admin/dashboard/page",pathname:"/admin/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},95885:(e,t,r)=>{Promise.resolve().then(r.bind(r,98307))},43149:(e,t,r)=>{Promise.resolve().then(r.bind(r,27951))},85616:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},43760:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},53739:(e,t,r)=>{Promise.resolve().then(r.bind(r,56814))},29763:(e,t,r)=>{Promise.resolve().then(r.bind(r,91542))},27951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(45512),a=r(58009),n=r(79334),o=r(97643),i=r(87021),d=r(44949),l=r(63170),c=r(87920),u=r(10203),m=r(57079),p=r(91542);function h(){let e=(0,n.useRouter)(),[t,r]=(0,a.useState)(!1),[h,f]=(0,a.useState)(!1),[x,v]=(0,a.useState)(null);(0,m.VP)();let g=async t=>{f(!0),v("/admin/generate-qr"===t?"qr":"consolidate"),await new Promise(e=>setTimeout(e,500)),e.push(t),f(!1),v(null)};return(0,s.jsxs)("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:[(0,s.jsxs)("div",{className:"w-full max-w-4xl space-y-4",children:[(0,s.jsxs)("div",{className:"text-center mb-8",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:"PICE BulSU-SC"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Administrator Dashboard"})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,s.jsx)(o.Zp,{className:`hover:bg-accent/50 transition-colors cursor-pointer ${x&&"qr"!==x?"pointer-events-none bg-accent/50":""}`,onClick:()=>g("/admin/generate-qr"),children:(0,s.jsxs)(o.Wu,{className:"flex flex-col items-center justify-center p-12 text-center space-y-4",children:["qr"===x&&h?(0,s.jsx)(d.A,{className:"h-12 w-12 animate-spin"}):(0,s.jsx)(l.A,{className:"h-12 w-12"}),(0,s.jsx)("h2",{className:"text-xl font-semibold",children:"Generate Batch QR Code"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Generate QR codes for multiple students at once"})]})}),(0,s.jsx)(o.Zp,{className:`hover:bg-accent/50 transition-colors cursor-pointer ${x&&"consolidate"!==x?"pointer-events-none bg-accent/50":""}`,onClick:()=>g("/admin/consolidate"),children:(0,s.jsxs)(o.Wu,{className:"flex flex-col items-center justify-center p-12 text-center space-y-4",children:["consolidate"===x&&h?(0,s.jsx)(d.A,{className:"h-12 w-12 animate-spin"}):(0,s.jsx)(c.A,{className:"h-12 w-12"}),(0,s.jsx)("h2",{className:"text-xl font-semibold",children:"Consolidate Attendance Logs"}),(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Merge and analyze multiple attendance CSV files"})]})})]}),(0,s.jsx)("div",{className:"flex justify-center mt-8",children:(0,s.jsx)(i.$,{variant:"outline",onClick:()=>r(!0),children:"Sign Out"})})]}),(0,s.jsx)(u.Lt,{open:t,onOpenChange:r,children:(0,s.jsxs)(u.EO,{children:[(0,s.jsxs)(u.wd,{children:[(0,s.jsx)(u.r7,{children:"Are you sure you want to log out?"}),(0,s.jsx)(u.$v,{children:"You will be logged out of this session."})]}),(0,s.jsx)(u.Rx,{onClick:()=>{(0,m.ln)(),p.o.success("Successfully signed out"),e.push("/admin")},children:"Log out"}),(0,s.jsx)(u.Zr,{children:"Cancel"})]})})]})}},10203:(e,t,r)=>{"use strict";r.d(t,{Lt:()=>z,Rx:()=>V,Zr:()=>$,EO:()=>E,$v:()=>I,wd:()=>_,r7:()=>q});var s=r(45512),a=r(58009),n=r(6004),o=r(29952),i=r(89650),d=r(31412),l=r(12705),c="AlertDialog",[u,m]=(0,n.A)(c,[i.Hs]),p=(0,i.Hs)(),h=e=>{let{__scopeAlertDialog:t,...r}=e,a=p(t);return(0,s.jsx)(i.bL,{...a,...r,modal:!0})};h.displayName=c,a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=p(r);return(0,s.jsx)(i.l9,{...n,...a,ref:t})}).displayName="AlertDialogTrigger";var f=e=>{let{__scopeAlertDialog:t,...r}=e,a=p(t);return(0,s.jsx)(i.ZL,{...a,...r})};f.displayName="AlertDialogPortal";var x=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=p(r);return(0,s.jsx)(i.hJ,{...n,...a,ref:t})});x.displayName="AlertDialogOverlay";var v="AlertDialogContent",[g,y]=u(v),b=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,children:n,...c}=e,u=p(r),m=a.useRef(null),h=(0,o.s)(t,m),f=a.useRef(null);return(0,s.jsx)(i.G$,{contentName:v,titleName:j,docsSlug:"alert-dialog",children:(0,s.jsx)(g,{scope:r,cancelRef:f,children:(0,s.jsxs)(i.UC,{role:"alertdialog",...u,...c,ref:h,onOpenAutoFocus:(0,d.m)(c.onOpenAutoFocus,e=>{e.preventDefault(),f.current?.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,s.jsx)(l.xV,{children:n}),(0,s.jsx)(R,{contentRef:m})]})})})});b.displayName=v;var j="AlertDialogTitle",N=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=p(r);return(0,s.jsx)(i.hE,{...n,...a,ref:t})});N.displayName=j;var w="AlertDialogDescription",P=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=p(r);return(0,s.jsx)(i.VY,{...n,...a,ref:t})});P.displayName=w;var k=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=p(r);return(0,s.jsx)(i.bm,{...n,...a,ref:t})});k.displayName="AlertDialogAction";var A="AlertDialogCancel",C=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,{cancelRef:n}=y(A,r),d=p(r),l=(0,o.s)(t,n);return(0,s.jsx)(i.bm,{...d,...a,ref:l})});C.displayName=A;var R=({contentRef:e})=>{let t=`\`${v}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${v}\` by passing a \`${w}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${v}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return a.useEffect(()=>{document.getElementById(e.current?.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},M=r(59462),S=r(87021);let z=h,D=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(x,{className:(0,M.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));D.displayName=x.displayName;let E=a.forwardRef(({className:e,...t},r)=>(0,s.jsxs)(f,{children:[(0,s.jsx)(D,{}),(0,s.jsx)(b,{ref:r,className:(0,M.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));E.displayName=b.displayName;let _=({className:e,...t})=>(0,s.jsx)("div",{className:(0,M.cn)("flex flex-col space-y-2 text-center sm:text-left",e),...t});_.displayName="AlertDialogHeader";let q=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(N,{ref:r,className:(0,M.cn)("text-lg font-semibold",e),...t}));q.displayName=N.displayName;let I=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(P,{ref:r,className:(0,M.cn)("text-sm text-muted-foreground",e),...t}));I.displayName=P.displayName;let V=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(k,{ref:r,className:(0,M.cn)((0,S.r)(),e),...t}));V.displayName=k.displayName;let $=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(C,{ref:r,className:(0,M.cn)((0,S.r)({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));$.displayName=C.displayName},87021:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>d});var s=r(45512),a=r(58009),n=r(12705),o=r(21643),i=r(59462);let d=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},l)=>{let c=a?n.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(d({variant:t,size:r,className:e})),ref:l,...o})});l.displayName="Button"},97643:(e,t,r)=>{"use strict";r.d(t,{Wu:()=>l,ZB:()=>d,Zp:()=>o,aR:()=>i});var s=r(45512),a=r(58009),n=r(59462);let o=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));o.displayName="Card";let i=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));i.displayName="CardHeader";let d=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...t}));d.displayName="CardTitle",a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let l=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",e),...t}));l.displayName="CardContent",a.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter"},59462:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(82281),a=r(94805);function n(...e){return(0,a.QP)((0,s.$)(e))}},87920:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(73258).A)("FileSpreadsheet",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M14 17h2",key:"10kma7"}]])},44949:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(73258).A)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},63170:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(73258).A)("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]])},79334:(e,t,r)=>{"use strict";var s=r(58686);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},57079:(e,t,r)=>{"use strict";r.d(t,{VP:()=>a,ln:()=>n});var s=r(58009);function a(){let[e,t]=(0,s.useState)("pending");return e}function n(){sessionStorage.removeItem("userRole"),sessionStorage.removeItem("userName")}},98307:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/user/PICE-AMS2-V4/app/admin/dashboard/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/user/PICE-AMS2-V4/app/admin/dashboard/page.tsx","default")},19611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>n});var s=r(62740);r(76301),r(23141);var a=r(56814);let n={title:"PICE BulSU-SC AMS",description:"Attendance Management System for PICE"},o=({children:e})=>(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[(0,s.jsx)("link",{rel:"icon",href:"/web/16.ico",sizes:"16x16"}),(0,s.jsx)("link",{rel:"icon",href:"/web/32.ico",sizes:"32x32"}),(0,s.jsx)("link",{rel:"icon",href:"/web/96.ico",sizes:"96x96"})]}),(0,s.jsxs)("body",{children:[e,(0,s.jsx)(a.Toaster,{position:"bottom-right"})," "]})]})},23141:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1,652,650],()=>r(11399));module.exports=s})();