function showMessage(event){
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    const message=document.getElementById("showText");
    console.log(message)
    const printMessage=document.createElement("p");
    printMessage.innerText=email;
    message.appendChild(printMessage);
    
}
const imageArray = [
    {
        url: "dosa.jpg",
        name: "Dosa",
        rating: "4.5",
        price: "$7.00"
    },
    {
        url: "chawming.jpg",
        name: "Chawming",
        rating: "4.9",
        price: "$12.00"
    },
    {
        url: "sausage.jpg",
        name: "Sausage",
        rating: "4.7",
        price: "$15.00"
    },
    {
        url: "wings.jpg",
        name: "Wings",
        rating: "5.0",
        price: "$20.00"
    },
    {
        url: "Shorma.jpg",
        name: "Shorma",
        rating: "5.0",
        price: "$8.00"
    },
    {
        url: "fries.jpg",
        name: "Fries",
        rating: "4.9",
        price: "$11.00"
    }
];
function foodItem(event) {
    const imageContainer = document.getElementById("items");  
    for (const item of imageArray) {
        const projectImage = document.createElement("div");
        projectImage.classList.add("item-card");

        const img=document.createElement("img");
        img.src=item.url;
        projectImage.appendChild(img);

        const itemHead=document.createElement("div");
        itemHead.classList.add("item-info");
        const itemDiv=document.createElement("div");
        itemDiv.classList.add("item-name");
        const heading=document.createElement("h3");
        heading.innerText=item.name;
        itemDiv.appendChild(heading);
        const price=document.createElement("p");
        
        price.innerText=item.rating;
        itemDiv.appendChild(price);

        const itemPrice=document.createElement("div");
        itemPrice.classList.add("item_price");
        const addCart=document.createElement("div");
        addCart.classList.add("add_to_cart");
        const Cart=document.createElement("p");
        Cart.innerText='Add to Cart';
        addCart.appendChild(Cart);
        itemPrice.appendChild(addCart);
        const prices=document.createElement("p");
        prices.classList.add("prices");
        prices.innerText=item.price;
        itemPrice.appendChild(prices);

        itemHead.appendChild(itemDiv);
        itemHead.appendChild(itemPrice);


        projectImage.appendChild(itemHead);

        imageContainer.appendChild(projectImage);
    }
}