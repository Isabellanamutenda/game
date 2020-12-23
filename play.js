var birds = "./sounds/birds.mp3"
var mountain_stream = "./sounds/mountain_stream.mp3"
var hawai_stream = "./sounds/hawai_stream.mp3"
var light_rain = "./sounds/light_rain.mp3"
var rain_thunder = "./sounds/rain_thunder.mp3"
var waves_california = "./sounds/wavesonmiamibeach.mp3"

var rainforest = "./images/rainforest.jpg"
var mountainstream = "./images/mountainstream.jpg"
var hawaiistream = "./images/hawaiistream.jpg"
var lightrain = "./images/lightrain.jpg"
var lightning = "./images/lightning.jpg"
var waves = "./images/waves.jpg"

var images = ['flowers', 'green', 'hawaiistream']

window.onload = function() {
    document.getElementsByClassName("settings")[0].style.display = "none";
    document.getElementsByClassName("jump")[0].style.display = "none";
}

var opinions= [
    '<div class="sound-div"> \
        <a class="button-sound" onclick="set_audio_image(birds, rainforest)">Birds in a Costa Rican Rainforest</a><br> \
        <a class="button-sound" onclick="set_audio_image(mountain_stream, mountainstream)">Sounds of a Mountain Stream</a><br> \
        <a class="button-sound" onclick="set_audio_image(hawai_stream, hawaiistream)">Stream in Hawaii, with cricket Sounds</a><br> \
        <a class="button-sound" onclick="set_audio_image(light_rain, lightrain)">Light Rain in central Park, New York</a><br> \
        <a class="button-sound" onclick="set_audio_image(rain_thunder, lightning)">Lightining, Thunder, and Rain in the Desert</a><br> \
        <a class="button-sound" onclick="set_audio_image(waves_california, waves)">Waves off the California Coast</a><br> \
    </div>'
];

var audio_file;
var image_file;

function hey(){
    var randOpinionNum = Math.floor(Math.random() * opinions.length);
    document.getElementById('cardthere').style.visibility = 'visible';
    document.getElementById('doHere').innerHTML = '';
    document.getElementById('doHere').innerHTML = opinions[randOpinionNum];
}

function set_audio_image(audio_src, image_src){
    audio_file = audio_src
    image_file = image_src
    document.getElementsByClassName("choose")[0].style.display = "none";
    document.getElementsByClassName("settings")[0].style.display = "block";
}

var sound_time = 0
var i = 100;

function playSound(){
    document.getElementsByClassName("settings")[0].style.display = "none";
    document.getElementsByClassName("jump")[0].style.display = "block";
    document.getElementsByClassName("jump")[0].style.backgroundImage = `url(${image_file})`;
    var player = document.getElementById('audio')
    player.src = audio_file

    setTimeout(function(){
        player.play();

        setTimeout(function(){
            player.pause();
            player.currentTime = 0;
        }, sound_time*60*1000);

        if (i == 100) {
            i = 100;
            var elem = document.getElementById("myBar");
            var width = Math.round((100*sound_time)/60);
            var id = setInterval(frame, 1000);
            function frame() {
            if (width <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                width = width - 0.02;
                elem.style.width = width + "%";
            }
            }
        }
    }, 1000);
}

function updateTime(time){
    sound_time = time
}

