if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const l=e=>i(e,r),o={module:{uri:r},exports:c,require:l};s[r]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(a(...e),c)))}}define(["./workbox-d77e59e2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"af0d6febd3c21019d63628e5379b4c4b"},{url:"assets/css/styles.31bddd9a.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/506.fc60f840.js",revision:null},{url:"assets/js/532.7e2f95d2.js",revision:null},{url:"assets/js/545.a290096d.js",revision:null},{url:"assets/js/692.c77ca9e8.js",revision:null},{url:"assets/js/705.1a27cd4d.js",revision:null},{url:"assets/js/77.a50b6287.js",revision:null},{url:"assets/js/app.c9cdc261.js",revision:null},{url:"assets/js/runtime~app.cbf9a651.js",revision:null},{url:"assets/js/v-0538835e.be1452c8.js",revision:null},{url:"assets/js/v-2c96a45e.e8e56b9c.js",revision:null},{url:"assets/js/v-2d0ad528.bf3c3ac5.js",revision:null},{url:"assets/js/v-3706649a.e42395c2.js",revision:null},{url:"assets/js/v-37781588.05ea1989.js",revision:null},{url:"assets/js/v-37e1c06f.0afbbe94.js",revision:null},{url:"assets/js/v-47357bdb.fcb9a6ca.js",revision:null},{url:"assets/js/v-4f4ccb8f.8d224034.js",revision:null},{url:"assets/js/v-6703f8cd.5ae1e05e.js",revision:null},{url:"assets/js/v-714f65dc.db68caa8.js",revision:null},{url:"assets/js/v-81f65e84.b74ce476.js",revision:null},{url:"assets/js/v-8daa1a0e.c3f897ab.js",revision:null},{url:"assets/js/v-abece2a2.aef8202f.js",revision:null},{url:"assets/js/v-b9538b80.d8b78f8c.js",revision:null},{url:"assets/js/v-c46fc206.464e5bc3.js",revision:null},{url:"assets/js/v-db05fa28.80890840.js",revision:null},{url:"assets/js/v-fb0f0066.838291ce.js",revision:null},{url:"assets/js/v-fca597be.8e56c456.js",revision:null},{url:"assets/js/v-fffb8e28.633ec9c4.js",revision:null},{url:"guide/configuration.html",revision:"54ee5430d1b41fdfbec34c53ec21e802"},{url:"guide/faq.html",revision:"34b870b0254595ce73e6323c98ca1e76"},{url:"guide/getting-started.html",revision:"52de0c490f56814f0fbe610d3c168902"},{url:"guide/index.html",revision:"382ee4d601b3681934500b8c014a5ab6"},{url:"guide/option-engineer.html",revision:"1e72d551a15fa0de919fda4de1571231"},{url:"guide/options-show.html",revision:"9b45330c136effab59753535610de585"},{url:"guide/recipes.html",revision:"040cd49a4c6ff9a2d53f9ee2d37e0b88"},{url:"guide/why.html",revision:"cfc712182630a09eb6a2758a1e05107f"},{url:"images/demo.gif",revision:"3061a79e88e986f3ae37fdd3476a9be1"},{url:"images/icons/android-chrome-192x192.png",revision:"1e198c07b8be2deab7677b4f6191151c"},{url:"images/icons/android-chrome-512x512.png",revision:"9b5d6455668fdc4f9babbe40296d50d5"},{url:"images/icons/apple-touch-icon.png",revision:"6cb38ebee9b80f8c98d520d848c65e8d"},{url:"images/icons/favicon-114-precomposed.png",revision:"204ef743b6e734de72ca56d6f0983532"},{url:"images/icons/favicon-120-precomposed.png",revision:"64c93bfd00108b20b5029c3aee6734a7"},{url:"images/icons/favicon-144-precomposed.png",revision:"a45faf5a980ec5b065640611881e4a5e"},{url:"images/icons/favicon-152-precomposed.png",revision:"0124b3a9f1392ea115ca14e5f0acb69b"},{url:"images/icons/favicon-180-precomposed.png",revision:"9f0ecb0cbfb323aafc24d0d493d864cd"},{url:"images/icons/favicon-192.png",revision:"85812b33b48aacdeead88715fd5339bd"},{url:"images/icons/favicon-32.png",revision:"588a3fd85afff3e68d562644073c945e"},{url:"images/icons/favicon-36.png",revision:"9404116ef9870eb73d23c47f70306960"},{url:"images/icons/favicon-48.png",revision:"d29136b786d9710f37e305bbd8ad1d7f"},{url:"images/icons/favicon-57.png",revision:"badf2e1b54fd394f9a246c1324cc390a"},{url:"images/icons/favicon-60.png",revision:"0b1734f90817e98f45b66273e5657683"},{url:"images/icons/favicon-72-precomposed.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-72.png",revision:"e82e885cd8835e27644519d7a8280ba7"},{url:"images/icons/favicon-76.png",revision:"317ccb6a761fcec66e42021193f2da86"},{url:"images/icons/favicon-96.png",revision:"784845c0797a7608a0677b2612b2e3c0"},{url:"images/icons/mstile-150x150.png",revision:"4c7cd34ba2dd7431f5f59ebdf4f4cea7"},{url:"images/icons/safari-pinned-tab.svg",revision:"f20af9488fc39e33d7b83d41f576d752"},{url:"images/logo.png",revision:"14cd66b36898e58023b017b1a019895d"},{url:"index.html",revision:"7c9ad38395dc96ef7a7a92523a010cca"},{url:"zh/guide/configuration.html",revision:"9e30b4d00cdae64f67f8c20ddeb97f07"},{url:"zh/guide/faq.html",revision:"eee40d8aab02fab353dd2165be93630f"},{url:"zh/guide/getting-started.html",revision:"774c9ba3968ee9aa65117775432ba854"},{url:"zh/guide/index.html",revision:"c3f6aa499d1f46cd29c0feb7a8a8110c"},{url:"zh/guide/option-engineer.html",revision:"3f42bec05b4b1e06ef6d6a0a7bf105dc"},{url:"zh/guide/options-show.html",revision:"1f317bea5c12c682c63a7b085853bfac"},{url:"zh/guide/recipes.html",revision:"3050f896b91798aafac00314b78c8dbd"},{url:"zh/guide/why.html",revision:"c7027feb62ccc23e9208fbb50fc8e2cf"},{url:"zh/index.html",revision:"33431009b8dbdb91ac2c9243763c30fd"}],{})}));