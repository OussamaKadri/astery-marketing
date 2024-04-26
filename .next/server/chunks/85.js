exports.id=85,exports.ids=[85],exports.modules={5462:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},5494:()=>{},7445:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>v});class r{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},i=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async(e,t,s={})=>{let i=await fetch(a.origin+e,{method:"POST",headers:s,body:t}),l=await i.text(),o=new r(i.status,l);if(i.ok)return o;throw o},o=(e,t,s)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||"string"!=typeof s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},n=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},c=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new r(451,"Unavailable For Headless Browser"),m=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},h=e=>!e.list?.length||!e.watchVariable,u=(e,t)=>e instanceof FormData?e.get(t):e[t],p=(e,t)=>{if(h(e))return!1;m(e.list,e.watchVariable);let s=u(t,e.watchVariable);return"string"==typeof s&&e.list.includes(s)},b=()=>new r(403,"Forbidden"),f=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},x=async(e,t,s)=>{let r=Number(await s.get(e)||0);return t-Date.now()+r},g=async(e,t,s)=>{if(!t.throttle||!s)return!1;f(t.throttle,t.id);let r=t.id||e;return await x(r,t.throttle,s)>0||(await s.set(r,Date.now().toString()),!1)},w=()=>new r(429,"Too Many Requests"),y=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},j=e=>"string"==typeof e?document.querySelector(e):e,v={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let s=i(e);a.publicKey=s.publicKey,a.blockHeadless=s.blockHeadless,a.storageProvider=s.storageProvider,a.blockList=s.blockList,a.limitRate=s.limitRate,a.origin=s.origin||t},send:async(e,t,s,r)=>{let m=i(r),h=m.publicKey||a.publicKey,u=m.blockHeadless||a.blockHeadless,f=a.storageProvider||m.storageProvider,x={...a.blockList,...m.blockList},y={...a.limitRate,...m.limitRate};return u&&c(navigator)?Promise.reject(d()):(o(h,e,t),n(s),s&&p(x,s))?Promise.reject(b()):await g(location.pathname,y,f)?Promise.reject(w()):l("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:h,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})},sendForm:async(e,t,s,r)=>{let n=i(r),m=n.publicKey||a.publicKey,h=n.blockHeadless||a.blockHeadless,u=a.storageProvider||n.storageProvider,f={...a.blockList,...n.blockList},x={...a.limitRate,...n.limitRate};if(h&&c(navigator))return Promise.reject(d());let v=j(s);o(m,e,t),y(v);let N=new FormData(v);return p(f,N)?Promise.reject(b()):await g(location.pathname,x,u)?Promise.reject(w()):(N.append("lib_version","4.3.3"),N.append("service_id",e),N.append("template_id",t),N.append("user_id",m),l("/api/v1.0/email/send-form",N))},EmailJSResponseStatus:r}},434:(e,t,s)=>{"use strict";s.d(t,{default:()=>a.a});var r=s(9404),a=s.n(r)},831:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});var r=s(326),a=s(7577),i=s(434),l=s(7445),o=s(1562);let n=function(){let e=(0,a.useRef)(null),[t,s]=(0,a.useState)(!1);return(0,r.jsxs)("section",{className:" w-full h-full  flex flex-col items-center  ",id:"Contact",children:[(0,r.jsxs)("div",{className:" w-full h-[30%]  text-center pt-24 ",children:[r.jsx(o.E.h1,{className:" text-[40px] font-extrabold g text-slate-900 ",whileInView:{y:0,opacity:1},initial:{y:100,opacity:0},transition:{duration:.8},children:"ماذا تنتظر لتحقيق أهدافك ؟"}),r.jsx(o.E.p,{className:" IBM font-light text-slate-500 text-[15px] mb-8 ",whileInView:{y:0,opacity:1},initial:{y:100,opacity:0},transition:{duration:.8},children:"   تواصل معنا للحصول على أول إجتماع    "}),r.jsx(i.default,{href:"Lead_Magnet",className:" mt-8 bg-[#4b73f8] text-white px-6 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg IBM ",children:" للمزيد من المعلومات"})]}),(0,r.jsxs)("section",{className:" w-full h-[70%] bg-[#33363C] flex-col flex lg:flex-row lg:items-center  ",children:[r.jsx("form",{className:"  w-[90%] lg:w-[65%]  ",autoComplete:"off",ref:e,onSubmit:t=>{t.preventDefault(),l.ZP.sendForm("service_aym94ss","template_gn0vmss",e.current,{publicKey:"Xp5RYw49Whi7bcouW"}).then(()=>{s(!0)},e=>{console.log("FAILED...",e.text)})},children:r.jsx("div",{className:"flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0",children:r.jsx("div",{className:"w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0",children:(0,r.jsxs)("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[r.jsx("p",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl",children:"Get It Know"}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"الإسم الكامل"}),r.jsx("input",{placeholder:"الإسم الكامل",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5",type:"text",name:"Name"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"البريد الإلكتروني"}),r.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5",placeholder:"البريد الإلكتروني",type:"email",name:"email"})]}),(0,r.jsxs)("div",{className:" flex gap-3",children:[r.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5",placeholder:" رقم الهاتف",type:"number",name:"phone"}),r.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5",placeholder:" نوع الشركة ",type:"text",name:"buisniss"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"الرسالة أو نوع الخدمة"}),r.jsx("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5",placeholder:" الرسالة أو نوع الخدمة ",type:"text",name:"message"})]}),t?r.jsx(o.E.div,{className:" text-green-600 IBM text-[17px] ",animate:{x:0},initial:{x:-200},transition:{duration:1},children:" Sucsses ! "}):r.jsx("div",{}),r.jsx("button",{className:"w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white",type:"submit",children:"Send"})]})})})}),(0,r.jsxs)("section",{className:"lg:w-[30%] lg:h-[80%]  ",children:[(0,r.jsxs)("div",{className:" w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 ",children:[r.jsx(i.default,{href:"/",children:r.jsx("img",{src:"/whatsapp.png",alt:"whatsappa png",className:" w-4 lg:w-9 "})}),r.jsx(i.default,{href:"/",className:" IBM text-[#1f53ffea] hover:underline ",children:"Whatsapp"})]}),(0,r.jsxs)("div",{className:" w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 ",children:[r.jsx(i.default,{href:"/",children:r.jsx("img",{src:"/instagram.png",alt:"",className:" w-4 lg:w-9 "})}),r.jsx(i.default,{href:"/",className:" IBM text-[#1f53ffea]  hover:underline",children:"Instagram"})]}),(0,r.jsxs)("div",{className:" w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 ",children:[r.jsx(i.default,{href:"/",children:r.jsx("img",{src:"/twitter.png",alt:"",className:" w-4 lg:w-9 "})}),r.jsx(i.default,{href:"/",className:" IBM text-[#1f53ffea]  hover:underline",children:"Twitter"})]}),(0,r.jsxs)("div",{className:" w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 ",children:[r.jsx(i.default,{href:"/",children:r.jsx("img",{src:"/snapchat.png",alt:"",className:" w-4 lg:w-9 "})}),r.jsx(i.default,{href:"/",className:" IBM text-[#1f53ffea]  hover:underline ",children:"Snapchat"})]})]})]})]})}},8295:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>d});var r=s(9510),a=s(9082),i=s.n(a),l=s(3368),o=s.n(l),n=s(3693),c=s.n(n);s(5023);let d={title:"astery-marketing",description:"Generated by create next app"};function m({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:`${c().variable} ${i().variable} ${o().variable}`,children:e})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};