
function fetchVideoData() {
    const url = "./data.json"
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((videoData) => {
            CreateVideoCardContainer(videoData.Videos);
            CreateVideoCardContainer(videoData.Videos); //just for testing
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

function filterSearch() {
    const searchTerm = document.querySelector('#search').value.toLowerCase();
    const videoContainer = document.getElementsByClassName('card');
    for (let card of videoContainer) {
        console.log(card);
        let cardText = card.innerText.toLowerCase();
        if (!cardText.includes(searchTerm)){
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    }
}
