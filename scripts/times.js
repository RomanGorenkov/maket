

$(document).ready(function() {
var time = document.getElementById("time");
var day = document.getElementById("day");
var date =document.getElementById("date");

 
    function tick() {
        today = new Date();
        var timeString = today.format("HH:MM:ss");
        var dayString = today.format("ddd");
        var dateString = today.format("dd.mm.yy");

        time.innerHTML=timeString;
        day.innerHTML=dayString;
        date.innerHTML=dateString;
        
    }
    setInterval(tick,300); // что бы была точность, если допустим клиент зайдет на сайт, между сменой секунд
});