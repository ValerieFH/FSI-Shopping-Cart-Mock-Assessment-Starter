let quantity = 1
let quantityDisplay = document.querySelector('.total-quantity')
let totalPrice = document.querySelector('.total-price')

let addOne = document.getElementById("quantity-up")
addOne.addEventListener('click', function(){
    quantity++
    quantityDisplay.textContent = `Quantity: ${quantity}`
    totalPrice.textContent = `Total Price: $${quantity*15}.00`
})

let subtractOne = document.getElementById("quantity-down")
subtractOne.addEventListener('click', function(){
    if (quantity > 0){
        quantity--
        quantityDisplay.textContent = `Quantity: ${quantity}`
        totalPrice.textContent = `Total Price: $${quantity*15}.00`
    }
})

let remove = document.querySelector('.remove')
remove.addEventListener('click',function(){
    quantity = 0
    quantityDisplay.textContent = `Quantity: ${quantity}`
    totalPrice.textContent = `Total Price: $${quantity*15}.00`
})