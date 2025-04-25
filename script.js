$(document).ready(function() {
    // Navbar Toggle
    $(".nav-toggle").click(function() {
        $(".nav-menu").slideToggle();
    });

    // Slider
    let slides = $(".slide");
    let totalSlides = slides.length;
    let index = 0;

    function showSlide() {
        $(".slider").css("transform", `translateX(-${index * 100}%)`);
    }

    $(".next").click(function() {
        index = (index + 1) % totalSlides;
        showSlide();
    });

    $(".prev").click(function() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    });

    setInterval(function() {
        index = (index + 1) % totalSlides;
        showSlide();
    }, 5000);
});