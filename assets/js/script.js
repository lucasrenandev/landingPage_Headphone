const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar")
const itemContainer = document.querySelectorAll(".item")
const productImage = document.querySelector("#product-1")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    menuIcon.classList.toggle("bx-x")
})

itemContainer.forEach(item => {
    item.addEventListener("click", function(event) {
        const target = event.currentTarget.id

        if(target === "item1") {
            productImage.src = "assets/images/product1.png"
        }
        else if(target === "item2") {
            productImage.src = "assets/images/product2.png"
        }
        else {
            productImage.src = "assets/images/product3.png"
        }
    })
})