// target thumbnail on click or keyboard event
// change hero image src and alt with clicked thumbnail info

$('.thumbnails .thumbnail').on('click', 'img', function(event){
    event.stopPropagation();
    $('.hero img').attr('src') === $(event.currentTarget).attr('src');
    $('.hero img').attr('alt') === $(event.currentTarget).attr('alt');
})