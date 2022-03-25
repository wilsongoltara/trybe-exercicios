const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

function createDaysOFCalendar(days) {
  const daysList = document.getElementById('days');

  for (let index = 0; index < days.length; index += 1) {
    const dayListItem = document.createElement('li');
    const day = days[index];
    dayListItem.classList = 'day';
    dayListItem.innerHTML = day;
  
    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem);
  }
};
createDaysOFCalendar(dezDaysList);

function createHolidayButton(buttonName) {
  const containerButtons = document.querySelector('.buttons-container');
  const btnHolidays = document.createElement('button');
  btnHolidays.setAttribute('id', 'btn-holiday');
  btnHolidays.innerHTML = buttonName;
  
  containerButtons.appendChild(btnHolidays);
};
createHolidayButton('Feriados');

function showHolidays() {
  const buttonHolidays = document.getElementById('btn-holiday');
  const holidays = document.getElementsByClassName('holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const setNewColor = 'white';
  buttonHolidays.addEventListener('click', () => {
    for (let holiday of holidays) {
      if (holiday.style.backgroundColor === setNewColor) {
        holiday.style.backgroundColor = backgroundColor;
      } else {
        holiday.style.backgroundColor = setNewColor;
      }
    }
  });
};
showHolidays();

