//Date lev-1-1
document.write('lev-1-1<br><br>')
let newDate = new Date('september 2,2019 09:00:00')
document.write(newDate+'<br>')
document.write(new Date(0)+'<br>')
document.write(new Date(31556908800)+'<br>')
document.write(new Date(86400000)+'<br>')
document.write(new Date('1972,2,10')+'<br><br><br><hr>')


//Get Date lev-1-2
document.write('lev-1-2<br><br>')
newDate = new Date(2021,8,1,21,5,14)
let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write(newDate+'<br>')
document.write(newDate.getFullYear()+'<br>')
document.write(newDate.getMonth()+' Monat<br>')
document.write(newDate.getDate()+' Tag<br>')
document.write(newDate.getHours()+' Stunde<br>')
document.write(newDate.getMinutes()+' Minute<br>')
document.write(day[newDate.getDay()]+'<br><br><hr>')

//Set Date lev-1-2
document.write('lev-1-3<br><br>')
newDate.setDate(23);
newDate.setFullYear(2222);
newDate.setMonth(9)
newDate.setHours(13)
newDate.setMinutes(25);
newDate.setSeconds(11);
document.write(newDate+'<br><br><hr>');

//Set Date lev-1-2
document.write('lev-1-4<br><br>')
function dayInMonth(month,year) {
    return new Date(year,month,0).getDate()
}
document.write(dayInMonth(1,2016)+'<br>')
document.write(dayInMonth(2,2016)+'<br>')
document.write(dayInMonth(2,2017)+'<br>')
document.write(dayInMonth(12,2016)+'<br><br><hr>')

//Monats Name lev1-5
document.write('lev-1-5<br><br>')
let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ];
  
  function monthName(year,month,day){
    let newDate = new Date(year,month-1,day);
        return list[newDate.getMonth()]
    
  }
  document.write(monthName(2001,3,4)+'<br>')
  document.write(monthName(2019,12,24)+'<br>')
  document.write(monthName(1410,07,15)+'<br><br><hr>')


//AM PM lev1-6
document.write('lev-1-6<br><br>')
date2 = new Date(1999,10,5,15);
date3 = new Date()
date4 = new Date(2019, 12 , 3 ,12)
date5 = new Date(2000,1,1,11);
function aPm(date){
    if(date.getHours()<12){
        document.write(date+' AM<br>')
    }else{
        document.write(date+'PM<br>')
    }
}
aPm(date2)
aPm(date3)
aPm(date4)
aPm(date5)
document.write('<br><br><hr>')

//AM PM lev1-7
document.write('lev-1-7<br><br>')
function weekEnd(day,month,year){
    let day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let newDate= new Date(year,month-1,day)
if(day1[newDate.getDay()]== "Saturday"||day1[newDate.getDay()]== "Sunday"){
    document.write("In this Date: "+newDate+"// is Weekend<br>")
}else{
    document.write("In this Date: "+newDate+"// is Workday<br>")
}
}
weekEnd(15,12,2019)
weekEnd(14,2,2001)
weekEnd(2,1,2020)
weekEnd(05,9,2021)

document.write('<br><br><hr>')
