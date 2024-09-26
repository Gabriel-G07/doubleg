const whatsappLink = document.getElementById('whatsapp-link');
const questionList = document.getElementById('question-list');
const customQuestionInput = document.getElementById('custom-question');
const questionItems = document.querySelectorAll('#question-list ul li');

whatsappLink.addEventListener('click', (e) => {
    e.preventDefault();
    questionList.style.display = 'block';
});

document.addEventListener('click', function(event) {
    if (!document.getElementById('question-list').contains(event.target) && 
        !document.getElementById('whatsapp-link').contains(event.target)) {
        document.getElementById('question-list').style.display = 'none';
    }
});

questionItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        const selectedQuestion = e.target.dataset.message || e.target.textContent;
        if (selectedQuestion === 'Other (type your question)') {
            customQuestionInput.style.display = 'block';
            questionList.style.display = 'none';
        } else {
            const whatsappUrl = `https://wa.me/+263783298690?text=${encodeURIComponent(selectedQuestion)}`;
            whatsappLink.href = whatsappUrl;
            questionList.style.display = 'none';
            window.open(whatsappUrl, '_blank');
        }
    });
});

customQuestionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const customQuestion = customQuestionInput.value;
        const whatsappUrl = `https://wa.me/+263783298690?text=${encodeURIComponent(customQuestion)}`;
        whatsappLink.href = whatsappUrl;
        questionList.style.display = 'none';
        window.open(whatsappUrl, '_blank');
        customQuestionInput.style.display = 'none';
        customQuestionInput.value = '';
    }
});