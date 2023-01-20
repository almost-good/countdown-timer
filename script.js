let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let newBirthday = '29 Oct 2023'


/**
 * Function which will calculate time until next Birthday.
 */
function countdown() {
  let birthdayDate = new Date(newBirthday)
  let currentDate = new Date()

  let time = (birthdayDate - currentDate) / 1000

  let dd = Math.floor(time / 60 / 60 / 24)
  let hh = Math.floor(time / 60 / 60) % 24
  let mm = Math.floor(time / 60) % 60
  let ss = Math.floor(time) % 60

  days.innerText = dd
  hours.innerText = formatTime(hh)
  minutes.innerText = formatTime(mm)
  seconds.innerText = formatTime(ss)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 3000)