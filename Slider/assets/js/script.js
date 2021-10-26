function showSlides(n) {
    let divs = document.getElementsByClassName("sliders");
    if (n > divs.length) {
        slideCount = 1;
    }

    if (n < 1) {
        slideCount = divs.length;
    }

    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    divs[slideCount - 1].style.display = "flex";
}

let slideCount = 1;
showSlides(slideCount);

function nextSlides(n) {
    showSlides(slideCount += n);
}