const API="https://api.imgflip.com/get_memes"


// document.addEventListener("DOMContentLoaded",()=>{
   function renderMeme(){
  fetch("https://api.imgflip.com/get_memes")
   .then((res)=>res.json())
   .then((memeData)=>{
      memeData.forEach(renderMeme)
      console.log(res)
   })
// })
}