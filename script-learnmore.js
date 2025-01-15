document.addEventListener('DOMContentLoaded', function () {
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');


    for(var i=0; i<reveals.length; i++){

        var windowweight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowweight - revealpoint) {
            reveals[i].classList.add('active');
        }

        else {
            reveals[i].classList.remove('active');
        }

    }
}

});

window.onload = function() {
    if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};