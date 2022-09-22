var models = [ 
    {
        name : 'BMW M5 E60', 
        img : 'images/bmw-e60.jpg',
        link : 'https://www.bmwblog.com/2022/03/21/bmw-m5-e60-autobahn-high-speed/'
    },
    {
        name : 'BMW M4 F82', 
        img : 'images/bmw-m4.jpg',
        link : 'https://machineswithsouls.com/2022/03/14/the-bmw-f82-m4-buyers-guide/'
    },
    {
        name : 'BMW M5 F90', 
        img : 'images/bmw-f90.jpg',
        link : 'https://www.evo.co.uk/bmw/m5'
    },
    {
        name : 'BMW M8 Competition', 
        img : 'images/bmw-m8.jpg',
        link : 'https://www.bmw-m.com/en/topics/magazine-article-pool/bmw-m8-bmw-m8-competition-automobile-2022.html'
    },
    {
        name : 'BMW X5 M50', 
        img : 'images/BMW-X5-00.jpg',
        link : 'https://www.edmunds.com/bmw/x5/2021/m50i/'
    }
];

var index = 0;
var slideCount = models.length;
var interval;

var settings = {
    duration: 2000,
    random : false
};

// showSlide(index);  artıq init olduğu üçün buna lazım olmayacaq çünki setinterval var
init(settings);

document.querySelector(".fa-circle-arrow-left").addEventListener("click", ()=>{
    index--;
    showSlide(index);
});

document.querySelector(".fa-circle-arrow-right").addEventListener("click", ()=>{
    index++;
    showSlide(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseenter', ()=>{
       clearInterval(interval);
    });
});
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener('mouseleave', ()=>{
       init(settings);
    });
});

function init(settings){
    
    var previous;

   interval = setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == previous) 
            previous = index;
        } else{
            // growing index
            if(slideCount == index+1){
                index = -1;
            } 
            showSlide(index);
            index++;
        }
    
        showSlide(index);

    },settings.duration)
}

function showSlide(i){

    index = i;
    
    if(i < 0){
        index = slideCount - 1;
    }
    if ( i >= slideCount) {
        index = 0;
    } 

    document.querySelector('.card-title').textContent = models[index].name;
    
    document.querySelector('.card-link').setAttribute('href', models[index].link);
    
    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
};