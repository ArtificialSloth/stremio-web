if(!self.define){let c,e={};const d=(d,b)=>(d=new URL(d+".js",b).href,e[d]||new Promise((e=>{if("document"in self){const c=document.createElement("script");c.src=d,c.onload=e,document.head.appendChild(c)}else c=d,importScripts(d),e()})).then((()=>{let c=e[d];if(!c)throw new Error(`Module ${d} didn’t register its module`);return c})));self.define=(b,a)=>{const i=c||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const r=c=>d(c,i),f={module:{uri:i},exports:s,require:r};e[i]=Promise.all(b.map((c=>f[c]||r(c)))).then((c=>(a(...c),s)))}}define(["./workbox-ad8011fb"],(function(c){"use strict";self.skipWaiting(),c.clientsClaim(),c.precacheAndRoute([{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/binaries/stremio_core_web_bg.wasm",revision:"24041b0c451dacea6fa13eacdd9e21f6"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/scripts/main.js",revision:"dacb3f9fd340f5c602fe70c7242cfd2f"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/scripts/worker.js",revision:"86c87888327a9f668cac46fb1cfb8bbc"},{url:"18236ae7526816cda3bbb80c2e7b9d3cc4ddcf92/styles/main.css",revision:"136fa205ed72023f99bb41c15c723c81"},{url:"index.html",revision:"a99fa29dbcd86b0d98b405844b653a0b"}],{})}));
//# sourceMappingURL=service-worker.js.map
