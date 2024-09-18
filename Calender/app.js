const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const allMonths= ['January', 'February', 'March', 'April', 'May','June', 'July'
,'August', 'September', 'October', 'November', 'December']

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



date.innerHTML = today.getDate();
dayinnerHTML = weekDays[today.getday()];
month.innerHTML = allMonths[date.getmonth()];
year.innerHTML = today[date.getyear()];



