if(!self.define){let e,a={};const d=(d,c)=>(d=new URL(d+".js",c).href,a[d]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=a,document.head.appendChild(e)}else e=d,importScripts(d),a()})).then((()=>{let e=a[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let s={};const r=e=>d(e,f),b={module:{uri:f},exports:s,require:r};a[f]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(i(...e),s)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/binaries/stremio_core_web_bg.wasm",revision:"76d431bf69b2329efc5a4ae196a8c192"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/scripts/main.js",revision:"5a7bed174f943811498b7dc8e26c1610"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/scripts/worker.js",revision:"1b71e8a332cfc6e4fc334aa190b48a4c"},{url:"65edf59d1796a37a70a1bf9209823c4474a38e8c/styles/main.css",revision:"18e3edd8240b394e04de3a5d5579ba8f"},{url:"index.html",revision:"999aa9231e81ef283798eb21cd9eb373"}],{})}));
//# sourceMappingURL=service-worker.js.map
