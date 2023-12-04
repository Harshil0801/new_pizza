let cartData = JSON.parse(sessionStorage.getItem('cartData'))
  function cartList(){
console.log(cartData);
let carthtml = "";
cartData.forEach((item,index) => {
    carthtml += '<div class="col-lg-3 col-md-4 col-sm-6 mb-4">';
    carthtml += ' <div class="card product-card flex-center">';
    carthtml += `<img src="${item.image}" class="card-img-top h-50 w-50" alt="pizza-img">`;
    carthtml += ' <div class="card-body flex-center-col">';
    carthtml += `<h5 class="card-title text-center product-price ">$ ${item.price}</h5>`;
    carthtml += `<a href="Shipping-page.html" class="text-center product-name">${item.title}</a>`;
    carthtml += `<p class="card-text text-center product-dec">${item.description}</p>`;
    carthtml += ' <div class=" btn-group-custom ">';
    carthtml += '<ul class="nav nav-pills nav-primary" id="pills-tab" role="tablist">';
    carthtml += ' <li class="nav-item">';
    carthtml += '<a class="f-w-600 nav-link" href="#" onclick="remove('+index+')">remove to Cart</a>';
    carthtml += '</li>';
    carthtml += '</ul>';
    carthtml += ' </div>';
    carthtml += '  </div>';
    carthtml += ' </div>';  
    carthtml += '</div>';
    });

    document.getElementById("cartList").innerHTML = carthtml;
  }
  // cart.js
let cartArray = JSON.parse(sessionStorage.getItem('cartData')) || [];

function addToCartFunction(title, size, quantity, price) {
  const cartItem = {
    title: title,
    size: size,
    quantity: quantity,
    price: price,
  };

  cartArray.push(cartItem);
  console.log(`Item added to cart: ${cartItem.title}, Size: ${cartItem.size}, Quantity: ${cartItem.quantity}, Price: ${cartItem.price}`);
  console.log('Updated Cart:', cartArray);

  // Store cart data
  sessionStorage.setItem('cartData', JSON.stringify(cartArray));

  // Update the cart view
  cartList();
}

