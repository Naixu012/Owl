document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Ờm thì...",
        "Có lẽ cú cũng biết rồi",
        "Đáng nhẽ phải nói ra từ lâu rồi cơ",
        "Nhma ngại quá vẫn chưa dám nói 😓",
        "Thì giờ là câu hỏi cuối cùng nè!",
        "T thích cú !!!!",
        "Cú cho phép t làm người yêu cú nhé?"
    ];

    const questionBox = document.querySelector(".question-box");
    const questionParagraph = questionBox.querySelector(".question");

    let currentPhraseIndex = 0;

    const showNextPhrase = () => {
        if (currentPhraseIndex < phrases.length) {
            questionParagraph.textContent = phrases[currentPhraseIndex];
            questionParagraph.classList.add("fade-in");
            setTimeout(() => {
                questionParagraph.classList.remove("fade-in");
                currentPhraseIndex++;
                if (currentPhraseIndex < phrases.length) {
                    setTimeout(showNextPhrase, 500); 
                }
            }, 3000); 
        }
    };

    showNextPhrase();
});
