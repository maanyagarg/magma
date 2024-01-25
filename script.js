function scrollLocomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function effect1() {
  var clutter = "";
  document
    .querySelector(".page2>.heading>.heading-para")
    .textContent.split(" ")
    .forEach(function (data) {
      clutter += `<span> ${data}</span>`;

      document.querySelector(".page2>.heading>.heading-para").innerHTML =
        clutter;
    });
  gsap.to(".page2>.heading>.heading-para>span", {
    scrollTrigger: {
      trigger: ".page2>.heading>.heading-para>span",
      start: "top bottom",
      end: "bottom 30%",
      scroller: `.main`,
      scrub: 0.1,
      markers: true,
    },
    stagger: 0.1,
    color: "#fff",
  });
}

function effect2() {
  var clutter = "";
  document
    .querySelector(".page4>.heading>.heading-para")
    .textContent.split(" ")
    .forEach(function (data) {
      clutter += `<span> ${data}</span>`;

      document.querySelector(".page4>.heading>.heading-para").innerHTML =
        clutter;
    });
  gsap.to(".page4 span", {
    scrollTrigger: {
      trigger: ".page4 span",
      start: "top bottom",
      end: "bottom top",
      scroller: `.main`,
      scrub: 0.1,
      markers: true,
    },
    stagger: 0.1,
    color: "#fff",
  });
}

function canvasArtwork() {
  var canvas = document.querySelector("canvas");
  var context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function getImage(index) {
    var allImages = `./images/frames00007.png
    ./images/frames00010.png
    ./images/frames00013.png
    ./images/frames00016.png
    ./images/frames00019.png
    ./images/frames00022.png
    ./images/frames00025.png
    ./images/frames00028.png
    ./images/frames00031.png
    ./images/frames00034.png
    ./images/frames00037.png
    ./images/frames00040.png
    ./images/frames00043.png
    ./images/frames00046.png
    ./images/frames00049.png
    ./images/frames00052.png
    ./images/frames00055.png
    ./images/frames00058.png
    ./images/frames00061.png
    ./images/frames00064.png
    ./images/frames00067.png
    ./images/frames00070.png
    ./images/frames00073.png
    ./images/frames00076.png
    ./images/frames00079.png
    ./images/frames00082.png
    ./images/frames00085.png
    ./images/frames00088.png
    ./images/frames00091.png
    ./images/frames00097.png
    ./images/frames00094.png
    ./images/frames00103.png
    ./images/frames00100.png
    ./images/frames00109.png
    ./images/frames00106.png
    ./images/frames00112.png
    ./images/frames00115.png
    ./images/frames00118.png
    ./images/frames00121.png
    ./images/frames00124.png
    ./images/frames00127.png
    ./images/frames00130.png
    ./images/frames00133.png
    ./images/frames00136.png
    ./images/frames00139.png
    ./images/frames00142.png
    ./images/frames00145.png
    ./images/frames00148.png
    ./images/frames00151.png
    ./images/frames00154.png
    ./images/frames00157.png
    ./images/frames00160.png
    ./images/frames00163.png
    ./images/frames00166.png
    ./images/frames00169.png
    ./images/frames00172.png
    ./images/frames00175.png
    ./images/frames00178.png
    ./images/frames00181.png
    ./images/frames00184.png
    ./images/frames00187.png
    ./images/frames00190.png
    ./images/frames00193.png
    ./images/frames00196.png
    ./images/frames00199.png
    ./images/frames00202.png`;

    return allImages.split("\n")[index];
  }

  const totalImages = 66;
  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (var i = 0; i < totalImages; i++) {
    const img = new Image();
    img.src = getImage(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: totalImages - 1,
    snap: "frame",
    ease: "power2.inOut",
    scrollTrigger: {
      scrub: 0.5,
      trigger: ".page2",
      start: "top top",
      end: "300% top",
      scroller: ".main",
    },
    // markers: true,
    onUpdate: render,
  });
  images[1].onload = render;

  function render() {
    context.canvas.style.opacity = imageSeq.frame / totalImages;
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(image, context) {
    var canvas = context.canvas;
    var hRatio = canvas.width / image.width;
    var vRatio = canvas.height / image.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - image.width * ratio) / 2;
    var centerShift_y = (canvas.height - image.height * ratio) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerShift_x,
      centerShift_y,
      image.width * ratio,
      image.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: ".page3",
    pin: ".page3",
    scroller: ".main",
    start: "top top",
    end: "bottom top",
  });
}

scrollLocomotive();
effect1();
effect2();
canvasArtwork();
