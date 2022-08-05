const typedKey = document.querySelector(".typedKey");

function typed(e) {
  typedKey.textContent = "typed : " + e.target.value;
}
