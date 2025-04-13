function removeActiveClass(){
    const activebtn = document.getElementsByClassName("active");
    for (let btn of activebtn){
        btn.classList.remove("active");
    }
}


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
         `<button onclick="loadCatagoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white "
         id="btn-${cat.category_id}"
         >
         ${cat.category}</button>`
         ;
         // append the element
         container.appendChild(categoryDiv);
       
 }
 }
 loadCatagories();


 const loadCatagoryVideos =(id)=>{

    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);
    fetch(url)
    .then((res)=>res.json()) 
    // .then((data)=>displayVideos(data.category));
    .then((data)=>{
        removeActiveClass();
        
      const clickedbtn = document.getElementById(`btn-${id}`); 
      clickedbtn.classList.add("active");
      displayVideos(data.category); 
    });

 }