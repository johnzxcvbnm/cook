const enableTags = () => {
  const $myTags = $(".tag2");
  // console.log($myTags);

  // $myTags.on("click", () => {
  //   $myTags.toggleClass("selected");
  // })

  for(let i = 0; i < $myTags.length; i++){
    $($myTags[i]).on("click", () => {
      $($myTags[i]).toggleClass("selected");
      let myString = $(".selected").text().replace(/\s+/g, '-');
      // console.log(myString);
      $(".hidden").attr("value", myString);
    })
  }

  // $(".tag2").on("click", function() {
  //   this.toggleClass("selected");
  // })
  // .toggleClass("selected");
}

const enableToggleButtons = () => {
  const $myCommentDiv = $(".addComment").hide();
  const $myRatingDiv = $(".addRating").hide();

  $("#rateButton").on("click", () => {
    $myCommentDiv.hide();
    $myRatingDiv.toggle();
  });

  $("#commentButton").on("click", () => {
    $myRatingDiv.hide();
    $myCommentDiv.toggle();
  });
}

const enableMoreLessButtons = () => {

  $("#moreDirections").on("click", () => {
    const $newInput = $("<input>").attr("id", "directions")
                                  .attr("type", "text")
                                  .attr("name", "directions")
                                  .attr("required", true);
    $newInput.appendTo($(".inputDirectionsWrapper"));
  });

  $("#lessDirections").on("click", () => {
    if( $(".inputDirectionsWrapper").children().length > 1 ){
      $(".inputDirectionsWrapper").children().last().remove();
    }
  })

  $("#moreImages").on("click", () => {
    const $newInput = $("<input>").attr("id", "images")
                                  .attr("type", "text")
                                  .attr("name", "images")
                                  .attr("required", true);
    $newInput.appendTo($(".inputImagesWrapper"));
  });

  $("#lessImages").on("click", () => {
    if( $(".inputImagesWrapper").children().length > 1 ){
      $(".inputImagesWrapper").children().last().remove();
    }
  });

  $("#moreIng").on("click", () => {
    const $newInput = $("<input>").attr("id", "ingredients")
                                  .attr("type", "text")
                                  .attr("name", "ingredients")
                                  .attr("required", true);
    $newInput.appendTo($(".inputIngredientsWrapper"));
  });

  $("#lessIng").on("click", () => {
    if( $(".inputIngredientsWrapper").children().length > 1 ){
      $(".inputIngredientsWrapper").children().last().remove();
    }
  });

  $("#moreTags").on("click", () => {
    const $newInput = $("<input>").attr("id", "tags")
                                  .attr("type", "text")
                                  .attr("required", true)
                                  .attr("name", "tags");
    $newInput.appendTo($(".inputTagsWrapper"));
  });

  $("#lessTags").on("click", () => {
    if( $(".inputTagsWrapper").children().length > 1 ){
      $(".inputTagsWrapper").children().last().remove();
    }
  });
}

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
  enableMoreLessButtons();
  enableToggleButtons();
  enableTags();
});
