$(document).ready(function() {

  //get all cards and put them into array CARDS
  // const ALL_CARDS = $(".card");
  // const CARDS = [...ALL_CARDS];
  // console.log(CARDS);

  //shuffle cards onload


  //flip cards on click
  $(".card").click(function(e) {
    // e.preventDefault();
    // e.stopPropagation();
    $(this).toggleClass("flipped");
    let backOfCard = $(this).find(".back");
    console.log(backOfCard);
  });

});

