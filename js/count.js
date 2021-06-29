
var totalnumbers = 0;
var breakScroll = false;

var service = [];
var experience = [];
var work = [];

document.addEventListener('load', function() {
     ScrollCount.Const();
}, true);


document.addEventListener('scroll', function() {
    ScrollCount.OnScroll();
}, true);



class ScrollCount
{


    static Const()
    {

        let footer = document.querySelector('#footerSection').offsetTop;
        let numbers = document.querySelector('#footerSection .numbers').offsetTop;
        totalnumbers = footer + numbers;
    }

    static OnScroll()
    {
         if (window.pageYOffset >= totalnumbers-400 && totalnumbers != 0) {
            if(breakScroll == false){
                this.counting();
                breakScroll = true;
            }
        }
    }

    static counting()
    {
        let gestion = document.querySelector('#numberGestion');
        let service =  document.querySelector('#numberService');
        let experience =  document.querySelector('#numberExperience');

        let maxGestion = 10;
        let maxService = 50;
        let maxExperience = 6;

        let breakGestion = false;
        let breakService = false;
        let breakExperience = false;

        var i = 0
        var interval = setInterval(function(){
            if(breakGestion == false){
                gestion.innerHTML = i;
                if(i == maxGestion){
                    breakGestion = true;
                }
            }
            if(breakService == false){
                service.innerHTML = i;
                if(i == maxService){
                    breakService = true;
                }
            }
            if(breakExperience == false){
                experience.innerHTML = i;
                if(i == maxExperience){
                    breakExperience = true;
                }
            }

            if( breakGestion == true && 
                breakService == true && 
                breakExperience == true){
                clearInterval(interval);
            } 
            i=i+1;
        }, 100);

        
    }

}

