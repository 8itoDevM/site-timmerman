var cars = [
    {
      name: "Ferrari 812",
      brand: "GTS 6.5 V12",
      price: 6080149,
      image: "./assets/img/imagecarFerrari.png",
      km: 0,
      status: "Novo na loja",
      yearFabrication: "2023/2024"
    },
    {
      name: "Ford Mustang",
      brand: "5.0 V8 TI-VCT",
      price: 350000,
      image: "./assets/img/mustang.png",
      km: 29000,
      status: "Destaque da semana",
      yearFabrication: "2018/2018"
    },
    {
        name: "Peugeot 206",
        brand: "1.6 PRESENCE",
        price: 14900,
        image: "./assets/img/peugeot.jpg",
        km: 213976,
        status: "",
        yearFabrication: "2016/2016"
    },
  ];

  let logged = false;

  let statusColors = {
    "Novo na loja": "#2d9d67", // verde
    "Destaque da semana": "#4964a4", // azul
  };

  for (let car of cars) {
    let statusColor = statusColors[car.status];
    console.log(`O status do carro é ${car.status} e a cor correspondente é ${statusColor}`);
  }

console.log("Teste 3");
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

function formatNumbers(num, numCasasDecimais){
    return num.toLocaleString('pt-BR', {
        minimumFractionDigits: numCasasDecimais,
        maximumFractionDigits: numCasasDecimais
    });
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

        if(car.status !== ""){
            let productStatus = document.createElement("div");
            productStatus.classList.add("status-car");
            let productStatusEvents = document.createElement("h5");
            productStatusEvents.classList.add("status-events");
            productStatusEvents.textContent = car.status;
            productDetails.append(productStatus);
            productStatus.append(productStatusEvents);
            productStatusEvents.style.backgroundColor = statusColors[car.status];
        } else { productDetails.style.marginTop = "65px"; }

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

        valorCar.textContent = car.price > 0 ? formatNumbers(car.price, 2) : "Free";

        let informCar = document.createElement("div");
        informCar.classList.add("inform-car");

        let titleDetails = document.createElement("div");
        titleDetails.classList.add("title-details");

        let productFabrication = document.createElement("p");
        productFabrication.classList.add("product-fabrication");
        productFabrication.textContent = car.yearFabrication;   

        let productKm = document.createElement("p");
        productKm.classList.add("product-km");
        productKm.textContent = car.km > 0 ? car.km.toLocaleString('pt-BR')+"km" : "Novo";

        let buttonSeeMore = document.createElement("button");
        buttonSeeMore.classList.add("button-details");
        buttonSeeMore.textContent = "Ver mais";

        // Append the product details
        productDetails.append(productNameAndBrand);
        productDetails.append(valorItem);
        productDetails.append(informCar);
        productDetails.append(buttonSeeMore);

        // Append car price and currency
        valorItem.append(typeMoeda);
        valorItem.append(valorCar);

        informCar.append(titleDetails);

        // Append km and year of fabrication
        titleDetails.append(productFabrication);
        titleDetails.append(productKm);

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
console.log("teste")