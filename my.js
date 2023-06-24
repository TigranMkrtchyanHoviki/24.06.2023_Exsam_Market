const minuses = document.querySelectorAll(".fa-minus");
pluses = document.querySelectorAll(".fa-plus")
QuantityProduct = document.querySelectorAll(".quantity_product")
totalQuantity = document.querySelector(".total_quantity")

let counter = 0

pluses.forEach((element, index) => {
    
    element.onclick = function () {

        counter++
       console.log(+QuantityProduct[index].innerHTML++)
        totalQuantity.innerHTML = counter
    }
      
})

minuses.forEach((element, index) => {
    
    element.onclick = function () {
        if(QuantityProduct[index].innerHTML !== "0"){
            +QuantityProduct[index].innerHTML--
            counter--
            totalQuantity.innerHTML = counter
        }
        
    }

})






    