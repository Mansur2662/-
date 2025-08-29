// Обработка отправки формы
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formContent = document.querySelector('.form-content');
    const successMessage = document.querySelector('.success-message');
    
    // Плавное исчезновение формы
    formContent.style.opacity = '0';
    
    setTimeout(() => {
      formContent.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Плавное появление сообщения
      setTimeout(() => {
        successMessage.style.opacity = '1';
      }, 50);
    }, 500);
  });
  
  // Обработка кнопки "Связаться с поддержкой"
  document.getElementById('supportBtn').addEventListener('click', function() {
    const successMessage = document.querySelector('.success-message');
    const contactMethods = document.querySelector('.contact-methods');
    
    // Плавное исчезновение сообщения
    successMessage.style.opacity = '0';
    
    setTimeout(() => {
      successMessage.style.display = 'none';
      contactMethods.style.display = 'block';
      
      // Плавное появление вариантов связи
      setTimeout(() => {
        contactMethods.style.opacity = '1';
      }, 50);
    }, 500);
  });
  
 
  
    
  






































  