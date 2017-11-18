var state = state || {};
(function () {
  'use strict';
  var projects = {};
  var meta = {
    "title": "Michelangelo Buonarroti",
    "email": "mbuonarroti@reallery.com",
    "tlf": "555-555-555",
    "background": "bg.jpg",
    "google_analytics_id": "UA-98183956-2",
    "youTubeKey": "AIzaSyAPPDBVqSMFkX9UqTj1Nc_roz7oIKqowQc",
    "github": "https://github.com/acamposruiz/reallery",
    "languages": {"en": "English", "es": "Spanish"},
    "languageDefault": "en"
  };
  projects["paintings"] = {
    "name": {"en": "Paintings", "es": "Pinturas"},
    "color": "F0B67F",
    "icon": {"family": "FontAwesome", "icon": "FaPaintBrush"},
    "videos": {
      "en": [{
        "src": "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "EXyay2VKtaA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "m29OuZfsorA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "IQ4hGFWZ7vM",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "57FDqlXpE24",
        "type": "video"
      }],
      "es": [{
        "src": "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 800w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 500w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "zsGaJa3nKp8",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "LwxXShzlhG4",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 800w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 500w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "xnWpEHLB5ho",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 800w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 500w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "GV7oglVpJOU",
        "type": "video"
      }]
    },
    "articles": {
      "en": ["Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ", "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ", "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. "],
      "es": ["El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.", "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento "]
    },
    "publish": true,
    "images": {
      "all": [{
        "type": "photo",
        "path": "content/paintings/images/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg",
        "srcset": ["content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/620_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 620w", "content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/310_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 310w", "content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/160_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 160w"],
        "width": 736,
        "height": 1203
      }, {
        "type": "photo",
        "path": "content/paintings/images/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg",
        "srcset": ["content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/620_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 620w", "content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/310_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 310w", "content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/160_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 160w"],
        "width": 1200,
        "height": 1111
      }, {
        "type": "photo",
        "path": "content/paintings/images/200812314411973499.jpg",
        "srcset": ["content/paintings/images_src/200812314411973499/1240_200812314411973499.jpg 1240w", "content/paintings/images_src/200812314411973499/620_200812314411973499.jpg 620w", "content/paintings/images_src/200812314411973499/310_200812314411973499.jpg 310w", "content/paintings/images_src/200812314411973499/160_200812314411973499.jpg 160w"],
        "width": 1404,
        "height": 924
      }, {
        "type": "photo",
        "path": "content/paintings/images/53de19f3b29e6a642617a00fafbb1b7f.jpg",
        "srcset": ["content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/620_53de19f3b29e6a642617a00fafbb1b7f.jpg 620w", "content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/310_53de19f3b29e6a642617a00fafbb1b7f.jpg 310w", "content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/160_53de19f3b29e6a642617a00fafbb1b7f.jpg 160w"],
        "width": 1237,
        "height": 1024
      }, {
        "type": "photo",
        "path": "content/paintings/images/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg",
        "srcset": ["content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/620_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 620w", "content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/310_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 310w", "content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/160_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 160w"],
        "width": 736,
        "height": 1126
      }, {
        "type": "photo",
        "path": "content/paintings/images/Doni-Tondo.jpg",
        "srcset": ["content/paintings/images_src/Doni-Tondo/620_Doni-Tondo.jpg 620w", "content/paintings/images_src/Doni-Tondo/310_Doni-Tondo.jpg 310w", "content/paintings/images_src/Doni-Tondo/160_Doni-Tondo.jpg 160w"],
        "width": 1020,
        "height": 1024
      }, {
        "type": "photo",
        "path": "content/paintings/images/Michelangelo_Buonarroti_047.jpg",
        "srcset": ["content/paintings/images_src/Michelangelo_Buonarroti_047/1240_Michelangelo_Buonarroti_047.jpg 1240w", "content/paintings/images_src/Michelangelo_Buonarroti_047/620_Michelangelo_Buonarroti_047.jpg 620w", "content/paintings/images_src/Michelangelo_Buonarroti_047/310_Michelangelo_Buonarroti_047.jpg 310w", "content/paintings/images_src/Michelangelo_Buonarroti_047/160_Michelangelo_Buonarroti_047.jpg 160w"],
        "width": 1576,
        "height": 1109
      }, {
        "type": "photo",
        "path": "content/paintings/images/Simoni05.jpg",
        "srcset": ["content/paintings/images_src/Simoni05/620_Simoni05.jpg 620w", "content/paintings/images_src/Simoni05/310_Simoni05.jpg 310w", "content/paintings/images_src/Simoni05/160_Simoni05.jpg 160w"],
        "width": 823,
        "height": 1050
      }, {
        "type": "photo",
        "path": "content/paintings/images/Simoni46.jpg",
        "srcset": ["content/paintings/images_src/Simoni46/620_Simoni46.jpg 620w", "content/paintings/images_src/Simoni46/310_Simoni46.jpg 310w", "content/paintings/images_src/Simoni46/160_Simoni46.jpg 160w"],
        "width": 890,
        "height": 1010
      }, {
        "type": "photo",
        "path": "content/paintings/images/c47930bbcf0e316b116734da17792e82.jpg",
        "srcset": ["content/paintings/images_src/c47930bbcf0e316b116734da17792e82/620_c47930bbcf0e316b116734da17792e82.jpg 620w", "content/paintings/images_src/c47930bbcf0e316b116734da17792e82/310_c47930bbcf0e316b116734da17792e82.jpg 310w", "content/paintings/images_src/c47930bbcf0e316b116734da17792e82/160_c47930bbcf0e316b116734da17792e82.jpg 160w"],
        "width": 772,
        "height": 1051
      }, {
        "type": "photo",
        "path": "content/paintings/images/delphic-sibyl.jpg",
        "srcset": ["content/paintings/images_src/delphic-sibyl/620_delphic-sibyl.jpg 620w", "content/paintings/images_src/delphic-sibyl/310_delphic-sibyl.jpg 310w", "content/paintings/images_src/delphic-sibyl/160_delphic-sibyl.jpg 160w"],
        "width": 990,
        "height": 1363
      }, {
        "type": "photo",
        "path": "content/paintings/images/e2582284ea2764f1d2ca5fbec62ce1be.jpg",
        "srcset": ["content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/620_e2582284ea2764f1d2ca5fbec62ce1be.jpg 620w", "content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/310_e2582284ea2764f1d2ca5fbec62ce1be.jpg 310w", "content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/160_e2582284ea2764f1d2ca5fbec62ce1be.jpg 160w"],
        "width": 832,
        "height": 1070
      }, {
        "type": "photo",
        "path": "content/paintings/images/f72cf39fa78b232b371c0d7ea53986d7.jpg",
        "srcset": ["content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/620_f72cf39fa78b232b371c0d7ea53986d7.jpg 620w", "content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/310_f72cf39fa78b232b371c0d7ea53986d7.jpg 310w", "content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/160_f72cf39fa78b232b371c0d7ea53986d7.jpg 160w"],
        "width": 856,
        "height": 990
      }, {
        "type": "photo",
        "path": "content/paintings/images/la-creacion-de-adan_ee36a05b.png",
        "srcset": ["content/paintings/images_src/la-creacion-de-adan_ee36a05b/620_la-creacion-de-adan_ee36a05b.png 620w", "content/paintings/images_src/la-creacion-de-adan_ee36a05b/310_la-creacion-de-adan_ee36a05b.png 310w", "content/paintings/images_src/la-creacion-de-adan_ee36a05b/160_la-creacion-de-adan_ee36a05b.png 160w"],
        "width": 1115,
        "height": 868
      }, {
        "type": "photo",
        "path": "content/paintings/images/larger.jpg",
        "srcset": ["content/paintings/images_src/larger/620_larger.jpg 620w", "content/paintings/images_src/larger/310_larger.jpg 310w", "content/paintings/images_src/larger/160_larger.jpg 160w"],
        "width": 952,
        "height": 1024
      }, {
        "type": "photo",
        "path": "content/paintings/images/ma1.jpg",
        "srcset": ["content/paintings/images_src/ma1/620_ma1.jpg 620w", "content/paintings/images_src/ma1/310_ma1.jpg 310w", "content/paintings/images_src/ma1/160_ma1.jpg 160w"],
        "width": 1000,
        "height": 1375
      }, {
        "type": "photo",
        "path": "content/paintings/images/michelangelo_8_martyrdom_of_st_peter.jpg",
        "srcset": ["content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/1240_michelangelo_8_martyrdom_of_st_peter.jpg 1240w", "content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/620_michelangelo_8_martyrdom_of_st_peter.jpg 620w", "content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/310_michelangelo_8_martyrdom_of_st_peter.jpg 310w", "content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/160_michelangelo_8_martyrdom_of_st_peter.jpg 160w"],
        "width": 1299,
        "height": 1200
      }, {
        "type": "photo",
        "path": "content/paintings/images/michelangelo_kruisiging_grt.jpg",
        "srcset": ["content/paintings/images_src/michelangelo_kruisiging_grt/620_michelangelo_kruisiging_grt.jpg 620w", "content/paintings/images_src/michelangelo_kruisiging_grt/310_michelangelo_kruisiging_grt.jpg 310w", "content/paintings/images_src/michelangelo_kruisiging_grt/160_michelangelo_kruisiging_grt.jpg 160w"],
        "width": 895,
        "height": 1374
      }, {
        "type": "photo",
        "path": "content/paintings/images/michelangelo_offer_van_noach_grt.jpg",
        "srcset": ["content/paintings/images_src/michelangelo_offer_van_noach_grt/620_michelangelo_offer_van_noach_grt.jpg 620w", "content/paintings/images_src/michelangelo_offer_van_noach_grt/310_michelangelo_offer_van_noach_grt.jpg 310w", "content/paintings/images_src/michelangelo_offer_van_noach_grt/160_michelangelo_offer_van_noach_grt.jpg 160w"],
        "width": 1100,
        "height": 758
      }, {
        "type": "photo",
        "path": "content/paintings/images/the-last-judgement-jan-ii-provost.jpg",
        "srcset": ["content/paintings/images_src/the-last-judgement-jan-ii-provost/620_the-last-judgement-jan-ii-provost.jpg 620w", "content/paintings/images_src/the-last-judgement-jan-ii-provost/310_the-last-judgement-jan-ii-provost.jpg 310w", "content/paintings/images_src/the-last-judgement-jan-ii-provost/160_the-last-judgement-jan-ii-provost.jpg 160w"],
        "width": 900,
        "height": 866
      }]
    }
  };
  projects["sculptures"] = {
    "name": {"en": "Sculptures", "es": "Esculturas"},
    "color": "D6D1B1",
    "icon": {"family": "FontAwesome", "icon": "FaCube"},
    "videos": {
      "en": [{
        "src": "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "EXyay2VKtaA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "m29OuZfsorA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "IQ4hGFWZ7vM",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "57FDqlXpE24",
        "type": "video"
      }],
      "es": [{
        "src": "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 800w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 500w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "zsGaJa3nKp8",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "LwxXShzlhG4",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 800w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 500w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "xnWpEHLB5ho",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 800w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 500w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "GV7oglVpJOU",
        "type": "video"
      }]
    },
    "articles": {
      "en": ["Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ", "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ", "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. "],
      "es": ["El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.", "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento "]
    },
    "publish": true,
    "images": {
      "all": [{
        "type": "photo",
        "path": "content/sculptures/images/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg",
        "srcset": ["content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/620_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 620w", "content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/310_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 310w", "content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/160_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 160w"],
        "width": 736,
        "height": 1121
      }, {
        "type": "photo",
        "path": "content/sculptures/images/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg",
        "srcset": ["content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/620_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 620w", "content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/310_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 310w", "content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/160_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 160w"],
        "width": 670,
        "height": 1515
      }, {
        "type": "photo",
        "path": "content/sculptures/images/45bf890b1e3896ba6f48377b803df002.jpg",
        "srcset": ["content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/620_45bf890b1e3896ba6f48377b803df002.jpg 620w", "content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/310_45bf890b1e3896ba6f48377b803df002.jpg 310w", "content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/160_45bf890b1e3896ba6f48377b803df002.jpg 160w"],
        "width": 835,
        "height": 1200
      }, {
        "type": "photo",
        "path": "content/sculptures/images/49961-87537-66022-4.jpg",
        "srcset": ["content/sculptures/images_src/49961-87537-66022-4/620_49961-87537-66022-4.jpg 620w", "content/sculptures/images_src/49961-87537-66022-4/310_49961-87537-66022-4.jpg 310w", "content/sculptures/images_src/49961-87537-66022-4/160_49961-87537-66022-4.jpg 160w"],
        "width": 1050,
        "height": 1299
      }, {
        "type": "photo",
        "path": "content/sculptures/images/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg",
        "srcset": ["content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/620_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 620w", "content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/310_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 310w", "content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/160_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 160w"],
        "width": 670,
        "height": 1254
      }, {
        "type": "photo",
        "path": "content/sculptures/images/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg",
        "srcset": ["content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/620_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 620w", "content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/310_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 310w", "content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/160_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 160w"],
        "width": 736,
        "height": 1099
      }, {
        "type": "photo",
        "path": "content/sculptures/images/Michelangelo_Buonarroti_sculpture_ml0012.jpg",
        "srcset": ["content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/620_Michelangelo_Buonarroti_sculpture_ml0012.jpg 620w", "content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/310_Michelangelo_Buonarroti_sculpture_ml0012.jpg 310w", "content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/160_Michelangelo_Buonarroti_sculpture_ml0012.jpg 160w"],
        "width": 1024,
        "height": 768
      }, {
        "type": "photo",
        "path": "content/sculptures/images/Michelangelo_Buonarroti_sculpture_ml0013.jpg",
        "srcset": ["content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/620_Michelangelo_Buonarroti_sculpture_ml0013.jpg 620w", "content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/310_Michelangelo_Buonarroti_sculpture_ml0013.jpg 310w", "content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/160_Michelangelo_Buonarroti_sculpture_ml0013.jpg 160w"],
        "width": 1024,
        "height": 768
      }, {
        "type": "photo",
        "path": "content/sculptures/images/Michelangelo_Buonarroti_statua.jpg",
        "srcset": ["content/sculptures/images_src/Michelangelo_Buonarroti_statua/620_Michelangelo_Buonarroti_statua.jpg 620w", "content/sculptures/images_src/Michelangelo_Buonarroti_statua/310_Michelangelo_Buonarroti_statua.jpg 310w", "content/sculptures/images_src/Michelangelo_Buonarroti_statua/160_Michelangelo_Buonarroti_statua.jpg 160w"],
        "width": 1066,
        "height": 1976
      }, {
        "type": "photo",
        "path": "content/sculptures/images/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg",
        "srcset": ["content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/620_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 620w", "content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/310_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 310w", "content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/160_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 160w"],
        "width": 736,
        "height": 1279
      }, {
        "type": "photo",
        "path": "content/sculptures/images/a83be9e9988993ad025c980f785c7805.jpg",
        "srcset": ["content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/620_a83be9e9988993ad025c980f785c7805.jpg 620w", "content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/310_a83be9e9988993ad025c980f785c7805.jpg 310w", "content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/160_a83be9e9988993ad025c980f785c7805.jpg 160w"],
        "width": 908,
        "height": 1200
      }, {
        "type": "photo",
        "path": "content/sculptures/images/b1f4505742ab003d5bfe5dba61495542.jpg",
        "srcset": ["content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/620_b1f4505742ab003d5bfe5dba61495542.jpg 620w", "content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/310_b1f4505742ab003d5bfe5dba61495542.jpg 310w", "content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/160_b1f4505742ab003d5bfe5dba61495542.jpg 160w"],
        "width": 1024,
        "height": 768
      }, {
        "type": "photo",
        "path": "content/sculptures/images/battle-of-centaurs-michelangelo-sculpture-sm.jpg",
        "srcset": ["content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/620_battle-of-centaurs-michelangelo-sculpture-sm.jpg 620w", "content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/310_battle-of-centaurs-michelangelo-sculpture-sm.jpg 310w", "content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/160_battle-of-centaurs-michelangelo-sculpture-sm.jpg 160w"],
        "width": 940,
        "height": 852
      }, {
        "type": "photo",
        "path": "content/sculptures/images/d399d349cb5f5d2d9d5823b6c689c6c5.jpg",
        "srcset": ["content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/1240_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 1240w", "content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/620_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 620w", "content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/310_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 310w", "content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/160_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 160w"],
        "width": 2400,
        "height": 2400
      }, {
        "type": "photo",
        "path": "content/sculptures/images/e3114751f436b7938e96f69e99c3eac8.jpg",
        "srcset": ["content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/620_e3114751f436b7938e96f69e99c3eac8.jpg 620w", "content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/310_e3114751f436b7938e96f69e99c3eac8.jpg 310w", "content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/160_e3114751f436b7938e96f69e99c3eac8.jpg 160w"],
        "width": 1000,
        "height": 1334
      }, {
        "type": "photo",
        "path": "content/sculptures/images/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg",
        "srcset": ["content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/620_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 620w", "content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/310_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 310w", "content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/160_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 160w"],
        "width": 736,
        "height": 1227
      }, {
        "type": "photo",
        "path": "content/sculptures/images/ee4993507f121125fd8a30dde564703d.jpg",
        "srcset": ["content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/620_ee4993507f121125fd8a30dde564703d.jpg 620w", "content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/310_ee4993507f121125fd8a30dde564703d.jpg 310w", "content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/160_ee4993507f121125fd8a30dde564703d.jpg 160w"],
        "width": 1077,
        "height": 1500
      }, {
        "type": "photo",
        "path": "content/sculptures/images/michelangelos_david.jpg",
        "srcset": ["content/sculptures/images_src/michelangelos_david/620_michelangelos_david.jpg 620w", "content/sculptures/images_src/michelangelos_david/310_michelangelos_david.jpg 310w", "content/sculptures/images_src/michelangelos_david/160_michelangelos_david.jpg 160w"],
        "width": 1200,
        "height": 1600
      }, {
        "type": "photo",
        "path": "content/sculptures/images/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg",
        "srcset": ["content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/620_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 620w", "content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/310_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 310w", "content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/160_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 160w"],
        "width": 866,
        "height": 1390
      }]
    }
  };
  projects["architecture"] = {
    "name": {"en": "Architecture", "es": "Arquitectura"},
    "color": "C7EFCF",
    "icon": {"family": "FontAwesome", "icon": "FaBank"},
    "videos": {
      "en": [{
        "src": "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "EXyay2VKtaA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w", "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "m29OuZfsorA",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w", "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "IQ4hGFWZ7vM",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w", "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "57FDqlXpE24",
        "type": "video"
      }],
      "es": [{
        "src": "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 800w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 500w", "https://i.ytimg.com/vi/zsGaJa3nKp8/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "zsGaJa3nKp8",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w", "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "LwxXShzlhG4",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 800w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 500w", "https://i.ytimg.com/vi/xnWpEHLB5ho/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "xnWpEHLB5ho",
        "type": "video"
      }, {
        "src": "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg",
        "srcset": ["https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 1024w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 800w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 500w", "https://i.ytimg.com/vi/GV7oglVpJOU/hqdefault.jpg 320w"],
        "width": 480,
        "height": 360,
        "content": "GV7oglVpJOU",
        "type": "video"
      }]
    },
    "articles": {
      "en": ["Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ", "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ", "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. "],
      "es": ["El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.", "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento "]
    },
    "publish": true,
    "images": {
      "all": [{
        "type": "photo",
        "path": "content/architecture/images/6a00d8345293e069e201901c481049970b-800wi.jpg",
        "srcset": ["content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/620_6a00d8345293e069e201901c481049970b-800wi.jpg 620w", "content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/310_6a00d8345293e069e201901c481049970b-800wi.jpg 310w", "content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/160_6a00d8345293e069e201901c481049970b-800wi.jpg 160w"],
        "width": 800,
        "height": 1327
      }, {
        "type": "photo",
        "path": "content/architecture/images/7d2d42eff423402e7f904a4d927a31bd.jpg",
        "srcset": ["content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/620_7d2d42eff423402e7f904a4d927a31bd.jpg 620w", "content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/310_7d2d42eff423402e7f904a4d927a31bd.jpg 310w", "content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/160_7d2d42eff423402e7f904a4d927a31bd.jpg 160w"],
        "width": 1100,
        "height": 1288
      }],
      "en": [{
        "type": "photo",
        "path": "content/architecture/images_en/Michelangelo's_grave4.jpg",
        "srcset": ["content/architecture/images_en_src/Michelangelo's_grave4/1240_Michelangelo's_grave4.jpg 1240w", "content/architecture/images_en_src/Michelangelo's_grave4/620_Michelangelo's_grave4.jpg 620w", "content/architecture/images_en_src/Michelangelo's_grave4/310_Michelangelo's_grave4.jpg 310w", "content/architecture/images_en_src/Michelangelo's_grave4/160_Michelangelo's_grave4.jpg 160w"],
        "width": 1818,
        "height": 2802
      }, {
        "type": "photo",
        "path": "content/architecture/images_en/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg",
        "srcset": ["content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/620_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 620w", "content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/310_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 310w", "content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/160_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 160w"],
        "width": 1027,
        "height": 1315
      }, {
        "type": "photo",
        "path": "content/architecture/images_en/michelangelo-sistine_chapel.jpg",
        "srcset": ["content/architecture/images_en_src/michelangelo-sistine_chapel/620_michelangelo-sistine_chapel.jpg 620w", "content/architecture/images_en_src/michelangelo-sistine_chapel/310_michelangelo-sistine_chapel.jpg 310w", "content/architecture/images_en_src/michelangelo-sistine_chapel/160_michelangelo-sistine_chapel.jpg 160w"],
        "width": 1055,
        "height": 880
      }, {
        "type": "photo",
        "path": "content/architecture/images_en/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg",
        "srcset": ["content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/1240_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 1240w", "content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/620_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 620w", "content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/310_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 310w", "content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/160_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 160w"],
        "width": 1300,
        "height": 956
      }, {
        "type": "photo",
        "path": "content/architecture/images_en/sistine_ceiling.jpg",
        "srcset": ["content/architecture/images_en_src/sistine_ceiling/1240_sistine_ceiling.jpg 1240w", "content/architecture/images_en_src/sistine_ceiling/620_sistine_ceiling.jpg 620w", "content/architecture/images_en_src/sistine_ceiling/310_sistine_ceiling.jpg 310w", "content/architecture/images_en_src/sistine_ceiling/160_sistine_ceiling.jpg 160w"],
        "width": 1638,
        "height": 951
      }, {
        "type": "photo",
        "path": "content/architecture/images_en/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg",
        "srcset": ["content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/620_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 620w", "content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/310_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 310w", "content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/160_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 160w"],
        "width": 1061,
        "height": 1300
      }],
      "es": [{
        "type": "photo",
        "path": "content/architecture/images_es/07sistineceilinglarge.jpg",
        "srcset": ["content/architecture/images_es_src/07sistineceilinglarge/1240_07sistineceilinglarge.jpg 1240w", "content/architecture/images_es_src/07sistineceilinglarge/620_07sistineceilinglarge.jpg 620w", "content/architecture/images_es_src/07sistineceilinglarge/310_07sistineceilinglarge.jpg 310w", "content/architecture/images_es_src/07sistineceilinglarge/160_07sistineceilinglarge.jpg 160w"],
        "width": 1500,
        "height": 759
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/9876ae707735b309c2e7c87885f2452b.jpg",
        "srcset": ["content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/1240_9876ae707735b309c2e7c87885f2452b.jpg 1240w", "content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/620_9876ae707735b309c2e7c87885f2452b.jpg 620w", "content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/310_9876ae707735b309c2e7c87885f2452b.jpg 310w", "content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/160_9876ae707735b309c2e7c87885f2452b.jpg 160w"],
        "width": 1920,
        "height": 1080
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg",
        "srcset": ["content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/620_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 620w", "content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/310_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 310w", "content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/160_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 160w"],
        "width": 1024,
        "height": 768
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/Michelangelo_Buonarroti_014.jpg",
        "srcset": ["content/architecture/images_es_src/Michelangelo_Buonarroti_014/1240_Michelangelo_Buonarroti_014.jpg 1240w", "content/architecture/images_es_src/Michelangelo_Buonarroti_014/620_Michelangelo_Buonarroti_014.jpg 620w", "content/architecture/images_es_src/Michelangelo_Buonarroti_014/310_Michelangelo_Buonarroti_014.jpg 310w", "content/architecture/images_es_src/Michelangelo_Buonarroti_014/160_Michelangelo_Buonarroti_014.jpg 160w"],
        "width": 2536,
        "height": 3397
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/cffe2e409f7ba55e1d994073adbe3c91.jpg",
        "srcset": ["content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/1240_cffe2e409f7ba55e1d994073adbe3c91.jpg 1240w", "content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/620_cffe2e409f7ba55e1d994073adbe3c91.jpg 620w", "content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/310_cffe2e409f7ba55e1d994073adbe3c91.jpg 310w", "content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/160_cffe2e409f7ba55e1d994073adbe3c91.jpg 160w"],
        "width": 2270,
        "height": 3512
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/cupulasanpedromiguelangel.jpg",
        "srcset": ["content/architecture/images_es_src/cupulasanpedromiguelangel/620_cupulasanpedromiguelangel.jpg 620w", "content/architecture/images_es_src/cupulasanpedromiguelangel/310_cupulasanpedromiguelangel.jpg 310w", "content/architecture/images_es_src/cupulasanpedromiguelangel/160_cupulasanpedromiguelangel.jpg 160w"],
        "width": 1000,
        "height": 1375
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/e59aa54e9ca3d468b4de9c6ba45c3471.jpg",
        "srcset": ["content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/1240_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 1240w", "content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/620_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 620w", "content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/310_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 310w", "content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/160_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 160w"],
        "width": 1270,
        "height": 900
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/ee178817c994d3224eb461259fd5d86f.jpg",
        "srcset": ["content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/620_ee178817c994d3224eb461259fd5d86f.jpg 620w", "content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/310_ee178817c994d3224eb461259fd5d86f.jpg 310w", "content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/160_ee178817c994d3224eb461259fd5d86f.jpg 160w"],
        "width": 1024,
        "height": 768
      }, {
        "type": "photo",
        "path": "content/architecture/images_es/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg",
        "srcset": ["content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/620_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 620w", "content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/310_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 310w", "content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/160_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 160w"],
        "width": 1203,
        "height": 1300
      }]
    }
  };
  state = {meta: meta, projects: projects};
})();
export default state;