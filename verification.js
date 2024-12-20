const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;

  // Basic validation (you can expand this)
  if (!name) {
    alert('Введите верные данные.');
    return;
  }
  if (!/^[a-zA-Z\s]+$/ || !/^[а-яА-Я\s]+$/.test(name)) {
    alert('Введены некорректные данные.');
    return;
}

  
  console.log('Form data:', { name });
  // You would replace this with your actual POST request using fetch or XMLHttpRequest

  //Optionally, reset the form
  form.reset();
});
