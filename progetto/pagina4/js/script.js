const ratingStars = [...document.getElementsByClassName("rating_star")];
const ratingResult = document.querySelector(".rating_result");


function executeRating(stars, result) {
    const starClassActive = "rating_star fas fa-star";
    const starClassUnactive = "rating_star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className.indexOf(starClassUnactive) !== -1) {
                printRatingResult(result, i + 1);
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                printRatingResult(result, i);
                for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
            }
        };
    });
}

function printRatingResult(result, num = 0) {
}


executeRating(ratingStars, ratingResult); //richiamo funzione

function inviaFeed() {
    alert('Grazie per aver inviato il tuo Feedback');

}






