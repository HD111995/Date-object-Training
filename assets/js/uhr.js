newDate =new Date(Date.now())
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById("day").innerHTML = day[newDate.getDay()].slice(-10,3)
document.getElementById("hour").innerHTML = newDate.getHours()
document.getElementById("min").innerHTML = newDate.getMinutes()
document.getElementById("sec").innerHTML = newDate.getSeconds()
if (newDate.getHours<12){
    document.getElementById("ap").innerHTML = 'AM'
}else{
    document.getElementById("ap").innerHTML = 'PM'
}