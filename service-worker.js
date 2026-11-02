const CACHE_NAME = 'campanita-v2';
const OFFLINE_URL = './index.html';

const ROOT_FILES = `
Aero.png ana1.jpg ana2.jpg ana4.jpg ana5.jpg anat3.jpg anat6.jpg banjo.mp3
cards1.jpg cards11.jpg cards12.jpg cards13.jpg cards14.jpg cards15.jpg cards16.jpg
cards2.jpg cards21.jpg cards22.jpg cards23.jpg cards26.jpg cards27.jpg
cards2a1.jpg cards2a2.jpg cards2a3.jpg cards2a4.jpg cards2a5.jpg cards2a6.jpg cards2a7.jpg cards2a8.jpg
cards2b1.jpg cards2b2.jpg cards2b3.jpg cards2b4.jpg cards2b5.jpg cards2b6.jpg cards2b7.jpg cards2b8.jpg cards2b9.jpg
cards2c1.jpg cards2c2.jpg cards2c3.jpg cards2c4.jpg cards2c5.jpg cards2c6.jpg cards2c7.jpg cards2c8.jpg cards2c9.jpg cards2c10.jpg cards2c11.jpg
cards2d1.jpg cards2d2.jpg cards2d3.jpg cards2d4.jpg cards2d5.jpg cards2d6.jpg cards2d7.jpg cards2d8.jpg cards2d9.jpg cards2d10.jpg
cards2e1.jpg cards2e2.jpg cards2e3.jpg cards2e4.jpg cards2e5.jpg cards2e6.jpg cards2e7.jpg cards2e8.jpg cards2e9.jpg cards2e10.jpg
cards3.jpg cards31.jpg cards32.jpg cards33.jpg cards34.jpg cards35.jpg cards36.jpg cards37.jpg cards38.jpg cards39.jpg
cards3a1.jpg cards3a2.jpg cards3a3.jpg cards3a4.jpg cards3a5.jpg cards3a6.jpg cards3a7.jpg cards3a8.jpg cards3a9.jpg cards3a11.jpg
cards3b1.jpg cards3b2.jpg cards3b3.jpg cards3b4.jpg cards3b5.jpg cards3b6.jpg cards3b7.jpg cards3b8.jpg cards3b9.jpg cards3b10.jpg
cards3c1.jpg cards3c2.jpg cards3c3.jpg cards3c4.jpg cards3c5.jpg cards3c6.jpg cards3c7.jpg cards3c8.jpg
cards3d1.jpg cards3d2.jpg cards3d3.jpg cards3d4.jpg cards3d5.jpg cards3d6.jpg cards3d7.jpg cards3d8.jpg cards3d9.jpg cards3d10.jpg
cards3e1.jpg cards3e2.jpg cards3e3.jpg cards3e4.jpg cards3e5.jpg cards3e6.jpg cards3e7.jpg cards3e8.jpg
cards3f1.jpg cards3f2.jpg cards3f3.jpg cards3f4.jpg cards3f5.jpg cards3f6.jpg cards3f7.jpg cards3f8.jpg cards3f9.jpg cards3f10.jpg
cards4.jpg cards40.jpg cards41.jpg cards42.jpg cards43.jpg cards45.jpg cards46.jpg cards47.jpg cards48.jpg
cards5.jpg cards50.jpg cards51.jpg cards52.jpg cards53.jpg cards54.jpg cards55.jpg cards56.jpg cards57.jpg cards58.jpg cards59.jpg
cards60.jpg cards61.jpg cards62.jpg cards63.jpg cards64.jpg cards65.jpg cards66.jpg cards67.jpg cards68.jpg cards69.jpg
cards70.jpg cards71.jpg cards72.jpg cards73.jpg cards74.jpg cards75.jpg cards76.jpg cards77.jpg cards78.jpg cards79.jpg cards8.jpg cards80.jpg cards81.jpg
cards91.jpg cards92.jpg cards93.jpg cards94.jpg cards95.jpg cards96.jpg cards97.jpg cards98.jpg
dino1.jpg dino2.jpg dino3.jpg dino4.jpg dino5.jpg dino6.jpg dino7.jpg dino8.jpg dino9.jpg dino10.jpg
drum.mp3 electr.mp3 error.mp3 flauta.mp3 gallery.jpg geo1.jpg geo2.jpg geo3.jpg geo11.jpg geo12.jpg geo13.jpg geo21.jpg
gif1.gif gif2.gif gif3.gif gif4.gif gif5.gif gif6.gif gif7.gif gif8.gif gif9.gif gif10.gif guitr.mp3 harm.mp3
hum1.jpg hum2.jpg hum3.jpg hum4.jpg hum5.jpg hum6.jpg hum7.jpg icon-192.png icon.jpg icon.png
index.html index_2.html index_3.html index_4.html index_5.html index_6.html index_7.html index_8.html index_9.html
index_11.html index_12.html index_13.html index_14.html index_15.html index_16.html
index_21.html index_22.html index_23.html index_24.html index_25.html index_26.html index_27.html
manifest.json match.mp3 memory.js memoryaudio.js move.mp3 piano.mp3 puzzle.js screenshot-mobile.png screenshot-wide.png
script.js style.css synth.mp3 trump.mp3 victory.mp3 viol.mp3
`.trim().split(/\s+/).map(file => `./${file}`);

const ENGLISH_FILES = `
ana1.jpg ana2.jpg ana4.jpg ana5.jpg anat3.jpg anat6.jpg
cards1.jpg cards11.jpg cards12.jpg cards13.jpg cards14.jpg cards15.jpg cards16.jpg
cards2.jpg cards21.jpg cards22.jpg cards23.jpg cards26.jpg cards27.jpg
cards2a1.jpg cards2a2.jpg cards2a3.jpg cards2a4.jpg cards2a5.jpg cards2a6.jpg cards2a7.jpg cards2a8.jpg
cards2b1.jpg cards2b2.jpg cards2b3.jpg cards2b4.jpg cards2b5.jpg cards2b6.jpg cards2b7.jpg cards2b8.jpg cards2b9.jpg
cards2c1.jpg cards2c2.jpg cards2c3.jpg cards2c4.jpg cards2c5.jpg cards2c6.jpg cards2c7.jpg cards2c8.jpg cards2c9.jpg cards2c10.jpg cards2c11.jpg
cards2d1.jpg cards2d2.jpg cards2d3.jpg cards2d4.jpg cards2d5.jpg cards2d6.jpg cards2d7.jpg cards2d8.jpg cards2d9.jpg cards2d10.jpg
cards2e1.jpg cards2e2.jpg cards2e3.jpg cards2e4.jpg cards2e5.jpg cards2e6.jpg cards2e7.jpg cards2e8.jpg cards2e9.jpg cards2e10.jpg
cards3.jpg cards31.jpg cards32.jpg cards33.jpg cards34.jpg cards35.jpg cards36.jpg cards37.jpg cards38.jpg cards39.jpg
cards3a1.jpg cards3a2.jpg cards3a3.jpg cards3a4.jpg cards3a5.jpg cards3a6.jpg cards3a7.jpg cards3a8.jpg cards3a9.jpg cards3a11.jpg
cards3b1.jpg cards3b2.jpg cards3b3.jpg cards3b4.jpg cards3b5.jpg cards3b6.jpg cards3b7.jpg cards3b8.jpg cards3b9.jpg cards3b10.jpg
cards3c1.jpg cards3c2.jpg cards3c3.jpg cards3c4.jpg cards3c5.jpg cards3c6.jpg cards3c7.jpg cards3c8.jpg
cards3d1.jpg cards3d2.jpg cards3d3.jpg cards3d4.jpg cards3d5.jpg cards3d6.jpg cards3d7.jpg cards3d8.jpg cards3d9.jpg cards3d10.jpg
cards3e1.jpg cards3e2.jpg cards3e3.jpg cards3e4.jpg cards3e5.jpg cards3e6.jpg cards3e7.jpg cards3e8.jpg
cards3f1.jpg cards3f2.jpg cards3f3.jpg cards3f4.jpg cards3f5.jpg cards3f6.jpg cards3f7.jpg cards3f8.jpg cards3f9.jpg cards3f10.jpg
cards4.jpg cards40.jpg cards41.jpg cards42.jpg cards43.jpg cards45.jpg cards46.jpg cards47.jpg cards48.jpg cards5.jpg cards50.jpg cards8.jpg
cards91.jpg cards92.jpg cards93.jpg cards94.jpg cards95.jpg cards96.jpg cards97.jpg cards98.jpg
dino1.jpg dino2.jpg dino3.jpg dino4.jpg dino5.jpg dino6.jpg dino7.jpg dino8.jpg dino9.jpg dino10.jpg
error.mp3 gallery.jpg geo1.jpg geo2.jpg geo3.jpg geo11.jpg geo12.jpg geo13.jpg geo21.jpg
hum1.jpg hum2.jpg hum3.jpg hum4.jpg hum5.jpg hum6.jpg hum7.jpg
index_e.html index_2e.html index_3e.html index_4e.html index_5e.html index_6e.html index_7e.html index_8e.html index_9e.html
index_11e.html index_12e.html index_13e.html index_14e.html index_15e.html index_16e.html
index_21e.html index_22e.html index_23e.html index_24e.html index_25e.html index_26e.html index_27e.html
match.mp3 move.mp3 victory.mp3
`.trim().split(/\s+/).map(file => `./english/${file}`);

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(["./", ...ROOT_FILES, ...ENGLISH_FILES])
    ).then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('campanita-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
