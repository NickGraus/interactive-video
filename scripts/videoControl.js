const videoControl = (function() {
    let data;
    let vid;
    let sections = [];
    let videoId;

/**
 *  Setup all functions and makes them executable
 * @param {Object} jsonData 
 * @param {String} videoId 
 * @param {String} sectionsClassName
 * @example Setup(data, "v0", "section");
 */
    const Setup = (jsonData, videoId = "v0", sectionsClassName = "section") =>
    {
        data = jsonData;
        vid = document.getElementById(videoId);
        sections = document.getElementsByClassName(sectionsClassName);
        
        selectRandomVideo();
        createVideoHandlers();
    }

/**
 *  Select a random video that start first video
 */
    const selectRandomVideo = () => 
    {
        let randomVid = data.videos[Math.floor(Math.random()* data.videos.length)];

        videoId = randomVid.id;
        let videoName = randomVid.filename;
        vid.src = videoName;
    }

/**
 *  
 */
    const createVideoHandlers = () =>
    {
        vid.onended = function() {

            for(var i = 0; i < sections.length; i++){
                sections[i].style.visibility = "visible";
                
                let optionText = data.videos[videoId].options[i].text;
                let option = document.getElementsByClassName("section")[i];
                option.innerHTML = optionText;

                option.dataset.dest = data.videos[videoId].options[i].linkFilename;
                sections[i].addEventListener("click", (event) => {
                    vid.src = option.dataset.dest;
                })
            }
        }
        vid.onplay = function() {
            for(var i = 0; i < sections.length; i++){
                sections[i].style.visibility = "hidden";
            }
            
            data.videos.forEach(element => {                
                let sarah = vid.src.slice((vid.src.indexOf("/", 8) + 1))
                if(element.filename == sarah) {
                    videoId = element.id;
                }
            });
        } 
    }

    return { 
        Setup: Setup,
    }
})();







// Even samengevat mijn aanwijzingen en tips voor je video platform:


// Ik zie in je code dat als je eenmaal een optie hebt aangeklikt er wel een nieuwe video gaat spelen, maar deze video zal dan geen overlays meer hebben. Eigenlijk moet je module zichzelf weer aanroepen op de nieuwe video. Je krijgt dan zoiets als:
// sections[i].addEventListener("click", (event) => {
//                 videoName = event.target.getAttribute("dest");
//                 vid.src = videoName + ".mp4";

// renderOverlay(optionsForThisVideo)
//             })

// De moeilijkheid is dan de nieuwe opties uit de JSON halen, je kan het filteren op naam:
// data.find(i => {  return i.name === “Brainport at Work”  })


 
// Uitbreidingen:
// Linken aan het eerdere werk van Daan om 4 schermen aan te sturen.
// QR code generator gebruiken; of lig plaatjes tonen bij de QR code
// Extra opties toevoegen zoals: wanneer opties (aan het eind, op timecode etc.)