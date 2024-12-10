document.addEventListener("DOMContentLoaded", () => {
    const answerInput = document.getElementById("answerInput");
    const submitBtn = document.getElementById("submitBtn");
    const result = document.getElementById("result");

    const imagePaths = [
        "cry.jpg",
        "cry1.jpg",
        "cry2.jpg",
        "cry3.jpg",
        "cry4.jpg",
        "cry5.jpg",
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * imagePaths.length);
        return imagePaths[randomIndex];
    }

    function handleAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();

        if (userAnswer.includes("không") || userAnswer.includes("ko") || userAnswer.includes("thích") || userAnswer.includes("sao")) {
            const randomImage = getRandomImage();
            result.innerHTML = `
                Đừng thế mà cú, sợ lắm T-T
                <br>
                <img src="${randomImage}" alt="Crying Image" style="width: 300px; margin-top: 10px;">
            `;
            result.className = "message";
        } else if (userAnswer.includes("ok") || userAnswer.includes("được") || userAnswer.includes("tha")) {
            result.textContent = "Hứa đấy nhá! :3";
            result.className = "message";

            setTimeout(() => {
                const nextButton = document.createElement("button");
                nextButton.textContent = "Ấn đây tiếp nha!";
                nextButton.className = "next-button";
                nextButton.addEventListener("click", () => {
                    window.location.href = "page4.html";
                });

                result.appendChild(nextButton);
            }, 2000);
        } else {
            result.textContent = "Trả lời đi mà :<";
            result.className = "message";
        }
    }

    submitBtn.addEventListener("click", () => {
        handleAnswer();
    });

    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleAnswer();
        }
    });
});
