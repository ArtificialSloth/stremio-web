if(!self.define){let b,f={};const e=(e,c)=>(e=new URL(e+".js",c).href,f[e]||new Promise((f=>{if("document"in self){const b=document.createElement("script");b.src=e,b.onload=f,document.head.appendChild(b)}else b=e,importScripts(e),f()})).then((()=>{let b=f[e];if(!b)throw new Error(`Module ${e} didn’t register its module`);return b})));self.define=(c,a)=>{const i=b||("document"in self?document.currentScript.src:"")||location.href;if(f[i])return;let d={};const s=b=>e(b,i),r={module:{uri:i},exports:d,require:s};f[i]=Promise.all(c.map((b=>r[b]||s(b)))).then((b=>(a(...b),d)))}}define(["./workbox-ad8011fb"],(function(b){"use strict";self.skipWaiting(),b.clientsClaim(),b.precacheAndRoute([{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/binaries/stremio_core_web_bg.wasm",revision:"9e5bf57d798a0b58e4edbceccfaf21bc"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/scripts/main.js",revision:"cb421db3674ac54c5e0f5b5e64337314"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/scripts/worker.js",revision:"ff1593b53358ba142fb484fd4bbfad4a"},{url:"244fb8bf1b3886af81c1859d2ac0706b086c742f/styles/main.css",revision:"6a0c9bae0d9d6156f2fa6ad831526a3e"},{url:"index.html",revision:"27821cc655e86ed8e9c20c0bc02ad1c4"}],{})}));
//# sourceMappingURL=service-worker.js.map