$(document).ready(function(){
    $('.category-item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.product').addClass('hide');
            setTimeout(function(){
                $('.product').removeClass('hide');
            }, 300);
        }
        else {
            $('.product').addClass('hide');
            setTimeout(function(){
                $('.' + category).removeClass('hide');
            }, 300);
        }
    });
});