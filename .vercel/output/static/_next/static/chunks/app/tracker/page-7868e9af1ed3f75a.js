(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{50477:()=>{},82097:(e,t,a)=>{Promise.resolve().then(a.bind(a,80312))},80312:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var r=a(39233),s=a(65843),n=a(95155),o=a(12115),l=a(76046),c=a(5609),i=a(14085),d=a(35007),u=a(94556),m=a(12413),f=a(29602);let x=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,u._)(e,["className"]);return(0,n.jsx)(m.bL,(0,s._)((0,r._)({className:(0,f.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a)},o),{ref:t,children:(0,n.jsx)(m.zi,{className:(0,f.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})}))});x.displayName=m.bL.displayName;var h=a(15785),g=a(30814),p=a(70001),v=a(77568),N=a(66889),j=a(81190),y=a(39286),b=a(8690);let w=(0,o.forwardRef)((e,t)=>{let{eventId:a,onScanSuccess:r}=e,[s,l]=(0,o.useState)(!1),[u,m]=(0,o.useState)(null),[f,w]=(0,o.useState)(!0),[S,k]=(0,o.useState)(!1),_=(0,o.useRef)(null),[R,C]=(0,o.useState)(null),E=(0,o.useCallback)(()=>{new Audio("/error.mp3").play().catch(console.error)},[]);(0,o.useEffect)(()=>{(async()=>{try{var e;await (0,b.Xv)();let t=await (0,b.i7)("trackerInfo"),a=null===(e=t.find(e=>"timeStatus"===e.id))||void 0===e?void 0:e.timeStatus;w("in"===a||void 0===a)}catch(e){console.error("Error loading time status from IndexedDB:",e),g.o.error("Error loading previous Time Status.")}finally{k(!0)}})()},[]),(0,o.useEffect)(()=>{(async()=>{try{let e=await c.A.hasCamera();m(e)}catch(e){console.error("Error checking for camera:",e),m(!1)}})()},[]),(0,o.useEffect)(()=>()=>{R&&R.destroy()},[R]);let I=(0,o.useCallback)(async()=>{try{if(!_.current)return;let e=new c.A(_.current,e=>{"object"==typeof e&&e.data?(console.log("QR Code detected:",e.data),r({code:e.data,type:f?"in":"out"})):(E(),g.o.error("Error processing QR code"))},{highlightScanRegion:!0,highlightCodeOutline:!0,maxScansPerSecond:1});C(e),l(!0)}catch(e){g.o.error("Failed to start scanner. Please check camera permissions."),console.error("Failed to start scanner:",e)}},[_,r,E,f]),D=(0,o.useCallback)(()=>{R&&(R.stop(),l(!1))},[R]);return((0,o.useEffect)(()=>{R&&s&&u?R.start().catch(e=>{console.error("Failed to start scanner:",e),g.o.error("Failed to start scanner. Please check camera permissions."),l(!1)}):null==R||R.stop()},[R,s,u]),(0,o.useEffect)(()=>{let e=()=>{document.hidden?D():s&&I()};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},[s,I,D]),(0,o.useEffect)(()=>{let e=async()=>{try{await (0,b.Xv)(),await (0,b.B5)("trackerInfo",{id:"timeStatus",timeStatus:f?"in":"out"})}catch(e){console.error("Error saving time status to IndexedDB:",e),g.o.error("Error saving Time Status.")}};S&&e()},[f,S]),(0,o.useImperativeHandle)(t,()=>({startScanning:I,stopScanning:D})),S)?!0!==u?(0,n.jsx)(d.Zp,{children:(0,n.jsx)(d.Wu,{className:"p-6 text-center",children:null===u?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.A,{className:"h-8 w-8 animate-spin text-primary"}),(0,n.jsx)("p",{className:"mt-2 text-sm text-muted-foreground",children:"Checking camera availability..."})]}):(0,n.jsx)("p",{className:"text-muted-foreground",children:"Please ensure you have a working camera and have granted camera permissions to use the QR scanner."})})}):(0,n.jsxs)(d.Zp,{className:"overflow-hidden",children:[(0,n.jsx)(d.aR,{className:"space-y-1",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)(d.ZB,{className:"flex items-center gap-2",children:[(0,n.jsx)(v.A,{className:"h-5 w-5"}),"QR Code Scanner"]}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(N.A,{className:"h-4 w-4 text-muted-foreground"}),(0,n.jsx)(x,{id:"time-toggle",checked:f,onCheckedChange:()=>{if(s){g.o.info("Please stop scanning to change Time Status.");return}w(!f)},disabled:s}),(0,n.jsx)(h.J,{htmlFor:"time-toggle",className:"text-sm",children:f?"Time In":"Time Out"})]})]})}),(0,n.jsx)(d.Wu,{children:(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"relative aspect-square max-w-sm mx-auto overflow-hidden rounded-lg border-2",children:[(0,n.jsxs)("div",{className:"absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full border-2 border-dashed transition-opacity ".concat(s?"opacity-0 pointer-events-none":"opacity-100"),children:[(0,n.jsx)(j.A,{className:"h-12 w-12 text-muted-foreground mb-4"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground text-center px-4",children:"Position the QR code within the frame to scan"})]}),(0,n.jsx)("video",{ref:_,className:"".concat(s?"opacity-100":"opacity-0 pointer-events-none"," absolute top-0 left-0 w-full h-full object-cover transition-opacity"),playsInline:!0})]}),(0,n.jsx)("div",{className:"flex items-center gap-4 mt-4",children:(0,n.jsx)(i.$,{onClick:s?D:I,className:"w-full",variant:s?"secondary":"default",disabled:!S||!0!==u,children:s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.A,{className:"mr-2 h-4 w-4 animate-spin"}),"Stop Scanning"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.A,{className:"mr-2 h-4 w-4"}),"Start Scanning"]})})}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(y.E,{variant:s?"default":"secondary",children:s?"Scanner Active":"Scanner Inactive"}),(0,n.jsx)(y.E,{variant:f?"default":"secondary",children:f?"Time In Mode":"Time Out Mode"})]})]})})]}):null});w.displayName="QRScanner";var S=a(11864),k=a(66261),_=a(98435),R=a(44857),C=a(9955),E=a(32341);let I=o.forwardRef((e,t)=>{var{className:a,children:o}=e,l=(0,u._)(e,["className","children"]);return(0,n.jsxs)(E.bL,(0,s._)((0,r._)({ref:t,className:(0,f.cn)("relative overflow-hidden",a)},l),{children:[(0,n.jsx)(E.LM,{className:"h-full w-full rounded-[inherit]",children:o}),(0,n.jsx)(D,{}),(0,n.jsx)(E.OK,{})]}))});I.displayName=E.bL.displayName;let D=o.forwardRef((e,t)=>{var{className:a,orientation:o="vertical"}=e,l=(0,u._)(e,["className","orientation"]);return(0,n.jsx)(E.VM,(0,s._)((0,r._)({ref:t,orientation:o,className:(0,f.cn)("flex touch-none select-none transition-colors","vertical"===o&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===o&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a)},l),{children:(0,n.jsx)(E.lr,{className:"relative flex-1 rounded-full bg-border"})}))});D.displayName=E.VM.displayName;var B=a(44009);let A=e=>{let{attendanceRecords:t}=e,[a,r]=(0,o.useState)([]),[s,l]=(0,o.useState)(null),[c,d]=(0,o.useState)(null),[u,m]=(0,o.useState)("name"),[f,x]=(0,o.useState)("asc"),[h,p]=(0,o.useState)(""),v=(0,B.Ub)("(max-width: 768px)");(0,o.useEffect)(()=>{(async()=>{try{var e,t;await (0,b.Xv)();let a=await (0,b.i7)("attendance");r(a);let s=(await (0,b.i7)("trackerInfo")).find(e=>"trackerInfo"===e.id);l(null!==(e=null==s?void 0:s.trackerName)&&void 0!==e?e:null),d(null!==(t=null==s?void 0:s.trackerSection)&&void 0!==t?t:null),console.log("useEffect - Fetched tracker info:",{trackerName:null==s?void 0:s.trackerName,trackerSection:null==s?void 0:s.trackerSection})}catch(e){console.error("Error fetching attendance records:",e)}})()},[]);let N=(0,o.useMemo)(()=>(e,t,a)=>e&&t?[...e].sort((e,r)=>{let s=e[t]||"",n=r[t]||"";return s<n?"asc"===a?-1:1:s>n?"asc"===a?1:-1:0}):[],[]),j=e=>{let t;t=u===e&&"asc"===f?"desc":"asc",m(e),x(t)},y=(0,o.useMemo)(()=>N(a,u,f),[a,u,f,N]),w=(0,o.useMemo)(()=>(null==a?void 0:a.filter(e=>e.timeIn).length)||0,[a]),E=(0,o.useMemo)(()=>(null==a?void 0:a.filter(e=>e.timeOut).length)||0,[a]),D=async()=>{if(!a||0===a.length){g.o.error("No attendance records to download.");return}g.o.loading("Generating CSV...",{id:"csv-download"});let e=a.map(e=>{let t=e.timeIn?new Date(e.timeIn).toLocaleString().replace(","," |"):"null",a=e.timeOut?new Date(e.timeOut).toLocaleString().replace(","," |"):"null";return"".concat(e.id,",").concat(e.userID,",").concat(e.name,",").concat(e.section,",").concat(t,",").concat(a,",")}).join("\n"),t=new Blob(["".concat("id,User ID,Name,Section,timeIn,timeOut,validator.piceamslogs","\n").concat(e)],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r;let o="".concat(c||"Records"," - ").concat(s||"Attendance",".csv");n.download=o,console.log("generateCSV - File name:",o),document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r),g.o.success("CSV generated successfully!",{id:"csv-download"})};return(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)(C.p,{type:"text",placeholder:"Search by Name or Section",value:h,onChange:e=>p(e.target.value)}),(0,n.jsx)(I,{className:"w-full",children:(0,n.jsxs)("table",{className:"table-auto w-full text-sm ".concat(v?"min-w-[600px]":""),children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"text-left",children:(0,n.jsxs)(i.$,{variant:"link",className:"flex items-center",onClick:()=>j("name"),children:["Name","name"===u?"asc"===f?(0,n.jsx)(S.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(k.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(_.A,{className:"ml-1 h-4 w-4"})]})}),(0,n.jsx)("th",{className:"text-left",children:(0,n.jsxs)(i.$,{variant:"link",className:"flex items-center",onClick:()=>j("section"),children:["Section","section"===u?"asc"===f?(0,n.jsx)(S.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(k.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(_.A,{className:"ml-1 h-4 w-4"})]})}),(0,n.jsx)("th",{className:"text-left",children:(0,n.jsxs)(i.$,{variant:"link",className:"flex items-center",onClick:()=>j("timeIn"),children:["Time In (",w,")","timeIn"===u?"asc"===f?(0,n.jsx)(S.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(k.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(_.A,{className:"ml-1 h-4 w-4"})]})}),(0,n.jsx)("th",{className:"text-left",children:(0,n.jsxs)(i.$,{variant:"link",className:"flex items-center",onClick:()=>j("timeOut"),children:["Time Out (",E,")","timeOut"===u?"asc"===f?(0,n.jsx)(S.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(k.A,{className:"ml-1 h-4 w-4"}):(0,n.jsx)(_.A,{className:"ml-1 h-4 w-4"})]})})]})}),(0,n.jsx)("tbody",{children:0===(a?a.filter(e=>!!e&&!!e.name&&!!e.section&&(e.name.toLowerCase().includes(h.toLowerCase())||e.section.toLowerCase().includes(h.toLowerCase()))):[]).length?(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:4,className:"text-center py-4 text-muted-foreground",children:"No records found"})}):y.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{children:e.section}),(0,n.jsx)("td",{children:e.timeIn}),(0,n.jsx)("td",{children:e.timeOut})]},e.id))})]})}),(0,n.jsx)("div",{className:"mt-4 flex justify-end space-x-2",children:(0,n.jsxs)(i.$,{variant:"outline",onClick:D,disabled:!a||0===a.length,children:[(0,n.jsx)(R.A,{className:"h-4 w-4 mr-2"}),"Download CSV"]})})]})};var O=a(31641),L=a(65236),F=a(7478),P=a.n(F),z=a(25858);let M=()=>{let[e,t]=(0,o.useState)(null),[a,r]=(0,o.useState)(!1),s=(0,o.useCallback)(async()=>{try{let e=0;for(let a of(await indexedDB.databases())){let r=a.name;if(r){let a=indexedDB.open(r);a.onsuccess=a=>{let r=a.target.result,s=r.transaction(r.objectStoreNames,"readonly");for(let a of r.objectStoreNames){let r=s.objectStore(a);r.getAllKeys().onsuccess=a=>{a.target.result.forEach(a=>{r.get(a).onsuccess=a=>{let r=a.target.result;r&&(e+=JSON.stringify(r).length,t(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!e)return"0 Bytes";let a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(t<0?0:t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}(e)))}})}}},a.onerror=e=>{console.error("Error opening database for storage calculation",e)}}}}catch(e){console.error("Error calculating storage size:",e),t(null)}},[]);return(0,o.useEffect)(()=>{r(!0)},[]),(0,o.useEffect)(()=>{if(!a)return;s();let e=()=>{s()};return window.addEventListener("message",t=>{t.data&&"indexedDB_change"===t.data.type&&e()}),()=>{window.removeEventListener("message",t=>{t.data&&"indexedDB_change"===t.data.type&&e()})}},[a,s]),(0,n.jsxs)("div",{className:"fixed bottom-0 left-0 p-2 bg-gray-700 text-white text-xs z-50",children:["Storage Used: ",e||"Loading..."]})};function T(){let e=(0,l.useRouter)(),t=(0,l.usePathname)(),[a,c]=(0,o.useState)(!1),[u,m]=(0,o.useState)([]),[f,x]=(0,o.useState)([]),[h,v]=(0,o.useState)("attendance"),[N,j]=(0,o.useState)(!1),[y,S]=(0,o.useState)(null),[k,_]=(0,o.useState)(null),[R,C]=(0,o.useState)(null),E=(0,o.useRef)(null),[I,D]=(0,o.useState)(!0),[B,F]=(0,o.useState)(!1),T=(0,o.useCallback)(()=>{new Audio("/success.mp3").play().catch(console.error)},[]),U=(0,o.useCallback)(()=>{new Audio("/error.mp3").play().catch(console.error)},[]);(0,o.useEffect)(()=>{j(!0)},[]),(0,o.useEffect)(()=>{N&&(async()=>{D(!0);try{await (0,b.Xv)();let t=(await (0,b.i7)("trackerInfo")).find(e=>"trackerInfo"===e.id);if(!t){console.error("No tracker info found. Redirecting to /"),g.o.error("No tracker info found. Redirecting to registration page."),e.push("/");return}S(t.trackerName),_(t.trackerSection),C(t.eventName);let a=await (0,b.i7)("scans");a&&m(a);let r=await (0,b.i7)("attendance");r&&x(r)}catch(e){console.error("Error loading data from IndexedDB:",e),g.o.error("Error loading data.")}finally{D(!1)}})()},[N,e]);let Z=async()=>{F(!0),g.o.loading("Signing out...",{id:"logout"});try{await (0,b.Hg)(),g.o.success("Successfully Signed Out",{id:"logout"}),e.push("/")}catch(e){console.error("Error clearing IndexedDB data:",e),g.o.error("Error logging out",{id:"logout"})}finally{F(!1)}},V=async e=>{try{let t=function(e){try{let t=P().AES.decrypt(e,"pice-bulsu-ams").toString(P().enc.Utf8);return JSON.parse(t)}catch(e){return console.error("Failed to decrypt hash:",e),null}}(e.code);if(!t){g.o.error("Invalid QR code"),U();return}let a={id:Date.now().toString(),userID:t.userID,name:t.name,section:t.section,timestamp:new Date().toLocaleString(),type:e.type};m(e=>[a,...e].slice(0,5)),await (0,b.B5)("scans",a);let n="".concat(t.userID,"-").concat(new Date().toLocaleDateString()),o=f.find(e=>e.id===n);if(o){let t=(0,s._)((0,r._)({},o),{["in"===e.type?"timeIn":"timeOut"]:a.timestamp});x(e=>e.map(e=>e.id===n?t:e)),await (0,b.B5)("attendance",t)}else{let r={id:n,userID:t.userID,name:t.name,section:t.section,["in"===e.type?"timeIn":"timeOut"]:a.timestamp};x(e=>[...e,r]),await (0,b.B5)("attendance",r)}T(),g.o.success("Successfully scanned: ".concat(t.name))}catch(e){console.error("Error processing QR code:",e),g.o.error("Error processing QR code"),U()}};return((0,o.useEffect)(()=>{"attendance"===h&&E.current?E.current.startScanning():"attendance"!==h&&E.current&&E.current.stopScanning()},[h,E]),N&&y&&k&&R&&!I)?(0,n.jsxs)("div",{className:"container mx-auto p-4 space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-2xl font-bold",children:R}),(0,n.jsxs)("p",{className:"text-muted-foreground",children:["Tracker: ",y]}),(0,n.jsxs)("p",{className:"text-muted-foreground",children:["Section: ",k]})]}),(0,n.jsx)(i.$,{variant:"outline",onClick:()=>c(!0),disabled:B,children:B?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.A,{className:"h-4 w-4 mr-2 animate-spin"}),"Signing Out..."]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L.A,{className:"h-4 w-4 mr-2"}),"Sign Out"]})})]}),(0,n.jsxs)(O.tU,{defaultValue:"attendance",onValueChange:e=>{v(e),"attendance"===e&&E.current?E.current.startScanning():"attendance"!==e&&E.current&&E.current.stopScanning()},children:[(0,n.jsxs)(O.j7,{className:"grid w-full grid-cols-2",children:[(0,n.jsx)(O.Xi,{value:"attendance",children:"Take Attendance"}),(0,n.jsx)(O.Xi,{value:"records",children:"Attendance Records"})]}),(0,n.jsx)(O.av,{value:"attendance",children:(0,n.jsxs)("div",{className:"grid gap-4 md:grid-cols-2",children:[(0,n.jsx)("div",{className:"space-y-4",children:(0,n.jsx)(w,{ref:E,eventId:"current-event",onScanSuccess:V})}),(0,n.jsxs)(d.Zp,{children:[(0,n.jsx)(d.aR,{children:(0,n.jsx)(d.ZB,{children:"Recent Scans"})}),(0,n.jsx)(d.Wu,{children:(0,n.jsxs)("div",{className:"space-y-4",children:[u.map(e=>(0,n.jsxs)("div",{className:"flex items-center justify-between p-3 border rounded-lg",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-medium",children:e.name}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:e.section})]}),(0,n.jsxs)("div",{className:"text-right",children:[(0,n.jsxs)("span",{className:"inline-flex items-center rounded-full px-2 py-1 text-xs ".concat("in"===e.type?"bg-green-500/10 text-green-500":"bg-blue-500/10 text-blue-500"),children:["Time ","in"===e.type?"In":"Out"]}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground mt-1",children:e.timestamp})]})]},e.id)),0===u.length&&(0,n.jsx)("div",{className:"text-center text-muted-foreground",children:"No recent scans"})]})})]})]})}),(0,n.jsx)(O.av,{value:"records",children:(0,n.jsx)(A,{attendanceRecords:f})})]}),(0,n.jsx)(z.Lt,{open:a,onOpenChange:c,children:(0,n.jsxs)(z.EO,{children:[(0,n.jsxs)(z.wd,{children:[(0,n.jsx)(z.r7,{children:"Are you sure you want to log out?"}),(0,n.jsx)(z.$v,{children:"You will be logged out of this session."})]}),(0,n.jsx)(z.Rx,{onClick:Z,children:"Log out"}),(0,n.jsx)(z.Zr,{children:"Cancel"})]})}),"/tracker"===t&&(0,n.jsx)(M,{})]}):null}},25858:(e,t,a)=>{"use strict";a.d(t,{$v:()=>p,EO:()=>x,Lt:()=>u,Rx:()=>v,Zr:()=>N,r7:()=>g,wd:()=>h});var r=a(39233),s=a(65843),n=a(94556),o=a(95155),l=a(12115),c=a(83572),i=a(29602),d=a(14085);let u=c.bL;c.l9;let m=c.ZL,f=l.forwardRef((e,t)=>{var{className:a}=e,l=(0,n._)(e,["className"]);return(0,o.jsx)(c.hJ,(0,s._)((0,r._)({className:(0,i.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a)},l),{ref:t}))});f.displayName=c.hJ.displayName;let x=l.forwardRef((e,t)=>{var{className:a}=e,s=(0,n._)(e,["className"]);return(0,o.jsxs)(m,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(c.UC,(0,r._)({ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a)},s))]})});x.displayName=c.UC.displayName;let h=e=>{var{className:t}=e,a=(0,n._)(e,["className"]);return(0,o.jsx)("div",(0,r._)({className:(0,i.cn)("flex flex-col space-y-2 text-center sm:text-left",t)},a))};h.displayName="AlertDialogHeader";let g=l.forwardRef((e,t)=>{var{className:a}=e,s=(0,n._)(e,["className"]);return(0,o.jsx)(c.hE,(0,r._)({ref:t,className:(0,i.cn)("text-lg font-semibold",a)},s))});g.displayName=c.hE.displayName;let p=l.forwardRef((e,t)=>{var{className:a}=e,s=(0,n._)(e,["className"]);return(0,o.jsx)(c.VY,(0,r._)({ref:t,className:(0,i.cn)("text-sm text-muted-foreground",a)},s))});p.displayName=c.VY.displayName;let v=l.forwardRef((e,t)=>{var{className:a}=e,s=(0,n._)(e,["className"]);return(0,o.jsx)(c.rc,(0,r._)({ref:t,className:(0,i.cn)((0,d.r)(),a)},s))});v.displayName=c.rc.displayName;let N=l.forwardRef((e,t)=>{var{className:a}=e,s=(0,n._)(e,["className"]);return(0,o.jsx)(c.ZD,(0,r._)({ref:t,className:(0,i.cn)((0,d.r)({variant:"outline"}),"mt-2 sm:mt-0",a)},s))});N.displayName=c.ZD.displayName},39286:(e,t,a)=>{"use strict";a.d(t,{E:()=>i});var r=a(39233),s=a(94556),n=a(95155);a(12115);var o=a(31027),l=a(29602);let c=(0,o.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){var{className:t,variant:a}=e,o=(0,s._)(e,["className","variant"]);return(0,n.jsx)("div",(0,r._)({className:(0,l.cn)(c({variant:a}),t)},o))}},14085:(e,t,a)=>{"use strict";a.d(t,{$:()=>u,r:()=>d});var r=a(39233),s=a(94556),n=a(95155),o=a(12115),l=a(12317),c=a(31027),i=a(29602);let d=(0,c.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=o.forwardRef((e,t)=>{var{className:a,variant:o,size:c,asChild:u=!1}=e,m=(0,s._)(e,["className","variant","size","asChild"]);let f=u?l.DX:"button";return(0,n.jsx)(f,(0,r._)({className:(0,i.cn)(d({variant:o,size:c,className:a})),ref:t},m))});u.displayName="Button"},35007:(e,t,a)=>{"use strict";a.d(t,{Wu:()=>u,ZB:()=>d,Zp:()=>c,aR:()=>i});var r=a(39233),s=a(94556),n=a(95155),o=a(12115),l=a(29602);let c=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",a)},o))});c.displayName="Card";let i=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",a)},o))});i.displayName="CardHeader";let d=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",a)},o))});d.displayName="CardTitle",o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("text-sm text-muted-foreground",a)},o))}).displayName="CardDescription";let u=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("p-6 pt-0",a)},o))});u.displayName="CardContent",o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)("div",(0,r._)({ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",a)},o))}).displayName="CardFooter"},9955:(e,t,a)=>{"use strict";a.d(t,{p:()=>c});var r=a(39233),s=a(94556),n=a(95155),o=a(12115),l=a(29602);let c=o.forwardRef((e,t)=>{var{className:a,type:o}=e,c=(0,s._)(e,["className","type"]);return(0,n.jsx)("input",(0,r._)({type:o,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t},c))});c.displayName="Input"},15785:(e,t,a)=>{"use strict";a.d(t,{J:()=>u});var r=a(39233),s=a(94556),n=a(95155),o=a(12115),l=a(46195),c=a(31027),i=a(29602);let d=(0,c.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)(l.b,(0,r._)({ref:t,className:(0,i.cn)(d(),a)},o))});u.displayName=l.b.displayName},31641:(e,t,a)=>{"use strict";a.d(t,{Xi:()=>u,av:()=>m,j7:()=>d,tU:()=>i});var r=a(39233),s=a(94556),n=a(95155),o=a(12115),l=a(22596),c=a(29602);let i=l.bL,d=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)(l.B8,(0,r._)({ref:t,className:(0,c.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",a)},o))});d.displayName=l.B8.displayName;let u=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)(l.l9,(0,r._)({ref:t,className:(0,c.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",a)},o))});u.displayName=l.l9.displayName;let m=o.forwardRef((e,t)=>{var{className:a}=e,o=(0,s._)(e,["className"]);return(0,n.jsx)(l.UC,(0,r._)({ref:t,className:(0,c.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a)},o))});m.displayName=l.UC.displayName},29602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>n});var r=a(43463),s=a(69795);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,r.$)(t))}},8690:(e,t,a)=>{"use strict";a.d(t,{B5:()=>o,Hg:()=>c,Xv:()=>n,i7:()=>l});let r="attendance_tracker_db",s=null;async function n(){return new Promise((e,t)=>{if(s){e();return}let a=indexedDB.open(r,1);a.onerror=e=>{console.error("IndexedDB error:",e),t("Failed to open IndexedDB")},a.onupgradeneeded=e=>{let t=e.target.result;t.objectStoreNames.contains("trackerInfo")||t.createObjectStore("trackerInfo",{keyPath:"id"}),t.objectStoreNames.contains("scans")||t.createObjectStore("scans",{keyPath:"id"}),t.objectStoreNames.contains("attendance")||t.createObjectStore("attendance",{keyPath:"id"})},a.onsuccess=t=>{s=t.target.result,console.log("IndexedDB initialized successfully"),e()}})}async function o(e,t){return new Promise((a,r)=>{if(!s){r("Database not initialized");return}let n=s.transaction(e,"readwrite").objectStore(e);t.id||(t.id=Date.now().toString());let o=n.put(t);o.onsuccess=()=>{console.log("Data successfully added to IndexedDB:",t),window.postMessage({type:"indexedDB_change"},window.location.origin),a()},o.onerror=t=>{console.error("Error adding item to ".concat(e,":"),t),r("Failed to add item to ".concat(e))}})}async function l(e){return new Promise((t,a)=>{if(!s){a("Database not initialized");return}let r=s.transaction(e,"readonly").objectStore(e).getAll();r.onsuccess=e=>{t(e.target.result)},r.onerror=t=>{console.error("Error getting items from ".concat(e,":"),t),a("Failed to get items from ".concat(e))}})}async function c(){return new Promise((e,t)=>{if(!s){t("Database not initialized");return}s.close();let a=indexedDB.deleteDatabase(r);a.onsuccess=()=>{s=null,e()},a.onerror=e=>{console.error("Error deleting database:",e),t("Failed to delete database")}})}}},e=>{var t=t=>e(e.s=t);e.O(0,[524,814,417,842,725,666,441,517,358],()=>t(82097)),_N_E=e.O()}]);