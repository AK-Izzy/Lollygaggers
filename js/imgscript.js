var check = true;

$(".btn-danger").click(function(event) {
  if (check) {
    $('.center-fit').attr('src','https://img.ev.mu/images/attractions/5826/1605x642/8698.jpg');
    check = false;
  }
  else {
    $('.center-fit').attr('src','https://hillsdalecraftsupply.com/wp-content/uploads/2015/11/crafts.jpg');
    check = true;
  }
});
