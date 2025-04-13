
const showloader = () => {
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("video-container").classList.add("hidden");
};

const hideloadder = () => {
  document.getElementById("loader").classList.add("hidden");
  document.getElementById("video-container").classList.remove("hidden");
};





function loadVideo (searchbox="") {
  showloader();
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchbox}`)
    .then((res)=>res.json())
    // .then((data)=>displayVideos(data.videos));
    .then((data)=>{
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
}
// loadVideo();

const loadVideoDetails=(video_id)=>{ 
  console.log(video_id);
  const url ='https://openapi.programming-hero.com/api/phero-tube/video/${video_id}';
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>displayVideoDetails(data.video));
 }


// const displayVideoDetails=(video)=>{
//     console.log(video);
//     document.getElementById("video_details").showModal() ;

//     const videoDetails = document.getElementById("details-container");
//     videoDetails.innerHTML = `
// <h2> ${video.title}</h2>
// <p>${video.description}</p>

//  `;
//  loadVideoDetails.appendChild(videoDetails);
// }
 

const displayVideoDetails = (video) => {
  console.log(video);
  document.getElementById("video_details").showModal();

  const videoDetails = document.getElementById("details-container");
  videoDetails.innerHTML = `
      <h2>${video.title}</h2>
      <p>${video.description}</p>
  `;

  
      detailsContainer.appendChild(videoDetails); // Corrected reference
  
};


const displayVideos =(videos)=>{
    const videoContainer = document.getElementById("video-container");
   videoContainer.innerHTML = ""; 

if(videos.length === 0){

  videoContainer.innerHTML = `
  <div class="flex flex-col items-center justify-between py-20 text-center col-span-full">
    <img class="w-[120px]"
    src="./assests/Icon.png" alt="" srcset="">
    <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
</div>
  `;
  return;
}


    videos.forEach(video => {
        console.log(video);
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <div class="card bg-base-100 ">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="thumbnail" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm  rounded">3 hours 56 min ago</span>
            </figure>
            <div class=" flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                    <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="intro ">
                <h2 class="text-sm text-semibold">${video.title}</h2>
                <p class="text-sm text-gray-400 flex gap-1">
                ${video.authors[0].profile_name}
                ${video.authors[0].verified==true? `<img class="w-5 h-5"
                    src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="" srcset="">`: `` }

                    
                </p>
                <p class="text-sm text-gray-400">${video.others.views}</p>
              </div>
            </div>
            <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">Show Details</button>
          </div>

        
        `;
        videoContainer.appendChild(videoCard);
        hideloadder();
    });


}









// {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }
