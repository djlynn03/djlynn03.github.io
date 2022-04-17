function resize(){
    var head = document.getElementById('header');
    var foot = document.getElementById('footer');
    var desc = document.getElementById('description');
    desc.style.height = window.innerHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function (event) {
    var head = document.getElementById('header');
    var foot = document.getElementById('footer');
    var desc = document.getElementById('description');
    desc.style.height = window.innerHeight + 'px';

    // array with texts to type in typewriter
    var dataText = ["Hello,", "My name is Duncan", "I like to code", "Check out some of my projects and interests:"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector("#header").innerHTML = text.substring(0, i + 1) + '<span class="cursor-blink" aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 500);
        }
    }
    function showDescription() {
        document.querySelector("#description").style.display = "block";
        document.querySelector("#description").animate([{'opacity': 0}, {'opacity': 1}], {duration: 500});
        document.querySelector("#description").style.opacity = 1;
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        // if (typeof dataText[i] == 'undefined') {
        //     setTimeout(function () {
        //         StartTextAnimation(0);
        //     }, 20000);
        // }
        // check if dataText[i] exists
        if (dataText[i] == undefined){
            showDescription();
            return;
        }
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        } else {
            showDescription();
        }
    }
    // start the text animation
    StartTextAnimation(0);

});