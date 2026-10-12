// FAQ Open / Close
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Contact Form Working
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('✅ Message Sent! Hum aap se 5 minute me WhatsApp par rabta karenge.');
  this.reset();
});