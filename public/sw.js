if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};a[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Takaful-logo.png",revision:"6d537699c0d41bc5669e73910cb82285"},{url:"/_next/static/7z8V2d8uYbIhVlwo2y2Ii/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/7z8V2d8uYbIhVlwo2y2Ii/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-da89f7df1f923ea1.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/186-6efba5402fe4754a.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/220-279273d4f72f2e2a.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/232-6e0836a14cf214fd.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/250-9c994fba06055193.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/288-de217fba31f8d3de.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/2f6dbc85-49e80183dccb88ca.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/468-cc84f1de740cddb9.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/749-b3e9eec550a51421.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/account/page-2c64c94ad067f56d.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/billing/page-7ba5841d888ebbab.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/claims/page-d3a55f88d54e64c9.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/consultation/%5Bid%5D/page-1372761b88e3574b.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/consultation/page-1c11ee6e82ca7eed.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/package/%5Bproduct%5D/page-bf564181f1e4ab3d.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/package/page-48666244718d54ec.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/app/page-6fd0cbd96d9748f9.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(app)/layout-230122b2206ad580.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(auth)/layout-67e2159d2314ddc0.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(auth)/signup/page-ef7a7ed651633af7.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(home)/layout-f056fe8433825e0f.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/(home)/page-46129cced64b6ea2.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/_not-found-02ca4a8f1dca131e.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/app/layout-8efef5b1d4438b71.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/fd9d1056-f898535ba37b63c1.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/main-app-cfbdee03b3df3530.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/main-daa5ca226a738a4c.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d1d79b42b406a186.js",revision:"7z8V2d8uYbIhVlwo2y2Ii"},{url:"/_next/static/css/bf72d04f2f17dbe4.css",revision:"bf72d04f2f17dbe4"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Takaful-logo.b4479213.png",revision:"6d537699c0d41bc5669e73910cb82285"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/android/android-launchericon-144-144.png",revision:"e3d0b89d237abc214172c360e9dda804"},{url:"/android/android-launchericon-192-192.png",revision:"55d8cba661f827f2d1c204f6cffdea74"},{url:"/android/android-launchericon-48-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/android/android-launchericon-512-512.png",revision:"e9bdb3fe06b3486fc11a4fc42ac7978f"},{url:"/android/android-launchericon-72-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/android/android-launchericon-96-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/healthcare.png",revision:"5c6166b1e44319692d08227a73e20ed4"},{url:"/ios/100.png",revision:"ed06ab5c1c6b1e9681900006664fc5d9"},{url:"/ios/1024.png",revision:"3eb96ef984e5706d46a9829ddb9181fb"},{url:"/ios/114.png",revision:"8e750ac4711799916f6d3100b8be7ba9"},{url:"/ios/120.png",revision:"041e19ba536c7a3feef54ba125d6bf6a"},{url:"/ios/128.png",revision:"d7f9bbed9682c272e53c0b5d4a82a26e"},{url:"/ios/144.png",revision:"e3d0b89d237abc214172c360e9dda804"},{url:"/ios/152.png",revision:"56151b3ae6d91d7f86f4fb9dc7f2006b"},{url:"/ios/16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/ios/167.png",revision:"cc0e2a27a94de6ff0f85832068bf8ec0"},{url:"/ios/180.png",revision:"782c5730726398481041f5c0747ebb8b"},{url:"/ios/192.png",revision:"55d8cba661f827f2d1c204f6cffdea74"},{url:"/ios/20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/ios/256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/ios/29.png",revision:"b7620c36f102e098c3361cd09d2a7f90"},{url:"/ios/32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/ios/40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/ios/50.png",revision:"c2da93ad952a97170cb7907b0b4c820b"},{url:"/ios/512.png",revision:"e9bdb3fe06b3486fc11a4fc42ac7978f"},{url:"/ios/57.png",revision:"44d87db9ef1e38de3c2eabb630d3fa88"},{url:"/ios/58.png",revision:"c7f3f29474e87dbe6a7311ce443ee43c"},{url:"/ios/60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/ios/64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/ios/72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/ios/76.png",revision:"1a2c5c1fb3d437dd4ebf3f5130292a75"},{url:"/ios/80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/ios/87.png",revision:"b32ac6d5dd5d3038e9dd1ebeb28d1555"},{url:"/manifest.json",revision:"90fdbdd73e12d87c22650c3f27179092"},{url:"/minitruck.png",revision:"b26bb673f6d5bc6df734009f5b326302"},{url:"/minivan.png",revision:"0e9c288b3119d55909c20e9dd6a5b713"},{url:"/motorcycle.png",revision:"a863757ee6ec67cf4467009f45b29619"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/windows11/LargeTile.scale-100.png",revision:"764a6b94de0d208e12a9f4b2f8d4cc01"},{url:"/windows11/LargeTile.scale-125.png",revision:"94c78f3f7a9f45c870abae5e31dc95c7"},{url:"/windows11/LargeTile.scale-150.png",revision:"3e2f4ebcf94817a02b8ee521a5ed5197"},{url:"/windows11/LargeTile.scale-200.png",revision:"803ad62acb32d9f48f599e882efaa2c0"},{url:"/windows11/LargeTile.scale-400.png",revision:"2976bb8cb481e74c1e3ef6f4dbb60fda"},{url:"/windows11/SmallTile.scale-100.png",revision:"12581d86f15e53c60f3fc1dcedc83d63"},{url:"/windows11/SmallTile.scale-125.png",revision:"4cc46f8f22dced5ad8e68418050e1abf"},{url:"/windows11/SmallTile.scale-150.png",revision:"2dd10c6deb968e0464b100de35d94f89"},{url:"/windows11/SmallTile.scale-200.png",revision:"6bebbcd063025897a73ed199720f27d8"},{url:"/windows11/SmallTile.scale-400.png",revision:"8b428ab37f1a4faf175a1b4ddba76944"},{url:"/windows11/SplashScreen.scale-100.png",revision:"88d7cb2b401a822f5bf27fb29ddf2763"},{url:"/windows11/SplashScreen.scale-125.png",revision:"ac2e60abd7666d8c10486c4e8478d77d"},{url:"/windows11/SplashScreen.scale-150.png",revision:"8f03c6e7ffaa17f6a435f9aac02cbc36"},{url:"/windows11/SplashScreen.scale-200.png",revision:"3175b9b80f64638c00bc8532c8dc4b0b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"0397604226a32fe981e86dc23f498887"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"5de673658248d7418ddee699fdb78905"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"80441afa8ced5a7f2218f12ced9f7907"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"69f1fa533517e576bed1c64da27b83fe"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"e6e5e5ac8f96660ee61bd6eca50ac9f6"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"1fc08a3358c216f405e2040028287182"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"6e34e9f3fa999b7476ef214a1bc0eb14"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"a3bf9038b73e772773b82c8eb2f36d87"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"db6aa24058672b75c9ac91693516a508"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"fdce186b9b1fe4f827caf503d1fdac4b"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/StoreLogo.scale-100.png",revision:"c2da93ad952a97170cb7907b0b4c820b"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ffec122dafc14369579cccda4ec4ba6a"},{url:"/windows11/StoreLogo.scale-150.png",revision:"3548f1e23e4dd2ea9be12e3cb707006e"},{url:"/windows11/StoreLogo.scale-200.png",revision:"ed06ab5c1c6b1e9681900006664fc5d9"},{url:"/windows11/StoreLogo.scale-400.png",revision:"c27c57a2d999d53bf3c6932187953512"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"c788d8fbbea25ab781daf6cfab08e1f4"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"fc32b37696b2d84ccb76b45ee4d2bec8"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"94b9c51d208122b7bf79a93283826039"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"88d7cb2b401a822f5bf27fb29ddf2763"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"3175b9b80f64638c00bc8532c8dc4b0b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
