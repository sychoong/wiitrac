$(document).ready(function(){
	

	$('.nav-button').on('click', function(){

		var navId = '#' + $(this).data('navid');
		$(navId).toggleClass('show');

		$('.nav-item').not(navId).removeClass('show');

	});
	

	$('.fi-x').on('click', function(){
		$('.nav-item').removeClass('show');
	});



	$('.openContactNav').on('click', function(){

		var navId = '#' + $(this).data('navid');
		$(navId).toggleClass('show');

		$('.nav-item').not(navId).removeClass('show');

	});

	
	$('.product-para').first().addClass( "showproduct" );

	$('.product-content').on('click', function(){

		var productContent = "#" + $(this).data('productcontent');
		$(productContent).addClass('showproduct');
		
		$('.product-para').not(productContent).removeClass('showproduct');

	});
	
	$('.lightbox').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		
		
	});

	$("a").on('click', function(event) {

    if (this.hash !== "") {
   
      event.preventDefault();

    
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      
        window.location.hash = hash;
      });
    }
  });




});

// ACCORDION FOR FAQS //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//AOS 
AOS.init({
	easing: 'ease-in-out-sine'
	});
	
setInterval(addItem, 300);

var itemsCounter = 1;
var container = document.getElementById('aos-demo');

function addItem () {
	if (itemsCounter > 42) return;
	var item = document.createElement('div');
	item.classList.add('aos-item');
	item.setAttribute('data-aos', 'fade-up');
	item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
	container.appendChild(item);
	itemsCounter++;
}
