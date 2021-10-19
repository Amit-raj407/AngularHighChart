function onError() {
    let imgSelector = document.getElementById("img");
    imgSelector.src = './assets/img/icons8-user-30.png';
}



$(document).ready(() => {
    $('li').click(function () {
        console.log("Nav Clicked");
        $("li.active").removeClass("active");
        $(this).addClass('active');
    })
});

$("#selectAll").click(function(){
    console.log("CheckBox Clicked");
    $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
});


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       console.log("DownScroll");
       document.getElementById("nav").style.top = "-80px";
   } else {
      // upscroll code
      console.log("UpScroll");
      document.getElementById("nav").style.top = "0px";
   }
   lastScrollTop = st;
});