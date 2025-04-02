const songs = ["./songs/SpotifyMate.com - LUNA - Feid.mp3","./songs/SpotifyMate.com - WELTiTA - Bad Bunny.mp3"];
const titles = ["Luna - Feid","Weltita - Bad Bunny"];
const pictures = ["./covers/SpotifyMate.com - LUNA - Feid.jpg", "./covers/SpotifyMate.com - WELTiTA - Bad Bunny.jpg"];

const music = document.getElementById("song");
const image = document.getElementById("picture");
const Name  = document.getElementById("title");
let position = 0;

function change(){
    music.src = songs[position];
    image.src = pictures[position];
    Name.textContent = titles[position];  
    music.play();
};

change();

function togglePlay(){
    if(music.paused){
        music.play();
    }else{
        music.pause();
        
    }
};


function nextSong(){};
function previousSong(){};


