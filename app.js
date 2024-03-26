const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();
});

 function checkInputs(){
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  const validUsers = [
      {email: 'nurcahyobaguseka@gmail.com', password: '233307067'},
      {email: 'hayuningersa@gmail.com', password: '233307073'},
      // Tambahkan pengguna lain yang valid di sini
  ];

  let isValid = false;

  for(let i = 0; i < validUsers.length; i++) {
      if(emailValue === validUsers[i].email && passwordValue === validUsers[i].password) {
          alert('Login successful! Click OK to continue.');
          isValid = true;
          break;
      }
  }

  if(!isValid) {
      setErrorFor(email, 'Incorrect email or password');
  }

  if(isValid) {
      // Setelah klik OK, arahkan pengguna ke halaman order.html
      window.location.href = 'order.html';
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}