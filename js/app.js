import productdb, { bulkcreate } from './module.js';

let db = productdb('Productdb', {
  products: `++id, name, seller, price`,
});

const userId = document.getElementById('user-id');
const productName = document.getElementById('product-name');
const seller = document.getElementById('seller');
const price = document.getElementById('price');

const createBtn = document.getElementById('btn-create');
const readBtn = document.getElementById('btn-read');
const updateBtn = document.getElementById('btn-update');
const deleteBtn = document.getElementById('btn-delete');

createBtn.onclick = (event) => {
  let flag = bulkcreate(db.products, {
    name: productName.value,
    seller: seller.value,
    price: price.value,
  });
  console.log(flag);
};
