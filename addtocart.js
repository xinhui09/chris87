const product = [
    {
        id:0,
        image: 'image1.jpg',
        title: 'Italian Hot Chocolate',
        price: 16,
    },
    {
        id:1,
        image: 'image2.webp',
        title: 'Caramel Frappucino',
        price: 14,
    },
    {
        id:2,
        image: 'image3.jpg',
        title: 'Blended Mocha',
        price: 11,
    },
    {
        id:3,
        image: 'image4.jpg',
        title: 'Irish Coffee Milkshake',
        price: 16,
    },
    {
        id:4,
        image: 'image5.jpg',
        title: 'Java Chip Smoothie',
        price: 13,
    },
    {
        id:5,
        image: 'image6.jpg',
        title: 'Brown Sugar Matcha Latte',
        price: 9.76,
    },
    {
        id:6,
        image: 'image7.jpg',
        title: 'Cappucino',
        price: 7.54,
    },
    {
        id:7,
        image: 'image8.jpg',
        title: 'Americano',
        price: 7.90,
    },
    {
        id:8,
        image: 'image9.jpg',
        title: 'Latte',
        price: 6.50,
    },
    {
        id:9,
        image: 'imageb1.jpg',
        title: 'Espresso',
        price: 6.88,
    },
    {
        id:10,
        image: 'imageb2.jpg',
        title: 'Iced Caramel Macchiato',
        price: 6.65,
    },
    {
        id:11,
        image: 'imageb3.jpg',
        title: 'Black Coffee',
        price: 5.67,
    },
    {
        id:12,
        image: 'imageb4.jpg',
        title: 'Double Chocolate Iced Mocha',
        price: 7.89,
    },
    {
        id:13,
        image: 'imageb5.jpg',
        title: 'Cold Brew Coffee',
        price: 8.50,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image ,title ,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
            );
        }).join('');
    }
}