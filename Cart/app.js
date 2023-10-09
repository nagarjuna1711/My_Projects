let cartOpen = document.getElementById("showBtn");
let cart = document.getElementById("cart");
cartOpen.addEventListener("click",function() {
    cart.style.right = "0";
});
let cartClose = document.getElementById("removeBtn");
cartClose.addEventListener("click",function(){
    cart.style.right = "-30%";
});




// items left side

const productsSection = document.getElementById("products");

function rederProducts() {
items.forEach(product => {
    productsSection.innerHTML += `

    <div class = "pro">
    <img src = "${product.image}">
    <h3>Rs. ${product.price}</h3>
    <h4>${product.brand}</h4>
    <h2>${product.title}</h2>
    <button class = "cartBtn" onclick = "add(${product.id})">Add to cart</button>
    </div>

    `
});
}
rederProducts();
// Cart array items




function add(id)
{
    if(cartItems.some((item) => item.id == id))
    {
        changeNumberOfUnits("plus",id);
    }
    else
    {
        const item = items.find((product) => product.id == id);
        cartItems.push(item);
        updateCart();
    }
}

var row = document.getElementById("cartRows");


function updateCart()
{
    renderCartItems();
    renderTotal();

    // Save cart to local storage 
    localStorage.setItem("n",JSON.stringify(cartItems));
}


// Total

const totalEl = document.getElementById("total");
const topNumberOfItems = document.getElementById("noOfItems");

function renderTotal()
{
    let totalPrice = 0 , totalItems = 0;
    cartItems.forEach((item) => {
        totalPrice += item.noOfUnits*item.price;
        totalItems += item.noOfUnits;
    });
    totalEl.innerHTML = `Total :[${totalItems} items] <span>${totalPrice}</span> /- only`;
    topNumberOfItems.innerHTML = `${totalItems}`;
}

function renderCartItems()
{
    row.innerHTML = "";
    cartItems.forEach(cartItem => {
        row.innerHTML += `
                <tr>
                    <td><div> <img src = "${cartItem.image}" alt="${cartItem.title}"> </div></td>
                    <td><div> <p>${cartItem.title}</p> </div></td>
                    <td><div> <h4>${cartItem.price}</h4> </div></td>
                    <td><div class = "units">
                        <div class = "btn minus" onclick = "changeNumberOfUnits('minus',${cartItem.id})">-</div>
                        <div class = "number">${cartItem.noOfUnits}</div>
                        <div class = "btn plus" onclick = "changeNumberOfUnits('plus',${cartItem.id})">+</div>
                    </div></td>
                    <td><div onclick = "removeItemFromCart(${cartItem.id})"> <h1>x</h1> </div></td>
                </tr>
        `;
    })
}

// change quantity

function changeNumberOfUnits(action,id)
{
    cartItems = cartItems.map((item) => 
    {
        let oldnoOfUnits = item.noOfUnits;
        if(item.id === id)
        {

            if(action === "minus" && oldnoOfUnits>1)
            {
                    oldnoOfUnits--;
            }
            else if(action === "plus" && oldnoOfUnits<`${item.stock}`)
            {
                oldnoOfUnits++;
            }
            else{
                alert("Stock limit reached");
            }

        }
        return {
            ...item,
            noOfUnits : oldnoOfUnits,
        };
    });
    updateCart();
}

// Remov item from cart

const removeIcon = document.getElementById("removeIcon");


function removeItemFromCart(id)
{
    cartItems = cartItems.filter((item) => item.id !== id );
    updateCart();
}

let cartItems = JSON.parse(localStorage.getItem("n"));
updateCart();