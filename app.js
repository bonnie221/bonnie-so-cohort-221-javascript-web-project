//products
const products = [
    {
        id: 1,
        title:"dior foundation",
        category: "foundation",
        price: 52,
        img: "./images/dior-foundation.png",
        desc: `A foundation with a 24 hour wear, radiant medium to full coverage and hydration. With 85% skincare ingredients to visibily improve skin over time.`,
    },
    {
        id: 2,
        title: "rare foundation",
        category: "foundation",
        price: 29,
        img: "./images/rare-foundation.png",
        desc: `An innovativebreathable foundation that combines the weightless feel of a serum with buildable medium coverage for truly layerable wear.`
    },
    {
        id: 3,
        title: "hourglass blush",
        category: "blush",
        price: 43,
        img: "./images/HG-blush.png",
        desc: `A groundbreaking hybrid that combines the customized lighting effects of Ambient Lighting Powder or Strobe Powder with a spectrum of breathtakingly modern hues.`
    },
    {
        id: 4,
        title: "laura mercier blush",
        category: "blush",
        price: 34,
        img: "./images/LM-blush.png",
        desc: `A long-wearing, sheer powder blush that provides up to 10 hours of buildable, glowing check color for all skin tones.`
    },
    {
        id: 5,
        title: "makeup by mario eye shadow palette",
        category: "eye-shadows",
        price: 48,
        img: "./images/MM-eye-shadows.png",
        desc: `A universal must-have matte palette formulated to be easily buildable so that it can go from natural to dramatic without causing fallout.`
    },
    {
        id: 6,
        title: "patrick ta eye shadow palette",
        category: "eye-shadows",
        price: 68,
        img: "./images/PT-eye-shadows.png",
        desc: `A versatile eyeshadow palette that contains two luminous cream bases, velvety matte and iridescent metallic eyeshadows, and glistening pearl toppers.`
    },
    {
        id: 7,
        title: "tom ford lipstick",
        category: "lipstick",
        price: 58,
        img: "./images/TF-lipstick.png",
        desc: `A fade-resistant lip color with a creamy, vibrant, true-color finish in shades from second-skin nudes to blazing reds.`
    },
    {
        id: 8,
        title: "YSL lipstick",
        category: "lipstick",
        price: 38,
        img: "./images/YSL-lipstick.png",
        desc: `A rich, creamy lipstick that delivers incredible color payoff and feels hydrating and breathable on the lips.`
    }
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");


//load items
window.addEventListener('DOMContentLoaded', function(){
  displayProductItems(products);
  displayProductButtons();
});

function displayProductItems(productItems) {
    let displayProduct = productItems.map(function(item) {
        // console.log(item);
 
         return `<article class="product">
         <img src="${item.img}" class="photo" alt="${item.title}"/>
       <div class="item-info">
         <header>
           <h4>${item.title}</h4>
           <h4 class="price">$${item.price}</h4>  
         </header>
         <p class="item-text">${item.desc}</p>
       </div>
       </article>`;
     });
     displayProduct = displayProduct.join("");
     sectionCenter.innerHTML = displayProduct;
}

function displayProductButtons() {
  const categories = products.reduce(function(values, item){
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["home"]
  );
  const categoryBtns = categories.map (function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }) 
  .join("");
  container.innerHTML = categoryBtns;
  const filterBtn = document.querySelectorAll(".filter-btn");

  //Filter items
filterBtn.forEach(function(btn){
btn.addEventListener("click", function(e){
  const category = e.currentTarget.dataset.id;
  const productCategory = products.filter (function(productItem) {
    if (productItem.category === category){
      return productItem;
    }
  });
  if(category === 'home') {
    displayProductItems(products);
  }
  else {
    displayProductItems(productCategory);
  }
});
});

}