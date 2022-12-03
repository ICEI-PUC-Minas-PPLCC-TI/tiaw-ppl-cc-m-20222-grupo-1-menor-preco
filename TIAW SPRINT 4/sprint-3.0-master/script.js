

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
const buttons= document.querySelectorAll('.btn')
let products = []

buttons.forEach((button =>{
  button.addEventListener('click',(e) =>{
    const filter =e.target.dataset.filter
    products.forEach(products => {
      
      const isVisible =
        (products.type.toLowerCase().includes(filter)|| filter=="todos") 
  
      products.element.classList.toggle("hide", !isVisible)
    })
  })
}))
const rangeInput =document.querySelectorAll(".range-input input");
priceInput=document.querySelectorAll(".price-input input");
progress=document.querySelector(".slider .progress");

let priceGap=1;

priceInput.forEach(input =>{
  input.addEventListener("input", e=>{
    let minVal = (priceInput[0].value),
    maxVal=(priceInput[1].value);
    
    if((maxVal - minVal >= priceGap)&& maxVal<=100){
      if(e.target.className === "input-min"){
        rangeInput[0].value=minVal;
        progress.style.left = (minVal/rangeInput[0].max)*100 + "%"
      }else{
        rangeInput[1].value=maxVal;
        progress.style.right = 100 - (maxVal/rangeInput[1].max)*100 + "%"
      }
      products.forEach(products =>{
      
        const isVisible2 =
          products.price >= minVal && products.price<=maxVal
          bool=true;
        products.element.classList.toggle("hide", !isVisible2)
      })
    }
   

  })
})



rangeInput.forEach(input =>{
  input.addEventListener("input", e=>{
    let minVal = (rangeInput[0].value),
    maxVal=(rangeInput[1].value);

    if(maxVal - minVal <priceGap){
      if(e.target.className === "range-min"){
        rangeInput[0].value=maxVal - priceGap;

      }else{
        rangeInput[1].value=minVal + priceGap;
      }
    }else{
      priceInput[0].value=minVal
      priceInput[1].value=maxVal
      progress.style.left = (minVal/rangeInput[0].max)*100 + "%"
      progress.style.right = 100 - (maxVal/rangeInput[1].max)*100 + "%"
    }
    products.forEach(products =>{
      
      const isVisible2 =
        products.price >= minVal && products.price<=maxVal

      products.element.classList.toggle("hide", !isVisible2)
    })
  })
})


fetch("./products.json")
  
  .then(res => res.json())
  .then(data => {
    products = data.map(products => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const price = card.querySelector("[data-price]")
      
      const imgtag = card.querySelector("[data-image]");
     
      
      
      console.log(products.price)

    
      
      imgtag.src = products.filename
      
      header.textContent = products.title
      body.textContent = products.type
      price.textContent = products.price
      
      
      

      userCardContainer.append(card)
      return { title: products.title, type: products.type, price: products.price, element: card ,imgtag:products.filename
      }
    })
  })
