import  price from "./price.js";
let l= [{
    "title": "BEDROOM",
    "image":'after pics/led1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "BATHROOM",
    "image":'after pics/led2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "DRESSING ROOM",
    "image":'after pics/led3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "DRAWING ROOM",
    "image":'after pics/led4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:"800 USD"
},
{
    "title": "GARDEN",
    "image":'after pics/led5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:"800 USD"
},
{
    "title": "ACRYLIC MIRROR",
    "image":'after pics/led6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:"800 USD"
},
{
    "title": "BLUETOOTH MIRROR",
    "image":'after pics/led7.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquio.",
    price:"800 USD"
},
{
    "title": "ELECTRIC MIRROR",
    "image":'after pics/led8.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:"800 USD"
},
{
    "title": "METAL BORDERED",
    "image":'after pics/led9.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid.",
    price:"800 USD"
},
{
    "title": "LED MIRROR",
    "image":'after pics/led10.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led11.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{
    "title": "LED MIRROR",
    "image":'after pics/led12.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led13.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{
    "title": "LED MIRROR",
    "image":'after pics/led14.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led15.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{   
    "title": "LED MIRROR",
    "image":'after pics/led1.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    price:"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led2.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{
    "title": "LED MIRROR",
    "image":'after pics/led3.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",
    "price":"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led4.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{
    "title": "WOODEN MIRROR",
    "image":'after pics/led5.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
},
{

    "title": "WOODEN MIRROR",
    "image":'after pics/led6.jpg',
    "desc":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,",

    price:"800 USD"
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