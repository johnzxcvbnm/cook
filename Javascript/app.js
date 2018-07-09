const enableRotateButtons = () => {
  // const myImages = $(".rotateImage").hide();
  //
  // console.log(myImages[0]);
  // myImages[0].show();
  // myImages[0].attr("display", "block");

  $(".leftRotate").on("click", () => {
    console.log("Left Click");
    // myImages.unshift(myImages[myImages.length - 1]);
    // myImages.pop
  });
  $(".rightRotate").on("click", () => {
    console.log("Right Click");
    console.log(myImages);
  });
}

$( () => {
  enableRotateButtons();
});
