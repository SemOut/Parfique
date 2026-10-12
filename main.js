const productLinks = document.querySelectorAll('.product-link');
const selectionMessage = document.querySelector('#selection-message');
const productTitle = document.querySelector('#detail-title');
const productPouch = document.querySelector('#detail-pouch');

const products = {
  panter: { name: 'panter zakje', className: 'pouch-panther' },
  zebra: { name: 'zebra zakje', className: 'pouch-zebra' },
  blauw: { name: 'blauw zakje', className: 'pouch-blue' },
  bruin: { name: 'bruin zakje', className: 'pouch-brown' },
};

const selectedProduct = products[new URLSearchParams(window.location.search).get('item')];

if (selectedProduct && productTitle && productPouch) {
  productTitle.textContent = selectedProduct.name;
  productPouch.className = `pouch ${selectedProduct.className}`;
}

productLinks.forEach((productLink) => {
  productLink.addEventListener('click', () => {
    const productName = productLink.dataset.product;

    selectionMessage.textContent = `${productName} geselecteerd · mail ons voor bestellen`;
  });
});