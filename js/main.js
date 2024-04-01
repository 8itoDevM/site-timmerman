var cars = [
    {
      name: "Mustang",
      brand: "Ford",
      price: 234000,
      image: "./img/imagecarFerrari.png",
      quality: 0,
      status: "Destaque da Semana",
      yearFabrication: "2023/2024"
    },
    {
      name: "teste",
      brand: "Marie Anne",
      price: 35,
      image: "./img/imagecarFerrari.png",
      quality: 0,
      status: ""
    },
    {
        name: "teste",
        brand: "Marie Anne",
        price: 35,
        image: "./img/imagecarFerrari.png",
        quality: 0,
        status: ""
    },
  ];


function slideHandler(){
    var radio = document.querySelector('.manual-btn')
    var cont = 1

    document.getElementById('radio1').checked = true

    setInterval(() => {
        proximaImg()
    }, 3000)

    function proximaImg(){
        cont++

        if(cont > 3){
            cont = 1 
        }

        document.getElementById('radio'+cont).checked = true
    }
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img\\menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img\\close_white_36dp.svg";
    }
}

function populateProducts(productsList){
    let productSection = document.querySelector(".products-area");
    productSection.textContent = "";

    // run a loop through the products and create an HTML element ("product-item") for each of them
    productsList.forEach(function(car, index){
        console.log(car.name);

        let productElm = document.createElement("div");
        productElm.classList.add("product-item");

        let productImage = document.createElement("img");
        productImage.src = car.image;
        productImage.alt = "Image for " + car.title;

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        let productStatus = document.createElement("div");
        productStatus.classList.add("status-car");

        let productStatusEvents = document.createElement("h5");
        productStatusEvents.classList.add("status-events");
        productStatusEvents.textContent = car.status;

        let productNameAndBrand = document.createElement("div");
        productNameAndBrand.classList.add("car-title");

        let productName = document.createElement("h3");
        productName.classList.add("product-brand")
        productName.textContent = car.name;
        let productTitle = document.createElement("p");
        productTitle.classList.add("product-title");
        productTitle.textContent = car.brand;

        let valorItem = document.createElement("div");
        valorItem.classList.add("valor-item");

        let typeMoeda = document.createElement("div");
        typeMoeda.classList.add("type-moeda");
        typeMoeda.textContent = "R$";

        let valorCar = document.createElement("p");
        valorCar.classList.add("valor-car");
        valorCar.textContent = car.price > 0 ? "$"+car.price.toFixed(2) : "Free";

        let titleDetails = document.createElement("div");
        titleDetails.classList.add("title-details");

        let productFabrication = document.createElement("p");
        productFabrication.classList.add("product-fabrication");
        productFabrication.textContent = car.yearFabrication;   
        

        // Append the product details
        productDetails.append(productStatus);
        productDetails.append(productNameAndBrand);
        productDetails.append(valorItem);
        productDetails.append(titleDetails);

        // Append car price and currency
        valorItem.append(typeMoeda);
        valorItem.append(valorCar);

        titleDetails.append(productFabrication);

        // Append product status event
        productStatus.append(productStatusEvents);

        // Append product name and brand
        productNameAndBrand.append(productName);
        productNameAndBrand.append(productTitle);

        // add all child HTML element of the product
        productElm.append(productImage);
        productElm.append(productDetails);

        // Add complete individual produt to the produt section
        productSection.append(productElm);
    });
}

function productsHandler(){
    //populateProducts(cars);
}

// function footerHandler(){
//     let currentYear = new Date().getFullYear();
//     document.querySelector("footer").textContent = `${currentYear} - All rights reserved`
// }


// handlers
slideHandler();
productsHandler();
//footerHandler();
