//   // native solution
// (function(){
//   jQuery.fn.imgCenter = function(){
//
//     var thisImg = this;
//     const thisImgGet = this.get()[0];
//     resizeWin();
//
//     $(window).bind('resize', resizeWin);
//
//     function resizeWin(){
//       var imgWidth = thisImg.width();
//       var imgHeight = thisImg.height();
//       var winWidth = window.innerWidth;
//       var winHeight = window.innerHeight;
//
//       thisImgGet.style.position = 'absolute';
//       thisImgGet.style.left = `${winWidth/2 - imgWidth/2}px`;
//       thisImgGet.style.top = `${winHeight/2 - imgHeight/2}px`;
//       thisImgGet.style.maxWidth = `${winWidth}px`;
//       thisImgGet.style.maxHeight = `${winHeight}px`;
//       thisImgGet.style.width = 'auto';
//       thisImgGet.style.height = 'auto';
//     }
//   };
// })();

  // jQuery solution
(function(){
  jQuery.fn.imgCenter = function(){
    var thisImg = this;
    resizeWin();
    $(window).bind('resize', resizeWin);

    function resizeWin() {
      var imgWidth = $(thisImg).width();
      var imgHeight = $(thisImg).height();
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      $(thisImg).css({
        'position': 'absolute',
        'left': winWidth / 2 - imgWidth / 2,
        'top': winHeight / 2 - imgHeight / 2,
        'max-width': winWidth,
        'max-height': winHeight,
        'width': 'auto',
        'height': 'auto'
      });
    }
  }
})();
