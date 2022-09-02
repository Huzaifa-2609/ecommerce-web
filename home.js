

let l= [{
    "url":"bedroom.html",
    "title": "BEDROOM",
    "image":'after pics/bedroom.jpg',
},
{
    "url":"bathroom.html",
    "title": "BATHROOM",
    "image":'after pics/bathroom.jpg',
},
{
    "url":"dress.html",
    "title": "DRESSING ROOM",
    "image":'after pics/dressing.jpg',
},
{
    "url":"draw.html",
    "title": "DRAWING ROOM",
    "image":'after pics/drawing.jpg',
},
{
    "url":"garden.html",
    "title": "GARDEN",
    "image":'after pics/garden.jpg',
},
{
    "url":"acrylic.html",
    "title": "ACRYLIC MIRROR",
    "image":'after pics/acrylic.jpg',
},
{
    "url":"bluetooth.html",
    "title": "BLUETOOTH MIRROR",
    "image": 'after pics/bluetooth.jpg',
},
{
    "url":"electric.html",
    "title": "ELECTRIC MIRROR",
    "image":'after pics/electric.jpg',
},
{
    "url":"metal.html",
    "title": "METAL BORDERED",
    "image":'after pics/metal border.jpg',
},
{
    "url":"led.html",
    "title": "LED MIRROR",
    "image":'after pics/led.jpg',
},
{
     "url":"wooden.html",
    "title": "WOODEN MIRROR",
    "image":'after pics/wooden.jpg',
},
]
l.map((a)=>{
 document.getElementById("cards").innerHTML+=
    
 `
    <div  key=${a.title} class="col-md-4">
    <a href="${a.url}">
        <div class="card my-3 shadow-lg"  >
     <img  src="${a.image}" class="card-img-top" height="300px" width="200px" alt="">
          <h5 class="card-title">${a.title}</h5>
      </div>
      </a>
    </div>
    `
})