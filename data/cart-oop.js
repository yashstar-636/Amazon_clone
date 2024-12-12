function Cart(localstoragekey){
const cart = {
    cartItems : undefined,

    loadFromStorage(){ 
        this.cartItems=JSON.parse(localStorage.getItem(localstoragekey));
if(!this.cartItems){
this.cartItems=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity : 2,
    deleveryOptionId:'1'
},
{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity : 1,
    deleveryOptionId:'2'

}];
}
},
saveToStorage(){
    localStorage.setItem(localstoragekey, JSON.stringify(this.cartItems));
},
addtoCart(productId){
    let matchingItem;
    this.cartItems.forEach((cartItem)=>{
       if(productId === cartItem.productId){
           matchingItem = cartItem;
       }
    });
       if(matchingItem){
           matchingItem.quantity += 1;
       }
       else{
           this.cartItems.push({
               productId:productId,
               quantity : 1,
               deleveryOptionId:'1' 
            });
       }
    this.saveToStorage();
},

removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    
    this.cartItems = newCart;
    this.saveToStorage();
   },

   updateDeleveryOption(productId,deleveryOptionId){
    let matchingItem;
    this.cartItems.forEach((cartItem)=>{
       if(productId === cartItem.productId){
           matchingItem = cartItem;
       }
       });
       matchingItem.deleveryOptionId=deleveryOptionId;
       this.saveToStorage();

}
}; 



return cart;
}

const cart = Cart('cart-oop');
const businesscart = Cart('cart-business');

cart.loadFromStorage();
cart.removeFromCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e')
businesscart.loadFromStorage();
console.log(cart);
console.log(businesscart);
