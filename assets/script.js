// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Zachary Healey" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// update quantity
function updateQuantity(displayQuantity) {
    let gb = document.querySelector('#qty-gb')
    gb.textContent = displayQuantity 
}

// Start quantity at 1 since product is in cart
let quantity = 1

// Buttons
const gbDown = document.querySelector('#minus-gb')
const gbUp = document.querySelector('#add-gb')

// add event listener to decrease quantity
gbDown.addEventListener('click', function(e){
    if (gb > 0) {
        gb--
    }
    updateQuantity(`${gb}`)
    updatetotalQuantity()
})

// add event listener to increase quantity
gbUp.addEventListener('click', function(){
    gb++
    updateQuantity(`${gb}`)
    updatetotalQuantity()
})


//
// update quantity
function updateccQuantity(displayQuantity) {
    let cc = document.querySelector('#qty-cc')
    cc.textContent = displayQuantity 
}

// Buttons
const ccDown = document.querySelector('#minus-cc')
const ccUp = document.querySelector('#add-cc')

// add event listener to decrease quantity
ccDown.addEventListener('click', function(e){
    if (cc > 0) {
        cc--
    }
    updateccQuantity(`${cc}`)
    updatetotalQuantity()
})

// add event listener to increase quantity
ccUp.addEventListener('click', function(){
    cc++
    updateccQuantity(`${cc}`)
    updatetotalQuantity()
})

//
// update quantity
function updatesugarQuantity(displayQuantity){
    let sugar = document.querySelector('#qty-sugar')
    sugar.textContent = displayQuantity 
}

// Buttons
const sugarDown = document.querySelector('#minus-sugar')
const sugarUp = document.querySelector('#add-sugar')

// add event listener to decrease quantity
sugarDown.addEventListener('click', function(e){
    if (sugar > 0) {
        sugar--
    }
    updatesugarQuantity(`${sugar}`)
    updatetotalQuantity()
})

// add event listener to increase quantity
sugarUp.addEventListener('click', function(){
    sugar++
    updatesugarQuantity(`${sugar}`)
    updatetotalQuantity()
})


function updatetotalQuantity(displayQuantity){
    total = document.querySelector('#qty-total')
    total.textContent = sugar + gb + cc
}


// TODO: Hook up event listeners for the rest of the buttons