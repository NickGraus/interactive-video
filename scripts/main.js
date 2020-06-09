let vid = document.getElementById("v0");
var sections = document.getElementsByClassName("section");

const fetchJSONFile = (path, callback) => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
         }
    };
    httpRequest.open("GET", path);
    httpRequest.send();
};

fetchJSONFile("../JSON/videos.json", function(data) {
    let randomVid = data.videos[Math.floor(Math.random()* data.videos.length)];
    let videoId = randomVid.id;
    let videoName = randomVid.name;
    vid.src = videoName + ".mp4";

    vid.onended = function() {

        for(var i = 0; i < sections.length; i++){
            sections[i].style.visibility = "visible";
            
            let optionText = data.videos[videoId].options[i].text;
            let option = document.getElementsByClassName("section")[i];
            option.innerHTML = optionText;
            option.setAttribute("dest", data.videos[videoId].options[i].reference);

            sections[i].addEventListener("click", (event) => {
                videoName = event.target.getAttribute("dest");
                vid.src = videoName + ".mp4";
            })
        }
    }
    vid.onplay = function() {
        for(var i = 0; i < sections.length; i++){
            sections[i].style.visibility = "hidden";
        }
    }
});





// sections[i].addEventListener("click"), (event) => {
//     let input = event.target;
//     console.log(input);
//     for(var j = 0; j < data.videos[videoId].options.length; j++ ) {
//         videoName = data.videos[videoId].options[j].reference;
//         console.log(videoName);
//     }
    
// }
