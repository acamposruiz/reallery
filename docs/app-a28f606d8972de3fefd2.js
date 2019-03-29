!(function(e) {
  function t(t) {
    for (var a, n, o = t[0], c = t[1], l = t[2], g = 0, p = []; g < o.length; g++)
      (n = o[g]), i[n] && p.push(i[n][0]), (i[n] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    for (m && m(t); p.length; ) p.shift()();
    return r.push.apply(r, l || []), s();
  }
  function s() {
    for (var e, t = 0; t < r.length; t++) {
      for (var s = r[t], a = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== i[c] && (a = !1);
      }
      a && (r.splice(t--, 1), (e = n((n.s = s[0]))));
    }
    return e;
  }
  var a = {},
    i = { 2: 0 },
    r = [];
  function n(t) {
    if (a[t]) return a[t].exports;
    var s = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = e),
    (n.c = a),
    (n.d = function(e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            s,
            a,
            function(t) {
              return e[t];
            }.bind(null, a),
          );
      return s;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "");
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    c = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var m = c;
  r.push([206, 5, 1, 4, 3, 0]), s();
})({
  206: function(e, t, s) {
    "use strict";
    s.r(t);
    var a = {};
    s.r(a),
      s.d(a, "faPaintBrush", function() {
        return g.c;
      }),
      s.d(a, "faCube", function() {
        return g.a;
      }),
      s.d(a, "faUniversity", function() {
        return g.e;
      });
    var i;
    ((i = {}).paintings = {
      name: { en: "Paintings", es: "Pinturas" },
      color: "F0B67F",
      icon: { family: "FontAwesome", icon: "faPaintBrush" },
      videos: {
        en: [
          {
            src: "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
            srcset: [
              "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w",
              "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w",
              "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w",
              "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w",
            ],
            width: 480,
            height: 360,
            content: "EXyay2VKtaA",
            type: "video",
          },
          {
            src: "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
            srcset: [
              "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w",
              "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w",
              "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w",
              "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w",
            ],
            width: 480,
            height: 360,
            content: "m29OuZfsorA",
            type: "video",
          },
          {
            src: "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
            srcset: [
              "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w",
              "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w",
              "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w",
              "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w",
            ],
            width: 480,
            height: 360,
            content: "IQ4hGFWZ7vM",
            type: "video",
          },
          {
            src: "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
            srcset: [
              "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w",
              "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w",
              "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w",
              "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w",
            ],
            width: 480,
            height: 360,
            content: "57FDqlXpE24",
            type: "video",
          },
        ],
        es: [
          {},
          {
            src: "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
            srcset: [
              "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w",
              "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w",
              "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w",
              "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w",
            ],
            width: 480,
            height: 360,
            content: "LwxXShzlhG4",
            type: "video",
          },
          {},
          {},
        ],
      },
      articles: {
        en: [
          "Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ",
          "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ",
          "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. ",
        ],
        es: [
          "El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.",
          "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento ",
        ],
      },
      publish: !0,
      images: {
        all: [
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/620_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/310_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel/160_0c54b6e70a5ceed397004a94fc53fa5d--michelangelo-paintings-sistine-chapel.jpg 160w",
            ],
            width: 736,
            height: 1203,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/620_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/310_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti)/160_1200px-Conversion_of_Saint_Paul_(Michelangelo_Buonarroti).jpg 160w",
            ],
            width: 1200,
            height: 1111,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/200812314411973499.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/200812314411973499/1240_200812314411973499.jpg 1240w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/200812314411973499/620_200812314411973499.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/200812314411973499/310_200812314411973499.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/200812314411973499/160_200812314411973499.jpg 160w",
            ],
            width: 1404,
            height: 924,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/53de19f3b29e6a642617a00fafbb1b7f.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/620_53de19f3b29e6a642617a00fafbb1b7f.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/310_53de19f3b29e6a642617a00fafbb1b7f.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/53de19f3b29e6a642617a00fafbb1b7f/160_53de19f3b29e6a642617a00fafbb1b7f.jpg 160w",
            ],
            width: 1237,
            height: 1024,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/620_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/310_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works/160_8b37fd07dfc7b2ee868d445f72c1124c--michelangelo-paintings-michelangelo-works.jpg 160w",
            ],
            width: 736,
            height: 1126,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/Doni-Tondo.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Doni-Tondo/620_Doni-Tondo.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Doni-Tondo/310_Doni-Tondo.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Doni-Tondo/160_Doni-Tondo.jpg 160w",
            ],
            width: 1020,
            height: 1024,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/Michelangelo_Buonarroti_047.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Michelangelo_Buonarroti_047/1240_Michelangelo_Buonarroti_047.jpg 1240w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Michelangelo_Buonarroti_047/620_Michelangelo_Buonarroti_047.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Michelangelo_Buonarroti_047/310_Michelangelo_Buonarroti_047.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Michelangelo_Buonarroti_047/160_Michelangelo_Buonarroti_047.jpg 160w",
            ],
            width: 1576,
            height: 1109,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/Simoni05.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni05/620_Simoni05.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni05/310_Simoni05.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni05/160_Simoni05.jpg 160w",
            ],
            width: 823,
            height: 1050,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/Simoni46.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni46/620_Simoni46.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni46/310_Simoni46.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/Simoni46/160_Simoni46.jpg 160w",
            ],
            width: 890,
            height: 1010,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/c47930bbcf0e316b116734da17792e82.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/c47930bbcf0e316b116734da17792e82/620_c47930bbcf0e316b116734da17792e82.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/c47930bbcf0e316b116734da17792e82/310_c47930bbcf0e316b116734da17792e82.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/c47930bbcf0e316b116734da17792e82/160_c47930bbcf0e316b116734da17792e82.jpg 160w",
            ],
            width: 772,
            height: 1051,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/delphic-sibyl.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/delphic-sibyl/620_delphic-sibyl.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/delphic-sibyl/310_delphic-sibyl.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/delphic-sibyl/160_delphic-sibyl.jpg 160w",
            ],
            width: 990,
            height: 1363,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/e2582284ea2764f1d2ca5fbec62ce1be.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/620_e2582284ea2764f1d2ca5fbec62ce1be.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/310_e2582284ea2764f1d2ca5fbec62ce1be.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/e2582284ea2764f1d2ca5fbec62ce1be/160_e2582284ea2764f1d2ca5fbec62ce1be.jpg 160w",
            ],
            width: 832,
            height: 1070,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/f72cf39fa78b232b371c0d7ea53986d7.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/620_f72cf39fa78b232b371c0d7ea53986d7.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/310_f72cf39fa78b232b371c0d7ea53986d7.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/f72cf39fa78b232b371c0d7ea53986d7/160_f72cf39fa78b232b371c0d7ea53986d7.jpg 160w",
            ],
            width: 856,
            height: 990,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/la-creacion-de-adan_ee36a05b.png",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/la-creacion-de-adan_ee36a05b/620_la-creacion-de-adan_ee36a05b.png 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/la-creacion-de-adan_ee36a05b/310_la-creacion-de-adan_ee36a05b.png 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/la-creacion-de-adan_ee36a05b/160_la-creacion-de-adan_ee36a05b.png 160w",
            ],
            width: 1115,
            height: 868,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/larger.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/larger/620_larger.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/larger/310_larger.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/larger/160_larger.jpg 160w",
            ],
            width: 952,
            height: 1024,
          },
          {
            type: "photo",
            path: "reallery/tests/e2e/mocks/site/content/paintings/images/ma1.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/ma1/620_ma1.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/ma1/310_ma1.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/ma1/160_ma1.jpg 160w",
            ],
            width: 1e3,
            height: 1375,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/michelangelo_8_martyrdom_of_st_peter.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/1240_michelangelo_8_martyrdom_of_st_peter.jpg 1240w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/620_michelangelo_8_martyrdom_of_st_peter.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/310_michelangelo_8_martyrdom_of_st_peter.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_8_martyrdom_of_st_peter/160_michelangelo_8_martyrdom_of_st_peter.jpg 160w",
            ],
            width: 1299,
            height: 1200,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/michelangelo_kruisiging_grt.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_kruisiging_grt/620_michelangelo_kruisiging_grt.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_kruisiging_grt/310_michelangelo_kruisiging_grt.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_kruisiging_grt/160_michelangelo_kruisiging_grt.jpg 160w",
            ],
            width: 895,
            height: 1374,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/michelangelo_offer_van_noach_grt.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_offer_van_noach_grt/620_michelangelo_offer_van_noach_grt.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_offer_van_noach_grt/310_michelangelo_offer_van_noach_grt.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/michelangelo_offer_van_noach_grt/160_michelangelo_offer_van_noach_grt.jpg 160w",
            ],
            width: 1100,
            height: 758,
          },
          {
            type: "photo",
            path:
              "reallery/tests/e2e/mocks/site/content/paintings/images/the-last-judgement-jan-ii-provost.jpg",
            srcset: [
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/the-last-judgement-jan-ii-provost/620_the-last-judgement-jan-ii-provost.jpg 620w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/the-last-judgement-jan-ii-provost/310_the-last-judgement-jan-ii-provost.jpg 310w",
              "reallery/tests/e2e/mocks/site/content/paintings/images_src/the-last-judgement-jan-ii-provost/160_the-last-judgement-jan-ii-provost.jpg 160w",
            ],
            width: 900,
            height: 866,
          },
        ],
      },
    }),
      (i.sculptures = {
        name: { en: "Sculptures", es: "Esculturas" },
        color: "D6D1B1",
        icon: { family: "FontAwesome", icon: "faCube" },
        videos: {
          en: [
            {
              src: "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "EXyay2VKtaA",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "m29OuZfsorA",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "IQ4hGFWZ7vM",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "57FDqlXpE24",
              type: "video",
            },
          ],
          es: [
            {},
            {
              src: "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "LwxXShzlhG4",
              type: "video",
            },
            {},
            {},
          ],
        },
        articles: {
          en: [
            "Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ",
            "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ",
            "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. ",
          ],
          es: [
            "El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.",
            "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento ",
          ],
        },
        publish: !0,
        images: {
          all: [
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/620_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/310_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy/160_22423fe666d268284c979bb19f6ec4f9--michelangelo-pieta-florence-italy.jpg 160w",
              ],
              width: 736,
              height: 1121,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/620_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/310_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance/160_39774443ade095e975a44ede7d1dd99c--medici-italian-renaissance.jpg 160w",
              ],
              width: 670,
              height: 1515,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/45bf890b1e3896ba6f48377b803df002.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/620_45bf890b1e3896ba6f48377b803df002.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/310_45bf890b1e3896ba6f48377b803df002.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/45bf890b1e3896ba6f48377b803df002/160_45bf890b1e3896ba6f48377b803df002.jpg 160w",
              ],
              width: 835,
              height: 1200,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/49961-87537-66022-4.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/49961-87537-66022-4/620_49961-87537-66022-4.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/49961-87537-66022-4/310_49961-87537-66022-4.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/49961-87537-66022-4/160_49961-87537-66022-4.jpg 160w",
              ],
              width: 1050,
              height: 1299,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/620_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/310_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork/160_7b76be34413598682a432ad43ca8d9cb--florence-italy-artwork.jpg 160w",
              ],
              width: 670,
              height: 1254,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/620_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/310_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo/160_817ba0e90f4715d019a164c2efd68585--renaissance-art-michelangelo.jpg 160w",
              ],
              width: 736,
              height: 1099,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/Michelangelo_Buonarroti_sculpture_ml0012.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/620_Michelangelo_Buonarroti_sculpture_ml0012.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/310_Michelangelo_Buonarroti_sculpture_ml0012.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0012/160_Michelangelo_Buonarroti_sculpture_ml0012.jpg 160w",
              ],
              width: 1024,
              height: 768,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/Michelangelo_Buonarroti_sculpture_ml0013.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/620_Michelangelo_Buonarroti_sculpture_ml0013.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/310_Michelangelo_Buonarroti_sculpture_ml0013.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_sculpture_ml0013/160_Michelangelo_Buonarroti_sculpture_ml0013.jpg 160w",
              ],
              width: 1024,
              height: 768,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/Michelangelo_Buonarroti_statua.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_statua/620_Michelangelo_Buonarroti_statua.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_statua/310_Michelangelo_Buonarroti_statua.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/Michelangelo_Buonarroti_statua/160_Michelangelo_Buonarroti_statua.jpg 160w",
              ],
              width: 1066,
              height: 1976,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/620_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/310_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo/160_a4b77972a664aba476718997448c9014--famous-sculptures-michelangelo.jpg 160w",
              ],
              width: 736,
              height: 1279,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/a83be9e9988993ad025c980f785c7805.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/620_a83be9e9988993ad025c980f785c7805.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/310_a83be9e9988993ad025c980f785c7805.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/a83be9e9988993ad025c980f785c7805/160_a83be9e9988993ad025c980f785c7805.jpg 160w",
              ],
              width: 908,
              height: 1200,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/b1f4505742ab003d5bfe5dba61495542.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/620_b1f4505742ab003d5bfe5dba61495542.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/310_b1f4505742ab003d5bfe5dba61495542.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/b1f4505742ab003d5bfe5dba61495542/160_b1f4505742ab003d5bfe5dba61495542.jpg 160w",
              ],
              width: 1024,
              height: 768,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/battle-of-centaurs-michelangelo-sculpture-sm.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/620_battle-of-centaurs-michelangelo-sculpture-sm.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/310_battle-of-centaurs-michelangelo-sculpture-sm.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/battle-of-centaurs-michelangelo-sculpture-sm/160_battle-of-centaurs-michelangelo-sculpture-sm.jpg 160w",
              ],
              width: 940,
              height: 852,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/d399d349cb5f5d2d9d5823b6c689c6c5.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/1240_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/620_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/310_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/d399d349cb5f5d2d9d5823b6c689c6c5/160_d399d349cb5f5d2d9d5823b6c689c6c5.jpg 160w",
              ],
              width: 2400,
              height: 2400,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/e3114751f436b7938e96f69e99c3eac8.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/620_e3114751f436b7938e96f69e99c3eac8.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/310_e3114751f436b7938e96f69e99c3eac8.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e3114751f436b7938e96f69e99c3eac8/160_e3114751f436b7938e96f69e99c3eac8.jpg 160w",
              ],
              width: 1e3,
              height: 1334,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/620_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/310_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art/160_e7b9e0e1a6b6144b8cef662bd4927f7b--high-renaissance-italian-art.jpg 160w",
              ],
              width: 736,
              height: 1227,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/ee4993507f121125fd8a30dde564703d.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/620_ee4993507f121125fd8a30dde564703d.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/310_ee4993507f121125fd8a30dde564703d.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/ee4993507f121125fd8a30dde564703d/160_ee4993507f121125fd8a30dde564703d.jpg 160w",
              ],
              width: 1077,
              height: 1500,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/michelangelos_david.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/michelangelos_david/620_michelangelos_david.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/michelangelos_david/310_michelangelos_david.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/michelangelos_david/160_michelangelos_david.jpg 160w",
              ],
              width: 1200,
              height: 1600,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/sculptures/images/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/620_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/310_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/sculptures/images_src/moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY/160_moses-of-michelangelo-marble-sculpture-by-michelangelo-buonarroti-BG8TAY.jpg 160w",
              ],
              width: 866,
              height: 1390,
            },
          ],
        },
      }),
      (i.architecture = {
        name: { en: "Architecture", es: "Arquitectura" },
        color: "C7EFCF",
        icon: { family: "FontAwesome", icon: "faUniversity" },
        videos: {
          en: [
            {
              src: "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/EXyay2VKtaA/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "EXyay2VKtaA",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/m29OuZfsorA/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "m29OuZfsorA",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/IQ4hGFWZ7vM/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "IQ4hGFWZ7vM",
              type: "video",
            },
            {
              src: "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/57FDqlXpE24/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "57FDqlXpE24",
              type: "video",
            },
          ],
          es: [
            {},
            {
              src: "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg",
              srcset: [
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 1024w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 800w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 500w",
                "https://i.ytimg.com/vi/LwxXShzlhG4/hqdefault.jpg 320w",
              ],
              width: 480,
              height: 360,
              content: "LwxXShzlhG4",
              type: "video",
            },
            {},
            {},
          ],
        },
        articles: {
          en: [
            "Lorem very carrots, enhanced ecological environment. However, blockage, it is not a weekend, from chili pregnant itself of football pain scores or football. Com will gateway fears. Present running my man with sad, developers soccer developer of time. in an urn or outdoor carton targeted in the tank. jasmine and laoreet no, will need sapien. the Bureau of carrots running mattis.Aenean members of the targeted region carrots convenience. lorem software is free to live deductible leakage. Clinical and trigger the fear of antioxidants vulputate . Warcraft players and soft rice and sugar. Chinese football bananas pain. Cell Phones alarm makeup of the valley. ",
            "The man has not lion vehicles bows of the propaganda. Chat sit put players need members. Orci various Penatibus Super Bowl mountains instantly. Each manufacturing Mauris in football sometimes, and CNN only brought about. Hell casino feel submissions cras magnis dis parturient montes, orci nibh accumsan risus. Suspendisse cursus sapien eu nor of the throat, or being pregnant eu pharetra. Donec auctor bibendum lectus, consectetuer consequat lorem sagittis porta. ",
            "Clinical and propaganda at ultricies sterilized and economy. PakSoft at lift him pull skirt. Before the very first taste clinical mourning and basketball set their care, the borders of the macro not only ecological libero. Present grief but Ligula the quiver that of lakes weekend. the latest life skills level. jasmine just sightseeing, eu and just the throat at school. even ecological that chili or developers. however, members of the mass clinical, notebook developers salad taste like. Each vulputate to save and invest. however mourning sad element. ",
          ],
          es: [
            "El hombre no tiene vehículos león arcos de la propaganda. Chatea sientan ponen los jugadores necesitan miembros. Orci varias montañas Penatibus Super Bowl al instante. Cada fabricación Mauris veces en el fútbol, ​​y CNN única provocada. Infierno casino siente presentaciones cras Magnis dis parturienta montes, Orci nibh accumsan RISUS. Suspendisse cursus sapiens UE ni de la garganta, o estar embarazada pharetra UE. Donec auctor bibendum lectus consectetuer consequat lorem sagittis porta.",
            "Clínica y la propaganda en ultricies esterilizados y economía. PakSoft al ascensor le tire de la falda. Antes del duelo clínico primer sabor y de baloncesto fijan su atención, las fronteras de la macro no sólo libero ecológico. Aflicción presente, pero el temblor que Ligula de lagos fin de semana. la última habilidades para la vida nivel. jazmín acaba de hacer turismo, la UE y sólo la garganta en la escuela. incluso ecológico que chile o desarrolladores. Sin embargo, los miembros de la masa clínicos, desarrolladores portátiles ensalada de sabor. Cada vulputate a ahorrar e invertir. Sin embargo luto triste elemento ",
          ],
        },
        publish: !0,
        images: {
          all: [
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images/6a00d8345293e069e201901c481049970b-800wi.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/620_6a00d8345293e069e201901c481049970b-800wi.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/310_6a00d8345293e069e201901c481049970b-800wi.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/6a00d8345293e069e201901c481049970b-800wi/160_6a00d8345293e069e201901c481049970b-800wi.jpg 160w",
              ],
              width: 800,
              height: 1327,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images/7d2d42eff423402e7f904a4d927a31bd.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/620_7d2d42eff423402e7f904a4d927a31bd.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/310_7d2d42eff423402e7f904a4d927a31bd.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_src/7d2d42eff423402e7f904a4d927a31bd/160_7d2d42eff423402e7f904a4d927a31bd.jpg 160w",
              ],
              width: 1100,
              height: 1288,
            },
          ],
          en: [
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/Michelangelo's_grave4.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/Michelangelo's_grave4/1240_Michelangelo's_grave4.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/Michelangelo's_grave4/620_Michelangelo's_grave4.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/Michelangelo's_grave4/310_Michelangelo's_grave4.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/Michelangelo's_grave4/160_Michelangelo's_grave4.jpg 160w",
              ],
              width: 1818,
              height: 2802,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/620_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/310_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79/160_michelangelo-readrm-LaurentLib-56a02b9a5f9b58eba4af3e79.jpg 160w",
              ],
              width: 1027,
              height: 1315,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/michelangelo-sistine_chapel.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-sistine_chapel/620_michelangelo-sistine_chapel.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-sistine_chapel/310_michelangelo-sistine_chapel.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/michelangelo-sistine_chapel/160_michelangelo-sistine_chapel.jpg 160w",
              ],
              width: 1055,
              height: 880,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/1240_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/620_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/310_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1/160_piazza-di-campidoglio-rome-view-of-steps-towards-museum-architect-EDAGJ1.jpg 160w",
              ],
              width: 1300,
              height: 956,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/sistine_ceiling.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/sistine_ceiling/1240_sistine_ceiling.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/sistine_ceiling/620_sistine_ceiling.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/sistine_ceiling/310_sistine_ceiling.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/sistine_ceiling/160_sistine_ceiling.jpg 160w",
              ],
              width: 1638,
              height: 951,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_en/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/620_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/310_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_en_src/tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313/160_tumba-de-michelangelo-buonarroti-en-la-basílica-de-santa-croce-florencia-76395313.jpg 160w",
              ],
              width: 1061,
              height: 1300,
            },
          ],
          es: [
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/07sistineceilinglarge.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/07sistineceilinglarge/1240_07sistineceilinglarge.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/07sistineceilinglarge/620_07sistineceilinglarge.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/07sistineceilinglarge/310_07sistineceilinglarge.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/07sistineceilinglarge/160_07sistineceilinglarge.jpg 160w",
              ],
              width: 1500,
              height: 759,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/9876ae707735b309c2e7c87885f2452b.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/1240_9876ae707735b309c2e7c87885f2452b.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/620_9876ae707735b309c2e7c87885f2452b.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/310_9876ae707735b309c2e7c87885f2452b.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/9876ae707735b309c2e7c87885f2452b/160_9876ae707735b309c2e7c87885f2452b.jpg 160w",
              ],
              width: 1920,
              height: 1080,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/620_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/310_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome/160_Michelangelo-Buonarroti-1564-st-peter-s-basilica-dome.jpg 160w",
              ],
              width: 1024,
              height: 768,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/Michelangelo_Buonarroti_014.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo_Buonarroti_014/1240_Michelangelo_Buonarroti_014.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo_Buonarroti_014/620_Michelangelo_Buonarroti_014.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo_Buonarroti_014/310_Michelangelo_Buonarroti_014.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/Michelangelo_Buonarroti_014/160_Michelangelo_Buonarroti_014.jpg 160w",
              ],
              width: 2536,
              height: 3397,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/cffe2e409f7ba55e1d994073adbe3c91.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/1240_cffe2e409f7ba55e1d994073adbe3c91.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/620_cffe2e409f7ba55e1d994073adbe3c91.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/310_cffe2e409f7ba55e1d994073adbe3c91.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cffe2e409f7ba55e1d994073adbe3c91/160_cffe2e409f7ba55e1d994073adbe3c91.jpg 160w",
              ],
              width: 2270,
              height: 3512,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/cupulasanpedromiguelangel.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cupulasanpedromiguelangel/620_cupulasanpedromiguelangel.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cupulasanpedromiguelangel/310_cupulasanpedromiguelangel.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/cupulasanpedromiguelangel/160_cupulasanpedromiguelangel.jpg 160w",
              ],
              width: 1e3,
              height: 1375,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/e59aa54e9ca3d468b4de9c6ba45c3471.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/1240_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 1240w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/620_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/310_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/e59aa54e9ca3d468b4de9c6ba45c3471/160_e59aa54e9ca3d468b4de9c6ba45c3471.jpg 160w",
              ],
              width: 1270,
              height: 900,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/ee178817c994d3224eb461259fd5d86f.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/620_ee178817c994d3224eb461259fd5d86f.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/310_ee178817c994d3224eb461259fd5d86f.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/ee178817c994d3224eb461259fd5d86f/160_ee178817c994d3224eb461259fd5d86f.jpg 160w",
              ],
              width: 1024,
              height: 768,
            },
            {
              type: "photo",
              path:
                "reallery/tests/e2e/mocks/site/content/architecture/images_es/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg",
              srcset: [
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/620_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 620w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/310_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 310w",
                "reallery/tests/e2e/mocks/site/content/architecture/images_es_src/michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083/160_michelangelo-moses-tomb-pope-julius-ii-rome-marbled-sculptural-architectural-ensemble-buonarroti-church-san-58722083.jpg 160w",
              ],
              width: 1203,
              height: 1300,
            },
          ],
        },
      });
    var r = {
        meta: {
          title: "Michelangelo Buonarroti",
          email: "mbuonarroti@reallery.com",
          tlf: "555-555-555",
          background: "bg.jpg",
          google_analytics_id: "UA-98183956-2",
          youTubeKey: "AIzaSyAPPDBVqSMFkX9UqTj1Nc_roz7oIKqowQc",
          github: "https://github.com/acamposruiz/reallery",
          languages: { en: "English", es: "Spanish" },
          languageDefault: "en",
        },
        projects: i,
      },
      n = s(0),
      o = s.n(n),
      c = s(28),
      l = s.n(c),
      m = s(19),
      g = s(5);
    function p(e) {
      return (p =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function h(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function u(e, t) {
      return !t || ("object" !== p(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e)
        : t;
    }
    function d(e) {
      return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function f(e, t) {
      return (f =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var b = (function(e) {
      function t(e) {
        return (
          (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, t),
          u(this, d(t).call(this, e))
        );
      }
      var s, i, r;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && f(e, t);
        })(t, o.a.Component),
        (s = t),
        (i = [
          {
            key: "render",
            value: function() {
              return o.a.createElement(m.a, { icon: a[this.props.dataicon.icon] });
            },
          },
        ]) && h(s.prototype, i),
        r && h(s, r),
        t
      );
    })();
    function _(e) {
      return (_ =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function y(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function w(e, t) {
      return !t || ("object" !== _(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e)
        : t;
    }
    function j(e) {
      return (j = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function v(e, t) {
      return (v =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var k = (function(e) {
        function t(e) {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            w(this, j(t).call(this, e))
          );
        }
        var s, a, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && v(e, t);
          })(t, o.a.Component),
          (s = t),
          (a = [
            {
              key: "render",
              value: function() {
                var e = "icon-ico_" + this.props.key2,
                  t =
                    "/reallery/#/" +
                    (this.props.lng ? this.props.lng + "/" : "") +
                    "project/view/" +
                    this.props.key2,
                  s = o.a.createElement("div", { className: "text title" }, this.props.name),
                  a = this.props.icon || { family: "FontAwesome", icon: "FaAsterisk" };
                return o.a.createElement(
                  "div",
                  {
                    className: "project-button-container "
                      .concat(this.props.active ? " active" : " no-active", " home-project-button-")
                      .concat(this.props.key2),
                  },
                  o.a.createElement(
                    "a",
                    { href: t },
                    o.a.createElement(
                      "div",
                      { className: "project-icon color-".concat(this.props.color, "  ").concat(e) },
                      o.a.createElement(b, { dataicon: { family: a.family, icon: a.icon } }),
                    ),
                    "project" === this.props.view ? s : null,
                  ),
                  "home" === this.props.view ? s : null,
                );
              },
            },
          ]) && y(s.prototype, a),
          i && y(s, i),
          t
        );
      })(),
      E = (s(89), s(93), s(117), s(78)),
      S = s.n(E),
      q = s(79),
      M = s.n(q),
      O = s(80),
      B = s.n(O),
      A = s(42),
      P = s.n(A);
    function C(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var s = [],
            a = !0,
            i = !1,
            r = void 0;
          try {
            for (
              var n, o = e[Symbol.iterator]();
              !(a = (n = o.next()).done) && (s.push(n.value), !t || s.length !== t);
              a = !0
            );
          } catch (e) {
            (i = !0), (r = e);
          } finally {
            try {
              a || null == o.return || o.return();
            } finally {
              if (i) throw r;
            }
          }
          return s;
        })(e, t) ||
        (function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        })()
      );
    }
    var x = {};
    function z(e) {
      return "any" == e
        ? ((x.is_mobile_any = x.is_mobile_any || P.a.any), x.is_mobile_any)
        : "phone" == e
        ? ((x.is_mobile_phone = x.is_mobile_phone || P.a.phone), x.is_mobile_phone)
        : void 0;
    }
    function L(e) {
      var t = 0;
      e.some(function(e) {
        return (
          e.srcset
            .filter(function(e) {
              return -1 != [1240, 620].indexOf(parseInt(e.split(" ")[1]));
            })
            .map(function(e) {
              return e.split(" ")[0];
            })
            .forEach(function(e) {
              (new Image().src = e), t++;
            }),
          t > (z("any") ? 4 : 6)
        );
      });
    }
    var X = {
        merge: function() {
          for (
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              s = [],
              a = C(e.length > t.length ? [e, t] : [t, e], 2),
              i = a[0],
              r = a[1],
              n = Math.floor(i.length / r.length),
              o = 0,
              c = 0;
            o < i.length;
            o += n, c++
          ) {
            if (c >= r.length) {
              s = s.concat(i.slice(o));
              break;
            }
            s.push(r[c]), (s = s.concat(i.slice(o, o + n)));
          }
          return s;
        },
        is_mobile: z,
        preload: {
          gallery: L,
          home: function(e) {
            Object.keys(e)
              .map(function(t) {
                return e[t].images;
              })
              .forEach(function(e) {
                return L(e);
              });
          },
        },
      },
      G = s(10),
      D = s.n(G);
    function I(e) {
      return (I =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function F(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function N(e) {
      return (N = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Z(e, t) {
      return (Z =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function T(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    var V = 200,
      W = X.is_mobile("phone") ? 5 : 10,
      K = (function(e) {
        function t(e) {
          var s, a, i;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (a = this),
            ((s =
              !(i = N(t).call(this, e)) || ("object" !== I(i) && "function" != typeof i)
                ? T(a)
                : i).state = {
              loadedAll: !1,
              photos: [],
              videos: [],
              articles: [],
              items: [],
              itemsStore: [],
              itemsLightbox: { type: "images", items: [] },
            }),
            (s.handleScroll = s.handleScroll.bind(T(T(s)))),
            (s.loadMoreItems = D.a.debounce(s.loadMoreItems.bind(T(T(s))), V)),
            (s.handleResize = D.a.debounce(s.handleResize.bind(T(T(s))), V)),
            (s.closeLightbox = s.closeLightbox.bind(T(T(s)))),
            (s.openLightbox = s.openLightbox.bind(T(T(s)))),
            (s.gotoNext = s.gotoNext.bind(T(T(s)))),
            (s.gotoPrevious = s.gotoPrevious.bind(T(T(s)))),
            s
          );
        }
        var s, a, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && Z(e, t);
          })(t, o.a.Component),
          (s = t),
          (a = [
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                if (e.project) {
                  var t = D.a
                      .get(e, "project.images.all")
                      .concat(e.lng ? D.a.get(e, "project.images.".concat(e.lng)) : [])
                      .map(function(e) {
                        return D.a.pick(e, ["src", "srcset", "width", "height", "type"]);
                      }),
                    s = e.lng ? e.project.videos[e.lng] : e.project.videos,
                    a = (e.lng ? e.project.articles[e.lng] : e.project.articles).map(function(e) {
                      return { type: "article", content: e };
                    }),
                    i = X.merge(X.merge(a, s), t);
                  this.setState({
                    loadedAll: !1,
                    photos: t,
                    videos: s,
                    articles: a,
                    items: [],
                    itemsStore: i,
                    itemsLightbox: { type: "images", items: [] },
                    cols: this.getCols(),
                  }),
                    this.loadMoreItems();
                } else this.setState({ loadedAll: !1, photos: [], videos: [], itemsStore: [] });
              },
            },
            {
              key: "componentDidUpdate",
              value: function(e, t) {
                this.handleScroll();
              },
            },
            {
              key: "componentDidMount",
              value: function() {
                window.addEventListener("scroll", this.handleScroll),
                  window.addEventListener("resize", this.handleResize);
              },
            },
            {
              key: "handleResize",
              value: function() {
                var e = this.getCols();
                this.setState({ cols: e });
              },
            },
            {
              key: "handleScroll",
              value: function() {
                var e = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                this.props.project &&
                  !this.state.loadedAll &&
                  window.innerHeight + e >=
                    Math.min(
                      document.body.offsetHeight - 50,
                      document.getElementById("msg-loading-more").getBoundingClientRect().height,
                    ) &&
                  this.loadMoreItems();
              },
            },
            {
              key: "getCols",
              value: function() {
                var e = 1;
                return window.innerWidth >= 480 && (e = 2), window.innerWidth >= 1024 && (e = 3), e;
              },
            },
            {
              key: "loadMoreItems",
              value: function() {
                var e = this.state.itemsStore.slice(0, W),
                  t = this.state.itemsStore.slice(W),
                  s = !t.length;
                this.setState({ items: this.state.items.concat(e), itemsStore: t, loadedAll: s });
              },
            },
            {
              key: "openLightbox",
              value: function(e, t, s) {
                t.preventDefault(),
                  this.setState({
                    itemsLightbox: {
                      type: "photos" == s ? "images" : "articles" == s ? "texts" : "videos",
                      items:
                        "photos" == s
                          ? this.state[s]
                          : this.state[s].map(function(e) {
                              return e.content;
                            }),
                    },
                    currentItem: e,
                    lightboxIsOpen: !0,
                  });
              },
            },
            {
              key: "closeLightbox",
              value: function() {
                this.setState({ currentItem: 0, lightboxIsOpen: !1 });
              },
            },
            {
              key: "gotoPrevious",
              value: function() {
                this.setState({ currentItem: this.state.currentItem - 1 });
              },
            },
            {
              key: "gotoNext",
              value: function() {
                this.setState({ currentItem: this.state.currentItem + 1 });
              },
            },
            {
              key: "render",
              value: function() {
                return this.props.project
                  ? o.a.createElement(
                      "div",
                      { className: "App" },
                      o.a.createElement(S.a, {
                        margin: 4,
                        items: this.state.items,
                        cols: this.state.cols,
                        onClickItem: this.openLightbox,
                      }),
                      o.a.createElement(M.a, {
                        items: this.state.itemsLightbox,
                        backdropClosesModal: !0,
                        onClose: this.closeLightbox,
                        onClickPrev: this.gotoPrevious,
                        onClickNext: this.gotoNext,
                        currentItem: this.state.currentItem,
                        isOpen: this.state.lightboxIsOpen,
                        width: 1600,
                      }),
                      !this.state.loadedAll &&
                        o.a.createElement(
                          "div",
                          { className: "loading-msg", id: "msg-loading-more" },
                          o.a.createElement(B.a, {
                            ref: "loadingElement",
                            type: "cylon",
                            color: "#d2d2d2",
                            width: "85",
                          }),
                          o.a.createElement("span", { className: "loading-msg-text" }, "Loading"),
                        ),
                    )
                  : o.a.createElement("div", null);
              },
            },
          ]) && F(s.prototype, a),
          i && F(s, i),
          t
        );
      })(),
      Q = s(81),
      U = s.n(Q),
      R = s(82);
    function J(e) {
      return (J =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Y(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function H(e, t) {
      return !t || ("object" !== J(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e)
        : t;
    }
    function $(e) {
      return ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ee(e, t) {
      return (ee =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var te = U.a.Router,
      se = (function(e) {
        function t(e) {
          var s;
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((s = H(this, $(t).call(this, e))).state = { meta: e.meta || {}, project: null }),
            e.meta.languageDefault && (s.state.lng = e.meta.languageDefault),
            s
          );
        }
        var s, a, i;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ee(e, t);
          })(t, o.a.Component),
          (s = t),
          (a = [
            {
              key: "componentDidMount",
              value: function() {
                this.configRoute(this.props.meta.languageDefault);
              },
            },
            {
              key: "configRoute",
              value: function(e) {
                var t = this.setState.bind(this),
                  s = this.props.model;
                e
                  ? te({
                      "/:lng/": [
                        function(e) {
                          t({ project: null, lng: e });
                        },
                        this.logPageView,
                      ],
                      "/:lng/project/view/:projectId": [
                        function(e, a) {
                          t({ project: s[a], lng: e });
                        },
                        this.logPageView,
                      ],
                    }).init("/".concat(e))
                  : te({
                      "/": [
                        function() {
                          t({ project: null });
                        },
                        this.logPageView,
                      ],
                      "/project/view/:projectId": [
                        function(e) {
                          t({ project: s[e] });
                        },
                        this.logPageView,
                      ],
                    }).init("/");
              },
            },
            {
              key: "logPageView",
              value: function() {
                var e = e || !1;
                e && (e("set", "page", "/" + window.location.hash), e("send", "pageview"));
              },
            },
            {
              key: "render",
              value: function() {
                var e = X.is_mobile("any") ? "mobile" : "no-mobile",
                  t = this.state.project ? "project" : "home",
                  s = this.state.lng,
                  a = "/reallery/#/" + (s || ""),
                  i = this.props.model,
                  r = this.state.project || {},
                  n = this.props.meta || {},
                  c = Object.keys(i)
                    .map(function(e) {
                      return i[e];
                    })
                    .map(function(e, a) {
                      e.state = e.state || "";
                      var n = s ? e.name[s] : e.name;
                      return o.a.createElement(k, {
                        icon: e.icon,
                        view: t,
                        lng: s,
                        key: a,
                        key2: Object.keys(i)[a],
                        name: n,
                        color: e.color,
                        type: e.type,
                        publish: e.publish,
                        state: e.state,
                        active: e.name === r.name,
                      });
                    }, this),
                  l = o.a.createElement(K, { lng: s, project: this.state.project });
                return o.a.createElement(
                  "div",
                  { className: "container ".concat(t, " ").concat(e) },
                  o.a.createElement(
                    "header",
                    { className: "container-header" },
                    o.a.createElement(
                      "h1",
                      { className: "title-header" },
                      o.a.createElement("a", { className: "main-title", href: a }, n.title),
                    ),
                    o.a.createElement(
                      "section",
                      { className: "menu menu-header" },
                      " ",
                      this.state.project ? c : null,
                      " ",
                    ),
                  ),
                  o.a.createElement(
                    "section",
                    { className: "menu menu-content" },
                    " ",
                    this.state.project ? null : c,
                    " ",
                  ),
                  o.a.createElement("section", { className: "gallery" }, " ", l, " "),
                  o.a.createElement(
                    "footer",
                    { className: "contact" },
                    n.github
                      ? o.a.createElement(
                          "a",
                          { target: "_blank", href: n.github },
                          o.a.createElement(
                            "span",
                            { className: "mail-data" },
                            o.a.createElement(m.a, { icon: R.a }),
                            o.a.createElement("span", { className: "data" }, "View on github"),
                          ),
                        )
                      : null,
                    o.a.createElement(
                      "a",
                      { href: "mailto:".concat(n.email) },
                      o.a.createElement(
                        "span",
                        { className: "mail-data" },
                        o.a.createElement(m.a, { icon: g.b }),
                        o.a.createElement("span", { className: "data" }, n.email),
                      ),
                    ),
                    "     ",
                    o.a.createElement(
                      "a",
                      { href: "tel:".concat(n.tlf) },
                      o.a.createElement(
                        "span",
                        { className: "mail-data" },
                        o.a.createElement(m.a, { icon: g.d }),
                        o.a.createElement("span", { className: "data" }, n.tlf),
                      ),
                    ),
                  ),
                );
              },
            },
          ]) && Y(s.prototype, a),
          i && Y(s, i),
          t
        );
      })();
    l.a.render(
      o.a.createElement(se, { meta: r.meta, model: r.projects }),
      document.getElementsByClassName("mainpage")[0],
    );
  },
});
