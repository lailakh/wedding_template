$(document).ready(function() {
  // Animate loader off screen
  $(".preloader").fadeOut("slow");;
});
var bubbles = $('.bubbles');

function renderBubbles() {
  // bubble properties
  var max_bubbles = 30,
    min_bubbles = 50,
    max_bubbleSize = 10,
    min_bubbleSize = 18,
    total_bubbles = max_bubbles + Math.floor(Math.random() * min_bubbles + 1);
  for (var i = 0; i < total_bubbles; i++) {
    bubbles.append("<div class='bubble-container'><div class='bubble'></div></div>");
  }
  //set css property of .bubbble and .bubble-container
  bubbles.find('.bubble-container').each(function() {
    var bubble_size = max_bubbleSize + Math.floor(Math.random() * min_bubbleSize + 1);
    var bubble_pos = Math.floor(Math.random() * 100 + 1);
    var blur_size = 0 + Math.floor(Math.random() * 3 + 1);
    var animation_delay = 10 + Math.floor(Math.random() * 18);
    var random_margin = 50 + Math.floor(Math.random() * 100)
    var $this = $(this);
    var mX, mY, distance, mX_stored, mY_stored;

    function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }
    $(document).mousemove(function(e) {
      mX = e.pageX
      mY = e.pageY;
      distance = calculateDistance($this, mX, mY);
      if (distance < 50) {
        console.log('yes');
        $this.children('.bubble').css({
          'background': 'rgb(255, 214, 153)',
        });
      } else if (distance > 70) {
        $this.children('.bubble').css({
          'background': 'rgba(255,255,255,0.25)',
          'transform': 'scale(1)'
        });
      }
    });
    $this.css({
      'left': bubble_pos + "%",
      '-webkit-filter': 'blur(' + blur_size + 'px)',
      '-moz-filter': 'blur(' + blur_size + 'px)',
      'filter': 'blur(' + blur_size + 'px)',
      '-webkit-animation-duration': animation_delay + 's',
      '-moz-animation-duration': animation_delay + 's',
      'animation-duration': animation_delay + 's',
    });
    $this.children('.bubble').css({
      'width': bubble_size + 'px',
      'height': bubble_size + 'px'
    });
  });
}
renderBubbles();