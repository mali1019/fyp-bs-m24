// JavaScript Document

/*******************************
* collapse
*******************************/
$(document).ready(function(){


  filterSelection("all");

  function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
          w3RemoveClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
  }
 
  function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
              element.className += " " + arr2[i];
          }
      }
  }
 
  function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
              arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
      }
      element.className = arr1.join(" ");
  }
 
 
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
      });
  }


/*****************owl carousel*************************/
  $('.owl-carousel2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoPlay: 2000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
$('.owl-carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 2,
    autoPlay: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})
$('.owl-carousel3').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoPlay: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.owl-carousel-main').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoPlay: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";
        var imageSrc = this.src;
        var imageSrc = imageSrc.split("/");
        console.log(imageSrc);
        modalImg.src = "img/big-" + imageSrc[imageSrc.length - 1];

    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
modal.onclick = function(e) {
  if (e.target !== this)
    return;
  modal.style.display = "none";
}

  function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);
/*******************wow animate**************************/
new WOW().init();
/*****************owl demo***************************/
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination: false,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,4]
 
  });
  $("#owl-demo2").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination: false,
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,4]
 
  });
  /********************************************/
  /*******dropdown************/
  $(function() {
    var list = $('.js-dropdown-list');
    var link = $('.js-link');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      var text = $(this).html();
      var icon = '<i class="arrow_btm1 fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
      if (text === 'Reset') {
        link.html('Select one option'+icon);
      }
    });
  });

  $(function() {
    var list = $('.js-dropdown-list1');
    var link = $('.js-link1');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      var text = $(this).html();
      var icon = '<i class="navy-blue1 fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
      if (text === 'Reset') {
        link.html('Select one option'+icon);
      }
    });
  });
  $(function() {
    var list = $('.js-dropdown-list2');
    var link = $('.js-link2');
    link.click(function(e) {
      e.preventDefault();
      list.slideToggle(200);
    });
    list.find('li').click(function() {
      var text = $(this).html();
      var icon = '<i class="arrow_btm1 fa fa-chevron-down"></i>';
      link.html(text+icon);
      list.slideToggle(200);
    if (text === 'Reset') {
        link.html('Select one option'+icon);
      }
    });
  });

/*******HOVER FORM HOME PAGE**********/
/*******NAVBAR HOVER*****/

var url = window.location;
// Will only work if string in href matches with location
$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

// Will also work for relative and absolute hrefs
$('ul.nav a').filter(function() {
    return this.href == url;
}).parent().addClass('active');

/*********************************************/ 

$(".navbar-toggle").click(function(){
  $('.collapse').collapse('toggle');
});
  console.log("custom js end");
});


$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    var modal = document.getElementById('myModal'); 
     if(modal.style.display == "block")
      modal.style.display = "none";
 }
 
});
(function($){
  $(window).on("load",function(){
      $(".content").mCustomScrollbar();
  });
})(jQuery);
