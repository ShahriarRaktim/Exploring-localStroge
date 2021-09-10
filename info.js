document.getElementById('input-btn').addEventListener('click', function(){
    const inputName = document.getElementById('input-name');
    const name = inputName.value;
    if(!name){
        return;
    }
    // display li 
    displayName(name);

    // add to cart 
    addProductToCart(name);

    inputName.value='';
})
const displayName =name=>{
    const ul = document.getElementById('ul-list');
    const li = document.createElement('li');
    li.innerText=name;
    ul.appendChild(li);
}
const getCart =()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj;
}
const addProductToCart = name=>{
    const cart = getCart();
    if(cart[name]){
        cart[name]=cart[name]+1;
    }
    else{
        cart[name]=1;
    }
   
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const displayCartName = ()=>{
    const cart = getCart();
    for(const name in cart){
        displayName(name);
    }
}
const placeOrder =()=>{
    document.getElementById('ul-list').textContent ='';
    localStorage.removeItem('cart');
}
displayCartName();