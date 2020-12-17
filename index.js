var options = [
    
    'Take a quick break and relax. Simply choose the time duration, how you would like to he notified at the end and your favourite sound. Studies shows that relaxing can help improve memory and focus.'
];


function help(){
    // alert('working');
    var randOptionNum = Math.floor(Math.random() * options.length);

    document.getElementById('doThis').innerHTML = '';
    document.getElementById('doThis').innerHTML = options[randOptionNum];
}

var opinion = [
    
    'Birds in a Costa Rican Rainforest<br>Sounds of a Mountain Stream<br>Stream in Hawaii, with cricket Sounds<br>Light Rain in central Park, New York<br>Lightining, Thunder, and Rain in the Desert<br>Waves off the California Coast'
];

function hey(){
    // alert('working');
    var randOpinionNum = Math.floor(Math.random() * opinion.length);

    document.getElementById('doHere').innerHTML = '';
    document.getElementById('doHere').innerHTML = opinion[randOpinionNum];
}
