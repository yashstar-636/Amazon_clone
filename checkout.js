import {cart, removeFromCart} from './data/cart.js';
import {products} from './data/products.js';
import {deleveryOptions} from './deleveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
 let matchingProduct='';
 products.forEach((product) =>{
    if (product.id === productId){
        matchingProduct = product;
    }
 });

 const deleveryOptionId = cartItem.deleveryOptionId;

 let deleveryOption;

 deleveryOptions.forEach((Option) => {
    if(Option.id===deleveryOptionId){
        deleveryOption=Option;
    }
 });

 const today = dayjs();
 const delevryDate = today.add(deleveryOption.deleveryDays, 'day');
 const dateString = delevryDate.format(
     'dddd, MMMM D'
 );

cartSummaryHTML += `
<div class="cart-item-container js-cart-item-container-${matchingProduct.id} ">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    ${(matchingProduct.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                ${deleveryOptionHTML(matchingProduct,cartItem)}
        </div>
    </div>
</div>`;
function deleveryOptionHTML(matchingProduct,cartItem){
    let html ='';
deleveryOptions.forEach((deleveryOption)=>{
    const today = dayjs();
    const delevryDate = today.add(deleveryOption.deleveryDays, 'day');
    const dateString = delevryDate.format(
        'dddd, MMMM D'
    );
    const priceString = deleveryOption.priceCents === 0
    ? 'Free'
    :`$${deleveryOption.priceCents/100} -`;
    const isChecked =deleveryOption.id === cartItem.deleveryOptionId;
html +=
    `
    <div class="delivery-option">
        <input type="radio" ${isChecked ? 'checked' : ''}
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
        <div>
        <div class="delivery-option-date">
            ${dateString}
        </div>
        <div class="delivery-option-price">
            ${priceString} Shipping
        </div>
        </div>
    </div>`
});
return html
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
    });
    
document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
        const productId = link.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
        
    });
}) ;