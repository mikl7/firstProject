function slider() {
    let sliderIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        sliderDots = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(sliderIndex);

    function showSlides(n) {
        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }

        slides.forEach((title) => (title.style.display = "none"));

        dots.forEach((title) => title.classList.remove("dot-active"));

        slides[sliderIndex - 1].style.display = "block";

        dots[sliderIndex - 1].classList.add("dot-active");
    }

    function plusSlide(n) {
        showSlides((sliderIndex += n));
    }

    function curentSlide(n) {
        showSlides((sliderIndex = n));
    }

    prev.addEventListener("click", function () {
        plusSlide(-1);
    });
    next.addEventListener("click", function () {
        plusSlide(1);
    });

    sliderDots.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1])
                curentSlide(i);
        }
    });

}

export default slider;