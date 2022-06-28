const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (4 + clickCounter) + (5 - ratio) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`;
        } else {
            movieList[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    })
    // console.log(movieList[i].querySelectorAll("img").length)
})
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-box,.sidebar-section,.left-menu-icon,.toggle-card');

ball.addEventListener('click', () => {
    items.forEach(items => {
        items.classList.toggle("active")
    })
    ball.classList.toggle('active')
})


