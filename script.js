
const cartItems = document.querySelectorAll('.cart-item');
const deleteBtns = document.querySelectorAll('.delete-btn');
const likeBtns = document.querySelectorAll('.like-btn');
const minusBtns = document.querySelectorAll('.minus-btn');
const plusBtns = document.querySelectorAll('.plus-btn');
const quantityInputs = document.querySelectorAll('.quantity-controls input');
const cartTotal = document.querySelector('.cart-total p');


let totalPrice = 0;

deleteBtns.forEach((deleteBtn, index) => {
  deleteBtn.addEventListener('click', () => {
    cartItems[index].remove();
    updateTotalPrice();
  });
});

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('active');
  });
});

minusBtns.forEach((minusBtn, index) => {
  minusBtn.addEventListener('click', () => {
    const input = quantityInputs[index];
    const newValue = parseInt(input.value) - 1;
    if (newValue >= 1) {
      input.value = newValue;
      updateTotalPrice();
    }
  });
});

  plusBtns.forEach((plusBtn, index) => {
    plusBtn.addEventListener('click', () => {
      const input = quantityInputs[index];
      const newValue = parseInt(input.value) + 1;
      if (newValue >= 1) {
        input.value = newValue;
        updateTotalPrice();
      }
    });
  });      