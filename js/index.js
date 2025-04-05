const timer_block = document.getElementById("timer-block");
timer_block.innerText = "timer will be shown here";

const time_elapsed_in_seconds = 0;

setInterval(()=>{
    time_elapsed_in_seconds++;
    let hours = Math.floor(time_elapsed_in_seconds/3600);
    let minutes = Math.floor((time_elapsed_in_seconds%3600)/60);
    let seconds = Math.floor(time_elapsed_in_seconds%(3600*60));
    timer_block.innerText = `${hours}hrs: ${minutes}mins: ${seconds}secs`
},1000);
