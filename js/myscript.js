$(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });



var navbar =document.getElementById('navbar');
var nav =document.getElementById('nav');

navbar.onclick =function (){

if(nav.style.display === 'none'){

  nav.style.display="block";
// nav.style.transitionTimingFunction = "linear";
}
else {
 nav.style.display="none";
// nav.style.transitionTimingFunction = "linear";

}


}





 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



