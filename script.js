
function fetchVideoData() {
    const url = "./data.json"
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((videoData) => {
            console.log(videoData);
        })
}
