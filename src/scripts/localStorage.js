export default (function () {
    const FORM = document.querySelector(".nameForm")
    const NAME = document.querySelector(".name")

    NAME.innerHTML = localStorage.getItem("name")

    FORM.addEventListener("submit", submitHandler)

    function submitHandler(event) {
        event.preventDefault()

        localStorage.setItem("name", event.target.nameInput.value)
        NAME.innerText = event.target.nameInput.value
    }
}) ()