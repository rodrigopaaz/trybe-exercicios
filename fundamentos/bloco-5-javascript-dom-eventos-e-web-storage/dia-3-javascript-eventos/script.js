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
  
  window.onload = createDaysOfTheWeek();
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let weekDays = document.querySelector('.task-list')
  //for (let index of decemberDaysList){
  let daysWeek = document.createElement('ul')
  daysWeek.className = 'days'
  weekDays.appendChild(daysWeek)

  for (let index of decemberDaysList){
  if (index >= 24 && index <=25 || index === 31){
  let weekDay = document.createElement('li')
  weekDay.className = 'days holiday'
  daysWeek.appendChild(weekDay)
  weekDay.innerText = index
  }
  else if (index === 4 || index === 11 || index === 18 || index === 25 ){
    let weekDay = document.createElement('li')
    weekDay.className = 'days friday'
    daysWeek.appendChild(weekDay)
    weekDay.innerText = index
    }  
  else {
  let weekDay = document.createElement('li')
  weekDay.className = 'days'
  daysWeek.appendChild(weekDay)
  weekDay.innerText = index
  }
}
