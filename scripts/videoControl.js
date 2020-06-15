const videoControl = (function() {
    let henk;
    let vid = document.getElementById("v0");
    let sections = document.getElementsByClassName("section");
    let section = document.createElement("div");
    let videoId;

/**
 *  Function gets data from JSON
 * @param {Object} data Data from JSON file
 */
    const Setup = (data) =>
    {
        henk = data;
        console.log("jan");
    }

    const piet = () => 
    {
        let randomVid = henk.videos[Math.floor(Math.random()* henk.videos.length)];

        videoId = randomVid.id;
        let videoName = randomVid.filename;
        vid.src = videoName;
    }

    const klaas = () =>
    {
        vid.onended = function() {

            for(var i = 0; i < sections.length; i++){
                sections[i].style.visibility = "visible";
                
                let optionText = henk.videos[videoId].options[i].text;
                let option = document.getElementsByClassName("section")[i];
                option.innerHTML = optionText;

                option.dataset.dest = henk.videos[videoId].options[i].linkFilename;
                sections[i].addEventListener("click", (event) => {
                    vid.src = option.dataset.dest;
                })
            }
        }
        vid.onplay = function() {
            for(var i = 0; i < sections.length; i++){
                sections[i].style.visibility = "hidden";
            }
        }
    }



    return { 
        Setup: Setup,
        piet: piet,
        klaas: klaas
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