$(document).ready(function($){
    
  var url = window.location.href;
  console.log(url);
   $(".navbar-nav a.nav-link").each(function() {
       console.log('this.href');
      if(url == (this.href)) {
         $(this).addClass("selected");
      }
  });
});

window.onload = link_select();

function link_select(){
    var url = window.location.href;
    console.log('url');
    console.log(url);
    console.log(window.history);
     $(".navbar-nav a.nav-link").each(function(e) {
            //e.preventDefault();
        //    e.stopPropagation() 
         console.log('this.href');
         console.log(this.href);
        if(url == (this.href)) {
           
            console.log('selected');
           //$(".navbar-nav a").removeClass("selected");
        //    console.log($(this).text('pooja'));
           $(this).addClass("selected");
           //e.stopPropagation(); 
        }
    });
}