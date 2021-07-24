function form() {
    let bringOut = {
        loading: "Идет загрузка...",
        resReady: "Cпасибо. Мы с вами свяжемся!",
        mistake: " Что-то пошло не так",
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    function sendForm(elem) {
        elem.addEventListener("submit", function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", "server.php");

                    request.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlcodeed"
                    );

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };

                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData(formData)
                .then(() => (statusMessage.innerHTML = bringOut.loading))
                .then(() => {
                    statusMessage.innerHTML = bringOut.resReady;
                })
                .catch(() => (statusMessage.innerHTML = massage.mistake))
                .then(clearInput);
        });
    }
    sendForm(form);
}

export default form;