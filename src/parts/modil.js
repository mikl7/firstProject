function modil() {
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        popupClose = document.querySelector(".popup-close"),
        inform = document.querySelector(".info");

    more.addEventListener("click", function () {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });

    inform.addEventListener("click", function (event) {
        let target = event.target;
        if (target.classList.contains("description-btn")) {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        }
    });

    popupClose.addEventListener("click", function () {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });
}

export default modil;