const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0; // for beginning
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 270); //movie list img width is 270px. 
        clickCounter++; // after every click of arraow  it will increase.
        if (itemNumber - (4 + clickCounter) + (5 - ratio) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movieList[i].style.transform = "translateX(0)" // it will come into original state and counter will zero
            clickCounter = 0;
        }
    })
    // console.log(movieList[i].querySelectorAll("img").length)
})
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-box,.sidebar-section,.left-menu-icon,.toggle-card,.menu-list-items');

ball.addEventListener('click', () => {
    items.forEach(items => {
        items.classList.toggle("active")
    })
    ball.classList.toggle('active')
})


