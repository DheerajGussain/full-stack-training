const products = [
    {
        id:1,
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
        id:2,
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
        id:3,
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
        id:4,
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
        id:5,
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
        id:6,
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
        id:7,
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

const productCard1 = products.map((product) => {
    
    return`<div class="main-container">
    <div class="container">
        <div class="image">
            <img src="${product.image.src}" alt="${product.image.alt}" />
        </div>
        <p>${product.name}</p>
        <span>${product.deliveredBy}</span>
        <h3>${product.price.currency} ${product.price.value}/piece</h3>
        <div class="add-button">
            <button onclick="removeFromCart('${product.id}')">-</button>
            <button onclick="addToCart('${product.id}')">+</button>
        </div>
    </div>
</div>`
}).join('')


var productItems = []
function addToCart(prodId){
     products.map(item => {
        if(item.id == prodId){
            productItems.push(item)
        }
        return;
    }); 
document.getElementById('cart-count').innerHTML=productItems.length;
};

function removeFromCart(prodId){
  productItems.map(item => {
      if(item.id == prodId){
        productItems.pop(item)
      }
      return;
  });
document.getElementById('cart-count').innerHTML =productItems.length;
};

document.getElementById('product-list').innerHTML = productCard1;
