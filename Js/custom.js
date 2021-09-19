$(document).ready(function () {
    $('.Info ul li').click(function (e) { 
        $(this).addClass("active").siblings(this).removeClass('active');
        let Myp=".Info ."+ $(this).text();
        console.log(Myp);
        $(Myp).addClass("show").siblings(this).removeClass('show');
        
    });
});