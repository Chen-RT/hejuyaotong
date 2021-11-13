window.onload = function () {
    var z = 0;
    var hengx = 0;
    var lastx = 0;

    function mouseup() {
        alert("qq");
    }
    var app = document.getElementsByClassName("phto")[0];
    var isdown = 1;
    var p2 = document.getElementsByClassName("phto1")[0];
    app.onmousedown = function (e) {
        hengx = e.pageX;
        app.style.cursor = "grabbing";
        isdown = 1;
        window.onmousemove = function (a) {
            if (isdown) {
                // p2.style.transition=1+"s";
                var left = a.pageX;
                var px = (left - hengx) * 0.1;
                p2.style.marginLeft = lastx + px + "vw";
                if (lastx + px <= -520) {
                    p2.style.transition = 0 + "s";
                    p2.style.marginLeft = 0 + "vw";
                    lastx = 0;
                } else {
                    p2.style.transition = 1 + "s";
                }
                if (lastx + px >= 100) {
                    lastx = 0;
                }
                console.log(lastx + px);
                window.onmouseup = function (a) {
                    isdown = 0;
                    app.style.cursor = "grab";
                    lastx += px;
                    console.log("1");
                };
            }
        };
    };
};
ScrollReveal().reveal(".experience-item2", {
    distance: "50px",
    origin: "left",
    duration: 4000,
    // delay: 200,
    interval: 500,
    reset: true,
});
ScrollReveal().reveal(".experience-item1", {
    distance: "50px",
    origin: "right",
    duration: 4000,
    // delay: 200,
    interval: 500,
    reset: true,
});