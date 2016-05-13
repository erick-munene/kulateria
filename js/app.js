$(document).foundation()


$(function() {

  var stickyNav = $('#stickyNav'),
      offset = stickyNav.offset(),
      spacer = stickyNav.height();
  
$(window).scroll(function() {
                   
    if($(this).scrollTop() >= offset.top + 1 && $('#stickyNav').not('fixed')) {
      stickyNav.addClass('fixed'),
      $('#spacer').height(spacer);
    }else if ($(this).scrollTop() <= offset.top && stickyNav.hasClass('fixed')){
      stickyNav.removeClass('fixed'),
      $('#spacer').height(0);
    }
  });
});