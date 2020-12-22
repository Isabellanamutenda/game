var opinions= [
    
    '<p class="button-sound">Birds in a Costa Rican Rainforest</p><p class="button-sound">Sounds of a Mountain Stream</p><br><p class="button-sound">Stream in Hawaii, with cricket Sounds</p><br><p class="button-sound">Light Rain in central Park, New York</p><br><p class="button-sound">Lightining, Thunder, and Rain in the Desert</p><br><p class="button-sound">Waves off the California Coast</p>'
];

function hey(){
    // alert('hi');
    var randOpinionNum = Math.floor(Math.random() * opinions.length);
    document.getElementById('cardthere').style.visibility = 'visible';
    document.getElementById('doHere').innerHTML = '';
    document.getElementById('doHere').innerHTML = opinions[randOpinionNum];
}

