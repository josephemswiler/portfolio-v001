"use strict";var precacheConfig=[["/portfolio-v001/index.html","e09ac2d1e9ed09b63d388b10679b5c80"],["/portfolio-v001/static/css/main.68a08f6c.css","4d6e0e4deff04a957d7a2a2e0d477c44"],["/portfolio-v001/static/js/main.a2f66f96.js","e8b586905081a948e9846b8c7f7a839d"],["/portfolio-v001/static/media/adobe-illustrator.a9f9712d.png","a9f9712dc18c06d716c9edd0a3d9e71b"],["/portfolio-v001/static/media/adobe-photoshop.74d7c857.png","74d7c85713d392d0e83efaafb391a063"],["/portfolio-v001/static/media/adobe-xd.ed95b28a.png","ed95b28af1a5c705e7a0ef01b6a037ae"],["/portfolio-v001/static/media/aws.f8b9fa77.png","f8b9fa776c4eb918bd00ca37da7a0c90"],["/portfolio-v001/static/media/background-found.b91eaa15.svg","b91eaa15fca856886ba3bf632b1e04ac"],["/portfolio-v001/static/media/bootstrap.7a2abea4.png","7a2abea4f3f9e9479f9ca0b02d35a83b"],["/portfolio-v001/static/media/css-3.665ef6e6.png","665ef6e6c829e31f3a366453589b8a5b"],["/portfolio-v001/static/media/desktop-found.fca9f1c6.svg","fca9f1c697e422d34cd9ae460867f714"],["/portfolio-v001/static/media/desktop-jello.a1f24984.svg","a1f24984609499efcd1b4ae37374d962"],["/portfolio-v001/static/media/desktop-spacebnb.9685de40.svg","9685de40bfb11734da6e92301e452800"],["/portfolio-v001/static/media/expo.fff02873.png","fff028739f0fed2ecc0816f558195d07"],["/portfolio-v001/static/media/express-js.78d81430.png","78d814306b4f5c4bd36eb32aaa2155ec"],["/portfolio-v001/static/media/firebase.9a8a8b41.png","9a8a8b41801c4b1fd2c65206e4149765"],["/portfolio-v001/static/media/first-place-badge.94f0b4fe.svg","94f0b4fe648503c53334379e5f723606"],["/portfolio-v001/static/media/handlebars-js.f5614b8a.png","f5614b8a1c047ac40507d17189f091e3"],["/portfolio-v001/static/media/html-5.a2f929a8.png","a2f929a8e35da61814fa1587fcb0a8f9"],["/portfolio-v001/static/media/javascript.8ece5c6f.png","8ece5c6fd4a1c17b2889e7b241e52e50"],["/portfolio-v001/static/media/jquery-ui.45185dd6.png","45185dd60848e7cd982b9f95dacca2c4"],["/portfolio-v001/static/media/jquery.795f91cc.png","795f91cc977cfee8d7ce99f5529ce3bd"],["/portfolio-v001/static/media/jsx.9355e2ef.png","9355e2ef203d82d7834158a4a49c9fc7"],["/portfolio-v001/static/media/materialize-css.28d593c5.png","28d593c5047268ad06e6bdc95f5c7b97"],["/portfolio-v001/static/media/mobile-dutch.e0208b4f.svg","e0208b4f511049b615069c8ea108aa6a"],["/portfolio-v001/static/media/mobile-found.0f12ab15.svg","0f12ab15d798996fe3c7d8b24a587e30"],["/portfolio-v001/static/media/mobile-jello.867d3ef9.svg","867d3ef977d9aba4ce2a2805253ea147"],["/portfolio-v001/static/media/mobile-spacebnb.9eea143e.svg","9eea143ee9a8946bbf5583c86c9f4ac2"],["/portfolio-v001/static/media/mongo-db.b7d6e9c9.png","b7d6e9c97011959ce96a2f326fc8e8f5"],["/portfolio-v001/static/media/mongoose-js.c474b041.png","c474b041ac8d0fc022b742f6d6486502"],["/portfolio-v001/static/media/mvc-framework.3f89e3ca.png","3f89e3caa9145b5f681fe0986596b8c6"],["/portfolio-v001/static/media/mysql.bc7ba8d2.png","bc7ba8d2fa051a2a56d544722d437ee7"],["/portfolio-v001/static/media/next-js.ebe56821.png","ebe56821cf365d5f2855376e9036f360"],["/portfolio-v001/static/media/node-js.be834f60.png","be834f602d5d253fa2d8a56c2cf2f9e7"],["/portfolio-v001/static/media/pixel-dutch.b07c54e3.svg","b07c54e3c41bb4fdcf6b3e5489ba799f"],["/portfolio-v001/static/media/react-js.dc8044dd.png","dc8044ddef03283b611c1b86984a94e3"],["/portfolio-v001/static/media/react-native.6b36411d.png","6b36411db6788b7f6c00a75b880e473f"],["/portfolio-v001/static/media/reactstrap.aaa018ad.png","aaa018adfcb0a1554d26fc3dee9d99f4"],["/portfolio-v001/static/media/robo-3t.ef1ed4b1.png","ef1ed4b12ade823af582dfe019332706"],["/portfolio-v001/static/media/screen-imac.6f27dba3.svg","6f27dba3101cd195469a2fea898fccef"],["/portfolio-v001/static/media/screen-iphone.15b568b0.svg","15b568b0ffd907794b4dba1ab9d03267"],["/portfolio-v001/static/media/screen-pixel.021075d6.svg","021075d66bb0d9d47c7fb64287b89ea9"],["/portfolio-v001/static/media/screenshot-dutch.c9aedef3.png","c9aedef345186bda8ba01ac4525c2c2d"],["/portfolio-v001/static/media/screenshot-spacebnb.08a008e5.png","08a008e5b283396155653727676b67ab"],["/portfolio-v001/static/media/sequel-pro.b9c58f2a.png","b9c58f2ad025578ffd4572f355ca5160"],["/portfolio-v001/static/media/sequelize.c5591d81.png","c5591d81e11bc7a47b6007e061d344b5"],["/portfolio-v001/static/media/three-js.58256076.png","5825607620aa6bd3e6aeadb125e79e66"],["/portfolio-v001/static/media/tropical-leaf-detail.fcb7ed87.svg","fcb7ed8783f7ca7e7b04591a30f4eda9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],o=new URL(a,self.location),c=createCacheKey(o,hashParamName,t,/\.\w{8}\./);return[o.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(o){return setOfCachedUrls(o).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return o.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),o="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,o),e=urlsToCacheKeys.has(t));var c="/portfolio-v001/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});