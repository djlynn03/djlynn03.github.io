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

    var dataText = ["Hello,", "My name is Duncan", "I like to code", "Check out some of my projects and interests:"];

    function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector("#header").innerHTML = text.substring(0, i + 1) + '<span class="cursor-blink" aria-hidden="true"></span>';

            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 30);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 450);
        }
    }
    function showDescription() {
        document.querySelector("#description").style.display = "block";
        document.querySelector("#description").animate([{'opacity': 0}, {'opacity': 1}], {duration: 500});
        document.querySelector("#description").style.opacity = 1;
    }
    function StartTextAnimation(i) {

        if (dataText[i] == undefined){
            showDescription();
            return;
        }
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1);
            });
        } else {
            showDescription();
        }
    }
    StartTextAnimation(0);

});