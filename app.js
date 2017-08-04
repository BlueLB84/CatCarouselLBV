// target thumbnail on click or keyboard event
// change hero image src and alt with clicked thumbnail info

function handleThumbnailClicks() {
    $('.thumbnail').on('click', function(event) {
        const imgSrc = $(event.currentTarget).find('img').attr('src');
        const imgAlt = $(event.currentTarget).find('img').attr('alt');

        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    });
}

$(handleThumbnailClicks());
