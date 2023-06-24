const closes = document.querySelectorAll(".icon_X");
products = document.querySelectorAll(".content_product")
minuses = document.querySelectorAll(".fa-minus")
pluses = document.querySelectorAll(".fa-plus")
totalQuantity = document.querySelectorAll(".quantity_product")
prices = document.querySelectorAll(".price")
CommonQuantity = document.querySelector(".total_quantity")
totalPri = document.querySelector(".total_price")

let counter = 0
let totalPrice = 0

closes.forEach((elem, index) => {
    elem.onclick = function () {
        console.log("eee")
        products[index].parentElement.remove()
    }
})

pluses.forEach((elem, index) => {

    let perPrice = +prices[index].innerHTML

    console.log(perPrice)

    elem.onclick = function () {
        +totalQuantity[index].innerHTML++
        counter++
        CommonQuantity.innerHTML = counter
        if(totalQuantity[index].innerHTML !== "1") {
            prices[index].innerHTML = +prices[index].innerHTML + perPrice
        }

        // prices.forEach((elem, index) => {
  
        //     totalPrice += +elem.innerHTML
        //     totalPri.innerHTML = totalPrice
        // })

        // totalPrice = 0
    }
})

minuses.forEach((elem, index) => {

    let perPrice = +prices[index].innerHTML

   
    elem.onclick = function () {

        if(totalQuantity[index].innerHTML !== "0") {
             +totalQuantity[index].innerHTML--
             counter--
             CommonQuantity.innerHTML = counter
             console.log(+prices[index].innerHTML)
             if(totalQuantity[index].innerHTML !== "1" ) {
             prices[index].innerHTML = +prices[index].innerHTML - perPrice
             }
        }

    }
})



