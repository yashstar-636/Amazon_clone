import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "./data/cart-classs.js"
import { loadProducts } from "./data/products.js";
import { loadCart } from "./data/cart.js";
//import './data/backend-practice.js';

Promise.all([

    new Promise((resolve)=>{
        loadProducts(()=>{
            
            resolve('value1');
        });
    }),
    new Promise((resolve)=>{
        loadCart(()=>{
            
            resolve();
        });
    })
]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});

/*new Promise((resolve)=>{
    loadCart(()=>{
        
        resolve();
    });
}).then(()=>{
renderOrderSummary();
renderPaymentSummary();
});

loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/ 