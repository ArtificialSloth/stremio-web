if(!self.define){let b,e={};const d=(d,c)=>(d=new URL(d+".js",c).href,e[d]||new Promise((e=>{if("document"in self){const b=document.createElement("script");b.src=d,b.onload=e,document.head.appendChild(b)}else b=d,importScripts(d),e()})).then((()=>{let b=e[d];if(!b)throw new Error(`Module ${d} didn’t register its module`);return b})));self.define=(c,a)=>{const f=b||("document"in self?document.currentScript.src:"")||location.href;if(e[f])return;let i={};const o=b=>d(b,f),r={module:{uri:f},exports:i,require:o};e[f]=Promise.all(c.map((b=>r[b]||o(b)))).then((b=>(a(...b),i)))}}define(["./workbox-ad8011fb"],(function(b){"use strict";self.skipWaiting(),b.clientsClaim(),b.precacheAndRoute([{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/binaries/stremio_core_web_bg.wasm",revision:"39a9a795140bd2a24e23361e6869ed87"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/favicons/favicon.ico",revision:"73f6cce044fafd48bf447d80487f5a63"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/favicons/icon-96.png",revision:"de1c79ffc899cb64fbaf6a6d17d364a5"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-BoldItalic.ttf",revision:"5b44818d2b9eda3e23cd5edd7b49b7d5"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-Light.ttf",revision:"88823c2015ffd5fa89d567e17297a137"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-LightItalic.ttf",revision:"a3ce4440f2abf76f4a1b14b83920138c"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-Medium.ttf",revision:"58aef543c97bbaf6a9896e8484456d98"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-MediumItalic.ttf",revision:"cf23e1bb619029496260760b72aebd30"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/fonts/Roboto-RegularItalic.ttf",revision:"a720f17aa773e493a7ebf8b08459e66c"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/anonymous.png",revision:"3c24e42de8822c3e2dc0c20a04cb18c2"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/default_avatar.png",revision:"e574e5a876fb07bb28b07dd60bd63429"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/empty.png",revision:"ff850d70fd43d29b6d8c7055f33d8dbb"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/icon_x192.png",revision:"f91415b051185986aedf4187c90ea6f7"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/icon_x512.png",revision:"5a446747b1843c1aac2c386b1005ab78"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/intro_background.jpg",revision:"96ccc21bab56c04153a6400842b8a9dd"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/maskable_icon_x192.png",revision:"73f3a1cb7aeabde43ba2ed935fde06b1"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/maskable_icon_x512.png",revision:"88f79bb79e6039edee6367ffa081aa06"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/images/stremio_symbol.png",revision:"9d75b8169c82b11f5399be4129e7757f"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/scripts/main.js",revision:"bcad76fd84566125667ddf37888eafe4"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/scripts/worker.js",revision:"4fa72e21cda875f5ee563db7f0b1b304"},{url:"3dbca6f8b389e552ecd6d82bb01b4160e90bd757/styles/main.css",revision:"bcf36d0b09f4b022d43ab7c77f89f0b6"},{url:"index.html",revision:"daca969708605b4ba432a6f2e8347082"}],{})}));
//# sourceMappingURL=service-worker.js.map
