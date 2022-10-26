// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');
  console.log(product);

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerText = +price.innerText * +quantity.value;

  return +price.innerText * +quantity.value;

}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const products = document.getElementsByClassName ('porduct');
  let total = 0;

  for (let i =0; i < product.length; i++){
    total = updateSubtotal(product[i]);
  }

  // ITERATION 3

  const totalValue = document.querySelector(`#total-value span`);
  totalValue.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const btnpai = event.currentTarget.parentNode // div do botão
  const produtoRemove = btnpai.parentNode // div do produto 
  const linhaDoProduto = produtoRemove.parentNode //

  linhaDoProduto.removeChild(produtoRemove);
  calculateAll(); 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const grupoBotoes = document.querySelectorAll(`.btn-remove`);
  console.log(grupoBotoes);
  
  grupoBotoes.forEach((botao)=>{
    botao.addEventListener("click",removeProduct))
  })
  