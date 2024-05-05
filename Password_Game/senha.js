let secretNumber = generateSecretNumber(); // Gerar o número secreto aleatoriamente
let maxAttempts = 6; // Número máximo de tentativas por número secreto
let attemptsLeft = maxAttempts; // Inicializa o número de tentativas restantes
let attemptsMade = 0; // Inicializa o número de tentativas feitas

document.addEventListener('DOMContentLoaded', (event) => {
  let inputs = document.querySelectorAll('.input-field');
  inputs.forEach(input => {
    input.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        checkGuess();
      }
    });
  });
});

function generateSecretNumber() {
  let numbers = [];
  while (numbers.length < 4) {
    let randomDigit = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomDigit)) {
      numbers.push(randomDigit);
    }
  }
  return numbers.join('');
}

function checkGuess() {
  let inputs = document.querySelectorAll('.input-field');
  let guess = Array.from(inputs).map(input => input.value).join('');
  let bulls = 0;
  let cows = 0;
  let result = '';

  // Lógica para verificar touros e vacas
  inputs.forEach((input, i) => {
    if (guess[i] === secretNumber[i]) {
      bulls++;
      input.classList.add('green');
    } else if (secretNumber.includes(guess[i])) {
      cows++;
      input.classList.add('yellow');
    } else {
      input.classList.add('red');
    }
  });

  result = bulls + ' touro(s) e ' + cows + ' vaca(s).';
  document.getElementById('result').innerText = result;

  attemptsLeft--; // Decrementa o número de tentativas restantes
  attemptsMade++; // Incrementa o número de tentativas feitas

  // Resetar as cores após cada tentativa
  setTimeout(function() {
    inputs.forEach(input => input.classList.remove('green', 'yellow', 'red'));
  }, 2000);

  // Verifica se o usuário acertou ou excedeu o número máximo de tentativas
  if (bulls === 4 || attemptsMade >= maxAttempts) {

    if (bulls === 4) {
      alert('Parabéns! Você acertou o número secreto!');
    } else {
      alert('Você excedeu o número máximo de tentativas. O número secreto era: ' + secretNumber);
    }
    // Gera um novo número secreto
    secretNumber = generateSecretNumber();
    // Reinicia o número de tentativas e tentativas feitas
    attemptsLeft = maxAttempts;
    attemptsMade = 0;
    // Limpa os inputs e remove as classes de estilo
    inputs.forEach(input => {
      input.value = '';
      input.classList.remove('green', 'yellow', 'red');
    });
     // Atualiza a mensagem de resultado
     document.getElementById('result').innerText = '';
  }
  
  // Atualiza a mensagem de tentativas restantes
  document.getElementById('attempts-left').innerText = 'Tentativas restantes: ' + attemptsLeft;
}

document.addEventListener('DOMContentLoaded', (event) => {
  let inputs = document.querySelectorAll('.input-field');

  // Adicionando eventos de teclado para navegação entre os campos
  inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        inputs[index + 1]?.focus(); // Se existir próximo input, foca nele
      } else if (event.key === 'ArrowLeft') {
        inputs[index - 1]?.focus(); // Se existir input anterior, foca nele
      }
    });
  });
});