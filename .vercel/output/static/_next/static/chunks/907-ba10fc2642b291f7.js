"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{86710:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(82800).A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},40767:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(82800).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},48173:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(39233),o=r(65843),i=r(94556);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let l=r(60306),a=r(95155),u=l._(r(12115)),s=r(70180),f=r(71394),c=r(64116),d=r(4445),p=r(45353),g=r(12170),h=r(49544);function m(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}r(42363);let b=u.default.forwardRef(function(e,t){let r,l;let{href:s,as:b,children:_,prefetch:v=null,passHref:w,replace:j,shallow:P,scroll:x,onClick:C,onMouseEnter:O,onTouchStart:S,legacyBehavior:E=!1}=e,M=i._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=_,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let k=u.default.useContext(f.AppRouterContext),I=!1!==v,z=null===v?d.PrefetchKind.AUTO:d.PrefetchKind.FULL,{href:R,as:A}=u.default.useMemo(()=>{let e=y(s);return{href:e,as:b?y(b):e}},[s,b]),T=u.default.useRef(R),N=u.default.useRef(A);E&&(l=u.default.Children.only(r));let U=E?l&&"object"==typeof l&&l.ref:t,[L,D,F]=(0,c.useIntersection)({rootMargin:"200px"}),B=u.default.useCallback(e=>{(N.current!==A||T.current!==R)&&(F(),N.current=A,T.current=R),L(e)},[A,R,F,L]),q=(0,p.useMergedRef)(B,U);u.default.useEffect(()=>{k&&D&&I&&m(k,R,{kind:z})},[A,R,D,I,k,z]);let W={ref:q,onClick(e){E||"function"!=typeof C||C(e),E&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,o,i,l){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),u.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,k,R,A,j,P,x)},onMouseEnter(e){E||"function"!=typeof O||O(e),E&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),k&&I&&m(k,R,{kind:z})},onTouchStart:function(e){E||"function"!=typeof S||S(e),E&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),k&&I&&m(k,R,{kind:z})}};return(0,g.isAbsoluteUrl)(A)?W.href=A:E&&!w&&("a"!==l.type||"href"in l.props)||(W.href=(0,h.addBasePath)(A)),E?u.default.cloneElement(l,W):(0,a.jsx)("a",o._(n._({},M,W),{children:r}))});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(39233),o=r(65843),i=r(94556);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return P}});let l=r(60306),a=r(29955),u=r(95155),s=a._(r(12115)),f=l._(r(47650)),c=l._(r(36107)),d=r(40666),p=r(41159),g=r(83621);r(42363);let h=r(63576),m=l._(r(65514)),y=r(45353),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function _(e,t,r,i,l,a,u){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,l=!1;r.current(o._(n._({},t),{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let w=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:l,sizes:a,height:f,width:c,decoding:d,className:p,style:g,fetchPriority:h,placeholder:m,loading:b,unoptimized:w,fill:j,onLoadRef:P,onLoadingCompleteRef:x,setBlurComplete:C,setShowAltText:O,sizesInput:S,onLoad:E,onError:M}=e,k=i._(e,["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"]),I=(0,s.useCallback)(e=>{e&&(M&&(e.src=e.src),e.complete&&_(e,m,P,x,C,w,S))},[r,m,P,x,C,M,w,S]),z=(0,y.useMergedRef)(t,I);return(0,u.jsx)("img",o._(n._({},k,v(h)),{loading:b,width:c,height:f,decoding:d,"data-nimg":j?"fill":"1",className:p,style:g,sizes:a,srcSet:l,src:r,ref:z,onLoad:e=>{_(e.currentTarget,m,P,x,C,w,S)},onError:e=>{O(!0),"empty"!==m&&C(!0),M&&M(e)}}))});function j(e){let{isAppRouter:t,imgAttributes:r}=e,o=n._({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},v(r.fetchPriority));return t&&f.default.preload?(f.default.preload(r.src,o),null):(0,u.jsx)(c.default,{children:(0,u.jsx)("link",n._({rel:"preload",href:r.srcSet?void 0:r.src},o),"__nimg-"+r.src+r.srcSet+r.sizes)})}let P=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(h.RouterContext),i=(0,s.useContext)(g.ImageConfigContext),l=(0,s.useMemo)(()=>{let e=b||i||p.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o._(n._({},e),{allSizes:t,deviceSizes:r})},[i]),{onLoad:a,onLoadingComplete:f}=e,c=(0,s.useRef)(a);(0,s.useEffect)(()=>{c.current=a},[a]);let y=(0,s.useRef)(f);(0,s.useEffect)(()=>{y.current=f},[f]);let[_,v]=(0,s.useState)(!1),[P,x]=(0,s.useState)(!1),{props:C,meta:O}=(0,d.getImgProps)(e,{defaultLoader:m.default,imgConf:l,blurComplete:_,showAltText:P});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,o._(n._({},C),{unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:c,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:x,sizesInput:e.sizes,ref:t})),O.priority?(0,u.jsx)(j,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},64116:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(12115),o=r(68571),i="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(12115);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=i(e,n),o.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(60306)._(r(12115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},40666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=r(39233),o=r(65843),i=r(94556);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return f}}),r(42363);let l=r(35859),a=r(41159);function u(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t){var r;let f,c,d,{src:p,sizes:g,unoptimized:h=!1,priority:m=!1,loading:y,className:b,quality:_,width:v,height:w,fill:j=!1,style:P,overrideSrc:x,onLoad:C,onLoadingComplete:O,placeholder:S="empty",blurDataURL:E,fetchPriority:M,decoding:k="async",layout:I,objectFit:z,objectPosition:R,lazyBoundary:A,lazyRoot:T}=e,N=i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","decoding","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]),{imgConf:U,showAltText:L,blurComplete:D,defaultLoader:F}=t,B=U||a.imageConfigDefault;if("allSizes"in B)f=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);f=o._(n._({},B),{allSizes:e,deviceSizes:t})}if(void 0===F)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let q=N.loader||F;delete N.loader,delete N.srcSet;let W="__next_img_default"in q;if(W){if("custom"===f.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r}=t;return e(i._(t,["config"]))}}if(I){"fill"===I&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(P=n._({},P,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!g&&(g=t)}let G="",K=s(v),V=s(w);if((r=p)&&"object"==typeof r&&(u(r)||void 0!==r.src)){let e=u(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,d=e.blurHeight,E=E||e.blurDataURL,G=e.src,!j){if(K||V){if(K&&!V){let t=K/e.width;V=Math.round(e.height*t)}else if(!K&&V){let t=V/e.height;K=Math.round(e.width*t)}}else K=e.width,V=e.height}}let H=!m&&("lazy"===y||void 0===y);(!(p="string"==typeof p?p:G)||p.startsWith("data:")||p.startsWith("blob:"))&&(h=!0,H=!1),f.unoptimized&&(h=!0),W&&!f.dangerouslyAllowSVG&&p.split("?",1)[0].endsWith(".svg")&&(h=!0);let J=s(_),Q=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:R}:{},L?{}:{color:"transparent"},P),X=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:K,heightInt:V,blurWidth:c,blurHeight:d,blurDataURL:E||"",objectFit:Q.objectFit})+'")':'url("'+S+'")',Z=X?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:u[f]})}}({config:f,src:p,unoptimized:h,width:K,quality:J,sizes:g,loader:q});return{props:o._(n._({},N),{loading:H?"lazy":y,fetchPriority:M,width:K,height:V,decoding:k,className:b,style:n._({},Q,Z),sizes:$.sizes,srcSet:$.srcSet,src:x||$.src}),meta:{unoptimized:h,priority:m,placeholder:S,fill:j}}}},36107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0});let o=r(39233);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return y},defaultHead:function(){return p}});let i=r(60306),l=r(29955),a=r(95155),u=l._(r(12115)),s=i._(r(31172)),f=r(53003),c=r(81147),d=r(675);function p(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function g(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(42363);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(g,[]).reverse().concat(p(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=o._({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:i})})}let y=function(e){let{children:t}=e,r=(0,u.useContext)(f.AmpStateContext),n=(0,u.useContext)(c.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},83621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(60306)._(r(12115)),o=r(41159),i=n.default.createContext(o.imageConfigDefault)},41159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},65514:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},63576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(60306)._(r(12115)).default.createContext(null)},70180:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let n=r(29955)._(r(54156)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",l=e.pathname||"",a=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let f=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return i(e)}},54156:(e,t)=>{function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},31172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(12115),o="undefined"==typeof window,i=o?()=>{}:n.useLayoutEffect,l=o?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}if(o){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},12170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return g},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return h},PageNotFoundError:function(){return m},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return _}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class h extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);