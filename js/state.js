var app = app || {};
(function () {
    'use strict';
    var projects = {};
    projects["001"] = {
        "name": "Ducks",
        "type": "sculpture",
        "videos": ["vgfS0dUf7lo"],
        "publish": true,
        "images": [{
            "path": "projts/001/images/PIC_0011.JPG",
            "width": 1920,
            "height": 2560
        }, {
            "path": "projts/001/images/PORTADA-00.jpg",
            "width": 400,
            "height": 800
        }, {
            "path": "projts/001/images/foto-00.jpg",
            "width": 800,
            "height": 600
        }, {
            "path": "projts/001/images/foto-11.jpg",
            "width": 900,
            "height": 600
        }, {
            "path": "projts/001/images/foto-12.jpg",
            "width": 900,
            "height": 600
        }, {
            "path": "projts/001/images/imagTeoria-00-2.jpg",
            "width": 800,
            "height": 600
        }, {
            "path": "projts/001/images/imagTeoria-02-2.jpg",
            "width": 800,
            "height": 600
        }, {
            "path": "projts/001/images/imagTeoria-02-5.jpg",
            "width": 1000,
            "height": 800
        }, {
            "path": "projts/001/images/imagTeoria-02.jpg",
            "width": 800,
            "height": 600
        }, {"path": "projts/001/images/imagTeoria-04-02.jpg", "width": 2480, "height": 3508}]
    };
    projects["002"] = {
        "name": "Temple with vagina",
        "type": "sculpture",
        "publish": false,
        "state": "comming soon",
        "images": []
    };
    projects["003"] = {
        "name": "Soldiers' heads",
        "type": "sculpture",
        "videos": ["cZ3DLvBxoZU", "wrr41cUdirQ"],
        "publish": true,
        "images": [{
            "path": "projts/003/images/image_01.jpg",
            "width": 2160,
            "height": 1350
        }, {
            "path": "projts/003/images/image_02.jpg",
            "width": 2160,
            "height": 1350
        }, {
            "path": "projts/003/images/image_03.jpg",
            "width": 2160,
            "height": 1350
        }, {"path": "projts/003/images/image_04.jpg", "width": 2160, "height": 1350}]
    };
    projects["004"] = {
        "name": "University",
        "type": "painting",
        "videos": [],
        "publish": true,
        "images": [{
            "path": "projts/004/images/Acrilico y en caustica sobre telaRet.jpg",
            "width": 857,
            "height": 1039
        }, {
            "path": "projts/004/images/Oleo sobre tela IIIRet.jpg",
            "width": 1129,
            "height": 714
        }, {
            "path": "projts/004/images/Oleo sobre tela VRet.jpg",
            "width": 600,
            "height": 774
        }, {
            "path": "projts/004/images/PIC_0001Ret.jpg",
            "width": 2359,
            "height": 1564
        }, {
            "path": "projts/004/images/PIC_0002.jpg",
            "width": 2408,
            "height": 1793
        }, {
            "path": "projts/004/images/PIC_0002b.jpg",
            "width": 2356,
            "height": 1468
        }, {
            "path": "projts/004/images/PIC_0004.jpg",
            "width": 1572,
            "height": 2336
        }, {
            "path": "projts/004/images/PIC_0005.jpg",
            "width": 1421,
            "height": 2277
        }, {
            "path": "projts/004/images/PIC_0005b.jpg",
            "width": 1361,
            "height": 2264
        }, {
            "path": "projts/004/images/PIC_0007.JPG",
            "width": 2560,
            "height": 1920
        }, {
            "path": "projts/004/images/PIC_0007b.jpg",
            "width": 2448,
            "height": 1756
        }, {
            "path": "projts/004/images/PIC_00082Ret.jpg",
            "width": 2324,
            "height": 1396
        }, {
            "path": "projts/004/images/PIC_0008Ret.jpg",
            "width": 397,
            "height": 298
        }, {
            "path": "projts/004/images/PIC_0009.jpg",
            "width": 1888,
            "height": 2372
        }, {
            "path": "projts/004/images/PIC_0013 copia.jpg",
            "width": 1854,
            "height": 2262
        }, {
            "path": "projts/004/images/PIC_0013.jpg",
            "width": 1868,
            "height": 1560
        }, {
            "path": "projts/004/images/PIC_0014 copia.jpg",
            "width": 2384,
            "height": 1880
        }, {
            "path": "projts/004/images/PIC_0014.jpg",
            "width": 2388,
            "height": 1576
        }, {
            "path": "projts/004/images/PIC_0018.jpg",
            "width": 2262,
            "height": 1849
        }, {
            "path": "projts/004/images/PIC_0019Ret.jpg",
            "width": 2449,
            "height": 1600
        }, {
            "path": "projts/004/images/PIC_0023.jpg",
            "width": 2560,
            "height": 1920
        }, {
            "path": "projts/004/images/PIC_0023b.jpg",
            "width": 2352,
            "height": 1632
        }, {
            "path": "projts/004/images/PIC_0024.jpg",
            "width": 1784,
            "height": 1788
        }, {
            "path": "projts/004/images/PIC_0024c.jpg",
            "width": 1920,
            "height": 2560
        }, {
            "path": "projts/004/images/PIC_0025.jpg",
            "width": 2208,
            "height": 1752
        }, {
            "path": "projts/004/images/PIC_0028Ret.jpg",
            "width": 1796,
            "height": 1872
        }, {
            "path": "projts/004/images/Tempera sobre madera I.jpg",
            "width": 816,
            "height": 560
        }, {
            "path": "projts/004/images/Tempera sobre papel VII.jpg",
            "width": 1232,
            "height": 816
        }, {
            "path": "projts/004/images/cuadro 1Ret.jpg",
            "width": 1000,
            "height": 830
        }, {
            "path": "projts/004/images/cuadro 2Ret.jpg",
            "width": 893,
            "height": 1066
        }, {
            "path": "projts/004/images/cuadro 3Ret.jpg",
            "width": 839,
            "height": 1346
        }, {
            "path": "projts/004/images/cuadro 4Ret.jpg",
            "width": 1068,
            "height": 892
        }, {
            "path": "projts/004/images/cuadro 5Ret.jpg",
            "width": 1374,
            "height": 808
        }, {
            "path": "projts/004/images/cuadro 6Ret.jpg",
            "width": 1288,
            "height": 874
        }, {
            "path": "projts/004/images/cuadro 7Ret.jpg",
            "width": 870,
            "height": 1268
        }, {
            "path": "projts/004/images/cuadro 8Ret.jpg",
            "width": 890,
            "height": 1098
        }, {
            "path": "projts/004/images/cuadro 9Ret.jpg",
            "width": 783,
            "height": 1241
        }, {
            "path": "projts/004/images/cuadro15Ret.jpg",
            "width": 876,
            "height": 1336
        }, {
            "path": "projts/004/images/cuadro16.jpg",
            "width": 1282,
            "height": 810
        }, {"path": "projts/004/images/mi pintorRet.jpg", "width": 1099, "height": 929}]
    };
    app.state = {projects: projects};
})();