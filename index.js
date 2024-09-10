const monthName = document.querySelector('.month');
const dateNumbers = document.querySelector('.dateNumbers');
const navs = document.querySelectorAll('.navigation');

//Constant list of months in the year. 
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Initalizing date, month, and year variables. 
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

//Displays calender initally set to current month and year. 
function showCalendar(){
    const startMonth = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const endMonth = new Date(year, month, lastDay).getDay();
    const prevLastDay = new Date(year, month, 0).getDate();

    let dateNumbersHTML = '';

    //This will give the last months dates that are still in the current month.
    //for(let i = 0; i < startMonth; i--){
    //    dateNumbersHTML += `<li>${prevLastDay - i + 1}</li>`;
    //}

    for(let i = 1; i <= lastDay; i++){
        dateNumbersHTML += `<li>${i}</li>`;
    }

    dateNumbers.innerHTML = dateNumbersHTML;
    monthName.textContent = months[month] + ' ' + year;
}

showCalendar();