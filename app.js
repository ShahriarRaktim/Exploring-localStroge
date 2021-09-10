const input = document.getElementById('inputId');
const removeTem = document.getElementById('temRemove');
const removePer = document.getElementById('parRemove');
const ul = document.getElementById('ulId');


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


const cartToDisplay=()=>{
    const cart = getCart();
    for(const name in cart){
    setDisplay(name);
}

}

cartToDisplay();

