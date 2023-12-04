const data = [
  {
    image: "../assets/images/pizza-page/1.png",
    price: {
        small: 13.99,
        medium: 15.99,
        large: 18.99,
        'extra-large': 21.99,
    },
    title: "Cherry Tomatoes Green Basil Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/2.png",
    price: {
        small: 12.49,
        medium: 14.49,
        large: 17.49,
        'extra-large': 20.49,
    },
    title: "Pepperoni Mushroom Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/3.png",
    price: {
        small: 12.99,
        medium: 14.99,
        large: 17.99,
        'extra-large': 20.99,
    },
    title: "Sausage Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/4.png",
    price: {
        small: 14.99,
        medium: 16.99,
        large: 19.99,
        'extra-large': 22.99,
    },
    title: "Vegetable Wood Fired Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/5.png",
    price: {
        small: 9.99,
        medium: 11.99,
        large: 14.99,
        'extra-large': 17.99,
    },
    title: "Classic Onion Capsicum",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/6.png",
    price: {
        small: 12.49,
        medium: 14.49,
        large: 17.49,
        'extra-large': 20.49,
    },
    title: "Margherita Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/7.png",
    price: {
        small: 9.99,
        medium: 11.99,
        large: 14.99,
        'extra-large': 17.99,
    },
    title: "Mustard Pizza",
    link: "cart.html"
},
{
    image: "../assets/images/pizza-page/8.png",
    price: {
        small: 14.99,
        medium: 16.99,
        large: 19.99,
        'extra-large': 22.99,
    },
    title: "Minced Meat Pizza",
    link: "cart.html"
}

  ];

  function dataList() {
    let makeHtml = "";
  
    data.forEach((item, index) => {
      makeHtml += '<div class="col-lg-3 col-md-4 col-sm-6 mb-4">';
      makeHtml += ' <div class="card product-card flex-center">';
      makeHtml += `<img src="${item.image}" class="card-img-top h-50 w-50" alt="pizza-img">`;
      makeHtml += ' <div class="card-body flex-center-col">';
      makeHtml += `<h5 class="card-title text-center product-price " id="price-${index}">$ ${item.price.small}</h5>`;
      makeHtml += `<a href="Shipping-page.html" class="text-center product-name">${item.title}</a>`;
  
      // Add input box to the right of the quantity label with a class
      makeHtml += `<div class="input-group mb-3">
                    <label class="input-group-text quantity-label" for="quantity-${index}">Quantity</label>
                    <input type="number" id="quantity-${index}" class="form-control quantity-input" value="1" min="1" max="5">
                  </div>`;
  
      makeHtml += '<label for="size">Size: </label>';
      makeHtml += ` <select name="size" id="size-${index}" onchange="updatePrice(${index}, this.value)">`;
      makeHtml += `<option value="small">Small</option>`;
      makeHtml += ` <option value="medium">Medium</option>`;
      makeHtml += ` <option value="large">Large</option>`;
      makeHtml += ` <option value="extra-large">Extra large</option>`;
      makeHtml += `</select>`;
      makeHtml += ' <div class=" btn-group-custom ">';
      makeHtml += '<ul class="nav nav-pills nav-primary" id="pills-tab" role="tablist">';
      makeHtml += ' <li class="nav-item">';
      makeHtml += `<a class="f-w-600 nav-link" href="cart.html" onclick="addToCart(${index})">Add to Cart</a>`;
      makeHtml += '</li>';
      makeHtml += '</ul>';
      makeHtml += ' </div>';
      makeHtml += '  </div>';
      makeHtml += ' </div>';
      makeHtml += '</div>';
    });
  
    document.getElementById("cards").innerHTML = makeHtml;
  }  
function updatePrice(index, size) {
  const selectedPizza = data[index];
  const selectedPrice = selectedPizza.price[size];

  // Update the displayed price
  document.getElementById(`price-${index}`).innerText = `$ ${selectedPrice}`;
}
function addToCart(index) {
  const quantity = document.getElementById(`quantity-${index}`).value;
  const selectedPizza = data[index];
  const selectedSize = document.getElementById(`size-${index}`).value;

  // Retrieve the price based on the selected size
  const selectedPrice = selectedPizza.price[selectedSize];

  const cartItem = {
    title: selectedPizza.title,
    size: selectedSize,
    quantity: parseInt(quantity),
    price: selectedPrice,
  };

  cartArray.push(cartItem);
  console.log(`Item added to cart: ${cartItem.title}, Size: ${cartItem.size}, Quantity: ${cartItem.quantity}, Price: ${cartItem.price}`);
  console.log('Updated Cart:', cartArray);
  sessionStorage.setItem('cartData', JSON.stringify(cartArray));
}

dataList();

let cartArray = [];

function addToCart(index) {
  cartArray.push(data[index]);
  console.log(`Item added to cart: ${data[index].title}, Size: ${document.getElementById(`size-${index}`).value}`);
  console.log('Updated Cart:', cartArray);
  sessionStorage.setItem('cartData', JSON.stringify(cartArray));
}
