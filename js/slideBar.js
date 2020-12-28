var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
var dotId = ["dot", "dot2"];
var textId = ["textoAutores", "textoLibrosDestacados"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var slides = document.getElementsByClassName(slideId[no]);
    var dots = document.getElementsByClassName(dotId[no]);
    var text = document.getElementsByClassName(textId[no]);

    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }

    //Reseteamos las imágenes
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //Reseteamos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Reseteamos la descripción
    for (i = 0; i < text.length; i++) {
        text[i].style.display = "none";
    }

    //Mostramos unicamente los seleccionados
    slides[slideIndex[no] - 1].style.display = "block";
    dots[slideIndex[no] - 1].className += " active";
    text[slideIndex[no] - 1].style.display = 'block';


}


