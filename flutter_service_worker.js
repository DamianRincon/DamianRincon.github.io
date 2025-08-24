'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d5918f9a836e948efe42a151910a44cf",
"version.json": "711679ff19b309634bd50dfb162108cb",
"index.html": "97f6556bf27209ec897e0dfed2852b73",
"/": "97f6556bf27209ec897e0dfed2852b73",
"main.dart.js": "93df1910b03f6c6d85815d43b5d78c5f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a1ec19e6befc2710ff878d22153600ae",
".git/config": "4a679d2ee3127741ce2e61f7d4c7af11",
".git/objects/61/abb14b0c8e1a0a912939b31ac16e4c5678f61c": "b7834c5a4c9bf406ed2d436182b3969d",
".git/objects/92/39f385a1b516a7270c096a49e191120c0fda64": "f3ab6965a8689f04c9efdd25fc27b90e",
".git/objects/66/f70a3c70376cc6817a71ef759166f602daf7d3": "df236f6f452b544362d44f5635f9adab",
".git/objects/3b/a69eab8cf5e297390cb0dcee6eeb4e44d32a4e": "e3084af38d595080cde7943cff0cb914",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/458114a9012f2cd343056a9a35df87839afa0c": "d1138ec1a0d7c8b04875982f7ea0d475",
".git/objects/94/b91796e558e627623f922b9284ac069a19e444": "60119fd65837fe51cbee5943b606c99e",
".git/objects/60/530f1597d79d8a117128d537f4d7be0109f70c": "8ad95002dfbb25115ee868ab4b1c41de",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b4/3be36c82b460dc023cbb55746d94dd9c9f0e01": "aedb08014925482a7c1ee0bb7337e6cd",
".git/objects/b4/9f97c70c56a2e4f6f4a71a502a95e90d414490": "4f67de0b3c537513ec512d3b31091b82",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/5b4ef0320c9c80bc3cf8d833e0fd003652a9af": "0aa4090077e048fc97438a248335aa2d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/fb/528a03bc28d12c83a5866a53204c533c588e5d": "32c88d752300dd1201be5690b2d5048f",
".git/objects/c6/5b621e07d41fae4fe5816550c8b85933a44d2f": "c9a2afebf005f85b528c5f9dd8ca301e",
".git/objects/27/5fb2b0ef69687a95a14f587f885e21d4c8431c": "f614d1a8c331cecde57411be4952dc1e",
".git/objects/7c/4d98c4290d764c04fbcb25d848768500ece831": "e596eef37003cd9c07fc43e5094a5dcc",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/51269cd8d593811bafa694359ecc4021a44f9a": "a1a689a4467928fb3f07400ae0d6e983",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/09/425d6572de5914eab1e9eb09fc219aa36e4232": "0bb18d5d520e834e91aa3200b82452f2",
".git/objects/5d/65d05fff235d62bd3c77b913a0345a21b15683": "c966ad778c357f3130916889684baf35",
".git/objects/91/9ae9578d967ae15404bc914944fc51705f2fd8": "2ef42826a1095bd186e91ae4c0e2e9a9",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/d4ed530d5ffde19d256036c1b205be53c00c45": "c4fd7260fc101dd712dcc6c8175a1488",
".git/objects/63/d80c9342cb685c2c18711ce0776a92291194d4": "8b242e7438ba648122b095fc9f40e0ac",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/fe3ffa1788fd54e824ea1c7bb258e5ee098001": "a3b43e74b623e3185fa9191bab27a3bd",
".git/objects/b8/e60c0ea372d254fc112ab8001a7f20ad11b52b": "f612c302758422929586f1654efa6e8d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/48395519a9ae61d89f7589bccb2fa54edb6fa7": "62ae84643f5d7c2c4caef8092e54c9cb",
".git/objects/db/03feb9b107676028cd2d4fb9e1e16ed5941242": "4d1c6c294ba3a004cb90a7f4da69a528",
".git/objects/a8/1b8dd2556a4ee83d5e8ad40ecc877c52e2f86a": "cb177f7217980659c823ffe5edf3aceb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/0710823493d0cecf325c2dea522dd028acbaff": "b18920c279850b718dc03bb8a86596d5",
".git/objects/a1/9fb48d6059b60b68ef2823c0401e28b34bd041": "07e35dc4b3e8a18e2905311da98fa11c",
".git/objects/ea/dd243f75f6f5c10d4445646be465b20e77dbe4": "26f207030c620e1d12977adf382b0716",
".git/objects/c2/39b6a6e2534a4e60bbe5968f77204750375cf4": "0faa8bfb7f10570fc9e022df08a11ac6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/c3dcef9643d3b9355ebe0fe5d9d90e825b473f": "78a65f5be0c87fd696b1794454749881",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/bd69fc4776f0e006deb857d6e959832ca4a16c": "5ea680db86d4d02528cb8cffbab681ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/3759fe8d8548e4610025cd56133bde5850e9c4": "edb5f013c9c34602e60d7acb5c5470eb",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/1e/69cc6fb92d728636dc58f522498fb90549c629": "2d1d719bda9893324c18cd29d3ccc2ff",
".git/objects/40/4dd13543f5ed73cb3b7c479b5c58e8e391cb2a": "069c3df68ee2e66749521890ae29ed6c",
".git/objects/78/35c1f880c99abc1f97ae89e2f9eacde62c9527": "f52be60dfb6a477932d71501437d28a7",
".git/objects/13/8dd236b2213bd7cce5c745157a93610cbc8019": "d5476bf723d99e5f3b8265305f9b8b8c",
".git/objects/8e/6a790a9583f9b093ecc1036b4eb63f3e068477": "7c4f1bf33e802ea333e69caa77a6f3d7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8da58f567bb6706eef6946a51d63b31a",
".git/logs/refs/heads/main": "7c811d8e47182dc8b8bb3cc189b0e252",
".git/logs/refs/remotes/origin/main": "e5566c48fdbd08a9fd3a96e0670205f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fa603b6b436c80a5f8334a74f0351741",
".git/refs/remotes/origin/main": "fa603b6b436c80a5f8334a74f0351741",
".git/index": "36b454e365266d56a637bc9c8e4abad8",
".git/COMMIT_EDITMSG": "c0e8cda1c7b12c94d017e634208b828e",
"assets/AssetManifest.json": "775fd100d3fc3566c8a602b06135327b",
"assets/NOTICES": "66c46364c58f60b2ade8ee9cdaaef615",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1b7252061e95320400693f25ec823fba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "85a8d0a9f6153a880eaded2ea50d983a",
"assets/fonts/MaterialIcons-Regular.otf": "939eb9d9ed190016424665f0e29602d0",
"assets/assets/images/tictactow.png": "a17d68301bdcc59c45703a444e6feed7",
"assets/assets/images/material_color.png": "c7ebae989c64ed7fbeb119cecea9cedb",
"assets/assets/images/icon_opt.png": "d7c75ee57efcd41c08dbfc170228e1ff",
"assets/assets/images/scanqr.png": "120ac1262df1097c8f9e17393aa13d6d",
"assets/assets/images/yo.jpg": "270749eeb550e37cf207574c59e18419",
"assets/assets/images/vault_free.png": "2b30ad5ff1682df241d5d58dab441196",
"assets/assets/images/nuxui.png": "86b30a431ce57455fd331ff7b8b9a74f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
