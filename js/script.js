var theaterContent = {};

$(document).ready(function() {
  $('#main').fadeIn(1500);
  // randomEffect();
  resizeHeader();
  $.getJSON("theater-content.json", function(content) {
    console.log(content);
    saveContent(content);
  });
});

function saveContent(content) {
  theaterContent = content;
}

$(window).resize(function() {
  resizeHeader();
  checkBorder();
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(window).scroll(function() {
	parallax();
})

$(".video-box").hover(
  function() {
    var id = this.id;
    var imgSelector = "#" + id + " img";
    var videoSelector = "#" + id + " video";
    var imgHeight = $(imgSelector).height();
    var imgWidth = $(imgSelector).width();
    $(videoSelector).css('height', imgHeight + 'px');
    $(videoSelector).css('width', imgWidth + 'px');
    $(imgSelector).css('display', 'none');
    $(videoSelector).css('display', 'block');
    loadContent(this.id);
  }, function() {
    var id = this.id;
    $("#" + id + " video").css('display', 'none');
    $("#" + id + " img").css('display', 'block');
  }
);

$(".video-box").click(function() {
  openTheater();
});

$(".outer").click(function() {
  closeTheater();
})

function resizeHeader() {
//  var headerHeight = Math.max($(window).height(), ($('#text-head-col').offset().top + $('#text-head-col').outerHeight(true)));
  var headerHeight = $(window).height();
  var galleryElem = Math.min($(window).height(), $(window).width())
  $(".header").css('height', headerHeight + 'px');
  $("#video-gallery").css('margin-top', headerHeight + 'px');
  $("#gallery-wrapper").css('padding-top', (galleryElem * 0.4) + 'px');
}

function checkBorder() {
  var headerWidth = $(window).width();
  if (headerWidth < 992) {
    $(".text-head").css('box-shadow', '0px 0px 0 #0A4EF2');
    $(".text-head").css('padding-right', '50px');
    $(".img-col").css('margin', 'none');
    $(".img-col").css('margin-right', 'auto');
  } else {
    $(".text-head").css('box-shadow', '-2px 0px 0 #0A4EF2');
    $(".text-head").css('padding-right', '200px');
    $(".img-col").css('margin', 'auto');
    $(".img-col").css('margin-right', '0px');
  }
}

function loadContent(contentID) {
  var filmContent = theaterContent[contentID];
  $(".video-embed").attr('src', filmContent["source"]);
  $(".theater.title").text(filmContent["title"]);
  $(".theater.creator").text(filmContent["creator"]);
  $(".theater.description").text(filmContent["description"]);
  $(".theater.bio").text(filmContent["bio"]);
}

function openTheater() {
  document.getElementById("theater").style.display = "block";
}

function closeTheater() {
  document.getElementById("theater").style.display = "none";
}

var breakpoint;
var displayProp = 'inline';
var offScreen = false;

function parallax() {
	var wScroll = $(window).scrollTop();
  var topGallery = $('#video-gallery').offset().top;
	$('.down-indicator').css('opacity', (100 - (wScroll)) + '%');
	$('.parallax-bg').css('background-position', 'center ' + (5 + (wScroll * 0.063)) + 'em');
  if (wScroll >= topGallery) {
    $('.parallax-gallery').css('top', (80 + (wScroll - topGallery) * 1.4) + 'px');
    console.log($('.parallax-gallery').offset().top >= wScroll + $(window).height());
    if ($('.parallax-gallery').offset().top >= wScroll + $(window).height() && offScreen == false) {
      breakpoint = $('.parallax-gallery').offset().top;
      offScreen = true;
    }
    if (offScreen) {
      displayProp = 'none';
      if (wScroll + $(window).height() <= breakpoint) {
        displayProp = 'inline';
      }
    }
    $('.parallax-gallery').css('display', displayProp);
  }
}

/* animation: bobble 5s infinite (delay) alternate; */
function randomEffect() {
  thumbnailArray = $('.thumbnail');
  thumbnailArray.each(function(index) {
    var scale = Math.floor(Math.random() * Math.floor(2000));
    $(this).css('animation', 'bobble 5s infinite ' + scale + 'ms alternate');
  })
}
