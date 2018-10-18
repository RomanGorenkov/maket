$(document).ready(function() {
var hours = document.getElementById("hours");
var minutes = document.getElementById("min");
var dayOfWeek = document.getElementById("ofweek");
 
    function tick() {
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var dw = time.getDay();
        var day;
        var dayM = time.getDate();
        var month = time.getMonth();
        var year = time.getFullYear();
        
        
        
 switch(dw) {
         
         case 1:  
            day = "Mon";
            break;
         
         case 2:  
            day = "Tue";
            break;
         
         case 3:  
            day = "Wed";
            break;
         
         case 4:  
            day = "Thu";
            break;
         
         case 5:  
            day = "Fri";
            break;
         
         case 5:  
            day = "Sat";
            break;
         
         case 0:  
            day = "Sun";
            break;
 }
        if(h.toString().length == 1) {
            hours.innerHTML = "0"+h.toString() + " : ";
        }else{
            hours.innerHTML = h.toString() + " : ";
        }
        if(m.toString().length == 1){
            minutes.innerHTML = "0"+m.toString();
        }else{
            minutes.innerHTML = m.toString();
        }
        
        
        dayOfWeek.innerHTML = " ᠌ ᠌᠌ ᠌" + day.toString() + " ᠌ ᠌᠌ ᠌" + dayM + "." + month + "." + year;//допилить какой-то костыль на нолики :)
    }
    setInterval(tick,300); // что бы была точность, если допустим клиент зайдет на сайт, между сменой секунд
});