

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let products = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  products.forEach(products => {
    const isVisible =
      products.title.toLowerCase().includes(value) 

    products.element.classList.toggle("hide", !isVisible)
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
      const local = card.querySelector("[data-local]")
      
      const imgtag = card.querySelector("[data-image]");
      console.log(imgtag)
      
      
    

    
      
      imgtag.src = products.filename
      
      header.textContent = products.title
      body.textContent = products.type
      price.textContent = products.price
      local.textContent= products.description
      
      

      userCardContainer.append(card)
      return { title: products.title, type: products.type, price: products.price,local:products.description, element: card ,imgtag:products.filename
      }
    })
  })
