const products = [
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
    {
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },{
        image:{
            src:'./images/iphone.jpg',
            alt:'iphone jpg'
        },
        name:'Apple iPhone 14 Pro Max 128GB 5G Deep Purple',
        deliveredBy:'Delivered by Carrefour',
        price:{
            value:4199,
            currency:'AED'
        }
    },
]


const productCard = ({
    image:{src='',alt=''} = {},
    name = '',
    deliveredBy = '',
    price: {value: price = 0, currency = 'AED'} = {}

}) => {
    const productMainContainer = document.createElement('div');
     productMainContainer.setAttribute('class', 'main-container');

    const productContainer = document.createElement('div');
    productContainer.setAttribute('class', 'container')

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image')

    const productImage = document.createElement('img');
    productImage.setAttribute('src', src);
    productImage.setAttribute('alt', alt);
    imageContainer.appendChild(productImage);
    productContainer.appendChild(imageContainer)

    const productName = document.createElement('p');
    productName.innerHTML = name;
    productContainer.appendChild(productName);

    const productDelivery = document.createElement('span');
    productDelivery.innerHTML = deliveredBy;
    productContainer.appendChild(productDelivery);

    const productPrice = document.createElement('h3');
    productPrice.innerHTML = `${currency} ${price}/piece`;
    productContainer.appendChild(productPrice);

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'add-button');

    const removeFromCart = document.createElement('button');
    removeFromCart.innerHTML = '-';
    removeFromCart.onclick = () => {
        window.alert('removed from cart');
    }
    buttonContainer.appendChild(removeFromCart);

    const addToCart = document.createElement('button');
    addToCart.innerHTML = '+';
    addToCart.onclick = () => {
        window.alert('product added to cart');
    }
    buttonContainer.appendChild(addToCart);
    productContainer.appendChild(buttonContainer)

    productMainContainer.appendChild(productContainer);
    return productMainContainer;
};

products.forEach((product) => {
    document.getElementById('product-list').appendChild(productCard(product))
})