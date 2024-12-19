document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Ờm thì...",
        "Có lẽ cú cũng biết rồi",
        "Đáng nhẽ phải nói trực tiếp thì okela hơn là qua màn hình như này :<",
        "nhma ngại quá vẫn chưa dám nói 😓",
        "Thì giờ là câu hỏi cuối cùng nha!",
        "T thích cú !!!!",
        "Cú đồng ý làm người yêu t nhé?"
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