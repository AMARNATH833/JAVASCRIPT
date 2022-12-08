

document.getElementById("interval"); // To display the time in the console using setInterval function...

function myInterval(){
    let time=new Date();
    console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
}
setInterval(myInterval,1000);