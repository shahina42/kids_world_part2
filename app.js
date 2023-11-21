const addCartItems = document.querySelectorAll(".button");
const cartValue = document.getElementById("cart-value");
const cartButton = document.getElementById('cart');
let totalPrice = 0;
let cartItems = [];

addCartItems.forEach((button) => {
    button.addEventListener('click', (event) => {
       
        cartValue.textContent = ++cartValue.textContent;

        const productName = event.currentTarget.parentNode.previousElementSibling.querySelector('h3').textContent;
        const productPrice = parseFloat(event.currentTarget.parentNode.querySelector('p').textContent.slice(1));

        const alreadyInCart = cartItems.find(item => item.productName === productName);

        if (alreadyInCart) {
           
            alreadyInCart.quantity++;
        } else {
           
            cartItems.push({
                productName: productName,
                quantity: 1,
                price: productPrice
            });
        }

        
        totalPrice += productPrice;
    });
});

cartButton.addEventListener('click', () => {
 
    cartItems.forEach((item) => {
        console.log(item);
    });


    console.log(`The total payable amount is $${totalPrice.toFixed(2)}`)
});

