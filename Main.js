var slideindex = 1;
showslides(slideindex);

function plusSlides(n) {
    showslides(slideindex += n);

}

function currentSlide(n) {
    showSliedes(slideindex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slide.length }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideindex - 1].style.display = "block";
        dots[slideindex - 1].className += "active";
}