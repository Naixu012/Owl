document.addEventListener("DOMContentLoaded", () => {
    const optionButtons = document.querySelectorAll(".option-btn");
    const result = document.getElementById("result");
    const image = document.getElementById("image");
    const imageContainer = document.getElementById("image-container");
    const nextBtn = document.createElement("button");

    const selectedChoices = new Set(); 
    const messages = {
        "Ngủ": "Gớm, làm như có ngủ ấy! 😒",
        "Ăn": "Bỏ bữa coi chừng! 🙄",
        "Xem phim": "Thức đêm xem thì ko tốt đâu! ☝",
        "Đi chơi": "Toàn giả nghèo thôi 😑",
        "Chạy deadline": "Vì sao tinh tú tặng iem! 🌟"
    };

    const images = {
        "Ngủ": "ngu.jpg",
        "Ăn": "an.jpg",
        "Xem phim": "xemphim.jpg",
        "Đi chơi": "dichoi.jpg",
        "Chạy deadline": "chaydeadline.jpg"
    };


    nextBtn.textContent = "Câu hỏi cuối cùng nha!";
    nextBtn.id = "nextBtn";
    nextBtn.style.display = "none";
    nextBtn.style.marginTop = "15px";
    nextBtn.style.padding = "10px";
    nextBtn.style.backgroundColor = "#6A8A82";
    nextBtn.style.color = "white";
    nextBtn.style.border = "none";
    nextBtn.style.borderRadius = "10px";
    nextBtn.style.cursor = "pointer";

   
    nextBtn.addEventListener("click", () => {
        window.location.href = "Thư mời cú.html";
    });

    document.querySelector(".container").appendChild(nextBtn);

    function handleOptionClick(event) {
        const choice = event.target.textContent;

        
        selectedChoices.add(choice);

        const message = messages[choice] || "Không rõ bạn chọn gì!";
        const imageSrc = images[choice] || "";

        result.textContent = message;
        result.className = "message correct";

        image.src = imageSrc;
        image.style.display = "block";

        if (selectedChoices.size === 5) {
            nextBtn.style.display = "block";
            setTimeout(() => nextBtn.classList.add("show"), 100);
        }
    }

    optionButtons.forEach((button) => {
        button.addEventListener("click", handleOptionClick);
    });
});
