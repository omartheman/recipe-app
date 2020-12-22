
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
// 	show navbar if scrolling up
  if (prevScrollpos >= currentScrollPos) {
    console.log('prev', prevScrollpos, 'curr', currentScrollPos)
    document.getElementById("masthead").style.top = "0";
    console.log('show');
    // document.getElementById("masthead").classList.remove('hidden');
    
  } 
// 	hide navbar if scrolling down
  else {    
    document.getElementById("masthead").style.top = "-90px";
    console.log('hide');														
    // document.getElementById("masthead").classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;
}