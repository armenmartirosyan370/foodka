(function($) {
   "use strict";

    $(document).ready(function () {

        /**-------------------------------------------
         *  Navbar fix
         * -----------------------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }


        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function wcqib_refresh_quantity_increments() {
            jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
                var c = jQuery(b);
                c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
            })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function() {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
        }), jQuery(document).ready(function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("updated_wc_div", function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("click", ".plus, .minus", function() {
            var a = jQuery(this).closest(".quantity").find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
        });

        /*---------------------------------------
            Range slider
        ---------------------------------------*/
        $( "#slider-range" ).slider({
            range: true,
            min: 0.00,
            max: 40.00,
            values: [ 5.00, 1999.00 ],
            slide: function( event, ui ) {
              $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
          });
          $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );


        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="ri-arrow-left-line"></i>';
        var leftAngle = '<i class="ri-arrow-left-s-line"></i>';
        var rightArrow = '<i class="ri-arrow-right-line"></i>';
        var rightAngle = '<i class="ri-arrow-right-s-line"></i>';
        var backButton = '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>';
        var nextButton = '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>';

        /**testimonial-slider**/
        $('.testimonial-slider').owlCarousel({
            loop:true,
            nav:true,
            dots: true,
            margin: 10,
            items: 1,
            smartSpeed:1500,
            navText: [leftArrow,rightArrow],
        })

        /**related-product-slider**/
        $('.related-product-slider').owlCarousel({
            loop:true,
            nav:true,
            dots: false,
            margin: 0,
            items: 3,
            smartSpeed:1500,
            navText: [leftAngle,rightAngle],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        })

        /*---------------------------------------
            Thumbnail Slider
        ---------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                speed: 1500,
                asNavFor: '.product-thumbnail-carousel'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-down"></i></div>',
            });
        }

        var productDetailSlider = $('.single-thumbnail-slider2');
        var pThumbanilSlider = $('.product-thumbnail-carousel2');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: '.product-thumbnail-carousel2'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider2',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                vertical: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
            });
        }

        /**banner-move**/
        // function touches(e){
        //     var x = e.touches ? e.touches[0].clientX : e.clientX,
        //             y = e.touches ? e.touches[0].clientY : e.clientY;
        //   var w = window.innerWidth / 2;
        //   var h = window.innerHeight / 2;
        //
        //   var l = -(x - w) / (w / 1) - 1;
        //   var t = -(y - h) / (h / 1) - 1;
        //       //10 / (y - (h / 2)) * 10;
        //   console.log(y + ' | ' + h + ' | ' + t);
        //
        //     TweenMax.to($('.banner-bg-img'), 1, {
        //         top: t + "%",
        //         left: l + "%"
        //     });
        //
        // }
        
        // window.addEventListener("mousemove", touches);
        // window.addEventListener("touchstart", touches);
        // window.addEventListener("touchmove", touches);

        

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        /**featured-accordion**/
        $('.accordion-item').on('click',function(e){
            $('.accordion-item').removeClass('active');
            $(this).toggleClass('active');
        });

        $(document).on('mouseover','.single-intro-contact-wrap',function() {
            $(this).addClass('single-intro-contact-wrap-active');
            $('.single-intro-contact-wrap').removeClass('single-intro-contact-wrap-active');
            $(this).addClass('single-intro-contact-wrap-active');
        });

        /*------------------
           back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 200);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/

        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() >= 1) {
            mainMenuTop.addClass('navbar-area-fixed');
        }
        else {
            mainMenuTop.removeClass('navbar-area-fixed');
        }
        
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(500);
        });

    });



   function getLanguage() {
       document.getElementById('language').addEventListener('change', function (event) {
           localStorage.setItem('lang', event.target.value);
           location.reload()
       })
        if(localStorage.getItem('lang')){
            $('#language').val(localStorage.getItem('lang'));
        }

    }


    let languageJson;
    $.getJSON('./assets/i18n/language.json', function(data) {
        languageJson =data
        getData()
        getLanguage()
    });

    function getData() {
        const lng = localStorage.getItem('lang')

        const content = `
        <div class="preloader" id="preloader">
        <div class="preloader-inner">
            <div id="wave1">
            </div>
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div>
<div class="body-overlay" id="body-overlay"></div>
<div class="td-search-popup" id="td-search-popup">
        <form action="index.html" class="search-form">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Search.....">
            </div>
            <button type="submit" class="submit-btn"><i class="fa fa-search"></i></button>
        </form>
    </div>
    
<header class="navbar-area">
        <nav class="navbar navbar-expand-lg">
            <div class="container nav-container">
                <div class="responsive-mobile-menu mt-2">
                    <button class="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="themefie_main_menu">
                    <ul class="navbar-nav menu-open">
                        <li class="current-menu-item menu-item-has-children">
                            <a href="home-1.html">${languageJson[lng].header.home}</a>
<!--                            <ul class="sub-menu ps-0">-->
<!--                                <li><a href="home-1.html">Home 01</a></li>-->
<!--                                <li><a href="home-2.html">Home 02</a></li>-->
<!--                                <li><a href="home-3.html">Home 03</a></li>-->
<!--                            </ul>-->
                        </li>
                        <li class="current-menu-item menu-item-has-children">
                            <a href="#">${languageJson[lng].header.menu}</a>
<!--                            <ul class="sub-menu ps-0">-->
<!--                                <li><a href="about.html">About</a></li>-->
<!--                                <li><a href="blog.html">Blog</a></li>-->
<!--                                <li><a href="blog-details.html">Blog Details</a></li>-->
<!--                                <li><a href="menu.html">Menu</a></li>-->
<!--                                <li><a href="menu-list.html">Menu List</a></li>-->
<!--                                <li><a href="shop.html">Shop</a></li>-->
<!--                                <li><a href="single-product.html">Shop Details</a></li>-->
<!--                                <li><a href="cart.html">Cart</a></li>-->
<!--                                <li><a href="checkout.html">Checkout</a></li>-->
<!--                            </ul>-->
                        </li>
                        <li>
                            <a href="about.html">${languageJson[lng].header.contact}</a>
                        </li>
                        <li>
                            <a href="contact.html">${languageJson[lng].header.portfolio}</a>
                        </li>
                    </ul>
                </div>
                <div class="logo">
                    <a class="main-logo" href="home-1.html"><img src="assets/img/logo.png" alt="img"></a>
                </div>
                <div class="nav-right-part nav-right-part-mobile">
                    <ul>
<!--                        <li><a class="search" href="#"><i class="ri-search-line"></i></a>-->
<!--                        </li>-->
                        <li class="phone-contact d-md-block d-none"><i class="ri-phone-fill float-start"></i>
                            +374 77 15 25 35
                        </li>
                        <li><i class="ri-global-line float-start me-1"></i>ENG</li>

                    </ul>
                </div>
                <div class="nav-right-part nav-right-part-desktop">                    
                    <ul>
<!--                        <li><a class="search" href="#"><i class="ri-search-line"></i></a>-->
<!--                        </li>-->
                        <li class="phone-contact">
<!--                            <i class="ri-phone-fill float-start"></i>-->
                            +374 77 15 25 35
                        </li>
<!--                        <li class="menu-cart"><a href="cart.html">CART <span>1</span></a></li>-->
                        <li class="language_menu"><i class="ri-global-line float-start me-1"></i>
                            <select id="language" class="form-select" aria-label="language">
                            <option selected value="ENG">ENG</option>
                            <option value="RU">RU</option>
                            <option value="ARM">ARM</option>
                        </select></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
<section class="banner-area">
        <div class="banner-thumb">
<!--            <img src="assets/img/banner/banner.png" alt="img">-->
        </div>
        <div class="banner-bg-img"></div>
<!--        <div class="banner-shape-1"><img src="assets/img/banner/shape-1.png" alt="img"></div>-->
<!--        <div class="banner-shape-2"><img src="assets/img/banner/shape-2.png" alt="img"></div>-->
        <div class="container">
            <div class="row justify-content-start">
                <div class="col-lg-6 col-md-8 align-self-center">
                    <div class="banner-inner">
                        <h3>${languageJson[lng].header.quick}</h3>
                        <h1>${languageJson[lng].header.little}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                            Varius sed pharetra dictum neque massa congue</p>

                        <a class="btn btn-secondary" href="shop.html">${languageJson[lng].buttons.order}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="offer-area pd-top-70 pd-bottom-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6  d-contents">
                    <div class="single-offer-wrap" style="background-color: var(--secondary-color);">
                        <img class="bg-img img-fluid" src="assets/img/offer/1.png" alt="img">
                        <div class="wrap-details">
                            <h3>${languageJson[lng].offer.buffet} </h3>
                            <p>${languageJson[lng].offer.uniq}</p>
                            <a class="btn btn-white " href="shop.html">${languageJson[lng].buttons.explore} </a>
                        </div>
<!--                        <div class="offer-sticker">-->
<!--                            <img src="assets/img/offer/offer.png" alt="img">-->
<!--                        </div>-->
                    </div>
                </div>
                <div class="col-md-6 align-self-center">
                    <div class="single-offer-wrap " style="background-color: var(--heading-color);">
                        <img class="bg-img img-fluid" src="assets/img/offer/2.png" alt="img">
                        <div class="wrap-details">
                            <h3>${languageJson[lng].offer.food_box}</h3>
                            <p>${languageJson[lng].offer.food_box_text}</p>
                            <a class="btn btn-secondary " href="shop.html">${languageJson[lng].buttons.explore} </a>
                        </div>
                    </div>
                    <div class="single-offer-wrap wrap-2" style="background-color: var(--secondary-color)">
<!--                        <div class="animated-img"><img src="assets/img/offer/03.png" alt="img"></div>-->
<!--                        <div class="animated-img animated-img-2"><img src="assets/img/offer/03.png" alt="img"></div>-->
                        <div class="overlay-gradient"></div>
                        <div class="wrap-details">
                            <h3 class="text-heading">${languageJson[lng].offer.coffee_break}</h3>
                            <p>${languageJson[lng].offer.coffee_break_text}</p>

                            <a class="btn  btn-secondary" href="shop.html">${languageJson[lng].buttons.explore} </a>
                        </div>
                        <img class="bg-img-2 img-fluid" src="assets/img/offer/3.png" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="about-area pd-top-120 pd-bottom-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="row about_imgs">
                        <div class="col-6 px-1">
                                <img src="assets/img/other/about_1.png">
                                <img class="mt-2" src="assets/img/other/about_2.png">


                        </div>
                        <div class="col-6 px-1">
                            <img src="assets/img/other/about_3.png">
                            <img  class="mt-2 " src="assets/img/other/about_4.png">

                        </div>
                    </div>
<!--                    <div class="thumb mb-lg-0 mb-4">-->
<!--                        <img src="assets/img/other/about.png" alt="img">-->
<!--                    </div>-->

                </div>
                <div class="col-lg-6">
                    <div class="section-title text-lg-start text-center px-5">
                        <h3 class="about_info">${languageJson[lng].about_us}</h3>
                        <h3 class="sub-title">${languageJson[lng].about_us_subtitle}
                        </h3>
                        <h6>  ${languageJson[lng].about_us_text}</h6>
                       
                        <a class="btn btn-secondary" href="shop.html">${languageJson[lng].buttons.explore} </a>
                    </div>
<!--                    <div class="row">-->
<!--                        <div class="col-sm-6">-->
<!--                            <div class="single-about-wrap">-->
<!--                                <img src="assets/img/icon/1.png" alt="img">-->
<!--                                Fresh food-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-sm-6">-->
<!--                            <div class="single-about-wrap">-->
<!--                                <img src="assets/img/icon/2.png" alt="img">-->
<!--                                Fast Delivery-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-sm-6">-->
<!--                            <div class="single-about-wrap">-->
<!--                                <img src="assets/img/icon/3.png" alt="img">-->
<!--                                Quality Maintain-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="col-sm-6">-->
<!--                            <div class="single-about-wrap">-->
<!--                                <img src="assets/img/icon/4.png" alt="img">-->
<!--                                24/7 Service-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </section>
<section class="product-area pd-bottom-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="section-title text-center">
                        <h3 class="sub-title">Our signature</h3>
                        <h2 class="title">Delicious Deals for Delicious Meals</h2>
                    </div>
                    <ul class="product-nav nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="pills-ramen-tab" data-bs-toggle="pill" data-bs-target="#pills-ramen" type="button" role="tab" aria-controls="pills-ramen" aria-selected="true"><img src="assets/img/category/1.png" alt="img">Ramen</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-pizza-tab" data-bs-toggle="pill" data-bs-target="#pills-pizza" type="button" role="tab" aria-controls="pills-pizza" aria-selected="false"><img src="assets/img/category/2.png" alt="img">Pizza</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-burger-tab" data-bs-toggle="pill" data-bs-target="#pills-burger" type="button" role="tab" aria-controls="pills-burger" aria-selected="false"><img src="assets/img/category/3.png" alt="img">Burger</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-french-fry-tab" data-bs-toggle="pill" data-bs-target="#pills-french-fry" type="button" role="tab" aria-controls="pills-french-fry" aria-selected="false"><img src="assets/img/category/4.png" alt="img">French fries</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-fast-food-tab" data-bs-toggle="pill" data-bs-target="#pills-fast-food" type="button" role="tab" aria-controls="pills-fast-food" aria-selected="false"><img src="assets/img/category/5.png" alt="img">Fast food</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-drinks-tab" data-bs-toggle="pill" data-bs-target="#pills-drinks" type="button" role="tab" aria-controls="pills-drinks" aria-selected="false"><img src="assets/img/category/6.png" alt="img">Soft drinks</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-ramen" role="tabpanel" aria-labelledby="pills-ramen-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/burger/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-pizza" role="tabpanel" aria-labelledby="pills-pizza-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/3.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Roasted Garlic Chicken Pizza </a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/4.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">All Season Gulliver Pizza </a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/5.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Chicken Fajita Pizza Large </a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$37.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/6.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">BBQ Chicken Classic Pizza Large </a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$35.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-burger" role="tabpanel" aria-labelledby="pills-burger-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/burger/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-french-fry" role="tabpanel" aria-labelledby="pills-french-fry-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/burger/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-fast-food" role="tabpanel" aria-labelledby="pills-fast-food-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/burger/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-drinks" role="tabpanel" aria-labelledby="pills-drinks-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Margherita Pizza</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (200)
                                        </div>
                                        <h6 class="price">$17.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/pizza/2.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Maxican Pizza Test Better</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (928)
                                        </div>
                                        <h6 class="price">$29.00</h6>
                                    </div>
                                    <div class="btn-area">
                                        <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                    </div>                                               
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-item-wrap">
                                <div class="thumb">
                                    <img src="assets/img/product/burger/1.png" alt="img">
                                    <a class="fav-btn" href="#"><i class="ri-heart-line"></i></a>
                                </div>
                                <div class="wrap-details">
                                    <h5><a href="single-product.html">Patty Buns Burgers</a></h5>
                                    <div class="wrap-footer">
                                        <div class="rating">
                                            4.9
                                            <span class="rating-inner">
                                                <i class="ri-star-fill ps-0"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-half-line pe-0"></i>
                                            </span>
                                            (462)
                                        </div>
                                        <h6 class="price">$27.00</h6>
                                    </div>                            
                                </div>
                                <div class="btn-area">
                                    <a class="btn btn-secondary" href="single-product.html">CHOOSE OPTIONS </a>         
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="portfolio-area pd-top-70 pd-bottom-90">
        <div class="container">
            <div class="portfolio">
                <div class="row h-100">
                    <div class="col-md-6 d-flex justify-content-center flex-column px-5 align-items-start">
                            <h3>We Document Every Food</br>
                                Bean Process untile it is saved</h3>
                            <div class="wrap-details pt-3">
                                <a class="btn btn-white" href="shop.html">Explore </a>
                            </div>

                    </div>
                    <div class="col-md-6 d-flex justify-content-center flex-column px-5 align-items-center">
                        <img class="img-fluid" src="assets/img/other/portfolio_bg.png">

                    </div>

                </div>

            </div>


        </div>

    </section>
<footer class="footer-area pd-top-100">
        <div class="footer-inner padding-top-100 padding-bottom-65">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="footer-widget widget">
                            <div class="logo">
                                <img src="assets/img/logo2.png" alt="img">
                            </div>
                            <ul class="contact_info_list">
                                <li class="single-info-item">
                                    <p class="details">
                                        Little bite of big delight
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="footer-widget widget widget_link">
                            <h4 class="widget-title">Key Links</h4>
                            <ul>
                                <li><a href="menu-list.html">About</a></li>
                                <li><a href="menu-list.html">News</a></li>
                                <li><a href="menu-list.html">Menu</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="footer-widget widget widget_link">
                            <h4 class="widget-title">Menu</h4>
                            <ul>
                                <li><a href="menu-list.html">About</a></li>
                                <li><a href="menu-list.html">News</a></li>
                                <li><a href="menu-list.html">Menu</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="footer-widget widget widget_link">
                            <h4 class="widget-title">Follow us on social media</h4>
                            <ul>
                                <li><a href="menu-list.html">We are always looking for ways to improve our products and to connect with both users and followers</a></li>
                                <li> <i class="ri-youtube-fill"></i>
                                    <i class="ri-twitter-fill"></i>
                                    <i class="ri-linkedin-line"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <hr>
                <div class="row align-items-center">
                    <div class="col-md-6 text-md-start text-center">
                        <div class="copyright-area">
                            <p>Copyright © 2024 Pezzo. All rights reserved</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="copyright-area social-area text-md-end text-center mt-md-0 mt-2">
                            <li><p>Designed and developed by Brain Fors</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
<div class="back-to-top">
        <span class="back-top"><i class="fas fa-angle-double-up"></i></span>
    </div>
        `
        $('#body').html(content)
    }

})(jQuery);
