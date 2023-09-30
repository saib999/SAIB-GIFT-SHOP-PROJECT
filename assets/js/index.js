// login

// let un = localStorage.getItem("username")

// if (un) {
//     document.getElementById("login").style = "display: none;"
//     document.getElementById("account").style = "display: block;"
//     document.getElementById("checkout").style = "display: block;"
// }
// else {
//     document.getElementById("login").style = "display: block;"
//     document.getElementById("account").style = "display: none;"
//     document.getElementById("checkout").style = "display: none;"
// }

let un = localStorage.getItem("username");

if (un) {
    // when user is loggedin
    document.getElementById("login").style = "display: none"
    document.getElementById("account").style = "display: block;"
    document.getElementById("checkout").style = "display: block;"

}
else {
    // when user is not loggedin
    document.getElementById("login").style = "display: block"
    document.getElementById("account").style = "display: none;"
    document.getElementById("checkout").style = "display: none;"
}

function Login() {
    document.getElementById("alert").innerHTML = ''

    let un = document.getElementById("uname").value
    let pw = document.getElementById("pw").value

    if (un == "maazulhaq" && pw == "12345") {

        localStorage.setItem("username", un)
        localStorage.setItem("cartProdArr", JSON.stringify([]))
        window.location.reload()
    }
    else {
        document.getElementById("alert").innerHTML += '<div class="alert alert-danger" role="alert"> Incorrect Username or password </div>'
    }
}

// render cards

// let products = [
//     {
//         id: 0,
//         img: 'https://img.freepik.com/premium-photo/cute-teddy-bear-with-heart-love-valentine-s-day-card-3d-render-illustration_691560-7210.jpg?w=2000',
//         title: 'Teddy bear',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         price: 450
//     },
//     {
//         id: 1,
//         img: 'https://m.media-amazon.com/images/I/7122h3jWvEL.jpg',
//         title: 'Kids Story Book',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         price: 200
//     },
//     {
//         id: 2,
//         img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
//         title: 'Toy Car',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         price: 340
//     },
//     {
//         id: 3,
//         img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
//         title: 'New Toy Car',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         price: 740
//     },
//     {
//         id: 4,
//         img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
//         title: 'New Toy Car',
//         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
//         price: 1440
//     }
// ]


// for (let i in products) {
//     document.getElementById('prod-container').innerHTML += `

//     <div class="col" id="product-${products[i].id}">
//     <div class="card">
//       <img src="${products[i].img}" class="card-img-top" alt="..." height="300px">
//       <div class="card-body">
//         <h5 class="card-title">${products[i].title}</h5>
//         <p class="card-text">${products[i].description}</p>
//         <p class="card-text">Price: Rs. ${products[i].price}</p>
//         <label class="card-text form-label mb-3" for="">Quantity
//             <input id="qty-${products[i].id}" class="form-control" type="number" value="1" min="0" name="qty" id="qty">
//         </label>
//         <button type="button" onclick="addToCart(${i})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pizza1">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   </div>

//     `
// }

// JSON.stringify()

// JSON.parse()

// function addToCart(prodIndex) {

//     // functionality of add to card
//     let product = products[prodIndex];

//     let qty = Number(document.getElementById("qty-" + product.id).value)

//     let addedProd = {
//         ...product,
//         qty: qty
//     }
//     addedProd = JSON.stringify(addedProd)
//     console.log(addedProd)

//     let cartProdArr = localStorage.getItem('cartProdArr')

//     localStorage.setItem("cartProdArr", [...cartProdArr, addedProd])
// }


let products = [
    {
        id: 0,
        img: 'https://img.freepik.com/premium-photo/cute-teddy-bear-with-heart-love-valentine-s-day-card-3d-render-illustration_691560-7210.jpg?w=2000',
        title: 'Teddy bear',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 450
    },
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/7122h3jWvEL.jpg',
        title: 'Kids Story Book',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 200
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
        title: 'Toy Car',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 340
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
        title: 'New Toy Car',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 740
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
        title: 'New Toy Car',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 1440
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?cs=srgb&dl=pexels-hosein-ashrafosadat-243206.jpg&fm=jpg',
        title: 'Crazzy Boys Car',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        price: 401
    }
]

for (let i in products) {
    document.getElementById("prod-container").innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${products[i].img}" class="card-img-top" alt="..." height="400px">
                <div class="card-body">
                    <h5 class="card-title">${products[i].title}</h5>
                    <p class="card-text">${products[i].description}</p>
                    <p class="card-text">Price: Rs. ${products[i].price}</p>
                    <div class="mb-3">
                        <label for="qty-${i}" class="form-label">Quantity</label>
                        <input type="number" class="form-control" id="qty-${i}" value="1" min="0" />
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addToCart(${i})">Add to cart</button>
                </div>
            </div>
        </div>
    `
}

function addToCart(prodIdex) {
    let username = localStorage.getItem("username")

    if(username){
        let product = products[prodIdex];

        let qty = Number(document.getElementById("qty-"+prodIdex).value)
    
        let addedProd = {
            ...product,
            qty: qty
        }
    
        let cartProdArr = JSON.parse(localStorage.getItem('cartProdArr'))
    
        cartProdArr = [
            ...cartProdArr,
            addedProd
        ]
    
        cartProdArr = JSON.stringify(cartProdArr);
    
        localStorage.setItem('cartProdArr', cartProdArr)
    }
    else{
        alert("Please Login First")
    }
    
}