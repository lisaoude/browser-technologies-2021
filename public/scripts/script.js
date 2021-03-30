// scroll to top of the page
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

// fill/keep values in input fields (if they are in localStorage)
// listen for button clicks
window.onload = () => {

  // show localStorage in input fields
  populateValues();

  // select all 'buttons' 
  const buttons = document.querySelectorAll('a');

  // for each button, listen to on click event
  // and execute function
  buttons.forEach(button => {
    button.onclick = onButtonClick;
  })
};


// function to set items in to localStorage (with button click above)
const onButtonClick = (event) => {

  // select the clicked button
  const button = event.currentTarget;

  // select the section in which that button is located
  const section = button.parentElement;

  // select all input fields inside that section
  const inputs = section.querySelectorAll('input');

  inputs.forEach(input => {

    // if there's a value, then put it in localStorage
    if (input.name)
      localStorage.setItem(input.name, input.value);
  })
};


// fill input fiels with values (if they are in localStorage)
const populateValues = () => {

  // select all input fields on the page
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {

    // get the localStorage values
    const item = localStorage.getItem(input.name)

    // if there's an item, put it in the input field 
    if (item) input.value = item;
  })
};


// form validation
// one for text, one for number
// because i don't want to select my buttons with input type=button

// form validation text
const inputText = document.querySelectorAll('input[type="text"]')

inputText.forEach(input => {

  // listen for blur event (leave input field)
  input.addEventListener('blur', (event) => {

    // if empty, add error class
    if (input.value === '' || input.value == null) {
      input.classList.add('error')

      // if not empty, remove error class & add valid class
    } else {
      input.classList.remove('error')
      input.classList.add('valid')
    }
  })
})

// for validation number
const inputNumber = document.querySelectorAll('input[type="number"]')

inputNumber.forEach(input => {

  // listen for blur event (leave input field)
  input.addEventListener('blur', (event) => {

    // if empty, add error class
    if (input.value === '' || input.value == null) {
      input.classList.add('error')

      // if not empty, remove error class & add valid class
    } else {
      input.classList.remove('error')
      input.classList.add('valid')
    }
  })
})
