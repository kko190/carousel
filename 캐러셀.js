let 지금사진 = 0;
$(".slide-1").click(function () {
  지금사진 = 0;
  $(".slide-container").css("transform", "translate(0vw)");
});
$(".slide-2").click(function () {
  지금사진 = 1;
  $(".slide-container").css("transform", "translate(-100vw)");
});
$(".slide-3").click(function () {
  지금사진 = 2;
  $(".slide-container").css("transform", "translate(-200vw)");
});

$(".next").click(function () {
  지금사진 += 1;
  $(".slide-container").css("transform", "translate(" + -지금사진 + "00vw)");
});

$(".previous").click(function () {
  지금사진 -= 1;
  $(".slide-container").css("transform", "translate(" + -지금사진 + "00vw)");
});

let startPoint = 0;
let mouseDown = false;
// $(".slide-box")
//   .eq(0)
//   .on("mousedown", function (e) {
//     startPoint = e.clientX;
//     mouseDown = true;
//   });
// $(".slide-box")
//   .eq(0)
//   .on("mousemove", function (e) {
//     if (mouseDown == true) {
//       $(".slide-container").css(
//         "transform",
//         `translateX(${e.clientX - startPoint}px)`
//       );
//     }
//   });
// $(".slide-box")
//   .eq(0)
//   .on("mouseup", function (e) {
//     mouseDown = false;

//     if (e.clientX - startPoint < -100) {
//       $(".slide-container")
//         .css("transition", "all 0.5s")
//         .css("transform", "translateX(-100vw)");
//     } else {
//       $(".slide-container")
//         .css("transition", "all 0.5s")
//         .css("transform", "translateX(0vw)");
//     }
//     setTimeout(() => {
//       $(".slide-container").css("transition", "none");
//     }, 500);
//   });

for (let i = 0; i < $(".slide-box").length - 1; i++) {
  $(".slide-box")
    .eq(i)
    .on("mousedown", function (e) {
      startPoint += e.clientX;
      mouseDown = true;
    });
  $(".slide-box")
    .eq(i)
    .on("mousemove", function (e) {
      if (mouseDown == true) {
        $(".slide-container").css(
          "transform",
          `translateX(${e.clientX - startPoint}px)`
        );
      }
    });
  $(".slide-box")
    .eq(i)
    .on("mouseup", function (e) {
      mouseDown = false;
      if (e.clientX - startPoint < `-${1 + i}00`) {
        $(".slide-container")
          .css("transition", "all 0.5s")
          .css("transform", `translateX(-${1 + i}00vw)`);
      } else {
        $(".slide-container")
          .css("transition", "all 0.5s")
          .css("transform", `translateX(-${i}00vw)`);
      }
      setTimeout(() => {
        $(".slide-container").css("transition", "none");
      }, 500);
    });
}
