window.onload = () => {
  populateValues();

  const buttons = document.querySelectorAll('a');

  buttons.forEach(button => {
    button.onclick = onButtonClick;
  })
};

const onButtonClick = (e) => {

  // de geklikte button
  const button = e.currentTarget;

  // de section waar ie in zit
  const section = button.parentElement;

  // alle inputs in de section
  const inputs = section.querySelectorAll('input');

  inputs.forEach(input => {

    // als er iets in staat, dan doen
    if (input.name)
      localStorage.setItem(input.name, input.value);
  })
};

const populateValues = () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    const item = localStorage.getItem(input.name)

    if (item) input.value = item;
  })
};
