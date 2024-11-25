export const cart = [];

export function addtoCart(productId){let matchingItem;
    cart.forEach((cartIteem)=>{
       if(productId === cartIteem.productId){
           matchingItem = cartIteem;
       }
    });
       if(matchingItem){
           matchingItem.quantity += 1;
       }
       else{
           cart.push({
               product:productId,
               quantity : 1 
            });
       }}