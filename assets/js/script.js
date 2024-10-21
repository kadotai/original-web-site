const first = document.getElementsByClassName('ul_li');
for(let i = 0; i < first.length; i++){
    first[i].addEventListener('mouseover', function() {
        this.style.background= 'gray';
    });
    first[i].addEventListener('mouseout', function() {
        this.style.background= '';
    });
};

const second = document.getElementsByClassName('j');
for(let i = 0; i < second.length; i++){
    second[i].addEventListener('mouseover', function() {
        this.style.background= '#ececec';
    });
    second[i].addEventListener('mouseout', function() {
        this.style.background= '';
    });
};

const third = document.getElementsByClassName('kizi');
for(let i = 0; i < third.length; i++){
    third[i].addEventListener('mouseover', function() {
        this.style.background= '#ececec';
    });
    third[i].addEventListener('mouseout', function() {
        this.style.background= '';
    });
};

const fourth = document.getElementById('button');
fourth.addEventListener('mouseover', function() {
    this.style.background= 'pink';
});
fourth.addEventListener('mouseout', function() {
    this.style.background= '';
});

$(function(){
    $('#think').on('click',function(){
        $(this).nextAll().slideToggle();
    });

    $('#watch').on('click',function(){
        $(this).nextAll().slideToggle();
    });

    $('#summary').on('click',function(){
        $(this).nextAll().slideToggle();
    });

    $('#learn').on('click',function(){
        $(this).nextAll().slideToggle();
    });
});
