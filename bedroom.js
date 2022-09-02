import  price from "./price.js";

let l= [{
    "count":1,
    "title": "BEDROOM",
    "image":'after pics/BEDROOM 01.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800   
},
{
    "count":1,
    "title": "BATHROOM",
    "image":'after pics/BEDROOM 02.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "DRESSING ROOM",
    "image":'after pics/BEDROOM 03.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "DRAWING ROOM",
    "image":'after pics/BEDROOM 04.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "count":1,
    "title": "GARDEN",
    "image":'after pics/BEDROOM 05.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "count":1,
    "title": "ACRYLIC MIRROR",
    "image":'after pics/BEDROOM 06.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "count":1,
    "title": "BLUETOOTH MIRROR",
    "image": 'after pics/BEDROOM7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquio.",
    price:800
},
{
    "count":1,
    "title": "ELECTRIC MIRROR",
    "image":'after pics/BEDROOM8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "count":1,
    "title": "METAL BORDERED",
    "image":'after pics/BEDROOM9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:800
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/BEDROOM10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM11.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:800
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/BEDROOM 01.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800    
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM 02.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/BEDROOM 03.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM 04.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{   
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/BEDROOM 05.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800    
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM 06.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/BEDROOM7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:800
},
{

    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/BEDROOM11.jpg',
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