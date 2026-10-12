const productLinks = document.querySelectorAll('.product-link');
const selectionMessage = document.querySelector('#selection-message');

productLinks.forEach((productLink) => {
  productLink.addEventListener('click', () => {
    const productName = productLink.dataset.product;

    selectionMessage.textContent = `${productName} geselecteerd · mail ons voor bestellen`;
  });
});