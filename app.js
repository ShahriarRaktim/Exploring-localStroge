const input = document.getElementById('inputId');
const removeTem = document.getElementById('temRemove');
const removePer = document.getElementById('parRemove');
const ul = document.getElementById('ulId');

// set display 
const setDisplay = text => {
    const li = document.createElement('li');
    if(li.innerText === text){
        console.log('ok')
        return;
    }
    li.innerText = text;
    ul.appendChild(li);
}


const buttonClick = () => {
    const inputText = input.value;
    if(!inputText){
        alert('please type something')
        return;
    }
    setDisplay(inputText)
    addTextToCart(inputText);
    input.value = '';
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {}
    }
    return cartObj;
}

// set item to cart 
const addTextToCart = inputText => {
    const cart = getCart();
    if (cart[inputText]) {
        cart[inputText] = cart[inputText] + 1;
    }
    else {
        cart[inputText] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// get item from Cart
const cartToDisplay=()=>{
    const cart = getCart();
    for(const name in cart){
    setDisplay(name);
}

}
// clear everything 
removeTem.addEventListener('click', ()=>{
    ul.textContent = '';
})
removePer.addEventListener('click', ()=>{
    ul.textContent = '';
    localStorage.removeItem('cart');
})
cartToDisplay();

