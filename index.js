//LOS CELULARES QUE HAY A LA VENTA

const celulares=[
  {modelo: "motorola" ,cantidad: 1, id: 1, nombre:"Motorola Edge 30 Pro", precio: 120000, img: "https://authogar.vtexassets.com/arquivos/ids/183519/moto-edge-30-pro-3.png?v=638008368851200000"},
  {modelo: "motorola" ,cantidad: 1, id: 2, nombre:"Motorola E20", precio:37000, img:"https://microhardazul.com.ar/wp-content/uploads/2022/03/motorola-moto-e20-2gb-32gb-dual-sim-gris.jpg"},
  {modelo: "motorola" ,cantidad: 1, id: 3, nombre:"Motorola E32", precio:50000, img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2878_e32_plata.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
  {modelo: "motorola" ,cantidad: 1, id: 4, nombre:"Motorola G32", precio:63000, img:"https://http2.mlstatic.com/D_NQ_NP_822151-MLA52595222144_112022-O.jpg"},
  {modelo: "motorola" ,cantidad: 1, id: 5, nombre:"Motorola Edge 30", precio:105000, img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/170/953/products/405828-11-1c494144b451776d5716657531537875-640-0.jpg"},
  {modelo: "motorola" ,cantidad: 1, id: 6, nombre:"Motorola G52" , precio:70000, img:"https://www.mgmstore.com.ar/1363-large_default/Motorola-Moto-G52-128GB.jpg"},
  {modelo: "motorola" ,cantidad: 1, id: 7, nombre:"Motorola E7 Plus" , precio:25000, img:"https://http2.mlstatic.com/D_NQ_NP_712792-MLA44001849091_112020-O.webp"},
  {modelo: "motorola" ,cantidad: 1, id: 8, nombre:"Motrola G82" , precio:90000, img:"https://cdnlaol.laanonimaonline.com/webapp_webp/images/fotos/b/0000054000/31923_3.webp"},
  {modelo: "samsung" ,cantidad: 1, id: 9, nombre: "Samsung Galaxy S20 Fe 5G", precio: 90000, img: "https://offlinetecnologia.com.ar/3647-large_default/8806094338683.jpg" },
  {modelo: "samsung" ,cantidad: 1, id: 10, nombre:"Samsung Galaxy M13", precio: 59000, img:"https://www.cetrogar.com.ar/media/catalog/product/s/m/sm-m135_galaxy-m13_light-blue_front_raw_rgb-lte.png?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds"},
  {modelo: "samsung" ,cantidad: 1, id: 11, nombre:"Samsung Galaxy A32", precio:41000, img:"https://http2.mlstatic.com/D_NQ_NP_793841-MLA45658507914_042021-O.jpg"},
  {modelo: "samsung" ,cantidad: 1, id: 12, nombre:"Samsung Galaxy A03", precio: 50000,img:"https://www.fullh4rd.com.ar/img/productos/Pics_Prod/celular-samsung-galaxy-a03-2gb32gb-blue-0.jpg"},
  {modelo: "samsung" ,cantidad: 1, id: 13, nombre:"Samsung Galaxy A53 5G", precio:148000,img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/664/621/products/screenshot_1-removebg-preview21-1440bb616925b0e4c416531744453348-640-0.png"},
  {modelo: "samsung" ,cantidad: 1, id: 14, nombre:"Samsung Galaxy S22", precio:200000,img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494418_sd.jpg"},
  {modelo: "samsung" ,cantidad: 1, id: 15, nombre:"Samsung Galaxy S21 Fe", precio:180000,img:"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g990elvaaro/gallery/ar-galaxy-s21-fe-g990-408811-sm-g990elvaaro-thumb-530831998"},
  {modelo: "samsung" ,cantidad: 1, id: 16, nombre:"Samsung Galaxy A71", precio:62000,img:"http://www.vicionet.com/Vel/447-large_default/samsung-galaxy-a71.jpg"},
  {modelo: "xiaomi ",cantidad: 1, id: 17, nombre: "Xiaomi Redmi Note 11", precio: 80000,img:"https://cdn-xiaomi.waugi.com.ar/1012-thickbox_default/redmi-note-11-4gb-ram-128gb-rom.jpg"},
  {modelo: "xiaomi ",cantidad: 1, id: 18, nombre: "Xiaomi Redmi 9C", precio: 43500,img:"https://http2.mlstatic.com/D_NQ_NP_747983-MLA43684142871_102020-O.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 19, nombre: "Xiaomi Pocophone X4 Pro 5G", precio: 154000,img:"https://http2.mlstatic.com/D_NQ_NP_782725-MLA49423195235_032022-O.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 20, nombre: "Xiaomi Mi 11T", precio: 280000,img:"https://cdn-xiaomi.waugi.com.ar/1655-thickbox_default/xiaomi-11t-8gb-ram-256gb-rom.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 21, nombre: "Xiaomi Redmi 9A", precio: 40500,img:"https://www.qloud.ar/SITES/ryr/fotos/19455-0.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 22, nombre: "Xiaomi Redmi 10", precio: 78000,img:"https://images.fravega.com/f500/2f50e4d013d6b97ba1e0aaafbd9b3bc1.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 23, nombre: "Xiaomi Redmi 10C", precio: 69000,img:"https://http2.mlstatic.com/D_NQ_NP_854668-MLA50342489684_062022-O.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 24, nombre: "Xiaomi Pocophone M4 Pro 5G", precio: 150000,img:"https://http2.mlstatic.com/D_NQ_NP_822782-MLA50131180858_052022-O.jpg"},
  {modelo: "xiaomi" ,cantidad: 1, id: 25, nombre:"Xiaomi 12 Pro", precio: 90000, img:"https://http2.mlstatic.com/D_NQ_NP_726939-MLA52514423471_112022-V.jpg"},
  {modelo: "iphone"  ,cantidad: 1, id: 26, nombre:"iphone 13", precio:368000,img:"https://cuyodigital.com/cuyo/wp-content/uploads/2021/11/iphone-13-pink-select-2021.png"},
  {modelo: "iphone"  ,cantidad: 1, id: 27, nombre:"iphone 11", precio:276000,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone11-black-2019?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611169026000"},
  {modelo: "iphone"  ,cantidad: 1, id: 28, nombre:"iphone 7 Plus", precio:98500,img:"https://macpower.com.ar/wp-content/uploads/7-plus.jpg"},
  {modelo: "iphone"  ,cantidad: 1, id: 29, nombre:"iphone 14 Pro", precio:600000,img:"https://www.mgmstore.com.ar/1389-large_default/apple-iPhone-14-Pro-128GB.jpg"},
  {modelo: "iphone" ,cantidad: 1, id: 30, nombre:"iphone 8 Plus", precio:380000,img:"https://media.game.es/COVERV2/3D_L/149/149503.png"},
  {modelo: "iphone" ,cantidad: 1, id: 31, nombre:"iphone XS", precio:190000,img:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61LQEYVExpL._AC_SL1200_.jpg"},
  {modelo: "iphone" ,cantidad: 1, id: 32, nombre: "Iphone 14 ", precio:300000,img:"https://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_14/Midnight/carousel/1.jpg"},

];
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container");
let carrito= JSON.parse(localStorage.getItem("carrito")) || [];
const cantidadCarrito = document.getElementById("cantidadCarrito")

const agregarAlCarrito = (prodId) => {
  const item = celulares.find((prod) => prod.id === prodId)
  carrito.push(item)
  saveLocal();

};


celulares.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <img src=${producto.img} alt="">
    <p>${producto.nombre}</p>
    <p>$${producto.precio}</p>
    <button id="agregar${producto.id}">comprar</button>
    
    `

  todoCelulares.append(div);
  
  const boton=document.getElementById(`agregar${producto.id}`)

 
    boton.addEventListener('click',() => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id );
      if(repeat){
        carrito.map((prod)=>{
          if(prod.id === producto.id)
          producto.cantidad++;
        })

      }
      agregarAlCarrito(producto.id)
    })
})

const saveLocal= ()=>{
  localStorage.setItem("carrito",JSON.stringify(carrito))
};


const pintarCarrito = () =>{

verCarrito.addEventListener("click", () => {
modalContainer.style.display = "flex";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML =`
<h1 class="modal-header-title">Carrito</h1>
`;
modalContainer.append(modalHeader);


const modalbutton= document.createElement("h1");
modalbutton.innerText ="x";
modalbutton.className ="modal-header-button";

modalbutton.addEventListener("click",() => {
  modalContainer.style.display= "none";

})

modalHeader.append(modalbutton)

carrito.forEach((product) => {
  let carritoContent = document.createElement("div");
  carritoContent.className = "modal-content";
  carritoContent.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p>$${product.precio}</p>
  <p>${product.cantidad}</p>
  <p>Total: ${product.cantidad * product.precio}</p>
`;
modalContainer.append(carritoContent)

let eliminar = document.createElement("span");
eliminar.innerText = "✖";
eliminar.className = "delete-product";
carritoContent.append(eliminar);

eliminar.addEventListener("click", eliminarProducto);

});

const total = carrito.reduce((acc,el)=> acc + el.precio*el.cantidad,0)

const totalBuying = document.createElement("div");
totalBuying.className = "total-content";
totalBuying.innerHTML =`total a pagar $${total}`;
modalContainer.append(totalBuying);
})
}

verCarrito.addEventListener("click",pintarCarrito);

const eliminarProducto = () =>{
  const foundId = carrito.find((element) => element.id);

   carrito = carrito.filter((carritoId) => {
      return carritoId !== foundId;
})

  pintarCarrito();
  saveLocal()
}







