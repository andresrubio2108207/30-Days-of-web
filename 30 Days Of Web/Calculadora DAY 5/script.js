const display = document.getElementById('display');
let currentInput = '';
let lastResult = null;

function updateDisplay(value) {
  display.textContent = value;
}

function handleButtonClick(e) {
  const btn = e.target;
  const btnId = btn.id;
  const btnValue = btn.textContent;


  if (lastResult !== null && /[0-9.+\-X\/]/.test(btnValue)) {
    currentInput = '';
    lastResult = null;
  }

  if (btnId === 'same') {

    if (currentInput === '') return;

    const expression = currentInput.replace(/X/g, '*');

    try {
    
      const result = eval(expression);
      updateDisplay(result);
      currentInput = result.toString();
      lastResult = result;
    } catch {
      updateDisplay('Error');
      currentInput = '';
      lastResult = null;
    }
  } else if (btnId === 'point') {
    
    if (!currentInput.endsWith('.')) {
      currentInput += btnValue;
      updateDisplay(currentInput);
    }
  } else {
  
    currentInput += btnValue;
    updateDisplay(currentInput);
  }
}


const buttons = document.querySelectorAll('.botones button');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));
