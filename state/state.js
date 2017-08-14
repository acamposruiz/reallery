var state = state || {};
(function () {
    'use strict';
    var projects = {};
    projects["001"] = {
        "strings": {
            "en": {"name": "Ducks", "type": "sculpture"},
            "es": {"name": "Patos", "type": "escultura"}
        },
        "name": "Ducks",
        "color": "F0B67F",
        "type": "sculpture",
        "videos": {"en": ["gfYmvPH6Umg"], "es": ["gfYmvPH6Umg"]},
        "publish": true,
        "images": [{
            "path": "projts/001/imgweb/5.jpg",
            "srcset": ["projts/001/imgweb/2880_5.jpg 2880w", "projts/001/imgweb/1240_5.jpg 1240w", "projts/001/imgweb/620_5.jpg 620w", "projts/001/imgweb/310_5.jpg 310w", "projts/001/imgweb/160_5.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/6.jpg",
            "srcset": ["projts/001/imgweb/2880_6.jpg 2880w", "projts/001/imgweb/1240_6.jpg 1240w", "projts/001/imgweb/620_6.jpg 620w", "projts/001/imgweb/310_6.jpg 310w", "projts/001/imgweb/160_6.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/Cajapiedra-03.jpg",
            "srcset": ["projts/001/imgweb/1240_Cajapiedra-03.jpg 1240w", "projts/001/imgweb/620_Cajapiedra-03.jpg 620w", "projts/001/imgweb/310_Cajapiedra-03.jpg 310w", "projts/001/imgweb/160_Cajapiedra-03.jpg 160w"],
            "width": 2418,
            "height": 1580
        }, {
            "path": "projts/001/imgweb/Cajapiedra-04.jpg",
            "srcset": ["projts/001/imgweb/2880_Cajapiedra-04.jpg 2880w", "projts/001/imgweb/1240_Cajapiedra-04.jpg 1240w", "projts/001/imgweb/620_Cajapiedra-04.jpg 620w", "projts/001/imgweb/310_Cajapiedra-04.jpg 310w", "projts/001/imgweb/160_Cajapiedra-04.jpg 160w"],
            "width": 3005,
            "height": 1394
        }, {
            "path": "projts/001/imgweb/Cajapiedra-07.jpg",
            "srcset": ["projts/001/imgweb/1240_Cajapiedra-07.jpg 1240w", "projts/001/imgweb/620_Cajapiedra-07.jpg 620w", "projts/001/imgweb/310_Cajapiedra-07.jpg 310w", "projts/001/imgweb/160_Cajapiedra-07.jpg 160w"],
            "width": 1810,
            "height": 2052
        }, {
            "path": "projts/001/imgweb/IMGP0228.jpg",
            "srcset": ["projts/001/imgweb/1240_IMGP0228.jpg 1240w", "projts/001/imgweb/620_IMGP0228.jpg 620w", "projts/001/imgweb/310_IMGP0228.jpg 310w", "projts/001/imgweb/160_IMGP0228.jpg 160w"],
            "width": 2000,
            "height": 2333
        }, {
            "path": "projts/001/imgweb/IMGP0239.jpg",
            "srcset": ["projts/001/imgweb/2880_IMGP0239.jpg 2880w", "projts/001/imgweb/1240_IMGP0239.jpg 1240w", "projts/001/imgweb/620_IMGP0239.jpg 620w", "projts/001/imgweb/310_IMGP0239.jpg 310w", "projts/001/imgweb/160_IMGP0239.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/IMGP0935.jpg",
            "srcset": ["projts/001/imgweb/2880_IMGP0935.jpg 2880w", "projts/001/imgweb/1240_IMGP0935.jpg 1240w", "projts/001/imgweb/620_IMGP0935.jpg 620w", "projts/001/imgweb/310_IMGP0935.jpg 310w", "projts/001/imgweb/160_IMGP0935.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/altar-00copia.jpg",
            "srcset": ["projts/001/imgweb/2880_altar-00copia.jpg 2880w", "projts/001/imgweb/1240_altar-00copia.jpg 1240w", "projts/001/imgweb/620_altar-00copia.jpg 620w", "projts/001/imgweb/310_altar-00copia.jpg 310w", "projts/001/imgweb/160_altar-00copia.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/altar-02.jpg",
            "srcset": ["projts/001/imgweb/1240_altar-02.jpg 1240w", "projts/001/imgweb/620_altar-02.jpg 620w", "projts/001/imgweb/310_altar-02.jpg 310w", "projts/001/imgweb/160_altar-02.jpg 160w"],
            "width": 2000,
            "height": 3008
        }, {
            "path": "projts/001/imgweb/cuadro-01-02.jpg",
            "srcset": ["projts/001/imgweb/2880_cuadro-01-02.jpg 2880w", "projts/001/imgweb/1240_cuadro-01-02.jpg 1240w", "projts/001/imgweb/620_cuadro-01-02.jpg 620w", "projts/001/imgweb/310_cuadro-01-02.jpg 310w", "projts/001/imgweb/160_cuadro-01-02.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/cuadro-02copia.jpg",
            "srcset": ["projts/001/imgweb/2880_cuadro-02copia.jpg 2880w", "projts/001/imgweb/1240_cuadro-02copia.jpg 1240w", "projts/001/imgweb/620_cuadro-02copia.jpg 620w", "projts/001/imgweb/310_cuadro-02copia.jpg 310w", "projts/001/imgweb/160_cuadro-02copia.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/cubos-03b.jpg",
            "srcset": ["projts/001/imgweb/2880_cubos-03b.jpg 2880w", "projts/001/imgweb/1240_cubos-03b.jpg 1240w", "projts/001/imgweb/620_cubos-03b.jpg 620w", "projts/001/imgweb/310_cubos-03b.jpg 310w", "projts/001/imgweb/160_cubos-03b.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/cubos-06copia.jpg",
            "srcset": ["projts/001/imgweb/2880_cubos-06copia.jpg 2880w", "projts/001/imgweb/1240_cubos-06copia.jpg 1240w", "projts/001/imgweb/620_cubos-06copia.jpg 620w", "projts/001/imgweb/310_cubos-06copia.jpg 310w", "projts/001/imgweb/160_cubos-06copia.jpg 160w"],
            "width": 3008,
            "height": 2000
        }, {
            "path": "projts/001/imgweb/cubos-12copia.jpg",
            "srcset": ["projts/001/imgweb/1240_cubos-12copia.jpg 1240w", "projts/001/imgweb/620_cubos-12copia.jpg 620w", "projts/001/imgweb/310_cubos-12copia.jpg 310w", "projts/001/imgweb/160_cubos-12copia.jpg 160w"],
            "width": 2000,
            "height": 3008
        }, {
            "path": "projts/001/imgweb/obra4.jpg",
            "srcset": ["projts/001/imgweb/310_obra4.jpg 310w", "projts/001/imgweb/160_obra4.jpg 160w"],
            "width": 400,
            "height": 487
        }, {
            "path": "projts/001/imgweb/patos-00.jpg",
            "srcset": ["projts/001/imgweb/2880_patos-00.jpg 2880w", "projts/001/imgweb/1240_patos-00.jpg 1240w", "projts/001/imgweb/620_patos-00.jpg 620w", "projts/001/imgweb/310_patos-00.jpg 310w", "projts/001/imgweb/160_patos-00.jpg 160w"],
            "width": 3008,
            "height": 2000
        }]
    };
    projects["003"] = {
        "strings": {
            "en": {"name": "Soldiers' heads", "type": "sculpture"},
            "es": {"name": "Cabezas de Soldados", "type": "escultura"}
        },
        "name": "Soldiers' heads",
        "color": "D6D1B1",
        "type": "sculpture",
        "videos": {"en": ["tQ6htNIVDxk"], "es": ["Sky0Vyf7rj0"]},
        "publish": true,
        "images": [{
            "path": "projts/003/imgweb/6k-158_17_en_0302.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_17_en_0302.jpg 1240w", "projts/003/imgweb/620_6k-158_17_en_0302.jpg 620w", "projts/003/imgweb/310_6k-158_17_en_0302.jpg 310w", "projts/003/imgweb/160_6k-158_17_en_0302.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_17_en_0491.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_17_en_0491.jpg 1240w", "projts/003/imgweb/620_6k-158_17_en_0491.jpg 620w", "projts/003/imgweb/310_6k-158_17_en_0491.jpg 310w", "projts/003/imgweb/160_6k-158_17_en_0491.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_17_en_0686.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_17_en_0686.jpg 1240w", "projts/003/imgweb/620_6k-158_17_en_0686.jpg 620w", "projts/003/imgweb/310_6k-158_17_en_0686.jpg 310w", "projts/003/imgweb/160_6k-158_17_en_0686.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_17b_en_0750.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_17b_en_0750.jpg 1240w", "projts/003/imgweb/620_6k-158_17b_en_0750.jpg 620w", "projts/003/imgweb/310_6k-158_17b_en_0750.jpg 310w", "projts/003/imgweb/160_6k-158_17b_en_0750.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_28_1100.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_28_1100.jpg 1240w", "projts/003/imgweb/620_6k-158_28_1100.jpg 620w", "projts/003/imgweb/310_6k-158_28_1100.jpg 310w", "projts/003/imgweb/160_6k-158_28_1100.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_28_1234.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_28_1234.jpg 1240w", "projts/003/imgweb/620_6k-158_28_1234.jpg 620w", "projts/003/imgweb/310_6k-158_28_1234.jpg 310w", "projts/003/imgweb/160_6k-158_28_1234.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_28_1292.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_28_1292.jpg 1240w", "projts/003/imgweb/620_6k-158_28_1292.jpg 620w", "projts/003/imgweb/310_6k-158_28_1292.jpg 310w", "projts/003/imgweb/160_6k-158_28_1292.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_28c_en_1329.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_28c_en_1329.jpg 1240w", "projts/003/imgweb/620_6k-158_28c_en_1329.jpg 620w", "projts/003/imgweb/310_6k-158_28c_en_1329.jpg 310w", "projts/003/imgweb/160_6k-158_28c_en_1329.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_28c_en_1397.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_28c_en_1397.jpg 1240w", "projts/003/imgweb/620_6k-158_28c_en_1397.jpg 620w", "projts/003/imgweb/310_6k-158_28c_en_1397.jpg 310w", "projts/003/imgweb/160_6k-158_28c_en_1397.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_32_en_1584.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_32_en_1584.jpg 1240w", "projts/003/imgweb/620_6k-158_32_en_1584.jpg 620w", "projts/003/imgweb/310_6k-158_32_en_1584.jpg 310w", "projts/003/imgweb/160_6k-158_32_en_1584.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_35_en_1704.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_35_en_1704.jpg 1240w", "projts/003/imgweb/620_6k-158_35_en_1704.jpg 620w", "projts/003/imgweb/310_6k-158_35_en_1704.jpg 310w", "projts/003/imgweb/160_6k-158_35_en_1704.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_46_en_1800.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_46_en_1800.jpg 1240w", "projts/003/imgweb/620_6k-158_46_en_1800.jpg 620w", "projts/003/imgweb/310_6k-158_46_en_1800.jpg 310w", "projts/003/imgweb/160_6k-158_46_en_1800.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_49_en_1962.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_49_en_1962.jpg 1240w", "projts/003/imgweb/620_6k-158_49_en_1962.jpg 620w", "projts/003/imgweb/310_6k-158_49_en_1962.jpg 310w", "projts/003/imgweb/160_6k-158_49_en_1962.jpg 160w"],
            "width": 1280,
            "height": 720
        }, {
            "path": "projts/003/imgweb/6k-158_49_en_2191.jpg",
            "srcset": ["projts/003/imgweb/1240_6k-158_49_en_2191.jpg 1240w", "projts/003/imgweb/620_6k-158_49_en_2191.jpg 620w", "projts/003/imgweb/310_6k-158_49_en_2191.jpg 310w", "projts/003/imgweb/160_6k-158_49_en_2191.jpg 160w"],
            "width": 1280,
            "height": 720
        }]
    };
    projects["004"] = {
        "strings": {
            "en": {"name": "Paintings", "type": "painting"},
            "es": {"name": "Pinturas", "type": "pintura"}
        },
        "name": "Paintings",
        "color": "C7EFCF",
        "type": "painting",
        "videos": [],
        "publish": true,
        "images": [{
            "path": "projts/004/imgweb/Acrilico-y-en-caustica-sobre-telaRet.jpg",
            "srcset": ["projts/004/imgweb/620_Acrilico-y-en-caustica-sobre-telaRet.jpg 620w", "projts/004/imgweb/310_Acrilico-y-en-caustica-sobre-telaRet.jpg 310w", "projts/004/imgweb/160_Acrilico-y-en-caustica-sobre-telaRet.jpg 160w"],
            "width": 857,
            "height": 1039
        }, {
            "path": "projts/004/imgweb/Oleo-sobre-tela-IIIRet.jpg",
            "srcset": ["projts/004/imgweb/620_Oleo-sobre-tela-IIIRet.jpg 620w", "projts/004/imgweb/310_Oleo-sobre-tela-IIIRet.jpg 310w", "projts/004/imgweb/160_Oleo-sobre-tela-IIIRet.jpg 160w"],
            "width": 1129,
            "height": 714
        }, {
            "path": "projts/004/imgweb/Oleo-sobre-tela-VRet.jpg",
            "srcset": ["projts/004/imgweb/310_Oleo-sobre-tela-VRet.jpg 310w", "projts/004/imgweb/160_Oleo-sobre-tela-VRet.jpg 160w"],
            "width": 600,
            "height": 774
        }, {
            "path": "projts/004/imgweb/PIC_0001Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0001Ret.jpg 1240w", "projts/004/imgweb/620_PIC_0001Ret.jpg 620w", "projts/004/imgweb/310_PIC_0001Ret.jpg 310w", "projts/004/imgweb/160_PIC_0001Ret.jpg 160w"],
            "width": 2359,
            "height": 1564
        }, {
            "path": "projts/004/imgweb/PIC_0002.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0002.jpg 1240w", "projts/004/imgweb/620_PIC_0002.jpg 620w", "projts/004/imgweb/310_PIC_0002.jpg 310w", "projts/004/imgweb/160_PIC_0002.jpg 160w"],
            "width": 2408,
            "height": 1793
        }, {
            "path": "projts/004/imgweb/PIC_0002b.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0002b.jpg 1240w", "projts/004/imgweb/620_PIC_0002b.jpg 620w", "projts/004/imgweb/310_PIC_0002b.jpg 310w", "projts/004/imgweb/160_PIC_0002b.jpg 160w"],
            "width": 2356,
            "height": 1468
        }, {
            "path": "projts/004/imgweb/PIC_0004.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0004.jpg 1240w", "projts/004/imgweb/620_PIC_0004.jpg 620w", "projts/004/imgweb/310_PIC_0004.jpg 310w", "projts/004/imgweb/160_PIC_0004.jpg 160w"],
            "width": 1572,
            "height": 2336
        }, {
            "path": "projts/004/imgweb/PIC_0005.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0005.jpg 1240w", "projts/004/imgweb/620_PIC_0005.jpg 620w", "projts/004/imgweb/310_PIC_0005.jpg 310w", "projts/004/imgweb/160_PIC_0005.jpg 160w"],
            "width": 1421,
            "height": 2277
        }, {
            "path": "projts/004/imgweb/PIC_0005b.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0005b.jpg 1240w", "projts/004/imgweb/620_PIC_0005b.jpg 620w", "projts/004/imgweb/310_PIC_0005b.jpg 310w", "projts/004/imgweb/160_PIC_0005b.jpg 160w"],
            "width": 1361,
            "height": 2264
        }, {
            "path": "projts/004/imgweb/PIC_0007b.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0007b.jpg 1240w", "projts/004/imgweb/620_PIC_0007b.jpg 620w", "projts/004/imgweb/310_PIC_0007b.jpg 310w", "projts/004/imgweb/160_PIC_0007b.jpg 160w"],
            "width": 2448,
            "height": 1756
        }, {
            "path": "projts/004/imgweb/PIC_00082Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_00082Ret.jpg 1240w", "projts/004/imgweb/620_PIC_00082Ret.jpg 620w", "projts/004/imgweb/310_PIC_00082Ret.jpg 310w", "projts/004/imgweb/160_PIC_00082Ret.jpg 160w"],
            "width": 2324,
            "height": 1396
        }, {
            "path": "projts/004/imgweb/PIC_0008Ret.jpg",
            "srcset": ["projts/004/imgweb/310_PIC_0008Ret.jpg 310w", "projts/004/imgweb/160_PIC_0008Ret.jpg 160w"],
            "width": 397,
            "height": 298
        }, {
            "path": "projts/004/imgweb/PIC_0009.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0009.jpg 1240w", "projts/004/imgweb/620_PIC_0009.jpg 620w", "projts/004/imgweb/310_PIC_0009.jpg 310w", "projts/004/imgweb/160_PIC_0009.jpg 160w"],
            "width": 1888,
            "height": 2372
        }, {
            "path": "projts/004/imgweb/PIC_0013-copia.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0013-copia.jpg 1240w", "projts/004/imgweb/620_PIC_0013-copia.jpg 620w", "projts/004/imgweb/310_PIC_0013-copia.jpg 310w", "projts/004/imgweb/160_PIC_0013-copia.jpg 160w"],
            "width": 1854,
            "height": 2262
        }, {
            "path": "projts/004/imgweb/PIC_0013.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0013.jpg 1240w", "projts/004/imgweb/620_PIC_0013.jpg 620w", "projts/004/imgweb/310_PIC_0013.jpg 310w", "projts/004/imgweb/160_PIC_0013.jpg 160w"],
            "width": 1868,
            "height": 1560
        }, {
            "path": "projts/004/imgweb/PIC_0014-copia.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0014-copia.jpg 1240w", "projts/004/imgweb/620_PIC_0014-copia.jpg 620w", "projts/004/imgweb/310_PIC_0014-copia.jpg 310w", "projts/004/imgweb/160_PIC_0014-copia.jpg 160w"],
            "width": 2384,
            "height": 1880
        }, {
            "path": "projts/004/imgweb/PIC_0014.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0014.jpg 1240w", "projts/004/imgweb/620_PIC_0014.jpg 620w", "projts/004/imgweb/310_PIC_0014.jpg 310w", "projts/004/imgweb/160_PIC_0014.jpg 160w"],
            "width": 2388,
            "height": 1576
        }, {
            "path": "projts/004/imgweb/PIC_0018.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0018.jpg 1240w", "projts/004/imgweb/620_PIC_0018.jpg 620w", "projts/004/imgweb/310_PIC_0018.jpg 310w", "projts/004/imgweb/160_PIC_0018.jpg 160w"],
            "width": 2262,
            "height": 1849
        }, {
            "path": "projts/004/imgweb/PIC_0019Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0019Ret.jpg 1240w", "projts/004/imgweb/620_PIC_0019Ret.jpg 620w", "projts/004/imgweb/310_PIC_0019Ret.jpg 310w", "projts/004/imgweb/160_PIC_0019Ret.jpg 160w"],
            "width": 2449,
            "height": 1600
        }, {
            "path": "projts/004/imgweb/PIC_0023.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0023.jpg 1240w", "projts/004/imgweb/620_PIC_0023.jpg 620w", "projts/004/imgweb/310_PIC_0023.jpg 310w", "projts/004/imgweb/160_PIC_0023.jpg 160w"],
            "width": 2560,
            "height": 1920
        }, {
            "path": "projts/004/imgweb/PIC_0023b.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0023b.jpg 1240w", "projts/004/imgweb/620_PIC_0023b.jpg 620w", "projts/004/imgweb/310_PIC_0023b.jpg 310w", "projts/004/imgweb/160_PIC_0023b.jpg 160w"],
            "width": 2352,
            "height": 1632
        }, {
            "path": "projts/004/imgweb/PIC_0024.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0024.jpg 1240w", "projts/004/imgweb/620_PIC_0024.jpg 620w", "projts/004/imgweb/310_PIC_0024.jpg 310w", "projts/004/imgweb/160_PIC_0024.jpg 160w"],
            "width": 1784,
            "height": 1788
        }, {
            "path": "projts/004/imgweb/PIC_0024c.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0024c.jpg 1240w", "projts/004/imgweb/620_PIC_0024c.jpg 620w", "projts/004/imgweb/310_PIC_0024c.jpg 310w", "projts/004/imgweb/160_PIC_0024c.jpg 160w"],
            "width": 1920,
            "height": 2560
        }, {
            "path": "projts/004/imgweb/PIC_0025.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0025.jpg 1240w", "projts/004/imgweb/620_PIC_0025.jpg 620w", "projts/004/imgweb/310_PIC_0025.jpg 310w", "projts/004/imgweb/160_PIC_0025.jpg 160w"],
            "width": 2208,
            "height": 1752
        }, {
            "path": "projts/004/imgweb/PIC_0028Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_PIC_0028Ret.jpg 1240w", "projts/004/imgweb/620_PIC_0028Ret.jpg 620w", "projts/004/imgweb/310_PIC_0028Ret.jpg 310w", "projts/004/imgweb/160_PIC_0028Ret.jpg 160w"],
            "width": 1796,
            "height": 1872
        }, {
            "path": "projts/004/imgweb/Tempera-sobre-madera-I.jpg",
            "srcset": ["projts/004/imgweb/620_Tempera-sobre-madera-I.jpg 620w", "projts/004/imgweb/310_Tempera-sobre-madera-I.jpg 310w", "projts/004/imgweb/160_Tempera-sobre-madera-I.jpg 160w"],
            "width": 816,
            "height": 560
        }, {
            "path": "projts/004/imgweb/Tempera-sobre-papel-VII.jpg",
            "srcset": ["projts/004/imgweb/620_Tempera-sobre-papel-VII.jpg 620w", "projts/004/imgweb/310_Tempera-sobre-papel-VII.jpg 310w", "projts/004/imgweb/160_Tempera-sobre-papel-VII.jpg 160w"],
            "width": 1232,
            "height": 816
        }, {
            "path": "projts/004/imgweb/cuadro-1Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-1Ret.jpg 620w", "projts/004/imgweb/310_cuadro-1Ret.jpg 310w", "projts/004/imgweb/160_cuadro-1Ret.jpg 160w"],
            "width": 1000,
            "height": 830
        }, {
            "path": "projts/004/imgweb/cuadro-2Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-2Ret.jpg 620w", "projts/004/imgweb/310_cuadro-2Ret.jpg 310w", "projts/004/imgweb/160_cuadro-2Ret.jpg 160w"],
            "width": 893,
            "height": 1066
        }, {
            "path": "projts/004/imgweb/cuadro-3Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-3Ret.jpg 620w", "projts/004/imgweb/310_cuadro-3Ret.jpg 310w", "projts/004/imgweb/160_cuadro-3Ret.jpg 160w"],
            "width": 839,
            "height": 1346
        }, {
            "path": "projts/004/imgweb/cuadro-4Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-4Ret.jpg 620w", "projts/004/imgweb/310_cuadro-4Ret.jpg 310w", "projts/004/imgweb/160_cuadro-4Ret.jpg 160w"],
            "width": 1068,
            "height": 892
        }, {
            "path": "projts/004/imgweb/cuadro-5Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_cuadro-5Ret.jpg 1240w", "projts/004/imgweb/620_cuadro-5Ret.jpg 620w", "projts/004/imgweb/310_cuadro-5Ret.jpg 310w", "projts/004/imgweb/160_cuadro-5Ret.jpg 160w"],
            "width": 1374,
            "height": 808
        }, {
            "path": "projts/004/imgweb/cuadro-6Ret.jpg",
            "srcset": ["projts/004/imgweb/1240_cuadro-6Ret.jpg 1240w", "projts/004/imgweb/620_cuadro-6Ret.jpg 620w", "projts/004/imgweb/310_cuadro-6Ret.jpg 310w", "projts/004/imgweb/160_cuadro-6Ret.jpg 160w"],
            "width": 1288,
            "height": 874
        }, {
            "path": "projts/004/imgweb/cuadro-7Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-7Ret.jpg 620w", "projts/004/imgweb/310_cuadro-7Ret.jpg 310w", "projts/004/imgweb/160_cuadro-7Ret.jpg 160w"],
            "width": 870,
            "height": 1268
        }, {
            "path": "projts/004/imgweb/cuadro-8Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-8Ret.jpg 620w", "projts/004/imgweb/310_cuadro-8Ret.jpg 310w", "projts/004/imgweb/160_cuadro-8Ret.jpg 160w"],
            "width": 890,
            "height": 1098
        }, {
            "path": "projts/004/imgweb/cuadro-9Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro-9Ret.jpg 620w", "projts/004/imgweb/310_cuadro-9Ret.jpg 310w", "projts/004/imgweb/160_cuadro-9Ret.jpg 160w"],
            "width": 783,
            "height": 1241
        }, {
            "path": "projts/004/imgweb/cuadro15Ret.jpg",
            "srcset": ["projts/004/imgweb/620_cuadro15Ret.jpg 620w", "projts/004/imgweb/310_cuadro15Ret.jpg 310w", "projts/004/imgweb/160_cuadro15Ret.jpg 160w"],
            "width": 876,
            "height": 1336
        }, {
            "path": "projts/004/imgweb/cuadro16.jpg",
            "srcset": ["projts/004/imgweb/1240_cuadro16.jpg 1240w", "projts/004/imgweb/620_cuadro16.jpg 620w", "projts/004/imgweb/310_cuadro16.jpg 310w", "projts/004/imgweb/160_cuadro16.jpg 160w"],
            "width": 1282,
            "height": 810
        }, {
            "path": "projts/004/imgweb/mi-pintorRet.jpg",
            "srcset": ["projts/004/imgweb/620_mi-pintorRet.jpg 620w", "projts/004/imgweb/310_mi-pintorRet.jpg 310w", "projts/004/imgweb/160_mi-pintorRet.jpg 160w"],
            "width": 1099,
            "height": 929
        }]
    };
    state = {projects: projects};
})();
export default state;