let videos = [
    {
        name: "Work at Brainport.mp4",
        option1: [
            text: "Click here to restart the video",
            reference: "Work at Brainport.mp4"
        ],
        option2: [
            text: [
                "Click here to see how Brainport helps with the Corona crisis"
            ]
            reference: [
                "Corona-brainport.mp4"
            ]
        ],
        option3: [
            text: "Click here to see how Brainport supports it region",
            reference: "Donatie-brainport.mp4"
        ],
        qrCode: [
            qrImage: "Click here to see how Brainport supports it region",
            qrText: "Scan te QR-code to get more info"
        ],
    }
]

console.log(videos.name);
let vid = document.getElementById("v0");

let randomVid = videos[Math.floor(Math.random()* videos.length)];
vid.src= randomVid + ".mp4";
vid.onended = function() {
    var sections = document.getElementsByClassName("section");
    for(var i = 0; i < sections.length; i++){
		sections[i].style.visibility = "visible";
	}
};


// const ChangeQrUrl = async (newLink = "https://google.com") =>
// {
//     const response = await fetch (`https://free.qrd.by/api/short?secretkey=98bed0c8c25f0f83f573c72decac3869&shorturl=wnu7m1&url=${newLink}`);
//     const myJson = await response.json();

//     console.log(myJson);
// }




// function Video(name, option1, option2, option3, qrCode)
// {
//     this.name = name;
//     this.option1 = option1;
//     this.option2 = option2;
//     this.option3 = option3;
//     this.qrCode = qrCode;
// }

// let video1 = new Video("Work at Brainport", "eindhoven", "23");