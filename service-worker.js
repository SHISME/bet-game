"use strict";var precacheConfig=[["/bet-game/index.html","5d1f3bccfc27b59730b1fbfd928509c0"],["/bet-game/static/js/main.17384190.js","9adbe46075271696a885607d22883e70"],["/bet-game/static/media/btn_currency_1.8d6c2140.png","8d6c21404d6c64f463cbb365e4129f46"],["/bet-game/static/media/btn_currency_100.001ed526.png","001ed5261f1bca7ab55e423285f05149"],["/bet-game/static/media/btn_currency_50.d8792d8d.png","d8792d8d13e59f41db49eda2ae9ad25b"],["/bet-game/static/media/btn_selected_currency_100@3x.202f3dc2.png","202f3dc2de4518b01ede22acf2cb4ba3"],["/bet-game/static/media/btn_selected_currency_1@3x.dfeb2040.png","dfeb2040fb73c54c9cb758deb326802c"],["/bet-game/static/media/btn_selected_currency_50@3x.4db2a208.png","4db2a208cfe39f2cf110e5ad78bc99c6"],["/bet-game/static/media/bucket.118f0ece.png","118f0eced0088b7058d10398adf05d74"],["/bet-game/static/media/cn_lose.7a0def82.png","7a0def822bdf584da337b90830c7d1c7"],["/bet-game/static/media/cn_win.39236ad2.png","39236ad2a20558a6171de82be0a5de08"],["/bet-game/static/media/dice_1.7affe9ea.svg","7affe9ea63bd905b9f2009b278e32adb"],["/bet-game/static/media/dice_2.36bd92a9.svg","36bd92a9bd6b487012b9bb8f5e91c172"],["/bet-game/static/media/dice_3.65ca064e.svg","65ca064e6d142ef1dda99325d22ea505"],["/bet-game/static/media/dice_4.ce7ba42b.svg","ce7ba42b86440774d7d5baeed57bcdfe"],["/bet-game/static/media/dice_41@3x.934de53d.png","934de53d767c43d216ee16526ec2f472"],["/bet-game/static/media/dice_5.83750504.svg","83750504f19164fd20a28b2de04877a9"],["/bet-game/static/media/dice_51@3x.298ecaed.png","298ecaede9c3f2d150e2b055576c614a"],["/bet-game/static/media/dice_6.2c6fb56c.svg","2c6fb56c4200475bd6464c25039353e8"],["/bet-game/static/media/dice_61@3x.6c9abe89.png","6c9abe893f7c43d682cb7e40319dad3c"],["/bet-game/static/media/en_lose.b6bbd2c0.png","b6bbd2c0495eb4355b1846f418b59f4f"],["/bet-game/static/media/en_win.001f5932.png","001f5932820650d055eaa379632687f0"],["/bet-game/static/media/logo.63c00ef7.png","63c00ef79b991c79ed504d5c4a3367b4"],["/bet-game/static/media/mask@3x.de9ca3b4.png","de9ca3b4e2c050829db80ad14ec53311"],["/bet-game/static/media/no_end.16a7b6f5.gif","16a7b6f515bc883bfb7d36b3049d6fca"],["/bet-game/static/media/table.eeb96d6e.png","eeb96d6ec4c9e850824c126e94d5fc0c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/bet-game/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});