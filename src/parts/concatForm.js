function concatForm() {

    let contactForm = document.querySelector("#form"),
        contactInput = contactForm.getElementsByTagName("input"),
        statusContactMessage = document.createElement("div");

    statusContactMessage.classList.add("status");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        contactForm.appendChild(statusContactMessage);

        let request = new XMLHttpRequest();

        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        let formData = new FormData(contactForm);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener("readystatechange", function () {
            if (request.readyState < 4) {
                statusContactMessage.innerHTML = bringOut.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusContactMessage.innerHTML = bringOut.resReady;
            } else {
                statusContactMessage.innerHTML = bringOut.mistake;
            }
        });
        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = "";
        }
    });

}

export default concatForm;