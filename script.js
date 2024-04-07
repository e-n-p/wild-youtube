
function fetchVideoData() {
    const url = "./data.json"
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((videoData) => {
            console.log(videoData);
            CreateVideoCardContainer(videoData.Videos)
        })
};


function CreateVideoCardContainer(videoData){
    const videoEl = document.querySelector('.video-section');
    for (let video of videoData) {
        videoEl.innerHTML += `
        <div class="card">
            <div class="thumbnail">
                <img src=${video.Thumbnail}>
            </div>
            <div class="details">
                <p>${video.Title}</p>
                <p>${video.User}</p>
                <p>${video.Views}</p>
                <p>${video.PostDate}</p>
                <p>${video.RunTime}</p>
            </div>
        </div>
    `
    }
};