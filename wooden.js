import  price from "./price.js";
let l= [{
    "count":1,
    "title": "BEDROOM",
    "image":'after pics/wooden1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "BATHROOM",
    "image":'after pics/wooden2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "DRESSING ROOM",
    "image":'after pics/wooden3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "DRAWING ROOM",
    "image":'after pics/wooden4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    "price":800 
},
{
    "count":1,
    "title": "GARDEN",
    "image":'after pics/wooden5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    "price":800 
},
{
    "count":1,
    "title": "ACRYLIC MIRROR",
    "image":'after pics/wooden6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    "price":800 
},
{
    "count":1,
    "title": "BLUETOOTH MIRROR",
    "image":'after pics/wooden7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquio.",
    "price":800 
},
{
    "count":1,
    "title": "ELECTRIC MIRROR",
    "image":'after pics/wooden8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    "price":800 
},
{
    "count":1,
    "title": "METAL BORDERED",
    "image":'after pics/wooden9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    "price":800 
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/wooden10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800 
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/wooden2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800 
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/wooden4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800 
},
{   
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/wooden6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800 
},
{
    "count":1,
    "title": "LED MIRROR",
    "image":'after pics/wooden8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800 
},
{
    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    "price":800
},
{

    "count":1,
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":800 
},
]




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