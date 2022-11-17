// Elements
const API = "http://localhost:3000/memes";
const shop = document.getElementById("shop");
// const memeDiv = document.getElementById("item");
const cursor = document.getElementById("cursor");
const cursor2 = document.getElementById("cursor2");
const minusButtons = document.querySelectorAll('.minus-btn');
const plusButtons = document.querySelectorAll('.plus-btn');
const inputFields = document.querySelectorAll('.quantity input');

// document.addEventListener("DOMContentLoaded",()=>{

// })

function renderMeme() {
  fetch(API)
    .then((res) => res.json())
    .then((memeData) => {
      memeData.forEach((meme) => {
        const memeDiv = document.createElement("div");
        memeDiv.className = "item";
        const title = document.createElement("h3");
        title.textContent = meme.name;
        memeDiv.appendChild(title);
        shop.append(memeDiv);
        const memeP=document.createElement("p");
        memeP.textContent=meme.desc;
        memeDiv.append(memeP);
        const memePrice = document.createElement("h2");
        memePrice.textContent=meme.price;
        memeDiv.append(memePrice)
        const memeImg=new Image ('222','170')
        memeImg.src =meme.image;
        memeDiv.append(memeImg)
      });                  
      // console.log(memeData);
    });
}

// const imgs = document.getElementById("image");
// imgs.addEventListener("mouseover", function () {
//   imgs.append(imgs);
//   console.log(imgs);
// });


//eventListeners
const searchForm = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("clicked")
});

const textInfo = document.getElementById("text");
console.log(text);


document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px;top: " + e.clientY + "px;";
});

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener('click', function minusProduct() {
    if (inputFields[i].value) {
      inputFields[i].value--;
    }
  });
}
for (let i = 0; i < minusButtons.length; i++) {
  plusButtons[i].addEventListener('click', function plusProduct() {
    inputFields[i].value++;
  });
}

renderMeme();

  

