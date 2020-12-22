var options = [
    
    'Take a quick break and relax. Simply choose the time duration, how you would like to he notified at the end and your favourite sound. Studies shows that relaxing can help improve memory and focus.'
];

function help(){
    // alert('working');
    var randOptionNum = Math.floor(Math.random() * options.length);
    document.getElementById('cardhere').style.visibility = 'visible';
    document.getElementById('doThis').innerHTML = '';
    document.getElementById('doThis').innerHTML = options[randOptionNum];
    
}


