document.querySelectorAll('.products-card__counter-minus').forEach((button) => {
  button.addEventListener('click', onMinusButtonClick);
});

document.querySelectorAll('.products-card__counter-plus').forEach((button) => {
    button.addEventListener('click', onPlusButtonClick);
});
  
function onPlusButtonClick(evt) {
  const input = evt.target.closest('div').querySelector('.products-card__counter-input');
  input.value = Number(input.value) + 1;
}

function onMinusButtonClick(evt) {
  const input = evt.target.closest('div').querySelector('.products-card__counter-input');
  if (input.value > 1) {
    input.value = Number(input.value) - 1;
  }
}
