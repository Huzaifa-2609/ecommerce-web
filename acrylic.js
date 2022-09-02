import  price from "./price.js";

let l= [{
    "title": "BEDROOM",
    "image":'after pics/ACRYLIC1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "BATHROOM",
    "image":'after pics/ACRYLIC2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{

    "title": "DRESSING ROOM",
    "image":'after pics/ACRYLIC3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "DRAWING ROOM",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "GARDEN",
    "image":'after pics/ACRYLIC1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "ACRYLIC MIRROR",
    "image":'after pics/ACRYLIC2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "BLUETOOTH MIRROR",
    "image": 'after pics/ACRYLIC3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquio.",
    price:800
},
{
    "title": "ELECTRIC MIRROR",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "METAL BORDERED",
    "image":'after pics/ACRYLIC2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/ACRYLIC1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/ACRYLIC3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{   
    "title": "LED MIRROR",
    "image":'after pics/ACRYLIC3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "LED MIRROR",
    "image":'after pics/ACRYLIC2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/ACRYLIC4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
]
const add=()=>{
    
}
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