import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "./data/cart-classs.js"
import { loadProducts,loadProductFetch } from "./data/products.js";
import { loadCart } from "./data/cart.js";
//import './data/backend-practice.js';

async function loadPage(){
    try{
        //throw 'error1';
        await loadProductFetch();
        await new Promise((resolve, reject)=>{
             
            loadCart(()=>{
               // reject('error3');
                resolve();
            });
        });

    }catch(error){
        console.log('yashuuu');
    }

renderOrderSummary();
    renderPaymentSummary();

}
loadPage();
/*
Promise.all([
    loadProductFetch(),
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
*/
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