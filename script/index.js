function loadCatagories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
 .then((res)=>res.json())
 .then((data)=>displayCategories(data.categories));
 }
 
 function displayCategories(categories){
     // console.log(categories);
     // get the container
     const container = document.getElementById("category-container");
     // Loop operations on array object
     for(let cat of categories){
         console.log(cat);
         // create a element
         const categoryDiv = document.createElement("div");
         categoryDiv.innerHTML =
         `<button class="btn btn-sm ">${cat.category}</button>`
         ;
         // append the element
         container.appendChild(categoryDiv);
 }
 }
 loadCatagories();