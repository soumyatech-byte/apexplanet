document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('formMessage');

  let errors = [];

  if (!name.value.trim()) {
    errors.push('Name is required.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    errors.push('Email is required.');
  } else if (!emailRegex.test(email.value)) {
    errors.push('Invalid email format.');
  }

  if (errors.length > 0) {
    message.textContent = errors.join(' ');
    message.style.color = 'red';
  } else {
    message.textContent = 'Form submitted successfully!';
    message.style.color = 'green';
    // Optionally clear form
    name.value = '';
    email.value = '';
  }
});
