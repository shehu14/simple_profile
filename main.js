function changePic() {
  document.getElementById("profilePic").src = "images/adrian.webp";
}

function normalPic() {
  document.getElementById("profilePic").src = "images/adrian.jpg";
}


$(".go-to-contact").click(function() {
  $('html, body').animate({
      scrollTop: $(".contact").offset().top
  }, 1000);
});