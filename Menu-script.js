document.addEventListener("DOMContentLoaded", function() {
    const wrappers = document.querySelectorAll(".wrapper");

    wrappers.forEach(wrapper => {
        const swiper = wrapper.querySelector(".swiper");
        const arrowBtns = wrapper.querySelectorAll("i");
        const firstClassFoodsWidth = swiper.querySelector(".class_foods").offsetWidth;
        const swiperChildren = [...swiper.children];

        let isDragging = false, startX, startScrollLeft;
        let autoplayInterval;
        const autoplayTransitionDuration = 2000;
        const autoplayScrollAmount = 3000;

        let classFoodsPreview = Math.round(swiper.offsetWidth / firstClassFoodsWidth);
        swiperChildren.slice(-classFoodsPreview).reverse().forEach(classFoods => {
            swiper.insertAdjacentHTML("afterbegin", classFoods.outerHTML);
        });
        swiperChildren.slice(0, classFoodsPreview).forEach(classFoods => {
            swiper.insertAdjacentHTML("beforeend", classFoods.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                swiper.scrollLeft += btn.dataset.id === "left" ? -firstClassFoodsWidth : firstClassFoodsWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            swiper.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = swiper.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            swiper.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            swiper.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            if(swiper.scrollLeft === 0) {
                swiper.classList.add("no-transition");
                swiper.scrollLeft = swiper.scrollWidth - (1 * swiper.offsetWidth);
                swiper.classList.remove("no-transition");
            } else if (Math.ceil(swiper.scrollLeft) === swiper.scrollWidth - swiper.offsetWidth) {
                swiper.classList.add("no-transition");
                swiper.scrollLeft = swiper.offsetWidth;
                swiper.classList.remove("no-transition");
            }
        };

        const startAutoplay = () => {
            autoplayInterval = setInterval(() => {
                swiper.scrollLeft += autoplayScrollAmount;
            }, autoplayTransitionDuration);
        };

        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        swiper.addEventListener("mousedown", dragStart);
        swiper.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        swiper.addEventListener("scroll", infiniteScroll);

        wrapper.addEventListener("mouseleave", startAutoplay);
        wrapper.addEventListener("mouseenter", stopAutoplay);

        startAutoplay();

        window.addEventListener('scroll', reveal);
    });

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

window.onload = function() {
    if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

