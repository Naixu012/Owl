document.addEventListener("DOMContentLoaded", () => {
    const questionBox = document.querySelector(".question-box");
    const imgPosition = document.querySelector(".img-position");

    setTimeout(() => {
        questionBox.classList.add("visible");
        imgPosition.classList.add("visible");
    }, 500);
});
