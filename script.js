const whatsappLink = document.getElementById('whatsapp-link');
const questionList = document.getElementById('question-list');
const customQuestionInput = document.getElementById('custom-question');
const questionItems = document.querySelectorAll('#question-list ul li');
const sliderImages = document.querySelectorAll('.slider img');
const contactForm = document.getElementById('contact-form');

// Hide images initially
sliderImages.forEach((img) => img.style.display = 'none');

let currentImageIndex = 0;

// Show first image and start slideshow after 3 seconds
setTimeout(() => {
  sliderImages[currentImageIndex].style.display = 'block';
  setInterval(() => {
    sliderImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImages[currentImageIndex].style.display = 'block';
  }, 3000);
}, 3000);

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

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const mailToLink = `mailto:marketing@doubleg.tech?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  
  window.location.href = mailToLink;
});