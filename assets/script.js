let quantity = 1
let quantityDisplay = document.getElementById('qty')
let totalPrice = document.getElementById('ttl')

let addOne = document.getElementById("quantity-up")
addOne.addEventListener('click', function(){
    quantity++
    quantityDisplay.textContent = quantity
    totalPrice.textContent = `$${quantity*15}.00`
    //console.log(quantity)
})

let subtractOne = document.getElementById("quantity-down")
subtractOne.addEventListener('click', function(){
    if (quantity > 0){
        quantity--
        quantityDisplay.textContent = quantity
        totalPrice.textContent = `$${quantity*15}.00`
    }
    //console.log(quantity)
})

let remove = document.getElementById('rmve')
remove.addEventListener('click',function(){
    quantity = 0
    quantityDisplay.textContent = 0
    totalPrice.textContent = `$${quantity*15}.00`
})