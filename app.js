const input = document.getElementById('inputId');
const removeBtn = document.getElementById('removeBtn');
const ul = document.getElementById('ulId');
// const getInput =


const buttonClick = () =>{
    const inputText = input.value;
    const li = document.createElement('li');
    li.innerText = inputText;
    ul.appendChild(li);
    localStorage.getItem('inputText');
    addTextToCart(inputText);
}
const getCart = ()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj={}
    }
    return cartObj;
}

const addTextToCart = inputText=>{
    const cart = getCart();
    if(cart[inputText]){
        cart[inputText] = cart[inputText]+1;
    }
    else{
        cart[inputText] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
