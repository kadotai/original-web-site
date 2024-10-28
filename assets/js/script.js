const first = document.getElementsByClassName('ul_li');
for(let i = 0; i < first.length; i++){
    first[i].addEventListener('mouseover', function() {
        this.style.background= 'gray';
    });
    first[i].addEventListener('mouseout', function() {
        this.style.background= '';
    });
};

const second = document.getElementsByClassName('small_box');
for(let i = 0; i < second.length; i++){
    second[i].addEventListener('mouseover', function() {
        this.style.background= '#ececec';
    });
    second[i].addEventListener('mouseout', function() {
        this.style.background= '';
    });
};

const third = document.getElementsByClassName('article');
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

// Display Function
$(function(){
    $('#think').on('click',function(){
        const boxContainer = document.getElementById("first_box");
        console.log(boxContainer);
        $(this).nextAll().slideToggle();
        boxContainer.style.display = "flex";
    });

    $('#watch').on('click',function(){
        const boxContainer_2 =document.getElementById("second_box");
        console.log(boxContainer_2);
        $(this).nextAll().slideToggle();
        boxContainer_2.style.display = "flex";
    });

    $('#summary').on('click',function(){
        $(this).nextAll().slideToggle();
    });

    $('#learn').on('click',function(){
        $(this).nextAll().slideToggle();
    });
});
