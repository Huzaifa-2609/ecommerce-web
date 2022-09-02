import  price from "./price.js";
let l= [{
    "title": "BEDROOM",
    "image":'after pics/metal1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "BATHROOM",
    "image":'after pics/metal2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "DRESSING ROOM",
    "image":'after pics/metal3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "DRAWING ROOM",
    "image":'after pics/metal4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "GARDEN",
    "image":'after pics/metal5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "ACRYLIC MIRROR",
    "image":'after pics/metal6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "BLUETOOTH MIRROR",
    "image": 'after pics/metal7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquio.",
    price:800
},
{
    "title": "ELECTRIC MIRROR",
    "image":'after pics/metal8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "METAL BORDERED",
    "image":'after pics/metal9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/metal10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/metal2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/metal4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{   
    "title": "LED MIRROR",
    "image":'after pics/metal6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/metal8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/metal10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{

    "title": "WOODEN MIRROR",
    "image":'after pics/metal1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
]
// let x= document.getElementById("number");
// x.onclick=()=>{parseInt()+1}

// document.getElementById("plus").addEventListener(onclick,()=>{
//     let l = document.getElementById("number").innerHTML;
//     l=parseInt(l)+1;
// });

l.map((a)=>{

 document.getElementById("cards").innerHTML+=

 `
 <div  key=${a.title} class="col-md-4">
 <div  class="card shadow-lg my-3" style="width: 18rem;">
<img src="${a.image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${a.title}</h5>
<p class="card-text">${a.desc}</p>
<span>Price: ${a.price} USD</span> &nbsp;
<button onclick="price('${a.price}','${a.title}')" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="btn my-1 btn-dark">Add To Cart</button>
</div>
</div>
</div>
    `
})