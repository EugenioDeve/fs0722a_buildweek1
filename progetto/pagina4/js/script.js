var starRatings = document.querySelectorAll('.star-rating');
for (var index = 0; index < starRatings.length; index++) {
    var starRating = starRatings[index],
        fullStars = starRating.querySelector('.full-stars'),
        rating = parseFloat(starRating.dataset.rating) || 0,
        percentWidth = rating * 20;
    fullStars.style.width = percentWidth + '%';
}