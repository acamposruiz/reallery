var app = app || {};
(function () {
    'use strict';
    var projects = {};
    projects["001"] = {
        "name": "Ducks",
        "type": "sculpture",
        "videos": ["vgfS0dUf7lo"],
        "publish": true,
        "images": ["projts/001/images/PIC_0011.JPG", "projts/001/images/PORTADA-00.jpg", "projts/001/images/foto-00.jpg", "projts/001/images/foto-11.jpg", "projts/001/images/foto-12.jpg", "projts/001/images/imagTeoria-00-2.jpg", "projts/001/images/imagTeoria-00-4.psd", "projts/001/images/imagTeoria-02-2.jpg", "projts/001/images/imagTeoria-02-5.jpg", "projts/001/images/imagTeoria-02.jpg", "projts/001/images/imagTeoria-03-01.psd", "projts/001/images/imagTeoria-04-02.jpg"]
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
        "images": ["projts/003/images/image_01.jpg", "projts/003/images/image_02.jpg", "projts/003/images/image_03.jpg", "projts/003/images/image_04.jpg"]
    };
    app.state = {projects: projects};
})();