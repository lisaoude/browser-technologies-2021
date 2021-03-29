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
