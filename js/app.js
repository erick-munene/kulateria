$(document).foundation()

(function () {
    var toggle = document.getElementById('header-nav-toggle'),
        nav = document.getElementById('header-nav');

    // If JavaScript Is Enabled
    // Modify Initial States
    toggle.className = 'is-visible';
    nav.className = 'is-hidden';

    // Change Visibility On Click
    toggle.addEventListener('click', function () {
        if (nav.className === 'is-hidden') {
            nav.className = '';
        } else {
            nav.className = 'is-hidden';
        }
    })
})();


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