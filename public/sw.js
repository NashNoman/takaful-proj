if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const c=e=>i(e,o),d={module:{uri:o},exports:r,require:c};a[o]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(n(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Takaful-logo.png",revision:"6d537699c0d41bc5669e73910cb82285"},{url:"/_next/static/chunks/0e5ce63c-50f53fa7e953026a.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/126-17778c1dbf06e649.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/193-68e4133ff886969c.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/250-6d925ff5cf7277a9.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/265-2db4fa41684b3b85.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/288-a978568812eb7da7.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/346-423922199892857f.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/387-2228bf7b86cb68d9.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/468-f00a4a333f007484.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/749-33a05d47b7f11ce8.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/772-f4ae835ca42aba27.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/967-0a290fb683752954.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/account/page-d91f33175842a46e.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/billing/page-e0b2d6ff4eded2df.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/claims/page-e5190a682cf4c515.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/consultation/%5Bid%5D/page-3b9eddc8ee171dfb.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/consultation/page-ffd664246d8855fc.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/package/%5Bproduct%5D/page-043bac582b6ac4b6.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/package/page-48666244718d54ec.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/app/page-ba0f77f4b30da79e.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(app)/layout-d080378813b3a8d8.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(auth)/layout-ee6411ba5e827988.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(auth)/login/page-02482b2f86fbd7fa.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(auth)/signup/package/page-f9e79810e748765a.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(auth)/signup/page-081fd840725723d3.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(home)/layout-c88d20d9c451ffcc.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/(home)/page-959392790d753159.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/_not-found-be175c4a080365b1.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/app/layout-898a2459c4c29046.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/fd9d1056-5b82f70e2f4a8a0b.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/main-app-cfbdee03b3df3530.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/main-bf8d74539c070292.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fccbdf1752bb609b.js",revision:"eJZ-hG7fvoJGzFgsS-Uxm"},{url:"/_next/static/css/26358134b20813e7.css",revision:"26358134b20813e7"},{url:"/_next/static/eJZ-hG7fvoJGzFgsS-Uxm/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/eJZ-hG7fvoJGzFgsS-Uxm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/Takaful-logo.b4479213.png",revision:"6d537699c0d41bc5669e73910cb82285"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/android/android-launchericon-144-144.png",revision:"e3d0b89d237abc214172c360e9dda804"},{url:"/android/android-launchericon-192-192.png",revision:"55d8cba661f827f2d1c204f6cffdea74"},{url:"/android/android-launchericon-48-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/android/android-launchericon-512-512.png",revision:"e9bdb3fe06b3486fc11a4fc42ac7978f"},{url:"/android/android-launchericon-72-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/android/android-launchericon-96-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/healthcare.png",revision:"5c6166b1e44319692d08227a73e20ed4"},{url:"/ios/100.png",revision:"ed06ab5c1c6b1e9681900006664fc5d9"},{url:"/ios/1024.png",revision:"3eb96ef984e5706d46a9829ddb9181fb"},{url:"/ios/114.png",revision:"8e750ac4711799916f6d3100b8be7ba9"},{url:"/ios/120.png",revision:"041e19ba536c7a3feef54ba125d6bf6a"},{url:"/ios/128.png",revision:"d7f9bbed9682c272e53c0b5d4a82a26e"},{url:"/ios/144.png",revision:"e3d0b89d237abc214172c360e9dda804"},{url:"/ios/152.png",revision:"56151b3ae6d91d7f86f4fb9dc7f2006b"},{url:"/ios/16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/ios/167.png",revision:"cc0e2a27a94de6ff0f85832068bf8ec0"},{url:"/ios/180.png",revision:"782c5730726398481041f5c0747ebb8b"},{url:"/ios/192.png",revision:"55d8cba661f827f2d1c204f6cffdea74"},{url:"/ios/20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/ios/256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/ios/29.png",revision:"b7620c36f102e098c3361cd09d2a7f90"},{url:"/ios/32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/ios/40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/ios/50.png",revision:"c2da93ad952a97170cb7907b0b4c820b"},{url:"/ios/512.png",revision:"e9bdb3fe06b3486fc11a4fc42ac7978f"},{url:"/ios/57.png",revision:"44d87db9ef1e38de3c2eabb630d3fa88"},{url:"/ios/58.png",revision:"c7f3f29474e87dbe6a7311ce443ee43c"},{url:"/ios/60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/ios/64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/ios/72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/ios/76.png",revision:"1a2c5c1fb3d437dd4ebf3f5130292a75"},{url:"/ios/80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/ios/87.png",revision:"b32ac6d5dd5d3038e9dd1ebeb28d1555"},{url:"/manifest.json",revision:"90fdbdd73e12d87c22650c3f27179092"},{url:"/minitruck.png",revision:"b26bb673f6d5bc6df734009f5b326302"},{url:"/minivan.png",revision:"0e9c288b3119d55909c20e9dd6a5b713"},{url:"/motorcycle.png",revision:"a863757ee6ec67cf4467009f45b29619"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/windows11/LargeTile.scale-100.png",revision:"764a6b94de0d208e12a9f4b2f8d4cc01"},{url:"/windows11/LargeTile.scale-125.png",revision:"94c78f3f7a9f45c870abae5e31dc95c7"},{url:"/windows11/LargeTile.scale-150.png",revision:"3e2f4ebcf94817a02b8ee521a5ed5197"},{url:"/windows11/LargeTile.scale-200.png",revision:"803ad62acb32d9f48f599e882efaa2c0"},{url:"/windows11/LargeTile.scale-400.png",revision:"2976bb8cb481e74c1e3ef6f4dbb60fda"},{url:"/windows11/SmallTile.scale-100.png",revision:"12581d86f15e53c60f3fc1dcedc83d63"},{url:"/windows11/SmallTile.scale-125.png",revision:"4cc46f8f22dced5ad8e68418050e1abf"},{url:"/windows11/SmallTile.scale-150.png",revision:"2dd10c6deb968e0464b100de35d94f89"},{url:"/windows11/SmallTile.scale-200.png",revision:"6bebbcd063025897a73ed199720f27d8"},{url:"/windows11/SmallTile.scale-400.png",revision:"8b428ab37f1a4faf175a1b4ddba76944"},{url:"/windows11/SplashScreen.scale-100.png",revision:"88d7cb2b401a822f5bf27fb29ddf2763"},{url:"/windows11/SplashScreen.scale-125.png",revision:"ac2e60abd7666d8c10486c4e8478d77d"},{url:"/windows11/SplashScreen.scale-150.png",revision:"8f03c6e7ffaa17f6a435f9aac02cbc36"},{url:"/windows11/SplashScreen.scale-200.png",revision:"3175b9b80f64638c00bc8532c8dc4b0b"},{url:"/windows11/SplashScreen.scale-400.png",revision:"0397604226a32fe981e86dc23f498887"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"5de673658248d7418ddee699fdb78905"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"80441afa8ced5a7f2218f12ced9f7907"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"69f1fa533517e576bed1c64da27b83fe"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"e6e5e5ac8f96660ee61bd6eca50ac9f6"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"1fc08a3358c216f405e2040028287182"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"6e34e9f3fa999b7476ef214a1bc0eb14"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"a3bf9038b73e772773b82c8eb2f36d87"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"db6aa24058672b75c9ac91693516a508"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"fdce186b9b1fe4f827caf503d1fdac4b"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"9838c50a195b977fedfc635738f597f4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"7ee484fe824f6eae876fbe21a956eb75"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"ac6652d0ff4f90fa798c1176f2439547"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"26dd7884125d5deeb1a3491207e30773"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"3824db9f809ae2bf3a6e368e73684357"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"bd320e12c479e32507c967316246ef67"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"53af2393e26445cc964cdb780498bc34"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"2d06e1e213a0e2be5b37df64c06c0d3b"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"a9d45ad2de2812d616cb0b98dab789fc"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"7940d2cdee40cc4f768140e09a8768a0"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"a71981a44d0fe2db54f365e3dcaf7d33"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"a7a47ef6d539b54a22ade2ef5c4ce470"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"ab5c0bad8e54fa910ca6ab7037287a04"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"56db31571bfe6ed2207a30a4b29041f8"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"3024e94082672fe9fb1695062793cff0"},{url:"/windows11/StoreLogo.scale-100.png",revision:"c2da93ad952a97170cb7907b0b4c820b"},{url:"/windows11/StoreLogo.scale-125.png",revision:"ffec122dafc14369579cccda4ec4ba6a"},{url:"/windows11/StoreLogo.scale-150.png",revision:"3548f1e23e4dd2ea9be12e3cb707006e"},{url:"/windows11/StoreLogo.scale-200.png",revision:"ed06ab5c1c6b1e9681900006664fc5d9"},{url:"/windows11/StoreLogo.scale-400.png",revision:"c27c57a2d999d53bf3c6932187953512"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"c788d8fbbea25ab781daf6cfab08e1f4"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"fc32b37696b2d84ccb76b45ee4d2bec8"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"94b9c51d208122b7bf79a93283826039"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"88d7cb2b401a822f5bf27fb29ddf2763"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"3175b9b80f64638c00bc8532c8dc4b0b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
