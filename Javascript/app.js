const enableRotateButtons = () => {
  let imageCurrent = 0;
  const $myImages = $(".rotateImage").hide();
  $myImages.eq(imageCurrent).show();
  const imageLimit = $myImages.length;

  $(".leftRotate").on("click", () => {
    $myImages.eq(imageCurrent).hide();
    imageCurrent--;
    if(imageCurrent < 0){
      imageCurrent = imageLimit - 1;
    }
    $myImages.eq(imageCurrent).show();
  });

  $(".rightRotate").on("click", () => {
    $myImages.eq(imageCurrent).hide();
    imageCurrent++;
    if(imageCurrent === imageLimit){
      imageCurrent = 0;
    }
    $myImages.eq(imageCurrent).show();
  });
}

$( () => {
  enableRotateButtons();
});
