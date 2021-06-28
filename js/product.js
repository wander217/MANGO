image_button = document.getElementsByClassName("main-product-sub-image-box");
for (let i = 0; i < image_button.length; i++) {
    image_button[i].addEventListener('click', () => {
        let active_image_list = document.getElementsByClassName("product-active");
        if (active_image_list.length > 0) {
            let active_image = active_image_list.item(0);
            active_image.classList.remove("product-active");
            let active_image_button = document.getElementById(active_image.getAttribute("aria-controls"));
            if (active_image_button !== undefined) {
                active_image_button.classList.remove("button-active")
            }
        }
        let link_image = document.getElementById(image_button[i].getAttribute("aria-labelledby"));
        if (link_image !== undefined) {
            link_image.classList.add("product-active");
        }
        image_button[i].classList.add("button-active");
    })
}

let plus = document.getElementById("plus");
let number = document.getElementById("product-number");
let sub = document.getElementById("sub");
plus.addEventListener('click', () => {
    let value = parseInt(number.getAttribute("value"));
    number.setAttribute("value", value + 1);
})
sub.addEventListener('click', () => {
    let value = parseInt(number.getAttribute("value"));
    if (value !== 1) {
        number.setAttribute("value", value - 1)
    }
});