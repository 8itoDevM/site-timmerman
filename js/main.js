var cars = [
    {
      name: "Mustang",
      brand: "Ford",
      price: 234000,
      image: "./img/img-mob1.png",
      quality: "Used"
    },
    {
      name: "Space Odissey",
      brand: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png",
      quality: "Used"
    },
  ];


function slideHandler(){
    var radio = document.querySelector('.manual-btn');
    var cont = 1;

    document.getElementById('radio1').checked = true

    setInterval(() => {
        proximaImg();
    }, 3000);

    function proximaImg(){
        cont++;

        if(cont > 3){
            cont = 1;
        }

        document.getElementById('radio'+cont).checked = true;
    }

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => nav.classList.toggle("active"));

    function toggleNav() {
    document.body.classList.toggle("nav-open");
}
}

function populateProducts(productsList){
    //let productSection = document.querySelector(".products-area");
    //productSection.textContent = "";
    // run a loop through the products and create an HTML element ("product-item") for each of them
    productsList.forEach(function(cars, index){
        console.log(cars.name);
    });
}

function productsHandler(){
    populateProducts(cars);
}

// function footerHandler(){
//     let currentYear = new Date().getFullYear();
//     document.querySelector("footer").textContent = `${currentYear} - All rights reserved`
// }

// handlers
slideHandler();
productsHandler();
//footerHandler();
