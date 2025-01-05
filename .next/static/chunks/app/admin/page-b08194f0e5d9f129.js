(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{17493:(e,r,t)=>{Promise.resolve().then(t.bind(t,11420))},11420:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(39233),a=t(65843),n=t(95155),i=t(12115),d=t(76046),o=t(35007),l=t(14085),c=t(9955),u=t(15785);let m=(0,t(82800).A)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var f=t(30814),v=t(70001),p=t(39286),x=t(39677),g=t(36972),h=t(9133);function b(){let e=(0,h.VP)(),r=(0,d.useRouter)();(0,i.useEffect)(()=>{"authenticated"===e&&(f.o.success("Already logged in. Redirecting to dashboard."),r.push("/admin/dashboard"))},[e,r]);let[t,b]=(0,i.useState)({username:"",password:""}),[y,N]=(0,i.useState)(!1),[w,j]=(0,i.useState)(null),_=async e=>{e.preventDefault(),N(!0),j(null);try{let e=await fetch("https://admin.picebsc-dev.workers.dev/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),s=await e.json();e.ok&&s.success?(sessionStorage.setItem("userRole","admin"),sessionStorage.setItem("userName","Administrator"),f.o.success("Login successful"),r.push("/admin/dashboard")):(j(s.message||"Invalid credentials. Please try again."),f.o.error(s.message||"Invalid credentials"))}catch(e){j("An unexpected error occurred. Please try again later."),f.o.error("An unexpected error occurred.")}finally{N(!1)}};return(0,n.jsx)("div",{className:"min-h-screen bg-background flex items-center justify-center p-4",children:(0,n.jsx)(o.Zp,{className:"w-full max-w-md",children:(0,n.jsxs)(o.Wu,{className:"pt-6",children:[(0,n.jsxs)("div",{className:"text-center mb-6",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-primary",children:"PICE BulSU-SC"}),(0,n.jsx)("h2",{className:"text-lg text-muted-foreground",children:"Attendance Monitoring System"}),(0,n.jsx)(p.E,{variant:"outline",className:"text-yellow-500 border-yellow-500 mt-1 inline-block",children:"v0.1.0-beta"})]}),(0,n.jsxs)(x.Fc,{className:"mb-6",children:[(0,n.jsx)(g.A,{className:"h-4 w-4"}),(0,n.jsx)(x.XL,{children:"Important Note"}),(0,n.jsx)(x.TN,{children:"This page is exclusively for the PICE BulSU-SC Executive Officer and App Developer. Unauthorized access is prohibited."})]}),(0,n.jsxs)("form",{onSubmit:_,className:"space-y-4",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(u.J,{htmlFor:"username",children:"Username"}),(0,n.jsx)(c.p,{id:"username",type:"text",value:t.username,onChange:e=>b((0,a._)((0,s._)({},t),{username:e.target.value})),required:!0})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(u.J,{htmlFor:"password",children:"Password"}),(0,n.jsx)(c.p,{id:"password",type:"password",value:t.password,onChange:e=>b((0,a._)((0,s._)({},t),{password:e.target.value})),required:!0})]}),w&&(0,n.jsx)("p",{className:"text-sm text-red-500 mt-2 text-center",children:w}),(0,n.jsx)(l.$,{type:"submit",className:"w-full",disabled:y,children:y?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v.A,{className:"mr-2 h-4 w-4 animate-spin"})," Logging In"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{className:"mr-2 h-4 w-4"})," Login"]})})]})]})})})}},39677:(e,r,t)=>{"use strict";t.d(r,{Fc:()=>c,TN:()=>m,XL:()=>u});var s=t(39233),a=t(94556),n=t(95155),i=t(12115),d=t(31027),o=t(29602);let l=(0,d.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),c=i.forwardRef((e,r)=>{var{className:t,variant:i}=e,d=(0,a._)(e,["className","variant"]);return(0,n.jsx)("div",(0,s._)({ref:r,role:"alert",className:(0,o.cn)(l({variant:i}),t)},d))});c.displayName="Alert";let u=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("h5",(0,s._)({ref:r,className:(0,o.cn)("mb-1 font-medium leading-none tracking-tight",t)},i))});u.displayName="AlertTitle";let m=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,o.cn)("text-sm [&_p]:leading-relaxed",t)},i))});m.displayName="AlertDescription"},39286:(e,r,t)=>{"use strict";t.d(r,{E:()=>l});var s=t(39233),a=t(94556),n=t(95155);t(12115);var i=t(31027),d=t(29602);let o=(0,i.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){var{className:r,variant:t}=e,i=(0,a._)(e,["className","variant"]);return(0,n.jsx)("div",(0,s._)({className:(0,d.cn)(o({variant:t}),r)},i))}},14085:(e,r,t)=>{"use strict";t.d(r,{$:()=>u,r:()=>c});var s=t(39233),a=t(94556),n=t(95155),i=t(12115),d=t(12317),o=t(31027),l=t(29602);let c=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,r)=>{var{className:t,variant:i,size:o,asChild:u=!1}=e,m=(0,a._)(e,["className","variant","size","asChild"]);let f=u?d.DX:"button";return(0,n.jsx)(f,(0,s._)({className:(0,l.cn)(c({variant:i,size:o,className:t})),ref:r},m))});u.displayName="Button"},35007:(e,r,t)=>{"use strict";t.d(r,{Wu:()=>u,ZB:()=>c,Zp:()=>o,aR:()=>l});var s=t(39233),a=t(94556),n=t(95155),i=t(12115),d=t(29602);let o=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("rounded-xl border bg-card text-card-foreground shadow",t)},i))});o.displayName="Card";let l=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("flex flex-col space-y-1.5 p-6",t)},i))});l.displayName="CardHeader";let c=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("font-semibold leading-none tracking-tight",t)},i))});c.displayName="CardTitle",i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("text-sm text-muted-foreground",t)},i))}).displayName="CardDescription";let u=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("p-6 pt-0",t)},i))});u.displayName="CardContent",i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)("div",(0,s._)({ref:r,className:(0,d.cn)("flex items-center p-6 pt-0",t)},i))}).displayName="CardFooter"},9955:(e,r,t)=>{"use strict";t.d(r,{p:()=>o});var s=t(39233),a=t(94556),n=t(95155),i=t(12115),d=t(29602);let o=i.forwardRef((e,r)=>{var{className:t,type:i}=e,o=(0,a._)(e,["className","type"]);return(0,n.jsx)("input",(0,s._)({type:i,className:(0,d.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r},o))});o.displayName="Input"},15785:(e,r,t)=>{"use strict";t.d(r,{J:()=>u});var s=t(39233),a=t(94556),n=t(95155),i=t(12115),d=t(46195),o=t(31027),l=t(29602);let c=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=i.forwardRef((e,r)=>{var{className:t}=e,i=(0,a._)(e,["className"]);return(0,n.jsx)(d.b,(0,s._)({ref:r,className:(0,l.cn)(c(),t)},i))});u.displayName=d.b.displayName},29602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(43463),a=t(69795);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.QP)((0,s.$)(r))}},36972:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(82800).A)("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},70001:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});let s=(0,t(82800).A)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},76046:(e,r,t)=>{"use strict";var s=t(66658);t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},9133:(e,r,t)=>{"use strict";t.d(r,{VP:()=>a,ln:()=>n});var s=t(12115);function a(){let[e,r]=(0,s.useState)("pending");return(0,s.useEffect)(()=>{"admin"===sessionStorage.getItem("userRole")?r("authenticated"):r("unauthenticated")},[]),e}function n(){sessionStorage.removeItem("userRole"),sessionStorage.removeItem("userName")}},46195:(e,r,t)=>{"use strict";t.d(r,{b:()=>l});var s=t(39233),a=t(65843),n=t(12115),i=t(23360),d=t(95155),o=n.forwardRef((e,r)=>(0,d.jsx)(i.sG.label,(0,a._)((0,s._)({},e),{ref:r,onMouseDown:r=>{var t;r.target.closest("button, input, select, textarea")||(null===(t=e.onMouseDown)||void 0===t||t.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}})));o.displayName="Label";var l=o},23360:(e,r,t)=>{"use strict";t.d(r,{hO:()=>o,sG:()=>d});var s=t(12115),a=t(47650),n=t(12317),i=t(95155),d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=s.forwardRef((e,t)=>{let{asChild:s,...a}=e,d=s?n.DX:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(d,{...a,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function o(e,r){e&&a.flushSync(()=>e.dispatchEvent(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[524,814,441,517,358],()=>r(17493)),_N_E=e.O()}]);