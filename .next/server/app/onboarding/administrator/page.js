"use strict";(()=>{var e={};e.id=944,e.ids=[944],e.modules={10846:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{e.exports=require("path")},19899:(e,s,t)=>{t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=t(70260),n=t(28203),i=t(25155),l=t.n(i),r=t(67292),o={};for(let e in r)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>r[e]);t.d(s,o);let d=["",{children:["onboarding",{children:["administrator",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,61730)),"/home/user/PICE-AMS2-V4/app/onboarding/administrator/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,12065)),"/home/user/PICE-AMS2-V4/app/onboarding/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/home/user/PICE-AMS2-V4/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/user/PICE-AMS2-V4/app/onboarding/administrator/page.tsx"],h={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/onboarding/administrator/page",pathname:"/onboarding/administrator",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},61730:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var a=t(62740),n=t(19935),i=t(82533);let l=(0,t(28252).A)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function r(){return(0,a.jsxs)("div",{className:"space-y-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-3xl font-bold mb-4",children:"Administrator"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 max-w-2xl",children:"This section is for administrators who manage student data and attendance reports."})]}),(0,a.jsxs)(i.Fc,{className:"bg-blue-100",children:[(0,a.jsx)(l,{className:"h-4 w-4"}),(0,a.jsx)(i.XL,{children:"Note"}),(0,a.jsx)(i.TN,{className:"max-w-2xl",children:"This administrator page is not optimized for mobile use. Please use a desktop or laptop for the best experience."})]}),(0,a.jsxs)(n.Zp,{className:"shadow-md",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Accessing the Administrator Dashboard"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsxs)("p",{className:"max-w-2xl",children:[(0,a.jsx)("strong",{children:"Login:"})," Enter your username and password on the administrator login page to access the admin dashboard."]})})]}),(0,a.jsxs)(n.Zp,{className:"shadow-md",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Generate Batch QR Code"})}),(0,a.jsxs)(n.Wu,{className:"space-y-4",children:[(0,a.jsx)("p",{className:"max-w-2xl mb-4",children:"The Generate Batch QR Code feature enables you to create unique QR codes for each student in batches. This makes it easier for the students to check-in and out by using the QR Codes instead of manual tracking."}),(0,a.jsxs)("ol",{className:"list-decimal pl-5 space-y-2",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Initiate QR Code Generation"}),(0,a.jsx)("p",{className:"max-w-2xl",children:'Click the "Generate Batch QR Code" button to start the process.'})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Input Student Data"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"You can import student data via CSV file (using the template), or manually input the information using the provided fields. Make sure to follow the correct format."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Fill Student Information"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"Include all the necessary student data such as their name and section. Ensure that all the information is accurate."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Remove Student Data"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"If you want to remove a specific student from the list, just click the trashcan icon beside the student."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Remove All Student Data"}),(0,a.jsx)("p",{className:"max-w-2xl",children:'If you wish to clear all the student data, click the "Clear All" button. All students in the current list will be removed.'})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Summary"}),(0,a.jsx)("p",{className:"max-w-2xl",children:'Before generating the QR codes, review the "Summary" section. Here you will see a breakdown of student data by section. Make sure that the data is correct before proceeding.'})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Generate Codes"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"Once your student data is correct, click the “Generate QR Codes” button, and the system will produce a unique QR code for each student."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Download QR Codes"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"The system automatically downloads a single ZIP file once the QR code generation process is finished. This file contains a consolidation file with all student data that will serve as a database, as well as folders with the individual QR codes for each section."})]})]})]})]}),(0,a.jsxs)(n.Zp,{className:"shadow-md",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Consolidate Attendance Logs"})}),(0,a.jsxs)(n.Wu,{className:"space-y-4",children:[(0,a.jsx)("p",{className:"max-w-2xl mb-4",children:"The Consolidate Attendance Logs feature allows you to merge and analyze attendance data collected from various sources. This is useful for generating reports and getting insights into overall event attendance."}),(0,a.jsxs)("ol",{className:"list-decimal pl-5 space-y-2",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Select Consolidation File"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"The consolidation file is a CSV that contains the basic student information that will be used to match and consolidate attendance logs. Drag and drop or click to select your file."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Select Attendance Log Files"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"The tracker log files are individual CSV files generated by the tracker devices during each scanning session. Drag and drop or click to select the tracker log file(s) to merge and analyze."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Consolidate Files"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"Once your consolidation file and log files are selected, click on the “Consolidate Files” button. The system will merge all the data and output consolidated data."})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"View Event Overview"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"After consolidating the attendance logs, an overview will be displayed, showing a chart of the total students, total time-in, and total time-out for each section."}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"View Student List:"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"You can view the student details for that specific event (Name, section, time-in, and time-out)."})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Sort Attendance Data:"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"You can click on the headings to sort the data:"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-1",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"User ID:"})," Sort ascending or descending."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Name:"})," Sort alphabetically A-Z or Z-A."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Section:"})," Sort alphabetically A-Z or Z-A."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Time In:"})," Sort ascending or descending."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Time Out:"})," Sort ascending or descending."]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Search Function:"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"Use the search bar to search for specific attendees by name or section."})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Highlight Tool:"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"You can highlight the status of the student by using the drop down of Highlight Tool"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-1",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Time In Only:"})," Highlight student who only has a time in."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Time Out Only:"})," Highlight student who only has a time out."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Didn't Attend:"})," Highlight student who doesn't have a time in and a time out."]})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h3",{className:"font-semibold mb-2",children:"Filter Attendance Records:"}),(0,a.jsx)("p",{className:"max-w-2xl",children:"You can filter the students to appear in the list using the Filter Attendance Records option."}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-1",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Section:"})," You can filter base on the section."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Time Status:"})," You can filter if the student has a time in or a time out or doesn't attend the event."]})]})]}),(0,a.jsxs)("p",{className:"max-w-2xl",children:[(0,a.jsx)("strong",{children:"Reset Filters:"})," Reset the applied filter."]})]})]})]}),(0,a.jsxs)(n.Zp,{className:"shadow-md",children:[(0,a.jsx)(n.aR,{children:(0,a.jsx)(n.ZB,{children:"Sign Out"})}),(0,a.jsx)(n.Wu,{children:(0,a.jsx)("p",{className:"max-w-2xl",children:'Click on the "Sign Out" button when done using the system to go back to the admin login screen.'})})]})]})}}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[1,652,650,735,508],()=>t(19899));module.exports=a})();