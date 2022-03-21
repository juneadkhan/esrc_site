// Header styling

function updateHeader() {
    var scrollVal = $(document).scrollTop();
    $(".js-section").each(function() {
      var offset = ($(this).position().top) - 100;
      var color = $(this).data("color");
      if(scrollVal >= offset) {
        $('.js-header-content').removeClass('text-pinkLight text-purpleLight text-yellowLight text-greenLight');
        $('.js-header-content').addClass(color);
      }
    });
  }
  
  // TODO: update scrollbar color while scrolling!
  
  $(document).scroll(function() {
    updateHeader();
  });
  
  // Header link logic
  
  $('.social-link').hover(
    function() {
      var getLink = $(this).data('platform');
      $('.social-url ul').css('opacity', '1');
      if (getLink == 'twitter') {
        $('.social-url ul').css('top', '0');
      } else if (getLink == 'instagram') {
        $('.social-url ul').css('top', '-24px');
      }
    }, function() {
      $('.social-url ul').css('opacity', '0');
    }
  );
  
  // Header link 2 logic
  
  $('.social-link-2').hover(
    function() {
      var getLink = $(this).data('platform');
      $('.social-url-2 ul').css('opacity', '1');
      if (getLink == 'linkedin') {
        $('.social-url-2 ul').css('top', '0');
      } else if (getLink == 'github') {
        $('.social-url-2 ul').css('top', '-24px');
      }
    }, function() {
      $('.social-url-2 ul').css('opacity', '0');
    }
  );
  