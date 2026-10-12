const productLinks = document.querySelectorAll('.product-link');
const selectionMessage = document.querySelector('#selection-message');
const productTitle = document.querySelector('#detail-title');
const productImage = document.querySelector('#detail-product-image');

const products = {
  panter: { name: 'panter zakje', image: 'assets/Panter.jpg' },
  zebra: { name: 'zebra zakje', image: 'assets/zebra.jpg' },
  blauw: { name: 'blauw zakje', image: 'assets/blauw.jpg' },
  bruin: { name: 'bruin zakje', image: 'assets/bruin.jpg' },
};

const selectedProduct = products[new URLSearchParams(window.location.search).get('item')];

if (selectedProduct && productTitle && productImage) {
  productTitle.textContent = selectedProduct.name;
  productImage.src = selectedProduct.image;
  productImage.alt = selectedProduct.name;
}

productLinks.forEach((productLink) => {
  productLink.addEventListener('click', () => {
    const productName = productLink.dataset.product;

    selectionMessage.textContent = `${productName} geselecteerd · mail ons voor bestellen`;
  });
});