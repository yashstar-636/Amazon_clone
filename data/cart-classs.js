class Cart{
    cartItems;
    #localstoragekey;

    constructor(localstoragekey){
        this.#localstoragekey = localstoragekey;
        this.#loadFromStorage;
    }

    #loadFromStorage(){ 
        this.cartItems=JSON.parse(localStorage.getItem(this.#localstoragekey));
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
}

saveToStorage(){
    localStorage.setItem(this.#localstoragekey, JSON.stringify(this.cartItems));
}

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
}

removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    
    this.cartItems = newCart;
    this.saveToStorage();
   }

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
}


    
    const cart =new Cart('cart-oop');
    const businesscart =new Cart('cart-business');
    
    
    console.log(cart);
    console.log(businesscart);
    