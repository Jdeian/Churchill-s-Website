window.addEventListener('DOMContentLoaded', function () {

    function scrollToSection(target) {
        var headerHeight = document.querySelector('.sections-container').offsetHeight;
        var scrollPosition = target.offsetTop - headerHeight;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }

    window.onload = function() {
        if (!window.location.hash) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            history.replaceState(null, null, ' ');
        }
    };

    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        var target = document.getElementById(hash);
        if (target) {
            scrollToSection(target);
        }
    }

    var homeLink = document.querySelector('.home');
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var aboutLink = document.querySelector('.about');
    aboutLink.addEventListener('click', function() {
        var aboutContents = document.querySelector('.about_recBG1');
        var scrollPosition = aboutContents.offsetTop - 5;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    });

    var testimonialsLink = document.querySelector('.testimonials');
    testimonialsLink.addEventListener('click', function() {
        var testimonialsContents = document.querySelector('.testimonials_container');
        var scrollPosition = testimonialsContents.offsetTop - 20;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    });

    function reveal() {
        var screenWidth = window.innerWidth;
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++) {
            var windowweight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowweight - revealpoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }

        if (screenWidth > 700) {
            var aboutContents = document.querySelector('.about_contents');
            aboutContents.classList.add('reveal');
        } else {
            var aboutContents = document.querySelector('.about_contents');
            aboutContents.classList.remove('reveal');
        }
    }

    window.addEventListener('scroll', reveal);

    reveal();

    document.querySelectorAll('.class_foods').forEach(item => {
        item.addEventListener('mouseover', event => {
            const rating = item.querySelector('.rating');
            const price = item.querySelector('.price');
            const foodName = item.querySelector('.food_name');
            const description = item.querySelector('.description');
            rating.style.transform = 'translateY(0)';
            price.style.transform = 'translateY(0)';
            foodName.style.transform = 'translateY(-200%)';
            description.style.transform = 'translateY(-100%)';
        });

        item.addEventListener('mouseout', event => {
            const rating = item.querySelector('.rating');
            const price = item.querySelector('.price');
            const foodName = item.querySelector('.food_name');
            const description = item.querySelector('.description');
            rating.style.transform = 'translateY(500%)';
            price.style.transform = 'translateY(500%)';
            foodName.style.transform = 'translateY(0)';
            description.style.transform = 'translateY(0)';
        });
    });
    

});

