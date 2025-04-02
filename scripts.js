const songs = ["./audio/SpotifyMate.com - LUNA - Feid.mp3","./audio/SpotifyMate.com - WELTiTA - Bad Bunny.mp3", "./audio/Die With A Smile.mp3"];
const titles = ["Luna - Feid","Weltita - Bad Bunny","Die With A Smile - Bruno Mars"];
const pictures = ["./imgs/SpotifyMate.com - LUNA - Feid.jpg", "./imgs/SpotifyMate.com - WELTiTA - Bad Bunny.jpg", "./imgs/DieWithASmileCover.jpeg"];

const music = document.getElementById("song");
const image = document.getElementById("picture");
const Name  = document.getElementById("title");
let playButton = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#121212" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                  </svg>`;
let pausedButton = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#121212" class="bi bi-pause-fill" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
                    </svg>`;
let position = 0;

// funcion para cambiar de cancion 
function change(){
    music.src = songs[position];
    image.src = pictures[position];
    Name.textContent = titles[position];  
    music.load();
    music.play();

    document.querySelector(".play").innerHTML = pausedButton;
};

change();

// Play button
function togglePlay(){
    if(music.paused){
        music.play();
        document.querySelector(".play").innerHTML = pausedButton;
    }else{
        music.pause();
        document.querySelector(".play").innerHTML = playButton;
  
    }
};



// Next and Previous buttons
function nextSong(){
    position++;
    if(position >= songs.length){
        position = 0;
    }
    change();
    
};
function previousSong(){
    position--;
    if(position < 0){
        position = songs.length -1;
    }
    change();

};




