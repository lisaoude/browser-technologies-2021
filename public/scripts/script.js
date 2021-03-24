// 'login' variables
const naamKey = document.querySelector("#naamKey");
const naamValue = document.querySelector("#naam");
const studentnummerKey = document.querySelector("#studentnummerKey");
const studentnummerValue = document.querySelector("#studentnummer");
const loginButton = document.querySelector("#loginButton");

// 'login' localStorage
loginButton.onclick = () => {

  // label text
  const key = naamKey.textContent;

  // input value
  const value = naamValue.value;

  // set item to localStorage
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

//
for (let i = 0; 1 < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  naamValue.innerHTML += `${key}: ${value}`;
}