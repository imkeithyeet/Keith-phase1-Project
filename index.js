const API="https://api.imgflip.com/get_memes"
const shop = document.getElementById("shop");


document.addEventListener("DOMContentLoaded",()=>{
 
})


function renderMeme(){
   fetch("API")
    .then((res)=>res.json())
    .then((memeData)=>{
       memeData.forEach(renderMeme)
       console.log(res)
    })
   }

// console.log(shop)
const memeItemsData = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    price: 400,
    desc: "Call me on my cell phone",
    img: "assets/placeholder.jpg",
  },
  {
    id: "112126428",
    name: "Distracted Boyfriend",
    price: 200,
    desc: "What you looking at willis",
    img: "assets/placeholder.jpg",
  },
  {
    id: "438680",
    name: "Batman Slapping Robin",
    price: 1000,
    desc: "Do that again and i will disown you",
    img: "assets/placeholder.jpg",
  },
  {
    id: "188390779",
    name: "Woman Yelling At Cat",
    price: 879,
    desc: "You said it was gluten free!!!",
    img: "assets/placeholder.jpg",
  },
];
let basket=[]
const memeShop = () => {
  return (shop.innerHTML = memeItemsData
   .map((x)=>{
      let{id,name,price,desc,img}=x;
   return `
   <div id=product-items-${id} class="item"> 
   <img width="220" src="assets/placeholder.jpg" alt="">
  <div class="details"></div>
  <h3>${name} </h3>
  <p>${desc}</p>
  <div class="price-qty">
  <h2>$ ${price}</h2>
  <div class="buttons">
    <i  onclick="decrement(${id})"class="bi bi-dash-lg"></i>
    <div id=${id} class="quantity">0</div>
    <i onclick="increment(${id})"class="bi bi-plus-lg"></i>
  </div>
  </div>
</div> 
   `
  }).join(""));

};

memeShop();

let increment=(id)=>{
   let selectedItem=id;
   let search = basket.find((x)=>x.id === selectedItem.id)
   if (search === undefined){
      basket.push({
         id: selectedItem.id,
         item:1,
      }) 
   } else{
      search.item+=1;
   }
   // console.log(basket)
   update(selectedItem.id)

}
let decrement=(id)=>{
   let selectedItem=id;
   let search = basket.find((x)=>x.id === selectedItem.id)
  
   if (search.item === 0 )return;
   else{
      search.item-=1;
   }
// console.log(basket)
update(selectedItem.id)
}
let update=(id)=>{
   const search=basket.find((x)=>x.id===id)
   console.log(search.item)
   document.getElementById(id).innerHTML=search.item

}
